# Pattern-Katalog

Referenzaufnahme der PostFinance-Demo. IDs sind stabil; alle Einträge bleiben fachliche Kandidaten. Prüfstatus steht bei jeder Beobachtung.

| ID | Pattern | Kategorie | Tags |
| --- | --- | --- | --- |
| [UX-001](#ux-001) | Filter anwenden | Finden | context, filters |
| [UX-002](#ux-002) | Liste sofort filtern | Finden |  |
| [UX-003](#ux-003) | Ansichtskontext wählen | Auswählen |  |
| [UX-004](#ux-004) | Datumsbereich validieren | Eingeben |  |
| [UX-005](#ux-005) | Bedingte Felder anzeigen | Eingeben | conditional, responsive |
| [UX-006](#ux-006) | Import beginnen und abbrechen | Verstehen | dialog, import |
| [UX-008](#ux-008) | Status und Auswege erklären | Zustände | error, processing, table |
| [UX-009](#ux-009) | Mehrere Einträge auswählen | Auswählen | batch-selection, bulk, checkbox, disabled, selection |
| [UX-010](#ux-010) | Liste sortieren | Finden | sort, table |
| [UX-011](#ux-011) | Aktionen zu einem Eintrag öffnen | Handeln | overflow, table |
| [UX-012](#ux-012) | Hilfe im Arbeitskontext öffnen | Verstehen |  |
| [UX-013](#ux-013) | Diagramm und Tabelle wechseln | Verstehen |  |
| [UX-014](#ux-014) | Weitere Informationen aufklappen | Verstehen |  |
| [UX-016](#ux-016) | Navigationsebenen öffnen und verlassen | Navigieren |  |
| [UX-017](#ux-017) | Nulltreffer erklären | Zustände | empty, filters |
| [UX-018](#ux-018) | Nach Aufgaben navigieren | Navigieren | dashboard, navigation |
| [UX-019](#ux-019) | Tabs durch kompakte Auswahl ersetzen | Navigieren | responsive, tabs |
| [UX-020](#ux-020) | Werte in einer Tabelle bearbeiten | Bearbeiten | inline, template |
| [UX-021](#ux-021) | Auswirkungen vor einer Aktion anzeigen | Verstehen | forecast, summary |
| [UX-022](#ux-022) | In einen eingebetteten Arbeitsbereich wechseln | Navigieren | context, iframe |
| [UX-023](#ux-023) | Bearbeitung öffnen und abbrechen | Bearbeiten |  |
| [UX-024](#ux-024) | Alternativen vergleichen | Verstehen | comparison |
| [UX-025](#ux-025) | Eine Einführung durchgehen | Verstehen | dialog, onboarding |
| [UX-026](#ux-026) | Weitere Einträge laden | Finden | show-more-disclosure, table |
| [UX-027](#ux-027) | Erforderliche nächste Handlung anzeigen | Zustände | deadline, row-action |
| [UX-028](#ux-028) | Von einer Mitteilung zur Aufgabe wechseln | Navigieren |  |
| [UX-029](#ux-029) | Eintrag aus einer Übersicht öffnen | Navigieren |  |
| [UX-030](#ux-030) | Verbrauch gegenüber einem Ziel anzeigen | Zustände | budget, progress, threshold |

## UX-001 · Filter anwenden

Kategorie: Finden · Tags: context, filters

### Home und Vermögen / Assets · tested

Bewegungen mit mehreren Kriterien eingrenzen.

1. Search options öffnen
2. Testwort eingeben
3. Search
4. Übernommenes Stichwort ansehen
5. Erneut öffnen und Reset: angewandtes Stichwort bleibt

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/assets/movements-overview)

Grenzen: Reset leert Entwurf, nicht sofort die angewandte Suche. Fachliche Ergebniskorrektheit der Demo nicht belegt.

### payments · tested

Ergebnismenge im Kontext lesen

1. Suchoptionen einklappen
2. Aktive Suchkriterien bleiben sichtbar
3. Ergebnisse oder Nulltreffer lesen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/transfer/pending-orders/search-single-orders), [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/transfer/standing-orders/search-standing-orders), [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/upload/payment-order/collective-order-overview-epo)

Grenzen: Keine neue Suchkombination übernommen; Apply-/Reset-Semantik hier nicht erneut getestet.

## UX-002 · Liste sofort filtern

Kategorie: Finden · Tags:

### Home und Vermögen / Assets · tested

Angezeigte Zeilen schnell durchsuchen.

1. Testwort in Filter list
2. Nulltreffer sehen
3. Feld leeren
4. Zeilen wieder sichtbar

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/assets/movements-overview)

Grenzen: Keine Persistenz oder reguläre Detailrückkehr geprüft.

### documents-insurance-products-services · tested

Unter vorhandenen Serviceaufträgen Treffer eingrenzen.

1. Filter list mit synthetischem Nichttreffer füllen
2. No results were found
3. Reset
4. Zeilen wieder sichtbar

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/services/order-overview)

Grenzen: Bekannte Livefilter-Familie; keine fachliche Suchkorrektheit oder Persistenzprüfung.

## UX-003 · Ansichtskontext wählen

Kategorie: Auswählen · Tags:

### Home und Vermögen / Assets · tested

Zeitraum der Analyse wählen.

1. Period öffnen
2. Custom wählen
3. Von/Bis-Dialog ansehen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/assets/analysis)

Grenzen: Kontenauswahl nur sichtbar. Erfolgsübernahme nach Korrektur in diesem Lauf nicht gesondert ausgewertet.

## UX-004 · Datumsbereich validieren

Kategorie: Eingeben · Tags:

### Home und Vermögen / Assets · tested

Ungültige Beziehung zwischen Datumsfeldern verstehen.

1. Von nach Bis eingeben
2. Apply
3. Dialog bleibt, rote feldnahe Meldung, Eingaben erhalten
4. Reihenfolge korrigieren

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/assets/analysis)

Grenzen: Korrigiertes Apply geklickt, danach navigiert. Kein gesonderter Erfolgsbeleg dieses Laufs; frühere Quelle beschreibt vollständigen Ablauf. Kein Tastatur-/Screenreadertest.

## UX-005 · Bedingte Felder anzeigen

Kategorie: Eingeben · Tags: conditional, responsive

### payments · tested

Ausführung terminieren

1. Enter date wählen
2. Datumsfeld und Kalender erscheinen
3. Immediately wählen
4. Datumsfeld entfällt

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/transfer/transfers)

Grenzen: Keine Betragserfassung oder Send; Datumerhalt und Validierung offen. Breit und 390×844 visuell geprüft; schmaler Datumszustand nach Scrollen gesehen.

## UX-006 · Import beginnen und abbrechen

Kategorie: Verstehen · Tags: dialog, import

### payments · tested

Datenverwendung vor Dateiauswahl verstehen

1. QR-Einstieg öffnen
2. Informationsdialog lesen
3. Cancel betätigen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/transfer/invoice-scan/create)

Grenzen: Rückkehrziel in diesem Lauf nicht belastbar bestätigt; keine Datei/Confirm.

## UX-008 · Status und Auswege erklären

Kategorie: Zustände · Tags: error, processing, table

### payments · tested

Dateiverarbeitung einschätzen

1. Dateiübersicht öffnen
2. Text/Icon und Legende lesen
3. Details einer Fehlerdatei öffnen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/upload/payment-order/file-overview-epo), [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/upload/payment-order/collective-order-overview-epo)

Grenzen: Keine Datei übertragen; keine zeitliche Progression beobachtet. Fehlerdatei führte zur Pending-Auftragsübersicht; Fehlerursache damit nicht aufgeklärt.

### documents-insurance-products-services · tested

Demo-Grenze erkennen und Rückweg finden.

1. Mailbox-Ziel öffnen
2. Explizite Nichtverfügbarkeit
3. Back sehen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/contact/mailbox), [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/error/overview)

Grenzen: Back in diesem Lauf nicht bedient; kein Recoverybeleg.

## UX-009 · Mehrere Einträge auswählen

Kategorie: Auswählen · Tags: batch-selection, bulk, checkbox, disabled, selection

### Home und Vermögen / Assets · tested

Zeilen vor gemeinsamer Folgeaktion markieren.

1. Einzelcheckbox
2. Select all
3. Mehrere sichtbare Häkchen nach Scrollen prüfen
4. Abwählen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/assets/analysis/label-overview)

Grenzen: Keine Folgeaktion, Filterwechsel, Pagination oder Auswahlpersistenz. Gemischter Kopfzustand nicht belegt.

### payments · tested

Auftrag für Freigabe vormerken

1. Eine Zeile markieren
2. Häkchen sehen
3. Aktivierte Folgeaktion erkennen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/transfer/approve), [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/upload/payment-order-approve/epo)

Grenzen: Nur Zahlungsfreigabe interaktiv; EZAG Variante sichtbar. Kein Select-all-/gemischter Zustand geprüft; Abwahl-API meldete Fehler; Seite danach verlassen. Keine Freigabe ausgeführt.

### payments · tested

Erkennen wann eine Aktion möglich wird

1. Ohne Auswahl deaktivierte Aktion sehen
2. Zeile markieren
3. Aktive Aktion sehen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/transfer/approve), [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/upload/payment-order-approve/epo)

Grenzen: Kein Finanzabschluss; Rückwechsel in deaktiviert nicht verifiziert.

### documents-insurance-products-services · tested

Dokumente für eine gemeinsame Folgeaktion markieren.

1. Zeile auswählen
2. Passende Bulkaktionen werden aktiv
3. Zeilenmenü ansehen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/download/documents)

Grenzen: Variante von batch-selection; kein eigener Bulkabschluss. Nur eine ungelesene Zeile; kein gemischter oder seitenübergreifender Auswahlumfang.

## UX-010 · Liste sortieren

Kategorie: Finden · Tags: sort, table

### payments · tested

Aufträge in anderer Reihenfolge betrachten

1. Sortierung öffnen
2. Amount descending wählen
3. Gewählten Modus am Control erkennen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/transfer/pending-orders/search-single-orders)

Grenzen: Demodaten zeigen keinen beweisbaren fachlichen Reihenfolgewechsel.

## UX-011 · Aktionen zu einem Eintrag öffnen

Kategorie: Handeln · Tags: overflow, table

### Home und Vermögen / Assets · tested

Aktionen zu einem Objekt finden.

1. Zeilenmenü öffnen
2. Objektbezogene Optionen lesen
3. Ohne Folgeaktion verlassen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/assets), [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/assets/analysis/expense-limit-overview)

Grenzen: Kein Lösch-/Kündigungsdialog oder Abschluss. Kontenmenü und Budgetmenü sind Varianten.

### payments · tested

Aktionen einer Zeile finden

1. Overflow neben Details öffnen
2. Change/Delete/Copy ansehen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/transfer/pending-orders/search-single-orders)

Grenzen: Keine Änderung/Kopie/Löschung oder Bestätigung ausgeführt.

### documents-insurance-products-services · tested

Dokumentspezifische Aktionen finden.

1. Overflow öffnen
2. Read/Archive im Zeilenkontext sehen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/download/documents)

Grenzen: Keine Aktion ausgeführt; keine Bestätigung oder Rücknahme geprüft.

## UX-012 · Hilfe im Arbeitskontext öffnen

Kategorie: Verstehen · Tags:

### Home und Vermögen / Assets · tested

Karteninhalt erklären lassen.

1. Schmal Help Transaction overview öffnen
2. Erklärungen im Hilfebereich lesen
3. Close

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/home)

Grenzen: 390×844 geprüft; weiterführende Hilfe und Fokusverhalten ungeprüft.

## UX-013 · Diagramm und Tabelle wechseln

Kategorie: Verstehen · Tags:

### Home und Vermögen / Assets · tested

Analyse als Werte statt Grafik lesen.

1. Chart öffnen
2. Table wählen
3. Tabelle mit Datum, Einnahmen, Ausgaben und Saldo ansehen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/assets/analysis)

Grenzen: Desktop geprüft. Keine numerische Gleichheit oder vollständige Barrierefreiheit nachgewiesen.

## UX-014 · Weitere Informationen aufklappen

Kategorie: Verstehen · Tags:

### documents-insurance-products-services · tested

Zunächst verkürzte Dokumentliste vollständig lesen.

1. Drei Bedingungen ansehen
2. Show all
3. Sechs Bedingungen sichtbar

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/services/customer-hub/profile)

Grenzen: Kein Show less gesehen; Dokumente nicht geöffnet. Entspricht vorhandenem Show-more-Muster.

## UX-016 · Navigationsebenen öffnen und verlassen

Kategorie: Navigieren · Tags:

### Home und Vermögen / Assets · tested

In der Bereichshierarchie orientieren.

1. 390px Menu
2. Assets
3. Back zum Hauptmenü
4. Close zurück zu Home

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/home)

Grenzen: Kein Unterziel in der schmalen Probe gewählt; keine Fokus-/Historyprüfung.

## UX-017 · Nulltreffer erklären

Kategorie: Zustände · Tags: empty, filters

### payments · visible

Ausbleibende Ergebnisse einordnen

1. Daueraufträge öffnen
2. Kriterien und Nulltreffermeldung lesen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/transfer/standing-orders/search-standing-orders)

Grenzen: Nulltreffer bereits vorhanden, nicht durch eigenen Filter erzeugt; Erholung nicht geprüft.

### documents-insurance-products-services · visible

Leeres Suchergebnis im aktiven Kontext verstehen.

1. Archiv öffnen
2. Aktive Kriterien lesen
3. Keine passenden Dokumente sehen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/download/bin)

Grenzen: Vorhandene Leere; keine Filterinteraktion oder Recovery.

## UX-018 · Nach Aufgaben navigieren

Kategorie: Navigieren · Tags: dashboard, navigation

### payments · tested

Passenden Einstieg nach Aufgabe wählen

1. Hauptbereich öffnen
2. Gruppierte Ziele Enter und Search/Edit prüfen
3. Aufgabenansicht öffnen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/transfer), [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/upload)

Grenzen: Nur sichtbare Ziele; keine vollständige produktive Reichweite.

### documents-insurance-products-services · tested

Produkt- oder Einstellungsaufgabe im Hub auswählen.

1. Bereichshub öffnen
2. Beschriftete Kategorie mit Kurztext finden
3. Repräsentatives Ziel öffnen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/offers), [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/services/customer-hub)

Grenzen: Kacheln allein sind kein neues Pattern; Kategorie-Navigation als Ablauf. Unterziele explizit offen gelistet.

## UX-019 · Tabs durch kompakte Auswahl ersetzen

Kategorie: Navigieren · Tags: responsive, tabs

### payments · visible

Zwischen Übertragsarten wechseln

1. Breit: Tabs sehen
2. Schmal: aktuelle Art in Auswahlbox sehen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/transfer/transfers)

Grenzen: Kein Wechsel in andere Übertragsart ausgeführt.

## UX-020 · Werte in einer Tabelle bearbeiten

Kategorie: Bearbeiten · Tags: inline, template

### payments · visible

Werte einer Vorlage am Objekt anpassen

1. Vorlagenliste sehen
2. Nachricht und Betrag in derselben Zeile vorfinden
3. Generate als getrennte Folgeaktion erkennen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/transfer/qr-bill-generator/templates/overview)

