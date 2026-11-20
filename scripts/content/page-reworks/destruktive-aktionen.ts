import type {Page} from '../../../src/payload-types'
type Block=NonNullable<Page['content']>[number]
const text=(value:string)=>({type:'text',version:1,text:value,detail:0,format:0,mode:'normal',style:''})
function copy(blockName:string,...paragraphs:string[]):Block{return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:paragraphs.map(value=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[text(value)]}))}}}}
function links(blockName:string,entries:[string,string][]):Block{return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:entries.map(([label,url])=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[{type:'link',version:1,direction:'ltr',format:'',indent:0,fields:{linkType:'custom',url,newTab:false},children:[text(label)]}]}))}}}}
// Published page read on 20 November 2026, push:false and read-only DB connection.
// Its three original blocks match this frozen snapshot and remain below as historical detail.
const original: {content: Block[]} = {
  "content": [
    {
      "body": {
        "root": {
          "type": "root",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "type": "paragraph",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Ein Alert Dialog unterbricht den Ablauf für eine Entscheidung und bietet Aktionen zum Abbrechen und Fortfahren.",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr"
            },
            {
              "type": "paragraph",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "type": "link",
                  "fields": {
                    "url": "https://ui.shadcn.com/docs/components/base/alert-dialog",
                    "newTab": false,
                    "linkType": "custom"
                  },
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "shadcn/ui · Alert Dialog",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr"
                }
              ],
              "direction": "ltr"
            }
          ],
          "direction": "ltr"
        }
      },
      "blockType": "text"
    },
    {
      "recommendation": "do",
      "explanation": "Beschreibe Objekt und Folge, etwa «Rechnung RE-1048 endgültig löschen?». Benenne beide Aktionen eindeutig und prüfe, wohin der Fokus nach Abbruch oder Abschluss zurückkehrt.",
      "blockType": "guideline"
    },
    {
      "recommendation": "dont",
      "explanation": "Jede kleine, leicht rückgängig zu machende Änderung mit einer Bestätigung unterbrechen.",
      "blockType": "guideline"
    }
  ]
}
export const release={
 expectedUpdatedAt:'2026-11-17T22:33:55.334Z',
 summary:'Vor einer folgenreichen Aktion Ziel, Auswirkung und Wiederherstellbarkeit verständlich machen.',
 content:[
  copy('destructive-demo','Eine Projektvorlage entfernen','Lokale Demo · synthetisches Beispiel ohne echte Projekte oder Speicherung.',
   'Projektvorlage «Sommerfest»','Die Vorlage verschwindet aus dieser Demo-Liste. Neuladen der Seite setzt die Demo zurück.',
   'Entfernen in Demo prüfen','Projektvorlage «Sommerfest» aus der Demo entfernen?',
   'Die Vorlage wird nur aus der lokalen Demo-Liste entfernt. Echte Projekte und Daten bleiben unberührt. Nach Neuladen ist die Vorlage wieder vorhanden.',
   'Abbrechen','Vorlage aus Demo entfernen','Vorlage in der Demo vorhanden.','Abgebrochen. Die Vorlage bleibt in der Demo.','Vorlage aus der Demo entfernt.','Demo neu starten'),
  copy('destructive-rules','Wann braucht es eine Bestätigung?',
   'Bestätigen, wenn ein Fehlklick spürbare Folgen hätte und die Aktion nicht einfach rückgängig zu machen ist: etwa gemeinsame Daten löschen oder einen Zugriff entziehen. Vorher sagen, welches Objekt und welche weiteren Personen betroffen sind.',
   'Nicht für jede kleine Änderung unterbrechen. Bei leicht umkehrbaren Einstellungen genügt meist eine klare unmittelbare Rückmeldung. Rückgängig nur anbieten, wenn es tatsächlich funktioniert und die Grenzen verständlich sind.',
   'Nicht über den Dialog eine unklare Aktion reparieren. Zuerst Ziel und Umfang klären; bei mehreren Objekten deren Anzahl nennen. Erst dann die konkrete Handlung bestätigen lassen. «Vorlage entfernen» hilft bei der Entscheidung, «OK» nicht.'),
  copy('destructive-anatomy','Diese Angaben gehören an die Entscheidung',
   'Ziel: den betroffenen Namen oder die Anzahl im Titel nennen. Folge: erklären, was verschwindet oder sich ändert. Wiederherstellbarkeit: nur den tatsächlich vorhandenen Weg und seine Grenzen nennen; «endgültig» ist keine Standardformulierung.',
   'Abbruch bleibt klar sichtbar und erhält im Beispiel den ersten Fokus. Tab und Umschalt+Tab bleiben im modalen Dialog, Escape bricht ab. Nach dem Schliessen geht der Fokus zum Auslöser zurück; entfällt dieser im Produkt, ein sinnvolles nächstes Ziel vorsehen.',
   'Nach Bestätigung den tatsächlichen Ausgang melden. Während einer laufenden Aktion Mehrfachauslösen verhindern; bei Fehlern keinen Erfolg anzeigen. Die lokale Demo zeigt nur Abbruch und erfolgreichen lokalen Abschluss, keine echte Serveraktion.'),
  links('destructive-next',[
   ['Handlungstexte formulieren → Content Design','/systems/shadcn/content-design'],
   ['Ergebnis und Fehler mitteilen → Laden, leer und Fehler','/systems/shadcn/laden-leer-fehler'],
   ['Handlungen gestalten → Button','/systems/shadcn/components/button'],
  ]),
  copy('destructive-evidence','Quellen, Prüfgrenzen und bisheriger Stand',
   'shadcn/ui ist die Referenzimplementierung. Die Alert-Dialog-Referenz beschreibt eine modale Unterbrechung mit Titel, Beschreibung und Abbruch-/Aktionspaar. Die Formulierung einer unwiderruflichen Kontolöschung aus ihrem Beispiel ist keine allgemeine Produkteigenschaft.',
   'WAI APG beschreibt benannte modale Dialoge, Fokusführung, Escape und die Fokus-Rückkehr. Für einen schwer umkehrbaren letzten Schritt nennt es den Fokus auf der am wenigsten destruktiven Aktion als geeignete Möglichkeit. Die drei Entscheidungsregeln oben sind eine redaktionelle Gestaltungshilfe.',
   'Die Vorschau verwendet einen nativen HTML-Dialog mit showModal(), beschriftet über Titel und kurze Folgenbeschreibung. Sie ist keine eingebundene shadcn-Komponente und belegt weder einen neuen Komponenten-Contract noch eine allgemeine Freigabe für assistive Technik.',
   'Im Produkt bleiben Umfang, Berechtigungen, Wiederherstellung, laufende Verarbeitung, Fehler und das Ziel nach einer Entfernung am tatsächlichen Ablauf zu prüfen. Die bisherigen drei CMS-Blöcke folgen unverändert als historischer Stand.'),
  links('destructive-sources',[
   ['shadcn/ui · Alert Dialog, gelesen am 20.11.2026','https://ui.shadcn.com/docs/components/base/alert-dialog'],
   ['WAI APG · Alert Dialog, gelesen am 20.11.2026','https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/'],
   ['WAI APG · Modal Dialog, gelesen am 20.11.2026','https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/'],
  ]),
  ...original.content as Block[],
 ],
} satisfies {expectedUpdatedAt:string}&Pick<Page,'summary'|'content'>
