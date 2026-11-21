import { SiteAnchor } from '../site-anchor'
import { LayoutRuleBlock } from './layout-rule-block'
import type { Page } from '../../payload-types'
import { RichText } from '../rich-text'
import { blockAnchor } from '../content-outline'
import './page-layouts.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block, { blockType: 'text' }>
type Node = { text?: string; children?: Node[]; fields?: { url?: string } }
const flatten = (n: Node): string => n.text ?? (n.children ?? []).map(flatten).join('')
const lines = (b: Text) => b.body.root.children.map(n => flatten(n as Node))
const kinds = ['main-sidebar', 'card-grid-4x4', 'narrow-single-card', 'wide-single-card', 'stacked-section-cards', 'card-grid-3-columns'] as const

export default function PageLayouts({ content }: { content: Page['content'] }) {
  const get = (name: string) => (content ?? []).find((b): b is Text => b.blockName === name && b.blockType === 'text')
  const intro = get('examples')
  const region = (name: string, collapsible = false) => {
    const b = get(name)
    if (!b) return null
    if (["questions"].includes(name)) return <LayoutRuleBlock block={b} />
    return collapsible ? <details id={blockAnchor(b)}><summary>{lines(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }}/></details>
      : <section id={blockAnchor(b)}><RichText data={b.body}/></section>
  }
  return <div className="page-layouts-rework">
    <section id={intro ? blockAnchor(intro) : undefined}>
      {intro && <h2>{lines(intro)[0]}</h2>}
      <div className="plo-options">{kinds.map(kind => {
        const b = get(kind)
        if (!b) return null
        const v = lines(b)
        const link = (b.body.root.children.at(-1) as Node | undefined)?.children?.[0]
        const labels = v.slice(3, -1)
        return <article key={kind} id={blockAnchor(b)} className="plo-option">
          <h3>{v[0]}</h3>
          <div className={`plo-schema plo-${kind}`} aria-label={v[0]}>
            {labels.map((label, i) => <div className={`plo-cell plo-cell-${i}`} key={i}>{label}</div>)}
          </div>
          <p className="plo-choice">{v[1]}</p>
          <p className="plo-rule">{v[2]}</p>
          {link?.fields?.url && <SiteAnchor href={link.fields.url}>{flatten(link)} <span aria-hidden="true">→</span></SiteAnchor>}
        </article>
      })}</div>
      {intro && <p className="plo-caption">{lines(intro)[1]}</p>}
    </section>
    {region('questions')}
    {region('responsive', true)}
    {region('sources', true)}
  </div>
}
