import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {mkdir,writeFile} from 'node:fs/promises'
import {Client} from '@modelcontextprotocol/sdk/client/index.js'
import {StreamableHTTPClientTransport} from '@modelcontextprotocol/sdk/client/streamableHttp.js'
const client=new Client({name:'progressive-reader-check',version:'1'})
const report=[]
const hash=s=>createHash('sha256').update(s).digest('hex')
try {
 await client.connect(new StreamableHTTPClientTransport(new URL(process.env.MCP_URL??'http://127.0.0.1:3010/mcp')))
 const raw=async(name,args)=>client.callTool({name,arguments:args})
 const call=async(name,args)=>{const r=await raw(name,args);assert(!r.isError,JSON.stringify(r));return r.structuredContent}
 for(const component of ['button','input','table','data-table','select','calendar']) {
  const r=await raw('get_component_page',{system:'shadcn',component}); assert(!r.isError,JSON.stringify({component,result:r}))
  const size=Buffer.byteLength(JSON.stringify(r)); report.push({component,bytes:size}); assert(size<32768,`${component}: ${size}`)
  const p=r.structuredContent; assert.equal(p.view,'compact'); assert(!p.contract.files); assert(p.guidance.inventory.length)
  const full=await call('get_component_page',{system:'shadcn',component,view:'full'}); assert(full.contract.files); assert.equal(full.contract.revision,p.contract.revision)
  if(component==='button') {
   const a={system:'shadcn',component,snapshot:p.snapshot,revision:p.contract.revision}
   const section=p.guidance.inventory.find(s=>s.source==='content[1]')??p.guidance.inventory[0]
   const chunk=await call('get_component_domain',{...a,domain:'guidance',sectionId:section.id,limit:12000}); assert.equal(chunk.sha256,section.sha256);assert.equal(hash(chunk.content),chunk.sha256)
   const source=JSON.parse((await call('get_component_domain',{...a,domain:'behavior'})).content)
   let text='',offset=0,first
   do {const part=await call('get_component_file',{...source.read.arguments,offset,limit:97});first??=part;text+=part.content;offset=part.nextOffset} while(offset!==null)
   assert.equal(hash(text),first.sha256);assert.equal(Buffer.byteLength(text),first.totalBytes)
   for(const path of ['../tokens.json','%2e%2e/tokens.json','/etc/passwd','components\\button\\behavior.scxml','unregistered.txt']) assert((await raw('get_component_file',{...a,path})).isError,path)
   assert((await raw('get_component_domain',{...a,revision:'0'.repeat(64),domain:'behavior'})).isError)
   assert((await raw('get_component_domain',{...a,snapshot:'0'.repeat(64),domain:'behavior'})).isError)
   assert((await raw('get_component_file',{...source.read.arguments,sha256:'0'.repeat(64)})).isError)
  }
 }
 for(const section of ['suchen-filtern','tabellen-und-listen','patterns']) {
  let r=await raw('get_documentation_page',{system:'shadcn',section}); assert(!r.isError,JSON.stringify({section,result:r}))
  const size=Buffer.byteLength(JSON.stringify(r));report.push({section,bytes:size});assert(size<32768,`${section}: ${size}`)
  let p=r.structuredContent;const ids=[]
  while(true){ids.push(...p.sections.map(s=>s.id));if(!p.next)break;p=await call(p.next.tool,p.next.arguments)}
  assert.equal(ids.length,p.pagination.total);assert.equal(new Set(ids).size,ids.length)
  const first=r.structuredContent.sections[0];if(first){let text='',offset=0,last; do{last=await call('get_documentation_section',{system:'shadcn',section,snapshot:r.structuredContent.snapshot,sectionId:first.id,offset,limit:103});text+=last.content;offset=last.nextOffset}while(offset!==null);assert.equal(hash(text),first.sha256)}
 }
 const skills=await call('list_library_skills',{library:'shadcn'});assert.equal(skills.exports.length,1);assert(skills.exports[0].currentReference)
 const exp=skills.exports[0], skill=exp.skills[0], args={library:'shadcn',revision:exp.revision,skill:skill.id}
 const read=await raw('get_library_skill',args);assert(!read.isError);assert(Buffer.byteLength(JSON.stringify(read))<32768)
 const full=await call('get_library_skill',{...args,view:'full'});let text='',offset=0;do{const part=await call('get_library_skill',{...args,offset,limit:1000});text+=part.content;offset=part.nextOffset}while(offset!==null);assert.equal(text,full.content);assert.equal(hash(text),full.sha256)
 await mkdir('.runtime/mcp-compact',{recursive:true})
 await writeFile('.runtime/mcp-compact/live-report.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));console.log('PASS: progressive HTTP reads, full compatibility fields, reconstruction, integrity and rejection guards')
} finally {await client.close()}
