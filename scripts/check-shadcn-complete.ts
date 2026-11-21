import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js'
import { referenceComponents } from './content/shadcn-complete'
import { shadcnReferenceRevision as completeRevision } from '../src/contracts/current-reference'
import { getContract } from '../src/contracts/catalog'
const client=new Client({name:'complete-shadcn-check',version:'1'})
const results:Record<string,unknown>[]=[]
const checkedAssets=new Set<string>()
const digest=(v:string)=>createHash('sha256').update(v).digest('hex')
try {
 await client.connect(new StreamableHTTPClientTransport(new URL('http://127.0.0.1:3010/mcp')))
 const call=async(name:string,args:Record<string,unknown>)=>{const r=await client.callTool({name,arguments:args});assert(!r.isError,JSON.stringify(r.content).slice(0,300));return r.structuredContent as any}
 const tree=await call('list_documentation_tree',{view:'full',system:'shadcn'})
 const components:any[]=[]
 const visit=(entries:any[])=>entries.forEach(e=>{if(e.kind==='component')components.push(e);visit(e.children??[])})
 visit(tree.tree);assert.equal(components.length,69)
 const listed=await call('list_library_skills',{view:'full',library:'shadcn',revision:completeRevision})
 assert.equal(listed.exports[0].componentPages.length,69)
 for(const resource of listed.exports[0].skills[0].resources){
  const r=await call('get_library_skill',{view:'full',library:'shadcn',revision:completeRevision,skill:listed.exports[0].skills[0].id,resourcePath:resource.resourcePath})
  assert.equal(digest(r.content),resource.sha256)
 }
 for(const item of referenceComponents){
  const page=await call('get_component_page',{view:'full',system:'shadcn',component:item.slug})
  assert.equal(page.contractReference.revision,completeRevision)
  assert.equal(page.contract.status,'complete')
  const expected=getContract({library:'shadcn',component:item.slug,revision:completeRevision})!.styleAssets!
  assert.equal(page.styleAssets.length,expected.length)
  assert(page.styleAssets.some((asset:any)=>asset.path==='tokens.css'))
  assert(page.styleAssets.some((asset:any)=>asset.kind==='font'))
  for(const asset of page.styleAssets){
   assert(expected.some(e=>e.path===asset.path&&e.sha256===asset.sha256&&e.kind===asset.kind))
   if(checkedAssets.has(asset.path))continue
   const response=await fetch(asset.url);assert.equal(response.status,200,asset.url)
   const bytes=Buffer.from(await response.arrayBuffer());assert.equal(createHash('sha256').update(bytes).digest('hex'),asset.sha256,asset.path)
   if(asset.kind==='stylesheet')assert(response.headers.get('content-type')?.startsWith('text/css'))
   if(asset.kind==='font')assert(response.headers.get('content-type')?.startsWith('font/'))
   checkedAssets.add(asset.path)
  }
  for(const [domain,sourcePath] of Object.entries(page.contract.sources)){
   const source=page.contract.files[sourcePath as string];assert(source,`${item.slug}: ${domain}`);assert.equal(digest(source.content),source.sha256)
  }
  assert(page.designPreview&&page.contractArtifacts.some((f:any)=>f.path===page.designPreview.path))
  assert.equal(page.referenceFrameworks.length,7)
  for(const ref of ['swiftui-flx','shadkit','swiftcn'])assert(page.referenceFrameworks.some((r:any)=>r.id===ref&&r.platforms.includes('iOS')))
  assert(page.referenceFrameworks.some((r:any)=>r.platforms.includes('Android')))
  if(item.slug==='button'){
   assert.equal(page.implementations.length,1)
   assert.equal(page.implementations[0].contract.revision,'fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d')
   assert.equal(page.implementations[0].framework,'Angular')
  }else assert.equal(page.implementations.length,0)
  const response=await fetch('http://127.0.0.1:3010'+page.path)
  assert.equal(response.status,200,item.slug)
  const body=await response.text();assert(body.includes(page.title.replaceAll('&','&amp;'))||body.includes(page.title),item.slug)
  assert(body.length<2_000_000,'Unexpected eager source rendering: '+item.slug)
  results.push({component:item.slug,status:'PASS',contractStatus:page.contract.status,domains:Object.keys(page.contract.sources).length,artifactCount:page.contractArtifacts.length,styleAssets:page.styleAssets.length,htmlBytes:Buffer.byteLength(body)})
  console.log(`${item.slug}: published, pinned, complete sources, PNG binding, frameworks, HTTP200`)
 }
 const guide=await call('get_documentation_page',{view:'full',system:'shadcn',section:'frameworks'});assert(guide.content.length===8)
 for(const rev of ['65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26','fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d'])assert(getContract({library:'shadcn',component:'button',revision:rev}))
 await mkdir('docs/handbook/semantic-shadcn',{recursive:true})
 await writeFile('docs/handbook/semantic-shadcn/verification.json',JSON.stringify({revision:completeRevision,componentCount:69,uniqueStyleAssetsChecked:checkedAssets.size,status:'PASS',results},null,2)+'\n')
 console.log('PASS: 69 components; current skill export; historical pins retained; editable framework guide')
}finally{await client.close()}
