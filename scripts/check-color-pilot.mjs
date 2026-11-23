/** Validate the pilot answers and calculate the specified opaque sRGB pairs. */
import assert from 'node:assert/strict'
import {readFile,writeFile} from 'node:fs/promises'
import {parseArgs} from 'node:util'
import {resolve} from 'node:path'
const root=new URL('../docs/handbook/color-pilot/',import.meta.url)
const {values}=parseArgs({options:{input:{type:'string'},'check-only':{type:'boolean'}}})
const data=JSON.parse(await readFile(values.input?resolve(values.input):new URL('showcase-color.json',root),'utf8'))
const questions=await readFile(new URL('../.agents/skills/arve-color-handbook/references/color-questions.md',import.meta.url),'utf8')
// Derive coverage from the actual maintained catalogue, rather than a duplicate hardcoded list.
const ids=[...questions.matchAll(/^\| (COL-\d+) \|/gm)].map(m=>m[1])
assert(ids.length>0,'Question catalogue missing')
assert.equal(new Set(data.answers.map(a=>a.id)).size,data.answers.length,'Duplicate answer ID')
assert.deepEqual(data.answers.map(a=>a.id).sort(),[...ids].sort(),'Question coverage differs')
const sourceIDs=new Set(data.sources.map(s=>s.id))
for(const a of data.answers) {
 assert(a.answer.trim() && a.applies && a.status,'Incomplete answer '+a.id)
 assert(a.sourceIds.length && a.sourceIds.every(id=>sourceIDs.has(id)),'Unresolved source '+a.id)
 assert(a.evidence.length && a.evidence.every(key=>Object.hasOwn(data,key)),'Unresolved evidence '+a.id)
}
const lum=hex=>{
 assert(/^#[0-9a-f]{6}$/i.test(hex),'Only opaque six-digit sRGB supported')
 const rgb=[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255).map(v=>v<=0.04045?v/12.92:((v+0.055)/1.055)**2.4)
 return rgb[0]*0.2126+rgb[1]*0.7152+rgb[2]*0.0722
}
const contrast=(a,b)=>{const x=lum(a),y=lum(b);return(Math.max(x,y)+0.05)/(Math.min(x,y)+0.05)}
assert.equal(contrast('#000000','#FFFFFF'),21);assert.equal(contrast('#123456','#123456'),1)
assert.equal(contrast('#FFFFFF','#123456'),contrast('#123456','#FFFFFF'))
const pairs=[]
const usedTokens=new Set()
for(const role of data.palette) {
 for(const name of [role.surfaceToken,role.textToken]) {assert(!usedTokens.has(name),'Duplicate token '+name);usedTokens.add(name)}
 for(const theme of ['light','dark']) {
  const colors=role[theme], ratio=contrast(colors.foreground,colors.background)
  const pass=ratio>=data.textContrastTarget // Never compare a rounded display value.
  pairs.push({role:role.id,theme,kind:'text',...colors,ratio,displayRatio:ratio.toFixed(2),target:data.textContrastTarget,pass})
 }
}
for(const indicator of data.indicators)for(const theme of ['light','dark']) {
 const colors=indicator[theme],ratio=contrast(colors.foreground,colors.background)
 pairs.push({role:indicator.id,theme,kind:'indicator',...colors,ratio,displayRatio:ratio.toFixed(2),target:null,pass:null})
}
for(const theme of ['light','dark']) {
 const background=data.palette.find(r=>r.id==='base')[theme].background
 for(const [i,foreground] of data.charts[theme].entries()) {const ratio=contrast(foreground,background);pairs.push({role:'chart-'+(i+1),theme,kind:'chart-on-base',foreground,background,ratio,displayRatio:ratio.toFixed(2),target:null,pass:null})}
}
assert(pairs.filter(p=>p.kind==='text').every(p=>p.pass),'A specified text pair misses the target')
const report={format:'arve-color-pilot-calculation/1',method:'Relative luminance of opaque sRGB; (Lmax + 0.05) / (Lmin + 0.05). Unrounded comparison.',scope:'Numerical pairs only; no browser, component, native or full accessibility certification.',questions:ids.length,textPairs:pairs.filter(p=>p.kind==='text').length,pairs}
if(values['check-only']) { console.log(JSON.stringify({questions:ids.length,textPairs:report.textPairs,textPairsPass:true,mode:'check-only'}));process.exit(0) }
await writeFile(new URL('contrast-report.json',root),JSON.stringify(report,null,2)+'\n')
const escape=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')
const h=escape
const samples=data.palette.map(role=>`<article class="role"><header><h3>${h(role.label)}</h3><p>${h(role.usage)}</p><code>${h(role.surfaceToken)} / ${h(role.textToken)}</code></header><div class="modes">${['light','dark'].map(theme=>{const p=pairs.find(p=>p.role===role.id&&p.theme===theme);return `<figure><figcaption>${theme==='light'?'Hell':'Dunkel'}</figcaption><div class="sample" style="background:${p.background};color:${p.foreground}">${h(role.label)}</div><div class="values"><code>${p.foreground} / ${p.background}</code><span>${p.displayRatio}:1</span></div></figure>`}).join('')}</div></article>`).join('')
const questionRows=data.answers.map(a=>`<tr><th scope="row">${a.id}</th><td>${h(a.answer)}<small>${h(a.status)} · ${h(a.sourceIds.join(', '))}</small></td></tr>`).join('')
const sources=data.sources.map(s=>`<li><strong>${h(s.id)}</strong> · ${s.reference.startsWith('https:')?`<a href="${h(s.reference)}">${h(s.reference)}</a>`:h(s.reference)}<p>${h(s.scope)}</p></li>`).join('')
const css=`*{box-sizing:border-box}body{margin:0;background:#fff;color:#171717;font:16px/1.6 system-ui,sans-serif}main{max-width:1040px;padding:56px 32px 80px;margin:auto}h1{font-size:clamp(40px,7vw,64px);letter-spacing:-.05em;line-height:1.1;margin:12px 0 24px}h2{font-size:26px;line-height:1.25;letter-spacing:-.025em;margin:0 0 20px}h3{font-size:18px;margin:0 0 10px}p{max-width:76ch;margin:0 0 16px}.eyebrow,small{font-size:12px;color:#525252}section{margin-top:56px}.notice{border-left:3px solid #171717;padding:12px 20px;background:#fafafa;margin:28px 0}code{font:12px/1.5 ui-monospace,monospace;overflow-wrap:anywhere}.role{padding:28px 0;border-top:1px solid #e5e5e5;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.6fr);gap:32px}.role p{font-size:14px;color:#525252}.modes{display:grid;grid-template-columns:1fr 1fr;gap:16px;min-width:0}figure{margin:0;min-width:0}figcaption{font-size:12px;margin-bottom:8px;color:#525252}.sample{padding:28px 18px;border-radius:8px;min-height:100px;display:flex;align-items:center;font-weight:600;border:1px solid #737373}.values{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;font-size:12px;margin-top:8px}.charts{display:grid;grid-template-columns:1fr 1fr;gap:20px}.chart{padding:20px;border-radius:8px}.chart ul{list-style:none;padding:0;margin:0}.chart li{display:flex;align-items:center;gap:12px;margin:12px 0}.dot{width:18px;height:18px;border-radius:50%;flex-shrink:0}li{margin:10px 0}details{margin:24px 0;border-top:1px solid #e5e5e5;padding-top:20px}summary{font-weight:600;cursor:pointer}table{width:100%;border-collapse:collapse;margin-top:20px;font-size:14px}th,td{text-align:left;vertical-align:top;padding:14px 10px;border-bottom:1px solid #e5e5e5}th{white-space:nowrap}small{display:block;margin-top:6px}a{color:#1e40af;overflow-wrap:anywhere}.print-note{font-size:13px;color:#525252}@media(max-width:640px){main{padding:28px 20px 56px}.role{display:block}.modes{margin-top:20px;gap:12px}.sample{padding:20px 12px;font-size:14px}.values code{font-size:11px}.charts{grid-template-columns:1fr}th,td{padding:12px 5px;font-size:13px}section{margin-top:40px}}`
const chartPreview=['light','dark'].map(theme=>{const colors=data.palette.find(r=>r.id==='base')[theme];return `<div class="chart" style="background:${colors.background};color:${colors.foreground};border:1px solid #737373"><strong>${theme==='light'?'Hell':'Dunkel'}</strong><ul>${data.charts[theme].map((color,i)=>`<li><span class="dot" style="background:${color}"></span>Kategorie ${i+1} <code>${color}</code></li>`).join('')}</ul></div>`}).join('')
const html=`<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Farbe · shadcn Showcase · Arve-Pilot</title><style>${css}</style></head><body><main><div class="eyebrow">ARVE · SHADCN-SHOWCASE · FACHLICHER PROTOTYP</div><h1>Farbe</h1><p>Neutrale Flächen geben dem Inhalt Raum. Farbe hebt Handlungen hervor und unterstützt klare Rückmeldungen. Wähle eine Rolle und verwende Text und Fläche als Paar.</p><div class="notice"><strong>Eigener Showcase-Entwurf.</strong><br>Eine neutrale Palette mit ergänzenden Statusfarben, gestaltet für das Arve-Referenzhandbuch. Herkunft und offene Prüfungen stehen unten.</div><section><h2>Geltungsbereich</h2><p>Für Web-Oberflächen auf Desktop und Mobile, in Hell und Dunkel. Native Farbzuordnungen sind noch offen.</p></section><section><h2>Farbrollen und Einsatz</h2>${samples}</section><section><h2>Konturen und Fokus</h2>${data.indicators.map(i=>`<h3>${h(i.label)}</h3><p>${h(i.usage)}</p><p class="print-note">${['light','dark'].map(t=>{const p=pairs.find(p=>p.role===i.id&&p.theme===t);return `${t==='light'?'Hell':'Dunkel'}: ${p.foreground} auf ${p.background} · ${p.displayRatio}:1`}).join(' · ')}</p>`).join('')}</section><section><h2>Regeln für die Anwendung</h2><ul>${data.rules.map(r=>`<li>${h(r.text)}</li>`).join('')}</ul></section><section><h2>Diagramme</h2><p>${h(data.charts.scope)}</p><div class="charts">${chartPreview}</div><ul>${data.charts.rules.map(r=>`<li>${h(r)}</li>`).join('')}</ul></section><section><h2>Prüfstand</h2><p>Alle ${report.textPairs} aufgeführten Textpaare erreichen rechnerisch das Showcase-Ziel von mindestens ${data.textContrastTarget.toString().replace('.',',')}:1. Die Berechnung verwendet opake sRGB-Werte und vergleicht ungerundete Ergebnisse.</p><p>Die Zahlen belegen nur diese Paarungen. Reale Komponenten, Fokusgeometrie, Systemfarben und assistive Nutzung brauchen eigene Prüfungen.</p><h3>Offene Punkte</h3><ul>${data.openItems.map(x=>`<li>${h(x)}</li>`).join('')}</ul></section><details><summary>Welche Fragen beantwortet dieses Kapitel?</summary><table><caption>Abdeckung des Fragenkatalogs COL-01–10</caption><thead><tr><th>Frage</th><th>Antwort und Herkunft</th></tr></thead><tbody>${questionRows}</tbody></table></details><details><summary>Quellen und Designentscheidungen</summary><ul>${sources}</ul></details><p class="print-note">Generiert aus showcase-color.json. Prototyp des Inhaltsmodells; noch nicht ins CMS übernommen.</p></main></body></html>`
await writeFile(new URL('showcase-preview.html',root),html)
const md=`# Farbe · shadcn-Showcase\n\nGenerierter fachlicher Prototyp aus [showcase-color.json](showcase-color.json). Konkrete Werte und Ergänzungen sind eigene Showcase-Entscheidungen. Keine Änderung der Originalcontracts oder CMS-Veröffentlichung.\n\n## Geltungsbereich\n\n${data.scope}\n\n## Rollen und Verwendung\n\n| Rolle | Einsatz | Hell: Text / Fläche | Dunkel: Text / Fläche |\n| --- | --- | --- | --- |\n${data.palette.map(r=>`| ${r.label} | ${r.usage} | ${r.light.foreground} / ${r.light.background} | ${r.dark.foreground} / ${r.dark.background} |`).join('\n')}\n\n## Konturen\n\n${data.indicators.map(r=>`- **${r.label}:** ${r.usage} Hell: ${r.light.foreground} auf ${r.light.background}; Dunkel: ${r.dark.foreground} auf ${r.dark.background}.`).join('\n')}\n\n## Anwendungsregeln\n\n${data.rules.map(r=>`- ${r.text}`).join('\n')}\n\n## Datenvisualisierung\n\n${data.charts.scope}\n\nHell: ${data.charts.light.join(', ')}. Dunkel: ${data.charts.dark.join(', ')}.\n\n${data.charts.rules.map(r=>`- ${r}`).join('\n')}\n\n## Anforderungen und Nachweise\n\n${data.targetRationale}\n\nAlle ${report.textPairs} Textpaare erreichen das Rechenziel; siehe [Prüfbericht](contrast-report.json). Kontur- und Diagrammkontraste sind separat aufgeführt, keine vollständigen Fähigkeitsnachweise. Keine Browser-Komponentenprüfung oder native Freigabe.\n\n## Abdeckung der Fragen\n\n| ID | Geltung | Antwort | Stand | Quelle |\n| --- | --- | --- | --- | --- |\n${data.answers.map(a=>`| ${a.id} | ${a.applies} | ${a.answer} | ${a.status} | ${a.sourceIds.join(', ')} |`).join('\n')}\n\n## Offene Entscheidungen und Prüfungen\n\n${data.openItems.map(r=>`- ${r}`).join('\n')}\n\n## Quellen\n\n${data.sources.map(s=>`- **${s.id}:** ${s.reference}. ${s.scope}`).join('\n')}\n`
await writeFile(new URL('showcase-chapter.md',root),md)
console.log(JSON.stringify({questions:report.questions,textPairs:report.textPairs,textPairsPass:true,indicatorPairs:pairs.filter(p=>p.kind==='indicator').length,chartPairs:pairs.filter(p=>p.kind==='chart-on-base').length,generated:['contrast-report.json','showcase-chapter.md','showcase-preview.html']}))
