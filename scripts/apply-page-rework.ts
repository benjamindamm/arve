import assert from 'node:assert/strict'
import {isDeepStrictEqual} from 'node:util'
import {resolve} from 'node:path'
import {pathToFileURL} from 'node:url'
import {getPayload} from 'payload'
import {postgresAdapter} from '@payloadcms/db-postgres'
import config from '../src/payload.config'
const slug=process.argv[2];assert(/^[a-z][a-z0-9-]+$/.test(slug??''))
const {release}=await import(pathToFileURL(resolve('scripts/content/page-reworks/'+slug+'.ts')).href)
assert(!/postfinance|beispielsystem/i.test(JSON.stringify(release)), 'Öffentliche Quelle enthält unerwünschte Herkunftsbezeichnung')
const c=await config;c.db={...postgresAdapter({push:false,pool:{connectionString:process.env.DATABASE_URI}}),name:'postgres',allowIDOnCreate:false}
const p=await getPayload({config:c})
const clean=(v:any):any=>Array.isArray(v)?v.map(clean):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).filter(([k,x])=>k!=='id'&&x!=null).map(([k,x])=>[k,clean(x)])):v
try{
 const page=(await p.find({collection:'pages',depth:0,draft:true,where:{slug:{equals:'shadcn-'+slug}}})).docs[0];assert(page&&page._status==='published')
 const published=await p.findByID({collection:'pages',id:page.id,depth:0,draft:false});assert.deepEqual(page,published,'Neuere Entwurfsversion')
 const data={summary:release.summary,content:release.content,...(release.title?{title:release.title}:{})}
 const same=()=>Object.entries(data).every(([k,v])=>isDeepStrictEqual(clean(page[k as keyof typeof page]),clean(v)))
 if(!same())assert.equal(page.updatedAt,release.expectedUpdatedAt,'Redaktionelle Änderung seit Analyse')
 if(process.argv.includes('--publish')&&!same()){
 const transactionID=await p.db.beginTransaction();assert(transactionID);const req={transactionID};try{
 const current=await p.findByID({collection:'pages',id:page.id,depth:0,draft:true,req});assert.equal(current.updatedAt,page.updatedAt)
 const updated=await p.update({collection:'pages',id:page.id,depth:0,draft:false,req,data:{...data,_status:'published'}})
 for(const [k,v]of Object.entries(page))if(!['summary','content','title','updatedAt'].includes(k))assert.deepEqual(updated[k as keyof typeof updated],v,k)
 await p.db.commitTransaction(transactionID)
 }catch(e){await p.db.rollbackTransaction(transactionID);throw e}}
 console.log(JSON.stringify({slug,mode:process.argv.includes('--publish')?'publish':'preview',blocks:release.content.length,unchanged:same()}))
}finally{await p.destroy()}
process.exit(0)
