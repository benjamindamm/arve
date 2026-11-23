# Kiesel · Farbe

Kiesel verwendet eine helle Oberfläche für Desktop und mobile Browser. Für die vorhandenen Anwendungen sind drei Farbkombinationen dokumentiert:

| Anwendung | Text | Fläche | Berechneter Kontrast |
| --- | --- | --- | --- |
| Haupttext | Dunkelblau `#0F172A` | Weiss `#FFFFFF` | 17,85:1 |
| Ergänzende Angaben und Hilfetext | Graublau `#64748B` | Weiss `#FFFFFF` | 4,76:1 |
| Speichern | Weiss `#FFFFFF` | Blau `#2563EB` | 5,17:1 |

Diese drei Paare erfüllen rechnerisch das projektinterne Textziel von mindestens **4,5:1**, einschliesslich Hilfetext. Berechnet wurden vollständig deckende Farben; die gerenderte Oberfläche wurde nicht geprüft. Die Angaben gelten für die genannten Anwendungen, nicht automatisch für jeden Hintergrund oder jedes weitere Element. [S1–S3, D1–D2]

## Aktionsfarbe und Markenfarbe

**Blau kennzeichnet die aktuelle Speichern-Aktion.** Die Beschriftung ist weiss. Die frühere Gestaltungsnotiz sah dafür Grün vor; diese Zuordnung ist für den vorliegenden Einsatz abgelöst. Die konkrete Entscheidung klärt diesen Widerspruch, legt aber keine allgemeine Rangfolge zwischen Gestaltung und Umsetzung fest. [D1]

**Grün `#0F766E` bleibt Markenfarbe.** Weitere Markeneinsätze und dazugehörige Kombinationen sind nicht festgelegt. Grün ist damit auch nicht als Erfolgsfarbe definiert. Weil keine konkrete Paarung benannt ist, wurde für die Markenfarbe kein Kontrastnachweis erstellt. [S2, D1]

### Referenz zur vorhandenen Umsetzung

Die laufende Oberfläche verwendet die folgenden CSS-Variablen. Sie erleichtern die Zuordnung zu den dokumentierten Farben; der gelesene Auszug ist kein vollständiges Inventar aller Komponenten.

| Rolle | Variable | Wert |
| --- | --- | --- |
| Inhaltsfläche | `--page` | `#FFFFFF` |
| Haupttext | `--ink` | `#0F172A` |
| Ergänzender Text | `--supporting-text` | `#64748B` |
| Speichern: Fläche | `--action` | `#2563EB` |
| Speichern: Beschriftung | `--on-action` | `#FFFFFF` |

Für die grüne Markenfarbe ist im bereitgestellten CSS-Auszug keine Variable definiert. Haupttext und Hilfetext auf anderen Flächen brauchen eine eigene belegte Zuordnung. [S2–S3]

## Noch ohne vollständige Gestaltungsvorgabe

Für die vorhandene Oberfläche sind einige Entscheidungen offen. Die folgenden Angaben zeigen, was bekannt ist und wozu dieses Kapitel noch keine Vorgabe liefert.

| Verwendung | Bekannt | Noch zu klären |
| --- | --- | --- |
| Bestätigte Speicherung | Wortlaut **«Änderungen gespeichert»** | Farbe und übrige Gestaltung der Rückmeldung; anschliessend ihre konkrete Verwendung prüfen. |
| Fehler | Kein Farbwert festgelegt | Darstellung, erklärende Information und Zusammenspiel mit dem jeweiligen Feld oder Ablauf. |
| Tastaturfokus | Keine Gestaltung festgelegt | Sichtbare Darstellung und konkrete Farbpaarungen. |
| Deaktivierte Aktionen | Keine Darstellung festgelegt | Gestaltung und Paarungen für den jeweiligen Einsatz. |

Weitere Interaktionszustände wie Hover oder gedrückte Aktionen sind in den Quellen nicht beschrieben. Ihr Bedarf bleibt zu klären. Aus Marken- und Aktionsfarbe lässt sich keine vollständige Zustandspalette ableiten. [S2–S3, D3]

### Fixierter Kopfbereich: tatsächliche Fläche ungeklärt

Der vorhandene Kopfbereich legt **Weiss mit 85 % Deckkraft** über scrollende Inhalte und verwendet den Haupttext `#0F172A`. Anders als bei der normalen Inhaltsfläche wirkt hier der jeweilige Untergrund mit.

Welche Hintergründe zulässig sind und welche Mischfarben tatsächlich entstehen, ist noch nicht festgelegt. Deshalb gilt die Rechnung für Haupttext auf opakem Weiss nicht als Nachweis für den Kopfbereich. Vor einer Bewertung müssen die möglichen Untergründe und konkreten Zusammensetzungen bestimmt werden. [S3, D2]

## Bei einer Erweiterung erneut klären

Ein Dark Mode und native Apps werden derzeit nicht angeboten. Andere Themes, Markenvarianten und Nutzereinstellungen sind nicht beschrieben. Werden solche Varianten geplant, ist ihr Bedarf zu klären; daraus folgt heute noch kein Auftrag, zusätzliche Farbzuordnungen zu erstellen. [S1]

**Diagramme gibt es aktuell nicht.** Eine spätere Auswertung wird diskutiert. Erst wenn sie konkret wird, sind die Aussagen und Kategorien, der Umgang mit fehlenden oder zusätzlichen Kategorien und eine ergänzende Darstellung ohne alleinige Farbkodierung festzulegen. Eine Chartpalette ist deshalb noch nicht Teil dieses Kapitels. [S1]

## Nachweise und Pflege

Die drei Paarberechnungen verwenden opake sRGB-Werte. Gegen das Textziel wurde mit ungerundeten Ergebnissen verglichen; die Übersicht zeigt gerundete Zahlen. Den Rechenweg und die vollständigen Werte enthält die [Kontrastberechnung](../output/kontrastpruefung.json).

Nicht geprüft sind die tatsächlich gerenderte Schrift und Oberfläche, Nichttextkontraste, Fokus, Rückmeldungen und weitere Zustände. Die Berechnung belegt die drei genannten Paare, keine allgemeine Zugänglichkeit des Produkts.

Bei Änderungen an Werten, Paarungen, Deckkraft oder Untergründen müssen die betroffenen Nachweise erneuert werden. Verantwortliche Stellen, Abnahmeprozess und Termine sind noch nicht benannt. [S2, D1–D3]

[Quellen und Entscheidungsweg](../output/quellen-und-entscheidungen.md) · [Zuordnung der Fachfragen](abdeckung.md)

*Redaktionelle Fassung vom 23.11.2026. Kiesel ist ein synthetischer Testfall. Die ursprüngliche Agentenfassung und ihre Originalquellen bleiben für den Vergleich unverändert erhalten.*
