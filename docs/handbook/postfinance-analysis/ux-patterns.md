# UX-Patterns aus der PostFinance-Demo

Stand: 20. November 2026. BrowserOS neo, eigener Tab, Screenshots visuell angesehen und nicht als Dateien gespeichert. Untersucht wurden Aufgaben und sichtbare Reaktionen, keine Implementierung. Alle Quellenpfade unten beginnen mit `https://www.postfinance.ch/ap/ga/ob/html/finance/`.

**Ergebnis:** Die stärksten Beispiele sind Suche mit Übernahme, sofortiges Listenfilter, Kontextauswahl, Datumsvalidierung und bedingte Felder. Upload und Dashboard zeigen zusätzlich Abbruch-/Entwurfsgrenzen. Acht Patterns reichen; einzelne Buttons und Links sind keine weiteren Patterns.

## Priorisiertes Inventar

### 1. Kriterien übernehmen — Applied filters · Priorität 1

**Aufgabe:** Bewegungen mit mehreren Kriterien eingrenzen. Quelle: `assets/movements-overview`, Home → Alle Bewegungen.

**Tatsächlich bedient:** Suchoptionen öffnen → getönter Kriterienbereich erscheint. Ein frei erfundenes Stichwort eingeben → Search → Bereich klappt zu; angewandtes Stichwort erscheint im Kriterienblock über der Tabelle. Bereich erneut öffnen → Reset → Eingabefeld ist leer, zuvor angewandtes Stichwort bleibt im Kriterienblock sichtbar. Erst Search mit den geleerten Feldern entfernt auch diesen Eintrag.

**Bedeutung:** Entwurf und angewandter Filter sind verschiedene Zustände. Reset ist hier nicht gleichbedeutend mit sofortigem Löschen der angewandten Kriterien. Das sollte eine Referenz ausdrücklich erklären.

**Grenze:** Die Demo zeigte trotz des erfundenen Stichworts weiterhin ihre Beispieltabelle. Belegt sind Übernahme und Kriterienanzeige, nicht die fachliche Korrektheit der Abfrage. Kein Lade-/Netzwerkfehler geprüft. Breit geprüft; keine eigene schmale Interaktionsprüfung dieses Filters.

**Handbuch:** Suchen und Filtern als Hauptort; Tabellen und Listen verweist auf Kriterienanzeige, Sortierung und Ergebnisbereich.

### 2. Liste sofort filtern — Live list filter · Priorität 1

**Aufgabe:** Bereits angezeigte Zeilen schnell durchsuchen. Quelle: ebenfalls `assets/movements-overview`, Feld „Filter list“ unterhalb der angewandten Kriterien.

**Tatsächlich bedient:** Nicht passendes Testwort eingeben → Tabellenzeilen verschwinden ohne Search-Klick; sichtbar ist „No results were found“. Feld leeren → Tabelle erscheint wieder. Das Feld bietet eine kleine Löschaktion; diese war sichtbar, geleert wurde durch Ersetzen des Feldinhalts.

**Rückwegprobe:** Mit einem allgemeinen passenden Suchwort eine Detailverknüpfung öffnen → die Demo navigierte zu `error/overview`. Über ihren Back-Button zurück → Bewegungsübersicht wieder erreichbar, lokales Listenfilter leer. Das ist ein belegter Verlust des lokalen Filters **auf diesem Fehler-Rückweg**, kein allgemeiner Nachweis für reguläre Detailrückkehr. Der Fehlertext selbst wurde in dieser Probe nicht screenshot-visuell dokumentiert.

**Zustände:** Ergebnis, Nulltreffer und Wiederherstellung bedient. „Noch keine Daten“ ist damit nicht belegt. Breit geprüft.

**Handbuch:** Suchen und Filtern; Nulltreffer mit passender Rücksetzung unter Laden/Leer/Fehler behandeln. Auswahl und Suche soll nur auf den Ablauf verweisen, ihn nicht doppelt erklären.

### 3. Ansichtskontext wählen — Context selection · Priorität 1

**Aufgabe:** Festlegen, welche Konten oder welcher Zeitraum dargestellt werden. Quellen: `assets/movements-overview` und `assets/analysis`.

**Tatsächlich bedient:** Kontoauswahl öffnen → Liste mit Suchfeld, aktueller Markierung und Option „All accounts“. Diese Option wählen → Liste schließt; Auswahltext ändert sich, kontobezogener Block für offene Aufträge entfällt. Das Suchfeld innerhalb der Auswahlliste wurde nur angesehen, nicht selbst gefiltert.

Zeitraumauswahl in Analysen öffnen → vordefinierte Zeiträume und Custom erscheinen. Custom → Dialog mit Von/Bis, Apply und Cancel. Nach erfolgreicher Übernahme steht der gewählte Zeitraum im Auswahlcontrol. Erneut öffnen → Cancel → Dialog schließt und der vorher übernommene Zeitraum bleibt sichtbar. Beim Cancel-Versuch wurde kein neuer abweichender Entwurf eingegeben; eine Verwerfungsprüfung geänderter Werte ist damit nicht belegt.

