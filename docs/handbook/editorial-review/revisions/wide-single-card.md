# Wide Single Card: vollständige redaktionelle Durchsicht

## Umfang und Entscheidung

Gelesen: Seitenbrief, Gesamtbericht und eigener Auditabschnitt 22 sowie die vollständige aktuelle Release und der Renderer. Die Durchsicht umfasst Einstieg, alle Beispieltexte einschliesslich Arbeitsnotiz und Bildunterschrift, fünf Entwurfsregeln, CSS-Erklärung und aufgeklappte Quellen-/Prüfgrenzentexte. Der Renderer fügt keine eigenen redaktionellen Texte hinzu.

Kein konkreter sprachlicher Änderungsbedarf. Die verständlichen Texte bleiben erhalten; es gibt keine künstlichen Vorher/Nachher-Ersetzungen. Insbesondere bleiben der kurze Einstieg und die klare Unterscheidung von Cardbreite, Textbreite und Feldbreite bestehen. Der bewusst englische Name Wide Single Card bleibt unverändert.

## Fachliche Erhaltung

Summary und sämtliche Inhaltsblöcke sind unverändert. Damit bleiben auch Beispielinhalt, Werte 100%, 65ch, 28rem und 36rem, Container-Reflow, lokale Bearbeitbarkeit ohne Speicherung, Tabellen-/Scrollhinweise, Vergleichslink, Quellen und Prüfgrenzen vollständig erhalten. CSS, Renderer, Blockstruktur, Reihenfolge und Zeilenzahlen wurden nicht geändert.

## Ausgeführte Prüfungen

- Frischer read-only MCP-Abruf `get_documentation_page` mit `system: shadcn` und `section: wide-single-card`: `updatedAt: 2026-11-20T14:04:01.528Z`. Diesen Stand als `expectedUpdatedAt` eingetragen.
- Vor jeder Änderung Summary und Content des MCP-Abrufs gegen die bisherige Release verglichen: gleich, nur CMS-IDs und leere/null-Felder für den Vergleich normalisiert. Kein Snapshotimport und kein CMS-Write.
- Eingehende Links mit `wide-single-card` und Fragment in `scripts`, `src` und `docs` gesucht (Snapshot ausgenommen): keine Treffer. Überschriften und damit Anker bleiben unverändert.
- `npm run typecheck`: bestanden. `git diff --check` für die eigenen Dateien: bestanden.
- `node scripts/check-page-rework.ts wide-single-card`: Release/CMS/MCP gleich, öffentliche Seite HTTP 200 und neutrale Quellenbezeichnung bestätigt.

## Browserprüfung nach Root-Abgleich

Root hat den unveränderten Veröffentlichungsstand bestätigt; eine erneute Veröffentlichung war nicht erforderlich. BrowserOS neo: ganze Seite und beide geöffneten Details gelesen, anschliessend vollständige Screenshots bei echten 1440 × 1000 und 390 × 844 CSS-Pixeln visuell geprüft. Titel, Einstieg, Beispiel, Notizhilfe, Bildunterschrift, Entwurfsregeln, CSS-Erklärung und Quellen bleiben gut lesbar. Bei 390px stehen die drei Angaben untereinander; die Prosa bricht ohne sichtbares Abschneiden um. Der CSS-Code bleibt im eigenen begrenzten Codebereich. Kein sprachlicher Restbefund. Keine Funktions- oder Geometrietests wiederholt. Breitenüberschreibung entfernt, eigenen Browser-Tab geschlossen.

DONE: vollständige redaktionelle Prüfung und Browsernachkontrolle abgeschlossen; Texte bewusst unverändert erhalten.
