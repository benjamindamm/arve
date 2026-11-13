import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import './docs.css'

export const metadata: Metadata = {
  title: { default: 'Arve — Design-Systeme', template: '%s | Arve' },
  description: 'Arve verbindet Designwissen, UI Contracts und Komponentenbibliotheken. Eine gemeinsame Grundlage für Teams und KI-Agenten.',
}

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de-CH">
      <body>
        <a className="skip" href="#inhalt">Zum Inhalt</a>
        <header className="site-header">
          <div className="shell topbar">
            <Link href="/" className="brand arve-brand"><span aria-hidden="true" className="arve-mark" />Arve</Link>
            <nav aria-label="Hauptnavigation">
              <Link href="/#workflows">Zusammenarbeit</Link>
              <Link href="/#mcp">Mit KI arbeiten</Link>
              <Link href="/#systeme">Design-Systeme</Link>
            </nav>
            <a className="system-button outline" href="/admin">CMS öffnen <span aria-hidden="true">↗</span></a>
          </div>
        </header>
        {children}
        <footer className="shell footer"><span>Arve · Design-Systeme</span><a href="/admin">Payload CMS</a></footer>
      </body>
    </html>
  )
}
