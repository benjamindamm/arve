import {useId} from 'react'
import type {Page} from '../../payload-types'
import {Content} from '../content'
import './referenz-pflegen.css'

type Block=NonNullable<Page['content']>[number]
function texts(block:Block|undefined) {
 if(block?.blockType!=='text')return []
 return block.body.root.children.map(child=>(child.children as {text?:string}[]|undefined)?.map(node=>node.text??'').join('')??'')
}
export default function ReferenzPflegen({content}:{content:Page['content']}) {
 const id=useId(),blocks=content??[]
 const example=blocks.find(block=>block.blockName==='maintenance-example')
 const technical=texts(blocks.find(block=>block.blockName==='maintenance-technical'))
 const originalIndex=blocks.findIndex(block=>block.blockName==='maintenance-original')
 const original=texts(blocks[originalIndex])
 if(example?.blockType!=='workflowStudy'||!technical.length||originalIndex<0)return <Content blocks={content}/>
 return <div className="referenz-pflegen-rework">
  <section className="rp-example" aria-labelledby={`${id}-example`}>
   <h2 id={`${id}-example`}>{example.title}</h2><p>{example.summary}</p>
   <ol>{example.steps.map(step=><li key={step.key} className={step.tone==='attention'?'rp-decision':undefined}>
    <h3>{step.title}</h3><p>{step.description}</p><p className="rp-result">{step.next}</p>
   </li>)}</ol><p className="rp-caption">{example.caption}</p>
  </section>
  <Content blocks={blocks.filter(block=>block.blockName==='maintenance-handoff'||block.blockName==='maintenance-links')}/>
  <details className="rp-details"><summary>{technical[0]}</summary>
   {technical.slice(1).map((text,index)=>index===1?<pre key={text}><code>{text}</code></pre>:<p key={text}>{text}</p>)}
   <p>{example.source}</p>
  </details>
  <details className="rp-details"><summary>{original[0]}</summary>
   {original.slice(1).map(text=><p key={text}>{text}</p>)}<Content blocks={blocks.slice(originalIndex+1)}/>
  </details>
 </div>
}
