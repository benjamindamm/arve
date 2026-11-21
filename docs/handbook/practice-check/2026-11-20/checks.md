# Ausgeführte Checks · 20.11.2026

Werkzeug: BrowserOS neo, eigenes Portal-Tab 258 und Prototyp-Tab 259. Keine Playwright-/Headlessprüfung. Echte Viewports über CDP `Emulation.setDeviceMetricsOverride` mit deviceScaleFactor=1: 1440×1000 (mobile=false), 390×844 (mobile=true). PNGs über CDP `Page.captureScreenshot`, keine Skalierung eines Desktopbildes. Bei den finalen Hauptbildern wurden Override und Capture im selben Neo-run ausgeführt. Desktop-Abbruchbild stammt aus dem laufenden 1440-Override. Alle unten verlinkten Bilder wurden tatsächlich mit dem Bildbetrachter angesehen.

## Tatsächlicher Walkthrough

| Prüfung | 1440 | 390 | Beobachtung |
| --- | --- | --- | --- |
| Finden→Detail→Bearbeiten | ausgeführt | ausgeführt | Nord ergibt genau K-101. ID/Name/Testadresse im Detail, Ausgangswert im Edit. |
| Geänderten Namen abbrechen | Weiterbearbeiten und dann Verwerfen | Weiterbearbeiten | Dialog öffnet; Weiterbearbeiten erhält Entwurf; Desktop-Verwerfen zeigt bestätigten Namen und sendet keine Namensanfrage. Mobile-Verwerfen nicht separat ausgeführt. |
| Simulierte Feldablehnung→Korrektur | ausgeführt | ausgeführt | Entwurf bleibt, Fehler neben Feld, Fokus am Feld; korrigierter Wert mit Fall «Bestätigte Annahme» öffnet Detail/Bestätigung. Feldablehnung ist Testantwort, keine Produkt-Namensregel. |
| Umbenennung aus Suchkontext | ausgeführt | Kriterien beim Einstieg erhalten | Desktop: Nord→Ost, Rücklink behält q=Nord, null Treffer und Erklärung zum nicht mehr passenden Kontakt. |
| Unbekannte Namensantwort | ausgeführt | ausgeführt | Kein Erfolg/Misserfolg behauptet; Eingabe readonly, Speichern/Abbrechen gesperrt, Erklärung zur Klärung. Desktop nachträgliche Annahme simuliert; Mobile Nichtannahme simuliert, dann Speichern bestätigt. |
| Sofortige separate Einstellung | bestätigt | bestätigt | Umschalten sendet eigene S-Anfrage, keine Namensspeicherung nötig, bestätigter Zustand und Meldung. |
| Einstellung nachweislich nicht gespeichert | nicht separat | ausgeführt | Alter bestätigter Ein-Zustand bleibt, verständliche Nichtannahme, erneutes Umschalten möglich. |
| Einstellung unbekannt | ausgeführt im späten Desktoplauf | ausgeführt | Kein falsches Aus; «Zustand ungeklärt», kein binärer Schalter; nachträgliche Annahme/Nichtannahme nur über Testlabor. |
| Finale kleine Nachprüfung nach Korrektur | Feldablehnung und unklar | Einstellung erfolgreich, Kontaktwechsel, Namensspeicherung; dann unklar | Feld-/Speicherzustände funktionieren weiterhin. |

Beobachtete Layouts: Desktopliste zeigt ID/Name/Testkennzeichnung nebeneinander; 390 stapelt dieselben Angaben. Detailkarten folgen untereinander. Lange mobile Überschrift und Meldungen umbrechen; Bearbeitungsaktionen stehen untereinander, das Formular bleibt innerhalb der Ansicht. Keine künstliche breite Tabelle auf dem Telefon. Screenshots zeigen die überprüften Ansichten, keine allgemeine Responsive-Freigabe.

## Screenshots

- [Desktop Übersicht](desktop-list.png) – 1440×1000, alle drei neutralen Datensätze.
- [Desktop Abbruch](desktop-cancel.png) – 1440×1000, geänderter Entwurf mit Weiterbearbeiten/Verwerfen.
- [Desktop Feldfehler](desktop-field-error.png) – 1440×1000, finaler Nachlauf mit simuliertem Feldfehler und sichtbarem Fokus.
- [Desktop unklar](desktop-unknown.png) – 1440×1000, gesperrte Wiederholung/Abbruch, Anfragebezug.
- [Mobile unklar](mobile-unknown.png) – 390×844, finaler Nachlauf, erklärter Zustand und vertikale Aktionen.
- [Mobile Detail](mobile-detail.png) – 390×844, Umbenennung bestätigt, lesbare Identität und nächste Aktion.
- [Mobile Einstellung unklar](mobile-setting-unknown.png) – 390×844, gescrollter Ausschnitt zeigt explizit ungeklärten Zustand statt Aus.

## Eigene Korrekturen / Grenzen der Probe

