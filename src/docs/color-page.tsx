'use client'
import { useState, type CSSProperties } from 'react'
import { SiteAnchor } from './site-anchor'
import type { Page } from '../payload-types'
import { Content } from './content'
import { RichText } from './rich-text'
import { blockAnchor } from './content-outline'
import { colorContrast } from './color-page-values'
import palette from './foundation-colors.json'
import './color-page.css'

type Theme = 'light'|'dark'
export function ColorPage({content, presentation='palette'}: {content:Page['content']; presentation?:'palette'|'usage'}) {
 const [theme,setTheme]=useState<Theme>('light')
 const blocks=content??[],map=new Map(blocks.map(b=>[b.blockName,b]))
 if(!map.has('col-roles'))return <Content blocks={content}/>
 const text=(key:string)=>{const b=map.get(key);return b?.blockType==='text'?<RichText data={b.body}/>:null}
 const intro=(key:string)=>{const b=map.get(key);return b?.blockType==='text'?<RichText data={{...b.body,root:{...b.body.root,children:b.body.root.children.slice(0,2)}}}/>:null}
 const heading=(key:string)=>{const b=map.get(key);return b?blockAnchor(b):undefined}
 const n=palette.neutral[theme]
 const sectionStyle={background:n.background,color:n.foreground,'--cp-surface':n.surface,'--cp-border':n.border,'--cp-muted':n.muted,'--cp-focus':n.focus} as CSSProperties
 const roleToken=(r:typeof palette.roles[number])=>r.group==='action'?'button-'+r.id:'support-'+r.id
 return <div className="color-page">
  {presentation==='palette'&&<div className="cp-intro">{(()=>{const b=map.get('col-intro');return b?.blockType==='text'?<RichText data={{...b.body,root:{...b.body.root,children:b.body.root.children.slice(1,2)}}}/>:null})()}</div>}
  {presentation==='usage'&&<section id={heading('col-roles')} className="cp-section">
   {text('col-roles')}
   <div className="cp-toolbar"><span>Beispiele ansehen</span><div className="cp-toggle" role="group" aria-label="Darstellung der Farbbeispiele">{(['light','dark'] as const).map(t=><button type="button" key={t} aria-pressed={theme===t} onClick={()=>setTheme(t)}>{t==='light'?'Hell':'Dunkel'}</button>)}</div></div>
   <div className="cp-roles" style={sectionStyle} data-theme={theme}>{[...palette.roles].sort((a,b)=>(a.group==='action'?0:1)-(b.group==='action'?0:1)).map(r=>{
    const p=r[theme]
    return <section className="cp-role-card" key={r.id} id={heading('col-role-'+r.id)}>
     <header><span className="cp-dot" style={{background:p.border}} aria-hidden="true"/><h3>{r.label}</h3><code>{roleToken(r)}</code></header>
     <p>{r.use}</p>
     <div className={'cp-example '+(r.group==='action'?'cp-action':'cp-notice')} style={{background:p.background,color:p.foreground,borderColor:p.border}}><span aria-hidden="true">{r.symbol}</span><strong>{r.example}</strong></div>
     <div className="cp-pair-values"><span><small>Fläche</small><code>{p.background}</code></span><span><small>Inhalt</small><code>{p.foreground}</code></span><span><small>Kontrast</small><strong>{colorContrast(p.foreground,p.background)}:1</strong></span></div>
    </section>
   })}</div>
   <p className="cp-caption">Aktionsbeispiele zeigen die Gestaltung. Statusmeldungen vermitteln ihre Bedeutung zusätzlich mit Symbol und Text.</p>
  </section>}
  {presentation==='palette'&&<section className="cp-section" id={heading('col-scales')}>
   {text('col-scales')}
   <div className="cp-scales">{palette.scales.map(s=><section className="cp-scale" key={s.id} id={heading('col-scale-'+s.id)}>
    <header><h3>{s.label}</h3><span>{s.anchor?'Ausgangston: '+s.sourceName:'Flächen, Text und Konturen'}</span></header>
    <div className="cp-swatches">{Object.entries(s.values).map(([step,hex])=><div className="cp-swatch" key={step}><div className="cp-chip" style={{background:hex}} aria-label={`${s.label} ${step}: ${hex}`}/><strong>{step}</strong><code>{hex}</code></div>)}</div>
   </section>)}</div>
   <div className="cp-extremes">{['#FFFFFF','#000000'].map(hex=><span key={hex}><i style={{background:hex}} aria-hidden="true"/>{hex==='#FFFFFF'?'Weiss':'Schwarz'} <code>{hex}</code></span>)}</div>
  </section>}
  {presentation==='usage'&&<section className="cp-section" id={heading('col-neutral')}>
   <div className="cp-short"><h2>Flächen, Text und Rahmen</h2><p>Neutrale Flächen gliedern Inhalte. Farbe hebt nur hervor, was Aufmerksamkeit braucht.</p></div>
   <div className="cp-neutral" style={sectionStyle}>
    <div className="cp-neutral-card" style={{background:n.surface,borderColor:n.border}}><span className="cp-eyebrow">Profil</span><h3>Deine Angaben</h3><p className="cp-muted">Zuletzt heute aktualisiert</p><div className="cp-field" style={{borderColor:n.border,background:n.background}}><strong>E-Mail-Adresse</strong><span>alex@example.ch</span></div><div className="cp-selected" style={{background:n.selected,color:n.selectedText}}><span aria-hidden="true">✓</span> Benachrichtigungen aktiviert</div></div>
    <dl>{[['Grundfläche',n.background],['Inhaltsfläche',n.surface],['Text',n.foreground],['Ergänzender Text',n.muted],['Feldgrenze',n.border],['Fokus',n.focus]].map(([label,val])=><div key={label}><dt><i style={{background:val}} aria-hidden="true"/>{label}</dt><dd><code>{val}</code></dd></div>)}</dl>
   </div>
  </section>}
  {presentation==='usage'&&<section className="cp-section" id={heading('col-layers')}>
   {intro('col-layers')}
   <div className="cp-layer-stage" style={sectionStyle}><div className="cp-layer-base" style={{background:n.surface}}><strong>Inhaltsfläche</strong><p className="cp-muted">Deine gespeicherten Ansichten</p><div className="cp-layer-menu" style={{background:theme==='light'?'#FFFFFF':'#404040',borderColor:n.border}}><strong>Überlagernde Fläche</strong><span>Ansicht bearbeiten</span><span>Ansicht duplizieren</span></div><div className="cp-layer-neighbor">Benachbarter Inhalt bleibt darunter sichtbar.</div></div></div>
  </section>}
  {presentation==='usage'&&<section className="cp-section" id={heading('col-highlights')}>
   {text('col-highlights')}
   <div className="cp-context" style={sectionStyle}><strong>Dokumente</strong><p className="cp-muted">Zuletzt heute aktualisiert · 3 Einträge</p><span style={{color:palette.roles[0][theme].border,textDecoration:'underline'}}>Dokumente ansehen →</span><div className="cp-selected" style={{background:n.selected,color:n.selectedText}}>✓ Jahresübersicht ausgewählt</div></div>
  </section>}
  {presentation==='usage'&&<section className="cp-section" id={heading('col-states')}>
   <div className="cp-short"><h2>Interaktion und Status trennen</h2><p>Hover und Gedrückt gehören zur Handlung. Fokus bleibt auch bei einem Fehler sichtbar.</p></div>
   <div className="cp-state-examples" style={sectionStyle}><div className="cp-state-row">{(['background','hover','active'] as const).map((state,i)=><figure key={state}><figcaption>{['Standard','Hover','Gedrückt'][i]}</figcaption><div className="cp-state-button" style={{background:palette.roles[0][theme][state],color:palette.roles[0][theme].foreground}}>Speichern</div><code>{palette.roles[0][theme][state]}</code></figure>)}</div>
    <div className="cp-error-example"><span>E-Mail-Adresse · Fokus und Fehler</span><div className="cp-error-field" style={{background:n.background,borderColor:palette.roles[5][theme].border,outlineColor:n.focus}}>alex.example.ch</div><strong style={{color:palette.roles[5][theme].foreground}}><span aria-hidden="true">× </span>Ergänze das @ in der Adresse.</strong></div>
    <div className="cp-disabled"><span aria-disabled="true">Speichern</span><p>Ergänze zuerst die E-Mail-Adresse.</p></div>
   </div>
  </section>}
  <details className="cp-evidence" id={heading('col-evidence')}><summary>Herkunft, Werte und Kontrastprüfung</summary>{text('col-evidence')}<p><a href="https://flatuicolors.com/palette/defo">Flat UI Palette v1</a> · <a href="https://www.carbondesignsystem.com/building-blocks/foundations/color/overview">Carbon: Farbe und Rollen</a></p><h3>Vollständige Rollenwerte</h3>{palette.roles.map(r=><div key={r.id}>{text('col-role-'+r.id)}</div>)}{text('col-neutral')}{text('col-states')}<p>Geltungsbereich: {palette.scope}</p></details>
  <SiteAnchor className="cp-next" href={presentation==='palette'?'/systems/shadcn/themes-und-zustaende':'/systems/shadcn/farben'}>{presentation==='palette'?'Farben anwenden: Themes und visuelle Zustände →':'Zur Farbpalette →'}</SiteAnchor>
 </div>
}
