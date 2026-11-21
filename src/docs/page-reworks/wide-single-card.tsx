import { LayoutRuleBlock } from './layout-rule-block'
import type { Page } from '../../payload-types'
import { RichText } from '../rich-text'
import { blockAnchor } from '../content-outline'
import './wide-single-card.css'

const ruleLabels: Record<string, string[]> = {"rules": ["Einsatz", "Card, Text und Feld", "Schmale Fläche", "Breite Tabellen", "Narrow vergleichen"]}

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block, { blockType: 'text' }>
type Node = { text?: string; children?: Node[] }
const flatten = (n: Node): string => n.text ?? (n.children ?? []).map(flatten).join('')
const lines = (b: Text) => b.body.root.children.map(n => flatten(n as Node))

export default function WideSingleCard({ content }: { content: Page['content'] }) {
  const get = (name: string) => (content ?? []).find((b): b is Text => b.blockName === name && b.blockType === 'text')
  const example = get('example')
  const v = example ? lines(example) : []
  const rules = get('rules')
  const css = get('css')
  const sources = get('sources')
  return <div className="wide-single-card-rework">
    {example && <section id={blockAnchor(example)}>
      <h2>{v[0]}</h2>
      <div className="wsc-example">
        <article className="wsc-card" aria-labelledby="wsc-card-title">
          <header className="wsc-header">
            <p className="wsc-eyebrow">{v[1]}</p>
            <h3 id="wsc-card-title">{v[2]}</h3>
            <p className="wsc-reading">{v[3]}</p>
          </header>
          <dl className="wsc-data">{[4, 6, 8].map(i => <div key={i}><dt>{v[i]}</dt><dd>{v[i + 1]}</dd></div>)}</dl>
          <section className="wsc-section" aria-labelledby="wsc-summary-title">
            <h4 id="wsc-summary-title">{v[10]}</h4>
            <p className="wsc-reading">{v[11]}</p>
          </section>
          <div className="wsc-section">
            <label htmlFor="wsc-note">{v[12]}</label>
            <textarea id="wsc-note" className="wsc-note" rows={3} defaultValue={v[13]} aria-describedby="wsc-note-help"/>
            <p id="wsc-note-help" className="wsc-help wsc-reading">{v[14]}</p>
          </div>
        </article>
      </div>
      <p className="wsc-caption">{v[15]}</p>
    </section>}
    {rules && <LayoutRuleBlock block={rules} labels={ruleLabels.rules} />}
    {css && <details id={blockAnchor(css)}>
      <summary>{lines(css)[0]}</summary><p>{lines(css)[1]}</p><pre><code>{lines(css)[2]}</code></pre>
    </details>}
    {sources && <details id={blockAnchor(sources)}><summary>{lines(sources)[0]}</summary>
      <RichText data={{ ...sources.body, root: { ...sources.body.root, children: sources.body.root.children.slice(1) } }}/>
    </details>}
  </div>
}
