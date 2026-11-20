import type { Page } from '../../../src/payload-types'
import { foundationsRelease } from '../foundations-release'

type Block = NonNullable<Page['content']>[number]
const node = (text: string) => ({type:'text',version:1,text,detail:0,format:0,mode:'normal',style:''})
function copy(blockName:string, heading:string, ...paragraphs:string[]):Block {
  return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[
    {type:'heading',tag:'h2',version:1,direction:'ltr',format:'',indent:0,children:[node(heading)]},
    ...paragraphs.map(text=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[node(text)]})),
  ]}}}
}
// Read-only Payload comparison: original content equals this frozen release,
// ignoring object key order, generated ids and null fields (20.11.2026).
const original = foundationsRelease.find(page=>page.slug==='shadcn-bewegung')!
export const release = {
  expectedUpdatedAt:'2026-11-17T23:33:02.581Z',
  summary:'Zeige vor und nach der Handlung denselben Zusammenhang – auch ohne Animation.',
  content:[
    copy('motion-example','Kontaktdetails öffnen',
      'Vorher · geschlossen','Nachher · geöffnet','Kontakt','Alex Beispiel',
      'Details anzeigen','Details ausblenden','E-Mail','alex@example.com',
      'Vorher ist nur der Name sichtbar. Nach dem Öffnen erscheint die zugehörige E-Mail direkt darunter. Der Name bleibt am selben Ort.',
      'Der Übergang kann die Zugehörigkeit verdeutlichen. Das geöffnete Ergebnis bleibt ohne Bewegung vollständig lesbar.'),
    copy('motion-preview','Freiwillige Vorschau',
      'Ohne Bewegung anzeigen','Vorschau öffnen','Vorschau schliessen',
      'Die Vorschau startet erst beim Öffnen und läuft einmal. Schliessen beendet sie; der Fokus bleibt auf dem Auslöser. Die Systempräferenz für reduzierte Bewegung oder die Option oben zeigt die E-Mail sofort.',
      'Gestaltungsstudie · 300 ms nur für diese Vorschau, keine freigegebene Dauer oder Kurve.'),
    copy('motion-rules','Drei Entscheidungen für den Entwurf',
      'Ausgang und Ergebnis zuerst. Welche Information kommt hinzu? Im Beispiel wird eine E-Mail sichtbar; eine reine Ortsänderung würde diese Aufgabe nicht erklären.',
      'Bewegung begründen. Zeige damit die Beziehung zwischen Auslöser und Inhalt. Verzögere keine notwendige Rückmeldung und vermeide automatische Wiederholungen.',
      'Ohne Bewegung dasselbe Ergebnis. Inhalt, Reihenfolge und Bedienung bleiben erhalten. Plane Schliessen und wiederholte Eingaben mit; der Fokus soll nachvollziehbar bleiben.'),
    copy('motion-checks','Am Produkt prüfen',
      'Öffnen → während des Übergangs schliessen → erneut öffnen. Danach denselben Weg ohne Bewegung und mit der Systempräferenz wiederholen. Prüfe Tastaturbedienung, Fokus, lange Inhalte und schmale Ansichten.',
      'Eine laufende Animation bestätigt keinen Erfolg. Rückmeldung, Fehler und Wiederholung gehören zum tatsächlichen Systemzustand. Die Vorschau macht keine Anfrage und speichert nichts.'),
    copy('motion-evidence','Quellen, Grenzen und ursprüngliche Studie',
      'Die WAI-Erläuterung zu WCAG 2.3.3 (AAA) begründet abschaltbare, nicht wesentliche Bewegung nach Interaktion. Quelle am 20.11.2026 erneut gelesen. Die ursprünglichen Texte und die frühere abstrakte Studie folgen unverändert als Vertiefung.',
      'Die lokale Referenz enthält keine gemeinsame Skala für Dauer oder Kurven. Diese Vorschau ist keine Komponentenfreigabe und kein Nachweis nativer Plattformunterstützung.'),
    ...original.content as Block[],
  ],
} satisfies {expectedUpdatedAt:string} & Pick<Page,'summary'|'content'>
