'use client'
import { useId, useState } from 'react'
import Link from 'next/link'
import type { Entry } from './published-documentation'
import './reference-catalogue.css'
export function ComponentCatalogue({ entries }: { entries: Entry[] }) {
  const id=useId(), [query,setQuery]=useState('')
  const normal=(s:string)=>s.toLocaleLowerCase('de').normalize('NFD').replace(/\p{M}/gu,'')
  const terms=normal(query).trim().split(/\s+/).filter(Boolean)
  const found=entries.filter(entry=>terms.every(term=>normal(entry.title+' '+entry.slug+' '+(entry.summary??'')).includes(term))).sort((a,b)=>a.title.localeCompare(b.title,'de'))
  return <section className="component-catalogue" aria-label="Komponentenkatalog">
    <p>{entries.length} Komponentenfamilien mit Designvorschauen und vollständigen Quellencontracts. Die vorhandenen Spartan-Beispiele ergänzen die React-Referenz für Angular.</p>
    <p><Link href="/systems/shadcn/frameworks">Frameworks und Plattformen ansehen →</Link></p>
    <label htmlFor={id}>Komponente suchen</label><input id={id} type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Name oder Aufgabe" />
    <div className="reference-result-line"><p role="status">{found.length} von {entries.length} Komponenten</p>{query&&<button type="button" onClick={()=>setQuery('')}>Suche zurücksetzen</button>}</div>
    {!found.length&&<p>Keine passende Komponente. Ändere den Suchtext.</p>}
    <ul>{found.map(entry=><li key={entry.path}><Link href={entry.path}><strong>{entry.title}<span aria-hidden="true"> →</span></strong><span>{entry.summary}</span>{['button','input','checkbox','switch'].includes(entry.slug)&&<small>Mit Angular-Beispiel</small>}</Link></li>)}</ul>
  </section>
}