Grenzen: Felder unverändert; Autosave/Speicherung/Validierung unbekannt.

## UX-021 · Auswirkungen vor einer Aktion anzeigen

Kategorie: Verstehen · Tags: forecast, summary

### payments · visible

Künftige Kontobelastung einschätzen

1. Konto und Fälligkeit sehen
2. Guthaben/Auftragssumme/Saldo vergleichen
3. Nach Auftragstyp zu Details gehen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/transfer/order-overview)

Grenzen: Werte nicht übernommen; keine Berechnung oder Detailnavigation geprüft.

## UX-022 · In einen eingebetteten Arbeitsbereich wechseln

Kategorie: Navigieren · Tags: context, iframe

### payments · visible

In einem eingebetteten Rechnungsportal Orientierung behalten

1. eBill aus Banknavigation öffnen
2. Portalnavigation und eigene Tabs erkennen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/transfer/e-bill)

Grenzen: Portal-Unterziele und Rechnungsaktionen ungeprüft.

## UX-023 · Bearbeitung öffnen und abbrechen

Kategorie: Bearbeiten · Tags:

### documents-insurance-products-services · tested

Mögliche Vertragsänderung ansehen und verlassen.

1. Detail öffnen
2. Edit Investment theme
3. Entwurf mit bestehender Auswahl ansehen
4. Cancel

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/insurances/life-insurance-detail), [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/insurances/life-insurance-detail/edit-investment-topic)

