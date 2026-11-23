# Anwendung auf die shadcn-Iconseite

23.11.2026 · Anwendung durch den Hauptagenten. Kein unabhängiger Transferlauf oder Designer-Review der fertigen Seite.

## Ergebnis und Material

Die veröffentlichte Seite enthält zwölf aktuelle Textblöcke und die unverändert bewahrte ursprüngliche Suchzeichen-Studie. Sie zeigt dieselbe Hinweisaktion mit und ohne sichtbaren Text, vier Grössen im gleichen Textzusammenhang, drei Strichwerte mit Original-/Detaildarstellung, Zeichenfläche gegenüber Bedienfläche, eine durchsuchbare Auswahl sowie Status und Dekoration.

Sieben originale SVGs wurden aus `lucide-icons/lucide`, Commit `c26ce5515667640ca2753e095ba319d225fc0d8d`, übernommen. Originaldateien, vollständiger Lizenztext, Herkunft/Hashes und ausgewählte Figma-Referenzen liegen in `public/handbook/icons/lucide/`. Die SVGs samt Lizenz umfassen zusammen 5 546 Bytes. Es wurde weder die gesamte Bibliothek kopiert noch ein zusätzliches Laufzeitpaket installiert. Inline-Proben verwenden die Originalgeometrie; Grössen und die ausdrücklich bezeichneten Strichstudien sind lokale Darstellungsentscheidungen.

Die Lizenz führt ISC sowie MIT-Hinweise für die dort genannten Feather-Ableitungen. Lizenzseite im Browser gelesen, vollständigen Lizenztext aus dem gepinnten Repository mitkopiert. Keine Aussage zu Nutzungsbedingungen anderer Assets.

Der gewählte shadcn-Export enthält eine Figma-Zuordnung von 1469 Lucide-Mastern. Für diese Seite werden nur die sieben relevanten Referenzen mit dem Original-Quellkartenhash zusätzlich ausgeliefert. Das ist keine kopierte vollständige Iconbibliothek. Der Geometrieabgleich mit dem FIG-Export bleibt ausdrücklich ungeprüft. Der dortige Name `lucide/triangle-alert` entspricht in der ausgewählten externen Referenz dem Motiv `triangle-exclamation-point`; unterschiedliche Stände werden nicht als identische Quellen ausgegeben.

## Fachliche Zuordnung

| Frage | Fundstelle / Stand |
| --- | --- |
| ICO-01/02 | `icon-start`, `icon-sources`: Webumfang, lokale Auswahl, genaue Quellenstände und mitgelieferte Lizenz. |
| ICO-03 | `icon-meaning`: sieben Bedeutungen, SVG-Pfade und Figma-Kennungen. Portalfilter nach Aufgabe/Dateiname; keine Vollständigkeitsbehauptung. |
| ICO-04/08 | `icon-labels`, `icon-status`: sichtbarer Text, zweckbezogener Name, informative gegenüber redundanten/dekorativen Zeichen. |
| ICO-05 | `icon-strokes`, `icon-sources`: gleiche Strichfamilie, Originalwert 2; 1/3 als Studien statt globale Varianten. |
| ICO-06 | `icon-sizes`: lokale Komponentenwerte 12/14/16/20 px; semantische Liste auch in CMS/MCP. Skalierende Striche und Ausgabegrösse getrennt. |
| ICO-07 | `icon-alignment`: 24er-Zeichenflächen mit unterschiedlichen Umrissen, Textbezug und 16-px-Icon in aktiver 44-px-Fläche. Keine allgemeine Zielgrössenanforderung behauptet. |
| ICO-09 | `icon-status`, `icon-checks`: Status mit Text, keine alleinige Farbkodierung. Weitere Zustände, Themes und Bewegung nach Bedarf an führende Kapitel/Komponenten gebunden; nicht allgemein freigegeben. |
| ICO-10 | `icon-platforms`: keine ungefragten neuen Familien; Ergänzungen und Varianten bedürfen eigener Zuordnung. |
| ICO-11/12 | `icon-adaptation`: Bedeutung vor pauschaler Spiegelung, lange Labels ohne automatischen Textverlust auf Mobil. Vollständige RTL-Prüfung offen. |
| ICO-13 | `icon-platforms`: native Zuordnung ausdrücklich offen; Webzahlen nicht auf native Plattformen übertragen. |
| ICO-14 | `icon-meaning`, `icon-sources`, `icon-adaptation`: SVG-Downloads/Referenzen, verständlicher Text als mögliche Alternative; tatsächlicher Ressourcenfehler nicht geprüft. |
| ICO-15/16 | `icon-platforms`, `icon-checks`: Ergänzungsverfahren, bekannte Lücken, Pflege und tatsächliche Prüfgrenzen. Zuständigkeit nicht erfunden. |

