# create · Präsentationsüberarbeitung

## Befund

Öffentliche Seite am 20.11.2026 mit BrowserOS neo geöffnet: nur H1 «create» und ein Nutzensatz, keine Erstellreferenz. Aktueller CMS-Stand über read-only MCP-SDK gelesen: `updatedAt: 2026-11-20T08:57:18.726Z`, `content: []`.

## Änderung

- Leeres Einzelfeldformular zuerst: sichtbares Label, Hilfe, Hauptaktion vor Abbrechen; systemgesetzte ID und Status als Hinweis.
- Vier kompakte, statische Zustandsausschnitte: Feldfehler, laufende Übermittlung, bestätigte Annahme, unbekanntes Ergebnis.
- Kurzer Unterschied zu edit und bestehende Abbruchregeln; vollständigen Vertrag verlinkt. Quellen und Prüfgrenzen aufklappbar.
- Fachtexte vollständig im CMS-Release. Renderer liest die benannten Textblöcke. Keine zusätzliche Regelquelle, keine Speicherung oder vorgetäuschte Statusabfrage.
- Einspaltige Hauptreferenz; unter 640 px verfügbarer Inhaltsbreite Aktionen untereinander, darüber nebeneinander. Zustandsausschnitte auf breiter Fläche in zwei Spalten. Reihenfolge bleibt erhalten.

## Tatsächlich ausgeführte Prüfungen

- Öffentlichen Ausgangsstand und veröffentlichten Formularvertrag im Browser gelesen.
- Aktuellen create-CMS-Stand über read-only MCP-SDK geprüft.
- `npm run typecheck` erfolgreich nach Erstellung von Renderer/CSS/Release.
- Keine CMS-Schreibzugriffe, gemeinsamen Routen oder Registry geändert.

## Browserprüfung nach Veröffentlichung

Am 20.11.2026 nach Root-Veröffentlichung mit BrowserOS neo und tatsächlichem CDP-Viewport geprüft:

- 1440 × 1000: leeres Formular mit Hilfe und Systemhinweis, Aktionen nebeneinander; Zustandsvarianten im Zweispaltenraster. Bestätigte Annahme und unbekanntes Ergebnis sind sichtbar getrennt.
- 390 × 844: Formular und Varianten einspaltig; Projekt erstellen vor Abbrechen gestapelt. Hilfe, Fehlermeldungen und unbekannter Ausgang brechen lesbar um. In den betrachteten Abschnitten keine sichtbare horizontale Abschneidung.
- «Ablauf und Vertrag vertiefen» und «Quellen und Prüfgrenzen» tatsächlich geöffnet; der Snapshot meldet beide als expanded und die Vertragslinks erscheinen.
- Alle drei Inhaltslinks tatsächlich angeklickt und anhand URL und H1 geprüft: edit → page-type-edit/H1 edit, vollständiger Ablauf → formulare-validierung/H1 Formulare und Validierung, Pilotumfang → gestaltungs-pilot/H1 Mit dem Handbuch gestalten. Jeweils zurück zur create-Seite navigiert.
- Kein eigener Darstellungsfehler in diesem begrenzten Prüfumfang festgestellt; keine weiteren Quelländerungen erforderlich.

Noch kein Nachweis für Formularbedienung, Backend, Statusklärung, Fokusführung oder assistive Technik; die Darstellung ist eine statische Gestaltungsreferenz.
