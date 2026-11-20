import assert from 'node:assert/strict'
import {readFile,writeFile} from 'node:fs/promises'
import {resolve} from 'node:path'
import {getPayload} from 'payload'
import {postgresAdapter} from '@payloadcms/db-postgres'
import config from '../src/payload.config'
const slug=process.argv[2];assert(/^[a-z][a-z0-9-]+$/.test(slug??''))
const file=resolve('scripts/content/page-reworks/'+slug+'.ts')
const source=await readFile(file,'utf8')
const replacement=source.replace(/docs\/handbook\/postfinance-analysis\/[a-zA-Z0-9./_-]+/g,'die interne visuelle Layoutanalyse')
assert(!/postfinance|beispielsystem/i.test(replacement),'Weitere Herkunftsbezeichnung manuell prüfen')
const c=await config;c.db={...postgresAdapter({push:false,pool:{connectionString:process.env.DATABASE_URI,options:'-c default_transaction_read_only=on'}}),name:'postgres',allowIDOnCreate:false}
const p=await getPayload({config:c});try{
 const page=(await p.find({collection:'pages',depth:0,draft:true,where:{slug:{equals:'shadcn-'+slug}}})).docs[0];assert(page)
 const old=source.match(/expectedUpdatedAt:\s*'([^']+)'/);assert(old)
 await writeFile(file,replacement.replace(old[1],page.updatedAt))
 console.log('Nur Herkunftsbeleg neutralisiert: '+slug)
}finally{await p.destroy()}
process.exit(0)
