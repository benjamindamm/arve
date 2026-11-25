import type {Page} from '../payload-types'
import {Content} from './content'
import {RichText} from './rich-text'
import {blockAnchor} from './content-outline'
import './data-visualization-guide.css'
import {chartColor,ref,chartPalettes,colorRefLabel} from './chart-color-policy'

const blue=chartColor(ref('blue')),purple=chartColor(ref('purple')),red=chartColor(ref('red')),green=chartColor(ref('green')),gray=chartColor(ref('neutral'))
const line='M18 94 L55 76 L92 84 L129 40 L166 58 L204 22'
function Plot({kind}:{kind:string}){
 return <svg viewBox="0 0 224 120" aria-hidden="true" focusable="false">
  <path d="M14 12V104H214" fill="none" stroke={chartColor(ref('neutral','40'))}/>
  {['line','reference','area'].includes(kind)?<>
   {kind==='area'&&<path d={line+' L204 104 L18 104 Z'} fill={chartColor(ref('blue','20'))}/>}
   {kind==='reference'&&<path d="M18 64H204" fill="none" stroke={gray} strokeWidth="2" strokeDasharray="5 4"/>}
   <path d={line} fill="none" stroke={blue} strokeWidth="3"/>
  </>:kind==='dense'?<path d="M18 94L29 78L40 84L51 62L62 76L73 54L84 68L95 48L106 63L117 32L128 41L139 26L150 48L161 29L172 38L183 16L194 29L205 20" fill="none" stroke={blue} strokeWidth="3"/>:
  kind==='points'?[[30,80],[52,68],[85,73],[118,40],[150,46],[190,22]].map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r="4" fill={blue}/>):
  kind==='stacked'?<>{[26,80,134,188].map((x,i)=><g key={x}><rect x={x} y={65-i*6} width="20" height={39+i*6} fill={blue}/><rect x={x} y={35-i*6} width="20" height="30" fill={purple}/></g>)}</>:
  [42,74,52].map((h,i)=><rect key={i} x={36+i*60} y={104-h} width="25" height={h} fill={[blue,purple,gray][i]}/>)}
 </svg>
}
function Pair({left,right,dense=false}:{left:string;right:string;dense?:boolean}){
 return <div className="dv-pair" aria-hidden="true"><figure><figcaption>{left}</figcaption><Plot kind="line"/></figure><figure><figcaption>{right}</figcaption><Plot kind={dense?'dense':'bars'}/></figure></div>
}
function Visual({kind}:{kind:string}){
 if(kind==='overview')return <Pair left="Eine Datenreihe" right="Drei Kategorien"/>
 if(kind==='density')return <Pair left="Wenige Messpunkte · eine Farbe" right="Viele Messpunkte · eine Farbe" dense/>
 if(kind==='flows')return <figure className="dv-flow-example"><figcaption>Richtung, Unterkategorie und Referenz</figcaption><div className="dv-flow-directions"><div><span className="dv-flow-label"><i style={{background:green}} aria-hidden="true"/>+ Einzahlungen</span><small>green.70 · Zufluss</small></div><div><span className="dv-flow-label"><i style={{background:red}} aria-hidden="true"/>− Auszahlungen</span><small>red.70 · Abfluss</small><div className="dv-flow-parts"><span><i style={{background:red}} aria-hidden="true"/>Miete</span><span><i style={{background:red}} aria-hidden="true"/>Gebühren</span><small>Aufschlüsselung des Abflusses, kein Zusatz zum Total.</small></div></div></div><div className="dv-flow-budget"><i style={{borderColor:gray}} aria-hidden="true"/><span>Budget · neutral.70 · Referenz</span></div><p>Saldo separat zeigen: Er ist ein berechnetes Ergebnis, keine weitere Kategorie.</p></figure>
 if(kind==='marks')return <div className="dv-marks" aria-hidden="true">{[['line','Linie'],['points','Punkte'],['bars','Getrennte Flächen'],['stacked','Angrenzende Flächen'],['area','Gefüllter Verlauf']].map(([k,l])=><figure key={k}><figcaption>{l}</figcaption><Plot kind={k}/></figure>)}</div>
 return null
}
function PaletteVisual({kind}:{kind:string}){
 const p=chartPalettes[kind];if(!p)return null
 return <figure className="dv-palette"><figcaption>{p.label}</figcaption><div className="dv-swatches" style={{gridTemplateColumns:`repeat(${p.refs.length}, minmax(0,1fr))`}} aria-hidden="true">{p.refs.map((reference,i)=><span key={i} style={{background:chartColor(reference)}}/>)}</div><div className="dv-swatch-labels" style={{gridTemplateColumns:`repeat(${p.refs.length}, minmax(0,1fr))`}}>{p.labels.map((label,i)=><span key={i}>{label}</span>)}</div><div className="dv-ref-labels">{p.refs.map((r,i)=><span key={i}><code>{colorRefLabel(r)}</code><small>{chartColor(r)}</small></span>)}</div>{kind==='reference'&&<div className="dv-reference" aria-hidden="true"><Plot kind="reference"/></div>}</figure>
}
/** CMS blocks carry the rules and text alternatives; illustrations add no hidden requirements. */
export function DataVisualizationGuide({content}:{content:Page['content']}){
 return <div className="dv-page">{content?.map((block,i)=>{
  if(block.blockName==='dv-evidence'&&block.blockType==='text')return <details className="dv-evidence" key={i} id={blockAnchor(block)}><summary>Geltung und Quellen</summary><RichText data={{...block.body,root:{...block.body.root,children:block.body.root.children.slice(1)}}}/></details>
  const name=block.blockName??''
  if(block.blockType==='text'&&(name.startsWith('dv-archetype-')||name.startsWith('dv-conflict-')||(name.startsWith('dv-form-')&&name!=='dv-form-choice'))){
   const heading=block.body.root.children[0] as {children?:{text?:string}[]}
   const title=heading.children?.map(c=>c.text??'').join('')??''
   return <details className="dv-rule-detail" key={i} id={blockAnchor(block)} open={name==='dv-archetype-flows'}><summary>{title}</summary><RichText data={{...block.body,root:{...block.body.root,children:block.body.root.children.slice(1)}}}/></details>
  }
  const kind=name.startsWith('dv-visual-')?name.slice('dv-visual-'.length):''
  const palette=name.startsWith('dv-palette-')?name.slice('dv-palette-'.length):''
  return <section key={i} className="dv-section"><Content blocks={[block]}/>{kind&&<Visual kind={kind}/>} {palette&&chartPalettes[palette]&&<PaletteVisual kind={palette}/>}</section>
 })}</div>
}
