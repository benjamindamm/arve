import type { Page } from '../../payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { ComponentDemo } from '../demo'
import { Content } from '../content'
import { blockAnchor } from '../content-outline'
import './checkbox.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block,{blockType:'text'}>
type Node = {text?:string;children?:Node[]}
const flatten=(n:Node):string=>n.text??(n.children??[]).map(flatten).join('')
const lines=(b?:Text)=>b?.body.root.children.map(n=>flatten(n as Node))??[]
export default function CheckboxPage({content,demo}:{content:Page['content'];demo?:Page['demo']}) {
 const blocks=content??[]
 const find=(key:string)=>blocks.find((b):b is Text=>b.blockType==='text'&&b.blockName===key)
 const example=find('example'); const states=find('states')
 const [title,caption,unchecked,checked,disabled,label,reason,note]=lines(states)
 const originalIndex=blocks.findIndex(b=>b.blockName==='original')
 return <div className="checkbox-rework">
  <section id="live-beispiel">
   <h2>{lines(example)[0]}</h2>
   <ComponentDemo demoKey={demo?.key??'spartan-checkbox'} label={demo?.label??undefined} initialVariant={demo?.variant??undefined}/>
   {lines(example).slice(1).map((s,i)=><p key={i}>{s}</p>)}
  </section>
  <section id={states&&blockAnchor(states)}>
   <h2>{title}</h2><p>{caption}</p>
   <div className="checkbox-rework-states">
    {[unchecked,checked,disabled].map((heading,i)=><figure key={heading}>
     <figcaption>{heading}</figcaption>
     <div className={'checkbox-rework-option'+(i===2?' is-disabled':'')}><span className={'checkbox-rework-mark'+(i>0?' is-checked':'')} aria-hidden="true">{i>0?'✓':''}</span><span>{label}</span></div>
     {i===2&&<p className="checkbox-rework-reason">{reason}</p>}
    </figure>)}
   </div><p>{note}</p>
  </section>
  {['rules','boundaries'].map(key=>{const b=find(key);return b&&<section key={key} id={blockAnchor(b)}><RichText data={b.body}/></section>})}
  {['limits','original'].map(key=>{const b=find(key);return b&&<details key={key} id={blockAnchor(b)}><summary>{lines(b)[0]}</summary><RichText data={{...b.body,root:{...b.body.root,children:b.body.root.children.slice(1)}}}/>{key==='original'&&originalIndex>=0&&<Content blocks={blocks.slice(originalIndex+1)}/>}</details>})}
 </div>
}
