# create · Redaktion

## Gelesener Umfang

PAGE-BRIEF, redaktioneller Gesamtbericht und eigener Auditabschnitt 17; vollständige aktuelle Release und Renderer einschliesslich beider Vertiefungen. Den veröffentlichten Formularvertrag über read-only MCP zur konkreten Erklärung von Ablehnung, unbekanntem Ergebnis und Verlassen nachgelesen.

Vor der Änderung stimmten Inhalt und Zusammenfassung der alten Release mit dem frischen MCP-Abruf überein. `updatedAt: 2026-11-20T13:54:17.199Z` ist als neue Schreibvorbedingung eingetragen.

## Redaktion

- «Bestätigte Annahme» → «Erstellung bestätigt». «Zur Detailseite des bestätigt erstellten Projekts wechseln» erklärt jetzt ausdrücklich: erst nach bestätigter Erstellung wechseln, dort Name, ID und Bestätigung zeigen.
- «Verlassenswarnung und Vorrangregel für ungeklärte Speicherung» erklärt jetzt Warnung, weiterlaufende Anfrage und den Vorrang der Statusklärung vor der Nachfrage zum Verwerfen.
- Die bisher verdichteten Regeln zu Rand-Leerraum und Unicode-Graphemclustern stehen in vollständigen Sätzen. Beispiel, Zustandstexte und Vertiefungen wurden zusammenhängend gelesen; verständliche Meldungen bleiben erhalten.
- «Projekt erstellen» bleibt die Nutzeraktion, `create` und `edit` bleiben die bewusst gewählten Seitentypen.

## Fachliche Erhaltung und Checks

- Erfolg weiterhin erst nach bestätigter Erstellung; laufende Anfrage, ausdrückliche Ablehnung und unbekanntes Ergebnis bleiben getrennt. Beim unbekannten Ergebnis weder erneutes Senden noch Verwerfen; Statusklärung weiterhin nicht bedienbar.
- 1–80 Unicode-Graphemcluster nach Entfernen von äusserem Leerraum, gleiche Namen, System-ID und Systemstatus, q/status, Feldfokus, Abbruch, Rückkehr und fehlende dauerhafte Entwurfsspeicherung erhalten. Die vollständigen Fokus- und Rückkehrregeln bleiben über denselben Formularvertrag verlinkt.
- Gegen aktuellen MCP-Inhalt geprüft: Blocknamen, Block-/Knotenstruktur und -reihenfolge, Anzahl der Rendererzeilen sowie Links unverändert. Renderer unverändert.
- Suche nach eingehenden `page-type-create#`-Links in `scripts`, `src` und `docs` ohne veränderlichen Snapshot: keine Treffer. Die geänderte Zustandsüberschrift wird Root gemeldet.
- `npm run typecheck` erfolgreich; `git diff --check` ohne Befund.

## Browserprüfung nach Veröffentlichung

Am 20.11.2026 die veröffentlichte Seite mit BrowserOS neo vollständig gelesen. Beide Vertiefungen tatsächlich geöffnet und mitgelesen. Anschliessend vollständige Screenshots mit tatsächlichen Viewports 1440 × 1000 und 390 × 844 visuell geprüft.

- Einstieg, Feldhilfe, Systemhinweis und statische Grenze erscheinen wie redigiert. Auf breiter Fläche stehen die Aktionen nebeneinander, bei 390 px untereinander mit «Projekt erstellen» zuerst.
- Alle vier Zustandsbeispiele lesbar; «Erstellung bestätigt» und der Wechsel erst nach Bestätigung sind sichtbar. Der unbekannte Ausgang erklärt ausdrücklich weder erneutes Absenden noch Verwerfen und die fehlende Funktion zur Statusklärung.
- Lange Zustandsmeldungen, Unicode-Erklärung, Warnung, Links und beide geöffneten Vertiefungen brechen bei 390 px lesbar um. Keine sichtbare horizontale Abschneidung des Seiteninhalts in den geprüften Screenshots.
- Kein konkreter sprachlicher Restbefund. Keine erneuten Server-, Formularablauf- oder Quellenprüfungen durchgeführt. Der Viewport wurde zurückgesetzt und die eigene QA-Seite geschlossen.

Redaktion und begrenzte Browserprüfung abgeschlossen.
