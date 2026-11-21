# shadcn-Systemstartseite überarbeitet

20. November 2026 · gezielter UI-Durchgang für `/systems/shadcn`

## Gestaltung

Der Kopf benennt System und Dokumenttyp: «shadcn Handbuch». Der kurze Lead erklärt das Angebot und seine gemeinsame Nutzung: Regeln, Gestaltungsvorlagen und Komponentenbeispiele für Weboberflächen, mit denen ein Team Entwürfe abstimmen und die Umsetzung vorbereiten kann. Die Referenzimplementierung wird im abschliessenden Standhinweis als Zusammenspiel von Regeln und Bausteinen erklärt.

Ein einziger empfohlener Einstieg führt zu «Mit dem Handbuch gestalten» (`gestaltungs-pilot`). Die Aktion «Projektablauf ansehen» steht vor den Details und der Vorschau. Sie kündigt die vorhandenen editierbaren SVG-/FIG-Vorlagen in breiten und schmalen Ansichten samt Regeln an. Statische Entwürfe, ausstehende Anwendung und unabhängige Teamprobe werden unmittelbar dort benannt.

Die Vorschau verdichtet die vorhandene Pilotdarstellung: dasselbe Projekt «Alpen», ID P-101, Status Aktiv, von Suche über Detail bis zum Namensfeld. Es sind einfache statische HTML-Ansichten mit sichtbarer Kennzeichnung, keine bedienbaren Formularfelder oder neue Anwendung. Auf Desktop stehen die drei Ansichten neben dem Einstieg, schmal untereinander mit zugeordneten Schrittbezeichnungen. Keine Grafik oder Exportdatei wurde verändert.

Die bisher gleichrangigen Aufgabenkarten wurden zu zwei kompakten Linklisten unter «Direkt nachschlagen». Page types, Page layouts, Patterns und Content Design behalten ihre englischen Kategorien. Das Formularbeispiel bleibt als untergeordnete Vertiefung erreichbar. Alle bisherigen zehn Ziele bleiben zugänglich; jede Verknüpfung wird weiterhin gegen den veröffentlichten Dokumentationsbaum geprüft. Fehlt der Pilot, wird sein Einstieg ausgeblendet und der Formularlink separat angeboten.

## Dateien und Grenzen

- `src/docs/shadcn-home.tsx`
- `src/docs/shadcn-home.css`
- Dieser Bericht und vier eigene PNG-Belege.

Die bestehenden uncommitteten Arbeiten wurden erhalten. Keine Änderung an CMS-Inhalten, Fachseiten, gemeinsamem Handbuchrahmen, Routes, Contracts, Pins oder Designexporten. Kein Commit oder Push.

## Ausgeführte Prüfungen

- `npm run typecheck`: bestanden.
- `npm run build`: bestanden, einschliesslich TypeScript und Routengenerierung.
- `git diff --check`: bestanden.
- BrowserOS neo, eigener Tab, 1440 × 1000 und 390 × 844 CSS-Pixel, `deviceScaleFactor: 1`, `mobile: false`. `Emulation.setDeviceMetricsOverride` und `Page.captureScreenshot` wurden jeweils im selben Lauf verwendet. Die folgenden finalen PNGs wurden tatsächlich ausgegeben und visuell angesehen:

| Ansicht | Erster Viewport | Vollständige Seite |
| --- | --- | --- |
| 1440 × 1000 | [Bild](screenshots/shadcn-home-1440-viewport.png) | [Bild](screenshots/shadcn-home-1440-full.png) |
| 390 × 844 | [Bild](screenshots/shadcn-home-390-viewport.png) | [Bild](screenshots/shadcn-home-390-full.png) |

Bei 390 sind Zweck, konkreter empfohlener Einstieg und Startaktion vollständig im ersten Viewport sichtbar. Gemessene CTA-Oberkante 548 px, Unterkante 592 px; Dokumentbreite 390 px bei 390 px Fensterbreite. Die ganze Seite zeigt geordnet umbrechende Beschriftungen und drei lesbare, zugeordnete Projektansichten. Desktop setzt den Einstieg vor die kompakteren Nachschlagelisten.

Alle zehn sichtbaren Inhaltslinks samt Zielpfaden im Browser ausgelesen und mit den bisherigen Zielen abgeglichen. «Projektablauf ansehen» tatsächlich angeklickt; Zielseite mit «Vom Suchergebnis zum Formular», denselben Projektdaten, den acht SVG-/FIG-Downloads und ihren Grenzen geladen und gelesen. Die übrigen neun Ziele wurden in diesem Durchgang nicht einzeln geöffnet. Keine Datenmutationen.

Dies ist eine gezielte Layout- und Navigationsprüfung in zwei Browserbreiten, keine umfassende Tastatur-, Screenreader-, Zoom-, Kontrast- oder WCAG-Prüfung und keine reale Touchgeräteprüfung. Der lokale Next.js-Entwicklungsschalter bleibt sichtbar. Bei einem unmittelbaren Breitenwechsel lieferte der Browser zunächst einen veralteten Bildinhalt; dieser wurde verworfen. Die gespeicherten finalen Bilder zeigen die jeweils korrekte Breite.

Viewportemulation aufgehoben und eigener Browsertab geschlossen.
