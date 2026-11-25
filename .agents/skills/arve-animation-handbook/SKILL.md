---
name: arve-animation-handbook
description: Erarbeite oder prüfe das Kapitel Animation eines Design-System-Handbuchs aus Quellen, Rückfragen und delegierten Gestaltungsentscheidungen. Behandelt semantische Rollen, Zweck, Abläufe, Timing, Unterbrechung und reduzierte Animation; nicht die Erstellung beliebiger Animationsfilme oder die Implementierung einer App.
---

# Animation erarbeiten

Das Kapitel soll beim Entscheiden helfen, ob eine Animation nötig ist und wie sie Information, Orientierung oder Rückmeldung unterstützt. Eine Galerie bewegter Effekte und eine Liste von Millisekunden erklären diese Entscheidungen allein nicht. Darstellung und Umfang folgen dem System; es gibt keine vorgewählte Animationsbibliothek oder universelle Skala.

## Auftrag und Quellen

Kläre System, Aufgaben, Plattformen und Auftrag aus den vorhandenen Angaben. Im **Bestandsmodus** dokumentiere belegte Regeln und Anwendungen; unbekannte Absichten und fehlende Festlegungen bleiben offen. Im **delegierten Entwurf** entwickle begründete lokale Vorschläge aus Aufgaben und Gestaltungszielen. Neue Rezepte als Entwurfsentscheidungen kennzeichnen. Bereits delegierte Entscheidungen brauchen keine erneute Erlaubnis.

Lies gezielt Designvariablen, Komponentenrezepte, Zustands-/Verhaltensdefinitionen und vorhandene Animationsregeln. Unterscheide Systemvorgabe, lokale Implementierung, Beobachtung und Beispielgestaltung. Eine Spinnerdauer oder ein CSS-Übergang im Portal ist keine globale Zeitskala. Bei Konflikten keine automatische Rangfolge Code/Design erfinden.

Nutze die [Fachfragen ANM-01–17](references/animation-questions.md). Für reduzierte Animation, automatische Inhalte und Aussagen über Prüfungen lies gezielt die [Quellen- und Prüfhilfe](references/evidence-and-checks.md).

## Semantische Animationsrollen immer klären

Jede Ausarbeitung behandelt ausdrücklich, was Bewegung im Kontext bedeutet, bevor sie Timing und Effekte festlegt. Für die tatsächlich verwendeten Rollen Auslöser, Kontext, beabsichtigte Aussage, Anfang/Ziel, irreführende Aussagen und gleichwertige reduzierte Darstellung festhalten. Im Bestand fehlende Bedeutung als offen kennzeichnen, statt Absichten zu erfinden. Diese inhaltliche Abdeckung ist verbindlich; Darstellung und Umfang bleiben frei.

Bedienreaktion, lokaler Zustandswechsel, bestätigter Erfolg, laufende Verarbeitung, Orientierung/Zusammenhang und Aufmerksamkeit sind hilfreiche Ausgangsrollen, keine universell vorgeschriebenen sechs Kategorien. Rückmeldung über wahrgenommene Eingabe ist keine Erfolgsbestätigung; ein lokaler Zustandswechsel bestätigt keine Speicherung. Erfolg nur bei entsprechender fachlicher Bestätigung zeigen, keinen Fortschritt oder Dringlichkeit aus einem Effekt ableiten.

Mikroanimation bezeichnet einen kleinen lokalen Übergang, nicht dessen Bedeutung. Derselbe Effekt kann unterschiedliche Rollen erfüllen; eine Rolle kann verschiedene passende Rezepte haben. Zeige die Aussage an einem Kontextbeispiel und halte sie auch ohne Bewegung verständlich. Reine Vorher-/Nachher-Skizzen als solche benennen; sie belegen keinen zeitlichen Ablauf.

## Zweck und Ablauf gestalten

Beginne mit der Veränderung: Was löst sie aus, was ist vorher und nachher wahr, und welche Beziehung soll verständlich werden? Animation kann einen Zusammenhang sichtbar erhalten, eine Änderung erklären oder einen laufenden Vorgang kennzeichnen. Zeige auch, wann der direkte neue Zustand genügt. Nicht jede Aktion braucht eine Animation; unbekannte historische Gründe im Bestand nicht nachträglich erfinden.

