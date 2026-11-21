import Link from 'next/link'
import { flattenDocumentation, type Entry } from './published-documentation'
import './shadcn-home.css'

const chapters = [
  { slug: 'page-types', title: 'Page types', text: 'Übersicht, Detail, Erstellen und Bearbeiten' },
  { slug: 'page-layouts', title: 'Page layouts', text: 'Hauptbereiche, Karten und Spalten' },
  { slug: 'patterns', title: 'Patterns', text: 'Suche, Eingaben und Rückmeldungen' },
  { slug: 'komponenten', title: 'Komponenten', text: 'Bausteine, Beispiele und verfügbarer Stand' },
]

const topics = [
  { slug: 'grundlagen', title: 'Grundlagen', text: 'Farbe, Schrift, Abstände und Form' },
  { slug: 'content-design', title: 'Content Design', text: 'Labels, Hilfen und Meldungen' },
  { slug: 'barrierefreiheit', title: 'Barrierefreiheit', text: 'Barrierefreiheit in Formularen prüfen' },
  { slug: 'mitwirken', title: 'Mitwirken und Releases', text: 'Änderungen und aktueller Stand' },
]

export function ShadcnHome({ theme, entries }: { theme?: string | null; entries: Entry[] }) {
  const published = new Map(flattenDocumentation(entries).map(entry => [entry.slug, entry]))
  const pilot = published.get('gestaltungs-pilot')
  const forms = published.get('formulare-validierung')
  return (
    <main id="inhalt" className="shell shadcn-home" data-system-theme={theme}>
      <header className="shadcn-home-intro">
        <p className="shadcn-home-eyebrow">Arve · Referenzimplementierung</p>
        <h1>shadcn Handbuch</h1>
        <p>Dieses Handbuch verbindet Regeln, Gestaltungsvorlagen und Komponentenbeispiele für Weboberflächen mit shadcn.
          Nutze die Referenz mit deinem Team, um Entwürfe abzustimmen und die Umsetzung vorzubereiten.</p>
      </header>

      {pilot && <section className="shadcn-home-start" aria-labelledby="shadcn-home-start">
        <div className="shadcn-home-start-copy">
          <p className="shadcn-home-eyebrow">Empfohlener Einstieg</p>
          <h2 id="shadcn-home-start">Ein Projekt finden und bearbeiten</h2>
          <p>Entwirf einen zusammenhängenden Ablauf: von der Suche über die Detailansicht bis zum Formular.</p>
          <Link href={pilot.path} className="shadcn-home-primary">Projektablauf ansehen <span aria-hidden="true">→</span></Link>
          <p className="shadcn-home-start-detail">Dort findest du editierbare SVG-/FIG-Vorlagen für breite und schmale Ansichten sowie die passenden Regeln.</p>
          <p className="shadcn-home-limit">Statische Entwürfe. Anwendung und unabhängige Teamprobe stehen noch aus.</p>
        </div>
        <figure className="shadcn-home-preview">
          <figcaption>Ein Projekt in drei Schritten <span>Statische Vorschau</span></figcaption>
          <ol>
            <li>
              <h3><span>1</span> Finden</h3>
              <div className="shadcn-home-screen">
                <p className="shadcn-home-screen-label">Projekte</p>
                <div className="shadcn-home-search">Suche: Alpen <span>Status: Aktiv</span></div>
                <div className="shadcn-home-result"><strong>Alpen</strong><span>P-101 · Aktiv</span></div>
                <p className="shadcn-home-screen-next">Projekt öffnen →</p>
              </div>
            </li>
            <li>
              <h3><span>2</span> Verstehen</h3>
              <div className="shadcn-home-screen">
                <p className="shadcn-home-screen-label">Projektdetail</p>
                <strong className="shadcn-home-project">Alpen</strong>
                <dl><div><dt>Projekt-ID</dt><dd>P-101</dd></div><div><dt>Status</dt><dd>Aktiv</dd></div></dl>
                <p className="shadcn-home-screen-next">Namen bearbeiten →</p>
              </div>
            </li>
            <li>
              <h3><span>3</span> Bearbeiten</h3>
              <div className="shadcn-home-screen">
                <p className="shadcn-home-screen-label">Projekt bearbeiten</p>
                <p>Projektname</p>
                <div className="shadcn-home-input">Alpen</div>
                <p className="shadcn-home-screen-next">Abbrechen · Speichern</p>
              </div>
            </li>
          </ol>
        </figure>
        {forms && <p className="shadcn-home-deepen">Zum Vertiefen: <Link href={forms.path}>Eingaben, Fehler und Rückmeldungen im Formular <span aria-hidden="true">→</span></Link></p>}
      </section>}

      <section className="shadcn-home-reference" aria-labelledby="shadcn-home-reference">
        <h2 id="shadcn-home-reference">Direkt nachschlagen</h2>
        <div className="shadcn-home-reference-grid">
          {[{ title: 'Aufbau und Bausteine', links: chapters }, { title: 'Regeln und Zusammenarbeit', links: topics }].map(group => <div key={group.title}>
            <h3>{group.title}</h3>
            <ul>{group.links.map(item => {
              const entry = published.get(item.slug)
              return entry && <li key={item.slug}><Link href={entry.path}><span><strong>{item.title}</strong><small>{item.text}</small></span><span aria-hidden="true">→</span></Link></li>
            })}</ul>
          </div>)}
        </div>
        {!pilot && forms && <p className="shadcn-home-deepen"><Link href={forms.path}>Eingaben, Fehler und Rückmeldungen im Formular <span aria-hidden="true">→</span></Link></p>}
        <p className="shadcn-home-status">Die Referenzimplementierung zeigt, wie Regeln und Bausteine zusammenspielen. Der Stand ist je Beispiel und Komponente unterschiedlich; Verfügbarkeit und offene Prüfungen findest du auf der jeweiligen Seite.</p>
      </section>
    </main>
  )
}
