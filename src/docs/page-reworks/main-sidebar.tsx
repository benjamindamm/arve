'use client'
import {useEffect,useId,useRef,useState} from 'react'
import type {Page} from '../../payload-types'
import {SiteAnchor} from '../site-anchor'
import {RichText} from '../rich-text'
import {Content} from '../content'
import {blockAnchor} from '../content-outline'
import {LayoutRuleBlock} from './layout-rule-block'
import './main-sidebar.css'
type Block=NonNullable<Page['content']>[number]
const strings=(b?:Block)=>b?.blockType==='text'?b.body.root.children.map(n=>Array.isArray(n.children)?n.children.map((c:{text?:string})=>c.text??'').join(''):''):[]

export default function MainSidebar({content}:{content:Page['content']}){
 const [compact,setCompact]=useState(false),[long,setLong]=useState(false),[longAside,setLongAside]=useState(false),[without,setWithout]=useState(false)
 const [canStick,setCanStick]=useState(false)
 const [space,setSpace]=useState({canConstrain:false,twoColumns:false})
 const previewHost=useRef<HTMLDivElement>(null)
 const container=useRef<HTMLDivElement>(null),aside=useRef<HTMLElement>(null)
 const id=useId(),blocks=content??[],map=new Map(blocks.map(b=>[b.blockName,b]))
 useEffect(()=>{
  const measure=()=>{
   const root=parseFloat(getComputedStyle(document.documentElement).fontSize),width=container.current?.getBoundingClientRect().width??0,height=aside.current?.getBoundingClientRect().height??Infinity,available=previewHost.current?.getBoundingClientRect().width??0
   const next={canConstrain:available>=28*root,twoColumns:available>=42*root}
   setSpace(previous=>previous.canConstrain===next.canConstrain&&previous.twoColumns===next.twoColumns?previous:next)
   setCanStick(!compact&&!without&&!longAside&&width>=42*root&&window.innerHeight>=50*root&&height+6*root<=window.innerHeight)
  }
  const observer=new ResizeObserver(measure)
  if(previewHost.current)observer.observe(previewHost.current)
  if(container.current)observer.observe(container.current)
  if(aside.current)observer.observe(aside.current)
  window.addEventListener('resize',measure);measure()
  return()=>{observer.disconnect();window.removeEventListener('resize',measure)}
 },[compact,without,longAside])
 if(!map.has('ms-comparison'))return <Content blocks={content}/>
 const find=(key:string)=>map.get(key)
 const e=strings(find('ms-main')),h=strings(find('ms-header')),s=strings(find('ms-sidebar')),controls=strings(find('ms-demo')),extra=strings(find('ms-long')),extraAside=strings(find('ms-sidebar-long'))
 const anchor=(key:string)=>{const b=find(key);return b?blockAnchor(b):undefined}
 const intro=(key:string)=>{const b=find(key);return b?.blockType==='text'?<RichText data={{...b.body,root:{...b.body.root,children:b.body.root.children.slice(0,1)}}}/>:null}
 const rest=(key:string)=>{const b=find(key);return b?.blockType==='text'?<RichText data={{...b.body,root:{...b.body.root,children:b.body.root.children.slice(1)}}}/>:null}
 const focusSection=(suffix:string)=>()=>{document.getElementById(id+suffix)?.focus({preventScroll:true})}
 return <div className="main-sidebar-rework">
  <section id={anchor('ms-comparison')}>
   {intro('ms-comparison')}
   <div className="ms-comparisons">{[false,true].map(narrow=><figure key={String(narrow)}>
    <figcaption><strong>{narrow?'Schmal':'Breit'}</strong><span className="ms-comparison-caption">{narrow?'Eine verständliche Reihenfolge':'Zwei klar gewichtete Bereiche'}</span></figcaption>
    <div className={'ms-map '+(narrow?'ms-map-narrow':'')} role="img" aria-label={narrow?'Schmal: 1 Kopf, 2 Navigation, 3 Hauptinhalt, 4 Zusatzinfos untereinander':'Breit: 1 Kopf und 2 Navigation über 3 Hauptinhalt mit zwei Teilen und 4 Zusatzinfos mit einem Teil der Breite'}><div className="ms-map-head"><b>1</b><span className="ms-map-name">Kopf</span></div><div className="ms-map-nav"><b>2</b><span className="ms-map-name">Navigation</span></div><div className="ms-map-main"><strong><b>3</b><span className="ms-map-name">Hauptinhalt</span></strong><span className="ms-map-detail">{narrow?'Zuerst die Aufgabe':'2 Teile der Breite'}</span></div><div className="ms-map-aside"><strong><b>4</b><span className="ms-map-name">Zusatzinfos</span></strong><span className="ms-map-detail">{narrow?'Danach die Ergänzung':'1 Teil der Breite'}</span></div></div>
   </figure>)}</div>
   <ol className="ms-map-legend" aria-label="Bereiche in beiden Schemata"><li><b>1</b> Kopf</li><li><b>2</b> Navigation</li><li><b>3</b> Hauptinhalt</li><li><b>4</b> Zusatzinfos</li></ol>
   <p className="ms-note">Wichtiges steht im Hauptbereich. Zusatzinfos folgen bei wenig Platz darunter.</p>
  </section>
  <section id={anchor('ms-demo')}>
   {intro('ms-demo')}
   <div className="ms-toolbar">
    {space.canConstrain?<div role="group" aria-label="Vorschaubreite" className="ms-width"><button type="button" aria-pressed={!compact} onClick={()=>setCompact(false)}>Verfügbare Breite</button><button type="button" aria-pressed={compact} onClick={()=>setCompact(true)}>Schmale Vorschau</button></div>:<strong className="ms-single-width">Eine Spalte</strong>}
    <p className="ms-width-note">{without?'Ohne Sidebar nutzt der Hauptinhalt die verfügbare Fläche.':!space.twoColumns?'Hier ist zu wenig Platz für zwei Spalten. Die Zusatzinfos stehen deshalb darunter.':compact?'Begrenzte Vorschau: Die Zusatzinfos folgen unter dem Hauptinhalt.':'Hauptinhalt und Zusatzinfos stehen nebeneinander.'}</p>
   </div>
   <details className="ms-tests"><summary>Inhalte verändern <span>{[long,longAside&&!without,without].filter(Boolean).length?`${[long,longAside&&!without,without].filter(Boolean).length} aktiv`:'3 Varianten'}</span></summary><fieldset className="ms-options"><legend>Varianten des Beispiels</legend><label><input type="checkbox" checked={long} onChange={e=>setLong(e.target.checked)}/>{controls[2]}</label><label><input type="checkbox" disabled={without} checked={longAside} onChange={e=>setLongAside(e.target.checked)}/>{controls[3]}</label><label><input type="checkbox" checked={without} onChange={e=>setWithout(e.target.checked)}/>{controls[4]}</label></fieldset></details>
   <div className="ms-preview-host" ref={previewHost}>
   <div className={'ms-demo '+(compact?'ms-compact':'')}>
    <div className="ms-container" ref={container}><div className="ms-shell">
     <header className="ms-header"><span>1 · Kopf</span><strong>{h[0]}</strong></header>
     <nav className="ms-nav" aria-label="Abschnitte im Layoutbeispiel"><span className="ms-label">2 · Navigation</span><SiteAnchor href={'#'+id+'-overview'} onClick={focusSection('-overview')}>{h[1]}</SiteAnchor><SiteAnchor href={'#'+id+'-next'} onClick={focusSection('-next')}>{h[2]}</SiteAnchor></nav>
     <div className="ms-columns" data-without={without}>
      <div className="ms-main"><span className="ms-label">3 · Hauptinhalt</span><h3>{e[0]}</h3><p>{e[1]}</p><section id={id+'-overview'} tabIndex={-1}><h4>{e[2]}</h4><p>{e[3]}</p></section><section id={id+'-next'} tabIndex={-1}><h4>{e[4]}</h4><p>{e[5]}</p></section>{long&&<div className="ms-extra"><h4>{extra[0]}</h4>{extra.slice(1).map(p=><p key={p}>{p}</p>)}</div>}</div>
      {!without&&<aside className="ms-aside" ref={aside} data-sticky={canStick} aria-label="Ergänzende Projektinformationen"><span className="ms-label">4 · Zusatzinfos</span><h4>{s[0]}</h4><dl><div><dt>{s[1]}</dt><dd>{s[2]}</dd></div><div><dt>{s[3]}</dt><dd>{s[4]}</dd></div></dl><h4>{s[5]}</h4><p>{s[6]}</p><h4>{s[7]}</h4><p>{s[8]}</p>{longAside&&<div className="ms-extra"><h4>{extraAside[0]}</h4>{extraAside.slice(1).map(p=><p key={p}>{p}</p>)}</div>}</aside>}
     </div>
    </div></div>
   </div></div>
   <p className="ms-status" role="status">{without?'Ohne Sidebar: eine volle Inhaltsfläche.':longAside?'Lange Zusatzinfos laufen mit dem Inhalt mit.':canStick?'Kurze Sidebar: bleibt beim Scrollen im Inhaltsbereich sichtbar.':'Sidebar im normalen Seitenfluss.'}</p>
  </section>
  {(()=>{const b=find('ms-rules');return b?.blockType==='text'?<LayoutRuleBlock block={b}/>:null})()}
  <section className="ms-choice" id={anchor('ms-choice')}>{intro('ms-choice')}{rest('ms-choice')}</section>
  <details className="ms-sources" id={anchor('ms-recipe')}><summary>Masse, Zustände und Quellen</summary>{['ms-recipe','ms-states','ms-source'].map(key=><Content key={key} blocks={find(key)?[find(key)!]:[]}/>)}<p>Weiter: <SiteAnchor href="/systems/shadcn/abstaende">Abstände und Grössen</SiteAnchor> · <SiteAnchor href="/systems/shadcn/layout/seitenrahmen">Seitenstruktur und Navigation</SiteAnchor> · <SiteAnchor href="/systems/shadcn/layout/page-layouts">Andere Seitenlayouts</SiteAnchor></p></details>
 </div>
}
