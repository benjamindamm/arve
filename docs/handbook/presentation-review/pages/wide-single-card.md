# Wide Single Card

Öffentlicher Ausgangsstand am 20.11.2026 in eigener BrowserOS-neo-Seite: Titel und ein Summarysatz, keine Inhaltsblöcke oder Beispiele. Aktueller CMS-Stand read-only über MCP `get_documentation_page` gelesen: `updatedAt` ist `2026-11-20T08:39:34.023Z`, `content` leer.

Gezielte unveränderte Originalquellen: `docs/handbook/postfinance-analysis/mapping.md`, Abschnitt «Layouts und Varianten», sowie `inventory.md` V08, V11, V13, V14 und V28. Öffentlicher Quellentext nennt die Herkunft neutral.

Reviewbare Umsetzung: eine echte einzelne Card über die volle Beispielbreite mit Kopf, drei Übersichtsdaten, Textabschnitt und lokal bearbeitbarer Notiz. Die gesamte Umrandung und die Trennlinien reichen über die Cardbreite. Text ist auf 65ch, das Feld auf 28rem begrenzt. Die drei Daten werden bis 36rem Containerbreite untereinander angeordnet. Keine feste Cardhöhe, keine versteckten Inhalte. Das Feld hat einen sichtbaren Hinweis, dass seine Eingabe nicht gespeichert wird.

Alle fachlichen Texte inklusive Beispiel, CSS-Auszug, Vergleich mit Narrow und Prüfgrenzen stehen in vier CMS-Blöcken. Quellen und CSS stehen aufklappbar unter dem Beispiel und den wenigen Gestaltungsregeln. Breite Tabellen/Arbeitsflächen werden als Anwendungsfall mit eigenem schmalem Inhaltslayout eingeordnet, nicht als geprüftes Beispiel ausgegeben. Historische Studien unverändert.

Tatsächlich ausgeführt:
- Öffentlichen Ausgangsstand in BrowserOS neo gelesen.
- Aktuellen veröffentlichten CMS-Stand über MCP read-only gelesen.
- `npm run typecheck`: erfolgreich.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts wide-single-card`: Preview erfolgreich, vier Blöcke, keine CMS-Veröffentlichung.

Registrierung und serielle Veröffentlichung erfolgten anschliessend durch Root. Keine gemeinsamen Dateien, CMS-Inhalte, Registry oder Routen durch diesen Worker geändert. Keine allgemeine Barrierefreiheits- oder Komponentenfreigabe.

Nach Root-Veröffentlichung tatsächlich mit BrowserOS neo geprüft:
- 1440 × 1000 CSS-Pixel: Card füllt den Inhaltsbereich; Übersichtsdaten stehen in drei Spalten. Die auf 65ch begrenzten Textabsätze und das deutlich kürzere 28rem-Feld bleiben innerhalb der breiten Card sichtbar.
- 390 × 844 CSS-Pixel per CDP-Emulation: Übersichtsdaten untereinander, natürliche Textumbrüche, vollständiger Zusammenfassungs- und Notizabschnitt. Card wächst nach unten, Feld passt in die innere Breite. Screenshots am Cardanfang, im unteren Cardabschnitt und bei den geöffneten Details angesehen; kein sichtbares Abschneiden des Cardinhalts.
- Notizfeld fokussiert und mit lokalem Testtext befüllt; aktualisierter Feldwert im Browser-Snapshot bestätigt. Keine Speicheraktion vorhanden oder ausgelöst.
- CSS- und Quellen-Details geöffnet, im Snapshot als expanded bestätigt und visuell gelesen. Der lange CSS-Auszug scrollt innerhalb seiner Codefläche; übriger Seiteninhalt bleibt in der schmalen Ansicht lesbar.
- Vergleichslink tatsächlich geöffnet: Ziel `/systems/shadcn/narrow-single-card`, dort passende H1 bestätigt. Anschliessend zurückgekehrt, Geräteemulation aufgehoben und eigene QA-Seite geschlossen.

Keine Darstellungsreparatur erforderlich. Lokale Entwicklungsansicht zeigte ein Next.js-Issue-Badge; dessen Ursache gehört nicht zum geprüften Seiteninhalt. Die genannten Prüfungen ersetzen keine umfassende Tastatur-, Screenreader- oder Komponentenprüfung. CMS/MCP-Gleichheit wurde von Root geprüft, hier nicht erneut ausgeführt.
