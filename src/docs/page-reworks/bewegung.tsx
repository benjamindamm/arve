'use client'

import { useEffect, useId, useRef, useState, useSyncExternalStore, type CSSProperties } from 'react'
import type { Page } from '../../payload-types'
import { Content } from '../content'
import { RichText } from '../rich-text'
import { blockAnchor } from '../content-outline'
import profile from '../animation-showcase.json'
import './bewegung.css'

type Block = NonNullable<Page['content']>[number]
type Phase = 'idle'|'playing'|'paused'|'finished'
type Entry = {id:string;label:string;duration:number;easing:string;path?:string}
const query='(prefers-reduced-motion: reduce)'
const subscribe=(notify:()=>void)=>{const media=window.matchMedia(query);media.addEventListener('change',notify);return()=>media.removeEventListener('change',notify)}
const readPreference=()=>window.matchMedia(query).matches
function useReducedMotion(){return useSyncExternalStore(subscribe,readPreference,()=>false)}

function usePlayback(entries:Entry[],reduced:boolean,slow:boolean){
  const nodes=useRef<(HTMLDivElement|null)[]>([]),animations=useRef<Animation[]>([]),serial=useRef(0),phaseRef=useRef<Phase>('idle')
  const [phase,setPhase]=useState<Phase>('idle')
  const state=(next:Phase)=>{phaseRef.current=next;setPhase(next)}
  const clear=()=>{serial.current++;animations.current.forEach(a=>a.cancel());animations.current=[]}
  const position=(end:boolean)=>nodes.current.forEach(n=>{if(n)n.style.transform=end?'translateX(100%)':'translateX(0)'})
  const reset=()=>{clear();position(false);state('idle')}
  const settle=()=>{clear();position(true);state('finished')}
  const play=()=>{
    clear();position(false)
    if(reduced||readPreference()||nodes.current.some(n=>n&&!n.animate)){settle();return}
    const run=serial.current
    animations.current=entries.flatMap((entry,i)=>{const n=nodes.current[i];if(!n)return[];const a=n.animate([{transform:'translateX(0)'},{transform:'translateX(100%)'}],{id:`arve-${entry.id}`,duration:entry.duration,easing:entry.easing,fill:'forwards'});a.playbackRate=slow?profile.slowRate:1;return[a]})
    state('playing')
    void Promise.all(animations.current.map(a=>a.finished)).then(()=>{if(serial.current===run)state('finished')}).catch(()=>{/* Reset, restart and preference changes intentionally cancel the run. */})
  }
  const pause=()=>{
    if(phaseRef.current==='playing'){animations.current.forEach(a=>{if(a.playState==='running')a.pause()});state('paused')}
    else if(phaseRef.current==='paused'){animations.current.forEach(a=>{if(a.playState==='paused')a.play()});state('playing')}
  }
  useEffect(()=>{if(reduced&&phaseRef.current!=='idle')settle()},[reduced]) // A change back never starts a new run.
  useEffect(()=>()=>{serial.current++;animations.current.forEach(a=>a.cancel())},[])
  return{nodes,phase,play,pause,reset}
}

function Comparison({kind,name,entries,reduced}:{kind:string;name:string;entries:Entry[];reduced:boolean}){
  const [slow,setSlow]=useState(false)
  const run=usePlayback(entries,reduced,slow)
  const status={idle:'Bereit',playing:'Läuft',paused:'Pausiert',finished:reduced?'Direkt am Ziel – reduzierte Bewegung':'Vergleich beendet'}[run.phase]
  return <div className="am-comparison" data-kind={kind} data-phase={run.phase}>
    <div className="am-toolbar" role="group" aria-label={`${name} steuern`}>
      <button type="button" aria-label={`${name} – Start`} onClick={run.play}>Start</button>
      <button type="button" aria-label={`${name} – ${run.phase==='paused'?'Weiter':'Pause'}`} disabled={reduced||!['playing','paused'].includes(run.phase)} onClick={run.pause}>{run.phase==='paused'?'Weiter':'Pause'}</button>
      <button type="button" aria-label={`${name} – Zurücksetzen`} onClick={run.reset}>Zurücksetzen</button>
      <label><input type="checkbox" checked={slow} onChange={e=>{run.reset();setSlow(e.target.checked)}}/>Zeitlupe 4×</label>
    </div>
    <p className="am-status" role="status">{status}{slow?' · vierfach verlangsamt':''}</p>
    <div className="am-lanes">{entries.map((entry,i)=><figure className="am-lane" key={entry.id}>
      <figcaption><strong>{entry.label}</strong>{entry.path&&<svg className="am-curve" viewBox="-3 -3 106 56" aria-hidden="true"><path d="M0 0v50h100" className="am-axis"/><path d={entry.path}/></svg>}</figcaption>
      <div className="am-track" aria-hidden="true"><span className="am-goal">Ziel</span><div className="am-mover" ref={node=>{run.nodes.current[i]=node}}><span className="am-token">Kontakt</span></div></div>
    </figure>)}</div>
    <p className="am-note">Start links → Ziel rechts.{kind==='curve'?' Kleine Kurven: Zeit →, Weg ↑.':' Alle Werte sind Vergleichswerte.'}</p>
  </div>
}

