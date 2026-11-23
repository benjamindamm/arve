'use client'

import { createElement, useId, useState } from 'react'
import type { Page } from '../../payload-types'
import { Content } from '../content'
import { RichText } from '../rich-text'
import { blockAnchor } from '../content-outline'
import { sitePath } from '../site-path'
import showcase from '../icons-showcase.json'
import './icons.css'

type Block = NonNullable<Page['content']>[number]
function Icon({ id = 'search', size = 24, stroke = 2 }: { id?: string; size?: number; stroke?: number }) {
  const icon = showcase.icons.find(i => i.id === id)!
  return <svg viewBox={icon.viewBox} width={size} height={size} style={{width:size,height:size}} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {icon.nodes.map((node,i)=>createElement(node.tag,{...node.attrs,key:i}))}
  </svg>
}

export default function IconsPage({ content }: { content: Page['content'] }) {
  const [open, setOpen] = useState(false)
  const [long, setLong] = useState(false)
  const [boxes, setBoxes] = useState(true)
  const [activated, setActivated] = useState(false)
  const [query, setQuery] = useState('')
  const hintId = useId(), queryId = useId()
  const blocks = content ?? []
  const byName = new Map(blocks.map(b=>[b.blockName,b]))
  if (!byName.has('icon-start')) return <Content blocks={blocks}/>
  const render = (key:string) => {const b=byName.get(key);return b?<Content blocks={[b]}/>:null}
  const text = (key:string,part:'intro'|'rest'|'scope') => {
    const b=byName.get(key);if(b?.blockType!=='text')return null
    const children=part==='intro'?b.body.root.children.slice(0,2):part==='scope'?b.body.root.children.slice(1):b.body.root.children.slice(2).filter(n=>n.type!=='list')
    return <RichText data={{...b.body,root:{...b.body.root,children}}}/>
  }
  const anchor = (key:string) => {const b=byName.get(key);return b?blockAnchor(b):undefined}
  const keys=['icon-start','icon-labels','icon-sizes','icon-strokes','icon-alignment','icon-meaning','icon-status','icon-adaptation','icon-sources','icon-platforms','icon-checks','icon-links','original']
  const extra=blocks.filter(b=>!keys.includes(b.blockName??''))
  const matches=showcase.icons.filter(i=>`${i.label} ${i.use} ${i.id}`.toLocaleLowerCase('de').includes(query.trim().toLocaleLowerCase('de')))
  const original=byName.get('original')
  const label = open ? long?'Hinweis zur gewählten E-Mail-Adresse ausblenden':'Hinweis ausblenden' : long?'Hinweis zur gewählten E-Mail-Adresse anzeigen':'Hinweis anzeigen'
  return <div className="icons-rework">
    <div className="ic-scope" id={anchor('icon-start')}>{text('icon-start','scope')}</div>
    <section id={anchor('icon-labels')}>
      {text('icon-labels','intro')}
      <div className="ic-label-comparison">
        <figure><figcaption>Mit sichtbarem Text</figcaption><div className="ic-action-context"><strong>Kontaktangaben</strong><button type="button" aria-expanded={open} aria-controls={hintId} onClick={()=>setOpen(!open)}><Icon id="info" size={16}/><span>{label}</span></button></div></figure>
        <figure><figcaption>Ohne sichtbaren Text</figcaption><div className="ic-action-context"><strong>Kontaktangaben</strong><button className="ic-icon-button" type="button" aria-label={open?'Hinweis ausblenden':'Hinweis anzeigen'} aria-expanded={open} aria-controls={hintId} onClick={()=>setOpen(!open)}><Icon id="info" size={16}/></button></div></figure>
      </div>
      <p className="ic-hint" id={hintId} hidden={!open}>Die Taste öffnet diesen Beispielhinweis. Es werden keine Daten geändert.</p>
      <fieldset className="ic-controls"><legend>Beschriftung vergleichen</legend><label><input type="checkbox" checked={long} onChange={e=>setLong(e.target.checked)}/>Lange Beschriftung</label></fieldset>
      {text('icon-labels','rest')}
    </section>
    <section id={anchor('icon-sizes')}>
      {text('icon-sizes','intro')}
      <dl className="ic-size-list">{showcase.sizes.map(s=><div key={s.px}><dt><strong>{s.px} px</strong><span>{s.use}</span></dt><dd><Icon size={s.px}/><span>Kontakte suchen</span></dd></div>)}</dl>
      {text('icon-sizes','rest')}
    </section>
    <section id={anchor('icon-strokes')}>
      {text('icon-strokes','intro')}
      <div className="ic-stroke-comparison">{showcase.strokes.map(s=><figure key={s.width}>
        <figcaption><strong>{s.label}</strong><span>Strichwert {s.width}</span></figcaption>
        <div className="ic-stroke-original"><Icon size={24} stroke={s.width}/></div><span className="ic-probe-label">24 px</span>
        <div className="ic-stroke-detail"><Icon size={48} stroke={s.width}/></div><span className="ic-probe-label">Detail · 2×</span>
      </figure>)}</div>
      {text('icon-strokes','rest')}
    </section>
    <section id={anchor('icon-alignment')}>
      {text('icon-alignment','intro')}
      <fieldset className="ic-controls"><legend>Geometrie vergleichen</legend><label><input type="checkbox" checked={boxes} onChange={e=>setBoxes(e.target.checked)}/>Zeichenflächen markieren</label></fieldset>
      <div className="ic-geometry">{[['search','Lupe'],['arrow-right','Pfeil'],['info','Information']].map(([id,label])=><figure key={id}><div className="ic-geometry-stage"><span className="ic-icon-box" data-marked={boxes}><Icon id={id}/></span></div><figcaption>{label}<span>24 × 24 px</span></figcaption></figure>)}
        <figure><div className="ic-geometry-stage"><button className="ic-icon-button" type="button" aria-label="Beispielaktion auslösen" onClick={()=>setActivated(true)}><Icon id="info" size={16}/></button></div><figcaption>Aktive Fläche<span>44 × 44 px · Icon 16 px</span></figcaption></figure>
      </div>
      <p role="status" className="ic-note">{activated?'Beispielaktion ausgelöst.':'Die aktive Fläche lässt sich auch neben dem kleinen Zeichen auslösen.'}</p>
      {text('icon-alignment','rest')}
    </section>
    <section id={anchor('icon-meaning')}>
      {text('icon-meaning','intro')}
      <label className="ic-search-label" htmlFor={queryId}>Zeichen in dieser Auswahl finden</label><input className="ic-search" id={queryId} type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Zum Beispiel: Datei, Hinweis, search"/>
      <p className="ic-note" role="status">{matches.length} von {showcase.icons.length} Zeichen</p>
      <ul className="ic-catalogue">{matches.map(i=><li key={i.id}><Icon id={i.id} size={20}/><div><strong>{i.label}</strong><span>{i.use}</span><code>{i.id}</code></div><a href={sitePath(`/handbook/icons/lucide/${i.id}.svg`)} download aria-label={`SVG für ${i.label} herunterladen`}>SVG</a></li>)}</ul>
      {!matches.length&&<p>Kein passendes Zeichen in dieser Auswahl. Versuche einen anderen Begriff.</p>}
    </section>
    <section id={anchor('icon-status')}>
      {text('icon-status','intro')}
      <div className="ic-status-examples">
        <div><Icon id="circle-check" size={20}/><span><strong>Gespeichert</strong><span>Die Änderung wurde bestätigt.</span></span></div>
        <div><Icon id="triangle-exclamation-point" size={20}/><span><strong>Speichern fehlgeschlagen</strong><span>Deine Eingaben bleiben erhalten.</span></span></div>
        <div className="ic-decorative"><Icon id="sparkles" size={20}/><span><strong>Dein Arbeitsbereich</strong><span>Dekoratives Zeichen · keine zusätzliche Aussage</span></span></div>
      </div>
      {text('icon-status','rest')}
    </section>
    {render('icon-adaptation')}
    <details className="ic-details"><summary>Quellen, Varianten und Prüfungen</summary>
      {render('icon-sources')}
      <p><a href={sitePath('/handbook/icons/lucide/LICENSE.txt')}>Vollständige Lizenzhinweise</a> · <a href={sitePath('/handbook/icons/lucide/provenance.json')}>Assetquellen und Prüfsummen</a></p>
      <p><a href={sitePath('/handbook/icons/lucide/figma-references.json')}>Figma-Zuordnung der Beispielzeichen</a></p>
      {render('icon-platforms')}{render('icon-checks')}
    </details>
    {original?.blockType==='study'&&<details className="ic-details" id={blockAnchor(original)}><summary>Frühere Studie · historischer Stand</summary><p>{original.explanation}</p><p>{original.source}</p></details>}
    {render('icon-links')}<Content blocks={extra}/>
  </div>
}
