import assert from 'node:assert/strict'
import pg from 'pg'
import {readFile} from 'node:fs/promises'
import {connect} from './bootstrap-handbook'
import {upgradePublishing} from './lib/publishing-migration'
const uri=process.env.DATABASE_URI;assert(uri)
const schema='handbook_bootstrap_upgrade_'+Date.now()+'_'+process.pid,ns='"'+schema+'"'
let p:any
const c=new pg.Client({connectionString:uri});await c.connect()
try{
 p=await connect(uri,schema,true)
 const first=await p.create({collection:'users',data:{email:'existing-one@arve.test',password:'Legacy-password-12345'}})
 await p.create({collection:'users',data:{email:'existing-two@arve.test',password:'Legacy-password-12345'}})
 await p.create({collection:'pages',data:{title:'Existing reference',slug:'legacy-reference',editorialStatus:'checked',_status:'published'}})
 await p.destroy();p=undefined
 const usersBefore=(await c.query(`SELECT id,email,hash,salt FROM ${ns}.users ORDER BY id`)).rows
 const versionsBefore=(await c.query(`SELECT count(*) FROM ${ns}._pages_v`)).rows
 // Reconstruct the previous schema, preserving its user/content/version rows.
 const sql=await readFile('scripts/migrations/20261127-publication.sql','utf8')
 await c.query(`DROP TABLE ${ns}.publication_events,${ns}.users_memberships CASCADE`)
 for(const match of sql.matchAll(/ALTER TABLE public\."([^"]+)" ADD COLUMN IF NOT EXISTS "([^"]+)"/g))await c.query(`ALTER TABLE ${ns}."${match[1]}" DROP COLUMN "${match[2]}" CASCADE`)
 for(const match of sql.matchAll(/CREATE TYPE public\."([^"]+)"/g))await c.query(`DROP TYPE ${ns}."${match[1]}"`)
 await assert.rejects(upgradePublishing(c,{schema,apply:true}),/Multiple existing users/)
 const preview=await upgradePublishing(c,{schema,administrator:first.id})
 assert.equal(preview.mode,'preview-rolled-back')
 assert.equal((await c.query("SELECT 1 FROM information_schema.columns WHERE table_schema=$1 AND table_name='users' AND column_name='is_administrator'",[schema])).rowCount,0)
 const applied=await upgradePublishing(c,{schema,administrator:first.id,apply:true})
 assert.equal(applied.bootstrapAdministrator,first.id)
 assert.deepEqual((await c.query(`SELECT id,email,hash,salt FROM ${ns}.users ORDER BY id`)).rows,usersBefore)
 assert.deepEqual((await c.query(`SELECT count(*) FROM ${ns}._pages_v`)).rows,versionsBefore)
 assert.equal((await c.query(`SELECT editorial_status FROM ${ns}.pages`)).rows[0].editorial_status,'checked')
 assert.equal((await c.query(`SELECT count(*) FROM ${ns}.users WHERE is_administrator=true`)).rows[0].count,'1')
 await upgradePublishing(c,{schema,apply:true})
 console.log('PASS: additive legacy upgrade, preview rollback, explicit administrator selection, idempotence, passwords/content/versions retained')
}finally{if(p)await p.destroy();await c.query('DROP SCHEMA IF EXISTS '+ns+' CASCADE');await c.end()}
process.exit(0)
