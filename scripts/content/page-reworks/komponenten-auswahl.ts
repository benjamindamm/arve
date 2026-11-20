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
// Read-only Payload baseline, push:false, read 20.11.2026. Frozen, no live snapshot import.
const original = [
  {
    "id": "6afce676d24234f397c13055",
    "kind": "selection",
    "title": "Was soll geschehen?",
    "explanation": "Button: löst eine Handlung aus und hält selbst keinen Auswahlwert. Input: erfasst einen kurzen, einzeiligen freien Text. Checkbox: hält einen unabhängigen Ja/Nein-Wert; mehrere unabhängige Optionen dürfen zugleich gelten. Switch: zeigt eine Einstellung als ein oder aus. Der Zeitpunkt der Wirkung muss im Ablauf klar sein. Die vier Beispiele sind Gestaltungsstudien, keine Nachweise zusätzlicher lokaler Fähigkeiten.",
    "source": "Eigene Gestaltungsstudie für Arve; nicht aus den Contract-Tokens gerendert und keine zusätzliche lokale Komponentenfähigkeit.",
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
                "text": "Für eine aus mehreren gegenseitig ausschliessenden Optionen kommen beispielsweise Radio oder Select infrage; für durchsuchbare Listen gegebenenfalls eine Combobox. Diese Alternativen sind Entscheidungshilfen. Sie sind in diesem lokalen Komponentenpaket nicht als geprüfte Implementierungen verfügbar. Der Auswahlablauf bestimmt, ob Optionen sichtbar, verborgen oder durchsuchbar sein sollen; keine feste Anzahl entscheidet das unabhängig vom Inhalt.",
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
                "text": "Eine Checkbox kann eine einzelne unabhängige Bestätigung oder mehrere unabhängige Optionen abbilden. Sie ist nicht auf Mehrfachwahl beschränkt. Ein Switch vermittelt einen Ein-/Aus-Zustand und behält dasselbe Label.",
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
 expectedUpdatedAt: "2026-11-17T23:42:46.646Z",
 summary:'Beginne mit der Nutzeraufgabe: Handlung, freier Text, unabhängige Auswahl oder direkt wirksame Einstellung.',
 content:[
 text('decision','Was soll die Person tun?','Folge der passenden Aufgabe zum benötigten Wert und zur empfohlenen Komponente.','Aufgabe → benötigter Wert → Empfehlung','Schematische Beispiele · keine Speicherung und keine neuen Komponentenfähigkeiten.'),
 route('button','Einen Vorgang auslösen','Kein eigener Auswahlwert','Button','Die Person speichert Änderungen oder startet einen Exportauftrag. Der Button löst die Handlung aus.','Änderungen speichern',''),
 route('input','Einen kurzen Wert selbst formulieren','Einzeiliger freier Text','Input','Die Person kennt den Wert und kann ihn selbst eingeben. Muss sie aus gültigen Vorgaben wählen, führt der Weg zu Auswahl und Suche.','Projektname','Jahresbericht'),
 route('checkbox','Optionen vor dem Abschliessen auswählen','Unabhängige Ja/Nein-Werte','Checkbox','Eine oder mehrere Optionen dürfen gelten. Die Auswahl bleibt von der späteren Handlung getrennt; erst «Exportieren» schliesst diesen Beispielablauf ab.','Tabellen einschliessen','Diagramme einschliessen'),
 route('switch','Eine Einstellung direkt ändern','Ein oder aus','Switch','Die Einstellung soll direkt wirken. Zeige, ob die Änderung übernommen wurde. Das Label bleibt beim Umschalten gleich.','Benachrichtigungen','Ein'),
 linked('boundary','Keiner dieser Wege passt?','Ein Ziel öffnen braucht einen Link. Genau eine feste Option, eine durchsuchbare Liste oder längerer Text braucht einen anderen Eingabeweg. Radio, Select und Combobox sind hier keine zusätzlich verfügbaren Contracts.',[['Auswahl und Suche: feste Werte und Listen','/systems/shadcn/auswahl-und-suche']]),
 text('rules','Drei Fragen vor der Festlegung','Handlung oder Ziel? Speichern startet einen Vorgang; ein Link öffnet eine vorhandene Seite oder Ressource. Entscheide nach Verhalten, auch beim Download.','Freier oder vorgegebener Wert? Input erfasst kurzen freien Text. Eine Suche in gültigen Optionen darf Freitext nicht unbemerkt als gültigen Wert übernehmen.','Auswahl oder direkte Einstellung? Checkboxen erlauben unabhängige Einzel- und Mehrfachwahl. Switches für direkt wirksame Einstellungen sind unsere lokale Gestaltungskonvention; beide brauchen einen klaren Zeitpunkt der Übernahme.'),
 linked('sourceDetails','Quellen und Prüfgrenzen','Die Auswahlwege sind redaktionelle Gestaltungsempfehlungen auf Basis der erhaltenen Fachfragen. shadcn ist die Referenzimplementierung. Die Beispiele sind Portalgestaltung; sie belegen weder vollständige Contracttreue noch dauerhafte Speicherung.',[
 ['Button: Handlung und vorhandene Vorschau','/systems/shadcn/components/button'],['Input: kurze freie Werte','/systems/shadcn/components/input'],['Checkbox: unabhängige Optionen','/systems/shadcn/components/checkbox'],['Switch: Ein-/Aus-Einstellung','/systems/shadcn/components/switch'],['Auswahl und Suche','/systems/shadcn/auswahl-und-suche'],['Formulare und Validierung','/systems/shadcn/formulare-validierung']]),
 text('observations','Beobachtungen aus Aufgabenkontexten','UX-003 · Zeitraum oder Konto wählen: eine Kontextwahl mit gültigen Optionen, kein beliebiger Freitext. Beobachtet wurden Öffnen, Eingrenzen und Auswahl einzelner Varianten; daraus folgt keine allgemeine Such- oder Barrierefreiheitsfreigabe.','UX-009 · Zeilen vor einer gemeinsamen Folgeaktion markieren: unabhängige Auswahl und Handlung sind getrennt. Die untersuchten Varianten zeigen unterschiedliche Auswahlgrenzen bei Filterwechseln; ein gemischter Kopfzustand und ein vollständiger Bulkabschluss sind nicht belegt.','Die Beobachtungen sind Kandidaten im Patternkatalog und keine Komponentenfreigabe. Der vorliegende Auswahlweg erweitert den verfügbaren Contractumfang nicht.'),
 linked('catalog','Aufgabenkontexte im Patternkatalog','Die Originalbeobachtungen und ihre Grenzen lassen sich über die Kennungen UX-003 und UX-009 im Katalog nachlesen.',[['UX-Patterns: UX-003 / UX-009 suchen','/systems/shadcn/patterns']]),
 text('originalDetails','Ursprüngliche Auswahlfragen und Studie','Vollständiger veröffentlichter CMS-Ausgangsinhalt, unverändert eingefroren aus dem Stand 2026-11-17T23:42:46.646Z (read-only gelesen am 20.11.2026).'),
 ...original,
 ] satisfies Page['content'],
}
