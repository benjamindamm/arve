'use client'

import Link from 'next/link'
import { useId, useRef, useState, type ReactNode } from 'react'

type Chapter = { path: string; title: string; context: string; summary?: string }
export function HandbookNavigation({ chapters, current, children }: { chapters: Chapter[]; current?: string; children: ReactNode }) {
  const titleId = useId()
  const dialog = useRef<HTMLDialogElement>(null)
  const [query, setQuery] = useState('')
  const terms = query.trim().toLocaleLowerCase('de').split(/\s+/).filter(Boolean)
  const results = chapters.filter(chapter => terms.every(term => `${chapter.title} ${chapter.context} ${chapter.summary ?? ''}`.toLocaleLowerCase('de').includes(term)))
  return <div className="handbook-chapter-access">
    <button className="handbook-chapter-button" onClick={() => { setQuery(''); dialog.current?.showModal() }}>Kapitel öffnen <span aria-hidden="true">⌕</span></button>
    <dialog ref={dialog} aria-labelledby={titleId} className="handbook-chapter-dialog" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close() }}>
      <div className="handbook-dialog-head"><h2 id={titleId}>Kapitel im Handbuch</h2><button onClick={() => dialog.current?.close()} aria-label="Kapitelnavigation schliessen">Schliessen ×</button></div>
      <label className="handbook-search">Kapitel finden<input autoFocus type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Titel oder Thema eingeben" /></label>
      {terms.length ? <><p className="handbook-result-count" role="status">{results.length} Kapitel gefunden</p><nav aria-label="Gefundene Kapitel"><ul className="handbook-search-results">{results.map(chapter => <li key={chapter.path}><Link href={chapter.path} aria-current={chapter.path === current ? 'page' : undefined} onClick={() => dialog.current?.close()}><span>{chapter.context}</span><strong>{chapter.title}</strong>{chapter.summary && <small>{chapter.summary}</small>}</Link></li>)}</ul></nav></> : <nav className="docs-nav" aria-label="Kapitel">{children}</nav>}
      <button className="handbook-return" onClick={() => dialog.current?.close()}>Zurück zum Inhalt</button>
    </dialog>
  </div>
}
