# Kiesel · Farbe

**Bestandsdokumentation · Teilstand vom 23.11.2026**

Kiesel ist ein helles Web-Werkzeug für Schichtplanung mit Listen, Eingaben und einer Speichern-Aktion. Dieses Kapitel gilt für Desktop und mobile Browser. Native Apps und ein Dark Mode werden nicht angeboten. Es dokumentiert den vorhandenen Stand und die im synthetischen Testdialog getroffenen lokalen Entscheidungen; es entwirft keine neue Palette. [S1, D1–D3]

## Farben wählen

Die aktuelle Aktionsfarbe ist **Blau**, die Markenfarbe bleibt **Grün**. Die frühere Zuordnung von Grün zur Speichern-Aktion ist für diesen Anwendungsfall abgelöst. Daraus folgt keine allgemeine Vorrangregel zwischen Gestaltung und Umsetzung. [S2:3, S3:6–7, D1]

| Rolle | Definition | Einsatz und Grenzen | Herkunft / fachlicher Stand |
| --- | --- | --- | --- |
| Inhaltsfläche | Weiss `#FFFFFF`, `--page` | Normale Inhaltsfläche; Hintergrund für Haupttext und Hilfetext. | S2:5; S3:3,9 · Quellbefund |
| Haupttext | Dunkelblau `#0F172A`, `--ink` | Haupttext auf der normalen Inhaltsfläche. Auch im fixierten Kopfbereich implementiert, dort jedoch mit ungeklärter tatsächlicher Hintergrundmischung. | S2:5; S3:4,9,12 · Quellbefund |
| Ergänzende Angaben | Graublau `#64748B`, `--supporting-text` | Ergänzender Text; Hilfetext auf der normalen weissen Inhaltsfläche. Andere Hintergründe sind durch diesen Stand nicht belegt. | S2:5; S3:5,10 · Quellbefund |
| Aktion | Blau `#2563EB`, `--action` | Aktuelle Speichern-/Aktionsfarbe. Beschriftung in Weiss. Daraus folgt keine Regel für beliebige weitere Komponenten oder Statusmeldungen. | S3:6,11; D1 · lokal entschieden |
| Beschriftung auf Aktion | Weiss `#FFFFFF`, `--on-action` | Beschriftung auf der blauen Aktionsfläche. | S3:7,11; D1 · lokal entschieden |
| Marke | Grün `#0F766E` | Markenfarbe. Weitere konkrete Markeneinsätze und Kombinationen sind nicht festgelegt. Keine automatische Erfolgsfarbe. | S2:3; D1 · lokal entschieden |
| Fixierter Kopfbereich | Weiss mit 85 % Deckkraft; Text `#0F172A` | Implementierte transparente Fläche über scrollendem Inhalt. Zulässige Untergründe und tatsächliche Mischfarben bleiben offen; kein geprüftes Paar. | S3:12; D2 · Quellbefund / offene Prüfung |

Die Tokenbezeichnungen stammen aus dem CSS-Auszug. Dieser Auszug belegt Implementierungen, aber weder die Vollständigkeit des Systems noch eine allgemeine fachliche Freigabe. Die Originalquellen bleiben unverändert. [S3, D1]

## Rückmeldungen und Zustände

Für die bestätigte Speicherung steht der Text **«Änderungen gespeichert»** fest. Farbe und übrige Gestaltung der Rückmeldung sind noch offen. Der Text benennt die Bedeutung ausdrücklich; ob und wie zusätzlich Farbe eingesetzt wird, ist nicht entschieden. Eine vollständige Rückmeldung wurde nicht geprüft. [S2:7, D3]

Fehlerfarben, Fokusgestaltung und die Darstellung deaktivierter Aktionen sind offen. Für Fehler ist auch die zusätzliche Information zur Bedeutung noch festzulegen. Weitere Zustände, etwa Hover oder gedrückte Aktionen, sind in den vorliegenden Quellen nicht beschrieben; ihr Bedarf und ihre Regeln bleiben offen. Markenfarbe und Aktionsfarbe dürfen aus diesem Kapitel nicht als Statuspalette abgeleitet werden. [S2:7, S3, D3]

## Kontrast: drei konkrete Paare berechnet

