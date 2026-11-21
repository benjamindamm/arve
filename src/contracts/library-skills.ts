import { createHash } from 'node:crypto'
import { constants } from 'node:fs'
import { lstat, open, readdir, realpath } from 'node:fs/promises'
import path from 'node:path'
import { shadcnReferenceRevision } from './current-reference'

export type LibrarySkillPackage = { library: string; revision: string; packageRoot: string; documentationSystem?: string }

// Explicitly registered portable packages only. No repository fallback or folder discovery.
const shadcnRevision = '65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26'
export const librarySkillPackages: readonly LibrarySkillPackage[] = [{
  library: 'shadcn', revision: shadcnReferenceRevision, documentationSystem: 'shadcn',
  packageRoot: path.join(process.cwd(), 'src/contracts/libraries/shadcn', shadcnReferenceRevision, 'package'),
}, {
  library: 'shadcn', revision: 'bde7fffabf50d7983ea8a2bf0bdabdb09dd9a83537825c744af5f309db5edf91', documentationSystem: 'shadcn',
  packageRoot: path.join(process.cwd(), 'src/contracts/libraries/shadcn/bde7fffabf50d7983ea8a2bf0bdabdb09dd9a83537825c744af5f309db5edf91/package'),
}, {
  library: 'shadcn', revision: shadcnRevision, documentationSystem: 'shadcn',
  packageRoot: path.join(process.cwd(), 'src/contracts/libraries/shadcn', shadcnRevision, 'package'),
}]

