# Zahlungen und EZAG: systematischer Rundgang

20. November 2026 · BrowserOS neo · eigener Tab.

16 Ansichten visuell besucht, 14 Patternkandidaten ohne neue UX-IDs. Die acht Aufgabenfamilien sind pro Ansicht in `payments.json` mit Notiz bewertet. Sichere Bedienproben betreffen Navigation, bedingte Felder, Sortierung, Suchbereich, Zeilenmenü und reine Auswahl.

## Abdeckung

| Ansicht | Bedient / zentrale Grenze |
| --- | --- |
| `transfer` | navigate: Von Home über Payments erreicht; Hauptmenü mit Enter und Search/Edit geöffnet. |
| `transfer/enter-payment` | navigate: Aus sichtbarem Hauptmenüziel geöffnet. |
| `transfer/transfers` | navigate: Direkte sichtbare Zielnavigation; breite Tabs und schmale Auswahlbox gesehen.; select: Immediately und Enter date im ungesendeten Entwurf umgeschaltet.; input: Enter date blendet Datumsfeld und Kalender ein; Immediately blendet es aus. Kein Betrag eingegeben. |
| `transfer/invoice-scan/create` | navigate: Sichtbarer QR-Link geöffnet; Cancel betätigt, späteres Rückkehrziel nicht belastbar bestätigt.; edit: Informationsdialog über Cancel verlassen; keine Dateidaten vorhanden. |
| `transfer/pending-orders/search-single-orders` | navigate: Aus sichtbarem Payments/Account transfers-Ziel geöffnet.; find: Suchoptionen eingeklappt; Sortierung Amount descending gewählt und Label geprüft. Fachliche Reihenfolge nicht bewiesen.; select: Sortieroption gewählt; Konto-/Status-/Währungsauswahl nur sichtbar.; act: Zeilen-Overflow geöffnet: Change/Delete/Copy. Keine Aktion ausgeführt. |
| `upload` | navigate: EPO-Hauptmenü geöffnet: Approve, File overview, Payment orders, Single orders, Overview. |
| `upload/payment-order/file-overview-epo` | navigate: Aus sichtbarem Show all/File overview-Ziel geöffnet; Error-Details weiter zu Sammelauftragsübersicht. |
| `upload/payment-order/collective-order-overview-epo` | navigate: Details einer Datei geöffnet; Back sichtbar, nicht bedient. |
| `transfer/standing-orders/search-standing-orders` | navigate: Sichtbares Hauptmenüziel geöffnet; drei Varianten als Tabs.; find: Suchoptionen eingeklappt; aktive Kriterien und Sortierung bleiben sichtbar. |
| `transfer/approve` | navigate: Sichtbares Approve-Ziel geöffnet; Varianten als horizontale Tabs.; find: Suchoptionen eingeklappt, Tabelle bleibt sichtbar.; select: Eine Zeile markiert: sichtbares Häkchen und Approve selected aktiviert. Abwahl-API meldete fehlgeschlagen; danach Seite verlassen.; status: Disabled→enabled der Folgeaktion durch reine Auswahl beobachtet; keine Finanzfreigabe. |
| `transfer/qr-bill-generator/templates/overview` | navigate: Sichtbares Vorlagenziel geöffnet; Tabs für neue Rechnung/Vorlagen. |
| `transfer/qr-bill-generator/new/recipient` | navigate: Sichtbares Generate QR-bill-Ziel geöffnet; erster Empfängerschritt. |
| `transfer/order-overview` | navigate: Sichtbares Order overview-Ziel geöffnet. |
| `transfer/payment-list/overview` | navigate: Sichtbares Payment list-Ziel geöffnet. |
| `upload/payment-order-approve/epo` | navigate: Sichtbares Approve-Ziel unter EPO geöffnet. |
| `transfer/e-bill` | navigate: Sichtbares eBill-Ziel geöffnet; eingebettetes Portal mit eigener Navigation. |

## Patternkandidaten