## Redaktionelle Anwendung

Für einen Hinweis an Kontaktangaben wird `info` gewählt. Sichtbarer Handlungstext ist die Ausgangslösung; ohne sichtbaren Text muss die Aktion im Kontext verständlich sein und einen zweckbezogenen Namen tragen. Das lokale Buttonbeispiel kombiniert ein 16-px-Zeichen mit ausreichendem Platz für das Label; lange Beschriftung bricht um. Der Vergleich mit 12/14/20 px zeigt andere Komponentenwerte, statt eine beliebige globale Skala vorzuschreiben. Weitere Bedeutungen sind über die kleine Auswahl auffindbar. Ein unklarer neuer Begriff erfordert zuerst eine Wording-/Auswahlentscheidung, kein automatisch erfundenes Icon. Dies ist ein Anwendungsgang der Anleitung, kein Nutzertest.

## Tatsächliche Prüfungen

- Veröffentlichung mit erwarteter Änderungszeit und ohne abweichenden Entwurf. Nur `shadcn-icons` geändert, 122 weitere DB-Seiten unverändert. Historische Studie unverändert bewahrt.
- Vollständiger Vergleich Ausarbeitung/CMS/MCP erfolgreich. Kompakter MCP-Abruf in vier Teilen mit 14 Abschnitten einschliesslich Metadaten; `icon-sizes` vollständig mit passendem Hash gezielt abgerufen.
- Snapshot neu erfasst: nur diese Seite verändert; 115 weitere Seiten sowie System, Implementierungen, Medien und Contractrevision unverändert.
- BrowserOS Neo, Desktop 1440 × 1000 sowie 390 × 844 und 320 × 800. Beschriftungsproben, Grössen, Strichvergleich und Referenzauswahl visuell geprüft; keine horizontale Seitenüberbreite in den gemessenen schmalen Zuständen. Bei 320 px stehen die beiden Aktionsproben untereinander, sodass längere Wörter nicht in zu schmale Vergleichsspalten gezwungen werden.
- Beide Hinweisproben per Tastatur bedient; offener Hinweis und Namen/Zustand im Browserbaum beobachtet. Lange Beschriftung wächst und bleibt lesbar. Keine Screenreader-Freigabe daraus abgeleitet.
- Tatsächliche SVG-Ausgabegrössen 12/14/16/20 px gemessen. Strichproben haben bei 24 px Ausgabe die Werte 1/2/3; Detaildarstellung ist separat mit 2× beschriftet.
- 44 × 44 px aktiver Button gemessen. Vier Pixel innerhalb der oberen linken Ecke neben dem 16-px-Icon angeklickt; lokale Rückmeldung wechselt auf „Beispielaktion ausgelöst.“ Geometrie und tatsächliche Aktivierung getrennt beobachtet.
- Suche nach „Datei“ zeigt Herunterladen; Suche nach „search“ zeigt Suchen; unbekannter Begriff zeigt null Treffer, Leeren stellt sieben wieder her.
- Typprüfung, statischer Build und statische Prüfung erfolgreich: 198 HTML-Dateien, 116 Handbuchseiten, 69 Komponenten, 59 431 interne Links, 2 955 Contractassets, Basispfad `/arve`, kein Backend. Zusätzlich alle sieben SVG-Hashes und zehn mitgelieferten Icon-/Lizenz-/Metadatendateien gegen den statischen Export abgeglichen.

Die erste statische Prüfung zeigte einen nicht mitkopierten Link auf die vollständige Contract-Quellkarte. Statt den Export um die ganze Karte zu erweitern, werden jetzt die relevanten sieben Referenzen mit Originalhash lokal ausgeliefert. Der anschliessende statische Check ist erfolgreich.

Keine Nutzerstudie, keine allgemeine Verständlichkeits-/Barrierefreiheitsprüfung, kein vollständiger Tastatur- oder Hilfsmitteltest, kein reales Mobilgerät und kein Geometrievergleich zum FIG-Original. SVG-Profile sind in `src/docs/icons-showcase.json` versioniert. CMS-Prosa verändert diese Vorschaugeometrie nicht automatisch; Profile, Renderer und Erklärungen sind gemeinsam zu pflegen.
