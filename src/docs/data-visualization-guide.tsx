import type {Page} from '../payload-types'
import {Content} from './content'
import {RichText} from './rich-text'
import {blockAnchor} from './content-outline'
import './data-visualization-guide.css'
import {chartColor,ref,chartPalettes} from './chart-color-policy'

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
 if(kind==='flows')return <FinanceExample/>
 if(kind==='marks')return <div className="dv-marks" aria-hidden="true">{[['line','Linie'],['points','Punkte'],['bars','Getrennte Flächen'],['stacked','Angrenzende Flächen'],['area','Gefüllter Verlauf']].map(([k,l])=><figure key={k}><figcaption>{l}</figcaption><Plot kind={k}/></figure>)}</div>
 return null
}
function FinanceExample(){
 return <figure className="dv-flow-example"><figcaption>Ein Monat · CHF · erfundene Werte</figcaption><div className="dv-finance-grid"><div><svg viewBox="0 0 320 250" role="img" aria-label="Einzahlungen plus 4000 CHF, Auszahlungen minus 2500 CHF. Ausgabenbudget minus 2700 CHF als gestrichelte Referenz."><path d="M25 120H300" stroke={gray}/><text x="25" y="113">0 CHF</text><rect x="55" y="40" width="55" height="80" fill={green}/><text x="82" y="30" textAnchor="middle">+4’000</text><rect x="205" y="120" width="55" height="50" fill={red}/><text x="232" y="160" textAnchor="middle" fill="white">−2’500</text><path d="M180 174H295" stroke={gray} strokeWidth="2" strokeDasharray="5 4"/><text x="180" y="194">Budget −2’700</text><text x="82" y="226" textAnchor="middle">Einzahlungen</text><text x="232" y="226" textAnchor="middle">Auszahlungen</text></svg></div><div className="dv-expenses"><strong>Davon Auszahlungen</strong>{[['Miete','1’500',60],['Sonstiges','950',38],['Gebühren','50',2]].map(([label,value,width])=><div key={label}><span>{label}<b>{value} CHF</b></span><div className="dv-expense-track"><i style={{width:width+'%',background:red}}/></div></div>)}</div></div><p className="dv-balance">Saldo <strong>+1’500 CHF</strong><span>Einzahlungen minus Auszahlungen</span></p><p>Grün: Zufluss · Rot: Abfluss · Grau gestrichelt: Budget</p></figure>
}
function PaletteChart({kind}:{kind:string}){
 if(kind==='single'||kind==='reference')return <Plot kind={kind==='single'?'line':'reference'}/>
 if(kind==='categorical')return <Plot kind="bars"/>
 if(kind==='diverging')return <svg viewBox="0 0 224 120" aria-hidden="true"><path d="M110 10V100" stroke={gray}/><rect x="70" y="22" width="40" height="22" fill={purple}/><rect x="110" y="64" width="60" height="22" fill={blue}/><text x="62" y="38" textAnchor="end">−20</text><text x="178" y="80">+30</text><text x="110" y="116" textAnchor="middle">Bezug: 0</text></svg>
 if(kind==='semantic')return <svg viewBox="0 0 260 150" aria-hidden="true"><rect x="15" y="25" width="70" height="22" fill={green}/><rect x="15" y="82" width="150" height="22" fill={red}/><path d="M135 15V112" stroke={gray} strokeDasharray="4 3"/><text x="15" y="64">35 · innerhalb</text><text x="15" y="122">75 · überschritten</text><text x="145" y="20">Grenze 60</text></svg>
 return null
}
function PaletteVisual({kind}:{kind:string}){
 const p=chartPalettes[kind];if(!p)return null
 return <figure className="dv-palette"><figcaption>{p.label}</figcaption><div className="dv-palette-chart"><PaletteChart kind={kind}/></div><div className="dv-swatches" style={{gridTemplateColumns:`repeat(${p.refs.length}, minmax(0,1fr))`}} aria-hidden="true">{p.refs.map((reference,i)=><span key={i} style={{background:chartColor(reference)}}/>)}</div><div className="dv-swatch-labels" style={{gridTemplateColumns:`repeat(${p.refs.length}, minmax(0,1fr))`}}>{p.labels.map((label,i)=><span key={i}>{label}</span>)}</div><details className="dv-values"><summary>Farbwerte aus der Grundpalette</summary><div className="dv-ref-labels">{p.refs.map((r,i)=><span key={i}><code>{{blue:'Blau',purple:'Violett',neutral:'Neutral',green:'Grün',red:'Rot',amber:'Amber'}[r.family]??r.family} · {r.step}</code><small>{chartColor(r)}</small></span>)}</div></details></figure>
}
/** CMS blocks carry the rules and text alternatives; illustrations add no hidden requirements. */
export function DataVisualizationGuide({content}:{content:Page['content']}){
 return <div className="dv-page">{content?.map((block,i)=>{
  if(block.blockName==='dv-evidence'&&block.blockType==='text')return <details className="dv-evidence" key={i} id={blockAnchor(block)}><summary>Geltung und Quellen</summary><RichText data={{...block.body,root:{...block.body.root,children:block.body.root.children.slice(1)}}}/></details>
  const name=block.blockName??''
  if(block.blockType==='text'&&(name.startsWith('dv-archetype-')||name.startsWith('dv-conflict-')||(name.startsWith('dv-form-')&&name!=='dv-form-choice'))){
   const heading=block.body.root.children[0] as {children?:{text?:string}[]}
   const title=heading.children?.map(c=>c.text??'').join('')??''
   return <details className="dv-rule-detail" key={i} id={blockAnchor(block)}><summary>{title}</summary><RichText data={{...block.body,root:{...block.body.root,children:block.body.root.children.slice(1)}}}/></details>
  }
  const kind=name.startsWith('dv-visual-')?name.slice('dv-visual-'.length):''
  const palette=name.startsWith('dv-palette-')?name.slice('dv-palette-'.length):''
  return <section key={i} className="dv-section" id={palette&&chartPalettes[palette]?blockAnchor(block):undefined}>{block.blockType==='text'&&name.startsWith('dv-palette-')&&chartPalettes[name.slice(11)]?<RichText data={{...block.body,root:{...block.body.root,children:block.body.root.children.filter(n=>!(n.type==='paragraph'&&JSON.stringify(n).includes('Grundpalette: ')))}}}/>:<Content blocks={[block]}/>}{kind&&<Visual kind={kind}/>} {palette&&chartPalettes[palette]&&<PaletteVisual kind={palette}/>}</section>
 })}</div>
}
