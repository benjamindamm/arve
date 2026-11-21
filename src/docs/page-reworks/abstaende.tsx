import type { Page } from '../../payload-types'
import { RichText } from '../rich-text'
import { blockAnchor } from '../content-outline'
import './abstaende.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block, { blockType: 'text' }>
function strings(block: Text) {
  return block.body.root.children.map(n => Array.isArray(n.children) ? n.children.map((c: { text?: string }) => c.text ?? '').join('') : '')
}
export default function SpacingPage({ content }: { content: Page['content'] }) {
  const blocks = content ?? []
  const find = (key: string) => blocks.find(b => b.blockName === key)
  const read = (key: string) => { const b = find(key); return b?.blockType === 'text' ? strings(b) : [] }
  const labels = read('labels'), sample = read('sample'), padding = read('padding'), target = read('target')
  const study = find('groups')
  const section = (key: string, details = false) => {
    const b = find(key)
    if (b?.blockType !== 'text') return null
    return details ? <details id={blockAnchor(b)}><summary>{strings(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }} /></details>
      : <section id={blockAnchor(b)}><RichText data={b.body} /></section>
  }
  return <div className="spacing-rework">
    {study?.blockType === 'study' && <section id={blockAnchor(study)}>
      <h2>{study.title}</h2><p className="sp-demo-note">{labels[6]}</p>
      <div className="sp-comparison">
        {[false, true].map(flat => <figure key={String(flat)} className={flat ? 'sp-flat' : 'sp-grouped'}>
          <figcaption>{labels[flat ? 2 : 1]}</figcaption>
          <div className="sp-fields">{[1, 4].map((offset, index) => <div className="sp-field" key={offset}>
            {index === 1 && <span className="sp-gap-label">{labels[flat ? 5 : 4]}</span>}
            <strong>{sample[offset]}</strong><span className="sp-value">{sample[offset + 1]}</span><span className="sp-help">{sample[offset + 2]}</span>
            {!index && <span className="sp-near-label">{labels[flat ? 5 : 3]}</span>}
          </div>)}</div>
        </figure>)}
      </div>
      <details><summary>Erklärung zum Beispiel</summary><p>{study.explanation}</p><p>{study.source}</p></details>
    </section>}
    {section('rules')}
    <section id={find('padding') ? blockAnchor(find('padding')!) : undefined}>
      <h2>{padding[0]}</h2><div className="sp-padding-demo">
        <div className="sp-padding-box"><span>{padding[2]}</span><strong>{padding[1]}</strong></div>
        <span className="sp-between">{padding[3]}</span>
        <div className="sp-padding-box"><span>{padding[2]}</span><strong>{padding[1]}</strong></div>
      </div><p>{padding[4]}</p>
    </section>
    <section id={find('target') ? blockAnchor(find('target')!) : undefined}>
      <h2>{target[0]}</h2><div className="sp-target-demo">
        <div className="sp-target-unit"><div className="sp-target-shape" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/></svg></div><span>{target[1]}</span><strong>{target[2]}</strong></div>
        <span className="sp-between">{target[3]}</span>
        <div className="sp-target-unit"><div className="sp-target-shape" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 4v16M4 12h16"/></svg></div><span>{target[1]}</span><strong>{target[2]}</strong></div>
      </div><p>{target[4]}</p><p>{target[5]}</p>
    </section>
    {section('check')}{section('values', true)}{section('sources', true)}{section('links')}
  </div>
}
