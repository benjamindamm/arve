# Themenweise Weiterentwicklung des Handbuchs

Dieser Planungsdurchgang folgt dem Nutzerauftrag: Jeder Themenbereich wird von einem eigenen Subagenten anhand sämtlicher bestehender Unterseiten untersucht. Die Pläne beschreiben zusammenhängende Themenfamilien und ihre konkrete Darstellung. Sie sind keine Freigabe neuer Regeln und ersetzen noch keine CMS-Inhalte.

## Fachpläne

| Bereich | Plan | Verantwortungsgrenze |
| --- | --- | --- |
| Grundlagen | [foundations.md](foundations.md) | Visuelle Bedeutung, Hierarchie und Werte; keine eigenständigen Prozessregeln |
| Komponenten | [components.md](components.md) | Lokale Auswahl, Aufbau und Bedienung; keine aus einer Demo abgeleitete Persistenz |
| UX-Patterns | [patterns.md](patterns.md) | Aufgaben und vollständige Abläufe; nutzt die konkret belegten Komponentenfähigkeiten |
| Layouts und Seitentypen | [layouts.md](layouts.md) | Regionen, Navigation und Platzierung; keine zweite Abstandsskala oder Validierungslogik |
| Content Design | [content-design.md](content-design.md) | Verständliche Formulierung und Formate; verspricht keine unbelegte Produktwirkung |
| Inklusive Gestaltung | [inclusion.md](inclusion.md) | Gemeinsame Prüfwege und Kriterien; konkrete Bedienung bleibt am jeweiligen Baustein |
| Plattformen | [platforms.md](platforms.md) | Gemeinsame Aufgabe und plattformspezifische Umsetzung; Kontexte sind keine Nachweise |
| Mitwirken und Pflege | [governance.md](governance.md) | Entscheidungen, Quellen, Veröffentlichung, Rückmeldung und Ablösung |

## Bereits abgeglichene Schnittstellen

Diese Vereinbarungen ergeben sich aus den Fachaudits. Sie schreiben keine universelle Seitenvorlage vor.

- **Farbrolle und Zustandsablauf:** Grundlagen zeigen, wie ein Zustand erkennbar wird. Komponenten zeigen seine lokale Darstellung. Patterns erklären, wann der Zustand entsteht und wie der Weg weitergeht.
- **Eingabe und Validierung:** Input beschreibt das einzelne Feld. Das Formularpattern führt Prüfzeitpunkt, Absenden, Fehlerübersicht und Wiederherstellung. Fehlende Field-/Formularfähigkeiten werden nicht dem Input-Contract zugeschrieben.
- **Auswahl und Speicherung:** Checkbox und Switch erklären ihre jeweiligen Werte. Ob eine Änderung unmittelbar oder gesammelt übernommen wird, benötigt eine ausdrückliche Produkt-/Patternentscheidung. Die aktuelle Switch-Demo belegt keine Speicherung.
- **Skala und Seitenaufbau:** Grundlagen sind für Abstandsbedeutung und eine begründete Skala zuständig. Layout entscheidet über Raster, Container, Regionen und Umbruch. Die bisherige Zahlenreihe wird nicht allein durch ihre Wiederholung verbindlich.
- **Meldung und tatsächliches Ergebnis:** Patterns bestimmen, welche Information über den Vorgang bekannt ist. Content Design formuliert genau diesen Stand. Eine unklare Übermittlung darf weder Erfolg noch eine unbedenkliche Wiederholung behaupten.
- **Lesbarkeit und Übersetzung:** Grundlagen gestalten Schrift und Platz. Content Design verantwortet Bedeutung und Formatierung. Inklusion erklärt die gezielten Prüfbedingungen; Layout erhält Beziehungen und Lesereihenfolge.
- **Inhalt und Quellenstand:** Jede Aussage hat einen führenden Ort. Quellen, eigene Vorschläge und Beobachtungen werden am jeweiligen Gegenstand kenntlich gemacht. Template, Fliesstext und Nachtrag dürfen keine gegensätzlichen Zeitstände enthalten.

## Konsequenzen für die Umsetzung

Ein Themenagent führt seine Familie durch Bestandsaufnahme, Seitenkonzepte, Ausarbeitung und Review. Übergreifende Änderungen werden als eng begrenzte gemeinsame Aufgabe behandelt; sie verteilen keine neue Textschablone auf sämtliche Seiten.

Die ersten drei Audits begründen übereinstimmend einen neutralen Abbildungsblock statt anatomischer oder erklärender Grafiken unter einem künstlichen Do-Label. Vergleichs- und Nachweisdarstellungen werden an konkreten Seiten erprobt. Aus den Plänen entsteht kein Auftrag, vorsorglich einen grossen universellen Editor zu bauen.

Vor Migration bleibt pro Ausgangsseite nachvollziehbar, welche Aussage erhalten, verbessert oder an ein führendes Ziel verschoben wird. Alte Slugs und eingehende Links werden geprüft. Erst ein vollständiges Themenreview rechtfertigt die Ablösung alter Seiten. Die Ausgabe über Portal und MCP wird aus denselben redaktionellen Inhalten abgeleitet.

## Qualitätsmassstab

Vollständigkeit wird nicht durch Seitenzahl oder Textmenge gemessen. Eine Seite muss eine konkrete Gestaltungsentscheidung erleichtern. Ihre Abbildung erklärt genau diese Entscheidung, ihre Alternativen und Grenzen. Die Aussage muss ohne Hover, ohne ausschliessliche Farbcodierung und ohne das Lesen winziger Bildbeschriftungen zugänglich sein. Schemen, Live-Demos und tatsächlich geprüfte Implementierungen bleiben unterscheidbar.

