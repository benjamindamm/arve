# Mitwirken · Präsentationsrevision

## Ausgangsbefund

Eigener BrowserOS-neo-Tab 172 am 20. November 2026: «Mitwirken und Releases» bestand aus je einem Absatz zu Vorschlag und Review sowie drei Kinderlinks. Kein konkreter Beitrag, keine sichtbare Publikationsfolge. MCP `get_documentation_page` mit `system: shadcn`, `section: mitwirken` meldete `updatedAt: 2026-11-13T12:43:02.654Z`. Derselbe veröffentlichte Stand wurde per Payload mit `push:false` und `default_transaction_read_only=on` bestätigt (ein Inhaltsblock).

## Änderung

Knapper Einstieg «Mitwirken» mit ausdrücklich hypothetischem Vorschlagsbeispiel. Fünf ausgefüllte Felder führen Aufgabe, betroffene Stellen, gewünschtes Ergebnis, Aussageart und nächste Prüfung. Vier nummerierte Schritte zeigen Vorschlag → Beleg/Regel → Prüfung → CMS-Veröffentlichung. Drei konkrete Kriterien, ein offen benannter fehlender Einreichungskanal und Links zu allen drei Unterseiten ergänzen die Anleitung. Weder Teamrollen noch erzwungener Review, automatische Freigabe oder MCP-Schreiben werden behauptet.

Alle Fachtexte liegen ausschliesslich im CMS-Release. Renderer und CSS strukturieren diese Inhalte: breiter Musterbeitrag mit Label-/Wertzeilen, zwei Spalten für die vier Prozessschritte; unter 700px eine Spalte und Labels über den Werten. Native Details führen Quellen und Grenzen sowie den vollständigen ursprünglichen Inhaltsblock wörtlich. Dieser Block ist im Release eingefroren, ohne Import des veränderlichen Handbuchsnapshots.

## Gelesene Mechanik und Nachweisgrenze

Gezielt gelesen: `src/collections/Pages.ts`, `src/docs/component-pages.ts`, `src/docs/published-documentation.ts`, `src/app/mcp/route.ts`, `scripts/import-contract-library.mjs`, `scripts/export-contract.mjs` (als entfernter Legacy-Export), `scripts/apply-page-rework.ts` sowie der Governance-Plan. Draft/Publish und Seitenversionen sind vorhanden; öffentliche Leser verwenden veröffentlichte Inhalte. Das Schema erzwingt keinen fachlichen Teamreview. Revisionen des Imports bleiben unverändert; keine Exportausführung oder neue fachliche Regelvalidierung.

## Tatsächliche Checks

- Öffentlichen Ausgangsstand im eigenen BrowserOS-neo-Tab gelesen.
- Veröffentlichte Ausgangsdaten über MCP und schreibgeschützte Payload-Lektüre abgeglichen.
- `npm run typecheck` nach eigenem Endstand erfolgreich (Exit 0).
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts mitwirken` erfolgreich: Preview, sieben Blöcke, kein CMS-Schreiben.
- Nach Root-Veröffentlichung: BrowserOS neo mit tatsächlichen CDP-Ansichten 1440×1000 und 390×844. Musterbeitrag, sämtliche vier Schritte und Kriterien visuell gelesen. Desktop zeigt Label-/Wertzeilen und 2×2-Prozesskarten; schmale Ansicht stapelt Labels und Prozesskarten lesbar ohne sichtbaren Textverlust. Keine Darstellungsreparatur erforderlich.
- Alle drei Inhaltslinks anhand ihrer Snapshot-Ziele geprüft und die Zielseiten in eigenen Tabs geladen: Releases und Migrationen, Technische Anbindung und MCP, Von der Quelle zum Release. Jeweils passender Seitentitel, keine Fehlerseite.
- Details per Fokus und Enter geöffnet, sichtbaren Fokusrahmen und expandierten Zustand samt ursprünglichen Überschriften «Vorschlag» und «Review» beobachtet; per Enter wieder geschlossen.
- Diese Prüfung ist eine begrenzte visuelle und Tastaturprüfung der Seite, keine Screenreader-/Gesamtfreigabe. Den abschliessenden veröffentlichten CMS/MCP-Abgleich übernimmt Root.

Nur die vier zugewiesenen Dateien erstellt. Keine CMS-Schreiboperation, keine Registry-/Schemaänderung, kein Commit oder Push.