**Grenze:** Geprüft ist der sichtbare Kontextwechsel, nicht die rechnerische Richtigkeit der Demodaten. Breit geprüft. Die zuvor geprüfte schmale Analyse stapelt die Kontextcontrols; sie ist kein zusätzlicher Nachweis aller Auswahllisteninteraktionen.

**Handbuch:** Auswahl und Suche beschreibt Einzel-/Mehrfachwahl und Suchbarkeit von Optionen; Suchen und Filtern beschreibt ihre Wirkung auf die Ergebnisse.

### 4. Datumsbereich korrigieren — Date-range validation · Priorität 1

**Aufgabe:** Einen gültigen Analysezeitraum eingeben. Quelle: `assets/analysis` → Zeitraum → Custom.

**Tatsächlich bedient:** Von-Datum nach Bis-Datum setzen → Apply → Dialog bleibt offen, beide Eingaben bleiben erhalten. Die Datumsgruppe zeigt eine rote feldnahe Meldung, dass „Date from“ vor „Date to“ liegen muss. Reihenfolge korrigieren → Apply → Dialog schließt, Zeitraum wird im Auswahlcontrol angezeigt.

**Zustände:** Fehler bei Übernahme, Eingabenerhalt, Korrektur und erfolgreiche Filterübernahme belegt. Kein Zahlungs-/Formularauftrag abgesendet. Nicht geprüft: Zeitpunkt bei Blur, Fehlerzusammenfassung, Tastaturfokus, Screenreader-Ausgabe oder Netzwerkausfall. Breit geprüft.

**Handbuch:** Formulare und Validierung führt den vollständigen Korrekturablauf. Felder und Fehlermeldungen bleibt Verweis auf Beschriftung, Hinweis und feldnahe Meldung; keine zweite konkurrierende Validierungsregel.

### 5. Nur benötigte Felder zeigen — Conditional fields · Priorität 1

**Aufgabe:** Zwischen sofortiger und terminierter Ausführung wählen. Quelle: `transfer/transfers`, Home → Überträge.

**Tatsächlich bedient:** „Enter date“ wählen → zusätzliches Feld „Execution date“ mit Kalenderbutton erscheint. „Immediately“ wählen → Datumsfeld verschwindet. Der Umschaltversuch erfolgte nur im nicht abgesendeten Formular; kein Betrag wurde erfasst und Send nicht betätigt.

**Breit/schmal:** Breit liegt die Datumszeile in der Label-/Feldordnung. Bei 390×844 CSS-Pixeln wurde die Auswahl erneut bedient: Feld und Kalender erscheinen unter der Ausführungswahl, übrige Felder bleiben darunter erreichbar. Die Abschlussaktion ist weiter unten sichtbar. Breite Tabs werden schmal zur Auswahlbox. Ein zusätzlicher Tabwechsel wurde versucht, aber nicht als vollständig verifizierter Zielzustand ausgewertet.

**Grenze:** Erhalt eines zuvor manuell geänderten Datums beim Ein-/Ausblenden, Pflichtprüfung und Formularabschluss nicht geprüft. Keine Regel über diese ungeprüften Zustände ableiten.

**Handbuch:** Formulare und Validierung; Felder/Fehler nur für die einzelne Feldgruppe. Navigation/Tabs als Kontextwechsel beschreiben, nicht als Pflichtschritte eines Wizards.

### 6. Import verstehen und abbrechen — Import entry and cancel · Priorität 2

**Aufgabe:** Vor Dateiauswahl verstehen, wie ein Import arbeitet, oder den Einstieg verlassen. Quelle: `transfer/invoice-scan/create`, Home → QR-Rechnung bezahlen.

**Tatsächlich bedient:** Einstieg öffnen → Informationsdialog über einer abgedunkelten Uploadansicht. Sichtbar: Erklärung, Datenverwendung, Checkbox zum künftigen Ausblenden sowie Confirm/Cancel. Cancel → Dialog und Importansicht verlassen; Rückkehr zur vorher besuchten Übertragsansicht.

**Breit/schmal:** Breiter Dialog im früheren Rundgang gesehen; nun schmal screenshot-visuell geprüft: Text bricht um, Aktionen stehen untereinander. Die Checkbox wurde nicht geändert, Confirm nicht betätigt, keine Datei ausgewählt. Dateiformat-, Uploadfortschritts-, Fehler- und Erfolgszustände nicht belegt.

**Handbuch:** Formulare/Prozesseinstieg und Systemzustände. Dieser Informationsdialog ist **kein** Beleg für „Destruktive Aktionen bestätigen“; Abbruch und Bestätigen allein machen eine Aktion nicht destruktiv.

### 7. Anordnung als Entwurf bearbeiten — Dashboard customization · Priorität 2

**Aufgabe:** Kartenanordnung anpassen. Quelle: `home/widget-edit`, Home → Startseite anpassen; screenshot-visueller Beleg aus dem ersten Rundgang, in dieser Interaktionsprüfung nicht erneut geöffnet.