Grenzen: Keine Wahl geändert; kein Beleg für Verwerfen geänderter Werte oder Speichersemantik.

## UX-024 · Alternativen vergleichen

Kategorie: Verstehen · Tags: comparison

### documents-insurance-products-services · visible

Angebote anhand gleicher Kriterien vergleichen.

1. Alternativen nebeneinander lesen
2. Bedingungen oder Kosten vergleichen
3. Informations- oder Abschlussaktion getrennt erkennen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/credit-card), [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/insurances/life-insurance-detail/edit-investment-topic)

Grenzen: Nur sichtbare Darstellung; kein Wechsel oder Abschluss. Nur breit; keine Entscheidungsqualität oder fachliche Richtigkeit geprüft.

## UX-025 · Eine Einführung durchgehen

Kategorie: Verstehen · Tags: dialog, onboarding

### documents-insurance-products-services · tested

Einstieg in zentrale Funktionen erhalten.

1. Support öffnen
2. E-finance in a nutshell
3. Slide 1 lesen
4. Next
5. Slide 2 und neuen Back-Control sehen
6. Close

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/contact-support)

Grenzen: Nur Schritte 1–2 von fünf bedient. 390×844: Dialog vertikal, Textumbruch und Close/Next sichtbar; dort kein Next-Versuch. Fokusführung/Tastatur/Screenreader ungeprüft.

