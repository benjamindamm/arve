# Seitenstruktur und Navigation

## Befund und Änderung

Am 20.11.2026 die öffentliche Seite zuerst in einem eigenen BrowserOS-Tab gelesen. Der bisherige Stand zeigte eine kurze Tabs-Erklärung und Do/Don’t, aber kein Seitenrahmenbeispiel, keinen sichtbaren Ort oder Rückweg und keine Gegenüberstellung der Navigationsformen.

Der neue Einstieg zeigt globale Navigation, aktuellen Ort, lokalen Bereich und Hauptbereich als beschriftetes Schema. Drei echte Schaltflächen wechseln zwischen Tabs-, Sidebar- und Card-Anordnung und zeigen die passende Entscheidungshilfe. Die schematischen Navigationsbeschriftungen sind keine künstlichen Links. Der Rücklink führt zu einem sichtbaren Suchkontext mit Suche, Filter, Seite und Listenposition; das Suchpattern bleibt fachführend verlinkt. Es folgen drei Regeln und aufklappbare Quellen/Prüfgrenzen.

Alle fachlichen und beispielhaften Beschriftungen kommen aus CMS-Blöcken des Releases. Der Renderer hält nur Anordnung und lokales Auswahlverhalten. Unter 38 rem verfügbarer Breite stehen beide Navigationsebenen vor dem Hauptinhalt; die lokale Sidebar erscheint ab 38 rem daneben. Diese Grenze ist eine lokale Studie.

## Ausgeführte Prüfungen

- Aktuellen CMS-Inhalt am 20.11.2026 über den lesenden MCP-Aufruf `get_documentation_page` geladen; `updatedAt`: `2026-11-20T09:07:26.485Z`.
- `npm run typecheck`: bestanden nach Erstellung der drei Seitendateien.
- Veröffentlichten neuen Stand nach zentraler Einbindung in BrowserOS geprüft: Screenshots bei 1440 × 1000 und 390 × 844 tatsächlich über CDP emuliert und visuell angesehen. Seitliche lokale Navigation breit; gestapelte Navigation und Hauptbereich schmal, keine sichtbare Überlagerung oder abgeschnittenen Beispieltexte.
- Alle drei Schema-Schaltflächen betätigt; jeweils passende Entscheidungshilfe im Snapshot bestätigt. Zusätzlich per Tab/Enter von Sidebar zu Cards gewechselt; sichtbaren Fokus am anschliessenden Rücklink geprüft.
- Rücklink betätigt: URL erhielt die reale Ergebnis-Kontextmarke, der sichtbare Bereich enthält Suche, Status, Seite und Eintrag. Das ist ein Ankersprung zur Illustration, kein Nachweis tatsächlicher Zustandswiederherstellung.
- «Quellen und Prüfgrenzen» geöffnet; alle drei neutral beschrifteten shadcn-Quellen und ihre Zieladressen im Browser bestätigt.
- Ansichtsgrössen-Emulation nach Prüfung zurückgesetzt. Keine eigenen Darstellungsfehler gefunden.

## Grenzen

Keine CMS-Schreibzugriffe, gemeinsamen Dateien, Registry-Änderungen oder Veröffentlichung durch diesen Seitenauftrag. Die Vorschau ist kein vollständiger Navigationsvertrag und implementiert weder eine echte Anwendungssuche noch Zustandswiederherstellung. Eine allgemeine Tastatur-/Screenreaderfreigabe wird nicht behauptet.
