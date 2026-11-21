# Weiterarbeiten nach der Komponentenwahl

Die neue gemeinsame Sektion verbindet die gewählte Komponente mit höchstens drei nächsten Schritten: vorhandenen Quellenentwurf herunterladen, den Einsatz im Ablauf gestalten und den Implementierungsstand prüfen. Sie steht zwischen Gestaltungsteil und technische Nachweise. Die Darstellung besteht aus einer nummerierten Textliste mit unmittelbaren Links. Die Einordnung als FIG-Quellenentwurf ohne Bibliotheksfreigabe bleibt sichtbar; ausführliche Geltungshinweise stehen gemeinsam im geschlossenen Abschnitt „Hinweise zur Weiterverwendung“.

## Ableitung und Grenzen

- `src/docs/component-next-steps-data.ts` enthält alle Labels, URLs, Beschreibungen und Geltungshinweise. `src/docs/component-next-steps.tsx` rendert ausschliesslich diese Daten, sodass die Portal- und MCP-Antworten dieselben nächsten Schritte erhalten können.
- Ein FIG-Download wird nur aus dem exakten vorhandenen Artefakt `components/<component>/<component>.fig` des Seitencontracts abgeleitet. Die Datei ist ein Quellenentwurf, keine pauschal freigegebene Figma-Bibliothek. PNG und SVG werden nicht als editierbarer Designimport ausgegeben.
- Die zusätzliche Projektpilot-Zuordnung ist ausdrücklich auf shadcn beschränkt: Aktionen/Eingabefelder → Formulare und Validierung; Auswahl/Tabellen → Suchen und Filtern. Calendar erhält keine erfundene Datumsaufgabe im Projektpilot. Der allgemein veröffentlichte Patternkatalog bleibt ein möglicher Einstieg.
- Pilot, Pattern und Framework-Übersicht werden nur bei vorhandenem veröffentlichtem Dokumentationspfad verlinkt. Registrierte Pilotressourcen werden über `designResources()` wiederverwendet; der Link führt zur bewussten Formatwahl auf der Pilotseite. Kein automatischer Download.
- Plattformstand und Framework-Referenzen bleiben getrennt. Die Daten nennen fehlende Implementierungen, vorhandene Release-Status und unterschiedliche Contractrevisionen. Quellenstand und Implementierungsfreigabe sind ausdrücklich verschieden.
- Portal-Links verwenden `SiteAnchor`; der Datenhelper gibt ebenfalls `sitePath`-URLs für MCP aus. Die statischen Contractdateien verwenden die Bibliotheks-ID, Portaldateien die System-ID.

## Ausgeführte Prüfungen

- `npm run typecheck`: erfolgreich nach Anlegen der drei neuen Quelldateien.
- Erneuter Typecheck nach der Disclosure-Anpassung: durch `scripts/adopt-component-catalog.ts:47:108` blockiert (`string | null | undefined` an `string`). Kein Fehler aus diesem Arbeitsbereich. Der Hauptagent wurde informiert; dessen abschliessende Projektprüfung bleibt massgeblich.
- Reine Helper-Prüfungen mit Node/tsx und Assertions: Fremdsystem ohne Dokumentationsrouten ergibt nur den tatsächlichen Plattformanker; weiteres Fremdsystem mit PNG-Vorschau und eigenem Patternkatalog erzeugt keinen FIG-Link und keinen shadcn-Pilotlink; registrierter shadcn-Select-Weg hat maximal drei Schritte und führt zu den vorhandenen Pilotvorlagen.
- Separater statischer Helper-Lauf mit `NEXT_PUBLIC_ARVE_STATIC=1` und `NEXT_PUBLIC_ARVE_BASE_PATH=/arve`: alle Links enthalten den Präfix genau einmal; ein System mit abweichender Contractbibliothek erhält den korrekten statischen Bibliothekspfad. Keine lokalen Dateisystempfade in den ausgegebenen Daten.

- BrowserOS neo auf dem integrierten Portal, eigene Prüfseite 796: Button, Select, Calendar und DataTable bei tatsächlich gemessenen 360, 390 und 1440 CSS-px. Dokumentbreite und Scrollbreite stimmten in allen zwölf Messungen überein; kein Link der neuen Sektion überschritt den Viewport. Je drei Schritte, Disclosure anfänglich geschlossen, vorhandener Plattformanker auf jeder Seite.
- Screenshots der Weiterarbeiten-Sektion bei den drei Breiten visuell geprüft. Schmal stehen die Links untereinander; breit bleiben die nummerierten Textschritte ohne zusätzliche Cards. Calendar verlinkt nur den veröffentlichten Patternkatalog, keinen erfundenen Pilot-Datumsablauf.
- DataTable-Disclosure über die sichtbare Oberfläche geöffnet und den geöffneten Zustand mit den Geltungshinweisen geprüft.
- Die verlinkten Ziele Suchen und Filtern, Formulare und Validierung, UX-Patterns, Frameworks und Gestaltungspilot im Browser geöffnet: jeweils HTTP 200 und erwartete Seitentitel. Pilotanker `#designvorlagen` vorhanden. FIG-Downloadlinks zeigen auf die jeweilige vorhandene Datei und tragen das Downloadattribut; keine Datei automatisch heruntergeladen.
- Emulation anschliessend entfernt und eigene Prüfseite geschlossen. Keine fremden Tabs verändert.

Begrenzte Prüfung der neuen Darstellung und veröffentlichten Wege; keine umfassende assistive Abnahme, keine Laufzeitfreigabe einer Komponentenimplementierung. Kein Designwerkzeugimport, Build, Commit, Push oder neue Quellenrevision durch diesen Arbeitsbereich. Die drei Quelldateien sind für die Root-Integration eingefroren.
