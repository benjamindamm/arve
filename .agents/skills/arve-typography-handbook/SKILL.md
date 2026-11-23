---
name: arve-typography-handbook
description: Erarbeite oder prüfe das Typografiekapitel eines Design-System-Handbuchs aus Quellen, gezielten Rückfragen und ausdrücklich delegierten Gestaltungsentscheidungen. Geeignet für umfassende Fachseiten und begrenzte Bestandsprüfungen; nicht für die Implementierung einer UI oder das pauschale Ausrollen einer Schrift.
---

# Typografiekapitel erarbeiten

Das Kapitel soll Designer bei der Wahl und Anwendung von Textrollen unterstützen und Entwicklung die zugehörigen Definitionen auffindbar machen. Die fachliche Abdeckung ist gemeinsam, die Darstellung bleibt frei. Ein nachvollziehbarer Teilstand mit konkreten offenen Entscheidungen ist ein gültiges Ergebnis.

## Auftrag und Quellen

Kläre System, Aufgabe und Umfang anhand der bereits vorhandenen Angaben. **Bestand dokumentieren/prüfen:** tatsächliche Definitionen erfassen, Widersprüche benennen und fehlende Festlegungen offen lassen. **Gestaltung delegiert:** ein zusammenhängendes Typografiekonzept für den beauftragten Kontext entwickeln, Entscheidungen begründen und als eigenen Entwurf kennzeichnen. Nachfragen sind für wirklich offene Entscheidungen nötig, nicht erneut für bereits delegierte Gestaltung.

Inventarisiere die relevanten Quellen: Designstile/-variablen, Token-Exports, Plattformdefinitionen, vorhandenes CSS, Schriftdateien/-pakete und dokumentierte Entscheidungen. Lies sie schrittweise, nicht pauschal das ganze Repository. Trenne geplante Gestaltung, tatsächlich beobachtete Umsetzung und fachliche Zustimmung. Bei Widersprüchen keine automatische Rangfolge Code/Design annehmen. Bibliothek, Quelle und Stand ausdrücklich wählen; shadcn oder ein Framework ist keine vorausgesetzte Grundlage.

Nutze den [Fragenkatalog TYP-01–15](references/typography-questions.md), um vorhandene Antworten zuzuordnen und nötige Klärungen abzuleiten. Lies die [Quellen- und Prüfhilfe](references/evidence-and-checks.md) gezielt, wenn Standards, Beispielwerte oder Prüfungen eingeordnet werden müssen.

## Gestaltung aus der Aufgabe herleiten

Beginne bei den tatsächlichen Textaufgaben: Was soll zuerst auffallen, was muss schnell erfassbar sein, was wird länger gelesen und was unterstützt eine Handlung? Leite daraus die relevanten Gestaltungsziele ab, etwa ruhige Lektüre, schnelles Scannen, Informationsdichte oder eine gewünschte Markenwirkung. Nicht jeder Auftrag braucht alle diese Ziele. Nutze bekannte Vorgaben; im delegierten Entwurf dürfen eigene, ausdrücklich benannte Entwurfsannahmen die Wahl begründen. Im Bestandsmodus unbekannte historische Absichten nicht nachträglich erfinden.

Erkläre die Auswahl und das Zusammenspiel der benötigten Rollen. Welche Texte sind gleichrangig, welche sollen Vorrang erhalten und welche unterstützen sie? Zeige, wie Schriftwahl, Grösse, Gewicht, Zeilenrhythmus, Breite und Abstände diesen Zusammenhang tragen. Nicht jeder Unterschied braucht eine neue Schriftgrösse oder eine neue Rolle. Erläutere die Wahl zwischen ähnlichen Rollen und den Anlass, bei anderem Inhalt oder Platz eine andere Kombination zu verwenden.

Im **Entwurfsmodus** führe von diesen Zielen zu zusammenhängenden Rezepten und Kombinationen. Berücksichtige vorhandene Schriften und ihre verfügbaren Schnitte. Vergleiche Alternativen oder benenne Zielkonflikte dort, wo sie die Entscheidung beeinflussen, etwa kompakte Übersicht gegenüber längerer Lektüre. Begründe die gewählte Lösung konkret; ein vollständiges Parameterset mit allgemeinen Aussagen wie „wirkt konsistent“ genügt nicht. Eine sachlich erklärte Entscheidung braucht aber keinen künstlichen Variantenvergleich.

Im **Bestandsmodus** dokumentiere vorhandene Kombinationen und ihre belegten Anwendungsregeln. Sind nur einzelne Stile bekannt, benenne genau die fehlende Anwendungsvorgabe. Unbekannte Beziehungen bleiben offen; einzelne Komponentenwerte werden dadurch nicht zu einer Systemskala.

Die Erklärung kann als annotierter Zusammenhang, Vergleich, Rollenbeziehung oder präziser Text vorliegen. Entscheidend ist, dass ein Leser die Rollen gemeinsam einsetzen kann. Umfang und Darstellung bleiben frei; eine reine Grössentreppe oder getrennte Schriftproben erklären diesen Zusammenhang allein nicht.

