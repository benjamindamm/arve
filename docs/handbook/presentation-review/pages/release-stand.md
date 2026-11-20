# Releases und Migrationen

## Ausgangsbefund

Am 20. November 2026 zuerst die öffentliche Seite mit BrowserOS neo im eigenen Tab 173 gelesen. Der Snapshot zeigte den Titel und zwei Überschriften, aber keine sichtbaren Erläuterungen oder ein Beispiel. MCP `get_documentation_page(system:shadcn, section:release-stand)` lieferte den vollständigen Originalblock und `updatedAt: 2026-11-13T12:43:02.842Z`; der Block ist im Release literal eingefroren, ohne Import des veränderlichen Handbuchsnapshots.

## Änderung

Eine konkrete, ausdrücklich angenommene Button-Änderungsfolge beginnt die Seite. Danach unterscheiden drei lesbare Zeilen die Payload-Seitenfassung, den festen Contractexport und das Komponentenpaket mit eigenem Implementierungsnachweis. Das reale Button-Beispiel zeigt bewusst verschiedene Contractbezüge: Komponentenseite `65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26`, historischer Implementierungspin `fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d`, Paket `@spartan-ng/brain 1.9.0` (Web-Preview). Keiner dieser Bezüge wird geändert. Kurze Prüfregeln und Links zu Mitwirken, technischer Anbindung und Referenzpflege vermeiden wiederholte Prozessbeschreibungen. Quellen, Grenzen und Original stehen aufklappbar. Sämtliche Fachtexte kommen aus dem CMS-Release.

Breit: drei Beispielschritte, zwei reale Vergleichsfelder nebeneinander; unter 800px: je eine Spalte, Labels über Erklärungen und lange Hashes umbrechend. Nur die vier zugewiesenen Dateien wurden erstellt, keine Registry und kein gemeinsames CSS geändert.

## Tatsächlich ausgeführte Checks

- `npm run typecheck` erfolgreich.
- `git diff --check` erfolgreich (erfasst Änderungen im gemeinsamen Arbeitsbaum, nicht die noch unversionierten neuen Dateien).
- Vorschau mit `node --env-file=.env --import=tsx scripts/apply-page-rework.ts release-stand` erfolgreich: `mode:preview`, sieben Blöcke, Ausgangszeitpunkt passt; Payload mit `push:false`, keine Veröffentlichung.
- Aktuelle veröffentlichte Fachquelle über MCP gelesen; Button-Bezüge und Prüfgrenzen über `get_component_page` gezielt geprüft (Seitenstand `2026-11-20T15:06:42.364Z`).
- Mechanik gelesen: `Pages.ts`, `Implementations.ts`, `component-pages.ts`, `published-documentation.ts`, MCP-Route und `import-contract-library.mjs`. Keine Releaseautomatik, Changelogfunktion oder Teamfreigabe behauptet.

Root hat Renderer eingebunden und veröffentlicht. Live-QA ist abgeschlossen. Kein neuer Export, Pakettest, Implementierungsnachweis, CMS-Schreibzugriff, Commit oder Push ausgeführt.


## Live-QA nach Veröffentlichung

Am 20. November 2026 die veröffentlichte Fassung in eigenem BrowserOS-Tab 180 geprüft. Per CDP gesetzte 1440×1000 und 390×844 CSS-Pixel mit `Page.captureScreenshot` tatsächlich angesehen; nach dem Setzen der Grösse jeweils Snapshot vor Aufnahme für die abgeschlossene Anpassung verwendet. Breit stehen drei Beispielschritte nebeneinander; schmal stehen sie untereinander. Die drei Stände sind lesbar getrennt. Beide realen Contracthashes werden in ihren Vergleichsfeldern ohne Abschneiden umgebrochen, schmal untereinander. Keine eigene Darstellungsreparatur erforderlich.

Den Quellen-/Originalbereich fokussiert und mit Enter geöffnet. Snapshot bestätigt expanded und beide Originalüberschriften; Screenshot zeigt den sichtbaren Fokusrahmen und die eingeblendete Mechanikquelle. Vollständigen Text einschliesslich historischem Original über Browser-read geprüft. Das ist eine begrenzte Tastatur-/Darstellungsprüfung, kein allgemeiner Barrierefreiheitsnachweis.

Alle vier internen Linkadressen im Snapshot geprüft und ihre Zielantworten mit HTTP200 verifiziert. Technische Anbindung zusätzlich aus der Release-Seite angeklickt und korrekten Zielpfad sowie Seitentitel beobachtet. `node --import=tsx scripts/check-page-rework.ts release-stand` erfolgreich: Release/CMS/MCP gleicher Inhalt, öffentliche Seite HTTP200, neutrale Quelle. Emulation anschliessend zurückgesetzt. Kein neuer Implementierungs- oder Contractnachweis entstanden.
