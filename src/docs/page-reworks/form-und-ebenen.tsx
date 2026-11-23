'use client'

import { useState, type CSSProperties } from 'react'
import type { Page } from '../../payload-types'
import { Content } from '../content'
import { RichText } from '../rich-text'
import { blockAnchor } from '../content-outline'
import showcase from '../shape-layers-showcase.json'
import './form-und-ebenen.css'

type Block = NonNullable<Page['content']>[number]
export default function ShapePage({ content }: { content: Page['content'] }) {
  const [surface, setSurface] = useState('open')
  const [outline, setOutline] = useState(true)
  const [shadow, setShadow] = useState(true)
  const [dark, setDark] = useState(false)
  const [step, setStep] = useState(0)
  const [long, setLong] = useState(false)
  const blocks = content ?? []
  const byName = new Map(blocks.map(b => [b.blockName, b]))
  if (!byName.has('shape-start')) return <Content blocks={blocks} />
  const render = (key: string) => { const b = byName.get(key); return b ? <Content blocks={[b]} /> : null }
  const text = (key: string, part: 'intro' | 'rest') => {
    const b = byName.get(key)
    if (b?.blockType !== 'text') return null
    return <RichText data={{ ...b.body, root: { ...b.body.root, children: part === 'intro' ? b.body.root.children.slice(0, 2) : b.body.root.children.slice(2) } }} />
  }
  const anchor = (key: string) => { const b = byName.get(key); return b ? blockAnchor(b) : undefined }
  const modes = showcase.surfaceModes
  const active = modes.find(m => m.id === surface)!
  const known = new Set(['shape-start','shape-surfaces','shape-radii','shape-combination','shape-depth','shape-order','shape-states','shape-adaptation','shape-decision','shape-source','shape-checks','shape-links','original-study'])
  const original = byName.get('original-study')
  return <div className="shape-rework" style={{ '--sh-shadow': showcase.shadow } as CSSProperties}>
    <div className="sh-scope" id={anchor('shape-start')}>{text('shape-start', 'rest')}</div>
    <section id={anchor('shape-surfaces')}>
      {text('shape-surfaces', 'intro')}
      <fieldset className="sh-choices"><legend>Dieselbe Ansicht vergleichen</legend>{modes.map(m => <label key={m.id}><input type="radio" name="surface-mode" checked={surface === m.id} onChange={() => setSurface(m.id)} />{m.label}</label>)}</fieldset>
      <figure className="sh-surface-demo">
        <div className="sh-surface-stage" data-surface={surface}>
          <div className="sh-scene-heading"><strong>Profil</strong><span>Persönliche Angaben und Einstellungen</span></div>
          <div className="sh-scene-grid">
            <div className={`sh-contact sh-${surface}`}><strong>Kontaktangaben</strong><dl><dt>Name</dt><dd>Alex Beispiel</dd><dt>E-Mail</dt><dd>alex@example.org</dd></dl></div>
            <div className="sh-scene-neighbour"><strong>Benachrichtigungen</strong><span>Mitteilungen per E-Mail</span><span>Wöchentliche Zusammenfassung</span></div>
            <div className="sh-scene-activity"><strong>Letzte Änderung</strong><span>Heute · E-Mail-Adresse aktualisiert</span></div>
          </div>
        </div>
        <figcaption aria-live="polite"><strong>{active.label}</strong> — {active.rule}</figcaption>
        <p className="sh-note">Illustration · die Auswahl verändert nur die Kontaktfläche.</p>
      </figure>
      {text('shape-surfaces', 'rest')}
    </section>
    <section id={anchor('shape-radii')}>
      {text('shape-radii', 'intro')}
      <div className="sh-radii">{showcase.radii.map(r => <figure key={r.value}>
        <div className="sh-radius-box" style={{ borderRadius:r.value }} aria-hidden="true" />
        <figcaption><strong>{r.label}</strong><span>{r.use}</span></figcaption>
      </figure>)}</div>
      {text('shape-radii', 'rest')}
    </section>
    <section id={anchor('shape-combination')}>
      {text('shape-combination', 'intro')}
      <div className="sh-pairs">
        <figure><div className="sh-nested"><strong>Kontaktangaben</strong><div className="sh-field">alex@example.org</div></div><figcaption><strong>Verschachtelt</strong><span>Aussen 14 px · innen 10 px · Innenraum 24 px</span></figcaption></figure>
        <figure><div className="sh-joined-stage"><div className="sh-joined"><span>Bearbeiten</span><span>Weitere</span></div></div><figcaption><strong>Verbunden</strong><span>Rundung aussen · gerade Kante innen</span></figcaption></figure>
      </div>
      {text('shape-combination', 'rest')}
    </section>
    <section id={anchor('shape-depth')}>
      {text('shape-depth', 'intro')}
      <fieldset className="sh-choices"><legend>Darstellung verändern</legend>
        <label><input type="checkbox" checked={outline} onChange={e=>setOutline(e.target.checked)}/>Kontur</label>
        <label><input type="checkbox" checked={shadow} onChange={e=>setShadow(e.target.checked)}/>Schatten</label>
        <label><input type="checkbox" checked={dark} onChange={e=>setDark(e.target.checked)}/>Dunkler Untergrund</label>
      </fieldset>
      <figure><div className="sh-depth-stage" data-dark={dark}>
        <div className="sh-background-copy"><strong>Kontaktangaben</strong><span>Alex Beispiel</span><span>alex@example.org</span></div>
        <div className="sh-static-popover" data-outline={outline} data-shadow={shadow}><strong>Weitere Aktionen</strong><span>Kontakt bearbeiten</span><span>Kontakt teilen</span></div>
      </div><figcaption>Statische Studie · {outline?'mit':'ohne'} Kontur · {shadow?'mit':'ohne'} Schatten</figcaption></figure>
      {text('shape-depth', 'rest')}
    </section>
    <section id={anchor('shape-order')}>
      {text('shape-order', 'intro')}
      <div className="sh-step-controls" role="group" aria-label="Ablauf der Überlagerung">{['1 Inhalt','2 Menü','3 Dialog'].map((label,i)=><button type="button" key={label} aria-pressed={step===i} onClick={()=>setStep(i)}>{label}</button>)}</div>
      <figure>
        <div className="sh-order-stage" data-step={step}>
          <div className="sh-order-page"><strong>Kontaktangaben</strong><span>Alex Beispiel</span><span>alex@example.org</span><span className="sh-drawn-trigger">Weitere Aktionen ↓</span></div>
          {step===1&&<div className="sh-order-menu"><strong>Menü</strong><span>Kontakt bearbeiten</span><span>Kontakt entfernen</span></div>}
          {step===2&&<><div className="sh-drawn-scrim"/><div className="sh-order-dialog"><strong>Kontakt entfernen?</strong><p>Der Kontakt wird aus der Liste entfernt.</p><span className="sh-drawn-actions">Abbrechen · Entfernen</span></div></>}
        </div>
        <figcaption aria-live="polite">{['Nur der Seiteninhalt ist sichtbar.','Das Menü liegt über der Seite und bleibt seinem Auslöser zugeordnet.','Das Menü ist geschlossen. Der Dialog liegt vor der abgedunkelten Seite.'][step]}</figcaption>
      </figure>
      <p className="sh-note">Illustration, kein echtes Menü und kein echter Dialog. Die drei Schaltflächen wechseln nur die Zeichnung.</p>
      <details className="sh-details"><summary>Regeln für diesen Ablauf</summary>{text('shape-order', 'rest')}</details>
    </section>
    <section id={anchor('shape-states')}>
      {text('shape-states', 'intro')}
      <div className="sh-states">{['Neutral','Fokus','Fehler'].map((label,i)=><figure key={label}><figcaption>{label}</figcaption><div className={`sh-state sh-state-${i}`}>alex@example.org</div>{i===2&&<p>Diese Adresse ist bereits vergeben.</p>}</figure>)}</div>
      {text('shape-states', 'rest')}
    </section>
    <section id={anchor('shape-adaptation')}>
      {text('shape-adaptation', 'intro')}
      <fieldset className="sh-choices"><legend>Inhalt vergleichen</legend><label><input type="checkbox" checked={long} onChange={e=>setLong(e.target.checked)}/>Lange Beschriftung</label></fieldset>
      <figure className="sh-growth"><strong>{long?'Kontaktangaben für Rückfragen zur gemeinsamen Geschäftsbeziehung':'Kontaktangaben'}</strong><p>{long?'Hinterlege eine Adresse, unter der wir dich auch bei Änderungen zuverlässig erreichen. Die Fläche wächst mit dem Text; die Rundung bleibt bei 14 px.':'Hinterlege eine E-Mail-Adresse für Rückfragen.'}</p></figure>
      {text('shape-adaptation', 'rest')}
    </section>
    {render('shape-decision')}
    <details className="sh-details"><summary>Quellen, Prüfungen und offene Entscheidungen</summary>{render('shape-source')}{render('shape-checks')}</details>
    {original?.blockType==='study'&&<details className="sh-details" id={blockAnchor(original)}><summary>Frühere Studie · historischer Stand</summary><p>{original.explanation}</p><p>{original.source}</p><code>{original.revision}</code></details>}
    {render('shape-links')}
    <Content blocks={blocks.filter(b=>!known.has(b.blockName??''))}/>
  </div>
}
