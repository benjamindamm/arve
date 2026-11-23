/** First-run reference setup. Existing shadcn content is never changed. */
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import pg from 'pg'
import { bootstrap, connect } from './bootstrap-handbook'
async function main() {
  if(process.env.ARVE_BOOTSTRAP_REFERENCE === '0') { console.log('Reference setup disabled.'); return }
  const uri = process.env.DATABASE_URI; assert(uri,'DATABASE_URI required')
  const client = new pg.Client({connectionString:uri}); await client.connect()
  let payload: any
  try {
    // All setup processes use the same advisory lock, including first schema creation.
    await client.query('SELECT pg_advisory_lock(198734, 1001)')
    const tables = await client.query("SELECT 1 FROM pg_class c JOIN pg_namespace n ON n.oid=c.relnamespace WHERE n.nspname !~ '^pg_' AND n.nspname <> 'information_schema' AND c.relkind IN ('r','p','v','m','S','f') LIMIT 1")
    payload = await connect(uri,undefined,tables.rowCount === 0)
    const existing = await payload.find({collection:'design-systems',where:{slug:{equals:'shadcn'}},limit:1,depth:0})
    if(existing.docs.length) { console.log('shadcn reference already present; existing content preserved.'); return }
    const snapshot = JSON.parse(await readFile('scripts/content/handbook-snapshot.json','utf8'))
    const result = await bootstrap(payload,snapshot,true)
    console.log(JSON.stringify({reference:'shadcn',...result}))
  } finally {
    if(payload) await payload.destroy()
    await client.query('SELECT pg_advisory_unlock(198734, 1001)')
    await client.end()
  }
}
main().then(()=>process.exit(0)).catch(error=>{console.error(error instanceof assert.AssertionError ? error.message : 'Reference setup failed. Check database availability and schema; connection details suppressed.');process.exit(1)})