export default function Motion({content}:{content:Page['content']}){
  const systemReduced=useReducedMotion()
  const [without,setWithout]=useState(false),[open,setOpen]=useState(false),[long,setLong]=useState(false),[revealMotion,setRevealMotion]=useState(false)
  const id=useId(),blocks=content??[],map=new Map(blocks.map(b=>[b.blockName,b]))
  const reduced=systemReduced||without
  useEffect(()=>{if(systemReduced)setRevealMotion(false)},[systemReduced])
  if(!map.has('anm-duration'))return <Content blocks={blocks}/>
  const anchor=(key:string)=>{const b=map.get(key);return b?blockAnchor(b):undefined}
  const text=(key:string,part:'intro'|'rest'|'scope')=>{const b=map.get(key);if(b?.blockType!=='text')return null;return <RichText data={{...b.body,root:{...b.body.root,children:part==='intro'?b.body.root.children.slice(0,2):part==='scope'?b.body.root.children.slice(1):b.body.root.children.slice(2)}}}/>}
  const render=(key:string)=>{const b=map.get(key);return b?<Content blocks={[b]}/>:null}
  const durationEntries=profile.durations.map(ms=>({id:`duration-${ms}`,label:`${ms} ms`,duration:ms,easing:profile.durationEasing}))
  const curveEntries=profile.curves.map(c=>({...c,duration:profile.curveDuration}))
  const known=new Set(['anm-start','anm-duration','anm-curve','anm-reduced','anm-choice','anm-recipes','anm-processing','anm-preferences','anm-adaptation','anm-source','anm-checks','anm-links'])
  const historical=blocks.find(b=>b.blockType==='study')
  const style={'--am-reveal-duration':`${profile.disclosure.duration}ms`,'--am-reveal-easing':profile.disclosure.easing,'--am-reveal-offset':`${profile.disclosure.offsetRem}rem`} as CSSProperties
  return <div className="animation-rework" style={style}>
    <div className="am-scope" id={anchor('anm-start')}>{text('anm-start','scope')}</div>
    {systemReduced&&<p className="am-system-note">Deine Systemeinstellung reduziert Bewegung. Die Vergleiche zeigen das Ziel direkt.</p>}
    <section id={anchor('anm-duration')}>
      {text('anm-duration','intro')}<Comparison kind="duration" name="Dauervergleich" entries={durationEntries} reduced={systemReduced}/>
      <details className="am-details"><summary>Rezept und Bedienung</summary>{text('anm-duration','rest')}</details>
    </section>
    <section id={anchor('anm-curve')}>
      {text('anm-curve','intro')}<Comparison kind="curve" name="Verlaufvergleich" entries={curveEntries} reduced={systemReduced}/>
      <details className="am-details"><summary>Verläufe gezielt einsetzen</summary>{text('anm-curve','rest')}</details>
    </section>
    <section id={anchor('anm-reduced')}>
      {text('anm-reduced','intro')}
      <fieldset className="am-options"><legend>Darstellung vergleichen</legend>
        <label><input type="checkbox" checked={without} onChange={e=>{setWithout(e.target.checked);if(e.target.checked)setRevealMotion(false)}}/>Ohne Bewegung</label>
        <label><input type="checkbox" checked={long} onChange={e=>setLong(e.target.checked)}/>Lange Inhalte</label>
      </fieldset>
      <div className="am-contact" data-reduced={reduced}>
        <div className="am-contact-header"><div><span className="am-note">Kontakt</span><strong>Alex Beispiel</strong></div><button type="button" aria-expanded={open} aria-controls={`${id}-details`} onClick={()=>{if(open){setOpen(false);setRevealMotion(false)}else{setRevealMotion(!reduced&&!readPreference());setOpen(true)}}}>{open?'Details schliessen':'Details öffnen'}</button></div>
        <div className="am-contact-panel" hidden={!open} id={`${id}-details`} data-animate={revealMotion}>
          <dl><dt>E-Mail</dt><dd>alex@example.org</dd><dt>Telefon</dt><dd>044 123 45 67</dd></dl>
          {long&&<p>Verwende für Rückfragen die angegebene E-Mail-Adresse. Wenn sich deine Kontaktangaben ändern, halte sie aktuell, damit wichtige Nachrichten dich zuverlässig erreichen.</p>}
        </div>
      </div>
      <p className="am-note">{reduced?'Direkt sichtbar – derselbe Inhalt ohne Bewegung.':`${profile.disclosure.duration} ms · einblenden und ankommen.`} Der Fokus bleibt auf der Taste.</p>
      <details className="am-details"><summary>Ablauf und reduzierte Alternative</summary>{text('anm-reduced','rest')}</details>
    </section>
    <section className="am-principles" id={anchor('anm-choice')}>
      <h2>Worauf es ankommt</h2><ul><li><strong>Zweck vor Effekt.</strong> Beziehungen sichtbar machen.</li><li><strong>Direkt reagieren.</strong> Rückmeldung nicht verzögern.</li><li><strong>Gleichwertig reduzieren.</strong> Inhalt und Bedienung erhalten.</li></ul>
    </section>
    <details className="am-reference"><summary>Auswahlregeln und weitere Anwendungen</summary>{['anm-recipes','anm-processing','anm-preferences','anm-adaptation'].map(key=><div key={key}>{render(key)}</div>)}</details>
    <details className="am-reference"><summary>Quellen und Prüfungen</summary>{render('anm-source')}{render('anm-checks')}</details>
    {historical?.blockType==='study'&&<details className="am-reference" id={blockAnchor(historical)}><summary>Frühere Studie · Archiv</summary><p>Historische Beschreibung der ursprünglichen Vorschau:</p><blockquote>{historical.explanation}</blockquote><p>{historical.source}</p></details>}
    {render('anm-links')}
    <Content blocks={blocks.filter(b=>!known.has(b.blockName??'')&&b!==historical)}/>
  </div>
}
