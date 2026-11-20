import assert from 'node:assert/strict'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { componentsRelease, componentsReleaseBaseline } from './content/components-release'
import { pageTemplates, readTemplate } from '../src/docs/page-templates'

const publish = process.argv.includes('--publish')
const payload = await getPayload({ config })
const emptyTemplate = Object.fromEntries(pageTemplates.map(({ key, fields }) => [key,
  Object.fromEntries(fields.map(({ key }) => [key, null])),
]))
const clean = (input: unknown): unknown => Array.isArray(input) ? input.map(clean) :
  input && typeof input === 'object' ? Object.fromEntries(Object.entries(input)
    .filter(([k,v])=>k!=='id' && v!==null && v!==undefined)
    .sort(([a],[b])=>a.localeCompare(b)).map(([k,v])=>[k,clean(v)])) : input
try {
  const {docs:[system]} = await payload.find({collection:'design-systems',where:{slug:{equals:'shadcn'}},limit:1,depth:0})
  assert(system, 'shadcn fehlt')
  const {docs:existing} = await payload.find({collection:'pages',pagination:false,draft:true,depth:0,where:{designSystem:{equals:system.id}}})
  const bySlug = new Map(existing.map(p=>[p.slug,p]))
  const affected = componentsRelease.map(p=>p.slug)
  const unchanged = async () => ({pages:(await payload.find({collection:'pages',pagination:false,draft:false,depth:0,sort:'id',where:{slug:{not_in:affected}}})).docs,
    implementations:(await payload.find({collection:'implementations',pagination:false,draft:false,depth:0,sort:'id'})).docs})
  const before = await unchanged()
  assert.equal(new Set(affected).size,6)
  const desired = (entry: typeof componentsRelease[number]) => ({title:entry.title,summary:entry.summary,pageType:entry.pageType,order:entry.order,
    parent:entry.parent?bySlug.get(entry.parent)!.id:null,content:entry.content,template:emptyTemplate,_status:'published' as const})
  const same = (page: typeof existing[number], data: ReturnType<typeof desired>) => Object.entries(data).every(([key,value])=>key==='template'?
    readTemplate(page.pageType,page.template).length===0:JSON.stringify(clean(page[key as keyof typeof page]))===JSON.stringify(clean(value)))
  for(const entry of componentsRelease) {
    const page=bySlug.get(entry.slug)
    assert(page && page._status==='published',`Fehlende Seite oder neuer Entwurf: ${entry.slug}`)
    assert(entry.content?.length)
    assert(!entry.parent || bySlug.has(entry.parent))
    const baseline=componentsReleaseBaseline[entry.slug as keyof typeof componentsReleaseBaseline]
    assert.equal(page.id,baseline.id)
    if(!same(page,desired(entry))) assert.equal(page.updatedAt,baseline.updatedAt,`Seit Analyse geändert: ${entry.slug}`)
  }
  console.log(JSON.stringify({mode:publish?'publish':'preview',pages:componentsRelease.map(p=>({slug:p.slug,title:p.title,blocks:p.content!.length}))},null,2))
  if(publish) {
    const transactionID=await payload.db.beginTransaction()
    assert(transactionID,'Eine Datenbanktransaktion wird benötigt.')
    const req={transactionID}
    try {
      for(const entry of componentsRelease) {
        const page=bySlug.get(entry.slug)!
        const current=await payload.findByID({collection:'pages',id:page.id,draft:true,depth:0,req})
        assert.equal(current.updatedAt,page.updatedAt,`Neuere Änderung: ${entry.slug}`)
        if(!same(current,desired(entry))) await payload.update({collection:'pages',id:page.id,data:desired(entry),draft:false,req})
      }
      await payload.db.commitTransaction(transactionID)
    } catch(error) {await payload.db.rollbackTransaction(transactionID);throw error}
    for(const entry of componentsRelease) {
      const original=bySlug.get(entry.slug)!
      const page=await payload.findByID({collection:'pages',id:original.id,draft:false,depth:0})
      assert(same(page,desired(entry)))
      for(const key of ['component','contract','demo','designSystem','slug'] as const) assert.deepEqual(page[key],original[key],`${entry.slug}: ${key} wurde verändert`)
    }
    assert.deepEqual(await unchanged(),before,'Andere Seiten oder Implementierungen wurden verändert.')
    console.log('Komponentenpaket veröffentlicht; Pins, Demos, Implementierungen und übrige Seiten unverändert.')
  }
} finally {await payload.destroy()}
process.exit(0)
