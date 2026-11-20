# Dokumente, Versicherungen, Produkte und Services

20. November 2026 · Begrenzter visueller und interaktiver Demoaudit.

17 Ansichten/Zustände besucht; zwei weitere Kategorieziele nur in Navigation erfasst. Vollständige Acht-Aufgaben-Matrix und konkrete Restziele stehen in [services.json](services.json).

## Abdeckung

| Ansicht | Beleg | Ausgeführte Probe |
| --- | --- | --- |
| Dokumentübersicht | visual | navigate: Über sichtbaren Einstieg oder dessen belegte URL geöffnet.; select: Eine ungelesene Zeile markiert; Download, Read und Archive wurden aktiv, Unread blieb deaktiviert.; act: Zeilenmenü geöffnet: Read und Archive sichtbar; keine Aktion ausgewählt, kein Download. |
| Dokumente bestellen | visual | navigate: Über sichtbaren Einstieg oder dessen belegte URL geöffnet. |
| Nachforschungen | visual | navigate: Über sichtbaren Einstieg oder dessen belegte URL geöffnet. |
| Archiv | visual | navigate: Über sichtbaren Einstieg oder dessen belegte URL geöffnet. |
| Versicherungsübersicht | visual | navigate: Über sichtbaren Einstieg oder dessen belegte URL geöffnet.; understand: Details einer vorhandenen Versicherung geöffnet. |
| Versicherungsdetails | visual | navigate: Über sichtbaren Einstieg oder dessen belegte URL geöffnet.; edit: Investment-theme Edit öffnete separaten Änderungsentwurf; unverändert mit Cancel verlassen. |
| Anlagethema ändern | visual | navigate: Über sichtbaren Einstieg oder dessen belegte URL geöffnet.; edit: Cancel unverändert betätigt; Rückkehr aus dem Entwurf. Verwerfen geänderter Werte nicht geprüft. |
| Produkte | visual | navigate: Kreditkarten-Unterziel und Services-Menü geöffnet. |
| Kreditkarten vergleichen | visual |  |
| Profil und Einstellungen | visual | navigate: Profile und Login/security exemplarisch geöffnet. |
| Profil | visual | navigate: Über sichtbaren Einstieg oder dessen belegte URL geöffnet.; understand: Show all erweitert Bedingungen von drei auf sechs Einträge; Button entfällt, kein Show less gesehen. |
| Login und Sicherheit | visual | navigate: Über sichtbaren Einstieg oder dessen belegte URL geöffnet. |
| Meine Neuigkeiten | visual |  |
| Kontakt und Support | visual | navigate: E-finance in a nutshell öffnet Einführung; Mailbox-Ziel separat über sichtbare URL geprüft.; understand: Einführung geöffnet, eine Seite weiter und geschlossen; Support breit und 390×844 visuell geprüft. |
| Funktionsführung | visual | navigate: Next von Slide 1 zu Slide 2: aktiver Indikator wechselt, Back erscheint; Close kehrt zu Support zurück.; understand: Welcome und Personal homepage angesehen; Dialog erneut bei 390×844 geöffnet und geschlossen. |
| Mailbox in Demo nicht verfügbar | visual |  |
| Serviceaufträge | visual | navigate: Über sichtbaren Einstieg oder dessen belegte URL geöffnet.; find: Filter list mit synthetischem Nulltreffer bedient; Reset stellt Zeilen wieder her.; input: Nur lokaler Textfilter gefüllt; keine Auftragsdaten.; understand: Show more lines erhöht sechs auf zwölf Zeilen; weitere Schaltfläche bleibt.; status: Vorhandene Frist-/Freigabe-/Abbruchzustände gesehen; eigener Filter zeigt No results were found. |
| Kontodokumente | navigation-only |  |
| Steuerdokumente | navigation-only |  |

## Muster und Grenzen

### Gemeinsame Aktionen nach Auswahl anbieten · `selection-dependent-actions`

Dokumente für eine gemeinsame Folgeaktion markieren. Zeile auswählen → Passende Bulkaktionen werden aktiv → Zeilenmenü ansehen.

**Quellen:** `download/documents`. **Beleg:** tested.

**Grenzen:** Variante von batch-selection; kein eigener Bulkabschluss. Nur eine ungelesene Zeile; kein gemischter oder seitenübergreifender Auswahlumfang.

### Weitere Aktionen am Objekt finden · `row-action-menu`

Dokumentspezifische Aktionen finden. Overflow öffnen → Read/Archive im Zeilenkontext sehen.

**Quellen:** `download/documents`. **Beleg:** tested.

**Grenzen:** Keine Aktion ausgeführt; keine Bestätigung oder Rücknahme geprüft.

### Änderungseinstieg unverändert verlassen · `edit-entry-and-cancel`

Mögliche Vertragsänderung ansehen und verlassen. Detail öffnen → Edit Investment theme → Entwurf mit bestehender Auswahl ansehen → Cancel.

