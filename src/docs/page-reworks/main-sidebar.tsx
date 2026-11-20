import type { Page } from '../../payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { blockAnchor } from '../content-outline'
import './main-sidebar.css'

type Block = NonNullable<Page['content']>[number]
function strings(block?: Block) {
  return block?.blockType === 'text' ? block.body.root.children.map(n => Array.isArray(n.children) ? n.children.map((c: { text?: string }) => c.text ?? '').join('') : '') : []
}
export default function MainSidebar({ content }: { content: Page['content'] }) {
  const find = (key: string) => (content ?? []).find(b => b.blockName === key)
  const example = find('example'), e = strings(example)
  function demo(narrow: boolean) {
    const id = narrow ? 'ms-narrow' : 'ms-wide'
    return <figure className={`ms-example${narrow ? ' ms-narrow' : ''}`}>
      <figcaption>{e[narrow ? 25 : 1]}</figcaption>
      <div className="ms-container"><div className="ms-shell">
        <header className="ms-header"><span className="ms-label">{e[2]}</span><strong>{e[3]}</strong></header>
        <nav className="ms-nav" aria-label={`${e[4]} · ${e[narrow ? 25 : 1]}`}><span className="ms-label">{e[4]}</span><a href={`#${id}-overview`}>{e[5]}</a><a href={`#${id}-next`}>{e[6]}</a></nav>
        <div className="ms-columns">
          <article className="ms-main"><span className="ms-label">{e[7]}</span><h3>{e[8]}</h3><p>{e[9]}</p>
            <section id={`${id}-overview`}><h4>{e[10]}</h4><p>{e[11]}</p></section>
            <section id={`${id}-next`}><h4>{e[12]}</h4><p>{e[13]}</p></section>
            <details className="ms-long"><summary>{e[14]}</summary><p>{e[15]}</p><p>{e[11]}</p><p>{e[13]}</p></details>
          </article>
          <aside className="ms-aside" aria-label={`${e[16]} · ${e[narrow ? 25 : 1]}`}><span className="ms-label">{e[16]}</span>
            <section><h4>{e[17]}</h4><dl><div><dt>{e[18]}</dt><dd>{e[19]}</dd></div><div><dt>{e[20]}</dt><dd>{e[21]}</dd></div></dl></section>
            <section><h4>{e[22]}</h4><ul><li><a href={`#${id}-overview`}>{e[23]}</a></li><li><a href={`#${id}-next`}>{e[24]}</a></li></ul></section>
          </aside>
        </div>
      </div></div>
    </figure>
  }
  function section(key: string, disclosure = false) {
    const b = find(key)
    if (b?.blockType !== 'text') return null
    return disclosure ? <details id={blockAnchor(b)} className="ms-sources"><summary>{strings(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }} /></details> : <section id={blockAnchor(b)}><RichText data={b.body} /></section>
  }
  return <div className="main-sidebar-rework">
    {example && <section id={blockAnchor(example)}><h2>{e[0]}</h2>{demo(false)}{demo(true)}<p className="ms-note">{e[26]}</p></section>}
    {section('rules')}{section('responsive')}{section('sources', true)}
  </div>
}
