# Nachprüfung offener Punkte

20. November 2026. Die erste Aufgabenmatrix bleibt als ursprünglicher Prüfstand erhalten. Die folgenden Nachweise ergänzen sie; offene Aufgabenfelder wurden nicht pauschal auf geprüft gesetzt.

17 gezielte Prüfungen: 6 geschlossen, 8 teilweise geklärt, 3 blockiert. Geschlossen bedeutet: die konkrete Prüffrage ist beantwortet. Es bedeutet keine Freigabe des beobachteten Verhaltens.

## Ergebnisse

- Suche innerhalb der Kontenauswahl geprüft; ohne Treffer bleibt die Optionsliste leer, ohne sichtbare Erklärung.
- Kontorückkehr erhält den Bankfilter. Zahlungsdetailrückkehr erhält angewandte Filter, setzt die Sortierung aber auf die Vorgabe zurück. Bewegungsdetails bleiben in der Demo blockiert.
- Gesamtauswahl, Einzelabwahl und Filterwechsel geprüft. Verhalten unterscheidet sich je Liste; sichtbare Kopfcheckboxen stellen teilweise Auswahl nicht zuverlässig dar.
- Angewandte Kriterien und Entwurf sind bei Dokumenten und Zahlungen getrennt. Reset ändert zunächst nur Eingaben; erst Search die angewandten Kriterien.
- Geändertes Ausführungsdatum bleibt beim Aus-/Einblenden erhalten. Ein sicherer Cancel-Versuch mit geändertem Formularentwurf bleibt unbelegt.
- Einführung vollständig durchlaufen; Zurück, direkte Schrittwahl und Escape mit sichtbarer Fokusrückkehr geprüft. Repräsentative schmale Disclosure-/Formularansichten ergänzt.

## Einzelprüfungen

