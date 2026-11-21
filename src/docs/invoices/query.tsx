'use client'
import { useSearchParams } from 'next/navigation'
import { statuses, type InvoiceStatus } from './data'
import { InvoiceList } from './list'
import Link from 'next/link'
import { invoicePath } from './data'

export function InvoiceQuery() {
  const params = useSearchParams()
  const q = params.get('q') ?? '', status = params.get('status') ?? ''
  const valid = Object.hasOwn(statuses, status) ? status as InvoiceStatus : ''
  return <InvoiceList key={JSON.stringify([q,valid])} initialQuery={q} initialStatus={valid}/>
}

export function InvoiceBackLink() {
  const params = useSearchParams(), filters = new URLSearchParams()
  for (const field of ['q','status']) { const value = params.get(field); if (value) filters.set(field,value) }
  return <Link href={invoicePath+(filters.size?'?'+filters.toString():'')}>← Zur Rechnungsliste</Link>
}
