import {test} from 'node:test'
import assert from 'node:assert/strict'
import {pagePath} from '../src/docs/systems'
import {snapshotData} from '../src/docs/snapshot-data'
import {canonicalHandbookHref,isLayoutRedirect,legacyLayoutHrefs} from '../src/docs/handbook-paths'
import {prepareTemplate} from './lib/system-template'
import snapshot from './content/handbook-snapshot.json'
test('canonical layout paths follow CMS ancestry and remain independent of titles',async()=>{
 const [system]=await snapshotData.systems(),pages=await snapshotData.pages(system)
 const main=pages.find(p=>p.slug==='shadcn-main-sidebar')!
 assert.equal(pagePath('shadcn',main,pages),'/systems/shadcn/layout/page-layouts/main-sidebar')
 assert.equal(pagePath('shadcn',{...main,title:'Renamed'} as typeof main,pages),pagePath('shadcn',main,pages))
 assert.equal(pagePath('shadcn',pages.find(p=>p.component==='button')!,pages),'/systems/shadcn/components/button')
 const flat=pages.find(p=>p.slug==='shadcn-farben')!;assert.equal(pagePath('shadcn',flat,pages),'/systems/shadcn/farben')
 const bad=pages.map(p=>p.id===main.id?{...p,parent:main.id}:p)
 assert.throws(()=>pagePath('shadcn',bad.find(p=>p.id===main.id)!,bad),/hierarchy/)
})
test('each compatibility address has a real canonical target; query and fragment stay intact',async()=>{
 const [system]=await snapshotData.systems(),pages=await snapshotData.pages(system)
 const canonical=new Set(pages.filter(p=>!isLayoutRedirect(p)).map(p=>pagePath(system.slug,p,pages)))
 for(const [old,target] of Object.entries(legacyLayoutHrefs)){
  assert(canonical.has('/systems/shadcn/'+target),old+' -> '+target)
  assert.equal(canonicalHandbookHref('/systems/shadcn/'+old+'?q=test#x'),'/systems/shadcn/'+target+'?q=test#x')
 }
 assert.equal(canonicalHandbookHref('https://example.org/main-sidebar'),'https://example.org/main-sidebar')
})
test('copying the reference preserves layout hierarchy in a different system',()=>{
 const copy=prepareTemplate(snapshot,'acme','Acme')
 const ids=new Map(copy.pages.map((p:any,i:number)=>[p.slug,i+1]))
 const pages=copy.pages.map((p:any)=>({...p,id:ids.get(p.slug),parent:p.parent?ids.get(p.parent):null}))
 const main=pages.find((p:any)=>p.slug==='acme-main-sidebar')!
 assert.equal(pagePath('acme',main,pages),'/systems/acme/layout/page-layouts/main-sidebar')
})
test('data visualization keeps its hierarchy when copied to another system',async()=>{
 const [system]=await snapshotData.systems(),original=await snapshotData.pages(system)
 const entries=original.filter(p=>p.slug.startsWith('shadcn-datenvisualisierung'))
 assert.equal(entries.length,7)
 for(const page of entries.filter(p=>p.parent))assert(pagePath('shadcn',page,original).startsWith('/systems/shadcn/datenvisualisierung/'))
 const copy=prepareTemplate(snapshot,'acme','Acme')
 const ids=new Map(copy.pages.map((p:any,i:number)=>[p.slug,i+1]))
 const pages=copy.pages.map((p:any)=>({...p,id:ids.get(p.slug),parent:p.parent?ids.get(p.parent):null}))
 const palette=pages.find((p:any)=>p.slug==='acme-datenvisualisierung-chart-paletten')!
 assert.equal(pagePath('acme',palette,pages),'/systems/acme/datenvisualisierung/chart-paletten')
 assert(JSON.stringify(palette.content).includes('/systems/acme/farben'))
 assert(!JSON.stringify(palette.content).includes('/systems/shadcn/'))
})
test('historical recipe names remain discoverable after merging variants',async()=>{
 process.env.ARVE_STATIC_EXPORT='1'
 const {searchDocumentationDetailed}=await import('../src/docs/published-documentation')
 for(const [query,slug] of [['Narrow Single Card','single-content'],['Wide Single Card','single-content'],['card grid 3 columns','card-grid']]){
  const result=await searchDocumentationDetailed('shadcn',query,5)
  assert(result?.results.some(hit=>hit.entry.slug===slug),query)
 }
})
