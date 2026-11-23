# Farbe: Fragen und erwartete Antworten

Version 0.2 · Nach einem begrenzten synthetischen Transfer-Test und einem Designer-Review redaktionell präzisiert; diese Revision ist noch nicht erneut unabhängig erprobt. Präzisiert FND-COL und FND-01–06 aus Arves Inhaltsstandard. Der Katalog gibt keine Palette, Mindestanzahl von Rollen, Kontrastschwelle oder Erscheinungsmodi vor.

Eine Frage kann durch Text, Tabelle, Abbildung mit gleichwertiger Textaussage oder präzisen Verweis beantwortet werden. Die IDs dienen der Zuordnung, nicht als Pflichtüberschriften.

| ID | Art | Wann fragen? | Fachliche Frage | Woran erkennt man eine brauchbare Antwort? |
| --- | --- | --- | --- | --- |
| COL-01 | Grundfrage | Immer, Umfang passend zum Auftrag | Für welches System, welche Produkte/Marken, Plattformen und Aufgaben gilt die Farbdokumentation? Dokumentieren wir Bestehendes oder entscheiden wir neu? | Benannter Geltungsbereich und Art des Auftrags. Unbekannte Plattformen bleiben offen; „Mobile“ bei Bedarf als Nutzungskontext oder native Plattform klären. |
| COL-02 | Grundfrage | Immer | Welche Quelle besitzt Farben und Zuordnungen? Was gilt bei abweichenden Ständen? | Konkrete Datei, Designressource, dokumentierte Entscheidung oder Gesprächsangabe mit Stand. Fehlende Quelle und Konflikte ausdrücklich benannt. Keine pauschale Rangfolge „Code vor Design“ annehmen. |
| COL-03 | Grundfrage | Für Farben, die tatsächlich verwendet werden oder geplant sind | Welche Farben/Rollen existieren, und wofür werden sie gewählt? Was ist reine Marken- oder Dekorationsebene? | Zuordnung Rolle → Zweck → belegte Definition/Quelle. Werte nur, wenn tatsächlich festgelegt; erforderliche, noch namenlose Rollen dürfen offen bleiben. Keine beliebige Rollenliste als Pflichtinventar. |
| COL-04 | Grundfrage | Sobald eine Rolle/ein Wert verwendet werden soll | Welche Verwendung oder Kombination ist vorgesehen, eingeschränkt oder ungeklärt? Wie unterscheidet man verwechselbare Rollen? | Konkrete Auswahl-/Paarungsregel oder gezielter Verweis mit Kontext. Die Quelle kann auch ein ausdrücklich begrenztes Komponentenrezept sein; keine universelle Paarungsmatrix erzwingen. |
| COL-05 | Bedingte Frage | Wenn Farbe Zustand, Dringlichkeit oder Handlung trägt; Bedarf sonst klären | Welche Bedeutung hat die Farbe, wie unterscheiden sich Zustände, und welche weitere Information vermittelt die Bedeutung? | Zustand/Bedeutung → Darstellung einschließlich zusätzlicher Information → zuständiger Komponenten-/Patternverweis. Keine komplette Statuspalette aus dem Wort „Design-System“ ableiten. Globale Ablaufregeln bleiben beim Pattern. |
| COL-06 | Grundfrage | Prüfstand und geltende Anforderungen für das beauftragte Thema klären; Ergebnisse nur bei tatsächlicher Prüfung | Welche Zugänglichkeitsanforderungen gelten, welche Kombinationen und Nutzungskontexte wurden geprüft, welche noch nicht? | Benannte Anforderungsquelle und konkrete Prüfobjekte, Methode/Bedingungen sowie Ergebnisse oder offener Prüfauftrag. Text-/Nichttextkontext unterscheiden. Ungeprüfte Paarung nicht als verboten oder freigegeben umdeuten. |
| COL-07 | Bedingte Frage | Bei mehreren Marken, Themes, Erscheinungsmodi oder vorgesehenen Nutzereinstellungen | Was bleibt semantisch gleich, welche Definitionen wechseln, welche Kombinationen werden unterstützt? | Unterstützte Dimensionen und Zuordnung mit Grenzen. Kein Dark Mode ohne Auftrag. Vorrang/Speicherung von Einstellungen nur klären, wenn zum Auftrag gehörig; deren Ablauf separat verweisen. |
| COL-08 | Bedingte Frage | Bei Transparenz, Bildern/Verläufen hinter Information, Überlagerung oder vom Nutzer angepassten Farben | Welche tatsächliche Fläche wirkt, und wie bleibt Information erkennbar? | Konkrete Zusammensetzung und Kontextregel, geprüftes Ergebnis oder offene Prüfung. Kein Kontrastbeleg aus isoliertem Vordergrund-Token bei unbekannter Mischfläche. |
| COL-09 | Bedingte Frage | Bei Charts, Kategorien oder sonstiger Datenkodierung | Welche fachliche Aussage kodiert Farbe, was passiert bei fehlenden/zusätzlichen Kategorien, welche alternative Darstellung gibt es? | Geltende Kodierungs-/Auswahlregel oder Verweis auf Datenvisualisierung. Kein erfundenes Chartfarbsystem für ein System ohne Diagramme. |
| COL-10 | Grundfrage | Zum Abschluss des beauftragten Teilstands; bei Änderungen gezielt vertiefen | Was ist entschieden, vorgeschlagen, offen oder abgelöst? Wer kann fehlende Entscheidungen treffen und wann muss erneut geprüft werden? | Konkrete Lücken und nächster Klärungsweg; verantwortliche Stelle nur, wenn bekannt. Keine erfundenen Gremien, Freigaben oder Reviewtermine. Änderung/Ersatz nur dokumentieren, wenn vorhanden. |

