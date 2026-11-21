import type { Page } from '../../payload-types'
import { RichText } from '../rich-text'
import { ComponentDemo } from '../demo'
import { Content } from '../content'
import { blockAnchor } from '../content-outline'
import './switch.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block,{blockType:'text'}>
type Node = {text?:string;children?:Node[]}
const flatten=(n:Node):string=>n.text??(n.children??[]).map(flatten).join('')
const lines=(b?:Text)=>b?.body.root.children.map(n=>flatten(n as Node))??[]
function Body({block}:{block:Text}) {
 return <RichText data={{...block.body,root:{...block.body.root,children:block.body.root.children.slice(1)}}}/>
}
export default function SwitchPage({content,demo}:{content:Page['content'];demo?:Page['demo']}) {
 const blocks=content??[]
 const find=(key:string)=>blocks.find((b):b is Text=>b.blockType==='text'&&b.blockName===key)
 const example=find('example'),states=find('states'),rules=find('rules'),saving=find('saving')
 const s=lines(states), flow=lines(saving)
 const originalIndex=blocks.findIndex(b=>b.blockName==='original')
 return <div className="switch-rework">
  <section id="live-beispiel">
   {example&&<h2 id={blockAnchor(example)}>{lines(example)[0]}</h2>}
   <ComponentDemo demoKey={demo?.key??undefined} label={demo?.label??undefined} initialVariant={demo?.variant??undefined}/>
   {example&&<Body block={example}/>}
  </section>
  {states&&<section id={blockAnchor(states)}>
   <h2>{s[0]}</h2><p>{s[1]}</p>
   <div className="switch-rework-states">
    {[{title:s[3],description:s[4],on:false},{title:s[5],description:s[6],on:true},{title:s[7],description:s[8],on:false}].map((state,i)=><figure key={state.title}>
     <figcaption>{state.title}</figcaption><div className="switch-rework-setting"><span className={'switch-rework-track'+(state.on?' is-on':'')+(i===2?' is-disabled':'')} aria-hidden="true"><span/></span><strong>{s[2]}</strong></div><p>{state.description}</p>
    </figure>)}
   </div><p>{s[9]}</p>
  </section>}
  {rules&&<section id={blockAnchor(rules)}><h2>{lines(rules)[0]}</h2><ul className="switch-rework-rules">{lines(rules).slice(1).map(rule=><li key={rule}>{rule}</li>)}</ul></section>}
  {saving&&<section id={blockAnchor(saving)}><h2>{flow[0]}</h2><dl className="switch-rework-saving">{[1,3,5].map(i=><div key={i}><dt>{flow[i]}</dt><dd>{flow[i+1]}</dd></div>)}</dl><p>{flow[7]}</p></section>}
  {['limits','original'].map(key=>{const b=find(key);return b&&<details key={key} id={blockAnchor(b)}><summary>{lines(b)[0]}</summary><Body block={b}/>{key==='original'&&originalIndex>=0&&<Content blocks={blocks.slice(originalIndex+1)}/>}</details>})}
 </div>
}