Die noch offenen Fachentscheidungen sind keine technischen Kleinigkeiten: gewollte Tokenquelle, lokale Systemskalen, Zustand/Speicherung, Plattformumfang und Prüfnachweise benötigen jeweils einen nachvollziehbaren Entscheid. Sie werden bei der Umsetzung nicht stillschweigend durch Standardwerte ersetzt.

## Gemeinsame Reviewstellen vor der Ausarbeitung

| Übergabe | Beteiligte Themen | Zu klärende Frage |
| --- | --- | --- |
| Feld mit Fehler | Komponenten, Patterns, Content, Inklusion | Wo wird die Meldung zugeordnet, wann erscheint sie, wie wird sie formuliert und wahrgenommen? |
| Einstellung ändern | Komponenten, Patterns, Layout, Plattformen | Welcher Zustand ist bestätigt, wo erscheint die Rückmeldung und wie bleibt die Handlung erreichbar? |
| Lange Detailseite | Grundlagen, Layout, Inklusion | Wann wird die Zusatzregion gestapelt, wann darf sie haften und wie bleiben lange Texte bedienbar? |
| Farben im Beispiel | Grundlagen, Komponenten | Welche konkrete Revision versorgt das Systembeispiel, und welche Rollen sind noch offen? |
| Veröffentlichung | Pflege, alle Fachthemen | Welche Aussagen werden ausgeliefert und welche fachlichen Nachweise gelten tatsächlich? |

Diese Reviewstellen koordinieren die Themenagenten; sie ersetzen deren ausführliche Unterseitenpläne nicht. Eine vorgeschlagene neue Unterseite wird erst angelegt, wenn sie einen eigenständigen Nutzen und ausreichenden Inhalt besitzt. Die Zielbäume sind keine Aufforderung, jetzt leere Strukturen zu erzeugen.

## Abschluss dieses Planungsdurchgangs

Acht eigenständige Themenagenten haben ihre Bereiche anhand des tatsächlichen Bestands untersucht und je eine Plandatei geliefert. Die Übersicht hält die Schnittstellen fest; die fachlichen Seitenkonzepte bleiben in den jeweiligen Plänen. In diesem Durchgang wurden keine CMS-Inhalte, Contracts oder Anwendungsdateien verändert und nichts veröffentlicht. Externe Quellen- und Browserprüfungen unterscheiden sich je Audit und sind dort mit ihren Grenzen dokumentiert.

Die nächsten Umsetzungspakete verbleiben bei den jeweiligen Themenagenten. Gemeinsam benötigte Darstellungsbausteine werden erst an konkreten Seiten umgesetzt und danach von den betroffenen Themen geprüft. Fachlicher Quellenabgleich, visuelle Abnahme, Bedienprüfung und Gleichheit von Portal/MCP sind separate Nachweise; kein Plan erklärt seine geplanten Prüfungen bereits für bestanden.

## Erstes umgesetztes Themenpaket: Grundlagen

Die Grundlagenfamilie wurde durch ihren Fachagenten ausgearbeitet und durch den Koordinator integriert: Einstieg, Farbe, Themes, Typografie, Abstände, Form/Ebenen, Icons, Bewegung und erhaltener Themenwegweiser. Der Layout-Fachagent hat die Anschlussstelle zur Abstandserklärung korrigiert. Veröffentlichter Stand und begrenzte Prüfungen: [foundations-release.md](../foundations-release.md). Die anderen Fachpläne bleiben eigenständige folgende Themenpakete.

## Zweites umgesetztes Themenpaket: Komponenten

Der Komponentenagent hat Übersicht, Auswahlhilfe und Button, Input, Checkbox, Switch zusammenhängend ausgearbeitet. Fünf themenspezifische Studien erklären Entscheidungen und Zustände; lokale Vorschauen und technische Nachweise bleiben getrennt. Der Koordinator hat Schema, Portal und MCP angebunden und die sechs Seiten lokal veröffentlicht. Nachweise und verbleibende Prüfgrenzen: [components-release.md](../components-release.md).

## Drittes umgesetztes Themenpaket: Formular-Arbeitsweg

Pattern-, Content- und Inklusionsagent haben einen gemeinsamen Weg ausgearbeitet: Eingeben, prüfen, korrigieren, übermitteln und bestätigtes/abgelehntes/unbekanntes Ergebnis unterscheiden. Fünf bestehende Seiten wurden lokal aktualisiert; Ablauf und Meldungsvergleiche werden aus denselben CMS-Daten im Portal und über MCP bereitgestellt. Umfang und begrenzte Integrationsprüfungen: [form-workflow-release.md](../form-workflow-release.md). Andere Patterns und das Layoutpaket sind damit noch nicht überarbeitet.

## Systemunabhängiger Inhaltsstandard

Der [Inhaltsstandard 0.1](../content-standard/README.md) ergänzt die Umsetzungspläne um wiederverwendbare Themenvorlagen, klare Pflichtfragen, bedingten Bedarf und Abnahmebelege. Er ist unabhängig von der Darstellung im CMS. [Bestandsabgleich](../content-standard/assessment-shadcn.md) und [Prüfblatt](../content-standard/review-template.md) unterstützen die Prüfung bestehender und künftiger Systeme.
