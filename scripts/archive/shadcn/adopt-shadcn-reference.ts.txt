import assert from 'node:assert/strict'
import {getPayload} from 'payload'
import {postgresAdapter} from '@payloadcms/db-postgres'
import {mkdir,writeFile} from 'node:fs/promises'
import config from '../src/payload.config'
const c=await config;c.db={...postgresAdapter({push:false,pool:{connectionString:process.env.DATABASE_URI}}),name:'postgres',allowIDOnCreate:false}
const p=await getPayload({config:c})
const neutral='Die Projektinhalte, Abstände und Anordnungsregeln gehören zur shadcn-Referenzimplementierung. Labels stehen in der Formularreferenz über den Feldern.'
function revise(x:unknown):any {
 if(typeof x==='string')return x.includes('Die PostFinance-Demo liefert')?neutral:x.replaceAll('shadcn-Referenzsystem','shadcn-Referenzimplementierung').replaceAll('shadcn als öffentliches Referenzsystem','shadcn als öffentliche Referenzimplementierung').replaceAll('shadcn als Referenzsystem','shadcn als Referenzimplementierung')
 if(Array.isArray(x))return x.map(revise)
 if(x&&typeof x==='object')return Object.fromEntries(Object.entries(x).map(([k,v])=>[k,revise(v)]))
 return x
}
try {
 const systems=(await p.find({collection:'design-systems',pagination:false,depth:0})).docs
 const shadcn=systems.find(s=>s.slug==='shadcn');assert(shadcn)
 const sample=systems.find(s=>s.slug==='beispiel')
 const pages=(await p.find({collection:'pages',depth:0,draft:true,pagination:false})).docs
 const samplePages=pages.filter(page=>page.designSystem===sample?.id)
 if(sample)assert.deepEqual(samplePages.map(page=>page.slug).sort(),['beispiel-grundlagen','beispiel-hinweis'])
 const impl=(await p.find({collection:'implementations',pagination:false,depth:0})).docs
 assert(!impl.some(i=>samplePages.some(page=>page.id===i.componentPage)))
 await mkdir('.runtime',{recursive:true});await writeFile('.runtime/before-shadcn-reference.json',JSON.stringify({systems,pages:samplePages},null,2))
 const transactionID=await p.db.beginTransaction();assert(transactionID);const req={transactionID}
 try {
  for(const page of pages.filter(page=>page.designSystem===shadcn.id)) {
   const content=revise(page.content)
   if(JSON.stringify(content)===JSON.stringify(page.content))continue
   assert.equal(page._status,'published','Offener Entwurf '+page.slug)
   const updated=await p.update({collection:'pages',id:page.id,depth:0,draft:false,req,data:{content,_status:'published'}})
   for(const key of ['contract','demo','parent','designSystem','slug'] as const)assert.deepEqual(updated[key],page[key])
   console.log('Neutraler Inhalt: '+page.slug)
  }
  await p.update({collection:'design-systems',id:shadcn.id,req,data:{description:'Referenzimplementierung für Gestaltungsregeln, Layouts, UX-Patterns und Komponenten.'}})
  if(sample){await p.update({collection:'design-systems',id:sample.id,req,data:{home:null}});for(const page of samplePages)await p.delete({collection:'pages',id:page.id,req});await p.delete({collection:'design-systems',id:sample.id,req})}
  assert.deepEqual((await p.find({collection:'implementations',pagination:false,depth:0,req})).docs,impl)
  await p.db.commitTransaction(transactionID)
 }catch(e){await p.db.rollbackTransaction(transactionID);throw e}
 console.log('shadcn als Referenzimplementierung; Beispielsystem entfernt.')
}finally{await p.destroy()}
process.exit(0)
