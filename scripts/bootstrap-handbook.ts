/** Public handbook bootstrap. Preview by default; never overwrites differing content. */
import assert from 'node:assert/strict'
import {mapHomeTargets} from '../src/docs/system-home-template'
import pg from 'pg'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { parseArgs } from 'node:util'
import { getPayload } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import config from '../src/payload.config'

import { shadcnReferenceRevision } from '../src/contracts/current-reference'
export const revision = shadcnReferenceRevision
const pageFields=['title','system','pageType','template','homeTemplate','order','summary','editorialStatus','editorialNote','editorialOwner','component','contract','demo','slug','content','_status','parent']
const implementationFields=['name','platform','releaseStatus','packageName','packageVersion','owner','contexts','contract','verification','_status','componentPage']
export function clean(x:any):any {
 if(Array.isArray(x))return x.map(clean)
 if(x&&typeof x==='object')return Object.fromEntries(Object.entries(x).filter(([k])=>!['id','createdAt','updatedAt'].includes(k)).sort(([a],[b])=>a.localeCompare(b)).map(([k,v])=>[k,clean(v)]).filter(([,v])=>v!=null&&!(typeof v==='object'&&Object.keys(v).length===0)))
 return x
}
const pick=(d:any,keys:string[])=>clean(Object.fromEntries(keys.map(k=>[k,d[k]])))
const same=(a:any,b:any)=>JSON.stringify(clean(a))===JSON.stringify(clean(b))
const key=(d:any)=>[d.componentPage,d.platform,d.packageName??'',d.name].join('|')
export async function bootstrap(payload:any,snapshot:any,apply=false){
 assert.equal(snapshot.format,1);assert.equal(snapshot.system.slug,'shadcn');assert.equal(snapshot.contractRevision,revision)
 assert.equal(snapshot.media.length,0,'Media imports require a separately reviewed implementation')
 const slugs=new Set(snapshot.pages.map((p:any)=>p.slug));assert.equal(slugs.size,snapshot.pages.length)
 assert(slugs.has(snapshot.system.home))
 for(const p of snapshot.pages){assert(p._status==='published');assert(!p.parent||slugs.has(p.parent));mapHomeTargets(p.homeTemplate,target=>{assert(slugs.has(target),'External home template target');return target});if(p.contract?.revision)assert.equal(p.contract.revision,revision);for(const b of p.content??[])assert(!(b.blockType==='guideline'&&b.image),'Unsupported media relation')}
 for(const i of snapshot.implementations){assert(slugs.has(i.componentPage));assert.match(i.contract.revision,/^[a-f0-9]{64}$/)}
 const transactionID=await payload.db.beginTransaction();assert(transactionID,'Transactions required')
 const req={transactionID}
 try{
  const systems=(await payload.find({collection:'design-systems',where:{slug:{equals:'shadcn'}},pagination:false,depth:0,req})).docs
  assert(systems.length<=1);let system=systems[0]
  const all=(await payload.find({collection:'pages',where:{slug:{in:[...slugs]}},pagination:false,depth:0,draft:true,req})).docs
  const bySlug=new Map<string,any>(all.map((p:any)=>[p.slug,p]));const byID=new Map(all.map((p:any)=>[p.id,p.slug]))
  const conflicts:string[]=[]
  for(const wanted of snapshot.pages){const current=bySlug.get(wanted.slug);if(!current)continue
   if(!system||current.designSystem!==system.id||!same({...pick(current,pageFields),parent:current.parent?byID.get(current.parent)??'UNRESOLVED':undefined,...(Object.keys(clean(current.homeTemplate??{})).length?{homeTemplate:clean(mapHomeTargets(current.homeTemplate,target=>byID.get(target)??'UNRESOLVED'))}:{})},wanted))conflicts.push('pages/'+wanted.slug)
   const published=await payload.findByID({collection:'pages',id:current.id,depth:0,draft:false,req})
   if(!same(pick(current,pageFields),pick(published,pageFields)))conflicts.push('unpublished changes/'+wanted.slug)
  }
  if(system&&!same({...pick(system,['name','slug','description','theme']),home:system.home?byID.get(system.home)??'UNRESOLVED':undefined},snapshot.system))conflicts.push('design-systems/shadcn')
  const existingImpl=system?(await payload.find({collection:'implementations',where:{componentPage:{in:all.filter((p:any)=>p.designSystem===system.id).map((p:any)=>p.id)}},pagination:false,depth:0,draft:true,req})).docs:[]
  const implByKey=new Map<string,any>();for(const d of existingImpl){const logical={...pick(d,implementationFields),componentPage:byID.get(d.componentPage)};assert(!implByKey.has(key(logical)),'Duplicate implementation key');implByKey.set(key(logical),d)}
  for(const wanted of snapshot.implementations){const current=implByKey.get(key(wanted));if(!current)continue
   if(!same({...pick(current,implementationFields),componentPage:byID.get(current.componentPage)},wanted))conflicts.push('implementations/'+key(wanted))
   const published=await payload.findByID({collection:'implementations',id:current.id,draft:false,depth:0,req});if(!same(pick(current,implementationFields),pick(published,implementationFields)))conflicts.push('unpublished implementation/'+key(wanted))
  }
  assert.equal(conflicts.length,0,'Existing editorial content differs; no writes: '+conflicts.join(', '))
  const missingPages=snapshot.pages.filter((p:any)=>!bySlug.has(p.slug));const missingImpl=snapshot.implementations.filter((i:any)=>!implByKey.has(key(i)))
  const result={mode:apply?'apply':'preview',system:system?'unchanged':'create',pages:{create:missingPages.length,unchanged:snapshot.pages.length-missingPages.length},implementations:{create:missingImpl.length,unchanged:snapshot.implementations.length-missingImpl.length},contractRevision:revision}
  if(apply){
   if(!system){const {home,...data}=snapshot.system;system=await payload.create({collection:'design-systems',data,req})}
   // Phase 1: allocate every page identity before resolving parent/home relationships.
   for(const page of missingPages){const {parent,homeTemplate,...data}=page;bySlug.set(page.slug,await payload.create({collection:'pages',data:{...data,editorialStatus:data.editorialStatus??null,designSystem:system.id},draft:false,req}))}
   // Phase 2: resolve exclusively through this system's logical slug map.
   for(const page of missingPages)if(page.parent)await payload.update({collection:'pages',id:bySlug.get(page.slug).id,data:{parent:bySlug.get(page.parent).id},draft:false,req})
   for(const page of missingPages)if(page.homeTemplate)await payload.update({collection:'pages',id:bySlug.get(page.slug).id,data:{homeTemplate:mapHomeTargets(page.homeTemplate,target=>bySlug.get(target).id)},draft:false,req})
   if(result.system==='create')await payload.update({collection:'design-systems',id:system.id,data:{home:bySlug.get(snapshot.system.home).id},req})
   for(const i of missingImpl)await payload.create({collection:'implementations',data:{...i,componentPage:bySlug.get(i.componentPage).id},draft:false,req})
  }
  if(apply)await payload.db.commitTransaction(transactionID);else await payload.db.rollbackTransaction(transactionID)
  return result
 }catch(error){await payload.db.rollbackTransaction(transactionID);throw error}
}
export async function connect(uri:string,schema?:string,initialize=false){
 if(initialize){if(schema)assert(/^handbook_bootstrap_[a-z0-9_]+$/.test(schema));const client=new pg.Client({connectionString:uri});await client.connect();try{if(schema){const result=await client.query('SELECT 1 FROM information_schema.schemata WHERE schema_name=$1',[schema]);assert.equal(result.rowCount,0,'Initialization refuses an existing schema')}else{const result=await client.query("SELECT 1 FROM pg_class c JOIN pg_namespace n ON n.oid=c.relnamespace WHERE n.nspname !~ '^pg_' AND n.nspname <> 'information_schema' AND c.relkind IN ('r','p','v','m','S','f') LIMIT 1");assert.equal(result.rowCount,0,'Initialization refuses a nonempty database')}}finally{await client.end()}}
 const c=await config;c.db={...postgresAdapter({pool:{connectionString:uri},push:initialize,schemaName:schema}),allowIDOnCreate:false,name:'postgres'}
 return getPayload({config:c})
}
async function main(){
 const {values}=parseArgs({options:{apply:{type:'boolean'},schema:{type:'string'},'initialize-schema':{type:'boolean'},'initialize-empty-database':{type:'boolean'},help:{type:'boolean'}}})
 if(values.help){console.log('BOOTSTRAP_DATABASE_URI=<target> node --env-file=.env --import tsx scripts/bootstrap-handbook.ts [--apply] [--schema <schema>] [--initialize-schema | --initialize-empty-database]\nEmpty database initialization requires --apply and refuses existing user tables. Schema initialization is restricted to a new isolated handbook_bootstrap_* schema and requires --apply. Ordinary preview/apply uses push:false.');return}
 const uri=process.env.BOOTSTRAP_DATABASE_URI;assert(uri,'Explicit BOOTSTRAP_DATABASE_URI required; DATABASE_URI is never selected implicitly')
 if(values['initialize-schema'])assert(values.apply&&/^handbook_bootstrap_[a-z0-9_]+$/.test(values.schema??''),'Initialization requires --apply and isolated handbook_bootstrap_* schema')
 if(values['initialize-empty-database'])assert(values.apply&&!values.schema&&!values['initialize-schema'],'Empty database initialization requires --apply, without --schema')
 const snapshot=JSON.parse(await readFile(resolve('scripts/content/handbook-snapshot.json'),'utf8'))
 const payload=await connect(uri,values.schema,Boolean(values['initialize-schema']||values['initialize-empty-database']));try{console.log(JSON.stringify(await bootstrap(payload,snapshot,values.apply),null,2))}finally{await payload.destroy()}
}
if(process.argv[1]&&resolve(process.argv[1])===resolve('scripts/bootstrap-handbook.ts'))main().then(()=>process.exit(0)).catch(error=>{console.error(error instanceof assert.AssertionError?error.message:'Bootstrap failed; inspect target configuration and schema (connection details suppressed).');process.exit(1)})