Für den hier beauftragten gewöhnlichen Text gilt projektintern **mindestens 4,5:1**, einschliesslich ergänzender Hilfetexte. Dies ist eine lokale Entscheidung des synthetischen Testdialogs, keine hier behauptete externe Konformitätsvorgabe. [D2]

Am 23.11.2026 wurden die folgenden opaken sRGB-Paare numerisch berechnet. Die Beurteilung verwendet die ungerundeten Werte; die Tabelle zeigt zwei Nachkommastellen.

| Text | Opaker Hintergrund | Verhältnis | Projektinterne Textanforderung |
| --- | --- | --- | --- |
| Haupttext `#0F172A` | Inhaltsfläche `#FFFFFF` | 17,85:1 | Erfüllt für dieses Paar |
| Ergänzender Text/Hilfe `#64748B` | Inhaltsfläche `#FFFFFF` | 4,76:1 | Erfüllt für dieses Paar |
| Beschriftung `#FFFFFF` | Aktionsfläche `#2563EB` | 5,17:1 | Erfüllt für dieses Paar |

Berechnung: sRGB-Kanäle normieren und linearisieren; relative Leuchtdichte mit den Gewichten 0,2126 / 0,7152 / 0,0722 bestimmen; Verhältnis `(hellere Leuchtdichte + 0,05) / (dunklere Leuchtdichte + 0,05)`. Vollständige Zahlen stehen in [kontrastpruefung.json](kontrastpruefung.json).

Diese Prüfung umfasst ausschliesslich die drei angegebenen opaken Farbpaare. Nicht geprüft wurden die gerenderte Oberfläche, tatsächliche Schriftgestaltung, Nichttextkontraste, Fokus, deaktivierte Aktionen, Rückmeldungen oder weitere Kombinationen. Grün wurde als Markenfarbe dokumentiert, aber mangels festgelegter Paarung nicht geprüft. Aus den Ergebnissen folgt kein allgemeiner Zugänglichkeitsnachweis.

Beim fixierten Kopfbereich überlagert 85 % Weiss scrollende Inhalte. Die tatsächliche Fläche hängt vom Untergrund ab. Die opake Weissfläche aus der Tabelle ersetzt diese Mischfläche nicht. Zulässige Hintergründe und konkrete Zusammensetzungen sind zuerst festzulegen und anschliessend zu prüfen. [S3:12, D2]

## Modi und Datenfarben

Dokumentiert wird die vorhandene helle Oberfläche. Ein Dark Mode wird laut Auftrag nicht angeboten. Weitere Themes, Markenvarianten und Nutzereinstellungen sind nicht beschrieben; ihr Bedarf bleibt offen. [S1:3]

Aktuell gibt es keine Diagramme. Eine spätere Auswertung wird diskutiert; dafür sind weder Bedarf noch Datenkodierung festgelegt. Dieses Kapitel führt deshalb keine Chartpalette ein. Bei Aufnahme einer Auswertung sind Aussage und Kategorien, zusätzliche oder fehlende Kategorien sowie eine ergänzende Darstellung ohne alleinige Farbkodierung zu klären. [S1:3]

## Was noch zu entscheiden ist

| Offener Punkt | Nächster Klärungs- oder Prüfschritt |
| --- | --- |
| Speicherung bestätigt | Gestaltung der bekannten Textmeldung, gegebenenfalls Farben und zugehöriges Rückmeldungspattern festlegen; dann konkrete Verwendung prüfen. |
| Fehler | Darstellung, Farben, zusätzliche Information und zuständiges Komponenten-/Patternrezept festlegen. |
| Fokus und deaktivierte Aktionen | Regeln und konkrete Paarungen festlegen; Bedarf weiterer Interaktionszustände klären; anschliessend prüfen. |
| Transparenter Kopfbereich | Zulässige scrollende Hintergründe und Mischflächen festlegen; tatsächliche Kombinationen prüfen. |
| Weitere Themes/Nutzereinstellungen | Bedarf klären, falls solche Varianten vorgesehen werden. |
| Spätere Auswertung | Erst bei konkretem Bedarf die Datenkodierung und alternative Darstellung bestimmen. |
| Zuständigkeit und Quellenkonflikte | Entscheidungszuständigkeit und Umgang mit künftigen Konflikten klären. D1 löst nur die konkrete Aktionszuordnung. |

