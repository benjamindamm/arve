# Kompakte Vergleiche: Daten und Inhalte

Stand: 21. November 2026. Bereich: 23 Komponenten. Ausschliesslich die drei Dateien `src/docs/comparisons/data-content-data.ts`, `data-content.tsx`, `data-content.css` und dieser Bericht wurden in diesem Teilauftrag geändert. Kein CMS, Snapshot, Export, Pin, Commit oder Push.

## Quellen und Grenzen

Bibliothek `shadcn`, Exportrevision `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`. Einstieg über `.agents/skills/arve-ui-contracts/SKILL.md`, Paketmanifest, portable Leseanleitung, `dependencies.json` und Bibliotheksindex. Pro Komponente wurden CEM, CSS, SCXML, HTML/ARIA, UX und Stories gezielt ausgewertet. Die 161 paketrelativen Quellverweise samt SHA-256 stehen unverändert im reinen Datenhelfer. Alle 161 Hashes wurden gegen die Paketdateien geprüft.

Die Vergleiche sind redaktionelle statische Darstellungen. Sie implementieren keine Recharts-, TanStack-, Embla-, Netzwerk-, Clipboard- oder Scrollcontroller-Laufzeit. Originalquellen und Draftstatus bleiben unverändert. Technische Modellgrenzen stehen in `technicalNotes` unter geschlossenen Details. Bildmotiv, Porträt und Plotgeometrie bleiben redaktionell. Designerhinweise sind auf den jeweiligen gebundenen Contract begrenzt; keine allgemeine Datenvisualisierungsrichtlinie wurde ergänzt.

## Entscheidungen pro Komponente

| Komponente | Gestaltung und erste Auswahl |
|---|---|
| DataTable | Zahlungen als vollständigen Kontext bewahrt. Sortierung und Auswahl zuerst; leere, reduzierte und fehlerhafte Ergebnisse gezielt aufklappbar. Leerer Filter meldet korrekt 0 passende Zahlungen. |
| Table | Native Struktur mit Summe als einzelnes breites Beispiel; gleiche Berichte mit und ohne Hervorhebung. |
| Chart | Ein Balkenplot mit separat aufklappbarer Datentabelle; Indikatoren ohne wiederholten Plot. |
| ChartArea | Monatsverlauf und gefüllte Fläche; Datentabelle bleibt zugänglich. |
| ChartBar | Monatsvergleich mit Nullbasis; kompakte Datenhinweise. |
| ChartLine | Reihenfolge der Monatswerte kurz erklärt; keine zusätzliche Interpolationsbehauptung. |
| ChartPie | Browseranteile mit Datenzugang statt grosser wiederholter Kreisdiagramme. |
| ChartRadar | Eigene Monatsdaten bewahrt; Polygonfläche als kein eigenständiger Wert erläutert. |
| ChartRadial | Konzentrische Bögen mit eigener Browserdatenkomposition bewahrt. |
| ChartTooltip | Indikatorvergleich sichtbar, Plotkontext vollständig geschlossen und ausdrücklich benannt. |
| Card | Zwei vollständige Karten mit identischem Inhalt; Dichte durch Abstände und Titelgrösse sichtbar. Desktop nebeneinander, mobil untereinander. |
| Item | Oberfläche und Abstände getrennt. Je zwei aussagekräftige Gegenstücke zuerst, dritte Option aufklappbar. |
| Avatar | Drei echte Bildgrössen direkt vergleichbar. Geladenes Bild und Fallback zuerst, Ladeansicht aufklappbar; Personengruppe als eigener Kontext. |
| Badge | Sechs kleine informative Flächen mit demselben Text; mobil zweispaltig. |
| AspectRatio | Dasselbe Motiv in drei Verhältnissen mit gleicher begrenzter Breite; keine künstlichen Zustände. |
| Carousel | Richtungsachse und Positionsgrenzen getrennt. Identischer Folientitel bei Positionsvergleich; nur Position und verfügbare Richtung ändern sich. |
| Separator | Gleiche Inhaltsnamen bei horizontaler und vertikaler Trennung. |
| CodeBlock | Nummerierung, Schriftgrösse, Rand und Umbruch als vier isolierte Vergleiche. Kopierfeedback beschränkt sich auf die Kopfzeile. Deutscher Beispielcode in allen Payloads gleich. |
| Bubble | Standard und Sekundär unmittelbar nebeneinander, weitere zwei unterschiedliche Oberflächen sichtbar. Drei weitere aufklappbar. Ausrichtung und Reaktionsposition eigenständig; gleiche Sprecherin und kurze Nachricht, Schrift weiterhin 14 px. |
| MessageScroller | Kurzer Gruppenhinweis statt Controllerprosa. Dasselbe Gespräch zeigt durch den sichtbaren Ausschnitt Anfang und Ende; Vorbereitung und leerer Verlauf aufklappbar. |
| Attachment | Grössen, Orientierung und Dateistatus getrennt. Gleicher Dateiname und Metadaten; Fehlermeldung ausdrücklich benannt. |
| Marker | Gleicher Hinweis frei oder zwischen Linien sichtbar, unterer Rand aufklappbar. |
| Trace | Offenlegung und Status getrennt. Gleiche Aufgabe in allen Statusdarstellungen; Neutral- und Wartezustand aufklappbar. |

