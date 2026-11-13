import Link from 'next/link'
import type { ReactNode } from 'react'
import { invoicePath } from '../../../../../../docs/invoices/data'

export default function InvoiceLayout({ children }: { children: ReactNode }) {
  return (
    <main id="inhalt" className="shell invoice-example">
      <div className="invoice-banner"><strong>Kundenportal · Beispiel</strong><Link href="/systems/shadcn/patterns">Zur Pattern-Doku</Link></div>
      <div className="invoice-shell">
        <nav className="invoice-nav" aria-label="Kundenportal">
          <Link className="invoice-current" href={invoicePath} aria-current="true">Rechnungen</Link>
          <Link href="/systems/shadcn/suchen-filtern">Suchen und Filtern</Link>
          <Link href="/systems/shadcn/laden-leer-fehler">Laden, leer und Fehler</Link>
        </nav>
        <div className="invoice-main">{children}</div>
      </div>
    </main>
  )
}
