# 4-column Card Grid · Überarbeitung

Browserbefund am 20.11.2026: Die öffentliche Seite zeigte nur Titel und einen Kurzsatz. Kein Beispiel, keine Umbruchregel und keine Spannen waren sichtbar. Aktueller CMS-Stand über MCP gelesen: `2026-11-20T08:41:38.924Z`, leerer Inhalt.

Ergebnis: sechs synthetische Cards in echtem CSS Grid, breite Reihen 2+1+1 / 4 / 2+2. Vier Grundspalten mit variabler Zeilenzahl; der historische Slug bleibt. Lokale Containergrenzen 32 rem / 52 rem ergeben 1 / 2 / 4 Spalten. Cards bleiben in Inhaltsreihenfolge, werden oben ausgerichtet und erhalten keinen Masonry-Nachfluss. Beispiel zuerst, danach vier kompakte Regelabsätze; Quellen und Prüfgrenzen aufklappbar. Sämtliche Beispiel- und Regeltexte stammen aus dem CMS-Release.

Quellengrundlage: bestehendes Layout-Mapping in `docs/handbook/postfinance-analysis/mapping.md` und die responsive Einordnung in der zugehörigen README gezielt gelesen; Originalanalyse unverändert. Abstände, Grenzen und Beispieldaten ausdrücklich als lokale Referenzentscheidungen bezeichnet.

Tatsächliche Checks:

- Öffentlichen Ausgangsstand im eigenen BrowserOS-neo-Tab gelesen.
- `npm run typecheck`: erfolgreich.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts card-grid-4x4`: reine Vorschau mit `push:false` erfolgreich, neun Blöcke, kein CMS-Schreibzugriff.
- Nach Root-Veröffentlichung BrowserOS neo mit tatsächlicher CDP-Viewportemulation bei 1440×1000 und 390×844 geprüft: breit alle sechs Cards als Reihen 2+1+1 / 4 / 2+2 sichtbar; schmal alle sechs Cards beim Scrollen in einer Spalte und Reihenfolge 01–06. Unterschiedliche Cardhöhen bleiben oben ausgerichtet. Keine sichtbare Textabschneidung oder horizontale Überbreite in den geprüften Ausschnitten.
- Quellen-Details schmal geöffnet und Inhalt über Browserstruktur/Lesetext sowie Screenshot geprüft. Viewport danach zurückgesetzt, eigener Prüftab geschlossen. Die Zwischenstufe mit zwei Spalten und vollständige Tastatur-/Screenreader-Nutzung wurden nicht separat getestet. Kein Darstellungsfix erforderlich.

Schreibumfang: `scripts/content/page-reworks/card-grid-4x4.ts`, `src/docs/page-reworks/card-grid-4x4.tsx`, zugehörige CSS-Datei und dieser Bericht. Keine gemeinsame Route, Registry oder Schema geändert. Kein Commit/Push.
