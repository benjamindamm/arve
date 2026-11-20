import type { Page } from '../../payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { blockAnchor } from '../content-outline'
import './content-layout-label-value.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block, { blockType: 'text' }>
type Child = { text?: string; children?: Child[] }
const flatten = (n: Child): string => n.text ?? (n.children ?? []).map(flatten).join('')
const lines = (b: Text) => b.body.root.children.map(n => flatten(n as Child))

export default function LabelValue({ content }: { content: Page['content'] }) {
  const blocks = (content ?? []).filter((b): b is Text => b.blockType === 'text')
  const example = blocks.find(b => b.blockName === 'example')
  const pairs = blocks.filter(b => b.blockName?.startsWith('pair-'))
  return <div className="label-value-rework">
    {example && <section id={blockAnchor(example)} className="label-value-example">
      <h2>{lines(example)[0]}</h2>
      <figure>
        <div className="label-value-stage">
          <dl className="label-value-pairs">
            {pairs.map(pair => {
              const [label, ...values] = lines(pair)
              return <div key={pair.blockName}><dt>{label}</dt><dd>{values.join('\n')}</dd></div>
            })}
          </dl>
        </div>
        <figcaption><p>{lines(example)[1]}</p><p className="label-value-legend">{lines(example)[2]}</p></figcaption>
      </figure>
    </section>}
    {blocks.filter(b => b !== example && !pairs.includes(b)).map(b => b.blockName === 'sources'
      ? <details key={b.blockName} id={blockAnchor(b)}><summary>{lines(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }}/></details>
      : <section key={b.blockName} id={blockAnchor(b)}><RichText data={b.body}/></section>)}
  </div>
}
