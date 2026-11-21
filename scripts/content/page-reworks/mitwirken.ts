import type {Page} from '../../../src/payload-types'
type Block=NonNullable<Page['content']>[number]
const node=(text:string)=>({type:'text',version:1,text,detail:0,format:0,mode:'normal',style:''})
function copy(blockName:string,heading:string,...paragraphs:string[]):Block {
 return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[{type:'heading',tag:'h2',version:1,direction:'ltr',format:'',indent:0,children:[node(heading)]},...paragraphs.map(text=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[node(text)]}))]}}}
}
// Editorial explanation based on the original content published 2026-11-13T12:43:02.654Z.
// No import from the changing handbook snapshot; the historical source remains in Git.
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
                "text": "Beschreibe die Aufgabe, verlinke betroffene Seiten und ergänze ein konkretes Beispiel. Schau zuerst nach, ob ein bestehendes Pattern die Aufgabe bereits löst.",
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
                "text": "Prüfe am Beispiel Gestaltung, Verhalten und Barrierefreiheit. Halte fest, welche Änderungen geprüft wurden und wer die Seite pflegt.",
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
 expectedUpdatedAt:'2026-11-20T15:17:58.532Z',
 title:'Mitwirken',
 summary:'Zeige an einem konkreten Beispiel, was du verbessern möchtest und wie sich der Vorschlag prüfen lässt.',
 content:[
  copy('contribute-example','So kann ein Vorschlag aussehen',
   'Musterbeitrag · noch keine beschlossene Regel',
   'Problem und Kontext','Beim Speichern eines bearbeiteten Projekts ist unklar, ob der erste Klick angekommen ist.',
   'Betroffene Stellen','Formulare und Validierung, Systemzustände und Button. Zuerst die dort beschriebenen Regeln vergleichen.',
   'Gewünschtes Ergebnis','Während einer laufenden Speicheranfrage soll ein weiterer Klick keine zweite Anfrage auslösen. Verhalten bei Fehler oder unbekanntem Ergebnis bleibt zu klären.',
   'Beobachtung und Vorschlag','Ausgangsansicht und Ablauf beilegen. Kennzeichnen, was selbst beobachtet wurde und was sich ändern soll: Der Schutz vor doppelten Anfragen ist hier ein Vorschlag.',
   'Nächste Prüfung','Am konkreten Ablauf Gestaltung, Verhalten und Barrierefreiheit prüfen. Umgebung, Ergebnis und offene Fälle festhalten. Das Beispiel sagt nicht aus, dass bereits eine Speicherfunktion vorhanden ist.'),
  {blockType:'workflowStudy',blockName:'contribute-flow',title:'Vom Vorschlag zur veröffentlichten Seite',summary:'Diese vier Schritte helfen dir, einen Beitrag gemeinsam im Team zu bearbeiten. Das CMS schreibt diese fachliche Prüfung nicht vor.',steps:[
   {key:'proposal',title:'Vorschlag beschreiben',description:'Aufgabe, Kontext, betroffene Seiten und ein konkretes Beispiel zusammenstellen. Festhalten, was sich verbessern soll.',next:'Ergebnis: ein verständlicher Beitrag, den andere am Beispiel nachvollziehen können.',tone:'normal'},
   {key:'evidence',title:'Beleg und Regel klären',description:'Quelle mit Fundstelle und Stand nennen. Unterscheiden, was beobachtet wurde, welche Regel bereits gilt und was neu vorgeschlagen wird. Offene Entscheidungen ausdrücklich benennen.',next:'Ergebnis: Es ist begründet, welche Aussage für welchen Fall gilt.',tone:'normal'},
   {key:'review',title:'Am Beispiel prüfen',description:'Gestaltung, Verhalten und Barrierefreiheit prüfen. Notieren, welche Fassung in welcher Umgebung geprüft wurde, was dabei herauskam und was offenbleibt. Festhalten, wer die Seite pflegt.',next:'Ergebnis: Den Beitrag begründet übernehmen, überarbeiten oder nicht übernehmen. Offene Punkte im Vorschlag ergänzen.',tone:'attention'},
   {key:'publish',title:'Im CMS veröffentlichen',description:'Die Seitenänderung im Payload CMS zunächst als Entwurf pflegen. Nach der fachlichen Prüfung gezielt veröffentlichen und die öffentliche Seite mit der veröffentlichten MCP-Fassung vergleichen.',next:'Ergebnis: der veröffentlichte Handbuchstand ist nachvollziehbar. Technische Änderungen und ihre Revisionen zusätzlich auf der Release-Seite erklären.',tone:'success'},
  ],caption:'Payload speichert Seitenversionen und unterstützt Entwürfe und Veröffentlichungen. Eine veröffentlichte Seite ist öffentlich sichtbar. Daraus folgt nicht, dass das Produkt vollständig geprüft wurde.',source:'Die technische Grundlage dafür zeigen Pages.ts (versions.drafts), component-pages.ts und published-documentation.ts (veröffentlichte Inhalte) sowie app/mcp/route.ts (lesende Werkzeuge).'},
  copy('contribute-criteria','Drei Kriterien vor der Übernahme',
   'Konkreter Anlass: Betroffene Seite und Beispiel sind benannt; die gewünschte Veränderung ist sichtbar oder als Ablauf beschrieben.',
   'Begründete Aussage: Quelle und Stand stützen die genannte Regel. Eigene Beobachtungen und offene Entscheidungen sind erkennbar.',
   'Nachvollziehbare Prüfung: Geänderte Fassung, Prüfumfang, Ergebnis und offene Punkte sind festgehalten. Es ist geklärt, wer die Seite pflegt. Eine Demo oder Veröffentlichung allein genügt dafür nicht.'),
  copy('contribute-handoff','Den Beitrag weitergeben',
   'Nutze das Muster als Vorlage für eine gemeinsame Besprechung oder einen Seitenentwurf. Ein verbindlicher Einreichungskanal und eine zuständige Kontaktstelle sind hier noch nicht festgelegt. Kläre deshalb im Team, wohin der konkrete Beitrag geht, und halte das fest.'),
  {blockType:'text',blockName:'contribute-links',body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[
   ...[
    ['Releases und Migrationen','/systems/shadcn/release-stand',' – Auswirkungen und getrennte Versionsstände nachvollziehen.'],
    ['Technische Anbindung und MCP','/systems/shadcn/technische-anbindung',' – veröffentlichte Inhalte gezielt lesen.'],
    ['Von der Quelle zum Release','/systems/shadcn/referenz-pflegen',' – Quellenänderungen, Exporte und lokale Übernahme prüfen.'],
   ].map(([label,url,description])=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[{type:'link',version:3,direction:'ltr',format:'',indent:0,fields:{linkType:'custom',url,newTab:false},children:[node(label)]},node(description)]})),
  ]}}},
  copy('contribute-evidence','Quellen, Grenzen und weitere Hinweise',
   'Die vier Schritte sind eine redaktionelle Anleitung. Das Pages-Schema bietet Drafts und Versionen, erzwingt aber keine fachliche Prüfung im Team und richtet keinen Genehmigungsablauf ein.',
   'Handbuchversion, Contractrevision und Paketversion werden getrennt geführt. Ein technischer Contract wird über einen unveränderlichen Exportstand eingebunden; die Veröffentlichung eines Texts erzeugt keine neue Contract- oder Paketversion. Details führen die verlinkten Unterseiten.',
   'Das Handbuch und die MCP-Werkzeuge lesen veröffentlichte Seiten. Über die MCP-Route lassen sich keine Inhalte schreiben oder veröffentlichen. Vergleiche nach einer Änderung die öffentliche Seite mit dem tatsächlich veröffentlichten MCP-Stand.',
   'Die Angaben zur technischen Umsetzung beruhen auf der Lektüre dieser lokalen Quellen: src/collections/Pages.ts; src/docs/component-pages.ts; src/docs/published-documentation.ts; src/app/mcp/route.ts; scripts/import-contract-library.mjs. Dabei wurde kein neuer Export erstellt und keine fachliche Freigabe nachgewiesen.',
   'Die folgenden Hinweise zu Vorschlag und Review erläutern den Ausgangstext in redigierter Form. Er wurde am 20. November 2026 über get_documentation_page gelesen; sein Ausgangsstand ist 2026-11-13T12:43:02.654Z. Der historische Wortlaut bleibt in Git erhalten.'),
  ...original,
 ] satisfies Block[],
}
