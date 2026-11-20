import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const node=(text:string)=>({type:'text',version:1,text,detail:0,format:0,mode:'normal',style:''})
function copy(blockName:string,heading:string,...paragraphs:string[]):Block {
 return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[{type:'heading',tag:'h2',version:1,direction:'ltr',format:'',indent:0,children:[node(heading)]},...paragraphs.map(text=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[node(text)]}))]}}}
}
// Literal read-only MCP capture of all nine original blocks, 2026-11-18T00:38:59.418Z.
// No snapshot import: subsequent CMS exports cannot alter this evidence.
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
                "text": "Ein Projekt anlegen: jeder Text hat eine Aufgabe",
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
                "text": "Das Feld heisst «Projektname», die Aktion «Projekt erstellen», das bestätigte Ergebnis «Projekt erstellt». Diese Begriffe bleiben auch im Fehler und im Rückweg erhalten. Ein Wechsel zu «Objekt» oder «Datensatz» verlangt eine unnötige Übersetzung.",
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
                "text": "Die folgenden Formulierungen begleiten den lokalen Gestaltungs-Piloten in de-CH. Projektname, Pflicht und Längengrenze sind dafür neu gewählte Referenzentscheidungen, keine upstream-Vorgaben oder Firmenregeln. Prüfzeitpunkt und Rückwege führt das Formularpattern; die vollständige Pilotgrenze führt «Gestaltungs-Pilot».",
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
                "text": "Hilfe im Piloten: «1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.» Gezählt werden danach sichtbare Zeichen als Unicode-Graphemcluster, nicht Bytes oder einzelne Codepunkte. Diese Grenze ist eine neue lokale Referenzentscheidung für den Piloten, keine allgemeine Arve-Regel.",
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
                "text": "Pflicht: Für das einzelne Beispielfeld ist «Projektname (erforderlich)» eindeutig. Bei gemischten Formularen ist etwa «Alle Angaben sind erforderlich, sofern sie nicht als optional gekennzeichnet sind» vor den Feldern möglich. Dann heisst eine freiwillige Ergänzung «Beschreibung (optional)». Eine Konvention durchgängig verwenden; ein Sternchen braucht eine erklärte Bedeutung.",
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
                "text": "Aktion: «Projekt erstellen» beschreibt die tatsächliche Übermittlung. Führt der nächste Schritt nur zu einer Prüfung, passt «Angaben prüfen». Ein Label für einen Wert, eine Einstellung und eine Aktion benötigt jeweils eine andere Sprachform.",
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
    "title": "Vier Meldungen: die Aussage folgt dem bekannten Zustand",
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
        "reason": "80 Unicode-Graphemcluster nach Entfernen von Rand-Leerraum sind die lokale Pilotgrenze. Hilfe, Prüfung und Fehler nennen dieselbe Grenze; den Wert zum Kürzen erhalten. Keine upstream- oder Firmenregel."
      },
      {
        "context": "Die Anfrage wird noch bearbeitet",
        "before": "Projekt erstellt",
        "after": "Projekt wird erstellt …",
        "reason": "Der Start der Übermittlung bestätigt noch keine Annahme. Diese Aussage passt nur zum laufenden Vorgang; ein erfolgreicher Feldcheck beweist ebenfalls keine Erstellung."
      },
      {
        "context": "Die Antwort fehlt; das Ergebnis ist unbekannt",
        "before": "Projekt nicht erstellt. Erneut versuchen.",
        "after": "Es ist noch unklar, ob das Projekt erstellt wurde.",
        "reason": "Die ausgebliebene Antwort beweist keinen Nicht-Erfolg. «Status prüfen» nur anbieten, wenn eine verlässliche Abfrage des ursprünglichen Vorgangs existiert; sie darf kein zweites Projekt erstellen. Andernfalls braucht das Produkt einen konkreten Klärungsweg."
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
                "text": "Im Einzelfeld-Piloten steht «Einen Projektnamen eingeben.» direkt bei «Projektname»; nach fehlgeschlagenem Absenden geht der Fokus zum Feld. Eine Fehlerübersicht ist hier nicht vorgesehen. Allgemein ausserhalb des Piloten: Bei mehreren Feldern verwendet eine Übersicht dieselben Labels und Korrekturen wie die Feldhinweise.",
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
                "text": "Ausserhalb des Piloten, nur bei fachlich verlangter Eindeutigkeit, bestätigtem Namenskonflikt und zulässiger Offenlegung: «Dieser Projektname ist bereits vergeben. Einen anderen Namen wählen.» Im Piloten sind gleiche Namen zulässig; es gibt keinen Namenskonfliktfehler. Eine Verbindungsstörung gehört zum Vorgang und verlangt keine andere Schreibweise.",
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
                "text": "Bestätigung und Erhalt sind getrennte Zusagen",
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
                "text": "Erst nach bestätigter Annahme: Projekt «Jahresbericht» erstellt. Der konkrete Name ordnet das Ergebnis zu. «Projekt öffnen» kann zum Ergebnis führen, wenn dieser Weg tatsächlich vorhanden ist.",
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
                "text": "Wann ist «Erneut versuchen» eine ehrliche Hilfe?",
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
                "text": "Bei bestätigter Nichtannahme und behobener Ursache kann «Projekt wurde nicht erstellt. Erneut versuchen.» passen. Ein Namenskonflikt gehört nicht zum Piloten. Allgemein ausserhalb des Piloten kann ein fachlich verlangter eindeutiger Name erst Korrektur und dann erneutes Absenden verlangen.",
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
                "text": "Bei unbekanntem Ausgang zuerst den Status klären. Im Piloten ist die dafür erforderliche Integrationsschnittstelle noch nicht verfügbar: kein bedienbares «Status prüfen», kein erfundener Supportweg und kein «Erneut versuchen». Die Unsicherheit bleibt sichtbar. Die Gestaltung benennt diese Voraussetzung; die vorhandene Demo erfüllt sie nicht.",
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
                "text": "Ton, Formate und Übersetzung mitführen",
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
                "text": "Die bisherigen Themen Zahlen, Datum und Währung bleiben relevant: Sprache allein bestimmt weder Region noch Währung oder Zeitzone. Die fachliche Bedeutung muss vor der Formatierung feststehen. Ein Kalenderdatum und ein Zeitpunkt sind verschieden.",
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
                "text": "Quelle, Empfehlung und offener Review",
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
                "text": "Für den begrenzten Gestaltungs-Piloten sind Eingabebedingungen und Rückwege lokal entschieden. Nachweise für Annahme, Ablehnung und Statusklärung fehlen weiterhin. Eine unabhängige Person soll am Fehlertext die Korrektur finden und beim unbekannten Ergebnis erkennen, dass Erfolg offen ist. Dieser Verständlichkeitsreview und der assistive Test stehen noch aus; die Texte sind keine Produktfreigabe.",
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
 expectedUpdatedAt:"2026-11-18T00:38:59.418Z",
 summary:'Werte klar benennen, Korrekturen zeigen und nur bestätigte Ergebnisse melden.',
 content:[
  copy('writing-example','Projekt anlegen: so werden Texte konkret',
   'Zu unbestimmt','Konkret für diesen Schritt',
   'Hier eingeben','Bitte korrekt ausfüllen.','Weiter',
   'Projektname (erforderlich)','Jahresbericht','1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.','Projekt erstellen',
   'Das Label benennt den Wert. Die Hilfe nennt die Bedingung. Die Aktion sagt, was als Nächstes geschieht.',
   'Statisches Schreibbeispiel · erstellt kein Projekt. Pflicht und 80-Zeichen-Grenze gelten nur für diesen lokalen Piloten.'),
  copy('writing-rules','Vier Regeln beim Schreiben',
   'Einen Begriff durchziehen. «Projektname», «Projekt erstellen», «Projekt erstellt»: Feld, Aktion und Ergebnis bleiben erkennbar verbunden.',
   'Bedingungen vor die Eingabe stellen. Das Label bleibt sichtbar. Hilfe und Fehler nennen dieselbe Grenze; ein Platzhalter ersetzt kein Label.',
   'Die nächste Handlung benennen. «Angaben prüfen» führt zur Prüfung; «Projekt erstellen» zur Übermittlung. «Weiter» lässt das Ziel offen.',
   'Korrektur statt Schuldzuweisung. Nenne die fehlende Angabe oder die konkrete Änderung. Eine Verbindungsstörung verlangt keine andere Schreibweise.'),
  { ...messages, blockName:'writing-messages', title:'Fehler und Ergebnis: die Aussage folgt dem Zustand', items:messages.items.map((item,index)=>index===1?{...item,reason:'80 Zeichen sind die lokale Pilotgrenze. Hilfe, Prüfung und Fehler nennen dieselbe Grenze; den Wert zum Kürzen erhalten.'}:item).concat([{context:'Die Annahme ist bestätigt',before:'Fertig!',after:'Projekt «Jahresbericht» erstellt.',reason:'Erst nach bestätigter Annahme. «Projekt öffnen» nur anbieten, wenn der Weg zum tatsächlichen Ergebnis vorhanden ist.'}]) },
  copy('writing-message-labels','Textvergleich','Unklar oder unbelegt','Passend unter dieser Bedingung'),
  copy('writing-check','Vor dem Übergeben prüfen',
   'Kann eine andere Person allein aus dem Fehlertext die Korrektur ableiten? Bleibt beim unbekannten Ergebnis erkennbar, dass der Erfolg offen ist?',
   'Lange Labels und Meldungen umbrechen lassen. Übersetzungen als vollständige Nachrichten mit Zustand, Feldbezug, variablen Werten und erlaubter Folgeaktion übergeben.',
   'Kein bedienbares «Status prüfen» oder «Erneut versuchen» bei unbekanntem Ausgang: Im Piloten fehlt die notwendige Integrationsschnittstelle. Nachweise für Annahme, Ablehnung und Statusklärung sowie Verständlichkeitsreview und assistiver Test stehen aus.'),
  copy('writing-evidence','Fachgrenzen, Quellen und vollständiger Ausgangstext',
   'Die folgenden neun Originalblöcke sind unverändert aus dem CMS-Stand vom 2026-11-18T00:38:59.418Z erhalten. Sie unterscheiden lokale Pilotentscheidungen, redaktionelle Empfehlungen, WAI-Erläuterungen und offene Nachweise.',
   'Die sichtbaren Beispiele sind redaktionelle Vorschläge, keine Markenstimme, Produktfreigabe oder Bestätigung von Demofähigkeiten.'),
  ...original,
 ] satisfies Page['content'],
}
