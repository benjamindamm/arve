'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { formatAmount, formatDate, invoicePath, invoices, statuses, type InvoiceStatus } from './data'

const states = { results: 'Rechnungen vorhanden', empty: 'Keine Rechnungen', error: 'Ladefehler' }
type Scenario = keyof typeof states

export function InvoiceList({ initialQuery, initialStatus }: { initialQuery: string; initialStatus: InvoiceStatus | '' }) {
  const [query, setQuery] = useState(initialQuery)
  const [status, setStatus] = useState(initialStatus)
  const [scenario, setScenario] = useState<Scenario>('results')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!loading) return
    const timer = window.setTimeout(() => setLoading(false), 1000)
    return () => window.clearTimeout(timer)
  }, [loading, scenario])

  const results = invoices.filter((invoice) =>
    (!status || invoice.status === status) &&
    (invoice.id + ' ' + invoice.title).toLowerCase().includes(query.trim().toLowerCase()),
  )
  const visibleCount = scenario === 'empty' ? 0 : results.length
  const clear = () => { setQuery(''); setStatus('') }

  return (
    <>
      <div className="invoice-filters">
        <label>Rechnung suchen<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Nummer oder Beschreibung" /></label>
        <label>Status<select value={status} onChange={(event) => setStatus(event.target.value as InvoiceStatus | '')}>
          <option value="">Alle</option>
          {Object.entries(statuses).map(([key, label]) => <option value={key} key={key}>{label}</option>)}
        </select></label>
        {(query || status) && <button type="button" className="system-button outline" onClick={clear}>Filter zurücksetzen</button>}
      </div>

      <div className="invoice-statusline" role="status">
        {loading ? 'Rechnungen werden geladen …' : scenario !== 'error' && (visibleCount === 1 ? '1 Rechnung' : visibleCount + ' Rechnungen')}
      </div>
      <div aria-busy={loading}>
        {loading ? <div className="invoice-state invoice-skeleton" aria-hidden="true"><span /><span /><span /></div>
          : scenario === 'error' ? <div className="invoice-state">
            <h2>Rechnungen konnten nicht geladen werden</h2>
            <p>Versuche es erneut. Deine Suche und Filter bleiben erhalten.</p>
            <button type="button" className="system-button" onClick={() => { setScenario('results'); setLoading(true) }}>Erneut versuchen</button>
          </div>
          : scenario === 'empty' ? <div className="invoice-state"><h2>Noch keine Rechnungen</h2><p>Sobald eine Rechnung vorliegt, erscheint sie hier.</p></div>
          : results.length === 0 ? <div className="invoice-state"><h2>Keine passenden Rechnungen</h2><p>Ändere den Suchbegriff oder setze die Filter zurück.</p><button type="button" className="system-button outline" onClick={clear}>Alle Rechnungen anzeigen</button></div>
          : <div className="invoice-table">
            <table>
              <caption className="visually-hidden">Rechnungsliste</caption>
              <thead><tr><th scope="col">Rechnung</th><th scope="col">Datum</th><th scope="col">Status</th><th scope="col">Betrag</th></tr></thead>
              <tbody>{results.map((invoice) => {
                const filters = new URLSearchParams()
                if (query) filters.set('q', query)
                if (status) filters.set('status', status)
                const suffix = filters.size ? '?' + filters.toString() : ''
                return <tr key={invoice.id}>
                  <th scope="row"><Link href={invoicePath + '/' + invoice.id + suffix}>{invoice.id}</Link><small>{invoice.title}</small></th>
                  <td>{formatDate(invoice.date)}</td>
                  <td><span className={'invoice-badge ' + invoice.status}>{statuses[invoice.status]}</span></td>
                  <td>{formatAmount(invoice.amount)}</td>
                </tr>
              })}</tbody>
            </table>
          </div>}
      </div>
      <div className="invoice-scenarios">
        <label>Beispielzustand<select value={scenario} onChange={(event) => { setLoading(false); setScenario(event.target.value as Scenario) }}>
          {Object.entries(states).map(([key, label]) => <option value={key} key={key}>{label}</option>)}
        </select></label>
        <button type="button" className="system-button outline" onClick={() => setLoading(true)} disabled={loading}>Laden simulieren</button>
      </div>
    </>
  )
}
