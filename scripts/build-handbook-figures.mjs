import { readFile, writeFile, mkdir } from 'node:fs/promises'
import sharp from 'sharp'
const root = 'src/contracts/libraries/shadcn/5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed'
const tokens = JSON.parse(await readFile(root + '/tokens.json', 'utf8'))
const resolve = v => typeof v === 'string' && v.startsWith('{') ? resolve(v.slice(1,-1).split('.').reduce((a,k)=>a[k],tokens).$value) : v
const color = (theme,key) => resolve(tokens.theme[theme][key].$value).hex
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;')
const t = (x,y,s,size=20,fill='#171717',weight=400) => `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" font-weight="${weight}">${esc(s)}</text>`
const r = (x,y,w,h,fill='#fff',stroke='#d4d4d4',radius=10) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="${fill}" stroke="${stroke}"/>`
const line = (x,y,x2,y2,arrow=false) => `<path d="M${x} ${y} L${x2} ${y2}" stroke="#737373" stroke-width="2" fill="none" ${arrow?'marker-end="url(#arrow)"':''}/>`
const frame = (title,subtitle,content) => `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="620" viewBox="0 0 1000 620" role="img"><title>${esc(title)}</title><desc>${esc(subtitle)}</desc><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="none" stroke="#737373" stroke-width="1.3"/></marker></defs><rect width="1000" height="620" fill="#fafafa"/><g font-family="Arial, sans-serif">${t(36,48,title,28,'#171717',600)}${t(36,80,subtitle,18,'#525252')}${content}</g></svg>`
const figures = {}
let colors = ''
for (const [i,theme] of ['light','dark'].entries()) {
 const x=36+i*478, bg=color(theme,'background'), fg=color(theme,'foreground')
 colors += r(x,112,450,358,bg) + t(x+24,151,theme==='light'?'Helles Theme':'Dunkles Theme',23,fg,600)
 colors += t(x+24,190,'Text auf Grundfläche',20,fg) + t(x+24,220,`${fg} auf ${bg}`,17,color(theme,'mutedForeground'))
 colors += r(x+24,250,402,68,color(theme,'primary'),color(theme,'primary')) + t(x+46,291,'Primäre Aktion',22,color(theme,'primaryForeground'),600)
 colors += t(x+24,357,'Fläche und Text als Paar wählen.',18,fg) + t(x+24,389,'Die Bedeutung bleibt im Theme gleich.',18,fg)
 colors += t(x+24,439,`${color(theme,'primaryForeground')} auf ${color(theme,'primary')}`,17,color(theme,'mutedForeground'))
}
colors += t(36,521,'Quelle: lokaler Token-Export · light / dark',19,'#171717',600) + t(36,554,'Gezeigt werden nur vorhandene Rollen. Fehler-, Erfolgs- und Warnfarben',18,'#525252') + t(36,580,'sind im Export noch nicht als vollständiges Statussystem definiert.',18,'#525252')
figures['farben'] = frame('Farbrollen bleiben zusammen','Aus lokalen Tokens erzeugt · keine Abbildung der aktuellen Portal-Styles',colors)
let input = r(36,112,928,280)
input += t(64,153,'Anatomie',20,'#171717',600) + t(72,198,'E-Mail-Adresse',20,'#171717',600)
input += r(72,215,390,52) + t(88,249,'name@beispiel.ch',20,'#737373') + t(72,303,'Für die Bestätigung deiner Eingabe.',18,'#525252')
input += line(470,190,538,190)+t(554,196,'1  Label bleibt sichtbar',20)
input += line(470,242,538,242)+t(554,248,'2  Eingabe bleibt bearbeitbar',20)
input += line(470,296,538,296)+t(554,302,'3  Hilfe erklärt Zweck oder Format',20)
input += t(72,357,'Schema: nicht massstabsgetreu, keine zusätzliche Komponentenvariante.',17,'#525252')
input += r(36,416,450,156,'#f0f4f1') + t(60,452,'Im Contract beschrieben',21,'#171717',600) + t(60,488,'Freitext · aktiv / deaktiviert',19) + t(60,522,'Fokus und Bearbeitung durch den Browser',18)
input += r(514,416,450,156,'#fff') + t(538,452,'UX-Ziel, noch abzugleichen',21,'#171717',600) + t(538,488,'Fehler und Korrekturhilfe · Schreibschutz',19) + t(538,522,'Nicht im gelesenen Contract modelliert',18,'#525252')
figures['input'] = frame('Ein Feld ist mehr als seine Eingabe','Gestaltungsschema · unterstützende Feldtexte brauchen eigene Regeln',input)
let flow=''
for (const [i,txt] of ['Eingeben','Absenden','Prüfen','Bestätigen'].entries()) {
 const x=36+i*240
 flow+=r(x,136,208,100,i===3?'#f0f4f1':'#fff')+t(x+20,172,`0${i+1}`,17,'#737373')+t(x+20,210,txt,23,'#171717',600)
 if(i<3) flow+=line(x+211,186,x+233,186,true)
}
flow+=line(620,240,620,308,true)+r(514,316,450,122)+t(538,353,'Angaben korrigieren',23,'#171717',600)+t(538,389,'Fehler zuordnen · Eingaben erhalten',19)
flow+=`<path d="M514 377 H140 V244" stroke="#737373" stroke-width="2" fill="none" marker-end="url(#arrow)"/>`
flow+=t(36,487,'Antwort unklar?',21,'#171717',600)+t(36,522,'Keine Erfolgsmeldung vor bestätigter Annahme.',20)+t(36,555,'Ob gespeichert wurde und wie ein sicherer Wiederholungsversuch möglich ist,',18,'#525252')+t(36,582,'muss der Ablauf ausdrücklich klären. Ein Netzfehler ist kein Eingabefehler.',18,'#525252')
figures['validierung'] = frame('Vom Eingeben zur bestätigten Übermittlung','Vorgeschlagener Ablauf · Formularverhalten ist kein Input-Zustandsautomat',flow)
let layout=t(36,124,'Viel Platz',20,'#171717',600)+t(694,124,'Wenig Platz',20,'#171717',600)
layout+=r(36,145,610,54)+t(55,178,'1  Kontextnavigation',19)+r(36,211,610,84)+t(55,244,'2  Titel, Status und Aktionen',20,'#171717',600)
layout+=r(36,311,392,188,'#eef2ef')+t(56,349,'3  Hauptinhalt',21,'#171717',600)+t(56,388,'2 Rasteranteile',18,'#525252')
layout+=r(444,311,202,188)+t(460,349,'4  Zusatzinfos',20,'#171717',600)+t(460,388,'1 Rasteranteil',18,'#525252')
for(const [i,txt] of ['1  Navigation','2  Titel und Aktionen','3  Hauptinhalt','4  Zusatzinfos'].entries()) layout+=r(694,145+i*90,270,74,i===2?'#eef2ef':'#fff')+t(712,188+i*90,txt,19)
layout+=t(36,546,'Lesereihenfolge 1 → 2 → 3 → 4 bleibt erhalten.',21,'#171717',600)+t(36,582,'Umbruch nach Inhalt. Zusatzinfos dürfen Pflichtinformationen nicht verdrängen.',18,'#525252')
figures['detailseite'] = frame('Eine Aufgabe, klare Inhaltsbereiche','Eigener Layoutvorschlag · 2:1 als Ausgangspunkt, nicht als starre Vorgabe',layout)
await mkdir('docs/handbook/figures',{recursive:true})
for(const [name,svg] of Object.entries(figures)) {
 await writeFile(`docs/handbook/figures/${name}.svg`,svg)
 await sharp(Buffer.from(svg)).png().toFile(`docs/handbook/figures/${name}.png`)
}
console.log('Vier SVG-Quellen und PNG-Dateien erzeugt.')
