import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {Client} from '@modelcontextprotocol/sdk/client/index.js'
import {StreamableHTTPClientTransport} from '@modelcontextprotocol/sdk/client/streamableHttp.js'
import {getContract} from '../src/contracts/catalog'
const revision='65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26'
const origin='http://127.0.0.1:3010'
const client=new Client({name:'portable-contract-publication-check',version:'1.0.0'})
try{
 await client.connect(new StreamableHTTPClientTransport(new URL('/mcp',origin)))
 for(const component of ['button','input','checkbox','switch']){
 const response=await client.callTool({name:'get_component_page',arguments:{system:'shadcn',component}})
 assert(!response.isError)
 const data=response.structuredContent as {contract:ReturnType<typeof getContract>;contractReference:{revision:string};contractArtifacts:{path:string;sha256:string;url:string}[]}
 assert.equal(data.contractReference.revision,revision)
 const expected=getContract({library:'shadcn',component,revision});assert(expected)
 assert.deepEqual(data.contract,expected)
 for(const domain of ['interface','tokens','css','behavior','accessibility','accessibilityRules','ux','stories'])assert(expected.files[expected.sources[domain]],component+': '+domain)
 assert.deepEqual(Object.fromEntries(data.contractArtifacts.map(f=>[f.path,f.sha256])),expected.artifacts)
 for(const file of data.contractArtifacts){
  const r=await fetch(new URL(file.url,origin));assert.equal(r.status,200,file.path)
  assert(r.headers.get('content-disposition')?.startsWith('attachment;'))
  assert.equal(createHash('sha256').update(Buffer.from(await r.arrayBuffer())).digest('hex'),file.sha256,file.path)
 }
 const html=await fetch(`${origin}/systems/shadcn/components/${component}`).then(r=>r.text())
 assert(html.includes(revision));assert(html.includes('Stories'));assert(html.includes('UX-Eignung'));assert(html.includes('behavior.scxml'))
 console.log(`${component}: MCP matches all contract files; 8 domains; ${data.contractArtifacts.length} downloads verified; portal revision and sections present`)
 }
 for(const p of ['../library.json','/etc/passwd','missing.fig'])assert.equal((await fetch(origin+'/systems/shadcn/components/button/files?path='+encodeURIComponent(p))).status,404)
 assert.equal((await fetch(origin+'/systems/shadcn/components/unknown/files?path=library.json')).status,404)
 console.log('Unlisted paths and unknown component rejected')
}finally{await client.close()}
