# Technische Anbindung und MCP

Status: READY; durch Root integriert und veröffentlicht, eigene Live-QA erfolgreich. Eigene Arbeit ohne CMS-Schreibzugriffe.

## Ausgangsbefund

Eigener BrowserOS-neo-Tab 175 auf `/systems/shadcn/technische-anbindung`: Überschriften «Vom CMS zum Contract» und «Für Agenten», zwei abstrakte Absätze, kein konkreter Abrufablauf und keine sichtbare Trennung von Seiten-, Contract- und Plattformstand. Browser-read bestätigte den Text; kein Screenshotnachweis für den Ausgangsstand. MCP-Ausgangsstand `2026-11-13T12:43:02.810Z`.

## Änderung

Neutraler Buttonauftrag zuerst. Drei Lesezugriffe als Ablauf: Seitenbaum → veröffentlichte Seite → Komponentencontract und Plattformstand. Konkrete Kriterien zum Revisionsvergleich und zum begrenzten Previewstand des gelesenen Beispiels. Strukturierte Pattern-IDs und Tags erläutert, Volltextsuche korrekt von clientseitigem Tagfilter unterschieden. Originaldateien, Skills im portablen Gesamtpaket, ausführbares lesendes SDK-Beispiel und Quellen aufklappbar. Der vollständige ursprüngliche CMS-Inhaltsblock ist literal eingefroren; keine Abhängigkeit vom veränderlichen Snapshot.

Fachtext ausschließlich im Release/CMS; Renderer liest benannte Blöcke. Breite Darstellung: drei gleich breite Ablaufspalten. Bis 760 px: eine Spalte; Code erhält eigenen horizontalen Scrollbereich, lange Dateinamen umbrechen.

## Tatsächliche Prüfungen

- MCP-Route, Eingabeschemas, Veröffentlichungsleser, Patternprojektion, Contractkatalog, Downloadroute und Importer gezielt gelesen.
- Mit `@modelcontextprotocol/sdk` 1.32.2 gegen `http://127.0.0.1:3010/mcp`: listTools, list_documentation_tree, get_documentation_page für diese Seite und patterns sowie get_component_page für button erfolgreich rein lesend ausgeführt. Genau vier Lesewerkzeuge registriert.
- Patternantwort: 28 IDs mit `candidate` und Tags; UX-001 mit context/filters tatsächlich vorhanden.
- Buttonantwort: Seitencontract `65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26`; Webimplementierung separat an `fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d`, preview, @spartan-ng/brain 1.9.0. Kein Gleichstand behauptet.
- Alle 21 zurückgegebenen Buttonartefakte einzeln geladen: HTTP 200; SHA-256 jeweils identisch mit contractArtifacts. Einschließlich Interface/CEM, DTCG, CSS, SCXML und HTML/ARIA-Dateien. Belegt Integrität/Auslieferung dieses Stands, keine Contract-Konformität.
- Literalvergleich des ursprünglichen Inhalts mit MCP-Capture (nur generierte Block-ID ausgeschlossen) erfolgreich; expectedUpdatedAt identisch, unerwünschte Herkunftsbezeichnungen nicht enthalten.
- `npm run typecheck` erfolgreich (Exit 0).
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts technische-anbindung` erfolgreich: mode preview, acht Blöcke, unchanged false; `push:false`, keine Veröffentlichung.

## Live-QA nach Root-Veröffentlichung

- `node --import tsx scripts/check-page-rework.ts technische-anbindung` erfolgreich: Release/CMS/MCP gleich, öffentliche Seite HTTP 200, neutrale Quelle.
- Eigener BrowserOS-neo-Tab 182; Screenshots mit tatsächlicher CDP-Ansicht 1440×1000 und 390×844 angesehen. Desktop zeigt drei Ablaufkarten nebeneinander; schmale Ansicht zeigt eine Spalte, umbrochene Werkzeugaufrufe, lesbare Regeln und Patterntexte.
- Alle drei Details über gezielten Fokus und Enter tatsächlich geöffnet; Snapshot bestätigte jeweils expanded. Originaldateien, SDK-Code, Quellen und ursprüngliche Überschriften sichtbar. Fokusrahmen im schmalen Screenshot klar sichtbar.
- SDK offen auf 390 px: Code bleibt im eigenen horizontalen Scrollbereich, Seiteninhalt läuft nicht über. `Page.getLayoutMetrics` bestätigt cssContentSize.width = 390 und cssLayoutViewport.clientWidth = 390, alle drei Details geöffnet. Lange Revisionen umbrechen.
- Ansichtsüberschreibung zurückgesetzt und eigener QA-Tab geschlossen. Keine eigene Darstellungsreparatur nötig. Dies belegt die genannten Ansichten und Interaktionen, keine vollständige Barrierefreiheits- oder Produktfreigabe.

Keine gemeinsame Datei, kein Commit/Push geändert.
