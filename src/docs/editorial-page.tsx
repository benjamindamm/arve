import type {ReactNode} from 'react'
import type {Editorial} from './editorial'
import './editorial.css'

export function EditorialBadge({editorial,compact=false}:{editorial:Editorial;compact?:boolean}){
 const status=editorial.status??'unassigned'
 if(compact&&status==='checked')return null
 if(compact)return <span className="editorial-dot" data-status={status} role="img" aria-label={'Redaktion: '+editorial.label} title={'Redaktion: '+editorial.label}/>
 return <span className="editorial-badge" data-status={status}><i aria-hidden="true"/>{editorial.label}</span>
}
export function EditorialPage({editorial,children,className='',as:Tag='article',demo=false}:{editorial:Editorial;children:ReactNode;className?:string;as?:'article'|'section';demo?:boolean}){
 return <Tag className={'editorial-page '+className} data-status={editorial.status??'unassigned'}>
  <div className="editorial-bar"><span><small>{demo?'Demo · redaktioneller Stand':'Redaktioneller Stand'}</small><EditorialBadge editorial={editorial}/></span></div>
  {(editorial.note||editorial.owner)&&<div className="editorial-context">{editorial.note&&<p><strong>{editorial.status==='clarify'?'Offen:':'Redaktion:'} </strong>{editorial.note}</p>}{editorial.owner&&<p>Zuständig: {editorial.owner}</p>}</div>}
  {children}
 </Tag>
}
