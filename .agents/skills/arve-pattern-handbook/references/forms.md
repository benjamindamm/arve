# Formulare: gezielt klären

Nutze diese Fragen für das beauftragte Formularpattern, nicht als Liste obligatorischer Unterseiten.

## Grundfragen

- Welche Angaben sind für die Aufgabe wirklich nötig? Welche sind optional, und wie erkennt man das vor der Eingabe?
- Welche Felder gehören zusammen? Reicht eine Seite, oder verlangt die Aufgabe begründete Schritte? Lange Formulare nicht bloss nach einer festen Feldzahl aufteilen.
- Sind Labels dauerhaft sichtbar, Hilfen am richtigen Feld und Formate nach Möglichkeit tolerant? Placeholder ersetzen kein Label. Keine unnötigen Format- oder Längenbeschränkungen erfinden.
- Trägt die Gruppe mehr bei als das einzelne Feldlabel? Bei einem optionalen Nachrichtenfeld kann das Label allein genügen; Hilfe nur bei einer echten zusätzlichen Anforderung.
- Wann hilft eine Prüfung? Zeitpunkt für erste Fehlermeldung und erneute Prüfung nach Korrektur getrennt entscheiden. Weder bei jedem Tastendruck noch erst am Ende ist pauschal immer richtig.
- Was muss am Feld korrigiert werden, was betrifft den Vorgang insgesamt? Fehlermeldung nennt Ursache und Handlung; gültige Werte bleiben erhalten. Fokus und gegebenenfalls Fehlerübersicht führen zur Korrektur.
- Was löst die Hauptaktion aus? Gültige Eingabe, laufende Übermittlung und bestätigte Annahme unterscheiden. Erfolg erst bei entsprechendem Nachweis; technische Prüfung im Browser ist keine fachliche Annahme.
- Was geschieht bei Abbruch/Zurück? Gespeicherte Ausgangswerte, lokale Änderungen und verlorene Arbeit unterscheiden. Dialog nur, wenn tatsächlich etwas verloren gehen kann.

## Wenn der Ablauf es erfordert

- Mehrere Schritte: Fortschritt, Zurück, Datenerhalt und gegebenenfalls Prüfen/Ändern vor Abschluss.
- Asynchrone Aktion: Mehrfachauslösung, bestätigte Ablehnung, Wartezeit und ungeklärtes Ergebnis. Sichere Wiederholung nicht aus einem Timeout ableiten.
- Mehrere Fehler: nachvollziehbare Übersicht mit Feldbezug. Bei einem einzelnen Feld kann die direkte Rückmeldung reichen; keine universelle Fehlerzahl für Fokusregeln vorgeben.
- Upload, sensible Angaben, Berechtigung, Sitzung, Entwürfe oder Konflikte nur bei vorhandenem Bedarf vertiefen.

## Anschaulicher Nachweis

Ein passendes Beispiel zeigt Eingabe → misslungene Prüfung → Korrektur mit erhaltenen Werten → geklärten Abschluss. Feldgruppen und mindestens die tatsächlich vorhandenen Pflicht-/Optionalunterschiede müssen erkennbar sein. Gibt es nur ein Feld oder keine optionalen Angaben, nicht zur Erfüllung der Vorlage zusätzliche Produktdaten erfinden. Fehlende Anforderungen im Bestand offen lassen.

Tastatur/Fokus, Feldzuordnung, Meldungszeitpunkt und schmale Ansichten prüfen. Rückmeldungswechsel dürfen die gerade angesteuerte Aktion nicht unter dem Zeiger verschieben; Korrektur und anschliessendes Absenden zusammen testen. Screenreader- oder plattformübergreifende Freigabe nur nach entsprechender Prüfung behaupten. Native Vorgaben können sich von einer Webreferenz unterscheiden.

Primäre Orientierung für Web: [WAI · Validierung](https://www.w3.org/WAI/tutorials/forms/validation/), [WAI · Rückmeldungen](https://www.w3.org/WAI/tutorials/forms/notifications/). Die Quellen unterscheiden mehrere mögliche Prüfzeitpunkte; sie begründen keinen universellen Prüftakt. Bei einer neuen Ausarbeitung aktuelle relevante Quellen prüfen.
