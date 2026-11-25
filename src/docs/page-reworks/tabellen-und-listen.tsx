'use client'
import { SiteAnchor } from '../site-anchor'


import { useEffect, useRef, useState } from 'react'
import { RichText } from '../rich-text'
import type { Page } from '../../payload-types'
import { blockAnchor } from '../content-outline'
import { Content } from '../content'
import './tabellen-und-listen.css'

type Block = NonNullable<Page['content']>[number]
const strings = (b?: Block): string[] => b?.blockType === 'text' ? b.body.root.children.map(n => Array.isArray(n.children) ? n.children.map((c: {text?: string}) => c.text ?? '').join('') : '') : []
export default function TablesAndLists({content}: {content: Page['content']}) {
  const find = (name: string) => content?.find(b => b.blockName === name)
  const example=find('table-example'), e=strings(example), list=strings(find('list-example')), states=strings(find('table-states'))
  const rows=strings(find('table-data')).slice(1).map(s => {const [id,name,status,days]=s.split('|');return {id,name,status,days:Number(days)}})
  const [selected,setSelected]=useState<string[]>([])
  const [sort,setSort]=useState<{key:'name'|'days';desc:boolean}>({key:'name',desc:false})
  const [info,setInfo]=useState<string|null>(null), [preview,setPreview]=useState(false)
  const head=useRef<HTMLInputElement>(null)
  const all=rows.length>0&&selected.length===rows.length
  useEffect(()=>{if(head.current)head.current.indeterminate=selected.length>0&&!all},[selected,all])
  const sorted=[...rows].sort((a,b)=>{const order=sort.key==='days'?a.days-b.days:a.name.localeCompare(b.name,'de');return (sort.desc?-order:order)||a.id.localeCompare(b.id)})
  const toggle=(id:string)=>setSelected(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id])
  const sortBy=(key:'name'|'days')=>setSort(s=>({key,desc:s.key===key?!s.desc:false}))
  const section=(key:string,disclosure=false)=>{const b=find(key);if(b?.blockType!=='text')return null;return disclosure?<details id={blockAnchor(b)}><summary>{strings(b)[0]}</summary><RichText data={{...b.body,root:{...b.body.root,children:b.body.root.children.slice(1)}}}/></details>:<section id={blockAnchor(b)}><RichText data={b.body}/></section>}
  return <div className="tl-rework">
    {example&&<section id={blockAnchor(example)}><h2>{e[0]}</h2><p className="tl-note">{e[1]}</p>
      <div className="tl-toolbar"><p role="status" aria-live="polite">{selected.length} {e[12]}</p><div><button type="button" disabled={!selected.length} onClick={()=>setPreview(v=>!v)} aria-expanded={preview} aria-controls="tl-selection">{e[11]}</button><button type="button" disabled={!selected.length} onClick={()=>setSelected([])}>{e[10]}</button></div></div>
      <p className="tl-note" role="status">{e[17]} {sort.key==='name'?e[2]:e[4]} · {sort.desc?e[16]:e[15]}</p>
      <p id="tl-scroll-note" className="tl-note">{e[20]}</p>
      <div className="tl-scroll" tabIndex={0} role="region" aria-label={e[0]} aria-describedby="tl-scroll-note"><table><caption className="tl-sr">{e[0]}</caption><thead><tr><th scope="col"><input ref={head} type="checkbox" checked={all} aria-label={e[6]} onChange={()=>setSelected(all?[]:rows.map(r=>r.id))}/></th><th scope="col" aria-sort={sort.key==='name'?(sort.desc?'descending':'ascending'):'none'}><button type="button" aria-label={e[18]} onClick={()=>sortBy('name')}>{e[2]} <span aria-hidden="true">{sort.key==='name'?(sort.desc?'↓':'↑'):'↕'}</span></button></th><th scope="col">{e[3]}</th><th scope="col" aria-sort={sort.key==='days'?(sort.desc?'descending':'ascending'):'none'}><button type="button" aria-label={e[19]} onClick={()=>sortBy('days')}>{e[4]} <span aria-hidden="true">{sort.key==='days'?(sort.desc?'↓':'↑'):'↕'}</span></button></th><th scope="col">{e[5]}</th></tr></thead><tbody>{sorted.map(r=><tr key={r.id} data-selected={selected.includes(r.id)}><td><input type="checkbox" checked={selected.includes(r.id)} aria-label={`${e[7]} ${r.name}`} onChange={()=>toggle(r.id)}/></td><th scope="row">{r.name}<small>{r.id}</small></th><td><span className="tl-badge">{r.status}</span></td><td className="tl-number">{r.days}</td><td><details className="tl-row-actions" onKeyDown={event=>{if(event.key==='Escape'){event.currentTarget.open=false;event.currentTarget.querySelector('summary')?.focus()}}}><summary aria-label={`${e[8]} ${r.name}`}>···</summary><button type="button" onClick={event=>{setInfo(r.id);event.currentTarget.closest('details')?.removeAttribute('open');event.currentTarget.closest('details')?.querySelector('summary')?.focus()}}>{e[9]}</button></details></td></tr>)}</tbody></table></div>
      <div id="tl-selection" hidden={!preview} className="tl-preview"><strong>{e[21]}</strong><p>{rows.filter(r=>selected.includes(r.id)).map(r=>`${r.name} (${r.id})`).join(', ')||e[22]}</p><p>{e[14]}</p></div>
      <div className="tl-info" role="status" aria-live="polite">{info&&<><strong>{e[13]} · {rows.find(r=>r.id===info)?.name}</strong><p>{e[14]} {info}</p></>}</div>
    </section>}
    <section id={find('list-example')?blockAnchor(find('list-example')!):undefined}><h2>{list[0]}</h2><div className="tl-compare"><p>{list[1]}</p><div><p>{list[2]}</p><ul className="tl-list">{[3,5].map(i=><li key={i}><strong>{list[i]}</strong><p>{list[i+1]}</p></li>)}</ul><SiteAnchor href="/systems/shadcn/layout/page-types/detail">{list[7]} →</SiteAnchor></div></div></section>
    {section('table-rules')}
    <section id={find('table-states')?blockAnchor(find('table-states')!):undefined}><h2>{states[0]}</h2><div className="tl-states">{[1,3,5].map(i=><article key={i}><h3>{states[i]}</h3><p>{states[i+1]}</p></article>)}</div></section>
    {section('table-responsive')}{section('table-related')}{section('table-sources',true)}{section('table-limits',true)}
    <details><summary>{strings(find('table-archive-label'))[0]}</summary><Content blocks={content?.filter(b=>b.blockName?.startsWith('table-original-'))}/></details>
  </div>
}
