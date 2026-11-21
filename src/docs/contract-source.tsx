'use client'
import { SiteAnchor } from './site-anchor'

import { useRef, useState } from 'react'
import { CopyValue } from './copy-value'

export function ContractSource({ title, path, url, sha256, language }: { title:string;path:string;url:string;sha256:string;language:'json'|'css'|'xml' }) {
  const [source,setSource]=useState<{content:string;highlighted:boolean}|null>(null)
  const [error,setError]=useState(''), [loading,setLoading]=useState(false)
  const busy=useRef(false)
  async function load() {
    if(source || busy.current)return
    busy.current=true;setLoading(true);setError('')
    try {
      const response=await fetch(url)
      if(!response.ok)throw Error('Quelle ist nicht verfügbar.')
      const bytes=await response.arrayBuffer()
      const actual=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)),n=>n.toString(16).padStart(2,'0')).join('')
      if(actual!==sha256)throw Error('Der Quellenstand hat sich geändert. Lade die Seite neu.')
      const content=new TextDecoder('utf-8',{fatal:true}).decode(bytes)
      if(bytes.byteLength>256*1024) { setSource({content,highlighted:false});return }
      const hljs=(await import('highlight.js/lib/core')).default
      const syntax=language==='json'?await import('highlight.js/lib/languages/json'):language==='css'?await import('highlight.js/lib/languages/css'):await import('highlight.js/lib/languages/xml')
      hljs.registerLanguage(language,syntax.default)
      setSource({content:hljs.highlight(content,{language}).value,highlighted:true})
    } catch(e) { setError(e instanceof Error?e.message:'Quelle konnte nicht geladen werden.') }
    finally { busy.current=false;setLoading(false) }
  }
  return <details className="contract-source" onToggle={e=>{if(e.currentTarget.open)void load()}}>
    <summary>{title}</summary>
    <p className="contract-revision"><code>{path}</code> · <SiteAnchor href={url} download>Vollständige Datei herunterladen</SiteAnchor></p>
    {loading&&<p role="status">Quelle wird geladen …</p>}
    {error&&<div role="status"><p>{error}</p><button type="button" onClick={()=>void load()}>Erneut laden</button></div>}
    {source&&!source.highlighted&&<p className="contract-large-note">Vollständige grosse Quelldatei ohne farbliche Hervorhebung.</p>}
    {source&&<pre className="contract-code">{source.highlighted?<code dangerouslySetInnerHTML={{__html:source.content}}/>:<code>{source.content}</code>}</pre>}
    <CopyValue label="SHA-256" value={sha256}/>
  </details>
}
