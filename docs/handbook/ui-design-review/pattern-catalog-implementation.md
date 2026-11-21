# Patternkatalog: Suche und Auswahl überarbeitet

20. November 2026 · Umsetzung von Befund 4 des UI-Reviews

## Ergebnis

Der Katalog beginnt mit einer kurzen Zweckzeile und der Grenze «Beobachtete Kandidaten · keine freigegebenen Regeln oder lokal bedienbaren Beispiele». Suche und beide Filter stehen direkt darunter. Bei 390 × 844 beginnt das Suchfeld bei rund 405 px, bei 1440 × 1000 bei rund 338 px. Die vollständige ursprüngliche CMS-Summary und Katalogeinleitung bleiben gemeinsam unter «Über diesen Katalog» erhalten. Nur auf dieser Werkzeugseite entfällt der zusätzliche lokale Abschnittsindex; Kapitelpfad und Handbuchnavigation bleiben bestehen.

Die Liste zeigt unveränderten Titel und Aufgabe statt wiederholter ID-, Status- und Tagzeilen. Die aktive Auswahl erhält eine seitliche Markierung, einen Punkt und `aria-pressed`. ID, Kategorie, tatsächliche Tags und Kandidatenstatus stehen im Detail. «Ohne Tags» entfällt als sichtbare Negativmetadatenzeile. Quellen und Beobachtungsgrenzen sind dort weiterhin aufklappbar. Patterntexte, IDs, Daten und Reifegrad wurden nicht verändert.

Desktop zeigt Liste und ein mitlaufendes Detail nebeneinander. Die Liste folgt dem normalen Seitenscrollen. Schmal öffnet eine Auswahl einen nativen, benannten Dialog mit «Zurück zur Auswahl». Escape und der Rückkehrknopf schliessen ihn; Fokus und vorherige Listenposition bleiben erhalten. Der Hintergrund ist währenddessen inert und sein Scrollen gesperrt. Eine Medienabfrage entscheidet über die Darstellung, keine Geräteerkennung. Es werden nicht sämtliche Ablaufdetails ausgerollt.

Suchtext, Kategorie und Tag werden gemeinsam angewendet. Verschwindet eine Auswahl aus den Treffern, wird der erste sichtbare Treffer zur tatsächlichen Auswahl. Ein späterer Reset reaktiviert dadurch kein altes, ausgefiltertes Pattern. Nulltreffer zeigen eine Erklärung und «Alle Kandidaten zeigen», ohne alten Ablauf. Zurücksetzen führt den Fokus ins Suchfeld.

## Dateigrenzen

- `src/docs/page-reworks/patterns.tsx`: Suche, Auswahl, gemeinsame Detaildarstellung und mobiler Dialog.
- `src/docs/page-reworks/patterns.css`: Kataloglayout, Fokus-/Auswahlzustände und Dialog.
- `src/docs/page-reworks/registry.ts`: optionales Summary-Prop.
- `src/app/(docs)/systems/[system]/[section]/page.tsx`: ausschliesslich für shadcn/patterns Lead sekundär übergeben und lokalen Index auslassen. Vorhandene Änderungen am gemeinsamen Rahmen erhalten.

Keine CMS-Schreiboperationen, neue Routen oder Patterns; keine Contract-, Export-, Pin- oder Tagänderungen. Kein Commit oder Push.

## Tatsächlich ausgeführte Prüfung

- `npm run typecheck`: bestanden.
- `npm run build`: bestanden, einschliesslich TypeScript und Routengenerierung.
- `git diff --check`: bestanden.
- Root-Prüfung `check-page-rework.ts patterns`: PASS; Source, CMS und MCP identisch, HTTP 200. Dieser Nachweis wurde vom koordinierenden Agenten ausgeführt und gemeldet.
- BrowserOS neo: eigener Tab; CDP `Emulation.setDeviceMetricsOverride` und `Page.captureScreenshot` im selben Lauf, `deviceScaleFactor:1`, `mobile:false`. Alle unten verlinkten Aufnahmen wurden tatsächlich angezeigt und visuell betrachtet.

| Zustand | Bild |
| --- | --- |
| Desktop, Suche und aktive Auswahl | [1440 × 1000](screenshots/pattern-catalog-1440.png) |
| Schmale Liste und Filter im ersten Viewport | [390 × 844](screenshots/pattern-catalog-390.png) |
| Nativer Detaildialog mit sichtbarem Fokus | [390 × 844](screenshots/pattern-catalog-detail-390.png) |
| Nulltreffer mit Suchfokus und Rücksetzweg | [390 × 844](screenshots/pattern-catalog-empty-390.png) |

Bedient und geprüft: Textsuche einschliesslich ID, Kombination «Filter» + «Finden» + «filters» (1 von 28), keine Treffer (0 von 28), beide Rücksetzwege (28 von 28), mehrere Details und aufklappbare Beobachtungsgrenzen. Desktopauswahl per Enter; jeweils genau eine aktive Zeile und passender Ablauf. UX-020 wählen, nach UX-002 suchen, zurücksetzen: UX-002 bleibt ausgewählt. Nach Nulltreffern stehen weder aktive Zeile noch alter Ablauf im Detail. Reset setzt Fokus auf das Suchfeld.

Mobil: Dialogtitel und Rückkehrknopf im Accessibilitybaum, anfänglicher Fokus auf dem Rückkehrknopf, Escape und Rückkehrknopf mit Fokus auf der auslösenden Patternzeile. Beim Öffnen einer tiefen Listenzeile blieb die Seitenposition vor und nach dem Dialog identisch (`scrollY:2463.5`); Hintergrund-Overflow wechselte von `visible` zu `hidden` und zurück. Filterwerte und Suchtext bleiben bei der Rückkehr erhalten. In den geprüften schmalen Zuständen kein horizontaler Seitenausbruch. Viewportemulation zum Abschluss aufgehoben und eigener Tab geschlossen.

## Grenzen

Repräsentative Prüfung in zwei Fensterbreiten, kein reales Touchgerät. Keine unabhängige fachliche Freigabe, vollständige Screenreader-, Tastatur-, Zoom-, Kontrast- oder WCAG-Prüfung. Die natürliche Liste enthält weiterhin alle 28 Kandidaten; die unten folgenden Erläuterungen und Fachseitenverweise bleiben erhalten. Der lokale Next.js-Entwicklungsschalter ist in den Bildern sichtbar.
