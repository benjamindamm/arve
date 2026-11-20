import type {Page} from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
function copy(blockName:string,...paragraphs:string[]):Block {
 return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:paragraphs.map(text=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[{type:'text',version:1,text,detail:0,format:0,mode:'normal',style:''}]}))}}}
}
// Eight original CMS blocks, read-only through MCP on 20 November 2026.
// Freeze literally here; do not import the changing handbook snapshot.
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
                  "text": "Die folgenden Aufgaben beschreiben erwartete Ergebnisse. Die Ablaufentscheidungen führt das Formularpattern; Fokuswahl, Prüfzeitpunkt und Wiederherstellung sind dort redaktionelle Vorschläge. Prüfstand und Quellen stehen am Schluss.",
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
                  "text": "Erreiche «Projektname» mit Tab. Prüfe mit Screenreader Name, Rolle, Pflichtstatus, Wert und Hilfe. Gib einen Wert ein; löse danach mit leerem Pflichtfeld «Projekt erstellen» aus.",
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
                  "text": "Nach dem Fokusvorschlag führt ein eindeutig zugeordneter Fehler zum Feld, mehrere Fehler zur Übersicht. Diese nennt Labels und Korrekturen. Jeder Feldlink setzt bei Tastaturaktivierung den Fokus auf das richtige Eingabeelement; blosses Scrollen genügt hier nicht.",
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
                  "text": "Fokus bleibt sichtbar, die Reihenfolge nachvollziehbar. Übersicht und Feldhinweis sind mit Screenreader verständlich, ohne konkurrierende Mehrfachansagen. Während der Korrektur versetzt keine laufende Prüfung den Fokus.",
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
                  "text": "Nach erfolgreicher erneuter Prüfung verschwinden veralteter Fehlertext und Fehlerstatus; benötigte Hilfe bleibt zugeordnet. Gültige Angaben bleiben erhalten. Angekündigter Erhalt oder Verlust beim Abbruch stimmt mit dem Verhalten überein. Ein sichtbarer Wert belegt keine serverseitige Speicherung.",
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
                  "text": "Prüfe nach Schliessen die Rückkehr zum Auslöser. Existiert er nicht mehr, braucht das Pattern ein sinnvolles erreichbares Folgeziel.",
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
                  "text": "«Projekt wird erstellt …» bezeichnet die Übermittlung. Erfolg erscheint erst nach bestätigter Annahme; eine Ablehnung erklärt den nächsten Schritt. «Es ist noch unklar, ob das Projekt erstellt wurde.» benennt die Unsicherheit. Zuerst folgt Statusklärung, kein blindes erneutes Senden.",
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
                  "text": "«Status prüfen» setzt eine verlässliche verfügbare Statusabfrage voraus. Werteerhalt und Schutz vor doppelter Anlage müssen eigens nachgewiesen werden.",
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
                  "text": "Statusmeldungen ohne Kontextwechsel kommen ohne Fokusübernahme verständlich an. Stimme Fokussteuerung und Live-Rückmeldung ab: Nicht jede Änderung braucht eine Ansage oder einen dringenden Alert.",
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
                  "text": "Prüfe tatsächliche Text-/Hintergrund- und relevante Nichttext-Kontraste. Berechnete Tokenpaare ersetzen keine Prüfung gerenderter Zustände. Ein schmaler Screenshot belegt weder Textvergrösserung noch Reflow vollständig.",
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
                  "text": "Notiere Umsetzung/Revision, Datum, prüfende Person, Browser/Betriebssystem, Screenreader-Version, relevante Sprache/Theme/Vergrösserung, Eingabe, Erwartung, Beobachtung und Abweichungen. Bestanden gilt nur für diesen Fall; fehlende Zweige bleiben nicht prüfbar. DOM-Inspektion, assistiver Durchlauf, Kontrastrechnung und Nutzungsforschung liefern unterschiedliche Teilnachweise.",
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
                  "text": "WCAG 2.2 führt Labels/Anleitungen (3.3.2, A), Fehleridentifikation (3.3.1, A), bekannte Korrekturvorschläge mit Ausnahmen (3.3.3, AA), sichtbaren Text im zugänglichen Namen (2.5.3, A) und Statusmeldungen ohne Fokusübernahme (4.1.3, AA). Textvergrösserung und Reflow (1.4.4/1.4.10, AA) haben eigene Bedingungen und Ausnahmen, etwa notwendige zweidimensionale Layouts beim Reflow.",
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
                  "text": "WAI-Tutorial und Understanding-Dokument unterstützen die Gestaltung. Fehlerübersicht und konkretes Fokusziel sind Lösungswege, keine pauschale WCAG-Pflicht. Produkt und Accessibility-Review entscheiden die lokalen Vorschläge für die jeweilige Umsetzung.",
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
 expectedUpdatedAt:'2026-11-18T00:12:33.294Z',
 summary:'Prüfe einen Formularweg mit Tastatur, verständlichen Labels, erkennbaren Zuständen und Vergrösserung. Konkrete Aufgaben mit erwartbaren Ergebnissen.',
 content:[
 copy('access-example','Am Fehler weiterarbeiten','Schematische Darstellung eines Fehlerzustands – kein ausführbares Formular und kein Prüfnachweis.','Projekt erstellen','Projektname (Pflichtfeld)','Zum Beispiel: Kundenportal','Einen Projektnamen eingeben.','Projekt erstellen','Label bleibt sichtbar','Hilfe und Korrektur stehen beim Feld. Bedeutung kommt auch als Text an.','Fokus bleibt unterscheidbar','Die blaue Kontur veranschaulicht den Tastaturfokus zusätzlich zum Fehlerzustand.','Vom Beispiel zur Prüfung','Die Darstellung zeigt die beabsichtigte Gestaltung. Die folgenden Aufgaben werden an einer konkreten Webumsetzung ausgeführt.'),
 copy('access-checks','Vier Prüfaufgaben für den vollständigen Weg','Aufgabe','Erwartbares Ergebnis',
 'Tastatur und Fokus','Gehe mit Tab und Umschalt+Tab durch das Formular und sende mit leerem Pflichtfeld ab. Prüfe einen Fehler; prüfe mehrere Fehler an einem geeigneten Mehrfeldformular.','Der Fokus ist sichtbar und nicht verdeckt; die Reihenfolge ist nachvollziehbar. Nach dem lokalen Fokusvorschlag führt ein Fehler zum Feld, mehrere zur Übersicht. Deren Feldlinks fokussieren bei Tastaturaktivierung die zugehörige Eingabe.',
 'Labels und Fehler','Erreiche Projektname mit Screenreader. Prüfe Name, Rolle, Pflichtstatus, Wert und Hilfe. Korrigiere den Fehler und sende erneut ab.','Das sichtbare Label ist im zugänglichen Namen enthalten. Hilfe und Fehler sind zugeordnet, der Fehlerstatus ist wahrnehmbar. Nach erfolgreicher erneuter Prüfung verschwinden veralteter Fehlertext und Fehlerstatus; gültige Angaben bleiben erhalten.',
 'Zustände und Ergebnis','Erzeuge laufende Übermittlung, bestätigten Erfolg, fachliche Ablehnung und unklare Antwort in einer geeigneten Testumgebung. Prüfe die Übergänge mit Screenreader.','Statusmeldungen ohne Kontextwechsel kommen ohne Fokusübernahme verständlich an. Erfolg erscheint erst nach bestätigter Annahme. Bei unklarem Ergebnis folgt zuerst Statusklärung; eine Statusabfrage und der Schutz vor doppelter Anlage brauchen eigene Nachweise.',
 'Reflow, Zoom und Kontrast','Prüfe separat 200 Prozent Textvergrösserung und 320 CSS-Pixel Inhaltsbreite, etwa 1280 CSS-Pixel bei 400 Prozent Browserzoom. Prüfe geringe Höhe und Fehler plus Fokus in jedem vorgesehenen Theme.','Label, Hilfe, Fehler und Aktion bleiben lesbar und bedienbar; lange Meldungen umbrechen. Das vertikale Formular erfordert kein Scrollen in zwei Richtungen. Fixierte Bereiche verdecken den Fokus nicht. Miss die tatsächlichen Text- und relevanten Nichttext-Kontraste.'),
 copy('access-rules','Beim Gestalten festhalten','Labels benennen, Hinweise ergänzen und Fehler erklären die konkrete Korrektur. Platzhalter ersetzen kein Label.','Fokus, Fehler und Übermittlung getrennt zeigen. Farbe allein trägt keine Bedeutung.','Abbruch, Rückweg und Korrektur erhalten Angaben so, wie es angekündigt wurde. Einen sichtbaren Wert nicht als gespeicherten Wert behandeln.'),
 copy('access-limits','Prüfgrenzen vor dem Review lesen','Diese Seite formuliert Prüfaufgaben und erwartbare Ergebnisse. Sie bestätigt keine allgemeine Konformität oder Produktfreigabe.','Ein schmaler Screenshot belegt weder Textvergrösserung noch vollständigen Reflow. Die schematische Darstellung belegt keine Tastatur-, Screenreader-, Touch- oder Serverfunktion.','Für jedes Ergebnis Umsetzung/Revision, Datum, prüfende Person, Browser/Betriebssystem, Screenreader-Version, Sprache, Theme, Vergrösserung, Eingabe, Erwartung, Beobachtung und Abweichungen notieren. Fehlende Zweige bleiben offen.','Originale Prüfaufträge, Quellen und Grenzen','Die folgenden acht CMS-Blöcke sind der unveränderte Ausgangsstand vom 18. November 2026 (2026-11-18T00:12:33.294Z), am 20. November 2026 ausgelesen. Ihr damaliger Prüfstand ist historisch erhalten.'),
 ...original.content,
 ] satisfies Page['content'],
}
