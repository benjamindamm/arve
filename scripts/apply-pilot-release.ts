import assert from 'node:assert/strict'
import { getPayload, type PayloadRequest } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import config from '../src/payload.config'
import { pilotRelease, pilotBaseline, pilotNewSlugs } from './content/pilot-release'
import { pageTemplates } from '../src/docs/page-templates'
import type { Page } from '../src/payload-types'

const publish = process.argv.includes('--publish')
const safeConfig = await config
const adapter = postgresAdapter({ pool: { connectionString: process.env.DATABASE_URI }, push: false })
safeConfig.db = { ...adapter, allowIDOnCreate: adapter.allowIDOnCreate ?? false, name: adapter.name ?? 'postgres' }
const payload = await getPayload({ config: safeConfig })
const emptyTemplate = Object.fromEntries(pageTemplates.map(({ key, fields }) => [key,
  Object.fromEntries(fields.map(({ key }) => [key, null])),
]))
const clean = (input: unknown): unknown => Array.isArray(input) ? input.map(clean) :
  input && typeof input === 'object' ? Object.fromEntries(Object.entries(input)
    .filter(([key, value]) => key !== 'id' && value !== null && value !== undefined)
    .sort(([a], [b]) => a.localeCompare(b)).map(([key, value]) => [key, clean(value)])) : input
const templateEmpty = (page: Page) => pageTemplates.every(({ key, fields }) =>
  fields.every(({ key: field }) => !((page.template?.[key] as Record<string, unknown> | undefined)?.[field])))
try {
  const { docs: [system] } = await payload.find({ collection: 'design-systems', where: { slug: { equals: 'shadcn' } }, limit: 1, depth: 0 })
  assert(system, 'shadcn fehlt')
  const { docs: existing } = await payload.find({ collection: 'pages', pagination: false, draft: true, depth: 0, where: { designSystem: { equals: system.id } } })
  const bySlug = new Map(existing.map(page => [page.slug, page]))
  const original = new Map(bySlug)
  const affected = pilotRelease.map(page => page.slug)
  assert.equal(new Set(affected).size, 5, 'Genau fünf verschiedene Pilotseiten erwartet.')
  assert.deepEqual([...affected].sort(), [...Object.keys(pilotBaseline), ...pilotNewSlugs].sort())
  const protectedIds = existing.filter(page => affected.includes(page.slug)).map(page => page.id)
  const unchanged = async (req?: Partial<PayloadRequest>) => ({
    publishedPages: (await payload.find({ collection: 'pages', pagination: false, draft: false, depth: 0, sort: 'id', where: { id: { not_in: protectedIds } }, req })).docs,
    draftPages: (await payload.find({ collection: 'pages', pagination: false, draft: true, depth: 0, sort: 'id', where: { id: { not_in: protectedIds } }, req })).docs,
    implementations: (await payload.find({ collection: 'implementations', pagination: false, draft: true, depth: 0, sort: 'id', req })).docs,
  })
  const before = await unchanged()
  const desired = (entry: typeof pilotRelease[number]) => ({ title: entry.title, summary: entry.summary, pageType: entry.pageType, order: entry.order,
    parent: entry.parent ? bySlug.get(entry.parent)!.id : null, content: entry.content, template: emptyTemplate, _status: 'published' as const })
  const same = (page: Page, data: ReturnType<typeof desired>) => Object.entries(data).every(([key, value]) => key === 'template' ? templateEmpty(page) :
    JSON.stringify(clean(page[key as keyof Page])) === JSON.stringify(clean(value)))
  for (const entry of pilotRelease) {
    assert(entry.content?.length, `Leerer Inhalt: ${entry.slug}`)
    assert(!entry.parent || bySlug.has(entry.parent), `Fehlende Elternseite: ${entry.parent}`)
    const page = bySlug.get(entry.slug)
    const baseline = pilotBaseline[entry.slug]
    if (baseline) {
      assert(page && page._status === 'published', `Seite fehlt oder neuer Entwurf: ${entry.slug}`)
      assert.equal(page.id, baseline.id)
      if (!same(page, desired(entry))) assert.equal(page.updatedAt, baseline.updatedAt, `Seit Analyse geändert: ${entry.slug}`)
    } else {
      assert(pilotNewSlugs.some(slug => slug === entry.slug))
      assert(!page || (page._status === 'published' && same(page, desired(entry))), `Neue Pilotseite existiert mit anderem Inhalt: ${entry.slug}`)
    }
  }
  console.log(JSON.stringify({ mode: publish ? 'publish' : 'preview', schemaPush: false, pages: pilotRelease.map(entry => ({ slug: entry.slug, operation: bySlug.has(entry.slug) ? 'update' : 'create', blocks: entry.content!.length })) }, null, 2))
  if (publish) {
    const transactionID = await payload.db.beginTransaction()
    assert(transactionID, 'Eine Datenbanktransaktion wird benötigt.')
    const req = { transactionID }
    try {
      for (const entry of pilotRelease) {
        const page = bySlug.get(entry.slug)
        if (page) {
          const current = await payload.findByID({ collection: 'pages', id: page.id, draft: true, depth: 0, req })
          assert.equal(current.updatedAt, page.updatedAt, `Neuere Änderung: ${entry.slug}`)
          assert.equal(current._status, 'published', `Neuer Entwurf: ${entry.slug}`)
          if (!same(current, desired(entry))) await payload.update({ collection: 'pages', id: page.id, data: desired(entry), draft: false, req })
        } else {
          const collision = await payload.find({ collection: 'pages', draft: true, depth: 0, limit: 1, where: { slug: { equals: entry.slug } }, req })
          assert.equal(collision.docs.length, 0, `Seite inzwischen vorhanden: ${entry.slug}`)
          const created = await payload.create({ collection: 'pages', data: { ...desired(entry), slug: entry.slug, designSystem: system.id, system: 'shadcn' }, draft: false, req })
          bySlug.set(entry.slug, created)
          protectedIds.push(created.id)
        }
      }
      for (const entry of pilotRelease) {
        const page = await payload.findByID({ collection: 'pages', id: bySlug.get(entry.slug)!.id, draft: false, depth: 0, req })
        assert(same(page, desired(entry)), `Rückleseprüfung fehlgeschlagen: ${entry.slug}`)
        const old = original.get(entry.slug)
        if (old) for (const key of ['component', 'contract', 'demo', 'designSystem', 'system', 'slug'] as const) assert.deepEqual(page[key], old[key], `${entry.slug}: ${key} verändert`)
      }
      assert.deepEqual(await unchanged(req), before, 'Andere Seiten oder Implementierungen wurden verändert.')
      await payload.db.commitTransaction(transactionID)
    } catch (error) { await payload.db.rollbackTransaction(transactionID); throw error }
    console.log('Pilot veröffentlicht und zurückgelesen; Pins, Demos, Implementierungen und übrige Seiten unverändert.')
  }
} finally { await payload.destroy() }
process.exit(0)
