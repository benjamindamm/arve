# Formulare und Validierung · Pattern-Ausarbeitung

25.11.2026. Auf Nutzerauftrag: unabhängiger UX-Roast, wiederverwendbarer Pattern-Autoren-Skill, Anwendung auf die Formularseite.

## Review vor der Überarbeitung

Frischer UX-Agent; BrowserOS Neo bei 1224×715 und 390×844, Screenshots von Einstieg, Feldfehler und unbekanntem Ergebnis. Hauptbefunde: Einfeld-Speicherpilot statt Formularorientierung; langes Inhaltsverzeichnis; fehlende Gruppierungs-/Optionalentscheidung; Autorenanweisungen in Produktmeldungen; irreführend linearer Fortschritt; wiederholte lokale Regeln. Keine Änderungen durch den Reviewer.

## Anwendung

Der neue Skill `arve-pattern-handbook` klärt Aufgabe, Einsatzentscheidung, Ablauf, Zustände/Datenerhalt, Zusammenspiel und Nachweise. Bedingte Fragen werden durch das tatsächliche Pattern aktiviert. Eine separate Formularreferenz vertieft Feldwahl/Gruppen, Pflicht/optional, Prüfzeitpunkt, Feld-/Vorgangsfehler und Folgen des Sendens. Keine Pflichtgliederung oder Nummerierung im sichtbaren Handbuch. Der Skill ist in der README verlinkt; seine Übertragbarkeit auf eine andere Pattern-Familie wurde noch nicht unabhängig erprobt.

Die Seite beginnt mit einer kurzen Aufbauentscheidung. Ein lokales Kontaktformular zeigt zwei erforderliche Angaben und eine optionale Nachricht in zwei Gruppen. Beispielsteuerung und Produktmeldung sind getrennt. Fehler führen zur Übersicht beziehungsweise zum Feld; gültige Angaben bleiben erhalten. Ein stabiler Rückmeldungsbereich verhindert, dass die Absendeaktion bei Blur-Korrekturen unter dem Zeiger wegspringt.

Die Beispielantwort kann bestätigte Annahme, bestätigte Nichtannahme, laufende Übermittlung oder unbekanntes Ergebnis simulieren. Bei unbekanntem Ergebnis gibt es kein erneutes Senden. Keine Netzwerkübertragung, Speicherung oder Statusklärung. Zurücksetzen ist ausschliesslich eine Lernfunktion ausserhalb des Formulars. Allgemeine Ziele stehen im Block `goals`, lokale Festlegungen separat in `example-rules`. Historischer Projektpilot bleibt in einem ausdrücklich gekennzeichneten Archiv; alte Blockkennungen tragen dort einen Historienpräfix.

Quellen: WAI Forms Tutorials zu Validierung und Rückmeldungen am 25.11.2026 gezielt gelesen. Die Quellen beschreiben mehrere mögliche Prüfzeitpunkte; der konkrete Prüftakt ist eine lokale Beispielentscheidung.

## Ausgeführte Prüfungen

- Skill formal validiert, TypeScript erfolgreich; MCP-Unitprüfungen einschliesslich Suche/Quellbezug bestanden.
- Browser: zwei fehlende Pflichtfelder → Fehlerübersicht mit Fokus; gültiger Name plus ungültige E-Mail → Fokus am E-Mail-Feld; Korrektur → simulierte Bestätigung bei erhaltenem Nachrichtentext. Nach der Korrektur des Rückmeldungsbereichs diesen Ablauf erneut erfolgreich durchgespielt.
- Antwortfälle bestätigt/nicht angenommen/laufend/unbekannt tatsächlich ausgelöst. Vorgangsfehler markiert keine gültigen Felder als ungültig. Bei laufend/unbekannt ist erneutes Senden gesperrt. Die Eingaben bleiben erhalten.
- Feldfehler bei 390 px visuell geprüft, unbekanntes Ergebnis bei 320 px visuell geprüft; keine gemessene horizontale Überbreite. Desktop bei 1440 px mit Feldkorrektur bedient.
- Vollständiger MCP-Inhalt mit der Ausarbeitung abgeglichen, kompakter Abruf erfolgreich. Datenbank und Referenzsnapshot aktualisiert.
- Statischer Build und Link-/Assetprüfung bestanden: 227 HTML-Dateien, 131 Handbuchseiten, 69 Komponenten.

Keine produktive Server-, Screenreader-, native Plattform- oder unabhängige Nachprüfung des neuen Designs behauptet. Alte Studien sind Historie, keine bestandenen aktuellen Nachweise.

## Nachprüfung und drei Korrekturen

Ein weiterer frischer UX-Agent prüfte Desktop, 390 px und einen 320-px-Ausschnitt. Urteil: anschaulich und mobil verständlich, aber noch nicht knapp genug. Restbefunde: veränderbare Antwortwahl bei unverändertem Ergebnis, Ergebnisregeln vor der Demo, dreifache Beschriftung der optionalen Nachricht.

Diese Punkte wurden anschliessend umgesetzt: Auswahl nach einem Ergebnis sperren und Neustart erklären; Ergebnisregeln nur in der aufklappbaren Erklärung anzeigen (im allgemeinen CMS-Regelblock erhalten); Nachricht auf Label und Textfeld reduzieren. Autoren-Skill und Formularfragen ergänzen diese Prinzipien. Der Select-Chevron hat einen eigenen dekorativen Pfeil mit rund 13 px rechtem Abstand; das native Select und seine Tastaturbedienung bleiben erhalten, mit nativer Darstellung bei erzwungenen Systemfarben.

Nachprüfung der Korrektur durch den Hauptagenten: unbekanntes Ergebnis bei 390 px ausgelöst, dazu passende gesperrte Auswahl und Neustarthinweis überprüft; Zurücksetzen entfernt das Ergebnis, leert die Felder und gibt die Auswahl wieder frei. Anschliessender Szenariowechsel per Tastatur erfolgreich. Vereinfachtes Nachrichtenfeld bei 390 px visuell geprüft; Steuerung bei 320 px visuell geprüft. Beide Breiten ohne gemessene horizontale Überbreite. TypeScript und Skill-Format bestanden; vollständiger MCP-Inhalt mit Ausarbeitung abgeglichen, kompakter Abruf erfolgreich. Keine erneute unabhängige Designer- oder Screenreader-Prüfung der Korrektur behauptet.
