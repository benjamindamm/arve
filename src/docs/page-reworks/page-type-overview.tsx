import type { Page } from '../../payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { blockAnchor } from '../content-outline'
import './page-type-overview.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block, { blockType: 'text' }>
type Child = { text?: string; children?: Child[] }
const flatten = (n: Child): string => n.text ?? (n.children ?? []).map(flatten).join('')
const lines = (b: Text) => b.body.root.children.map(n => flatten(n as Child))

export default function Overview({ content }: { content: Page['content'] }) {
  return <div className="overview-rework">{(content ?? []).map(b => {
    if (b.blockType !== 'text') return null
    const v = lines(b)
    const kind = b.blockName
    if (kind === 'sources') return <details key={kind} id={blockAnchor(b)}><summary>{v[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }}/></details>
    if (!['dashboard', 'list-search', 'analytics', 'catalog', 'service-hub'].includes(kind ?? '')) return <section key={b.id ?? kind} id={blockAnchor(b)}><RichText data={b.body}/></section>
    return <section key={kind} id={blockAnchor(b)} className="ov-variant">
      <h2>{v[0]}</h2>
      <figure className={`ov-example ov-${kind}`}>
        <div className="ov-canvas"><h3>{v[5]}</h3>
          {kind === 'dashboard' && <><dl className="ov-metrics">{[6, 8].map(i => <div key={i}><dt>{v[i]}</dt><dd>{v[i+1]}</dd></div>)}</dl><div className="ov-focus"><span className="ov-label">{v[10]}</span><strong>{v[11]}</strong><span>{v[12]}</span></div></>}
          {kind === 'list-search' && <><div className="ov-toolbar"><span>{v[6]}</span><span>{v[7]}</span></div><div className="ov-focus"><p className="ov-label">{v[8]}</p><table><thead><tr><th>{v[9]}</th><th>{v[10]}</th></tr></thead><tbody>{[11, 13].map(i => <tr key={i}><td>{v[i]}</td><td>{v[i+1]}</td></tr>)}</tbody></table></div></>}
          {kind === 'analytics' && <><p className="ov-context">{v[6]}</p><div className="ov-focus"><strong>{v[7]}</strong><dl className="ov-bars">{[8, 10, 12].map(i => <div key={i}><dt>{v[i]}</dt><dd><span aria-hidden="true" className="ov-bar" style={{width: `${Math.max(0, Math.min(100, Number(v[i+1]) / 10 * 100))}%`}}/><span>{v[i+1]}</span></dd></div>)}</dl><p className="ov-comparison">{v[14]}</p></div></>}
          {kind === 'catalog' && <div className="ov-offers">{[6, 10].map(i => <div className="ov-focus" key={i}><strong>{v[i]}</strong><span>{v[i+1]}</span><span>{v[i+2]}</span><span className="ov-entry">{v[i+3]} <span aria-hidden="true">→</span></span></div>)}</div>}
          {kind === 'service-hub' && <div className="ov-hub"><div className="ov-focus"><span className="ov-label">{v[6]}</span>{[7, 9].map(i => <div className="ov-hub-entry" key={i}><strong>{v[i]} <span aria-hidden="true">→</span></strong><span>{v[i+1]}</span></div>)}</div><div className="ov-support"><span className="ov-label">{v[11]}</span><strong>{v[12]}</strong><span>{v[13]}</span></div></div>}
        </div><figcaption>{v[4]}</figcaption>
      </figure>
      <div className="ov-guidance"><p className="ov-purpose">{v[1]}</p><p>{v[2]}</p><p>{v[3]}</p></div>
    </section>
  })}</div>
}
