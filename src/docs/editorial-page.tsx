import {type ExternalSource} from './external-sources'
import type {ReactNode} from 'react'
import type {Editorial} from './editorial'
import './editorial.css'

export function EditorialBadge({editorial,compact=false}:{editorial:Editorial;compact?:boolean}){
 const status=editorial.status??'unassigned'
 if(compact&&status==='checked')return null
 if(compact)return <span className="editorial-dot" data-status={status} role="img" aria-label={'Redaktion: '+editorial.label} title={'Redaktion: '+editorial.label}/>
 return <span className="editorial-badge" data-status={status}><i aria-hidden="true"/>{editorial.label}</span>
}
export function EditorialPage({editorial,children,className='',as:Tag='article',demo=false,externalLinks=[]}:{externalLinks?:ExternalSource[];editorial:Editorial;children:ReactNode;className?:string;as?:'article'|'section';demo?:boolean}){
 return <Tag className={'editorial-page '+className} data-status={editorial.status??'unassigned'}>
  <div className="editorial-bar"><div className="editorial-meta"><small>{demo?'Demo · redaktioneller Stand':'Redaktioneller Stand'}</small><EditorialBadge editorial={editorial}/></div>{externalLinks.length>0&&<nav className="page-sources" aria-label="Externe Quellen">{externalLinks.map((source,index)=><a className="page-source-link" key={source.url+index} href={source.url} target="_blank" rel="noopener noreferrer" aria-label={source.label+" (öffnet in neuem Tab)"}><SourceIcon type={source.type}/><span>{source.label}</span><svg className="page-source-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3h7v7M13 3 5 11M3 5v8h8"/></svg></a>)}</nav>}</div>
  {(editorial.note||editorial.owner)&&<div className="editorial-context">{editorial.note&&<p><strong>{editorial.status==='clarify'?'Offen:':'Redaktion:'} </strong>{editorial.note}</p>}{editorial.owner&&<p>Zuständig: {editorial.owner}</p>}</div>}
  {children}
 </Tag>
}

function SourceIcon({type}:{type:ExternalSource['type']}){return <svg className="page-source-icon" viewBox="0 0 20 20" aria-hidden="true">{type==='figma'?<><circle cx="7" cy="4" r="3"/><circle cx="13" cy="4" r="3"/><circle cx="7" cy="10" r="3"/><circle cx="13" cy="10" r="3"/><path d="M4 13h6v3a3 3 0 0 1-6 0Z"/></>:type==='storybook'||type==='documentation'?<><path d="M3 3h6l1 1 1-1h6v13h-6l-1 1-1-1H3Z M10 4v13"/></>:type==='repository'?<path d="m7 5-5 5 5 5m6-10 5 5-5 5M11 3l-2 14"/>:<path d="m8 12 4-4m-5-1 2-2a3 3 0 0 1 4 4l-2 2m-2-2-2 2a3 3 0 0 0 4 4l2-2"/>}</svg>}
