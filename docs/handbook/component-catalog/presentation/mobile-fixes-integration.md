# Mobile Reviewkorrekturen: Tooltip, Calendar, Input

Stand: 21.11.2026. Bibliothek shadcn, veröffentlichter Pin `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`. Drei frische Bereichsagenten plus gemeinsame Integration. Kein Commit oder Push in dieser Runde.

## Änderungen

- Tooltip: Seitliche Positionsbeispiele bekommen in schmalen Vergleichscontainern je eine volle Zeile. Oben/unten bleiben kompakt. Der Text erhält seine Inhaltsbreite; 12-px-Schrift bleibt unverändert. Popover/Hover Card wurden als Nachbarn geprüft.
- Calendar: Einzeltermin, mehrere unabhängige Termine und zusammenhängender Zeitraum sind in der ersten sichtbaren Gruppe zusammengefasst. Ihre kurzen Einsatzhinweise nennen Liefertermin, Kurstage und Abwesenheit. Dichte und Anzeige folgen gezielt aufklappbar; Bereichsauswahl wird nicht mehr als Zustand geführt. Gesperrter Tag und Fokus bleiben getrennt, Hidden separat auffindbar. Kalenderzellen und 14-px-Schrift bleiben erhalten; grosse Ausschnitte scrollen lokal statt abgeschnitten zu werden. Eine fehlerhafte Präfixierung der Calendar-Wrapperklasse wurde korrigiert.
- Calendar-Einsatzbedingung: Ein früher, aus dem CMS gelesener Hinweis vor dem ersten Bild benennt den Fokusfehler des unveränderten React-Wrappers und verweist auf die vorhandene Korrekturbeschreibung. Dies ist **keine Reparatur oder Freigabe einer Runtimeimplementierung**. Die dokumentierte Caller-Korrektur und Einbindungsprüfung bleiben Voraussetzung.
- Combobox: Der Aufklapper heisst jetzt „Weitere Auswahlzustände, Fehler und Sperren“ statt eines unspezifischen Titels.
- Input: Der Variantenabschnitt beginnt mit Aufgabe und erwartetem Wert. Technische React-/Browser-/className-Grenzen bleiben im Semantikabschnitt erhalten.

## CMS und Übertragbarkeit

Der Kalenderhinweis verwendet einen normalen Lexical-Zitatknoten mit fettem Titel und Link, den Payloads vorhandener Editor unterstützt. Das gemeinsame Handbook zeigt einleitende Zitate im Beispiel vor der Illustration; es enthält keinen hart codierten Calendar-Warntext. Die optionale Authoring-Eigenschaft `notice` wird in dieses Standardformat umgewandelt. Keine neue Datenbankspalte, Migration oder externe Repoverbindung.

Veröffentlichungsvorschau und Anwendung betrafen genau Calendar und Input. Snapshot-Abgleich gegen die gesicherte Vorgängerversion: andere 114 Seiten, Systemdaten, Vertragspins, Implementierungen und Medien unverändert. Innerhalb Calendar ist nur der Hinweis im Beispiel ergänzt; bei Input sind Varianten und Semantik redaktionell angepasst. Neuer Snapshot-SHA256 `615bd1446f9fb0b6bf075cdd7d571e227cf63a8b81e23e39470a0d399d889e7d`. Vorgänger `c99e26f5390915ceebdbe113605bc71cd2b55d84f37b4ebaef00dfc76361e057`.

## Ausgeführte Prüfungen

