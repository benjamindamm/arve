import type {Page} from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
function copy(blockName:string,...paragraphs:string[]):Block {
 return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:paragraphs.map(text=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[{type:'text',version:1,text,detail:0,format:0,mode:'normal',style:''}]}))}}}
}
// Eight detailed guidance blocks, editorially revised from the MCP baseline.
// Keep this release self-contained; do not import the changing handbook snapshot.
const original: {content:Block[]} = {
  "content": [
    {
      "id": "6afced7100b0d70bb5dca42f",
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
                  "text": "Eine Aufgabe vollständig prüfen",
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
                  "text": "Eine Person gibt einen Projektnamen ein und löst «Projekt erstellen» aus. Prüfe an einer konkreten Webumsetzung den vollständigen Weg: Eingeben → Prüfen → Fehler verstehen und korrigieren → erneut prüfen → Übermitteln → bestätigt, abgelehnt oder Ergebnis unbekannt.",
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
                  "text": "Die folgenden Aufgaben beschreiben, was du prüfen sollst und welches Ergebnis dabei erwartet wird. Den Ablauf erläutert die Seite «Formulare und Validierung». Die dort vorgeschlagenen Fokusziele, Prüfzeitpunkte und Wege zur Wiederherstellung sind redaktionelle Vorschläge. Prüfstand und Quellen stehen am Schluss.",
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
                      "text": "Formulare und Validierung: Ablauf und Wiederherstellung",
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
    },
    {
      "id": "6afced7100b0d70bb5dca430",
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
                  "text": "1 · Feldname, Hilfe und Fehler verstehen",
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
                  "text": "Aufgabe: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "Gehe mit Tab zum Feld «Projektname». Prüfe mit einem Screenreader Name, Rolle, Pflichtstatus, Wert und Hilfe. Gib einen Wert ein. Leere danach das Pflichtfeld und löse «Projekt erstellen» aus.",
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
                  "text": "Erwartung: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "Das sichtbare Label bleibt erhalten, der zugängliche Name enthält «Projektname». Ein Platzhalter ersetzt kein Label. Hilfe ergänzt die Benennung. «Einen Projektnamen eingeben.» erklärt beim Feld die Korrektur. Beim erneuten Erreichen sind Fehlerstatus und Hinweis wahrnehmbar.",
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
                  "text": "Zuordnung: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "Im Web kann aria-describedby Hilfe und Fehler zuordnen; aria-invalid kennzeichnet den Fehlerzustand. Prüfe die tatsächliche Verbindung und Ausgabe. Sichtbare Nähe allein belegt sie nicht.",
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
                    "url": "/systems/shadcn/content-design",
                    "newTab": false,
                    "linkType": "custom"
                  },
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "Content Design: Labels und Meldungspaare",
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
                      "text": "Input: Anatomie und Umsetzungsgrenzen",
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
    },
    {
      "id": "6afced7100b0d70bb5dca431",
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
                  "text": "2 · Nach Absenden zur Korrektur gelangen",
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
                  "text": "Aufgabe: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "Sende ausschliesslich mit Tastatur ab. Prüfe einen einzelnen Fehler und, an einem geeigneten Mehrfeldformular, mehrere Fehler. Das Einzelfeld-Beispiel deckt nur den ersten Fall ab.",
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
                  "text": "Erwartung: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "Der vorgeschlagene Ablauf setzt den Fokus bei einem eindeutig zugeordneten Fehler auf das Feld und bei mehreren Fehlern auf die Übersicht. Diese nennt die betroffenen Felder mit ihren Labels und erklärt die Korrekturen. Jeder Feldlink setzt bei Tastaturaktivierung den Fokus auf das richtige Eingabeelement; blosses Scrollen genügt hier nicht.",
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
                  "text": "Weiterprüfen: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "Der Fokus bleibt sichtbar, seine Reihenfolge nachvollziehbar. Übersicht und Feldhinweis sind mit einem Screenreader verständlich, ohne konkurrierende Mehrfachansagen. Während der Korrektur verschiebt keine laufende Prüfung den Fokus.",
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
      "id": "6afced7100b0d70bb5dca432",
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
                  "text": "3 · Korrigieren ohne Verlust",
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
                  "text": "Aufgabe: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "Korrigiere «Projektname» und sende erneut ab. Prüfe bei weiteren Angaben deren Erhalt. Erprobe auch den vorgesehenen Rückweg und Abbruch.",
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
                  "text": "Erwartung: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "Nach erfolgreicher erneuter Prüfung verschwinden veralteter Fehlertext und Fehlerstatus; benötigte Hilfe bleibt zugeordnet. Gültige Angaben bleiben erhalten. Beim Abbruch bleiben Angaben erhalten oder gehen verloren, wie zuvor angekündigt. Ein sichtbarer Wert belegt keine serverseitige Speicherung.",
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
                  "text": "Falls ein Dialog beteiligt ist: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "Prüfe nach dem Schliessen, ob der Fokus zum Auslöser zurückkehrt. Existiert dieser nicht mehr, muss der vorgesehene Ablauf ein sinnvolles, erreichbares Folgeziel bieten.",
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
      "id": "6afced7100b0d70bb5dca433",
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
                  "text": "4 · Übermittlung und Ergebnis erkennen",
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
                  "text": "Aufgabe: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "Erzeuge in einer geeigneten Testumgebung laufende Übermittlung, bestätigten Erfolg, fachliche Ablehnung und ausbleibende eindeutige Antwort. Prüfe jeden Übergang auch mit Screenreader.",
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
                  "text": "Erwartung: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "«Projekt wird erstellt …» zeigt die laufende Übermittlung an. Erfolg erscheint erst nach bestätigter Annahme; eine Ablehnung erklärt den nächsten Schritt. «Es ist noch unklar, ob das Projekt erstellt wurde.» benennt die Unsicherheit. Solange das Ergebnis unklar ist, wird nicht erneut gesendet. Kläre zuerst den Status; sende nur bei eindeutig bestätigter Nichtannahme und behobener Ursache erneut, wie unter «Formulare und Validierung» beschrieben.",
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
                  "text": "Voraussetzung: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "«Status prüfen» setzt voraus, dass eine verlässliche Statusabfrage verfügbar ist. Dass eingegebene Werte erhalten bleiben und das Projekt nicht doppelt angelegt wird, muss eigens nachgewiesen werden.",
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
                  "text": "Ansage: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "Statusmeldungen ohne Kontextwechsel sind verständlich, ohne den Fokus zu übernehmen. Stimme die Fokussteuerung mit den Live-Rückmeldungen ab: Nicht jede Änderung braucht eine Ansage oder einen dringenden Alert.",
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
      "id": "6afced7100b0d70bb5dca434",
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
                  "text": "5 · Vergrössert und ohne Farberkennung arbeiten",
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
                  "text": "Aufgabe: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "Wiederhole die Korrektur mit 200 Prozent Textvergrösserung und separat bei 320 CSS-Pixeln Inhaltsbreite, etwa ausgehend von 1280 CSS-Pixeln bei 400 Prozent Browserzoom. Prüfe geringe Fensterhöhe und den Fehler mit gleichzeitigem Fokus in jedem vorgesehenen Theme.",
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
                  "text": "Erwartung: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "Label, Hilfe, Fehler, Übersicht und Aktion bleiben lesbar und bedienbar. Lange Meldungen umbrechen; das vertikale Formular verlangt kein Scrollen in zwei Richtungen. Fixierte Bereiche verdecken weder fokussiertes Feld noch Korrektur. Fehlertext trägt Bedeutung zusätzlich zur Farbe, Fokus und Fehler bleiben unterscheidbar.",
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
                  "text": "Messung: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "Prüfe den tatsächlichen Kontrast zwischen Text und Hintergrund sowie relevante Nichttext-Kontraste. Berechnete Tokenpaare ersetzen keine Prüfung der dargestellten Zustände. Ein schmaler Screenshot belegt weder Textvergrösserung noch Reflow vollständig.",
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
                    "url": "/systems/shadcn/farben",
                    "newTab": false,
                    "linkType": "custom"
                  },
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "Farbe: Kontrastpaare und Nachweisgrenzen",
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
    },
    {
      "id": "6afced7100b0d70bb5dca435",
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
                  "text": "Weitere Bedingungen gezielt ergänzen",
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
                  "text": "Auf vorgesehenen Touchgeräten müssen Feld, Hilfe und Aktion ohne Hover erreichbar bleiben; die Bildschirmtastatur darf die Korrektur nicht blockieren. Bei reduzierter Bewegung bleiben Status und Ergebnis ohne Animation verständlich.",
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
                  "text": "Prüfe unterstützte Sprachen mit langen Labels, Sprachkennzeichnung und gegebenenfalls Rechts-nach-links-Leserichtung samt gemischten Werten: Zuordnung und Lesereihenfolge müssen erhalten bleiben. Dafür braucht es passende Testdaten und fachkundige Prüfung; Spiegelung oder Pseudotext genügen nicht. Prüfe Überschriften und Fokusreihenfolge auch im Seitenkontext.",
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
                    "url": "/systems/shadcn/bewegung",
                    "newTab": false,
                    "linkType": "custom"
                  },
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "Bewegung: reduzierte Darstellung",
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
                    "url": "/systems/shadcn/abstaende",
                    "newTab": false,
                    "linkType": "custom"
                  },
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "Abstände und Grössen: Bedienflächen",
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
                    "url": "/systems/shadcn/seitenstruktur-und-navigation",
                    "newTab": false,
                    "linkType": "custom"
                  },
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "Seitenstruktur und Navigation",
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
    },
    {
      "id": "6afced7100b0d70bb5dca436",
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
                  "text": "Nachweise, Quellen und offene Prüfungen",
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
                  "text": "Protokoll: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "Halte fest, wer welche Umsetzung und Revision an welchem Datum geprüft hat. Notiere die Testumgebung: Browser und Betriebssystem, Screenreader-Version sowie relevante Sprache, Theme und Vergrösserung. Beschreibe die Eingabe, das erwartete Ergebnis, deine Beobachtung und mögliche Abweichungen. Ein bestandenes Ergebnis gilt nur für diesen Prüffall; nicht geprüfte Abläufe bleiben offen. DOM-Inspektion, Prüfung mit assistiven Technologien, Kontrastrechnung und Nutzungsforschung belegen jeweils unterschiedliche Aspekte.",
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
                  "text": "Prüfstand: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "Handbuch und verlinkte Primärquellen wurden am 18. November 2026 redaktionell gelesen. Tastatur-, Screenreader-, Zoom-, Touch- und Serverfälle sind hier nicht ausgeführt. Die Input-Demo belegt weder Formularversand noch Fehlerübersicht oder Serverergebnis. Native iOS-/Android-Nachweise, allgemeine Konformität und Produktfreigabe folgen daraus nicht.",
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
                  "text": "Normative Grundlage: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "WCAG 2.2 enthält Kriterien zu Labels und Anleitungen (3.3.2, A), Fehleridentifikation (3.3.1, A), bekannten Korrekturvorschlägen mit Ausnahmen (3.3.3, AA), sichtbarem Text im zugänglichen Namen (2.5.3, A) und Statusmeldungen ohne Fokusübernahme (4.1.3, AA). Für Textvergrösserung und Reflow (1.4.4/1.4.10, AA) gelten eigene Bedingungen und Ausnahmen, etwa notwendige zweidimensionale Layouts beim Reflow.",
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
                    "url": "https://www.w3.org/TR/WCAG22/",
                    "newTab": false,
                    "linkType": "custom"
                  },
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "WCAG 2.2: Erfolgskriterien und Geltungsbereiche",
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
                  "mode": "normal",
                  "text": "Erläuternde Quellen: ",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 1,
                  "version": 1
                },
                {
                  "mode": "normal",
                  "text": "Das WAI-Tutorial und das Understanding-Dokument unterstützen die Gestaltung. Eine Fehlerübersicht und ein bestimmtes Fokusziel sind mögliche Lösungswege, keine pauschale WCAG-Pflicht. Das Produktteam und die Verantwortlichen für die Barrierefreiheitsprüfung entscheiden, welche der redaktionellen Vorschläge sie für die jeweilige Umsetzung übernehmen.",
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
                    "url": "https://www.w3.org/WAI/tutorials/forms/notifications/",
                    "newTab": false,
                    "linkType": "custom"
                  },
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "WAI Forms Tutorial: Fehlerübersicht und Feldhinweise",
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
                    "url": "https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html",
                    "newTab": false,
                    "linkType": "custom"
                  },
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "Understanding 4.1.3: Status und Kontextwechsel",
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
}

