import Link from 'next/link'
import { listSystems } from '../../docs/systems'
import { ArveWorkflows } from '../../docs/arve-workflows'
import './platform.css'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const systems = await listSystems()

  return (
    <main id="inhalt" className="platform-home">
      <section className="platform-hero" aria-labelledby="arve-title">
        <div className="shell platform-intro">
          <div className="platform-intro-copy">
            <p className="platform-eyebrow">Die Plattform für eure Design-Systeme</p>
            <h1 id="arve-title">UX für Teams und Agenten</h1>
            <p className="platform-lead">Arve verbindet Design-Richtlinien und definierte Bedienregeln zu einer Wissensdatenbank für UI, UX und Technik.</p>
            <div className="platform-actions">
              <Link className="platform-primary-link" href="#workflows">Arbeitswege entdecken <span aria-hidden="true">↓</span></Link>
              <Link className="platform-text-link" href="#systeme">Design-Systeme öffnen <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <figure className="platform-map">
            <figcaption>Einmal beschrieben. Gemeinsam genutzt.</figcaption>
            <div className="platform-map-sources">
              <div><strong>Designwissen</strong><span>Guidelines & Patterns</span></div>
              <span className="platform-map-plus" aria-hidden="true">+</span>
              <div><strong>UI Contracts</strong><span>Versionierte Vorgaben</span></div>
            </div>
            <div className="platform-map-connector" aria-hidden="true">↓</div>
            <div className="platform-map-center"><span aria-hidden="true" className="arve-mark" /><strong>Arve</strong><span>Eine Quelle, ein Handbuch</span></div>
            <div className="platform-map-branches" aria-hidden="true"><span>↓</span><span>↓</span></div>
            <div className="platform-map-readers">
              <div><strong>Teams</strong><span>Im Portal nachschlagen</span></div>
              <div><strong>KI-Agenten</strong><span>Über MCP abrufen</span></div>
            </div>
          </figure>
        </div>
      </section>

      <ArveWorkflows />

      <section id="mcp" className="platform-mcp" aria-labelledby="mcp-title">
        <div className="shell platform-mcp-grid">
          <div className="platform-mcp-copy">
            <p className="platform-eyebrow">Mit KI arbeiten</p>
            <h2 id="mcp-title">Der Agent kennt die Regeln</h2>
            <p>Der Agent verbindet sich über MCP zum Design-System. Er fragt die Bibliothek an Komponenten ab und entscheidet nach festgelegten UX-Regeln deren Einsatz.</p>
            <dl className="platform-responsibilities">
              <div><dt>MCP liefert Wissen.</dt><dd>Direkt aus eurem Design-System.</dd></div>
              <div><dt>Der Skill führt die Arbeit.</dt><dd>Auswählen, umsetzen, prüfen – mit UI Contracts.</dd></div>
              <div><dt>Das Team entscheidet.</dt><dd>Über offene Fragen, Änderungen und Freigaben.</dd></div>
            </dl>
            <Link className="platform-text-link" href="#systeme">Im Design-System ausprobieren <span aria-hidden="true">↓</span></Link>
          </div>
          <figure className="platform-agent-example">
            <figcaption>So kommt Wissen in den Auftrag <span>Beispiel</span></figcaption>
            <div className="platform-agent-request"><span>Ihr beauftragt den Agenten</span><blockquote>„Baue einen Button zum Speichern ein.“</blockquote></div>
            <div className="platform-agent-context">
              <p>Der Agent ruft aus Arve ab <span aria-hidden="true">↓</span></p>
              <dl>
                <div><dt>Einsatzregeln</dt><dd>Wann der Button passt und wie er beschriftet wird.</dd></div>
                <div><dt>UI Contract</dt><dd>Schnittstelle, Gestaltung, Verhalten und Barrierefreiheit.</dd></div>
                <div><dt>Plattformstand</dt><dd>Verfügbare Implementierung, Version und Prüfungen.</dd></div>
              </dl>
            </div>
            <div className="platform-agent-result"><span aria-hidden="true">↳</span><p>Mit diesen Vorgaben setzt der Agent den Auftrag in eurem Projekt um.</p></div>
          </figure>
        </div>
      </section>

      <section id="systeme" className="shell platform-directory" aria-labelledby="systeme-title">
        <div className="platform-directory-intro">
          <p className="platform-eyebrow">Einsteigen</p>
          <h2 id="systeme-title">Eure Systeme.<br />Ein gemeinsamer Ort.</h2>
          <p>Jedes Design-System hat eigene Grundlagen, Komponenten, Layouts und UX-Patterns. Der Umsetzungsstand bleibt je Plattform sichtbar.</p>
        </div>
        <div className="platform-directory-list">
          <p className="platform-eyebrow">Design-System auswählen</p>
          {systems.length ? <ul className="platform-systems">
            {systems.map(({ id, slug, name }) => (
              <li key={id}>
                <Link href={'/systems/' + encodeURIComponent(slug)}><strong>{name}</strong><span aria-hidden="true">↗</span></Link>
              </li>
            ))}
          </ul> : <p>Noch kein Design-System angelegt. <Link className="platform-text-link" href="/admin/collections/design-systems/create">Im CMS anlegen ↗</Link></p>}
        </div>
      </section>
    </main>
  )
}
