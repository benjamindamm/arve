# Priorisierte Befunde der öffentlichen Agentenprobe

P1 = vor dem vollständigen Entwurf dieses Randwegs klären; P2 = vor Übergabe/Umsetzung ergänzen; P3 = Verbesserung. Kein Befund stellt die Normalweg-Gestaltbarkeit insgesamt in Frage. Die unten genannten Vorschläge sind Vorschläge dieser Probe, keine bereits geltenden Regeln.

## F-01 · P1 für Randweg · Unbekanntes Ergebnis und anschliessendes Verlassen

**Beleg:** `formulare-validierung` beschreibt Dirty-Abbruch mit «Ungespeicherte Änderungen verwerfen?» und separat «Während Übermittlung» den Rückweg «Seite verlassen». Für einen bereits in «Ergebnis unbekannt» übergegangenen Vorgang wird kein ausdrücklicher Vorrang dieser Regeln genannt.

**Konkrete Rückfrage:** Gilt nach unbekannter Antwort weiterhin «Seite verlassen», wohin führt es, und welcher Vorgangsbezug bleibt nach dem lokalen Weggehen verfügbar? Darf die Seite dann überhaupt «ungespeichert» behaupten?

**Auswirkung:** Ein neues Team könnte einen Verwerfendialog entwerfen, der ausgerechnet nach unbekanntem Ausgang einen sicheren ungespeicherten Zustand suggeriert. Der Text verbietet diese Behauptung grundsätzlich, liefert aber die kollidierenden Aktionsregeln nicht als vollständige Matrix.

**Vorschlag:** Laufend **und unbekannt** haben Vorrang vor Dirty. «Seite verlassen» mit Warnung «Das Ergebnis ist noch unklar. Verlassen macht eine mögliche Speicherung nicht rückgängig.» Die lokale Aufgabe darf verlassen werden; Ziel und zu erhaltender Vorgangsbezug ausdrücklich bestimmen. Statusklärung bleibt eine Integrationsvoraussetzung. Bis dahin im statischen Entwurf offenen Übergang markieren, keine funktionsfähige Wiederaufnahme versprechen.

**Abnahme:** Ein zweiter Entwurf verwendet nach unknown weder «ungespeichert» noch «Vorgang abbrechen» und dokumentiert Ziel, Warnung und Wiederkehrzustand.

## F-02 · P2 · Initial- und Rückkehrfokus nicht überall konkret

**Beleg:** Suche definiert Fokus bei Listenrückkehr; Formular definiert bestätigtes Speichern → Seitentitel und Dialogschliessen → Auslöser. Für Detailöffnung → Bearbeitungsseite sowie Verwerfen/unverändert Abbrechen → Detail ist kein gleich explizites Fokusziel im gelesenen Text vorhanden.

**Rückfrage:** Seitentitel bei jedem Seitenwechsel oder teilweise direkt das Eingabefeld/der Bearbeiten-Link? Wie wird Browser-Zurück aus einem Dirty-Formular behandelt? «Jeder interne Rückweg» und die gesonderten Reload-/Schliessen-Grenzen lassen die History-Navigation hier interpretierbar.

**Vorschlag:** Kleine Übergangstabelle ergänzen: Öffnen Detail → Titel; Öffnen Formular → Titel, danach normale Tabfolge; Abbrechen/Verwerfen → Bearbeiten-Link auf Detail; History-Ausgang aus Dirty-Formular ausdrücklich einordnen. Diese konkreten Ziele sind Vorschlag, keine zwingende fachliche Wahl.

**Abnahme:** Erwartetes Fokusziel und Dirty-Verhalten für jede Übergangskante explizit; anschliessend in Umsetzung mit Tastatur und Assistivtechnik prüfen.

## F-03 · P2 für Designübergabe · Ressourcen sind benannt, nicht als Paket nachgewiesen

**Beleg:** Pilot nennt Inter und fordert sie bei Fehlen im Designwerkzeug verfügbar zu machen. Komponentenindex weist nur Button als registrierte Web-Preview aus; Input hat keine veröffentlichte Implementierungsregistrierung. Die gelesenen Einstiegs-/Aufgabenseiten verlinken keine direkt nutzbare Projektvorlagenbibliothek im Designwerkzeug.

