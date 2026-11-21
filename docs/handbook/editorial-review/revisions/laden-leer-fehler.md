# Redaktion · Laden, leer und Fehler

## Umfang und Ausgangsstand

`PAGE-BRIEF.md`, Gesamtbericht und Abschnitt 33 des Seitenbefunds gelesen. Die gesamte eigene Release mit elf Blöcken gelesen, einschliesslich beider aufklappbaren Vertiefungen; Renderer vollständig auf zusätzliche Texte und textabhängige Auswertung geprüft. Die bestehenden kurzen Zustandsregeln der letzten Vertiefung sind verständlich und bleiben erhalten. Der Renderer enthält keine ergänzenden fachlichen Texte und bleibt unverändert.

Die veröffentlichte Seite read-only über MCP `get_documentation_page` (`system: shadcn`, `section: laden-leer-fehler`) abgerufen. Inhalt und Zusammenfassung entsprachen der bisherigen Release, abgesehen von generierten IDs. Frisches `updatedAt: 2026-11-20T14:27:29.953Z` als `expectedUpdatedAt` übernommen.

## Sprachliche Änderungen

- Zusammenfassung nach Root-Prüfung auf zwei kurze Sätze zum Zweck der Seite gekürzt; die sechs Zustände bleiben im Hauptinhalt vollständig erklärt.
- «Erstleere» → «Noch keine Daten»; «Nulltreffer» als sichtbare Zustandsklasse → «Keine Suchtreffer». Die Unterscheidung zwischen vollständig leerem Bestand und erfolgloser Suche bleibt ausdrücklich erklärt.
- «Unknown · Speicherausgang unklar» → «Speicherung nicht bestätigt». Die konkrete Meldung «Ob die Änderung gespeichert wurde, ist unklar» bleibt bestehen.
- «Eine unbestätigte Schreibantwort …» → «Fehlt die Bestätigung einer Speicherung, melde weder Erfolg noch einen sicheren Fehlschlag.»
- «Bestand geladen, Auswahl leer» → «Die Daten wurden geladen, aber nichts passt zur Suche und den Filtern.»
- Regeln und Vertiefung als vollständige Anleitung formuliert: erneute Übermittlung bleibt ausgeschlossen, eine Statusprüfung setzt weiterhin eine tatsächlich vorhandene Schnittstelle voraus. «Unknown-Abgleich», «zeitliche Progression» und «Ready-Freigabe» verständlich erläutert; Kandidatenstatus und fehlende Ready-Freigabe bewahrt.

## Erhaltung und Checks

Sechs Zustände, Beispielwerte, Aktionen, Suche/Filter/Eingaben, bisheriger Datenstand, Fokus, assistive Ankündigungen, Grenzen statischer Beispiele und sämtliche UX-IDs bleiben erhalten. Keine neuen Fähigkeiten oder Freigaben. Technische Keys, Klassen und Rendererlogik unverändert.

- Strukturvergleich gegen die bisherige Release bestanden: alle elf Blöcke, IDs, Typen, Reihenfolge und Knotenzahlen unverändert; ausschliesslich Textfelder, Zusammenfassung und `expectedUpdatedAt` geändert.
- Alle sechs Vergleichszeilen enthalten weiterhin genau drei durch ` · ` getrennte Teile.
- Eingehende Ankerlinks auf die Seite in `src`, `scripts` und `docs` gesucht: keine gefunden. Die eigenen generierten Anker ändern sich mit «Noch keine Daten», «Keine Suchtreffer», «Laden fehlgeschlagen», «Speicherung nicht bestätigt» und dem Titel der Patternvertiefung; Root ist informiert.
- `npm run typecheck`: bestanden.
- `git diff --check`: bestanden.

## Browserprüfung nach Veröffentlichung

Die veröffentlichte Seite in BrowserOS neo vollständig als Anleitung gelesen. Alle sechs Karten, Regeln, Entscheidungshilfe und beide geöffneten Vertiefungen geprüft. Die kurze Zusammenfassung und sämtliche neuen Zustandsbeschriftungen sind veröffentlicht. Der unbekannte Speichererfolg ist klar vom fehlgeschlagenen Datenabruf getrennt; leere Gesamtliste und fehlende Suchtreffer bleiben ebenso klar unterscheidbar.

Ganzseiten-Screenshots bei 1440 × 1000 und 390 × 844 CSS-Pixeln erstellt und visuell geprüft, jeweils mit beiden geöffneten Vertiefungen. Die Karten erscheinen am Desktop zweispaltig, bei 390 Pixeln untereinander. Neue Beschriftungen, Vergleichszeilen und der längere Aufklapptitel umbrechen lesbar; kein Abschneiden oder Überlappen durch die redigierten Texte festgestellt. Kein weiterer konkreter sprachlicher Restbefund. Keine erneuten Funktions- oder Quellenprüfungen durchgeführt.

DONE nach Root-Veröffentlichung und Browserprüfung.
