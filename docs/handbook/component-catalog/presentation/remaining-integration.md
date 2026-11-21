# Verbleibende visuelle Vergleiche: Integration

Stand: 21.11.2026. Bibliothek shadcn, veröffentlichte Revision `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`.

Drei frische Bereichsagenten ergänzten die übrigen 64 Komponenten:

- Formulare und Rückmeldungen: 22 Komponenten, 118 Ansichten.
- Navigation und Ebenen: 19 Komponenten, 116 Ansichten.
- Daten, Diagramme und Inhalte: 23 Komponenten, 141 Ansichten.

Zusammen mit den bestehenden fünf Komponenten sind alle 69 Seiten mit 138 Gruppen und 412 statischen Vergleichsansichten abgedeckt. Nicht jede Komponente hat eigene Varianten oder Bedienzustände; passive Komponenten erhalten keine erfundenen Abläufe. Unsichtbare Übergangsphasen und laufende Animationen werden nicht als zusätzliche Standbilder behauptet. Redaktionsbeispiele und schematische Anpassungen sind in den Daten/Bereichsberichten bezeichnet.

## Integration

Die drei Bereiche liegen getrennt unter `src/docs/comparisons/`. Reine Datenhelfer liefern die kompakten Beschreibungen und Quellenreferenzen für Portal und MCP. HTML/CSS-Specimens bleiben bei den Renderern; Source-Fixture-HTML wird nicht als zusätzliche MCP-Nutzlast ausgeliefert. Der gemeinsame Dispatcher prüft Bibliothek, Komponenten-ID und exakte Revision, bevor er kuratierte Daten bereitstellt.

Breite Vergleiche erhalten zwei Spalten auf Desktop und eine auf Mobil; komplette Kompositionen können die volle Breite nutzen. Die CSS-Regeln der Bereiche sind lokal begrenzt. Specimens enthalten keine aktiven Bedienziele. Die vorhandenen Angular-Demos bleiben separat.

## Ausgeführte Prüfungen

- Alle 64 neuen Seiten bei 390 px visuell geprüft; Desktop-Stichproben je Bereich siehe Einzelberichte. Unter anderem korrigiert: volle Breite von Field/Textarea, lesbare Sidebar-Inhalte, natürlich angeordneter aufgeklappter Toast-Stapel und korrekte Pending-Darstellung des MessageScroller.
- Zentral zusätzlich Combobox und Chart Bar mobil im Portal sowie Calendar und Toast mobil im finalen statischen Export angesehen. Calendar und Toast: Dokumentbreite/scrollWidth jeweils 390 px.
- Revisions-/Bibliotheks-/Komponentengrenzen und Quellenhashes geprüft; 449 unterschiedliche Paketdateien referenziert.
- Alle 69 echten `get_component_page`-Antworten auf exakte Vergleichsdaten-/Katalogparität geprüft: `verification-mcp.json`.
- Alle 69 statischen HTML-Seiten geprüft: Vergleichsgruppen und Itemtitel vorhanden, jedes Specimen gefüllt, keine doppelten IDs innerhalb der Vergleiche, keine Scripts/Eventattribute und keine aktiven Formularziele ausserhalb von inert-Bereichen: `verification-static.json`.
- CSS aller drei Bereiche mit PostCSS auf lokale Selektoren geprüft; keine globalen Imports, Fontfaces oder Keyframes.
- Typecheck und finaler Produktionsbuild erfolgreich. Bestehende Turbopack-Warnung zum breiten Dateimuster in `library-skills.ts` bleibt unverändert.
- Finaler statischer Build erfolgreich; statische Prüfung: 198 HTML-Dateien, 116 Handbuchseiten, 69 Komponenten, 58'051 interne Links, 2'955 Contractassets, Basis `/arve`, ohne Backend.
- Button-Vorlage weiterhin erfolgreich: neun Abschnitte, 23 Quellen, 21 Aussagen; Hashes der geänderten gemeinsamen Renderer aktualisiert.

CMS-Inhalt, Quellenexporte und Contractpins wurden nicht geändert. Snapshot-SHA256 weiterhin `c5942ad8005856e2726743e5b227d04370a956878476ff23d845830370547bf4`. Kein Commit oder Push in dieser Runde.

## Bereichsberichte

- [Formulare und Rückmeldungen](remaining-forms-feedback.md)
- [Navigation und Ebenen](remaining-navigation-layers.md)
- [Daten, Diagramme und Inhalte](remaining-data-content.md)

## Implementierungshashes

- `src/docs/comparisons/data-content-data.ts`: `a5655b9c9aa4ca41313c25399b517dc94597596c4915e3336854918f1ed90fe1`
- `src/docs/comparisons/data-content.css`: `520d4bb0a834af0d4e1e51c4be83454f72218de75324220256d443da160f9642`
- `src/docs/comparisons/data-content.tsx`: `031bf0f174efa1beb1a8c2c0d7fa9243bfe9d23b3c8f9536a0b12584c14f04ac`
- `src/docs/comparisons/forms-feedback-data.ts`: `260a516ca56e679e6efdd761f7c68e04f5b651701c5a420a80c4e9d84cb71f03`
- `src/docs/comparisons/forms-feedback.css`: `d765383d38f63acda8628cfa8f551cd52dec5e3035277cb013f78fb00bc1d14d`
- `src/docs/comparisons/forms-feedback.tsx`: `284aa31d518cc89c38c6269aa692efea887d4d8ccae17ca5da9a86d5ff536a37`
- `src/docs/comparisons/navigation-layers-data.ts`: `d8901819efac0c4a3fffe360ea8fa1f930d4c6b1799738216747c166002e67e7`
- `src/docs/comparisons/navigation-layers.css`: `817a2e724bdf216aad797e84d5a9336002e65847aa6827d016673cc2dbe223fa`
- `src/docs/comparisons/navigation-layers.tsx`: `b20ddfea00e24aa4c0996d134554892ab4b162f256777e4014cf2dc1f0928048`