Wichtige Optionen bleiben im Datenhelfer und über MCP vollständig vorhanden. `previewItems` steuert nur die erste sichtbare Auswahl. Gruppenspezifische Labels benennen verborgene Vergleiche. Keine neuen Zustandsfolgen für passive Komponenten.

## Tatsächlich ausgeführte Prüfungen

- `npm run typecheck`: erfolgreich nach Bereichsimplementierung.
- Datenprüfung: alle 23 Komponenten, alle JSON-Payloads, eindeutige Item-IDs innerhalb jeder Gruppe und existente `previewItems` erfolgreich geprüft.
- Quellenprüfung: 161 von 161 SHA-256 stimmen mit dem ausgewählten Export überein.
- BrowserOS neo: alle 23 Komponentenseiten bei 390 × 844 geöffnet und Seitengrössen sowie sichtbare Vergleichsinhalte ausgelesen. Kein horizontaler Seitenüberlauf; keine gemessene sichtbare Specimenbox über dem rechten Viewportrand.
- Zusätzliche Screenshots visuell geprüft: Bubble, Card, ChartBar, MessageScroller und DataTable mobil; dieselben Schwerpunkte bei 1440 × 1000 am Desktop. Card-Darstellungen dort jeweils 448 px breit auf gleicher Höhe; MessageScroller zeigt klar unterschiedliche Ausschnitte desselben Gesprächs.
- Chartfamilie mobil: je ein sichtbarer Plot, bei ChartTooltip absichtlich kein sofort sichtbarer Plot. Kein doppelter Plot in den Zustandsvergleichen.
- Integrationsbefund entdeckt und an Root übergeben: globales `aria-hidden` verbarg zuvor auch native Datentabellendetails. Nach Rootkorrektur ChartBar-Summary per BrowserOS fokussiert und mit Enter geöffnet. Fokus blieb auf der Summary, `open=true`, kein versteckender Vorfahr; Accessibilitybaum enthält Spaltennamen und alle vier Monatszeilen mit Werten.
- Desktopbefund entdeckt und an Root übergeben: festes Dreispaltenraster liess bei zwei bzw. vier kompakten Items Restfläche. Gemeinsame Rasterkorrektur liegt bei Root, keine Bereichsüberschreibung.

Kein eigener Build gestartet; zentrale Build- und Katalogprüfungen liegen bei Root. Diese Checks sind keine allgemeine Accessibilityfreigabe und kein Nachweis tatsächlicher Bibliotheksinteraktionen.

## Bubble: gemessene Höhe

Gleicher mobiler Viewport 390 × 844, geschlossene Zusatzdetails. Neue Vergleichsgruppe Oberflächen: 486,12 px; Ausrichtung: 279,34 px; Reaktionsposition: 325,52 px. Gesamter Vergleichscontainer mit Abständen und Quellen-Disclosure: 1217,48 px. Variantenabschnitt inklusive vorhandener Handbuchprosa: 1765,05 px. Gesamte Seite: 7294 px.

Die vom Auftrag übergebene alte Variantenhöhe betrug 3399 px, die alte Gesamthöhe 9660 px. Je nach früherer Abschnittsgrenze ergibt sich für die Varianten eine Reduktion auf 1765 px (−48,1 %); der reine neue Vergleichscontainer beträgt 1217 px. Die Gesamthöhe sinkt um 24,5 %. Die alten Werte wurden in diesem Teilauftrag nicht erneut erhoben. Der Gesamtseitenvergleich enthält auch Roots gemeinsame Disclosureänderungen und ist kein isolierter Effekt der Bereichsdateien.

Nachprüfung der gemeinsamen Rasterkorrektur: Bubble bei 1440 × 1000 zeigt die vier sichtbaren Oberflächen in exakt zwei Spalten und zwei Reihen (519 px je Zelle). Die zwei Ausrichtungen verwenden ebenfalls zwei Spalten (519 + 519 px). Keine Restzelle. Browseremulation anschliessend entfernt und eigene Prüfungsseite geschlossen; fremde Tabs unverändert.
