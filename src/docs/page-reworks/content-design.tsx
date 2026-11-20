import {useId} from 'react'
import type {Page} from '../../payload-types'
import {Content} from '../content'
import './content-design.css'

type Block=NonNullable<Page['content']>[number]
function texts(block:Block|undefined) {
 if(block?.blockType!=='text') return []
 return block.body.root.children.map(child=>(child.children as {text?:string}[]|undefined)?.map(node=>node.text??'').join('')??'')
}
export default function ContentDesign({content}:{content:Page['content']}) {
 const id=useId()
 const blocks=content??[]
 const example=texts(blocks.find(block=>block.blockName==='writing-example'))
 const labels=texts(blocks.find(block=>block.blockName==='writing-message-labels'))
 const messages=blocks.find(block=>block.blockName==='writing-messages')
 const evidence=blocks.findIndex(block=>block.blockName==='writing-evidence')
 if(example.length!==12||labels.length!==3||messages?.blockType!=='messageComparison'||evidence<0) return <Content blocks={content}/>
 const evidenceCopy=texts(blocks[evidence])
 return <div className="content-design-rework">
  <section aria-labelledby={`${id}-example`}>
   <h2 id={`${id}-example`}>{example[0]}</h2>
   <div className="cd-comparison">
    <section className="cd-sample cd-vague"><h3>{example[1]}</h3><div className="cd-example-field">{example[3]}</div><p className="cd-help">{example[4]}</p><span className="cd-action">{example[5]}</span></section>
    <section className="cd-sample cd-specific"><h3>{example[2]}</h3><p className="cd-field-name">{example[6]}</p><div className="cd-example-field">{example[7]}</div><p className="cd-help">{example[8]}</p><span className="cd-action">{example[9]}</span></section>
   </div>
   <p className="cd-caption">{example[10]}</p><p className="cd-limit">{example[11]}</p>
  </section>
  <section className="cd-rules"><Content blocks={blocks.filter(block=>block.blockName==='writing-rules')}/></section>
  <section aria-labelledby={`${id}-messages`}>
   <h2 id={`${id}-messages`}>{messages.title}</h2>
   <div className="cd-messages">{messages.items.map((item,index)=><article className="cd-message" key={item.context} aria-labelledby={`${id}-message-${index}`}>
    <h3 id={`${id}-message-${index}`}>{item.context}</h3>
    <div className="cd-message-pair"><div><p className="cd-small-label">{labels[1]}</p><p className="cd-before">{item.before}</p></div><div><p className="cd-small-label">{labels[2]}</p><p className="cd-after">{item.after}</p></div></div>
    <p className="cd-reason">{item.reason}</p>
   </article>)}</div>
  </section>
  <div className="cd-check"><Content blocks={blocks.filter(block=>block.blockName==='writing-check')}/></div>
  <details className="cd-evidence"><summary>{evidenceCopy[0]}</summary>
   {evidenceCopy.slice(1).map(text=><p key={text}>{text}</p>)}
   <Content blocks={blocks.slice(evidence+1)}/>
  </details>
 </div>
}
