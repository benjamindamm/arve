# Icons · Seitenüberarbeitung

## Browserbefund
Am 20.11.2026 zuerst den öffentlichen Stand `/systems/shadcn/icons` in eigenem BrowserOS-Tab gelesen: statische dreiteilige Suchzeichen-Studie, danach sieben lange Abschnitte. Status ohne Farbabhängigkeit und dekorative Zeichen wurden nur im Fliesstext erklärt.

## Änderung
Vier sichtbare Anwendungen: Icon mit beschriftetem Link; benannte Informationstaste mit einblendbarem Hinweis; statische Erfolg-/Fehlerdarstellung mit unterschiedlichen Zeichen und Text; dekoratives Schmuckzeichen neben vollständiger Überschrift. Alle SVGs sind bei der Ansage ausgeblendet; die Taste erhält ihren Namen aus dem CMS und meldet ihren aufgeklappten Zustand. Zwei Spalten auf breiter Fläche, eine unter 640 px. Fachtexte, Labels und die vollständige Erklärung der ursprünglichen Suchzeichen-Studie liegen im Release-CMS-Inhalt. Originalstudien bleiben unverändert. Quellen und Prüfgrenzen stehen unten in Details; keine Iconbibliothek oder allgemeine Grössenskala wird behauptet.

## Tatsächliche Checks
- Aktueller veröffentlichter CMS-Datensatz read-only mit Payload, `push:false` und Datenbank-Lesemodus gelesen: `updatedAt = 2026-11-17T23:33:02.566Z`.
- Ursprüngliche Studie in `scripts/content/foundations-release.ts` und `src/docs/foundation-studies.tsx` gezielt gelesen, daneben FND-ICO in `docs/handbook/content-standard/foundations-components.md`.
- WAI-Erläuterungen zu Non-text Content und Use of Color am 20.11.2026 im Browser gelesen.
- `npm run typecheck` erfolgreich nach Erstellung.
- Keine CMS-Schreibzugriffe, keine Registry-/Routenänderung, kein Commit.
- Browserprüfung nach Veröffentlichung siehe unten. Keine allgemeine Konformitätsaussage.

## Browser-QA nach Veröffentlichung
Am 20.11.2026 den integrierten Renderer in BrowserOS bei 1440 × 1000 und 390 × 844 CSS-Pixeln geprüft. Desktop zeigt zwei Spalten, schmal eine 350-px-Inhaltsspalte; visuell keine abgeschnittenen Zeichen oder Texte. Bei 390 px bleibt die Dokumentbreite auch mit geöffneten Quellen bei 390 px, ohne horizontalen Überlauf.

Informationstaste mit Fokus und Enter geöffnet und wieder geschlossen; Hinweis erscheint und verschwindet, zugänglicher Name wechselt zwischen Anzeigen/Ausblenden, `aria-expanded` wird im Zugänglichkeitsbaum bestätigt. Sichtbarer Tastaturfokus im schmalen Screenshot erkennbar. Quellendetails geöffnet, Text gelesen, Umbruch visuell geprüft und wieder geschlossen. Status und Dekoration in schmaler Ansicht ebenfalls visuell geprüft. Kein eigener Korrekturbedarf gefunden. CMS/MCP-Gleichstand wurde durch Root geprüft und gemeldet; dieser Abschnitt bestätigt ausschliesslich die genannten Browserchecks.