export const release = {
 expectedUpdatedAt:'2026-11-20T15:16:36.117Z',
 summary:'Prüfe ein Formular mit Tastatur, Screenreader und Vergrösserung. Vier Aufgaben zeigen, worauf es bei Labels, Fokus, Fehlern und Ergebnissen ankommt.',
 content:[
 copy('access-example','Einen Fehler verstehen und korrigieren','Diese schematische Darstellung zeigt einen Fehlerzustand. Sie ist kein ausführbares Formular und belegt kein Prüfergebnis.','Projekt erstellen','Projektname (Pflichtfeld)','Zum Beispiel: Kundenportal','Einen Projektnamen eingeben.','Projekt erstellen','Das Label bleibt sichtbar','Hilfe und Korrektur stehen beim Feld. Der Fehler wird auch durch Text erklärt.','Der Fokus bleibt unterscheidbar','Die blaue Kontur veranschaulicht den Tastaturfokus zusätzlich zum Fehlerzustand.','Vom Beispiel zur Prüfung','Die Darstellung zeigt die beabsichtigte Gestaltung. Führe die folgenden Aufgaben an einer konkreten Webumsetzung aus.'),
 copy('access-checks','Vier Prüfaufgaben für den vollständigen Weg','Aufgabe','Erwartbares Ergebnis',
 'Tastatur und Fokus','Gehe mit Tab und Umschalt+Tab durch das Formular und sende mit leerem Pflichtfeld ab. Prüfe den Fall mit einem Fehler und an einem geeigneten Mehrfeldformular auch den Fall mit mehreren Fehlern.','Der Fokus ist sichtbar und nicht verdeckt; die Reihenfolge ist nachvollziehbar. Der vorgeschlagene Ablauf setzt den Fokus bei einem Fehler auf das Feld und bei mehreren auf die Übersicht. Deren Feldlinks setzen bei Tastaturaktivierung den Fokus auf die zugehörige Eingabe.',
 'Labels und Fehler','Gehe mit einem Screenreader zum Feld «Projektname». Prüfe Name, Rolle, Pflichtstatus, Wert und Hilfe. Korrigiere den Fehler und sende erneut ab.','Das sichtbare Label ist im zugänglichen Namen enthalten. Hilfe und Fehler sind zugeordnet, der Fehlerstatus ist wahrnehmbar. Nach erfolgreicher erneuter Prüfung verschwinden veralteter Fehlertext und Fehlerstatus; gültige Angaben bleiben erhalten.',
 'Zustände und Ergebnis','Erzeuge in einer geeigneten Testumgebung eine laufende Übermittlung, einen bestätigten Erfolg, eine fachliche Ablehnung und eine unklare Antwort. Prüfe die Übergänge mit einem Screenreader.','Statusmeldungen ohne Kontextwechsel sind verständlich, ohne den Fokus zu übernehmen. Erfolg erscheint erst nach bestätigter Annahme. Bei unklarem Ergebnis wird zuerst der Status geklärt. Eine verlässliche Statusabfrage und der Schutz vor doppelter Anlage müssen eigens nachgewiesen werden.',
 'Reflow, Zoom und Kontrast','Prüfe separat 200 Prozent Textvergrösserung und 320 CSS-Pixel Inhaltsbreite, etwa 1280 CSS-Pixel bei 400 Prozent Browserzoom. Prüfe auch bei geringer Fensterhöhe. Zeige Fehler und Fokus gleichzeitig in jedem vorgesehenen Theme.','Label, Hilfe, Fehler und Aktion bleiben lesbar und bedienbar; lange Meldungen umbrechen. Das vertikale Formular erfordert kein Scrollen in zwei Richtungen. Fixierte Bereiche verdecken den Fokus nicht. Miss die tatsächlichen Text- und relevanten Nichttext-Kontraste.'),
 copy('access-rules','Worauf es beim Gestalten ankommt','Labels benennen die Felder, Hinweise ergänzen die Angaben und Fehlermeldungen erklären die konkrete Korrektur. Platzhalter ersetzen kein Label.','Zeige Fokus, Fehler und laufende Übermittlung als unterscheidbare Zustände. Verwende neben Farbe weitere Merkmale, um ihre Bedeutung zu vermitteln.','Bei Abbruch, Rückweg und Korrektur müssen Angaben so erhalten bleiben, wie es angekündigt wurde. Ein sichtbarer Wert belegt keine Speicherung.'),
 copy('access-limits','Was diese Seite belegt','Diese Seite beschreibt Prüfaufgaben und erwartbare Ergebnisse. Sie bestätigt keine allgemeine Konformität oder Produktfreigabe.','Ein schmaler Screenshot belegt weder Textvergrösserung noch vollständigen Reflow. Die schematische Darstellung belegt keine Tastatur-, Screenreader-, Touch- oder Serverfunktion.','Prüfe die Abläufe in der vorgesehenen Umsetzung und Testumgebung. Halte erwartete und beobachtete Ergebnisse getrennt fest. Nicht geprüfte Abläufe bleiben offen; die genauen Angaben zur Dokumentation stehen in der Vertiefung.','Prüfaufträge, Quellen und offene Nachweise','Die folgenden Prüfaufträge erläutern Bedingungen, erwartete Ergebnisse und Quellen im Detail. Die Erläuterungen wurden sprachlich überarbeitet; der dokumentierte Prüfstand vom 18. November 2026 bleibt erhalten.'),
 ...original.content,
 ] satisfies Page['content'],
}
