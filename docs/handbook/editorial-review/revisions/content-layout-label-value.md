# Label–Value: redaktioneller Abgleich

Vollständig gelesen: Auditbericht und eigener Abschnitt 26, aktuelle Release mit Zusammenfassung und allen sieben Blöcken sowie eigener Renderer einschliesslich Beispiellegende und aufklappbarer Quellen und Prüfgrenzen.

Die bestehenden Formulierungen bleiben erhalten. «Beschriftung: benennt die Eigenschaft. Wert: enthält die zugehörige Angabe.» erklärt die Zuordnung unmittelbar. Die drei Anordnungsregeln beschreiben verständlich die beiden linksbündigen Spalten, die schmale Darstellung und den Umbruch langer Inhalte. Es besteht kein konkreter sprachlicher Änderungsbedarf; deshalb gibt es keine künstlichen Vorher/Nachher-Ersetzungen.

Label–Value bleibt als bewusst englischer Layoutname erhalten. Beispielwerte, mehrzeilige Adresse, «Nicht angegeben», Reihenfolge, Zuordnung, Abstände, Zeilen-/Spaltenregeln, 34 rem, Quellen und Prüfgrenzen bleiben unverändert. Auch HTML-Semantik, Blockstruktur, Renderer und CSS bleiben unverändert.

Prüfungen:

- Frischer read-only MCP-Abruf von `get_documentation_page` mit `system: shadcn`, `section: content-layout-label-value`: Inhalt und Zusammenfassung stimmen mit der bisherigen Release überein (normalisiert ohne CMS-IDs und Nullwerte). Aktuelles `updatedAt`: `2026-11-20T14:09:10.568Z`; ausschliesslich dieses Datum als `expectedUpdatedAt` übernommen.
- Referenzsuche in `scripts`, `src` und `docs`: keine eingehenden Fragmentlinks auf die eigene Seite gefunden. Alle Überschriften und Anker bleiben erhalten.

- `npm run typecheck`: bestanden.
- `node scripts/check-page-rework.ts content-layout-label-value`: Release/CMS/MCP gleich, öffentliche Seite HTTP 200, Quellenbezeichnung neutral.
- `git diff --check` für die eigenen Dateien: bestanden.

READY: kein Textänderungsbedarf; nur das Vergleichsdatum wurde aktualisiert. Root hat bestätigt, dass bei unveränderten Texten keine erneute Veröffentlichung nötig ist.

Browser-QA abgeschlossen: Die öffentliche Seite in BrowserOS neo vollständig gelesen, «Quellen und Prüfgrenzen» geöffnet und bei echten 1440 × 1000 sowie 390 × 844 CSS-Pixeln visuell geprüft. Breit stehen Beschriftungen und Werte in zwei Spalten; schmal stehen die Beschriftungen über den Werten. Der lange Projektname bricht lesbar um, die drei Adresszeilen bleiben zusammen. Zusammenfassung, Bildunterschriften, Regeln und offene Quellenabsätze sind vollständig lesbar. Kein konkreter sprachlicher Restbefund. Die Ansichtsbreite wurde zurückgesetzt und der eigene QA-Tab geschlossen.
