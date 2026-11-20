import assert from 'node:assert/strict'
import {getPayload} from 'payload'
import {postgresAdapter} from '@payloadcms/db-postgres'
import config from '../src/payload.config'
import {getContract} from '../src/contracts/catalog'
const revision='65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26'
const cfg=await config
cfg.db={...postgresAdapter({push:false,pool:{connectionString:process.env.DATABASE_URI}}),name:'postgres',allowIDOnCreate:false}
const payload=await getPayload({config:cfg})
try{
 const {docs:[system]}=await payload.find({collection:'design-systems',where:{slug:{equals:'shadcn'}},depth:0})
 assert(system)
 const {docs:pages}=await payload.find({collection:'pages',pagination:false,draft:true,depth:0,where:{and:[{designSystem:{equals:system.id}},{component:{exists:true}}]}})
 assert.deepEqual(pages.map(p=>p.component).sort(),['button','checkbox','input','switch'])
 const before=(await payload.find({collection:'implementations',pagination:false,depth:0,sort:'id'})).docs
 const transactionID=await payload.db.beginTransaction();assert(transactionID);const req={transactionID}
 try{
 for(const page of pages){
 assert.equal(page._status,'published','Unveröffentlichter Entwurf: '+page.slug)
 const contract={library:'shadcn',component:page.component!,revision};assert(getContract(contract))
 const current=await payload.findByID({collection:'pages',id:page.id,draft:true,depth:0,req});assert.equal(current.updatedAt,page.updatedAt)
 if(page.contract?.revision!==revision) await payload.update({collection:'pages',id:page.id,draft:false,data:{contract,_status:'published'},req})
 const after=await payload.findByID({collection:'pages',id:page.id,draft:false,depth:0,req})
 for(const [key,value] of Object.entries(page)) if(!['contract','updatedAt'].includes(key)) assert.deepEqual(after[key as keyof typeof after],value,key)
 assert.equal(after.contract?.revision,revision)
 console.log(page.component+': '+page.contract?.revision+' → '+revision)
 }
 assert.deepEqual((await payload.find({collection:'implementations',pagination:false,depth:0,sort:'id',req})).docs,before)
 await payload.db.commitTransaction(transactionID)
 }catch(e){await payload.db.rollbackTransaction(transactionID);throw e}
}finally{await payload.destroy()}
process.exit(0)
