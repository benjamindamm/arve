import type { Page } from '../../../src/payload-types'
import { foundationsRelease } from '../foundations-release'

type Block = NonNullable<Page['content']>[number]
const node = (text: string) => ({type:'text',version:1,text,detail:0,format:0,mode:'normal',style:''})
function copy(blockName: string, heading: string, ...paragraphs: string[]): Block {
  return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[
    {type:'heading',tag:'h2',version:1,direction:'ltr',format:'',indent:0,children:[node(heading)]},
    ...paragraphs.map(text=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[node(text)]})),
  ]}}}
}
const original = foundationsRelease.find(page=>page.slug==='shadcn-themes-und-zustaende')!
export const release = {
  expectedUpdatedAt:'2026-11-17T23:33:02.422Z',
  summary:'Vergleiche dieselbe Auswahl, denselben Fehler und dieselbe Aktion in Hell und Dunkel.',
  content:[
    copy('theme-example','Dieselbe Aufgabe in zwei Themes',
      'Hell','Dunkel','Dein Kontakt','Ausgewählt','E-Mail ausgewählt',
      'Fehler + Fokus','E-Mail-Adresse','alex.example.com','Korrektur nötig',
      'Ergänze das @ in der Adresse.','Nicht verfügbar','Speichern',
      'Bitte zuerst die Adresse korrigieren.'),
    copy('theme-stand','Stand des Beispiels',
      'Statische Gestaltungsstudie · lokale Theme-Farben · Komponentenverhalten offen',
      'Die Kontur zeigt den Fokus schematisch; beide Felder sind keine bedienbaren Eingaben. Eine Fehlerfarbe ist lokal noch nicht zugeordnet.'),
    copy('theme-rules','Drei Regeln für den Vergleich',
      'Vergleiche denselben Inhalt. Auswahl, Zuordnung der Fehlermeldung und nächster Schritt bleiben in jedem Theme erhalten. Text, Konturen und Flächen gemeinsam gestalten; dunkle Flächen nicht pauschal invertieren.',
      'Kombiniere die Zustände. Im Beispiel bleiben Fehlertext und Fokus gleichzeitig sichtbar. Eine Auswahl geht beim Fokuswechsel nicht verloren; Farbe wird durch Häkchen und Text ergänzt.',
      'Erkläre den nächsten Schritt ausserhalb einer inaktiven Aktion. Die Korrekturhilfe bleibt sichtbar, auch ohne Hover und ohne den deaktivierten Button erreichen zu müssen.'),
    copy('theme-review','Im tatsächlichen Produkt prüfen',
      'Grundfläche und primäre Handlung → langer Hilfetext → Auswahl → Fokus → Fokus mit Fehler → überlagerte Fläche. Diesen Weg in jedem angebotenen Theme wiederholen, einschliesslich Text und Abgrenzung auf abgesetzten Flächen.',
      'Theme-Auswahl, Systempräferenz, Persistenz und Wechselverhalten sind Produktentscheidungen. Dieses Beispiel legt sie nicht fest. Native Darstellungen gesondert gestalten und prüfen.'),
    copy('theme-evidence','Quellen, offene Rollen und ursprüngliche Studie',
      'Die folgenden ursprünglichen Studientexte bleiben als fachliche Vertiefung erhalten. Exportwerte und schematische Komposition sind getrennt: Auswahlzuordnung und Fokusform sind keine bestätigte Komponentenfähigkeit.'),
    ...original.content as Block[],
  ],
} satisfies {expectedUpdatedAt:string} & Pick<Page,'summary'|'content'>
