# Einträge finden · Arbeitsfähigkeits-Lücken

Stand: 18.11.2026 · Vorschlag für den ersten arbeitsfähigen Gestaltungsstand für Web auf Desktop und mobilen Ansichten. Keine native Freigabe, keine Produkt- oder allgemeine Konformitätsfreigabe. Bewertet wird der Weg Übersicht → Suche/Filter → Ergebnisse → einzelnes Detail → Rückkehr. Mehrfachauswahl, Massenaktionen, Export und Seitennavigation sind nur bei bestätigtem Produktbedarf relevant.

Grundlage: [Inhaltsstandard](../content-standard/README.md), [PAT-11, PAT-14 und LAY-11/13/15](../content-standard/patterns-layouts.md). D = vorhandene Regel dokumentieren/konkret referenzieren; E = echte offene Design-/Produktentscheidung; B = fehlende wiederverwendbare Aufgabenressource im betrachteten Bestand. Priorität bezeichnet den vorgeschlagenen Arbeitsweg, keine bereits beschlossene Freigabe. Pilotblocker meint eine fehlende Entscheidung oder Gestaltungsgrundlage: Ein Produktionsbackend ist keine Voraussetzung. Zustandsvorlagen und annotierte Abläufe können die Gestaltungsabnahme tragen; Laufzeitprüfungen sind nur für behauptete Implementierungsfähigkeiten erforderlich.

## Bereits nutzbar und tatsächlich geprüft

