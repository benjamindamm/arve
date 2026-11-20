# Weitere UX-Patterns der PostFinance-Demo

Ergänzung zu [ux-patterns.md](ux-patterns.md), Stand 20. November 2026. Acht zusätzliche Aufgabenmuster; keine neuen Seitentypen und keine künstliche Aufteilung der bereits untersuchten Suche.

Eigener BrowserOS-neo-Tab. Screenshots tatsächlich angesehen, nicht als Dateien gespeichert. Breite Prüfung: 1440×1000 CSS-Pixel. Ausgewählte schmale Prüfung: 390×844 CSS-Pixel. Alle folgenden Pfade beginnen mit `https://www.postfinance.ch/ap/ga/ob/html/finance/`. Inhalte und Identitäten der Demodaten werden nicht übernommen.

## E1 · Mehrere Zeilen auswählen — Batch selection

**Aufgabe:** Eine Gruppe von Bewegungen für eine gemeinsame Folgeaktion markieren. Quelle: `assets/analysis/label-overview`, Vermögen → Analysen → Tags.

**Bedient:** Eine Zeilencheckbox anklicken → diese Zeile trägt ein sichtbares Häkchen. „Select all“ anklicken → auch die weiteren sichtbaren Tabellenzeilen sind angehakt; beim Scrollen bleiben die Markierungen erkennbar. „Select all“ erneut betätigt, danach die Seite verlassen. Keine Kategorie-/Tag-Aktion ausgeführt.

**Nur sichtbar:** Die Tabelle enthält eigene Details pro Zeile. Außerhalb der Tabelle stehen Aktionen zum Ändern einer Kategorie und zum Hinzufügen/Entfernen von Tags. Damit sind Auswahl und Ausführung getrennte Schritte.

**Grenzen:** Ein expliziter Auswahlzähler oder ein gemischter Zustand der Kopfcheckbox wurde nicht sicher belegt. Auswahl über Pagination, Filterwechsel und Seitenwechsel nicht geprüft. Nur breit interaktiv geprüft. Keine Aussage über die Speicherwirkung einer späteren Bulkaktion.

**Handbuch:** Tabellen und Listen führt Auswahlumfang, Einzel-/Gesamtauswahl und Folgeaktionen; Auswahl und Suche verweist darauf. Eine Referenz sollte ausdrücklich entscheiden, ob „alle“ nur die sichtbaren oder alle gefundenen Zeilen meint.

## E2 · Reihenfolge explizit wählen — Sort control

**Aufgabe:** Dieselbe Liste nach einem anderen Kriterium durchsehen. Quelle: `transfer/pending-orders/search-single-orders`, Zahlungen → Zahlungen/Kontoüberträge.

**Bedient:** Suchbereich eingeklappt → „Sort by“ bleibt oberhalb der Tabelle zugänglich. Auswahl öffnen → Fälligkeit auf-/absteigend, Empfänger und Betrag auf-/absteigend werden angeboten. „Amount descending“ wählen → Liste schließt, gewählte Sortierung steht im Control.

**Grenzen:** Der gewählte Modus ist belegt; die Demotabelle zeigte keinen eindeutig nachweisbaren fachlichen Reihenfolgewechsel. Keine Sortierkorrektheit behauptet. Keine Mehrfachsortierung oder eigene mobile Sortierprüfung.

**Handbuch:** Tabellen und Listen. Sortierung verändert die Reihenfolge, Filter die Menge; beide Aufgaben getrennt erklären. Keine zusätzliche Patternseite für jede Sortierrichtung.

## E3 · Zeilenaktionen einblenden — Row action menu

**Aufgabe:** Seltenere Aktionen für genau ein Objekt finden. Quelle: dieselbe Zahlungsübersicht.

**Bedient:** Overflow-Button neben „Details“ in einer Zeile öffnen → kleines Menü am rechten Tabellenrand mit Change, Delete und Copy. Die übrigen Zeilen behalten ihre eigenen Controls. Anschließend Escape gedrückt und weg navigiert; die Wirkung von Escape allein wurde nicht gesondert verifiziert.

**Nur sichtbar:** Die Detailnavigation bleibt direkt erreichbar; weitere Aktionen sind im Menü gebündelt. Keine der Menüaktionen wurde gewählt.

**Grenzen:** Kein Beleg für Löschdialog, Rücknahme, Erfolg oder Fehler. Der zugängliche Snapshot gab den Overflow-Button nur mit einem unspezifischen Zeichen wieder; daraus folgt keine vollständige Accessibility-Bewertung, aber eine lokale Referenz sollte einen klaren objektbezogenen Namen verwenden. Breit geprüft.

