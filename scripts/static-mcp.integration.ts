/** Actual packed/installed stdio client versus the existing published-data adapter. No database. */
import assert from 'node:assert/strict'
import {createServer} from 'node:http'
import {readFile,mkdtemp,mkdir,rm,writeFile} from 'node:fs/promises'
import path from 'node:path'
import os from 'node:os'
import {spawnSync} from 'node:child_process'
import {Client} from '@modelcontextprotocol/sdk/client/index.js'
import {StdioClientTransport} from '@modelcontextprotocol/sdk/client/stdio.js'
import {InMemoryTransport} from '@modelcontextprotocol/sdk/inMemory.js'

process.env.ARVE_STATIC_EXPORT='1';process.env.NEXT_PUBLIC_ARVE_STATIC='1';process.env.NEXT_PUBLIC_ARVE_BASE_PATH=process.env.ARVE_BASE_PATH??'/arve'
const [{liveProvider},{createHandbookServer},{staticProvider}]=await Promise.all([import('../src/mcp/live-provider'),import('../src/mcp/server'),import('../packages/arve-mcp/src/static-provider')])
const root=path.resolve('.runtime/static-site/out'),temp=await mkdtemp(path.join(os.tmpdir(),'arve-mcp-'))
const base=process.env.ARVE_BASE_PATH??'/arve',requests:string[]=[]
let corrupt:string|undefined,missing:string|undefined,pointerOverride:Buffer|undefined
const http=createServer(async(req,res)=>{
 try{
  const requestPath=new URL(req.url!,'http://static.invalid').pathname;requests.push(requestPath)
  assert.ok(requestPath.startsWith(base+'/'))
  const relative=decodeURIComponent(requestPath.slice(base.length+1)),file=path.resolve(root,relative)
  assert.ok(file.startsWith(root+path.sep));if(relative===missing)throw Error('Missing')
  let content=pointerOverride&&relative==='arve-data/current.json'?pointerOverride:await readFile(file)
  if(relative===corrupt)content=Buffer.from('tampered')
  res.writeHead(200,{'content-type':'application/json'});res.end(content)
 }catch{res.writeHead(404);res.end('Not found')}
})
await new Promise<void>(resolve=>http.listen(0,'127.0.0.1',resolve))
const port=(http.address() as {port:number}).port,baseUrl=`http://127.0.0.1:${port}${base}/`
let remote:Client|undefined,local:Client|undefined,sourceServer:ReturnType<typeof createHandbookServer>|undefined
const run=(args:string[])=>{const r=spawnSync('npm',args,{cwd:process.cwd(),encoding:'utf8',env:{...process.env,NPM_CONFIG_LOGLEVEL:'error'}});assert.equal(r.status,0,r.stderr);return r.stdout}
const wire=(value:unknown)=>JSON.parse(JSON.stringify(value))
let comparisons=0
try{
 await mkdir('.runtime',{recursive:true})
 const pack=JSON.parse(run(['pack','./packages/arve-mcp','--pack-destination',temp,'--json']))[0]
 assert.deepEqual(pack.files.map((f:any)=>f.path).sort(),['README.md','dist/cli.js','package.json'])
 await writeFile(path.join(temp,'package.json'),JSON.stringify({private:true,type:'module'}))
 run(['install','--prefix',temp,path.join(temp,pack.filename),'--omit=dev','--ignore-scripts','--no-audit','--no-fund'])
 const installed=path.join(temp,'node_modules/@benjamindamm/arve-mcp/dist/cli.js')
 assert.ok(!(await readFile(installed,'utf8')).includes('payload.config'))
 const transport=new StdioClientTransport({command:process.execPath,args:[installed,'--base-url',baseUrl],cwd:temp,stderr:'pipe',env:{PATH:process.env.PATH!}})
 remote=new Client({name:'static-handbook-agent',version:'1.0.0'},{capabilities:{}})
 await remote.connect(transport)
 sourceServer=createHandbookServer(liveProvider,baseUrl)
 local=new Client({name:'existing-handbook-agent',version:'1.0.0'},{capabilities:{}})
 const [a,b]=InMemoryTransport.createLinkedPair();await sourceServer.connect(a);await local.connect(b)
 assert.deepEqual(await remote.listTools(),wire(await local.listTools()))
 assert.deepEqual(await remote.listResources(),wire(await local.listResources()))
 assert.deepEqual(await remote.readResource({uri:'ui://arve/color-review-v1.html'}),wire(await local.readResource({uri:'ui://arve/color-review-v1.html'})))
 const call=async(name:string,args:Record<string,unknown>={})=>{
  const [actual,expected]=await Promise.all([remote!.callTool({name,arguments:args}),local!.callTool({name,arguments:args})])
  assert.deepEqual(actual,wire(expected),`${name}: ${JSON.stringify(args)}`);comparisons++
  assert.ok(!actual.isError,JSON.stringify(actual));return actual.structuredContent as any
 }
 const error=async(name:string,args:Record<string,unknown>)=>{const result=await remote!.callTool({name,arguments:args});assert.equal(result.isError,true,JSON.stringify(result));return result}
 const systems=await call('list_design_systems')
 for(const {system}of systems.systems){
  await call('list_documentation_tree',{system})
  const full=await call('list_documentation_tree',{system,view:'full'})
  async function visit(entries:any[]){for(const item of entries){
   if(item.children?.length)await call('list_documentation_tree',{system,parentPath:item.path})
   if(item.kind==='component'){
    const args={system,component:item.slug},page=await call('get_component_page',args)
    const fullPage=await call('get_component_page',{...args,view:'full'})
    const pinned={...args,snapshot:page.snapshot,...(page.contract?{revision:page.contract.revision}:{})}
    for(const domain of ['guidance','platform','contract','files'])await call('get_component_domain',{...pinned,domain,limit:100})
    if(page.guidance.inventory[0])await call('get_component_domain',{...pinned,domain:'guidance',sectionId:page.guidance.inventory[0].id,limit:100})
    if(page.contract){const deferred=fullPage.contractArtifacts.find((f:any)=>!fullPage.contract.files[f.path]&&/\.(css|json|md|scxml|html)$/.test(f.path));if(deferred)await call('get_component_file',{...pinned,path:deferred.path,limit:80});const source=Object.values(page.contract.sources).find((s:any)=>s.endsWith('.scxml')) as string|undefined;if(source)await call('get_component_file',{...pinned,path:source,limit:12000})}
   }else{
    const args=item.retrieval.arguments,page=await call('get_documentation_page',args)
    await call('get_documentation_page',{...args,view:'full'})
    if(page.next)await call(page.next.tool,page.next.arguments)
    if(page.sections[0])await call('get_documentation_section',{...page.sections[0].read.arguments,limit:80})
   }
   await visit(item.children??[])
  }}
  await visit(full.tree)
  for(const query of ['button','Formular Fehler','mobil Übersicht','UX-021','Krypto kaufen','Animation','Farben'])await call('search_documentation',{system,query})
 }
 const pointer=JSON.parse(await readFile(path.join(root,'arve-data/current.json'),'utf8'))
 const manifest=JSON.parse(await readFile(path.join(root,'arve-data',pointer.manifest),'utf8'))
 for(const library of Object.keys(manifest.index.libraries)){
  const inventory=await call('list_library_skills',{library,view:'full'})
  await call('list_library_skills',{library})
  for(const exp of inventory.exports){
   await call('list_library_skills',{library,revision:exp.revision})
   await call('find_contract_pages',{library,revision:exp.revision})
   for(const skill of exp.skills){
    let result=await call('get_library_skill',{library,revision:exp.revision,skill:skill.id,limit:100})
    if(result.next)await call(result.next.tool,result.next.arguments)
    const reference=skill.resources.find((r:any)=>r.resourcePath!==skill.mainResourcePath)
    if(reference)await call('get_library_skill',{library,revision:exp.revision,skill:skill.id,resourcePath:reference.resourcePath,view:'full'})
   }
  }
 }
 let skills=await call('list_authoring_skills')
 for(;;){for(const skill of skills.skills)for(const file of skill.files){let response=await call(file.read.tool,{...file.read.arguments,limit:12000});while(response.next)response=await call(response.next.tool,response.next.arguments)}if(!skills.next)break;skills=await call(skills.next.tool,skills.next.arguments)}
 const {exampleDiscussion}=await import('../src/agent-ui/color-discussion');await call('compare_color_roles',exampleDiscussion)
 await error('get_library_skill',{library:'shadcn',revision:'0'.repeat(64),skill:'missing'})
 const component=await call('get_component_page',{system:'shadcn',component:'button'})
 const pinned={system:'shadcn',component:'button',snapshot:component.snapshot,revision:component.contract.revision}
 await error('get_component_file',{...pinned,path:'../secret'})
 const fullButton=await call('get_component_page',{system:'shadcn',component:'button',view:'full'})
 const binary=fullButton.contractArtifacts.find((f:any)=>f.path.endsWith('.png'))
 if(binary)await error('get_component_file',{...pinned,path:binary.path})
 await error('get_component_domain',{...pinned,snapshot:'0'.repeat(64),domain:'guidance'})
 // A connected session never follows a new current pointer midway through reads.
 pointerOverride=Buffer.from(JSON.stringify({...pointer,format:'unsupported/v9'}))
 await call('list_design_systems')
 await assert.rejects(()=>staticProvider(baseUrl));pointerOverride=undefined
 // New sessions detect tampering and missing resources, rather than falling back to live APIs.
 const resource=manifest.index.systems;corrupt=`arve-data/releases/${pointer.release}/${resource}`
 let fresh=await staticProvider(baseUrl);await assert.rejects(()=>fresh.provider.listSystems(),/SHA256/);corrupt=undefined
 missing=`arve-data/releases/${pointer.release}/${resource}`;fresh=await staticProvider(baseUrl);await assert.rejects(()=>fresh.provider.listSystems(),/unavailable/);missing=undefined
 const unknown=await remote.callTool({name:'get_component_page',arguments:{system:'missing',component:'missing'}});assert.equal(unknown.isError,true)
 assert.ok(requests.every(url=>url.startsWith(base+'/arve-data/')||url.startsWith(base+'/contracts/')),'No CMS, API or source repository requests')
 console.log(JSON.stringify({status:'PASS',comparisons,systems:systems.systems.length,components:69,installedPackage:pack.name,packageBytes:pack.size,release:pointer.release,requests:requests.length,checks:['isolated npm tarball install','all published hierarchy pages and component models','search and progressive reads','contracts and SCXML','portable and authoring skills','MCP App','pinned release','tamper and missing-file rejection','no database or Payload at runtime']}))
}finally{await remote?.close();await local?.close();await sourceServer?.close();await new Promise<void>(resolve=>http.close(()=>resolve()));await rm(temp,{recursive:true,force:true})}
