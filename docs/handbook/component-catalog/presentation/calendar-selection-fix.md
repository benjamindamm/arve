# Calendar: Auswahlart zuerst

Stand: 21. November 2026. Bibliothek shadcn, unveränderte Exportrevision `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`.

## Änderungen

- `src/docs/comparisons/forms-feedback-data.ts`: Einzeltermin (12. November), mehrere unabhängige Termine (12. und 19.) und Zeitraum (14.–16.) stehen zusammen und ohne Aufklapper zuerst. Gleicher Monat November 2026, gleicher beschrifteter Ausschnitt 8.–21., gleiche Standardzellen mit 38 px. Gesperrter 13. und heutiger 21. bleiben gemeinsamer Kontext.
- Standard/Kompakt/Gross, Monatsliste, Kalenderwochen und nichtinteraktive Darstellung bleiben unter «Dichte und Anzeige vergleichen» verfügbar. Standard/Kompakt/Gross behalten dieselbe Einzeltermin-Auswahl. Keine Range-Wiederholung unter Zuständen: gesperrter Tag und Tastaturfokus sind offen; der ausgeblendete Tag hat einen eigenen benannten Aufklapper. Fokus auf dem 19. bei Auswahl des 12. ist eine redaktionelle Illustration der belegten Trennung, kein neuer Laufzeitnachweis.
- `forms-feedback.tsx`: Die bestehende ID-Namenspräfixierung veränderte auch die CSS-Klasse `ff-calendar-excerpt`. Für Calendar wird diese Klasse wiederhergestellt; die lokale Scrollbegrenzung greift dadurch tatsächlich.
- `forms-feedback.css`: Nur Calendar-spezifische Anpassungen: Breite der statischen Illustration, ausreichend mobile Innenbreite und drei gleichartige Spalten ab 1440 px. Bei 360/390 stehen die Bilder einzeln. Keine Schrift-/Zellverkleinerung. Gross und Kalenderwochen können innerhalb des Bildes horizontal scrollen.
- Ergänzender enger Auftrag: Ausschliesslich das Combobox-Zustandslabel «Weitere Vergleiche» in «Weitere Auswahlzustände, Fehler und Sperren» konkretisiert. Keine neue Combobox-Komposition.

Keine Änderungen an Paket, Pin, CMS, Snapshot oder Author-JSON durch diesen Worker. CMS-Hinweis und gemeinsamer Seitenrenderer gehören zum Root-Auftrag.

## Quellen und Grenzen

Paketrelative Calendar-Quellen: `library/components/calendar/{component.json,interface.json,layout.css,behavior.scxml,accessibility.html,stories.json,ux.json}`. Die in den Vergleichsgruppen geführten SHA-256-Werte wurden gegen die Paketdateien geprüft. Alle referenzierten Illustrationsschlüssel existieren.

`ux.json` beschreibt die tatsächliche DayPicker-Union absent/single/multiple/range und Date/Date[]/DateRange. Ergänzend gelesen: `library/sources/react-day-picker-9.14.0/dist/esm/types/props.d.ts.source` sowie `selection/useMulti.js.source`. Mehrfachauswahl ist ein explizit redaktionelles Beispiel, keine behauptete ausgeführte Multiple-Story. Die Range-Story führt 14.–16. November; Standardreferenz führt Auswahl 12., disabled 13., today 21. Die deutschen Zweiwochenausschnitte sind Darstellungsbearbeitungen, keine unveränderten Originalfixtures.

Fokusbefund: `library/sources/shadcn/apps/v4/registry/bases/base/ui/calendar.tsx.source` erstellt in CalendarDayButton einen Ref und versucht bei `modifiers.focused` zu fokussieren, hängt diesen Ref aber nicht an Button. Zum Vergleich hängt `library/sources/react-day-picker-9.14.0/dist/esm/components/DayButton.js.source` den Ref tatsächlich an. `ux.json` dokumentiert den ausdrücklichen `components.DayButton`-Calleradapter als Referenzkorrektur und den unveränderten Wrapper als negative Regression. Der frühe CMS-Hinweis «Vor dem Einsatz: Tastaturbedienung prüfen … Fokusfehler … dokumentierte Korrektur … Einbindung prüfen» entspricht diesem Befund. Die statischen Bilder beheben und testen die Tastatursteuerung nicht.

## Tatsächlich ausgeführte Prüfungen

- `npm run typecheck`: erfolgreich nach Daten- und Wrapperänderungen; danach nur Calendar-CSS um die Desktop-Spaltenregel ergänzt.
- SHA-256-Abgleich aller Calendar-sourceReferences und Existenz aller Calendar-Specimen-Schlüssel: erfolgreich.
- BrowserOS neo, eigene Seite 787, Portal `http://127.0.0.1:3010/systems/shadcn/components/calendar`, echte Screenshots visuell betrachtet bei 360×800, 390×844 und 1440×1000. Die drei Auswahlarten stehen im selben Vergleich offen; Desktop zeigt sie gemeinsam in einer Zeile, mobil einzeln. Kein beobachteter Buchstabenbruch. Dokumentbreite/Scrollbreite identisch: 360/360, 390/390, 1440/1440. Schrift der Calendar-Bilder jeweils 14 px.
- Auswahlbilder lokal ohne horizontalen Überlauf: 360 px verfügbar 283 px; 1440 px je Bild 298 px. Bei geöffneten Optionen an 360: Gross benötigt lokal 352 statt 283 px, Kalenderwochen 320 statt 283 px; die Dokumentbreite bleibt 360. An 390 entsprechend 352/313 und 320/313. Standard und Kompakt visuell mit identischer Auswahl geprüft.
- «Dichte und Anzeige vergleichen» und «Ausgeblendeten Tag vergleichen» geöffnet, expandierten Zustand und zugehöriges Bild im Accessibility-Snapshot bestätigt. Disabled/Fokus-Bilder visuell geprüft.
- Nach Root-CMS-Veröffentlichung frühen Warnhinweis vor der Illustration bei 390 und 360 visuell geprüft; Link «Zur Fokuskorrektur» verweist auf den vorhandenen Abschnitt. Kein MCP-/Static-Nachweis durch diesen Worker; Root prüft diese Ausgaben separat.

Keine Builds, Commits oder Pushes. Keine allgemeine ARIA-/AT- oder Runtime-Freigabe aus diesen begrenzten Darstellungsprüfungen.
