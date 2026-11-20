import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {Client} from '@modelcontextprotocol/sdk/client/index.js'
import {StreamableHTTPClientTransport} from '@modelcontextprotocol/sdk/client/streamableHttp.js'
import manifest from '../docs/handbook/design-resources/manifest.json'
const origin='http://127.0.0.1:3010'
const client=new Client({name:'design-resource-check',version:'1.0.0'})
try {
 await client.connect(new StreamableHTTPClientTransport(new URL('/mcp',origin)))
 const result=await client.callTool({name:'get_documentation_page',arguments:{system:'shadcn',section:'gestaltungs-pilot'}})
 assert(!result.isError)
 const data=result.structuredContent as {resources:Omit<typeof manifest, 'templates'> & {templates:(typeof manifest.templates[number]&{url:string})[]}}
 assert.equal(data.resources.revision,manifest.revision)
 assert.deepEqual(data.resources.limitations,manifest.limitations)
 assert.deepEqual(data.resources.templates.map(({url,...rest})=>rest),manifest.templates)
 for(const file of data.resources.templates){
  const response=await fetch(file.url);assert.equal(response.status,200,file.id)
  assert(response.headers.get('content-disposition')?.startsWith('attachment;'))
  assert.equal(createHash('sha256').update(Buffer.from(await response.arrayBuffer())).digest('hex'),file.sha256,file.id)
 }
 const html=await fetch(origin+'/systems/shadcn/gestaltungs-pilot').then(r=>r.text())
 for(const file of manifest.templates)assert(html.includes('/systems/shadcn/resources/'+file.id),file.id)
 const search=await client.callTool({name:'search_documentation',arguments:{system:'shadcn',query:'kopierbare Regionen',limit:30}})
 assert(!search.isError&&JSON.stringify(search.structuredContent).includes('/systems/shadcn/gestaltungs-pilot'))
 for(const route of ['/systems/unknown/resources/ablauf-breit-svg','/systems/shadcn/resources/unknown'])assert.equal((await fetch(origin+route)).status,404)
 console.log('8 resource files: portal links, MCP metadata and SHA-256 downloads verified; search and unknown resources checked')
}finally {await client.close()}
