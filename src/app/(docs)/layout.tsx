import { SiteAnchor } from '../../docs/site-anchor'
import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode, CSSProperties } from 'react'
import './docs.css'
import './handbook.css'
import '../../docs/native-select.css'
import { sitePath, staticPublication } from '../../docs/site-path'
import {SiteMenu} from '../../docs/site-menu'

export const metadata: Metadata = {
  title: { default: 'Arve — Design-Systeme', template: '%s | Arve' },
  description: 'Arve verbindet Designwissen, UI Contracts und Komponentenbibliotheken. Eine gemeinsame Grundlage für Teams und KI-Agenten.',
}

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de-CH">
      <body style={{ '--arve-mark-image': `url("${sitePath('/arve-mark.svg')}")` } as CSSProperties}>
        <SiteAnchor className="skip" href="#inhalt">Zum Inhalt</SiteAnchor>
        <header className="site-header">
          <div className="shell topbar">
            <Link href="/" className="brand arve-brand"><span aria-hidden="true" className="arve-mark" />Arve</Link>
            <SiteMenu cmsEnabled={!staticPublication}/>
          </div>
        </header>
        {children}
        <footer className="shell footer"><span>Arve · Design-Systeme</span>{staticPublication ? <span>Veröffentlichtes Handbuch</span> : <SiteAnchor href="/admin">Payload CMS</SiteAnchor>}</footer>
      </body>
    </html>
  )
}
