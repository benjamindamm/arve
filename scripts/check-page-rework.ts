import assert from 'node:assert/strict'
import {resolve} from 'node:path'
import {pathToFileURL} from 'node:url'
import {Client} from '@modelcontextprotocol/sdk/client/index.js'
import {StreamableHTTPClientTransport} from '@modelcontextprotocol/sdk/client/streamableHttp.js'
const slug=process.argv[2];assert(/^[a-z][a-z0-9-]+$/.test(slug??''))
const {release}=await import(pathToFileURL(resolve('scripts/content/page-reworks/'+slug+'.ts')).href)
const clean=(v:any):any=>Array.isArray(v)?v.map(clean):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).filter(([k,x])=>k!=='id'&&x!=null).map(([k,x])=>[k,clean(x)])):v
const c=new Client({name:'page-rework-check',version:'1'})
try{
 await c.connect(new StreamableHTTPClientTransport(new URL('http://127.0.0.1:3010/mcp')))
 const component = ['button','input','checkbox','switch'].includes(slug)
 const result=await c.callTool({name:component?'get_component_page':'get_documentation_page',arguments:component?{view:'full',system:'shadcn',component:slug}:{view:'full',system:'shadcn',section:slug}});assert(!result.isError)
 const data=result.structuredContent as any;assert.deepEqual(clean(data.content),clean(release.content));assert.equal(data.summary,release.summary)
 if(release.title)assert.equal(data.title,release.title)
 assert(!/postfinance|beispielsystem/i.test(JSON.stringify(data)))
 const r=await fetch('http://127.0.0.1:3010'+data.path);assert.equal(r.status,200)
 console.log(slug+': Release/CMS/MCP gleich, öffentliche Seite HTTP200, neutrale Quelle')
}finally{await c.close()}
