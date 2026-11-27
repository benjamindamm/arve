import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
import type pg from 'pg'
export async function upgradePublishing(c:pg.Client,{apply=false,schema='public',administrator}:{apply?:boolean;schema?:string;administrator?:number}={}){
 assert(schema==='public'||/^handbook_bootstrap_[a-z0-9_]+$/.test(schema),'Only the application or isolated test schema is allowed')
 const ns='"'+schema+'"'
 await c.query('BEGIN')
 try{
  await c.query('SELECT pg_advisory_xact_lock(198734,1002)')
  const before=await c.query(`SELECT id,title,slug,summary,editorial_status,_status,updated_at FROM ${ns}.pages ORDER BY id`)
  let sql=await readFile(new URL('../migrations/20261127-publication.sql',import.meta.url),'utf8')
  if(schema!=='public')sql=sql.replaceAll('public.',ns+'.').replaceAll("'public'::regnamespace", "'"+schema+"'::regnamespace")
  await c.query(sql)
  const admins=await c.query(`SELECT id FROM ${ns}.users WHERE is_administrator=true`)
  let bootstrapAdmin:number|undefined
  if(!admins.rowCount){
   const users=await c.query(`SELECT id FROM ${ns}.users ORDER BY created_at,id FOR UPDATE`)
   if(users.rowCount){
    if(administrator){bootstrapAdmin=administrator;assert(users.rows.some(x=>x.id===bootstrapAdmin),'Unknown administrator ID')}
    else {assert.equal(users.rowCount,1,'Multiple existing users: choose --administrator=<id> explicitly');bootstrapAdmin=users.rows[0].id}
    await c.query(`UPDATE ${ns}.users SET is_administrator=true WHERE id=$1`,[bootstrapAdmin])
   }
  }
  const after=await c.query(`SELECT id,title,slug,summary,editorial_status,_status,updated_at FROM ${ns}.pages ORDER BY id`)
  assert.deepEqual(after.rows,before.rows,'Content or editorial state changed during schema upgrade')
  await c.query(apply?'COMMIT':'ROLLBACK')
  return {mode:apply?'applied':'preview-rolled-back',pagesPreserved:before.rowCount,existingAdministrators:admins.rowCount,bootstrapAdministrator:bootstrapAdmin??null}
 }catch(e){await c.query('ROLLBACK');throw e}
}
