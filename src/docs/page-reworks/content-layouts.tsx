import type { Page } from '../../payload-types'
import { Content } from '../content'
import './content-layouts.css'

type Block = NonNullable<Page['content']>[number]
type Node = { type?: string; text?: string; children?: Node[]; fields?: { url?: string } }
const nodeText = (node: Node): string => node.text ?? node.children?.map(nodeText).join('') ?? ''
function read(block: Block | undefined) {
  if (block?.blockType !== 'text') return null
  const nodes = block.body.root.children as Node[]
  const link = nodes.flatMap(node => node.children ?? []).find(node => node.type === 'link')
  return { copy: nodes.filter(node => !node.children?.some(child => child.type === 'link')).map(nodeText), href: link?.fields?.url, label: link ? nodeText(link) : undefined }
}

export default function ContentLayouts({ content }: { content: Page['content'] }) {
  const blocks = content ?? []
  const names = ['clo-label-value', 'clo-form-layout', 'clo-card-header']
  const cards = names.map(name => read(blocks.find(block => block.blockName === name)))
  const evidence = read(blocks.find(block => block.blockName === 'clo-evidence'))
  if (cards.some(card => !card?.href) || !evidence) return <Content blocks={content} />
  return <div className="content-layouts-rework">
    <div className="clo-grid">
      {cards.map((card, index) => {
        const { copy: c, href, label } = card!
        return <section className="clo-choice" key={names[index]}>
          <figure className="clo-preview">
            <figcaption>{c[2]}</figcaption>
            {index === 0 ? <div className="clo-mini-card clo-properties">
              <strong>{c[3]}</strong>
              <dl>{[4, 6, 8].map(i => <div key={i}><dt>{c[i]}</dt><dd>{c[i + 1]}</dd></div>)}</dl>
            </div> : index === 1 ? <div className="clo-mini-card clo-fields">
              <strong>{c[3]}</strong>
              <div className="clo-field"><span className="clo-field-label">{c[4]}</span><span className="clo-field-value">{c[5]}</span><small>{c[6]}</small></div>
              <div className="clo-field"><span className="clo-field-label">{c[7]}</span><span className="clo-field-value">{c[8]}</span></div>
            </div> : <div className="clo-mini-card clo-header-card">
              <div className="clo-mini-header"><div><strong>{c[3]}</strong><p>{c[4]}</p></div><span className="clo-action-slot">{c[5]}</span></div>
              <div className="clo-body-slot">{c[6]}</div>
            </div>}
          </figure>
          <div className="clo-copy"><h2>{c[0]}</h2><p>{c[1]}</p><a href={href}>{label}<span aria-hidden="true"> →</span></a></div>
        </section>
      })}
    </div>
    <details className="clo-evidence"><summary>{evidence.copy[0]}</summary>{evidence.copy.slice(1).map(copy => <p key={copy}>{copy}</p>)}</details>
    <Content blocks={blocks.filter(block => ![...names, 'clo-evidence'].includes(block.blockName ?? ''))} />
  </div>
}
