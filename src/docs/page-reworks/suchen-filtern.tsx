'use client'

import {NativeSelect} from '../native-select'
import { SiteAnchor } from '../site-anchor'


import { useId, useRef, useState } from 'react'
import { RichText } from '../rich-text'
import type { Page } from '../../payload-types'
import { blockAnchor, blockTitle } from '../content-outline'
import { WorkflowStudy } from '../workflow-study'
import { MessageComparison } from '../message-comparison'
import './suchen-filtern.css'

type Block = NonNullable<Page['content']>[number]
function lines(b?: Block): string[] {
  return b?.blockType === 'text' ? b.body.root.children.map(n => Array.isArray(n.children) ? n.children.map((c: { text?: string }) => c.text ?? '').join('') : '') : []
}
export default function SearchFilter({ content }: { content: Page['content'] }) {
  const blocks = content ?? []
  const find = (key: string) => blocks.find(b => b.blockName === key)
  const e = lines(find('search-example'))
  const prefix = useId()
  const [q, setQ] = useState('')
  const [status, setStatus] = useState('')
  const [selected, setSelected] = useState<string | null>(null)
  const links = useRef<Record<string, HTMLAnchorElement | null>>({})
  const heading = useRef<HTMLHeadingElement>(null)
  const rows = lines(find('search-data')).slice(1).map(s => {
    const [id, name, state] = s.split(' · ')
    return { id, name, state }
  }).sort((a, b) => a.name.localeCompare(b.name, 'de-CH') || a.id.localeCompare(b.id, 'de-CH'))
  const results = rows.filter(r => (!status || r.state === status) && (r.id.toLocaleLowerCase('de-CH').includes(q.toLocaleLowerCase('de-CH')) || r.name.toLocaleLowerCase('de-CH').includes(q.toLocaleLowerCase('de-CH'))))
  const current = rows.find(r => r.id === selected)
  const region = (key: string) => {
    const b = find(key)
    return b?.blockType === 'text' ? <section id={blockAnchor(b)}><RichText data={b.body} /></section> : null
  }
  const originals = blocks.filter(b => !b.blockName?.startsWith('search-'))
  return <div className="sf-rework">
    <section id={blockAnchor(find('search-example')!)}>
      <h2>{e[0]}</h2><p>{e[1]}</p>
      <div className="sf-example">
        <div className="sf-title"><h3>{e[3]}</h3><SiteAnchor className="sf-create" href="/systems/shadcn/formulare-validierung">{e[11]} <span aria-hidden="true">↗</span></SiteAnchor></div>
        <div className="sf-controls">
          <label htmlFor={`${prefix}-q`}>{e[4]}<input type="search" id={`${prefix}-q`} value={q} aria-describedby={`${prefix}-hint`} onChange={event => { setQ(event.target.value); setSelected(null) }} /></label>
          <label htmlFor={`${prefix}-status`}>{e[5]}<NativeSelect id={`${prefix}-status`} value={status} aria-describedby={`${prefix}-hint`} onChange={event => { setStatus(event.target.value); setSelected(null) }}><option value="">{e[6]}</option><option>{e[7]}</option><option>{e[8]}</option></NativeSelect></label>
          <button type="button" className="sf-reset" onClick={() => { setQ(''); setStatus(''); setSelected(null) }}>{e[10]}</button>
        </div>
        <p className="sf-hint" id={`${prefix}-hint`}>{e[9]}</p>
        <h4 ref={heading} tabIndex={-1} className="sf-count" role="status" aria-live="polite">{results.length} {results.length === 1 ? e[15] : e[14]}</h4>
        <div className="sf-columns" aria-hidden="true"><span>{e[12]}</span><span>{e[13]}</span><span>{e[5]}</span></div>
        <ul className="sf-results" aria-label={e[3]}>{results.map(r => <li key={r.id}>
          <span className="sf-id">{r.id}</span><SiteAnchor href={`#${prefix}-detail`} ref={el => { links.current[r.id] = el }} onClick={event => { event.preventDefault(); setSelected(r.id) }}>{r.name}</SiteAnchor><span className="sf-status">{r.state}</span>
        </li>)}</ul>
        {!results.length && <div className="sf-empty"><strong>{e[16]}</strong><p>{e[17]}</p></div>}
        {current && <section className="sf-detail" id={`${prefix}-detail`} aria-label={e[19]}><p className="sf-hint">{e[19]}</p><h4>{current.name}</h4><p>{current.id} · {current.state}</p><p>{e[20]}</p><button type="button" onClick={() => { const id = selected; setSelected(null); requestAnimationFrame(() => { (id && links.current[id] || heading.current)?.focus() }) }}>{e[18]}</button></section>}
      </div>
      <p className="sf-boundary">{e[2]}</p>
    </section>
    {region('search-rules')}
    <section id={blockAnchor(find('search-states')!)}><h2>{lines(find('search-states'))[0]}</h2><div className="sf-states">{lines(find('search-states')).slice(1).map(s => { const [title, ...rest] = s.split(' · '); return <article key={title}><h3>{title}</h3><p>{rest.join(' · ')}</p></article> })}</div></section>
    {region('search-context')}{region('search-patterns')}
    <nav className="sf-next" aria-label={e[24]}><SiteAnchor href="/systems/shadcn/layout/page-types/detail">{e[21]}</SiteAnchor><SiteAnchor href="/systems/shadcn/formulare-validierung">{e[22]}</SiteAnchor><SiteAnchor href="/systems/shadcn/patterns">{e[23]}</SiteAnchor></nav>
    <div className="sf-contracts">{originals.map((b, i) => <details id={blockAnchor(b)} key={b.id ?? i}><summary>{blockTitle(b)}</summary>{b.blockType === 'text' ? <RichText data={b.body} /> : b.blockType === 'workflowStudy' ? <WorkflowStudy {...b} /> : b.blockType === 'messageComparison' ? <MessageComparison {...b} /> : null}</details>)}</div>
  </div>
}
