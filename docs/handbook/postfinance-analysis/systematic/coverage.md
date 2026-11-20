# Abdeckung und offene Prüfung

20. November 2026 · Drei Bereichsrundgänge der PostFinance-Demo.

| Bereich | Visuell besuchte Ansichten/Zustände | Nur Navigationsziele |
| --- | ---: | ---: |
| Home und Vermögen / Assets | 11 | 9 |
| payments | 16 | 0 |
| documents-insurance-products-services | 17 | 2 |

Gesamt: 44 visuell besuchte Ansichten/Zustände, elf nur inventarisierte Ziele. Die Zeilen sind keine 55 unterschiedlichen Seitentypen; Dialoge, Menüs und Zustände können eigene Prüfzeilen bilden.

75 Aufgabenfelder wurden durch Interaktion geprüft, 158 nur visuell, 113 als in der Ansicht nicht vorhanden eingestuft, drei blockiert und 91 ungeprüft. „Nicht vorhanden“ gilt ausschliesslich für die untersuchte Ansicht.

## Patternregister

[Katalog mit 28 Kandidaten](catalog.md) · [Maschinenlesbarer Katalog](catalog.json) · [Stabile IDs und Aliase](registry.json) · [Gesamte Aufgabenmatrix](coverage.json).

Die 16 zuvor gesammelten Kandidaten behalten ihre zugeordneten Kennungen UX-001 bis UX-016. Dashboard-Anpassung (UX-007) und Karussell anhalten (UX-015) wurden in diesem Rundgang nicht erneut geprüft und erscheinen deshalb nicht im aktuellen 28-Einträge-Katalog. Ihre früheren Belege stehen in den vorausgehenden Researchdateien. Insgesamt sind 30 Kennungen registriert.

Ähnliche Einträge wurden zusammengeführt: Auswahlabhängige Aktionen gehören zur Mehrfachauswahl; aktive Filteranzeige gehört zu Filter anwenden; nicht verfügbare Funktion ist eine Variante der Status-/Auswegfamilie. Inlinebearbeitung, Vorschau, eingebetteter Arbeitsbereich und Budgetanzeige bleiben vorläufige Kandidaten: weitere Prüfung muss klären, ob daraus ein eigener Ablauf oder eine Darstellungsvariante wird.

## Als Nächstes gezielt untersuchen

1. Echte Detailrückkehr: Filter, Sortierung, Auswahl und Position vor und nach Rückkehr vergleichen. Die Demo hat teils Fehlerziele geliefert.
2. Auswahlumfang: Kopfcheckbox, gemischter Zustand, Filterwechsel und mehrere Ergebnisseiten.
3. Suchvarianten: Dokumentfilter, Kontenauswahlsuche und Auftragsfilter auf gleiche bzw. andere Übernahmelogik prüfen.
4. Formulare: geänderte Werte abbrechen, bedingte Werte beim Ausblenden, Mehrfeldfehler; ausschliesslich ohne Geschäftsabschluss.
5. Sichere Wizard-/Einführungsfolgeschritte von echten Finanzprozessen trennen. Vollständige Zahlungs- oder Vertragsabläufe erfordern eine gesonderte Testfreigabe und Testumgebung.
6. Schmale Ansichten und Tastatur für noch nicht geprüfte Vertreter ergänzen.

## Sichtbare, noch nicht untersuchte Ziele

### Home und Vermögen / Assets

- home/widget-edit
- transfer/invoice-scan/create
- transfer/transfers
- transfer/order-overview
- transfer/e-bill
- transfer/transfers/credit-card
- transfer/pending-orders/search-single-orders
- transfer/pending-orders/search-single-transfers
- upload/payment-order/collective-order-overview-epo
- upload/payment-order/file-overview-epo
- upload/payment-order/individual-order-overview-epo
- transfer/investigation-advanced/overview
- transfer/investigation-advanced/payment-search-single
- transfer/investigation-advanced/payment-bulk-search
- services/account-settings
- Kontenmenü: Transactions, Order overview, Enter payment, Account transfer, Balance history, Documents, Account information, Account settings, Cancel account
- assets/money-market
- assets/credit-cards
- insurances/life-insurance-detail
- offers/multibanking-opening/thirdpartybank
- Account notifications (Zielpfad nicht erhoben)
- assets/analysis/balance-overview
- assets/analysis/abo-movements-detail
- assets/analysis/create-expense-limit
- assets/movements-overview/detail-single-order
- assets/movements-overview/details
- assets/credit-cards/details
- Budget-Menü: Edit/Delete (Ziele nicht geöffnet)
- Set consumer behaviour (Dialog nicht geöffnet)
- CO2-Kategoriebuttons (Unteransichten nicht geöffnet)
- assets/selfservice-fund-custody/position-details
- assets/selfservice-fund-custody/list
- assets/vested-benefits-detail
- assets/investment-retirement/market-data
- transfer/transfers/retirementsavingsaccount
- download/documents
- offers/product-opening/invest
- More-Menüs Fund self-service, 3a, Vested benefits (nicht geöffnet)
- https://www.postfinance.ch/content/pfch/en/priv/investmentsolutions/knowledge/homepubli.html
- https://www.postfinance.ch/content/pfch/en/priv/investmentsolutions/knowledge/home.html
- assets/balance-history
- assets/movements-overview
### payments