Verantwortliche Stellen, Abnahmeprozess und Termine sind nicht benannt. Dieses Kapitel ist ein nachvollziehbarer Teilstand und keine Veröffentlichung oder allgemeine Freigabe. Bei Änderungen an Farben, Paarungen, Deckkraft oder Untergründen sind die betroffenen Nachweise zu erneuern. Die alte grüne Aktionszuordnung bleibt in S2 als historischer Quellstand erhalten. [S2:9, D1–D3]

## Abdeckung der Fachfragen

Alle folgenden Antworten gelten für Kiesels helle Web-Oberfläche auf Desktop und im mobilen Browser; begrenzte Kontexte sind jeweils genannt. Fachlicher Stand und Prüfnachweis sind getrennt.

| ID | Antwort oder explizite Lücke | Herkunft / fachlicher Stand | Prüfnachweis |
| --- | --- | --- | --- |
| COL-01 | Bestandskapitel für das benannte Web-Werkzeug; keine nativen Apps, kein angebotener Dark Mode. | S1:3–5 · Quellbefund | Quellenabgleich |
| COL-02 | Drei Originalquellen; konkrete Aktionsabweichung durch D1 geklärt. Keine allgemeine Quellenrangfolge oder Zuständigkeit. | S2:9; S3; D1 · lokale Entscheidung / offen | Konflikt dokumentiert, keine Originaländerung |
| COL-03 | Inhaltsfläche, Haupttext, ergänzender Text, Aktion, Aktionsbeschriftung, Marke und Kopfbereich sind in der Rollentabelle definiert. | S2:3–5; S3:3–12; D1 · Quellbefund / lokal entschieden | Drei opake Textpaare berechnet |
| COL-04 | Haupttext/Hilfe auf Weiss; weisse Beschriftung auf Blau. Weitere Markenpaarungen und transparente Kopfbereichspaarung offen. | S2:5; S3:9–12; D1–D2 · Quellbefund / lokal entschieden / offen | Nur die drei tabellierten Paare berechnet |
| COL-05 | Speicherbestätigung als Text bekannt; Gestaltung, Fehler, Fokus und deaktivierte Aktionen offen; weitere Zustände nicht beschrieben. | S2:7; D3 · Quellbefund / offen | Keine Zustandsprüfung |
| COL-06 | Projektinterner Textschwellwert 4,5:1. Drei opake Paare erfüllen ihn rechnerisch; weitergehende Anforderungen und Nachweise offen. | D2; kontrastpruefung.json · lokale Entscheidung / begrenzt geprüft | Numerische sRGB-Berechnung, keine Oberflächenprüfung |
| COL-07 | Nur angebotene helle Oberfläche; Dark Mode derzeit nicht angeboten. Bedarf weiterer Varianten/Einstellungen offen. | S1:3 · Quellbefund / offen | Keine Variantenprüfung |
| COL-08 | Aktiver Kontext: transparenter Kopfbereich über scrollendem Inhalt; zulässige Untergründe/Mischungen offen. Andere Überlagerungskontexte nicht belegt, Bedarf offen. | S3:12; D2 · Quellbefund / offen | Transparenz nicht berechnet oder geprüft |
| COL-09 | Aktuell keine Diagramme; künftige Auswertung diskutiert, Kodierungsregeln offen. | S1:3 · Quellbefund / bedingt, Bedarf offen | Keine Datenfarbprüfung |
| COL-10 | D1–D3 festgehalten, alte grüne Aktionszuordnung für diesen Fall abgelöst; konkrete Lücken und nächste Schritte oben. Zuständigkeit/Termine offen. | S2:9; D1–D3 · lokal entschieden / abgelöst / offen | Abdeckungsprüfung dieses Teilstands |

## Quellen und Entscheidungen

Die Kürzel verweisen auf [quellen-und-entscheidungen.md](quellen-und-entscheidungen.md). Dort stehen die Originalpfade, Dateihashes, genauen Fundstellen und die erhaltenen Antworten des synthetischen Testdialogs. Die Datumsangaben in den Quellen bezeichnen deren jeweiligen Stand, nicht eine behauptete Freigabe.
