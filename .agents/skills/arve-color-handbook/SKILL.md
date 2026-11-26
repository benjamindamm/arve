---
name: arve-color-handbook
description: Erarbeite oder prüfe das Farbkapitel eines Design-System-Handbuchs aus vorhandenen Quellen und gezielten Rückfragen. Verwende den Skill für fachliche Farbdokumentation, auch für ausdrücklich beauftragte Showcase-Entwürfe. Nicht für die Implementierung von UI.
---

# Farbkapitel gemeinsam erarbeiten

Das Ergebnis beantwortet relevante Farbfragen für ein ausdrücklich gewähltes System. Die Darstellung ist frei. Ein noch unvollständiger Stand mit nachvollziehbaren offenen Entscheidungen ist ein gültiges Ergebnis.

## Auftragsmodus

**Bestand dokumentieren/prüfen:** Fehlende Werte und Entscheidungen bleiben offen; keine Palette zur Lückenfüllung erfinden.

**Entwurf ausdrücklich beauftragt:** Wenn der Nutzer die Farbgestaltung delegiert, arbeite ohne erneute Rückfrage zu diesen delegierten Entscheidungen. Leite einen zusammenhängenden Vorschlag ab, begründe seine Rolle und halte ihn als eigenen Entwurf für den benannten Scope fest. Das gilt auch für ein ausdrücklich prototypisches Showcase-System. Delegation legitimiert neue Designentscheidungen, aber keine erfundenen Quellen, Nutzerantworten oder Prüfergebnisse. Eine fremde Bibliothek bleibt Herkunftsreferenz; ergänzte Werte sind keine automatisch darin verfügbaren Tokens.

## Arbeitsweise

1. Kläre Zielsystem und Aufgabe (bestehenden Stand dokumentieren, prüfen oder neue Regeln vorschlagen). Ein noch unbenanntes System ist möglich; halte es als unbenannt fest. Lies verfügbare Quellen zuerst. Frage nicht erneut nach Angaben, die der Nutzer bereits gemacht hat. shadcn ist nur eine mögliche Anschauungsreferenz, keine vorgewählte Grundlage.
2. Lies den [Fragenkatalog](references/color-questions.md). Für Farbrollen, Flächen oder visuelle Zustände lies zusätzlich die [Anwendungsfragen](references/color-applications.md). Ordne bekannte Angaben mit genauer Fundstelle und Stand den Fragen zu. Unterscheide Quellbefund, lokale Entscheidung, Vorschlag und Illustration. Ein Tokenname belegt noch keine Einsatzregel; eine implementierte Farbe noch keine fachliche Zustimmung.
3. Aktiviere bedingte Fragen anhand des Systemumfangs. Ungeklärter Bedarf bleibt offen. Fehlende Erwähnung bedeutet nicht „nicht relevant“. Bei einem Quellkonflikt zeige die widersprechenden Aussagen und frage gezielt nach Geltung oder gewollter Abweichung.
4. Stelle kleine zusammenhängende Fragebündel, in der Regel ein bis drei Fragen. Beginne mit der Frage, deren Antwort weitere Fragen erspart oder freischaltet. Beschreibe die konkrete Entscheidung in verständlicher Sprache. Begründe, wenn eine Rückfrage Auswirkungen auf andere Regeln hat. Frage nicht nach der ganzen Palette, wenn nur eine Regel geprüft werden soll.
5. Biete bei fehlender Orientierung begründete Optionen an. Kennzeichne sie als Vorschläge, nicht als bestehende Vorgaben. „Noch nicht entschieden“ ist eine zulässige Antwort. Ein Vorschlag, Schweigen oder ein Ablauf einer Wartezeit ist keine Annahme. Auf eine notwendige Antwort warten; unabhängige Quellenarbeit kann weitergehen.
6. Fasse fachlich folgenreiche neue Entscheidungen kurz zusammen und gib Gelegenheit zur Korrektur. Diese Klärung ist kein allgemeiner Freigabeschritt für jede Textänderung. Präzise Nutzerangaben dürfen unmittelbar festgehalten werden. Verbleibende Widersprüche und offene Fragen sichtbar lassen.
7. Erstelle einen passenden Teilstand: nachvollziehbare Antworten/Regeln und konkrete offene Entscheidungen. Nutze etwa eine Rollenübersicht, Paarungsmatrix oder kurze Erklärung, wenn dies die Entscheidung verständlicher macht. Keine Pflichtgeschichte, Mindestzahl von Beispielen oder shadcn-Werte zur Lückenfüllung. Illustrationen getrennt und als solche kennzeichnen.

