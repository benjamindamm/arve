import { SiteAnchor } from '../site-anchor'
import { LayoutRuleBlock } from './layout-rule-block'
import type { Page } from '../../payload-types'
import { RichText } from '../rich-text'
import { blockAnchor } from '../content-outline'
import './page-types.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block, { blockType: 'text' }>
type Child = { text?: string; children?: Child[]; fields?: { url?: string } }
const flatten = (node: Child): string => node.text ?? (node.children ?? []).map(flatten).join('')
const lines = (block: Text) => block.body.root.children.map(n => flatten(n as Child))

export default function PageTypes({ content }: { content: Page['content'] }) {
  const blocks = content ?? []
  const get = (name: string) => blocks.find((b): b is Text => b.blockName === name && b.blockType === 'text')
  const intro = get('examples')
  const introText = intro ? lines(intro) : []
  const region = (name: string, details = false) => {
    const b = get(name)
    if (!b) return null
    if (["decision"].includes(name)) return <LayoutRuleBlock block={b} />
    return details ? <details id={blockAnchor(b)}><summary>{lines(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }}/></details>
      : <section id={blockAnchor(b)}><RichText data={b.body}/></section>
  }
  return <div className="page-types-rework">
    <section id={intro ? blockAnchor(intro) : undefined}>
      <h2>{introText[0]}</h2>
      <div className="pt-grid">
        {(['overview', 'detail', 'edit', 'create'] as const).map(kind => {
          const b = get(kind)
          if (!b) return null
          const v = lines(b)
          const linkParagraph = b.body.root.children.at(-1) as Child | undefined
          const link = linkParagraph?.children?.[0]
          return <article key={kind} id={blockAnchor(b)} className={`pt-type pt-${kind}`}>
            <h3>{v[0]}</h3><p className="pt-purpose">{v[1]}</p>
            <div className="pt-preview">
              <h4>{v[3]}</h4>
              {kind === 'overview' && <><p className="pt-small">{v[4]}</p><ul>{[5, 7, 9].map(i => <li key={i}><strong>{v[i]}</strong><span>{v[i+1]}</span></li>)}</ul></>}
              {kind === 'detail' && <><p className="pt-status">{v[4]}</p><dl>{[5, 7, 9].map(i => <div key={i}><dt>{v[i]}</dt><dd>{v[i+1]}</dd></div>)}</dl></>}
              {(kind === 'edit' || kind === 'create') && <><div className="pt-fields">{[4, 6].map(i => <label key={i}>{v[i]}<input readOnly value={kind === 'edit' ? v[i+1] : ''} placeholder={kind === 'create' ? v[i+1] : undefined}/></label>)}</div><p className="pt-completion">{v[8]}</p></>}
            </div>
            <p className="pt-regions">{v[2]}</p>
            {link?.fields?.url && <SiteAnchor className="pt-link" href={link.fields.url}>{flatten(link)} <span aria-hidden="true">→</span></SiteAnchor>}
          </article>
        })}
      </div>
      <p className="pt-caption">{introText[1]}</p>
    </section>
    {region('decision')}
    {region('sources', true)}
  </div>
}
