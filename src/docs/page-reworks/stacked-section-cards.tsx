import { LayoutRuleBlock } from './layout-rule-block'
import { HandbookPreview } from '../handbook-preview'
import type { Page } from '../../payload-types'
import { RichText } from '../rich-text'
import { blockAnchor } from '../content-outline'
import './stacked-section-cards.css'

const ruleLabels: Record<string, string[]> = {"rules": ["Zusammengehörige Themen", "Reihenfolge und Breite", "Wachsende Inhalte"]}

type Block = NonNullable<Page['content']>[number]
function strings(block?: Block) {
  return block?.blockType === 'text' ? block.body.root.children.map(n => Array.isArray(n.children) ? n.children.map((c: { text?: string }) => c.text ?? '').join('') : '') : []
}
export default function StackedSectionCards({ content }: { content: Page['content'] }) {
  const find = (key: string) => (content ?? []).find(b => b.blockName === key)
  const example = find('example'), e = strings(example)
  const overview = strings(find('project-overview')), dates = strings(find('project-dates')), documents = strings(find('project-documents'))
  function demo(narrow: boolean) {
    const id = narrow ? 'ssc-narrow' : 'ssc-wide'
    return <figure className={`ssc-example${narrow ? ' ssc-narrow' : ''}`}>
      <figcaption>{e[narrow ? 5 : 1]}</figcaption>
      <div className="ssc-container"><div className="ssc-stack">
        <header className="ssc-object"><p className="ssc-meta">{e[3]}</p><h3>{e[2]}</h3><p>{e[4]}</p></header>
        <section className="ssc-card" aria-labelledby={`${id}-overview`}>
          <h4 id={`${id}-overview`}>{overview[0]}</h4><p>{overview[1]}</p>
          <dl className="ssc-facts"><div><dt>{overview[2]}</dt><dd>{overview[3]}</dd></div><div><dt>{overview[4]}</dt><dd>{overview[5]}</dd></div></dl>
          <details className="ssc-long"><summary>{overview[6]}</summary><p>{overview[7]}</p><p>{overview[8]}</p></details>
        </section>
        <section className="ssc-card" aria-labelledby={`${id}-dates`}>
          <h4 id={`${id}-dates`}>{dates[0]}</h4><p>{dates[1]}</p>
          <dl className="ssc-dates"><div><dt>{dates[2]}</dt><dd>{dates[3]}</dd></div><div><dt>{dates[4]}</dt><dd>{dates[5]}</dd></div></dl>
        </section>
        <section className="ssc-card" aria-labelledby={`${id}-documents`}>
          <h4 id={`${id}-documents`}>{documents[0]}</h4><p>{documents[1]}</p>
          <ul className="ssc-documents"><li>{documents[2]}</li><li>{documents[3]}</li></ul>
        </section>
      </div></div>
    </figure>
  }
  function section(key: string, disclosure = false) {
    const b = find(key)
    if (b?.blockType !== 'text') return null
    if (["rules"].includes(key)) return <LayoutRuleBlock block={b} labels={ruleLabels[b.blockName ?? ""]} />
    return disclosure ? <details id={blockAnchor(b)} className="ssc-sources"><summary>{strings(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }} /></details> : <section id={blockAnchor(b)}><RichText data={b.body} /></section>
  }
  return <div className="stacked-section-cards-rework">
    {example && <section id={blockAnchor(example)}><h2>{e[0]}</h2><HandbookPreview wide={demo(false)} narrow={demo(true)} /><p className="ssc-note">{e[6]}</p></section>}
    {section('rules')}{section('sources', true)}
  </div>
}
