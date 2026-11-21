import { RichText } from '../rich-text'
import type { Page } from '../../payload-types'
import { blockAnchor } from '../content-outline'
import './laden-leer-fehler.css'

type Block = NonNullable<Page['content']>[number]
function lines(block?: Block): string[] {
  return block?.blockType === 'text' ? block.body.root.children.map(node => Array.isArray(node.children) ? node.children.map((child: { text?: string }) => child.text ?? '').join('') : '') : []
}
export default function LoadingEmptyError({ content }: { content: Page['content'] }) {
  const blocks = content ?? []
  const find = (key: string) => blocks.find(block => block.blockName === key)
  const intro = lines(find('states-examples'))
  const keys = ['loading', 'empty', 'zero', 'error', 'unavailable', 'unknown']
  const rich = (key: string, detail = false) => {
    const block = find(key)
    if (block?.blockType !== 'text') return null
    return detail ? <details id={blockAnchor(block)}><summary>{lines(block)[0]}</summary><RichText data={block.body} /></details> : <section id={blockAnchor(block)}><RichText data={block.body} /></section>
  }
  return <div className="lle-rework">
    <section id={find('states-examples') ? blockAnchor(find('states-examples')!) : undefined}>
      <h2>{intro[0]}</h2><p>{intro[1]}</p>
      <div className="lle-grid">{keys.map((key, index) => {
        const block = find(`states-${key}`)
        const text = lines(block)
        return <article className={`lle-card lle-${key}`} key={key} id={block ? blockAnchor(block) : undefined}>
          <header><span className="lle-number" aria-hidden="true">0{index + 1}</span><h3>{text[0]}</h3></header>
          <div className="lle-message">
            {key === 'loading' && <div className="lle-skeleton" aria-hidden="true"><span /><span /><span /></div>}
            <strong>{text[1]}</strong><p>{text[2]}</p>
            <p className="lle-action"><small>{intro[3]}</small><span>{text[3]}</span></p>
          </div>
          <footer><small>{intro[4]}</small><p>{text[4]}</p></footer>
        </article>
      })}</div>
      <p className="lle-boundary">{intro[2]}</p>
    </section>
    {rich('states-rules')}
    <section id={find('states-choice') ? blockAnchor(find('states-choice')!) : undefined}>
      <h2>{lines(find('states-choice'))[0]}</h2>
      <dl className="lle-compare">{lines(find('states-choice')).slice(1).map(line => {
        const [state, condition, action] = line.split(' · ')
        return <div key={state}><dt>{state}</dt><dd>{condition}<span>{action}</span></dd></div>
      })}</dl>
    </section>
    {rich('states-evidence', true)}
    {blocks.filter(block => !block.blockName?.startsWith('states-')).map((block, index) => block.blockType === 'text' ? <details key={block.id ?? index} className="lle-original"><summary>{lines(block).filter((_, i) => block.body.root.children[i]?.type === 'heading').join(' · ')}</summary><RichText data={block.body} /></details> : null)}
  </div>
}