- **Nach Erfassungs- und Suchaufgaben navigieren** (`task-oriented-navigation`, tested): Hauptbereich öffnen → Gruppierte Ziele Enter und Search/Edit prüfen → Aufgabenansicht öffnen. Grenze: Nur sichtbare Ziele; keine vollständige produktive Reichweite.
- **Benötigte Felder abhängig von einer Wahl zeigen** (`conditional-fields`, tested): Enter date wählen → Datumsfeld und Kalender erscheinen → Immediately wählen → Datumsfeld entfällt. Grenze: Keine Betragserfassung oder Send; Datumerhalt und Validierung offen. Breit und 390×844 visuell geprüft; schmaler Datumszustand nach Scrollen gesehen.
- **Ansichtskontext an schmale Breite anpassen** (`responsive-context-navigation`, visible): Breit: Tabs sehen → Schmal: aktuelle Art in Auswahlbox sehen. Grenze: Kein Wechsel in andere Übertragsart ausgeführt.
- **Import verstehen und Einstieg abbrechen** (`import-entry-cancel`, tested): QR-Einstieg öffnen → Informationsdialog lesen → Cancel betätigen. Grenze: Rückkehrziel in diesem Lauf nicht belastbar bestätigt; keine Datei/Confirm.
- **Listenreihenfolge explizit wählen** (`sort-control`, tested): Sortierung öffnen → Amount descending wählen → Gewählten Modus am Control erkennen. Grenze: Demodaten zeigen keinen beweisbaren fachlichen Reihenfolgewechsel.
- **Seltenere Objektaktionen aufdecken** (`row-action-menu`, tested): Overflow neben Details öffnen → Change/Delete/Copy ansehen. Grenze: Keine Änderung/Kopie/Löschung oder Bestätigung ausgeführt.
- **Angewandte Kriterien neben Ergebnissen verstehen** (`applied-filter-context`, tested): Suchoptionen einklappen → Aktive Suchkriterien bleiben sichtbar → Ergebnisse oder Nulltreffer lesen. Grenze: Keine neue Suchkombination übernommen; Apply-/Reset-Semantik hier nicht erneut getestet.
- **Nulltreffer mit Suchkontext zeigen** (`empty-result-context`, visible): Daueraufträge öffnen → Kriterien und Nulltreffermeldung lesen. Grenze: Nulltreffer bereits vorhanden, nicht durch eigenen Filter erzeugt; Erholung nicht geprüft.
- **Verarbeitungsstatus erklären und Details anbieten** (`status-and-recovery`, tested): Dateiübersicht öffnen → Text/Icon und Legende lesen → Details einer Fehlerdatei öffnen. Grenze: Keine Datei übertragen; keine zeitliche Progression beobachtet. Fehlerdatei führte zur Pending-Auftragsübersicht; Fehlerursache damit nicht aufgeklärt.
- **Objekte vor einer gemeinsamen Folgeaktion markieren** (`batch-selection`, tested): Eine Zeile markieren → Häkchen sehen → Aktivierte Folgeaktion erkennen. Grenze: Nur Zahlungsfreigabe interaktiv; EZAG Variante sichtbar. Kein Select-all-/gemischter Zustand geprüft; Abwahl-API meldete Fehler; Seite danach verlassen. Keine Freigabe ausgeführt.
- **Folgeaktion an Auswahl binden** (`action-availability`, tested): Ohne Auswahl deaktivierte Aktion sehen → Zeile markieren → Aktive Aktion sehen. Grenze: Kein Finanzabschluss; Rückwechsel in deaktiviert nicht verifiziert.
- **Vorlagenwerte im Tabellenkontext bearbeiten** (`inline-table-editing`, visible): Vorlagenliste sehen → Nachricht und Betrag in derselben Zeile vorfinden → Generate als getrennte Folgeaktion erkennen. Grenze: Felder unverändert; Autosave/Speicherung/Validierung unbekannt.
- **Auftragssummen und Saldovorschau zusammen lesen** (`forecast-before-action`, visible): Konto und Fälligkeit sehen → Guthaben/Auftragssumme/Saldo vergleichen → Nach Auftragstyp zu Details gehen. Grenze: Werte nicht übernommen; keine Berechnung oder Detailnavigation geprüft.
- **Eingebettetes Fachportal mit eigener Navigation verstehen** (`embedded-workspace`, visible): eBill aus Banknavigation öffnen → Portalnavigation und eigene Tabs erkennen. Grenze: Portal-Unterziele und Rechnungsaktionen ungeprüft.

## Sichtbare, ungeprüfte Ziele

Die folgende Liste enthält ausschliesslich tatsächlich sichtbare Links/Controls. UI-Bezeichnungen ohne URL wurden nicht in spekulative Pfade umgewandelt. Unterziele gelten nicht als besucht.

**Zahlungsübersicht**

