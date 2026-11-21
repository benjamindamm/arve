# Farbe · Redaktion

## Gelesener Umfang

PAGE-BRIEF, Gesamtbericht und eigener Auditabschnitt 04; vollständige veröffentlichte Seite über `get_documentation_page` (system `shadcn`, section `farben`), bisherige `colorPageRelease`, deren eingebundene Farbblöcke und der vollständige Spezialrenderer `src/docs/color-page.tsx`. Der veröffentlichte Inhalt und die Zusammenfassung entsprachen vor der Redaktion der bisherigen Release (IDs und null-Felder beim Vergleich normalisiert). Gelesener Stand: `2026-11-20T13:30:55.891Z`.

## Redaktion

- «Kontrast: opake sRGB-Paare.» → «Die Kontrastzahlen gelten für Text und Fläche ohne Transparenz.» Die Bildunterschrift erklärt die Einschränkung und verweist für Einzelheiten auf die Vertiefung.
- «Gewichte gezielt. Eine starke Fläche lenkt zur wichtigen Handlung» → «Eine starke Fläche lenkt den Blick auf die wichtige Handlung.» Die anschliessende Regel nennt Abstand und Kontur direkt als Gestaltungsmittel.
- «Für eine Komponentenprüfung Messung … zusammen festhalten» → «Halte bei einer Komponentenprüfung Messung … zusammen fest.» Die genaue Prüfaussage bleibt in der Vertiefung.
- «Diese Studie bindet die Exportwerte im eigenen Bereich» → «Die Beispiele auf dieser Seite verwenden die Exportwerte in ihrem eigenen Bereich.»
- Verständliche Zusammenfassung, Überschriften, Farbrollen, Beispielmeldungen und weitere bereits klare Regeln bleiben erhalten. Die gesamte Seite einschliesslich Quellen und aufklappbarer Vertiefung wurde gelesen. Die neue Release enthält den vollständigen aktuellen MCP-Inhalt als Literal, ohne Snapshotimport; die historischen Releases bleiben unangetastet.

## Erhaltung und Checks

- `npm run typecheck`: erfolgreich.
- Strukturvergleich gegen frisch abgerufenen MCP-Stand: erfolgreich; neun Blöcke, IDs, blockName, Typen, Block-/Knotenreihenfolge und Textknotenanzahl unverändert.
- Zahlen, Hexwerte, Rollenbezeichner, Quellen und Referenzrevision unverändert geprüft. Kontrast bleibt auf sechs opake sRGB-Paare und Rundung auf zwei Dezimalstellen begrenzt. Offene Rollen, Transparenz, verschachtelte Flächen, Feldgrenzen, zusammengesetzte Browserzustände und Unterschiede zum Portal bleiben ausdrücklich erhalten.
- Eingehende Links mit `farben#` in `src`, `scripts` und `docs` gesucht: keine gefunden. Überschriften bleiben unverändert.
- `git diff --check`: erfolgreich.
- Keine CMS-Schreibzugriffe. Browserprüfung erfolgt nach Veröffentlichung durch Root.

READY

## Browser-QA nach Veröffentlichung

Die veröffentlichte Seite am 20.11.2026 in BrowserOS neo vollständig gelesen: Einstieg, alle drei Farbpaare mit Hell/Dunkel, neue Bildunterschrift, Gestaltungsregeln, Zustandsbeispiele und die geöffnete Vertiefung einschliesslich Quellen, Referenzstand und Paarwerten. Vollseitige Screenshots mit 1440 × 1000 und 390 × 844 CSS-Pixeln aufgenommen und visuell geprüft. Die neue Caption und die redigierten Absätze erscheinen vollständig; die Textumbrüche bleiben auch bei 390 px lesbar. Hell/Dunkel stehen weiterhin nebeneinander, Beispieltexte und Zahlen brechen innerhalb ihrer Flächen um. Kein konkreter sprachlicher Restbefund. Der bereits vorhandene «Zum Inhalt»-Hinweis und das Entwicklungswerkzeug erscheinen als Überlagerungen in den Vollseitenaufnahmen; kein Eingriff in gemeinsame UI-Dateien. Keine erneute Kontrast- oder Funktionsprüfung, da Werte und Mechanik unverändert sind.

DONE
