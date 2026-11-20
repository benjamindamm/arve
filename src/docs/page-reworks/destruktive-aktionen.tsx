'use client'
import {useId,useRef,useState} from 'react'
import type {Page} from '../../payload-types'
import {Content} from '../content'
import './destruktive-aktionen.css'
type Block=NonNullable<Page['content']>[number]
function texts(block:Block|undefined):string[]{return block?.blockType==='text'?block.body.root.children.map(c=>(c.children as {text?:string}[]|undefined)?.map(n=>n.text??'').join('')??''):[]}
export default function DestructiveActions({content}:{content:Page['content']}){
 const blocks=content??[],get=(name:string)=>texts(blocks.find(b=>b.blockName===name)),demo=get('destructive-demo'),evidence=get('destructive-evidence')
 const id=useId(),dialog=useRef<HTMLDialogElement>(null),cancel=useRef<HTMLButtonElement>(null),trigger=useRef<HTMLButtonElement>(null)
 const [removed,setRemoved]=useState(false),[status,setStatus]=useState<'initial'|'cancelled'|'removed'>('initial')
 if(demo.length!==13)return <Content blocks={content}/>
 function open(){dialog.current?.showModal();cancel.current?.focus()}
 function close(confirm:boolean){if(confirm){setRemoved(true);setStatus('removed')}else setStatus('cancelled');dialog.current?.close();trigger.current?.focus()}
 return <div className="destructive-rework"><section className="da-example" aria-labelledby={`${id}-example`}><h2 id={`${id}-example`}>{demo[0]}</h2><p className="da-caption">{demo[1]}</p>
  <div className="da-preview">{!removed&&<div><h3>{demo[2]}</h3><p>{demo[3]}</p></div>}<p role="status">{demo[status==='removed'?11:status==='cancelled'?10:9]}</p><button ref={trigger} type="button" className={removed?'':'da-danger'} onClick={()=>{if(removed){setRemoved(false);setStatus('initial')}else open()}}>{demo[removed?12:4]}</button></div>
  <dialog ref={dialog} className="da-dialog" aria-labelledby={`${id}-title`} aria-describedby={`${id}-description`} onCancel={e=>{e.preventDefault();close(false)}} onKeyDown={e=>{if(e.key!=='Tab')return;const buttons=e.currentTarget.querySelectorAll('button');const first=buttons[0],last=buttons[buttons.length-1];if(e.shiftKey&&e.target===first){e.preventDefault();last?.focus()}else if(!e.shiftKey&&e.target===last){e.preventDefault();first?.focus()}}}>
   <h3 id={`${id}-title`}>{demo[5]}</h3><p id={`${id}-description`}>{demo[6]}</p><div className="da-actions"><button ref={cancel} type="button" onClick={()=>close(false)}>{demo[7]}</button><button className="da-danger" type="button" onClick={()=>close(true)}>{demo[8]}</button></div>
  </dialog>
 </section>
 {['destructive-rules','destructive-anatomy'].map(name=>{const lines=get(name);return <section className="da-reading" key={name}><h2>{lines[0]}</h2>{name==='destructive-rules'?<ol>{lines.slice(1).map(p=><li key={p}>{p}</li>)}</ol>:lines.slice(1).map(p=><p key={p}>{p}</p>)}</section>})}
 <Content blocks={blocks.filter(b=>b.blockName==='destructive-next')}/>
 <details className="da-evidence"><summary>{evidence[0]}</summary>{evidence.slice(1).map(p=><p key={p}>{p}</p>)}<Content blocks={blocks.slice(blocks.findIndex(b=>b.blockName==='destructive-sources'))}/></details>
 </div>
}
