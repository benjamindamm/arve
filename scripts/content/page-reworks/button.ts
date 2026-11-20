import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = {version:1,direction:'ltr' as const,format:'' as const,indent:0}
const node = (text:string) => ({type:'text',version:1,text})
const text = (blockName:string,title:string,...paragraphs:string[]):Block => ({blockType:'text',blockName,body:{root:{...base,type:'root',children:[{...base,type:'heading',tag:'h2',children:[node(title)]},...paragraphs.map(value=>({...base,type:'paragraph',children:[node(value)]}))]}}})
// Frozen published CMS baseline, read with push:false on 20 November 2026.
const original = [
  {
    "id": "6afce676d24234f397c1305a",
    "kind": "button",
    "title": "Welche Handlung führt weiter?",
    "explanation": "«Änderungen speichern» ist im Aktionspaar stärker hervorgehoben als «Abbrechen». Eine Navigation wie «Projektübersicht öffnen» führt zu einem Ziel und ist als Link zu behandeln. Default und Outline zeigen dieselbe Beschriftung mit unterschiedlichem Gewicht. Eine verständliche Handlung ist bereit, erhält sichtbaren Tastaturfokus und löst einen Vorgang aus. Fortschritt, Erfolg oder Fehler gehören zum folgenden Ablauf. Diese statische Studie belegt weder einen Loading-Button noch Speicherung oder neue Varianten.",
    "source": "Eigene Gestaltungsstudie für Arve; nicht aus den Contract-Tokens gerendert und keine zusätzliche lokale Komponentenfähigkeit.",
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
                "text": "Gewicht folgt der Aufgabe",
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
                "text": "Gib der nächsten sinnvollen Handlung ein erkennbares Gewicht. Eine gleich starke Hervorhebung aller Aktionen macht die Entscheidung schwerer. Nebenaktionen dürfen ruhiger sein, müssen aber auffindbar bleiben. Default und Outline sind die beiden lokal angebotenen Demo-Varianten. Ihre Auswahl soll die Handlungshierarchie erklären, nicht die Oberfläche dekorieren.",
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
                "text": "Ein Label nennt die Handlung möglichst konkret: «Änderungen speichern» statt «Hier klicken». Der notwendige Kontext bestimmt, ob ein kürzerer Text verständlich ist. Ein Icon kann die Bedeutung ergänzen; es ersetzt hier kein erforderliches sichtbares Label. Icon-only, Toggle-, Menü- und destruktive Varianten sind durch diese Vorschau nicht nachgewiesen.",
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
                "text": "Bei langen Übersetzungen muss die Beschriftung lesbar bleiben. Aktionsgruppen können untereinander wechseln; ein abgeschnittener Text oder ausschliesslich ein Symbol ist kein gleichwertiger Ersatz. Form, Schrift und Abstand unterstützen dieselbe Hierarchie auch in schmalen Ansichten.",
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
                "text": "Zeige, ob ein Vorgang läuft, abgeschlossen oder fehlgeschlagen ist. Eine Wiederholung darf nicht unbemerkt dieselbe Aktion mehrfach auslösen. Diese Regeln gehören zum jeweiligen Ablauf und sind keine automatische Fähigkeit des Buttons. Nach dem Öffnen eines Dialogs oder einem Kontextwechsel braucht der Fokus ein sinnvolles Ziel; bleibt die Aufgabe am Ort, soll die Orientierung dort erhalten bleiben.",
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
                "text": "Eine deaktivierte Aktion braucht bei relevanten Voraussetzungen einen verständlichen Grund ausserhalb des nicht verfügbaren Elements. Nicht nur Hover verwenden. Prüfe Fokus und Aktivierung mit Tastatur sowie die erreichbare Bedienfläche auf Touch-Geräten.",
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
                "text": "Die Spartan-Demo bietet Default, Outline und Deaktivierung. «Rechnung herunterladen» löst nur eine Beispielmeldung aus; es wird keine Rechnung heruntergeladen. Der registrierte Stand ist Web-Preview. Die vorhandene Prüfung umfasst Klick und Deaktivierung; mobile Bedienung, assistive Technologien und vollständige Contract-Übereinstimmung bleiben offen.",
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
                "text": "Weitere Grössen sind im gepinnten Contract beschrieben, aber nicht über die aktuelle Demo vergleichbar. Daraus folgt keine Freigabe aller Grössen und Variantenkombinationen. Die Gestaltungsstudie oben verwendet eigene Portalgestaltung und keine geprüfte Abbildung der Contractwerte.",
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
  expectedUpdatedAt: '2026-11-20T07:48:51.882Z',
  summary: 'Eine Handlung auslösen: klar beschriften, passend gewichten und den Zustand verständlich machen.',
  content: [
    text('example','Button ausprobieren','Wähle Default oder Outline und prüfe die deaktivierte Darstellung. Die Aktion zeigt nur eine Beispielmeldung; sie lädt keine Rechnung herunter.'),
    text('rules','Drei Regeln für Aktionen',
      'Zweck: Ein Button löst eine Handlung aus. Für ein Navigationsziel verwende einen Link.',
      'Hierarchie: Hebe die nächste wichtige Handlung mit Default hervor. Outline gibt einer Nebenaktion weniger Gewicht. Die Beschriftung bleibt gleich verständlich.',
      'Beschriftung: Benenne Handlung und Gegenstand konkret statt «Hier klicken». Lass auch lange Übersetzungen lesbar; Icons ergänzen den sichtbaren Text.'),
    text('states','Variante und Zustand wählen',
      'Default / Outline: Vergleiche im Beispiel das Gewicht derselben Handlung. Die Variantenwahl verändert die Darstellung, nicht den Zweck.',
      'Bereit / Fokus: Aktiviere die Handlung per Klick, Enter oder Leertaste. Der Tastaturfokus soll sichtbar bleiben.',
      'Deaktiviert: Aktiviere «Deaktiviert». Die Handlung ist dann nicht verfügbar. Erkläre relevante Voraussetzungen zusätzlich ausserhalb des Buttons.',
      'Nach der Aktion: Fortschritt, Erfolg und Fehler gehören zum folgenden Ablauf. Diese Demo meldet nur die Aktivierung; sie bietet keinen Loading- oder Erfolgsbutton.'),
    text('sources','Quellen und Prüfgrenzen',
      'Redaktionelle Grundlage: veröffentlichte Button-Seite vom 20. November 2026, Ausgangsstand 07:48:51.882 UTC. Die ursprüngliche Gestaltungsstudie und die Fachtexte stehen unten unverändert als aufklappbare Vertiefung.',
      'Contract-Grundlage: shadcn-Export 65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26, components/button/interface.json (sichtbarer Text, disabled, Default/Outline, nativer click), layout.css (Darstellung), behavior.scxml (enabled/disabled, Aktivierung) und accessibility.html (nativer Button mit Beschriftung). Diese Seite ändert keinen Contract.',
      'Die echte lokale Spartan-Demo ist Web-Preview. Weitere Contract-Grössen, Icon-only, Toggle-, Menü- und destruktive Varianten sind hier nicht vergleichbar. Mobile Bedienung, assistive Technologien und vollständige Contract-Übereinstimmung bleiben offen. Den aktuellen Plattformstand und die Contractdateien findest du im Anschluss.'),
    ...original,
  ] satisfies Page['content'],
}