## UX-026 · Weitere Einträge laden

Kategorie: Finden · Tags: show-more-disclosure, table

### documents-insurance-products-services · tested

Eine lange Auftragsliste weiter durchsuchen.

1. Sechs Zeilen sehen
2. Show more lines
3. Zwölf Zeilen und weitere Show-more-Aktion sehen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/services/order-overview)

Grenzen: Variante progressiver Offenlegung in einer Tabelle; kein Beleg für Serverpagination, Gesamtmenge oder Ende. Rücksetzen des Umfangs nicht untersucht.

## UX-027 · Erforderliche nächste Handlung anzeigen

Kategorie: Zustände · Tags: deadline, row-action

### documents-insurance-products-services · visible

Erkennen, warum ein Auftrag noch offen ist und welcher Schritt nötig ist.

1. Status mit Frist lesen
2. Upload bzw. Details am betroffenen Auftrag erkennen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/services/order-overview), [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/download/enquiry)

Grenzen: Vorhandene Zustände; keine zeitliche Progression oder Freigabe durchgeführt. Enquiries zeigt nur Active/Completed und Details, keine eigene Frist.

## UX-028 · Von einer Mitteilung zur Aufgabe wechseln

Kategorie: Navigieren · Tags:

### documents-insurance-products-services · visible

