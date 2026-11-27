import assert from 'node:assert/strict'
import pg from 'pg'
import {upgradeExternalLinks} from './lib/external-links-migration'
assert(process.env.DATABASE_URI,'DATABASE_URI required')
const c=new pg.Client({connectionString:process.env.DATABASE_URI});await c.connect()
try{console.log(JSON.stringify(await upgradeExternalLinks(c,{apply:process.argv.includes('--apply')})))}finally{await c.end()}
