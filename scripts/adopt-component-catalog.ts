import assert from 'node:assert/strict'
import {readFile,writeFile,readdir} from 'node:fs/promises'
import {isDeepStrictEqual} from 'node:util'
import {execFileSync} from 'node:child_process'
import {getPayload} from 'payload'
import {postgresAdapter} from '@payloadcms/db-postgres'
import config from '../src/payload.config'
import {editorialContent,type ComponentEditorial} from '../src/docs/component-editorial'
import {shadcnReferenceRevision as revision} from '../src/contracts/current-reference'
const baselineFile='.runtime/component-catalog/baseline.json'
const apply=process.argv.includes('--apply'),capture=process.argv.includes('--capture')
if(!capture)execFileSync(process.execPath,['--import','tsx','scripts/check-component-catalog.ts'],{stdio:'inherit'})
const c=await config;c.db={...postgresAdapter({pool:{connectionString:process.env.DATABASE_URI},push:false}),name:'postgres',allowIDOnCreate:false}
const p=await getPayload({config:c})
const clean=(v:any):any=>Array.isArray(v)?v.map(clean):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).filter(([k,x])=>k!=='id'&&x!=null).map(([k,x])=>[k,clean(x)])):v
try{
 const {docs:[system]}=await p.find({collection:'design-systems',where:{slug:{equals:'shadcn'}},depth:0,limit:1});assert(system)
 const read=(draft:boolean)=>p.find({collection:'pages',where:{designSystem:{equals:system.id}},draft,depth:0,pagination:false,sort:'id'}).then(r=>r.docs)
 const published=await read(false),drafts=await read(true)
 const implementations=(await p.find({collection:'implementations',depth:0,pagination:false,draft:false,sort:'id'})).docs
 if(capture){assert(!apply);await writeFile(baselineFile,JSON.stringify({system,published,implementations},null,2)+'\n',{flag:'wx'});console.log('Baseline captured: '+published.length+' pages')}
 else{
  const baseline=JSON.parse(await readFile(baselineFile,'utf8'))
  const lastApplied=await readFile('.runtime/component-catalog/applied.json','utf8').then(JSON.parse).catch((e:any)=>{if(e.code==='ENOENT')return {};throw e})
  assert.equal(system.id,baseline.system.id);assert.equal(published.length,baseline.published.length)
  const progress=JSON.parse(await readFile('docs/handbook/component-catalog/progress.json','utf8'))
  const files=Object.entries(progress.components).filter(([,entry])=>['reviewed','published'].includes((entry as any).status)).map(([slug])=>slug+'.json').sort()
  const rows=[]
  for(const file of files){
   const doc=JSON.parse(await readFile('scripts/content/component-docs/'+file,'utf8')) as ComponentEditorial
   assert.equal(doc.library,'shadcn');assert.equal(doc.revision,revision);assert.notEqual(doc.component,'button')
   const page=published.find(page=>page.component===doc.component);assert(page,doc.component)
   assert.deepEqual(page,drafts.find(d=>d.id===page.id),'Unpublished editor changes: '+doc.component)
   assert.equal(page.contract?.revision,revision)
   const data={summary:doc.summary,content:editorialContent(doc),_status:'published' as const}
   if(isDeepStrictEqual(clean(page.content),clean(data.content))&&page.summary===doc.summary)continue
   assert.deepEqual(page,lastApplied[doc.component]??baseline.published.find((b:any)=>b.id===page.id),'Edited since last approved publication: '+doc.component)
   rows.push({page,data})
  }
  console.log(JSON.stringify({mode:apply?'apply':'preview',ready:files.length,updates:rows.map(r=>r.page.component)}))
  if(apply&&rows.length){
   const transactionID=await p.db.beginTransaction();assert(transactionID);const req={transactionID}
   try{for(const {page,data} of rows){const current=await p.findByID({collection:'pages',id:page.id,depth:0,draft:true,req});assert.equal(current.updatedAt,page.updatedAt,'Concurrent edit');await p.update({collection:'pages',id:page.id,data,draft:false,depth:0,req})}await p.db.commitTransaction(transactionID)}catch(e){await p.db.rollbackTransaction(transactionID);throw e}
  }
  if(apply){
   const after=await read(false),done=new Set(files.map(f=>f.slice(0,-5)))
   for(const before of published){const now=after.find(page=>page.id===before.id);assert(now);if(!done.has(before.component??''))assert.deepEqual(now,before,'Unrelated page changed: '+before.slug);else{for(const[k,v]of Object.entries(before))if(!['content','summary','updatedAt'].includes(k))assert.deepEqual(now[k as keyof typeof now],v,before.slug+':'+k)}}
   assert.deepEqual((await p.find({collection:'implementations',depth:0,pagination:false,draft:false,sort:'id'})).docs,baseline.implementations)
   await writeFile('.runtime/component-catalog/applied.json',JSON.stringify(Object.fromEntries(after.filter(page=>done.has(page.component??'')).map(page=>[page.component,page])),null,2)+'\n')
   console.log(JSON.stringify({status:'PASS',publishedEditorialPages:files.length,preservedOtherPages:after.length-files.length,implementationsUnchanged:true}))
  }
 }
}finally{await p.destroy()}
process.exit(0)
