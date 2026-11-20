'use client'
import { useId, useState } from 'react'
import type { Page } from '../../payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { blockAnchor } from '../content-outline'
import './icons.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block, { blockType: 'text' }>
function strings(block: Text) {
  return block.body.root.children.map(n => Array.isArray(n.children) ? n.children.map((c: { text?: string }) => c.text ?? '').join('') : '')
}
function Icon({ kind }: { kind: 'arrow' | 'info' | 'check' | 'warning' | 'spark' }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {kind === 'arrow' && <path d="M4 12h16m-6-6 6 6-6 6"/>}
    {kind === 'info' && <><circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/></>}
    {kind === 'check' && <><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></>}
    {kind === 'warning' && <><path d="m12 3 10 18H2L12 3Zm0 6v5m0 3v.1"/></>}
    {kind === 'spark' && <path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z"/>}
  </svg>
}
export default function IconsPage({ content }: { content: Page['content'] }) {
  const [open, setOpen] = useState(false)
  const hintId = useId()
  const blocks = content ?? []
  const find = (key: string) => blocks.find(b => b.blockName === key)
  const read = (key: string) => { const b = find(key); return b?.blockType === 'text' ? strings(b) : [] }
  const examples = read('examples'), label = read('label'), only = read('only'), status = read('status'), decoration = read('decoration')
  const original = find('original')
  const section = (key: string, details = false) => {
    const b = find(key)
    if (b?.blockType !== 'text') return null
    return details ? <details id={blockAnchor(b)}><summary>{strings(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }}/></details>
      : <section id={blockAnchor(b)}><RichText data={b.body}/></section>
  }
  return <div className="icons-rework">
    <section id={find('examples') ? blockAnchor(find('examples')!) : undefined}>
      <h2>{examples[0]}</h2>
      <div className="ic-examples">
        <article><h3>{label[0]}</h3><div className="ic-specimen"><a className="ic-text-link" href="/systems/shadcn/content-design">{label[1]}<Icon kind="arrow"/></a></div><p>{label[2]}</p></article>
        <article><h3>{only[0]}</h3><div className="ic-specimen"><button type="button" aria-label={only[open ? 2 : 1]} aria-expanded={open} aria-controls={hintId} onClick={() => setOpen(!open)}><Icon kind="info"/></button></div><p>{only[3]}</p><p id={hintId} className="ic-hint" hidden={!open}>{only[4]}</p></article>
        <article><h3>{status[0]}</h3><div className="ic-status-list"><div><Icon kind="check"/><strong>{status[1]}</strong></div><div><Icon kind="warning"/><span><strong>{status[2]}</strong><br/>{status[3]}</span></div></div><p>{status[4]}</p></article>
        <article><h3>{decoration[0]}</h3><div className="ic-specimen ic-decoration"><Icon kind="spark"/><strong>{decoration[1]}</strong></div><p>{decoration[2]}</p></article>
      </div><p className="ic-note">{examples[1]}</p>
    </section>
    {section('rules')}{section('review')}
    {original?.blockType === 'study' && <details id={blockAnchor(original)}><summary>{original.title}</summary><p>{original.explanation}</p><p>{original.source}</p></details>}
    {section('sources', true)}{section('links')}
  </div>
}
