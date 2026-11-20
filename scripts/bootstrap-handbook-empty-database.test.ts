import {readFileSync} from 'node:fs'
import assert from 'node:assert/strict'
import pg from 'pg'
import {spawnSync} from 'node:child_process'
const adminURI=process.env.BOOTSTRAP_TEST_DATABASE_URI
assert(adminURI,'BOOTSTRAP_TEST_DATABASE_URI required')
const name='handbook_bootstrap_db_'+Date.now()+'_'+process.pid
const target=new URL(adminURI);target.pathname='/'+name
const admin=new pg.Client({connectionString:adminURI});await admin.connect()
try{
 await admin.query('CREATE DATABASE "'+name+'"')
 const run=(args:string[])=>spawnSync(process.execPath,['--import','tsx','scripts/bootstrap-handbook.ts',...args],{env:{...process.env,BOOTSTRAP_DATABASE_URI:target.toString()},encoding:'utf8'})
 const snapshot=JSON.parse(readFileSync('scripts/content/handbook-snapshot.json','utf8'))
 const first=run(['--apply','--initialize-empty-database']);assert.equal(first.status,0,first.stdout+first.stderr);assert.match(first.stdout,new RegExp('\"create\": '+snapshot.pages.length))
 const preview=run([]);assert.equal(preview.status,0,preview.stdout+preview.stderr);assert.match(preview.stdout,/"mode": "preview"/);assert.match(preview.stdout,/"create": 0/)
 const again=run(['--apply']);assert.equal(again.status,0,again.stdout+again.stderr);assert.match(again.stdout,/"create": 0/)
 const rejected=run(['--apply','--initialize-empty-database']);assert.notEqual(rejected.status,0);assert.match(rejected.stderr,/refuses a nonempty database/)
 console.log(JSON.stringify({result:'PASS',database:name,checks:['CLI initializes empty public schema and imports','CLI default preview','CLI second apply no-op','CLI initialization refuses nonempty database']}))
}finally{await admin.query('DROP DATABASE IF EXISTS "'+name+'" WITH (FORCE)');await admin.end()}
