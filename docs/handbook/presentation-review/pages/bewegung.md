# Bewegung · Seitenüberarbeitung

## Befund und Änderung

Öffentliche Seite am 20.11.2026 zuerst in BrowserOS neo geöffnet: sieben Vorablinks, drei abstrakte A-Standbilder und lange Regelabsätze. Der sichtbare Unterschied erläuterte keine konkrete Aufgabe.

Der neue Einstieg zeigt denselben Kontakt geschlossen und geöffnet; die neu sichtbare E-Mail macht das Ergebnis erkennbar. Eine native, freiwillig zu öffnende Vorschau zeigt die Details einmalig. Schliessen entfernt den animierten Inhalt. Die lokale Option «Ohne Bewegung anzeigen» und `prefers-reduced-motion` unterbinden die Animation. Kein automatischer Start, keine Schleife und keine Fokusverschiebung durch Skripte. Die 300 ms gelten ausschliesslich für diese Gestaltungsstudie, ohne neue Dauer- oder Kurvenskala. Alle fachlichen Texte kommen aus den CMS-Blöcken.

Drei kurze Entwurfsentscheidungen und ein konkreter Prüfweg stehen sichtbar. Unveränderte Originalstudie und Originaltexte bleiben unter «Quellen, Grenzen und ursprüngliche Studie». Breite Ansicht: zwei gleich breite Standbilder; bis 600 px: einspaltig. Vorschau und E-Mail umbrechen ohne feste Inhaltsbreite.

## Tatsächlich ausgeführte Prüfungen

- Browserbefund der ursprünglichen öffentlichen Seite; WAI-Originalquelle zu SC 2.3.3 erneut gelesen (20.11.2026).
- Aktuellen veröffentlichten CMS-Inhalt read-only über Payload mit `push:false` geladen. `updatedAt`: `2026-11-17T23:33:02.581Z`. Die sieben Originalblöcke stimmen nach Normalisierung von Schlüsselreihenfolge, IDs und Nullfeldern mit `foundationsRelease` überein.
- `npm run typecheck`: erfolgreich.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts bewegung`: Vorschau erfolgreich, 12 Blöcke; kein CMS-Schreibzugriff.

## Grenzen

Nach Root-Veröffentlichung am 20.11.2026 live in BrowserOS neo geprüft: 1440 × 1000 und 390 × 844 CSS-Pixel. Desktop zeigt zwei Spalten (je rund 501 px), die schmale Ansicht eine Spalte (350 px). Kein horizontaler Überlauf: Dokumentbreite jeweils 1440 bzw. 390 px, auch mit geöffneter Quellenvertiefung. Screenshots beider Breiten visuell geprüft.

Vorschau per Klick geöffnet, geschlossen und erneut geöffnet; zusätzlich Enter auf dem fokussierten Auslöser benutzt. Fokus bleibt beim Öffnen/Schliessen auf dem Summary. Ohne Reduktion wird die einmalige Animation `mr-reveal` angewendet; mit lokaler Checkbox sowie separat mit emulierter Systempräferenz `reduce` ist der berechnete Animationsname `none`, bei unverändert lesbarer E-Mail. Beide Varianten auch in der schmalen Ansicht bedient. Quellenvertiefung geöffnet: Originalstudie und Quellenabschnitt erreichbar. Keine Korrekturen nach der Liveprüfung nötig.

Dies ist eine begrenzte Browserprüfung ohne Screenreader- oder Langinhaltstest, kein allgemeiner Konformitätsnachweis, keine Komponentenfreigabe und keine native Implementierung.
