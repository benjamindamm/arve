import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = {version:1, direction:'ltr' as const, format:'' as const, indent:0}
const node = (text:string) => ({type:'text',version:1,text})
const text = (key:string,title:string,paragraphs:string[]):Block => ({blockType:'text',blockName:key,body:{root:{...base,type:'root',children:[{...base,type:'heading',tag:'h2',children:[node(title)]},...paragraphs.map(value=>({...base,type:'paragraph',children:[node(value)]}))]}}})
// Frozen original blocks from handbook-snapshot.json, capturedAt 2026-11-20T14:42:13.144Z.
// Source commit e0f8d12953f524b62e6309a0bffae93d4b7832fa. No live snapshot import.
const preserved = [
        {
          "kind": "checkbox",
          "title": "Mehrere Optionen dürfen zugleich gelten",
          "explanation": "Die Gruppe «Was soll der Export enthalten?» zeigt Tabellen und ausführliche Erläuterungen ausgewählt, Abbildungen nicht ausgewählt. Das lange Label bleibt vollständig lesbar. Jede Option ist unabhängig. Eine einzelne unabhängige Bestätigung kann ebenfalls eine Checkbox sein. Wenn genau eine aus mehreren gegenseitig ausschliessenden Optionen erlaubt ist, braucht es dagegen eine exklusive Auswahl. Nicht ausgewählt und ausgewählt sind die zwei lokalen Werte; Auswahl und Fokus müssen gleichzeitig erkennbar bleiben. «Alle auswählen» braucht zusätzlich eine Gruppenregel. Ein gemischter Zustand für «einige ausgewählt» ist im binären lokalen Contract nicht enthalten. Die Gruppe und ihre Zustandsbilder sind statische Gestaltungsstudien.",
          "source": "Eigene Gestaltungsstudie für Arve; nicht aus den Contract-Tokens gerendert und keine zusätzliche lokale Komponentenfähigkeit.",
          "blockType": "componentStudy"
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
                      "text": "Einzeloption, Gruppe und exklusive Wahl unterscheiden",
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
                      "text": "Eine Checkbox hält eine unabhängige Ja/Nein-Auswahl. Mehrere Checkboxen können gleichzeitig gewählt werden; auch eine einzelne Bestätigung ist möglich. «Genau eine aus mehreren» beschreibt dagegen eine exklusive Wahl und sollte nicht als konkurrierende unabhängige Checkboxen erscheinen.",
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
                      "text": "Gib einer zusammengehörigen Gruppe eine verständliche Frage oder Überschrift. Das Label jeder Option beschreibt, was ihre Auswahl bedeutet. Vermeide unnötige Verneinungen und bewahre die Bedeutung auch dann, wenn ein Label über mehrere Zeilen läuft.",
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
                      "text": "Auswahl und Verfügbarkeit getrennt zeigen",
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
                      "text": "Die Auswahl bleibt beim Fokuswechsel erhalten; ein sichtbarer Fokus kommt zusätzlich hinzu. Häkchen und verständlicher Text helfen, den Zustand ohne alleinige Farberkennung zu verstehen. Auch eine deaktivierte Checkbox kann ausgewählt oder nicht ausgewählt sein. Der Grund einer Einschränkung steht lesbar ausserhalb des deaktivierten Elements.",
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
                      "text": "Eine Auswahl ist nicht automatisch gespeichert. Mache im Formular deutlich, ob eine weitere Bestätigung nötig ist. Falls eine Gruppe mindestens eine Auswahl verlangt, gehört die Fehlerrückmeldung zur Gruppe und muss den nächsten Schritt erklären.",
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
                      "text": "Sammelauswahl nicht vortäuschen",
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
                      "text": "«Alle auswählen» muss erklären, welche Optionen gemeint sind: etwa sichtbare Einträge oder die gesamte Ergebnismenge. Eine teilweise ausgewählte Gruppe kann einen gemischten Zustand benötigen. Das ist eine zusätzliche Fähigkeit; sie darf nicht aus dem Häkchen einer einzelnen Checkbox abgeleitet werden. Der aktuelle lokale Contract beschreibt ausschliesslich einen binären Wert.",
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
                      "text": "Was das vorhandene Beispiel zeigt",
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
                      "text": "Die Spartan-Vorschau zeigt eine einzelne binäre Checkbox und Deaktivierung, keine Gruppe, Sammelauswahl oder Formularspeicherung. Sie verwendet einen Button mit Checkbox-Rolle, während die gepinnte Contractvorlage ein natives Eingabeelement nutzt. Beide dürfen nicht allein wegen ähnlicher Darstellung als gleich geprüft gelten.",
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
                      "text": "Prüfe die Namensbindung, sichtbaren Fokus, Umschalten per Leertaste, Pointer-Aktivierung des sichtbaren Labels sowie lange Labels und Touch-Bedienung. Die Namensbindung allein belegt keine klickbare Labelfläche. Ein veröffentlichter Implementierungsdatensatz und eine vollständige assistive Prüfung fehlen derzeit.",
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
                      "text": "Anwendung und Quellen",
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
                        "url": "#live-beispiel",
                        "newTab": false,
                        "linkType": "custom"
                      },
                      "format": "",
                      "indent": 0,
                      "version": 1,
                      "children": [
                        {
                          "mode": "normal",
                          "text": "Vorhandene Spartan-Demo ausprobieren",
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
                        "url": "/systems/shadcn/auswahl-und-suche",
                        "newTab": false,
                        "linkType": "custom"
                      },
                      "format": "",
                      "indent": 0,
                      "version": 1,
                      "children": [
                        {
                          "mode": "normal",
                          "text": "Auswahl und Suche · Werte und Gruppen",
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
                        "url": "/systems/shadcn/tabellen-und-listen",
                        "newTab": false,
                        "linkType": "custom"
                      },
                      "format": "",
                      "indent": 0,
                      "version": 1,
                      "children": [
                        {
                          "mode": "normal",
                          "text": "Tabellen und Listen · Umfang einer Sammelauswahl",
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
                          "text": "Formulare und Validierung · Gruppenfehler",
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
                        "url": "https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/",
                        "newTab": false,
                        "linkType": "custom"
                      },
                      "format": "",
                      "indent": 0,
                      "version": 1,
                      "children": [
                        {
                          "mode": "normal",
                          "text": "WAI APG · Checkbox, geprüft 18.11.2026",
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
        }
] satisfies Page['content']

export const release = {
 // Current page read through read-only MCP; original content matched frozen snapshot.
 expectedUpdatedAt:'2026-11-20T07:48:51.774Z',
 summary:'Unabhängige Optionen erkennbar auswählen und den Umfang einer Gruppe verständlich machen.',
 content:[
  text('example','Eine Option ausprobieren',[
   'Mit Tab fokussieren, mit Leertaste umschalten und die Deaktivierung ausprobieren. Die Auswahl in dieser Demo speichert nichts.',
   'Die echte Spartan-Demo zeigt eine einzelne binäre Checkbox. Gruppen, Sammelauswahl und ein gemischter Zustand sind damit nicht nachgewiesen.',
  ]),
  text('states','Auswahl und Verfügbarkeit unterscheiden',[
   'Statische Gestaltungsbeispiele · keine zusätzlichen Funktionen der Live-Demo. Derselbe Zustand kann zusätzlich einen sichtbaren Fokus haben.',
   'Nicht ausgewählt', 'Ausgewählt', 'Ausgewählt · deaktiviert',
   'Projekt-Updates abonnieren',
   'Der Versand von Updates ist für dieses Projekt derzeit pausiert.',
   'Deaktivierung beschreibt die Verfügbarkeit, nicht den Auswahlwert. Der Grund bleibt ausserhalb des deaktivierten Elements lesbar. Fokus ergänzt die Auswahl und ersetzt das Häkchen nicht.',
  ]),
  text('rules','Drei Regeln für Checkbox',[
   '1. Unabhängig auswählen: eine einzelne Bestätigung oder mehrere Optionen, die zugleich gelten dürfen. Für genau eine von mehreren Möglichkeiten eine exklusive Auswahl mit Radio verwenden. Für eine unmittelbar wirksame Ein/Aus-Einstellung Switch prüfen; Speichern und Wirksamkeit ausdrücklich klären.',
   '2. Bedeutung beschriften: das sichtbare Label sagt ohne unnötige Verneinung, was ausgewählt wird. Zusammengehörige Optionen erhalten eine gemeinsame Frage. Lange Labels dürfen umbrechen und bleiben vollständig lesbar; Namensbindung und klickbare Labelfläche getrennt prüfen.',
   '3. Umfang und Rückmeldung erklären: «Alle auswählen» benennt die betroffene Menge, etwa sichtbare Einträge oder alle Ergebnisse. Eine erforderliche Mindestauswahl und ihre Fehler gehören zur Gruppe. Eine gesetzte Checkbox bedeutet noch keine Speicherung.',
  ]),
  text('boundaries','Einzeloption und Gruppe',[
   'Mehrere unabhängige Checkboxen benötigen einen verständlichen Gruppennamen. Bei «Was soll der Export enthalten?» können Tabellen und Erläuterungen gleichzeitig gelten. Eine einzelne Einwilligung bleibt eine eigenständige Entscheidung.',
   'Teilweise ausgewählte Gruppen können einen gemischten Zustand erfordern. Der gepinnte lokale Contract ist binär; die vorhandene Spartan-Demo belegt weder mixed noch Sammelauswahl. Eine Gruppensteuerung braucht eine zusätzliche Spezifikation und Prüfung.',
  ]),
  text('limits','Quellen und Prüfgrenzen',[
   'Die sechs Originalblöcke aus dem Snapshot vom 20.11.2026, 14:42:13.144 UTC sind unten unverändert eingefroren. Die öffentliche Ausgangsseite wurde im Browser gelesen und die sechs Inhaltsblöcke wurden mit dem aktuellen MCP-Stand abgeglichen.',
   'Die gepinnte Draft-Contractvorlage nutzt ein natives input type="checkbox". Die Spartan-Vorschau nutzt einen Button mit Checkbox-Rolle und einen über aria-labelledby benannten Text. Ähnliche Darstellung belegt keine gleiche Semantik, Labelfläche oder Formularanbindung. Contract-Pin und Demo-Einstellungen werden nicht geändert.',
   'Offen bleiben sichtbarer Fokus, Leertaste, Pointer-Aktivierung des Labels, lange Labels, Touch-Bedienung sowie assistive Prüfung. Es gibt keinen veröffentlichten Implementierungsdatensatz und keine daraus ableitbare allgemeine Freigabe.',
  ]),
  text('original','Vollständige Ausgangsstudie und Quellen',[
   'Unveränderter Originalinhalt aus dem eingefrorenen Snapshot. Die statischen Gruppenbilder bleiben Gestaltungsstudien.',
  ]),
  ...preserved,
 ] satisfies Page['content'],
}
