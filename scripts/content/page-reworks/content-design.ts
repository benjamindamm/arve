import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const node=(text:string)=>({type:'text',version:1,text,detail:0,format:0,mode:'normal',style:''})
function copy(blockName:string,heading:string,...paragraphs:string[]):Block {
 return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[{type:'heading',tag:'h2',version:1,direction:'ltr',format:'',indent:0,children:[node(heading)]},...paragraphs.map(text=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[node(text)]}))]}}}
}
// Current editorial explanation based on the nine blocks captured on 2026-11-18.
// Historical source files remain unchanged; no mutable snapshot import.
const original: Block[] = [
  {
    "body": {
      "root": {
        "type": "root",
        "format": "",
        "indent": 0,
        "version": 1,
        "children": [
          {
            "tag": "h2",
            "type": "heading",
            "format": "",
            "indent": 0,
            "version": 1,
            "children": [
              {
                "mode": "normal",
                "text": "Projekt erstellen: Feld, Aktion und Ergebnis benennen",
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
                "mode": "normal",
                "text": "Das Feld heisst «Projektname», die Aktion «Projekt erstellen», das bestätigte Ergebnis «Projekt erstellt». Verwende diese Begriffe auch in Fehlermeldungen und beim Zurückkehren zum Formular. Ein Wechsel zu «Objekt» oder «Datensatz» erschwert die Zuordnung.",
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
                "mode": "normal",
                "text": "Die Beispiele gehören zum lokalen Gestaltungs-Piloten in de-CH. Projektname, Pflichtfeld und Längengrenze wurden für diesen Piloten festgelegt; sie stammen weder aus shadcn noch aus allgemeinen Unternehmensregeln. «Formulare und Validierung» erklärt, wann geprüft wird und wie man zum Formular zurückkehrt. «Mit dem Handbuch gestalten» beschreibt den Umfang und die Grenzen des Piloten.",
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
    },
    "blockName": null,
    "blockType": "text"
  },
  {
    "body": {
      "root": {
        "type": "root",
        "format": "",
        "indent": 0,
        "version": 1,
        "children": [
          {
            "tag": "h2",
            "type": "heading",
            "format": "",
            "indent": 0,
            "version": 1,
            "children": [
              {
                "mode": "normal",
                "text": "Vor der Eingabe: Label, Hilfe und Pflicht unterscheiden",
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
                "mode": "normal",
                "text": "Label: «Projektname». Es benennt den Wert und bleibt beim Tippen sichtbar. «Hier eingeben» benennt keinen Wert; ein verschwindender Platzhalter ersetzt das Label nicht.",
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
                "mode": "normal",
                "text": "Die Hilfe im Piloten lautet: «1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.» Nach dem Entfernen dieses Leerraums werden sichtbare Zeichen als Unicode-Graphemcluster gezählt, nicht Bytes oder einzelne Codepunkte. Diese Grenze wurde für den lokalen Piloten festgelegt; sie ist keine allgemeine Regel.",
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
                "mode": "normal",
                "text": "Für das einzelne Beispielfeld ist «Projektname (erforderlich)» eindeutig. In Formularen mit erforderlichen und freiwilligen Angaben kann vor den Feldern stehen: «Alle Angaben sind erforderlich, sofern sie nicht als optional gekennzeichnet sind». Eine freiwillige Ergänzung heisst dann «Beschreibung (optional)». Verwende eine Kennzeichnung durchgängig. Erkläre die Bedeutung, wenn du ein Sternchen verwendest.",
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
                "mode": "normal",
                "text": "«Projekt erstellen» beschreibt das Absenden der Angaben. Führt der nächste Schritt nur zu einer Prüfung, passt «Angaben prüfen». Formuliere die Beschriftung passend dazu, ob sie einen Wert, eine Einstellung oder eine Aktion bezeichnet.",
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
    },
    "blockName": null,
    "blockType": "text"
  },
  {
    "title": "Warum die vier Meldungen passen",
    "blockName": null,
    "items": [
      {
        "context": "Das Pflichtfeld ist leer",
        "before": "Ungültige Eingabe",
        "after": "Einen Projektnamen eingeben.",
        "reason": "Nur wenn der Projektname erforderlich ist und fehlt. Die Meldung benennt die fehlende Angabe und die Korrektur, ohne einen Formatfehler zu behaupten."
      },
      {
        "context": "Der Projektname überschreitet die erlaubte Länge",
        "before": "Der Name ist zu lang",
        "after": "Den Projektnamen auf höchstens 80 Zeichen kürzen.",
        "reason": "Im lokalen Piloten sind nach dem Entfernen von Leerraum am Anfang und Ende höchstens 80 Unicode-Graphemcluster erlaubt. Hilfe, Prüfung und Fehler müssen dieselbe Grenze nennen. Erhalte den eingegebenen Namen, damit er gekürzt werden kann. Die Grenze stammt weder aus shadcn noch aus allgemeinen Unternehmensregeln."
      },
      {
        "context": "Die Anfrage wird noch bearbeitet",
        "before": "Projekt erstellt",
        "after": "Projekt wird erstellt …",
        "reason": "Die Meldung passt, solange die Anfrage bearbeitet wird. Weder das Absenden noch eine erfolgreiche Feldprüfung bestätigt, dass das Projekt erstellt wurde."
      },
      {
        "context": "Die Antwort fehlt; das Ergebnis ist unbekannt",
        "before": "Projekt nicht erstellt. Erneut versuchen.",
        "after": "Es ist noch unklar, ob das Projekt erstellt wurde.",
        "reason": "Auch ohne Antwort kann das Projekt erstellt worden sein. Biete «Status prüfen» nur an, wenn sich der ursprüngliche Vorgang verlässlich abfragen lässt. Die Abfrage darf kein zweites Projekt erstellen. Sonst muss das Produkt einen konkreten Weg zur Klärung bereitstellen."
      }
    ],
    "blockType": "messageComparison"
  },
  {
    "body": {
      "root": {
        "type": "root",
        "format": "",
        "indent": 0,
        "version": 1,
        "children": [
          {
            "tag": "h2",
            "type": "heading",
            "format": "",
            "indent": 0,
            "version": 1,
            "children": [
              {
                "mode": "normal",
                "text": "Korrektur am richtigen Ort",
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
                "mode": "normal",
                "text": "Im Piloten mit einem einzigen Feld steht «Einen Projektnamen eingeben.» direkt bei «Projektname». Nach fehlgeschlagenem Absenden erhält das Feld den Fokus; eine Fehlerübersicht ist hier nicht vorgesehen. In Formularen mit mehreren Feldern ausserhalb des Piloten verwendet eine Fehlerübersicht dieselben Labels und Korrekturhinweise wie die Meldungen an den Feldern.",
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
                "mode": "normal",
                "text": "«Dieser Projektname ist bereits vergeben. Einen anderen Namen wählen.» passt nur ausserhalb des Piloten: Der Name muss fachlich eindeutig sein, der Konflikt bestätigt und seine Offenlegung zulässig. Im Piloten sind gleiche Namen erlaubt; es gibt keinen Namenskonfliktfehler. Bei einer Verbindungsstörung muss der Name nicht geändert werden.",
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
    },
    "blockName": null,
    "blockType": "text"
  },
  {
    "body": {
      "root": {
        "type": "root",
        "format": "",
        "indent": 0,
        "version": 1,
        "children": [
          {
            "tag": "h2",
            "type": "heading",
            "format": "",
            "indent": 0,
            "version": 1,
            "children": [
              {
                "mode": "normal",
                "text": "Erstellung bestätigen und Angaben erhalten",
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
                "mode": "normal",
                "text": "Erst wenn die Annahme bestätigt ist, passt: Projekt «Jahresbericht» erstellt. Der Name zeigt, welches Projekt gemeint ist. Biete «Projekt öffnen» nur an, wenn das erstellte Projekt darüber tatsächlich erreichbar ist.",
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
                "mode": "normal",
                "text": "«Die Angaben bleiben erhalten» darf nur erscheinen, wenn der aktuelle Rückweg sie tatsächlich bewahrt. Daraus folgt weder eine Speicherung auf dem Server noch die Wiederaufnahme nach dem Schliessen.",
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
    },
    "blockName": null,
    "blockType": "text"
  },
  {
    "body": {
      "root": {
        "type": "root",
        "format": "",
        "indent": 0,
        "version": 1,
        "children": [
          {
            "tag": "h2",
            "type": "heading",
            "format": "",
            "indent": 0,
            "version": 1,
            "children": [
              {
                "mode": "normal",
                "text": "Wann «Erneut versuchen» passt",
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
                "mode": "normal",
                "text": "«Projekt wurde nicht erstellt. Erneut versuchen.» kann passen, wenn die Anfrage nachweislich nicht angenommen und die Ursache behoben wurde. Ein Namenskonflikt gehört nicht zum Piloten. Ausserhalb des Piloten kann ein fachlich erforderlicher eindeutiger Name dazu führen, dass die Eingabe vor dem erneuten Absenden korrigiert werden muss.",
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
                "mode": "normal",
                "text": "Wenn unklar ist, ob das Projekt erstellt wurde, muss zuerst der Status geklärt werden. Im Piloten fehlt dafür noch die Integrationsschnittstelle. Deshalb gibt es weder einen bedienbaren Button «Status prüfen» noch «Erneut versuchen» oder einen erfundenen Supportweg. Die Unsicherheit bleibt sichtbar. Die Gestaltung beschreibt, was zur Klärung nötig ist; die vorhandene Demo kann es noch nicht leisten.",
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
    },
    "blockName": null,
    "blockType": "text"
  },
  {
    "body": {
      "root": {
        "type": "root",
        "format": "",
        "indent": 0,
        "version": 1,
        "children": [
          {
            "tag": "h2",
            "type": "heading",
            "format": "",
            "indent": 0,
            "version": 1,
            "children": [
              {
                "mode": "normal",
                "text": "Ton, Formate und Übersetzung abstimmen",
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
                "mode": "normal",
                "text": "Ruhig und konkret ist hier die Empfehlung: «Einen Projektnamen eingeben» hilft mehr als «Ups! Da ist etwas schiefgelaufen». Anrede, Orthografie und inklusive Ansprache bleiben bewusste Produktentscheidungen; die neutralen Beispiele legen weder Du noch Sie fest.",
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
                "mode": "normal",
                "text": "Lege bei Zahlen, Datumsangaben und Geldbeträgen zuerst die fachliche Bedeutung fest, dann das Format. Die Sprache allein bestimmt weder Region noch Währung oder Zeitzone. Unterscheide dabei ein Kalenderdatum von einem Zeitpunkt.",
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
                "mode": "normal",
                "text": "Übersetzungen als vollständige Nachrichten mit Kontext übergeben: Zustand, Feldbezug, variable Werte und erlaubte Folgeaktion. Lange Labels, Projektnamen und Fehlermeldungen müssen lesbar umbrechen. Eine deutsche Langtextprobe belegt noch keine Übersetzungsqualität oder Rechts-nach-links-Darstellung.",
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
    },
    "blockName": null,
    "blockType": "text"
  },
  {
    "body": {
      "root": {
        "type": "root",
        "format": "",
        "indent": 0,
        "version": 1,
        "children": [
          {
            "tag": "h2",
            "type": "heading",
            "format": "",
            "indent": 0,
            "version": 1,
            "children": [
              {
                "mode": "normal",
                "text": "Quellen, Empfehlungen und ausstehende Prüfungen",
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
                "mode": "normal",
                "text": "WAI erläutert zu WCAG 3.3.2 die Bereitstellung von Labels oder Anweisungen für Eingaben; notwendige Bedingungen sollen verständlich sein. Zu 3.3.3 müssen bei automatisch erkannten Eingabefehlern bekannte Korrekturvorschläge vermittelt werden, sofern Sicherheit oder Zweck dadurch nicht gefährdet werden. Die Understanding-Seiten sind informative Erläuterungen.",
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
                "mode": "normal",
                "text": "Die konkreten deutschen Texte, die Pflichtkonvention und die Trennung der Rückmeldungen sind unsere redaktionellen Vorschläge. Die Quellen bestimmen keine Markenstimme und bestätigen keine Fähigkeiten der Demo.",
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
                "mode": "normal",
                "text": "Die Eingabebedingungen und die Rückkehr zum Formular wurden für den lokalen Gestaltungs-Piloten festgelegt. Noch fehlen Nachweise für Annahme, Ablehnung und Statusklärung. Eine unabhängige Person soll aus der Fehlermeldung ableiten können, was zu korrigieren ist. Bei unbekanntem Ergebnis muss sie erkennen, dass noch unklar ist, ob das Projekt erstellt wurde. Diese Prüfung der Verständlichkeit und der Test mit assistiver Technik stehen aus. Die Texte ersetzen keine Produktfreigabe.",
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
    },
    "blockName": null,
    "blockType": "text"
  },
  {
    "body": {
      "root": {
        "type": "root",
        "format": "",
        "indent": 0,
        "version": 1,
        "children": [
          {
            "tag": "h2",
            "type": "heading",
            "format": "",
            "indent": 0,
            "version": 1,
            "children": [
              {
                "mode": "normal",
                "text": "Im Formularweg weiterarbeiten",
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
                  "url": "/systems/shadcn/formulare-validierung",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Formulare und Validierung · Ablauf, Prüfzeitpunkt und Wiederherstellung",
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
                  "url": "/systems/shadcn/barrierefreiheit",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Barrierefreiheit · Feldzuordnung und Rückmeldungen prüfen",
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
                  "url": "/systems/shadcn/components/input",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Input · Anatomie und bestehende Vorschau",
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
                  "url": "https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "WAI · Labels or Instructions (3.3.2), gelesen 18.11.2026",
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
                  "url": "https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "WAI · Error Suggestion (3.3.3), gelesen 18.11.2026",
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
    "blockName": null,
    "blockType": "text"
  }
]
const messages = original.find((block): block is Extract<Block, {blockType:'messageComparison'}> => block.blockType === 'messageComparison')!
export const release = {
 expectedUpdatedAt:"2026-11-20T15:15:38.946Z",
 summary:'Werte klar benennen, Korrekturen zeigen und nur bestätigte Ergebnisse melden.',
 content:[
  copy('writing-example','Projekt erstellen: so werden Texte konkret',
   'Zu unbestimmt','Konkret für diesen Schritt',
   'Hier eingeben','Bitte korrekt ausfüllen.','Weiter',
   'Projektname (erforderlich)','Jahresbericht','1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.','Projekt erstellen',
   'Das Label benennt die Eingabe, die Hilfe erklärt die Anforderungen. Der Button sagt, was als Nächstes geschieht.',
   'Dieses statische Textbeispiel erstellt kein Projekt. Das Pflichtfeld und die Grenze von 80 Zeichen gelten für den lokalen Piloten.'),
  copy('writing-rules','Vier Regeln beim Schreiben',
   'Begriffe einheitlich verwenden. «Projektname», «Projekt erstellen», «Projekt erstellt»: Feld, Aktion und Ergebnis bleiben erkennbar verbunden.',
   'Anforderungen vor der Eingabe erklären. Das Label bleibt sichtbar. Hilfe und Fehler nennen dieselbe Grenze; ein Platzhalter ersetzt kein Label.',
   'Die nächste Handlung benennen. «Angaben prüfen» führt zur Prüfung; «Projekt erstellen» zur Übermittlung. «Weiter» lässt das Ziel offen.',
   'Korrekturen erklären. Nenne die fehlende Angabe oder die konkrete Änderung. Bei einer Verbindungsstörung muss die Eingabe nicht geändert werden.'),
  { ...messages, blockName:'writing-messages', title:'Meldungen passend zum Stand des Vorgangs', items:messages.items.map((item,index)=>index===1?{...item,reason:'Im lokalen Piloten sind höchstens 80 Zeichen erlaubt. Hilfe, Prüfung und Fehler nennen dieselbe Grenze. Erhalte den eingegebenen Namen, damit er gekürzt werden kann.'}:item).concat([{context:'Die Annahme ist bestätigt',before:'Fertig!',after:'Projekt «Jahresbericht» erstellt.',reason:'Diese Meldung passt erst nach bestätigter Annahme. Biete «Projekt öffnen» nur an, wenn das erstellte Projekt darüber tatsächlich erreichbar ist.'}]) },
  copy('writing-message-labels','Textvergleich','Unklar oder unbelegt','Passend unter dieser Bedingung'),
  copy('writing-check','Vor der Übergabe prüfen',
   'Kann eine andere Person aus der Fehlermeldung ableiten, was zu korrigieren ist? Erkennt sie bei unbekanntem Ergebnis, dass noch unklar ist, ob das Projekt erstellt wurde?',
   'Lange Labels und Meldungen umbrechen lassen. Übersetzungen als vollständige Nachrichten mit Zustand, Feldbezug, variablen Werten und erlaubter Folgeaktion übergeben.',
   'Bei unbekanntem Ergebnis gibt es im Piloten keinen bedienbaren Button «Status prüfen» oder «Erneut versuchen»: Die notwendige Integrationsschnittstelle fehlt. Nachweise für Annahme, Ablehnung und Statusklärung sowie die Prüfung der Verständlichkeit und der Test mit assistiver Technik stehen aus.'),
  copy('writing-evidence','Details zu Eingaben, Rückmeldungen und Quellen',
   'Hier sind die Regeln und Grenzen der Beispiele genauer erklärt: was im lokalen Piloten festgelegt wurde, was wir redaktionell empfehlen und was die WAI erläutert. Ausstehende Prüfungen sind jeweils benannt.',
   'Die Beispiele sind redaktionelle Vorschläge und ersetzen keine Produktfreigabe. Eine Markenstimme wird hier nicht festgelegt. Die Beispiele belegen keine Funktionen der Demo.'),
  ...original,
 ] satisfies Page['content'],
}
