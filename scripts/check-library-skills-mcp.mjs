import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js'

const client = new Client({ name: 'library-skills-integration', version: '1.0.0' })
const base = process.env.MCP_BASE_URL || 'http://127.0.0.1:3010'
const read = async (name, args) => {
  const result = await client.callTool({ name, arguments: args })
  assert(!result.isError, JSON.stringify(result.content))
  return result.structuredContent
}
try {
  await client.connect(new StreamableHTTPClientTransport(new URL('/mcp', base)))
  const { tools } = await client.listTools()
  const existing = ['list_documentation_tree', 'search_documentation', 'get_documentation_page', 'get_component_page']
  for (const name of [...existing, 'list_library_skills', 'get_library_skill']) assert(tools.some(tool => tool.name === name))
  assert.equal(tools.length, 6)
  for (const name of ['list_library_skills', 'get_library_skill']) {
    const tool = tools.find(item => item.name === name)
    assert(tool.annotations.readOnlyHint)
    assert(tool.description.includes('list_library_skills') || tool.description.includes('get_library_skill'))
    assert(tool.inputSchema.required.includes('library'))
  }
  const listed = await read('list_library_skills', { library: 'shadcn' })
  assert.equal(listed.library, 'shadcn')
  for (const exported of listed.exports) {
    for (const skill of exported.skills) {
      const args = { library: listed.library, revision: exported.revision, skill: skill.id }
      const main = await read('get_library_skill', args)
      assert.equal(main.resourcePath, skill.mainResourcePath)
      for (const resource of skill.resources) {
        const result = await read('get_library_skill', { ...args, resourcePath: resource.resourcePath })
        const original = await readFile(`src/contracts/libraries/${listed.library}/${exported.revision}/package/${resource.resourcePath}`)
        assert(Buffer.from(result.content).equals(original))
        assert.equal(result.sha256, createHash('sha256').update(original).digest('hex'))
        assert(!JSON.stringify(result).includes(process.cwd()))
      }
      for (const [overrides, expected] of [
        [{ library: 'missing' }, 'UNKNOWN_LIBRARY'], [{ revision: '0'.repeat(64) }, 'UNKNOWN_REVISION'],
        [{ skill: 'missing' }, 'UNKNOWN_SKILL'], [{ resourcePath: '../manifest.json' }, 'INVALID_RESOURCE_PATH'],
        [{ resourcePath: 'dependencies.json' }, 'UNKNOWN_RESOURCE'],
      ]) {
        const result = await client.callTool({ name: 'get_library_skill', arguments: { ...args, ...overrides } })
        assert(result.isError)
        assert(JSON.stringify(result.content).includes(expected))
      }
    }
  }
  const tree = await read('list_documentation_tree', { system: 'shadcn' })
  assert(tree.tree.length)
  const search = await read('search_documentation', { system: 'shadcn', query: 'button', limit: 2 })
  assert(search.results.length)
  const page = await read('get_documentation_page', { system: 'shadcn', section: 'technische-anbindung' })
  assert(page.content)
  const component = await read('get_component_page', { system: 'shadcn', component: 'button' })
  assert(component.contract && component.contractArtifacts.length)
  for (const artifact of component.contractArtifacts) {
    const response = await fetch(artifact.url)
    assert(response.ok, `Existing download failed: ${artifact.name || artifact.path || artifact.url}`)
    await response.arrayBuffer()
  }
  console.log(`MCP integration passed: ${tools.length} read tools; pinned skill, all references, identity/path errors, existing documentation/component calls and ${component.contractArtifacts.length} component downloads.`)
} finally { await client.close() }
