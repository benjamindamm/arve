import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js'
import { z } from 'zod'
import { getLibrarySkill, LibrarySkillError, listLibrarySkills } from '../../contracts/library-skills'
import { compactLibrarySkills } from '../../contracts/mcp-library-skills'
import { getComponentPage } from '../../docs/component-pages'
import { listSystems } from '../../docs/systems'
import { compactTree } from '../../docs/mcp-navigation'
import { ReadError, assertSnapshot, snapshotOf, textChunk, compactComponent, compactDocumentation, pageSections, componentDomain, componentFile } from '../../docs/mcp-reads'

import { type Entry, documentationTree, getDocumentationPage, searchDocumentationDetailed } from '../../docs/published-documentation'

function success(result: Record<string, unknown>) {
  return { structuredContent: result, content: [{ type: 'text' as const, text: JSON.stringify(result) }] }
}

function notFound(message: string) {
  return { isError: true, content: [{ type: 'text' as const, text: message }] }
}

export const runtime = 'nodejs'

export async function POST(request: Request) {
  const origin = request.headers.get('origin')
  const requestUrl = new URL(request.url)
  // Next.js can normalize the loopback hostname in Request.url.
  const host = request.headers.get('host')
  const browserOrigin = host ? requestUrl.protocol + '//' + host : requestUrl.origin
  const localOrigins = new Set(['http://localhost:3010', 'http://127.0.0.1:3010'])
  const allowedLocalOrigin = origin && localOrigins.has(origin) && localOrigins.has(browserOrigin)
  if (origin && origin !== browserOrigin && !allowedLocalOrigin) {
    return new Response('Origin not allowed', { status: 403 })
  }

  const server = new McpServer({ name: 'design-system', version: '0.1.0' })
  const transport = new WebStandardStreamableHTTPServerTransport({ enableJsonResponse: true })
  const slug = z.string().regex(/^[a-z][a-z0-9-]{0,79}$/)
  const sectionPath = z.string().max(500).regex(/^[a-z][a-z0-9-]*(?:\/[a-z][a-z0-9-]*)*$/)
  const withUrl = <T extends { path: string }>(entry: T) => ({
    ...entry, pageUrl: new URL(entry.path, request.url).href,
  })

  const viewSchema = z.enum(['compact', 'full']).default('compact')
  const hashSchema = z.string().regex(/^[a-f0-9]{64}$/)
  const chunkSchema = { offset: z.number().int().min(0).default(0), limit: z.number().int().min(1).max(12000).default(6000) }
  const readError = (error: unknown) => notFound(error instanceof ReadError ? `${error.code}: ${error.message}` : 'READ_FAILED: Unable to read the requested published resource.')
  const skillError = (error: unknown) => notFound(error instanceof LibrarySkillError
    ? `${error.code}: ${error.message}` : 'SKILL_READ_FAILED: Unable to read the portable skill package.')

  server.registerTool('list_library_skills', {
    description: 'Discover read-only portable skills for an explicitly selected library. Compact default paginates registered exports before reading packages and returns skill/resource hashes, component count, pinned index read and explicit documentation-system binding. Each selected export still verifies every package file, which can take substantial time. Follow the index for component IDs. view=full preserves the complete legacy inventory and verifies all matching exports. No authoring runtime.',
    inputSchema: { library: slug, revision: hashSchema.optional(), view: viewSchema, offset: z.number().int().min(0).default(0), limit: z.number().int().min(1).max(3).default(1) },
    annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
  }, async ({ library, revision, view, offset, limit }) => {
    try {
      if (view === 'full') return success(await listLibrarySkills(library, revision))
      return success(await compactLibrarySkills(library, revision, offset, limit))
    } catch (error) { return error instanceof ReadError ? readError(error) : skillError(error) }
  })

  server.registerTool('get_library_skill', {
    description: 'Read a portable skill or one allowlisted reference unchanged, pinned to library + export revision + skill ID from list_library_skills. Omit resourcePath to read SKILL.md first; then pass exact package-relative resourcePath values from discovery to read guidance, manifest or library index. Resolve relative links against the current resourcePath within that package; never against a source repository. Component contracts remain available through get_component_page. Every call verifies the full package manifest and SHA256 integrity. Read-only; no authoring tools.',
    inputSchema: { library: slug, revision: z.string().regex(/^[a-f0-9]{64}$/), skill: slug, resourcePath: z.string().min(1).max(500).optional(), view: viewSchema, ...chunkSchema, sha256: hashSchema.optional() },
    annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
  }, async ({ library, revision, skill, resourcePath, view, offset, limit, sha256 }) => {
    try {
      const result = await getLibrarySkill(library, revision, skill, resourcePath)
      if (sha256 && sha256 !== result.sha256) throw new ReadError('HASH_MISMATCH', 'Skill resource hash differs from the expected hash.')
      if (view === 'full') return success(result)
      const chunk = textChunk(result.content, offset, limit)
      return success({ ...result, ...chunk, view, omissions: chunk.complete ? [] : ['Resource characters outside this chunk; follow nextOffset.'], ...(chunk.nextOffset !== null ? { next: { tool: 'get_library_skill', arguments: { library, revision, skill, resourcePath: result.resourcePath, sha256: result.sha256, offset: chunk.nextOffset, limit } } } : {}) })
    } catch (error) { return error instanceof ReadError ? readError(error) : skillError(error) }
  })

  server.registerTool('list_design_systems', {
    description: 'Discover design-system keys before searching. Returns published-portal system names and exact hierarchy calls, without inferring framework or component coverage.',
    inputSchema: { offset: z.number().int().min(0).default(0), limit: z.number().int().min(1).max(20).default(10), snapshot: hashSchema.optional() },
    annotations: { readOnlyHint: true },
  }, async ({ offset, limit, snapshot }) => {
    try {
      const systems = (await listSystems()).map(system => ({system: system.slug, name: system.name, read: {tool: 'list_documentation_tree', arguments: {system: system.slug}}}))
      const currentSnapshot = snapshotOf(systems)
      if (snapshot && snapshot !== currentSnapshot) throw new ReadError('SNAPSHOT_MISMATCH','System inventory changed. Start discovery again.')
      if (offset > 0 && !snapshot) throw new ReadError('SNAPSHOT_REQUIRED','Pass the system inventory snapshot when continuing.')
      if (offset > systems.length) throw new ReadError('INVALID_RANGE','Offset exceeds system inventory.')
      const entries = systems.slice(offset,offset + limit)
      const nextOffset = offset + entries.length < systems.length ? offset + entries.length : null
      return success({systems: entries, snapshot: currentSnapshot, pagination:{offset,limit,total:systems.length,nextOffset}, ...(nextOffset !== null ? {next:{tool:'list_design_systems',arguments:{offset:nextOffset,limit,snapshot:currentSnapshot}}} : {})})
    } catch (error) { return readError(error) }
  })

  server.registerTool('list_documentation_tree', {
    description: 'Discover the published hierarchy one branch at a time. Compact default lists immediate entries, child counts and exact page/expand calls. Use parentPath to expand; carry snapshot for continuations. view=full returns the complete legacy hierarchy.',
    inputSchema: { system: slug, view: viewSchema, parentPath: z.string().min(1).max(500).optional(), snapshot: hashSchema.optional(), offset: z.number().int().min(0).default(0), limit: z.number().int().min(1).max(20).default(12) },
    annotations: { readOnlyHint: true },
  }, async ({ system, view, parentPath, snapshot, offset, limit }) => {
    const result = await documentationTree(system)
    if (!result) return notFound('Unknown documentation system.')
    try {
    if (view !== 'full') return success(compactTree(system,result.tree,request.url,parentPath,offset,limit,snapshot))
    const mapTree = ({ children, ...entry }: Entry): Entry & { pageUrl: string } => ({
      ...withUrl(entry), children: children?.map(mapTree),
    })
    return success({ system, tree: result.tree.map(mapTree) })
    } catch (error) { return readError(error) }
  })

  server.registerTool('search_documentation', {
    description: 'Search published UI guidance with explicit German/English UI synonyms, exact pattern IDs and weighted title/content relevance. Results include matched terms, original source snippets, exact IDs and retrieval arguments. Partial matches preserve general guidance for longer tasks without claiming domain-specific rules; inspect matchMode and unmatchedTerms. Paginate using next.',
    inputSchema: { system: slug, query: z.string().trim().min(1).max(160), limit: z.number().int().min(1).max(30).default(10), offset: z.number().int().min(0).default(0) },
    annotations: { readOnlyHint: true },
  }, async ({ system, query, limit, offset }) => {
    const result = await searchDocumentationDetailed(system, query, limit, offset)
    if (!result) return notFound('Unknown documentation system.')
    const nextOffset = offset + result.results.length < result.total ? offset + result.results.length : null
    return success({ system, ...result, results: result.results.map(({ entry, ...match }) => ({ ...withUrl(entry), ...match })),
      nextOffset, ...(nextOffset !== null ? { next: { tool: 'search_documentation', arguments: { system, query, limit, offset: nextOffset } } } : {}) })
  })

  server.registerTool('get_documentation_page', {
    description: 'Read compact paginated plain-text previews and stable block references for a published section. Follow next and section reads for all applicability, exceptions and evidence; view=full preserves the complete structured page. Layout examples use section layout and example slug.',
    inputSchema: { system: slug, section: sectionPath, example: slug.optional(), view: viewSchema, snapshot: hashSchema.optional(), offset: z.number().int().min(0).default(0), limit: z.number().int().min(1).max(4).default(4) },
    annotations: { readOnlyHint: true },
  }, async ({ system, section, example, view, snapshot, offset, limit }) => {
    const page = await getDocumentationPage(system, section, example)
    if (!page) return notFound('No published documentation page found.')
    try {
    if (snapshot) assertSnapshot(page, snapshot)
    if (offset > 0 && !snapshot) throw new ReadError('SNAPSHOT_REQUIRED','Pass the snapshot from the first page when paginating.')
    if (view !== 'full') return success(compactDocumentation({ ...page }, { system, section, ...(example ? { example } : {}) }, offset, limit))
    return success({ ...withUrl(page), ...('resources' in page && page.resources ? { resources: { ...page.resources, templates: page.resources.templates.map(resource => ({ ...resource, url: new URL(resource.url, request.url).href })) } } : {}) })
    } catch (error) { return readError(error) }
  })

  server.registerTool('get_documentation_section', {
    description: 'Read an exact stable block from the compact documentation page as paginated plain text. Requires the page snapshot. Offsets count Unicode code points; full-resource SHA256 covers UTF-8 text, not original rich-text JSON. Follow every continuation to read complete applicability and limitations.',
    inputSchema: { system: slug, section: sectionPath, example: slug.optional(), snapshot: hashSchema, sectionId: z.string().min(1).max(100), ...chunkSchema },
    annotations: { readOnlyHint: true },
  }, async ({ system, section, example, snapshot, sectionId, offset, limit }) => {
    try {
      const page = await getDocumentationPage(system, section, example)
      if (!page) return notFound('No published documentation page found.')
      assertSnapshot(page, snapshot)
      const block = pageSections({ ...page }).find(item => item.id === sectionId)
      if (!block) throw new ReadError('UNKNOWN_SECTION','Use a sectionId from the compact page with the same snapshot.')
      const chunk = textChunk(block.text, offset, limit)
      return success({ system, section, example, snapshot, sectionId, source: block.source, ...chunk, ...(chunk.nextOffset !== null ? { next: { tool: 'get_documentation_section', arguments: { system, section, ...(example ? { example } : {}), snapshot, sectionId, offset: chunk.nextOffset, limit } } } : {}) })
    } catch (error) { return readError(error) }
  })

  server.registerTool('get_component_page', {
    description: 'Read compact component guidance, provenance, section inventory and published platform evidence by default. Source domains and files require explicit follow-up reads pinned to snapshot/revision. view=full preserves the original complete page response; compact previews never constitute a full applicability review.',
    inputSchema: { system: slug, component: slug, view: viewSchema, snapshot: hashSchema.optional(), revision: hashSchema.optional() },
    annotations: { readOnlyHint: true },
  }, async ({ system, component, view, snapshot, revision }) => {
    const page = await getComponentPage(system, component)
    if (!page) return { isError: true, content: [{ type: 'text', text: 'No published component page found.' }] }

    try {
    if (snapshot) assertSnapshot(page, snapshot)
    if (revision && revision !== page.contract?.revision) throw new ReadError('REVISION_MISMATCH','Published component contract changed. Read the compact page again; historical CMS pages are not served.')
    if (view !== 'full') return success(compactComponent(page, request.url))
    const result = {
      ...page,
      designPreview: page.designPreview ? { ...page.designPreview, url: new URL(page.designPreview.url, request.url).href } : null,
      pageUrl: new URL(page.path, request.url).href,
      contractArtifacts: page.contractArtifacts.map(file => ({ ...file, url: new URL(file.url, request.url).href })),
      styleAssets: page.styleAssets.map(file=>({...file,url:new URL(file.url,request.url).href})),
      demo: page.demo ? { ...page.demo, url: new URL(page.path + '#live-beispiel', request.url).href } : null,
    }
    return success(result)
    } catch (error) { return readError(error) }
  })

  for (const name of ['get_component_domain', 'get_component_file'] as const) server.registerTool(name, {
    description: name === 'get_component_domain' ? 'Read one component domain pinned to its page snapshot and contract revision. guidance/platform/contract/files return paginated JSON text; source domains return a small exact file reference. JSON may require all chunks before parsing. Hash covers complete serialized domain. No token or story file is embedded by default.' : 'Read one exact allowlisted component artifact as UTF-8 text, pinned to page snapshot and contract revision. SHA256 is checked against the registered artifact, offsets count Unicode code points. Binary files use published download links. Never accepts arbitrary filesystem paths.',
    inputSchema: { system: slug, component: slug, snapshot: hashSchema, revision: hashSchema, ...(name === 'get_component_file' ? { path: z.string().min(1).max(500), sha256: hashSchema.optional() } : { domain: z.string().min(1).max(80), sectionId: z.string().min(1).max(100).optional() }), ...chunkSchema },
    annotations: { readOnlyHint: true },
  }, async (args: { system: string; component: string; snapshot: string; revision: string; offset: number; limit: number; path?: string; sha256?: string; domain?: string; sectionId?: string }) => {
    try {
      const { system, component, snapshot, revision, offset, limit } = args
      const page = await getComponentPage(system, component)
      if (!page) return notFound('No published component page found.')
      assertSnapshot(page, snapshot)
      if (revision !== page.contract?.revision) throw new ReadError('REVISION_MISMATCH','Requested revision is not the published component contract. Read the compact page again; historical CMS pages are not served.')
      const filePath = 'path' in args ? args.path as string : undefined
      const domain = 'domain' in args ? args.domain as string : undefined
      const sectionId = 'sectionId' in args ? args.sectionId as string | undefined : undefined
      const value = filePath ? await componentFile(page, filePath, 'sha256' in args ? args.sha256 as string | undefined : undefined) : componentDomain(page, domain!, sectionId)
      const content = typeof value === 'string' ? value : JSON.stringify(value)
      const chunk = textChunk(content,offset,limit)
      return success({ system, component, snapshot, revision, ...(filePath ? { path: filePath, mediaType: 'text/plain' } : { domain, ...(sectionId ? { sectionId } : {}), mediaType: sectionId ? 'text/plain' : 'application/json' }), ...chunk, ...(chunk.nextOffset !== null ? { next: { tool: name, arguments: { ...args, offset: chunk.nextOffset } } } : {}) })
    } catch (error) { return readError(error) }
  })

  try {
    await server.connect(transport)
    return await transport.handleRequest(request)
  } finally {
    await server.close()
  }
}

export function GET() {
  return new Response(null, { status: 405, headers: { Allow: 'POST' } })
}
