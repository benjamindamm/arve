import Link from 'next/link'
import { flattenDocumentation, type Entry } from './published-documentation'
import './shadcn-home.css'

const tasks = [
  { slug: 'page-types', title: 'Seite aufbauen', text: 'Übersicht, Detail, Bearbeiten oder Erstellen.' },
  { slug: 'page-layouts', title: 'Layout wählen', text: 'Hauptbereiche, Karten und Spalten anordnen.' },
  { slug: 'patterns', title: 'Pattern finden', text: 'Eingaben, Suche und Rückmeldungen gestalten.' },
  { slug: 'komponenten', title: 'Komponente wählen', text: 'Bausteine vergleichen und Beispiele ansehen.' },
]

const topics = [
  { slug: 'grundlagen', title: 'Grundlagen', text: 'Farbe, Schrift, Abstände und Form' },
  { slug: 'content-design', title: 'Content Design', text: 'Labels, Hilfen und Meldungen' },
  { slug: 'barrierefreiheit', title: 'Barrierefreiheit', text: 'Prüfaufgaben für den Formularweg' },
  { slug: 'mitwirken', title: 'Mitwirken und Releases', text: 'Änderungen und aktueller Stand' },
]

export function ShadcnHome({ theme, entries }: { theme?: string | null; entries: Entry[] }) {
  const published = new Map(flattenDocumentation(entries).map(entry => [entry.slug, entry]))
  return (
    <main id="inhalt" className="shell shadcn-home" data-system-theme={theme}>
      <header className="shadcn-home-intro">
        <h1>shadcn <span>Handbuch</span></h1>
        <p>Unsere Referenzimplementierung für Seiten, Abläufe und Komponenten.</p>
      </header>

      <section aria-labelledby="shadcn-home-tasks">
        <h2 id="shadcn-home-tasks">Was möchtest du gestalten?</h2>
        <div className="shadcn-home-tasks">
          {tasks.map(task => {
            const entry = published.get(task.slug)
            return entry && <Link key={task.slug} href={entry.path} className="shadcn-home-task">
              <div><h3>{task.title}</h3><p>{task.text}</p></div><span aria-hidden="true">→</span>
            </Link>
          })}
        </div>
      </section>

      <section className="shadcn-home-examples" aria-labelledby="shadcn-home-examples">
        <h2 id="shadcn-home-examples">Mit einem Beispiel starten</h2>
        <div className="shadcn-home-example-grid">
          {published.has('gestaltungs-pilot') && <Link href={published.get('gestaltungs-pilot')!.path} className="shadcn-home-example">
            <div className="shadcn-home-flow" aria-hidden="true"><span>Finden</span><b>→</b><span>Verstehen</span><b>→</b><span>Bearbeiten</span></div>
            <div><small>Statische Gestaltungsvorlagen · SVG / FIG</small><h3>Ein Projekt finden und bearbeiten <span aria-hidden="true">→</span></h3><p>Zusammenhängender Ablauf mit breiten und schmalen Ansichten.</p></div>
          </Link>}
          {published.has('formulare-validierung') && <Link href={published.get('formulare-validierung')!.path} className="shadcn-home-example">
            <div className="shadcn-home-form-preview" aria-hidden="true"><span>Projektname</span><div>Website überarbeiten</div><b>Speichern</b></div>
            <div><small>Formularbeispiel mit Zuständen</small><h3>Eingaben und Fehler gestalten <span aria-hidden="true">→</span></h3><p>Vom Ausfüllen über die Korrektur zum Speicherergebnis.</p></div>
          </Link>}
        </div>
      </section>

      <section className="shadcn-home-topics" aria-labelledby="shadcn-home-topics">
        <h2 id="shadcn-home-topics">Regeln nachschlagen</h2>
        <div className="shadcn-home-topic-grid">{topics.map(topic => {
          const entry = published.get(topic.slug)
          return entry && <Link key={topic.slug} href={entry.path}><h3>{topic.title} <span aria-hidden="true">→</span></h3><p>{topic.text}</p></Link>
        })}</div>
      </section>
    </main>
  )
}
