import assert from 'node:assert/strict'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { foundationsRelease } from './content/foundations-release'
import { layoutFoundationAlignment, layoutFoundationAlignmentBaseline } from './content/layout-foundation-alignment'
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
  const affected = [...foundationsRelease.map(p=>p.slug), 'shadcn-layout']
  const unchanged = async () => (await payload.find({collection:'pages',pagination:false,draft:false,depth:0,sort:'id',where:{slug:{not_in:affected}}})).docs
  const before = await unchanged()
  const layout=bySlug.get('shadcn-layout')!
  assert(layout)
  const layoutAlreadyApplied=JSON.stringify(clean(layout.content))===JSON.stringify(clean(layoutFoundationAlignment.content))
  if(!layoutAlreadyApplied) assert.equal(layout.updatedAt,layoutFoundationAlignmentBaseline.updatedAt,'Layout wurde zwischenzeitlich bearbeitet.')
  assert.equal(new Set(foundationsRelease.map(p=>p.slug)).size,foundationsRelease.length)
  for(const entry of foundationsRelease) {
    assert(entry.slug.startsWith('shadcn-'))
    assert(entry.content.length>0)
    assert(!entry.parent || foundationsRelease.some(p=>p.slug===entry.parent) || bySlug.has(entry.parent))
    const page=bySlug.get(entry.slug)
    assert(!page || page._status==='published',`Neueren Entwurf zuerst prüfen: ${entry.slug}`)
  }
  console.log(JSON.stringify({mode:publish?'publish':'preview',pages:foundationsRelease.map(p=>({slug:p.slug,title:p.title,blocks:p.content.length})),layout:'Schnittstelle Abstand/Raster'},null,2))
  if(publish) {
    const transactionID=await payload.db.beginTransaction()
    assert(transactionID,'Eine Datenbanktransaktion wird benötigt.')
    const req={transactionID}
    try {
      const pending=[...foundationsRelease]
      while(pending.length) {
        const index=pending.findIndex(p=>!p.parent || bySlug.has(p.parent))
        assert(index>=0,'Zyklus in der Seitenhierarchie')
        const [entry]=pending.splice(index,1)
        const page=bySlug.get(entry.slug)
        const data={title:entry.title,summary:entry.summary,slug:entry.slug,pageType:entry.pageType,order:entry.order,
          parent:entry.parent?bySlug.get(entry.parent)!.id:null,content:entry.content,template:emptyTemplate,
          designSystem:system.id,system:'shadcn',_status:'published' as const}
        if(page) {
          const current=await payload.findByID({collection:'pages',id:page.id,draft:true,depth:0,req})
          assert.equal(current.updatedAt,page.updatedAt,`Neuere Änderung: ${entry.slug}`)
          const same=Object.entries(data).every(([key,value])=>key==='template'?readTemplate(current.pageType,current.template).length===0:JSON.stringify(clean(current[key as keyof typeof current]))===JSON.stringify(clean(value)))
          if(same) continue
        }
        const saved=page?await payload.update({collection:'pages',id:page.id,data,draft:false,req}):await payload.create({collection:'pages',data,draft:false,req})
        bySlug.set(saved.slug,saved)
      }
      if(!layoutAlreadyApplied) await payload.update({collection:'pages',id:layout.id,data:{...layoutFoundationAlignment,_status:'published'},draft:false,req})
      await payload.db.commitTransaction(transactionID)
    } catch(error) {await payload.db.rollbackTransaction(transactionID);throw error}
    for(const entry of foundationsRelease) {
      const {docs:[page]}=await payload.find({collection:'pages',draft:false,depth:0,where:{slug:{equals:entry.slug}}})
      assert.equal(page._status,'published')
      assert.deepEqual(clean(page.content),clean(entry.content))
      assert.equal(readTemplate(page.pageType,page.template).length,0)
    }
    assert.deepEqual(await unchanged(),before,'Seiten ausserhalb des Pakets wurden verändert.')
    console.log('Grundlagenpaket veröffentlicht, Inhalte zurückgelesen und übrige Seiten unverändert.')
  }
} finally {await payload.destroy()}
process.exit(0)
