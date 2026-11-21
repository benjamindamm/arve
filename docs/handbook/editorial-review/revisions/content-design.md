# Content Design · Redaktion

## Gelesener Umfang

PAGE-BRIEF, Gesamtbericht und eigener Auditabschnitt 45; vollständige Release und Renderer einschliesslich Vorher/Nachher-Beispiel, beider Meldungsvergleiche, Hilfetexte und aller neun Vertiefungsblöcke. Der Renderer enthält keine zusätzlichen redaktionellen Texte und blieb unverändert.

## Wichtigste Änderungen

- «Projekt anlegen» → «Projekt erstellen», passend zur bereits verwendeten Aktion und den Formularbeispielen.
- «Die ausgebliebene Antwort beweist keinen Nicht-Erfolg.» → «Auch ohne Antwort kann das Projekt erstellt worden sein.»
- «Prüfzeitpunkt und Rückwege führt das Formularpattern» → konkrete Erklärung, welche Fragen «Formulare und Validierung» beantwortet; der Verweis auf den Piloten verwendet den aktuellen Seitentitel.
- Die bisher als unveränderte Originalblöcke angekündigte eigene Prosa ist nun als aktuelle Erläuterung beschrieben und vollständig redaktionell gelesen. Die detaillierte Definition der Zeichenzählung bleibt in der Vertiefung. Historische Quelldateien und externe Quellenbezeichnungen wurden nicht geändert.
- Gute UI-Texte wie «Projektname (erforderlich)», «Einen Projektnamen eingeben.» und «Projekt «Jahresbericht» erstellt.» bleiben erhalten.

## Fachliche Erhaltung

1–80 Unicode-Graphemcluster nach Entfernen des Leerraums am Anfang und Ende; gleiche Projektnamen im Piloten erlaubt; sichtbares Label und gleichlautende Grenzen in Hilfe und Fehler; Fokus zum Feld nach fehlgeschlagenem Absenden und keine Fehlerübersicht im Einzelfeld-Piloten. Fachlich bestätigte Nichtannahme bleibt von unbekanntem Ergebnis getrennt. Beim unbekannten Ergebnis fehlen weiterhin bedienbare Statusprüfung, Wiederholung und erfundener Supportweg, solange die notwendige Schnittstelle fehlt. Verlässliche Statusabfrage darf kein zweites Projekt erstellen. Bedingungen für erneutes Absenden, Ergebnislink, Erhalt der Angaben, serverseitige Speicherung und Wiederaufnahme bleiben erhalten. Ausstehende Nachweise, Verständlichkeitsprüfung und assistiver Test bleiben offen.

## Ausgeführte Prüfungen

- Vor der Redaktion: `node scripts/check-page-rework.ts content-design` erfolgreich; bisherige Release, MCP-Inhalt und Zusammenfassung identisch, öffentliche Seite HTTP 200.
- Frischer read-only MCP-Abruf: `updatedAt` = `2026-11-20T15:15:38.946Z`; als `expectedUpdatedAt` übernommen.
- Strukturvergleich der neuen Release mit diesem MCP-Abruf: Block-/Knotenstruktur, Reihenfolge, Typen und Textzeilenanzahl unverändert.
- Suche nach eingehenden `content-design#`-Links in `scripts/content`, `src` und `docs`, einschliesslich Snapshot: keine Treffer. Überschriftenänderungen erfordern dort keine Anpassung.
- `npm run typecheck` erfolgreich.
- `git diff --check -- scripts/content/page-reworks/content-design.ts` erfolgreich.

Die abschliessende Redaktion formuliert «Die Texte ersetzen keine Produktfreigabe» und trennt diese Grenze von Markenstimme und nicht belegten Demo-Funktionen.

Release-SHA-256: `0ace595dcd4d6d7cd2850a77a9dcb440bbf0205695a7e8d52f252ec4215a8b36`.

## Browserprüfung nach Veröffentlichung

Die veröffentlichte Seite in BrowserOS neo vollständig gelesen, die Vertiefung geöffnet und beide Meldungsvergleiche geprüft. Vollseitige Screenshots mit echten 1440 × 1000 und 390 × 844 CSS-Pixeln angesehen; bei 390 Pixeln zusätzlich lesbare Ausschnitte des Hauptvergleichs, der Detailerklärung und des zweiten Meldungsvergleichs kontrolliert. Überschriften, Hilfen, lange Bedingungen und Meldungen brechen innerhalb der verfügbaren Breite um. Die Vergleiche stehen bei 390 Pixeln untereinander; keine abgeschnittenen Redaktionstexte festgestellt.

«Projekt erstellen» ist durchgängig verwendet. Beide neuen Formulierungen zur Produktfreigabe sind veröffentlicht; Markenstimme und nicht belegte Demo-Funktionen bleiben getrennt benannt. Kein weiterer sprachlicher Restbefund. Die vorhandenen Entwicklungs-/Sprunglink-Overlays waren in der Vollseitenaufnahme sichtbar und sind keine geänderten Redaktionstexte. Keine erneuten Formular- oder assistiven Tests ausgeführt. Ansichtsüberschreibung zurückgesetzt und eigener QA-Tab geschlossen.

DONE nach zentraler Veröffentlichung und Browserprüfung.
