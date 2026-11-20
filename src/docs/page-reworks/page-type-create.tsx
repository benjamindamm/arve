import type { Page } from '../../payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { blockAnchor } from '../content-outline'
import './page-type-create.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block, { blockType: 'text' }>
type Child = { text?: string; children?: Child[] }
const flatten = (node: Child): string => node.text ?? (node.children ?? []).map(flatten).join('')
const lines = (block?: Text) => block?.body.root.children.map(n => flatten(n as Child)) ?? []
export default function PageTypeCreate({ content }: { content: Page['content'] }) {
  const get = (key: string) => (content ?? []).find((b): b is Text => b.blockName === key && b.blockType === 'text')
  const example = get('example'), v = lines(example)
  const error = get('error'), e = lines(error)
  const pending = get('pending'), p = lines(pending)
  const confirmed = get('confirmed'), c = lines(confirmed)
  const unknown = get('unknown'), u = lines(unknown)
  const section = (key: string, collapsible = false) => {
    const b = get(key)
    if (!b) return null
    return collapsible ? <details id={blockAnchor(b)}><summary>{lines(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }}/></details>
      : <section id={blockAnchor(b)}><RichText data={b.body}/></section>
  }
  return <div className="create-rework">
    {example && <section id={blockAnchor(example)}>
      <h2>{v[0]}</h2>
      <div className="create-example">
        <h3>{v[1]}</h3><p>{v[2]}</p>
        <div className="create-field"><label htmlFor="create-name">{v[3]}</label><input id="create-name" value="" readOnly aria-describedby="create-help"/><p id="create-help" className="create-help">{v[4]}</p></div>
        <div className="create-actions"><span className="create-primary">{v[5]}</span><span className="create-secondary">{v[6]}</span></div>
        <p className="create-system">{v[7]}</p>
      </div>
      <p className="create-caption">{v[8]}</p>
    </section>}
    <div className="create-variants">
      {error && <section className="create-variant" id={blockAnchor(error)}><h2>{e[0]}</h2><label htmlFor="create-error">{e[1]}</label><input id="create-error" value="" readOnly aria-invalid="true" aria-describedby="create-error-message"/><p id="create-error-message" className="create-error">{e[2]}</p><p>{e[3]}</p><p>{e[4]}</p></section>}
      {pending && <section className="create-variant" id={blockAnchor(pending)}><h2>{p[0]}</h2><p className="create-message"><span aria-hidden="true">◌ </span>{p[1]}</p><p>{p[2]}</p></section>}
      {confirmed && <section className="create-variant" id={blockAnchor(confirmed)}><h2>{c[0]}</h2><div className="create-message"><strong>{c[1]}</strong><p>{c[2]} <span className="create-status">{c[3]}</span></p></div><p>{c[4]}</p></section>}
      {unknown && <section className="create-variant" id={blockAnchor(unknown)}><h2>{u[0]}</h2><p className="create-message"><strong>{u[1]}</strong></p><p>{u[2]}</p></section>}
    </div>
    {section('decisions')}{section('regions')}{section('contract', true)}{section('sources', true)}
  </div>
}
