import { InvoiceList } from '../../../../../../docs/invoices/list'
import { statuses, type InvoiceStatus } from '../../../../../../docs/invoices/data'

export default async function InvoicePage({ searchParams }: { searchParams: Promise<{ q?: string; status?: string }> }) {
  const { q, status } = await searchParams
  const validStatus = typeof status === 'string' && Object.hasOwn(statuses, status) ? status as InvoiceStatus : ''
  return (
    <section aria-labelledby="rechnungen-title">
      <h1 id="rechnungen-title">Rechnungen</h1>
      <p>Finde eine Rechnung und lade sie als PDF herunter.</p>
      <InvoiceList key={JSON.stringify([q, validStatus])} initialQuery={typeof q === 'string' ? q : ''} initialStatus={validStatus} />
    </section>
  )
}
