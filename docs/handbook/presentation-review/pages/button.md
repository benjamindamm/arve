# Button · Seitenüberarbeitung

## Ausgangsbefund

Öffentliche Seite am 20. November 2026 in BrowserOS neo gelesen. Eine grosse statische Studie und fünf Textabschnitte standen vor der bedienbaren Spartan-Demo. Die echte Demo bietet Default, Outline und Deaktivierung. Web ist `preview`, der technische Contract `draft`.

## Umsetzung

- Echte vorhandene `ComponentDemo` als erster Inhaltsabschnitt `live-beispiel`, mit `demo.key`, `demo.label`, `demo.variant` aus dem CMS; keine nachgebaute Button-Demo.
- Drei kurze Regeln zu Zweck, Hierarchie und Beschriftung; danach konkrete Varianten- und Zustandswahl.
- Quellen/Prüfgrenzen sowie unveränderte ursprüngliche Studie und Fachtexte aufklappbar. Fachtexte liegen ausschliesslich im Release/CMS, Renderer liest sie daraus.
- Regeln breit dreispaltig, unter 48rem einspaltig. Demo-Steuerung darf umbrechen, lange Beschriftung bleibt lesbar.
- Read-only CMS-Ausgangsstand mit `push:false`: `2026-11-20T07:48:51.882Z`; Originalblöcke im Release eingefroren, kein Snapshot-Liveimport. Nur `blockName` zur Zuordnung ergänzt.
- Vier Domänenquellen gezielt gelesen: `interface.json`, `layout.css`, `behavior.scxml`, `accessibility.html` in shadcn-Revision `65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26`. Keine Contracts/Pins verändert.

## Tatsächlich ausgeführte Checks

- `npm run typecheck`: erfolgreich.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts button`: read-only Vorschau erfolgreich, zehn Blöcke, `unchanged:false`; keine CMS-Schreibzugriffe.
- Ausgangsseite im Browser gelesen.

## Browser-QA nach Veröffentlichung · 20. November 2026

- Öffentliche Seite nach Root-Veröffentlichung in eigenem BrowserOS-Tab neu geladen; echte Spartan-Demo vorhanden, nur ein Live-Beispiel.
- Klick und Enter lösten «Beispielaktion ausgelöst.» aus. Leertaste mit tatsächlichem Leerzeichen ebenfalls erfolgreich (die Browser-Key-Bezeichnung `Space` allein löste in diesem Werkzeug keinen Nachweis aus).
- Default und Outline ausgewählt; Auswahl im Accessibility-Snapshot bestätigt. Outline mit Tastaturfokus visuell geprüft, Fokusring sichtbar.
- «Deaktiviert» schaltete den echten Button laut Accessibility-Snapshot auf disabled und leerte die Aktivierungsmeldung. Nach Zeigerinteraktion blieb die Meldung leer. Nach Reaktivierung funktionierte die Leertaste erneut.
- Screenshots mit echten 1440×1000 und 390×844 CSS-Pixeln via CDP betrachtet: Demo und Steuerung passen in die Breite; Regeln stehen breit in drei Spalten, schmal untereinander. Default und Outline mit Fokus im schmalen Bild lesbar; kein erkennbarer Überlauf im geprüften ersten Inhaltsbereich.
- Quellen/Prüfgrenzen sowie Originalstudie auf- und deren Inhalte gelesen; übrige fünf Original-Fachdetails geöffnet. Quellen und ursprüngliche weiterführende Links weiterhin vorhanden.
- `node --import tsx scripts/check-page-rework.ts button`: Release/CMS/MCP gleich, öffentliche Seite HTTP 200, neutrale Quelle.
- Begrenzte Browserprobe; keine allgemeine Barrierefreiheits-, Mobilgeräte- oder Contract-Freigabe. Keine Änderungen an Demo, Contracts oder Pins während QA nötig.