- `transfer/enter-standing-order`
- `transfer/transfers/standing-transfer`
- `transfer/approve/payments`
- `transfer/approve/single-transfer`
- `transfer/approve/standing-orders`
- `transfer/fund-orders/fundlist`
- `transfer/crypto-list`
- `transfer/transfers/forextrade`
- `transfer/investigation-advanced/overview`
- `transfer/investigation-advanced/payment-search-single`
- `transfer/investigation-advanced/payment-bulk-search`
- `transfer/fund-orders/search`
- `transfer/crypto-orders/search`
- `transfer/forex-orders/search`
- `transfer/fund-orders/search/subscription-single`
- `transfer/qr-bill-generator`
- `transfer/qr-bill-generator/templates`
- `transfer/widget-edit`
- `assets/crypto-custody/overview`
- `assets/selfservice-fund-custody/list`
- `services/customer-hub/overview`

**Überträge**

- `UI-Tab Currency/foreign exchange`
- `UI-Tab Load credit card`
- `UI-Tab Retirement planning 3a inpayment`
- `UI-Tab E-trading`

**Zahlungen bearbeiten**

- `transfer/pending-orders/search-single-orders/orders-detail`
- `transfer/pending-orders/search-single-transfers`

**EZAG / CH-DD Übersicht**

- `upload/payment-order/individual-order-overview-epo`
- `upload/widget-edit`

**EZAG Zahlungsaufträge**

- `upload/payment-order/collective-order-detail-epo`

**Daueraufträge bearbeiten**

- `UI-Tab Standing account transfers`
- `UI-Tab Standing transfer orders in e-trading`

**Freigeben**

- `UI-Tab Account transfers`
- `UI-Tab Standing orders`
- `UI-Tab Standing account transfers`
- `UI-Tab Fund subscriptions`
- `UI-Tab Fund redemptions`
- `UI-Tab SIC transfer`
- `UI-Tab Fixed-term deposit`

**QR-Vorlagen**

- `UI-Tab Generate new QR-bill`

**Neue QR-Rechnung: Empfänger**

- `UI-Aktion Next (Folgeschritt ungeprüft)`

**Auftragsübersicht**

- `transfer/pending-orders/single-orders`
- `transfer/standing-orders/standing-orders-executions`
- `transfer/standing-orders/standing-etrading-executions`
- `transfer/fund-orders/subscription-single`
- `transfer/fund-orders/subscription-plan`
- `transfer/crypto-orders/subscription-plan`
- `transfer/crypto-orders/single-orders`
- `transfer/fixed-term-deposit/order-overview`
- `transfer/forex-orders/order-overview`

**Zahlungslisten**

- `transfer/payment-list/details`

**eBill Portal**

- `services/e-bill-settings`
- `https://www.postfinance.ch/ap/ga/sx/html/ebill-portal/ui/payments`
- `https://www.postfinance.ch/ap/ga/sx/html/ebill-portal/ui/biller`
- `https://www.postfinance.ch/ap/ga/sx/html/ebill-portal/ui/standing-approvals`
- `https://www.postfinance.ch/ap/ga/sx/html/ebill-portal/ui/debit-standing-approvals`
- `https://www.postfinance.ch/ap/ga/sx/html/ebill-portal/ui/contact`
- `https://www.postfinance.ch/ap/ga/sx/html/ebill-portal/ui/settings/user`
- `https://www.postfinance.ch/ap/ga/sx/html/ebill-portal/ui/settings/sustainability-co2`
- `UI-Tab Archive`
- `UI-Link Batch approval`

## Grenzen

- Stand 20.11.2026; ausschliesslich sichtbare PostFinance-Demo-Reichweite.
- 16 Ansichten screenshot-visuell angesehen; Screenshots nicht als Dateien gespeichert, keine personenbezogenen Demo-Werte in Artefakte übernommen.
- Desktop visuell geprüft. Repräsentativ 390×844 nur Übertrag: Auswahlbox statt Tabs, vertikale Kontofelder und Datums-/Abschlussbereich nach Scrollen.
- Keine Transaktion, Finanzfreigabe, Speicherung, Löschung, Upload, Vertrag oder Nachricht ausgeführt.
- Keine Funktions-, Responsive- oder Accessibility-Gesamtfreigabe.
- Gleichartige Untertabs, Detailseiten und alle in unvisitedTargets aufgeführten Ziele bleiben ungeprüft; Navigationssichtbarkeit ist kein Funktionsbeleg.
- Ältere 16 Patterns gezielt gelesen; neue Keys haben keine UX-ID und müssen zentral dedupliziert werden.

Die Freigabeauswahl wurde nur markiert. Der Versuch einer API-Abwahl meldete fehlgeschlagen; danach wurde die Ansicht verlassen. Kein Freigabebutton wurde betätigt. Beim QR-Cancel wurde die Betätigung ausgeführt, das spätere Rückkehrziel in diesem Durchlauf jedoch nicht verlässlich bestätigt. Diese Befunde ersetzen keine Wiederherstellungsprüfung.
