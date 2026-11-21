# Content layouts · redaktionelle Lektüre

Die gesamte Release und der zugehörige Renderer wurden gelesen: Zusammenfassung, drei Aufgabenbeschreibungen, sämtliche Texte der Miniaturen, Links und die drei Absätze unter «Quellen und Darstellungsgrenzen». Grundlage waren zudem der Redaktionsauftrag, der Auditbericht und der eigene Auditabschnitt (0 konkrete Befunde).

Die verständlichen Texte bleiben unverändert. «Eigenschaften eines Eintrags anzeigen» erklärt Label–Value direkt; die Zusammenfassung unterscheidet die Anordnung innerhalb einer Card von Page layouts für die gesamte Seite. Auch Form Layout und Card Header sind knapp und konkret erklärt. Es gibt deshalb keine künstlichen Vorher/Nachher-Ersetzungen.

Bewusste Namen, Beispielwerte Alpenblick und Mara Keller, alle Beschriftungen, drei Miniaturen, vier Blöcke, drei Detailseitenlinks, Quellenstand und Darstellungsgrenzen bleiben erhalten. Die Erläuterungen unterscheiden statische Beschriftungen von bedienbaren Funktionen und verkleinerte Anschauung von verbindlichen Produktmassen. Renderer, Reihenfolge und Zeilenzahlen wurden nicht geändert.

## Prüfungen

- Frischer read-only MCP-Abruf am 20. November 2026: `get_documentation_page`, `system: shadcn`, `section: content-layouts`; `updatedAt: 2026-11-20T14:08:28.181Z` in die Release übernommen.
- Vor der Redaktion waren veröffentlichte Zusammenfassung und Inhalt identisch zur Release; der Vergleich ignorierte lediglich CMS-IDs und Nullwerte.
- Eingehende Ankerlinks auf `/systems/shadcn/content-layouts#` im Repository gesucht; keine Treffer. Sämtliche Überschriften bleiben unverändert.

- `npm run typecheck` erfolgreich.
- `git diff --check` für die eigenen Dateien erfolgreich.
- `node scripts/check-page-rework.ts content-layouts` erfolgreich: Release/CMS/MCP gleich, öffentliche Seite HTTP 200, neutrale Quellenbezeichnung.

## Browserkontrolle

Nach Roots Bestätigung des unveränderten veröffentlichten Inhalts wurde die ganze Seite in BrowserOS neo bei echten 1440 × 1000 und 390 × 844 CSS-Pixeln geprüft. «Quellen und Darstellungsgrenzen» war geöffnet; Einstieg, drei Miniaturen, Aufgabenbeschreibungen, Linktexte und alle drei Vertiefungsabsätze wurden gelesen. Die Miniaturen stehen am Desktop nebeneinander und mobil untereinander. Beschriftungen und Fliesstexte brechen ohne sichtbaren Textverlust um. Kein sprachlicher Restbefund. Keine zusätzlichen Funktionstests ausgeführt. Viewport danach zurückgesetzt und eigener QA-Tab geschlossen.
