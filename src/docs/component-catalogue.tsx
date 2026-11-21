'use client'
import { useEffect, useId, useState } from 'react'
import Link from 'next/link'
import type { Entry } from './published-documentation'
import { catalogueGroups, catalogueMeta, searchCatalogue } from './component-catalogue-data'
import { CatalogueMiniature } from './component-catalogue-miniature'
import './component-catalogue.css'
export function ComponentCatalogue({ entries }: { entries: Entry[] }) {
  const id = useId(), [query, setQuery] = useState(''), [task, setTask] = useState('all')
  const [chapterSearch, setChapterSearch] = useState(false)
  useEffect(() => { setChapterSearch(!!document.querySelector('.handbook-chapter-button')) }, [])
  const found = searchCatalogue(entries, query).filter(entry => task === 'all' || catalogueMeta(entry).group === task)
  const groups = [...catalogueGroups, { id: 'other', title: 'Weitere Komponenten', hint: 'Alle weiteren veröffentlichten Einträge' }].filter(group => entries.some(entry => catalogueMeta(entry).group === group.id))
  const shadcn = entries.some(entry => /^\/systems\/shadcn\/components\//.test(entry.path))
  const alternatives = ['combobox', 'select', 'native-select'].flatMap(slug => entries.filter(entry => entry.slug === slug && /^\/systems\/shadcn\/components\//.test(entry.path)))
  const dateChoices = shadcn && found.length > 0 && found.every(entry => ['calendar','date-picker'].includes(entry.slug))
  const reset = () => { setQuery(''); setTask('all') }
  return <section className="component-catalogue" aria-label="Komponentenkatalog">
    <div className="catalogue-search"><label htmlFor={id}>Was möchtest du gestalten?</label><input id={id} type="search" value={query} onChange={event => { setQuery(event.target.value); setTask('all') }} placeholder="Zum Beispiel: Land, Datei, Fehler, Datum …"/><p>Nach Aufgabe oder Komponentenname suchen. Die kleinen Skizzen dienen der Orientierung.</p></div>
    <fieldset className="catalogue-tasks" hidden={!!query}><legend>Oder mit einer Aufgabe einsteigen</legend><div><button type="button" aria-pressed={task === 'all'} onClick={() => setTask('all')}>Alle <span>{entries.length}</span></button>{groups.map(group => <button type="button" key={group.id} aria-pressed={task === group.id} onClick={() => setTask(group.id)}><strong>{group.title}</strong><small>{group.hint}</small></button>)}</div></fieldset>
    {shadcn && !query && <aside className="catalogue-choice" aria-label="Hilfe zur Auswahl"><div><strong>Ein Land auswählen?</strong><p>Lange Liste durchsuchen: Combobox. Wenige Optionen: Select. Browserauswahl: Native Select.</p></div><div className="catalogue-choice-links">{alternatives.map(entry => <Link href={entry.path} key={entry.path}>{entry.title} →</Link>)}<Link href="/systems/shadcn/auswahl-und-suche">Auswahlvergleich →</Link><Link href="/systems/shadcn/komponenten-auswahl">Weitere Auswahlhilfe →</Link></div></aside>}
    <div className="catalogue-result-line"><p role="status" aria-live="polite">{found.length} von {entries.length} Komponenten{task !== 'all' ? ' · ' + groups.find(group => group.id === task)?.title : ''}</p>{(query || task !== 'all') && <button type="button" onClick={reset}>Alle anzeigen</button>}</div>
    {!found.length ? <div className="catalogue-empty"><h3>Keine passende Komponente gefunden</h3><p>Versuche einen Aufgabenbegriff wie „Auswahl“, „Datei“, „Fehler“ oder „Datum“. Für zusammengesetzte Aufgaben hilft auch ein einzelnes Stichwort.</p><div>{shadcn && <Link href="/systems/shadcn/komponenten-auswahl">Zur Auswahlhilfe →</Link>}{chapterSearch && <button type="button" onClick={() => document.querySelector<HTMLButtonElement>('.handbook-chapter-button')?.click()}>Auch Kapitel und Patterns durchsuchen →</button>}<button type="button" onClick={reset}>Alle Komponenten anzeigen</button></div></div> : <div className="catalogue-groups">{groups.map(group => {
      const items = found.filter(entry => catalogueMeta(entry).group === group.id)
      if (!items.length) return null
      return <details className="catalogue-group" key={group.id + (query || task)} open={!!query || task !== 'all'}><summary><span><strong>{group.title}</strong><small>{items.slice(0, 3).map(entry => entry.title).join(' · ')}{items.length > 3 ? ' …' : ''}</small></span><span className="catalogue-group-count">{items.length}</span></summary><ul>{items.map(entry => { const meta = catalogueMeta(entry); return <li key={entry.path}><Link href={entry.path}><CatalogueMiniature shape={meta.shape} slug={entry.slug}/><span className="catalogue-entry-text"><strong>{entry.title}</strong><span>{meta.description}</span></span><span aria-hidden="true">↗</span></Link></li> })}</ul></details>
    })}</div>}
    {shadcn && !!query && found.length > 0 && (dateChoices ? <p className="catalogue-query-help">Soll der Kalender sichtbar bleiben? {found.some(entry=>entry.slug==='calendar') && <><Link href={found.find(entry=>entry.slug==='calendar')!.path}>Calendar</Link> zeigt den Monatskontext direkt.</>}{found.some(entry=>entry.slug==='date-picker') && <> <Link href={found.find(entry=>entry.slug==='date-picker')!.path}>Date Picker</Link> öffnet ihn erst bei Bedarf im Formular.</>}</p> : <p className="catalogue-query-help">Unsicher zwischen mehreren Bausteinen? <Link href="/systems/shadcn/auswahl-und-suche">Auswahlvergleich</Link> · <Link href="/systems/shadcn/komponenten-auswahl">Auswahlhilfe</Link></p>)}
    <p className="catalogue-note">Miniaturen sind schematische Orientierung, keine bedienbaren Beispiele oder Verfügbarkeitsnachweise. Den Stand und die Beispiele findest du auf der jeweiligen Komponentenseite.{shadcn && <> <Link href="/systems/shadcn/frameworks">Frameworks und Plattformen →</Link></>}</p>
  </section>
}
