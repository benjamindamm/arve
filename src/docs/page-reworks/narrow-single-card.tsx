'use client'

import { LayoutRuleBlock } from './layout-rule-block'

import { useState } from 'react'
import { RichText } from '../rich-text'
import { HandbookPreview } from '../handbook-preview'
import type { Page } from '../../payload-types'
import { blockAnchor } from '../content-outline'
import './narrow-single-card.css'

const ruleLabels: Record<string, string[]> = {"rules": ["Cardbreite", "Eine Aufgabe", "Lange Inhalte"]}

type Block = NonNullable<Page['content']>[number]
function strings(block?: Block) {
  return block?.blockType === 'text' ? block.body.root.children.map(n => Array.isArray(n.children) ? n.children.map((c: { text?: string }) => c.text ?? '').join('') : '') : []
}
function Example({ e, narrow }: { e: string[]; narrow: boolean }) {
  const initial = e[narrow ? 16 : 5] ?? ''
  const [value, setValue] = useState(initial)
  const [notice, setNotice] = useState('')
  const id = narrow ? 'nsc-small' : 'nsc-large'
  return <figure className={`nsc-example${narrow ? ' nsc-narrow' : ''}`}>
    <figcaption>{e[narrow ? 12 : 1]}</figcaption>
    <div className="nsc-stage"><form className="nsc-card" aria-labelledby={`${id}-title`} onSubmit={event => { event.preventDefault(); setNotice(e[10]) }} onReset={() => { setValue(initial); setNotice(e[11]) }}>
      <h3 id={`${id}-title`}>{e[narrow ? 13 : 2]}</h3>
      <p>{e[narrow ? 14 : 3]}</p>
      <div className="nsc-field"><label htmlFor={`${id}-name`}>{e[narrow ? 15 : 4]}</label>
        <input id={`${id}-name`} value={value} required onChange={event => { setValue(event.target.value); setNotice('') }} aria-describedby={`${id}-help`} />
        <p id={`${id}-help`} className="nsc-help">{e[6]}</p>
      </div>
      <div className="nsc-actions"><button type="reset">{e[narrow ? 17 : 7]}</button><button type="submit" className="nsc-primary">{e[narrow ? 18 : 8]}</button></div>
      <p className="nsc-help">{e[9]}</p>
      <p className="nsc-notice" role="status">{notice}</p>
    </form></div>
  </figure>
}
export default function NarrowSingleCard({ content }: { content: Page['content'] }) {
  const find = (key: string) => (content ?? []).find(b => b.blockName === key)
  const example = find('example'), e = strings(example)
  const section = (key: string, disclosure = false) => {
    const b = find(key)
    if (b?.blockType !== 'text') return null
    if (["rules"].includes(key)) return <LayoutRuleBlock block={b} labels={ruleLabels[b.blockName ?? ""]} />
    return disclosure ? <details id={blockAnchor(b)}><summary>{strings(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }} /></details> : <section id={blockAnchor(b)}><RichText data={b.body} /></section>
  }
  return <div className="narrow-single-card-rework">
    {example && <section id={blockAnchor(example)}><h2>{e[0]}</h2><HandbookPreview interactive narrowLabel="Schmal · Langtext" wide={<Example e={e} narrow={false} />} narrow={<Example e={e} narrow />} /><p className="nsc-caption">{e[19]}</p></section>}
    {section('rules')}{section('usage')}{section('sources', true)}
  </div>
}
