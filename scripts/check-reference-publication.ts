import assert from 'node:assert/strict'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { publicContent } from '../src/docs/component-pages'
import { readTemplate } from '../src/docs/page-templates'
const payload=await getPayload({config})
const client=new Client({name:'reference-publication-check',version:'1.0.0'})
try {
 await client.connect(new StreamableHTTPClientTransport(new URL('http://127.0.0.1:3010/mcp')))
 for(const slug of ['farben','input','formulare-validierung','detailseite']) {
  const {docs:[page]}=await payload.find({collection:'pages',depth:1,draft:false,where:{and:[{slug:{equals:'shadcn-'+slug}},{_status:{equals:'published'}}]}})
  assert(page)
  const result=await client.callTool({name:slug==='input'?'get_component_page':'get_documentation_page',arguments:slug==='input'?{system:'shadcn',component:'input'}:{system:'shadcn',section:slug}})
  assert(!result.isError)
  const data=result.structuredContent as Record<string,unknown>
  assert.deepEqual(data.content,publicContent(page.content))
  assert.deepEqual(data.templateSections,readTemplate(page.pageType,page.template))
  assert.equal(data.updatedAt,page.updatedAt)
  console.log(`MCP = veröffentlichte CMS-Fassung: ${slug}`)
 }
 const tree=await client.callTool({name:'list_documentation_tree',arguments:{system:'shadcn'}})
 assert(JSON.stringify(tree.structuredContent).includes('/systems/shadcn/detailseite'))
 console.log('Neue Detailseite im veröffentlichten Seitenbaum.')
 // Unreferenced uploads must remain inaccessible, even when their URL is known.
 const media=await payload.create({collection:'media',data:{alt:'Temporäre Zugriffsprüfung'},filePath:'docs/handbook/figures/input.png'})
 try {
  await assert.rejects(()=>payload.findByID({collection:'media',id:media.id,overrideAccess:false}))
  const response=await fetch('http://127.0.0.1:3010'+media.url)
  assert([403,404].includes(response.status))
  console.log('Nicht veröffentlichte Medien bleiben geschützt (Local API und HTTP).')
 } finally {await payload.delete({collection:'media',id:media.id})}
} finally {await client.close();await payload.destroy()}
process.exit(0)
