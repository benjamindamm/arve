# Laden, leer und Fehler

## Befund

Am 20.11.2026 eigene BrowserOS-neo-Seite der öffentlichen Route geöffnet und gelesen: nur Absätze zu Laden, Leer und Fehler; keine Zustandsbeispiele. Erstleere und Nulltreffer textuell getrennt, Nichtverfügbarkeit und Unknown fehlten. Aktueller veröffentlichter CMS-Stand read-only mit `push:false` und `default_transaction_read_only=on` gelesen: Seite 22, `updatedAt: 2026-11-13T12:43:02.870Z`, ein Originaltextblock.

## Änderung

Sechs frühe, statische Gestaltungskarten mit unterscheidbaren Titeln, Meldung, vorgesehener Aktion und erhaltenem Kontext. Zwei Spalten breit; unter 650 px eine Spalte ohne feste Kartenhöhe. Keine animierte Ladeanzeige und keine gleichzeitigen Live-Regionen für die statischen Beispiele. Aktionsbeschriftungen sind ausdrücklich Vorschläge, keine scheinbar bedienbaren Buttons. Die Vorschau macht weder Lese- noch Schreibzugriffe.

Drei führende Regeln; kompakter Zustandsvergleich. Unknown bewahrt die unbestätigte Eingabe, warnt vor erneuter Übermittlung und bietet weder erneutes Senden noch Statusabfrage oder unbelegten Support an. Nichtverfügbarkeit behauptet keinen unbekannten Grund. Fehlerkarte betrifft ausdrücklich Lesen, damit ein erneuter Versuch nicht als sichere Schreibwiederholung verstanden wird.

Patternbezüge UX-008, UX-017 und UX-027 als Kandidaten mit konkreten Beobachtungsgrenzen in Details. Kein Ready-Status abgeleitet. Ursprünglicher CMS-Text unverändert in Details erhalten. Führende Seite gemäss Auftrag; keine Bearbeitung von `systemzustaende`.

## Tatsächliche Prüfungen

- Öffentlichen Ausgangsstand in eigenem BrowserOS-neo-Tab gelesen.
- Aktuellen veröffentlichten CMS-Datensatz read-only geladen.
- `npm run typecheck`: erfolgreich.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts laden-leer-fehler`: Vorschau erfolgreich, elf Blöcke; keine Veröffentlichung.
- `git diff --check` für eigene Dateien: erfolgreich.

Nach Root-Einbindung und Veröffentlichung die vollständige Seite mit BrowserOS neo und CDP in tatsächlichen Ansichten 1440×1000 und 390×844 screenshot-visuell geprüft. Alle sechs Zustandskarten, drei Regeln und der vollständige Zustandsvergleich angesehen: breit zweispaltig, schmal einspaltig; in den geprüften Bildern keine abgeschnittenen Texte oder horizontal herauslaufenden Karten. Beide Details tatsächlich geöffnet und im Snapshot als expanded bestätigt; Patterngrenzen und Originaltexte vollständig lesbar. Alle sechs Meldungen zusätzlich im Seitenlesetext bestätigt. Die drei Weiterlesen-Ziele Rechnungsbeispiel, Content Design und Barrierefreiheit im eigenen Tab geöffnet, jeweils HTTP 200. Ansichtsüberschreibung anschliessend zurückgesetzt. Keine Darstellungsreparatur erforderlich. Keine Prüfung von Backendverhalten, Screenreader, Kontrasten oder Wiederherstellung ausgeführt. Keine gemeinsame Route, Registry, globales CSS, Schema, Agentendatei oder CMS-Daten geändert; kein Commit/Push.

Dateien: `src/docs/page-reworks/laden-leer-fehler.tsx`, gleichnamiges CSS, `scripts/content/page-reworks/laden-leer-fehler.ts`, dieser Bericht. Fachtexte werden ausschliesslich aus CMScontent gelesen.
