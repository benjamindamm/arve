import { LayoutWidthDiagram } from './layout-width-diagram'
import { LayoutRuleBlock } from './layout-rule-block'
import type { Page } from '../../payload-types'
import { RichText } from '../rich-text'
import { blockAnchor } from '../content-outline'
import './card-grid-4x4.css'

const ruleLabels: Record<string, string[]> = {"rules": ["Einsatz und Spannen", "Container ab 52 rem", "Container unter 52 rem", "Reihenfolge und Höhe"]}

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
      <LayoutWidthDiagram note="CSS des Beispiels · Breite des Inhaltscontainers, keine Fensteransichten. Ziffern: belegte Grundspalten." ranges={[{ label: "Unter 32 rem · 1 Spalte", columns: 1, spans: [1,1,1,1,1,1] }, { label: "32 bis unter 52 rem · 2 Spalten", columns: 2, spans: [2,1,1,2,2,2] }, { label: "Ab 52 rem · 4 Spalten", columns: 4, spans: [2,1,1,4,2,2] }]} />
    </section>}
    {blocks.filter(b => b !== example && !(b.blockName && b.blockName in spans)).map(b => {
      if (b.blockName === 'rules') return <LayoutRuleBlock key={b.blockName} block={b} labels={ruleLabels[b.blockName ?? ""]} />
      if (b.blockName === 'sources') return <details key={b.blockName} id={blockAnchor(b)}><summary>{lines(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }}/></details>
      return <section key={b.id ?? b.blockName} id={blockAnchor(b)}><RichText data={b.body}/></section>
    })}
  </div>
}
