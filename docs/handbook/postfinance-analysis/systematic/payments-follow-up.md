# Zahlungen: gezielte Folgeprüfung

20. November 2026 · sechs begrenzte Prüfungen. Keine Finanzaktion abgeschlossen.

Die wichtigsten Lücken sind jetzt konkret beschrieben: Reset und Search trennen Entwurf und angewandte Währung. Reguläre Detailrückkehr erhält den Filter, setzt jedoch die Sortierung zurück. Die Kopfcheckbox zeigt bei Teilmenge visuell keinen gemischten Zustand; Gesamtauswahl und Gesamtabwahl funktionieren. Filterübernahme leert vorherige Auswahl. Ein geänderter Datumsentwurf übersteht Aus- und Einblenden.

## payment-filter-reset-apply

**Status:** closed · Quelle: `transfer/pending-orders/search-single-orders`

**Aktion:** Währung EUR wählen → Search → Suchoptionen öffnen → Reset → erneut Search.

**Beobachtet:** Search klappt Kriterien ein und zeigt EUR als aktive Währung. Die Tabelle bleibt bei CHF-Beispielzeilen. Reset stellt das Entwurfscontrol auf All, lässt das aktive EUR-Kriterium zunächst stehen. Erst erneutes Search entfernt das aktive Währungskriterium.

**Offen:** Fachliche Filterwirkung nicht belegt: Demozeilen widersprechen dem gewählten Währungskriterium. Nicht alle Filtertypen oder Kombinationen geprüft.

## regular-payment-detail-return

**Status:** partial · Quelle: `transfer/pending-orders/search-single-orders → orders-detail → Back`

**Aktion:** EUR anwenden, Amount descending wählen, reguläre Details öffnen und mit dem sichtbaren Back-Button zurückkehren.

**Beobachtet:** Reguläre Zahlungsdetailseite erfolgreich geöffnet. Nach Back erscheint wieder die Zahlungsübersicht. Aktive EUR-Währung bleibt erhalten; Sortiercontrol steht wieder auf Due date ascending. Kriterienpanel bleibt eingeklappt. Vorherige reine Sortierprobe ohne Währungsfilter zeigte denselben Sortierverlust.

**Offen:** Scrollposition nicht numerisch vor/nach gemessen; visuelle Rückkehr lag am Kriterien-/Ergebnisanfang. Keine Browser-Zurück-Probe; kein Auswahlkontext in dieser Liste vorhanden. Detailansicht und Liste zeigen unterschiedliche Beispieldaten; fachliche Zuordnung nicht geprüft.

## header-checkbox-partial-and-clear

**Status:** closed · Quelle: `transfer/approve`

**Aktion:** Eine von zwei Zeilen anklicken → Kopfcheckbox ansehen → Kopfcheckbox anklicken → erneut anklicken.

**Beobachtet:** Bei einer markierten Zeile bleibt die Kopfcheckbox visuell leer, ohne Mixed-Strich. Der Snapshot benennt keinen Mixed-Zustand. Erster Kopfklick markiert beide sichtbaren Zeilen und die Kopfcheckbox. Zweiter Kopfklick leert beide Zeilen und Kopfcheckbox; Approve selected ist wieder deaktiviert.

**Offen:** Umfang nur für die zwei dargestellten Zeilen belegt. Keine Pagination oder Auswahl über Ergebnisseiten sichtbar/geprüft. Semantik für Screenreader nicht geprüft; visuell leer ist kein Beweis über interne indeterminate-Eigenschaft. Keine Freigabe ausgeführt.

## selection-after-filter-apply

**Status:** partial · Quelle: `transfer/approve`

**Aktion:** Unter aktivem EUR-Filter eine Zeile per Klick markieren → Suchoptionen öffnen → Währung All wählen → Search.

**Beobachtet:** Markierung aktiviert Approve selected. Search mit All erneuert den Ergebnisbereich; beide weiterhin dargestellten Demozeilen sind danach unmarkiert und Approve selected deaktiviert. Das zuvor aktive Währungskriterium entfällt.

