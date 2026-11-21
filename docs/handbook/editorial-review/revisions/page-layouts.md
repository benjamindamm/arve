# Page layouts · Redaktion

## Gelesener Umfang

`PAGE-BRIEF.md`, Auditbericht und eigener Abschnitt 18 im Seitenaudit. Vollständige aktuelle Release `scripts/content/page-reworks/page-layouts.ts` und Renderer `src/docs/page-reworks/page-layouts.tsx`: Einstieg, sechs Schemata samt Einsatzfällen, Regeln, Beschriftungen und Links, Auswahlfragen sowie beide aufklappbaren Abschnitte zu Ansichtsbreiten und Quellen.

Der frische read-only MCP-Aufruf `get_documentation_page(system: shadcn, section: page-layouts)` lieferte `updatedAt: 2026-11-20T13:57:44.713Z`. Vor der Redaktion waren Inhalt und Zusammenfassung zur bisherigen Release gleich (IDs und null-Werte für den Vergleich normalisiert). Dieser Zeitstempel steht jetzt in `expectedUpdatedAt`.

## Redaktion

- «Breite und Gewicht deiner Inhalte» → «wie viel Breite deine Inhalte brauchen und wie sie zusammengehören»: Der Einstieg nennt konkrete Auswahlkriterien.
- «einen kompakten Inhalt mit ruhigem Lesefluss» → «einen kompakten Inhalt, der wenig Breite braucht»: Der im Audit benannte unbestimmte Qualitätsanspruch entfällt.
- «Breit: grosser Hauptbereich und schmalere Inhaltsspalte. Schmal: Hauptinhalt vor Ergänzung.» → vollständige Sätze über die Anordnung in breiten und schmalen Ansichten. Die Rasterbeschreibungen sind ebenfalls als Sätze formuliert.
- «Narrow Single Card begrenzt ihn» → «Bei Narrow Single Card ist die Card-Breite begrenzt» und «Stacked Section Cards führt nach unten» → «Bei Stacked Section Cards stehen sie untereinander»: Die Entscheidungshilfe beschreibt sichtbare Unterschiede.
- Die verständlichen Einsatzfälle zu Main+Sidebar, Wide Single Card, Stacked Section Cards und 3-column Card Grid sowie die guten übrigen Anweisungen bleiben erhalten. «Schemen» heisst durchgängig «Schemata»; «benötigter Inhaltsraum» wird als Platzbedarf erklärt.

## Fachliche Erhaltung und Checks

- Alle sechs bewusst gewählten Layoutnamen, Schemawerte, Spalten-/Reihenregeln, Lesereihenfolgen, Umbruchregeln und Links bleiben erhalten. Ebenso die Vorschaugrenzen 60rem, 37.5rem und 12rem sowie Quellen, fehlender eigener Seitenbeleg für Narrow Single Card und Grenzen der Darstellung.
- Automatischer Vergleich gegen die bisherige Release bestätigt unveränderte Block-/Knotenstruktur, Textzeilenanzahl und Überschriften sowie identische Zahlen und Einheiten. Der Renderer benötigt keine Änderung.
- Suche nach eingehenden `page-layouts…#`-Links in `scripts`, `src` und `docs` ohne Treffer; veränderlichen Snapshot dabei ausgeschlossen. Keine Überschrift geändert, daher keine Ankeränderung.
- `npm run typecheck` erfolgreich; `git diff --check` für eigene Dateien erfolgreich.
- Bisherige Release SHA256: `12381f3728e6d72429c7313568d3a8304413a8b23fed881ab0bf853780ca6fae`.
- Redigierte Release SHA256: `5cff9e79573cbc1b3dc271acfdf300381804f5167b9514eb7e89f7e78c72cab3`.

## Browserprüfung nach Veröffentlichung

Die veröffentlichte Seite wurde in BrowserOS neo vollständig gelesen: Zusammenfassung, alle sechs Schemata mit Beschreibungen, Entscheidungshilfe und beide geöffneten Details. Vollseitige Screenshots bei 1440px und 390px Ansichtsbreite visuell auf Textumbruch geprüft. Die neuen vollständigen Sätze, die Narrow-Single-Card-Auswahlregel und die längeren Rasterbeschreibungen bleiben in beiden Ansichten lesbar; auch Auswahlfragen und geöffnete Detailtexte brechen ohne abgeschnittene Textzeilen um. Kein sprachlicher Restbefund. Keine erneuten CSS-/Geometrie- oder vollständigen Funktionsprüfungen ausgeführt. Eigener QA-Tab anschliessend geschlossen.

DONE nach Root-Veröffentlichung und Browserprüfung.
