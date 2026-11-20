import type { Page } from '../../payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { blockAnchor } from '../content-outline'
import './card-grid-3-columns.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block, { blockType: 'text' }>
type Node = { text?: string; children?: Node[]; fields?: { url?: string } }
const flatten = (n: Node): string => n.text ?? (n.children ?? []).map(flatten).join('')
const lines = (b: Text) => b.body.root.children.map(n => flatten(n as Node))

export default function ThreeColumnCardGrid({ content }: { content: Page['content'] }) {
  const blocks = (content ?? []).filter((b): b is Text => b.blockType === 'text')
  const example = blocks.find(b => b.blockName === 'example')
  const cards = blocks.filter(b => b.blockName?.startsWith('card-'))
  return <div className="three-grid-rework">
    {example && <section id={blockAnchor(example)}>
      <h2>{lines(example)[0]}</h2>
      <figure className="three-grid-example">
        <div className="three-grid-canvas">
          <ul className="three-grid-cards">
            {cards.map(card => {
              const v = lines(card)
              const last = card.body.root.children.at(-1) as Node | undefined
              const link = last?.children?.find(n => n.fields?.url)
              return <li key={card.id ?? card.blockName} className="three-grid-card">
                <article id={blockAnchor(card)}>
                  <h3>{v[0]}</h3>
                  {v.slice(1, link ? -1 : undefined).map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                  {link?.fields?.url && <a href={link.fields.url}>{flatten(link)} <span aria-hidden="true">→</span></a>}
                </article>
              </li>
            })}
          </ul>
        </div>
        <figcaption>{lines(example).slice(1).join(' ')}</figcaption>
      </figure>
    </section>}
    {blocks.filter(b => b !== example && !cards.includes(b)).map(b => b.blockName === 'sources'
      ? <details key={b.blockName} id={blockAnchor(b)}><summary>{lines(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }}/></details>
      : <section key={b.id ?? b.blockName} id={blockAnchor(b)}><RichText data={b.body}/></section>)}
  </div>
}
