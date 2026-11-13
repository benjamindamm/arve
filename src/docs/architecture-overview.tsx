import Link from 'next/link'

export function ArchitectureOverview() {
  return (
    <section className="catalog architecture-overview" aria-labelledby="aufbau">
      <h2 id="aufbau">So arbeitet das Design-System</h2>
      <figure className="architecture-figure">
        <div className="architecture-grid">
          <div className="card architecture-node"><h3>Payload CMS</h3><p>Jedes System hat einen eigenen Seitenbaum. Teams pflegen Grundlagen, Patterns und Einsatzregeln im Browser.</p></div>
          <div className="card architecture-node"><h3>UI Contracts · Git</h3><p>Versionierte Quellen für Schnittstellen, Tokens, Verhalten und Semantik. Eine Komponentenseite bindet eine feste Revision.</p></div>
        </div>
        <div className="architecture-connector" aria-hidden="true">↘ <span>↙</span></div>
        <div className="architecture-node architecture-center"><h3>Veröffentlichte Komponentenseite</h3><p>Redaktionelle Inhalte, gebundener Contract und Plattformimplementierungen.</p></div>
        <div className="architecture-connector" aria-hidden="true">↙ <span>↘</span></div>
        <div className="architecture-grid">
          <div className="card architecture-node"><h3>Portal</h3><p>Menschen lesen die Doku, sehen die Originalquellen und probieren Komponenten aus.</p></div>
          <Link href="/systems/shadcn/technische-anbindung" className="card architecture-node"><h3>Web-MCP ↗</h3><p>Agenten durchsuchen den Seitenbaum und lesen dieselben veröffentlichten Inhalte und technischen Referenzen.</p></Link>
        </div>
        <figcaption>Payload und Git liefern die Inhalte. Portal und Web-MCP lesen denselben veröffentlichten Stand.</figcaption>
      </figure>
      <h2>Zielplattformen</h2>
      <div className="architecture-grid architecture-platforms">
        <Link className="card" href="/systems/shadcn/components/button"><h3>Web ↗</h3><p>Mobiles und Desktop-Web. Der Spartan-Button ist als Preview dokumentiert.</p></Link>
        <div className="card"><h3>iOS</h3><p>Zielplattform. Eine native Implementierung ist noch offen.</p></div>
        <div className="card"><h3>Android</h3><p>Zielplattform. Eine native Implementierung ist noch offen.</p></div>
      </div>
    </section>
  )
}
