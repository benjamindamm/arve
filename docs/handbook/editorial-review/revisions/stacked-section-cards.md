# Redaktion: Stacked Section Cards

Gelesen: Redaktionsbrief, Gesamtbericht, eigener Auditabschnitt 23 sowie die vollständige Release und der Renderer einschliesslich Langfassung und Quellenaufklapper. Den aktuellen veröffentlichten Inhalt vor der Bearbeitung read-only über MCP abgerufen: Inhalt und Zusammenfassung waren mit der bisherigen Release identisch. `expectedUpdatedAt` auf den frisch gelesenen Wert `2026-11-20T14:04:38.248Z` gesetzt.

Die Zusammenfassung beschreibt nun direkt die gleich breiten Karten untereinander. Aus «eine bewusste Binnengruppe» wird die konkrete Anordnung kurzer Angaben mit Beschriftung und Wert. «die folgenden Themenkarten wandern nach unten» erklärt nun ausdrücklich als «Hinweis zum Layout», dass die Karte mit dem Text höher wird und die folgenden Karten weiter unten stehen. Auch der Kommentar im Projektkopf ist gekennzeichnet. Unter «Termine» steht jetzt eine Einleitung zu den zwei Projektschritten; die Regel zur gemeinsamen Themenkarte bleibt bei den Entwurfsregeln. Quellen und offene Prüfungen sind in vollständigen Sätzen formuliert.

Erhalten: Projekt Garten, Status und Stand, Verantwortlichkeit und Phase, beide Termine mit Tätigkeiten, beide Unterlagen mit Formaten und Seitenzahlen, drei Themenkarten in gleicher Reihenfolge und Breite, Grenze von 32 rem als lokale Beispielentscheidung, wachsende Karten ohne feste Höhe oder eigene Scrollfläche, native Langfassung, fehlende Downloadfunktion, Quellen V02/V20 und sämtliche Prüfgrenzen. Keine neuen Beispiele, Funktionen oder Zusagen. Der Layoutname bleibt englisch. Renderer und CSS unverändert.

Ausgeführte Checks:

- MCP-Vergleich der alten Release: vollständiger Inhalt und Summary gleich, nur IDs und leere optionale Werte normalisiert.
- Strukturvergleich gegen die vorherige Release: Block-/Knotenstruktur, Anzahl und Reihenfolge der Textzeilen sowie alle Überschriften unverändert.
- Suche nach eingehenden Links auf `stacked-section-cards` mit Fragment in `scripts`, `src` und `docs`: keine Treffer; keine geänderten Überschriftenanker.
- `npm run typecheck`: bestanden.
- `git diff --check` für die eigene Release und diesen Bericht: bestanden.

Nach Root-Veröffentlichung in BrowserOS neo die ganze Seite gelesen, beide Langfassungen und «Quellen und Prüfgrenzen» geöffnet. Die veröffentlichten Texte stimmen mit der redigierten Fassung überein. Beide Beispielansichten, Regeln und Quellen in vollständigen Screenshots bei echten Viewports von 1440 × 1000 und 390 × 844 geprüft: neue Texte und lange Dateinamen umbrechen lesbar; kein abgeschnittener Text beobachtet. Die Absätze «Hinweis zum Layout» sind in beiden Ansichten ausdrücklich als Erläuterungen erkennbar und vom Projekttext getrennt. Kein sprachlicher Restbefund. Viewport danach zurückgesetzt und eigenen QA-Tab geschlossen.

Status: DONE nach Root-Veröffentlichung und Browser-QA. Die Textprüfung ersetzt keine vollständige Funktions- oder Barrierefreiheitsprüfung.
