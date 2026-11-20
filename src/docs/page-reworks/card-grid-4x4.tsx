import type { Page } from '../../payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { blockAnchor } from '../content-outline'
import './card-grid-4x4.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block, { blockType: 'text' }>
type Child = { text?: string; children?: Child[] }
const flatten = (n: Child): string => n.text ?? (n.children ?? []).map(flatten).join('')
const lines = (b: Text) => b.body.root.children.map(n => flatten(n as Child))
const spans: Record<string, number> = {
  'card-focus': 2, 'card-projects': 1, 'card-due': 1,
  'card-notice': 4, 'card-template': 2, 'card-report': 2,
}

export default function FourColumnCardGrid({ content }: { content: Page['content'] }) {
  const blocks = (content ?? []).filter((b): b is Text => b.blockType === 'text')
  const example = blocks.find(b => b.blockName === 'example')
  const cards = blocks.filter(b => b.blockName && b.blockName in spans)
  return <div className="four-grid-rework">
    {example && <section id={blockAnchor(example)} className="four-grid-example">
      <h2>{lines(example)[0]}</h2>
      <figure>
        <div className="four-grid-canvas">
          <div className="four-grid-cards">
            {cards.map(card => {
              const v = lines(card)
              return <article key={card.blockName} className={`four-grid-card four-grid-span-${spans[card.blockName!]}`}>
                <header><p className="four-grid-label">{v[1]}</p><h3>{v[0]}</h3></header>
                <div className="four-grid-card-content"><p className="four-grid-value">{v[2]}</p>{v.slice(3).map((line, i) => <p key={i}>{line}</p>)}</div>
              </article>
            })}
          </div>
        </div>
        <figcaption>{lines(example).slice(1).join(' ')}</figcaption>
      </figure>
    </section>}
    {blocks.filter(b => b !== example && !(b.blockName && b.blockName in spans)).map(b => {
      if (b.blockName === 'sources') return <details key={b.blockName} id={blockAnchor(b)}><summary>{lines(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }}/></details>
      return <section key={b.id ?? b.blockName} id={blockAnchor(b)}><RichText data={b.body}/></section>
    })}
  </div>
}
