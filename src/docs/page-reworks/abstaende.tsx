'use client'

import { Fragment, useState, type CSSProperties } from 'react'
import type { Page } from '../../payload-types'
import { Content } from '../content'
import { RichText } from '../rich-text'
import { blockAnchor } from '../content-outline'
import profile from '../spacing-showcase.json'
import './abstaende.css'

type Block = NonNullable<Page['content']>[number]
const rem = (step:number)=>`${step*profile.baseRem}rem`
const px = (step:number)=>step*profile.baseRem*profile.referenceRootPx
export default function SpacingPage({content}:{content:Page['content']}) {
  const [flat,setFlat]=useState(false),[compact,setCompact]=useState(false),[long,setLong]=useState(false),[marks,setMarks]=useState(true)
  const [padding,setPadding]=useState(profile.roles.find(r=>r.id==='inset')!.step),[activations,setActivations]=useState(0)
  const blocks=content??[],map=new Map(blocks.map(b=>[b.blockName,b]))
  if(!map.has('space-principles'))return <Content blocks={blocks}/>
  const anchor=(key:string)=>{const b=map.get(key);return b?blockAnchor(b):undefined}
  const render=(key:string)=>{const b=map.get(key);return b?<Content blocks={[b]}/>:null}
  const text=(key:string,part:'intro'|'rest'|'scope')=>{const b=map.get(key);if(b?.blockType!=='text')return null;return <RichText data={{...b.body,root:{...b.body.root,children:part==='intro'?b.body.root.children.slice(0,2):part==='scope'?b.body.root.children.slice(1).filter(n=>n.type!=='list'):b.body.root.children.slice(2).filter(n=>key!=='space-scale'||n.type!=='list')}}}/>}
  const density=compact?profile.density.compact:profile.density.normal
  const steps={related:flat?profile.comparisonStep:profile.roles.find(r=>r.id==='related')!.step,items:flat?profile.comparisonStep:density.itemStep,groups:flat?profile.comparisonStep:density.groupStep}
  const variables={'--sp-inset':rem(density.insetStep),'--sp-item':rem(steps.items)} as CSSProperties
  const gap=(role:keyof typeof steps,marked=false)=><div className="sp-gap" data-marked={marks&&marked} data-relation={role} style={{height:rem(steps[role])}} aria-hidden="true">{marks&&marked&&<span className="sp-dimension"><span>{px(steps[role])} px</span></span>}</div>
  const topics=[{title:'Kontakt',fields:[{label:'E-Mail-Adresse',value:'alex@example.org',help:long?'An diese Adresse senden wir wichtige Nachrichten. Wenn du sie änderst, bestätige die neue Adresse über den Link in der E-Mail.':'Für Rückfragen zu deinen Angaben.'},{label:'Telefon',value:'044 123 45 67',help:''}]},{title:'Benachrichtigungen',fields:[{label:'Produktneuigkeiten',value:'Ausgeschaltet',help:''},{label:'Sicherheitshinweise',value:'Per E-Mail',help:''}]}]
  const roles=['related','items','groups'] as const
  const known=new Set(['space-start','space-grouping','space-inset','space-principles','space-density','space-scale','space-sizes','space-targets','space-framework','space-exceptions','space-sources','space-checks','space-links',...roles.map(r=>'space-role-'+r)])
  return <div className="spacing-rework">
    <div className="sp-scope" id={anchor('space-start')}>{text('space-start','scope')}</div>
    <section id={anchor('space-grouping')}>
      {text('space-grouping','intro')}
      <fieldset className="sp-controls"><legend>Zugehörigkeit vergleichen</legend>
        <label><input type="radio" name="spacing-relationship" checked={!flat} onChange={()=>setFlat(false)}/>Nach Zugehörigkeit</label>
        <label><input type="radio" name="spacing-relationship" checked={flat} onChange={()=>{setFlat(true);setCompact(false)}}/>Überall gleich</label>
      </fieldset>
      <fieldset className="sp-controls sp-options"><legend>Beispiel anpassen</legend>
        <label><input type="checkbox" checked={marks} onChange={e=>setMarks(e.target.checked)}/>Abstände zeigen</label>
        <label><input type="checkbox" checked={compact} disabled={flat} onChange={e=>setCompact(e.target.checked)}/>Kompakt</label>
        <label><input type="checkbox" checked={long} onChange={e=>setLong(e.target.checked)}/>Lange Hilfe</label>
      </fieldset>
      <figure className="sp-relationship-figure">
        <div className="sp-scene" style={variables} data-flat={flat} data-compact={compact}>
          {topics.map((topic,t)=><Fragment key={topic.title}>{t>0&&gap('groups',true)}<section className="sp-topic"><h3>{topic.title}</h3>{topic.fields.map((field,i)=><Fragment key={field.label}>{i>0&&gap('items',t===0)}<div className="sp-unit"><span className="sp-unit-label">{field.label}</span>{gap('related',t===0&&i===0)}<span className="sp-unit-value">{field.value}</span>{field.help&&<>{gap('related')}<span className="sp-help">{field.help}</span></>}</div></Fragment>)}</section></Fragment>)}
        </div>
        <figcaption aria-live="polite">{flat?'Alle markierten Beziehungen haben denselben Abstand.':compact?'Kompakt: Die Abstufung bleibt erhalten.':'Nähe verbindet Angaben; mehr Weissraum trennt Themen.'} <span>Blau markiert nur die Abstände. Pixelangaben bei 16 px Basis.</span></figcaption>
      </figure>
      <details className="sp-explanation"><summary>Was verändert sich im Vergleich?</summary>{text('space-grouping','rest')}</details>
      <div className="sp-relationship-rules">{roles.map((role,i)=>{const b=map.get('space-role-'+role);if(b?.blockType!=='text')return null;return <section className="sp-relationship-rule" id={blockAnchor(b)} key={role}>
        <span className="sp-rule-number" aria-hidden="true">{i+1}</span><div><RichText data={{...b.body,root:{...b.body.root,children:b.body.root.children.map(n=>n.type==='heading'?{...n,tag:'h3'}:n)}}}/></div>
      </section>})}</div>
    </section>
    <section id={anchor('space-inset')}>
      {text('space-inset','intro')}
      <fieldset className="sp-controls"><legend>Innenabstand verändern</legend>{profile.paddingSteps.map(step=><label key={step}><input type="radio" name="spacing-padding" checked={padding===step} onChange={()=>setPadding(step)}/>{px(step)} px</label>)}</fieldset>
      <figure className="sp-padding-figure" style={{'--sp-padding':rem(padding)} as CSSProperties}>
        <div className="sp-padding-surface"><div className="sp-content-core"><strong>Kontakt</strong><span>alex@example.org</span></div></div>
        <div className="sp-outside-gap" style={{height:rem(8)}}><span>32 px zwischen den Flächen</span></div>
        <div className="sp-padding-surface"><div className="sp-content-core"><strong>Benachrichtigungen</strong><span>Wichtige Hinweise per E-Mail</span></div></div>
        <figcaption aria-live="polite">Getönter Bereich: {px(padding)} px Innenabstand. <span>Die Trennung zwischen den Flächen bleibt 32 px. Angaben bei 16 px Basis.</span></figcaption>
      </figure>
      <details className="sp-explanation"><summary>Innenraum und Umgebung aufeinander abstimmen</summary>{text('space-inset','rest')}</details>
    </section>
    <section id={anchor('space-principles')}>
      {text('space-principles','intro')}
      <div className="sp-order-figures">
        <figure><div className="sp-whitespace-mini"><div><strong>Kontakt</strong><span>Name</span><i/><span>E-Mail</span><i/></div><div><strong>Hinweise</strong><span>Mitteilungen</span><i/></div></div><figcaption><strong>Weissraum trennt Themen</strong><span>Die Gruppen brauchen hier keine eigene Umrandung.</span></figcaption></figure>
        <figure><div className="sp-edge-mini">{['Name','E-Mail','Telefon'].map(label=><div key={label}><span>{label}</span><i/></div>)}</div><figcaption><strong>Gemeinsame Kanten verbinden</strong><span>Gleichrangige Angaben folgen derselben Ausrichtung.</span></figcaption></figure>
      </div>
      <details className="sp-explanation"><summary>Sechs Gestaltungsregeln kurz nachschlagen</summary>{text('space-principles','rest')}</details>
    </section>
    <details className="sp-reference"><summary>Kompakte Abstände: wann sie passen</summary>{render('space-density')}</details>
    <details className="sp-reference" id={anchor('space-scale')}><summary>Werte und Skala nachschlagen</summary>
      {text('space-scale','scope')}
      <table className="sp-scale"><caption>Referenz bei 16 px Wurzelgrösse</caption><thead><tr><th>Stufe</th><th>rem</th><th>px</th><th>Grösse</th></tr></thead><tbody>{profile.steps.map(step=><tr key={step}><th scope="row">{step}</th><td>{step*profile.baseRem}</td><td>{px(step)}</td><td><span className="sp-scale-bar" style={{width:rem(step)}}/></td></tr>)}</tbody></table>
    </details>
    <details className="sp-reference"><summary>Grössen und Bedienflächen</summary>{render('space-sizes')}{render('space-targets')}
      <div className="sp-target-study"><div className="sp-target-pair" style={{gap:rem(profile.target.gapStep)}}>{['A','B'].map((name,i)=><button key={name} type="button" aria-label={`Beispielaktion ${name} auslösen`} onClick={()=>setActivations(c=>c+1)} style={{minWidth:profile.target.minPx,minHeight:profile.target.minPx}}><svg aria-hidden="true" viewBox="0 0 24 24" style={{width:`${profile.target.iconRem}rem`,height:`${profile.target.iconRem}rem`}}>{i===0?<path d="M12 5v14M5 12h14"/>:<><circle cx="12" cy="12" r="8"/><path d="M8 12h8"/></>}</svg></button>)}</div><p role="status">Aktivierungen der Beispielaktionen: {activations}</p></div>
    </details>
    <details className="sp-reference"><summary>Quellen, Ausnahmen und Prüfungen</summary>{['space-framework','space-exceptions','space-sources','space-checks'].map(key=><Fragment key={key}>{render(key)}</Fragment>)}</details>
    {render('space-links')}
    <Content blocks={blocks.filter(b=>!known.has(b.blockName??''))}/>
  </div>
}
