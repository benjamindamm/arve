import type { Page } from '../../../src/payload-types'

type Block = NonNullable<Page['content']>[number]
const node = (text:string) => ({type:'text',version:1,text,detail:0,format:0,mode:'normal',style:''})
const paragraph = (text:string) => ({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[node(text)]})
const link = (label:string,url:string) => ({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[{type:'link',version:1,direction:'ltr',format:'',indent:0,fields:{url,linkType:'custom',newTab:false},children:[node(label)]}]})
function block(blockName:string,title:string,paragraphs:string[],destination?:[string,string]):Block {
  return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[
    {type:'heading',tag:'h2',version:1,direction:'ltr',format:'',indent:0,children:[node(title)]},
    ...paragraphs.map(paragraph),...(destination?[link(...destination)]:[]),
  ]}}}
}
// Current CMS content read over MCP, 20.11.2026: frozen snapshot matches after
// removing generated ids and nulls. Preserve this original study in details.
const original: {content: Block[]} = {
  "content": [
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
                  "text": "Responsives Raster im aktuellen Beispiel",
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
                  "text": "Die Rastervorschau im Portal zeigt bei weniger als 640 px Fensterbreite 4 Spalten mit 12 px Spaltenabstand, von 640 bis unter 1024 px 8 Spalten mit 16 px Abstand und ab 1024 px 12 Spalten mit 24 px Abstand. Diese Zahlen beschreiben die aktuelle Beispielimplementierung. Sie sind keine allgemeine shadcn-Vorgabe und keine freigegebene systemweite Raster- oder Abstandsskala.",
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
                  "text": "Die verfügbare Inhaltsfläche kann durch Navigation und Container schmaler als das Fenster sein. Wähle Anordnung und Umbruch deshalb nach Inhalt, Lesbarkeit und Textvergrösserung; aus der Zahl sichtbarer Rasterspalten folgt noch keine passende Aufteilung für jede Seite.",
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
              "tag": "h2",
              "type": "heading",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Abstände nach ihrer Aufgabe wählen",
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
                  "text": "Die Grundlage «Abstände und Grössen» erklärt Nähe innerhalb einer Einheit, Trennung zwischen Gruppen, Innenraum und Bedienflächen. Sie führt auch den Status der vorgeschlagenen Abstandswerte. Hier wird keine zweite allgemeine Skala festgelegt.",
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
                      "text": "Grundlage: Abstände und Grössen",
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
              "tag": "h2",
              "type": "heading",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Anwendung",
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
                  "text": "Ein Eingabefeld und sein Label bleiben zusammen. Ein Formular stapelt Felder bei wenig Platz. Zwei kurze, zusammengehörige Felder können bei genügend Platz nebeneinander stehen. Prüfe dabei lange Beschriftungen und vergrösserten Text; eine feste Spaltenzahl ersetzt diese Prüfung nicht.",
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
              "tag": "h2",
              "type": "heading",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Vorhandene Layoutbeispiele",
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
                  "text": "Die drei Beispiele veranschaulichen eine Aufteilung in Haupt- und Zusatzbereich, gleichrangige Bereiche und eine zusammenhängende Arbeitsfläche. Sie zeigen begrenzte Anordnungen, keine vollständig geprüften Seitenabläufe. Die Detailseiten-Anleitung erklärt die weitergehenden Entscheidungen.",
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
                    "url": "/systems/shadcn/layout/detail",
                    "newTab": false,
                    "linkType": "custom"
                  },
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "Beispiel: Detailseite",
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
                    "url": "/systems/shadcn/layout/uebersicht",
                    "newTab": false,
                    "linkType": "custom"
                  },
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "Beispiel: Übersichtsseite",
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
                    "url": "/systems/shadcn/layout/arbeitsflaeche",
                    "newTab": false,
                    "linkType": "custom"
                  },
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "Beispiel: Arbeitsfläche",
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
                    "url": "/systems/shadcn/detailseite",
                    "newTab": false,
                    "linkType": "custom"
                  },
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "Anleitung: Detailseite",
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
      "blockType": "text"
    }
  ]
}
export const release = {
  expectedUpdatedAt:'2026-11-20T08:39:34.049Z',
  summary:'Wähle den Zweck der Seite, ihre Gesamtanordnung und die Anordnung im Inneren.',
  content:[
    block('layout-page-types','Page types · Seitentypen',[
      'Der Seitentyp beschreibt den Zweck und die benötigten Inhalte: Übersicht, Detail, Bearbeiten oder Erstellen.',
      'Zweck der Seite','Beispiel: Detailseite','Projekt Alpenblick','Ein Projekt ansehen','Status','In Arbeit',
    ],['Seitentypen vergleichen','/systems/shadcn/page-types']),
    block('layout-page-layouts','Page layouts · Seitenlayouts',[
      'Das Seitenlayout ordnet die grossen Bereiche der Seite an, etwa einen Hauptbereich neben einem Zusatzbereich.',
      'Gesamtanordnung','Beispiel: Main+Sidebar','Seitenkopf','Hauptbereich','Zusatzbereich',
    ],['Seitenlayouts vergleichen','/systems/shadcn/page-layouts']),
    block('layout-content-layouts','Content layouts · Inhaltslayouts',[
      'Das Inhaltslayout ordnet Inhalte innerhalb einer Card oder eines Abschnitts an, etwa Bezeichnungen und Werte.',
      'Anordnung im Inneren','Beispiel: Label–Value','Projektdaten','Projektname','Alpenblick','Status','In Arbeit',
    ],['Inhaltslayouts vergleichen','/systems/shadcn/content-layouts']),
    block('layout-navigation','Seitenstruktur und Navigation',[],['Orientierung und Wege auf der Seite gestalten','/systems/shadcn/seitenstruktur-und-navigation']),
    block('layout-evidence','Quellen und bisherige Rasterstudie',[
      'Die drei Vorschauen veranschaulichen die bestehenden Kategorien an statischen Beispielen. Sie legen keine zusätzlichen Layoutregeln oder Rasterwerte fest.',
      'Die Beschreibungen folgen der veröffentlichten Gliederung in Page types, Page layouts und Content layouts. Die bisherige Rasterstudie mit ihren Quellen und Nachweisgrenzen bleibt nachfolgend unverändert erhalten (Stand 20. November 2026).',
    ]),
    ...original.content as Block[],
  ],
} satisfies {expectedUpdatedAt:string} & Pick<Page,'summary'|'content'>
