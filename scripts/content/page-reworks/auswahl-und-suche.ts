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
 expectedUpdatedAt:'2026-11-17T22:33:55.301Z',
 summary:'Wähle eine passende Darstellung für vorgegebene Werte: direkt sichtbar, kompakt oder durchsuchbar.',
 content:[
  copy('selection-intro','Eine Aufgabe, drei Auswahlformen','Beispiel: Genau einen Standort wählen. Die drei Vorschauen sind unabhängig und verwenden dieselben Beispieldaten; drei Einträge dienen hier dem Vergleich, nicht als Grenzwert für die Komponentenwahl.'),
  copy('selection-visible','Sichtbare Optionsgruppe','Wenn wenige Optionen gut vergleichbar sind und die Alternativen beim Entscheiden sichtbar bleiben sollen.'),
  copy('selection-select','Einfache Auswahlliste','Wenn ein Wert aus einer überschaubaren, vertrauten Liste genügt und Platz gespart werden soll.'),
  copy('selection-search','Durchsuchbare Liste','Wenn eine lange Liste gezielt nach einem bekannten Namen durchsucht werden soll. Die kurze Vorschau zeigt nur den Auswahlweg.'),
  copy('selection-demo','Standort','Bern','Basel','Zürich','Optionen durchsuchen','Keine passenden Optionen. Suchtext ändern oder leeren.','Aktuelle Auswahl','Noch keine Auswahl','In Vorschau bestätigen','In Vorschau bestätigt','Noch nicht bestätigt','Bitte wählen','Lokale Vorschau mit HTML-Steuerelementen · keine shadcn-Combobox und keine Speicherung. Suchtext grenzt nur Optionen ein; er wird nie zum Standortwert.','Die Auswahl bleibt auch dann erhalten, wenn sie nicht zum Suchtext passt. Eine neue Auswahl wird erst durch die eigene Bestätigung darunter übernommen.'),
  copy('selection-rules','Drei Entscheidungen vor dem Entwurf',
   'Ein Wert oder mehrere? Radio-Gruppe und die hier gezeigte Auswahlliste liefern genau einen Standort. Für mehrere unabhängige Werte eine Checkbox-Gruppe oder eine ausdrücklich als Mehrfachwahl gestaltete Liste verwenden; ausgewählte Werte und Entfernen müssen erkennbar bleiben. Ein Switch schaltet eine einzelne Einstellung unmittelbar um.',
   'Wertvertrag benennen. Ist nur eine bekannte Option erlaubt, ist Suchtext noch kein gültiger Wert. Leerer Wert, Pflichtangabe, stabile Optionskennung und sichtbare Bezeichnung gehören in den Produktvertrag. Freitext und neue Einträge brauchen eine ausdrücklich angebotene eigene Handlung.',
   'Auswahl und Abschluss trennen. Im Beispiel ändert die Wahl den lokalen Entwurf; die zusätzliche Schaltfläche bestätigt ihn nur in der Vorschau. Im Produkt festlegen, ob die Wahl sofort wirkt oder erst mit einer Formularaktion gespeichert wird. Schliessen einer Liste allein darf keinen unklaren Abschluss erzeugen.'),
  copy('selection-states','Mit diesen Fällen prüfen',
   'Kein Treffer ist keine verlorene Auswahl. Suchtext ändern oder leeren anbieten und den aktuellen Wert separat sichtbar halten. Eine leere Optionsquelle, noch laufendes Laden und ein Ladefehler brauchen unterschiedliche Rückmeldungen.',
   'Bisheriger Wert nicht mehr verfügbar? Den bisherigen Wert erkennbar erhalten, die Ursache soweit bekannt erklären und eine neue Wahl verlangen, falls die Aufgabe das erfordert. Nicht still den ersten Eintrag einsetzen. Rückkehr und veränderte Berechtigungen am tatsächlichen Produkt prüfen.',
   'Mit Tastatur prüfen: Feld erreichen, Optionen durchgehen, wählen, gegebenenfalls schliessen oder abbrechen und bestätigen. Fokus und Auswahl sind getrennte Zustände. Enter, Escape und Verhalten beim Verlassen müssen zum gewählten Widget passen; die Vorschau beansprucht keine Combobox-Tastatursteuerung.'),
  links('selection-next',[
   ['Inhalte suchen und Ergebnislisten filtern → Suchen und Filtern','/systems/shadcn/suchen-filtern'],
   ['Auswahl mit weiteren Angaben übermitteln → Formulare und Validierung','/systems/shadcn/formulare-validierung'],
   ['Mehrere unabhängige Werte → Checkbox','/systems/shadcn/components/checkbox'],
   ['Eine Einstellung unmittelbar umschalten → Switch','/systems/shadcn/components/switch'],
   ['Freitext erfassen → Input','/systems/shadcn/components/input'],
  ]),
  copy('selection-evidence','Quellen, Grenzen und bisheriger Stand',
   'Die Suche hier findet einen vorgegebenen Feldwert. Die Nachbarseite Suchen und Filtern behandelt dagegen Inhalte und Ergebnislisten. Die Entscheidung zwischen den drei Formen ist eine redaktionelle Gestaltungshilfe ohne starre Mengenschwellen.',
   'WAI APG unterscheidet zulässige und vorgeschlagene Werte sowie Auswahl- und Autocomplete-Verhalten. Die konkrete Bestätigung dieser Vorschau ist eine lokale Demonstrationsentscheidung, keine neue Selektionspolicy. Die Bibliothek shadcn enthält hier Button, Input, Checkbox und Switch; ein Select- oder Combobox-Contract wird damit nicht behauptet.',
   'Die vorhandenen Komponentenreferenzen bleiben unverändert. Diese HTML-Vorschau ersetzt weder deren Implementierungen noch eine Prüfung mit assistiver Technik. Die bisherigen drei CMS-Blöcke folgen unverändert als historische Vertiefung.'),
  links('selection-sources',[
   ['Patternkatalog · UX-003 Ansichtskontext wählen und UX-009 Mehrere Einträge auswählen; dortige Beobachtungsgrenzen beachten','/systems/shadcn/patterns'],
   ['WAI APG · Combobox, gelesen am 20.11.2026','https://www.w3.org/WAI/ARIA/apg/patterns/combobox/'],
   ['shadcn/ui · Combobox Referenz','https://ui.shadcn.com/docs/components/base/combobox'],
  ]),
  ...original,
 ],
} satisfies {expectedUpdatedAt:string}&Pick<Page,'summary'|'content'>