Eine neue Information in ihrem Arbeitsbereich öffnen.

1. Ungelesenzähler sehen
2. Dokument-/Nachrichtentyp unterscheiden
3. Zielbereich als Link erkennen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/services/my-notifications)

Grenzen: Links hier nicht direkt betätigt; kein Gelesenwechsel.

## UX-029 · Eintrag aus einer Übersicht öffnen

Kategorie: Navigieren · Tags:

### documents-insurance-products-services · tested

Eine Versicherung vertieft ansehen.

1. Versicherungstabelle
2. Details
3. Thematische Detailabschnitte

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/insurances/overview), [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/insurances/life-insurance-detail)

Grenzen: Nur ein repräsentativer Vertrag; keine vollständige Fachprüfung.

## UX-030 · Verbrauch gegenüber einem Ziel anzeigen

Kategorie: Zustände · Tags: budget, progress, threshold

### Home und Vermögen / Assets · visible

Verbrauch und Überschreitung eines Limits erkennen.

1. Budgetliste ansehen
2. Prozent, Balken und Spent/Available vergleichen
3. Rotes Exhausted budget erkennen

Quellen: [Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/assets/analysis/expense-limit-overview)

Grenzen: Nur vorhandene Zustände; kein Budget verändert und kein Übergang ausgelöst.

## Nachprüfung UX-001

Bereich: payments · tested

- Währungsentwurf wählen
- Search übernimmt und zeigt aktives Kriterium
- Reset leert nur Entwurf
- Erneutes Search entfernt angewandtes Kriterium

Grenzen: Demotabelle reagiert fachlich nicht nachvollziehbar auf EUR; nur UI-Übernahme belegt.

Bereich: documents-insurance-products-services · tested

- Dokumentkategorie im Suchentwurf wählen
- Ergebnis bleibt vor Search bestehen
- Search übernimmt, zeigt aktive Kriterien und klappt Suche ein
- Reset setzt nur Controls zurück
- Erneutes Search übernimmt Rücksetzung

Grenzen: Zusätzliche Quelle download/documents; Alias/Zuordnung im Hauptkatalog prüfen. Datumsrange wurde angezeigt, aber Zeilen lagen weiter außerhalb; keine fachliche Korrektheitsfreigabe.

## Nachprüfung UX-002

Bereich: Home und Vermögen / Assets · Follow-up 20.11.2026 · tested

- All accounts
- CASH
- Details-Link
- Demo nicht unterstützt
- Back: Kontokontext erhalten, lokales Filter leer

Grenzen: Ausschliesslich Fehler-Rückweg; echte Bewegungsdetailrückkehr weiter blockiert.

## Nachprüfung UX-003

Bereich: Home und Vermögen / Assets · Follow-up 20.11.2026 · tested

- Kontenliste öffnen
- Nichttreffer- und passendes Währungswort eingeben
- Leeren
- All accounts wählen

