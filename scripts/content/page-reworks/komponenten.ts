import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = {version:1,direction:'ltr' as const,format:'' as const,indent:0}
const node = (text:string) => ({type:'text',version:1,text})
const paragraph = (value:string) => ({...base,type:'paragraph',children:[node(value)]})
const text = (blockName:string,title:string,...paragraphs:string[]):Block => ({blockType:'text',blockName,body:{root:{...base,type:'root',children:[{...base,type:'heading',tag:'h2',children:[node(title)]},...paragraphs.map(paragraph)]}}})
const link = (label:string,url:string) => ({...base,type:'paragraph',children:[{...base,type:'link',fields:{linkType:'custom',url,newTab:false},children:[node(label)]}]})
function card(kind:string,title:string,purpose:string,label:string,value:string,usage:string):Block {
 const block = text('preview-'+kind,title,purpose,label,value,usage)
 if(block.blockType==='text') block.body.root.children.push(link(title+' ansehen','/systems/shadcn/components/'+kind))
 return block
}
function linked(blockName:string,title:string,description:string,links:[string,string][]):Block {
 const block=text(blockName,title,description)
 if(block.blockType==='text') block.body.root.children.push(...links.map(([label,url])=>link(label,url)))
 return block
}
// Published CMS content read through MCP, without writes. Frozen baseline; never import mutable snapshots.
const original = [
  {
    "id": "6afce676d24234f397c13050",
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
                "text": "Mit der Aufgabe beginnen",
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
                "text": "Eine Komponente ist eine wiederkehrende Antwort auf eine konkrete Aufgabe. Soll eine Person eine Handlung auslösen, einen Wert eingeben, eine Option wählen oder eine Einstellung ändern? Diese Frage bestimmt den Einstieg. Die visuelle Ähnlichkeit zweier Bausteine reicht für die Auswahl nicht aus.",
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
    "blockName": "original-1",
    "blockType": "text"
  },
  {
    "id": "6afce676d24234f397c13051",
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
                "text": "Vier Bausteine im Zusammenhang",
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
                  "url": "/systems/shadcn/components/button",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Button · eine Handlung auslösen",
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
                    "text": "Input · kurzen freien Text eingeben",
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
                  "url": "/systems/shadcn/components/checkbox",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Checkbox · unabhängige Optionen markieren",
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
                  "url": "/systems/shadcn/components/switch",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Switch · einen Ein-/Aus-Zustand einstellen",
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
                  "url": "/systems/shadcn/komponenten-auswahl",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Komponenten auswählen · die Grenzen vergleichen",
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
    "blockName": "original-2",
    "blockType": "text"
  },
  {
    "id": "6afce676d24234f397c13052",
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
                "text": "Gestaltung, Beispiel und Nachweis auseinanderhalten",
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
                "text": "Die Gestaltungsstudien erklären Aufbau, Unterschiede und relevante Zustände. Sie sind statische Beispiele und keine bedienbaren Controls. Die Spartan-Live-Demos lassen sich ausprobieren, zeigen aber nur einen begrenzten lokalen Umfang. Der technische Contract beschreibt den verknüpften Referenzstand; sein Status ist nicht automatisch eine Implementierungsfreigabe.",
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
                "text": "Die vier Seiten verknüpfen weiterhin ihre bestehenden Contractrevisionen. Nur für Button ist derzeit eine Webimplementierung als Preview registriert. Input, Checkbox und Switch haben lokale Vorschauen, aber noch keinen veröffentlichten Implementierungsdatensatz. Für iOS und Android ist in diesem Bestand keine Implementierung veröffentlicht.",
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
    "id": "6afce676d24234f397c13053",
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
                "text": "Vom Baustein zum Ablauf",
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
                "text": "Ein Input allein ist noch kein Formular, ein Button noch kein Speichervorgang und ein Switch noch keine dauerhafte Einstellungsänderung. Patterns beschreiben diese Abläufe mit Rückmeldung, Fehler und Wiederaufnahme. Grundlagen erklären Farbe, Schrift, Abstände und visuelle Zustände. Die Komponentenseiten zeigen ihre konkrete Anwendung.",
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
                "text": "Arve verwendet shadcn als Referenzimplementierung und Spartan für lokale Webbeispiele. Die Entscheidungsfragen lassen sich auf ein Firmensystem übertragen; dessen Varianten, Regeln und Nachweise müssen separat zugeordnet werden.",
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
    "id": "6afce676d24234f397c13054",
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
                "text": "Weiterarbeiten",
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
                  "url": "/systems/shadcn/grundlagen",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Grundlagen · Bedeutung sichtbar machen",
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
                  "url": "/systems/shadcn/patterns",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "UX-Patterns · vollständige Abläufe",
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
                  "url": "/systems/shadcn/layout",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "Layouts · Komponenten auf Seiten anordnen",
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
    "blockName": "original-5",
    "blockType": "text"
  }
] satisfies NonNullable<Page['content']>

export const release = {
 expectedUpdatedAt: "2026-11-20T13:30:59.979Z",
 summary: 'Handlung auslösen, Text eingeben, unabhängig auswählen oder eine Einstellung ändern: den passenden Baustein finden.',
 content: [
  text('comparison','Vier Aufgaben, vier Bausteine','Schematische Vorschauen · die Komponentenseiten bieten die vorhandenen Spartan-Demos zum Ausprobieren.'),
  card('button','Button','Handlung','Änderungen speichern','','Löst eine Handlung aus, etwa Änderungen speichern.'),
  card('input','Input','Freier Wert','Projektname','Alpen','Erfasst einen kurzen, einzeiligen Text, den die Person selbst eingibt.'),
  card('checkbox','Checkbox','Unabhängige Auswahl','Kopie per E-Mail erhalten','','Markiert eine unabhängige Option; mehrere Optionen dürfen zugleich gelten.'),
  card('switch','Switch','Ein-/Aus-Einstellung','Benachrichtigungen','Ein','Zeigt eine Einstellung als ein oder aus; das Label bleibt beim Wechsel gleich.'),
  linked('selection','Noch unsicher?','Der Auswahlguide klärt Handlung oder Navigation, freien Text oder bekannte Werte und die Grenze zwischen Auswahl und Einstellung.',[['Komponenten auswählen','/systems/shadcn/komponenten-auswahl']]),
  linked('workflow','Im Ablauf weitergestalten','Lege fest, wann eine Auswahl gilt und wie Erfolg, Fehler oder eine ausstehende Übernahme sichtbar werden.',[['UX-Patterns ansehen','/systems/shadcn/patterns'],['Grundlagen ansehen','/systems/shadcn/grundlagen'],['Layouts ansehen','/systems/shadcn/layout']]),
  ...original,
 ] satisfies Page['content'],
}