**Offen:** Auswahlverlust nach dieser Übernahme belegt; nicht bei allen Filterarten. Demo zeigt unter EUR zuvor weiterhin CHF- und EUR-Zeile, daher kein fachlicher Mengeneffekt belegt. Kein Test mit verborgenen selektierten Zeilen oder mehreren Ergebnisseiten.

## conditional-date-retention-and-cancel

**Status:** partial · Quelle: `transfer/transfers/account`

**Aktion:** Enter date wählen → Datum mit erfundenem künftigem Testdatum ersetzen → Immediately → Enter date.

**Beobachtet:** Datumseingabe wurde sichtbar übernommen. Immediately entfernt Datumsfeld; Enter date zeigt denselben geänderten Wert wieder. Kein Betrag eingegeben. Kein Cancel-/Reset-Control im ungesendeten Übertragsformular gefunden; nur Send als Abschlussaktion. Den geänderten Zustand zusätzlich bei 390×844 visuell angesehen.

**Offen:** Cancel geänderter Formularwerte mangels sichtbarer Abbruchaktion nicht prüfbar. Keine Aussage zu Neuladen/Neunavigation oder Speichersemantik. Keine Validierungs-/Send-Aktion ausgeführt.

## financial-wizard-boundary

**Status:** blocked · Quelle: `transfer/qr-bill-generator/new/recipient`

**Aktion:** Bereits belegten ersten Empfängerschritt und vorhandenes Next gegen die Ausführungsgrenze eingeordnet; keinen Folgeschritt betätigt.

**Beobachtet:** Im Ausgangsrundgang sichtbarer QR-Generator beginnt mit vorbefülltem Zahlungsempfänger und Next. Ein ausdrücklich sicherer, nichtfinanzieller Einführungsfolgeschritt war für diesen Bereich nicht belegt. Send/Approve/Generate und Prozessabschlüsse bleiben unbetätigt.

**Offen:** Wizard-Folgeschritte, Review, Validierung und Abschluss bleiben offen. Diese Zeile ist eine dokumentierte Ausführungsgrenze, kein neuer visueller Folgeschrittbeleg.

## Patternergänzungen

- `applied-filters`: Währungsentwurf wählen → Search übernimmt und zeigt aktives Kriterium → Reset leert nur Entwurf → Erneutes Search entfernt angewandtes Kriterium.
- `sort-control`: Amount descending wählen → Reguläre Details öffnen → Mit Back zurück → Sortierung fällt auf Due date ascending zurück.
- `batch-selection`: Eine Zeile markieren → Kopf bleibt visuell leer bei Teilmenge → Kopf anklicken markiert beide sichtbaren Zeilen → Erneuter Kopfklick leert beide und deaktiviert Folgeaktion → Erneute Filterübernahme leert vorherige Zeilenauswahl.
- `object-detail-navigation`: Angewandte Währung und Sortierung setzen → reguläre Zahlungsdetails öffnen → sichtbaren Back-Button verwenden → Filter bleibt erhalten, Sortierung fällt auf Default zurück.
- `conditional-fields`: Enter date zeigt Datum → Geänderten Datumsentwurf eingeben → Immediately verbirgt Feld → Enter date zeigt geänderten Wert wieder.

Keine neuen Patternkandidaten.

## Grenzen

- Stand 20. November 2026; gezielte Folgeprüfung der sichtbaren Demo, keine allgemeine Produktfreigabe.
- Eigener BrowserOS-Tab, Screens screenshot-visuell angesehen; keine Screenshots als Dateien gespeichert und keine personenbezogenen Demo-Werte übernommen.
- Keine Finanzübermittlung, Freigabe, Generierung, Speicherung, Löschung, Vertragsaktion oder Upload ausgeführt.
- Ein fokussierter Checkbox-Space-Versuch zeigte keine verifizierte Aktivierung; Auswahlbefunde beruhen auf Klicks. Daraus folgt keine allgemeine Tastaturbewertung.
- Beim Suchen wurde versehentlich die globale Suche geöffnet; über Close dialogue wieder verlassen, keine Suchanfrage gesendet.
- Frühere payments-Dateien bleiben unverändert; patternUpdates sind Ergänzungen für zentrale Synthese, keine zusätzlichen IDs.