## Tiefe und Gewichtung

Der Fragenkatalog unterscheidet **Grundfragen**, **bedingte Fragen** und **Vertiefungen**. Grundfragen sichern die Orientierung für das beauftragte Thema; sie können auch mit einer benannten offenen Entscheidung beantwortet werden. Bedingte Fragen werden durch tatsächliche oder geplante Verwendung aktiviert. Unbekannter Bedarf ist ein Klärungspunkt, aber nicht automatisch ein aktueller Gestaltungsfehler. Eine diskutierte spätere Erweiterung wird erst bei ihrer Konkretisierung zum Arbeitspaket.

Vertiefe dort, wo eine Begründung, Alternative, Grenzsituation oder Prüfmethode eine echte Entscheidung verständlicher macht. Es gibt keine allgemeine Seitenlänge, Mindestzahl von Beispielen oder Pflicht zur Kürze. Ein umfangreiches Mehrmarkensystem darf ausführlicher sein als ein kleiner Bestand. Wiederhole eine Aussage nur, wenn sie im neuen Kontext eine andere Entscheidung erklärt.

Ordne das Ergebnis nach den Aufgaben der Leser: Die geltende Verwendung und ihre Grenzen müssen schnell auffindbar sein. Herkunft, Begründungen und Prüfungen bleiben zugänglich und dürfen ausführlich sein. Je nach Thema eignen sich integrierte Erläuterungen, aufklappbare Vertiefungen, Querverweise oder Begleitdokumente; keine dieser Darstellungen ist vorgeschrieben. Eine lokale Grenze gehört direkt zur betroffenen Verwendung. Allgemeine Einschränkungen einmal verständlich erklären, statt jede Aussage mit demselben Vorbehalt zu versehen.

Unterscheide bei offenen Punkten aktuelle ungeregelte Anwendungen, unzureichende Nachweise und mögliche spätere Erweiterungen. Erkläre die praktische Konsequenz: Was lässt sich bereits gestalten, und wozu liefert das Kapitel noch keine Vorgabe? Lege keine erfundene Priorität, Zuständigkeit oder Frist fest.

## Palette und Anwendung auseinanderhalten

Dokumentiere die verfügbaren Farben und ihre Abstufungen unter Farbe. Beschreibe die Zuordnung zu Flächen, Handlungen und Rückmeldungen bei den visuellen Zuständen; bei kleinen Kapiteln sind dies klar getrennte Abschnitte. Verlinke beide Richtungen. Theme ist der Erscheinungsmodus, Interaktionszustand etwa Hover oder Fokus, semantische Rolle etwa Fehler oder primäre Handlung. Diese Dimensionen nicht zu einer einzigen Farbenliste vermischen.

Wenn Carbon als Referenz gewählt ist, nutze Palette → Rolle → Token → Wert je Theme und prüfe die passende Elementgruppe (etwa Background, Layer, Text, Border, Support oder Focus). Übernimm keine fremden Werte oder Begriffe blind: „primärer Text“ ist keine primäre Handlung, eine destruktive Handlung kein Fehlerhinweis. Eigene Erweiterungen ausdrücklich kennzeichnen.

## Gemeinsame Ergebnisstruktur

Chart-Farbregeln gehören unter **Datenvisualisierung**, nicht als zusätzliche allgemeine UI-Rollen in die Grundpalette. Verlinke dorthin und nutze bei einer Ausarbeitung den benachbarten [Datenvisualisierungs-Skill](../arve-data-visualization-handbook/SKILL.md). Datenbedeutung, Vergleichsstruktur, Linien/Flächen, Zahl unterscheidbarer Reihen und Farbidentität getrennt klären. Viele Messpunkte benötigen nicht viele Farben; Rot darf im gleichen Kontext nicht zugleich reservierter Negativsaldo und beliebige neutrale Kategorie sein. Fachliche Reservierung und Geltungsbereich ausdrücklich festlegen, statt alle negativen Werte automatisch als Fehler zu behandeln.

Das Ergebnis umfasst unabhängig von seiner Darstellung diese fachlichen Teile:

- Identität, Auftrag und Geltungsbereich (COL-01).
- Quellen und lokale Designentscheidungen (COL-02).
- Farbrollen mit Definition und Einsatzregeln (COL-03/04).
- Relevante Zustände, Modi und besondere Kontexte (COL-05/07/08/09), jeweils mit begründeter Anwendbarkeit.
- Anforderungen, tatsächliche Prüfungen und deren Grenzen (COL-06).
- Offene Entscheidungen, Zuständigkeit soweit bekannt und Änderungsbedarf (COL-10).

