import {publicUrl} from './public-url'
import type { Entry } from './published-documentation'
import { ReadError, snapshotOf } from './mcp-model'

/** Branch reads keep navigation separate from page contents. The snapshot covers the entire hierarchy. */
export function compactTree(system: string, tree: Entry[], requestUrl: string, parentPath?: string, offset = 0, limit = 12, expectedSnapshot?: string) {
  const snapshot = snapshotOf({system, tree})
  if (expectedSnapshot && expectedSnapshot !== snapshot) throw new ReadError('SNAPSHOT_MISMATCH', 'The published hierarchy changed. Start a new tree read before continuing.')
  if (offset > 0 && !expectedSnapshot) throw new ReadError('SNAPSHOT_REQUIRED', 'Pass the tree snapshot when continuing a branch.')
  const find = (entries: Entry[]): Entry | undefined => {
    for (const entry of entries) { if (entry.path === parentPath) return entry; const match = find(entry.children ?? []); if (match) return match }
  }
  const parent = parentPath ? find(tree) : undefined
  if (parentPath && !parent) throw new ReadError('UNKNOWN_PARENT', 'Use an exact parentPath from this published hierarchy.')
  const children = parentPath ? parent!.children ?? [] : tree
  if (!Number.isInteger(offset) || offset < 0 || offset > children.length || !Number.isInteger(limit) || limit < 1 || limit > 20) throw new ReadError('INVALID_RANGE', 'Use a valid branch offset and limit of 1..20 entries.')
  const base = {system, ...(parentPath ? {parentPath} : {}), snapshot, limit}
  const entries = children.slice(offset,offset + limit).map(({children, summary, ...entry}) => ({
    ...entry, ...(summary ? {summary: Array.from(summary).slice(0,240).join(''), summaryComplete: Array.from(summary).length <= 240} : {}),
    pageUrl: publicUrl(entry.path,requestUrl), childCount: children?.length ?? 0,
    ...(children?.length ? {expand: {tool: 'list_documentation_tree', arguments: {system, parentPath: entry.path, snapshot, limit}}} : {}),
  }))
  const nextOffset = offset + entries.length < children.length ? offset + entries.length : null
  return {view: 'compact', system, snapshot, parentPath: parentPath ?? null, entries, pagination: {offset,limit,total:children.length,nextOffset},
    omissions: ['Page contents and descendant branches; use each retrieval or expand reference.', ...(entries.some(entry => 'summaryComplete' in entry && !entry.summaryComplete) ? ['Long summaries are previews; read the referenced page.'] : [])],
    ...(nextOffset !== null ? {next: {tool:'list_documentation_tree',arguments:{...base,offset:nextOffset}}} : {})}
}
