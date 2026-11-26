'use client'
import {useSyncExternalStore,type ReactNode} from 'react'
import type {Editorial} from './editorial'
import './editorial.css'
const key='arve-editorial-mode'
function subscribe(fn:()=>void){window.addEventListener('arve-editorial-mode',fn);window.addEventListener('storage',fn);return()=>{window.removeEventListener('arve-editorial-mode',fn);window.removeEventListener('storage',fn)}}
function read(){try{return localStorage.getItem(key)==='1'}catch{return false}}
function write(value:boolean){try{localStorage.setItem(key,value?'1':'0')}catch{}window.dispatchEvent(new Event('arve-editorial-mode'))}
export function EditorialBadge({editorial,compact=false}:{editorial:Editorial;compact?:boolean}){
 return <span className={'editorial-badge'+(compact?' editorial-badge-small':'')} data-status={editorial.status??'unassigned'} title={editorial.label}><i aria-hidden="true"/>{editorial.label}</span>
}
export function EditorialPage({editorial,children,className='',as:Tag='article',demo=false,showModeControl=true}:{editorial:Editorial;children:ReactNode;className?:string;as?:'article'|'section';demo?:boolean;showModeControl?:boolean}){
 const mode=useSyncExternalStore(subscribe,read,()=>false)
 return <Tag className={'editorial-page '+className} data-status={editorial.status??'unassigned'} data-editorial-mode={mode}>
  <div className="editorial-bar"><span><small>{demo?'Demo · redaktioneller Stand':'Redaktioneller Stand'}</small><EditorialBadge editorial={editorial}/></span>{showModeControl&&<EditorialModeControl/>}</div>
  {(editorial.note||editorial.owner)&&<div className="editorial-context">{editorial.note&&<p><strong>{editorial.status==='clarify'?'Offen:':'Redaktion:'} </strong>{editorial.note}</p>}{editorial.owner&&<p>Zuständig: {editorial.owner}</p>}</div>}
  {children}
 </Tag>
}

export function EditorialModeControl(){const mode=useSyncExternalStore(subscribe,read,()=>false);return <label className="editorial-toggle"><input type="checkbox" checked={mode} onChange={e=>write(e.target.checked)}/>Redaktionsmodus</label>}