| Bereich | Prüffrage | Ergebnis | Rest |
| --- | --- | --- | --- |
| Home und Vermögen / Assets · Follow-up 20.11.2026 | Suche innerhalb der Kontenauswahl | closed | Keine Tastaturauswahl, Screenreadermeldung oder Persistenz der Suchzeichen geprüft. Ein fehlgeschlagener Fokusversuch erfolgte nach geschlossenem Popup; mit neuem Snapshot regulär weitergearbeitet. |
| Home und Vermögen / Assets · Follow-up 20.11.2026 | Reguläre Bewegungsdetails und Rückkehrkontext | blocked | Echte Bewegungsdetailansicht und Rückkehr, Auswahl-/Sortierungs-/Positionsvergleich bleiben blockiert. Kein eigener Sortiercontrol auf dieser Übersicht erhoben. |
| Home und Vermögen / Assets · Follow-up 20.11.2026 | Echter Kontodetail-Rückweg mit gewähltem Kontext | partial | Exakte Scrollposition vor/nach Rückkehr nicht ausreichend dokumentiert; keine Sortierung oder Zeilenauswahl hier geprüft. Unterer Button nicht allgemein als funktionsfähig einstufen. Bankfilter nach direkter neuer URL-Navigation nicht als erhalten behaupten. |
| Home und Vermögen / Assets · Follow-up 20.11.2026 | Kopfcheckbox, gemischter Zustand, Filterwechsel und Auswahlumfang | partial | Kein belastbarer gemischter Kopfzustand; beobachtete Kopfmarkierung nach Filterwechsel entspricht nicht allen wieder sichtbaren Zeilen. Keine Bulkaktion, Pagination, Seitenwechsel oder nicht geladene Ergebnisse geprüft. Ein Space-Tastaturversuch war nicht als erfolgreicher Umschaltbeleg verwendbar; Befund beruht auf dem anschliessenden Klick. |
| Home und Vermögen / Assets · Follow-up 20.11.2026 | Bisher ungeöffnete Untergruppe Geldmarkt | closed | Keine Rückkehrprobe und kein Druck. Andere Geldmarktprodukte, insbesondere Medium-term note, nicht separat untersucht. |
| Home und Vermögen / Assets · Follow-up 20.11.2026 | Bisher ungeöffnete Fondsposition, schmal und Tastatur | partial | Keine Subscribe-/Redemption-Aktion, Dokumentöffnung oder Druck. Keine vollständige Tabreihenfolge, Fokus-Rückkehr oder Screenreaderprüfung. Andere Fondspositionen/Vorsorgegruppen bleiben ungeprüft. |
| payments | payment-filter-reset-apply | closed | Fachliche Filterwirkung nicht belegt: Demozeilen widersprechen dem gewählten Währungskriterium.; Nicht alle Filtertypen oder Kombinationen geprüft. |
| payments | regular-payment-detail-return | partial | Scrollposition nicht numerisch vor/nach gemessen; visuelle Rückkehr lag am Kriterien-/Ergebnisanfang.; Keine Browser-Zurück-Probe; kein Auswahlkontext in dieser Liste vorhanden.; Detailansicht und Liste zeigen unterschiedliche Beispieldaten; fachliche Zuordnung nicht geprüft. |
| payments | header-checkbox-partial-and-clear | closed | Umfang nur für die zwei dargestellten Zeilen belegt.; Keine Pagination oder Auswahl über Ergebnisseiten sichtbar/geprüft.; Semantik für Screenreader nicht geprüft; visuell leer ist kein Beweis über interne indeterminate-Eigenschaft.; Keine Freigabe ausgeführt. |
| payments | selection-after-filter-apply | partial | Auswahlverlust nach dieser Übernahme belegt; nicht bei allen Filterarten.; Demo zeigt unter EUR zuvor weiterhin CHF- und EUR-Zeile, daher kein fachlicher Mengeneffekt belegt.; Kein Test mit verborgenen selektierten Zeilen oder mehreren Ergebnisseiten. |
| payments | conditional-date-retention-and-cancel | partial | Cancel geänderter Formularwerte mangels sichtbarer Abbruchaktion nicht prüfbar.; Keine Aussage zu Neuladen/Neunavigation oder Speichersemantik.; Keine Validierungs-/Send-Aktion ausgeführt. |
| payments | financial-wizard-boundary | blocked | Wizard-Folgeschritte, Review, Validierung und Abschluss bleiben offen.; Diese Zeile ist eine dokumentierte Ausführungsgrenze, kein neuer visueller Folgeschrittbeleg. |
| documents-insurance-products-services | Dokumentfilter: Entwurf, Übernahme, Reset und selbst erzeugter Nulltreffer | closed | Geschlossen ist die Frage nach sichtbarer Übernahmelogik und Nulltreffer-Rückweg, keine Bestätigung korrekter Filterergebnisse.; Datumsfilterwirkung in dieser Demo widerspricht der angezeigten Range; fachliche Suchkorrektheit bleibt offen.; Andere Kategorien, Produkt-/Beziehungs-/Statusfilter und Invalid-Datum nicht geprüft. |
| documents-insurance-products-services | Auswahlumfang: gemischte Objektzustände, Abwahl, Filterwechsel und Pagination | partial | Visueller gemischter Kopfzustand nicht belegt; Checked-/Indeterminate-Semantik und Screenreader nicht geprüft.; Auswahl über mehrere Ergebnisseiten mangels sichtbarer Pagination nicht prüfbar.; Keine Aktion ausgeführt; genaue Download-/Read-/Archive-Semantik offen. |
| documents-insurance-products-services | Geänderten sicheren lokalen Formulardraft abbrechen und erneut öffnen | blocked | Rein lokalen sicheren Demoentwurf mit explizitem Cancel und bekannter Speichersemantik bereitstellen oder gesonderte Testumgebung verwenden.; Bisher nur unverändertes Cancel für Investment theme belegt. |
| documents-insurance-products-services | Vollständige sichere fünfteilige Einführung mit Rückwegen | closed | Keine Aussage über fachliche Richtigkeit der Einführung oder vollständige Barrierefreiheit.; Kein Geschäftsprozess oder Vertragswizard geprüft. |
| documents-insurance-products-services | Repräsentative schmale Ansicht und Tastaturbedienung | partial | Next wurde gezielt fokussiert; keine vollständige Tab-Reihenfolge von Seitenbeginn geprüft.; Fokusfalle, sämtliche Controls, Vergrößerung, Screenreader und alle fünf Schritte schmal nicht geprüft.; Der sichtbare Fokusrückweg gilt für diesen Escape-Versuch. |

## Verbleibende Grenzen

1. Pagination und Auswahl über Ergebnisgrenzen sind nicht belastbar geprüft. Ein entsprechender erreichbarer Demoablauf fehlt bislang.
2. Änderungen abbrechen und wieder öffnen ist nur mit eindeutig lokalem Entwurf zulässig. Bei unbekannter Speicherwirkung bleibt die Frage offen; eine kontrollierte Testinstanz wäre erforderlich.
3. Vollständige Finanz-Wizards, Freigaben und Vertragsabschlüsse sind nicht durchgeführt. Dafür braucht es eine ausdrücklich geeignete Testumgebung und einen eigenen Testauftrag.
4. Laufzeitverhalten mit Tastatur/Screenreader und sämtliche schmalen Varianten sind weiterhin nur punktuell geprüft.

Die verbleibenden Produktentscheidungen für shadcn können unabhängig von Demo-Lücken festgelegt werden: Auswahlumfang explizit benennen, Filterwechsel-/Rückkehrverhalten definieren, Teilwahl sichtbar machen, Abbruch und Speicherstand unterscheiden. Dabei müssen neue Referenzentscheidungen als solche erkennbar bleiben.

[Aktualisierter Pattern-Katalog](catalog.md) · [Alle Nachprüfungen als JSON](gap-checks.json)
