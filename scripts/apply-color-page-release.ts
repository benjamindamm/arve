import assert from 'node:assert/strict'
import { isDeepStrictEqual } from 'node:util'
import { getPayload, type PayloadRequest } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import config from '../src/payload.config'
import { colorPageRelease } from './content/color-page-release'

const publish = process.argv.includes('--publish')
const safeConfig = await config
const adapter = postgresAdapter({ pool: { connectionString: process.env.DATABASE_URI }, push: false })
safeConfig.db = { ...adapter, allowIDOnCreate: adapter.allowIDOnCreate ?? false, name: adapter.name ?? 'postgres' }
const payload = await getPayload({ config: safeConfig })
const clean = (value: unknown): unknown => Array.isArray(value) ? value.map(clean) : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).filter(([key,v]) => key !== 'id' && v != null).map(([key,v]) => [key,clean(v)])) : value
try {
  const { docs: [page] } = await payload.find({collection:'pages',draft:true,depth:0,where:{slug:{equals:'shadcn-farben'}},limit:1})
  assert(page && page._status === 'published','Veröffentlichte Farbseite ohne neueren Entwurf erforderlich.')
  const published = await payload.findByID({collection:'pages',id:page.id,draft:false,depth:0})
  assert.deepEqual(page,published,'Neuerer oder abweichender Entwurf vorhanden.')
  const same = () => page.summary === colorPageRelease.summary && isDeepStrictEqual(clean(page.content), clean(colorPageRelease.content))
  if (!same()) assert.equal(page.updatedAt,'2026-11-17T23:33:02.381Z','Farbseite seit der Prüfung verändert.')
  const untouched = async (req?: Partial<PayloadRequest>) => ({
    pages: (await payload.find({collection:'pages',draft:true,pagination:false,depth:0,sort:'id',where:{id:{not_equals:page.id}},req})).docs,
    published: (await payload.find({collection:'pages',draft:false,pagination:false,depth:0,sort:'id',where:{id:{not_equals:page.id}},req})).docs,
    implementations: (await payload.find({collection:'implementations',draft:true,pagination:false,depth:0,sort:'id',req})).docs,
  })
  const before = await untouched()
  console.log(JSON.stringify({mode:publish?'publish':'preview',schemaPush:false,slug:page.slug,updatedAt:page.updatedAt,blocks:colorPageRelease.content.length,alreadyApplied:same()}))
  if (publish && !same()) {
    const transactionID = await payload.db.beginTransaction()
    assert(transactionID)
    const req = {transactionID}
    try {
      const current = await payload.findByID({collection:'pages',id:page.id,draft:true,depth:0,req})
      assert.equal(current.updatedAt,page.updatedAt)
      assert.equal(current._status,'published')
      assert.deepEqual(current, await payload.findByID({collection:'pages',id:page.id,draft:false,depth:0,req}),'Entwurf während Veröffentlichung verändert.')
      const saved = await payload.update({collection:'pages',id:page.id,data:{...colorPageRelease,_status:'published'},draft:false,depth:0,req})
      const withoutEditorial = ({content, summary, updatedAt, ...rest}: typeof page) => rest
      assert.deepEqual(withoutEditorial(saved),withoutEditorial(page),'Andere Seitenfelder verändert.')
      assert.deepEqual(await untouched(req),before,'Andere Seiten oder Implementierungen verändert.')
      await payload.db.commitTransaction(transactionID)
    } catch(error) { await payload.db.rollbackTransaction(transactionID); throw error }
  }
  if (publish) {
    const saved = await payload.findByID({collection:'pages',id:page.id,draft:false,depth:0})
    assert.equal(saved.summary,colorPageRelease.summary)
    assert.deepEqual(clean(saved.content),clean(colorPageRelease.content))
    assert.deepEqual(await untouched(),before)
    console.log('Farbseite veröffentlicht; Quellinhalt identisch; andere Felder, Seiten und Implementierungen unverändert.')
  }
} finally { await payload.destroy() }
process.exit(0)
