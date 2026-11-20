# Assets: gezielte Folgeprüfung

20. November 2026 · Sechs Prüfungen, keine neuen Patternkandidaten.



## 1. Suche innerhalb der Kontenauswahl — closed

Quelle: `assets/movements-overview → Account`.

Desktop Kontoauswahl öffnen; erfundenes Nichttrefferwort eingeben; wieder öffnen, CHF eingeben; leeren und All accounts wählen.

Nichttrefferwort entfernt alle Optionen, ohne sichtbare Nulltreffermeldung. CHF zeigt die sechs Konten, All accounts entfällt dabei. Leeren zeigt All accounts wieder; Auswahl schliesst Liste und ändert Kontext.

Offen: Keine Tastaturauswahl, Screenreadermeldung oder Persistenz der Suchzeichen geprüft. Ein fehlgeschlagener Fokusversuch erfolgte nach geschlossenem Popup; mit neuem Snapshot regulär weitergearbeitet.



## 2. Reguläre Bewegungsdetails und Rückkehrkontext — blocked

Quelle: `assets/movements-overview → assets/movements-overview/details → error/overview`.

All accounts wählen, lokales Filter CASH setzen, regulären Details-Link einer gefundenen Zeile anklicken; Back der Fehleransicht.

Explizite Demo-version-Seite: This function is not supported in the demo version. Nach Back ist Account weiterhin All accounts, Filter list jedoch leer. Das ist ein Fehler-Rückweg, keine echte Detailrückkehr.

Offen: Echte Bewegungsdetailansicht und Rückkehr, Auswahl-/Sortierungs-/Positionsvergleich bleiben blockiert. Kein eigener Sortiercontrol auf dieser Übersicht erhoben.



## 3. Echter Kontodetail-Rückweg mit gewähltem Kontext — partial

Quelle: `assets → services/account-details → assets`.

Banks auf eine Bank begrenzen, Popup per Escape schliessen; Kontenmenü → Account information. Unteren Button Back to overview of assets anklicken; später dieselbe Konstellation erneut über oberen Back verlassen.

Kontoinformation tatsächlich geöffnet. Unterer Button bewirkte in der Probe auch nach erwartungsbezogenem Warten keinen Ansichtswechsel. Oberer Back kehrt zur Vermögensübersicht zurück; Banks bleibt 1, Customer relationships bleibt 2. Filternde Bankwahl ist in Liste und Summen sichtbar.

Offen: Exakte Scrollposition vor/nach Rückkehr nicht ausreichend dokumentiert; keine Sortierung oder Zeilenauswahl hier geprüft. Unterer Button nicht allgemein als funktionsfähig einstufen. Bankfilter nach direkter neuer URL-Navigation nicht als erhalten behaupten.



## 4. Kopfcheckbox, gemischter Zustand, Filterwechsel und Auswahlumfang — partial

Quelle: `assets/analysis/label-overview`.

Einzelzeile markieren; CASH eingeben, das diese Zeile ausschliesst; Filter leeren. Einzelmarkierung entfernen. CASH erneut setzen; Select all per Klick; Filter leeren.

Einzelmarkierung ist nach Ausschliessen/Zurücksetzen wieder sichtbar. Bei einer markierten Zeile bleibt Kopfcheckbox visuell leer, ohne erkennbares Minus. Unter CASH Select all markiert die passenden Zeilen. Nach Leeren bleibt die zuvor ausgeschlossene erste Zeile unmarkiert, passende Zeilen bleiben markiert; Kopfcheckbox zeigt dennoch ein Häkchen. Snapshot zählt 8 Checkboxen im gefilterten und 14 im ungefilterten Zustand inklusive Kopf.

Offen: Kein belastbarer gemischter Kopfzustand; beobachtete Kopfmarkierung nach Filterwechsel entspricht nicht allen wieder sichtbaren Zeilen. Keine Bulkaktion, Pagination, Seitenwechsel oder nicht geladene Ergebnisse geprüft. Ein Space-Tastaturversuch war nicht als erfolgreicher Umschaltbeleg verwendbar; Befund beruht auf dem anschliessenden Klick.



## 5. Bisher ungeöffnete Untergruppe Geldmarkt — closed

Quelle: `assets → assets/money-market`.

Regulären Details-Link des Festgeldes in der Vermögensübersicht öffnen; Ansicht visuell ansehen.

Fixed-term deposit mit Laufzeit, Fälligkeit, Zins, Betrag und Bezugskonto erreicht. Back und Print sichtbar; nicht betätigt. Direkte URL-Aufrufe zuvor hatten nur die Übersicht als Ausgangsansicht gezeigt und werden nicht als Detailbeleg verwendet.

Offen: Keine Rückkehrprobe und kein Druck. Andere Geldmarktprodukte, insbesondere Medium-term note, nicht separat untersucht.



## 6. Bisher ungeöffnete Fondsposition, schmal und Tastatur — partial

Quelle: `assets/investment-retirement → assets/selfservice-fund-custody/position-details`.

Regulären Positionslink öffnen; Desktop ansehen; auf 390×844 umstellen; Fund-details-Disclosure fokussieren und Enter drücken.

Fund details mit Kennzahlen, Verlauf, Zeit-/Daten-/Darstellungswahl und Subscribe/Redemption-Links erreicht. Schmal werden Kennzahlen vertikal angeordnet und Zeitraum wird zur Auswahlbox. Enter öffnet Fund details; expanded und zusätzliche Angaben visuell bestätigt. Weitere Disclosures Brief description, Fund structure by asset class und Documents sichtbar.

Offen: Keine Subscribe-/Redemption-Aktion, Dokumentöffnung oder Druck. Keine vollständige Tabreihenfolge, Fokus-Rückkehr oder Screenreaderprüfung. Andere Fondspositionen/Vorsorgegruppen bleiben ungeprüft.



## Grenzen

- Eigener BrowserOS-neo-Tab. Screenshots visuell angesehen und nicht als Dateien gespeichert.

- Desktop1440×1000 und repräsentativ Fondsdetails390×844 CSS-Pixel.

- Keine Finanzaktion, Speicherung, Löschung, Nachricht, Vertragsaktion, Dateiauswahl oder Upload. Keine personenbezogenen Werte in diesen Dateien.

- Sechs gezielte Prüfungen; geschlossene Lücke bedeutet nur den benannten begrenzten Nachweis. Untergruppen ausserhalb dieser sechs Prüfungen bleiben offen.

- Suche/Bankfilter und Checkboxen ändern nur lokalen Ansichtskontext; keine Aussage über fachliche Korrektheit aller Demowerte.

- Nur regulär geklickte und danach visuell verifizierte Inhalte als Detailbeleg; die direkten URL-Versuche zeigten teilweise Ausgangsübersichten.