## Schriftmaterial und Textrollen getrennt erklären

Zeige bei mehreren relevanten Schnitten, welches Schriftmaterial tatsächlich zur Verfügung steht und worin sich seine Wirkung unterscheidet. Eine Gegenüberstellung desselben Texts bei gleicher Grösse kann Gewicht oder Kursivwirkung verständlich machen; erkläre den jeweils passenden Einsatz. Die Form ist frei. Dateinamen und Zahlenwerte allein vermitteln diese Unterschiede nicht.

Ordne danach die gewählten Schnitte den Textrollen zu. Eine Schnittübersicht ersetzt nicht den Zusammenhang von Titel, Lesetext und Hilfe; eine Rollenprobe ersetzt umgekehrt nicht automatisch die Erklärung der verfügbaren Schriften. Zeige nur belegte oder ausdrücklich als Entwurf vorgeschlagene Schnitte/Achsen. Für nicht verfügbare Kursiven oder variable Achsen weder synthetisches Styling als Originalschnitt noch eine vollständige Bibliotheksausstattung behaupten.

## Fachlich sauber ableiten

- Leite eine systemweite Skala nicht aus einer einzelnen Komponente, einer Portalüberschrift oder einem Prosa-Preset ab. Ein Input mit einer bestimmten Grösse definiert noch keinen Lesetext.
- Unterscheide **Textrolle**, **typografisches Rezept** und **semantischen Rang**. Ein Stilname wie „Title“ legt weder `h1` noch einen nativen Accessibility-Trait fest. Derselbe visuelle Stil kann nach Kontext unterschiedliche semantische Aufgaben haben.
- Halte zu einem Rezept Schriftfamilie, tatsächlich verfügbaren Schnitt/Gewicht, Grösse samt Einheit, Zeilenhöhe und relevante weitere Eigenschaften zusammen fest. Ein vorhandener Fontname oder numerischer Gewichtswert beweist weder geladene Schrift noch verfügbaren Schnitt. Unbekannte Werte sichtbar lassen; keine Vollständigkeit erfinden.
- Fallback ist eine mögliche tatsächliche Darstellung mit eigenen Metriken und Zeichen. Ein Beispielsatz in der Primärschrift belegt weder Ersatzschrift noch weitere Schriftsysteme. Eine geladene Datei allein belegt nicht die Schrift jedes Zeichens.
- Unterscheide Komponentenwerte, Lesetext und lokale Verdichtung. Übertrage `px`, `rem`, `pt` oder andere Plattformgrössen nicht stillschweigend ineinander. Eine Basisgrösse und nutzerseitige Skalierung sind verschiedene Angaben.
- Verwende normative Zahlen nur mit passender Quelle, Version, Geltung und Ausnahmen. Werte für nutzerseitig erhöhte Textabstände sind keine pauschale Vorgabe für das normale Design. Ein CSS-Schalter „200 %“ ersetzt keinen Nachweis für Browserzoom, Reflow oder native Skalierung.

## Dialog und Ausarbeitung

Beginne mit den Fragen, die andere Entscheidungen freischalten: Geltung, führende Quelle, Textaufgaben, relevante Gestaltungsziele und verfügbare Schrift. Frage in kleinen zusammenhängenden Bündeln; bereits bekannte Angaben nicht wiederholen. Erkläre Begriffe in der Frage, wenn der Nutzer ohne Fachvokabular entscheiden soll.

Biete bei Bedarf begründete Optionen, ohne eine davon als angenommen zu behandeln. „Noch nicht entschieden“ ist zulässig. Trenne Quellkonflikte, fehlende Designentscheidungen und fehlende Prüfungen. Eine spätere zusätzliche Sprache oder native App ist ein möglicher Reviewauslöser, kein automatisch aktueller Mangel. Fasse folgenreiche neue Entscheidungen kurz zur Korrektur zusammen; präzise Angaben dürfen unmittelbar dokumentiert werden. Keine Nutzerantworten, Verantwortlichen oder Freigaben simulieren.

Grundfragen geben dem beauftragten Thema Orientierung. Bedingte Fragen werden aus tatsächlichen oder geplanten Anwendungen aktiviert; unbekannter Bedarf bleibt unbekannt. Vertiefungen erklären Entscheidungen, Alternativen und Grenzfälle dort, wo sie gebraucht werden. Umfangreiche Systeme dürfen ausführlich dokumentiert sein. Es gibt weder eine feste Seitenlänge noch eine vorgeschriebene Anzahl von Rollen, Beispielen oder Unterseiten.

## Ergebnis für Leser und Autoren

Die folgenden fachlichen Teile sollen auffindbar sein; sie sind keine Pflichtreihenfolge sichtbarer Abschnitte:

