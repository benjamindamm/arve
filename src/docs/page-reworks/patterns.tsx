'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { RichText } from '../rich-text'
import type { Page } from '../../payload-types'
import { blockAnchor } from '../content-outline'
import './patterns.css'

type Block = NonNullable<Page['content']>[number]
type Workflow = Extract<Block, { blockType: 'workflowStudy' }>
type Text = Extract<Block, { blockType: 'text' }>
const metadata = (block: Workflow) => {
  const [category = '', tags = ''] = block.caption.split(' · Tags: ')
  return { category: category.replace(/^Kategorie: /, ''), tags: tags === 'ohne Tags' ? [] : tags.split(', ').filter(Boolean) }
}

function PatternDetail({ pattern, titleId }: { pattern: Workflow; titleId: string }) {
  const meta = metadata(pattern)
  return <>
    <p className="pattern-detail-meta">{pattern.blockName} · Kandidat · {meta.category}</p>
    <h2 id={titleId}>{pattern.title}</h2><p>{pattern.summary}</p>
    {meta.tags.length > 0 && <p className="pattern-taxonomy">Tags: {meta.tags.join(', ')}</p>}
    <h3>Ablaufvorschau</h3>
    <ol>{pattern.steps.map(s => <li key={s.key}><strong>{s.title}</strong><p>{s.description}</p></li>)}</ol>
    <details key={pattern.blockName}><summary>Beobachtungsstand und Grenzen</summary><p>{pattern.source}</p></details>
  </>
}

export default function Patterns({ content, summary }: { content: Page['content']; summary?: Page['summary'] }) {
  const prefix = useId()
  const dialog = useRef<HTMLDialogElement>(null)
  const search = useRef<HTMLInputElement>(null)
  const [narrow, setNarrow] = useState(false)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [tag, setTag] = useState('')
  const [selected, setSelected] = useState('UX-001')
  useEffect(() => {
    const media = window.matchMedia('(max-width: 720px)')
    const update = () => {
      setNarrow(media.matches)
      if (!media.matches) dialog.current?.close()
    }
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  const blocks = content ?? []
  const patterns = blocks.filter((b): b is Workflow => b.blockType === 'workflowStudy')
  const categories = [...new Set(patterns.map(b => metadata(b).category))].sort()
  const tags = [...new Set(patterns.flatMap(b => metadata(b).tags))].sort()
  const found = patterns.filter(b => {
    const meta = metadata(b)
    return (!category || meta.category === category) && (!tag || meta.tags.includes(tag)) &&
      `${b.blockName} ${b.title} ${b.summary} ${b.caption}`.toLocaleLowerCase('de').includes(query.trim().toLocaleLowerCase('de'))
  })
  const current = found.find(b => b.blockName === selected) ?? found[0]
  const currentId = current?.blockName ?? ''
  useEffect(() => {
    if (selected !== currentId) setSelected(currentId)
  }, [selected, currentId])
  const region = (name: string, collapsible = false, label?: string) => {
    const block = blocks.find((b): b is Text => b.blockType === 'text' && b.blockName === name)
    if (!block) return null
    if (!collapsible) return <section id={blockAnchor(block)}><RichText data={block.body}/></section>
    return <details id={blockAnchor(block)}><summary>{label ?? <RichText data={{ ...block.body, root: { ...block.body.root, children: block.body.root.children.slice(0, 1) } }}/>}</summary><RichText data={{ ...block.body, root: { ...block.body.root, children: block.body.root.children.slice(1) } }}/></details>
  }
  const reset = () => { setQuery(''); setCategory(''); setTag(''); search.current?.focus() }
  return <div className="patterns-rework">
    <p className="pattern-purpose">Finde einen Ablauf für deine Aufgabe.</p>
    <p className="pattern-limit">Beobachtete Kandidaten · keine freigegebenen Regeln oder lokal bedienbaren Beispiele.</p>
    <section aria-label="Kandidaten finden" className="pattern-browser">
      <div className="pattern-controls">
        <label htmlFor={`${prefix}-search`}>Pattern suchen<input id={`${prefix}-search`} ref={search} type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Aufgabe, Titel, ID oder Tag"/></label>
        <label htmlFor={`${prefix}-category`}>Kategorie<select id={`${prefix}-category`} value={category} onChange={e => setCategory(e.target.value)}><option value="">Alle Kategorien</option>{categories.map(v => <option key={v}>{v}</option>)}</select></label>
        <label htmlFor={`${prefix}-tag`}>Tag<select id={`${prefix}-tag`} value={tag} onChange={e => setTag(e.target.value)}><option value="">Alle Tags</option>{tags.map(v => <option key={v}>{v}</option>)}</select></label>
      </div>
      <div className="pattern-result-line"><p role="status" aria-atomic="true">{found.length} von {patterns.length} Kandidaten</p>{(query || category || tag) && <button type="button" onClick={reset}>Filter zurücksetzen</button>}</div>
      <div className="pattern-workspace">
        <div className="pattern-results"><ul aria-label="Patternkandidaten">{found.map(b => <li key={b.blockName} id={blockAnchor(b)}><button type="button" aria-pressed={current?.blockName === b.blockName} aria-haspopup={narrow ? 'dialog' : undefined} aria-controls={narrow ? `${prefix}-dialog` : `${prefix}-detail`} onClick={() => { setSelected(b.blockName ?? ''); if (narrow) dialog.current?.showModal() }}>
          <strong>{b.title}<span className="pattern-row-arrow" aria-hidden="true">{current?.blockName === b.blockName ? '●' : '→'}</span></strong><span className="pattern-task">{b.summary}</span>
        </button></li>)}</ul>{!found.length && <div className="pattern-empty"><strong>Keine passenden Kandidaten</strong><p>Ändere den Suchtext oder setze die Filter zurück.</p><button type="button" onClick={reset}>Alle Kandidaten zeigen</button></div>}</div>
        <section id={`${prefix}-detail`} className="pattern-detail pattern-desktop-detail" aria-label="Ausgewählter Ablauf">
          {current ? <PatternDetail pattern={current} titleId={`${prefix}-title`}/> : <p>Für diese Kriterien ist kein Ablauf ausgewählt.</p>}
        </section>
      </div>
    </section>
    <dialog ref={dialog} id={`${prefix}-dialog`} className="pattern-dialog" aria-labelledby={`${prefix}-dialog-title`}>
      <div className="pattern-dialog-bar"><button type="button" onClick={() => dialog.current?.close()} autoFocus>← Zurück zur Auswahl</button></div>
      <div className="pattern-detail">{current && <PatternDetail pattern={current} titleId={`${prefix}-dialog-title`}/>}</div>
    </dialog>
    <details><summary>Über diesen Katalog</summary>{summary && <p>{summary}</p>}{region('catalog-intro')}</details>
    {region('worked-topics')}
    {region('registry-notes', true)}
    {region('catalog-sources', true)}
  </div>
}