**Rückfrage:** Welches geprüfte Font-/Vorlagenpaket soll ein Team öffnen; welche Komponentenbasis dient Statusauswahl und Verwerfendialog?

**Auswirkung:** Für den hier dokumentierten Textentwurf kein Blocker. Für visuell identische Übergabe und spätere Umsetzung sind zusätzliche Einrichtungs- und Zuordnungsentscheidungen nötig. Fehlender Link ist nicht Beweis, dass die Ressourcen nirgendwo existieren.

**Vorschlag:** Öffentliche Ressourcentabelle mit Tool, Link, Version, Geltung und Status; Statusauswahl/Dialog als «noch zuzuordnen» führen. Lokale Pilotrollen ausdrücklich von importierten Contract-Defaults trennen.

## F-04 · P3 · Gleichnamiges Inputbeispiel zeigt fachlich andere Regel

**Beleg:** Input-Gestaltungsstudie zeigt «Dieser Name ist bereits vergeben. Wähle einen anderen Namen.» beim Feld Projektname. Der führende Pilot erlaubt doppelte Namen ausdrücklich. Beide Texte sind als lokale Studie bzw. Pilot abgegrenzt.

**Bewertung:** Kein unauflöslicher Widerspruch; die Geltung ist bei vollständigem Lesen klar. Ein neues Team, das direkt bei Input einsteigt, könnte dennoch die Eindeutigkeitsregel übernehmen.

**Vorschlag:** Direkt am Beispiel «Illustration eines fachlichen Fehlers; der Projektpilot erlaubt gleiche Namen» ergänzen oder ein fachlich zum Pilot passendes Überlängenbeispiel verwenden. Keine Contractregel daraus erfinden.

## F-05 · P2 für breiteren Erstellumfang · Einstieg bei vorhandenen Projekten

**Beleg:** Suche bietet «Projekt erstellen» ausdrücklich in Erstleere; der Pilot nennt Erstellen/Bearbeiten, aber die gelesene Suchvorlage benennt keinen regulären Erstellen-Einstieg bei nichtleerem Bestand.

**Grenze:** Der beauftragte Bearbeitungsweg ist davon nicht blockiert. Diese Rückfrage wurde durch einen Hinweis des Koordinators angeregt und ist kein vollkommen ungestützter Blindfund.

**Vorschlag:** Falls Erstellen im Navigationsumfang bleibt: eindeutigen Einstieg, Position und q/status-Übernahme in nichtleerer Liste ergänzen. Andernfalls Umfang der unabhängigen Probe auf Bearbeiten begrenzen, wie hier geschehen.

## I-01 · Implementierungsblocker, kein Gestaltungsblocker · Statusklärung fehlt

**Beleg:** Formular nennt die Statusklärung ausdrücklich als erforderliche, noch nicht verfügbare Integrationsschnittstelle. Keine konkrete Projektanwendung, sichere Wiederholung oder Speicherbestätigung wird behauptet.

**Bewertung:** Das Handbuch verhält sich hier sachlich korrekt. Ein statischer unbekannter Zustand lässt sich gestalten. Ein produktiv durchgängig lösbarer Ablauf ist dadurch nicht nachgewiesen.

**Vorschlag:** Vor Implementierung Vorgangsidentität, Abfrage, sichere Wiederaufnahme, Lebensdauer und Umgang mit veralteten Lesedaten festlegen. Keine Backendfunktion nur für den Nachweis dieser Agentenprobe bauen.

## Positive, konkret nutzbare Entscheidungen

Die veröffentlichten Regeln lösen ohne interne Quellen: Objektidentität, Archiviert als nur lesbar, lokales Suchmodell, q/status und History-Granularität, Fokus nach Listenrückkehr, Trefferverlust nach Umbenennung, Graphemcluster-Grenze, Dirty-Vergleich, Prüfzeitpunkte, fehlende Antwort versus Nichtannahme, breite/schmale Reihenfolge, gleiche Daten in gestapelter Liste, konkrete Texte und visuelle Rollen. Diese Probe stützt die Aussage «statisch gestaltbar innerhalb des Pilotumfangs», nicht «mit Menschen oder Assistivtechnik erfolgreich geprüft».
