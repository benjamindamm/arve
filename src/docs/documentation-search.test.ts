import assert from 'node:assert/strict'
import { test } from 'node:test'
import { searchDocuments, type SearchDocument } from './documentation-search'

const fixture: SearchDocument[] = [
  { entry: { slug: 'button', title: 'Button', path: '/systems/shadcn/components/button', kind: 'component' }, sections: [{ text: 'Eine Aktion auslösen.' }] },
  { entry: { slug: 'buttons-in-context', title: 'Navigation', path: '/navigation', kind: 'section' }, sections: [{ text: 'Button Button Button Button Button. Allgemeine Beispiele.' }] },
  { entry: { slug: 'trace', title: 'Trace', path: '/trace', kind: 'component' }, sections: [{ text: 'Abstimmung in der Werkstatt; Kaufmuster sind nicht geprüft.' }] },
  { entry: { slug: 'patterns', title: 'Patternkatalog', path: '/patterns', kind: 'section' }, sections: [{ id: 'UX-001', text: 'UX-001: Suchergebnisse während der Eingabe filtern.' }, { id: 'UX-010', text: 'Details anzeigen.' }] },
]

test('word boundaries, punctuation and deliberate German spellings; repeated boilerplate cannot outrank titles', () => {
  for (const query of ['Schaltfläche', 'SCHALTFLAECHEN!', 'Schaltfläche'.normalize('NFD'), '(Button)']) {
    assert.equal(searchDocuments(fixture, 'shadcn', query).results[0]?.entry.slug, 'button')
  }
  assert.equal(searchDocuments(fixture, 'shadcn', 'buttonx').total, 0)
  assert.equal(searchDocuments(fixture, 'shadcn', 'kauf').total, 0)
  assert.equal(searchDocuments(fixture, 'shadcn', 'abstimm').total, 0)
  assert.equal(searchDocuments(fixture, 'shadcn', 'und mit der').total, 0)
})

test('pattern IDs retain exact identity and return source evidence', () => {
  for (const query of ['UX-001', '(ux-001).', 'UX 001', 'UX–001']) {
    const result = searchDocuments(fixture, 'shadcn', query).results[0]
    assert.deepEqual(result.matchedIds, ['UX-001'])
    assert.ok(result.snippet.includes('Suchergebnisse'))
    assert.equal(result.reference.tool, 'get_documentation_page')
  }
  assert.equal(searchDocuments(fixture, 'shadcn', 'UX-01').total, 0)
  assert.equal(searchDocuments(fixture, 'shadcn', 'UX-999 Suche').total, 0)
})

test('partial fallback reports unknown domain terms and respects bounded deterministic pagination', () => {
  const result = searchDocuments(fixture, 'shadcn', 'Krypto-Kauf mit Schaltfläche', 1)
  assert.equal(result.mode, 'partial')
  assert.deepEqual(result.unmatchedTerms, ['krypto', 'kauf'])
  assert.match(result.message ?? '', /not evidence of domain-specific/)
  assert.equal(result.results.length, 1)
  assert.equal(result.results[0].matchMode, 'partial')
  assert.equal(searchDocuments(fixture, 'shadcn', 'Button', 1000).limit, 30)
  assert.equal(searchDocuments(fixture, 'shadcn', 'Button', 1, 1).results[0].entry.slug, 'buttons-in-context')
  assert.deepEqual(searchDocuments([...fixture].reverse(), 'shadcn', 'Button'), searchDocuments(fixture, 'shadcn', 'Button'))
})

test('published snapshot recovers audited tasks, preserves scope and exposes actionable tree references', async () => {
  process.env.ARVE_STATIC_EXPORT = '1'
  const { searchDocumentationDetailed, documentationTree, flattenDocumentation } = await import('./published-documentation')
  const find = async (query: string) => (await searchDocumentationDetailed('shadcn', query, 10))!
  assert.equal((await find('Schaltfläche')).results[0].entry.slug, 'button')
  const tables = (await find('responsive Tabelle')).results.map(result => result.entry.slug)
  for (const slug of ['table', 'data-table', 'tabellen-und-listen']) assert.ok(tables.indexOf(slug) >= 0 && tables.indexOf(slug) < 5, slug)
  const patterns = (await find('UX-001')).results[0]
  assert.equal(patterns.entry.slug, 'patterns')
  assert.ok(!('children' in patterns.entry))
  assert.deepEqual(patterns.matchedIds, ['UX-001'])
  assert.ok(patterns.snippet.includes('UX-001'))
  for (const query of ['Depotauszug responsive mit Suche und Detail', 'Krypto-Kauf mit Prüfung und Bestätigung']) {
    const result = await find(query)
    assert.equal(result.mode, 'partial')
    assert.ok(result.results.length > 0)
    assert.ok(result.unmatchedTerms.length > 0)
  }
  const tree = flattenDocumentation((await documentationTree('shadcn'))!.tree)
  assert.deepEqual(tree.find(entry => entry.slug === 'detail' && entry.kind === 'layout-example')?.retrieval, { tool: 'get_documentation_page', arguments: { system: 'shadcn', section: 'layout', example: 'detail' } })
  assert.deepEqual(tree.find(entry => entry.slug === 'main-sidebar')?.retrieval, { tool: 'get_documentation_page', arguments: { system: 'shadcn', section: 'main-sidebar' } })
})

