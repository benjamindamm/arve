import { SiteAnchor } from '../../../../../../../docs/site-anchor'
import Link from 'next/link'
import { Suspense } from 'react'
import { InvoiceBackLink } from '../../../../../../../docs/invoices/query'
import { staticPublication } from '../../../../../../../docs/site-path'
import { notFound } from 'next/navigation'
import { findInvoice, formatAmount, formatDate, invoicePath, statuses } from '../../../../../../../docs/invoices/data'

export default async function InvoiceDetail({ params }: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const invoice = findInvoice(id)
  if (!invoice) notFound()
  return (
    <article className="invoice-detail">
      <Suspense fallback={<Link href={invoicePath}>← Zur Rechnungsliste</Link>}><InvoiceBackLink/></Suspense>
      <h1>Rechnung {invoice.id}</h1>
      <p>{invoice.title}</p>
      <dl className="invoice-facts">
        <div><dt>Rechnungsdatum</dt><dd>{formatDate(invoice.date)}</dd></div>
        <div><dt>Status</dt><dd><span className={'invoice-badge ' + invoice.status}>{statuses[invoice.status]}</span></dd></div>
        <div><dt>Betrag</dt><dd>{formatAmount(invoice.amount)}</dd></div>
      </dl>
      <SiteAnchor className="system-button" href={staticPublication ? '/examples/invoices/' + invoice.id + '.pdf' : invoicePath + '/' + invoice.id + '/pdf'} download>Rechnung herunterladen <span aria-hidden="true">↓</span></SiteAnchor>
    </article>
  )
}
