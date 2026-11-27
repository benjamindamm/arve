import assert from 'node:assert/strict'
import type pg from 'pg'
export async function upgradeContractBindings(client:pg.Client,{schema='public',apply=false}:{schema?:string;apply?:boolean}={}){
 assert(schema==='public'||/^handbook_bootstrap_[a-z0-9_]+$/.test(schema))
 const ns='"'+schema+'"'
 await client.query('BEGIN')
 try{
  await client.query('SELECT pg_advisory_xact_lock(198734,1004)')
  const before=(await client.query(`SELECT id,contract_library,contract_component,contract_revision,editorial_status,_status,updated_at FROM ${ns}.pages ORDER BY id`)).rows
  await client.query(`CREATE TABLE IF NOT EXISTS ${ns}.contract_bindings(id serial PRIMARY KEY,design_system_id integer NOT NULL REFERENCES ${ns}.design_systems(id) ON DELETE CASCADE,library varchar NOT NULL,default_revision varchar NOT NULL,updated_at timestamptz(3) NOT NULL DEFAULT now(),created_at timestamptz(3) NOT NULL DEFAULT now())`)
  await client.query(`CREATE UNIQUE INDEX IF NOT EXISTS contract_bindings_design_system_library_idx ON ${ns}.contract_bindings(design_system_id,library)`)
  await client.query(`CREATE INDEX IF NOT EXISTS contract_bindings_updated_at_idx ON ${ns}.contract_bindings(updated_at)`)
  await client.query(`CREATE INDEX IF NOT EXISTS contract_bindings_created_at_idx ON ${ns}.contract_bindings(created_at)`)
  await client.query(`ALTER TABLE ${ns}.payload_locked_documents_rels ADD COLUMN IF NOT EXISTS contract_bindings_id integer`)
  const fk=await client.query('SELECT 1 FROM pg_constraint c JOIN pg_namespace n ON n.oid=c.connamespace WHERE n.nspname=$1 AND conname=$2',[schema,'payload_locked_documents_rels_contract_bindings_fk'])
  if(!fk.rowCount)await client.query(`ALTER TABLE ${ns}.payload_locked_documents_rels ADD CONSTRAINT payload_locked_documents_rels_contract_bindings_fk FOREIGN KEY(contract_bindings_id) REFERENCES ${ns}.contract_bindings(id) ON DELETE CASCADE`)
  await client.query(`CREATE INDEX IF NOT EXISTS payload_locked_documents_rels_contract_bindings_id_idx ON ${ns}.payload_locked_documents_rels(contract_bindings_id)`)
  // Existing explicit references establish optional bindings; never guess from titles or local component IDs.
  const result=await client.query(`INSERT INTO ${ns}.contract_bindings(design_system_id,library,default_revision)
   SELECT design_system_id,library,revision FROM (
    SELECT design_system_id,library,revision,row_number() OVER(PARTITION BY design_system_id,library ORDER BY count(*) DESC,revision) AS rank FROM (
     SELECT design_system_id,contract_library AS library,contract_revision AS revision FROM ${ns}.pages
     UNION ALL SELECT p.design_system_id,i.contract_library,i.contract_revision FROM ${ns}.implementations i JOIN ${ns}.pages p ON p.id=i.component_page_id
    ) refs WHERE design_system_id IS NOT NULL AND library IS NOT NULL AND revision ~ '^[a-f0-9]{64}$' GROUP BY design_system_id,library,revision
   ) ranked WHERE rank=1 ON CONFLICT(design_system_id,library) DO NOTHING RETURNING id`)
  assert.deepEqual((await client.query(`SELECT id,contract_library,contract_component,contract_revision,editorial_status,_status,updated_at FROM ${ns}.pages ORDER BY id`)).rows,before)
  await client.query(apply?'COMMIT':'ROLLBACK')
  return {mode:apply?'applied':'preview-rolled-back',bindingsAdded:result.rowCount,pagesPreserved:before.length}
 }catch(error){await client.query('ROLLBACK');throw error}
}
