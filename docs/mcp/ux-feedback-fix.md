# UX-Rückmeldung präzisieren · 22.11.2026

Redaktioneller Umfang: Alert und zwei benachbarte statische Beispiele. Kein neuer Contractzustand und keine neue Produktfunktion. Die Formulierungen gelten unabhängig vom Framework.

## Änderung

Zuvor verband der Alert «Änderungen nicht gespeichert» mit einer Verbindungsprüfung und «Erneut speichern», ohne bestätigte Nichtannahme vorauszusetzen. Eine fehlende Antwort lässt den tatsächlichen Ausgang offen.

Das Beispiel setzt jetzt bestätigte Nichtannahme und eine behobene Ursache voraus. Es erklärt den Erhalt der Eingaben. Die allgemeine Anleitung benennt ein unbekanntes Ergebnis ausdrücklich, erhält Eingaben und Vorgangsbezug und verlangt Klärung vor einer neuen Speicherung. Eine sichere Wiederholung desselben Vorgangs wird davon getrennt: Das Produkt muss doppelte Ausführung zuverlässig verhindern. «Status prüfen» bleibt an eine tatsächlich verfügbare, verlässliche Abfrage des ursprünglichen Vorgangs gebunden.

Geänderte Dateien:

- `scripts/content/component-docs/alert.json`: Beispiel, Ablauf und Beschriftung; Verweis auf Content Design.
- `docs/handbook/component-catalog/reviews/alert.json`: drei zusätzliche redaktionelle Claims und eine Entscheidungsnotiz.
- `public/component-examples/alert.svg`: konsistenter Erklärungstext und Beschreibung; Titel und Aktionswortlaut erhalten.
- `scripts/content/page-reworks/icons.ts`: nur der aktive Status-Beispielblock, mit bestätigter Nichtannahme und Abgrenzung zur fehlenden Antwort.
- `src/docs/comparisons/forms-feedback-data.ts`: nur Alert-Vergleichsbeschreibung und drei lokalisierte Alert-HTML-Beispiele; keine Rohfixtures geändert.

Abgeglichen, nicht geändert: `scripts/content/page-reworks/content-design.ts`, `formulare-validierung.ts`, `laden-leer-fehler.ts`. Deren Unterscheidung zwischen bestätigtem Fehler und unbekanntem Ergebnis bleibt führend für die betreffenden Abläufe. Historische Inhalte und veröffentlichter Snapshot wurden nicht bearbeitet.

## Tatsächliche Prüfungen

- `node --import tsx scripts/check-component-catalog.ts --component alert`: PASS, neun Abschnitte, Quellenhashes und Pointer/Snippets, SVG-XML und begrenzte Dateisicherheit. Kein Snapshotabgleich.
- Alert-Review gegen HEAD verglichen: alle neun bisherigen Source-Einträge sowie sämtliche bisherigen Contract-Claims unverändert; SHA-256 aller neun Originalquellen neu berechnet und identisch mit den deklarierten Werten.
- TypeScript-Module für Icons und Forms/Feedback-Vergleiche erfolgreich geladen.
- `git diff --check` für alle fünf Zieldateien bestanden.

Diese Prüfungen belegen Struktur und Quellenintegrität. Visuelle Prüfung der geänderten Texte, geschützte CMS-Übernahme, neuer Snapshot und ein frischer MCP-Lesetest werden durch die Integration separat ausgeführt. Dieser Bearbeitungsschritt hat keine CMS-Schreibaktion und keinen MCP-Paritätsnachweis durchgeführt. Bestehende fremde Änderungen wurden nicht zurückgesetzt; kein Commit oder Push.