**Nur sichtbar:** Normale Karten werden zu umrandeten Platzhaltern mit Titel und Verschiebehinweis. Teilweise sind Entfernen-Aktionen vorhanden; zugängliche Positionsauswahlen sowie Complete modification/Cancel stehen bereit. Keine Karte wurde verschoben oder entfernt; Abschluss und Abbruch wurden hier nicht getestet.

**Offen:** Entwurf vs Autosave, Abbruchwirkung, Reihenfolge nach Rückkehr, Tastaturalternative in Benutzung und schmale Bearbeitungsansicht. Die Controls legen einen Entwurfsablauf nahe, beweisen seine Speichersemantik aber nicht.

**Handbuch:** Als spätere Aufgabe „Anpassen und Änderungen verwerfen“ unter Formulare/Interaktionen führen. Kein belegter Löschbestätigungsablauf.

### 8. Zustand erklären und Ausweg anbieten — Status and recovery · Priorität 2

**Aufgabe:** Erkennen, ob etwas fehlt, verarbeitet wird oder nicht verfügbar ist. Quellen aus dem ersten visuellen Rundgang: `upload/payment-order/file-overview-epo` und `contact/mailbox`.

**Nur sichtbar:** Dateiliste mit unterschiedlichen vorhandenen Verarbeitungszuständen, Symbolen/Text und Details; kein eigener Upload ausgelöst. Mailbox zeigt ausdrücklich, dass diese Funktion in der Demo nicht unterstützt wird, plus Back. Die Rückkehr dort wurde nicht geprüft.

**Abgrenzung:** Nulltreffer sind in Pattern 2 tatsächlich bedient. Nicht verfügbar ist kein Nulltreffer. Vorhandene Dateistatus sind keine beobachtete zeitliche Progression. Laden, Offline, Rechtefehler und erfolgreicher Finanzabschluss bleiben offen. Breit belegt, keine neue schmale Prüfung dieser Statusseiten.

**Handbuch:** Laden/Leer/Fehler und Systemzustände zu einer gemeinsamen Zustandsmatrix konsolidieren; Tabellen und Listen zeigt nur deren Anwendung in Zeilen.

## Vorschlag für das Handbuch

1. **Suchen, Filtern und Auswählen** als zusammenhängenden Ablauf ausbauen: Kriterienentwurf → Übernahme → aktive Kriterien → Ergebnis → lokales Filter → Nulltreffer → Rücksetzung. Rückkehrkontext ausdrücklich entscheiden und prüfen. Die Demo zeigt gerade, warum „Reset“ allein als Wort nicht ausreicht.
2. **Formulare und Validierung** mit dem sicheren Datumsbeispiel ergänzen: fehlerhafte Beziehung zwischen zwei Feldern, Eingaben erhalten, korrigieren, übernehmen. Bedingte Felder als eigene Variante innerhalb dieses Ablaufs führen.
3. **Systemzustände** zentral führen: Nulltreffer, noch keine Daten, Verarbeitung, nicht verfügbar, technischer Fehler, unbekannter Ausgang. Jeweils Ursache, Meldung und nächste sinnvolle Aktion trennen. Beobachtete und noch zu entwerfende Zustände kennzeichnen.
4. **Keine neue Patternseite pro Komponente.** Auswahl und Suche, Felder und Fehlermeldungen sowie Tabellen und Listen bleiben gezielte Vertiefungen/Verweise. Destruktive Aktionen bestätigen bleibt eigenständig; dieser Rundgang liefert dafür keinen belastbaren Ausführungsbeleg.

Priorität für konkrete Referenzen: **Filter mit getrenntem Entwurf/Apply/Reset**, **Livefilter mit Nulltreffern**, **Datumsfehler mit Korrektur**, **bedingtes Feld**. Danach Kontextauswahl und Abbruch/Rückkehr. Dashboard-Anpassung und Uploadabschluss benötigen zusätzliche Nachweise oder klar als eigene Referenzentscheidungen markierte Beispiele.

## Reichweite

Der vorhandene Themenbaum wurde anhand der lokalen Handbuchquellen, insbesondere `scripts/seed-shadcn-handbook.ts`, `scripts/content/shadcn-reference-pages.ts` und `docs/handbook/content-standard/patterns-layouts.md`, zugeordnet. Der veröffentlichte Stand aller Handbuchseiten wurde dafür nicht erneut überprüft.

Keine Zahlungs-, Übertrags-, Bestell- oder Vertragsaktion abgeschlossen; keine Datenänderung gespeichert, keine Datei hochgeladen, keine Nachricht gesendet. Nur Such-/Ansichtsparameter und ein ungesendetes bedingtes Formularcontrol wurden bedient. Bericht enthält keine personenbezogenen Demo-Werte. Kein vollständiger Funktions-, Responsive- oder Barrierefreiheitstest und keine Aussage über einen shadcn-Technologiestack von PostFinance.
