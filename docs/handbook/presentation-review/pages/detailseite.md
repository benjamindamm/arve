# Detailseite · lesbares Beispiel vor Projektvertrag

## Browserbefund

20.11.2026: Öffentlichen Stand `/systems/shadcn/detailseite` mit BrowserOS neo in eigenem Tab 110 gelesen und Screenshot betrachtet. Der erste Bildschirm zeigte Titel, Zusammenfassung und sieben lange Inhaltsverweise. Danach folgten Geltung und eine textuelle Ablaufstudie; ein direkt lesbarer Objektkopf fehlte.

## Änderung

- Statischer Objektkopf «Alpen», P-101, Aktiv; die Links führen zu Erläuterungen und lösen keine Projektaktion aus.
- Typischer Regionsplan erklärt Rückweg, Kopf/Aktionen, Hauptinhalt und bedarfsabhängige Zusatzregion. Keine zusätzliche fachliche Angabe im kleinen Projektobjekt erfunden.
- Drei Regeln; kompakte Varianten Archiviert, bestätigt nicht gefunden und Rückkehr nach Namensänderung.
- Vorhandene präzise Projektregeln einschliesslich Namenlänge, q/status, Fokus, Browser-Zurück, unbekanntem Ladeergebnis und Nachweisgrenzen vollständig im aufklappbaren Vertrag erhalten. Originalstudie und historische Quelldateien unverändert.
- Alle fachlichen Inhalte und Beispieltexte liegen im CMS-Release. Renderer liest ausschliesslich `content`; Links und Regeln auch über das bestehende CMS/MCP-Modell verfügbar.
- Eigenes CSS mit einspaltiger Grundordnung; ab 48rem verfügbarer Inhaltsbreite steht die Aktion daneben und die Zustandsvarianten in drei Spalten. Demonstrationsschwelle ausdrücklich vom früheren 640px-Pilotkriterium abgegrenzt. Keine Haftung, feste Titelhöhe oder Abschneidung.

## Tatsächliche Checks

- Aktuellen veröffentlichten CMS-Datensatz read-only mit `push:false` und PostgreSQL `default_transaction_read_only=on` gelesen: ID 52, `updatedAt=2026-11-20T13:30:59.882Z`, sieben Blöcke.
- `npm run typecheck`: erfolgreich.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts detailseite`: Vorschau erfolgreich, sieben Blöcke; keine Veröffentlichung.
- Abgleich mit gelesenem Original: alle 45 ursprünglichen Textsegmente (einschliesslich Workflowtitel, Schritte, Folgeschritte, Quelle und Linkbeschriftungen) exakt im Release erhalten.
- Nach Root-Veröffentlichung öffentliche Front in BrowserOS neo betrachtet: Alpen/P-101/Aktiv und Aktionsdarstellung sichtbar. Frontlinks tatsächlich angeklickt: `#detail-edit-note` und `#detail-return-note` öffnen die jeweiligen Erläuterungen.
- Vertrag und Quellen tatsächlich aufgeklappt; Name 1–80 Graphemcluster, q/status, Browser-Zurück und Originalquellen im sichtbaren Inhalt gefunden.
- 390 × 844 CSS-Pixel per BrowserOS-CDP emuliert: Screenshot zeigt vollständig lesbaren Objektkopf, darunter Bearbeiten, ohne abgeschnittene Zeile; Zustandskarten stehen untereinander. Gemessen: Dokumentbreite 390, Inhalts-/Objektbreite 350 CSS-Pixel, Aktionsreihe `column`. Kein horizontaler Dokumentüberlauf in diesem Beispiel.
- 1280 × 900 CSS-Pixel emuliert: Dokumentbreite 1280, Aktionsreihe `row`, drei Zustandsspalten zu ca. 281px; Quellen nach Aufklappen lesbar. Emulation anschliessend gelöscht.
- Kein Nachweis ausgeführter Projektaktionen, Persistenz, Produktfokus, langer 80-Graphemcluster-Namen oder Barrierefreiheitskonformität. Die Frontlinks sind Erläuterungsanker, kein ausgeführter Projektrückweg.

Dateien: `src/docs/page-reworks/detailseite.tsx`, `src/docs/page-reworks/detailseite.css`, `scripts/content/page-reworks/detailseite.ts`, dieser Bericht. Durch diesen Seitenauftrag keine gemeinsame Route/Registry, kein Schema und kein CMS geändert; Root hat Integration und Veröffentlichung übernommen. Kein Commit/Push.