Ein verwendbares Rezept beschreibt Auslöser, Anfang/Ziel, veränderte Eigenschaften und räumlichen Bezug, Dauer/Verlauf sowie Unterbrechung und gleichwertige reduzierte Darstellung. Je nach Fall kommen Verzögerung, Wiederholung und Zusammenspiel mit anderen Elementen hinzu. Verweise auf geltende Definitionen statt Parameter ohne Scope zu sammeln. Vorhandene Token, gewählte Werte und tatsächlich beobachteter Ablauf sind verschiedene Aussagen.

Trenne **Dauer**, **Verzögerung** und **zeitlichen Verlauf**. Eine längere Wartezeit auf Daten ist keine längere Animationsdauer. Gleich lange Übergänge können durch Beschleunigen und Abbremsen unterschiedlich wirken. Begründe die Auswahl durch die Aufgabe; keine Regel wie „immer 300 ms“, „immer federnd“ oder „Mobile immer schneller“ vorgeben. Bei räumlichen Übergängen Weg, Grösse und Bezug mitbetrachten.

Lege für wiederholte Eingaben und Unterbrechungen fest, was passiert: etwa umkehren, aus dem aktuellen Zustand fortsetzen, zum gültigen Zustand wechseln oder eine neue Aktion begründet behandeln. Keine Warteschlange von Effekten als automatische Systemregel erfinden. Gestalte auch Abbruch, Navigation und erneutes Öffnen, soweit relevant. Der visuelle Ablauf darf dem tatsächlichen fachlichen Zustand nicht widersprechen; das Ende einer Animation bestätigt keinen Servererfolg.

## Reduzierte Animation und Bedienung

Erarbeite eine inhaltlich gleichwertige Darstellung mit weniger oder ohne Bewegung. Welche Beziehung bleibt verständlich, wenn der neue Zustand direkt erscheint? Welche Rückmeldung ersetzt einen bewegten Indikator? Eine Alternative darf Orientierung, Information und Zugang zu Aktionen nicht entfernen. Eine blosse Beschleunigung oder ein pauschaler Austausch gegen Überblendung ist nicht für jeden Fall eine begründete Lösung.

Benutzerpräferenzen, zusätzliche Produktoptionen und die Auswahl innerhalb einer Vorschau unterscheiden. Für eine Webumsetzung kann `prefers-reduced-motion` relevant sein; es ist keine automatische native Zuordnung und allein kein Nachweis der fertigen Darstellung. Tatsächliche Präferenz und deren Änderung nach dem gewählten Plattformumfang berücksichtigen. Ein Demonstrationsschalter simuliert nicht schon die Systemeinstellung.

Benachbarte Komponenten und Patterns führen Fokus, Benennung, Öffnen/Schliessen und fachliche Zustände. Erkläre hier, was während des Übergangs sichtbar, erreichbar und bedienbar bleibt. Keine neue Fokusverschiebung oder Eingabesperre aus dem Effekt ableiten. Wesentliche Rückmeldung nicht für eine dekorative Sequenz zurückhalten.

## Anschaulich dokumentieren

Zeige früh eine Entscheidung im Kontext: derselbe Inhalt vor und nach der Handlung sowie eine bewusst gestartete Vorschau. Anfang und Ergebnis müssen auch ohne Abspielen verständlich sein. Ein schematisches bewegtes Rechteck kann einen Verlauf verdeutlichen, ersetzt aber nicht den Anwendungskontext einer Auswahlregel.

Für Vergleiche möglichst nur die erklärende Eigenschaft ändern: gleiche Strecke und Dauer bei verschiedenen Verläufen, gleicher Verlauf bei verschiedenen Dauern. Zahlen und Auswahl direkt an die Probe setzen. Eine gut erkennbare Verlangsamung kann eine zusätzliche Analysehilfe sein, muss aber von der tatsächlichen Ausgabedauer unterschieden werden. Kein langsames Lehrbild als Systemrezept ausgeben.