- transfer/enter-standing-order
- transfer/transfers/standing-transfer
- transfer/approve/payments
- transfer/approve/single-transfer
- transfer/approve/standing-orders
- transfer/fund-orders/fundlist
- transfer/crypto-list
- transfer/transfers/forextrade
- transfer/investigation-advanced/overview
- transfer/investigation-advanced/payment-search-single
- transfer/investigation-advanced/payment-bulk-search
- transfer/fund-orders/search
- transfer/crypto-orders/search
- transfer/forex-orders/search
- transfer/fund-orders/search/subscription-single
- transfer/qr-bill-generator
- transfer/qr-bill-generator/templates
- transfer/widget-edit
- assets/crypto-custody/overview
- assets/selfservice-fund-custody/list
- services/customer-hub/overview
- UI-Tab Currency/foreign exchange
- UI-Tab Load credit card
- UI-Tab Retirement planning 3a inpayment
- UI-Tab E-trading
- transfer/pending-orders/search-single-orders/orders-detail
- transfer/pending-orders/search-single-transfers
- upload/payment-order/individual-order-overview-epo
- upload/widget-edit
- upload/payment-order/collective-order-detail-epo
- UI-Tab Standing account transfers
- UI-Tab Standing transfer orders in e-trading
- UI-Tab Account transfers
- UI-Tab Standing orders
- UI-Tab Fund subscriptions
- UI-Tab Fund redemptions
- UI-Tab SIC transfer
- UI-Tab Fixed-term deposit
- UI-Tab Generate new QR-bill
- UI-Aktion Next (Folgeschritt ungeprüft)
- transfer/pending-orders/single-orders
- transfer/standing-orders/standing-orders-executions
- transfer/standing-orders/standing-etrading-executions
- transfer/fund-orders/subscription-single
- transfer/fund-orders/subscription-plan
- transfer/crypto-orders/subscription-plan
- transfer/crypto-orders/single-orders
- transfer/fixed-term-deposit/order-overview
- transfer/forex-orders/order-overview
- transfer/payment-list/details
- services/e-bill-settings
- https://www.postfinance.ch/ap/ga/sx/html/ebill-portal/ui/payments
- https://www.postfinance.ch/ap/ga/sx/html/ebill-portal/ui/biller
- https://www.postfinance.ch/ap/ga/sx/html/ebill-portal/ui/standing-approvals
- https://www.postfinance.ch/ap/ga/sx/html/ebill-portal/ui/debit-standing-approvals
- https://www.postfinance.ch/ap/ga/sx/html/ebill-portal/ui/contact
- https://www.postfinance.ch/ap/ga/sx/html/ebill-portal/ui/settings/user
- https://www.postfinance.ch/ap/ga/sx/html/ebill-portal/ui/settings/sustainability-co2
- UI-Tab Archive
- UI-Link Batch approval
### documents-insurance-products-services

- download/documents/accounts
- download/documents/taxes
- services/customer-hub/products
- Dokument öffnen/Download (XML/PDF; keine personenbezogenen Datei-URLs übernommen)
- occ/KUNDENDOKUMENTENNACHBESTELLUNG_ERSTELLEN
- download/enquiry-detail
- weitere Edit-Aktionen: Earnings protection, 3a limit, Additional payment
- Transfer (Pillar 3a)
- Details disclosure
- contact/appointment-planner/create/topic
- download/documents
- Externe Fondsdetails für die drei angebotenen Themen
- offers/product-opening/invest
- offers/product-opening/account
- offers/product-opening/pension
- offers/product-opening/financing
- offers/digital-goods/buy
- offers/digital-goods/show
- offers/travel-funds
- offers/loyalty-overview/active
- offers/multibanking-opening
- Products-Untermenü nicht zusätzlich geöffnet
- offers/apo-process
- https://www.postfinance.ch/content/pfch/en/priv/pay/card/pfcreditcard1
- services/customer-hub/notifications
- services/customer-hub/cards
- services/customer-hub/payments
- services/customer-hub/investments
- services/admin-hub/user-admin
- services/admin-hub/power-of-attorney
- services/admin-hub/deliveries
- services/admin-hub/reports
- services/contact-data
- occ/ADRESSE_MUTIEREN
- services/approval-address-orders
- services/pending-address-orders
- services/power-of-attorney/pc/authorized-person
- services/power-of-attorney/pc/approve
- services/power-of-attorney/pc/pending-orders
- occ/PHYSISCHES_RECHT_ERSTELLEN
- occ/BONUSPROGRAMM_LOESCHEN
- services/data-protection
- Bedingungsdokumente (sechs; nicht geöffnet)
- Activate purchase voucher
- services/change-username
- services/change-password
- services/card-registration
- services/change-session-timeout
- services/abs-settings
- services/api-gateway/overview
- New account document Link nicht direkt betätigt
- New message Link nicht direkt betätigt
- services/customer-hub/cards/block
- https://www.postfinance.ch/efinsupportetradeen
- https://www.postfinance.ch/efinebillnen
- https://www.postfinance.ch/efinonboardingebillen
- https://www.postfinance.ch/efinfeedbacken
- Telefon-/E-Mail-Links nach Supportthema (Werte nicht übernommen)
- Enter access code
- Slides 3–5
- Direkte Slidenavigation und Back
- services/order-overview/detail
- services/power-of-attorney/pc/document-upload
- Search options nicht geöffnet

Es bleibt bewusst offen, welche weiteren Ziele erst nach Öffnen noch ungeprüfter Hubs erscheinen. Der Rundgang ist systematisch, aber kein Nachweis vollständiger Abdeckung der produktiven Anwendung.

## Nachprüfung

Die zuvor genannten Lücken wurden gezielt weiter untersucht. [Ergebnisse und verbleibende Grenzen](gap-review.md): sechs Prüffragen geschlossen, acht teilweise geklärt, drei blockiert. Die ursprüngliche 440-Zellen-Matrix oben bleibt als Erststand erhalten; neue Belege stehen getrennt in gap-checks.json und im Katalog.