Bei erster Prüfung enthielt der zugängliche Switchname zusätzlich «Aus/Ein». Das wurde korrigiert: Zustandswort ist visuell ergänzend, der zugängliche Name bleibt «Benachrichtigungen». Der spätere Neo-Snapshot zeigte diesen Namen. Formular auf maximal 640px begrenzt und Aktionsstapelung an verfügbare Containerbreite gebunden. Einstellungsergebnisse werden kontaktbezogen gehalten, damit ein Kontaktwechsel keine fremde Antwort zuordnet; finaler Smoke-Check mit Nord→Süd und bestätigtem Namensspeichern ausgeführt. Wechsel während laufender Anfrage nicht gesondert geprüft.

Ein Neo-Schritt verwendete nach erneutem Dialogöffnen einen veralteten Ref; er wurde durch frischen Snapshot korrigiert. Ein späterer Desktopversuch wartete auf eine Bestätigung, während im Testlabor noch «Ergebnis unbekannt» gewählt war. Dieser Versuch ist kein Erfolgsnachweis. Danach wurden beide unklaren Anfragen ausdrücklich geklärt, der Fall «Bestätigte Annahme» gewählt und `waitForText` lieferte matched=true; die Bestätigung wurde gelesen.

Nicht geprüft: Screenreader, vollständige Tastaturfolge, 200%-Zoom, Bildschirmtastatur, echte Mobilgeräte, Backend/Persistenz, Konkurrenzänderungen, reale Berechtigungen, sichere Wiederholung, Browser-Zurück/Direktlinks zu Detail oder Edit. Der Prototyp hält q in der URL, bildet jedoch keine vollständige Router-/Historyarchitektur ab. Neuladen setzt Daten zurück; beforeunload bietet nur nativen Warnschutz und ersetzt keine Entwurfswiederherstellung. Unbekannte Resultate können im Testlabor geklärt werden, im Produkt fehlt die dafür nötige Schnittstelle.

## Reviewbetrieb / Aufräumen

Previewserver: Python PID **9355**, `127.0.0.1:3018`, eigener Server nur für diesen Ordner. Port war vor Start frei. Läuft für weitere Review weiter; Produktserver 3010 unangetastet. Neustart bei Bedarf: `python3 -m http.server 3018 --bind 127.0.0.1 --directory /Users/kcnpxcp/Dev/GitHub/design-system/docs/handbook/practice-check/2026-11-20`.

Emulation am eigenen Prototyp-Tab am Ende aufgehoben, eigene Tabs geschlossen. Keine Commits/Pushes oder Veröffentlichung. Keine Produkt-, CMS-, Contract-, Pin-, Export- oder Portalroutenänderung.

## Nachtrag: ursprünglicher Zuordnungsfehler und gezielte Regression

Der unabhängige Root-Check fand einen echten ursprünglichen Agentfehler: Nord→Einstellung unknown→Liste→West→Annahme simulieren änderte West. Die erste Probe deckte diese Objektwechselkombination nicht ab. Fehlerlogik separat aus vorherigem Toolstand rekonstruiert unter `prototype-before-request-fix.html` (keine byteidentische historische Kopie).

Nach kontakt- und anfragegebundener Korrektur bei 1440px ausgeführt:

1. Nord aus, Einschaltanfrage S-1 mit unknown; Meldung matched=true.
2. West öffnen: `{id:K-103,notify:false,phase:idle}`.
3. Dort «Annahme simulieren»: weiter `{id:K-103,notify:false,phase:idle}`; Protokoll «Keine unklare Anfrage vorhanden».
4. Nord öffnen: ursprüngliche S-1 weiterhin unknown, kein falsches Aus.
5. Originalannahme simulieren: Nord true/idle, Request enthält contactId=K-101; Süd true und West false unverändert.

Bei 390px zusätzlich ausgeführt: Nord mit bestätigtem Ein startet separate Ausschaltanfrage unknown; währenddessen Namen bearbeiten und Namensanfrage unknown. Beide Zustände per lesender CDP-Inspektion unknown. Zwei nachträgliche Annahmen: Nord heisst «Paralleler Testname», notify=false, Süd/West unverändert. Kein fremder Kontakt wird geändert. Die CDP-Inspektion liest ausschliesslich neutrale lokale Simulatordaten. Kein Produktzugriff.

Der Satz «Wechsel während laufender Anfrage nicht gesondert geprüft» oben gilt für den ersten Walkthrough. Der Nachtrag deckt Objektwechsel nach unbekanntem Ergebnis sowie parallele Namens-/Einstellungsanfrage ab; Wechsel genau während der 650ms-Laufzeit wurde weiterhin nicht separat automatisiert.

Unabhängiger Vorher-Beleg: `root-review.md` und `root-failure-wrong-contact.png`, vom Root vor der Korrektur erstellt/angesehen; dessen Neo-Trace liegt im Toolaudit. Von diesem Agenten nicht verändert.
