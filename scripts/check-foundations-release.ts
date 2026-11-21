import { currentPage } from './content/current-page'
import assert from 'node:assert/strict'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js'
import { getPayload } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import config from '../src/payload.config'
import { colorPageRelease } from './content/color-page-release'
import { foundationsRelease } from './content/foundations-release'
import { foundationsOverviewRelease } from './content/foundations-overview-release'
import { publicContent } from '../src/docs/component-pages'
const safeConfig = await config
const adapter = postgresAdapter({pool:{connectionString:process.env.DATABASE_URI},push:false})
safeConfig.db = {...adapter,allowIDOnCreate:adapter.allowIDOnCreate ?? false,name:adapter.name ?? 'postgres'}
const payload=await getPayload({config:safeConfig})
const client=new Client({name:'foundations-release-check',version:'1.0.0'})
try {
 await client.connect(new StreamableHTTPClientTransport(new URL('http://127.0.0.1:3010/mcp')))
 const tree=await client.callTool({name:'list_documentation_tree',arguments:{system:'shadcn'}})
 assert(!tree.isError)
 for(const original of foundationsRelease) {
  const entry = await currentPage(original.slug === 'shadcn-grundlagen' ? { ...original, ...foundationsOverviewRelease } : original.slug === 'shadcn-farben' ? { ...original, ...colorPageRelease } : original)
  const section=entry.slug.slice('shadcn-'.length)
  const {docs:[page]}=await payload.find({collection:'pages',depth:1,draft:false,where:{and:[{slug:{equals:entry.slug}},{_status:{equals:'published'}}]}})
  assert(page)
  {
    const withoutIds = (value: unknown): unknown => Array.isArray(value) ? value.map(withoutIds) : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).filter(([key,v]) => key !== 'id' && v != null).map(([key,v]) => [key,withoutIds(v)])) : value
    assert.deepEqual(withoutIds(page.content), withoutIds(entry.content))
    assert.equal(page.summary, entry.summary)
  }
  const response=await client.callTool({name:'get_documentation_page',arguments:{system:'shadcn',section}})
  assert(!response.isError,section)
  const data=response.structuredContent as Record<string,unknown>
  assert.deepEqual(data.content,publicContent(page.content))
  assert.deepEqual(data.templateSections,[])
  assert.equal(data.updatedAt,page.updatedAt)
  assert(!('colorTokens' in data) && !('spacingPx' in data),'Unabhängige alte Wertequelle verbleibt in MCP')
  assert(JSON.stringify(tree.structuredContent).includes('/systems/shadcn/'+section))
  for(const block of page.content??[]) if(block.blockType==='study') {
    assert(block.title && block.explanation && block.source,`Studie ohne Text/Quelle: ${section}`)
  }
  console.log(`${section}: veröffentlicht, im Baum, Studie/Text/MCP identisch, keine Vorlagenduplikate`)
 }
 const result=await client.callTool({name:'search_documentation',arguments:{system:'shadcn',query:'Abstände',limit:20}})
 assert(!result.isError && JSON.stringify(result.structuredContent).includes('/systems/shadcn/abstaende'))
 console.log('Suche findet die führende Abstandserklärung.')
} finally {await client.close();await payload.destroy()}
process.exit(0)
