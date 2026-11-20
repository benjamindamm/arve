import type { Page } from '../../payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { blockAnchor } from '../content-outline'
import './page-type-edit.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block, { blockType: 'text' }>
type Child = { text?: string; children?: Child[] }
const flatten = (n: Child): string => n.text ?? (n.children ?? []).map(flatten).join('')
const lines = (b: Text) => b.body.root.children.map(n => flatten(n as Child))
const actions = (primary: string, secondary: string) => <div className="edit-actions"><span className="edit-action edit-primary">{primary}</span><span className="edit-action">{secondary}</span></div>
const field = (id: string, label: string, value: string, help: string, error?: string) => <div className="edit-field"><label htmlFor={id}>{label}</label><input id={id} readOnly value={value} aria-describedby={`${id}-help${error ? ` ${id}-error` : ''}`} aria-invalid={error ? true : undefined}/><p id={`${id}-help`} className="edit-help">{help}</p>{error && <p id={`${id}-error`} className="edit-error">{error}</p>}</div>

export default function Edit({ content }: { content: Page['content'] }) {
  return <div className="edit-rework">{(content ?? []).map(b => {
    if (b.blockType !== 'text') return null
    const v = lines(b), kind = b.blockName
    if (kind === 'sources' || kind === 'details') return <details key={kind} id={blockAnchor(b)}><summary>{v[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }}/></details>
    if (kind === 'example') return <section key={kind} id={blockAnchor(b)}><h2>{v[0]}</h2><figure className="edit-hero"><figcaption>{v[1]}</figcaption><div className="edit-canvas"><h3>{v[2]}</h3><div className="edit-context"><span>{v[3]}</span><span className="edit-status">{v[4]}</span></div>{field('edit-example-name', v[5], v[6], v[7])}{actions(v[8],v[9])}</div></figure><p>{v[10]}</p></section>
    if (kind === 'normal' || kind === 'error') return <section className="edit-state" key={kind} id={blockAnchor(b)}><h2>{v[0]}</h2><div className={`edit-state-canvas edit-${kind}`}>{field(`edit-${kind}-name`,v[1],v[2],v[3],kind === 'error' ? v[4] : undefined)}{kind === 'normal' && <p className="edit-notice">{v[4]}</p>}{actions(v[5],v[6])}</div><p>{v[7]}</p></section>
    if (kind === 'dirty' || kind === 'unknown') return <section className="edit-state" key={kind} id={blockAnchor(b)}><h2>{v[0]}</h2><div className="edit-state-canvas"><p className="edit-help">{v[1]}</p><div className="edit-prompt"><h3>{v[2]}</h3><p>{v[3]}</p>{actions(v[4],v[5])}</div></div><p>{v[6]}</p></section>
    return <section key={b.id ?? kind} id={blockAnchor(b)}><RichText data={b.body}/></section>
  })}</div>
}
