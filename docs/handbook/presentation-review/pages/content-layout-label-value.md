# Label–Value

Überarbeitet am 20. November 2026. Ein konkretes responsives Beschriftungs–Wert-Beispiel ersetzt die doppelte breite/schmale Lernstrecke. Langer Projektname, Status, mehrzeilige Adresse und fehlende Beschreibung stehen in einem `dl`. Separate kleine Legende unter dem Beispiel; drei Regeln und aufklappbare Quellen im CMS-Release.

Fachgrundlage gezielt gelesen: `src/docs/content-layouts.ts`, `src/docs/content-layout-example.tsx` und Abschnitt 1 der unveränderten Originalstudie `docs/handbook/postfinance-analysis/content-layouts.md`. Beschriftung/Wert breit linksbündig; schmal untereinander. 34-rem-Containergrenze ist eine lokale Referenzentscheidung.

Ausgeführt:
- Öffentlichen Ausgangsstand in eigenem BrowserOS-neo-Tab gelesen: doppeltes Beispiel und vermischte Annotationen bestätigt.
- Aktuellen CMS-Stand mit Payload `push:false`, `draft:false` gelesen: Seite 69, updatedAt `2026-11-20T13:30:59.831Z`.
- `npm run typecheck`: erfolgreich.
- `scripts/apply-page-rework.ts content-layout-label-value` im Preview: erfolgreich, sieben Blöcke.
- Nach Root-Veröffentlichung dieselbe öffentliche URL in BrowserOS neo neu geladen: `/systems/shadcn/content-layout-label-value`.
- Tatsächliche Viewports per CDP gesetzt und Screenshots angesehen: 1440×1000 und 390×844 CSS-Pixel. Breit zwei linksbündige Spalten mit gemeinsamer Wertekante; schmal Beschriftung über Wert. Langer Name vollständig und schmal mehrzeilig; Adresse als drei Zeilen zusammenhängend; «Nicht angegeben» sichtbar. Keine vermischten Annotationen oder doppelten breiten/schmalen Beispiele.
- Schmal nach unten gescrollt und Quellen-Disclosure per sichtbarer Schaltfläche geöffnet; drei Regeln, Legende und Quellentexte vollständig über Seitenlesung geprüft. Quellen sind Text, keine fachlichen Quellenlinks. Die sichtbaren globalen Links wurden im Snapshot mit ihren Zielen gelesen; keine Zielnavigation geprüft.
- Viewport-Override nach Prüfung aufgehoben.

Begrenzter Nachweis: visuelle Prüfung dieser statischen Beispieldaten in zwei Fenstergrössen, keine allgemeine Barrierefreiheits-, Browser- oder Gerätefreigabe. Kein eigener CMS-Schreibzugriff, keine gemeinsame Registry oder Route geändert.
