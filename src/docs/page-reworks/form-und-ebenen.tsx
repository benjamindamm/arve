import type { Page } from '../../payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { blockAnchor } from '../content-outline'
import './form-und-ebenen.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block, { blockType: 'text' }>
function strings(block: Text) {
  return block.body.root.children.map(n => Array.isArray(n.children) ? n.children.map((c: { text?: string }) => c.text ?? '').join('') : '')
}
export default function ShapePage({ content }: { content: Page['content'] }) {
  const blocks = content ?? []
  const find = (key: string) => blocks.find(b => b.blockName === key)
  const read = (key: string) => { const b = find(key); return b?.blockType === 'text' ? strings(b) : [] }
  const anchor = (key: string) => { const b = find(key); return b ? blockAnchor(b) : undefined }
  const comparison = read('comparison'), overlay = read('overlay'), radii = read('radii')
  const section = (key: string, details = false) => {
    const b = find(key)
    if (b?.blockType !== 'text') return null
    return details ? <details id={blockAnchor(b)}><summary>{strings(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }} /></details>
      : <section id={blockAnchor(b)}><RichText data={b.body} /></section>
  }
  const original = find('original-study')
  return <div className="shape-rework">
    <section id={anchor('comparison')}>
      <h2>{comparison[0]}</h2>
      <div className="sh-comparison">{['open', 'bounded', 'floating'].map((variant,i) => <figure key={variant}>
        <figcaption>{comparison[i+1]}</figcaption>
        <div className="sh-stage"><div className={'sh-contact sh-' + variant}><strong>{comparison[4]}</strong><span>{comparison[5]}</span><span>{comparison[6]}</span></div></div>
        <p>{comparison[i+7]}</p>
      </figure>)}</div><p className="sh-note">{comparison[10]}</p>
    </section>
    {section('rules')}
    <section id={anchor('overlay')}>
      <h2>{overlay[0]}</h2>
      <div className="sh-overlays">{['outline', 'shadow', 'both'].map((variant,i) => <figure key={variant}>
        <figcaption>{overlay[i+1]}</figcaption>
        <div className="sh-overlay-stage">
          <div className="sh-backdrop"><strong>{overlay[4]}</strong><span>{comparison[5]}</span><span>{comparison[6]}</span><div className="sh-background-lines" aria-hidden="true"><i/><i/><i/></div></div>
          <div className="sh-overlay-stack"><span className="sh-trigger">{overlay[5]} <span aria-hidden="true">⌄</span></span><div className={'sh-menu sh-' + variant}><span>{overlay[6]}</span><span>{overlay[7]}</span></div></div>
        </div>
      </figure>)}</div><p>{overlay[8]}</p><p className="sh-note">{overlay[9]}</p>
    </section>
    <section id={anchor('radii')}>
      <h2>{radii[0]}</h2><div className="sh-radii">{['checkbox','small-button','input','switch'].map((variant,i) => <figure key={variant}>
        <div className={'sh-radius sh-radius-' + variant} aria-hidden="true">{variant === 'switch' && <i/>}</div>
        <figcaption><strong>{radii[2*i+1]}</strong><span>{radii[2*i+2]}</span></figcaption>
      </figure>)}</div><p>{radii[9]}</p>
    </section>
    {section('check')}{section('sources', true)}
    {original?.blockType === 'study' && <details id={blockAnchor(original)}><summary>{original.title}</summary><p>{original.explanation}</p><p>{original.source}</p><code>{original.revision}</code></details>}
    {section('links')}
  </div>
}