- Geltung, Quellen und Stand (TYP-01/02).
- Schriften, verfügbare Ressourcen und zugehörige Grenzen (TYP-03).
- Textrollen, konkrete Rezepte, ihre begründete Auswahl und Kombination nach Aufgabe (TYP-04/05).
- Visueller Vorrang, semantische Hierarchie, Rhythmus und Anpassung im Zusammenhang (TYP-06–08).
- Anforderungen, tatsächliche Prüfungen und offene Nachweise (TYP-09).
- Relevante lokale Kontexte: knapper Platz, Zahlen, Sprachen, Schriftladung und Plattform-/Markenvarianten (TYP-10–14).
- Offene Entscheidungen, Änderungsfolgen und bekannte Verantwortung (TYP-15).

Stelle die verwendbare Rolle und ihre Einsatzgrenze zuerst verständlich dar. Eine Rollenübersicht, ein annotierter Textzusammenhang, ein Vergleich oder eine ausführliche Herleitung sind mögliche Formen. Beispiele sollen eine Entscheidung erklären; keine dekorative Mustersammlung oder erfundene Produktgeschichte zur Längenfüllung. Screenshots brauchen eine gleichwertige Textaussage. HTML-Beispiele dürfen keine Schriftverfügbarkeit behaupten, die im Beispiel nicht besteht.

Benachbarte Themen besitzen die führenden Definitionen; das Typografiekapitel erklärt trotzdem ihre für Textwahl und Leseführung nötigen Beziehungen. Verknüpfe etwa Schrift, Textbreite und Abstand mit ihren gültigen Definitionen. Ein Verweis vermeidet doppelte Pflege, ersetzt aber nicht die Erklärung, wie diese Werte gemeinsam wirken. Fehlende Regeln bleiben im Bestand offen oder werden bei delegierter Gestaltung als Vorschlag ausgearbeitet.

Herkunft, Erklärungen und Nachweise dürfen ausführlich im Kapitel, in Vertiefungen oder als konkrete Verweise vorliegen. Vermeide gleiche Vorbehalte an jeder Tabellenzeile. Lokale Grenzen gehören direkt zum betroffenen Einsatz. Zeige, welche vorhandenen Anwendungen noch keine Gestaltungsvorgabe haben und was erst bei einer Erweiterung relevant wird.

Halte für die Autorenprüfung pro TYP-ID Antwort/Fundstelle oder explizite Lücke, Anwendbarkeit, Herkunft und fachlichen Stand fest. Benenne Prüfungen gesondert. Die Übersicht muss nicht vollständig im sichtbaren Kapitel stehen; vorhandene Antworten werden verlinkt statt erneut erzählt. Eine Zeile pro ID ist keine fachliche Abnahme.

## Übergabe prüfen

Kann ein Designer eine Textrolle wählen und die zugehörige Definition finden? Sind Rollen, Parameter und Semantik konsistent? Sind verwendete Schriften/Schnitte und deren Herkunft nachvollziehbar? Kann man erkennen, was bei wenig Platz, langen Texten, Ersatzschrift und Vergrösserung gelten soll und was noch offen ist? Sind bedingte Kontexte ohne erfundene Funktionen eingeordnet?

Prüfe die Entscheidungshilfe an einer zum Auftrag gehörenden Textaufgabe: Lässt sich anhand des Kapitels eine Rolle wählen, mit den dazugehörigen Rollen kombinieren und bei einer relevanten Änderung anpassen? Wähle die Änderung aus dem tatsächlichen Bedarf, etwa einen längeren Titel, mehr Daten, weniger Platz oder eine andere Sprachfassung. Benenne kurz, welche Aussagen die Auswahl tragen und wo noch mündliches Zusatzwissen oder eine neue Entscheidung nötig wäre. Erfunde dafür weder Produktfunktionen noch Pflichtrollen. Bei einem eng begrenzten Auftrag prüfe nur den vereinbarten Ausschnitt; bei umfangreichen Systemen die tatsächlich unterschiedlichen Entscheidungsmuster, ohne pauschale Beispielanzahl.

Dieser redaktionelle Anwendungsgang prüft die Brauchbarkeit der Anleitung. Er muss nicht als eigener Abschnitt erscheinen und ersetzt keine Beobachtung echter Nutzung oder eine technische Prüfung. Ein begründet offener Punkt darf das Ergebnis sein; die TYP-Abdeckungsübersicht allein genügt nicht als Anwendungsgang.

Berichte nur ausgeführte Prüfungen mit Artefakt, Umgebung, Einstellungen und beobachtetem Ergebnis. Eine Stichprobe, ein vorhandenes Token oder ein lokal funktionierender Schalter ist keine allgemeine Lesbarkeits-, Plattform- oder Zugänglichkeitsfreigabe. Die gewählte externe Anforderung und eine lokale Designentscheidung bleiben unterscheidbar.

Der Skill funktioniert ohne bestimmtes CMS, Framework oder MCP. Erstelle keine neuen Contracts, ersetze keine Schriftdateien und veröffentliche keine Inhalte nebenbei. Für eine ausdrücklich beauftragte Übernahme gelten Zielsystem, Umfang und vorhandene Autorisierung.
