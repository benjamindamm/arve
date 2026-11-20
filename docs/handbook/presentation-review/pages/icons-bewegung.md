# Icons, Bewegung und Ebenen: Themenwegweiser

## Befund und Änderung

Der bestehende Wegweiser enthält bereits die drei richtigen Ziele, beansprucht aber mit einer längeren Einleitung und drei Zwischenüberschriften unnötig Raum. Der Sitemap-Roast (`sitemap-review.json`, Eintrag `/systems/shadcn/icons-bewegung`) benennt seine gleichwertige Position in der primären Navigation als Hauptproblem.

Die alte URL bleibt erhalten. Ein kurzer Hinweis und vier direkte Links führen zu Icons, Bewegung, Form und Ebenen sowie zur Grundlagenübersicht. Die Linkbeschriftungen beschreiben die dort tatsächlich angebotenen Aufgaben. Keine zusätzliche Regelquelle, Studie oder zweite Grundlagenfassung. Der minimale Renderer gibt ausschliesslich CMS-Richtext aus; bestehende Typografie übernimmt die Darstellung ohne neues Layout oder globales CSS.

Empfehlung an Root: den historischen Eintrag aus der primären Themenliste ausblenden. Kein automatischer Redirect auf ein einzelnes Ziel: die drei Themen haben unterschiedliche Ziele. Navigation und gemeinsame Registry wurden hier nicht verändert.

## Tatsächliche Prüfungen

- Öffentliche Ausgangsseite und die drei Zielseiten am 20.11.2026 mit BrowserOS neo gelesen. Ziele enthalten eigenständige Beispiele und konkrete Regeln für die jeweiligen Aufgaben.
- Aktuellen veröffentlichten Inhalt über MCP SDK gelesen; `updatedAt` = `2026-11-17T23:33:02.624Z`.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts icons-bewegung`: read-only Vorschau mit `push:false` erfolgreich, 1 Block; keine CMS-Schreibzugriffe.
- `npm run typecheck`: erfolgreich.
- Nach Root-Veröffentlichung am 20.11.2026 den Live-Stand in BrowserOS neo bei 1440 × 1000 und 390 × 844 CSS-Pixeln als Screenshot angesehen: kurzer Hinweis und alle vier Links sichtbar, schmal umbrechen Titel und Linktexte ohne sichtbaren Beschnitt. Kein neuer Seitenfehler festgestellt.
- Alle vier Inhaltslinks tatsächlich angeklickt und jeweils die passende Ziel-URL sowie die H1 Icons, Bewegung, Form und Ebenen bzw. Grundlagen bestätigt; jeweils zum Wegweiser zurückgekehrt.
- Root hat den historischen Eintrag aus der primären Navigation entfernt; im Desktop-Screenshot stehen dort nur die führenden Themen. Die alte URL bleibt direkt erreichbar.
- Keine gesonderte Tastatur-, Screenreader- oder vollständige Konformitätsprüfung.
