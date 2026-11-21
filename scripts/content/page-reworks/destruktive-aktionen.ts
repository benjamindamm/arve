import type {Page} from '../../../src/payload-types'
type Block=NonNullable<Page['content']>[number]
const text=(value:string)=>({type:'text',version:1,text:value,detail:0,format:0,mode:'normal',style:''})
function copy(blockName:string,...paragraphs:string[]):Block{return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:paragraphs.map(value=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[text(value)]}))}}}}
function links(blockName:string,entries:[string,string][]):Block{return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:entries.map(([label,url])=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[{type:'link',version:1,direction:'ltr',format:'',indent:0,fields:{linkType:'custom',url,newTab:false},children:[text(label)]}]}))}}}}
// Published page read on 20 November 2026, push:false and read-only DB connection.
// The three earlier handbook blocks below are current explanatory copy, edited for clarity.
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
      "explanation": "Nenne das betroffene Objekt und die Folgen, etwa «Rechnung RE-1048 endgültig löschen?». Beschrifte die Aktionen zum Abbrechen und Fortfahren eindeutig. Prüfe, wohin der Fokus nach dem Abbruch oder Abschluss zurückkehrt.",
      "blockType": "guideline"
    },
    {
      "recommendation": "dont",
      "explanation": "Jede kleine Änderung braucht eine Bestätigung, auch wenn sie sich leicht rückgängig machen lässt.",
      "blockType": "guideline"
    }
  ]
}
export const release={
 expectedUpdatedAt:'2026-11-20T14:31:27.362Z',
 summary:'Mach vor einer Bestätigung klar, was betroffen ist, was sich ändert und ob sich die Aktion rückgängig machen lässt.',
 content:[
  copy('destructive-demo','Eine Projektvorlage entfernen','Lokale Demo mit Beispieldaten · keine echten Projekte, keine Speicherung.',
   'Projektvorlage «Sommerfest»','Die Vorlage verschwindet aus dieser Demo-Liste. Wenn du die Seite neu lädst, wird die Demo zurückgesetzt.',
   'Entfernen in Demo prüfen','Projektvorlage «Sommerfest» aus der Demo entfernen?',
   'Die Vorlage wird nur aus der lokalen Demo-Liste entfernt. Echte Projekte und Daten bleiben unberührt. Wenn du die Seite neu lädst, ist die Vorlage wieder vorhanden.',
   'Abbrechen','Vorlage aus Demo entfernen','Vorlage in der Demo vorhanden.','Abgebrochen. Die Vorlage bleibt in der Demo.','Vorlage aus der Demo entfernt.','Demo neu starten'),
  copy('destructive-rules','Wann braucht es eine Bestätigung?',
   'Lass die Aktion bestätigen, wenn ein Fehlklick spürbare Folgen hätte und sie sich nicht einfach rückgängig machen lässt, etwa beim Löschen gemeinsamer Daten oder beim Entziehen eines Zugriffs. Erkläre vorher, welches Objekt und welche weiteren Personen betroffen sind.',
   'Unterbrich nicht jede kleine Änderung mit einer Nachfrage. Bei Einstellungen, die sich leicht zurücksetzen lassen, genügt meist eine klare unmittelbare Rückmeldung. Biete «Rückgängig» nur an, wenn es tatsächlich funktioniert, und erkläre die Grenzen.',
   'Die Aktion muss schon vor dem Bestätigungsdialog verständlich sein. Kläre zuerst Ziel und Umfang; nenne bei mehreren Objekten deren Anzahl. Lass dann die konkrete Handlung bestätigen. «Vorlage entfernen» hilft bei der Entscheidung, «OK» nicht.'),
  copy('destructive-anatomy','Das gehört in den Bestätigungsdialog',
   'Nenne im Titel den Namen des betroffenen Objekts oder die Anzahl der Objekte. Erkläre, was verschwindet oder sich ändert und ob sich die Aktion rückgängig machen lässt. Beschreibe nur den tatsächlich verfügbaren Weg und seine Grenzen. Verwende «endgültig» nur, wenn es zutrifft.',
   'Die Aktion zum Abbrechen bleibt klar sichtbar und erhält im Beispiel zuerst den Fokus. Tab und Umschalt+Tab bewegen den Fokus nur innerhalb des modalen Dialogs; Escape bricht ab. Nach dem Schliessen kehrt der Fokus zum Auslöser zurück. Falls dieser im Produkt danach entfällt, brauchst du ein sinnvolles nächstes Fokusziel.',
   'Melde das Ergebnis der Aktion, sobald es feststeht. Verhindere während der Verarbeitung, dass sie mehrfach ausgelöst wird. Zeige bei einem Fehler keinen Erfolg an. Die lokale Demo zeigt nur den Abbruch und das erfolgreiche Entfernen aus der lokalen Liste. Sie führt keine echte Serveraktion aus.'),
  links('destructive-next',[
   ['Handlungstexte formulieren → Content Design','/systems/shadcn/content-design'],
   ['Ergebnis und Fehler mitteilen → Laden, leer und Fehler','/systems/shadcn/laden-leer-fehler'],
   ['Handlungen gestalten → Button','/systems/shadcn/components/button'],
  ]),
  copy('destructive-evidence','Quellen und Grenzen der Vorschau',
   'shadcn/ui ist die Referenzimplementierung. Die Alert-Dialog-Referenz beschreibt einen modalen Dialog, der den Ablauf unterbricht. Er enthält einen Titel, eine Beschreibung sowie Aktionen zum Abbrechen und Fortfahren. Im Beispiel geht es um eine unwiderrufliche Kontolöschung. Daraus lässt sich keine allgemeine Eigenschaft anderer Produkte ableiten.',
   'WAI APG beschreibt modale Dialoge mit zugänglichem Namen, die Fokusführung, Escape und die Rückkehr des Fokus nach dem Schliessen. Lässt sich ein letzter Schritt nur schwer rückgängig machen, kann der erste Fokus laut APG auf der am wenigsten destruktiven Aktion liegen. Die drei Entscheidungsregeln oben sind eine redaktionelle Gestaltungshilfe.',
   'Die Vorschau verwendet einen nativen HTML-Dialog mit showModal(). Er ist über den Titel und eine kurze Beschreibung der Folgen beschriftet. Die Vorschau bindet keine shadcn-Komponente ein. Sie belegt weder einen neuen Komponenten-Contract noch eine allgemeine Freigabe für assistive Technik.',
   'Prüfe im tatsächlichen Produktablauf, was die Aktion umfasst, welche Berechtigungen nötig sind, ob sich Daten wiederherstellen lassen und wie die Oberfläche während der Verarbeitung und bei Fehlern reagiert. Prüfe auch, wohin der Fokus nach einer Entfernung geht. Die drei ergänzenden Hinweise unten wurden sprachlich überarbeitet.'),
  links('destructive-sources',[
   ['shadcn/ui · Alert Dialog, gelesen am 20.11.2026','https://ui.shadcn.com/docs/components/base/alert-dialog'],
   ['WAI APG · Alert Dialog, gelesen am 20.11.2026','https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/'],
   ['WAI APG · Modal Dialog, gelesen am 20.11.2026','https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/'],
  ]),
  ...original.content as Block[],
 ],
} satisfies {expectedUpdatedAt:string}&Pick<Page,'summary'|'content'>
