/** Additive schema update; never assign review judgements to existing content. */
import pg from 'pg'
const c=new pg.Client({connectionString:process.env.DATABASE_URI});await c.connect()
try{
 await c.query('BEGIN')
 for(const [table,prefix,enumName] of [['pages','','enum_pages_editorial_status'],['_pages_v','version_','enum__pages_v_version_editorial_status']]){
  await c.query(`DO $$ BEGIN CREATE TYPE "${enumName}" AS ENUM ('draft','clarify','review','checked'); EXCEPTION WHEN duplicate_object THEN NULL; END $$`)
  await c.query(`ALTER TABLE "${table}" ADD COLUMN IF NOT EXISTS "${prefix}editorial_status" "${enumName}"`)
  await c.query(`ALTER TABLE "${table}" ALTER COLUMN "${prefix}editorial_status" SET DEFAULT 'draft'`)
  for(const name of ['note','owner'])await c.query(`ALTER TABLE "${table}" ADD COLUMN IF NOT EXISTS "${prefix}editorial_${name}" varchar`)
 }
 await c.query('COMMIT');console.log('Editorial fields added to pages and versions; existing statuses remain unassigned.')
}catch(e){await c.query('ROLLBACK');throw e}finally{await c.end()}
