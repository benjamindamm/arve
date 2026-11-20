# patterns · Patternkatalog

## Änderung

Die Themen-Linkliste wird zu einem durchsuchbaren Kandidatenkatalog. Das CMS enthält 28 `workflowStudy`-Blöcke mit unveränderten IDs, Task, je drei redaktionell verdichteten Schritten, sichtbarer Kategorie und Tags sowie neutral formulierten Beobachtungsgrenzen. Kategorie-/Tagfilter werden aus diesen CMS-Metadaten abgeleitet; es gibt keine öffentliche zweite Katalogdatei und keine Schemaänderung.

28 kompakte Zeilen statt 28 langer Ablaufkarten; der ausgewählte Eintrag zeigt die Ablaufvorschau und aufklappbare Grenzen. Alle Einträge bleiben Kandidaten. UX-007 und UX-015 werden separat als Registervormerkungen ohne aktuelle Beobachtung und ohne erfundene Vorschau geführt. Die vorhandenen Fachseiten sind als «Ausgearbeitete Themen» direkt verlinkt; ihre redaktionellen Beispiele bleiben vom Beobachtungskatalog getrennt.

Breit stehen Liste und Detail nebeneinander, schmal untereinander. Die Ergebnisliste hat einen begrenzten eigenen Scrollbereich; Filter können kombiniert und gemeinsam zurückgesetzt werden. Alle fachlichen Aussagen kommen aus CMScontent und stehen damit auch MCP zur Verfügung.

## Tatsächlich ausgeführte Checks

- Bestehende öffentliche Seite im eigenen BrowserOS-Tab gelesen: Themenlinks, kein Katalog.
- Aktueller publizierter CMS-Stand read-only mit `push:false` gelesen: `2026-11-18T00:12:33.145Z`.
- Originalkatalog und Register abgeglichen: 28 beobachtete Einträge, 30 Register-IDs; zwei ohne aktuellen Beobachtungsblock.
- `npm run typecheck`: erfolgreich.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts patterns`: erfolgreich, Preview mit 32 Blöcken, keine Veröffentlichung.

Visuelle Prüfung des neuen Renderers folgt erst nach Einbindung und Veröffentlichung durch Root. Keine vollständige Tastatur-, Screenreader- oder responsive Abnahme behauptet. Keine CMS-Schreiboperation, kein Commit, kein Push.

## Browser-QA nach Veröffentlichung · 20.11.2026

Root hat Renderer und Release veröffentlicht. Die folgende Nachprüfung wurde im eigenen BrowserOS-Tab am laufenden Portal ausgeführt:

- **1440 × 1000:** Screenshot angesehen. Suche/Kategorie/Tag in einer Zeile, Kandidatenliste und ausgewähltes Detail nebeneinander, lesbare Metadaten und drei Schritte ohne sichtbare Abschneidung.
- **390 × 844:** Screenshots von Einstieg, Liste und geöffnetem Ablaufdetail angesehen. Filter umbrechend in zwei Zeilen, Liste und Detail untereinander, lange Texte und Beobachtungsgrenzen innerhalb der schmalen Fläche lesbar. Sichtbarer Tastaturfokus am Kandidatenbutton; das ist keine vollständige Tastaturprüfung.
- **Desktop-Interaktion:** Suche `UX-025` ergab einen Kandidaten; die geöffneten Grenzen enthielten die passende Nachprüfung. Kategorie `Finden` ergab 4/28, kombiniert mit Tag `table` 2/28. Auswahl `UX-026` zeigte dessen Vorschau. Nichttreffer zeigte den Korrekturhinweis; Reset stellte 28/28 her.
- **Schmale Interaktion:** `UX-030` und die Kombination `Zustände` + `budget` ergaben jeweils 1/28. Nichttreffer und Reset auf 28/28 erfolgreich. Auswahl `UX-003` und dessen geöffnete Beobachtungsgrenzen im Screenshot geprüft.
- **Sechs Fachlinks:** Die in der Übersicht sichtbaren Zieladressen direkt im Browser geladen; alle lieferten HTTP 200 mit passender Seitenüberschrift: Formulare, Suchen/Filtern, Systemzustände, Auswahl, Tabellen/Listen und destruktive Aktionen.

Keine eigenen Darstellungsfehler gefunden, daher keine Änderung an Renderer oder CMS nötig. Desktop-/Mobilansicht bezeichnen diese zwei konkreten Browserbreiten. Keine vollständige Screenreader-, Zoom-, Geräte- oder allgemeine Accessibilityabnahme. Die Geräteemulation wurde anschliessend aufgehoben. Der MCP-Abgleich wurde von Root durchgeführt und ist kein hier selbst ausgeführter Check.
