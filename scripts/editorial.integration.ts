import assert from 'node:assert/strict'
import pg from 'pg'
import {connect} from './bootstrap-handbook'
const uri=process.env.DATABASE_URI;assert(uri)
const schema='handbook_bootstrap_editorial_'+Date.now()+'_'+process.pid
let p:any
try{
 p=await connect(uri,schema,true)
 const data={title:'Editorial test',slug:'editorial-test',content:[],_status:'published'}
 const page=await p.create({collection:'pages',data,draft:false,depth:0})
 assert.equal(page.editorialStatus,'draft');assert.equal(page._status,'published')
 await assert.rejects(p.update({collection:'pages',id:page.id,data:{editorialStatus:'clarify',editorialNote:'  '},draft:false}),/Klärungsbedarf|editorialNote|validation/i)
 const published=await p.update({collection:'pages',id:page.id,data:{editorialStatus:'clarify',editorialNote:'Korrekturweg offen',editorialOwner:'UX'},draft:false,depth:0})
 assert.equal(published.editorialNote,'Korrekturweg offen');assert.equal(published._status,'published')
 await p.update({collection:'pages',id:page.id,data:{editorialStatus:'checked',editorialNote:'Textreview'},draft:true})
 assert.equal((await p.findByID({collection:'pages',id:page.id,draft:false,depth:0})).editorialStatus,'clarify')
 assert.equal((await p.findByID({collection:'pages',id:page.id,draft:true,depth:0})).editorialStatus,'checked')
 const versions=await p.findVersions({collection:'pages',where:{parent:{equals:page.id}},pagination:false})
 assert(versions.docs.some((v:any)=>v.version.editorialStatus==='clarify'))
 const legacy=await p.create({collection:'pages',data:{...data,slug:'legacy-test',editorialStatus:null},draft:false,depth:0})
 assert.equal(legacy.editorialStatus,null)
 console.log('PASS: independent publication/editorial states, clarify validation, draft isolation, versions and unassigned legacy records')
}finally{
 if(p)await p.destroy()
 const c=new pg.Client({connectionString:uri});await c.connect();try{await c.query('DROP SCHEMA IF EXISTS "'+schema+'" CASCADE')}finally{await c.end()}
}
process.exit(0)
