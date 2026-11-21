/** MCP-only projections. Portal data and the full compatibility view remain unchanged. */
import { createHash } from 'node:crypto'
import { constants } from 'node:fs'
import { lstat, open, realpath } from 'node:fs/promises'
import path from 'node:path'
import { contractArtifactPath } from '../contracts/catalog'
import type { getComponentPage } from './component-pages'

type Component = NonNullable<Awaited<ReturnType<typeof getComponentPage>>>
export const digest = (value: string | Buffer) => createHash('sha256').update(value).digest('hex')
export const snapshotOf = (value: unknown) => digest(JSON.stringify(value))
export class ReadError extends Error { constructor(public code: string, message: string) { super(message) } }
export function assertSnapshot(value: unknown, expected: string) {
  if (snapshotOf(value) !== expected) throw new ReadError('SNAPSHOT_MISMATCH', 'Published content changed. Read the compact page again and use its new snapshot; historical CMS snapshots are not served.')
}
/** Offsets count Unicode code points, never UTF-8 bytes or UTF-16 halves. Hash covers the complete UTF-8 resource. */
export function textChunk(content: string, offset = 0, limit = 6000) {
  const points = Array.from(content)
  if (!Number.isInteger(offset) || offset < 0 || offset > points.length || !Number.isInteger(limit) || limit < 1 || limit > 12000) throw new ReadError('INVALID_RANGE', 'offset must be within the resource; limit must be 1..12000 Unicode code points.')
  const end = Math.min(points.length, offset + limit)
  return { content: points.slice(offset, end).join(''), sha256: digest(content), total: points.length, totalBytes: Buffer.byteLength(content), offset, limit, offsetUnit: 'unicode-code-points', nextOffset: end < points.length ? end : null, complete: offset === 0 && end === points.length }
}
function plain(value: unknown): string {
  if (typeof value === 'string') return value
  if (typeof value === 'number' || typeof value === 'boolean') return String(value)
  if (Array.isArray(value)) return value.map(plain).filter(Boolean).join('\n')
  if (!value || typeof value !== 'object') return ''
  const node = value as Record<string, unknown>
  // Lexical structural fields carry no editorial wording. Keep all human strings from other blocks, including scope/limits/source.
  return Object.entries(node).filter(([key]) => !['id','type','version','format','indent','direction','mode','detail','blockType'].includes(key))
    .map(([key, child]) => { const text = plain(child); return text ? (['children','root','body','text'].includes(key) ? text : `${key}: ${text}`) : '' }).filter(Boolean).join('\n')
}
export function pageSections(page: Record<string, unknown>) {
  const entries: { id: string; source: string; key?: string; title: string; text: string; sha256: string }[] = []
  for (const key of ['content','templateSections'] as const) {
    const values = page[key]
    if (Array.isArray(values)) values.forEach((value, index) => {
      const text = plain(value)
      const block = value as {blockName?: string; title?: string; label?: string; body?: {root?: {children?: {type?: string; children?: unknown[]}[]}}}
      const heading = block.body?.root?.children?.find(node => node.type === 'heading')
      const headingText = (node: unknown): string => {
        if (!node || typeof node !== 'object') return ''
        const value = node as {text?: string; children?: unknown[]}
        return value.text ?? value.children?.map(headingText).join('') ?? ''
      }
      const title = (block.title ?? block.label ?? headingText(heading)) || text.split('\n')[0]
      entries.push({ id: `${key}-${index}-${snapshotOf(value).slice(0,12)}`, source: `${key}[${index}]`, ...(block.blockName ? {key: block.blockName} : {}), title: Array.from(title).slice(0,120).join(''), text, sha256: digest(text) })
    })
  }
  // Layout examples and resource/pattern catalogs may store guidance outside content.
  const extra = Object.fromEntries(Object.entries(page).filter(([key]) => !['content','templateSections','system','component','path','pageUrl','kind','title','summary','updatedAt','pageType'].includes(key)))
  if (Object.keys(extra).length) { const text = plain(extra); entries.push({ id: `metadata-${snapshotOf(extra).slice(0,12)}`, source: 'metadata', key: 'metadata', title: 'Zusätzliche Angaben', text, sha256: digest(text) }) }
  return entries
}
export function compactDocumentation(page: Record<string, unknown>, args: Record<string, unknown>, offset = 0, limit = 4) {
  const snapshot = snapshotOf(page)
  const sections = pageSections(page)
  if (offset > sections.length) throw new ReadError('INVALID_RANGE','Section offset is beyond the section inventory.')
  let remaining = 4000
  const previews = sections.slice(offset, offset + limit).map(section => {
    const chunk = textChunk(section.text, 0, Math.max(1, Math.min(1000, remaining)))
    remaining -= Array.from(chunk.content).length
    return { id: section.id, key: section.key, title: section.title, source: section.source, ...chunk, read: { tool: 'get_documentation_section', arguments: { ...args, snapshot, sectionId: section.id, offset: 0, limit: 6000 } }, ...(chunk.nextOffset !== null ? { next: { tool: 'get_documentation_section', arguments: { ...args, snapshot, sectionId: section.id, offset: chunk.nextOffset, limit: 6000 } } } : {}) }
  })
  const nextOffset = offset + previews.length < sections.length ? offset + previews.length : null
  return { view: 'compact', ...Object.fromEntries(['kind','path','pageUrl','title','summary','updatedAt','pageType'].filter(key => key in page).map(key => [key,page[key]])), snapshot,
    readingScope: 'Plain-text previews of source blocks, in source order. Wording and applicability are not summarized. Previews and section pages may be incomplete; read every continuation needed for a decision. Structured source remains available with view=full.',
    sections: previews, pagination: { offset, limit, total: sections.length, nextOffset },
    omissions: ['Original rich-text structure and non-text values', ...(previews.some(s => !s.complete) ? ['Remainder of previewed sections; follow section next calls'] : []), ...(nextOffset !== null || offset > 0 ? ['Sections outside this page'] : [])],
    ...(nextOffset !== null ? { next: { tool: 'get_documentation_page', arguments: { ...args, snapshot, offset: nextOffset, limit } } } : {}),
    full: { tool: 'get_documentation_page', arguments: { ...args, view: 'full' } } }
}
export function compactComponent(page: Component, requestUrl: string) {
  const snapshot = snapshotOf(page)
  const contract = page.contract
  const argumentsBase = { system: page.system, component: page.component, snapshot, revision: contract?.revision }
  const read = (domain: string) => ({ tool: 'get_component_domain', arguments: { ...argumentsBase, domain, offset: 0, limit: 6000 } })
  const guidance = compactDocumentation({ content: page.content, templateSections: page.templateSections }, { system: page.system, section: page.component })
  return { view: 'compact', system: page.system, component: page.component, title: page.title, summary: page.summary, updatedAt: page.updatedAt,
    pageUrl: new URL(page.path,requestUrl).href, snapshot, contractReference: page.contractReference,
    contract: contract ? { library: contract.library, component: contract.component, revision: contract.revision, origin: contract.origin, status: contract.status, sources: contract.sources } : null,
    nextSteps: page.nextSteps, catalogue: page.catalogue,
    guidance: { inventory: pageSections({ content: page.content, templateSections: page.templateSections }).map(section => ({ id: section.id, source: section.source, key: section.key, title: section.title, total: Array.from(section.text).length, sha256: section.sha256, read: { tool: 'get_component_domain', arguments: { ...argumentsBase, domain: 'guidance', sectionId: section.id, offset: 0, limit: 6000 } } })), readingScope: guidance.readingScope, sections: guidance.sections.slice(0,2).map(section => ({ id: section.id, source: section.source, content: Array.from(section.content).slice(0,500).join(''), complete: section.total <= 500, total: section.total })), read: read('guidance') },
    platform: { publishedCount: page.implementations.length, entries: page.implementations.slice(0,2), remaining: Math.max(0,page.implementations.length-2), revisionMatch: page.implementations.map(item => ({ name: item.name, matchesPageContract: item.contract?.revision ? item.contract.revision === contract?.revision : null })), scope: 'Only published implementation records are evidence. Empty records do not establish external unavailability. Framework references and demos do not prove component coverage.', read: read('platform') },
    domains: ['guidance','platform','contract','files',...Object.keys(contract?.sources ?? {})].map(domain => ({ domain, ...read(domain) })),
    omissions: ['Full guidance and remaining sections/characters: follow guidance.read before treating this as an applicability review','Source file contents (including shared tokens and stories)','Full artifact inventory, visual comparisons, demos and framework references; use the domain reads or full view'],
    full: { tool: 'get_component_page', arguments: { system: page.system, component: page.component, view: 'full' } } }
}
export function componentDomain(page: Component, domain: string, sectionId?: string) {
  if (sectionId) {
    if (domain !== 'guidance') throw new ReadError('INVALID_SECTION','sectionId is supported only for the guidance domain.')
    const section = pageSections({ content: page.content, templateSections: page.templateSections }).find(item => item.id === sectionId)
    if (!section) throw new ReadError('UNKNOWN_SECTION','Use a guidance sectionId from the compact component page.')
    return section.text
  }
  const contract = page.contract
  if (domain === 'guidance') return { nextSteps: page.nextSteps, catalogue: page.catalogue, sections: pageSections({ content: page.content, templateSections: page.templateSections }) }
  if (domain === 'platform') return { implementations: page.implementations, referenceFrameworks: page.referenceFrameworks, demo: page.demo, scope: 'Framework references and demos do not prove component coverage. Compare implementation and page revisions and the recorded verification scope.' }
  if (domain === 'contract') return contract ? { ...contract, files: undefined, artifacts: undefined, styleAssets: undefined, deferredFiles: undefined } : null
  if (domain === 'files') return { artifacts: page.contractArtifacts, styleAssets: page.styleAssets }
  const source = contract?.sources[domain]
  if (!source) throw new ReadError('UNKNOWN_DOMAIN','Use a domain listed by get_component_page.')
  return { domain, path: source, sha256: page.contractArtifacts.find(file => file.path === source)?.sha256, read: { tool: 'get_component_file', arguments: { system: page.system, component: page.component, snapshot: snapshotOf(page), revision: contract!.revision, path: source, offset: 0, limit: 6000 } } }
}
export async function componentFile(page: Component, name: string, expectedHash?: string) {
  if (!name || /[\\\0:%?#]/.test(name) || path.posix.isAbsolute(name) || name.split('/').some(part => !part || part === '.' || part === '..')) throw new ReadError('INVALID_FILE_PATH','Use an exact registered artifact path; encoded paths and traversal are forbidden.')
  const artifact = page.contractArtifacts.find(file => file.path === name)
  if (!artifact || !page.contract) throw new ReadError('UNKNOWN_FILE','File is not registered in this component contract.')
  if (expectedHash && expectedHash !== artifact.sha256) throw new ReadError('HASH_MISMATCH','Expected hash differs from the registered artifact.')
  let bytes: Buffer
  const embedded = page.contract.files[name]
  if (embedded) bytes = Buffer.from(embedded.content)
  else {
    const filename = contractArtifactPath(page.contract,name)
    if (!filename) throw new ReadError('FILE_UNAVAILABLE','Registered file is unavailable.')
    // Check every path ancestor as well as the leaf to prevent registered paths crossing symlinks.
    if (await realpath(filename) !== filename || !(await lstat(filename)).isFile()) throw new ReadError('UNSAFE_FILE','Registered file is unsafe.')
    const handle = await open(filename, constants.O_RDONLY | constants.O_NOFOLLOW)
    try { bytes = await handle.readFile() } finally { await handle.close() }
  }
  if (digest(bytes) !== artifact.sha256) throw new ReadError('HASH_MISMATCH','Registered file failed SHA256 verification.')
  const content = bytes.toString('utf8')
  if (!Buffer.from(content).equals(bytes) || content.includes('\0')) throw new ReadError('UNSUPPORTED_FILE','Only UTF-8 text files can be read through this tool; binary artifacts use the published download link.')
  return content
}
