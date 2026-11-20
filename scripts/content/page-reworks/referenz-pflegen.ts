import type {Page} from '../../../src/payload-types'
type Block=NonNullable<Page['content']>[number]
const node=(text:string)=>({type:'text',version:1,text,detail:0,format:0,mode:'normal',style:''})
function copy(blockName:string,heading:string,...paragraphs:string[]):Block {
 return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[{type:'heading',tag:'h2',version:1,direction:'ltr',format:'',indent:0,children:[node(heading)]},...paragraphs.map(text=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[node(text)]}))]}}}
}
// Literal MCP capture on 20 November 2026. Do not replace with a snapshot import.
const original:Block[]=[
  {
    "id": "6afcd6535da78509121abf13",
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
                "text": "Über die shadcn-Registry lassen sich Komponenten und weitere Projektdateien verteilen.",
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
                  "url": "https://ui.shadcn.com/docs/registry",
                  "newTab": false,
                  "linkType": "custom"
                },
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "shadcn/ui · Registry",
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
    "blockName": null,
    "blockType": "text"
  },
  {
    "id": "6afcd6535da78509121abf14",
    "recommendation": "do",
    "image": null,
    "explanation": "Bei einer Änderung zuerst die Upstream-Quelle und betroffene Arve-Seiten festhalten. Prüfe die lokale Implementierung getrennt. Aktualisiere bei geänderten technischen Vorgaben die Contractrevision und nenne im Release-Eintrag betroffene Seiten, Migration und Prüfumfang.",
    "blockName": null,
    "blockType": "guideline"
  },
  {
    "id": "6afcd6535da78509121abf15",
    "recommendation": "dont",
    "image": null,
    "explanation": "Eine neue Upstream-Version als Freigabe für die lokale Implementierung übernehmen.",
    "blockName": null,
    "blockType": "guideline"
  }
]

