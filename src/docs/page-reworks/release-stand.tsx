import {useId} from 'react'
import type {Page} from '../../payload-types'
import {Content} from '../content'
import './release-stand.css'

type Block=NonNullable<Page['content']>[number]
function texts(block:Block|undefined) {
 if(block?.blockType!=='text')return []
 return block.body.root.children.map(child=>(child.children as {text?:string}[]|undefined)?.map(node=>node.text??'').join('')??'')
}
export default function ReleaseStand({content}:{content:Page['content']}) {
 const id=useId(),blocks=content??[]
 const example=blocks.find(block=>block.blockName==='release-example')
 const stands=texts(blocks.find(block=>block.blockName==='release-stands'))
 const current=texts(blocks.find(block=>block.blockName==='release-current'))
 const evidenceIndex=blocks.findIndex(block=>block.blockName==='release-evidence')
 if(example?.blockType!=='workflowStudy'||stands.length!==7||current.length!==5||evidenceIndex<0)return <Content blocks={content}/>
 const evidence=texts(blocks[evidenceIndex])
 return <div className="release-stand-rework">
  <section className="rs-example" aria-labelledby={`${id}-example`}>
   <h2 id={`${id}-example`}>{example.title}</h2><p>{example.summary}</p>
   <ol>{example.steps.map(step=><li key={step.key}><h3>{step.title}</h3><p>{step.description}</p><p className="rs-result">{step.next}</p></li>)}</ol>
   <p className="rs-caption">{example.caption}</p>
  </section>
  <section aria-labelledby={`${id}-stands`}>
   <h2 id={`${id}-stands`}>{stands[0]}</h2>
   <dl className="rs-stands">{[1,3,5].map(index=><div key={stands[index]}><dt>{stands[index]}</dt><dd>{stands[index+1]}</dd></div>)}</dl>
  </section>
  <section className="rs-current" aria-labelledby={`${id}-current`}>
   <h2 id={`${id}-current`}>{current[0]}</h2><p className="rs-caption">{current[1]}</p>
   <div className="rs-comparison"><p>{current[2]}</p><p>{current[3]}</p></div><p>{current[4]}</p>
  </section>
  <Content blocks={blocks.filter(block=>block.blockName==='release-checks'||block.blockName==='release-links')}/>
  <details className="rs-evidence"><summary>{evidence[0]}</summary>{evidence.slice(1).map(text=><p key={text}>{text}</p>)}<p>{example.source}</p><Content blocks={blocks.slice(evidenceIndex+1)}/></details>
 </div>
}
