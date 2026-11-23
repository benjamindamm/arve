'use client'

import { useState, type CSSProperties } from 'react'
import type { Page } from '../../payload-types'
import { Content } from '../content'
import profile from '../spacing-showcase.json'
import './abstaende.css'

type Block = NonNullable<Page['content']>[number]
const rem = (step: number) => `${step * profile.baseRem}rem`
export default function SpacingPage({ content }: { content: Page['content'] }) {
  const [compact, setCompact] = useState(false)
  const [long, setLong] = useState(false)
  const [activations, setActivations] = useState(0)
  const blocks = content ?? []
  const map = new Map(blocks.map(block => [block.blockName, block]))
  const render = (key: string) => { const block = map.get(key); if (!block) return null; if (key === 'space-scale' && block.blockType === 'text') return <Content blocks={[{ ...block, body:{ ...block.body, root:{ ...block.body.root, children:block.body.root.children.filter(node=>node.type!=='list') } } }]} />; return <Content blocks={[block]} /> }
  const density = compact ? profile.density.compact : profile.density.normal
  const variables = { '--sp-inset':rem(density.insetStep), '--sp-item':rem(density.itemStep), '--sp-group':rem(density.groupStep), '--sp-related':rem(profile.roles.find(role=>role.id==='related')!.step) } as CSSProperties
  const roles = profile.roles.map(role=>'space-role-'+role.id)
  const main = ['space-density','space-sizes','space-adaptation']
  const sources = ['space-framework','space-exceptions','space-checks','space-sources','space-review']
  const known = new Set(['space-start','space-scale','space-grouping','space-targets',...roles,...main,...sources])
  const extra = blocks.filter(block=>!known.has(block.blockName ?? ''))
  if(!map.has('space-start')) return <Content blocks={blocks}/>
  const example = (flat: boolean) => <figure className={flat?'sp-example sp-flat':'sp-example'}>
    <figcaption>{flat?'Gleichmässige Abstände':'Nach Zugehörigkeit abgestuft'}</figcaption>
    <div className="sp-groups">{['Persönliche Angaben','Kontakt'].map((title,index)=><section className="sp-group" key={title}>
      <h3>{title}</h3><div className="sp-items">{(index===0?[
        ['Name','Alex Beispiel',long?'Verwende den Namen, der auch in deinen Kontaktdaten erscheint. Die Erklärung darf mehrere Zeilen einnehmen.':'So erscheint dein Name im Profil.'],
        ['Referenz','AB-2026-124','Diese Angabe hilft bei der Zuordnung.'],
      ]:[['E-Mail-Adresse','alex@example.org','Für Nachrichten zu deinem Konto.'],['Kontaktweg','E-Mail','Du kannst diese Angabe später ändern.']]).map(([label,value,help])=><div className="sp-field" key={label}><strong>{label}</strong><span className="sp-value">{value}</span><span className="sp-help">{help}</span></div>)}</div>
    </section>)}</div>
  </figure>
  return <div className="spacing-rework">
    {render('space-start')}
    <section>{render('space-scale')}
      <dl className="sp-scale" aria-label="Showcase-Skala bei 16 Pixel Root-Schriftgrösse">{profile.steps.map(step=><div key={step}>
        <dt>Stufe {step}</dt><dd><code>{step*profile.baseRem} rem</code><span>{step*profile.baseRem*profile.referenceRootPx} px bei 16 px Basis</span></dd>
        <dd className="sp-scale-bar" aria-hidden="true"><span style={{width:rem(step)}}/></dd>
      </div>)}</dl>
    </section>
    <section id="abschnitt-abstand-nach-beziehung"><h2>Welcher Abstand passt?</h2><div className="sp-role-grid">{profile.roles.map(role=><section className="sp-role" key={role.id}>{render('space-role-'+role.id)}</section>)}</div></section>
    <section>{render('space-grouping')}
      <p className="sp-note">Statische Gestaltungsstudie · keine echten Eingabefelder. Die Werte sind eigene Showcase-Entscheidungen.</p>
      <fieldset className="sp-controls"><legend>Gruppierung vergleichen</legend><label><input type="checkbox" checked={compact} onChange={e=>setCompact(e.target.checked)}/>Kompakte Abstände</label><label><input type="checkbox" checked={long} onChange={e=>setLong(e.target.checked)}/>Mehrzeilige Hilfe</label></fieldset>
      <p className="sp-note">Aktuell: Innenabstand {rem(density.insetStep)}, zwischen Angaben {rem(density.itemStep)}, zwischen Gruppen {rem(density.groupStep)}. Innerhalb einer Angabe bleibt {rem(2)}.</p>
      <div className="sp-comparison" style={variables}>{example(false)}{example(true)}</div>
    </section>
    {main.slice(0,2).map(key=><section key={key}>{render(key)}</section>)}
    <section>{render('space-targets')}
      <div className="sp-target-study">
        <div className="sp-target-pair" style={{gap:rem(profile.target.gapStep)}}>{['A','B'].map((name,index)=><button key={name} type="button" aria-label={`Beispielaktion ${name} auslösen`} onClick={()=>setActivations(count=>count+1)} style={{minWidth:profile.target.minPx,minHeight:profile.target.minPx}}>
          <svg aria-hidden="true" viewBox="0 0 24 24" style={{width:`${profile.target.iconRem}rem`,height:`${profile.target.iconRem}rem`}}>{index===0?<><path d="M12 5v14M5 12h14"/></>:<><circle cx="12" cy="12" r="8"/><path d="M8 12h8"/></>}</svg>
        </button>)}</div>
        <p>Sichtbares Zeichen: {profile.target.iconRem} rem · aktive Fläche: mindestens {profile.target.minPx} × {profile.target.minPx} CSS-Pixel.</p>
        <p role="status">Aktivierungen der Beispielaktionen: {activations}</p>
      </div>
    </section>
    <section>{render('space-adaptation')}</section>
    <details className="sp-reference"><summary>Ausnahmen, Quellen und Prüfungen</summary>{sources.map(key=><section key={key}>{render(key)}</section>)}</details>
    {!!extra.length&&<Content blocks={extra as Block[]}/>}
  </div>
}
