import { currentPage } from './content/current-page'
import { layoutExamples } from '../src/docs/layout-metadata'
import assert from 'node:assert/strict'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js'
import { getPayload } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import config from '../src/payload.config'
import { pilotRelease } from './content/pilot-release'
import { publicContent } from '../src/docs/component-pages'
import { pageTemplates } from '../src/docs/page-templates'

// Read-only verification only. Schema push and PostgreSQL writes are disabled.
const safeConfig = await config
safeConfig.db = { ...postgresAdapter({
  push: false,
  pool: { connectionString: process.env.DATABASE_URI, options: '-c default_transaction_read_only=on' },
}), allowIDOnCreate: false, name: 'postgres' }
const payload = await getPayload({ config: safeConfig })
const client = new Client({ name: 'pilot-release-check', version: '1.0.0' })
const origin = 'http://127.0.0.1:3010'
const clean = (value: unknown): unknown => Array.isArray(value) ? value.map(clean) :
  value && typeof value === 'object' ? Object.fromEntries(Object.entries(value)
    .filter(([key, child]) => key !== 'id' && child !== null && child !== undefined)
    .sort(([a], [b]) => a.localeCompare(b)).map(([key, child]) => [key, clean(child)])) : value
const relationId = (value: unknown) => value && typeof value === 'object' && 'id' in value ? value.id : value
const pathFor = (slug: string) => '/systems/shadcn/' + slug.slice('shadcn-'.length)
const links = new Set<string>()
function collectLinks(value: unknown): void {
  if (Array.isArray(value)) value.forEach(collectLinks)
  else if (value && typeof value === 'object') for (const [key, child] of Object.entries(value)) {
    if (key === 'url' && typeof child === 'string' && child.startsWith('/systems/shadcn/')) links.add(child)
    else collectLinks(child)
  }
}
const treeEntries = new Map<string, { parent: string | null; value: Record<string, unknown> }>()
function collectTree(value: unknown, parent: string | null = null): void {
  if (Array.isArray(value)) value.forEach(child => collectTree(child, parent))
  else if (value && typeof value === 'object') {
    const object = value as Record<string, unknown>
    const path = typeof object.path === 'string' ? object.path : null
    if (path) {
      assert(!treeEntries.has(path), `Doppelter Baumeintrag: ${path}`)
      treeEntries.set(path, { parent, value: object })
    }
    for (const child of Object.values(object)) if (child && typeof child === 'object') collectTree(child, path ?? parent)
  }
}
try {
  assert.equal(pilotRelease.length, 5, 'Genau fünf Pilotseiten erwartet.')
  assert.equal(new Set(pilotRelease.map(entry => entry.slug)).size, 5)
  const { docs: [system] } = await payload.find({ collection: 'design-systems', depth: 0, limit: 1, where: { slug: { equals: 'shadcn' } } })
  assert(system)
  const { docs: pages } = await payload.find({ collection: 'pages', depth: 0, draft: false, pagination: false,
    where: { and: [{ designSystem: { equals: system.id } }, { _status: { equals: 'published' } }] } })
  const bySlug = new Map(pages.map(page => [page.slug, page]))
  await client.connect(new StreamableHTTPClientTransport(new URL('/mcp', origin)))
  const tree = await client.callTool({ name: 'list_documentation_tree', arguments: { system: 'shadcn' } })
  assert(!tree.isError, 'Dokumentationsbaum fehlgeschlagen')
  collectTree(tree.structuredContent)
  assert(treeEntries.size > 0, 'Leerer Dokumentationsbaum')
  for (const sourceEntry of pilotRelease) {
    const entry = await currentPage(sourceEntry)
    const page = bySlug.get(entry.slug)
    assert(page, `Publizierte Seite fehlt: ${entry.slug}`)
    assert.equal(page._status, 'published')
    for (const key of ['title', 'summary', 'pageType', 'order'] as const) assert.equal(page[key], entry[key], `${entry.slug}: ${key}`)
    assert.equal(relationId(page.parent) ?? null, entry.parent ? bySlug.get(entry.parent)?.id : null, `${entry.slug}: parent`)
    assert.deepEqual(clean(page.content), clean(entry.content), `${entry.slug}: CMS weicht vom Release ab`)
    for (const { key, fields } of pageTemplates) for (const { key: field } of fields) {
      assert(!((page.template?.[key] as Record<string, unknown> | undefined)?.[field]), `${entry.slug}: unerwarteter Templateinhalt`)
    }
    collectLinks(page.content)
    const path = pathFor(entry.slug)
    const treeEntry = treeEntries.get(path)
    assert(treeEntry, `${path}: fehlt im Baum`)
    assert.equal(treeEntry.parent, entry.parent ? pathFor(entry.parent) : null, `${path}: Baumhierarchie`)
    assert.equal(treeEntry.value.title, page.title)
    assert.equal(treeEntry.value.summary, page.summary)
    assert.equal(treeEntry.value.pageType, page.pageType)
    const response = await client.callTool({ name: 'get_documentation_page', arguments: { system: 'shadcn', section: entry.slug.slice('shadcn-'.length) } })
    assert(!response.isError, `${path}: MCP fehlgeschlagen`)
    const data = response.structuredContent as Record<string, unknown>
    assert(data)
    assert.equal(data.path, path)
    for (const key of ['title', 'summary', 'pageType', 'updatedAt'] as const) assert.equal(data[key], page[key], `${path}: MCP ${key}`)
    assert.deepEqual(data.content, publicContent(page.content), `${path}: CMS/MCP-Inhalte`)
    assert.deepEqual(data.templateSections, [])
    for (const block of page.content ?? []) if (block.blockType === 'workflowStudy') {
      assert(block.title && block.summary && block.caption && block.source)
      assert.equal(new Set(block.steps.map(step => step.key)).size, block.steps.length)
      assert(block.steps.every(step => step.title && step.description && step.tone))
    }
    console.log(`${path}: Release/CMS und CMS/MCP stimmen überein; Hierarchie geprüft`)
  }
  for (const link of links) {
    const url = new URL(link, origin)
    // Legacy layout demos and invoice examples remain reachable outside the new CMS tree; verify
    // their actual response as well, including their supplied query parameters.
    if (!url.pathname.startsWith('/systems/shadcn/beispiele/rechnungen') && !layoutExamples.some(example => url.pathname === '/systems/shadcn/layout/' + example.id)) {
      assert(treeEntries.has(url.pathname), `Link fehlt im veröffentlichten Baum: ${link}`)
    }
    const response = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(15000) })
    assert.equal(response.status, 200, `Interner Link nicht direkt erreichbar: ${link}`)
    await response.body?.cancel()
  }
  const search = await client.callTool({ name: 'search_documentation', arguments: { system: 'shadcn', query: 'Pilot', limit: 30 } })
  assert(!search.isError && search.structuredContent)
  const searchText = JSON.stringify(search.structuredContent)
  for (const entry of pilotRelease) assert(searchText.includes(pathFor(entry.slug)), `Pilotsuche findet ${entry.slug} nicht`)
  console.log(`Fünf Seiten, ${links.size} interne Links und Pilotsuche geprüft. Keine Schreiboperation ausgeführt.`)
} finally {
  await client.close()
  await payload.destroy()
}
process.exit(0)
