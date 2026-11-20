# Auswahl und Suche

## Änderung

Beispiel zuerst: drei unabhängige, interaktive native HTML-Vorschauen für genau einen Standort (sichtbare Radio-Gruppe, Select, Suchfeld mit Radio-Gruppe). Jede zeigt aktuellen lokalen Wert und separat bestätigten Vorschauwert. Suchtext schränkt nur die Optionsanzeige ein; kein Freitextwert und keine Speicherung. Nulltreffer erhalten die aktuelle Auswahl.

Die fachlichen Texte stehen vollständig im CMS-Release. Ein-/Mehrfachwahl, Wertvertrag, Auswahl/Bestätigung, fehlende Option und Tastaturprüfweg sind getrennt erklärt. Suchen/Filtern, Formulare und bestehende Komponenten sind verlinkt; UX-003/UX-009 als begrenzte Beobachtungen im Patternkatalog. Keine Selektionspolicy und kein Select-/Combobox-Contract behauptet. Die ursprünglichen drei CMS-Blöcke aus dem eingefrorenen Handbuchsnapshot bleiben unverändert in der Vertiefung erhalten.

Breit: drei gleich breite Spalten; bis 1050px: eine Spalte. Umbruchfähige Ausgaben und Steuerelemente mit voller Kartenbreite; lokales CSS.

## Tatsächlich geprüft

- Öffentliche Ausgangsseite am 20.11.2026 im eigenen BrowserOS-Tab 141 gelesen: Combobox-Einleitung und zwei abstrakte Do/Don't-Figuren, kein konkreter Vergleich.
- Aktueller veröffentlichter Payload-Stand read-only mit `push:false` gelesen; `updatedAt` 2026-11-17T22:33:55.301Z.
- WAI APG Combobox am 20.11.2026 im Browser gelesen; vorhandene shadcn-UX-Referenzen für Input, Checkbox und Switch gezielt read-only gelesen.
- `npm run typecheck`: bestanden.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts auswahl-und-suche`: Preview bestanden, 13 Blöcke; keine CMS-Schreibzugriffe.
- Nach Root-Veröffentlichung: Der erste `scripts/check-page-rework.ts auswahl-und-suche` fand eine inzwischen durch den Handbuchexport veränderte Snapshot-Importbasis. Die drei Originalblöcke wurden daraufhin direkt im eigenen Release eingefroren. Erneuter Typecheck und MCP-Abgleich bestanden; Release/CMS/MCP gleich, öffentliche Seite HTTP200, neutrale Quelle. Kein weiterer CMS-Write nötig.
- Öffentliche Seite bei 1440×1000 und 390×844 mit BrowserOS-CDP dargestellt und Screenshots angesehen: drei Spalten breit, alle drei Karten untereinander schmal; keine abgeschnittenen Karteninhalte. Beim ersten Hot-Reload fehlte das Stylesheet kurz; vollständiges Neuladen zeigte das korrekte Layout.
- Radio → Bern und Bestätigung, Select → Basel und Bestätigung tatsächlich bedient. Suchliste → Zürich zeigte zunächst „Noch nicht bestätigt“; Suchtext „xyz“ ergab Nulltreffer bei erhaltenem Wert Zürich. Die eigene Bestätigung zeigte danach Zürich als bestätigt. Vorschauen blieben voneinander unabhängig.
- Quelldetails geöffnet: Originalblöcke und Links zu Patternkatalog, WAI und shadcn im Snapshot sichtbar; Nachbarlinks zu Suchen/Filtern, Formularen und bestehenden Komponenten vorhanden. Links als Ziele kontrolliert, nicht alle Zielseiten neu geprüft. Viewport danach zurückgesetzt.
- Kein Nachweis mit Screenreader oder angeschlossenem Dienst. Die Browserbedienung ist ein begrenzter Funktionscheck, keine allgemeine Accessibilityfreigabe.
