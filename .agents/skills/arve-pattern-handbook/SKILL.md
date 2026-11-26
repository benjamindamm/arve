---
name: arve-pattern-handbook
description: Erarbeite oder prüfe UX-Patterns für ein Design-System-Handbuch aus Quellen und gezielten Rückfragen. Für zusammenhängende Nutzeraufgaben wie Formulare, Suche, Auswahl, Unterbrechungen und folgenreiche Aktionen; nicht für einzelne Komponenten-Contracts oder die räumliche Layoutspezifikation.
---

# UX-Patterns erarbeiten

Ein Pattern erklärt, wie eine Person eine Aufgabe über mehrere Komponenten und Zustände hinweg erledigt. Ein Komponentenverzeichnis oder ein gezeichnetes Formular allein beantwortet das nicht.

Kläre Zielsystem, Aufgabe und Auftrag: Bestand dokumentieren, prüfen oder einen ausdrücklich beauftragten Entwurf erarbeiten. Vorhandene Quellen und Antworten zuerst nutzen. Fehlende Produktregeln gezielt mit dem Nutzer klären, meist ein bis drei zusammengehörige Fragen. Nicht von shadcn oder einer Plattform auf andere Systeme schliessen. Bei delegierten Showcase-Entwürfen eigene Entscheidungen ausdrücklich als solche ausweisen.

## Was jedes gewählte Pattern klären soll

- **Aufgabe und Grenze:** Welches Problem wird gelöst, woran erkennt man den Abschluss, wann passt eine andere Lösung?
- **Entscheidung:** Welche Variante passt zu welcher Situation? Nur tatsächlich relevante Alternativen erläutern.
- **Ablauf:** Einstieg → Handlung → Rückmeldung → nächster Schritt. Wo kann man korrigieren, zurückgehen oder abbrechen?
- **Arbeit erhalten:** Was bleibt bei Fehler, Unterbrechung und Rückkehr erhalten? Was ist bestätigt, was weiterhin offen?
- **Zusammenspiel:** Welche Komponenten und Layouts tragen den Ablauf? Welche Reihenfolge, Meldung und Fokusbewegung ist nötig, einschliesslich schmaler Ansicht und anderer Eingabearten?
- **Nachweis:** Was stammt aus Quellen, was ist lokale Entscheidung, was ist ungeprüft? Welche beobachtbare Anwendung würde die Regel belegen?

Diese Fragen sind immer zu klären; eine ausdrücklich offene Entscheidung ist eine zulässige Antwort. Sie sind keine sichtbaren Pflichtüberschriften und benötigen keine Nummerierung.

## Bedingte Vertiefungen

Nur bei tatsächlichem Bedarf aktivieren: mehrstufige Abläufe, asynchrone Verarbeitung, Mehrfachauslösung, unbekanntes Ergebnis, Entwürfe/Wiederaufnahme, Berechtigungen, konkurrierende Änderungen, irreversible Folgen, native Unterschiede. Unbekannten Bedarf nicht als „nicht relevant“ ausgeben. Keine Funktionen, Zuständigkeiten oder Wiederherstellungswege erfinden.

Bei fehlender Antwort ist eine Übermittlung weder sicher gescheitert noch bestätigt. Wiederholen oder Verwerfen erst nach geklärter Wirkung anbieten. Ein lokales Beispiel darf dieses Problem zeigen, aber keine produktive Statusabfrage oder sichere Wiederholung behaupten.

Für Formulare lies zusätzlich [Formularfragen](references/forms.md). Andere Patterns erhalten nur die für ihren Fall erforderliche Vertiefung. Ein Formularthema muss nicht jeden Such-, Berechtigungs- oder Offlinefall behandeln.

## Darstellung und Übernahme

Zeige früh einen verständlichen Ablauf mit Beispielinhalt, kurzen Beschriftungen und einer echten Entscheidung oder Korrektur. Eine Legende oder Zustandsliste ersetzt den Ablauf nicht. Interaktive Beispiele sind hilfreich, aber keine Pflicht: statische Vergleiche können genügen, wenn Auslöser und Folge sichtbar werden. Simulationen klar als solche kennzeichnen; Bedienelemente sollen entsprechend ihrem Erscheinungsbild funktionieren oder erkennbar nur abgebildet sein.

Im Hauptteil: kurze Einsatzentscheidung, anschauliches Beispiel, wenige führende Regeln. Seltene Fälle, Herkunft, Detailwerte und historische Studien dürfen aufklappbar bleiben. Gemeinsame Grenzen einmal nennen; keine wiederholten Absicherungsabsätze. Mobile Reihenfolge, lange Texte und wesentliche Rückmeldungen prüfen.

Vor dem Beispiel nur erklären, was für dessen Auswahl und Einstieg nötig ist. Ergebnisregeln an der Rückmeldung oder in der zugehörigen Erläuterung führen. Labels, Gruppenüberschriften und Hilfen müssen jeweils zusätzliche Information liefern; ein einzelnes selbsterklärendes Feld braucht keine dreifache Beschriftung. In Simulationen dürfen Szenarioauswahl und dargestelltes Ergebnis nicht widersprechen: Wechsel entweder eindeutig als neuen Durchlauf behandeln oder während eines Ergebnisses sperren und den Neustart erklären.

Allgemeine UX-Regeln und lokale Beispielentscheidungen getrennt halten. Kein beliebiges Beispielmass, Feldlimit, Routingparameter oder Web-Verhalten wird zur universellen Regel. Bei beauftragter CMS-Übernahme müssen entscheidende Aussagen und Textalternativen auch im veröffentlichten Inhalt und über den Agentenzugang vorhanden sein. Entwürfe/Versionen schützen; relevante Erkenntnisse im Skill nachführen. Prüfe den Skill später auch an einer anderen Pattern-Familie, bevor du allgemeine Übertragbarkeit behauptest.
