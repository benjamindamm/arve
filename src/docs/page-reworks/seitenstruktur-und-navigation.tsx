'use client'
import {useId,useState} from 'react'
import type {Page} from '../../payload-types'
import {Content} from '../content'
import './seitenstruktur-und-navigation.css'
type Node={text?:string;children?:Node[]}
const text=(n:Node):string=>n.text??n.children?.map(text).join('')??''
export default function NavigationPage({content}:{content:Page['content']}){
 const [mode,setMode]=useState(0)
 const id=useId().replace(/:/g,'')
 const blocks=content??[]
 const read=(name:string)=>{const b=blocks.find(b=>b.blockName===name);return b?.blockType==='text'?(b.body.root.children as Node[]).map(text):[]}
 const c=read('nav-example'),r=read('nav-return'),rules=read('nav-rules'),sources=read('nav-evidence')
 const choices=['nav-tabs','nav-sidebar','nav-cards'].map(read)
 if(!c.length||choices.some(c=>!c.length))return <Content blocks={content}/>
 return <div className="nav-rework">
  <h2>{c[0]}</h2>
  <div className="nav-mode" role="group" aria-label={c[1]}>{choices.map((choice,i)=><button key={i} type="button" aria-pressed={mode===i} onClick={()=>setMode(i)}>{c[i+2]}</button>)}</div>
  <figure className="nav-figure"><figcaption>{c[5]}</figcaption>
   <div className={'nav-schema nav-schema-'+mode}>
    <div className="nav-global"><small>{c[6]}</small><div><strong>{c[7]}</strong><span className="nav-active">{c[8]}</span><span>{c[9]}</span></div></div>
    <div className="nav-location"><small>{c[10]}</small><strong>{c[11]}</strong><a href={'#'+id+'-results'}>← {c[12]}</a></div>
    <div className="nav-body"><div className="nav-local"><small>{c[13]}</small><div>{c.slice(14,17).map((label,i)=><span className={i===0?'nav-active':''} key={label}>{label}{mode===2?<span aria-hidden="true"> →</span>:null}</span>)}</div></div>
     <div className="nav-main"><small>{c[17]}</small><h3>{c[18]}</h3><p>{c[19]}</p></div>
    </div>
   </div>
  </figure>
  <p className="nav-responsive">{c[20]}</p>
  <section className="nav-choice" aria-live="polite"><h3>{choices[mode][0]}</h3>{choices[mode].slice(1).map(p=><p key={p}>{p}</p>)}</section>
  <section className="nav-rules"><h2>{rules[0]}</h2><ol>{rules.slice(1).map(p=><li key={p}>{p}</li>)}</ol></section>
  <section id={id+'-results'} className="nav-return" tabIndex={-1}><h2>{r[0]}</h2><strong>{r[1]}</strong><p className="nav-context">{r[2]}</p><Content blocks={blocks.filter(b=>b.blockName==='nav-return').map(b=>b.blockType==='text'?{...b,body:{...b.body,root:{...b.body.root,children:b.body.root.children.slice(3)}}}:b)}/></section>
  <details className="nav-evidence"><summary>{sources[0]}</summary><Content blocks={blocks.filter(b=>b.blockName==='nav-evidence').map(b=>b.blockType==='text'?{...b,body:{...b.body,root:{...b.body.root,children:b.body.root.children.slice(1)}}}:b)}/></details>
 </div>
}
