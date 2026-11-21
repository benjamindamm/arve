import { Suspense } from 'react'
import { InvoiceQuery } from '../../../../../../docs/invoices/query'

export default function InvoicePage() {
  return (
    <section aria-labelledby="rechnungen-title">
      <h1 id="rechnungen-title">Rechnungen</h1>
      <p>Finde eine Rechnung und lade sie als PDF herunter.</p>
      <Suspense fallback={<p role="status">Rechnungsliste wird geladen …</p>}><InvoiceQuery/></Suspense>
    </section>
  )
}