**Handbuch:** Tabellen und Listen führt das Zeilenmenü. „Destruktive Aktionen bestätigen“ behandelt erst den nachfolgenden Entscheidungsweg; dieser ist hier nicht belegt.

## E4 · Hilfe am Arbeitskontext öffnen — Contextual help

**Aufgabe:** Eine Karte verstehen, ohne eine andere Seite aufzusuchen. Quelle: `home`, Hilfe der Bewegungskarte.

**Bedient:** Help im Kartenkopf anklicken → erklärender Hilfebereich mit Unterüberschriften, zusätzlichem Hilfelink und Schließen erscheint. Breit steht die Hilfe neben der zugehörigen Karte. Diese Karte bleibt hell, der übrige Hintergrund wird abgedunkelt. Über den Schließen-Button wurde die breite Hilfe wieder verlassen.

**Schmal bedient:** Dieselbe Hilfe erneut geöffnet. Sie steht nun im vertikalen Inhaltsfluss statt seitlich neben der Karte; Text bricht um, Schließen bleibt oben am Hilfebereich erreichbar. Die Ansicht wurde screenshot-visuell geprüft. Kein weiterführender Hilfelink geöffnet.

**Grenzen:** Keine Prüfung von Fokusfalle, Escape, Screenreader oder Rückkehr des Tastaturfokus. Es handelt sich um einen größeren erklärenden Hilfebereich, nicht bloß um einen kurzen Tooltip.

**Handbuch:** Als kontextbezogene Hilfe ergänzen. Von Feldfehlern und Systemmeldungen trennen: Die Person fordert hier eine Erklärung an; es ist kein Fehler aufgetreten.

## E5 · Darstellung wechseln — Chart/table view switch

**Aufgabe:** Dieselben Auswertungen grafisch überblicken oder als Werte lesen. Quelle: `assets/analysis`, Vermögen → Übersicht Analysen.

**Bedient:** Auswahl „Chart“ am Zeitverlauf öffnen → Chart/Table werden angeboten. Table wählen → anstelle der Balkengrafik erscheint eine Tabelle mit Zeit, Einnahmen, Ausgaben und Saldo. Konto-/Zeitraumkontext und die umgebenden Analysebereiche bleiben bestehen.

**Nur sichtbar:** Die zugängliche Struktur weist bei der Grafik auf die Tabellenalternative hin. Die Tabellenansicht wurde nach Scrollen visuell geprüft.

**Grenzen:** Keine Prüfung der zahlenmäßigen Gleichheit beider Ansichten oder vollständigen Screenreader-Bedienbarkeit. Der Rückwechsel wurde nicht zusätzlich bedient. Nur breit geprüft.

**Handbuch:** Tabellen und Listen sowie ein Querverweis aus Datenvisualisierung. Die Tabellenalternative ist eine andere Darstellung derselben Aufgabe, kein neuer Datensatz und keine neue Filtervariante.

## E6 · Weitere Informationen offenlegen — Show more disclosure

**Aufgabe:** Eine zunächst kurze Informationsliste vollständig ansehen. Quelle: `services/customer-hub/profile`, Profil → Bedingungen.

**Bedient:** Die Liste zeigt zunächst drei Dokumenteinträge und „Show all“. Anklicken → sechs Einträge stehen im selben Abschnitt, der Show-all-Button entfällt. Die längere Liste wurde visuell geprüft.

**Abgrenzung:** Das unterscheidet sich vom Suchaccordion: Hier wird die Menge der sichtbaren Informationsangebote erweitert; es werden keine Filterfelder ein-/ausgeblendet. Keine Bedingung geöffnet, akzeptiert oder geändert.

**Grenzen:** Ein „Show less“-Rückweg war danach nicht sichtbar. Kein Beleg für Pagination, Netzwerknachladen oder persistierten Aufklappzustand. Nur breit geprüft.

**Handbuch:** Informationsdarstellung/Progressive Disclosure. Eine Referenz soll festlegen, ob die Erweiterung wieder geschlossen werden kann und ob der Standort im Abschnitt erhalten bleibt.

## E7 · Automatische Inhalte anhalten — Pauseable carousel

**Aufgabe:** Rotierende Angebote in Ruhe ansehen und selbst weiterblättern. Quelle: `offers`, Produkte → Gutscheinkarte.