Wähle Vorschaukontrollen nach Bedarf, etwa Start, Rücksetzen, Abbrechen oder die reduzierte Variante. Keine automatisch laufende Wand paralleler Schleifen als Einstieg. Demonstrationen sollen die gewählte reduzierte Präferenz respektieren; fehlende Animation darf nicht zum Fehlen des Beispiels führen. Bei kontinuierlichen Abläufen passende Kontrollierbarkeit mitbetrachten. Illustrationen und Simulationen erkennbar von echten Produktvorgängen unterscheiden.

Mobil sollen Auslöser, Veränderung und Erklärung gemeinsam nachvollziehbar bleiben. Kompakte Ausschnitte oder ein Vergleich am selben Objekt können helfen; lange, weit getrennte Vorher-/Nachherkarten erschweren den Vergleich. Inhalte und Bedienelemente dürfen beim Animieren nicht unbeabsichtigt abgeschnitten werden. Herkunft und gemeinsame Geltung einmal nennen; Werte und Einschränkungen nicht nach jeder beschrifteten Probe nochmals vollständig wiederholen.

## Dialog und Tiefe

Quellen vor Rückfragen lesen. Kläre offene Entscheidungen in kleinen zusammenhängenden Bündeln: Aufgabe, gewünschte Orientierung/Rückmeldung, vorhandene Rezepte und reale Zustandsänderung. Bei Bedarf begrenzte, bewusst gestartete Varianten zur Rücksprache anbieten. Keine Nutzerantworten, Gestaltungsfreigaben, Zuständigen oder Plattformunterstützung simulieren. „Noch nicht entschieden“ bleibt eine gültige Antwort.

Grundfragen sichern die Orientierung. Bedingte Fragen vertiefen tatsächlich vorhandene oder geplante Abläufe, etwa Ladezustände, mehrere zusammenwirkende Elemente, automatische Inhalte oder native Varianten. Keine Ausstattung allein zur Vervollständigung erfinden. Ausführlichkeit folgt fachlichen Entscheidungen; feste Seitenlänge, Tokenanzahl oder vorgeschriebene Beispielmenge gibt es nicht.

## Ergebnis und Gegencheck

Auffindbar werden semantische Rollen und ihre Geltung, Zweck/Auswahl, Quellen und konkrete Rezepte, Anfang/Ziel und Verlauf, Unterbrechung, reduzierte Alternative, relevante Prüfungen und offene Entscheidungen. Die Autorenprüfung ordnet ANM-IDs zu Anwendbarkeit, Antwort/Fundstelle oder Lücke, Herkunft, fachlichem Stand und tatsächlichen Nachweisen. Diese Matrix muss keine sichtbare Seite mit einem Abschnitt pro Frage erzeugen.

Vollziehe einen Ablauf aus dem Auftragsumfang mit der fertigen Anleitung nach: Animation wählen oder begründet weglassen, Rezept anwenden, eine erneute Eingabe oder Unterbrechung behandeln und die reduzierte Alternative nachvollziehen. Benenne die tragenden Kapitel-Aussagen und fehlendes Zusatzwissen. Bei engem Auftrag keinen ganzen Produktscreen erfinden. Diese redaktionelle Prüfung ist kein Nutzertest.

Berichte nur ausgeführte Prüfungen mit Objekt, Methode, Umgebung und Ergebnis. Tokenwert, berechneter Stil, beobachteter Ablauf und tatsächliche Nutzungswirkung sind verschiedene Nachweise. Zwei Screenshots belegen keine Dauer, flüssige Bildfolge oder korrekte Unterbrechung. Eine Vorschau beweist keine allgemeine Plattform- oder Zugänglichkeitsfreigabe.

Animation führt die visuelle Veränderung; Komponenten/SCXML führen ihre definierten Verhaltenszustände, Patterns den Arbeitsablauf, Layouts die Anordnung, Plattformen native Mechanismen. Diese Beziehungen hier erklären, ohne fremde Definitionen zu duplizieren. Der Skill setzt kein Framework, CMS oder MCP voraus. Er autorisiert keine neuen Contracts, Paketwechsel oder Veröffentlichung. Für eine ausdrücklich beauftragte Übernahme gelten Zielsystem und vorhandene Autorisierung.

Nach Anwendung oder Review übertragbare Erkenntnisse in Skill und Fragen zurückführen. Lokale Werte und konkrete Prüfergebnisse bleiben beim Anwendungsprotokoll.
