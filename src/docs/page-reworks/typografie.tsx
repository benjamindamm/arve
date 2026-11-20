'use client'

import { useState } from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Page } from '../../payload-types'
import './typografie.css'

type Block = NonNullable<Page['content']>[number]
type TextBlock = Extract<Block, { blockType: 'text' }>
type TextNode = { text?: string; children?: TextNode[] }
const text = (node: TextNode): string => node.text ?? node.children?.map(text).join('') ?? ''

export default function Typografie({ content }: { content: Page['content'] }) {
  const [long, setLong] = useState(false)
  const [spaced, setSpaced] = useState(false)
  const [large, setLarge] = useState(false)
  const [system, setSystem] = useState(false)
  const sections = new Map((content ?? []).filter((b): b is TextBlock => b.blockType === 'text' && !!b.blockName?.startsWith('type-')).map(b => [b.blockName, b.body.root.children.map(n => text(n as TextNode))]))
  const example = sections.get('type-example') ?? []
  const probes = sections.get('type-probes') ?? []
  const roles = sections.get('type-roles') ?? []
  const rules = sections.get('type-rules') ?? []
  const numbers = sections.get('type-numbers') ?? []
  const status = sections.get('type-status') ?? []
  const details = sections.get('type-details') ?? []
  const original = (content ?? []).filter(b => !b.blockName?.startsWith('type-'))
  return <div className="type-page-rework">
    <p className="type-example-label">{example[0]}</p>
    <div className="type-specimen" data-spacing={spaced} data-large={large} data-system={system}>
      <h2>{long ? example[7] : example[1]}</h2>
      <p>{long ? example[8] : example[2]}</p>
      {long && <p>{example[9]}</p>}
      <h3>{example[3]}</h3>
      <dl><dt>{example[4]}</dt><dd>{example[5]}</dd></dl>
      <p className="type-specimen-help">{example[6]}</p>
    </div>
    <fieldset className="type-probes">
      <legend>{probes[0]}</legend>
      {([
        [long, setLong, probes[1]], [spaced, setSpaced, probes[2]],
        [large, setLarge, probes[3]], [system, setSystem, probes[4]],
      ] as const).map(([checked, setChecked, label], index) => <label key={index}><input type="checkbox" checked={checked} onChange={event => setChecked(event.target.checked)} />{label}</label>)}
      <p>{probes[5]}</p>
      {spaced && <p>{probes[6]}</p>}
    </fieldset>
    <section><h2>{roles[0]}</h2><dl className="type-role-list">{[1, 3, 5, 7].map(i => <div key={i}><dt>{roles[i]}</dt><dd>{roles[i + 1]}</dd></div>)}</dl></section>
    <section><h2>{rules[0]}</h2><ul className="type-rule-list">{rules.slice(1).map(rule => <li key={rule}>{rule}</li>)}</ul></section>
    <section><h2>{numbers[0]}</h2><dl className="type-amounts">{[1, 3, 5].map(i => <div key={i}><dt>{numbers[i]}</dt><dd>{numbers[i + 1]}</dd></div>)}</dl><p>{numbers[7]}</p></section>
    <p className="type-status">{status[1]}</p>
    <details className="type-reference"><summary>{details[0]}</summary>
      <p>{details[1]}</p><h2>{status[0]}</h2>{status.slice(2).map(p => <p key={p}>{p}</p>)}
      {original.map((block, i) => block.blockType === 'text' ? <RichText key={block.id ?? i} data={block.body} className="rich-text" /> : block.blockType === 'study' ? <section key={block.id ?? i}><h2>{block.title}</h2><p>{block.explanation}</p><p>{block.source}</p></section> : null)}
    </details>
  </div>
}
