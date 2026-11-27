'use client'

import {NativeSelect} from '../native-select'
import {useId,useRef,useState,type FormEvent} from 'react'
import type {Page} from '../../payload-types'
import {RichText} from '../rich-text'
import {Content} from '../content'
import {blockAnchor} from '../content-outline'
import './formulare-validierung.css'

type Text=Extract<NonNullable<Page['content']>[number],{blockType:'text'}>
type Field='name'|'email'
type Response='pending'|'confirmed'|'rejected'|'unknown'
const flatten=(n:any):string=>n.text??n.children?.map(flatten).join('')??''
export default function FormValidation({content}:{content:Page['content']}){
 const id=useId(),blocks=content??[]
 const find=(key:string)=>blocks.find((b):b is Text=>b.blockType==='text'&&b.blockName===key)
 const lines=(key:string)=>find(key)?.body.root.children.map(flatten)??[]
 const render=(key:string)=>{const b=find(key);return b?<Content blocks={[b]}/>:null}
 const [values,setValues]=useState({name:'',email:'',note:''})
 const [errors,setErrors]=useState<Partial<Record<Field,string>>>({})
 const [response,setResponse]=useState<Response>('confirmed'),[result,setResult]=useState<Response|null>(null)
 const [attempted,setAttempted]=useState(false)
 const summary=useRef<HTMLDivElement>(null),status=useRef<HTMLDivElement>(null)
 const nameInput=useRef<HTMLInputElement>(null),emailInput=useRef<HTMLInputElement>(null)
 const locked=result==='pending'||result==='unknown'||result==='confirmed'
 const field=(key:Field)=>key==='name'?nameInput:emailInput
 const validate=(key:Field)=>!values[key].trim()?lines('demo-'+key)[2]:key==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())?lines('demo-email')[3]:undefined
 const focusLater=(callback:()=>void)=>requestAnimationFrame(callback)
 function submit(event:FormEvent){
  event.preventDefault();if(locked)return
  setAttempted(true);const next:Partial<Record<Field,string>>={}
  for(const key of ['name','email'] as const){const error=validate(key);if(error)next[key]=error}
  setErrors(next);setResult(null)
  const keys=Object.keys(next) as Field[]
  if(keys.length){focusLater(()=>keys.length>1?summary.current?.focus():field(keys[0]).current?.focus());return}
  setResult(response);focusLater(()=>status.current?.focus())
 }
 function blur(key:Field){if(attempted&&errors[key])setErrors(prev=>({...prev,[key]:validate(key)}))}
 function reset(){setValues({name:'',email:'',note:''});setErrors({});setAttempted(false);setResult(null);focusLater(()=>nameInput.current?.focus())}
 const errorKeys=(Object.keys(errors) as Field[]).filter(key=>errors[key])
 const message=result?lines('demo-response-'+result):[]
 const archive=blocks.findIndex(b=>b.blockName==='forms-history')
 return <div className="validation-rework">
  <div className="forms-current">
   <section id={find('goals')&&blockAnchor(find('goals')!)}>{find('goals')&&<RichText data={{...find('goals')!.body,root:{...find('goals')!.body.root,children:find('goals')!.body.root.children.slice(0,3)}}}/>}</section>
   <section className="forms-example" aria-label="Interaktives Formularbeispiel">
    {render('demo')}
    <div className="forms-controls"><label htmlFor={id+'-response'}>Beispielantwort<NativeSelect id={id+'-response'} value={response} disabled={result!==null} aria-describedby={result?id+'-choice-help':undefined} onChange={e=>setResponse(e.target.value as Response)}>{(['confirmed','rejected','pending','unknown'] as const).map(r=><option key={r} value={r}>{lines('demo-response-'+r)[0]}</option>)}</NativeSelect></label><button type="button" onClick={reset}>Beispiel zurücksetzen</button></div>
    {result&&<p className="forms-choice-help" id={id+'-choice-help'}>{lines('demo-choice')[1]}</p>}
    <form className="forms-demo" noValidate onSubmit={submit} aria-label="Kontaktanfrage – lokale Simulation">
     <h3>Kontaktanfrage</h3>
     {errorKeys.length>1&&<div className="forms-error-summary" ref={summary} tabIndex={-1} aria-labelledby={id+'-errors'}><strong id={id+'-errors'}>Prüfe die Kontaktangaben</strong><ul>{errorKeys.map(key=><li key={key}><a href={'#'+id+'-'+key} onClick={e=>{e.preventDefault();field(key).current?.focus()}}>{errors[key]}</a></li>)}</ul></div>}
     <fieldset disabled={!!locked}><legend>Deine Kontaktangaben</legend>{(['name','email'] as const).map(key=>{const [label,help]=lines('demo-'+key);return <div className="forms-field" key={key}><label htmlFor={id+'-'+key}>{label}</label><input ref={field(key)} id={id+'-'+key} name={key} type={key==='email'?'email':'text'} autoComplete={key==='email'?'email':'name'} required value={values[key]} onChange={e=>{setValues(v=>({...v,[key]:e.target.value}));if(result==='rejected')setResult(null)}} onBlur={()=>blur(key)} aria-invalid={!!errors[key]} aria-describedby={id+'-'+key+(errors[key]?'-error':'-help')}/><div className="forms-feedback" aria-live="polite">{errors[key]?<p className="forms-field-error" id={id+'-'+key+'-error'}>{errors[key]}</p>:<p className="forms-help" id={id+'-'+key+'-help'}>{help}</p>}</div></div>})}</fieldset>
     <div className="forms-field"><label htmlFor={id+'-note'}>{lines('demo-note')[0]}</label><textarea id={id+'-note'} name="message" rows={3} disabled={!!locked} value={values.note} onChange={e=>{setValues(v=>({...v,note:e.target.value}));if(result==='rejected')setResult(null)}}/></div>
     {result&&<div className={'forms-result forms-result-'+result} ref={status} tabIndex={-1} role="status"><strong>{message[1]}</strong></div>}
     <button className="forms-submit" type="submit" disabled={!!locked}>{result==='confirmed'?'Annahme bestätigt':result==='pending'?'Übermittlung läuft …':result==='unknown'?'Ergebnis ungeklärt':result==='rejected'?'Erneut versuchen':'Anfrage senden'}</button>
    </form>
    {result&&<p className="forms-explanation"><strong>Zum Beispiel: </strong>{message[2]}</p>}
   </section>
   <section>{render('fields')}</section><section>{render('validation')}</section>
   {find('example-rules')&&<details className="forms-detail" id={blockAnchor(find('example-rules')!)}><summary>Warum das Beispiel so reagiert</summary>{find('goals')&&<RichText data={{...find('goals')!.body,root:{...find('goals')!.body.root,children:find('goals')!.body.root.children.slice(3)}}}/>}<RichText data={{...find('example-rules')!.body,root:{...find('example-rules')!.body.root,children:find('example-rules')!.body.root.children.slice(1)}}}/></details>}
   <section>{render('connections')}</section>
  </div>
  {find('sources')&&<details className="forms-detail"><summary>Quellen und Geltung</summary><RichText data={{...find('sources')!.body,root:{...find('sources')!.body.root,children:find('sources')!.body.root.children.slice(1)}}}/></details>}
  {archive>=0&&<details className="forms-detail"><summary>Archiv: früherer Projektpilot</summary><Content blocks={blocks.slice(archive)}/></details>}
 </div>
}
