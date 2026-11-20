# Stacked Section Cards · Seitenüberarbeitung

## Befund

Die öffentliche Seite am 20. November 2026 im eigenen BrowserOS-neo-Tab gelesen: nur Titel und Einzeiler, kein Beispiel oder Regelinhalt. Anschliessend den veröffentlichten CMS-Stand mit Payload `push:false` gelesen: ID 66, `updatedAt: 2026-11-20T08:57:18.751Z`, `content: []`.

## Änderung

- Echtes CSS-Beispiel: gemeinsamer Projektkopf, darunter Übersicht, Termine und Unterlagen als drei gleich breite Abschnittskarten mit gemeinsamer Aussenkante. Termine und Unterlagen bleiben Zeilen innerhalb ihres Themas.
- Breite und auf 25 rem begrenzte schmale Komposition enthalten dieselben CMS-Texte. DOM-Reihenfolge und sichtbare Reihenfolge bleiben Kopf → Übersicht → Termine → Unterlagen. Unter 32 rem Containerbreite werden innere Angaben einspaltig; der Kartenstapel bleibt immer vertikal.
- Native Langfassung in der Übersicht, langer Termin und langer Dokumenttitel; keine festen Höhen oder eigenen Scrollflächen. Drei Regeln erläutern Objektkontext, Aussenkante/Reihenfolge und die Alternative einfacher Abschnitte ohne Karten.
- Sechs CMS-Blöcke halten alle Fachtexte und Beispielbeschriftungen. Quellen und Prüfgrenzen sind im Renderer aufklappbar. Keine Herkunftsfirma im öffentlichen Inhalt.

## Quellen

Gezielt gelesen: lokale visuelle Layoutanalyse `mapping.md`, Abschnitt «Layouts und Varianten»; Inventarhinweise V02 und V20; historischer CMS-Snapshot sowie aktueller veröffentlichter CMS-Stand. Die Projekttexte und CSS-Masse sind neue synthetische Studien; keine Aussage über einen beobachteten Technologiestack oder Bibliotheksfreigaben.

## Tatsächliche Checks

- `npm run typecheck`: erfolgreich, 20. November 2026.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts stacked-section-cards`: read-only Vorschau mit `push:false` erfolgreich; sechs Blöcke, Modus `preview`.
- Keine CMS-Veröffentlichung, keine Registry-/Routenänderung und kein Commit durch diesen Worker.

## Browser-QA nach Veröffentlichung

Am 20. November 2026 nach Root-Veröffentlichung die eigene öffentliche Seite in BrowserOS neo geprüft:

- Tatsächliche Viewports 1440 × 1000 und 390 × 844 mit CDP gesetzt; Screenshots des oberen, mittleren und unteren Inhalts angeschaut, auch die drei Regeln und den geöffneten Quellenblock bis zum Footer.
- Beide Langfassungen per sichtbarem Disclosure geöffnet und im Snapshot als `expanded` nachgewiesen. Lange Absätze wachsen vollständig im normalen Fluss; Termine und Unterlagen folgen darunter. Quellen öffnen sich ebenfalls und bleiben in beiden Breiten lesbar.
- Übersicht → Termine → Unterlagen in beiden Beispielen visuell und über Überschriften/Regionen im Accessibility-Snapshot geprüft. Auf breiter Fläche stehen innere Fakten nebeneinander; bei 390 px sind Fakten und Terminangaben gestapelt. Gemeinsame Kartenkanten erhalten, keine beobachteten Überläufe oder abgeschnittenen eigenen Inhalte.
- Der eigene Beispielinhalt enthält keine Links und keine Downloadziele; die Unterlagen sind wie angekündigt statische Beispielzeilen. Die Seitennavigation zeigt das korrekte eigene Ziel `/systems/shadcn/stacked-section-cards`; globale Navigationsziele wurden nicht einzeln besucht.
- Keine Korrektur erforderlich. Viewportoverride anschliessend aufgehoben und eigenen QA-Tab geschlossen. Keine zusätzlichen CMS-Schreibzugriffe.

Dieser Nachweis umfasst die zwei genannten Viewports und die sichtbaren geöffneten Zustände. Vollständige Tastatur-/Screenreaderprüfung, alle Schriftvergrösserungen und beliebig lange Inhalte bleiben ungeprüft.
