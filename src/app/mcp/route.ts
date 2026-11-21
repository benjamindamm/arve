import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js'
import { z } from 'zod'
import { getLibrarySkill, LibrarySkillError, listLibrarySkills } from '../../contracts/library-skills'
import { getComponentPage } from '../../docs/component-pages'

import { type Entry, documentationTree, getDocumentationPage, searchDocumentation } from '../../docs/published-documentation'

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
  const withUrl = <T extends { path: string }>(entry: T) => ({
    ...entry, pageUrl: new URL(entry.path, request.url).href,
  })

  const skillError = (error: unknown) => notFound(error instanceof LibrarySkillError
    ? `${error.code}: ${error.message}` : 'SKILL_READ_FAILED: Unable to read the portable skill package.')

  server.registerTool('list_library_skills', {
    description: 'Discover read-only skills bundled with an explicitly selected contract library (library is required, e.g. shadcn). Returns export revisions, skill IDs, mainResourcePath and an allowlist of package-relative resources with SHA256. Choose a revision and skill, then use get_library_skill to read the main instructions and relevant references. No authoring or validation runtime is provided.',
    inputSchema: { library: slug, revision: z.string().regex(/^[a-f0-9]{64}$/).optional() },
    annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
  }, async ({ library, revision }) => {
    try { return success(await listLibrarySkills(library, revision)) } catch (error) { return skillError(error) }
  })

  server.registerTool('get_library_skill', {
    description: 'Read a portable skill or one allowlisted reference unchanged, pinned to library + export revision + skill ID from list_library_skills. Omit resourcePath to read SKILL.md first; then pass exact package-relative resourcePath values from discovery to read guidance, manifest or library index. Resolve relative links against the current resourcePath within that package; never against a source repository. Component contracts remain available through get_component_page. Every call verifies the full package manifest and SHA256 integrity. Read-only; no authoring tools.',
    inputSchema: { library: slug, revision: z.string().regex(/^[a-f0-9]{64}$/), skill: slug, resourcePath: z.string().min(1).max(500).optional() },
    annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
  }, async ({ library, revision, skill, resourcePath }) => {
    try { return success(await getLibrarySkill(library, revision, skill, resourcePath)) } catch (error) { return skillError(error) }
  })

  server.registerTool('list_documentation_tree', {
    description: 'List the published documentation hierarchy for a design system, including layout examples and components.',
    inputSchema: { system: slug },
    annotations: { readOnlyHint: true },
  }, async ({ system }) => {
    const result = await documentationTree(system)
    if (!result) return notFound('Unknown documentation system.')
    const mapTree = ({ children, ...entry }: Entry): Entry & { pageUrl: string } => ({
      ...withUrl(entry), children: children?.map(mapTree),
    })
    return success({ system, tree: result.tree.map(mapTree) })
  })

  server.registerTool('search_documentation', {
    description: 'Search published documentation titles and text. Use get_documentation_page for sections and layout examples, or get_component_page for components.',
    inputSchema: { system: slug, query: z.string().trim().min(1).max(160), limit: z.number().int().min(1).max(30).default(10) },
    annotations: { readOnlyHint: true },
  }, async ({ system, query, limit }) => {
    const results = await searchDocumentation(system, query, limit)
    if (!results) return notFound('Unknown documentation system.')
    return success({ system, query, results: results.map(withUrl) })
  })

  server.registerTool('get_documentation_page', {
    description: 'Read a published section or a layout example. To retrieve a layout example, pass section "layout" and the example slug.',
    inputSchema: { system: slug, section: slug, example: slug.optional() },
    annotations: { readOnlyHint: true },
  }, async ({ system, section, example }) => {
    const page = await getDocumentationPage(system, section, example)
    if (!page) return notFound('No published documentation page found.')
    return success({ ...withUrl(page), ...('resources' in page && page.resources ? { resources: { ...page.resources, templates: page.resources.templates.map(resource => ({ ...resource, url: new URL(resource.url, request.url).href })) } } : {}) })
  })

  server.registerTool('get_component_page', {
    description: 'Read a published design-system component page and its pinned technical contract.',
    inputSchema: { system: slug, component: slug },
    annotations: { readOnlyHint: true },
  }, async ({ system, component }) => {
    const page = await getComponentPage(system, component)
    if (!page) return { isError: true, content: [{ type: 'text', text: 'No published component page found.' }] }

    const result = {
      ...page,
      designPreview: page.designPreview ? { ...page.designPreview, url: new URL(page.designPreview.url, request.url).href } : null,
      pageUrl: new URL(page.path, request.url).href,
      contractArtifacts: page.contractArtifacts.map(file => ({ ...file, url: new URL(file.url, request.url).href })),
      styleAssets: page.styleAssets.map(file=>({...file,url:new URL(file.url,request.url).href})),
      demo: page.demo ? { ...page.demo, url: new URL(page.path + '#live-beispiel', request.url).href } : null,
    }
    return success(result)
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
