import assert from 'node:assert/strict'
import type pg from 'pg'
import {homeTemplateField} from '../../src/collections/home-template'
const snake=(name:string)=>name.replace(/[A-Z]/g,c=>'_'+c.toLowerCase())
export async function upgradeHomeTemplate(client:pg.Client,{apply=false,schema='public'}:{apply?:boolean;schema?:string}={}) {
  assert(schema==='public'||/^handbook_bootstrap_[a-z0-9_]+$/.test(schema),'Invalid target schema')
  const columns:{name:string;relationship:boolean}[]=[]
  function visit(field:any,prefix='') {
    const name=prefix+snake(field.name)
    if(field.type==='group')for(const child of field.fields)visit(child,name+'_')
    else columns.push({name:name+(field.type==='relationship'?'_id':''),relationship:field.type==='relationship'})
  }
  visit(homeTemplateField)
  await client.query('BEGIN')
  try {
    await client.query('SELECT pg_advisory_xact_lock(198734,1003)')
    for(const [table,prefix] of [['pages',''],['_pages_v','version_']])for(const column of columns) {
      const name=prefix+column.name
      await client.query(`ALTER TABLE "${schema}"."${table}" ADD COLUMN IF NOT EXISTS "${name}" ${column.relationship?'integer':'character varying'}`)
      if(column.relationship) {
        const constraint=(table+'_'+name+'_fk').slice(0,63)
        const found=await client.query('SELECT 1 FROM pg_constraint c JOIN pg_namespace n ON c.connamespace=n.oid WHERE n.nspname=$1 AND c.conname=$2',[schema,constraint])
        if(!found.rowCount)await client.query(`ALTER TABLE "${schema}"."${table}" ADD CONSTRAINT "${constraint}" FOREIGN KEY ("${name}") REFERENCES "${schema}".pages(id) ON DELETE SET NULL`)
      }
    }
    await client.query(apply?'COMMIT':'ROLLBACK')
    return {mode:apply?'applied':'preview-rolled-back',tables:['pages','_pages_v'],columnsPerTable:columns.length,content:'unchanged'}
  }catch(e){await client.query('ROLLBACK');throw e}
}
