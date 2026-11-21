import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const node=(text:string)=>({type:'text',version:1,text,detail:0,format:0,mode:'normal',style:''})
function copy(blockName:string, ...paragraphs:string[]):Block {return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:paragraphs.map(text=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[node(text)]}))}}}}
function links(blockName:string, entries:[string,string][]):Block{return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:entries.map(([text,url])=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[{type:'link',version:1,direction:'ltr',format:'',indent:0,fields:{linkType:'custom',url,newTab:false},children:[node(text)]}]}))}}}}
// Original three CMS blocks frozen before the presentation rework.
const original=[
  {
    "body": {
      "root": {
        "type": "root",
        "format": "",
        "indent": 0,
        "version": 1,
        "children": [
          {
            "type": "paragraph",
            "format": "",
            "indent": 0,
            "version": 1,
            "children": [
              {
                "mode": "normal",
                "text": "Die Combobox verbindet eine Eingabe mit einer filterbaren Optionsliste.",
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
                  "url": "https://ui.shadcn.com/docs/components/base/combobox",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "shadcn/ui · Combobox",
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
  },
  {
    "recommendation": "do",
    "explanation": "Zeige wenige Optionen direkt, wenn sie gut vergleichbar sind. Biete bei einer langen bekannten Liste eine Suche an. Prüfe Tastaturbedienung, keine Treffer und die Anzeige des gewählten Werts.",
    "blockType": "guideline"
  },
  {
    "recommendation": "dont",
    "explanation": "Freitext stillschweigend akzeptieren, wenn nur Einträge aus einer festen Liste gültig sind.",
    "blockType": "guideline"
  }
] as Block[]
export const release={
 expectedUpdatedAt:'2026-11-20T17:16:20.383Z',
 summary:'Wähle eine passende Darstellung für vorgegebene Werte: direkt sichtbar, kompakt oder durchsuchbar.',
 content:[
  copy('selection-intro','Eine Aufgabe, drei Auswahlformen','In diesem Beispiel wird genau ein Standort gewählt. Die drei Vorschauen funktionieren unabhängig voneinander und verwenden dieselben Beispieldaten. Die drei Einträge dienen dem Vergleich; ihre Anzahl ist kein Grenzwert für die Wahl einer Komponente.'),
  copy('selection-visible','Sichtbare Optionsgruppe','Wenn wenige Optionen gut vergleichbar sind und die Alternativen beim Entscheiden sichtbar bleiben sollen.'),
  copy('selection-select','Einfache Auswahlliste','Wenn genau ein Wert aus einer überschaubaren, vertrauten Liste gewählt werden soll und wenig Platz zur Verfügung steht.'),
  copy('selection-search','Durchsuchbare Liste','Wenn jemand in einer langen Liste gezielt nach einem bekannten Namen sucht. Die kurze Vorschau zeigt, wie sich Optionen eingrenzen und auswählen lassen.'),
  copy('selection-demo','Standort','Bern','Basel','Zürich','Optionen durchsuchen','Keine passenden Optionen. Suchtext ändern oder leeren.','Aktuelle Auswahl','Noch keine Auswahl','In Vorschau bestätigen','In Vorschau bestätigt','Noch nicht bestätigt','Bitte wählen','Die lokale Vorschau verwendet HTML-Steuerelemente. Sie ist keine shadcn-Combobox und speichert nichts. Der Suchtext grenzt die Optionen ein; er wird nie als Standort übernommen.','Die Auswahl bleibt erhalten, auch wenn sie nicht zum Suchtext passt. Erst mit der Schaltfläche unter der jeweiligen Liste wird die neue Auswahl in dieser Vorschau bestätigt.'),
  copy('selection-rules','Drei Entscheidungen vor dem Entwurf',
   'Ein Wert oder mehrere? Mit der Radio-Gruppe und der hier gezeigten Auswahlliste lässt sich genau ein Standort wählen. Verwende für mehrere unabhängige Werte eine Checkbox-Gruppe oder eine ausdrücklich für Mehrfachwahl gestaltete Liste. Es muss erkennbar sein, welche Werte ausgewählt sind und wie sie sich entfernen lassen. Ein Switch schaltet eine einzelne Einstellung unmittelbar um.',
   'Welche Werte sind erlaubt? Wenn nur eine bekannte Option zulässig ist, ist der Suchtext noch kein gültiger Wert. Lege für das Produkt fest, ob ein leerer Wert erlaubt oder eine Angabe erforderlich ist. Bestimme ausserdem die stabile Kennung und die sichtbare Bezeichnung jeder Option. Freitext einzugeben oder neue Einträge anzulegen muss jeweils ausdrücklich als eigene Handlung angeboten werden.',
   'Wann wird die Auswahl übernommen? Im Beispiel ändert die Wahl zunächst nur den lokalen Entwurf. Die zusätzliche Schaltfläche bestätigt ihn innerhalb der Vorschau. Lege für das Produkt fest, ob die Wahl sofort wirkt oder erst mit einer Formularaktion gespeichert wird. Beim Schliessen einer Liste muss klar sein, ob die Auswahl bereits übernommen wurde oder noch bestätigt werden muss.'),
  copy('selection-states','Mit diesen Fällen prüfen',
   'Wenn die Suche nichts findet, bleibt die Auswahl erhalten. Biete an, den Suchtext zu ändern oder zu leeren, und zeige den aktuellen Wert separat. Unterscheide in der Rückmeldung, ob die Optionsquelle leer ist, die Optionen noch geladen werden oder das Laden fehlgeschlagen ist.',
   'Ist der bisherige Wert nicht mehr verfügbar? Zeige ihn weiterhin erkennbar an und erkläre die Ursache, soweit sie bekannt ist. Verlange eine neue Wahl, wenn die Aufgabe das erfordert. Setze nicht stillschweigend den ersten Eintrag ein. Prüfe am tatsächlichen Produkt auch die Rückkehr zur Auswahl und den Fall, dass sich Berechtigungen geändert haben.',
   'Prüfe die Bedienung mit der Tastatur: das Feld erreichen, Optionen durchgehen und wählen, gegebenenfalls schliessen oder abbrechen und bestätigen. Eine Option kann den Fokus haben, ohne ausgewählt zu sein. Das Verhalten von Enter und Escape sowie beim Verlassen muss zum gewählten Steuerelement passen. Die Vorschau bildet keine Combobox-Tastatursteuerung ab.'),
  links('selection-next',[
   ['Eine Option direkt vergleichen → Radio Group','/systems/shadcn/components/radio-group'],
   ['Vorgegebene Werte kompakt anbieten → Select','/systems/shadcn/components/select'],
   ['Systemeigene Auswahlliste verwenden → Native Select','/systems/shadcn/components/native-select'],
   ['Optionen durch Eingabe eingrenzen → Combobox','/systems/shadcn/components/combobox'],
   ['Inhalte suchen und Ergebnislisten filtern → Suchen und Filtern','/systems/shadcn/suchen-filtern'],
   ['Auswahl mit weiteren Angaben übermitteln → Formulare und Validierung','/systems/shadcn/formulare-validierung'],
   ['Mehrere unabhängige Werte → Checkbox','/systems/shadcn/components/checkbox'],
   ['Eine Einstellung unmittelbar umschalten → Switch','/systems/shadcn/components/switch'],
   ['Freitext erfassen → Input','/systems/shadcn/components/input'],
  ]),
  copy('selection-evidence','Quellen, Grenzen und bisheriger Stand',
   'Die Suche auf dieser Seite hilft, einen vorgegebenen Feldwert auszuwählen. Die Seite Suchen und Filtern behandelt die Suche in Inhalten und das Filtern von Ergebnislisten. Die drei hier gezeigten Formen dienen als Gestaltungshilfe; feste Mengengrenzen lassen sich daraus nicht ableiten.',
   'WAI APG unterscheidet zwischen zulässigen und vorgeschlagenen Werten und beschreibt das Verhalten bei Auswahl und Autovervollständigung. Die zusätzliche Bestätigung wurde für diese lokale Vorschau gewählt; sie legt keine allgemeine Regel für die Übernahme einer Auswahl fest. Der damalige Seitenstand bezog sich auf Button, Input, Checkbox und Switch. Inzwischen sind auch die Quellencontracts für Radio Group, Select, Native Select und Combobox importiert; die passenden Beschreibungen sind oben verlinkt. Das belegt keine Prüfung deiner Implementierung.',
   'Die vorhandenen Komponentenreferenzen bleiben unverändert. Diese HTML-Vorschau ersetzt weder deren Implementierungen noch eine Prüfung mit assistiver Technik. Die bisherigen drei CMS-Blöcke folgen unverändert als historische Vertiefung; sie beschreiben den damaligen Stand und erweitern den heutigen Prüfungsumfang nicht.'),
  links('selection-sources',[
   ['Patternkatalog · UX-003 Zeitraum oder Konten auswählen und UX-009 Mehrere Einträge auswählen; dortige Beobachtungsgrenzen beachten','/systems/shadcn/patterns'],
   ['WAI APG · Combobox, gelesen am 20.11.2026','https://www.w3.org/WAI/ARIA/apg/patterns/combobox/'],
   ['shadcn/ui · Combobox Referenz','https://ui.shadcn.com/docs/components/base/combobox'],
  ]),
  ...original,
 ],
} satisfies {expectedUpdatedAt:string}&Pick<Page,'summary'|'content'>
