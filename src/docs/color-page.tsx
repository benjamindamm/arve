import { SiteAnchor } from './site-anchor'
import type { Page } from '../payload-types'
import { Content } from './content'
import { colorPairs, exportColor, colorContrast } from './color-page-values'
import './color-page.css'

/** Copy and evidence stay in published CMS blocks, shared with MCP. */
export function ColorPage({content}: {content:Page['content']}) {
 const blocks=content??[]
 const studies=blocks.filter((block): block is Extract<NonNullable<Page['content']>[number],{blockType:'study'}>=>block.blockType==='study'&&block.kind==='colors')
 const texts=blocks.filter(block=>block.blockType!=='study')
 if(studies.length!==3) return <Content blocks={content}/>
 return <div className="color-page">
  <p className="cp-caption">Farbpaare aus dem lokalen Export · statische Beispiele</p>
  <div className="cp-pairs">{studies.map((study,i)=>{
   const [fg,bg]=colorPairs[i]
   return <section className="cp-pair" key={study.id??i} aria-labelledby={`cp-pair-${i}`}>
    <div className="cp-use"><h2 id={`cp-pair-${i}`}>{study.title}</h2><p>{study.explanation}</p></div>
    <div className="cp-variants">{(['light','dark'] as const).map(theme=><div key={theme} className="cp-variant">
     <span className="cp-theme-label">{theme==='light'?'Hell':'Dunkel'}</span>
     <div className={`cp-sample cp-sample-${i}`} style={{color:exportColor(theme,fg),background:exportColor(theme,bg)}}>{i===0?'Deine Angaben im Überblick':i===1?'Änderungen speichern':'Zuletzt heute aktualisiert'}</div>
     <div className="cp-values"><code>{exportColor(theme,fg)} / {exportColor(theme,bg)}</code><strong>{colorContrast(exportColor(theme,fg),exportColor(theme,bg))}:1</strong></div>
    </div>)}</div>
    <p className="cp-role"><code>{fg}</code> auf <code>{bg}</code></p>
   </section>
  })}</div>
  <p className="cp-caption">Die Kontrastzahlen gelten für Text und Fläche ohne Transparenz. Die Beispiele verwenden Farbwerte aus dem lokalen Export; der Portalrahmen hat eigene Werte. Die genaue Berechnung und ihre Grenzen stehen in der Vertiefung.</p>
  <div className="cp-rules"><Content blocks={texts.slice(0,2)}/></div>
  <SiteAnchor className="cp-next" href="/systems/shadcn/themes-und-zustaende">Themes und visuelle Zustände →</SiteAnchor>
  <details className="cp-evidence"><summary>Kontrastberechnung, offene Rollen und Quellen</summary>
   <Content blocks={texts.slice(2)}/>
   <p>Referenzstand: <code className="cp-revision">{studies[0].revision}</code></p>
   {studies.map((study,i)=><p key={i}>{study.title}: {study.source}</p>)}
  </details>
 </div>
}
