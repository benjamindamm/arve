import Link from 'next/link'
import { flattenDocumentation, type Entry } from './published-documentation'
import './shadcn-home.css'

const startingPoints = [
  {
    title: 'Eine Seite aufbauen',
    text: 'Lege den Zweck der Seite fest und ordne die Inhalte.',
    links: [
      { slug: 'page-types', title: 'Seitentyp wählen' },
      { slug: 'page-layouts', title: 'Layout finden' },
    ],
  },
  {
    title: 'Einen Ablauf gestalten',
    text: 'Plane Eingaben, Rückwege und Rückmeldungen.',
    links: [
      { slug: 'patterns', title: 'UX-Patterns nachschlagen' },
      { slug: 'formulare-validierung', title: 'Formulare und Rückmeldungen' },
    ],
  },
  {
    title: 'Komponenten auswählen',
    text: 'Vergleiche Bausteine und prüfe, wann sie passen.',
    links: [{ slug: 'komponenten', title: 'Zum Komponentenkatalog' }],
  },
]

const referenceGroups = [
  {
    title: 'Gestaltungsgrundlagen',
    links: [
      { slug: 'grundlagen', title: 'Grundlagen', text: 'Farbe, Schrift, Abstände und Form' },
      { slug: 'content-design', title: 'Content Design', text: 'Labels, Hilfen und Meldungen' },
    ],
  },
  {
    title: 'Qualität und Zusammenarbeit',
    links: [
      { slug: 'barrierefreiheit', title: 'Barrierefreiheit', text: 'Anforderungen und Prüfhinweise' },
      { slug: 'mitwirken', title: 'Mitwirken und Releases', text: 'Änderungen und aktueller Stand' },
    ],
  },
]

export function ShadcnHome({ theme, entries }: { theme?: string | null; entries: Entry[] }) {
  const published = new Map(flattenDocumentation(entries).map(entry => [entry.slug, entry]))
  const starts = startingPoints.map(item => ({
    ...item,
    links: item.links.flatMap(link => {
      const entry = published.get(link.slug)
      return entry ? [{ ...link, path: entry.path }] : []
    }),
  })).filter(item => item.links.length)
  const pilot = published.get('gestaltungs-pilot')

  return (
    <main id="inhalt" className="shell shadcn-home" data-system-theme={theme}>
      <header className="shadcn-home-intro">
        <p className="shadcn-home-eyebrow">Arve · Referenzimplementierung</p>
        <h1>shadcn Handbuch</h1>
        <p>Dieses Handbuch verbindet Regeln, Gestaltungsvorlagen und Komponentenbeispiele für Weboberflächen mit shadcn.
          Nutze die Referenz mit deinem Team, um Entwürfe abzustimmen und die Umsetzung vorzubereiten.</p>
      </header>

      {!!starts.length && <section className="shadcn-home-start" aria-labelledby="shadcn-home-start">
        <h2 id="shadcn-home-start">Was möchtest du gestalten?</h2>
        <div className="shadcn-home-start-grid">
          {starts.map(item => <div className="shadcn-home-task" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <ul>{item.links.map(link => <li key={link.slug}>
              <Link href={link.path}>{link.title} <span aria-hidden="true">→</span></Link>
            </li>)}</ul>
          </div>)}
        </div>
      </section>}

      <section className="shadcn-home-reference" aria-labelledby="shadcn-home-reference">
        <h2 id="shadcn-home-reference">Weiter nachschlagen</h2>
        <div className="shadcn-home-reference-grid">
          {referenceGroups.map(group => <div key={group.title}>
            <h3>{group.title}</h3>
            <ul>{group.links.map(item => {
              const entry = published.get(item.slug)
              return entry && <li key={item.slug}><Link href={entry.path}><span><strong>{item.title}</strong><small>{item.text}</small></span><span aria-hidden="true">→</span></Link></li>
            })}</ul>
          </div>)}
        </div>
        {pilot && <aside className="shadcn-home-example" aria-label="Ergänzendes Beispiel">
          <div><h3>An einem Beispiel nachvollziehen</h3><p>Der Projektablauf zeigt, wie Suche, Detail und Formular zusammenhängen.</p></div>
          <Link href={pilot.path}>Zum Projektbeispiel <span aria-hidden="true">→</span></Link>
        </aside>}
        <p className="shadcn-home-status">Den verfügbaren Stand und offene Prüfungen findest du auf den jeweiligen Komponenten- und Beispielseiten.</p>
      </section>
    </main>
  )
}
