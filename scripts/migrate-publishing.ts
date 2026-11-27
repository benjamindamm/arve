/** Additive upgrade. Preview by default; requires an explicit selection with multiple legacy users. */
import assert from 'node:assert/strict'
import pg from 'pg'
import {upgradePublishing} from './lib/publishing-migration'
const explicit=process.argv.find(x=>x.startsWith('--administrator='))?.split('=')[1]
if(explicit)assert(/^\d+$/.test(explicit),'Administrator must be a numeric user ID')
const uri=process.env.DATABASE_URI;assert(uri,'DATABASE_URI required')
const c=new pg.Client({connectionString:uri});await c.connect()
try{console.log(JSON.stringify(await upgradePublishing(c,{apply:process.argv.includes('--apply'),administrator:explicit?Number(explicit):undefined})))}finally{await c.end()}
