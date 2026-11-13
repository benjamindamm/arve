import Link from 'next/link'

import { layoutExamples } from './layout-metadata'

export function LayoutExamples() {
  return (
    <section className="layout-example-list" aria-labelledby="seitentypen">
      <h2 id="seitentypen">Seitentypen</h2>
      <ul className="component-index">
        {layoutExamples.map(({ id, title, description }) => (
          <li key={id}><Link href={'/systems/shadcn/layout/' + id}><strong>{title}</strong><span> · {description}</span></Link></li>
        ))}
      </ul>
    </section>
  )
}

export function LayoutExample({ id }: { id: string }) {
  const example = layoutExamples.find((item) => item.id === id)
  if (!example) return null
  return (
    <main className="shell layout-example" id="inhalt">
      <Link href="/systems/shadcn/layout">← Grid und Abstände</Link>
      <header>
        <h1>{example.title}</h1>
        <p>{example.description}</p>
        <nav aria-label="Seitentypen">
          {layoutExamples.map((item) => (
            <Link key={item.id} href={'/systems/shadcn/layout/' + item.id}
              aria-current={item.id === id ? 'page' : undefined} className={item.id === id ? 'system-button' : 'system-button outline'}>
              {item.title}
            </Link>
          ))}
        </nav>
      </header>
      {id === 'detail' && (
        <div className="layout-split">
          <article className="layout-card">
            <h2>Projektübersicht</h2>
            <p>Im Kundenportal sollen Rechnungen einfacher zu finden sein. Die nächste Runde konzentriert sich auf den Suchablauf und die verständliche Darstellung des Zahlungsstatus.</p>
            <h3>Ziel</h3>
            <p>Kund:innen finden eine Rechnung anhand des Datums oder der Rechnungsnummer und können sie herunterladen.</p>
            <h3>Lieferumfang</h3>
            <ul><li>Rechnungsliste mit Filter</li><li>Leerer Zustand mit nächster Aktion</li><li>Rückmeldung beim Download</li></ul>
            <h3>Nächste Schritte</h3>
            <p>Entwurf mit Beispielrechnungen testen. Danach Beschriftungen und Reihenfolge der Aktionen überarbeiten.</p>
          </article>
          <aside className="layout-card layout-sticky">
            <h2>Zusatzinfos</h2>
            <dl><dt>Status</dt><dd>In Planung</dd><dt>Verantwortlich</dt><dd>Team Kundenportal</dd></dl>
          </aside>
        </div>
      )}
      {id === 'uebersicht' && (
        <div className="layout-four">
          {[
            ['Projekte', 'Aktive Vorhaben und nächste Schritte.'],
            ['Rechnungen', 'Zahlungsstatus und Belege.'],
            ['Kontakte', 'Ansprechpersonen und Zuständigkeiten.'],
            ['Support', 'Offene Anfragen und Hilfestellungen.'],
          ].map(([title, copy]) => <article className="layout-card" key={title}><h2>{title}</h2><p>{copy}</p></article>)}
        </div>
      )}
      {id === 'arbeitsflaeche' && (
        <article className="layout-card layout-wide">
          <h2>Aktivitäten</h2>
          <p>Eine zusammenhängende Übersicht über Änderungen im Kundenportal.</p>
          <table><thead><tr><th scope="col">Zeitpunkt</th><th scope="col">Aktivität</th></tr></thead>
            <tbody><tr><td>Heute</td><td>Rechnungsliste zur Prüfung freigegeben</td></tr>
              <tr><td>Gestern</td><td>Filter und leere Zustände ergänzt</td></tr>
              <tr><td>Montag</td><td>Projekt angelegt</td></tr></tbody>
          </table>
        </article>
      )}
    </main>
  )
}
