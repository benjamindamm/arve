import type { Page } from '../../payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { blockAnchor } from '../content-outline'
import './komponenten-auswahl.css'

type Block = NonNullable<Page['content']>[number]
function lines(block?: Block): string[] {
 return block?.blockType === 'text' ? block.body.root.children.map(n => Array.isArray(n.children) ? n.children.map((c:{text?:string})=>c.text??'').join('') : '') : []
}
function Body({block,skip=0}:{block?:Block;skip?:number}) {
 return block?.blockType==='text' ? <RichText data={{...block.body,root:{...block.body.root,children:block.body.root.children.slice(skip)}}}/> : null
}
export default function ComponentSelection({content}:{content:Page['content']}) {
 const blocks=content??[], find=(name:string)=>blocks.find(b=>b.blockName===name), intro=find('decision'), labels=lines(intro)
 const source=find('sourceDetails'), original=find('originalDetails')
 return <div className="component-selection">
  <section id={intro&&blockAnchor(intro)} aria-labelledby="selection-question">
   <h2 id="selection-question">{labels[0]}</h2><p>{labels[1]}</p>
   <p className="csel-route-heading">{labels[2]}</p>
   <div className="csel-routes">{blocks.filter(b=>b.blockName?.startsWith('route-')).map(block=>{
    const text=lines(block),kind=block.blockName?.slice(6)
    return <article className="csel-route" id={blockAnchor(block)} key={block.blockName}>
     <div className="csel-task"><h3>{text[0]}</h3><p>{text[1]}</p></div>
     <span className="csel-arrow" aria-hidden="true">→</span>
     <div className="csel-recommendation"><h3>{text[2]}</h3><p>{text[3]}</p><Body block={block} skip={6}/></div>
     <div className="csel-example">
      {kind==='button'&&<span className="csel-button">{text[4]}</span>}
      {kind==='input'&&<div className="csel-field"><span>{text[4]}</span><span className="csel-input">{text[5]}</span></div>}
      {kind==='checkbox'&&<div className="csel-checks">{text.slice(4,6).map((label,i)=><div className="csel-option" key={label}><span className="csel-check" aria-hidden="true">{i===0?'✓':''}</span><span>{label}</span></div>)}</div>}
      {kind==='switch'&&<div className="csel-option"><span className="csel-switch" aria-hidden="true"><span/></span><span>{text[4]}<small>{text[5]}</small></span></div>}
     </div>
    </article>
   })}</div><p className="csel-caption">{labels[3]}</p>
  </section>
  {['boundary','rules'].map(name=>{const block=find(name);return block&&<section className={'csel-'+name} id={blockAnchor(block)} key={name}><Body block={block}/></section>})}
  <details id={source&&blockAnchor(source)}><summary>{lines(source)[0]}</summary><Body block={source} skip={1}/><Body block={find('observations')}/><Body block={find('catalog')}/></details>
  <details id={original&&blockAnchor(original)}><summary>{lines(original)[0]}</summary><Body block={original} skip={1}/>{blocks.filter(b=>b.blockName?.startsWith('original-')).map(block=>block.blockType==='componentStudy'?<section key={block.blockName}><h3>{block.title}</h3><p>{block.explanation}</p><p>{block.source}</p></section>:<Body key={block.blockName} block={block}/>)}</details>
 </div>
}
