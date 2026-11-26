'use client'
import {useRef,useState} from 'react'
import {decisionText,inkOn,type ColorReview} from './color-discussion'
import './color-review.css'

type Props={review:ColorReview;send?:(text:string)=>Promise<'accepted'|'rejected'>;stale?:boolean;inactiveMessage?:string}
export function ColorReviewCard({review,send,stale=false,inactiveMessage}:Props){
  const [choice,setChoice]=useState(''),[note,setNote]=useState('')
  const [phase,setPhase]=useState<'editing'|'sending'|'sent'|'unknown'|'copied'|'copy-error'|'rejected'>('editing')
  const [error,setError]=useState('')
  const locked=phase==='sending'||phase==='sent'||phase==='unknown'||stale
  const pending=useRef(false)
  const {discussion}=review
  function edit(){setError('');if(phase==='copied'||phase==='copy-error'||phase==='rejected')setPhase('editing')}
  async function deliver(){
    if(pending.current||locked)return
    let text:string
    try{text=decisionText(review,{choice,note})}catch(e){setError((e as Error).message);return}
    if(!send){try{await navigator.clipboard.writeText(text);setPhase('copied')}catch{setPhase('copy-error')}return}
    pending.current=true;setPhase('sending')
    try{const result=await send(text);setPhase(result==='rejected'?'rejected':'sent')}catch{setPhase('unknown')}finally{pending.current=false}
  }
  return <section className="color-review" aria-label="Farben gemeinsam klären">
    <p className="color-review-kicker">{discussion.system} · {discussion.scope}</p>
    <h2>{discussion.question}</h2>
    <p className="color-review-source">{discussion.source}</p>
    {stale&&<p role="alert" className="color-review-notice">{inactiveMessage??'Der Vergleich wurde ersetzt. Bitte die aktuelle Karte im Gespräch verwenden.'}</p>}
    <fieldset disabled={locked}><legend>Welche Richtung verfolgen wir?</legend>
      <div className="color-review-variants">{discussion.variants.map(v=><label key={v.id} className="color-review-variant" data-selected={choice===v.id}>
        <span className="color-review-option"><input type="radio" name={'color-'+review.snapshot} value={v.id} checked={choice===v.id} onChange={()=>{setChoice(v.id);edit()}}/><strong>{v.title}</strong></span>
        <span className="color-review-preview" aria-label="Beispiel: Formular mit Fehler und primärer Handlung">
          <span className="color-review-field">E-Mail-Adresse <span aria-hidden="true">*</span></span>
          <span className="color-review-input" style={{borderColor:v.error}}>name@</span>
          <span className="color-review-error" style={{color:v.error}}><span aria-hidden="true">!</span> Bitte eine vollständige E-Mail-Adresse eingeben.</span>
          <span className="color-review-action" style={{backgroundColor:v.primary,color:inkOn(v.primary)}}>Speichern</span>
        </span>
        <span className="color-review-values">Handlung {v.primary} · Fehler {v.error}</span><span>{v.explanation}</span>
      </label>)}</div>
      <div className="color-review-other">{[['change','Anders lösen'],['open','Noch offen']].map(([value,label])=><label key={value}><input type="radio" name={'color-'+review.snapshot} value={value} checked={choice===value} onChange={()=>{setChoice(value);edit()}}/>{label}</label>)}</div>
      <label className="color-review-note">{choice==='change'?'Gewünschte Änderung':'Anmerkung (optional)'}<textarea value={note} maxLength={600} rows={2} onChange={e=>{setNote(e.target.value);edit()}}/></label>
    </fieldset>
    <p className="color-review-boundary">Die Auswahl gilt für diesen Gesprächsstand. Im CMS wird nichts gespeichert oder veröffentlicht.</p>
    {error&&<p role="alert">{error}</p>}
    <button className="color-review-submit" type="button" disabled={locked||!choice||(choice==='change'&&!note.trim())} onClick={deliver}>{phase==='sending'?'Wird übergeben …':send?'Ins Gespräch übernehmen':'Ergebnis kopieren'}</button>
    <div role="status" className="color-review-feedback">
      {phase==='sent'&&'Vom Chat-Werkzeug angenommen. Der Agent kann mit diesem Ergebnis weiterarbeiten.'}
      {phase==='copied'&&'Kopiert. Füge das Ergebnis in dein Gespräch ein.'}
      {phase==='rejected'&&'Das Chat-Werkzeug hat die Übergabe abgelehnt. Deine Antwort bleibt hier erhalten; du kannst sie als Text kopieren.'}
      {phase==='unknown'&&'Die Übergabe ist nicht bestätigt. Prüfe das Gespräch, bevor du das Ergebnis manuell einfügst.'}
      {phase==='copy-error'&&'Kopieren nicht möglich. Öffne den Ergebnistext und kopiere ihn manuell.'}
    </div>
    {(phase==='sent'||phase==='unknown')&&!stale&&<button className="color-review-reset" type="button" onClick={()=>{setPhase('editing');setError('')}}>Antwort überarbeiten</button>}
    {choice&&<details className="color-review-result"><summary>Ergebnistext ansehen</summary><pre>{(()=>{try{return decisionText(review,{choice,note})}catch{return 'Bitte die gewünschte Änderung ergänzen.'}})()}</pre></details>}
  </section>
}
