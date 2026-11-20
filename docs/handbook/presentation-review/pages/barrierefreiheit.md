# Barrierefreiheit · Darstellungsreview

## Ausgangsbefund

Am 20. November 2026 eigene BrowserOS-neo-Seite geöffnet: `/systems/shadcn/barrierefreiheit`. Acht ausführliche CMS-Blöcke erklären bereits sinnvolle Aufgaben und differenzierte Grenzen. Es fehlt ein anschauliches Beispiel; die Aufgabe/Ergebnis-Zuordnung ist in langen Absätzen schwer zu überblicken.

CMS read-only per `get_documentation_page`, system `shadcn`, section `barrierefreiheit`: `updatedAt = 2026-11-18T00:12:33.294Z`.

## Änderung

- Statisches Fehlerformular als erstes Beispiel; explizit als schematische Darstellung ohne Funktions- oder Prüfnachweis bezeichnet.
- Vier klar getrennte Prüfaufgaben mit erwartbarem Ergebnis: Tastatur/Fokus, Labels/Fehler, Zustände/Ergebnis, Reflow/Zoom/Kontrast.
- Drei kurze Gestaltungsregeln, sichtbare Prüfgrenzen und aufklappbare Originalaufträge/Quellen.
- Alle acht ursprünglichen CMS-Blöcke literal im Release eingefroren, einschließlich historischer Prüfgrenzen und Quellen; kein Snapshot-Liveimport.
- Fachtexte ausschließlich aus dem CMS-Release. Breite Ansicht: Formular/Annotation und Aufgabe/Ergebnis jeweils nebeneinander; unter 720 px jeweils einspaltig. Keine fixierte Höhe für Text, lange Meldungen umbrechen.

## Tatsächlich ausgeführte Prüfungen

- Eigener BrowserOS-neo-Ausgangsabruf und Inhaltsansicht der öffentlichen Seite.
- `npm run typecheck`: erfolgreich (Exit 0).
- Node-Assertions: acht eingefrorene Originalblöcke exakt gleich dem read-only MCP-Ergebnis; erwarteter CMS-Zeitstempel korrekt; zwölf Gesamtblöcke und Renderer-Datenlängen bestätigt.

## Browserprüfung nach Veröffentlichung

Am 20. November 2026 in eigenem BrowserOS-neo-Tab nach Root-Integration ausgeführt:

- Tatsächliche Viewports per CDP: 1440 × 1000 und 390 × 844; Screenshots direkt erfasst und visuell betrachtet.
- Desktop: Beispiel mit Annotationen und Aufgabe/Ergebnis jeweils zweispaltig, großzügige Zeilenabstände; alle vier Prüfbereiche lesbar. Statische Natur des Beispiels ausdrücklich oberhalb erklärt.
- Schmal: Beispiel/Annotation und alle vier Aufgabe/Ergebnis-Paare untereinander; Texte vollständig umbrechend, keine abgeschnittenen Zeilen in den betrachteten Abschnitten.
- Überlauf über CDP-Layoutmetriken: `cssContentSize.width = 1440` am Desktop und `390` in der schmalen Ansicht; jeweils gleich Viewportbreite.
- Originaldetails fokussiert und mit Enter geöffnet sowie wieder geschlossen. Sichtbarer blauer Fokusring; AX-Snapshot meldet expanded/collapsed korrekt und nach Öffnung alle acht Originalüberschriften sowie Quellenlinks.
- Viewport-Override nach Prüfung zurückgesetzt. Keine Darstellungsreparatur erforderlich.

## Grenzen

Der Tastaturnachweis betrifft nur das Originaldetails-Element dieser Handbuchseite. Keine Screenreader-, Textzoom-, Kontrast-, Touch- oder Serverprüfung einer Produktumsetzung durchgeführt. Die schmale Darstellung ist kein vollständiger Reflow- oder Zoomnachweis. Keine CMS-Schreibzugriffe durch den Seitenagenten, keine Änderungen an Route/Registry/Schema und kein Commit/Push.
