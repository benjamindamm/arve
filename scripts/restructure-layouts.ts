/** Transactional editorial migration. Existing records/versions remain; differing drafts abort. */
import assert from 'node:assert/strict'
import {isDeepStrictEqual} from 'node:util'
import {getPayload} from 'payload'
import {postgresAdapter} from '@payloadcms/db-postgres'
import config from '../src/payload.config'
import plan from './content/layout-restructure.json'
import {canonicalHandbookHref} from '../src/docs/handbook-paths'
const apply=process.argv.includes('--apply')
const clean=(v:any):any=>Array.isArray(v)?v.map(clean):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).filter(([k,x])=>!['id','createdAt','updatedAt'].includes(k)&&x!=null).map(([k,x])=>[k,clean(x)])):v
const rewrite=(v:any,key=''):any=>typeof v==='string'&&['url','href'].includes(key)?canonicalHandbookHref(v):Array.isArray(v)?v.map(x=>rewrite(x)):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,rewrite(x,k)])):v
const c=await config;c.db={...postgresAdapter({push:false,pool:{connectionString:process.env.DATABASE_URI}}),name:'postgres',allowIDOnCreate:false}
const p=await getPayload({config:c})
try{
 const system=(await p.find({collection:'design-systems',where:{slug:{equals:'shadcn'}},depth:0})).docs[0];assert(system)
 const before=(await p.find({collection:'pages',pagination:false,depth:0,draft:true,sort:'id'})).docs
 const impl=(await p.find({collection:'implementations',pagination:false,depth:0,draft:true,sort:'id'})).docs
 const bySlug=new Map(before.filter(d=>d.designSystem===system.id).map(d=>[d.slug,d]))
 const selected=new Map<string,any>()
 for(const row of plan.rows){
  const current=bySlug.get(row.slug)??(row.sourceSlug?bySlug.get(row.sourceSlug):undefined)
  const wanted={slug:row.slug,title:row.title,summary:row.summary,pageType:row.pageType,order:row.order,content:rewrite(row.content)}
  if(current){
   const published=await p.findByID({collection:'pages',id:current.id,depth:0,draft:false});assert.deepEqual(current,published,'Unpublished draft: '+current.slug)
   const same=Object.entries(wanted).every(([k,v])=>isDeepStrictEqual(clean((current as any)[k]),clean(v)))
   if(!same)assert.equal(current.updatedAt,row.expectedUpdatedAt,'Editorial change since analysis: '+current.slug)
   selected.set(row.slug,current)
  }
 }
 assert(!/postfinance|beispielsystem/i.test(JSON.stringify(plan.rows.map(r=>r.content))))
 console.log(JSON.stringify({mode:apply?'apply':'preview',schemaPush:false,planned:plan.rows.length,create:plan.rows.filter(r=>!selected.has(r.slug)).length,preserveVersions:true}))
 if(apply){
  const transactionID=await p.db.beginTransaction();assert(transactionID);const req={transactionID}
  try{
   for(const row of plan.rows)if(!selected.has(row.slug)){
    const saved=await p.create({collection:'pages',draft:false,depth:0,req,data:{slug:row.slug,title:row.title,summary:row.summary,system:'shadcn',designSystem:system.id,pageType:'layout',order:row.order,content:rewrite(row.content),_status:'published'}});selected.set(row.slug,saved)
   }
   const changedIDs=new Set<number>()
   for(const row of plan.rows){
    const original=selected.get(row.slug);assert(original)
    const current=await p.findByID({collection:'pages',id:original.id,depth:0,draft:true,req});assert.equal(current.updatedAt,original.updatedAt,'Concurrent update: '+original.slug)
    const parent=row.parent?selected.get(row.parent)??bySlug.get(row.parent):undefined;if(row.parent)assert(parent)
    const data={slug:row.slug,title:row.title,summary:row.summary,pageType:'layout' as const,order:row.order,parent:parent?.id??null,content:rewrite(row.content),_status:'published' as const}
    if(Object.entries(data).every(([key,value])=>isDeepStrictEqual(clean(current[key as keyof typeof current]),clean(value))))continue
    const saved=await p.update({collection:'pages',id:original.id,depth:0,draft:false,req,data})
    for(const [key,value] of Object.entries(original))if(!['slug','title','summary','pageType','order','parent','content','updatedAt'].includes(key))assert.deepEqual((saved as any)[key],value,'Unexpected field change: '+key)
    changedIDs.add(original.id)
   }
   for(const original of before)if(original.designSystem===system.id&&!changedIDs.has(original.id)){
    const updated=rewrite(original.content)
    if(isDeepStrictEqual(updated,original.content))continue
    const published=await p.findByID({collection:'pages',id:original.id,depth:0,draft:false,req});assert.deepEqual(published,original,'Draft changed: '+original.slug)
    const saved=await p.update({collection:'pages',id:original.id,draft:false,depth:0,req,data:{content:updated,_status:'published'}})
    const strip=({content,updatedAt,...rest}:any)=>rest;assert.deepEqual(strip(saved),strip(original));changedIDs.add(original.id)
   }
   const after=(await p.find({collection:'pages',pagination:false,depth:0,draft:true,sort:'id',req})).docs
   for(const original of before)if(!changedIDs.has(original.id))assert.deepEqual(after.find(d=>d.id===original.id),original,'Unrelated page changed: '+original.slug)
   assert.deepEqual((await p.find({collection:'implementations',pagination:false,depth:0,draft:true,sort:'id',req})).docs,impl)
   await p.db.commitTransaction(transactionID)
   console.log(JSON.stringify({status:'applied',changed:changedIDs.size,unrelatedPagesUnchanged:true,implementationsUnchanged:true,noDeletes:true}))
  }catch(error){await p.db.rollbackTransaction(transactionID);throw error}
 }
}finally{await p.destroy()}
process.exit(0)