- [Suchen und Filtern](http://127.0.0.1:3010/systems/shadcn/suchen-filtern) erklärt aufgabenbezogene Filter, Ergebniszahl, sichtbaren Anwendungszeitpunkt, Reset und Nulltreffer. [Laden, leer und Fehler](http://127.0.0.1:3010/systems/shadcn/laden-leer-fehler) unterscheidet Erstleere und Nulltreffer, verlangt Filtererhalt bei Fehlern und verweist auf Ankündigung von Statusänderungen.
- Das [Rechnungsbeispiel](http://127.0.0.1:3010/systems/shadcn/beispiele/rechnungen) wurde am 18.11. über BrowserOS neo gelesen und bedient: `Hosting` + `Bezahlt` liefert RE-1046 und RE-1044; RE-1046 öffnet das Detail; der ausdrückliche Rücklink erhält beide Kriterien und die zwei Ergebnisse. Eine nicht passende Anfrage zeigt Nulltreffer. Der Beispielumschalter zeigt davon getrennt „Noch keine Rechnungen“ und „Rechnungen konnten nicht geladen werden“.
- [Source der Liste](../../../src/docs/invoices/list.tsx) belegt Labels, native Suche/Select, Tabellenüberschriften, Ergebnisstatus, Reset, `aria-busy` und simuliertes Laden. Detail und Rückweg übernehmen `q`/`status`. Das ist ein hilfreicher zusammenhängender Prototyp mit fünf statischen Datensätzen, ohne echten Suchdienst. Laden/Retry sind Simulation; PDF-Download wurde hier nicht geprüft.
- [Detailseite](http://127.0.0.1:3010/systems/shadcn/detailseite) besitzt bereits Regionsfolge, Identität/Status, Aktionspriorität, Umbruch-, Inhalts- und Fokusregeln sowie die ausdrückliche Grenze des Beispiels. Diese Inhalte müssen nicht neu erfunden werden.
- Der importierte [Bibliotheksindex](../../../src/contracts/libraries/shadcn/5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed/library.json) führt Button, Checkbox, Switch und Input als `draft`. Er ist kein vollständiges Inventar aller Fähigkeiten von shadcn. Aus fehlender lokaler Demo folgt kein fehlendes Bibliotheksfeature; vorhandene komponentenbezogene Designassets werden nicht als fehlend bewertet.

Keine mobile Interaktions-, Screenreader- oder Zoomprüfung wurde durchgeführt. Für den Gestaltungspilot sind entsprechende Entwurfsfälle und Erwartungen zu erarbeiten; ein technischer Test wird erst bei behaupteter Umsetzung benötigt. Die folgenden Abnahmeszenarien sind noch auszuführende Arbeiten. Source- und Live-Lektüre ersetzen diese Nachweise nicht.

## Priorisierte Lücken

### FIND-01 · Verbindlichen Suchumfang und Auslösung entscheiden

- **Typ / Rang:** E · P0 · Pilotblocker.
- **Aktueller Beleg:** [Suchen und Filtern](http://127.0.0.1:3010/systems/shadcn/suchen-filtern) verlangt Sichtbarkeit von sofortiger oder bestätigter Anwendung, entscheidet aber nicht zwischen beiden. [InvoiceList](../../../src/docs/invoices/list.tsx) sucht sofort lokal in Nummer und Titel, ohne Gross-/Kleinschreibung, kombiniert mit einem Status über UND. Das belegt Beispielverhalten, keinen Produktvertrag.
- **Erforderliches Ergebnis:** Für die Pilotmenge Suchfelder, Abgleich, Kombination, Anwendungszeitpunkt und vollständige versus teilweise Ergebnismenge ausdrücklich festlegen. Lokale Sofortsuche ist eine mögliche begrenzte Entscheidung. Ein Serverpfad benötigt zusätzlich den Umgang mit überholten Antworten; er ist nicht automatisch Pflicht.
- **Hängt ab von:** Systemprofil/Plattform und Inhalt (Begriffe, Labels); Grundlage für FIND-02/04/07.
- **Abnahmeszenario:** Zwei Personen sagen für dieselbe Kombination aus Suchbegriff und Status dieselbe Ergebnismenge und denselben Auslösungszeitpunkt voraus. Bei asynchroner Suche verdrängt eine verspätete alte Antwort keine neuere Anfrage.

### FIND-02 · Rückkehr, Neuladen und Direktaufruf unterscheiden

- **Typ / Rang:** E · P0 · Pilotblocker.
- **Aktueller Beleg:** [Detailroute](../../../src/app/(docs)/systems/shadcn/beispiele/rechnungen/[id]/page.tsx) erhält `q`/`status` im expliziten Rücklink; live bestätigt. [Liste](../../../src/docs/invoices/list.tsx) schreibt Änderungen nicht während der Eingabe in die aktuelle URL. Der Detailtext verlangt Kontexterhalt nur „wenn das Produkt dies unterstützt“.
- **Erforderliches Ergebnis:** Benennen, welche Kriterien bei expliziter Rückkehr, Browser-Zurück, Reload und direkt geöffnetem Detail erhalten bleiben; Rückkehrposition und Fokusziel sowie verständlichen Ersatz bei entfallenem Ergebnis entscheiden. Keine pauschale Forderung nach sitzungsübergreifender Speicherung.
- **Hängt ab von:** FIND-01; Layout/Navigation; Inklusion; Plattformzustand.
- **Abnahmeszenario:** Filter setzen, ein späteres Ergebnis öffnen und über beide Rückwege zurückkehren; danach Liste neu laden und Detail direkt öffnen. Jeder Pfad zeigt den dokumentierten Zustand, ein erklärtes Rückziel und nachvollziehbaren Fokus.

### FIND-03 · Vorhandene Regionen zu einem nachvollziehbaren Einstieg verbinden

- **Typ / Rang:** D · P0 · Pilotblocker für den vollständigen Weg.
- **Aktueller Beleg:** [Übersichtsbeispiel](http://127.0.0.1:3010/systems/shadcn/layout/uebersicht) zeigt vier gleichwertige Bereiche, aber keinen Link innerhalb der Rechnungskarte. Die [Suchseite](http://127.0.0.1:3010/systems/shadcn/suchen-filtern) platziert Suche bereits über Ergebnissen; die [Detailseite](http://127.0.0.1:3010/systems/shadcn/detailseite) erklärt Navigation, Identität, Aktionen und Hauptinhalt.
- **Erforderliches Ergebnis:** Ein annotierter Weg verknüpft diese bestehenden Regeln: Bereichseinstieg, Listenüberschrift, Such-/Filterregion, Ergebniszahl, Ergebnislink, Detailidentität und Rückweg. Übersicht als statisches Schema kennzeichnen oder im Aufgabenbeispiel mit echtem Einstieg versehen. Keine zusätzliche Card-Pflicht ableiten.
- **Hängt ab von:** Layout/Navigation, Content; FIND-02 für den Rückweg.
- **Abnahmeszenario:** Eine zweite Person startet in der Übersicht, findet ohne mündliche Hilfe die Rechnungssuche, öffnet einen Datensatz und benennt auf jedem Schritt ihren Ort und die nächste Handlung.

### FIND-04 · Nulltreffer, Leere und Fehler als vorhandenen Vertrag konsolidieren

- **Typ / Rang:** D · P0 · Pilotblocker für selbstständige Umsetzung.
- **Aktueller Beleg:** [Laden, leer und Fehler](http://127.0.0.1:3010/systems/shadcn/laden-leer-fehler) und [Demo](../../../src/docs/invoices/list.tsx) enthalten die wesentlichen Unterscheidungen bereits. Der Live-Zustandswechsel wurde für Nulltreffer, Erstleere und Fehler geprüft. Die Aussage „Prüfe, ob Statusänderungen angekündigt werden“ nennt noch kein konkretes aufgabenbezogenes Prüfergebnis.
- **Erforderliches Ergebnis:** Eine führende Zustandstabelle verbindet vorhandene Ursache, Text, nächste Aktion, Erhalt der Kriterien und Rückkehr zu Ergebnissen. Die Simulation als Simulation benennen. Für Ladebeginn/-ende, Ergebniszahl und Fehler das erwartete Tastatur-/Screenreader-Verhalten beschreiben; bei einer späteren Implementierungsbehauptung den begrenzten Testnachweis verlinken.
- **Hängt ab von:** Content für Meldungen; Inklusion für Ankündigung/Fokus; FIND-01 für Ergebnisumfang. Offen-/Berechtigungs-/Offline-Sonderfälle nur bei realem Auslöser ergänzen.
- **Abnahmeszenario:** Leerer Bestand verlangt keine nutzlose Filterkorrektur; Nulltreffer bietet Reset; vorübergehender Fehler bietet Retry ohne Verlust. Bei Laden → Ergebnis/Fehler wird die Änderung verständlich vermittelt, ohne unerwarteten Fokusverlust.

### FIND-05 · Schmale Ergebnisdarstellung und Informationspriorität festlegen

- **Typ / Rang:** E · P0 · Pilotblocker für mobiles Web.
- **Aktueller Beleg:** [Tabellen und Listen](http://127.0.0.1:3010/systems/shadcn/tabellen-und-listen) verbietet das Ausblenden benötigter Werte ohne Detailzugang. [docs.css](../../../src/app/(docs)/docs.css) verwendet für die Rechnungstabelle `min-width: 460px` und horizontalen Überlauf, stapelt den Rahmen bei 760 px. Das ist eine konkrete Beispielstrategie, keine erklärte Auswahlregel für die Pilotdaten.
- **Erforderliches Ergebnis:** Für die Aufgabe Vergleichstabelle mit bedienbarem Überlauf oder alternative kompakte Ergebnisanordnung entscheiden; notwendige Identität, Status, Vergleichswerte und Detailaktion priorisieren. Kriterien für lange Inhalte, Zoom, Filterumbruch und erreichbare Eingabe bei Bildschirmtastatur festhalten, ohne pauschale native Regeln.
- **Hängt ab von:** BASE-01 (Scope/Datenfall), BASE-02 (visuelle Referenz); Layout, Typografie, Abstände; Inklusion; FIND-01.
- **Abnahmeszenario:** Derselbe Such-/Detailweg ist in einem Entwurf mit langem Titel und grosser Schrift in breiter und schmaler Ansicht nachvollziehbar gestaltet. Benötigte Werte und alle Aktionen bleiben erreichbar; ein eventuell horizontaler Tabellenbereich wird verstanden und lässt sich bedienen. Geprüfte Entwurfsflächen protokollieren; Browser erst beim Umsetzungstest ergänzen.

### FIND-06 · Wiederverwendbare Aufgabenreferenz statt verstreuter Einzelbeispiele bereitstellen

- **Typ / Rang:** B · P1 · Vor Übergabe an ein zweites Pilotteam; kein Grund, den ersten Review zu stoppen.
- **Aktueller Beleg:** Die [Liste](../../../src/docs/invoices/list.tsx) koppelt Darstellung, fest importierte Rechnungsdaten und Simulationssteuerung. [Übersicht](http://127.0.0.1:3010/systems/shadcn/layout/uebersicht), Suchdokumentation und Detailregeln liegen getrennt. Im geprüften Bestand ist keine gemeinsame, annotierte und für einen zweiten Datensatz übertragbare Aufgabenressource belegt. Dies ist keine Aussage über das Fehlen von Table/Select in shadcn und keine Forderung nach neuen Grundkomponenten.
- **Erforderliches Ergebnis:** Aus Vorhandenem eine wiederverwendbare Referenzzusammensetzung mit Daten-/Inhaltsstellen, Varianten für breit/schmal, Zuständen und klarer Demogrenze herstellen. Eine dokumentierte Vorlage genügt; eigenständiges Paket oder Figma-Datei ist nicht automatisch erforderlich.
- **Hängt ab von:** FIND-01–05; BASE-03 (nutzbare Ressourcen), BASE-04 (verantwortete Regel), BASE-05 (unabhängiger Gestaltungstest) und Komponentenreferenzen.
- **Abnahmeszenario:** Ein zweites Team ersetzt Rechnungen durch einen vereinbarten anderen Datensatz und gestaltet denselben Weg, ohne Struktur, Zustandsbedeutung oder Rückkehr neu zu erfinden. Es kann die übernommene Revision und verbleibende Produktentscheidungen nennen.

### FIND-07 · Grössere Mengen und Mehrfachauswahl bewusst begrenzen

- **Typ / Rang:** E · P1 · Scopeentscheidung im Pilot; Umsetzung später bei Bedarf.
- **Aktueller Beleg:** [Tabellen und Listen](http://127.0.0.1:3010/systems/shadcn/tabellen-und-listen) erwähnt Sortierung, Seitennavigation und Massenaktionen im Umfeld eines Upstream-Beispiels. Die lokale [Rechnungsliste](../../../src/docs/invoices/list.tsx) besitzt fünf Datensätze und einzelne Detailverweise, keine entsprechenden Controls. Das ist kein Beleg fehlender Bibliotheksfähigkeiten.
- **Erforderliches Ergebnis:** Pilot als vollständige kleine Ergebnismenge mit Einzelöffnung begrenzen oder tatsächliche Sortier-/Mengen-/Auswahlanforderung benennen. Erst bei Angebot Auswahlumfang, Seitenwechsel und Rückkehrvertrag spezifizieren. Upstream-Fähigkeit und lokale Demoabdeckung sprachlich trennen.
- **Hängt ab von:** Systemprofil/Datenmenge, FIND-01/02; Komponenten und Content bei Sammelauswahl.
- **Abnahmeszenario:** Lesende erkennen ohne Demo-Inspektion, welche Funktion für den Pilot angeboten wird. Wenn Seitennavigation/Mehrfachauswahl benötigt wird, bleibt bei Filter- und Seitenwechsel die sichtbare Auswahlzahl samt Wirkungsumfang korrekt; andernfalls ist die Grenze ausdrücklich dokumentiert.

### FIND-08 · Fehlendes oder unzugängliches Detail in den Rückweg einbinden

- **Typ / Rang:** E · P1 · Pilotblocker bei veränderlichen oder berechtigten Daten; sonst begründet später.
- **Aktueller Beleg:** [Detailseite](http://127.0.0.1:3010/systems/shadcn/detailseite) verlangt bereits die Unterscheidung Laden / fehlend / kein Zugriff und überlässt sensible Metadaten der Produktberechtigung. [Detailroute](../../../src/app/(docs)/systems/shadcn/beispiele/rechnungen/[id]/page.tsx) ruft bei unbekannter ID `notFound()` auf; eine produktbezogene Berechtigungs- und Rückkehrentscheidung ist dort nicht vorhanden.
- **Erforderliches Ergebnis:** Für reale Pilotdaten klären, ob Objekte zwischen Ergebnis und Öffnen verschwinden oder Rechte wechseln können; zulässige Identitätsanzeige und erreichbaren Rückweg entscheiden. Falls ausgeschlossen, den Grund und Reviewauslöser nennen.
- **Hängt ab von:** Produktberechtigung/Plattform, Content, FIND-02/04; Detail-Layout.
- **Abnahmeszenario:** Ein zuvor gefundenes Objekt fehlt beim Öffnen oder darf nicht angezeigt werden. Die Person versteht den Zustand, erhält keine unzulässigen Metadaten und erreicht eine sinnvolle Liste mit dem vereinbarten Kontext.

## Empfohlene Reihenfolge

Zuerst Suchumfang und Rückkehr entscheiden (FIND-01/02), vorhandene Ablauf-/Zustandsregeln zusammenführen (03/04), die mobile Anordnung am tatsächlichen Inhalt entscheiden und prüfen (05). Anschliessend die übertragbare Referenz bereitstellen (06). Erweiterungs- und Detailausnahmebedarf (07/08) früh begrenzen, aber nur ausgelöste Funktionen umsetzen. Die Aufgabe bleibt bis zur Erfüllung der für den Pilot relevanten Kriterien **draft**; funktionierende Einzelpfade sind keine pauschale Webfreigabe.
