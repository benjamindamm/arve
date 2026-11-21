import { currentReferenceNote } from '../shadcn-complete'
import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = {version:1, direction:'ltr' as const, format:'' as const, indent:0}
const node = (text:string) => ({type:'text',version:1,text})
const text = (key:string,title:string,paragraphs:string[]):Block => ({blockType:'text',blockName:key,body:{root:{...base,type:'root',children:[{...base,type:'heading',tag:'h2',children:[node(title)]},...paragraphs.map(value=>({...base,type:'paragraph',children:[node(value)]}))]}}})
// Editorial revision of the study capturedAt 2026-11-20T14:42:13.144Z.
// Historical source: commit e0f8d12953f524b62e6309a0bffae93d4b7832fa. No live snapshot import.
const preserved = [
        {
          "kind": "checkbox",
          "title": "Mehrere Optionen dürfen zugleich gelten",
          "explanation": "In der Gruppe «Was soll der Export enthalten?» sind Tabellen und ausführliche Erläuterungen ausgewählt, Abbildungen nicht. Die lange Beschriftung bleibt vollständig lesbar. Jede Option lässt sich unabhängig von den anderen auswählen. Auch eine einzelne Bestätigung kann eine Checkbox sein. Wenn nur eine der Antworten gelten darf, braucht es eine exklusive Auswahl. Der lokale Contract kennt die beiden Werte «nicht ausgewählt» und «ausgewählt». Auswahl und Fokus müssen gleichzeitig erkennbar bleiben. Für «Alle auswählen» braucht es eine zusätzliche Regel für die Gruppe. Ein gemischter Zustand für «einige ausgewählt» ist im binären lokalen Contract nicht enthalten. Die Gruppe und ihre Zustandsbilder sind statische Gestaltungsstudien.",
          "source": "Eigene Gestaltungsstudie. Die Darstellung wird nicht aus den Contract-Tokens erzeugt und zeigt keine zusätzlichen Funktionen der lokalen Komponente.",
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
                      "text": "Mit einer Checkbox lässt sich eine Option unabhängig auswählen oder abwählen. Mehrere Checkboxen können gleichzeitig ausgewählt sein; auch eine einzelne Bestätigung ist möglich. Soll genau eine von mehreren Antworten gelten, verwende eine exklusive Auswahl statt mehrerer unabhängiger Checkboxen.",
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
                      "text": "Gib zusammengehörigen Optionen eine gemeinsame Frage oder Überschrift. Die Beschriftung jeder Option erklärt, was ihre Auswahl bedeutet. Vermeide unnötige Verneinungen. Auch mehrzeilige Beschriftungen müssen vollständig lesbar und verständlich bleiben.",
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
                      "text": "Die Auswahl bleibt erhalten, wenn der Fokus weiterwandert. Hat eine ausgewählte Checkbox den Fokus, müssen beide Zustände erkennbar sein. Häkchen und verständlicher Text erklären den Zustand auch ohne Farbe. Eine deaktivierte Checkbox kann ausgewählt oder nicht ausgewählt sein. Erkläre den Grund der Einschränkung in einem lesbaren Text ausserhalb des deaktivierten Elements.",
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
                      "text": "Eine Auswahl ist nicht automatisch gespeichert. Zeige im Formular, ob sie noch bestätigt werden muss. Wenn mindestens eine Option ausgewählt sein muss, ordne die Fehlermeldung der Gruppe zu und erkläre, was die Person als Nächstes tun soll.",
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
                      "text": "Erkläre bei «Alle auswählen», welche Optionen gemeint sind: etwa sichtbare Einträge oder alle Ergebnisse. Sind nur einige Optionen ausgewählt, kann die Gruppe einen gemischten Zustand benötigen. Dafür ist eine zusätzliche Funktion nötig. Das Häkchen einer einzelnen Checkbox zeigt nicht, ob eine solche Gruppensteuerung vorhanden ist. Der aktuelle lokale Contract beschreibt ausschliesslich einen binären Wert.",
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
                      "text": "In der Spartan-Vorschau lässt sich eine einzelne Checkbox auswählen, abwählen und deaktivieren. Gruppen, Sammelauswahl und Formularspeicherung zeigt sie nicht. Die Vorschau verwendet einen Button mit Checkbox-Rolle. Die festgelegte Contractvorlage nutzt ein natives Eingabeelement. Ihre ähnliche Darstellung belegt nicht, dass beide dieselben Anforderungen erfüllen.",
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
                      "text": "Prüfe, ob die Checkbox für assistive Technik korrekt benannt ist, der Fokus sichtbar bleibt und die Leertaste die Auswahl umschaltet. Prüfe ausserdem die Aktivierung über den sichtbaren Beschriftungstext, lange Beschriftungen und Touch-Bedienung. In der aktuellen Demo aktiviert ein Klick auf den Beschriftungstext die Checkbox nicht. Ein korrekt zugeordneter Name macht den Text noch nicht anklickbar. Ein veröffentlichter Implementierungsdatensatz und eine vollständige Prüfung mit assistiver Technik fehlen derzeit.",
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
 // Fresh read-only MCP read; current content and summary matched the previous release.
 expectedUpdatedAt:'2026-11-20T15:10:00.929Z',
 summary:'Mit einer Checkbox lässt sich eine Option unabhängig auswählen oder abwählen.',
 content:[
  text('example','Eine Option ausprobieren',[
   'Gehe mit Tab zur Checkbox, schalte sie mit der Leertaste um und probiere die Deaktivierung aus. Die Auswahl in dieser Demo wird nicht gespeichert.',
   'Die Spartan-Demo zeigt eine einzelne Checkbox mit zwei Auswahlwerten. Sie belegt keine Funktion für Gruppen, Sammelauswahl oder einen gemischten Zustand.',
  ]),
  text('states','Auswahl und Verfügbarkeit unterscheiden',[
   'Die Bilder zeigen Gestaltungsbeispiele, keine zusätzlichen Funktionen der Live-Demo. In jedem dieser Zustände kann ein sichtbarer Fokus hinzukommen.',
   'Nicht ausgewählt', 'Ausgewählt', 'Ausgewählt · deaktiviert',
   'Projekt-Updates abonnieren',
   'Der Versand von Updates ist für dieses Projekt derzeit pausiert.',
   'Deaktivierung beschreibt die Verfügbarkeit, nicht den Auswahlwert. Der Grund bleibt ausserhalb des deaktivierten Elements lesbar. Der Fokus kommt zur Auswahl hinzu und ersetzt das Häkchen nicht.',
  ]),
  text('rules','Drei Regeln für Checkbox',[
   '1. Unabhängige Entscheidungen ermöglichen: Verwende eine Checkbox für eine einzelne Bestätigung oder für Optionen, die zugleich gelten dürfen. Soll genau eine von mehreren Möglichkeiten gelten, verwende Radio. Für eine sofort wirksame Ein/Aus-Einstellung kommt Switch infrage. Kläre jeweils, wann die Änderung wirksam und wann sie gespeichert wird.',
   '2. Die Auswahl verständlich beschriften: Der sichtbare Text erklärt ohne unnötige Verneinung, was ausgewählt wird. Zusammengehörige Optionen erhalten eine gemeinsame Frage. Lange Beschriftungen dürfen umbrechen und müssen vollständig lesbar bleiben. Prüfe sowohl den Namen für assistive Technik als auch, ob ein Klick auf die Beschriftung die Checkbox aktiviert.',
   '3. Umfang und Rückmeldung erklären: «Alle auswählen» benennt die betroffenen Optionen, etwa sichtbare Einträge oder alle Ergebnisse. Wenn mindestens eine Option ausgewählt sein muss, erkläre das bei der Gruppe und zeige dort auch die Fehlermeldung. Eine ausgewählte Checkbox bedeutet noch nicht, dass die Auswahl gespeichert ist.',
  ]),
  text('boundaries','Einzeloption und Gruppe',[
   'Gib zusammengehörigen Checkboxen einen verständlichen Gruppennamen. Bei «Was soll der Export enthalten?» lassen sich Tabellen und Erläuterungen gleichzeitig auswählen. Eine einzelne Einwilligung bleibt eine eigenständige Entscheidung.',
   'Sind nur einige Optionen einer Gruppe ausgewählt, kann ein gemischter Zustand nötig sein. Der festgelegte lokale Contract kennt nur «ausgewählt» und «nicht ausgewählt». Die Spartan-Demo belegt weder einen gemischten Zustand (mixed) noch eine Sammelauswahl oder die Konformität einer Gruppe. Eine Gruppensteuerung muss zusätzlich spezifiziert und geprüft werden.',
  ]),
  text('limits','Quellen und Prüfgrenzen',[
   'Die sechs Blöcke der Ausgangsstudie beruhen auf dem Snapshot vom 20.11.2026, 14:42:13.144 UTC. Ihre Erläuterungen wurden sprachlich überarbeitet. Inhalt und Zusammenfassung der veröffentlichten Seite wurden vor dieser Redaktion über MCP mit der bisherigen Release abgeglichen.',
   'Die festgelegte Contractvorlage hat den Status Draft und nutzt ein natives input type="checkbox". Die Spartan-Vorschau nutzt einen Button mit Checkbox-Rolle; der Beschriftungstext ist über aria-labelledby als Name zugeordnet. Ein Klick auf diesen Text aktiviert die Checkbox in der Demo nicht. Die ähnliche Darstellung ist kein Nachweis gleicher Semantik, klickbarer Beschriftung oder Formularanbindung. Contract-Pin und Demo-Einstellungen bleiben unverändert.',
   'Sichtbarer Fokus, Leertaste, Aktivierung über den Beschriftungstext, lange Beschriftungen, Touch-Bedienung und die Bedienung mit assistiver Technik müssen weiterhin geprüft werden. Es gibt keinen veröffentlichten Implementierungsdatensatz und keine daraus ableitbare allgemeine Freigabe.',
  ]),
  text('original','Vollständige Ausgangsstudie und Quellen',[
   'Die Erläuterungen der Ausgangsstudie sind sprachlich überarbeitet. Die statischen Gruppenbilder bleiben Gestaltungsstudien.',
  ]),
  ...preserved,
 ] satisfies Page['content'],
}

// Preserve the previous study with its explicit source context.
release.content.unshift(currentReferenceNote(true))
