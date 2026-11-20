# Systematischer Rundgang: Home und Vermögen

Stand: 20. November 2026.

Elf Ansichten visuell geprüft, neun weitere Zielgruppen inventarisiert. Die JSON-Datei enthält für jede Zeile die acht Aufgaben mit Status und kurzer Evidenznotiz.

## Ansichten und Aufgaben

Status: T tested · V visible · A absent · B blocked · U unreviewed.
| Ansicht / Pfad | navigate | find | select | input | edit | act | understand | status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Home — `home` | T | V | V | V | V | V | T | V |
| Vermögensübersicht — `assets (auch assets/balance-sheet verlinkt)` | T | V | V | A | V | T | V | V |
| Kontoinformation — `services/account-details` | T | A | A | A | A | A | V | A |
| Kontoeinstellungen — `services/account-settings` | T | A | A | V | V | V | V | A |
| Analysen — `assets/analysis` | T | V | T | T | A | T | T | T |
| Bewegungen — `assets/movements-overview` | T | T | V | T | V | V | V | T |
| Tags — `assets/analysis/label-overview` | T | V | T | V | V | V | V | V |
| Budget — `assets/analysis/expense-limit-overview` | T | A | A | A | V | T | V | V |
| CO2-Rechner — `assets/analysis/co2-detail` | T | V | V | V | V | V | V | V |
| Anlagen und Vorsorge — `assets/investment-retirement` | T | V | V | A | V | V | V | V |
| Saldoverlauf — `assets/balance-development/account` | T | V | V | A | A | V | V | V |
| Startseite anpassen — `home/widget-edit` | U | U | U | U | U | U | U | U |
| Kreditkarten — `assets/credit-cards` | U | U | U | U | U | U | U | U |
| Geldmarkt — `assets/money-market` | U | U | U | U | U | U | U | U |
| Einnahmen/Ausgaben — `assets/analysis/balance-overview` | U | U | U | U | U | U | U | U |
| Abonnementbewegungen — `assets/analysis/abo-movements-detail` | U | U | U | U | U | U | U | U |
| Budget erstellen — `assets/analysis/create-expense-limit` | U | U | U | U | U | U | U | U |
| Valutasaldoverlauf — `assets/balance-history` | U | U | U | U | U | U | U | U |
| Fondsposition — `assets/selfservice-fund-custody/position-details` | U | U | U | U | U | U | U | U |
| Bewegungsdetails — `assets/movements-overview/detail-single-order; assets/movements-overview/details` | B | U | U | U | U | U | U | U |

## Beobachtete Abläufe

- **Kriterien übernehmen** (`applied-filters`, tested): Search options öffnen → Testwort eingeben → Search → Übernommenes Stichwort ansehen → Erneut öffnen und Reset: angewandtes Stichwort bleibt. Grenze: Reset leert Entwurf, nicht sofort die angewandte Suche. Fachliche Ergebniskorrektheit der Demo nicht belegt.
- **Liste sofort filtern** (`live-list-filter`, tested): Testwort in Filter list → Nulltreffer sehen → Feld leeren → Zeilen wieder sichtbar. Grenze: Keine Persistenz oder reguläre Detailrückkehr geprüft.
- **Ansichtskontext wählen** (`context-selection`, tested): Period öffnen → Custom wählen → Von/Bis-Dialog ansehen. Grenze: Kontenauswahl nur sichtbar. Erfolgsübernahme nach Korrektur in diesem Lauf nicht gesondert ausgewertet.
- **Datumsbereich korrigieren** (`date-range-validation`, tested): Von nach Bis eingeben → Apply → Dialog bleibt, rote feldnahe Meldung, Eingaben erhalten → Reihenfolge korrigieren. Grenze: Korrigiertes Apply geklickt, danach navigiert. Kein gesonderter Erfolgsbeleg dieses Laufs; frühere Quelle beschreibt vollständigen Ablauf. Kein Tastatur-/Screenreadertest.
- **Mehrere Zeilen auswählen** (`batch-selection`, tested): Einzelcheckbox → Select all → Mehrere sichtbare Häkchen nach Scrollen prüfen → Abwählen. Grenze: Keine Folgeaktion, Filterwechsel, Pagination oder Auswahlpersistenz. Gemischter Kopfzustand nicht belegt.
- **Zeilenaktionen einblenden** (`row-action-menu`, tested): Zeilenmenü öffnen → Objektbezogene Optionen lesen → Ohne Folgeaktion verlassen. Grenze: Kein Lösch-/Kündigungsdialog oder Abschluss. Kontenmenü und Budgetmenü sind Varianten.
- **Hilfe am Arbeitskontext öffnen** (`contextual-help`, tested): Schmal Help Transaction overview öffnen → Erklärungen im Hilfebereich lesen → Close. Grenze: 390×844 geprüft; weiterführende Hilfe und Fokusverhalten ungeprüft.
- **Darstellung wechseln** (`chart-table-view-switch`, tested): Chart öffnen → Table wählen → Tabelle mit Datum, Einnahmen, Ausgaben und Saldo ansehen. Grenze: Desktop geprüft. Keine numerische Gleichheit oder vollständige Barrierefreiheit nachgewiesen.
- **Navigationsebene wechseln und verlassen** (`drill-down-navigation`, tested): 390px Menu → Assets → Back zum Hauptmenü → Close zurück zu Home. Grenze: Kein Unterziel in der schmalen Probe gewählt; keine Fokus-/Historyprüfung.
- **Budgetverbrauch verstehen** (`budget-progress-feedback`, visible): Budgetliste ansehen → Prozent, Balken und Spent/Available vergleichen → Rotes Exhausted budget erkennen. Grenze: Nur vorhandene Zustände; kein Budget verändert und kein Übergang ausgelöst.

