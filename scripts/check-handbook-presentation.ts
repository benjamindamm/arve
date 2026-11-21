/** Read-only final check against the captured public handbook. */
import assert from 'node:assert/strict'
import {readFile,readdir} from 'node:fs/promises'
import {resolve} from 'node:path'
import {pathToFileURL} from 'node:url'
import {Client} from '@modelcontextprotocol/sdk/client/index.js'
import {StreamableHTTPClientTransport} from '@modelcontextprotocol/sdk/client/streamableHttp.js'
const snapshot=JSON.parse(await readFile('scripts/content/handbook-snapshot.json','utf8'))
const progress=JSON.parse(await readFile('docs/handbook/presentation-review/page-progress.json','utf8'))
const editorial=JSON.parse(await readFile('docs/handbook/editorial-review/revisions/progress.json','utf8'))
assert(progress.pages.length<=snapshot.pages.length)
assert(progress.pages.every((page:{status:string})=>page.status==='done'),'Presentation work remains')
assert(editorial.pages.length<=snapshot.pages.length)
assert(editorial.pages.every((page:{status:string})=>page.status==='done'),'Editorial work remains')
assert.deepEqual(new Set(editorial.pages.map((page:{path:string})=>page.path)),new Set(progress.pages.map((page:{path:string})=>page.path)))
const clean=(v:any):any=>Array.isArray(v)?v.map(clean):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).filter(([k,x])=>k!=='id'&&x!=null).map(([k,x])=>[k,clean(x)])):v
const client=new Client({name:'handbook-presentation-check',version:'1'})
const releases=new Set((await readdir('scripts/content/page-reworks')).filter(file=>file.endsWith('.ts')).map(file=>file.slice(0,-3)))
try{
 await client.connect(new StreamableHTTPClientTransport(new URL('http://127.0.0.1:3010/mcp')))
 const tree=await client.callTool({name:'list_documentation_tree',arguments:{system:'shadcn'}})
 assert(!tree.isError)
 const paths=new Set<string>()
 const walk=(value:any):void=>{if(Array.isArray(value))value.forEach(walk);else if(value&&typeof value==='object')for(const [key,child]of Object.entries(value)){if(key==='path'&&typeof child==='string')paths.add(child);else walk(child)}}
 walk(tree.structuredContent)
 for(const page of snapshot.pages){
  const home=page.slug===snapshot.system.home
  const section=page.slug.replace(/^shadcn-/,'')
  const path='/systems/shadcn'+(home?'':page.component?'/components/'+page.component:'/'+section)
  // The original 50-page reviews remain historical; new source-reference pages
  // are covered separately by check-shadcn-complete.ts, not marked as old reviews.
  assert(progress.pages.some((entry:{path:string})=>entry.path===path)||page.component||section==='frameworks',path)
  if(releases.has(section)){
   const {release}=await import(pathToFileURL(resolve('scripts/content/page-reworks/'+section+'.ts')).href)
   assert.deepEqual(clean(release.content),clean(page.content),path+' release/snapshot')
   assert.equal(release.summary,page.summary,path+' release summary')
   if(release.title)assert.equal(release.title,page.title,path+' release title')
  }
  if(!home){
   assert(paths.has(path),path+' absent from MCP tree')
   const result=await client.callTool({name:page.component?'get_component_page':'get_documentation_page',arguments:page.component?{system:'shadcn',component:page.component}:{system:'shadcn',section}})
   assert(!result.isError,path)
   const data=result.structuredContent as any
   assert.equal(data.title,page.title,path)
   assert.equal(data.summary,page.summary,path)
   assert.deepEqual(clean(data.content),clean(page.content),path)
   assert(!/postfinance|beispielsystem/i.test(JSON.stringify(data)),path+' public terminology')
   if(page.component)assert.equal(data.contractReference.revision,snapshot.contractRevision)
  }
  const response=await fetch('http://127.0.0.1:3010'+path,{signal:AbortSignal.timeout(60000)})
  assert.equal(response.status,200,path)
  await response.body?.cancel()
 }
 assert.equal(snapshot.implementations[0].contract.revision,'fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d')
 console.log(JSON.stringify({pages:snapshot.pages.length,publicUnderpages:paths.size,status:'PASS',checks:['historical presentation reviews preserved','snapshot/MCP contents match','HTTP 200','neutral public copy','portable component pins','historical implementation pin']}))
}finally{await client.close()}
