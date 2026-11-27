/** Real PostgreSQL check; only a newly allocated schema is changed. */
import assert from 'node:assert/strict'
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import pg from 'pg'
import { connect, bootstrap } from './bootstrap-handbook'
import { prepareTemplate, importTemplate } from './lib/system-template'
const uri=process.env.DATABASE_URI;assert(uri)
const schema='handbook_bootstrap_copy_'+Date.now()+'_'+process.pid
const snapshot=JSON.parse(await readFile('scripts/content/handbook-snapshot.json','utf8'))
let payload:any
let mediaFilename:string|undefined
const mediaDirectory='.runtime/'+schema
try {
 payload=await connect(uri,schema,true)
 await bootstrap(payload,snapshot,true)
 const original=(await payload.find({collection:'pages',pagination:false,depth:0,draft:true,sort:'slug'})).docs
 const copy=prepareTemplate(snapshot,'reference-copy','Reference copy')
 const preview=await importTemplate(payload,copy)
 assert.equal(preview.pages,snapshot.pages.length)
 assert.equal((await payload.find({collection:'pages',pagination:false})).totalDocs,original.length)
 await importTemplate(payload,copy,true)
 const target=(await payload.find({collection:'design-systems',where:{slug:{equals:'reference-copy'}},depth:0})).docs[0]
 const pages=(await payload.find({collection:'pages',where:{designSystem:{equals:target.id}},pagination:false,depth:0,draft:true})).docs
 assert.equal(pages.length,snapshot.pages.length); assert(pages.every((p:any)=>p._status==='draft'))
 const ids=new Set(pages.map((p:any)=>p.id)); assert(ids.has(target.home))
 assert(pages.every((p:any)=>!p.parent||ids.has(p.parent)))
 const {mapHomeTargets}=await import('../src/docs/system-home-template')
 const copiedHome=pages.find((page:any)=>page.id===target.home)
 assert(copiedHome.homeTemplate?.page?.primary,'Reference startpage targets must be copied')
 for(const page of pages)mapHomeTargets(page.homeTemplate,id=>{assert(ids.has(id),'Home target points outside copied system');return id})
 const sourceHome=original.find((page:any)=>page.slug===snapshot.system.home)
 assert.notEqual(copiedHome.homeTemplate.page.primary,sourceHome.homeTemplate.page.primary)
 const repeat=await bootstrap(payload,snapshot,false)
 assert.equal(repeat.pages.create,0,'Reference with home bindings remains idempotent')
 const impl=(await payload.find({collection:'implementations',where:{componentPage:{in:[...ids]}},pagination:false,draft:true,depth:0})).docs
 assert.equal(impl.length,snapshot.implementations.length);assert(impl.every((i:any)=>i._status==='draft' && i.releaseStatus==='draft'))
 assert.deepEqual((await payload.find({collection:'pages',where:{designSystem:{not_equals:target.id}},pagination:false,depth:0,draft:true,sort:'slug'})).docs,original)
 await assert.rejects(importTemplate(payload,copy,true),/already exists/)
 await mkdir(mediaDirectory,{recursive:true})
 const bytes=Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><rect width="8" height="8" fill="blue"/></svg>')
 await writeFile(mediaDirectory+'/reference.svg',bytes)
 const mediaSource={format:1,system:{slug:'shadcn',name:'Reference',home:'shadcn-media'},pages:[{slug:'shadcn-media',title:'Media',content:[{blockType:'guideline',recommendation:'do',explanation:'Test image',image:'reference.svg'}]}],implementations:[],media:[{key:'reference.svg',mimeType:'image/svg+xml',alt:'Blue square',sha256:createHash('sha256').update(bytes).digest('hex')}]}
 await importTemplate(payload,prepareTemplate(mediaSource,'media-copy','Media copy'),true,mediaDirectory)
 const uploaded=(await payload.find({collection:'media',pagination:false,depth:0})).docs[0]
 mediaFilename=uploaded.filename
 const mediaPage=(await payload.find({collection:'pages',where:{slug:{equals:'media-copy-media'}},draft:true,depth:0})).docs[0]
 assert.equal(mediaPage.content[0].image,uploaded.id)
 assert.deepEqual(await readFile('media/'+mediaFilename),bytes)
 console.log(JSON.stringify({result:'PASS',pages:pages.length,components:pages.filter((p:any)=>p.component).length,checks:['fresh schema reference bootstrap','preview writes nothing','independent draft clone','parents and home within copy','implementation draft status','source unchanged','duplicate target refused','media bytes and relationship copied']}))
} finally {
 if(payload)await payload.destroy()
 if(mediaFilename)await rm('media/'+mediaFilename,{force:true})
 await rm(mediaDirectory,{recursive:true,force:true})
 const client=new pg.Client({connectionString:uri}); await client.connect()
 try{await client.query('DROP SCHEMA IF EXISTS "'+schema+'" CASCADE')}finally{await client.end()}
}
process.exit(0)
