'use client'
import { useId, useState } from 'react'
import type { Page } from '../../payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { blockAnchor } from '../content-outline'
import './content-layout-form-layout.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block, { blockType: 'text' }>
type Child = { text?: string; children?: Child[] }
const flatten = (n: Child): string => n.text ?? (n.children ?? []).map(flatten).join('')
const lines = (b?: Text) => b?.body.root.children.map(n => flatten(n as Child)) ?? []

export default function FormLayout({ content }: { content: Page['content'] }) {
  const [error, setError] = useState(false)
  const id = useId()
  const blocks = (content ?? []).filter((b): b is Text => b.blockType === 'text')
  const find = (key: string) => blocks.find(b => b.blockName === key)
  const example = find('example')
  const [title, stateLabel, normalLabel, errorLabel, caption] = lines(example)
  const [label, value, help, errorText] = lines(find('field'))
  const [actionsLabel, primary, secondary] = lines(find('actions'))
  return <div className="form-layout-rework">
    {example && <section id={blockAnchor(example)} className="form-layout-example">
      <fieldset className="form-layout-switch"><legend>{stateLabel}</legend>
        <button type="button" aria-pressed={!error} aria-controls={`${id}-preview`} onClick={() => setError(false)}>{normalLabel}</button>
        <button type="button" aria-pressed={error} aria-controls={`${id}-preview`} onClick={() => setError(true)}>{errorLabel}</button>
      </fieldset>
      <figure>
        <div className="form-layout-stage" id={`${id}-preview`}>
          <div className="form-layout-form">
            <h2>{title}</h2>
            <div className="form-layout-field">
              <label htmlFor={`${id}-field`}>{label}</label>
              <input id={`${id}-field`} type="text" readOnly value={error ? '' : value ?? ''} aria-invalid={error || undefined} aria-describedby={`${id}-help${error ? ` ${id}-error` : ''}`} />
              <p id={`${id}-help`} className="form-layout-help">{help}</p>
              {error && <p id={`${id}-error`} className="form-layout-error">{errorText}</p>}
            </div>
            <div className="form-layout-actions" role="group" aria-label={actionsLabel}>
              <span className="form-layout-primary">{primary}</span><span className="form-layout-secondary">{secondary}</span>
            </div>
          </div>
        </div>
        <figcaption>{caption}</figcaption>
      </figure>
    </section>}
    {blocks.filter(b => !['example', 'field', 'actions'].includes(b.blockName ?? '')).map(b => b.blockName === 'sources'
      ? <details key={b.blockName} id={blockAnchor(b)}><summary>{lines(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }}/></details>
      : <section key={b.blockName} id={blockAnchor(b)}><RichText data={b.body}/></section>)}
  </div>
}
