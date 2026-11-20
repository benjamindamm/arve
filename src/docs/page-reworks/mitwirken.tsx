import {useId} from 'react'
import type {Page} from '../../payload-types'
import {Content} from '../content'
import './mitwirken.css'

type Block=NonNullable<Page['content']>[number]
function texts(block:Block|undefined) {
 if(block?.blockType!=='text')return []
 return block.body.root.children.map(child=>(child.children as {text?:string}[]|undefined)?.map(node=>node.text??'').join('')??'')
}
export default function Mitwirken({content}:{content:Page['content']}) {
 const id=useId(),blocks=content??[]
 const example=texts(blocks.find(block=>block.blockName==='contribute-example'))
 const flow=blocks.find(block=>block.blockName==='contribute-flow')
 const evidenceIndex=blocks.findIndex(block=>block.blockName==='contribute-evidence')
 if(example.length!==12||flow?.blockType!=='workflowStudy'||evidenceIndex<0)return <Content blocks={content}/>
 const evidence=texts(blocks[evidenceIndex])
 return <div className="mitwirken-rework">
  <section className="mw-proposal" aria-labelledby={`${id}-example`}>
   <h2 id={`${id}-example`}>{example[0]}</h2><p className="mw-marker">{example[1]}</p>
   <dl>{[2,4,6,8,10].map(index=><div key={example[index]}><dt>{example[index]}</dt><dd>{example[index+1]}</dd></div>)}</dl>
  </section>
  <section className="mw-process" aria-labelledby={`${id}-process`}>
   <h2 id={`${id}-process`}>{flow.title}</h2><p>{flow.summary}</p>
   <ol>{flow.steps.map((step,index)=><li key={step.key}><span className="mw-number" aria-hidden="true">{index+1}</span><div><h3>{step.title}</h3><p>{step.description}</p><p className="mw-result">{step.next}</p></div></li>)}</ol>
   <p className="mw-caption">{flow.caption}</p>
  </section>
  <div className="mw-criteria"><Content blocks={blocks.filter(block=>block.blockName==='contribute-criteria')}/></div>
  <Content blocks={blocks.filter(block=>block.blockName==='contribute-handoff'||block.blockName==='contribute-links')}/>
  <details className="mw-evidence"><summary>{evidence[0]}</summary>{evidence.slice(1).map(text=><p key={text}>{text}</p>)}<p>{flow.source}</p><Content blocks={blocks.slice(evidenceIndex+1)}/></details>
 </div>
}
