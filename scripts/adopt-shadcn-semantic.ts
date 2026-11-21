import assert from 'node:assert/strict'
import { isDeepStrictEqual } from 'node:util'
import { readFile } from 'node:fs/promises'
import { getPayload } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import config from '../src/payload.config'
import { getContract } from '../src/contracts/catalog'
import { shadcnReferenceRevision as revision, previousShadcnReferenceRevision as previous } from '../src/contracts/current-reference'
import { release as button } from './content/page-reworks/button'

const apply=process.argv.includes('--apply')
const baseline=JSON.parse(await readFile('.runtime/semantic-before.json','utf8'))
const c=await config
c.db={...postgresAdapter({pool:{connectionString:process.env.DATABASE_URI},push:false}),name:'postgres',allowIDOnCreate:false}
const p=await getPayload({config:c})
const clean=(v:any):any=>Array.isArray(v)?v.map(clean):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).filter(([k,x])=>k!=='id'&&x!=null).map(([k,x])=>[k,clean(x)])):v
const equal=(a:unknown,b:unknown)=>isDeepStrictEqual(clean(a),clean(b))
try {
 const read=(draft:boolean)=>p.find({collection:'pages',draft,depth:0,pagination:false,sort:'id',where:{designSystem:{equals:baseline.system.id}}}).then(r=>r.docs)
 const published=await read(false), drafts=await read(true)
 const components=published.filter(page=>page.component)
 assert.equal(components.length,69)
 const rows=components.map(page=>{
  assert.deepEqual(page,drafts.find(d=>d.id===page.id),'Unpublished editorial change: '+page.slug)
  assert([previous,revision].includes(page.contract?.revision??''),'Unexpected reference: '+page.slug)
  const contract=getContract({library:'shadcn',component:page.component,revision});assert(contract?.status==='complete',page.slug)
  assert(contract.styleAssets?.some(asset=>asset.path==='tokens.css'),page.slug+': tokens.css missing')
  assert(contract.styleAssets?.some(asset=>asset.kind==='font'),page.slug+': fonts missing')
  const data={contract:{library:'shadcn',component:page.component!,revision},...(page.component==='button'?{summary:button.summary,content:button.content}:{}),_status:'published' as const}
  const pending=!Object.entries(data).every(([key,value])=>equal(page[key as keyof typeof page],value))
  if(pending) {
   assert.equal(page.contract?.revision,previous,'Refusing to overwrite edited current reference: '+page.slug)
   const old=baseline.published.find((old:any)=>old.id===page.id);assert.deepEqual(page,old,'Changed since capture: '+page.slug)
  }
  return {page,data,pending}
 })
 const pending=rows.filter(row=>row.pending)
 console.log(JSON.stringify({mode:apply?'apply':'preview',components:69,update:pending.length,revision}))
 if(apply&&pending.length) {
  const transactionID=await p.db.beginTransaction();assert(transactionID);const req={transactionID}
  try {
   for(const {page,data}of pending){const current=await p.findByID({collection:'pages',id:page.id,draft:true,depth:0,req});assert.equal(current.updatedAt,page.updatedAt,'Concurrent edit');await p.update({collection:'pages',id:page.id,data,draft:false,depth:0,req})}
   await p.db.commitTransaction(transactionID)
  }catch(error){await p.db.rollbackTransaction(transactionID);throw error}
 }
 if(apply) {
  const after=await read(false);assert.equal(after.length,published.length)
  for(const old of published){const now=after.find(page=>page.id===old.id);assert(now);if(!old.component)assert.deepEqual(now,old,old.slug);else {assert.equal(now.contract?.revision,revision);for(const[key,value]of Object.entries(old))if(!['contract','updatedAt',...(old.component==='button'?['content','summary']:[])].includes(key))assert.deepEqual(now[key as keyof typeof now],value,old.slug+':'+key)}}
  assert.deepEqual((await p.find({collection:'implementations',depth:0,pagination:false,draft:false,sort:'id'})).docs,baseline.implementations,'Historical implementation changed')
  console.log(JSON.stringify({status:'PASS',pages:after.length,componentPins:69,preservedOtherComponentContent:68,implementationUnchanged:true}))
 }
}finally{await p.destroy()}
process.exit(0)
