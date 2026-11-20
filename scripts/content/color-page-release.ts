import type { Page } from '../../src/payload-types'
import { foundationsRelease } from './foundations-release'
import { colorPairs, exportColor, colorContrast } from '../../src/docs/color-page-values'
type Block = NonNullable<Page['content']>[number]
const original = foundationsRelease.find(page=>page.slug==='shadcn-farben')!
const text = (heading: string, ...paragraphs: string[]): Block => ({blockType:'text',body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[{type:'heading',tag:'h2',version:1,direction:'ltr',format:'',indent:0,children:[{type:'text',version:1,text:heading}]},...paragraphs.map(p=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[{type:'text',version:1,text:p}]}))]}}})
const pairs = [
 ['Lesetext','Titel und Inhalt auf der Grundfläche.'],
 ['Primäre Handlung','Eine wichtige Aktion hervorheben: Änderungen speichern.'],
 ['Ergänzender Text','Zeitangaben und Hilfe auf der Grundfläche; wichtige Hinweise müssen lesbar bleiben.'],
].map(([title,explanation],i): Block=>{
 const [fg,bg]=colorPairs[i]
 return {blockType:'study',kind:'colors',title,explanation,source:`${fg} auf ${bg}. `+(['light','dark'] as const).map(theme=>`${theme==='light'?'Hell':'Dunkel'}: ${exportColor(theme,fg)} auf ${exportColor(theme,bg)} = ${colorContrast(exportColor(theme,fg),exportColor(theme,bg))}:1.`).join(' '),revision:'5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed'}
})
export const colorPageRelease = {
 summary:'Wähle Text und Fläche als Paar. Die Rolle bleibt gleich, die Werte wechseln mit dem Theme.',
 content:[...pairs,
 text('Drei Regeln für die Farbwahl',
 'Wähle zuerst den Einsatz: Lesetext, primäre Handlung oder ergänzende Information. Verwende das passende Text-/Flächenpaar gemeinsam.',
 'Gewichte gezielt. Eine starke Fläche lenkt zur wichtigen Handlung; Abstand und Kontur können andere Inhalte bereits gliedern.',
 'Prüfe jedes Paar auf dem tatsächlichen Hintergrund in Hell und Dunkel – auch bei Hover, Fokus und Auswahl.'),
 text('Zustände brauchen mehr als Farbe',
 'Auswahl: «✓ E-Mail ausgewählt». Eine Markierung und Text erhalten die Bedeutung ohne Farbunterschied.',
 'Fehler + Fokus: «E-Mail-Adresse · alex.example.com · Ergänze das @ in der Adresse.» Meldung am Feld und sichtbarer Fokus bleiben gleichzeitig erhalten.',
 'Nicht verfügbar: «Speichern · Bitte zuerst die Adresse korrigieren.» Der Grund bleibt ausserhalb des deaktivierten Elements lesbar.',
 'Diese Beispiele erklären die Gestaltung. Fehler-, Erfolgs- und Warnfarben sowie Hover-Zuordnungen sind im lokalen Theme-Export noch offen. Weiter: Themes und visuelle Zustände.'),
 text('Was die Kontrastzahl aussagt',
 'Berechnet aus den sechs opaken sRGB-Text-/Flächenpaaren oben, auf zwei Dezimalstellen gerundet. Transparenz, verschachtelte Flächen, Feldgrenzen und zusammengesetzte Browserzustände sind damit nicht geprüft.',
 'Für eine Komponentenprüfung Messung, Zustand, tatsächlichen Hintergrund und Referenzstand zusammen festhalten. Ein Tokenpaar allein bestätigt keine vollständige Komponente.'),
 original.content[2] as Block,
 original.content[5] as Block,
 original.content[6] as Block,
 ],
} satisfies Pick<Page,'summary'|'content'>