- Tooltip-Agent: 360×800, 390×844 und 1440×1000 tatsächlich visuell geprüft; geöffnete Zusatzpositionen und geschlossen/geöffnet sowie Popover/Hover Card. Seitliche Textspans jeweils rund 99,54×18 px bei unveränderten 12 px, statt vorher 0×288 px. Kein Seitenüberlauf beobachtet.
- Calendar-Agent: 360, 390 und 1440 visuell geprüft; drei Auswahlarten, Dichteaufklapper, lokale Scrollbereiche und frühe CMS-Voraussetzung. Desktop drei Modi nebeneinander; mobil lesbar untereinander. Quellen-/Schlüsselkonsistenz und Typecheck geprüft.
- Input-Agent: Quellenprüfung sowie veröffentlichter Varianten-/Semantiktext bei 360 und 390 visuell nachgeprüft.
- Zentral zusätzlich im finalen statischen Export: Tooltip-Zusatzpositionen wirklich geöffnet und bei 360/390 visuell angesehen; Textspans jeweils 99,54×18 px. Calendar-Voraussetzung vor dem Bild bei 390 visuell angesehen; Auswahlgruppe bei 360 visuell sowie bei 390 geometrisch geprüft. Alle drei Label/Inhalte vorhanden, Schrift 14 px; Dokumentbreite und scrollWidth gleich dem jeweiligen Viewport.
- Produktionsbuild erfolgreich. Nach letztem rein redaktionellem Schliff an drei Einsatzbeschreibungen finalen statischen Build mit Typecheck erneut ausgeführt, erfolgreich. Bestehende Warnung zum breiten Paketdateimuster in `library-skills.ts` unverändert.
- Alle 69 MCP-Vergleichsantworten gegen gemeinsamen Helper geprüft, einschliesslich Bibliotheks-/Revisions-/Komponentengrenzen und 453 Quelldateihashes. Calendar-MCP enthält die editierbare Voraussetzung als Zitat und die drei Auswahlarten zuerst.
- Alle 69 veröffentlichten redaktionellen Inhalte über MCP gegen Authoringdaten exakt geprüft. Calendar und Input zusätzlich gegen den neuen Snapshot geprüft. Button-Vorlagenprüfung weiterhin bestanden.
- Alle 69 statischen Komponenten geprüft: vollständige Vergleiche/Übersichten, anfangs geschlossene Zusatzansichten, gefüllte Specimens, sichere Bildinhalte, eindeutige IDs und erreichbare Disclosures. Neue Calendar-Prüfungen sichern gemeinsame erste Auswahlgruppe, kein Range-Bild im Zustandsabschnitt und Voraussetzung vor erster Illustration.
- Statische Gesamtprüfung: 198 HTML-Dateien, 116 Handbuchseiten, 69 Komponenten, 58'174 interne Links, 2'955 Contractassets; Basis `/arve`, ohne Backend.

Die begrenzten Sicht- und Geometrieprüfungen sind keine allgemeine Accessibility-, Runtime- oder Plattformfreigabe. Originalverträge und ursprüngliche Implementierungsbindungen bleiben unverändert.

## Belege

- [Tooltip](tooltip-mobile-fix.md)
- [Calendar](calendar-selection-fix.md)
- [Input](input-design-guidance.md)
- `mobile-fixes-verification-mcp.json`
- `mobile-fixes-verification-static.json`

## Implementierungshashes

- `src/docs/comparisons/navigation-layers-data.ts`: `763a7bc122e4b38cf7afd436c778843ecaf8638c8f286fd8e33bd9f5fe6a07cb`
- `src/docs/comparisons/navigation-layers.css`: `ca67ecb562edccc1cee565f86b3f833653058772d21531c3ae37cea12752359c`
- `src/docs/comparisons/forms-feedback-data.ts`: `694381eacbe33224421915641a0de4e22a9e907a13c29484ef2dd2a35526de84`
- `src/docs/comparisons/forms-feedback.tsx`: `b2e0e7e6111313fd2422dc0c3df8f21ad8a6a3b2b46b7ee114fa0daaeee00a08`
- `src/docs/comparisons/forms-feedback.css`: `f7e2df1536c8711f9b89df0c230fbdccdb9e348eeb4d42036e83072c5896d9c5`
- `src/docs/component-editorial.ts`: `2c7b6a0f297264dd105745a01bb6a9c88878b3d6385859ae6cf4274d97d9ce33`
- `src/docs/component-handbook.tsx`: `f2320b329aa5c3dd173088d04fe9dc0741aabd03a2967b6901b396e597689f45`
- `src/docs/component-handbook.css`: `12b75eecb5374fc93f03e0d12315ddf107071ea7d6cbec65fc9840057b5cef01`
- `scripts/content/component-docs/calendar.json`: `3e9eadb38990d5d91484632e4a3ecf1bc1129a0a524084134b4a06a689b3eca9`
- `scripts/content/component-docs/input.json`: `81f633e214cc240405e057f72a5e196f14a9a43e546cbb69b6b1f6516b72b0a1`
