# Animation: Quellen und Prüfhilfe

Gezielt für Anforderungen, reduzierte Animation und tatsächliche Nachweise lesen. Die folgenden Primärdokumentationen wurden am 24.11.2026 im Browser gelesen. Sie definieren keine neue lokale Dauer- oder Verlaufsskala.

## Interaktion, automatische Inhalte und Blitzen trennen

Gelesen: [WAI – Animation from Interactions, SC 2.3.3](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html). Das AAA-Kriterium behandelt durch Interaktion ausgelöste Bewegungsanimation und deren Abschaltbarkeit, mit einer Ausnahme für wesentliche Animation. Wesentlichkeit nicht mit „gefällt dem Team“ gleichsetzen. Die Quelle grenzt den Gegenstand gegenüber automatischen Abläufen ab. Nicht jede visuelle Veränderung fällt identisch unter diese Definition; daraus folgt keine allgemeine Unbedenklichkeit anderer Effekte.

Gelesen: [WAI – Pause, Stop, Hide, SC 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html). Das A-Kriterium unterscheidet automatisch gestartete Bewegung/Blinken/Scrollen über fünf Sekunden parallel zu anderem Inhalt von automatischer Aktualisierung. Für Aktualisierung gibt es diese Fünf-Sekunden-Bedingung nicht. Bedingungen und Ausnahme für wesentliche Aktivität mitlesen; keine globale „unter fünf Sekunden erlaubt“-Regel daraus machen. Pause, Stop und Ausblenden sind unterschiedliche Möglichkeiten. Fortgesetzter Fokus oder Hover allein ist nicht ohne Prüfung ein hinreichendes Pausenkonzept.

Gelesen: [WAI – Three Flashes or Below Threshold, SC 2.3.1](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html). Das A-Kriterium enthält Häufigkeits- beziehungsweise Flash-Schwellenbedingungen. Keine Freigabe allein aus einem grob gezählten Blinkeffekt ableiten; bei relevantem Material die vollständige Anforderung und geeignete Analyse heranziehen. Eine reduzierte Bewegungspräferenz ersetzt diesen eigenen Prüfbereich nicht. Für das Handbuch keine problematische Blitzdemonstration allein zur Illustration erzeugen.

Niveaus, Quellenstand und Anwendung getrennt benennen. Eine Quelle legt nicht von sich aus das Konformitätsziel des Zielsystems fest. Für weitere Anforderungen, etwa tatsächlich zeitbegrenzte Aufgaben, die passende Quelle gezielt lesen. Animationsdauer und Zeitlimit einer Aufgabe sind keine austauschbaren Begriffe.

## Präferenz und tatsächliche Alternative

Gelesen: [MDN – prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion). Die Webfunktion meldet eine bekannte Präferenz zur Reduktion nicht wesentlicher Bewegung. `reduce` und `no-preference` sind nicht gleichbedeutend mit einer universellen Eignungsfreigabe. Welche Animation dadurch entfallen, verkürzt oder ersetzt wird, muss das Produkt tatsächlich definieren.

Für die Prüfung unterscheiden:

- Lokale Auswahl „ohne Animation“ in einer Demonstration.
- Tatsächlich emulierte Browserpräferenz.
- Einstellung und Verhalten auf einem realen Gerät.
- Native Präferenz/Implementierung einer anderen Plattform.

Keine dieser Beobachtungen beweist automatisch die anderen. Bei Präferenzwechsel im vereinbarten Umfang auch laufende und künftige Abläufe betrachten. Information, Zustand und Zugang zu Aktionen müssen in der gewählten Alternative erhalten bleiben. Ein ausgeblendeter Spinner ohne jede Rückmeldung ist keine vollständige Alternative für einen laufenden Vorgang.

## Aussagekraft von Nachweisen

| Nachweis | Was er begrenzt zeigt | Was er nicht bestätigt |
| --- | --- | --- |
| Token oder Designrezept | Definierte Parameter im ausgewählten Stand | Tatsächlichen Verlauf oder Systemweite |
| Berechneter Animationsstil | Angewandte CSS-Parameter in dieser Umgebung | Genaue reale Dauer, flüssige Frames oder gültiges Verhalten |
| Zwei Standbilder | Sichtbaren Anfang und Ziel | Zwischenverlauf, Unterbrechung oder tatsächliches Timing |
| Beobachteter/aufgezeichneter Ablauf | Sichtbare Folge unter genannten Bedingungen | Universelle Wahrnehmungswirkung oder Plattformfreigabe |
| Wiederholte echte Eingaben | Beobachtete Reaktion im konkreten Zustand | Jede Sequenz oder sämtliche Komponenten |
| Präferenztest mit benannter Umgebung | Geprüfte Alternative in dieser Umgebung | Native Unterstützung oder umfassende Zugänglichkeit |
| Redaktionelle Auswahl nach Kapitel | Tragfähigkeit der Anleitung für diese Entscheidung | Nutzertest oder fachliche Freigabe |

Normale Ausgabe und bewusst verlangsamte Analyseansicht getrennt kennzeichnen. Wenn reale Dauer, Bildfolge oder Ressourcenverhalten behauptet werden, geeignete Aufzeichnung/Messung mit Start-/Enddefinition verwenden. Nicht ausgeführte Prüfungen bleiben offen. Für eine reine Skill-Konzeption sind solche Produktprüfungen nicht automatisch beauftragt.

## Verständliche Vorschauen

Ein brauchbares Lehrbeispiel beantwortet eine sichtbare Frage im Kontext. Geltende Dauer/Verlauf und lokale Demonstrationswerte unterscheiden. Bei Dauer-/Kurvenvergleichen die übrigen Parameter möglichst konstant halten. Kein Effekt darf allein deshalb als passend gelten, weil er im Demo-Rechteck hübsch wirkt.

Vorschauen bewusst starten lassen, eine verständliche Rückkehr/Beendigung anbieten und reduzierte Präferenzen respektieren. Wiederholen und gleichzeitig laufende Proben nur, wenn es dem konkreten Vergleich dient. Bei kleinen Ansichten Auslöser, Veränderung und Legende in einem nachvollziehbaren Ausschnitt halten. Die Anleitung muss auch ohne laufende Animation verständlich bleiben; Zustandsbeschreibungen und Rezepte dürfen nicht nur in einem Video verborgen sein.

Technik und Datenquelle des Zielsystems bleiben austauschbar. Ein Designhandbuch braucht keinen vollständigen App-Code. Es muss aber erklären können, welcher Ablauf gemeint ist, welche Vorgabe gilt und was noch entschieden oder geprüft werden muss.
