# Lokaler Abgleich der vier Referenzentwürfe

## Ergebnis

Die vier CMS-Entwürfe enthalten jetzt je eine Abbildung mit Alternativtext und einen ergänzenden lokalen Abgleich. Vorhandene Texte, Vorlagenfelder, gepinnte Contractrevisionen und Demos wurden beim Ergänzen erhalten. Der vollständige Vergleich der veröffentlichten shadcn-Datensätze vor und nach dem Lauf ergab keine Änderung. Eine Wiederholung legte keine weiteren Blöcke oder Medien an.

## Quellenstand und Grenzen

Gelesen: importierte Bibliothek `5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed`, insbesondere `tokens.json` sowie Input-CEM, SCXML, CSS, Accessibility-Regeln und UX-Profil. Diese Revision ist nicht automatisch identisch mit der auf der veröffentlichten Input-Seite gepinnten Revision. Es wurden keine Quelldateien oder Pins geändert.

Der Token-Hash und die sechs berechneten Farbpaare stehen in [token-pairs.json](token-pairs.json). Die Kontrastberechnung betrifft ausschliesslich opake sRGB-Paare, keine zusammengesetzten Browserzustände und keine Gesamtfreigabe.

## Gefundene Abweichungen

| Thema | Export / Regelvorschlag | Aktueller lokaler Stand | Konsequenz |
| --- | --- | --- | --- |
| Primäre Farbe, hell | #171717 mit #FAFAFA | Portal-CSS: #18181b mit #ffffff | Quelle der gewünschten Darstellung festlegen, dann gezielt angleichen |
| Input-Höhe | 32 px | Im Browser bei der geprüften Desktopansicht 37 px | Vorschau belegt nicht die visuellen Contractwerte |
| Input-Padding | 4 px vertikal, 10 px horizontal | Im Browser 8 px vertikal, 10 px horizontal | Unterschied als Gestaltungsstand dokumentiert |
| Input-Schrift | 14 px / 20 px | Im Browser 16 px / normal | Nicht aus ähnlichem Aussehen auf Übereinstimmung schliessen |
| Input-Radius | 10 px | Im Browser 7 px | Tokenbindung fehlt in der Vorschau |
| Validierung / Schreibschutz | UX-Entwurf beschreibt benötigte Fälle | Gelesenes CEM/SCXML definiert diese Fähigkeiten nicht | Field-/Formularverhalten gesondert spezifizieren oder Contract erweitern |
| Farbrollen | shadcn beschreibt unter anderem Card, Popover und Statusrollen | Lokaler Export enthält einen begrenzten neutralen Theme-Satz | Keine Vollständigkeit der allgemeinen Rollen behaupten |
| Abstände / Raster | Detailentwurf empfiehlt inhaltsbezogene Anordnung | Export hat Komponentenwerte, keine allgemeine Layoutskala | Beispiel-CSS nicht als zentrale Tokenquelle ausgeben |
| Haftende Zusatz-Card | Soll auch bei wenig Höhe erreichbar bleiben | Beispiel löst Haftung bei 639 px Breite; Höhenprüfung fehlt | Mit langen Inhalten und vergrössertem Text prüfen |

Browsermessung: `http://127.0.0.1:3010/systems/shadcn/components/input`, `.spartan-input-demo input`. Werte wurden über die berechneten Styles und die tatsächliche Höhe ausgelesen. Dies ist eine punktuelle Beobachtung, kein vollständiger Browser- oder Plattformtest.

## Abbildungen und Pflege

- [Farben](figures/farben.svg): direkt aus dem Token-Export erzeugte Paare, hell und dunkel.
- [Input](figures/input.svg): schematische Anatomie und Trennung zwischen Contractumfang und UX-Ziel.
- [Validierung](figures/validierung.svg): Hauptweg, Korrekturschleife und unklare Übermittlung.
- [Detailseite](figures/detailseite.svg): Regionen und Lesereihenfolge bei breiter und schmaler Anordnung.

Alle vier PNGs wurden visuell auf abgeschnittene Beschriftungen und Überschneidungen geprüft. Die Medienrelationen und Alternativtexte wurden aus der Datenbank zurückgelesen. Die Adminansicht war in der verwendeten Browsersitzung nicht angemeldet; eine visuelle Abnahme im CMS wurde deshalb nicht ausgeführt. Anonyme Medienabrufe werden aktuell mit 403 abgewiesen. Vor Veröffentlichung muss die Medien-Leseberechtigung für öffentliche Handbuchbilder geklärt und die Darstellung in der Seite geprüft werden.

## Wiederholen

1. `node scripts/build-handbook-figures.mjs` erzeugt SVG und PNG.
2. `node --env-file=.env --import tsx scripts/enrich-shadcn-reference-drafts.ts` ergänzt vorhandene Entwürfe einmalig.

Der Ergänzungslauf überspringt Seiten mit seiner vorhandenen Abschnittsmarkierung. Eine spätere Überarbeitung erfolgt bewusst im CMS oder als neue gezielte Inhaltsrevision. Ein erneuter Lauf überschreibt keine redaktionellen Änderungen. Neue Bilder werden über ihren Inhaltshash identifiziert.

## Nächste inhaltliche Arbeit

Typografie und Abstände als ausgearbeitete Grundlagen ergänzen. Dabei komponentenspezifische Exportwerte ausdrücklich von noch festzulegenden systemweiten Skalen trennen. Anschliessend Button, Checkbox und Switch nach dem Input-Seitenstandard vervollständigen. Die offenen Contractfähigkeiten und Vorschauabweichungen bleiben separat nachvollziehbar; sie müssen nicht durch eine weitere allgemeine UX-Seite verdeckt werden.

## Veröffentlichung und Portalprüfung

Die vier Seiten sind auf Nutzerauftrag jetzt veröffentlicht: Farben, Input, Formulare/Validierung und Detailseite. Die Hinweise auf vorgeschlagene Regeln und offene Implementierungsprüfungen bleiben sichtbar. Contractrevisionen und Demos wurden nicht geändert.

Die Medien-Leseberechtigung ist umgesetzt: Anonym sind nur Bilder lesbar, die eine veröffentlichte Seite in einem Do/Don't-Block referenziert. Bilder ohne veröffentlichte Verwendung bleiben gesperrt. Geprüft mit einem temporären, anschliessend gelöschten Upload über Local API und HTTP.

Alle vier Seiten und ihre PNGs laden im Portal ohne Anmeldung. Bei 390 px Ansichtsbreite ist nach Behebung der Mindestbreite des Artikelbereichs kein horizontaler Seitenüberlauf vorhanden. Die Detailgrafik wurde eingebettet per Screenshot geprüft; alle vier Bilddateien waren zuvor visuell geprüft. Ein Link öffnet jeweils die Originalgrösse. Layoutbeispiele tragen im Seitenbaum den Zusatz «Beispiel», damit sie von der neuen redaktionellen Detailseite unterscheidbar sind.

`scripts/check-reference-publication.ts` vergleicht Inhalt, Vorlagenfelder und Änderungszeit aller vier MCP-Antworten mit der veröffentlichten Datenbankfassung. Der Vergleich war erfolgreich; die Detailseite ist im MCP-Seitenbaum enthalten. Die Typprüfung besteht ebenfalls.

Die frühere Einschränkung zur öffentlichen Bildauslieferung ist damit behoben. Die offenen fachlichen und plattformspezifischen Prüfungen aus der Abweichungstabelle bleiben bestehen.
