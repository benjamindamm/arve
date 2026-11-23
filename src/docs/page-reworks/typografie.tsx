'use client'

import { useState, type CSSProperties } from 'react'
import type { Page } from '../../payload-types'
import { Content } from '../content'
import { contractAssetUrl } from '../site-path'
import { shadcnReferenceRevision } from '../../contracts/current-reference'
import showcase from '../typography-showcase.json'
import './typografie.css'

type Block = NonNullable<Page['content']>[number]
const fontURL = (name: string) => contractAssetUrl('shadcn', 'input', 'shadcn', shadcnReferenceRevision, `assets/fonts/${name}`)
const faces = [
  ['Arve Typography Inter', 400, 'Inter-Regular.ttf', 'truetype'],
  ['Arve Typography Inter', 500, 'Inter-Medium.ttf', 'truetype'],
  ['Arve Typography Inter', 600, 'Inter-SemiBold.ttf', 'truetype'],
  ['Arve Typography Inter', 700, 'Inter-Bold.ttf', 'truetype'],
  ['Arve Typography Mono', 500, 'GeistMono-Medium.woff2', 'woff2'],
].map(([family, weight, file, format]) => `@font-face{font-family:"${family}";font-style:normal;font-weight:${weight};font-display:swap;src:url("${fontURL(String(file))}") format("${format}");}`).join('\n')
const recipe = (id: string): CSSProperties => {
  const role = showcase.roles.find(role => role.id === id)!
  return { fontSize: `${role.sizeRem}em`, lineHeight: role.lineHeight, fontWeight: role.weight,
    fontFamily: role.family === 'mono' ? 'var(--type-mono)' : 'var(--type-sans)' }
}

/** Static showcase recipes are locally authored; all explanatory rules remain CMS blocks. */
export default function Typografie({ content }: { content: Page['content'] }) {
  const [long, setLong] = useState(false)
  const [spaced, setSpaced] = useState(false)
  const [large, setLarge] = useState(false)
  const [system, setSystem] = useState(false)
  const blocks = content ?? []
  const byName = new Map(blocks.map(block => [block.blockName, block]))
  const render = (key: string) => { const block = byName.get(key); return block ? <Content blocks={[block]} /> : null }
  const roleKeys = showcase.roles.map(role => `type-role-${role.id}`)
  const mainKeys = ['type-start', 'type-combination', 'type-reading', 'type-adaptation', 'type-numbers', 'type-language-platforms']
  const sourceKeys = ['type-fonts', 'type-source-scope', 'type-checks', 'type-review']
  const known = new Set([...roleKeys, ...mainKeys, ...sourceKeys, 'type-cuts', 'type-heading-sizes', 'type-tracking'])
  const extra = blocks.filter(block => !known.has(block.blockName ?? ''))
  // Older data can still be read while the new release is not yet published.
  if (!byName.has('type-start')) return <Content blocks={blocks} />
  return <div className="type-page-rework">
    <style>{faces}</style>
    {render('type-start')}
    <section>{render('type-cuts')}
      <div className="type-cut-grid">{showcase.cuts.map(cut=><figure className="type-cut" key={cut.weight}>
        <figcaption>{cut.label} · {cut.weight}</figcaption><p style={{fontFamily:'var(--type-sans)',fontWeight:cut.weight}}>Klare Orientierung</p>
      </figure>)}</div>
    </section>
    <section id="abschnitt-rollen-im-zusammenhang" className="type-experience" aria-labelledby="type-experience-title">
      <h2 id="type-experience-title">Die Rollen im Zusammenhang</h2>
      <p className="type-note">Statische Gestaltungsstudie · die Schalter verändern nur dieses Beispiel.</p>
      <div className="type-specimen" data-spacing={spaced} data-large={large} data-system={system}>
        <h2 style={recipe('title')}>{long ? 'Kontaktangaben vor dem Bestätigen der Änderungen vollständig prüfen' : 'Angaben prüfen'}</h2>
        <p style={recipe('body')}>Prüfe deine Kontaktangaben, bevor du die Änderungen bestätigst.</p>
        {long && <p style={recipe('body')}>Längere Erklärungen bleiben Lesetext. Sie erhalten einen eigenen Absatz, statt als kleiner Hinweis an eine einzelne Angabe gedrängt zu werden.</p>}
        <h3 style={recipe('section')}>Kontaktangaben</h3>
        <dl><dt style={recipe('label')}>E-Mail-Adresse</dt><dd style={recipe('body')}>kontakt@example.org</dd></dl>
        <p className="type-specimen-help" style={recipe('help')}>Hierhin senden wir die Bestätigung.</p>
      </div>
      <fieldset className="type-probes"><legend>Darstellung vergleichen</legend>
        {([
          [long, setLong, 'Lange Inhalte'], [spaced, setSpaced, 'Textabstände erhöhen'],
          [large, setLarge, 'Basisgrösse verdoppeln'], [system, setSystem, 'Systemschrift vergleichen'],
        ] as const).map(([checked, setChecked, label]) => <label key={label}><input type="checkbox" checked={checked} onChange={event => setChecked(event.target.checked)} />{label}</label>)}
        <p>Die Probe ersetzt keine Prüfung von Browserzoom, Reflow oder tatsächlichem Schriftladeausfall.</p>
      </fieldset>
    </section>
    <section id="abschnitt-textrollen-und-rezepte" aria-labelledby="type-roles-title"><h2 id="type-roles-title">Textrollen und Rezepte</h2>
      <p className="type-note">Showcase-Werte, keine unveränderte Originalskala von shadcn. Die Proben beziehen sich auf die normale Basisgrösse.</p>
      <div className="type-role-grid">{showcase.roles.map(role => <section className="type-role-card" key={role.id}>
        {render(`type-role-${role.id}`)}
        <div className="type-role-preview" style={recipe(role.id)}>{role.sample}</div>
      </section>)}</div>
    </section>
    <section>{render('type-heading-sizes')}
      <div className="type-heading-comparison">{showcase.headingSamples.map(id=>{const role=showcase.roles.find(r=>r.id===id)!;return <figure key={id}>
        <figcaption>{role.label} · {role.recipe}</figcaption><p style={recipe(id)}>Kontaktangaben prüfen</p>
      </figure>})}</div>
    </section>
    <section>{render('type-tracking')}
      <div className="type-tracking-comparison">{showcase.trackingSamples.map(sample=><figure key={sample.value}>
        <figcaption>{sample.label} · {sample.value===0?'normale Laufweite':`${sample.value} em`}</figcaption>
        <p style={{...recipe('section'),letterSpacing:sample.value===0?'normal':`${sample.value}em`}}>Schrift schafft Orientierung</p>
      </figure>)}</div>
    </section>
    {mainKeys.slice(1).map(key => <section key={key}>{render(key)}
      {key === 'type-numbers' && <div className="type-number-study" aria-label="Statische Zahlenprobe">
      <p className="type-note">Gleiche Stellen vergleichen · reine Darstellungsprobe</p>
      <dl className="type-amounts"><div><dt>Grundbetrag</dt><dd>1’240.00</dd></div><div><dt>Zusatz</dt><dd>28.50</dd></div><div><dt>Gesamt</dt><dd>1’268.50</dd></div></dl>
      </div>}
    </section>)}
    <details className="type-reference"><summary>Schriften, Quellen und Prüfungen</summary>
      {sourceKeys.map(key => <section key={key}>{render(key)}</section>)}
    </details>
    {!!extra.length && <Content blocks={extra as Block[]} />}
  </div>
}