**Quellen:** `insurances/life-insurance-detail`, `insurances/life-insurance-detail/edit-investment-topic`. **Beleg:** tested.

**Grenzen:** Keine Wahl geändert; kein Beleg für Verwerfen geänderter Werte oder Speichersemantik.

### Alternativen vor einer Aktion vergleichen · `compare-before-action`

Angebote anhand gleicher Kriterien vergleichen. Alternativen nebeneinander lesen → Bedingungen oder Kosten vergleichen → Informations- oder Abschlussaktion getrennt erkennen.

**Quellen:** `offers/product-opening/credit-card`, `insurances/life-insurance-detail/edit-investment-topic`. **Beleg:** visible.

**Grenzen:** Nur sichtbare Darstellung; kein Wechsel oder Abschluss. Nur breit; keine Entscheidungsqualität oder fachliche Richtigkeit geprüft.

### Weitere Bedingungen anzeigen · `show-more-disclosure`

Zunächst verkürzte Dokumentliste vollständig lesen. Drei Bedingungen ansehen → Show all → Sechs Bedingungen sichtbar.

**Quellen:** `services/customer-hub/profile`. **Beleg:** tested.

**Grenzen:** Kein Show less gesehen; Dokumente nicht geöffnet. Entspricht vorhandenem Show-more-Muster.

### Eine Funktionsführung durchgehen · `guided-feature-tour`

Einstieg in zentrale Funktionen erhalten. Support öffnen → E-finance in a nutshell → Slide 1 lesen → Next → Slide 2 und neuen Back-Control sehen → Close.

**Quellen:** `contact-support`. **Beleg:** tested.

**Grenzen:** Nur Schritte 1–2 von fünf bedient. 390×844: Dialog vertikal, Textumbruch und Close/Next sichtbar; dort kein Next-Versuch. Fokusführung/Tastatur/Screenreader ungeprüft.

### Weitere Zeilen schrittweise anzeigen · `load-more-rows`

Eine lange Auftragsliste weiter durchsuchen. Sechs Zeilen sehen → Show more lines → Zwölf Zeilen und weitere Show-more-Aktion sehen.

**Quellen:** `services/order-overview`. **Beleg:** tested.

**Grenzen:** Variante progressiver Offenlegung in einer Tabelle; kein Beleg für Serverpagination, Gesamtmenge oder Ende. Rücksetzen des Umfangs nicht untersucht.

### Liste lokal filtern und zurücksetzen · `local-list-filter`

Unter vorhandenen Serviceaufträgen Treffer eingrenzen. Filter list mit synthetischem Nichttreffer füllen → No results were found → Reset → Zeilen wieder sichtbar.

**Quellen:** `services/order-overview`. **Beleg:** tested.

**Grenzen:** Bekannte Livefilter-Familie; keine fachliche Suchkorrektheit oder Persistenzprüfung.

### Status und nächste notwendige Aufgabe verbinden · `status-with-required-next-action`

Erkennen, warum ein Auftrag noch offen ist und welcher Schritt nötig ist. Status mit Frist lesen → Upload bzw. Details am betroffenen Auftrag erkennen.

**Quellen:** `services/order-overview`, `download/enquiry`. **Beleg:** visible.

**Grenzen:** Vorhandene Zustände; keine zeitliche Progression oder Freigabe durchgeführt. Enquiries zeigt nur Active/Completed und Details, keine eigene Frist.

### Nicht verfügbare Funktion erklären · `unavailable-state`

Demo-Grenze erkennen und Rückweg finden. Mailbox-Ziel öffnen → Explizite Nichtverfügbarkeit → Back sehen.

**Quellen:** `contact/mailbox`, `error/overview`. **Beleg:** tested.

**Grenzen:** Back in diesem Lauf nicht bedient; kein Recoverybeleg.

### Fehlende passende Dokumente erklären · `empty-filter-result`

Leeres Suchergebnis im aktiven Kontext verstehen. Archiv öffnen → Aktive Kriterien lesen → Keine passenden Dokumente sehen.

**Quellen:** `download/bin`. **Beleg:** visible.

**Grenzen:** Vorhandene Leere; keine Filterinteraktion oder Recovery.

### Von Neuigkeit zur zugehörigen Aufgabe gelangen · `notification-to-task`

Eine neue Information in ihrem Arbeitsbereich öffnen. Ungelesenzähler sehen → Dokument-/Nachrichtentyp unterscheiden → Zielbereich als Link erkennen.

**Quellen:** `services/my-notifications`. **Beleg:** visible.

**Grenzen:** Links hier nicht direkt betätigt; kein Gelesenwechsel.

### Von Übersicht zu Objektdetails wechseln · `object-detail-navigation`

Eine Versicherung vertieft ansehen. Versicherungstabelle → Details → Thematische Detailabschnitte.

**Quellen:** `insurances/overview`, `insurances/life-insurance-detail`. **Beleg:** tested.

**Grenzen:** Nur ein repräsentativer Vertrag; keine vollständige Fachprüfung.

### Ziele nach Aufgabenbereichen finden · `product-category-navigation`

