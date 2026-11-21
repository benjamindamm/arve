import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = {version:1,direction:'ltr' as const,format:'' as const,indent:0}
const node = (text:string) => ({type:'text',version:1,text})
const paragraph = (value:string) => ({...base,type:'paragraph',children:[node(value)]})
function text(blockName:string,title:string,...paragraphs:string[]):Block { return {blockType:'text',blockName,body:{root:{...base,type:'root',children:[{...base,type:'heading',tag:'h2',children:[node(title)]},...paragraphs.map(paragraph)]}}} }
const link = (label:string,url:string) => ({...base,type:'paragraph',children:[{...base,type:'link',fields:{linkType:'custom',url,newTab:false},children:[node(label)]}]})
function route(kind:string,question:string,value:string,name:string,reason:string,label:string,sample:string):Block {
 const b=text('route-'+kind,question,value,name,reason,label,sample)
 if(b.blockType==='text') b.body.root.children.push(link(name+' ansehen','/systems/shadcn/components/'+kind))
 return b
}
function linked(blockName:string,title:string,description:string,entries:[string,string][]):Block {
 const b=text(blockName,title,description)
 if(b.blockType==='text') b.body.root.children.push(...entries.map(([label,url])=>link(label,url)))
 return b
}
// Current explanation based on the read-only Payload baseline of 17.11.2026; editorially revised 20.11.2026. No live snapshot import.
const original = [
  {
    "id": "6afce676d24234f397c13055",
    "kind": "selection",
    "title": "Was soll geschehen?",
    "explanation": "Mit einem Button löst die Person eine Handlung aus. Der Button selbst hat keinen eigenen Auswahlzustand. Mit Input erfasst sie einen kurzen, einzeiligen freien Text. Mit Checkboxen wählt sie unabhängige Optionen aus oder ab; mehrere dürfen zugleich gelten. Ein Switch zeigt, ob eine Einstellung ein- oder ausgeschaltet ist. Der Ablauf muss deutlich machen, wann die Änderung wirkt. Die vier Beispiele sind Gestaltungsstudien und belegen keine zusätzlichen Fähigkeiten der lokalen Komponenten.",
    "source": "Eigene Gestaltungsstudie; die Darstellung wird nicht aus den Contract-Tokens erzeugt und belegt keine zusätzliche Fähigkeit der lokalen Komponenten.",
    "revision": null,
    "blockName": "original-1",
    "blockType": "componentStudy"
  },
  {
    "id": "6afce676d24234f397c13056",
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
                "text": "Handlung oder Navigation?",
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
                "text": "Eine Handlung verändert etwas oder startet einen Vorgang. Ein Link führt zu einem Ziel. «Änderungen speichern» und «Projektübersicht öffnen» haben deshalb unterschiedliche Aufgaben, auch wenn beide hervorgehoben dargestellt werden. Bei einem Download entscheide anhand des tatsächlichen Verhaltens: Eine vorhandene Ressource verlinken ist etwas anderes als einen Exportauftrag auslösen.",
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
    "id": "6afce676d24234f397c13057",
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
                "text": "Freier Text oder bekannte Werte?",
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
                "text": "Input passt zu einem kurzen Wert, den die Person kennt und selbst formulieren kann. Für längeren Text braucht es eine mehrzeilige Eingabe. Sind nur bekannte Werte gültig, muss die Auswahl diese Grenze deutlich machen. Suche in einer Werteliste darf nicht stillschweigend beliebigen Freitext als gültigen Wert übernehmen.",
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
                "text": "Soll die Person genau eine von mehreren Optionen wählen, kommen beispielsweise Radio oder Select infrage; für durchsuchbare Listen gegebenenfalls eine Combobox. Diese Alternativen helfen bei der Entscheidung, sind in diesem lokalen Komponentenpaket aber nicht als geprüfte Implementierungen verfügbar. Ob Optionen sichtbar, verborgen oder durchsuchbar sein sollen, hängt von der Aufgabe und dem Inhalt ab. Die Anzahl der Optionen allein entscheidet das nicht.",
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
    "id": "6afce676d24234f397c13058",
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
                "text": "Unabhängige Auswahl oder Ein-/Aus-Einstellung?",
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
                "text": "Eine Checkbox eignet sich auch für eine einzelne unabhängige Bestätigung. Mit mehreren Checkboxen kann die Person mehrere unabhängige Optionen wählen. Ein Switch zeigt, ob eine Einstellung ein- oder ausgeschaltet ist; sein Label bleibt dabei gleich.",
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
                "text": "Lokale Gestaltungsempfehlung: Nutze Switches für direkt wirksame Einstellungen und Checkboxen für Optionen, die gesammelt bestätigt werden. Das ist eine Konvention für verständliche Abläufe, keine universelle ARIA-Vorschrift. Zeige in beiden Fällen eindeutig, wann eine Änderung gilt und ob sie bereits gespeichert ist.",
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
    "id": "6afce676d24234f397c13059",
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
                "text": "Vertiefen",
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
                    "text": "Auswahl und Suche · Werte und Ergebnislisten",
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
                    "text": "Formulare und Validierung · Eingabe abschliessen",
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
                    "text": "WAI APG · Button und Abgrenzung zum Link",
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
                    "text": "WAI APG · Checkbox",
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
                  "url": "https://www.w3.org/WAI/ARIA/apg/patterns/switch/",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "WAI APG · Switch",
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
 expectedUpdatedAt: "2026-11-20T14:43:09.583Z",
 summary:'Wähle die Komponente danach, was die Person tun soll: einen Vorgang starten, Text eingeben, Optionen auswählen oder eine Einstellung ändern.',
 content:[
 text('decision','Was soll die Person tun?','Die vier Wege zeigen, welche Komponente zur jeweiligen Aufgabe passt.','Aufgabe → Eingabe oder Wirkung → Komponente','Die Beispiele sind schematisch. Sie speichern nichts und zeigen keine zusätzlichen Fähigkeiten der Komponenten.'),
 route('button','Einen Vorgang auslösen','Eine Handlung starten','Button','Die Person speichert Änderungen oder startet einen Exportauftrag. Der Button löst die Handlung aus.','Änderungen speichern',''),
 route('input','Einen kurzen Wert selbst formulieren','Einzeiliger freier Text','Input','Die Person kennt den Wert und kann ihn selbst eingeben. Muss sie aus gültigen Vorgaben wählen, führt der Weg zu Auswahl und Suche.','Projektname','Jahresbericht'),
 route('checkbox','Optionen vor dem Abschliessen auswählen','Unabhängige Ja/Nein-Werte','Checkbox','Eine oder mehrere Optionen dürfen gelten. Die Auswahl bleibt von der späteren Handlung getrennt; erst «Exportieren» schliesst diesen Beispielablauf ab.','Tabellen einschliessen','Diagramme einschliessen'),
 route('switch','Eine Einstellung direkt ändern','Ein oder aus','Switch','Die Einstellung soll direkt wirken. Zeige, ob die Änderung übernommen wurde. Das Label bleibt beim Umschalten gleich.','Benachrichtigungen','Ein'),
 linked('boundary','Keiner dieser Wege passt?','Um ein Ziel zu öffnen, verwende einen Link. Soll die Person genau eine feste Option wählen, eine Liste durchsuchen oder längeren Text eingeben, braucht sie eine andere Eingabe. Für Radio, Select und Combobox gibt es in dieser Bibliothek keine Contracts.',[['Auswahl und Suche: feste Werte und Listen','/systems/shadcn/auswahl-und-suche']]),
 text('rules','Drei Fragen vor der Festlegung','Handlung oder Ziel? Speichern startet einen Vorgang; ein Link öffnet eine vorhandene Seite oder Ressource. Entscheide nach Verhalten, auch beim Download.','Freier oder vorgegebener Wert? Input erfasst kurzen freien Text. Bei der Suche in gültigen Optionen darf die Oberfläche eingegebenen Freitext nicht unbemerkt als gültige Auswahl übernehmen.','Auswahl oder direkte Einstellung? Checkboxen erlauben eine einzelne unabhängige Auswahl ebenso wie mehrere. Für direkt wirksame Einstellungen empfehlen wir hier Switches. Diese lokale Konvention ist keine allgemeine ARIA-Vorschrift. In beiden Fällen muss klar sein, wann die Änderung übernommen wird.'),
 linked('sourceDetails','Quellen und Prüfgrenzen','Die vier Wege sind Gestaltungsempfehlungen, die auf den unten erläuterten Auswahlfragen beruhen. shadcn ist die Referenzimplementierung. Die Beispiele zeigen die Gestaltung im Portal; sie belegen weder die vollständige Einhaltung der Contracts noch dauerhafte Speicherung.',[
 ['Button: Handlung und vorhandene Vorschau','/systems/shadcn/components/button'],['Input: kurze freie Werte','/systems/shadcn/components/input'],['Checkbox: unabhängige Optionen','/systems/shadcn/components/checkbox'],['Switch: Ein-/Aus-Einstellung','/systems/shadcn/components/switch'],['Auswahl und Suche','/systems/shadcn/auswahl-und-suche'],['Formulare und Validierung','/systems/shadcn/formulare-validierung']]),
 text('observations','Beobachtungen aus Aufgabenkontexten','UX-003 · Zeitraum oder Konten auswählen: Die Person wählt aus gültigen Optionen, statt beliebigen Freitext einzugeben. Beobachtet wurden das Öffnen und Eingrenzen der Auswahl sowie die Auswahl in einzelnen Varianten. Damit sind weder die Suche noch die Barrierefreiheit allgemein freigegeben.','UX-009 · Zeilen vor einer gemeinsamen Folgeaktion markieren: Die Person kann unabhängig einzelne Zeilen auswählen; die gemeinsame Handlung wird getrennt davon angeboten. Welche Auswahl bei einem Filterwechsel erhalten bleibt, unterscheidet sich zwischen den untersuchten Varianten. Nicht belegt sind ein gemischter Zustand der Checkbox im Tabellenkopf und ein vollständig durchgeführter Ablauf der gemeinsamen Folgeaktion.','Die Beobachtungen sind im Patternkatalog als Kandidaten erfasst; sie geben keine Komponenten frei. Auch die Empfehlungen auf dieser Seite erweitern den Umfang der verfügbaren Contracts nicht.'),
 linked('catalog','Aufgabenkontexte im Patternkatalog','Die Originalbeobachtungen und ihre Grenzen lassen sich über die Kennungen UX-003 und UX-009 im Katalog nachlesen.',[['UX-Patterns: UX-003 / UX-009 suchen','/systems/shadcn/patterns']]),
 text('originalDetails','Ursprüngliche Auswahlfragen und Studie','Die folgenden Erläuterungen und die Studie beruhen auf dem veröffentlichten Stand vom 17.11.2026. Für diese Seite wurden sie sprachlich überarbeitet; die fachlichen Regeln und Grenzen bleiben erhalten.'),
 ...original,
 ] satisfies Page['content'],
}
