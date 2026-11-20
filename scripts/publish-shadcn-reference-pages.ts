import assert from 'node:assert/strict'
import { getPayload } from 'payload'
import config from '../src/payload.config'
const payload = await getPayload({ config })
const slugs = ['shadcn-farben', 'shadcn-input', 'shadcn-formulare-validierung', 'shadcn-detailseite']
try {
  const {docs} = await payload.find({collection:'pages',pagination:false,depth:0,draft:true,where:{slug:{in:slugs}}})
  assert.equal(docs.length,4)
  const before = (await payload.find({collection:'pages',pagination:false,depth:0,draft:false,sort:'id',where:{slug:{not_in:slugs}}})).docs
  for(const page of docs) {
    assert(page.content?.some(b=>b.blockType==='guideline'&&b.image),`Bild fehlt: ${page.slug}`)
    assert(page.template?.[page.pageType as 'foundation'|'component'|'pattern'|'layout'])
  }
  for(const page of docs) {
    const content = structuredClone(page.content!)
    function clean(node: unknown) {
      if(!node || typeof node !== 'object') return
      const n = node as Record<string, unknown>
      if(typeof n.text === 'string') n.text=n.text
        .replace('Redaktioneller Entwurf · Referenzsystem shadcn.', 'Referenzhandbuch · shadcn.')
        .replace('Eine annotierte Anatomie und die dokumentierten Zustandsansichten ergänzen.', 'Die Anatomie ist unten erläutert; vollständige Zustandsansichten bleiben zu ergänzen.')
        .replace('visuell annotierte Farbpaare.', 'weitere visuell annotierte Statuspaare.')
      if(Array.isArray(n.children)) n.children.forEach(clean)
    }
    content.forEach(b=>{if(b.blockType==='text') clean(b.body.root)})
    const template=structuredClone(page.template)
    if(template?.component?.verification) template.component.verification=template.component.verification.replace('Diese neue UX-Beschreibung ist ein Entwurf;', 'Diese UX-Beschreibung enthält vorgeschlagene Regeln;')
    await payload.update({collection:'pages',id:page.id,draft:false,data:{content,template,_status:'published'}})
    const published=await payload.findByID({collection:'pages',id:page.id,draft:false,depth:0})
    assert.equal(published._status,'published')
    assert.deepEqual(published.content,content)
    assert.deepEqual(published.contract,page.contract)
    assert.deepEqual(published.demo,page.demo)
    for(const block of content) if(block.blockType==='guideline'&&typeof block.image==='number') {
      const media=await payload.findByID({collection:'media',id:block.image,overrideAccess:false})
      assert(media.url && media.alt)
    }
    console.log(`Veröffentlicht und Bildzugriff geprüft: ${page.slug}`)
  }
  assert.deepEqual((await payload.find({collection:'pages',pagination:false,depth:0,draft:false,sort:'id',where:{slug:{not_in:slugs}}})).docs,before)
  console.log('Andere Seiten unverändert.')
} finally {await payload.destroy()}
process.exit(0)
