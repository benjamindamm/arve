# Page layouts · Seitenüberarbeitung

## Befund

Öffentliche Seite zuerst mit BrowserOS neo gelesen und als Screenshot angesehen. Der Stand bestand aus einem Nutzensatz und sechs verlinkten Kurzbeschreibungen. Schemen, Auswahlfragen und Regeln für schmale Ansichten fehlten. MCP lieferte `updatedAt: 2026-11-20T08:39:33.967Z` und `content: []`; es gab keine eigenen Originalblöcke zu übernehmen.

## Änderung

Sechs Auswahlkarten zeigen die räumliche Anordnung vor den kurzen Auswahlregeln. Jede führt über einen CMS-Link zur passenden Unterseite. Main+Sidebar, beide Single Cards, gestapelte Abschnitte und beide Grids sind unmittelbar vergleichbar. Das Vier-Spalten-Schema zeigt variable Reihen und Spannen 2/1/1/4. Drei Fragen unterscheiden Hauptinhalt/Ergänzung, Breitenbedarf und Lesereihenfolge/Vergleich. Quellen und responsive Regeln bleiben aufklappbar.

Alle fachlichen Texte, Schemabeschriftungen und Linkziele stehen in `scripts/content/page-reworks/page-layouts.ts`. Der Renderer liest sie aus CMS-Inhalten. Eigenes CSS ordnet die Karten breit in zwei Spalten und schmal untereinander an; Main+Sidebar und Grids werden bis 37.5rem einspaltig. Narrow begrenzt die Beispielkarte auf 12rem, Wide nutzt die verfügbare Breite. Die Maße sind nachvollziehbare Beispiele, keine behaupteten Bibliothekstokens.

Quellengrundlage: unveränderte `docs/handbook/postfinance-analysis/mapping.md` (Layouts und Varianten) und `inventory.md` (insbesondere V01, V06, V15, V18, V20). Die Herkunftsfirma wird im Portalinhalt nicht genannt. Narrow bleibt als redaktionelle Bibliotheksoption ohne eigenen beobachteten Seitenbeleg gekennzeichnet. Seitentyp und räumliche Anordnung werden ausdrücklich getrennt.

## Tatsächliche Prüfungen

- BrowserOS neo: bisherigen öffentlichen Stand gelesen und Screenshot angesehen.
- MCP `get_documentation_page`: Titel, Summary, leeren Inhalt und Änderungszeitpunkt gelesen.
- `npm run typecheck`: erfolgreich nach Umsetzung.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts page-layouts`: reine Vorschau mit `push:false` erfolgreich, 10 Blöcke; kein CMS-Schreibzugriff.

Nach Root-Veröffentlichung: `node --import tsx scripts/check-page-rework.ts page-layouts` erfolgreich; Release/CMS/MCP gleich, öffentliche Seite HTTP 200, neutrale Quelle. BrowserOS neo mit CDP: 1440×1000 und 390×844 als echte Ansichten screenshot-visuell geprüft. Alle sechs Schemen angesehen, sechs CMS-Linkziele im Snapshot geprüft; Main+Sidebar-Link tatsächlich geöffnet und zur Übersicht zurückgekehrt. Beide Details geöffnet und als expanded bestätigt. In den angesehenen Ausschnitten kein abgeschnittener Inhalt; schmale Grids und Main+Sidebar untereinander, Narrow begrenzt/Wide vollbreit. Ein zwischenzeitlicher HMR-Stylesverlust verschwand nach Neuladen; vollständiger neuer Stand danach erneut geprüft. Ansichtsüberschreibung zurückgesetzt. Keine allgemeine Funktions- oder Barrierefreiheitsfreigabe. Root hat Registry und Veröffentlichung übernommen. Keine gemeinsame Route, Registry, globalen Styles oder Schema geändert; kein Commit/Push.

Dateien: `src/docs/page-reworks/page-layouts.tsx`, `src/docs/page-reworks/page-layouts.css`, `scripts/content/page-reworks/page-layouts.ts`, dieser Bericht.
