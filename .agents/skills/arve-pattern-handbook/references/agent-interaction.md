# Interaktion mit Agenten

Für Aufgaben, bei denen Gespräch und eingebettete Auswahl, Formular oder Vorschau zusammenwirken. Protokolle und Frameworks sind mögliche Umsetzungen, keine fachliche Gliederung.

## Die passende Interaktion wählen

- **Auswählen:** wenige verständliche Alternativen mit Wirkung und Geltungsbereich. Eine freie Antwort oder „noch offen“ ermöglichen, wenn die Entscheidung nicht vollständig vorgegeben ist.
- **Rückfragen:** fehlende Angaben von offenen Fachentscheidungen trennen. Ein bis drei zusammenhängende Fragen stellen, keine vollständigen Fragebögen ohne Anlass.
- **Vorschauen und ändern:** Ausgangspunkt, Vorschlag und Änderung sichtbar unterscheiden. Begründungen an der betreffenden Alternative zeigen. Beispiele dürfen keine bestehenden Systemregeln vortäuschen.
- **Bestätigen und ausführen:** Was bewirkt die Aktion? Eine Auswahl im Gespräch, ein gespeicherter Entwurf und eine Veröffentlichung sind verschiedene Ergebnisse. Vor folgenreichen Aktionen den betroffenen Umfang zeigen.
- **Unterbrechen und fortsetzen:** Eingaben erhalten; laufend, bestätigt, abgebrochen und unbekannt getrennt darstellen. Eine fehlende Antwort ist keine bestätigte Niederlage und keine sichere Wiederholung.

## Fragen an jede gewählte Ausarbeitung

1. Was soll der Mensch entscheiden, und wofür reicht eine Textfrage? Eine eigene Oberfläche soll einen visuellen Vergleich, eine Bearbeitung oder eine sonst schwer verständliche Entscheidung erleichtern.
2. Welche Angaben stammen aus dem Nutzerauftrag, aus Quellen oder aus einem Agentenvorschlag? Für welches System, Thema und welchen Stand gelten sie?
3. Welche Auswahl bleibt zunächst lokal? Durch welche ausdrückliche Aktion wird sie ins Gespräch übernommen? Was weiss der Agent davor und danach? Änderungen nach einer Übergabe müssen als neue Antwort nachvollziehbar sein.
4. Was geschieht bei einer neuen Frage, geänderten Quellen oder einer ersetzten Karte? Alte Vorschläge nicht still weitergeben; den aktuellen Stand neu beziehen. Ein Hash kennzeichnet den Karteninhalt, beweist aber nicht die Aktualität externer Quellen.
5. Funktioniert derselbe Ablauf als Text ohne eingebettete UI? Sind Auswahl, freie Korrektur und Offenlassen auch mit Tastatur, Screenreader und schmaler Ansicht verständlich?

## Anschauliche Darstellung

Zeige einen kurzen Ablauf: Frage → Vergleich → Antwort → bestätigte Übergabe bzw. offenes Ergebnis. Die entscheidende Rückmeldung gehört zur Aktion. Unterscheide die sichtbare lokale Auswahl vom tatsächlich übergebenen Gesprächsstand; keine bloss farbige Erfolgsanzeige.

Beispiel für einen Farbvergleich: dieselbe Formularsituation mit unterschiedlichen Rollenfarben, Werte und knappe Begründung. Der Mensch kann eine Arbeitsrichtung wählen, eine Änderung beschreiben oder die Frage offenlassen. Daraus entsteht noch keine allgemeingültige Palette oder CMS-Freigabe.

## Gegenprobe

Kann eine zweite Person erklären, was ihre Aktion bewirkt und was offen bleibt? Verwendet der Agent danach genau ihre Antwort samt Quelle und Geltungsbereich? Teste auch fehlende Treffer/Varianten, Abbruch, eine ersetzte Karte und eine unbestätigte Übergabe. Prüfergebnisse auf den tatsächlich getesteten Host begrenzen.