Produkt- oder Einstellungsaufgabe im Hub auswählen. Bereichshub öffnen → Beschriftete Kategorie mit Kurztext finden → Repräsentatives Ziel öffnen.

**Quellen:** `offers`, `services/customer-hub`. **Beleg:** tested.

**Grenzen:** Kacheln allein sind kein neues Pattern; Kategorie-Navigation als Ablauf. Unterziele explizit offen gelistet.

## Ungeprüfte Ziele

- **Dokumentübersicht:** `download/documents/accounts`; `download/documents/taxes`; `services/customer-hub/products`; `Dokument öffnen/Download (XML/PDF; keine personenbezogenen Datei-URLs übernommen)`.
- **Dokumente bestellen:** `occ/KUNDENDOKUMENTENNACHBESTELLUNG_ERSTELLEN`.
- **Nachforschungen:** `download/enquiry-detail`.
- **Archiv:** `services/customer-hub/products`.
- **Versicherungsdetails:** `weitere Edit-Aktionen: Earnings protection, 3a limit, Additional payment`; `Transfer (Pillar 3a)`; `Details disclosure`; `contact/appointment-planner/create/topic`; `download/documents`.
- **Anlagethema ändern:** `Externe Fondsdetails für die drei angebotenen Themen`.
- **Produkte:** `offers/product-opening/invest`; `offers/product-opening/account`; `offers/product-opening/pension`; `offers/product-opening/financing`; `offers/digital-goods/buy`; `offers/digital-goods/show`; `offers/travel-funds`; `offers/loyalty-overview/active`; `offers/multibanking-opening`; `Products-Untermenü nicht zusätzlich geöffnet`.
- **Kreditkarten vergleichen:** `offers/apo-process`; `https://www.postfinance.ch/content/pfch/en/priv/pay/card/pfcreditcard1`.
- **Profil und Einstellungen:** `services/customer-hub/notifications`; `services/customer-hub/products`; `services/customer-hub/cards`; `services/customer-hub/payments`; `services/customer-hub/investments`; `services/admin-hub/user-admin`; `services/admin-hub/power-of-attorney`; `services/admin-hub/deliveries`; `services/admin-hub/reports`.
- **Profil:** `services/contact-data`; `occ/ADRESSE_MUTIEREN`; `services/approval-address-orders`; `services/pending-address-orders`; `services/power-of-attorney/pc/authorized-person`; `services/power-of-attorney/pc/approve`; `services/power-of-attorney/pc/pending-orders`; `occ/PHYSISCHES_RECHT_ERSTELLEN`; `occ/BONUSPROGRAMM_LOESCHEN`; `services/data-protection`; `Bedingungsdokumente (sechs; nicht geöffnet)`; `Activate purchase voucher`.
- **Login und Sicherheit:** `services/change-username`; `services/change-password`; `services/card-registration`; `services/change-session-timeout`; `services/abs-settings`; `services/api-gateway/overview`; `services/customer-hub/cards`.
- **Meine Neuigkeiten:** `New account document Link nicht direkt betätigt`; `New message Link nicht direkt betätigt`.
- **Kontakt und Support:** `services/customer-hub/cards/block`; `contact/appointment-planner/create/topic`; `https://www.postfinance.ch/efinsupportetradeen`; `https://www.postfinance.ch/efinebillnen`; `https://www.postfinance.ch/efinonboardingebillen`; `https://www.postfinance.ch/efinfeedbacken`; `Telefon-/E-Mail-Links nach Supportthema (Werte nicht übernommen)`; `Enter access code`.
- **Funktionsführung:** `Slides 3–5`; `Direkte Slidenavigation und Back`.
- **Serviceaufträge:** `services/order-overview/detail`; `services/power-of-attorney/pc/document-upload`; `Search options nicht geöffnet`.

## Reichweite

- Stand 20.11.2026. Nur sichtbare Reichweite der PostFinance E-finance-Demo; kein Vollständigkeitsanspruch für Produktion.
- Eigener BrowserOS-neo-Tab; Screenshots visuell angesehen, keine Bilddateien oder personenbezogenen Werte gespeichert.
- Breit 1440×1000; schmal 390×844 nur Support und Einführung. Toolbilder wurden verkleinert dargestellt.
- Keine Finanzaktion, Bestellung, Vertragsänderung, Speicherung, Löschung, Upload oder Nachricht ausgeführt.
- Services-Menü: My news, Profile/settings, Chat, Contact/support sowie Language, View mode, Privacy Mode und Legal/Accessibility sichtbar. Chat, Ansichtscontrols und Legal nicht bedient. Kein Persistenzbeleg.
- Dokumentfilter und Kategoriekurzwege nicht bedient. Nicht geöffnete Ziele stehen pro Ansicht; außerhalb geöffneter Hubs unbekannte Ziele sind nicht inventarisiert.
- Keine vollständige Responsive-, Tastatur-, Screenreader-, Funktions- oder Accessibilityprüfung.
