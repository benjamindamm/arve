import assert from 'node:assert/strict'
import pg from 'pg'
import {connect} from './bootstrap-handbook'
import {upgradeHomeTemplate} from './lib/home-template-migration'
const uri=process.env.DATABASE_URI;assert(uri)
const schema='handbook_bootstrap_home_'+Date.now()+'_'+process.pid
const c=new pg.Client({connectionString:uri});await c.connect();let p:any
try {
  p=await connect(uri,schema,true)
  await p.create({collection:'pages',data:{title:'Existing page',slug:'existing-home',pageType:'overview',_status:'published',editorialStatus:'checked'}})
  await p.destroy();p=undefined
  const columns=(await c.query('SELECT table_name,column_name FROM information_schema.columns WHERE table_schema=$1 AND table_name IN ($2,$3) AND column_name LIKE $4',[schema,'pages','_pages_v','%home_template_%'])).rows
  assert.equal(columns.length,46)
  for(const column of columns)await c.query(`ALTER TABLE "${schema}"."${column.table_name}" DROP COLUMN "${column.column_name}" CASCADE`)
  const before=(await c.query(`SELECT id,title,slug,_status,editorial_status,updated_at FROM "${schema}".pages`)).rows
  const versions=(await c.query(`SELECT count(*) FROM "${schema}"._pages_v`)).rows
  await upgradeHomeTemplate(c,{schema})
  assert.equal((await c.query('SELECT 1 FROM information_schema.columns WHERE table_schema=$1 AND column_name=$2',[schema,'home_template_heading'])).rowCount,0)
  await upgradeHomeTemplate(c,{schema,apply:true});await upgradeHomeTemplate(c,{schema,apply:true})
  assert.deepEqual((await c.query(`SELECT id,title,slug,_status,editorial_status,updated_at FROM "${schema}".pages`)).rows,before)
  assert.deepEqual((await c.query(`SELECT count(*) FROM "${schema}"._pages_v`)).rows,versions)
  assert.equal((await c.query('SELECT 1 FROM information_schema.columns WHERE table_schema=$1 AND table_name IN ($2,$3) AND column_name LIKE $4',[schema,'pages','_pages_v','%home_template_%'])).rowCount,46)
  console.log('PASS: home template upgrade preview, repeatable apply, existing content and versions retained')
}finally{if(p)await p.destroy();await c.query(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);await c.end()}
process.exit(0)
