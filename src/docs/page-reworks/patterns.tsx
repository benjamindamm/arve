'use client'

import { useId, useState } from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
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

export default function Patterns({ content }: { content: Page['content'] }) {
  const prefix = useId()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [tag, setTag] = useState('')
  const [selected, setSelected] = useState('UX-001')
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
  const region = (name: string, collapsible = false) => {
    const block = blocks.find((b): b is Text => b.blockType === 'text' && b.blockName === name)
    if (!block) return null
    if (!collapsible) return <section id={blockAnchor(block)}><RichText data={block.body}/></section>
    const heading = block.body.root.children[0]
    return <details id={blockAnchor(block)}><summary><RichText data={{ ...block.body, root: { ...block.body.root, children: [heading] } }}/></summary><RichText data={{ ...block.body, root: { ...block.body.root, children: block.body.root.children.slice(1) } }}/></details>
  }
  return <div className="patterns-rework">
    {region('catalog-intro')}
    <section aria-label="Kandidaten finden" className="pattern-browser">
      <div className="pattern-controls">
        <label htmlFor={`${prefix}-search`}>Pattern suchen<input id={`${prefix}-search`} type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Aufgabe, Titel, ID oder Tag"/></label>
        <label htmlFor={`${prefix}-category`}>Kategorie<select id={`${prefix}-category`} value={category} onChange={e => setCategory(e.target.value)}><option value="">Alle Kategorien</option>{categories.map(v => <option key={v}>{v}</option>)}</select></label>
        <label htmlFor={`${prefix}-tag`}>Tag<select id={`${prefix}-tag`} value={tag} onChange={e => setTag(e.target.value)}><option value="">Alle Tags</option>{tags.map(v => <option key={v}>{v}</option>)}</select></label>
      </div>
      <div className="pattern-result-line"><p role="status">{found.length} von {patterns.length} Kandidaten</p>{(query || category || tag) && <button type="button" onClick={() => { setQuery(''); setCategory(''); setTag('') }}>Filter zurücksetzen</button>}</div>
      <div className="pattern-workspace">
        <div className="pattern-results"><ul aria-label="Patternkandidaten">{found.map(b => <li key={b.blockName} id={blockAnchor(b)}><button type="button" aria-pressed={current?.blockName === b.blockName} aria-controls={`${prefix}-detail`} onClick={() => setSelected(b.blockName ?? '')}>
          <span className="pattern-row-meta"><span>{b.blockName}</span><span>Kandidat</span></span><strong>{b.title}</strong><span className="pattern-task">{b.summary}</span><span className="pattern-taxonomy">{b.caption}</span>
        </button></li>)}</ul>{!found.length && <p>Keine passenden Kandidaten. Suchtext oder Filter ändern.</p>}</div>
        <section id={`${prefix}-detail`} className="pattern-detail" aria-label="Ausgewählter Ablauf">
          {current ? <><p className="pattern-detail-meta">{current.blockName} · Kandidat</p><h2>{current.title}</h2><p>{current.summary}</p><p className="pattern-taxonomy">{current.caption}</p><h3>Ablaufvorschau</h3><ol>{current.steps.map(s => <li key={s.key}><strong>{s.title}</strong><p>{s.description}</p></li>)}</ol><details key={current.blockName}><summary>Beobachtungsstand und Grenzen</summary><p>{current.source}</p></details></> : <p>Wähle andere Kriterien, um einen Ablauf anzusehen.</p>}
        </section>
      </div>
    </section>
    {region('worked-topics')}
    {region('registry-notes', true)}
    {region('catalog-sources', true)}
  </div>
}
