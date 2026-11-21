import assert from 'node:assert/strict'
import { readdirSync } from 'node:fs'
import { test } from 'node:test'
import { catalogueMeta, searchCatalogue } from './component-catalogue-data'
import type { Entry } from './published-documentation'

const entries: Entry[] = [...readdirSync('scripts/content/component-docs').filter(name => name.endsWith('.json')).map(name => name.slice(0, -5)), 'button'].map(slug => ({ slug, title: slug, path: '/systems/shadcn/components/' + slug, kind: 'component' }))
test('all 69 documented families remain reachable and assigned to tasks', () => {
  assert.equal(new Set(entries.map(entry => entry.slug)).size, 69)
  assert.equal(searchCatalogue(entries, '').length, 69)
  assert.deepEqual(entries.filter(entry => catalogueMeta(entry).group === 'other'), [])
})
test('real German tasks find suitable choices without knowing component names', () => {
  const tasks: [string, string[]][] = [
    ['Land', ['combobox', 'select', 'native-select']],
    ['Datei', ['attachment', 'button', 'input']],
    ['Fehler', ['alert', 'toast', 'field']],
    ['Datum', ['date-picker', 'calendar']],
    ['Auswahl', ['checkbox', 'combobox', 'select']],
    ['Zahlungen', ['data-table', 'table']],
    ['LÄNDER', ['combobox', 'select', 'native-select']],
  ]
  for (const [query, expected] of tasks) {
    const found = searchCatalogue(entries, query).map(entry => entry.slug)
    for (const slug of expected) assert.ok(found.includes(slug), `${query} should find ${slug}`)
  }
  assert.equal(searchCatalogue(entries, 'unfindbarxzy').length, 0)
})
test('matching slugs in other systems never inherit shadcn claims', () => {
  const entry: Entry = { slug: 'combobox', title: 'Combo', path: '/systems/another/components/combobox', kind: 'component', summary: 'Originaltext' }
  assert.equal(catalogueMeta(entry).group, 'other')
  assert.equal(catalogueMeta(entry).description, 'Originaltext')
  assert.equal(searchCatalogue([entry], 'Land').length, 0)
  assert.equal(searchCatalogue([entry], 'Originaltext').length, 1)
  assert.equal(catalogueMeta({ slug: 'future', path: '/systems/shadcn/components/future' }).group, 'other')
})
