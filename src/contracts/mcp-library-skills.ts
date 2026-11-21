/** Compact MCP discovery: select registered metadata before verifying selected packages. */
import { librarySkillPackages, LibrarySkillError, listLibrarySkills, type LibrarySkillPackage } from './library-skills'
import { shadcnReferenceRevision } from './current-reference'

export async function compactLibrarySkills(library: string, revision: string | undefined, offset = 0, limit = 1, registry: readonly LibrarySkillPackage[] = librarySkillPackages) {
  const registered = registry.filter(binding => binding.library === library)
  if (!registered.length) throw new LibrarySkillError('UNKNOWN_LIBRARY', 'Unknown library; select an explicitly registered contract library.')
  if (revision !== undefined && !registered.some(binding => binding.revision === revision)) {
    throw new LibrarySkillError('UNKNOWN_REVISION', 'Unknown export revision for the selected library.')
  }
  const candidates = registered.filter(binding => revision === undefined || binding.revision === revision)
  if (!Number.isInteger(offset) || offset < 0 || offset > candidates.length || !Number.isInteger(limit) || limit < 1 || limit > 3) {
    throw new LibrarySkillError('INVALID_RANGE', 'Offset must be within the export inventory; limit must be 1..3.')
  }
  const selected = candidates.slice(offset, offset + limit)
  const exports = await Promise.all(selected.map(async binding => {
    // The existing reader verifies every file, including unrelated component artifacts.
    // No verification cache: each selected export still incurs its full package scan.
    const result = await listLibrarySkills(library, binding.revision, [binding])
    const { componentPages, ...item } = result.exports[0]
    const indexSkill = item.skills.find(skill => skill.resources.some(resource => resource.resourcePath === 'library/library.json'))!
    const indexResource = indexSkill.resources.find(resource => resource.resourcePath === 'library/library.json')!
    return { ...item, currentReference: library === 'shadcn' && item.revision === shadcnReferenceRevision,
      componentPages: { count: componentPages.length,
        index: { tool: 'get_library_skill', arguments: { library, revision: item.revision, skill: indexSkill.id, resourcePath: indexResource.resourcePath, sha256: indexResource.sha256 } },
        ...(binding.documentationSystem ? { documentationSystem: binding.documentationSystem, tool: 'get_component_page', componentIdSource: 'Read components in the pinned library index. For each definition path components/<component>/component.json, pass <component> as component and documentationSystem as system.' } : {}),
      },
    }
  }))
  const nextOffset = offset + exports.length < candidates.length ? offset + exports.length : null
  return { library, view: 'compact', exports,
    usage: { readTool: 'get_library_skill', pin: ['library', 'revision', 'skill'], relativeLinks: 'Resolve relative links against the current resourcePath directory; only listed resources are readable.',
      componentPages: 'Follow the pinned index for component IDs. Use get_component_page only with the explicit documentationSystem binding; otherwise discover a documentation system separately. Check returned contractReference: published component revisions may differ. Definition paths are not skill resources.',
      verification: 'Only exports on this page are read. Every selected export still verifies its complete package manifest and all file checksums; large packages can take substantial time. No verification cache is used.' },
    pagination: { offset, limit, total: candidates.length, nextOffset },
    omissions: [...(nextOffset !== null || offset > 0 ? ['Other registered exports; paginate or select an explicit revision.'] : []), 'Component bindings are summarized; follow each pinned library index for the complete inventory.'],
    ...(nextOffset !== null ? { next: { tool: 'list_library_skills', arguments: { library, ...(revision ? { revision } : {}), offset: nextOffset, limit } } } : {}),
  }
}
