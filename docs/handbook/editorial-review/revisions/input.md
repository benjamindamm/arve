# Input · sprachliche Überarbeitung

## Gelesener Umfang

`PAGE-BRIEF.md`, `report.md` und ausschliesslich Abschnitt 42 des Audits in `pages.md`; vollständige Input-Release mit allen zwölf Blöcken, seitenbezogener Renderer, verwendete `Input()`-Studie und Demo-Einbindung. Die sechs älteren Studienblöcke einschliesslich Textfassung und Quellen wurden vollständig gelesen. Vor der Änderung per MCP `get_component_page` mit `system: shadcn`, `component: input` abgerufen: `updatedAt: 2026-11-20T15:07:01.924Z`. `scripts/check-page-rework.ts input` bestätigte vor der Redaktion identische Inhalte und Summary von Release/CMS/MCP sowie HTTP 200.

## Wichtigste Änderungen

- Kurzer Einstieg über Texteingabe und verständliche Beschriftung; «Label» in den redigierbaren eigenen Erläuterungen als «Beschriftung» formuliert. Regeln zu Platz, Hilfe und Korrektur in ganzen Sätzen erklärt.
- «1–80 Unicode-Graphemcluster nach Randtrim» erläutert jetzt das Entfernen von Leerraum an beiden Enden. Die genaue Zähleinheit bleibt im Abschnitt «Typen und Grenzen» erhalten; Root hat die überflüssige erneute Einführung von «Randtrim» vor der Veröffentlichung gestrichen.
- «Feldzusammenstellung» durch die konkreten fehlenden Hilfetexte, Fehlermeldungen und den Schreibschutz ersetzt. Die ältere Studie ist ausdrücklich als sprachlich überarbeitet bezeichnet, nicht mehr als unveränderte historische Abschrift.
- In der auf dieser Seite verwendeten `Input()`-Studie «Kompositionsziel» durch eine verständliche Einordnung des statischen Fehlerbeispiels ersetzt. Die Meldung «Dieser Name ist bereits vergeben …» bleibt im eigenen Fachfall erhalten; gleiche Namen sind im Gestaltungs-Piloten weiterhin erlaubt.

## Fachliche Erhaltung und Grenzen

Input bleibt ein natives einzeiliges Textfeld. E-Mail-, Zahlen-, Datums-, Such- und Passwortvarianten sind weiterhin weder spezifiziert noch geprüft. 1–80 Unicode-Graphemcluster nach dem Entfernen von Leerraum an beiden Enden und erlaubte gleiche Namen gelten nur im Gestaltungs-Piloten. Escape lässt den eingegebenen Wert unverändert; Root hat den zuvor ungenauen Bezug auf einen gespeicherten Wert vor Veröffentlichung korrigiert. Native Tastaturbedienung, Fokus und IME, gleichzeitig sichtbare Fehler und Fokus, Werterhalt, erreichbare lange Texte und mobile Tastatur bleiben erklärt. Draft-Status, visuelle Abweichungen zwischen Demo und Contract, festgelegte Revision, fehlender Implementierungsdatensatz und fehlende Freigabe für native Plattformen bleiben erhalten.

Geändert wurden die eigene Release und ausschliesslich `Input()` im gemeinsam verwendeten Studienrenderer. Der eigene Seitenrenderer benötigt keine zusätzlichen Texte. CSS, ARIA, Angular-Demo, Contracts und Pins blieben unangetastet. Ein `genericField`-Symbol wurde bei gezielter Suche in `src` nicht gefunden; der gemeinsame `Field()`-Renderer blieb unverändert.

## Checks

- `npm run typecheck`: bestanden.
- `git diff --check`: bestanden.
- Programmatischer Vergleich der Release mit HEAD: zwölf Blöcke; Block-/Knotentypen, Reihenfolge, blockName, Links und Anzahl der ausgewerteten Textzeilen unverändert.
- Suche nach eingehenden Links auf `components/input#`: nur `live-beispiel`, `plattformstand` und `contract` gefunden; alle drei bleiben unverändert. Keine eingehenden Links auf geänderte Überschriften gefunden. Neue Überschriften ergeben neue `abschnitt-*`-Anker für Beschriftung, Vorschau und Ausgangsstudie; keine Anpassung anderer Seiten erforderlich.
- Nach Root-Veröffentlichung die ganze Seite im BrowserOS neo gelesen, beide redaktionellen Details sowie die vollständige Textfassung der Studie geöffnet. Vollseiten-Screenshots bei echten 1440 × 1000 und 390 × 844 CSS-Pixeln visuell geprüft; die sechs Studienzustände schmal zusätzlich in einem vergrösserten Ausschnitt kontrolliert.
- Beschriftungen, Hilfetexte, Fehlermeldungen, neue Überschriften, Pilotregel und Details umbrechen lesbar. Die Beispiele stehen breit nebeneinander und schmal untereinander. Kein weiterer konkreter Sprach- oder Umbruchbefund. Keine Demo- oder Contract-Funktionsprüfungen wiederholt. Viewport zurückgesetzt und eigene QA-Registerkarte geschlossen.
