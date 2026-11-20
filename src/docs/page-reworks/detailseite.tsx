import type { Page } from '../../payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { blockAnchor } from '../content-outline'
import './detailseite.css'

type Block = NonNullable<Page['content']>[number]
function strings(block?: Block) {
  return block?.blockType === 'text' ? block.body.root.children.map(n => Array.isArray(n.children) ? n.children.map((c: { text?: string }) => c.text ?? '').join('') : '') : []
}
export default function DetailPage({ content }: { content: Page['content'] }) {
  const find = (key: string) => (content ?? []).find(b => b.blockName === key)
  const example = find('example'), region = find('regions'), variants = find('variants')
  const e = strings(example), r = strings(region), v = strings(variants)
  const section = (key: string, disclosure = false) => {
    const b = find(key)
    if (b?.blockType !== 'text') return null
    return disclosure ? <details id={blockAnchor(b)}><summary>{strings(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }} /></details>
      : <section id={blockAnchor(b)}><RichText data={b.body} /></section>
  }
  return <div className="detail-rework">
    {example && <section id={blockAnchor(example)}>
      <h2>{e[0]}</h2><p className="dr-note">{e[1]}</p>
      <div className="dr-object">
        <a className="dr-back" href="#detail-return-note">← {e[2]}</a>
        <div className="dr-object-row">
          <div className="dr-identity"><h3>{e[3]}</h3><dl><div><dt>{e[4]}</dt><dd>{e[5]}</dd></div><div><dt>{e[6]}</dt><dd><span className="dr-status">{e[7]}</span></dd></div></dl></div>
          <a className="dr-action" href="#detail-edit-note">{e[8]} <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="dr-explanations"><p id="detail-edit-note">{e[9]}</p><p id="detail-return-note">{e[10]}</p></div>
    </section>}
    {region && <section id={blockAnchor(region)}><h2>{r[0]}</h2><ol className="dr-regions">{[1, 3, 5, 7].map(i => <li key={i}><strong>{r[i]}</strong><p>{r[i + 1]}</p></li>)}</ol><p>{r[9]}</p></section>}
    {section('rules')}
    {variants && <section id={blockAnchor(variants)}><h2>{v[0]}</h2>
      <div className="dr-variants">
        <article><h3>{v[1]}</h3><strong className="dr-variant-name">{v[2]}</strong><p className="dr-id">{v[3]}</p><span className="dr-status">{v[4]}</span><p>{v[5]}</p><a href="#detail-return-note">← {v[6]}</a></article>
        <article><h3>{v[7]}</h3><p>{v[8]}</p><p>{v[9]}</p><a href="#detail-return-note">← {v[10]}</a></article>
        <article><h3>{v[11]}</h3><p>{v[12]}</p><p>{v[13]}</p><a href="#detail-return-note">← {v[14]}</a></article>
      </div><p className="dr-note">{v[15]}</p>
    </section>}
    {section('responsive')}{section('contract', true)}{section('sources', true)}
  </div>
}
