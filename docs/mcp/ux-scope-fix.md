# UX-Regeln und lokales Projektbeispiel

## Umfang dieses Workers

Bearbeitet: `scripts/content/page-reworks/gestaltungs-pilot.ts`, `scripts/content/page-reworks/formulare-validierung.ts` und die jeweils gleichnamigen Renderer unter `src/docs/page-reworks/`. Keine CMS-Schreibzugriffe, Publikation, Contract-, Export-, Snapshot- oder MCP-Änderungen; keine CSS-Änderung. `expectedUpdatedAt` bleibt für den separaten Abgleich mit der aktuellen CMS-Baseline unverändert.

## Befund und Änderung

- **Gestaltungs-Pilot:** Der bisherige Einstieg machte Downloads und dasselbe Projekt in Suche, Detail und Formular zum allgemeinen Arbeitsweg. Jetzt stehen allgemeine UX-Regeln zu Aufgabe, Kontext, Verlustschutz und belegten Ergebniszuständen zuerst. Danach folgt ausdrücklich das lokale Web-Projektbeispiel. Vorlagenarbeit, Datenmodell, Farben und Pixelmasse bleiben konkrete Pilotfestlegungen.
- **Formulare und Validierung:** Die bisherigen «Drei Regeln» begannen mit der lokalen Grenze von 1–80 Zeichen; der Layoutabsatz schrieb 640 px ohne frühe Grenze vor. Jetzt stehen allgemeine UX-Regeln vor einem eigenen Abschnitt «Festlegungen für das Projektbeispiel». Die Regeln zu Feldgrenze und Prüftakt sowie die Layoutanordnung sind unmittelbar als lokale Webreferenz bezeichnet. Ein Vorspann direkt vor der bestehenden Vertiefung ordnet auch URL-Parameter, Fokusziele und Dialogtasten der Referenz zu.
- Die Unterscheidung laufend / bestätigt / ausdrücklich abgelehnt / unbekannt, die notwendige Klärung vor erneutem Senden oder Verwerfen sowie Kontext- und Verlustschutz bleiben verbindlich beschrieben. Es wird keine Wiederherstellung versprochen, die der Pilot nicht bietet, und keine native Umsetzung oder Prüfung behauptet.
- Die bereits bestehende Vertiefung von `formulare-validierung.ts` bleibt bytegleich. Die beiden Renderer zeigen die allgemeinen Texte vor der Vorschau; ein reiner neuer CMS-Block wäre durch die bisherigen festen Blocknamen unsichtbar geblieben. Verwendet werden vorhandene Textblöcke und Textsektionen, kein neues Schema.

## Read-only geprüfte Nachbarseiten

`page-type-create`, `page-type-edit`, `content-layout-form-layout` und `content-design`: fachlich dieselben Pilotbedingungen. Bei create/edit/Form Layout erscheinen einzelne konkrete Vorgaben bereits vor der späteren Quellenabgrenzung. Diese Seiten wurden auftragsgemäss nicht geändert. Ihre eigenständige frühe Abgrenzung ist damit nicht nachgewiesen; die neuen Verweise ersetzen keine Prüfung dieser Seiten.

## Ausgeführte Prüfungen

- Release-Import und gezielte Assertions: allgemeine Regeln zuerst, Ergebniszustände und Klärung vor Wiederholung/Verwerfen enthalten, keine Namens- oder Pixelgrenzen im allgemeinen Block; neue Renderer-Aufrufe vor der Vorschau.
- Bytevergleich der Formular-Vertiefung mit `HEAD`: identisch.
- `npm run typecheck`: zunächst fehlgeschlagen ausserhalb des Umfangs, `src/docs/published-documentation.ts:63:11` (`string | null | undefined` versus `string | undefined`). Keine Fehler in den vier bearbeiteten Dateien gemeldet. Ein späterer Gesamtlauf ist separat zu dokumentieren.
- Browser-, Mobil- und CMS/MCP-Prüfung des neuen veröffentlichten Stands noch nicht durch diesen Worker ausgeführt; dazu braucht es die separate geschützte Veröffentlichung. Keine Laufzeit- oder Barrierefreiheitsfreigabe.
