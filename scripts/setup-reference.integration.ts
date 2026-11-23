/** First-start behaviour in a disposable database, never the configured application database. */
import assert from 'node:assert/strict'
import pg from 'pg'
import {spawnSync} from 'node:child_process'
const uri=process.env.DATABASE_URI;assert(uri)
const name='handbook_bootstrap_start_'+Date.now()+'_'+process.pid
const target=new URL(uri);target.pathname='/'+name
const client=new pg.Client({connectionString:uri});await client.connect()
try {
 await client.query('CREATE DATABASE "'+name+'"')
 const run=()=>spawnSync(process.execPath,['--import','tsx','scripts/setup-reference.ts'],{env:{...process.env,DATABASE_URI:target.toString()},encoding:'utf8'})
 const first=run();assert.equal(first.status,0,first.stdout+first.stderr);assert.match(first.stdout,/"create":116/)
 const second=run();assert.equal(second.status,0,second.stdout+second.stderr);assert.match(second.stdout,/already present/)
 const db=new pg.Client({connectionString:target.toString()});await db.connect()
 try { const counts=await db.query('SELECT _status, COUNT(*) FROM pages GROUP BY _status'); assert.deepEqual(counts.rows,[{_status:'published',count:'116'}]) } finally {await db.end()}
 console.log('PASS: first start installs all 116 published pages; second start preserves reference.')
} finally {await client.query('DROP DATABASE IF EXISTS "'+name+'" WITH (FORCE)');await client.end()}
