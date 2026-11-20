import {useId} from 'react'
import type {Page} from '../../payload-types'
import {Content} from '../content'
import './barrierefreiheit.css'

type Block=NonNullable<Page['content']>[number]
function lines(block:Block|undefined):string[]{
 return block?.blockType==='text'?block.body.root.children.map(c=>(c.children as {text?:string}[]|undefined)?.map(n=>n.text??'').join('')??''):[]
}
export default function Accessibility({content}:{content:Page['content']}){
 const id=useId(),blocks=content??[],get=(name:string)=>lines(blocks.find(b=>b.blockName===name))
 const demo=get('access-example'),checks=get('access-checks'),rules=get('access-rules'),limits=get('access-limits')
 if(demo.length!==13||checks.length!==15||limits.length!==6)return <Content blocks={content}/>
 return <div className="access-rework">
  <section aria-labelledby={`${id}-example`} className="access-example">
   <h2 id={`${id}-example`}>{demo[0]}</h2><p className="access-caption">{demo[1]}</p>
   <figure className="access-figure">
    <div className="access-form"><h3>{demo[2]}</h3><div className="access-label">{demo[3]}</div><div className="access-field" aria-hidden="true"/><p className="access-help">{demo[4]}</p><p className="access-error"><span aria-hidden="true">!</span> {demo[5]}</p><div className="access-action">{demo[6]}</div></div>
    <figcaption><div><strong>{demo[7]}</strong><p>{demo[8]}</p></div><div><strong>{demo[9]}</strong><p>{demo[10]}</p></div></figcaption>
   </figure>
   <p className="access-bridge"><strong>{demo[11]}</strong> {demo[12]}</p>
  </section>
  <section aria-labelledby={`${id}-checks`} className="access-checks"><h2 id={`${id}-checks`}>{checks[0]}</h2>
   {[3,6,9,12].map((index,n)=><article className="access-task" key={index}><div className="access-task-title"><span aria-hidden="true">{String(n+1).padStart(2,'0')}</span><h3>{checks[index]}</h3></div><div className="access-task-copy"><div><h4>{checks[1]}</h4><p>{checks[index+1]}</p></div><div><h4>{checks[2]}</h4><p>{checks[index+2]}</p></div></div></article>)}
  </section>
  <section className="access-rules" aria-labelledby={`${id}-rules`}><h2 id={`${id}-rules`}>{rules[0]}</h2><ul>{rules.slice(1).map(p=><li key={p}>{p}</li>)}</ul></section>
  <section className="access-limits" aria-labelledby={`${id}-limits`}><h2 id={`${id}-limits`}>{limits[0]}</h2><p>{limits[1]}</p><p>{limits[2]}</p><p>{limits[3]}</p></section>
  <details className="access-original"><summary>{limits[4]}</summary><p>{limits[5]}</p><Content blocks={blocks.slice(blocks.findIndex(b=>b.blockName==='access-limits')+1)}/></details>
 </div>
}
