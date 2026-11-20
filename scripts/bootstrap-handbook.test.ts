/** Integration test: only a newly named isolated schema is initialized and mutated. */
import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
import pg from 'pg'
import {bootstrap,connect,revision} from './bootstrap-handbook'
const schema='handbook_bootstrap_test_'+Date.now()+'_'+process.pid
const uri=process.env.BOOTSTRAP_TEST_DATABASE_URI
assert(uri,'BOOTSTRAP_TEST_DATABASE_URI is required')
const snapshot=JSON.parse(await readFile('scripts/content/handbook-snapshot.json','utf8'))
let payload:any
try{
 payload=await connect(uri,schema,true)
 const foreignSystem=await payload.create({collection:'design-systems',data:{slug:'bootstrap-unrelated',name:'Unrelated test system'}})
 const foreignPage=await payload.create({collection:'pages',depth:0,data:{slug:'bootstrap-unrelated-page',title:'Unrelated test page',designSystem:foreignSystem.id,_status:'published'},draft:false})
 const preview=await bootstrap(payload,snapshot);assert.equal(preview.pages.create,snapshot.pages.length)
 assert.equal((await payload.find({collection:'pages',pagination:false})).totalDocs,1)
 const first=await bootstrap(payload,snapshot,true);assert.equal(first.pages.create,snapshot.pages.length)
 const before=await payload.find({collection:'pages',pagination:false,depth:0,draft:true,sort:'slug'})
 const second=await bootstrap(payload,snapshot,true);assert.equal(second.pages.create,0);assert.equal(second.implementations.create,0)
 assert.deepEqual((await payload.find({collection:'pages',pagination:false,depth:0,draft:true,sort:'slug'})).docs,before.docs)
 const bySlug=new Map<string,any>(before.docs.map((p:any)=>[p.slug,p]))
 const system=(await payload.find({collection:'design-systems',where:{slug:{equals:'shadcn'}},pagination:false,depth:0})).docs[0]
 assert.equal(system.home,bySlug.get(snapshot.system.home).id)
 for(const p of snapshot.pages){const actual=bySlug.get(p.slug);assert.equal(actual.designSystem,system.id);if(p.parent)assert.equal(actual.parent,bySlug.get(p.parent).id);if(p.contract?.revision)assert.equal(actual.contract.revision,revision)}
 const impl=(await payload.find({collection:'implementations',pagination:false,depth:0})).docs[0]
 assert.deepEqual(await payload.findByID({collection:'design-systems',id:foreignSystem.id,depth:0}),foreignSystem)
 assert.deepEqual(await payload.findByID({collection:'pages',id:foreignPage.id,depth:0}),foreignPage)
 assert.equal(impl.componentPage,bySlug.get(snapshot.implementations[0].componentPage).id)
 assert.equal(impl.contract.revision,'fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d')
 const page=bySlug.get('shadcn-button');await payload.update({collection:'pages',id:page.id,data:{summary:'Editorial change under test'},draft:true})
 await assert.rejects(bootstrap(payload,snapshot,true),/Existing editorial content differs/)
 assert.equal((await payload.findByID({collection:'pages',id:page.id,draft:true})).summary,'Editorial change under test')
 assert.equal((await payload.findByID({collection:'pages',id:page.id,draft:false})).summary,page.summary)
 console.log(JSON.stringify({result:'PASS',schema,checks:['unrelated system and page unchanged','preview does not write','fresh install matches snapshot counts','reapply no-op incl timestamps','system/home/parents/implementation relationships','4 portable page pins; historical implementation pin preserved','editorial draft guard; published content preserved']}))
}finally{
 if(payload)await payload.destroy()
 const client=new pg.Client({connectionString:uri});await client.connect();try{await client.query('DROP SCHEMA IF EXISTS "'+schema+'" CASCADE')}finally{await client.end()}
}
process.exit(0)
