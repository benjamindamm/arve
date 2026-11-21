import type {Page} from '../../../src/payload-types'
type Block=NonNullable<Page['content']>[number]
const node=(text:string)=>({type:'text',version:1,text,detail:0,format:0,mode:'normal',style:''})
function copy(blockName:string,heading:string,...paragraphs:string[]):Block {
 return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[{type:'heading',tag:'h2',version:1,direction:'ltr',format:'',indent:0,children:[node(heading)]},...paragraphs.map(text=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[node(text)]}))]}}}
}
// Literal published MCP capture, 20 November 2026. No mutable snapshot import.
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
                "text": "Vom CMS zum Contract",
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
                "text": "Eine veröffentlichte Seite bindet eine Export-Revision. Das Portal liest die hinterlegten Originaldateien, etwa SCXML für Verhalten oder CEM für Schnittstellen.",
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
                "text": "Für Agenten",
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
                "text": "Der lokale MCP-Endpunkt /mcp stellt get_component_page bereit. Für system shadcn und component button liefert er die veröffentlichte Seite, ihren Contract und die Demo-Konfiguration.",
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
 expectedUpdatedAt:"2026-11-20T15:22:23.849Z",
 title:'Technische Anbindung und MCP',
 summary:'Vom veröffentlichten Seitenbaum zur passenden Seite, zu Originaldateien und zum belegten Plattformstand.',
 content:[
  copy("technical-example",
   "Beispiel: einen Button für eine Weboberfläche einordnen",
   "Frage an den Agenten: «Lies die veröffentlichte Buttonseite. Zeige Contractrevision, Originaldateien und Webstand; benenne offene Prüfungen.»",
   "Das Ergebnis verbindet Gestaltung und Umsetzung: Seiteninhalt und Demo helfen bei der Auswahl; Contract und Plattformstand begrenzen, was technisch belegt ist."),
  copy("technical-flow",
   "Drei Lesezugriffe führen zum belegten Stand",
   "Seitenbaum finden",
   "list_documentation_tree({system: \"shadcn\"})",
   "Die Einträge liefern slug, kind, path, pageUrl und children. Für die Aufgabe passende Seite auswählen.",
   "Veröffentlichte Seite lesen",
   "get_documentation_page({system: \"shadcn\", section: \"technische-anbindung\"})",
   "content, summary, updatedAt und templateSections lesen. Komponenten werden über get_component_page abgerufen.",
   "Contract und Plattform vergleichen",
   "get_component_page({system: \"shadcn\", component: \"button\"})",
   "contractReference fixiert die Revision; contract.sources benennt die Domänendateien. contractArtifacts enthält Pfad, SHA-256 und Download-URL. implementations führt Paket, Plattform, Release- und Prüfstand separat."),
  copy("technical-rules",
   "Vor einer Umsetzung entscheiden",
   "Gleiche Quelle: Portal und MCP beziehen den veröffentlichten CMS-Seiteninhalt. Ein neuer Entwurf ist darin noch nicht enthalten. Den Abrufzeitpunkt und updatedAt festhalten.",
   "Gleicher Stand? Die Contractreferenz der Seite mit implementations[].contract vergleichen. Im gelesenen Buttonstand verweist die Seite auf 65133e67843c…; die Webimplementierung auf fe29eb804f0b…. Das ist kein Nachweis eines gemeinsamen Revisionsstands.",
   "Aktuelles Beispiel aus dem Abruf vom 20. November 2026, keine allgemeine Plattformvorgabe: Der gelesene Webstand ist preview, Paket @spartan-ng/brain 1.9.0. Die Implementierung nennt lokale Klick- und Deaktivierungsprüfung; mobile Bedienung, assistive Technologien und Contract-Konformität bleiben offen. Eine Demo ersetzt diese Prüfungen nicht."),
  copy("technical-patterns",
   "Patterns gezielt suchen",
   "search_documentation({system: \"shadcn\", query: \"Filtern\", limit: 5}) durchsucht Titel und Text veröffentlichter Seiten. Das Werkzeug hat keinen eigenen Tag-Filter.",
   "get_documentation_page({system: \"shadcn\", section: \"patterns\"}) ergänzt patterns mit id, title, task, status, category, tags, steps und observations. Beispiel aus dem gelesenen Stand: UX-001 mit Tags context und filters. Die Einträge sind als candidate ausgewiesen; eine ID ist kein Freigabenachweis.",
   "Ein Agent kann die zurückgegebenen Tags in seinem Client filtern und danach die passende Fachseite lesen. Fehlende Tags bleiben leer; aus einem Tag wird keine Regel abgeleitet."),
  copy("technical-files",
   "Originaldateien vollständig weitergeben",
   "Für den ausgewählten Komponentenstand alle Einträge in contractArtifacts verwenden, statt nur Codeausschnitte zu kopieren. Der gelesene Button liefert 21 Dateien einschließlich interface.json (CEM), tokens.json (DTCG), layout.css, behavior.scxml, accessibility.html und accessibility.rules.json sowie Kontext- und Prüfdateien. Jede URL lädt die vollständige Originaldatei; der SHA-256 bezeichnet deren Inhalt.",
   "Der portable UI-Contracts-Export ist ein separates Paket mit Manifest, Abhängigkeiten, Bibliotheksdateien und skills/ui-contracts/SKILL.md. Der Import erhält das vollständige Paket einschließlich Skills unverändert unter seiner Revision. Die Komponenten-Downloadliste ist kein Download des gesamten portablen Pakets.",
   "Skills beschreiben Arbeitsweisen für einen Agenten. Das Bündeln installiert oder startet keinen Agenten und führt keine Änderung selbstständig aus. MCP liest Dokumentation; Export, Import, Umsetzung und Veröffentlichung sind eigene Arbeitsschritte."),
  copy("technical-sdk",
   "Lesendes SDK-Beispiel",
   "Voraussetzung: laufendes lokales Portal auf Port 3010 und @modelcontextprotocol/sdk 1.32.2. JavaScript mit ES-Modulen; alle drei Aufrufe lesen nur.",
   "import { Client } from '@modelcontextprotocol/sdk/client/index.js';\nimport { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';\nconst client = new Client({ name: 'handbook-reader', version: '1' });\nawait client.connect(new StreamableHTTPClientTransport(\n  new URL('http://127.0.0.1:3010/mcp')\n));\ntry {\n  const read = async (name, args) => {\n    const result = await client.callTool({ name, arguments: args });\n    if (result.isError) throw new Error(JSON.stringify(result.content));\n    return result.structuredContent;\n  };\n  const tree = await read('list_documentation_tree', { system: 'shadcn' });\n  const page = await read('get_documentation_page', {\n    system: 'shadcn', section: 'technische-anbindung'\n  });\n  const button = await read('get_component_page', {\n    system: 'shadcn', component: 'button'\n  });\n  console.log(tree.tree, page.updatedAt);\n  console.log(button.contractReference, button.contract?.sources);\n  console.log(button.contractArtifacts, button.implementations);\n} finally {\n  await client.close();\n}"),
  copy("technical-evidence",
   "Quellen, Prüfumfang und ursprünglicher Inhalt",
   "Gelesene Buttonrevision der Seite: 65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26. Contractrevision der Webimplementierung: fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d. Am 20. November 2026 über das MCP-SDK tatsächlich ausgeführt: listTools sowie Seitenbaum, diese Seite, Patternkatalog und Buttonseite gelesen. Die 21 zurückgegebenen Buttonartefakte einzeln geladen: jeweils HTTP 200 und SHA-256 identisch mit contractArtifacts. Das prüft Auslieferung und Integrität dieses Stands, keine allgemeine Konformität.",
   "Gelesene lokale Quellen: src/app/mcp/route.ts (vier lesende Werkzeuge und Eingabeschemas), src/docs/published-documentation.ts und component-pages.ts (veröffentlichte Inhalte), src/docs/pattern-catalog.ts (ID-/Tag-Projektion), Komponenten-files/route.ts (Originaldateien und Hashprüfung), scripts/import-contract-library.mjs (vollständiges portables Paket einschließlich Skills). Keine Schreib- oder Publikationsfunktion ist in der MCP-Route registriert.",
   "Der folgende ursprüngliche Inhaltsblock bleibt wörtlich erhalten. Ausgangsstand der veröffentlichten Seite: 2026-11-13T12:43:02.810Z; gelesen am 20. November 2026."),
  ...original,
 ] satisfies Block[],
}
