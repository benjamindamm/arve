import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findInvoice, formatAmount, formatDate, invoicePath, statuses } from '../../../../../../../docs/invoices/data'

export default async function InvoiceDetail({ params, searchParams }: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ q?: string; status?: string }>
}) {
  const { id } = await params
  const invoice = findInvoice(id)
  if (!invoice) notFound()
  const { q, status } = await searchParams
  const filters = new URLSearchParams()
  if (typeof q === 'string') filters.set('q', q)
  if (typeof status === 'string') filters.set('status', status)
  const back = invoicePath + (filters.size ? '?' + filters.toString() : '')
  return (
    <article className="invoice-detail">
      <Link href={back}>← Zur Rechnungsliste</Link>
      <h1>Rechnung {invoice.id}</h1>
      <p>{invoice.title}</p>
      <dl className="invoice-facts">
        <div><dt>Rechnungsdatum</dt><dd>{formatDate(invoice.date)}</dd></div>
        <div><dt>Status</dt><dd><span className={'invoice-badge ' + invoice.status}>{statuses[invoice.status]}</span></dd></div>
        <div><dt>Betrag</dt><dd>{formatAmount(invoice.amount)}</dd></div>
      </dl>
      <a className="system-button" href={invoicePath + '/' + invoice.id + '/pdf'} download>Rechnung herunterladen <span aria-hidden="true">↓</span></a>
    </article>
  )
}
