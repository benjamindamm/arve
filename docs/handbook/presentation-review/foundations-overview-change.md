# Grundlagenübersicht · 20. November 2026

## Geändert

Nur `/systems/shadcn/grundlagen`: sieben verlinkte Themen mit schematischer Vorschau und je einem konkreten Auswahlsatz. Reihenfolge: Farbe, Typografie, Abstände, Form und Ebenen, Icons, Bewegung, Themes und Zustände. Titel und Einleitung sind kompakt; Inhaltsverzeichnis, wiederholte Kinderliste und «Weiterlesen» entfallen ausschliesslich auf dieser Übersicht.

Die vorhandene Profilstudie bleibt unverändert als aufklappbare Vertiefung erhalten. Der vorhandene Geltungsbereich steht in einer zweiten Vertiefung. Die Voransichten illustrieren Themen und legen keine neuen Tokens, Bibliotheks- oder Komponentenfreigaben fest.

CMS-Datenquelle: `scripts/content/foundations-overview-release.ts`. Vorhandene study-Blöcke liefern Art, Titel und Auswahlsatz; nachfolgende rich-text-Links liefern Ziele. `src/docs/foundations-overview.tsx` liest diese Daten aus dem veröffentlichten Seiteninhalt. Es importiert keine Release-Texte und enthält keine shadcn-Routen. Die alten Releasequellen wurden nicht umgeschrieben. Fachunterseiten blieben unverändert.

## Veröffentlichung und Schutz

`scripts/apply-foundations-overview-release.ts --publish` aktualisierte ausschliesslich summary/content der veröffentlichten Übersicht (ID 17). Ausgangsversion: `2026-11-17T23:33:02.301Z`; veröffentlicht: `2026-11-20T13:25:11.607Z`. Die Aktualisierung lief mit `push:false`, Status-/Versionsprüfung und Datenbanktransaktion. Andere Felder einschliesslich Contract-/Demo-Verweisen, sämtliche anderen veröffentlichten/Entwurfsseiten sowie Implementierungen wurden vor Commit verglichen und waren unverändert. Ein erneuter Preview-Lauf erkannte den Stand als bereits angewandt.

Der erste Versuch wurde wegen eines Vergleichs zwischen aufgelöster Relation und Relation-ID zurückgerollt. Der Vergleich verwendet nun durchgehend depth:0; der nachfolgende Lauf war erfolgreich.

## Tatsächlich geprüft

- BrowserOS neo, Vorher/Nachher: initiale Desktopansicht 1440 × 1000 und Mobilansicht 390 × 844. Nachher: erste Themen sofort sichtbar; einspaltige Karten mobil; keine sichtbaren abgeschnittenen Kartentexte. Beide unteren Themen ebenfalls gesichtet. Die Profilvertiefung wurde mobil geöffnet und ihr Inhalt zurückgelesen.
- `npm run typecheck`: bestanden.
- `scripts/check-foundations-release.ts`: bestanden. Nutzt für die Übersicht die neue Releasequelle; sämtliche Grundlagen im veröffentlichten Baum, ihre Inhalte über MCP konsistent, keine Vorlagenduplikate; Suche findet Abstände. Für die neue Übersicht zusätzlich direkter Abgleich von Releasequelle, veröffentlichtem CMS-Inhalt und `get_documentation_page`.
- Separater MCP-Abgleich: summary und alle 16 Blöcke identisch zur neuen Releasequelle (generierte Block-IDs ausgenommen).

Keine allgemeine Barrierefreiheits-, Komponenten- oder Browserfreigabe. Kein Commit, Push oder Demo-/Pinwechsel.
