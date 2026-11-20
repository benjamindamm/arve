'use client'
import {useId,useState} from 'react'
import type {Page} from '../../payload-types'
import {Content} from '../content'
import './auswahl-und-suche.css'
type Block=NonNullable<Page['content']>[number]
function texts(block:Block|undefined):string[]{return block?.blockType==='text'?block.body.root.children.map(c=>(c.children as {text?:string}[]|undefined)?.map(n=>n.text??'').join('')??''):[]}
function Demo({kind,heading,copy}:{kind:number;heading:string[];copy:string[]}){
 const id=useId(),[value,setValue]=useState(''),[confirmed,setConfirmed]=useState(''),[query,setQuery]=useState('')
 const options=copy.slice(1,4),shown=options.filter(o=>o.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
 return <section className="as-card"><h3>{heading[0]}</h3><p>{heading[1]}</p>
  {kind===1?<div className="as-controls"><label htmlFor={id}>{copy[0]}</label><select id={id} value={value} onChange={e=>setValue(e.target.value)}><option value="">{copy[11]}</option>{options.map(o=><option key={o}>{o}</option>)}</select></div>:<>
   {kind===2&&<div className="as-controls"><label htmlFor={`${id}-search`}>{copy[4]}</label><input id={`${id}-search`} type="search" value={query} onChange={e=>setQuery(e.target.value)}/></div>}
   <fieldset><legend>{copy[0]}</legend>{shown.map(o=><label className="as-option" key={o}><input type="radio" name={id} checked={value===o} onChange={()=>setValue(o)}/>{o}</label>)}{shown.length===0&&<p role="status">{copy[5]}</p>}</fieldset>
  </>}
  <div className="as-outcome"><p>{copy[6]}: <strong>{value||copy[7]}</strong></p><button type="button" disabled={!value} onClick={()=>setConfirmed(value)}>{copy[8]}</button><p role="status">{copy[9]}: <strong>{confirmed||copy[10]}</strong></p></div>
 </section>
}
export default function Selection({content}:{content:Page['content']}){
 const blocks=content??[],get=(name:string)=>texts(blocks.find(b=>b.blockName===name)),intro=get('selection-intro'),demo=get('selection-demo'),evidence=get('selection-evidence')
 if(demo.length!==14||intro.length!==2)return <Content blocks={content}/>
 return <div className="selection-rework"><section><h2>{intro[0]}</h2><p>{intro[1]}</p><div className="as-comparison">{['selection-visible','selection-select','selection-search'].map((name,kind)=><Demo key={name} kind={kind} heading={get(name)} copy={demo}/>)}</div><p className="as-caption">{demo[12]}</p><p className="as-caption">{demo[13]}</p></section>
 {['selection-rules','selection-states'].map(name=>{const lines=get(name);return <section className="as-reading" key={name}><h2>{lines[0]}</h2>{lines.slice(1).map(p=><p key={p}>{p}</p>)}</section>})}
 <Content blocks={blocks.filter(b=>b.blockName==='selection-next')}/>
 <details className="as-evidence"><summary>{evidence[0]}</summary>{evidence.slice(1).map(p=><p key={p}>{p}</p>)}<Content blocks={blocks.slice(blocks.findIndex(b=>b.blockName==='selection-sources'))}/></details>
 </div>
}
