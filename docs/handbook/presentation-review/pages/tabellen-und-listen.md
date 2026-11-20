# Tabellen und Listen

Die veröffentlichte Ausgangsseite wurde am 20.11.2026 über BrowserOS neo gelesen: nur Einleitung, Do/Don't und externer Rechnungslistenweg, kein frühes Beispiel und keine Tabelle/Liste-Entscheidung. Payload-Ausgangsstand read-only mit `push:false`: `2026-11-17T22:33:55.374Z`.

Umsetzung: vier synthetische Projekte, native Tabelle mit Name-/Aufwandsortierung (gleiche Werte nach Projekt-ID), lokale Auswahl per ID, indeterminate Kopfcheckbox und klarer Umfang aller vier sichtbaren Projekte. Getrennte lokale Auswahlvorschau und Zeileninfo; keine Backendaktion. Escape schliesst die native Aktionsoffenlegung, Infoaktion führt zum Auslöser zurück. Statisches Listenbeispiel, drei Regeln, konkrete Zustände sowie ergänzende Verträge und Quellen aufklappbar. Fachtexte und Beispieldaten stehen im CMS-Release. Alte Hinweise bleiben vollständig erhalten.

Breit: Vergleich und Liste in zwei Spalten, Zustände in drei Spalten. Bis 700px stapeln Vergleich/Zustände; die einzige Tabelle scrollt horizontal im beschrifteten Tastaturbereich, keine ausgeblendeten Vergleichsspalten oder doppelten Mobilbedienelemente.

Quellen gezielt gelesen: shadcn/ui Data Table am 20.11.2026 per BrowserOS neo sowie die unveränderten Kandidaten UX-009/010/011/026 aus `docs/handbook/postfinance-analysis/systematic/catalog.json`. Beobachtungsgrenzen von eigener Gestaltung getrennt.

Tatsächlich ausgeführt:
- Ausgangsseite und shadcn-Referenz im Browser gelesen.
- `npm run typecheck`: bestanden nach eigenem Stand.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts tabellen-und-listen`: Preview bestanden, 14 Blöcke, `unchanged:false`; kein CMS-Schreibzugriff.

Browser-QA nach Root-Veröffentlichung am 20.11.2026:
- BrowserOS neo, CDP-Viewport 1440×1000 und 390×844, tatsächliche Screenshots angesehen. Breit vollständige Tabelle; schmal Text und Toolbar passend gestapelt, Tabelle allein horizontal scrollbar. Sichtbarer Fokusrahmen und horizontaler Scroll per Pfeiltaste geprüft; Listenbeispiel stapelt lesbar.
- Einzelauswahl Atlas: Zähler 1/4, aktivierte Vorschau und gemischter Kopfzustand sowohl im Accessibility-Snapshot (`indeterminate`) als auch sichtbar mit Strich bestätigt. Auswahl über Sortierung erhalten. Gesamtwahl 4/4, Teilabwahl und Leeren auf 0/4 mit deaktivierten Aktionen geprüft.
- Aufwand aufsteigend: Birke 5, Delta 5, Campus 8, Atlas 12; absteigend: Atlas 12, Campus 8, Birke 5, Delta 5. ID-Tiebreak für gleiche Werte bleibt deterministisch.
- Zeileninfo Atlas geöffnet: lokale Info mit P-101, keine Datenänderung. Native Zeilenoffenlegung per Escape geschlossen. Auswahlvorschau nennt die tatsächlichen gewählten Namen/IDs.
- Quellen, ergänzender Vertrag und bisherige Referenzhinweise per Tastatur geöffnet; Inhalte und Linkziele im Snapshot bestätigt. Detailmuster-Link aktiviert und Zielseite mit „Ein Projekt im Detail“ bestätigt. Verweise Suchen/Filtern und Systemzustände als Browserziele aufgerufen.

Keine eigenen Darstellungsfehler festgestellt, keine Korrektur nach Veröffentlichung nötig. Der Next-Entwicklungsindikator überdeckte bei einer schmalen Klickprobe die Kopfcheckbox; die Bedienung wurde danach per Tastatur geprüft. Kein Screenreader-/allgemeiner Barrierefreiheitsnachweis, kein Backend-/Pagination-Nachweis. Temporäre Geräteemulation abschliessend entfernt.
