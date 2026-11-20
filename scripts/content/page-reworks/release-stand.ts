import type {Page} from '../../../src/payload-types'
type Block=NonNullable<Page['content']>[number]
const node=(text:string)=>({type:'text',version:1,text,detail:0,format:0,mode:'normal',style:''})
function copy(blockName:string,heading:string,...paragraphs:string[]):Block {
 return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[{type:'heading',tag:'h2',version:1,direction:'ltr',format:'',indent:0,children:[node(heading)]},...paragraphs.map(text=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[node(text)]}))]}}}
}
// Literal get_documentation_page capture, read 20 November 2026. No live snapshot import.
const original:Block[]=[
  {
    "id": "6af7027130c8d1d0ba8dc08c",
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
                "text": "Änderung dokumentieren",
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
                "text": "Halte Datum, betroffene Komponenten und Auswirkungen fest. Bei einer inkompatiblen Änderung gehört ein vorher-nachher-Beispiel dazu.",
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
                "text": "Versionen nachvollziehen",
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
                "text": "Payload verwaltet die Seitenhistorie. Eine technische Änderung bekommt eine neue Contract-Revision. Die Doku-Seite kann nach Review auf diese Revision wechseln.",
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
    "blockName": null,
    "blockType": "text"
  }
]
export const release={
 expectedUpdatedAt:"2026-11-13T12:43:02.842Z",
 title:'Releases und Migrationen',
 summary:'Seitenfassung, Contractrevision und Komponentenpaket getrennt prüfen: Eine neue Beschreibung belegt keine neue Implementierung.',
 content:[
  {blockType:'workflowStudy',blockName:'release-example',title:'Beispiel: Der Button erhält eine neue Beschreibung',summary:'Angenommene Änderung: «Hier klicken» wird in der Anleitung durch «Änderungen speichern» ersetzt. Die technische Schnittstelle und das Komponentenpaket bleiben dabei gleich.',steps:[
   {key:'page',title:'1 · Handbuchseite ändern',description:'Den verständlicheren Text im Payload CMS als Entwurf bearbeiten und nach Prüfung veröffentlichen. Die Seitenhistorie dokumentiert diese redaktionelle Fassung.',next:'Neue Seitenfassung. Daraus folgt keine neue Contractrevision.',tone:'normal'},
   {key:'contract',title:'2 · Contract nur bei geänderter Vorgabe',description:'Ändert sich zusätzlich die technische Vorgabe, etwa die erlaubte Schnittstelle oder das Verhalten, den betroffenen Contract prüfen und als neue Exportrevision übernehmen.',next:'Ein Textwechsel allein benötigt keinen neuen Export. Bei einer inkompatiblen Vorgabe zusätzlich Vorher, Nachher und nötige Anpassung zeigen.',tone:'normal'},
   {key:'implementation',title:'3 · Umsetzung gesondert nachweisen',description:'Eine geänderte Implementierung mit Paketversion, Plattform und tatsächlichem Prüfumfang erfassen. Den Nachweis ausdrücklich auf die dabei geprüfte Contractrevision beziehen.',next:'Eine neue Seite oder ein neuer Contract ist noch kein Nachweis, dass ein Paket die Änderung umsetzt.',tone:'attention'},
  ],caption:'Dieses Beispiel erklärt eine Änderungsfolge. Es führt keine Paketänderung, Migration oder automatische Veröffentlichung aus.',source:'Lokale Mechanik: Pages.ts, Implementations.ts, component-pages.ts und import-contract-library.mjs.'},
  copy('release-stands','Drei Stände getrennt lesen',
   'Handbuchseite · Was wird erklärt?','Payload führt Entwürfe und Seitenversionen. Die öffentliche Seite und MCP lesen den veröffentlichten Inhalt; updatedAt benennt dessen Änderungszeitpunkt. Eine Veröffentlichung bestätigt die Sichtbarkeit, nicht die technische Übereinstimmung.',
   'Contractexport · Welche Vorgabe gilt?','Die Komponentenseite verweist mit Bibliothek, Komponenten-ID und Exportrevision auf einen festen Contractstand. Die Revision ist ein SHA-256-Hash des Exports, keine Paketversion. Ein neuer Export wird unter einer neuen Revision abgelegt; bestehende Revisionen werden nicht überschrieben.',
   'Komponentenpaket · Was ist umgesetzt und geprüft?','Der Implementierungseintrag nennt unter anderem Paketversion, Plattform, Status, eigenen Contractbezug und Prüfgrenzen. Nur dieser konkrete Umfang ist belegt. Eine neuere Contractreferenz der Handbuchseite aktualisiert den älteren Implementierungsnachweis nicht.'),
  copy('release-current','Reales Beispiel: Zwei verschiedene Button-Bezüge',
   'Erfasster Stand am 20. November 2026, keine automatische Live-Statusanzeige.',
   'Komponentenseite Button: shadcn / button, Contractexport 65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26.',
   'Implementierung Spartan Button: Web-Preview, Paket @spartan-ng/brain 1.9.0. Der Nachweis verweist bewusst weiterhin auf den historischen Contract fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d.',
   'Geprüft sind Klick und Deaktivierung im lokalen Browser. Mobile Bedienung, assistive Technologien und Contract-Konformität bleiben offen. Der ältere Bezug wird bewahrt; ein Nachweis für den neueren Contract müsste eigens erbracht werden.'),
  copy('release-checks','Bei jeder Änderung prüfen',
   'Umfang festhalten: Datum, betroffene Seiten oder Komponenten und Auswirkungen benennen. Bei inkompatiblen Änderungen Vorher, Nachher und die nötige Anpassung am Beispiel erklären.',
   'Bezüge vergleichen: Ändert sich nur die Erklärung, auch der Contract oder zusätzlich das Paket? Seitenfassung, Exportrevision und Paketversion einzeln festhalten; historische Nachweise nicht auf einen ungeprüften neuen Stand umbiegen.',
   'Ergebnis belegen: Geänderte Fassung, Umgebung, ausgeführte Prüfung und offene Fälle nennen. Nach Veröffentlichung die öffentliche Seite und die veröffentlichte MCP-Fassung vergleichen.'),
  {blockType:'text',blockName:'release-links',body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[
   ...[
    ['Mitwirken','/systems/shadcn/mitwirken',' – einen Teambeitrag mit Beispiel und Belegen vorbereiten.'],
    ['Technische Anbindung und MCP','/systems/shadcn/technische-anbindung',' – veröffentlichte Inhalte und technische Referenzen lesen.'],
    ['Von der Quelle zum Release','/systems/shadcn/referenz-pflegen',' – Quellenänderung, Export, Import und Übernahme nachvollziehen.'],
    ['Button','/systems/shadcn/components/button',' – aktuellen Seitenbezug und Implementierungsstand direkt vergleichen.'],
   ].map(([label,url,description])=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[{type:'link',version:3,direction:'ltr',format:'',indent:0,fields:{linkType:'custom',url,newTab:false},children:[node(label)]},node(description)]})),
  ]}}},
  copy('release-evidence','Quellen, Prüfgrenzen und ursprünglicher Inhalt',
   'Mechanik gezielt gelesen: src/collections/Pages.ts (versions.drafts), src/collections/Implementations.ts (Paket, Contractbezug und Prüfstand), src/docs/component-pages.ts und src/docs/published-documentation.ts (veröffentlichte Inhalte), src/app/mcp/route.ts (lesende Werkzeuge), scripts/import-contract-library.mjs (Prüfsummen, feste Revisionen und Schutz vor Überschreiben).',
   'Reales Button-Beispiel am 20. November 2026 über get_component_page gelesen; Seitenstand updatedAt 2026-11-20T15:06:42.364Z. Contract- und Implementierungsbezüge waren verschieden. Diese Dokumentation ändert keinen der beiden Bezüge.',
   'Die Schritte sind eine redaktionelle Anleitung. Aus dem gelesenen Schema folgt keine Changelogfunktion, Releaseautomatik oder erzwungene fachliche Teamfreigabe. Diese Änderung erstellt keinen neuen Implementierungsnachweis.',
   'Der folgende ursprüngliche Inhaltsblock wurde über get_documentation_page gelesen und hier wörtlich eingefroren. Ausgangsstand: 2026-11-13T12:43:02.842Z.'),
  ...original,
 ] satisfies Block[],
}