export class LibrarySkillError extends Error {
  code: string
  constructor(code: string, message: string) {
    super(message)
    this.code = code
    this.name = 'LibrarySkillError'
  }
}
const fail = (code: string, message: string): never => { throw new LibrarySkillError(code, message) }
const hash = (bytes: Buffer | string) => createHash('sha256').update(bytes).digest('hex')
const validPath = (value: string) => value.length > 0 && !/[\\\0:%?#]/.test(value) &&
  !path.posix.isAbsolute(value) && value.split('/').every(part => part && part !== '.' && part !== '..')
const sha256 = /^[a-f0-9]{64}$/

function selectPackage(library: string, revision: string | undefined, registry: readonly LibrarySkillPackage[]) {
  const packages = registry.filter(item => item.library === library)
  if (!packages.length) return fail('UNKNOWN_LIBRARY', 'Unknown library; select an explicitly registered contract library.')
  if (revision !== undefined && !packages.some(item => item.revision === revision)) {
    return fail('UNKNOWN_REVISION', 'Unknown export revision for the selected library.')
  }
  return packages.filter(item => revision === undefined || item.revision === revision)
}

async function readPackage(binding: LibrarySkillPackage) {
  try {
    const root = path.resolve(binding.packageRoot)
    if (!(await lstat(root)).isDirectory() || await realpath(root) !== root) throw new Error('Unsafe package root')
    const files = new Map<string, Buffer>()
    async function collect(directory = '') {
      for (const entry of await readdir(path.join(root, directory), { withFileTypes: true })) {
        const relative = directory ? directory + '/' + entry.name : entry.name
        if (!validPath(relative)) throw new Error('Unsafe package path')
        const absolute = path.join(root, relative)
        if (entry.isDirectory()) {
          if (!(await lstat(absolute)).isDirectory() || await realpath(absolute) !== absolute) throw new Error('Unsafe directory')
          await collect(relative)
        } else if (entry.isFile()) {
          if (await realpath(absolute) !== absolute) throw new Error('Unsafe file')
          const file = await open(absolute, constants.O_RDONLY | constants.O_NOFOLLOW)
          try {
            if (!(await file.stat()).isFile()) throw new Error('Not a regular file')
            files.set(relative, await file.readFile())
          } finally { await file.close() }
        } else throw new Error('Symlinks and special files are forbidden')
      }
    }
    await collect()
    const manifestBytes = files.get('manifest.json')
    if (!manifestBytes) throw new Error('Missing manifest')
    const manifest = JSON.parse(manifestBytes.toString('utf8'))
    if (manifest.format !== 'ui-contracts-export/v1' || manifest.library !== binding.library || manifest.revision !== binding.revision ||
      !manifest.files || typeof manifest.files !== 'object' || Array.isArray(manifest.files)) throw new Error('Invalid manifest identity')
    const entries = Object.entries(manifest.files).sort(([a], [b]) => Buffer.compare(Buffer.from(a), Buffer.from(b)))
    if (!entries.length || entries.length !== files.size - 1 || hash(JSON.stringify(entries)) !== binding.revision) throw new Error('Invalid export revision or file inventory')
    for (const [name, digest] of entries) {
      if (!validPath(name) || name === 'manifest.json' || typeof digest !== 'string' || !sha256.test(digest) ||
        !files.has(name) || hash(files.get(name)!) !== digest) throw new Error('Invalid package checksum')
    }
    if (!files.has('library/library.json') || !files.has('dependencies.json')) throw new Error('Missing package entry points')
    const index = JSON.parse(files.get('library/library.json')!.toString('utf8'))
    if (!index.components || typeof index.components !== 'object' || Array.isArray(index.components)) throw new Error('Invalid library index')
    const componentPages = Object.entries(index.components).map(([label, definition]) => {
      if (typeof definition !== 'string' || !/^components\/[a-z][a-z0-9-]*\/component\.json$/.test(definition) || !files.has('library/' + definition)) throw new Error('Invalid component binding')
      return { label, definitionResourcePath: 'library/' + definition, component: definition.split('/')[1],
        ...(binding.documentationSystem ? { tool: 'get_component_page', arguments: { system: binding.documentationSystem, component: definition.split('/')[1] } } : {}) }
    })
    const mains = entries.map(([name]) => name).filter(name => /^skills\/[a-z][a-z0-9-]*\/SKILL\.md$/.test(name))
    if (!mains.length) throw new Error('No portable skill entry point')
    const skills = mains.map(main => {
      const id = main.split('/')[1]
      const resources = ['manifest.json', 'library/library.json', ...entries.map(([name]) => name).filter(name => name.startsWith(`skills/${id}/`))]
        .map(resourcePath => ({ resourcePath, sha256: hash(files.get(resourcePath)!), role: resourcePath === main ? 'main' : resourcePath.startsWith('skills/') ? 'reference' : 'package-entry' }))
      return { id, mainResourcePath: main, resources }
    })
    return { binding, files, skills, componentPages }
  } catch {
    // Do not disclose local absolute paths or internal filesystem failures via MCP.
    return fail('INVALID_PACKAGE', 'Portable skill package is incomplete, unsafe, or fails manifest identity/revision/SHA256 verification.')
  }
}

export async function listLibrarySkills(library: string, revision?: string, registry = librarySkillPackages) {
  const packages = await Promise.all(selectPackage(library, revision, registry).map(readPackage))
  return { library, exports: packages.map(({ binding, skills, componentPages }) => ({ revision: binding.revision, format: 'ui-contracts-export/v1', skills, componentPages })),
    usage: { readTool: 'get_library_skill', pin: ['library', 'revision', 'skill'], relativeLinks: 'Resolve relative links against the directory of the current resourcePath using POSIX path normalization, then request the exact discovered resourcePath. Only listed resources are readable.', componentPages: 'Use get_component_page arguments only when an explicit documentation-system binding is listed; otherwise select a published documentation system separately. Check the returned contractReference library and revision: published component pins may differ from this skill export. Definition paths in the index are bindings, not skill resources.' } }
}

export async function getLibrarySkill(library: string, revision: string, skill: string, resourcePath?: string, registry = librarySkillPackages) {
  const [binding] = selectPackage(library, revision, registry)
  if (resourcePath !== undefined && !validPath(resourcePath)) return fail('INVALID_RESOURCE_PATH', 'Use an exact package-relative resourcePath from list_library_skills; traversal and encoded paths are forbidden.')
  const { files, skills } = await readPackage(binding)
  const selected = skills.find(item => item.id === skill)
  if (!selected) return fail('UNKNOWN_SKILL', 'Unknown skill in the selected library export revision.')
  const requested = resourcePath ?? selected.mainResourcePath
  const resource = selected.resources.find(item => item.resourcePath === requested)
  if (!resource) return fail('UNKNOWN_RESOURCE', 'Unknown or disallowed resource for this skill; use an exact resourcePath from list_library_skills.')
  const bytes = files.get(requested)!
  const content = bytes.toString('utf8')
  if (!Buffer.from(content).equals(bytes) || content.includes('\0')) return fail('UNSUPPORTED_RESOURCE', 'Skill resource is not UTF-8 text.')
  return { library, revision, skill, ...resource, resourceBase: path.posix.dirname(requested), relativeLinks: 'Resolve against resourceBase, normalize within the package, then pass the exact allowlisted resourcePath to get_library_skill with the same library, revision and skill.', mediaType: requested.endsWith('.json') ? 'application/json' : requested.endsWith('.md') ? 'text/markdown' : 'text/plain', content }
}
