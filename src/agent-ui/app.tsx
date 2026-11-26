import {useEffect,useState} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from '@modelcontextprotocol/ext-apps'
import {colorReviewSchema,type ColorReview} from './color-discussion'
import {ColorReviewCard} from './color-review'

const app=new App({name:'Arve · Farbklärung',version:'1.0.0'},{})
function View(){
  const [review,setReview]=useState<ColorReview|null>(null),[latest,setLatest]=useState<ColorReview|null>(null)
  const [blocked,setBlocked]=useState(false)
  const [connected,setConnected]=useState(false),[message,setMessage]=useState('Warte auf den Farbvergleich aus dem Gespräch …')
  useEffect(()=>{
    app.ontoolresult=result=>{
      const parsed=colorReviewSchema.safeParse(result.structuredContent)
      if(!parsed.success){setBlocked(true);setMessage('Der Vergleich konnte nicht gelesen werden. Bitte die Textantwort im Gespräch verwenden.');return}
      setBlocked(false)
      setLatest(parsed.data)
      setReview(current=>current??parsed.data)
    }
    app.ontoolcancelled=()=>{setBlocked(true);setMessage('Der Aufruf wurde abgebrochen. Bitte den aktuellen Stand im Gespräch prüfen.')}
    app.connect(undefined,{timeout:10000}).then(()=>setConnected(true)).catch(()=>setMessage('Keine Chat-Verbindung. Bitte die Textantwort verwenden oder den Vergleich im Arve-Handbuch öffnen.'))
  },[])
  const send=connected&&app.getHostCapabilities()?.message?.text?async(text:string)=>{
    const result=await app.sendMessage({role:'user',content:[{type:'text',text}]},{timeout:15000})
    return result.isError?'rejected' as const:'accepted' as const
  }:undefined
  const stale=!!(review&&latest&&review.snapshot!==latest.snapshot)
  return <main>{review?<><ColorReviewCard key={review.snapshot} review={review} send={send} stale={stale||blocked} inactiveMessage={blocked?message:undefined}/>{stale&&<button className="color-review-reset" onClick={()=>setReview(latest)}>Aktuellen Vergleich öffnen</button>}{!send&&<p className="app-hint">Ohne Nachrichtenübergabe: Ergebnis kopieren und ins Gespräch einfügen.</p>}</>:<p role="status">{message}</p>}</main>
}
createRoot(document.getElementById('app')!).render(<View/> )