export const release={
 expectedUpdatedAt:'2026-11-17T22:33:55.533Z',
 title:'Von der Quelle zum Release',
 summary:'Eine Quellenänderung als portables Contractpaket übernehmen und die betroffene Handbuchseite bewusst auf den geprüften Stand stellen.',
 content:[
  {blockType:'workflowStudy',blockName:'maintenance-example',title:'Beispiel: Eine Button-Änderung übernehmen',summary:'Angenommener Anlass: Die shadcn-Quelle beschreibt einen geänderten Button-Zustand. Das Team entscheidet zuerst, ob diese Vorgabe für die eigene Referenz gelten soll.',steps:[
   {key:'observe',title:'1 · Änderung einordnen',description:'Upstream-Link, beobachteten Stand und betroffene Button-Zustände festhalten. Vorher und Nachher am Beispiel zeigen und Auswirkungen auf Handbuch und lokale Umsetzung getrennt beschreiben.',next:'Übergabe: belegte Beobachtung und Entscheidung, welche Vorgabe übernommen werden soll.',tone:'normal'},
   {key:'export',title:'2 · Contractpaket bereitstellen',description:'Die betroffene shadcn-Vorgabe in UI Contracts bearbeiten und dort prüfen. Ein neues eigenständiges Exportverzeichnis bereitstellen: Manifest, Bibliothek, Designartefakte, Herkunftsregister, Abhängigkeiten und portable Leseskills gehören zusammen.',next:'Übergabe: vollständiger Exportordner mit neuer Revision und benannten offenen Nachweisen.',tone:'normal'},
   {key:'import',title:'3 · In Arve importieren',description:'Den gesamten Exportordner nach Arve kopieren und mit dem Importwerkzeug übernehmen. Es prüft Dateihashes, Paketrevision und gebundene Quellen. Die neue Revision danach im Contractkatalog registrieren.',next:'Ergebnis: ein zusätzlicher verfügbarer Stand. Vorhandene Revisionen und Seitenbezüge bleiben erhalten.',tone:'normal'},
   {key:'pin',title:'4 · Seitenbezug bewusst wählen',description:'Auf der betroffenen Komponentenseite Bibliothek shadcn, Komponente button und die ausgewählte neue Exportrevision im CMS eintragen. Erklärung und Beispiel mit genau diesem Stand abgleichen.',next:'Entscheidung: auf den neuen Stand wechseln oder den bisherigen Seitenbezug beibehalten. Import allein stellt keine Seite um.',tone:'attention'},
   {key:'publish',title:'5 · Prüfen und veröffentlichen',description:'Contractquellen, Seiteninhalt und lokale Umsetzung im benannten Umfang prüfen. Auswirkungen und offene Fälle festhalten, die Seite nach Review veröffentlichen und anschliessend Portal und MCP vergleichen.',next:'Nachweis: welche Seite, welche Revision und welche Umsetzung tatsächlich geprüft wurden. Bestehende Implementierungsnachweise behalten ihren eigenen Contractbezug.',tone:'normal'},
  ],caption:'Der Ablauf zeigt eine mögliche Übernahme. Dieses Beispiel exportiert oder importiert keine Daten und ändert keinen Seitenbezug.',source:'Gelesene Grundlage: Arve README, Importwerkzeug, Contractkatalog und vorhandenes portables shadcn-Paket.'},
  copy('maintenance-handoff','Vor der Übergabe klären',
   'Quelle und Entscheidung: Sind Ausgangsstand, betroffene Zustände sowie Vorher und Nachher nachvollziehbar? Ist klar, welche Vorgabe das Team übernehmen möchte?',
   'Paket und Seitenbezug: Liegt der vollständige Export inklusive Skills vor? Ist die neue Revision im Katalog registriert und auf jeder betroffenen Seite bewusst gewählt?',
   'Prüfung und Veröffentlichung: Sind Umfang, Umgebung, Ergebnis und offene Fälle benannt? Stimmen die veröffentlichte Seite und ihre MCP-Ausgabe überein? Eine Prüfsumme bestätigt Dateiintegrität; sie bestätigt keine fachliche oder barrierefreie Umsetzung.'),
  {blockType:'text',blockName:'maintenance-links',body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[
   ...[
    ['Mitwirken','/systems/shadcn/mitwirken',' – Beitrag und Review im Team vorbereiten.'],
    ['Releases und Migrationen','/systems/shadcn/release-stand',' – Seitenfassung, Contractrevision und Paketversion unterscheiden.'],
    ['Technische Anbindung und MCP','/systems/shadcn/technische-anbindung',' – veröffentlichte Quellen und Prüfbezüge lesen.'],
   ].map(([label,url,description])=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[{type:'link',version:3,direction:'ltr',format:'',indent:0,fields:{linkType:'custom',url,newTab:false},children:[node(label)]},node(description)]})),
  ]}}},
  copy('maintenance-technical','Technischer Pflegeweg und Prüfgrenzen',
   'Die folgenden Befehle erläutern den Import im Arve-Projektverzeichnis. Sie wurden für diese Seitenüberarbeitung nicht ausgeführt. Die Erzeugung des Exportordners erfolgt separat in der Autorenumgebung von UI Contracts; das Paket enthält weder Autorenwerkzeuge noch eine ausführbare Plattformprüfung.',
   'node scripts/import-contract-library.mjs /pfad/zum/shadcn-export',
   'Danach die neue contracts.json in src/contracts/catalog.ts registrieren. Importziel: src/contracts/libraries/<bibliothek>/<revision>/. Das vollständige Paket bleibt unter package/ erhalten; contracts.json ist die lokale Projektion für Portal und MCP.',
   'Arve benötigt zum Lesen und Importieren nur das vollständige Paket. Kein benachbartes Quellrepository und keine Umgebungsvariable mit Repositorypfad sind erforderlich. skills/ui-contracts/SKILL.md und seine Referenzen bleiben im Paket; dependencies.json nennt die tatsächlichen Fähigkeiten und externen Voraussetzungen. Historische provenance-Kennungen sind keine auflösbaren lokalen Dateilinks.',
   'Im CMS den Contractbezug der Komponentenseite ausdrücklich wählen und veröffentlichen. Der Katalog sucht nach Bibliothek, Komponente und exakter Revision; er stellt bestehende veröffentlichte Seiten nicht automatisch auf einen neueren Import um.',
   'Als read-only-Nachweis am 20. November 2026 das vorhandene Paket geprüft: format ui-contracts-export/v1, library shadcn, revision 65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26. Alle 73 manifestierten Dateien, darunter zwei Skilldateien, stimmten mit ihren SHA-256-Werten überein; die aus sortierten Pfad/Hash-Paaren berechnete Paketrevision stimmte ebenfalls überein.',
   'Gezielt gelesen: README.md, scripts/import-contract-library.mjs, src/contracts/catalog.ts, Projekt-Leseskill sowie README.md, manifest.json, dependencies.json und Leseskill des genannten Pakets. Die Prüfung führte weder Export noch Import, CMS-Änderung, Seitenpinwechsel oder Plattformabnahme aus.'),
  copy('maintenance-original','Ursprünglicher Inhalt',
   'Die drei folgenden Blöcke wurden am 20. November 2026 über get_documentation_page wörtlich erfasst. Veröffentlichter Ausgangsstand: 2026-11-17T22:33:55.533Z. Der ursprüngliche externe Registry-Link bleibt als Quellenverweis erhalten; daraus folgt keine lokale Paketfreigabe.'),
  ...original,
 ] satisfies Block[],
}