**Bedient:** Der Controlname meldet zunächst „Automatic slide: Running“. Anklicken → „Stopped“, visuell erscheint eine Wiedergabeaktion. Next betätigt → die Gutscheinauswahl wird manuell weitergeschaltet; der Modus bleibt Stopped. Screenshot des angehaltenen Zustands angesehen. Anschließend Automatik wieder eingeschaltet.

**Nur sichtbar:** Zurück, Weiter und eine separate Details-Aktion sind vorhanden. Kein Gutschein ausgewählt oder gekauft.

**Grenzen:** Die genaue Rotationsdauer, Reihenfolge aller Angebote und Tastatur-/Screenreader-Bedienung wurden nicht geprüft. Nur breit geprüft.

**Handbuch:** Bewegung und Interaktion sowie Barrierefreiheit; als konkrete Aufgabe „Automatik anhalten und manuell steuern“. Kein allgemeiner Beleg, dass Karussells für Produktnavigation die beste Wahl sind.

## E8 · Navigationsebene wechseln und verlassen — Drill-down navigation

**Aufgabe:** In einer Bereichshierarchie ein Ziel finden, ohne die Orientierung zu verlieren. Quelle: `home`, schmale Hauptnavigation.

**Bedient bei 390×844:** Menu → Hauptmenü öffnet. Assets → Bereichsansicht mit großem Titel und gruppierten Zielen. Back → Hauptmenü mit seinen Hauptbereichen wieder sichtbar. Close → Menü verschwindet, Home bleibt als Seite erhalten. Untermenü screenshot-visuell geprüft.

**Unterschied breit/schmal:** Die breite Oberfläche zeigt Hauptbereiche direkt in der horizontalen Navigation. Schmal übernimmt ein nahezu bildschirmbreiter seitlicher Bereich die Hierarchie. Back wechselt eine Menüebene; Close verlässt die Navigation insgesamt. Diese beiden Aufgaben sind nicht identisch.

**Grenzen:** In dieser Probe wurde kein Unterziel ausgewählt; kein Browser-Zurück-/Historyverhalten oder Fokuspfad geprüft. Die vorher untersuchte Rückkehr aus einem Fehlerziel bleibt ein anderer, begrenzter Befund.

**Handbuch:** Seitenstruktur und Navigation. Kein eigener Seitentyp; ein Navigationsablauf mit zwei Rückwegen.

## Ergänzungen ohne weitere Patternzählung

- **Suche in Kontenauswahl, aktive Filter entfernen:** Nicht erneut geprüft. Sie gehören zur bereits beschriebenen Auswahl-/Suchfamilie; kein zusätzlicher Patternbeleg aus dieser Runde.
- **Paging und Zeilenexpansion:** In den untersuchten Tabellen nicht belastbar nachgewiesen. Show all bei Bedingungen ist keine Tabellenpagination.
- **Dashboard-Anpassung:** Der frühere sichtbare Edit-Modus bleibt gültig. Wegen ungeklärter Autosave-Semantik wurden keine Karten verschoben/entfernt und keine Positionen geändert.
- **QR-/Stepper-Fortschritt:** Nicht weitergeschaltet. Kein zusätzlicher Beleg für einen vollständigen Wizard oder Review-Schritt.
- **Print/Export und Uploadformate:** Sichtbare Angebote aus dem bisherigen Inventar; nicht ausgeführt. Keine neue Aufgabe allein aus einem vorhandenen Button ableiten.

## Prioritäten und Grenzen

Für das Handbuch zuerst **Mehrfachauswahl**, **Sortierung**, **Zeilenaktionsmenü** und **Diagramm-/Tabellenwechsel** unter Tabellen/Listen ergänzen. Danach **kontextbezogene Hilfe**, **Show more** und **Drill-down-Navigation** als getrennte Aufgaben mit Rückweg behandeln. Das **anhaltbare Karussell** ist ein gezielter Bewegungsfall mit niedrigerer Priorität.

Die acht Muster sind unterschiedlich, brauchen aber nicht acht neue Handbuchseiten. Der Zusammenhang von Nutzeraufgabe, gewähltem Zustand und nächstem Schritt ist wichtiger als die Anzahl benannter Bausteine. Offene Zustände bleiben offen: insbesondere Bulkabschluss, Löschbestätigung, Paging, Speichersemantik und Fehlerwiederherstellung.

Keine Finanzaktion, Bestellung, Vertragsaktion, Löschung, Speicherung oder Kontaktaufnahme ausgeführt. Keine App-/CMS-Änderung, keine personenbezogenen Daten in diesem Bericht. Frühere Berichte unverändert. Dies ist eine begrenzte visuelle und interaktive Referenz, keine Funktions- oder Barrierefreiheitsfreigabe.