## Sichtbare, nicht untersuchte Ziele

- Aus **Home**: `home/widget-edit`; `transfer/invoice-scan/create`; `transfer/transfers`; `transfer/order-overview`; `transfer/e-bill`; `transfer/transfers/credit-card`; `transfer/pending-orders/search-single-orders`; `transfer/pending-orders/search-single-transfers`; `upload/payment-order/collective-order-overview-epo`; `upload/payment-order/file-overview-epo`; `upload/payment-order/individual-order-overview-epo`; `transfer/investigation-advanced/overview`; `transfer/investigation-advanced/payment-search-single`; `transfer/investigation-advanced/payment-bulk-search`.
- Aus **Vermögensübersicht**: `services/account-settings`; `Kontenmenü: Transactions, Order overview, Enter payment, Account transfer, Balance history, Documents, Account information, Account settings, Cancel account`; `assets/money-market`; `assets/credit-cards`; `insurances/life-insurance-detail`; `offers/multibanking-opening/thirdpartybank`.
- Aus **Kontoeinstellungen**: `Account notifications (Zielpfad nicht erhoben)`.
- Aus **Analysen**: `assets/analysis/balance-overview`; `assets/analysis/abo-movements-detail`; `assets/analysis/create-expense-limit`.
- Aus **Bewegungen**: `assets/movements-overview/detail-single-order`; `assets/movements-overview/details`.
- Aus **Tags**: `assets/credit-cards/details`; `assets/movements-overview/detail-single-order`; `assets/movements-overview/details`.
- Aus **Budget**: `assets/analysis/create-expense-limit`; `Budget-Menü: Edit/Delete (Ziele nicht geöffnet)`.
- Aus **CO2-Rechner**: `Set consumer behaviour (Dialog nicht geöffnet)`; `CO2-Kategoriebuttons (Unteransichten nicht geöffnet)`; `assets/credit-cards/details`.
- Aus **Anlagen und Vorsorge**: `assets/selfservice-fund-custody/position-details`; `assets/selfservice-fund-custody/list`; `assets/money-market`; `assets/vested-benefits-detail`; `assets/investment-retirement/market-data`; `transfer/transfers/retirementsavingsaccount`; `insurances/life-insurance-detail`; `download/documents`; `offers/product-opening/invest`; `More-Menüs Fund self-service, 3a, Vested benefits (nicht geöffnet)`; `https://www.postfinance.ch/content/pfch/en/priv/investmentsolutions/knowledge/homepubli.html`; `https://www.postfinance.ch/content/pfch/en/priv/investmentsolutions/knowledge/home.html`.
- Aus **Saldoverlauf**: `assets/balance-history`; `assets/movements-overview`.
- `home/widget-edit`: Startseite anpassen.
- `assets/credit-cards`: Kreditkarten.
- `assets/money-market`: Geldmarkt.
- `assets/analysis/balance-overview`: Einnahmen/Ausgaben.
- `assets/analysis/abo-movements-detail`: Abonnementbewegungen.
- `assets/analysis/create-expense-limit`: Budget erstellen.
- `assets/balance-history`: Valutasaldoverlauf.
- `assets/selfservice-fund-custody/position-details`: Fondsposition.
- `assets/movements-overview/detail-single-order; assets/movements-overview/details`: Bewegungsdetails.

## Grenzen

- Stand 20.11.2026. Eigener BrowserOS-neo-Tab; Screenshots visuell angesehen und nicht als Dateien gespeichert.
- Desktop 1440×1000 CSS-Pixel; repräsentativ schmal 390×844: Home, Hilfe, Assets-Menü und Analyse. Keine allgemeine Responsive-Freigabe.
- 11 Ansichten visuell untersucht, neun weitere Zielgruppen nur inventarisiert; vollständige Reichweite bezieht sich ausschließlich auf sichtbare Demo-Navigation der besuchten Ansichten. Ungeöffnete Menüs können zusätzliche Ziele enthalten.
- Keine Transaktion, Speicherung, Löschung, Vertragsaktion, Nachricht, Dateiauswahl oder Upload; unbekannte Persistenz nur angesehen.
- Keine personenbezogenen Demo-Werte übernommen. Keine Aussagen über technische Implementierung, Berechnungskorrektheit oder allgemeine Barrierefreiheit.
- Direkter Details-Aufruf lieferte keinen belastbaren Detailbeleg. Refs nach Breitenwechsel teils von Kopfzeile verdeckt; neu erfasst oder sichere Tastaturaktivierung statt verdecktem Klick.

Frühere Berichte bleiben unverändert. Die neun wiederaufgenommenen Muster sind keine neuen UX-IDs. Budgetverbrauch ist ein zusätzlicher sichtbarer Kandidat; Root konsolidiert die Identitäten.
