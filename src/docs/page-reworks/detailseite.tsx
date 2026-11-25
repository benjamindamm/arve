import { SiteAnchor } from '../site-anchor'
import { LayoutRuleBlock } from './layout-rule-block'
import type { Page } from '../../payload-types'
import { RichText } from '../rich-text'
import { blockAnchor as sourceAnchor } from '../content-outline'
import './detailseite.css'

const ruleLabels: Record<string, string[]> = {"rules": ["Projekt erkennen", "Inhalte priorisieren", "Rückweg und Filter"]}

type Block = NonNullable<Page['content']>[number]
function strings(block?: Block) {
  return block?.blockType === 'text' ? block.body.root.children.map(n => Array.isArray(n.children) ? n.children.map((c: { text?: string }) => c.text ?? '').join('') : '') : []
}
export default function DetailPage({ content, anchorPrefix='' }: { content: Page['content']; anchorPrefix?:string }) {
  const blockAnchor=(block:Block)=>anchorPrefix+sourceAnchor(block)
  const find = (key: string) => (content ?? []).find(b => b.blockName === key)
  const example = find('example'), region = find('regions'), variants = find('variants')
  const e = strings(example), r = strings(region), v = strings(variants)
  const section = (key: string, disclosure = false) => {
    const b = find(key)
    if (b?.blockType !== 'text') return null
    if (["rules", "responsive"].includes(key)) return <LayoutRuleBlock anchorPrefix={anchorPrefix} block={b} labels={ruleLabels[b.blockName ?? ""]} />
    return disclosure ? <details id={blockAnchor(b)}><summary>{strings(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }} /></details>
      : <section id={blockAnchor(b)}><RichText data={b.body} /></section>
  }
  return <div className="detail-rework">
    {example && <section id={blockAnchor(example)}>
      <h2>{e[0]}</h2><p className="dr-note">{e[1]}</p>
      <div className="dr-object">
        <SiteAnchor className="dr-back" href="#detail-return-note">← {e[2]}</SiteAnchor>
        <div className="dr-object-row">
          <div className="dr-identity"><h3>{e[3]}</h3><dl><div><dt>{e[4]}</dt><dd>{e[5]}</dd></div><div><dt>{e[6]}</dt><dd><span className="dr-status">{e[7]}</span></dd></div></dl></div>
          <SiteAnchor className="dr-action" href="#detail-edit-note">{e[8]} <span aria-hidden="true">→</span></SiteAnchor>
        </div>
      </div>
      <div className="dr-explanations"><p id="detail-edit-note">{e[9]}</p><p id="detail-return-note">{e[10]}</p></div>
    </section>}
    {section('rules')}
    {region && <details id={blockAnchor(region)}><summary>{r[0]}</summary><ol className="dr-regions">{[1, 3, 5, 7].map(i => <li key={i}><strong>{r[i]}</strong><p>{r[i + 1]}</p></li>)}</ol><p>{r[9]}</p></details>}
    {variants && <section id={blockAnchor(variants)}><h2>{v[0]}</h2>
      <div className="dr-variants">
        <article><h3>{v[1]}</h3><strong className="dr-variant-name">{v[2]}</strong><p className="dr-id">{v[3]}</p><span className="dr-status">{v[4]}</span><p>{v[5]}</p><SiteAnchor href="#detail-return-note">← {v[6]}</SiteAnchor></article>
        <article><h3>{v[7]}</h3><p>{v[8]}</p><p>{v[9]}</p><SiteAnchor href="#detail-return-note">← {v[10]}</SiteAnchor></article>
        <article><h3>{v[11]}</h3><p>{v[12]}</p><p>{v[13]}</p><SiteAnchor href="#detail-return-note">← {v[14]}</SiteAnchor></article>
      </div><p className="dr-note">{v[15]}</p>
    </section>}
    {section('responsive')}{section('contract', true)}{section('sources', true)}
  </div>
}
