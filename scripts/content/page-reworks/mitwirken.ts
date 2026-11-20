import type {Page} from '../../../src/payload-types'
type Block=NonNullable<Page['content']>[number]
const node=(text:string)=>({type:'text',version:1,text,detail:0,format:0,mode:'normal',style:''})
function copy(blockName:string,heading:string,...paragraphs:string[]):Block {
 return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[{type:'heading',tag:'h2',version:1,direction:'ltr',format:'',indent:0,children:[node(heading)]},...paragraphs.map(text=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[node(text)]}))]}}}
}
// Literal MCP capture of the complete original content, published 2026-11-13T12:43:02.654Z.
// No import from the changing handbook snapshot.
const original:Block[]=[
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
                "text": "Vorschlag",
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
                "text": "Beschreibe die Aufgabe, verlinke betroffene Seiten und ergänze ein konkretes Beispiel. Bestehende Patterns sind der erste Anlaufpunkt.",
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
                "text": "Review",
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
                "text": "Prüfe Gestaltung, Verhalten und Barrierefreiheit anhand des Beispiels. Halte fest, wer die Seite pflegt und welche Änderungen geprüft wurden.",
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
 expectedUpdatedAt:'2026-11-13T12:43:02.654Z',
 title:'Mitwirken',
 summary:'Beschreibe eine konkrete Verbesserung, belege die Regel und halte Prüfung und Veröffentlichung nachvollziehbar fest.',
 content:[
  copy('contribute-example','So kann ein Vorschlag aussehen',
   'Musterbeitrag · noch keine beschlossene Regel',
   'Problem und Kontext','Beim Speichern eines bearbeiteten Projekts ist unklar, ob der erste Klick angekommen ist.',
   'Betroffene Stellen','Formulare und Validierung, Systemzustände und Button; vorhandene Regeln zuerst vergleichen.',
   'Gewünschtes Ergebnis','Während einer laufenden Speicheranfrage soll ein weiterer Klick keine zweite Anfrage auslösen. Verhalten bei Fehler oder unbekanntem Ergebnis bleibt zu klären.',
   'Beleg und Aussageart','Ausgangsansicht und Ablauf beilegen. Eine eigene Beobachtung als Beobachtung kennzeichnen; den gewünschten Schutz vor doppelten Anfragen als Vorschlag formulieren.',
   'Nächste Prüfung','Am konkreten Ablauf Gestaltung, Verhalten und Barrierefreiheit prüfen; Umgebung, Ergebnis und offene Fälle festhalten. Das Muster behauptet keine vorhandene Speicherfunktion.'),
  {blockType:'workflowStudy',blockName:'contribute-flow',title:'Vom Vorschlag zur veröffentlichten Seite',summary:'Eine nachvollziehbare Arbeitsfolge für das Team. Die Schritte beschreiben fachliche Arbeit; sie werden nicht als automatischer Review im CMS erzwungen.',steps:[
   {key:'proposal',title:'Vorschlag beschreiben',description:'Aufgabe, Kontext, betroffene Seiten und ein konkretes Beispiel zusammenstellen. Festhalten, was sich verbessern soll.',next:'Ergebnis: ein verständlicher Beitrag, den andere am Beispiel nachvollziehen können.',tone:'normal'},
   {key:'evidence',title:'Beleg und Regel klären',description:'Quelle mit Fundstelle und Stand nennen; Beobachtung, bestehende Regel und eigenen Vorschlag auseinanderhalten. Offene Entscheidungen ausdrücklich benennen.',next:'Ergebnis: eine begründete Aussage mit erkennbarem Geltungsbereich.',tone:'normal'},
   {key:'review',title:'Am Beispiel prüfen',description:'Gestaltung, Verhalten und Barrierefreiheit prüfen. Betroffene Fassung, Umgebung, ausgeführte Prüfung und offene Punkte notieren; festhalten, wer die Seite pflegt.',next:'Ergebnis: übernehmen, überarbeiten oder nicht übernehmen – jeweils mit Begründung. Offene Punkte zurück in den Vorschlag geben.',tone:'attention'},
   {key:'publish',title:'Im CMS veröffentlichen',description:'Die Seitenänderung im Payload CMS zunächst als Entwurf pflegen. Nach der fachlichen Prüfung gezielt veröffentlichen und die öffentliche Seite mit der veröffentlichten MCP-Fassung vergleichen.',next:'Ergebnis: der veröffentlichte Handbuchstand ist nachvollziehbar. Technische Änderungen und ihre Revisionen zusätzlich auf der Release-Seite erklären.',tone:'success'},
  ],caption:'Payload speichert Seitenversionen und unterstützt Entwurf und Veröffentlichung. «Veröffentlicht» beschreibt die Sichtbarkeit der Seite; es ist kein Nachweis vollständiger Produktprüfung.',source:'Lokale Mechanik: Pages.ts (versions.drafts), component-pages.ts und published-documentation.ts (veröffentlichte Inhalte), app/mcp/route.ts (lesende Werkzeuge).'},
  copy('contribute-criteria','Drei Kriterien vor der Übernahme',
   'Konkreter Anlass: Betroffene Seite und Beispiel sind benannt; die gewünschte Veränderung ist sichtbar oder als Ablauf beschrieben.',
   'Begrenzte Aussage: Quelle und Stand stützen die genannte Regel; eigene Beobachtungen und offene Entscheidungen sind erkennbar.',
   'Nachvollziehbare Prüfung: Geänderte Fassung, Prüfumfang, Ergebnis, offene Punkte und Pflegezuständigkeit sind festgehalten. Eine Demo oder Veröffentlichung allein genügt dafür nicht.'),
  copy('contribute-handoff','Den Beitrag weitergeben',
   'Das Muster lässt sich als Vorlage für eine gemeinsame Besprechung oder einen Seitenentwurf verwenden. Ein verbindlicher Einreichungskanal und eine zuständige Kontaktstelle sind hier noch nicht festgelegt; für den konkreten Beitrag im Team klären und festhalten.'),
  {blockType:'text',blockName:'contribute-links',body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[
   ...[
    ['Releases und Migrationen','/systems/shadcn/release-stand',' – Auswirkungen und getrennte Versionsstände nachvollziehen.'],
    ['Technische Anbindung und MCP','/systems/shadcn/technische-anbindung',' – veröffentlichte Inhalte gezielt lesen.'],
    ['Von der Quelle zum Release','/systems/shadcn/referenz-pflegen',' – Quellenänderungen, Exporte und lokale Übernahme prüfen.'],
   ].map(([label,url,description])=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[{type:'link',version:3,direction:'ltr',format:'',indent:0,fields:{linkType:'custom',url,newTab:false},children:[node(label)]},node(description)]})),
  ]}}},
  copy('contribute-evidence','Quellen, Grenzen und ursprünglicher Inhalt',
   'Die Arbeitsfolge ist eine redaktionelle Anleitung, kein eingerichteter Genehmigungsautomatismus. Das Pages-Schema bietet Drafts und Versionen, aber keinen erzwungenen fachlichen Teamreview.',
   'Handbuchversion, Contractrevision und Paketversion werden getrennt geführt. Ein technischer Contract wird über einen unveränderlichen Exportstand eingebunden; die Veröffentlichung eines Texts erzeugt keine neue Contract- oder Paketversion. Details führen die verlinkten Unterseiten.',
   'Das Handbuch und die MCP-Werkzeuge lesen veröffentlichte Seiten. Die MCP-Route bietet keinen Schreib- oder Publikationsweg. Der Abgleich ist nach einer Änderung am tatsächlichen veröffentlichten Stand auszuführen.',
   'Lokale Quellen: src/collections/Pages.ts; src/docs/component-pages.ts; src/docs/published-documentation.ts; src/app/mcp/route.ts; scripts/import-contract-library.mjs. Mechanik gelesen, kein neuer Export oder fachlicher Freigabenachweis erstellt.',
   'Der folgende ursprüngliche Inhaltsblock wurde am 20. November 2026 über get_documentation_page gelesen und hier wörtlich erhalten. Ausgangsstand: 2026-11-13T12:43:02.654Z.'),
  ...original,
 ] satisfies Block[],
}
