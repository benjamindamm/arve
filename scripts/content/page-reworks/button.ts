import { currentReferenceNote } from '../shadcn-complete'
import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = {version:1,direction:'ltr' as const,format:'' as const,indent:0}
const node = (text:string) => ({type:'text',version:1,text})
const text = (blockName:string,title:string,...paragraphs:string[]):Block => ({blockType:'text',blockName,body:{root:{...base,type:'root',children:[{...base,type:'heading',tag:'h2',children:[node(title)]},...paragraphs.map(value=>({...base,type:'paragraph',children:[node(value)]}))]}}})
// Editorial revision of the published text; original block structure retained.
const original = [
  {
    "id": "6afce676d24234f397c1305a",
    "kind": "button",
    "title": "Welche Handlung führt weiter?",
    "explanation": "«Änderungen speichern» ist neben «Abbrechen» stärker hervorgehoben. «Projektübersicht öffnen» führt dagegen zu einem Navigationsziel und ist als Link zu behandeln. Default und Outline zeigen dieselbe Beschriftung mit unterschiedlich starker Hervorhebung. Ein verfügbarer Button macht die Handlung verständlich, erhält sichtbaren Tastaturfokus und löst bei Aktivierung einen Vorgang aus. Fortschritt, Erfolg oder Fehler zeigt der anschliessende Ablauf. Diese statische Studie belegt weder einen Button mit Ladeanzeige noch Speicherung oder neue Varianten.",
    "source": "Eigene Gestaltungsstudie für Arve. Die Darstellung wird nicht aus den Contract-Tokens erzeugt und zeigt keine zusätzlichen Fähigkeiten der lokalen Komponente.",
    "revision": null,
    "blockName": "original-1",
    "blockType": "componentStudy"
  },
  {
    "id": "6afce676d24234f397c1305b",
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
                "text": "Die wichtigste Handlung hervorheben",
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
                "text": "Hebe die nächste sinnvolle Handlung stärker hervor als die Nebenaktionen. Sind alle Aktionen gleich stark hervorgehoben, fällt die Entscheidung schwerer. Nebenaktionen müssen trotz geringerer Hervorhebung auffindbar bleiben. Die lokale Demo bietet die Varianten Default und Outline. Wähle sie danach, welche Handlung Vorrang hat.",
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
    "blockName": "original-2",
    "blockType": "text"
  },
  {
    "id": "6afce676d24234f397c1305c",
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
                "text": "Die Folge benennen",
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
                "text": "Die Beschriftung nennt die Handlung möglichst konkret: «Änderungen speichern» statt «Hier klicken». Ob ein kürzerer Text verständlich ist, hängt vom Kontext ab. Ein Icon kann die Bedeutung ergänzen; es ersetzt hier keine erforderliche sichtbare Beschriftung. Varianten nur mit Icon, Toggle-, Menü- und destruktive Varianten sind durch diese Vorschau nicht nachgewiesen.",
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
                "text": "Auch lange Übersetzungen müssen lesbar bleiben. Reicht der Platz nebeneinander nicht, können die Buttons einer Aktionsgruppe untereinander stehen. Ein abgeschnittener Text oder ein einzelnes Symbol ist kein gleichwertiger Ersatz. Form, Schrift und Abstand müssen auch in schmalen Ansichten erkennen lassen, welche Handlung Vorrang hat.",
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
    "blockName": "original-3",
    "blockType": "text"
  },
  {
    "id": "6afce676d24234f397c1305d",
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
                "text": "Nach der Aktivierung Orientierung erhalten",
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
                "text": "Zeige, ob ein Vorgang läuft, abgeschlossen oder fehlgeschlagen ist. Eine Wiederholung darf nicht unbemerkt dieselbe Aktion mehrfach auslösen. Diese Rückmeldungen muss der jeweilige Ablauf bereitstellen; der Button bietet sie nicht automatisch. Wird ein Dialog geöffnet oder wechselt der Kontext, braucht der Fokus ein sinnvolles Ziel. Bleibt die Aufgabe an derselben Stelle, soll die Orientierung dort erhalten bleiben.",
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
                "text": "Fehlen Voraussetzungen für eine Aktion, erkläre den Grund ausserhalb des deaktivierten Buttons. Die Erklärung darf nicht nur beim Darüberfahren mit dem Mauszeiger erscheinen. Prüfe Fokus und Aktivierung mit der Tastatur sowie die erreichbare Bedienfläche auf Touch-Geräten.",
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
    "blockName": "original-4",
    "blockType": "text"
  },
  {
    "id": "6afce676d24234f397c1305e",
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
                "text": "Die Spartan-Demo bietet Default, Outline und Deaktivierung. «Rechnung herunterladen» löst nur eine Beispielmeldung aus; es wird keine Rechnung heruntergeladen. Die Implementierung ist als Web-Preview registriert. Geprüft wurden Klick und Deaktivierung. Mobile Bedienung, assistive Technologien und die vollständige Übereinstimmung mit dem Contract bleiben offen.",
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
                "text": "Weitere Grössen sind in der festgelegten Contractrevision beschrieben, lassen sich aber in der aktuellen Demo nicht vergleichen. Damit sind nicht alle Grössen und Variantenkombinationen freigegeben. Die Gestaltungsstudie verwendet eine eigene Darstellung für dieses Portal; ihre Übereinstimmung mit den Contractwerten ist nicht geprüft.",
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
    "blockName": "original-5",
    "blockType": "text"
  },
  {
    "id": "6afce676d24234f397c1305f",
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
                  "url": "/systems/shadcn/destruktive-aktionen",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Destruktive Aktionen · Folgen und Wiederherstellung",
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
                    "text": "Formulare und Validierung · Abschliessen und Rückmeldung",
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
                    "text": "Content Design · verständliche Handlungstexte",
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
                    "text": "Abstände · Bedienfläche und sichtbare Grösse",
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
                  "url": "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "WAI APG · Button, geprüft 18.11.2026",
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
    "blockName": "original-6",
    "blockType": "text"
  }
] satisfies Page['content']
export const release = {
  expectedUpdatedAt: '2026-11-20T15:06:42.364Z',
  summary: 'Ein Button löst eine Handlung aus. Beschrifte ihn klar und hebe die wichtigste Aktion hervor.',
  content: [
    text('example','Button ausprobieren','Wähle Default oder Outline und prüfe die deaktivierte Darstellung. Die Aktion zeigt nur eine Beispielmeldung; sie lädt keine Rechnung herunter.'),
    text('rules','Drei Regeln für Aktionen',
      'Zweck: Ein Button löst eine Handlung aus. Für ein Navigationsziel verwende einen Link.',
      'Hierarchie: Hebe die nächste wichtige Handlung mit Default hervor. Outline hebt eine Nebenaktion weniger stark hervor. Beide brauchen eine verständliche Beschriftung.',
      'Beschriftung: Benenne Handlung und Gegenstand konkret statt «Hier klicken». Auch lange Übersetzungen müssen lesbar bleiben; Icons ergänzen den sichtbaren Text.'),
    text('states','Variante und Zustand wählen',
      'Default / Outline: Vergleiche im Beispiel, wie stark dieselbe Handlung hervorgehoben wird. Die Variantenwahl verändert die Darstellung, nicht den Zweck.',
      'Bereit / Fokus: Aktiviere die Handlung per Klick, Enter oder Leertaste. Der Tastaturfokus soll sichtbar bleiben.',
      'Deaktiviert: Schalte im Beispiel «Deaktiviert» ein. Die Handlung ist dann nicht verfügbar. Erkläre relevante Voraussetzungen zusätzlich ausserhalb des Buttons.',
      'Nach der Aktion: Der anschliessende Ablauf zeigt Fortschritt, Erfolg oder Fehler. Diese Demo meldet nur die Aktivierung; sie bietet keinen Button mit Lade- oder Erfolgsanzeige.'),
    text('sources','Quellen und Prüfgrenzen',
      'Redaktionelle Grundlage: veröffentlichte Button-Seite vom 20. November 2026, Ausgangsstand 07:48:51.882 UTC. Die Gestaltungsstudie und die Fachtexte stehen unten als sprachlich überarbeitete Vertiefung.',
      'Contract-Grundlage: shadcn-Export 65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26, components/button/interface.json (sichtbarer Text, disabled, Default/Outline, nativer click), layout.css (Darstellung), behavior.scxml (enabled/disabled, Aktivierung) und accessibility.html (nativer Button mit Beschriftung). Diese Seite ändert keinen Contract.',
      'Die lokale Spartan-Demo hat den Status Web-Preview. Weitere Grössen aus dem Contract, Varianten nur mit Icon sowie Toggle-, Menü- und destruktive Varianten lassen sich hier nicht vergleichen. Mobile Bedienung, assistive Technologien und die vollständige Übereinstimmung mit dem Contract bleiben offen. Den aktuellen Plattformstand und die Contractdateien findest du im Anschluss.'),
    ...original,
  ] satisfies Page['content'],
}

// Preserve the previous study with its explicit source context.
release.content.unshift(currentReferenceNote(true))