Grenzen: Suche grenzt Optionen sofort ein; Nichttrefferliste ohne sichtbare Erklärung. Keine allgemeine Such-/Barrierefreiheitsfreigabe.

## Nachprüfung UX-005

Bereich: payments · tested

- Enter date zeigt Datum
- Geänderten Datumsentwurf eingeben
- Immediately verbirgt Feld
- Enter date zeigt geänderten Wert wieder

Grenzen: Werterhalt innerhalb desselben ungesendeten Formulars belegt. Keine sichtbare Cancel-/Reset-Aktion, keine Aussage über Neuaufruf oder Persistenz. Geänderter Zustand auch 390×844 visuell gesehen.

## Nachprüfung UX-009

Bereich: Home und Vermögen / Assets · Follow-up 20.11.2026 · tested

- Einzelwahl
- Filter schliesst Zeile aus
- Filter leeren erhält Wahl
- Select all unter Filter
- Filter leeren erhält Markierungen nur der zuvor passenden Zeilen

Grenzen: Kopfcheckbox zeigt bei teilweiser Wahl kein erkennbares mixed; nach gefilterter Gesamtwahl bleibt Kopf-Häkchen trotz unmarkierter wieder sichtbarer Zeile. Keine Pagination/Bulkaktion.

Bereich: payments · tested

- Eine Zeile markieren
- Kopf bleibt visuell leer bei Teilmenge
- Kopf anklicken markiert beide sichtbaren Zeilen
- Erneuter Kopfklick leert beide und deaktiviert Folgeaktion
- Erneute Filterübernahme leert vorherige Zeilenauswahl

Grenzen: Kein sichtbarer Mixed-Strich bei 1/2 Auswahl. Nur zwei sichtbare Demozeilen; keine fachlich korrekte Filtermenge/Pagination belegt. Keine Freigabe ausgeführt.

Bereich: documents-insurance-products-services · tested

- Ungelesene und gelesene Dokumentzeile markieren
- Beide Statusaktionen aktiv
- Select all
- Eine Zeile abwählen
- Filter+Search
- Auswahl leer und Bulkaktionen deaktiviert

Grenzen: Variante von batch-selection; keine Ausführung. Kein sichtbarer gemischter Kopfmarker; Semantik ungeprüft. Keine sichtbare Pagination in dieser Probe.

## Nachprüfung UX-010

Bereich: payments · tested

- Amount descending wählen
- Reguläre Details öffnen
- Mit Back zurück
- Sortierung fällt auf Due date ascending zurück

Grenzen: Aktive Währung bleibt erhalten, Sortierung auf diesem Rückweg nicht. Kein Browser-Zurück- oder allgemeiner Persistenznachweis.

## Nachprüfung UX-014

Bereich: Home und Vermögen / Assets · Follow-up 20.11.2026 · tested

- Fondsdetails auf390px öffnen
- Fund details fokussieren
- Enter
- Zusätzliche Angaben sichtbar und expanded

Grenzen: Accordionvariante, keine neue Pattern-ID. Nicht gleichbedeutend mit Vollprüfung der Tastatur- oder Screenreaderbedienung.

## Nachprüfung UX-017

Bereich: documents-insurance-products-services · tested

- Category Mortgage wählen
- Search
- Keine passenden Dokumente
- Suchoptionen öffnen
- Reset
- Search
- Dokumentliste wieder sichtbar

Grenzen: Nur repräsentative Kategorie; keine fachliche Filterkorrektheit über alle Kriterien.

## Nachprüfung UX-025

Bereich: documents-insurance-products-services · tested

- Support-Einführung öffnen
- Next bis Slide 5
- Back nach Slide 4
- Direkter Sprung nach Slide 5
- Close
- Schmal erneut öffnen
- Fokussiertes Next mit Enter
- Escape
- Fokus sichtbar wieder am Einstieg

Grenzen: Breit fünf sichere Informationsschritte; schmal nur Schritt1–2. Keine vollständige Tastatur-/Screenreaderprüfung; kein Finanzwizard.

## Nachprüfung UX-029

Bereich: payments · tested

- Angewandte Währung und Sortierung setzen
- Reguläre Zahlungsdetails öffnen
- Sichtbaren Back-Button verwenden
- Filter bleibt erhalten, Sortierung fällt auf Default zurück

Grenzen: Scrollposition nicht numerisch verglichen. Keine Browser-Zurück-Probe; keine fachliche Zuordnung der Demowerte nachgewiesen.
