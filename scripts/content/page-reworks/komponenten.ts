import { catalogueNote } from '../shadcn-complete'
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
// Current explanatory text, edited from the MCP-read baseline; no mutable snapshot import.
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
                "text": "Wähle die Komponente danach, was die Person tun soll: eine Handlung auslösen, einen Wert eingeben, eine Option wählen oder eine Einstellung ändern. Zwei Bausteine können ähnlich aussehen und trotzdem unterschiedlichen Aufgaben dienen.",
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
                    "text": "Input · einen kurzen Text eingeben",
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
                    "text": "Checkbox · eine oder mehrere unabhängige Optionen wählen",
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
                    "text": "Switch · eine Einstellung ein- oder ausschalten",
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
                    "text": "Komponenten auswählen · ähnliche Aufgaben unterscheiden",
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
                "text": "Die Gestaltungsstudien zeigen, wie die Komponenten aufgebaut sind, worin sie sich unterscheiden und welche Zustände für die Gestaltung wichtig sind. Diese statischen Beispiele lassen sich nicht bedienen. Die Spartan-Live-Demos kannst du ausprobieren; sie zeigen die jeweils lokal vorhandenen Funktionen. Der technische Contract beschreibt den verknüpften Referenzstand. Sein Status bedeutet nicht automatisch, dass die Implementierung freigegeben ist.",
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
                "text": "Die vier Seiten verweisen auf ihre bestehenden Contractrevisionen. Nur für Button ist derzeit eine Webimplementierung als Preview registriert. Für Input, Checkbox und Switch gibt es lokale Vorschauen, aber noch keinen veröffentlichten Implementierungsdatensatz. Für iOS und Android ist in diesem Bestand keine Implementierung veröffentlicht.",
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
                "text": "Ein Input allein ist noch kein Formular. Ein Button führt nicht selbst den gesamten Speichervorgang aus, und ein Switch speichert eine Einstellungsänderung nicht automatisch dauerhaft. Die UX-Patterns beschreiben die zugehörigen Abläufe: welche Rückmeldung erscheint, wie Fehler angezeigt werden und wie die Person danach fortfährt. Die Grundlagen erklären Farbe, Schrift, Abstände und visuelle Zustände; die Komponentenseiten zeigen, wie sie angewendet werden.",
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
                "text": "Arve verwendet shadcn als Referenzimplementierung und Spartan für lokale Webbeispiele. Die Fragen zur Komponentenwahl helfen auch bei der Arbeit mit einem firmeneigenen Designsystem. Prüfe dort gesondert, welche Varianten und Regeln gelten und welche Nachweise vorliegen.",
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
 expectedUpdatedAt: "2026-11-20T14:39:06.877Z",
 summary: 'Finde den passenden Baustein für deine Oberfläche. Der Katalog verbindet Designvorschauen, Quellencontracts und Framework-Referenzen.',
 content: [
  text('comparison','Vier Aufgaben, vier Bausteine','Die Vorschauen zeigen die Bausteine vereinfacht. Auf den Komponentenseiten kannst du die vorhandenen Spartan-Demos ausprobieren.'),
  card('button','Button','Eine Handlung auslösen','Änderungen speichern','','Löst eine Handlung aus, zum Beispiel das Speichern von Änderungen.'),
  card('input','Input','Text eingeben','Projektname','Alpen','Hier gibt die Person einen kurzen, einzeiligen Text selbst ein.'),
  card('checkbox','Checkbox','Unabhängige Optionen wählen','Kopie per E-Mail erhalten','','Die Person kann eine unabhängige Option auswählen. Mehrere Optionen dürfen zugleich ausgewählt sein.'),
  card('switch','Switch','Eine Einstellung ein- oder ausschalten','Benachrichtigungen','Ein','Zeigt, ob eine Einstellung ein- oder ausgeschaltet ist. Die Beschriftung bleibt beim Wechsel gleich.'),
  linked('selection','Noch unsicher?','Die Seite «Komponenten auswählen» hilft dir, ähnliche Aufgaben zu unterscheiden: eine Handlung auslösen oder ein Ziel öffnen, Text eingeben oder aus bekannten Werten wählen, eine Option wählen oder eine Einstellung ändern.',[['Komponenten auswählen','/systems/shadcn/komponenten-auswahl']]),
  linked('workflow','Im Ablauf weitergestalten','Lege fest, wann eine Auswahl wirksam wird. Zeige, ob die Übernahme noch aussteht, erfolgreich war oder fehlgeschlagen ist.',[['UX-Patterns ansehen','/systems/shadcn/patterns'],['Grundlagen ansehen','/systems/shadcn/grundlagen'],['Layouts ansehen','/systems/shadcn/layout']]),
  ...original,
 ] satisfies Page['content'],
}

release.content.unshift(catalogueNote)
