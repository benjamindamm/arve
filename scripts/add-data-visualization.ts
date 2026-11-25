/** Publish the agreed family, guarding existing content against its captured baseline. */
import assert from 'node:assert/strict'
import {isDeepStrictEqual} from 'node:util'
import {getPayload} from 'payload'
import {postgresAdapter} from '@payloadcms/db-postgres'
import config from '../src/payload.config'
import snapshot from './content/handbook-snapshot.json'
import {visualizationPages,visualizationCrosslinks} from './content/data-visualization'
const apply=process.argv.includes('--apply')
const clean=(v:any):any=>Array.isArray(v)?v.map(clean):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).filter(([k,x])=>!['id','createdAt','updatedAt'].includes(k)&&x!=null).map(([k,x])=>[k,clean(x)])):v
const c=await config;c.db={...postgresAdapter({push:false,pool:{connectionString:process.env.DATABASE_URI}}),name:'postgres',allowIDOnCreate:false}
const p=await getPayload({config:c})
try{
 const system=(await p.find({collection:'design-systems',where:{slug:{equals:'shadcn'}},depth:0})).docs[0];assert(system)
 const before=(await p.find({collection:'pages',pagination:false,depth:0,draft:true,sort:'id'})).docs
 const implementations=(await p.find({collection:'implementations',pagination:false,depth:0,draft:true,sort:'id'})).docs
 const bySlug=new Map(before.filter(d=>d.designSystem===system.id).map(d=>[d.slug,d]))
 for(const row of visualizationPages){
  const current=bySlug.get(row.slug);if(!current)continue
  assert.deepEqual(await p.findByID({collection:'pages',id:current.id,depth:0,draft:false}),current,'Unpublished draft: '+row.slug)
  for(const field of ['title','summary','order','pageType','content'] as const){
   if(isDeepStrictEqual(clean(current[field]),clean(row[field])))continue
   assert.deepEqual(clean(current[field]),clean(snapshot.pages.find(d=>d.slug===row.slug)?.[field]),'Edited since capture: '+row.slug+' / '+field)
  }
  assert.equal(current.parent,row.parent?bySlug.get(row.parent)?.id:null,'Different parent: '+row.slug)
 }
 for(const {slug,block,replace} of visualizationCrosslinks){
  const current=bySlug.get(slug);assert(current,'Missing crosslink target: '+slug)
  assert.deepEqual(await p.findByID({collection:'pages',id:current.id,depth:0,draft:false}),current,'Unpublished draft: '+slug)
  const existing=current.content?.find(b=>b.blockName===block.blockName)
  if(existing&&isDeepStrictEqual(clean(existing),clean(block)))continue
  if(existing)assert(replace,'Crosslink edited: '+slug)
  else assert(!replace,'Missing block to replace: '+slug)
  assert.deepEqual(clean(current.content),clean(snapshot.pages.find(d=>d.slug===slug)?.content),'Content changed since snapshot: '+slug)
 }
 console.log(JSON.stringify({mode:apply?'apply':'preview',create:visualizationPages.filter(r=>!bySlug.has(r.slug)).length,crosslinks:visualizationCrosslinks.length,schemaPush:false}))
 if(apply){
  const transactionID=await p.db.beginTransaction();assert(transactionID);const req={transactionID};const changed=new Set<number>()
  try{
   for(const row of visualizationPages){
    if(bySlug.has(row.slug))continue
    const {parent,pageType,...data}=row
    const saved=await p.create({collection:'pages',depth:0,draft:false,req,data:{...data,pageType:pageType as 'overview'|'guide',parent:parent?bySlug.get(parent)!.id:null,designSystem:system.id,system:'shadcn',_status:'published'}})
    bySlug.set(saved.slug,saved)
   }
   for(const row of visualizationPages){
    const original=bySlug.get(row.slug)!
    const {slug,parent,...wanted}=row
    const data={...wanted,pageType:wanted.pageType as 'overview'|'guide'}
    if(Object.entries(data).every(([k,v])=>isDeepStrictEqual(clean((original as any)[k]),clean(v))))continue
    const current=await p.findByID({collection:'pages',id:original.id,depth:0,draft:true,req});assert.deepEqual(current,original,'Concurrent edit: '+slug)
    await p.update({collection:'pages',id:original.id,depth:0,draft:false,req,data:{...data,_status:'published'}})
    changed.add(original.id)
   }
   for(const {slug,block,replace} of visualizationCrosslinks){
    const original=bySlug.get(slug)!;if(original.content?.some(b=>b.blockName===block.blockName&&isDeepStrictEqual(clean(b),clean(block))))continue
    const current=await p.findByID({collection:'pages',id:original.id,depth:0,draft:true,req});assert.deepEqual(current,original,'Concurrent edit: '+slug)
    const content=replace?original.content!.map(b=>b.blockName===block.blockName?block:b):[...(original.content??[]),block]
    const saved=await p.update({collection:'pages',id:original.id,depth:0,draft:false,req,data:{content,_status:'published'}})
    for(const [key,value] of Object.entries(original))if(!['content','updatedAt'].includes(key))assert.deepEqual((saved as any)[key],value,'Unexpected field: '+key)
    changed.add(original.id)
   }
   const after=(await p.find({collection:'pages',pagination:false,depth:0,draft:true,sort:'id',req})).docs
   for(const original of before)if(!changed.has(original.id))assert.deepEqual(after.find(d=>d.id===original.id),original,'Unrelated page changed: '+original.slug)
   assert(isDeepStrictEqual((await p.find({collection:'implementations',pagination:false,depth:0,draft:true,sort:'id',req})).docs,implementations))
   await p.db.commitTransaction(transactionID)
   console.log(JSON.stringify({status:'applied',plannedPages:visualizationPages.length,updatedPages:changed.size,unrelatedPagesUnchanged:true,implementationsUnchanged:true}))
  }catch(error){await p.db.rollbackTransaction(transactionID);throw error}
 }
}finally{await p.destroy()}
process.exit(0)
