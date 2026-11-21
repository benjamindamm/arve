'use client'
import { useId, useState } from 'react'
import type { Page } from '../../payload-types'
import { RichText } from '../rich-text'
import { Content } from '../content'
import { blockAnchor } from '../content-outline'
import './formulare-validierung.css'

type Block = NonNullable<Page['content']>[number]
type Text = Extract<Block, {blockType:'text'}>
type Child = {text?:string; children?:Child[]}
const flatten = (n:Child):string => n.text ?? (n.children ?? []).map(flatten).join('')
const lines = (b?:Text) => b?.body.root.children.map(n=>flatten(n as Child)) ?? []
const states = ['input','error','dirty','saving','confirmed','rejected','unknown'] as const
type State = typeof states[number]
export default function FormValidation({content}:{content:Page['content']}) {
 const [state,setState] = useState<State>('input')
 const id=useId()
 const blocks=content ?? []
 const texts=blocks.filter((b):b is Text=>b.blockType==='text')
 const find=(key:string)=>texts.find(b=>b.blockName===key)
 const [title,selector,caption,label,help,actions]=lines(find('example'))
 const [phaseTitle,...phaseLines]=lines(find('phases'))
 const [stateLabel,value,message,primary,secondary,...notes]=lines(find('state-'+state))
 const phase=state==='saving'||state==='unknown'||state==='rejected'?2:state==='confirmed'?3:state==='error'?1:0
 const original=blocks.slice(blocks.findIndex(b=>b.blockName==='contract')+1)
 const source=find('sources'); const contract=find('contract')
 return <div className="validation-rework">
  {['goals','example-scope'].map(key=>{const block=find(key); return block&&<section id={blockAnchor(block)} key={key}><RichText data={block.body}/></section>})}
  <section id={find('example') && blockAnchor(find('example')!)} className="validation-example">
   <div className="validation-state-select"><label htmlFor={`${id}-state`}>{selector}</label><select id={`${id}-state`} value={state} onChange={e=>setState(e.target.value as State)} aria-controls={`${id}-preview`}>{states.map(key=><option value={key} key={key}>{lines(find('state-'+key))[0]}</option>)}</select></div>
   <figure>
    <div className="validation-stage" id={`${id}-preview`}>
     <div className="validation-phases" aria-label={phaseTitle}>{[0,1,2,3].map(i=><div key={i} className={i===phase?'is-current':''} aria-current={i===phase?'step':undefined}><span className="validation-number" aria-hidden="true">{i+1}</span><strong>{phaseLines[i*2]}</strong><p>{phaseLines[i*2+1]}</p></div>)}</div>
     <div className="validation-form">
      <p className="validation-state-label">{stateLabel}</p><h2>{title}</h2>
      <label htmlFor={`${id}-name`}>{label}</label>
      <input id={`${id}-name`} readOnly value={value ?? ''} aria-invalid={state==='error'||undefined} aria-describedby={`${id}-help${state==='error'?` ${id}-message`:''}`} />
      <p className="validation-help" id={`${id}-help`}>{help}</p>
      <div className={`validation-message validation-message-${state}`} id={`${id}-message`}><strong>{message}</strong>{notes.map((note,i)=><p key={i}>{note}</p>)}</div>
      <div className="validation-actions" role="group" aria-label={actions}>{primary&&<span className={`validation-primary ${state==='saving'?'is-unavailable':''}`}>{primary}</span>}{secondary&&<span className="validation-secondary">{secondary}</span>}</div>
     </div>
    </div><figcaption>{caption}</figcaption>
   </figure>
  </section>
  {['rules','connections'].map(key=>{const b=find(key); return b&&<section id={blockAnchor(b)} key={key}><RichText data={b.body}/></section>})}
  {source&&<details id={blockAnchor(source)}><summary>{lines(source)[0]}</summary><RichText data={{...source.body,root:{...source.body.root,children:source.body.root.children.slice(1)}}}/></details>}
  {contract&&<details id={blockAnchor(contract)}><summary>{lines(contract)[0]}</summary><RichText data={{...contract.body,root:{...contract.body.root,children:contract.body.root.children.slice(1)}}}/><Content blocks={original}/></details>}
 </div>
}
