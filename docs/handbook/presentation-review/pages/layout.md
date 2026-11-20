# Layouts · Oberseite

## Befund

Öffentliche Seite am 20.11.2026 zuerst in BrowserOS neo gelesen und als Screenshot angesehen. Raster-/Abstandsprosa und historische Demo-Links stehen vor der eigentlichen Auswahl. Die drei Kategorien erscheinen erst ganz unten als Textlinks.

## Änderung

Drei kleine beschriftete, statische Vorschauen unterscheiden den Zweck (Detailseite), die Gesamtanordnung (Main+Sidebar) und Inhalte innerhalb eines Abschnitts (Label–Value). Je ein Satz und ein Link führen zu den bestehenden veröffentlichten Übersichten. Seitenstruktur und Navigation bleibt direkt darunter erreichbar. Fachtexte, Vorschaubeschriftungen und Ziele kommen vollständig aus CMS-Inhaltsblöcken; der Renderer enthält nur Anordnung und Darstellung.

Die ursprüngliche Rasterstudie bleibt unverändert in geschlossenen Details. Sie stammt aus dem eingefrorenen `scripts/content/handbook-snapshot.json`; der Inhalt wurde mit dem aktuellen MCP-Inhalt verglichen (ids/null entfernt), Übereinstimmung. Es werden keine neuen Layoutregeln oder Rasterwerte festgelegt. Desktop: drei Vorschauen nebeneinander; schmal unter 760 px: untereinander. Das sind Darstellungsregeln dieser Übersicht.

## Dateien

- `src/docs/page-reworks/layout.tsx`
- `src/docs/page-reworks/layout.css`
- `scripts/content/page-reworks/layout.ts`

Root registriert den Renderer als `layout` und veröffentlicht den Release. Keine gemeinsamen Dateien, CMS-Schreibzugriffe, Commits oder Pushes durch diesen Seitenauftrag.

## Tatsächlich ausgeführte Checks

- Aktuellen Inhalt per SDK `get_documentation_page` gelesen, `updatedAt` 2026-11-20T08:39:34.049Z; mit eingefrorenem Originalinhalt verglichen.
- Alle vier Zielseiten im eigenen Browser geöffnet und anhand ihrer Titel und Inhalte geprüft: page-types, page-layouts, content-layouts, seitenstruktur-und-navigation.
- `npm run typecheck`: erfolgreich.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts layout`: read-only Vorschau mit `push:false` erfolgreich, 6 Blöcke; keine Veröffentlichung.
- Nach Root-Veröffentlichung: öffentliche Darstellung in BrowserOS neo mit 1440 × 1000 und 390 × 844 CSS-Pixeln als Screenshots angesehen; mobil zusätzlich ganzseitig. Desktop zeigt drei klar getrennte Vorschauen mit sämtlichen Vergleichslinks; mobil stehen die Vorschauen untereinander. Keine sichtbare Abschneidung oder Überlagerung des Seiteninhalts.
- Die drei Vergleichslinks per Fokus + Enter aktiviert. Ziele `/page-types`, `/page-layouts` und `/content-layouts` erreicht. Die erste Zielseite hatte während der parallelen Überarbeitung bereits einen neuen Vorspann; URL und geladenes Ziel geprüft, der Test auf den alten Vorspanntext traf daher nicht mehr zu.
- Originaldetails auf Desktop und Mobil per Fokus + Enter geöffnet; `[open]` geprüft und ursprüngliche Rasterüberschrift, 640/1024-Angaben sowie Vorhandene Layoutbeispiele gelesen. Geschlossener Ausgangszustand und erhaltene Quellenvertiefung bestätigt.
- Seitenstruktur und Navigation ist direkt unter den Vorschauen erreichbar. Keine Korrektur nach dieser begrenzten Sicht-/Link-/Detailsprüfung erforderlich. Keine allgemeine Bedien- oder Konformitätsfreigabe.
