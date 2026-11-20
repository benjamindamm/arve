import assert from 'node:assert/strict'
import { readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import type { Page } from '../src/payload-types'

const revision = '5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed'
const root = `src/contracts/libraries/shadcn/${revision}`
const raw = await readFile(`${root}/tokens.json`, 'utf8')
const tokens = JSON.parse(raw)
const sha = createHash('sha256').update(raw).digest('hex')
const value = (path: string): any => {
  const token = path.split('.').reduce((obj, key) => obj[key], tokens).$value
  return typeof token === 'string' && token.startsWith('{') ? value(token.slice(1, -1)) : token
}
const luminance = (hex: string) => {
  const rgb = hex.slice(1).match(/../g)!.map(v => parseInt(v, 16) / 255).map(v => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
  return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722
}
const pairs = ['light', 'dark'].flatMap(theme => [['foreground','background'],['primaryForeground','primary'],['mutedForeground','background']].map(([fg,bg]) => {
  const front = value(`theme.${theme}.${fg}`).hex, back = value(`theme.${theme}.${bg}`).hex
  const a = luminance(front), b = luminance(back)
  return { theme, fg, bg, front, back, ratio: ((Math.max(a,b)+.05)/(Math.min(a,b)+.05)).toFixed(2) }
}))
const measurements = pairs.map(p => `${p.theme}: ${p.fg} ${p.front} auf ${p.bg} ${p.back} = ${p.ratio}:1`).join('; ')
const marker = 'Lokaler Abgleich · Referenzausbau 02'
const additions = [
  { slug: 'shadcn-farben', figure: 'farben',
    alt: 'Zwei Theme-Flächen aus dem lokalen Token-Export. Hell: Text #0A0A0A auf Weiss, Aktion #171717 mit Text #FAFAFA. Dunkel: Text #FAFAFA auf #0A0A0A, Aktion #E5E5E5 mit Text #171717. Flächen- und Textrollen werden gemeinsam gewechselt.',
    caption: 'Fläche und Text gemeinsam wählen. Die gezeigten Farben stammen aus dem lokalen Export; sie sind keine Messung der Portaloberfläche.',
    paragraphs: [
      `Im lokalen Export ${revision.slice(0,12)} sind acht neutrale Palettenfarben sowie light/dark-Rollen für Grundfläche, Text, primäre Aktion, Grenze, Input, Fokus und unterstützenden Text enthalten. Card, Popover, Secondary, Accent sowie Fehler-, Erfolgs- und Warnrollen fehlen dort als eigene Theme-Tokens. Die oben beschriebenen shadcn-Rollen sind also umfangreicher als dieser lokale Stand.`,
      'Die Farbabbildung wird direkt aus tokens.json erzeugt. Eine Änderung des Exports erfordert eine neue Abbildung und einen erneuten Abgleich; die Grafik ist kein zweiter, unabhängig gepflegter Farbstandard.',
      `Berechnete Kontraste opaker sRGB-Paare: ${measurements}. Die Werte verwenden die sRGB-Linearisierung und (hellere Leuchtdichte + 0,05) / (dunklere Leuchtdichte + 0,05). Nicht gemessen wurden tatsächliche Browserdarstellung, Transparenzen, Fokus und Feldgrenzen. Es handelt sich deshalb nicht um eine allgemeine Barrierefreiheitsfreigabe.`,
      'Abweichung zur Vorschau: Die Portal-Styles verwenden unter anderem #18181b als primary und #ffffff als primary-foreground. Der Export verwendet im hellen Theme #171717 und #FAFAFA. Vor einer verbindlichen Farbreferenz müssen Vorschau und Tokenquelle zusammengeführt oder als verschiedene Gestaltungsstände gekennzeichnet werden.',
    ] },
  { slug: 'shadcn-input', figure: 'input',
    alt: 'Feldanatomie mit dauerhaftem Label, Eingabe und Hilfetext. Der gelesene Contract beschreibt Freitext und aktiv/deaktiviert; der Browser steuert Fokus und Bearbeitung. Fehler, Korrekturhilfe und Schreibschutz sind UX-Ziele, die darin noch nicht modelliert sind.',
    caption: 'Label und Eingabe als Einheit gestalten. Ergänzende Hilfe und Fehler brauchen zusätzlich eine definierte Feldzusammenstellung; sie sind nicht automatisch durch den Input-Contract abgedeckt.',
    paragraphs: [
      `Gelesen wurde der lokale Bibliotheksexport ${revision.slice(0,12)}. Sein Input ist als draft, Version 0.2.0 gekennzeichnet. Das CEM beschreibt value, label, placeholder, disabled und rounded sowie das native input-Ereignis. Das UX-Profil begrenzt den Einsatz auf kurzen einzeiligen Freitext.`,
      'SCXML beschreibt enabled und disabled. SET_VALUE setzt einen Wert; NATIVE_INPUT übernimmt Änderungen im aktiven Zustand. FOCUS_IN, FOCUS_OUT und ESCAPE verändern den Wert nicht. Fokus, Textauswahl und Bearbeitung bleiben beim Browser. Eigene Zustände oder Eigenschaften für Validierung, Fehlermeldungen, readonly oder Versand sind in den gelesenen Dateien nicht definiert.',
      `Gestaltungswerte aus dem Export: Höhe ${value('input.height').value} px; Innenabstand horizontal ${value('input.paddingInline').value} px und vertikal ${value('input.paddingBlock').value} px; Rahmen ${value('input.borderWidth').value} px; Radius ${value('input.radius').value} px; Schrift ${value('input.fontSize').value} px mit ${value('input.lineHeight').value} px Zeilenhöhe. Die Breite ${value('input.specimenWidth').value} px ist als specimenWidth benannt und im Contract-CSS auf die verfügbare Breite begrenzt. Sie ist keine universelle Formularbreite.`,
      'Die aktuelle Spartan-Demo bietet ein natives Textfeld mit zugeordnetem Label und einen Schalter für disabled. Sie verwendet eigene Portal-Styles: 8 px vertikales Padding, geerbte Schrift und keine ausdrückliche 32-px-Höhe. Die Demo belegt daher nicht die visuelle Übereinstimmung mit dem importierten Contract. Die auf der Seite gepinnte ältere Contractrevision wird durch diesen redaktionellen Abgleich nicht ausgetauscht.',
      'Nächster Schritt: den gewünschten visuellen Stand festlegen und die Demo gegen genau diese Revision prüfen. Fehler und Schreibschutz müssen entweder als zusätzliche Contractfähigkeit oder als umgebendes Field-/Formularpattern spezifiziert werden. Der Verweis auf native HTML-Möglichkeiten allein genügt nicht als Nachweis für diese Bibliothek.',
    ] },
  { slug: 'shadcn-formulare-validierung', figure: 'validierung',
    alt: 'Ablauf: Eingeben, Absenden, Prüfen, nach bestätigter Annahme Erfolg zeigen. Bei fehlerhaften Angaben führt der Weg zur Korrektur und zurück zur Eingabe. Bei unklarer Serverantwort sind Speicherstand und sicherer Wiederholungsversuch eigens zu klären.',
    caption: 'Den ganzen Weg gestalten: einschliesslich Korrektur und unklarer Antwort. Ein Eingabefehler führt zurück zum Feld; ein Übermittlungsproblem benötigt eine passende Wiederherstellung.',
    paragraphs: [
      'Die Abbildung ist ein redaktioneller Ablaufvorschlag und kein exportierter Zustandsautomat. Sie verbindet die Schritte der Seite zu einem gemeinsamen Verständnis für Design und Produkt.',
      'Der gelesene Input-Contract regelt Textwert und Aktivierung. Er enthält keinen Formularversand, keine serverseitige Annahme, keine Fehlerübersicht und keinen Wiederholungsversuch. Diese Aufgaben gehören in die Spezifikation des Formularpatterns beziehungsweise des Produkts. Es wird hier kein solcher Contract vorgetäuscht.',
      'Für die Abnahme des Patterns fehlen noch konkrete Entscheidungen zum Fokus nach Absenden, zu bereits gespeicherten Werten bei einem Verbindungsabbruch und zum Schutz vor doppelter Übermittlung. Danach lassen sich die betroffenen Komponenten- und Patternregeln gezielt verknüpfen.',
    ] },
  { slug: 'shadcn-detailseite', figure: 'detailseite',
    alt: 'Breite Ansicht: Navigation und Kopf über zwei Bereichen; Hauptinhalt zwei Rasteranteile, Zusatzinformationen ein Anteil. Schmale Ansicht: Navigation, Kopf, Hauptinhalt und Zusatzinformationen untereinander. Die Lesereihenfolge bleibt eins bis vier.',
    caption: 'Die Bedeutung der Regionen bleibt beim Umbruch erhalten. Ein 2:1-Raster ist ein Ausgangspunkt; wichtige Informationen dürfen nicht in eine nebensächliche Randspalte verdrängt werden.',
    paragraphs: [
      'Das vorhandene Layoutbeispiel nutzt tatsächlich ein 2:1-Raster. Bei höchstens 639 px wechselt es zu einer Spalte und löst die haftende Zusatz-Card. Im breiten Zustand liegt diese 24 px unter dem oberen Rand. Diese Zahlen sind Implementierungsbeobachtungen am Beispiel, keine systemweit freigegebenen Layouttokens.',
      'Die Card verwendet derzeit einen Innenabstand zwischen 16 und 28 px. Der importierte Token-Export enthält komponentenbezogene Abstände, aber keine allgemeine Container-, Raster- oder Abstandsskala. Aus einem Input-Padding lässt sich keine Seitenrasterregel ableiten.',
      'Die Grafik beschreibt die Zielordnung. Offen bleibt insbesondere die Prüfung einer hohen Zusatz-Card bei geringer Fensterhöhe und vergrössertem Text. Der vorhandene Breitenumbruch allein löst diese Situation nicht nachweislich.',
    ] },
]
const base = { version: 1, direction: 'ltr', format: '', indent: 0 } as const
const text = (s: string) => ({ type:'text', version:1, text:s, detail:0, format:0, mode:'normal', style:'' })
const payload = await getPayload({ config })
try {
  const {docs:[system]} = await payload.find({collection:'design-systems',where:{slug:{equals:'shadcn'}},limit:1})
  assert(system)
  const scope = {designSystem:{equals:system.id}}
  const published = async () => (await payload.find({collection:'pages',pagination:false,depth:0,draft:false,sort:'id',where:{and:[scope,{_status:{equals:'published'}}]}})).docs
  const before = await published()
  const {docs:pages} = await payload.find({collection:'pages',pagination:false,depth:0,draft:true,where:scope})
  for(const entry of additions) assert(pages.find(p=>p.slug===entry.slug)?._status==='draft', `Entwurf fehlt: ${entry.slug}`)
  for(const entry of additions) {
    const page = pages.find(p=>p.slug===entry.slug)!
    if(JSON.stringify(page.content).includes(marker)) {console.log(`Bereits ergänzt: ${entry.slug}`);continue}
    const bytes = await readFile(`docs/handbook/figures/${entry.figure}.png`)
    const imageHash = createHash('sha256').update(bytes).digest('hex').slice(0,12)
    const filename = `handbuch-${entry.figure}-${imageHash}.png`
    const {docs:[existing]} = await payload.find({collection:'media',limit:1,where:{filename:{equals:filename}}})
    const media = existing ?? await payload.create({collection:'media',data:{alt:entry.alt},file:{name:filename,data:bytes,mimetype:'image/png',size:bytes.length}})
    const note: NonNullable<Page['content']>[number] = {blockType:'text',body:{root:{...base,type:'root',children:[
      {...base,type:'heading',tag:'h2',children:[text(marker)]},
      ...entry.paragraphs.map(s=>({...base,type:'paragraph',children:[text(s)]})),
    ]}}}
    // Append without replacing editor content or template fields. Keep existing contract pins and demos.
    const updated = await payload.update({collection:'pages',id:page.id,draft:true,data:{_status:'draft',content:[...(page.content??[]),{blockType:'guideline',recommendation:'do',image:media.id,explanation:entry.caption},note]}})
    assert.equal(updated._status,'draft')
    const reread=await payload.findByID({collection:'pages',id:page.id,draft:true,depth:1})
    assert.equal(reread.content?.length,(page.content?.length??0)+2)
    assert.deepEqual(reread.template,page.template)
    assert.deepEqual(reread.contract,page.contract)
    assert.deepEqual(reread.demo,page.demo)
    const diagram=reread.content!.at(-2)!
    assert(diagram.blockType==='guideline' && typeof diagram.image==='object' && diagram.image?.url)
    console.log(`${entry.slug}: Entwurf ${page.id}, Bild ${diagram.image.url}`)
  }
  assert.deepEqual(await published(),before,'Veröffentlichte Seiten verändert')
  await writeFile('docs/handbook/token-pairs.json',JSON.stringify({revision,source:`${root}/tokens.json`,sha256:sha,scope:'Opaque sRGB token pairs only; no browser or overall accessibility certification',pairs},null,2)+'\n')
  console.log('Geprüft: bestehende Inhalte erhalten, vier Entwürfe ergänzt, veröffentlichte Seiten unverändert.')
} finally { await payload.destroy() }
process.exit(0)