## Vertiefungen nach fachlichem Bedarf

Die Grundfragen sind das gemeinsame Orientierungsgerüst innerhalb des jeweiligen Auftrags, keine Pflicht zu einem vollständigen Konzernfarbsystem. Eine Antwort darf offen sein oder auf eine konkrete gültige Aussage an anderer Stelle verweisen. Die bedingten Fragen werden nur in den tatsächlich betroffenen Kontexten ausgearbeitet. Die kurze Feststellung „nur helle Oberfläche angeboten“ genügt etwa, um nicht vorhandenen Dark Mode aus dem aktuellen Arbeitsumfang auszunehmen; ein tatsächlich unbekannter Variantenbedarf bleibt unbekannt.

Begründungen, Alternativen, Grenzfälle und detaillierte Nachweise vertiefen diese Fragen. Sie bilden keine weitere Pflichtcheckliste. Mögliche Anlässe:

- **COL-02:** Bei widersprüchlichen Quellen den Entscheidungsweg und die erhaltenen Alternativen erläutern. Bei eindeutiger Quelle genügt deren Referenz.
- **COL-03/04:** Bei verwechselbaren Rollen Einsatzfälle gegenüberstellen; bei vielen Marken die Zuordnungslogik ausführlich erklären. Keine zusätzlichen Beispielgeschichten erzeugen, nur um Umfang zu erreichen.
- **COL-05/07:** Gleichzeitige Zustände oder Modi vergleichen, wenn ihre Kombination zu unterschiedlichen Entscheidungen führt.
- **COL-06/08:** Rechenweg, reale Mischflächen und Prüfumgebung erklären, wenn sie für das Verständnis des Nachweises erforderlich sind. Im Haupttext muss trotzdem erkennbar bleiben, was konkret geprüft ist.
- **COL-09/10:** Alternativen der Datenkodierung oder Änderungsfolgen bei entsprechendem Bedarf vertiefen.

Eine kurze Referenz und eine ausführliche Herleitung können dieselbe Frage beantworten. Prüfe konkrete Nutzbarkeit, Herkunft und Widerspruchsfreiheit; weder Länge noch Kürze ist dafür ein Ersatz. Die COL-Zuordnung dient der Autorenprüfung und braucht keine sichtbare Tabellenzeile je Frage im Kapitel.

## Antworten auseinanderhalten

- **Geltung:** relevant / bedingt, Bedarf offen / begründet nicht relevant. „Nicht relevant“ ist eine Scopeentscheidung, kein Ersatz für fehlende Recherche.
- **Fachlicher Stand:** Quellbefund / lokale Entscheidung / Vorschlag / offen / abgelöst. Die Originalquelle kann ihrerseits ungeprüft sein; Herkunft ist keine Bestätigung ihrer Richtigkeit.
- **Prüfnachweis:** nicht geprüft / für konkret benannte Bedingungen geprüft. Benenne belegte Grenzen statt pauschal „barrierefrei“.

Beispiel für eine zulässige offene Antwort, keine Designvorgabe: „Eine Fehlerrolle ist vorgesehen; Wert, Flächenpaarung und Prüfergebnis sind noch offen.“ Das erlaubt eine spätere Klärung, ohne eine Farbe zu erfinden.

## Eigener Gegencheck

Ein reines Markeninventar darf ohne Status-/Chartpalette dokumentiert werden. Eine einzelne Light-Ansicht braucht keine erfundenen Dark-Tokens. Eine Token-Datei darf Werte belegen, ohne damit ihre organisatorische Verbindlichkeit zu behaupten. Zwei Plattformen dürfen unterschiedliche konkrete Zuordnungen haben. Ein eng begrenzter Quellenabgleich muss keine vollständige neue Farbstrategie auslösen.
