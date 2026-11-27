import assert from 'node:assert/strict'
import pg from 'pg'
import {upgradeContractBindings} from './lib/contract-bindings-migration'
assert(process.env.DATABASE_URI,'DATABASE_URI required')
const client=new pg.Client({connectionString:process.env.DATABASE_URI});await client.connect()
try{console.log(JSON.stringify(await upgradeContractBindings(client,{apply:process.argv.includes('--apply')})))}finally{await client.end()}
