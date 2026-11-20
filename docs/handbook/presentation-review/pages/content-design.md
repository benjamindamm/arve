# Content Design · Seitenüberarbeitung

## Befund und Änderung

Öffentliche Seite am 20.11.2026 im eigenen BrowserOS-neo-Tab geöffnet, als Markdown gelesen und Screenshot visuell geprüft. Neun Blöcke mit wertvollen Fachgrenzen, aber Einstieg und Vergleiche hauptsächlich als lange Textfolge; neun Vorablinks verzögern den Blick auf Beispiele.

Der neue Einstieg vergleicht ein unbestimmtes Feld mit «Projektname (erforderlich)», konkreter Hilfe und «Projekt erstellen». Es handelt sich sichtbar um ein statisches Schreibbeispiel, ohne bedienbare Scheinaktion. Vier kurze Schreibregeln folgen. Fünf Vergleiche zeigen fehlende Angabe, Längenfehler, laufende Erstellung, unbekannten Ausgang und bestätigte Annahme. Zu jeder besseren Formulierung steht die fachliche Voraussetzung. Ein kurzer Übergabecheck hält die noch offene Statusschnittstelle und ausstehende Reviews sichtbar.

Alle Fachtexte und Beschriftungen liest der Renderer aus CMS-Blöcken. Der Release ist die alleinige neue Textquelle. Alle neun vorherigen CMS-Blöcke sind vollständig als literale Daten eingefroren und unverändert (ausser automatisch erzeugten IDs) in der Quellenvertiefung erhalten: Unicode-Graphemcluster, Pflichtkonventionen, erlaubte gleiche Namen, Fokusweg, bedingter Erhalt, Wiederholungsgrenzen, Format-/Übersetzungshinweise, WAI-Erläuterungen und ausstehende Prüfungen. Kein Import eines veränderlichen Snapshots, keine Herkunftsfirma und keine neue Freigabe.

Die breite Ansicht verwendet zwei gleich breite Vergleichsspalten. Bis 640 px stehen Feldbeispiele und Meldungsvergleiche untereinander. Grosszügige Abschnittsabstände, lesbare Textbreiten und umbrechende Inhalte; Quellen als natives Details-Element mit sichtbarem Fokus.

## Tatsächlich ausgeführte Prüfungen

- Eigener BrowserOS-neo-Ausgangsbefund: öffentliche Seite gelesen und Screenshot visuell geprüft.
- Read-only MCP `get_documentation_page`, System `shadcn`, Abschnitt `content-design`: `updatedAt` = `2026-11-18T00:38:59.418Z`.
- Literale Erhaltung aller neun Originalblöcke programmatisch mit dem aktuellen MCP-Inhalt verglichen: identisch nach Entfernen generierter IDs. Ausgangszeitpunkt ebenfalls verglichen.
- Anzahl und Reihenfolge der zwölf CMS-Textbausteine des Einstiegs mit dem Renderer-Vertrag geprüft.
- `npm run typecheck`: erfolgreich.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts content-design`: Vorschau erfolgreich, 15 Blöcke, kein CMS-Schreibzugriff.

## Liveprüfung nach Veröffentlichung

Nach Root-Veröffentlichung am 20.11.2026 live in BrowserOS neo geprüft. CDP-Screenshots bei 1440 × 1000 und 390 × 844 CSS-Pixeln visuell betrachtet: Einstieg, Paarvergleich, Zustandsmeldungen, Weissraum und offene Quellenvertiefung. Breite Ansicht: zwei Vergleichsspalten, Feldbeispiele je rund 501 px; schmale Ansicht: eine Spalte mit 350 px breiten Beispielen und untereinander stehenden Meldungspaaren. Labels, Fehler und Summary umbrechen lesbar.

Kein horizontaler Überlauf gemessen: Dokumentbreite entspricht 1440 bzw. 390 px, auch bei geöffneter Quellenvertiefung. Alle neun Originalblöcke sind darin vorhanden und im Snapshot erreichbar, einschliesslich fünf weiterführender Links. Quellen-Summary fokussiert und mit Enter geöffnet sowie geschlossen; sichtbarer Fokus bleibt erhalten. Tab führt zum ersten Quellenlink, Shift+Tab zurück zum Summary. Auch in schmaler Ansicht per Enter geöffnet und geschlossen.

Der Inhaltsbereich enthält keine Buttons oder Eingabefelder; die Beispiele sind statische Beschriftungsstudien mit sichtbarer Erklärung. Keine scheinbar bedienbare Erstellung, Statusprüfung oder Wiederholung. Keine Darstellungskorrektur nötig.

`node --import tsx scripts/check-page-rework.ts content-design`: erfolgreich; Release/CMS/MCP gleich, öffentliche Seite HTTP 200, neutrale Quelle.

## Grenzen

Begrenzte Browser- und Tastaturprüfung. Kein Screenreader-Test, Verständlichkeitsreview oder allgemeiner Konformitätsnachweis.
