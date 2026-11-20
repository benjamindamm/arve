# Komponenten auswählen · Seitenüberarbeitung

## Befund und Änderung

Öffentlichen Ausgangsstand am 20.11.2026 zuerst mit BrowserOS neo gelesen (`http://localhost:3010/systems/shadcn/komponenten-auswahl`, eigener Tab 156). Der Einstieg zeigte vier Komponenten nebeneinander; die eigentlichen Auswahlfragen folgten später. Die neue Seite führt früh und sichtbar von der Nutzeraufgabe über den benötigten Wert zu Button, Input, Checkbox oder Switch. Jeder Weg zeigt ein konkretes schematisches Beispiel. Zwei Checkboxoptionen verdeutlichen unabhängige Mehrfachwahl; die Einstellung benennt eine direkte Wirkung. Die Darstellung ist ein lesbarer Entscheidungsweg, kein automatisierter Empfehlungsalgorithmus.

Drei kurze Regeln ergänzen den Weg. Navigation, feste Optionen und längerer Text sind als Grenzen sichtbar. Vier Komponentenseiten und «Auswahl und Suche» sind gezielt verlinkt. Fachtexte und Beispiele stehen im CMS-Release. Aufklappbar bleiben Quellen/Prüfgrenzen sowie die vollständigen Originalfragen und die ursprüngliche Studientextfassung. Original-CMS-Stand read-only mit `push:false` gelesen: Seite 50, `updatedAt: 2026-11-17T23:42:46.646Z`; alle fünf Originalblöcke direkt im Release eingefroren, ohne Import des veränderlichen Snapshots.

Begrenzte Aufgabenkontexte UX-003 und UX-009 aus `docs/handbook/postfinance-analysis/systematic/catalog.json` gezielt gelesen. Aussagen trennen Kontextwahl, unabhängige Markierung und Folgeaktion. Sie behaupten weder Select-/Combobox-Contracts noch Bulkabschluss, Auswahlpersistenz oder allgemeine Barrierefreiheitsprüfung. shadcn bleibt Referenzimplementierung. Keine Contractrevision, Freigabe oder neue Fähigkeit erfunden.

## Darstellung und Prüfungen

Breit: Aufgabe, Pfeil, Empfehlung und Beispiel in einer Zeile. Mittlere Breite: Beispiel unter Empfehlung. Bis 620px: eine Spalte, Aufgabe über Empfehlung und Beispiel. Alle Fachtexte kommen aus `Page.content`; CSS und Darstellung enthalten keine zweite Auswahlpolicy.

Tatsächlich ausgeführt:

- Browser-Erstprüfung der veröffentlichten Ausgangsseite mit Snapshot und vollständiger Textlesung.
- `npm run typecheck`: erfolgreich nach eigener Implementierung.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts komponenten-auswahl`: read-only Preview erfolgreich, 16 Blöcke, kein CMS-Schreibzugriff.

Dateien: `src/docs/page-reworks/komponenten-auswahl.tsx`, gleichnamiges CSS, `scripts/content/page-reworks/komponenten-auswahl.ts`, dieser Bericht. Gemeinsame Route/Registry/global CSS/Schema unverändert. Kein Commit/Push. Integration und Veröffentlichung durch Root erfolgt. Anschliessende breite und schmale Browserprüfung abgeschlossen (siehe Nachtrag).


## Live-QA nach Veröffentlichung · 20.11.2026

- 1440×1000 über echte CDP-Viewportvorgabe und Screenshots geprüft: vier Aufgaben, Werttypen, Empfehlungen und schematische Beispiele sauber nebeneinander. Checkbox zeigt zwei unabhängig markierbare Optionen als statisches Bild, Switch die direkte Einstellung.
- Beide Details per sichtbarer Oberfläche geöffnet und vollständig gelesen: Quellen/Prüfgrenzen, UX-003/009 sowie sämtliche ursprünglichen Auswahlfragen und die ursprüngliche Studientextfassung vorhanden.
- Nach einer hostweiten Unterbrechung und Root-Neustart 390×844 über echte CDP-Viewportvorgabe geprüft: Button/Input sowie Checkbox/Switch in mehreren Screenshots angesehen; einspaltige Leserichtung, lesbare Beispiele, keine sichtbaren abgeschnittenen Inhalte oder horizontaler Überlauf. Beide Details auch schmal geöffnet und angesehen.
- Alle fünf beobachteten Linkziele im Browser navigiert und jeweilige H1 geprüft: Button, Input, Checkbox, Switch und Auswahl und Suche. Keine neuen Tabs für die Fortsetzung erzeugt. Viewportvorgabe zurückgesetzt; eigene Prüftabs am Ende geschlossen.
- Kein eigener Darstellungsfehler festgestellt; keine Reparatur erforderlich. Der Nachweis gilt für diese zwei Ansichtsgrössen und die genannten Lese-/Navigationsschritte, nicht als allgemeine assistive oder Komponentenprüfung.
