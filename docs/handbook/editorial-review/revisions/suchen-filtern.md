# Redaktion: Suchen und Filtern

Gelesen: PAGE-BRIEF, Redaktionsbericht und eigener Abschnitt 32 im Seitenaudit; vollständige Release einschliesslich Ablauf, Meldungsvergleich, Quellen und Vertiefungen sowie eigener Renderer. Der Renderer enthält keine zusätzlichen fachlichen Texte und bleibt unverändert. Das separate Rechnungsbeispiel wurde nicht bearbeitet.

## Wichtigste Änderungen

- «Die vollständige URL- und Fokusmatrix bleibt verbindlich» ist durch konkrete Rückkehranweisungen ersetzt. Die genaue URL-Normalisierung steht weiterhin in der Vertiefung.
- «Die Zahl wird ruhig angekündigt» lautet jetzt «Kündige die neue Zahl als Statusmeldung an, ohne den Fokus zu verschieben».
- «Leere Suche trifft alle Namen und IDs» erklärt jetzt, dass bei leerem Suchfeld nur der Statusfilter die Ergebnisse einschränkt.
- «Erstleere» ist als vollständig leerer Bestand erklärt. «Kontextmatrix» und «Zustandsmatrix» haben aufgabenbezogene Überschriften erhalten.
- Zusammenfassung, Beispielgrenzen, Ablauf, Bildunterschrift und Quellenhinweise sind als zusammenhängende Anleitung formuliert. Die drei Hauptregeln verweisen für genaue Suchdetails auf die Vertiefung.

## Fachliche Erhaltung

Erhalten sind die sofortige lokale Suche im vollständigen Bestand mit höchstens 50 Projekten, zusammenhängende Teilzeichenfolge in ID oder Name ohne Gross-/Kleinschreibung, UND-Verknüpfung mit Status sowie de-CH-Namensreihenfolge und aufsteigende ID bei gleichem Sortierwert. Keine wählbare Sortierung oder Aufteilung auf Ergebnisseiten ergänzt.

q/status, Aktualisierung ohne Browserverlauf pro Zeichen, Neuladen und Direktlink, Behandlung fehlender und ungültiger Parameter, Rücklink und Browser-Zurück bleiben definiert. Rückkehr erfolgt anhand der stabilen ID samt sichtbarer Position oder ersatzweise zur Ergebnisüberschrift. Kriterienänderungen erhalten den Fokus; neue Aufrufe und Neuladen erzwingen keinen Eingabefokus. Eine zusätzliche sitzungsübergreifende Speicherung ausserhalb der URL wird weiterhin nicht zugesichert. Die Zusammenfassung verspricht die Rückkehr zu denselben Suchkriterien; die Ergebnisse werden neu berechnet.

Erstellung, aktive Namensbearbeitung, nur lesbare archivierte Projekte, fehlende Archivierungsaktion und unveränderliche Systemfelder bleiben erhalten. Ebenso erhalten: Trennung leerer Bestand/fehlende Treffer/Ladefehler, begrenzte Vorschau, spätere Backend- und Berechtigungsprüfung, offene Gestaltungs- und Bedienprüfungen, Beispielwerte, Quellenkennungen und historische Prüfgrenzen.

## Ausgeführte Checks

- Frischer read-only MCP-Abruf über `get_documentation_page` für shadcn/suchen-filtern: Inhalt und Zusammenfassung entsprechen vor der Redaktion der alten Release (IDs und Nullfelder für den Vergleich normalisiert). `updatedAt`: `2026-11-20T14:24:17.633Z`, als `expectedUpdatedAt` übernommen.
- Strukturvergleich gegen HEAD: Nur fachliche Textfelder und `expectedUpdatedAt` geändert. IDs, Blocknamen, Typen, Block-/Knotenreihenfolge und Zeilenzahlen unverändert.
- Suche im Repository nach `suchen-filtern#`: keine eingehenden Ankerlinks gefunden.
- `npm run typecheck`: erfolgreich.
- `git diff --check`: erfolgreich.

## Browserprüfung nach Veröffentlichung

Die veröffentlichte Seite in BrowserOS neo vollständig gelesen, einschliesslich aller sieben geöffneten Vertiefungen, Ablauf, Meldungsvergleich, Bildunterschrift, Quellen, weiterführenden Links und geöffnetem Live-Detailtext. Die korrigierte Zusammenfassung nennt dieselben Suchkriterien; beide Speicherhinweise versprechen keine zusätzliche Speicherung ausserhalb der URL.

Screenshots bei 1440 px geprüft: Hauptseite mit geschlossenen sowie allen geöffneten Vertiefungen. Bei 390 px Einstieg, Live-Detailtext, Ablaufkarten, URL-/Fokusregeln, Meldungsvergleich, Entwurfsgrössen, Prüffälle und Abschluss in einzelnen Screenshot-Ausschnitten geprüft. Neue Überschriften, Absätze, Karten und Links brechen lesbar um; keine abgeschnittenen neuen Texte oder überlappenden Textbereiche in den geprüften Ansichten festgestellt. Ein vollständiger schmaler Screenshot mit allen geöffneten Details lief in ein Screenshot-Zeitlimit; die visuellen Nachweise dafür sind die einzelnen Ausschnitte.

Ein zusätzlicher Befund betraf die gemeinsame Ablaufdarstellung: «Bestätigtes Ergebnis» klang bei einem geplanten Entwurf wie eine bestätigte Umsetzung. Root änderte die gemeinsame Rendererbeschriftung zu «Ergebnis». Beim letzten Browserabruf erschien «Ergebnis» vor «Im Suchkontext weiterarbeiten»; «Bestätigtes Ergebnis» war nicht mehr vorhanden. Keine Änderung an der fachlichen Klassifizierung oder eigene weitere Veröffentlichung.

Keine weiteren konkreten sprachlichen oder Umbruchbefunde auf der eigenen Seite. Die getrennte Rechnungsdemo wurde nicht geöffnet und nicht erneut fachlich geprüft. Die Prüfung bezog sich auf Sprache und Darstellung; Backend-, URL-, Fokus- und assistive Funktionsnachweise wurden nicht wiederholt.
