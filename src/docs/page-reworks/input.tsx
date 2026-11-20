import type { Page } from '../../payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { ComponentDemo } from '../demo'
import { Content } from '../content'
import { blockAnchor } from '../content-outline'
import './input.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block,{blockType:'text'}>
type Node = {text?:string;children?:Node[]}
const flatten=(n:Node):string=>n.text??(n.children??[]).map(flatten).join('')
const lines=(b?:Text)=>b?.body.root.children.map(n=>flatten(n as Node))??[]
export default function InputPage({content,demo}:{content:Page['content'];demo?:Page['demo']}) {
 const blocks=content??[]
 const find=(key:string)=>blocks.find((b):b is Text=>b.blockType==='text'&&b.blockName===key)
 const example=find('example'); const anatomy=find('anatomy'); const original=find('original')
 const [title,caption,label,value,help,error,emptyTitle,filledTitle,errorTitle,stateNote]=lines(anatomy)
 const originalIndex=blocks.findIndex(b=>b.blockName==='original')
 return <div className="input-rework">
  <section id="live-beispiel">
   <h2>{lines(example)[0]}</h2>
   <ComponentDemo demoKey={demo?.key??'spartan-input'} label={demo?.label??undefined} initialVariant={demo?.variant??undefined}/>
   {lines(example).slice(1).map((s,i)=><p key={i}>{s}</p>)}
  </section>
  <section id={anatomy&&blockAnchor(anatomy)}>
   <h2>{title}</h2><p>{caption}</p>
   <div className="input-rework-examples">
    {[emptyTitle,filledTitle,errorTitle].map((heading,i)=><figure key={heading}>
     <figcaption>{heading}</figcaption>
     <div className="input-rework-field"><span className="input-rework-label">{label}</span><div className={'input-rework-value'+(i===2?' has-error':'')} aria-hidden="true">{i===1?value:'\u00a0'}</div><span className="input-rework-help">{help}</span>{i===2&&<strong className="input-rework-error">{error}</strong>}</div>
    </figure>)}
   </div><p>{stateNote}</p>
  </section>
  {['rules','boundaries'].map(key=>{const b=find(key);return b&&<section key={key} id={blockAnchor(b)}><RichText data={b.body}/></section>})}
  {['limits','original'].map(key=>{const b=find(key);return b&&<details key={key} id={blockAnchor(b)}><summary>{lines(b)[0]}</summary><RichText data={{...b.body,root:{...b.body.root,children:b.body.root.children.slice(1)}}}/>{key==='original'&&original&&originalIndex>=0&&<Content blocks={blocks.slice(originalIndex+1)}/>}</details>})}
 </div>
}
