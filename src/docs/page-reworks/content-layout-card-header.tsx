'use client'
import { useId, useState } from 'react'
import type { Page } from '../../payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { blockAnchor } from '../content-outline'
import './content-layout-card-header.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block, { blockType: 'text' }>
type Child = { text?: string; children?: Child[] }
const flatten = (n: Child): string => n.text ?? (n.children ?? []).map(flatten).join('')
const lines = (b?: Text) => b?.body.root.children.map(n => flatten(n as Child)) ?? []

export default function CardHeader({ content }: { content: Page['content'] }) {
  const [withAction, setWithAction] = useState(true)
  const id = useId()
  const blocks = (content ?? []).filter((b): b is Text => b.blockType === 'text')
  const find = (key: string) => blocks.find(b => b.blockName === key)
  const example = find('example')
  const [exampleTitle, variantLabel, withLabel, withoutLabel, caption] = lines(example)
  const [title, description, action, contentTitle, firstProject, firstStatus, secondProject, secondStatus] = lines(find('card'))
  return <div className="card-header-rework">
    {example && <section id={blockAnchor(example)} className="card-header-example">
      <h2>{exampleTitle}</h2>
      <fieldset className="card-header-switch"><legend>{variantLabel}</legend>
        <button type="button" aria-pressed={withAction} aria-controls={`${id}-preview`} onClick={() => setWithAction(true)}>{withLabel}</button>
        <button type="button" aria-pressed={!withAction} aria-controls={`${id}-preview`} onClick={() => setWithAction(false)}>{withoutLabel}</button>
      </fieldset>
      <figure>
        <div className="card-header-stage" id={`${id}-preview`}>
          <div className="card-header-card">
            <header className="card-header-head">
              <div className="card-header-text"><h3>{title}</h3><p>{description}</p></div>
              {withAction && <a className="card-header-action" href={`#${id}-content`}>{action}</a>}
            </header>
            <section className="card-header-content" id={`${id}-content`} tabIndex={-1} aria-labelledby={`${id}-content-title`}>
              <h4 id={`${id}-content-title`}>{contentTitle}</h4>
              <ul><li><span>{firstProject}</span><span>{firstStatus}</span></li><li><span>{secondProject}</span><span>{secondStatus}</span></li></ul>
            </section>
          </div>
        </div>
        <figcaption>{caption}</figcaption>
      </figure>
    </section>}
    {blocks.filter(b => !['example', 'card'].includes(b.blockName ?? '')).map(b => b.blockName === 'sources'
      ? <details key={b.blockName} id={blockAnchor(b)}><summary>{lines(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }}/></details>
      : <section key={b.blockName} id={blockAnchor(b)}><RichText data={b.body}/></section>)}
  </div>
}