Halte pro COL-ID fest, ob eine Grundfrage beantwortet bzw. offen oder eine bedingte Frage relevant, unbekannt oder begründet nicht relevant ist. Verweise auf vorhandene Antworten, statt für jeden Prüfpunkt neue Prosa zu erzeugen. Diese Abdeckungsübersicht unterstützt die Autorenprüfung; sie muss nicht vollständig im sichtbaren Kapitel stehen. Sie darf integriert, vertiefend oder als Begleitdatensatz vorliegen. Die fachliche Struktur ist gemeinsam, die Zahl und Reihenfolge sichtbarer Abschnitte bleibt frei. Ein beantworteter Punkt kann fachlich noch ein Vorschlag sein; ein abgeschlossener Entwurf ist kein bestandener Implementierungstest.

## Übergabe und Prüfung

Bei Chart-Nutzung zusätzlich klären: Aus welchen verfügbaren Familien/Stufen stammen die Chartfarben? Welche Rollen sind durch Marke, Handlungen, Status, Auswahl oder Daten bereits belegt? Der semantische Archetyp umfasst auch strukturelle Beziehungen: Richtung, Kategorie, Unterkategorie, Referenz und berechnetes Ergebnis. Eine weitere Reihe muss deshalb nicht eine weitere Farbe erhalten. Chart-Paletten und auch ihre Illustrationen aus der Grundpalette ableiten, keine isolierten Hexfarben führen. Erwartbare Lesarten (etwa Rot/Grün für Abfluss/Zufluss oder Blau für Auswahl) neben expliziten Regeln prüfen. Konflikt, Geltungsbereich und konkrete verfügbare Alternative dokumentieren; auch die Alternative kann belegt sein. Markenfarbe nicht mit UI-Primärfarbe gleichsetzen und keine Familie pauschal global sperren.

Halte für jede relevante Frage ID, Antwort bzw. offene Entscheidung, System-/Plattformgeltung, Herkunft und fachlichen Stand fest. Quellen dürfen gemeinsam referenziert werden, sofern die Zuordnung eindeutig bleibt. Fachlicher Stand und Prüfnachweis bleiben getrennt; veröffentlichter Text ist keine Freigabe. Bei einer Nutzerentscheidung genügt der konkrete Gesprächsbezug; erfinde weder zuständiges Team noch externe Autorität.

Prüfe vor Übergabe: Sind alle aktiven Fragen beantwortet oder offen? Ist jede behauptete Farbe/Rolle/Paarung belegt oder ein sichtbarer Vorschlag? Wurde Unbekanntes versehentlich ausgeschlossen? Gibt es widersprüchliche Zuordnungen? Belegen berechnete Kontraste die tatsächlich genannten Bedingungen? Keine pauschale Zugänglichkeitsfreigabe aus einem Zahlenwert ableiten.

Der Skill setzt weder Payload noch MCP voraus. Nutze vorhandene Zugänge für Quellen, nicht als Ersatz für Fachentscheidungen. Ein Textentwurf ist kein Auftrag zur Veröffentlichung. Für eine Übernahme in ein CMS gelten der gewählte Umfang und die vorhandene Autorisierung; keine Datenbankstruktur oder Contracts nebenbei ändern.

## Visuell gemeinsam klären

Wenn eine Textfrage die Farbwirkung nicht verständlich macht, zeige zwei bis drei Varianten derselben Situation. Nutze belegte Werte oder ausdrücklich bezeichnete Vorschläge. Frage nach einer Arbeitsrichtung, einer gewünschten Änderung oder „noch offen“. Keine Variante vorwählen. Geltungsbereich, Grundlage und verbleibenden Konflikt angeben; eine Markenfarbe ist nicht automatisch eine Handlungs- oder Statusfarbe. Bei UI-gestützter Klärung die [Interaktionsfragen](../arve-pattern-handbook/references/agent-interaction.md) nutzen.

In Arve kann `compare_color_roles` primäre Handlung und Fehlermeldung vergleichen. Das ist ein begrenzter Einstieg, kein allgemeiner Paletten- oder Charteditor. Das Werkzeug erwartet ein ausdrücklich benanntes Zielsystem, Scope, Frage, Grundlage und Varianten. Ohne UI dieselben Optionen als Text anbieten. Die Nutzerantwort bleibt Gesprächsergebnis; vor einer CMS-Übernahme fachlich einordnen und offene Fragen bewahren. Karten-Hash und Quellenstand nicht gleichsetzen. Kein erforderlicher MCP-Zugang für die übrige Anwendung dieses Skills.
