import assert from 'node:assert/strict'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { references, referenceData } from './content/shadcn-reference-pages'

const payload = await getPayload({ config })
try {
  const { docs: [system] } = await payload.find({ collection: 'design-systems', where: { slug: { equals: 'shadcn' } }, limit: 1, depth: 0 })
  assert(system, 'Design-System shadcn fehlt.')
  const scope = { designSystem: { equals: system.id } }
  const published = async () => (await payload.find({ collection: 'pages', pagination: false, depth: 0, draft: false,
    where: { and: [scope, { _status: { equals: 'published' } }] }, sort: 'id' })).docs
  const before = await published()
  const { docs: current } = await payload.find({ collection: 'pages', pagination: false, depth: 0, draft: true, where: scope })
  // Preflight all prerequisites before creating any draft. Existing editorial drafts are never overwritten.
  for (const ref of references) {
    assert(before.some(page => page.slug === ref.parent), `Übergeordnete Seite fehlt: ${ref.parent}`)
  }
  for (const ref of references) {
    const existing = current.find(page => page.slug === ref.slug)
    if (existing?._status === 'draft') {
      console.log(`Übersprungen: vorhandener Entwurf ${ref.slug} (ID ${existing.id})`)
      continue
    }
    const data = referenceData(ref)
    const saved = existing
      ? await payload.update({ collection: 'pages', id: existing.id, draft: true, data })
      : await payload.create({ collection: 'pages', draft: true, data: {
        ...data, title: ref.title, slug: ref.slug, system: 'shadcn', designSystem: system.id,
        parent: before.find(page => page.slug === ref.parent)!.id, order: 20,
      } })
    const draft = await payload.findByID({ collection: 'pages', id: saved.id, draft: true, depth: 0 })
    assert.equal(draft._status, 'draft')
    assert.deepEqual(draft.template?.[ref.pageType], data.template?.[ref.pageType])
    assert.equal(draft.content?.length, 3)
    // Contract and demo are intentionally outside the editorial update.
    if (existing) {
      assert.deepEqual(draft.contract, existing.contract)
      assert.deepEqual(draft.demo, existing.demo)
    }
    console.log(`${ref.title}: http://127.0.0.1:3010/admin/collections/pages/${saved.id}`)
  }
  assert.deepEqual(await published(), before, 'Veröffentlichte Fassungen wurden verändert!')
  console.log('Geprüft: veröffentlichte Seiten vollständig unverändert.')
} finally {
  await payload.destroy()
}
process.exit(0)
