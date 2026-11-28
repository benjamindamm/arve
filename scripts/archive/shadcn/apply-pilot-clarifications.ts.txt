import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {getPayload} from 'payload'
import {postgresAdapter} from '@payloadcms/db-postgres'
import config from '../src/payload.config'
import {pilotRelease} from './content/pilot-release'
import baseline from './content/pilot-clarifications-baseline.json'
const clean=(x:unknown):unknown=>Array.isArray(x)?x.map(clean):x&&typeof x==='object'?Object.fromEntries(Object.entries(x).filter(([k,v])=>k!=='id'&&v!=null).sort(([a],[b])=>a.localeCompare(b)).map(([k,v])=>[k,clean(v)])):x
const digest=(x:unknown)=>createHash('sha256').update(JSON.stringify(clean(x))).digest('hex')
const cfg=await config;cfg.db={...postgresAdapter({push:false,pool:{connectionString:process.env.DATABASE_URI}}),name:'postgres',allowIDOnCreate:false}
const payload=await getPayload({config:cfg})
try {
 const transactionID=await payload.db.beginTransaction();assert(transactionID);const req={transactionID}
 try {
 for(const [slug,expected] of Object.entries(baseline)){
  const {docs:[page]}=await payload.find({collection:'pages',where:{slug:{equals:slug}},draft:true,depth:0,req});assert(page&&page._status==='published')
  const desired=pilotRelease.find(p=>p.slug===slug)!;const current=digest(page.content)
  assert(current===expected||current===digest(desired.content),'Redaktionelle Änderung: '+slug)
  if(process.argv.includes('--publish')&&current!==digest(desired.content)){
   const updated=await payload.update({collection:'pages',id:page.id,draft:false,depth:0,req,data:{content:desired.content,_status:'published'}})
   for(const [key,value] of Object.entries(page))if(!['content','updatedAt'].includes(key))assert.deepEqual(updated[key as keyof typeof updated],value,key)
   assert.equal(digest(updated.content),digest(desired.content))
  }
  console.log(slug+': '+(current===digest(desired.content)?'unchanged':'clarifications verified'))
 }
 if(process.argv.includes('--publish'))await payload.db.commitTransaction(transactionID);else await payload.db.rollbackTransaction(transactionID)
 }catch(error){await payload.db.rollbackTransaction(transactionID);throw error}
}finally{await payload.destroy()}
process.exit(0)
