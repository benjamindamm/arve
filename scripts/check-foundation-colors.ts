/** Bounded verification of the palette's actual opaque pairs; not a component audit. */
import assert from 'node:assert/strict'
import { writeFile } from 'node:fs/promises'
import palette from '../src/docs/foundation-colors.json'
import { release } from './content/page-reworks/farben'
const lum=(hex:string)=>[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0)
const contrast=(a:string,b:string)=>(Math.max(lum(a),lum(b))+.05)/(Math.min(lum(a),lum(b))+.05)
const rows:{pair:string;foreground:string;background:string;minimum:number;ratio:number}[]=[]
const check=(pair:string,foreground:string,background:string,minimum:number)=>{const ratio=contrast(foreground,background);rows.push({pair,foreground,background,minimum,ratio});assert(ratio>=minimum,`${pair}: ${ratio.toFixed(3)} < ${minimum}`)}
const published=JSON.stringify(release.content)
for(const scale of palette.scales){
 assert.deepEqual(Object.keys(scale.values).map(Number),palette.steps)
 let previous=Infinity
 for(const hex of Object.values(scale.values)){assert(/^#[0-9A-F]{6}$/.test(hex));assert(lum(hex)<previous,'Non-monotonic scale: '+scale.id);previous=lum(hex);assert(published.includes(hex),'CMS missing '+hex)}
 if(scale.anchor)assert.equal(scale.values['50'],scale.anchor)
}
for(const theme of ['light','dark'] as const){
 const n=palette.neutral[theme]
 for(const r of palette.roles){const p=r[theme];
  for(const state of ['background','hover','active'] as const)check(`${theme}/${r.id}/text/${state}`,p.foreground,p[state],4.5)
  check(`${theme}/${r.id}/border-on-background`,p.border,n.background,3)
  for(const hex of Object.values(p))assert(published.includes(hex),'CMS missing role value '+hex)
 }
 for(const bg of ['background','surface'] as const){
  check(`${theme}/text/${bg}`,n.foreground,n[bg],4.5)
  check(`${theme}/muted/${bg}`,n.muted,n[bg],4.5)
  check(`${theme}/field-border/${bg}`,n.border,n[bg],3)
  check(`${theme}/focus/${bg}`,n.focus,n[bg],3)
 }
 check(`${theme}/overlay-text`,n.foreground,theme==='light'?'#FFFFFF':'#404040',4.5)
 check(`${theme}/selected`,n.selectedText,n.selected,4.5)
 check(`${theme}/error-in-context`,palette.roles.find(r=>r.id==='error')![theme].foreground,n.background,4.5)
}
const report={scope:'Opaque sRGB text, specified borders and focus on the documented surfaces. No transparency, native-platform or complete-component certification.',method:'WCAG relative luminance; assertions use unrounded ratios.',scales:palette.scales.length,stepsPerScale:10,pairs:rows.length,results:rows}
await writeFile('docs/handbook/color-pilot/foundation-contrast-report.json',JSON.stringify(report,null,2)+'\n')
console.log(`${palette.scales.length} monotonic scales; ${rows.length} contrast pairs passed; CMS contains all scale and role values.`)
