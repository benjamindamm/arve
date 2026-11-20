import {useId} from 'react'
import type {Page} from '../../payload-types'
import {Content} from '../content'
import './technische-anbindung.css'

type Block=NonNullable<Page['content']>[number]
function texts(block:Block|undefined) {
 if(block?.blockType!=='text')return []
 return block.body.root.children.map(child=>(child.children as {text?:string}[]|undefined)?.map(node=>node.text??'').join('')??'')
}
export default function TechnischeAnbindung({content}:{content:Page['content']}) {
 const id=useId(),blocks=content??[]
 const example=texts(blocks.find(b=>b.blockName==='technical-example'))
 const flow=texts(blocks.find(b=>b.blockName==='technical-flow'))
 const sdk=texts(blocks.find(b=>b.blockName==='technical-sdk'))
 const evidenceIndex=blocks.findIndex(b=>b.blockName==='technical-evidence')
 const evidence=texts(blocks[evidenceIndex])
 if(flow.length!==10||example.length!==3||sdk.length!==3||evidenceIndex<0)return <Content blocks={content}/>
 return <div className="technical-rework">
  <section className="ta-example" aria-labelledby={`${id}-example`}><h2 id={`${id}-example`}>{example[0]}</h2><blockquote>{example[1]}</blockquote><p>{example[2]}</p></section>
  <section aria-labelledby={`${id}-flow`}><h2 id={`${id}-flow`}>{flow[0]}</h2><ol className="ta-flow">{[1,4,7].map((n,index)=><li key={flow[n]}><span className="ta-number" aria-hidden="true">{index+1}</span><h3>{flow[n]}</h3><code>{flow[n+1]}</code><p>{flow[n+2]}</p></li>)}</ol></section>
  <Content blocks={blocks.filter(b=>b.blockName==='technical-rules'||b.blockName==='technical-patterns')}/>
  <details className="ta-details"><summary>{texts(blocks.find(b=>b.blockName==='technical-files'))[0]}</summary><Content blocks={blocks.filter(b=>b.blockName==='technical-files').map(b=>b.blockType==='text'?{...b,body:{...b.body,root:{...b.body.root,children:b.body.root.children.slice(1)}}}:b)}/></details>
  <details className="ta-details"><summary>{sdk[0]}</summary><p>{sdk[1]}</p><pre><code>{sdk[2]}</code></pre></details>
  <details className="ta-details"><summary>{evidence[0]}</summary>{evidence.slice(1).map(text=><p key={text}>{text}</p>)}<Content blocks={blocks.slice(evidenceIndex+1)}/></details>
 </div>
}
