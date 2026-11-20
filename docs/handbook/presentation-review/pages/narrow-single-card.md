# Narrow Single Card

## Befund

Am 20.11.2026 öffentliche Route `/systems/shadcn/narrow-single-card` mit BrowserOS neo geöffnet. Sichtbar waren der Seitentitel und ein leerer Absatz, kein Layoutbeispiel. CMS read-only mit `push:false` und `default_transaction_read_only=on` gelesen: veröffentlichte Seite 63, `updatedAt: 2026-11-20T08:39:34.010Z`, leeres `content`.

## Umsetzung

- Renderer und lokales CSS in `src/docs/page-reworks/narrow-single-card.{tsx,css}`; Release in `scripts/content/page-reworks/narrow-single-card.ts`.
- Breite gedämpfte Seitenfläche mit horizontal zentrierter Card (`width:100%;max-width:28rem`) und separater schmaler Vorschau (maximal 22 rem). Keine Card um die gesamte Dokumentation.
- Eine kurze Aufgabe mit Titel, Hilfe, benanntem Eingabefeld und zwei Aktionen. Lokales Übernehmen/Zurücksetzen mit Statusmeldung; keine Projektspeicherung. Schmale Vorschau zeigt längere Titel, Labels, Hilfen und Aktionsnamen. Unter 26 rem Beispielbreite wechseln Aktionen in volle Breite untereinander; Mindesthöhe 44 px.
- Drei konkrete Regeln, Einsatz/Vermeidung und Unterschied zu Wide Single Card. Alle fachlichen Texte sowie sämtliche Formulartexte aus CMS-Inhalt. Quellen und Prüfgrenzen eingeklappt.
- Originalstudie `docs/handbook/postfinance-analysis/README.md` belegt Narrow Single Card ausdrücklich nicht als eigenständige beobachtete Seite. Neue Beispiele und Breitenentscheidungen entsprechend als lokal/synthetisch bezeichnet.

## Tatsächliche Checks

- Öffentlichen Ausgangsstand im eigenen BrowserOS-Tab geprüft.
- Aktuellen veröffentlichten CMS-Datensatz read-only gelesen.
- `npm run typecheck`: erfolgreich.
- Keine CMS-Schreibzugriffe, Registryänderung, Commits oder Pushs.
- Nach Root-Veröffentlichung mit BrowserOS neo bei 1440×1000 und 390×844 CSS-Pixeln visuell geprüft: breite Card zentriert mit deutlich sichtbarem Aussenraum; schmal volle verfügbare Breite innerhalb der Abstände. Lange Überschrift, Hilfe und Feldbeschriftung umbrechen, lange Aktionen stehen untereinander; kein sichtbares horizontales Überlaufen. Fokusumrandung am Feld sichtbar.
- Beide lokalen Formulare bedient: Eingabe und Übernehmen erzeugen «Name in der Vorschau übernommen.»; Zurücksetzen stellt den Ausgangswert mit eigener Statusmeldung wieder her. Der stets sichtbare Hinweis erklärt die lokale Vorschau, die Quellen nennen ausdrücklich keine Projektspeicherung.
- Quellen/Prüfgrenzen geöffnet und gelesen. Root hat die öffentliche Quellenbenennung neutralisiert; keine Quellenlinks im Seiteninhalt vorhanden. Browser-Navigationslinks wurden im Snapshot angesehen, keine fremden Zielseiten aufgerufen.
- Während laufender gemeinsamer Entwicklung kurz fehlende Beispielstile gesehen; nach Reload wieder vollständig dargestellt, Abschlussprüfung mit geladenen Stilen.
- Keine vollständige Screenreader-, Zoom- oder Übersetzungsprüfung. Browsernachweis gilt nur für diese beiden Ansichtsgrössen und die beschriebenen Aktionen.