test('task searches expose individual observed candidates and transparent scoped discovery labels', async () => {
  process.env.ARVE_STATIC_EXPORT = '1'
  const { searchDocumentationDetailed, getDocumentationPage, documentationTree } = await import('./published-documentation')
  const { pageSections, snapshotOf } = await import('./mcp-reads')
  const find = async (query: string, limit = 5, offset = 0) => (await searchDocumentationDetailed('shadcn', query, limit, offset))!
  for (const query of ['Kosten Gesamtbetrag', 'Kauf prüfen', 'Bestätigung Zusammenfassung', 'Konsequenzen']) {
    const result = await find(query)
    const hit = result.results.find(hit => hit.entry.pattern?.id === 'UX-021')
    assert.ok(hit, query)
    assert.equal(hit.entry.pattern?.status, 'candidate')
    assert.match(hit.entry.pattern?.observations ?? '', /keine Berechnung oder Detailnavigation geprüft/)
    assert.match(hit.entry.pattern?.scope ?? '', /not an approved rule/)
    assert.ok(hit.snippet.includes('Auftragssumme'), query)
    assert.equal(hit.discovery?.kind, 'editorial-task-aliases')
    assert.match(hit.discovery?.scope ?? '', /not published normative content/)
    const read = hit.entry.matchedSection!
    assert.equal(read.tool, 'get_documentation_section')
    const page = (await getDocumentationPage('shadcn', 'patterns'))!
    assert.equal(read.arguments.snapshot, snapshotOf(page))
    assert.equal(pageSections(page).find(section => section.id === read.arguments.sectionId)?.key, 'UX-021')
    for (const absent of ['kauf', 'bestaetigung', 'kosten']) if (query.toLowerCase().includes(absent === 'bestaetigung' ? 'bestätigung' : absent)) {
      assert.ok(hit.unmatchedTerms.includes(absent), `${query}: ${absent} remains unsupported by this candidate`)
    }
  }
  const costs = await find('Kosten Gesamtbetrag')
  assert.ok(costs.results.some(hit => hit.entry.pattern?.id === 'UX-024'))
  assert.equal((await find('UX-021')).total, 1)
  assert.equal((await find('UX-999 Gesamtbetrag')).total, 0)
  assert.equal((await find('Gesamtbetragx')).total, 0)
  const all = await find('Zusammenfassung', 30)
  assert.deepEqual((await find('Zusammenfassung', 2, 2)).results, all.results.slice(2, 4))
  const docs = (await documentationTree('shadcn'))!.searchDocuments
  assert.deepEqual(searchDocuments([...docs].reverse(), 'shadcn', 'Zusammenfassung'), searchDocuments(docs, 'shadcn', 'Zusammenfassung'))
  assert.ok(!docs.find(doc => doc.entry.slug === 'button')?.discoveryAliases)
})

test('editorial task labels do not leak from unrelated boilerplate, negations or neighbouring patterns', () => {
  const docs: SearchDocument[] = [
    { entry: { slug: 'review', title: 'Review', path: '/review', kind: 'section' }, sections: [{ text: 'Keine Kostenberechnung geprüft. Auswirkungen bleiben unbekannt.' }] },
    { entry: { slug: 'catalogue', title: 'Other candidate', path: '/catalogue', kind: 'section' }, sections: [{ id: 'UX-022', text: 'In ein Portal wechseln.' }] },
  ]
  for (const query of ['Gesamtbetrag', 'Zusammenfassung', 'Konsequenzen', 'Kauf']) assert.equal(searchDocuments(docs, 'shadcn', query).total, 0)
})

test('task labels lead to bounded general guidance and related original sections, with uncertainty scoped to state guidance', async () => {
  process.env.ARVE_STATIC_EXPORT = '1'
  const { searchDocumentationDetailed, getDocumentationPage } = await import('./published-documentation')
  const { pageSections, snapshotOf } = await import('./mcp-reads')
  const find = async (query: string) => (await searchDocumentationDetailed('shadcn', query, 5))!
  for (const query of ['Kosten', 'Gesamtbetrag', 'Zusammenfassung']) {
    const result = await find(query)
    assert.ok(result.results[0].entry.guidance, query)
    const main = result.results.find(hit => hit.entry.guidance?.sourceBlock === 'responsive')!
    assert.ok(main, query)
    assert.match(main.discovery?.scope ?? '', /not published normative content/)
    assert.match(main.entry.guidance?.scope ?? '', /layout measurements elsewhere.*not general requirements/)
  }
  const hit = (await find('Gesamtbetrag')).results.find(hit => hit.entry.pattern?.id === 'UX-021')!
  assert.equal(hit.entry.relatedGuidance?.length, 3)
  for (const related of hit.entry.relatedGuidance!) {
    const args = related.read.arguments
    const source = (await getDocumentationPage(args.system, args.section))!
    assert.equal(args.snapshot, snapshotOf(source))
    assert.ok(pageSections(source).some(section => section.id === args.sectionId))
    assert.ok(related.why.length > 20)
  }
  for (const query of ['ungewisses Ergebnis', 'ungeklärtes Ergebnis', 'ungewiss']) {
    const result = await find(query)
    assert.ok(result.results.slice(0, 3).every(hit => hit.entry.guidance), query)
    assert.ok(result.results.slice(0, 3).every(hit => hit.matchMode === 'all-terms'), query)
  }
  for (const query of ['Kostenberechnungx', 'Gesamtbetragsgarantie']) assert.equal((await find(query)).total, 0)
  const domain = await find('ungewisses Depotgeschäft Ergebnis')
  assert.ok(domain.results[0].unmatchedTerms.includes('depotgeschaeft'))
})
