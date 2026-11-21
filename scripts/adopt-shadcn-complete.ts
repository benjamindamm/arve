import assert from 'node:assert/strict'
import { writeFile, mkdir } from 'node:fs/promises'
import { getPayload } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import config from '../src/payload.config'
import { getContract } from '../src/contracts/catalog'
import { completeRevision, previousRevision, referenceComponents, currentReferenceNote, frameworkContent } from './content/shadcn-complete'

const apply = process.argv.includes('--apply')
const c = await config
c.db = { ...postgresAdapter({ pool: { connectionString: process.env.DATABASE_URI }, push: false }), allowIDOnCreate: false, name: 'postgres' }
const payload = await getPayload({ config: c })
const clean = (v: any): any => Array.isArray(v) ? v.map(clean) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).filter(([k,x]) => k !== 'id' && x != null).sort(([a],[b])=>a.localeCompare(b)).map(([k,x]) => [k,clean(x)])) : v
const equal = (a: unknown,b: unknown) => JSON.stringify(clean(a)) === JSON.stringify(clean(b))
try {
  const { docs: [system] } = await payload.find({ collection: 'design-systems', where: { slug: { equals: 'shadcn' } }, depth: 0, limit: 1 })
  assert(system)
  const readPages = (draft: boolean) => payload.find({ collection: 'pages', draft, pagination: false, depth: 0, where: { designSystem: { equals: system.id } }, sort: 'id' }).then(r => r.docs)
  const published = await readPages(false), drafts = await readPages(true)
  const byComponent = new Map(published.filter(p => p.component).map(p => [p.component!,p]))
  const draftById = new Map(drafts.map(p => [p.id,p]))
  const parent = published.find(p => p.slug === 'shadcn-komponenten')
  assert(parent)
  const implementations = (await payload.find({ collection: 'implementations', pagination: false, draft: false, depth: 0, sort: 'id' })).docs
  const rows: { id?: number; data: any; updatedAt?: string }[] = []
  const legacy = new Set(['button','input','checkbox','switch'])
  for (const [order,item] of referenceComponents.entries()) {
    assert(getContract({ library:'shadcn', component:item.slug, revision:completeRevision }), item.slug)
    const existing = byComponent.get(item.slug)
    if (existing) {
      assert(equal(existing, draftById.get(existing.id)), 'Unpublished editorial change: '+item.slug)
      assert(existing.contract?.revision === previousRevision || existing.contract?.revision === completeRevision, 'Unexpected pin: '+item.slug)
      if (!legacy.has(item.slug)) { assert.equal(existing.contract?.revision,completeRevision); continue }
      const { release } = await import('./content/page-reworks/' + item.slug + '.ts')
      const original = release.content.filter((block: any) => block.blockName !== 'complete-reference-scope')
      assert(equal(existing.content, original) || equal(existing.content, release.content), 'Editorial drift: '+item.slug)
      rows.push({ id:existing.id, updatedAt:existing.updatedAt, data: { contract: { library:'shadcn', component:item.slug, revision:completeRevision }, content:release.content, _status:'published' } })
    } else {
      assert(!legacy.has(item.slug), 'Expected existing local example')
      rows.push({ data: { title:item.title, system:'shadcn', designSystem:system.id, pageType:'component', parent:parent.id, order:100+order, summary:item.summary, component:item.slug, contract: { library:'shadcn', component:item.slug, revision:completeRevision }, slug:'shadcn-'+item.slug, content:[currentReferenceNote(false)], _status:'published' } })
    }
  }
  const { release: overview } = await import('./content/page-reworks/komponenten')
  assert(equal(parent, draftById.get(parent.id)), 'Unpublished catalogue draft')
  assert(equal(parent.content, overview.content) || equal(parent.content, overview.content.filter((b:any)=>b.blockName!=='complete-catalogue-scope')), 'Catalogue editorial drift')
  assert(parent.summary === overview.summary || parent.summary === 'Finde den passenden Baustein für eine Handlung, eine Texteingabe, eine Auswahl oder eine Einstellung.', 'Catalogue summary edited; preserve editorial changes')
  rows.push({ id:parent.id, updatedAt:parent.updatedAt, data:{ summary:overview.summary, content:overview.content, _status:'published' } })
  const guide = published.find(p => p.slug === 'shadcn-frameworks')
  if (guide) { assert(equal(guide,draftById.get(guide.id))); assert(equal(guide.content,frameworkContent()), 'Framework guide edited; preserve the editorial page') }
  else rows.push({ data: { title:'Frameworks und Plattformen', system:'shadcn', designSystem:system.id, pageType:'guide', parent:parent.id, order:10, summary:'Eine gemeinsame Designreferenz für React, Angular und native Plattformen. Bibliotheksreferenzen und konkrete Implementierungsnachweise bleiben unterscheidbar.', slug:'shadcn-frameworks', content:frameworkContent(), _status:'published' } })
  const pending = rows.filter(row => !row.id || !Object.entries(row.data).every(([key,value]) => equal((published.find(p=>p.id===row.id) as any)[key],value)))
  await mkdir('.runtime',{recursive:true})
  if (pending.length) try { await writeFile('.runtime/shadcn-import-before.json',JSON.stringify({published,drafts,implementations},null,2),{flag:'wx'}) } catch(error:any) { if(error.code!=='EEXIST') throw error }
  console.log(JSON.stringify({ mode:apply?'apply':'preview', components:referenceComponents.length, create:pending.filter(r=>!r.id).length, update:pending.filter(r=>r.id).length, revision:completeRevision }))
  if (apply && pending.length) {
    const transactionID = await payload.db.beginTransaction(); assert(transactionID)
    const req = { transactionID }
    try {
      for (const row of pending) {
        if (row.id) {
          const current = await payload.findByID({collection:'pages',id:row.id,draft:true,depth:0,req})
          assert.equal(current.updatedAt,row.updatedAt,'Concurrent edit')
          await payload.update({collection:'pages',id:row.id,data:row.data,draft:false,req})
        } else await payload.create({collection:'pages',data:row.data,draft:false,req})
      }
      await payload.db.commitTransaction(transactionID)
    } catch (error) { await payload.db.rollbackTransaction(transactionID); throw error }
  }
  if (apply) {
    const after = await readPages(false)
    assert.equal(after.filter(p=>p.component).length,69)
    for (const page of after.filter(p=>p.component)) assert.equal(page.contract?.revision,completeRevision,page.slug)
    const modified = new Set(rows.flatMap(row=>row.id?[row.id]:[]))
    for (const page of published.filter(p=>!modified.has(p.id))) assert.deepEqual(after.find(p=>p.id===page.id),page,'Unrelated page changed')
    assert.deepEqual((await payload.find({collection:'implementations',pagination:false,draft:false,depth:0,sort:'id'})).docs,implementations,'Implementation receipts changed')
    console.log(JSON.stringify({status:'PASS',pages:after.length,components:69,implementationsUnchanged:true}))
  }
} finally { await payload.destroy() }
process.exit(0)
