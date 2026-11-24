# Farbrollen und visuelle Zustände erarbeiten

Diese Fragen ergänzen COL-03–08. Sie helfen, eine verwendbare Zuordnung zu erarbeiten; sie schreiben keine fremde Palette, Seitenanzahl oder bestimmte Zahl an Tokens vor. Eine Nutzerentscheidung kann mehrere Anwendungen bündeln. Offene oder nicht benötigte Anwendungen mit Grund festhalten.

## Farben als Grundlage

- Welche Farbfamilien werden gebraucht, welche bleiben neutral? Welche Ausgangstöne sind belegt und welche neu entworfen?
- Reichen die Abstufungen für helle Flächen, Text, Konturen und Zustände? Bei einem neuen Entwurf zusammenhängende helle bis dunkle Skalen zeigen; etwa zehn Stufen sind ein möglicher Ausgangspunkt. Nicht bloss zwei ähnliche Farbfelder als vollständige Skala ausgeben.
- Skalenstufen haben eine erklärte Richtung. Die Zahl ist kein Kontrastwert. Konkrete Paare messen; dunklere oder gesättigtere Farben sind nicht automatisch geeigneter.
- Einzelne Ausgangstöne von abgeleiteten Stufen unterscheiden. Ableitung und Grenzen nennen; keine wahrnehmungsgleichen Abstände ohne Messung behaupten.

## Anwendungen klären und zeigen

| Anwendung | Zu beantwortende Frage | Geeigneter visueller Nachweis |
| --- | --- | --- |
| Grund- und Inhaltsflächen | Wie unterscheiden sich Seitenhintergrund und darin liegende Inhalte? | Fläche mit benachbartem Inhalt und Text, keine isolierten Rechtecke. |
| Überlagernde Flächen | Wie erkennt man Menü, Popover oder Dialog vor dem übrigen Inhalt? | Überlagerung mit sichtbarem Umfeld; Fläche, Grenze, Schatten oder Abdunklung erläutern. |
| Primäre Handlung | Welche Aktion erhält die höchste Gewichtung und warum? | Handlung im Kontext einer unterstützenden Alternative. |
| Sekundäre Handlung | Wie bleibt eine unterstützende Aktion erkennbar, ohne mit der primären zu konkurrieren? | Neutrale oder dezente Alternative; keine zusätzliche Markenfarbe erzwingen. |
| Ergänzende Information | Wie bleiben Metadaten und Hilfe lesbar, aber untergeordnet? | Zeitangabe, Feldhilfe oder Kontextinformation neben normalem Inhalt. |
| Interaktive Hervorhebung | Welche Darstellung bedeutet Link, Hover, gedrückt oder ausgewählt? | Zustände vergleichen; Linkunterstreichung oder Auswahlmarkierung zusätzlich zur Farbe. |
| Destruktive Handlung | Welche Aktion verursacht Verlust oder schwer umkehrbare Folgen? | Benannte Aktion gegenüber Fehlerhinweis; Rot nicht pauschal für alle negativen Texte. |
| Fehlerhinweis | Welches Problem besteht, wo und wie wird es korrigiert? | Meldung am betroffenen Inhalt mit Korrekturhinweis; Fokus gleichzeitig sichtbar. |
| Erfolgsbestätigung | Was wurde erfolgreich abgeschlossen? | Bestätigung mit Text und gegebenenfalls Symbol. |
| Warnhinweis | Welche mögliche Folge erfordert Aufmerksamkeit? | Konkrete Folge und gegebenenfalls Handlungsoption benennen. |
| Sachhinweis | Welche neutrale Information hilft beim Verständnis? | Sachliche Meldung, klar von Erfolg und Warnung unterschieden. |
| Nicht verfügbare Aktion | Wie erkennt man die Einschränkung und ihren Grund? | Nicht verfügbare Aktion mit lesbarer Erklärung ausserhalb des Elements. |
| Konturen und Fokus | Was gliedert nur, was begrenzt ein Bedienelement und was markiert Tastaturfokus? | Feldgrenze und Fokus getrennt zeigen; auch auf farbigen Flächen und bei Fehlern klären. |

## Bedeutung und Nachweis

Pro verwendeter Rolle Zweck, erlaubte Paarung, Zustände und Geltung klären. Hintergrund, Text beziehungsweise Symbol und gegebenenfalls Rahmen gemeinsam festlegen; Varianten je tatsächlich unterstütztem Theme. Nicht jede Statusmeldung braucht eigene Hover-Tokens. Erst prüfen, ob sie interaktiv ist.

Bei Carbon als Referenz Elementgruppen und konkrete Rollennamen anhand der aktuellen Originalquelle abgleichen. Eine fachliche Rolle kann mehrere Tokens benötigen. Blau kann sowohl Handlung als auch Sachinformation tragen: Form, Text und Kontext unterscheiden deren Funktion. Sekundär bedeutet bei Text etwas anderes als bei Handlungen.

Zeigen statt alle Fragen in lange Fliesstexte umzuwandeln: Skalen mit Werten, kompakte Rollenzuordnung und wenige Kontextvergleiche. Mobile Lesereihenfolge, lesbare Beschriftungen und genügend Raum mitprüfen. Werte und Regeln müssen auch ohne Grafik abrufbar bleiben. Diagrammfarben separat unter Datenvisualisierung behandeln, wenn beauftragt.
