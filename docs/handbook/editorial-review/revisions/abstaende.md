# Abstände und Grössen · Redaktion

## Gelesener Umfang

Die vollständige eigene Release mit Studie, Beschriftungen, Beispielangaben, drei Entwurfsregeln, Innenabstands- und Bedienflächenzeichnung, Inhaltsprüfung, Referenzwerten, WCAG-Vertiefung und Links gelesen. Dazu den ganzen Seitenrenderer sowie gezielt `Spacing()` und `boundaries.spacing` im gemeinsamen Studienrenderer gelesen. Redaktionelle Grundlage: `PAGE-BRIEF.md`, Auditbericht und eigener Abschnitt 07 in `pages.md`.

Vor der Änderung `get_documentation_page` für `shadcn/abstaende` read-only über MCP abgerufen. Zusammenfassung und Inhalt entsprachen nach Entfernung der CMS-IDs und leeren Optionalwerte der bisherigen Release. Frisches `updatedAt` und neues `expectedUpdatedAt`: `2026-11-20T13:37:38.649Z`.

## Wichtigste Änderungen

- «Kleine Lücken verbinden eine Einheit» erklärt nun direkt, dass kleine Abstände Zusammengehörigkeit zeigen und grössere Gruppen voneinander trennen.
- «Halte Label, Wert und Hilfe näher zusammen als den Abstand zur nächsten Angabe» wurde zu zwei klaren Aussagen: Beschriftung, Wert und Hilfe stehen nah beieinander; zur nächsten Angabe ist der Abstand grösser. Studienerklärung und Vorschau verwenden dieselbe verständliche Beziehung.
- «Innenraum bewusst setzen» und «Innenraum zur Kontur» benennen nun den Innenabstand zwischen Inhalt und Umrandung. Die Erläuterung unterscheidet ihn ausdrücklich vom Abstand ausserhalb der Bereiche. Die Bedienfläche bleibt separat erklärt: Zusätzlicher Platz zählt nur dazu, wenn sich dort die Aktion auslösen lässt.
- Bildbeschriftungen beschreiben kleine beziehungsweise grössere Abstände. Der Aufklapptitel heisst nach Root-Review «Erklärung zum Beispiel», statt die Studienüberschrift zu wiederholen. Die Inhaltsprüfung spricht von Beschriftungen und benachbarten Aktionen.

## Fachlich erhalten

Blocktypen, Blocknamen, Reihenfolge und Anzahl der ausgewerteten Textzeilen bleiben gleich. Beispielinhalt, statischer Charakter, Skalen- und Nachweisgrenzen bleiben erhalten. Die Reihe 4/8/12/16/24/32/48 px bleibt ein unverbindlicher redaktioneller Vorschlag; lokale Werte bleiben 4 px vertikal und 10 px horizontal für Input sowie 8 px zwischen Checkbox und Beschriftung. Komponentenrollen, Dateipfad und Tokennamen bleiben erhalten. Alle drei WCAG-Absätze bleiben wörtlich unverändert, einschliesslich 24 × 24 CSS-Pixeln, Ausnahmen, Kreisgeometrie, Plattformgrenze und fehlendem Konformitätsnachweis. Links bleiben unverändert. Keine Standards neu ausgelegt und keine Interaktionen ergänzt.

Im gemeinsamen Renderer wurden ausschliesslich `Spacing()` und `boundaries.spacing` gezielt geändert. Keine Styles, Berechnungen, Tokens oder anderen Funktionen verändert.

## Ausgeführte Prüfungen

- MCP-Altgleichheit von Zusammenfassung und Inhalt vor der Redaktion bestätigt.
- Strukturvergleich mit dem frisch abgerufenen Altstand: Blockanzahl, Blocktypen und -namen, Knotenfolge, Kinderanzahl und ausgewertete Textzeilenanzahl unverändert. WCAG-Absätze, Referenzvorschlag und Linkblock zusätzlich auf Gleichheit geprüft.
- Eingehende Links auf `abstaende` mit Fragment in `src`, `scripts` und `docs` gesucht, einschliesslich Snapshot: keine Treffer. Zwei neue Überschriften ändern Anker: `abschnitt-innenraum-ist-kein-gruppenabstand` → `abschnitt-innenabstand-und-abstand-zwischen-gruppen`; `abschnitt-sichtbares-zeichen-bedienflache-und-lucke` → `abschnitt-sichtbares-zeichen-bedienflache-und-abstand`. An Root gemeldet.
- `npm run typecheck`: erfolgreich.
- `git diff --check`: erfolgreich.

Keine eigenen CMS-Schreibzugriffe.

## Browserprüfung nach Veröffentlichung

Die veröffentlichte Seite am 20.11.2026 mit BrowserOS neo vollständig gelesen und bei 1440 × 1000 sowie 390 × 844 CSS-Pixeln visuell geprüft. Alle drei Details geöffnet: «Erklärung zum Beispiel», «Referenzwerte und ihr Geltungsbereich» sowie «Quellen und Prüfgrenzen». Ganze Seite bei beiden Breiten mit geöffneten Details als Screenshot kontrolliert, einschliesslich Studienbeschriftungen, Innenabstandszeichnung, Bedienflächenerklärung und neuer Überschriften. Der von Root gekürzte Aufklapptitel wird korrekt angezeigt. Beschriftungen und Absätze brechen lesbar um; kein konkreter sprachlicher Restbefund und keine sichtbare Textüberschneidung oder Abschneidung festgestellt. Auf 390 px stehen die beiden Vergleichsbeispiele und die Innenabstandsbereiche untereinander. Die lange Quellenangabe bricht innerhalb der verfügbaren Breite um.

Dies war eine redaktionelle Sichtprüfung; keine erneuten WCAG- oder Bedienflächentests. Den eigenen QA-Tab danach geschlossen. Redaktion und Browser-QA abgeschlossen.
