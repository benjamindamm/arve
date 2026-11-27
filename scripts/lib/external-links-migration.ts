import assert from 'node:assert/strict'
import type pg from 'pg'
import {externalSourceTypes} from '../../src/docs/external-sources'
/** Add child tables for current pages and draft/version records. Existing content is untouched. */
export async function upgradeExternalLinks(client:pg.Client,{schema='public',apply=false}:{schema?:string;apply?:boolean}={}){
 assert(schema==='public'||/^handbook_bootstrap_[a-z0-9_]+$/.test(schema),'Invalid target schema')
 const ns=`"${schema}"`
 await client.query('BEGIN')
 try{
  await client.query('SELECT pg_advisory_xact_lock(198734,1005)')
  const before=(await client.query(`SELECT id,updated_at,_status,editorial_status FROM ${ns}.pages ORDER BY id`)).rows
  const versions=(await client.query(`SELECT id,updated_at FROM ${ns}._pages_v ORDER BY id`)).rows
  for(const [table,parent,version]of [['pages_external_links','pages',false],['_pages_v_version_external_links','_pages_v',true]] as const){
   const type=`enum_${table}_type`
   const exists=await client.query('SELECT 1 FROM pg_type t JOIN pg_namespace n ON n.oid=t.typnamespace WHERE n.nspname=$1 AND t.typname=$2',[schema,type])
   if(!exists.rowCount)await client.query(`CREATE TYPE ${ns}."${type}" AS ENUM (${externalSourceTypes.map(({value})=>`'${value}'`).join(',')})`)
   await client.query(`CREATE TABLE IF NOT EXISTS ${ns}."${table}" (
    _order integer NOT NULL,_parent_id integer NOT NULL,
    id ${version?'serial':'varchar'} PRIMARY KEY,
    type ${ns}."${type}" DEFAULT 'other',label varchar,url varchar${version?',_uuid varchar':''},
    CONSTRAINT "${table}_parent_id_fk" FOREIGN KEY (_parent_id) REFERENCES ${ns}."${parent}"(id) ON DELETE CASCADE)`)
   await client.query(`CREATE INDEX IF NOT EXISTS "${table}_order_idx" ON ${ns}."${table}"(_order)`)
   await client.query(`CREATE INDEX IF NOT EXISTS "${table}_parent_id_idx" ON ${ns}."${table}"(_parent_id)`)
  }
  assert.deepEqual((await client.query(`SELECT id,updated_at,_status,editorial_status FROM ${ns}.pages ORDER BY id`)).rows,before)
  assert.deepEqual((await client.query(`SELECT id,updated_at FROM ${ns}._pages_v ORDER BY id`)).rows,versions)
  await client.query(apply?'COMMIT':'ROLLBACK')
  return {mode:apply?'applied':'preview-rolled-back',pagesPreserved:before.length,versionsPreserved:versions.length}
 }catch(error){await client.query('ROLLBACK');throw error}
}
