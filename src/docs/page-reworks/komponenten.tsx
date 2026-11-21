import type { Page } from '../../payload-types'
import { RichText } from '../rich-text'
import { blockAnchor } from '../content-outline'
import './komponenten.css'
import { ComponentCatalogue } from '../component-catalogue'
import type { Entry } from '../published-documentation'

type Block = NonNullable<Page['content']>[number]
function lines(block?: Block): string[] {
  return block?.blockType === 'text' ? block.body.root.children.map(node => Array.isArray(node.children) ? node.children.map((child: {text?: string}) => child.text ?? '').join('') : '') : []
}
export default function ComponentsOverview({content,catalogueEntries=[]}: {content: Page['content'];catalogueEntries?:Entry[]}) {
  const blocks = content ?? [], find = (key: string) => blocks.find(b => b.blockName === key)
  const intro = find('comparison'), values = lines(intro)
  return <div className="components-overview">
    <ComponentCatalogue entries={catalogueEntries}/>
    <details className="legacy-component-studies"><summary>Vier lokale Spartan-Beispiele und Gestaltungsstudien</summary>
    {intro && <section id={blockAnchor(intro)}><h2>{values[0]}</h2><p className="co-caption">{values[1]}</p>
      <div className="co-grid">{['button','input','checkbox','switch'].map(kind => {
        const block = find('preview-'+kind), text = lines(block)
        if (block?.blockType !== 'text') return null
        return <article className="co-item" key={kind} id={blockAnchor(block)}>
          <p className="co-purpose">{text[1]}</p><h3>{text[0]}</h3>
          <div className={'co-preview co-'+kind}>
            {kind === 'button' && <span className="co-button-shape">{text[2]}</span>}
            {kind === 'input' && <div className="co-input-label"><span>{text[2]}</span><span className="co-input-shape">{text[3]}</span></div>}
            {kind === 'checkbox' && <div className="co-option"><span className="co-checkbox-shape" aria-hidden="true">✓</span><span>{text[2]}</span></div>}
            {kind === 'switch' && <div className="co-option"><span className="co-switch-shape" aria-hidden="true"><span /></span><span>{text[2]}<small>{text[3]}</small></span></div>}
          </div>
          <p>{text[4]}</p>
          <RichText data={{...block.body,root:{...block.body.root,children:block.body.root.children.slice(5)}}} />
        </article>
      })}</div>
    </section>}
    {['selection','workflow'].map(key => { const block = find(key); return block?.blockType === 'text' ? <section className="co-next" key={key} id={blockAnchor(block)}><RichText data={block.body} /></section> : null })}
    {blocks.filter(b => b.blockName?.startsWith('original-')).map(block => block.blockType === 'text' ? <details key={block.blockName} id={blockAnchor(block)}><summary>{lines(block)[0]}</summary><RichText data={{...block.body,root:{...block.body.root,children:block.body.root.children.slice(1)}}} /></details> : null)}
    </details></div>
}
