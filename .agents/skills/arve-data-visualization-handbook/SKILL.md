---
name: arve-data-visualization-handbook
description: Erarbeite oder prüfe Chart-Taxonomie und semantische Chart-Archetypen eines UX-Handbuchs. Leite Chart-Paletten aus der Systempalette ab und löse Konflikte zwischen Datenbedeutung, Struktur, Marke, UI-Rollen und Farbwahrnehmung. Nicht für Chart-Implementierung oder die Erfindung fehlender Bestandsdaten.
---

# Datenvisualisierung im Handbuch

Kläre das gewählte System, Quellen und Auftragsmodus. Im Bestand bleiben unbekannte Entscheidungen offen. Ein beauftragter Showcase erlaubt begründete eigene Vorschläge; kennzeichne sie getrennt von Bibliotheksvorgaben und tatsächlich geprüften Regeln. Vorhandene Nutzerantworten nicht erneut abfragen.

## Fünf Einordnungsebenen

Halte diese Fragen auseinander; Reihenfolge und visuelle Darstellung der Antworten bleiben frei:

- **DV-01 Datenbedeutung:** Neutral, kategorial, geordnet, divergent um einen benannten Bezugspunkt oder statusbezogen? Mehrere Bedeutungen können nebeneinander vorkommen. Was bedeutet etwa Rot im konkreten Geltungsbereich? Negativer Wert, Verlust, Warnung und Fehler nicht gleichsetzen.
- **DV-02 Vergleichsstruktur:** Einzelreihe, gleichberechtigte Vergleichsreihen, Zusammensetzung, Ist/Referenz oder Werte/Grenzen? Drei Linien sind nicht automatisch drei gleichberechtigte Datenreihen.
- **DV-03 Darstellungsform:** Linien, Punkte, getrennte, angrenzende oder überlagerte Flächen? Prüfe Erkennbarkeit dünner Striche, kleiner Marken, Nachbarn und Mischfarben. Ein fachlicher Einsatz wie Kursverlauf ist kein geometrischer Chart-Typ.
- **DV-04 Umfang und Dichte:** Anzahl farblich zu unterscheidender Kategorien/Reihen getrennt von sichtbaren Messpunkten und Überlagerung erfassen. Viele Punkte einer Reihe benötigen nicht viele Farben. Keine universelle Zahl unterscheidbarer Farben erfinden.
- **DV-05 Identität und Wiederholung:** Was muss innerhalb eines Charts, zwischen zusammengehörigen Ansichten und über Filter hinweg stabil bleiben? Gleiche Farbe darf gleiche Bedeutung wiederholen; unterschiedliche Kategorien benötigen eine weitere unterscheidbare Kodierung, wenn ihre Farbe identisch ist. Reservierte Bedeutungen haben im festgelegten Kontext Vorrang.

## Von der Einordnung zur Palette

**Chart-Paletten müssen aus der allgemeinen Systempalette stammen.** Halte pro verwendeter Farbe Familie/Stufe oder Tokenreferenz und deren aufgelösten Wert fest. Auch Illustrationen benutzen diese Quelle; keine zweite Liste eigener Hexfarben anlegen. Eine nötige neue Farbe ist eine ausdrückliche Erweiterung der Grundpalette, keine stille lokale Chart-Ergänzung. UI-Primärfarbe und Markenfarbe sind unterschiedliche Angaben; ist die Marke nicht belegt, nicht aus einer Buttonfarbe ableiten.

## Semantische Chart-Archetypen immer klären

**DV-06:** Leite aus den fünf Ebenen die gemeinsame Struktur und Bedeutung ab: Welche Werte sind Gegenrichtungen, gleichberechtigte Kategorien, Teile eines Ganzen, Referenzen, abgeleitete Ergebnisse oder Zustände? Das ist der semantische Archetyp. Ein fachlicher Titel allein reicht nicht. Mögliche Ausgangsfälle sind neutraler Verlauf, Kategorienvergleich, zwei Richtungen mit weiteren Werten, Zusammensetzung, Abweichung und Wert/Grenze. Sie sind kombinierbar; eine andere Bibliothek darf andere Archetypen benötigen.

Pro relevantem Archetyp dokumentiere Rollen/Beziehungen, Farbzuordnung, Geltungsbereich, ausgeschlossene Bedeutungen, geeignete Darstellungsformen und Verhalten beim Hinzufügen von Werten. Nicht jede Reihe erhält eine neue Farbe: Gebühren können Teil der Auszahlungen sein, ein Budget eine Referenz und ein Saldo ein abgeleitetes Ergebnis. Teile nicht zusätzlich auf ein vollständiges Total stapeln. Wenn Farbe die Richtung trägt, Unterkategorien über Position/Labels oder Teilgrafiken unterscheiden; gleiche Bedeutung darf gleiche Farbe wiederholen.

**DV-07:** Prüfe jeden Farbkandidaten gegen explizite Belegungen und erwartbare Interpretationen im Kontext. Rot/Grün können Minus/Plus oder Fehler/Erfolg, Blau Auswahl/Information, Amber Warnung und Grau Referenz oder fehlende Verfügbarkeit suggerieren. Auch Violett und andere Alternativen können belegt sein. Kein universelles Verbot einer Farbfamilie ableiten: UI- und Datenrollen dürfen eine Familie teilen, wenn Form und Kontext sie klar trennen. Reservierungen für Chart und zusammengehörige Ansichten derselben Aufgabe festhalten.

**DV-08:** Gib eine ausführbare Konfliktentscheidung: Wann passt ein Kandidat, wann scheidet er aus, welche konkrete Farbe der vorhandenen Systempalette wird stattdessen geprüft? Datenbedeutung und Lesbarkeit haben Vorrang vor Marke und Dekoration. Auch die Alternative erneut gegen alle Rollen prüfen. Sind alle Kandidaten belegt oder nicht unterscheidbar, Struktur/Labels/Auswahl/Teilansichten ändern, statt Farben zu erfinden, zyklisch zu wiederholen oder Bedeutungen still umzubelegen. Die konkrete Reihenfolge von Ausweichfarben ist eine Systementscheidung, keine universelle Farbregel.

Zeige bei einem beauftragten Entwurf mindestens die relevante Konfliktsituation und ihre Lösung. Eine rote oder grüne Marke ist ein Fall; eine neue Datenreihe im bereits rot/grün kodierten Ein-/Auszahlungs-Chart und ein Blau-/Auswahlkonflikt sind andere. Markiere erfundene Beispieldaten und lokale Regeln. In einer reinen Bestandsdokumentation bleiben fehlende Entscheidungen offen.

## Auswahl und Nachweis

Leite Einzelfarbe, kategorische, sequenzielle, divergierende oder semantische Palette ab. Hauptwert/Referenz ist eine zusätzliche Rollenkombination, keine eigene Datenordnung. Begründe Kombinationen und Konflikte. Ein Chart-Typ allein legt die Palette nicht fest.

Für konkrete Paletten dokumentiere Hintergrund/Theme, Formeignung, geprüfte Kategorieanzahl, semantische Reservierungen und tatsächliche Nachweise. Illustrative Farben oder Swatches sind weder neue Bibliotheks-Tokens noch geprüfte Paletten. Fehlt der Nachweis, benenne ihn als offen. Wenn Farben nicht reichen, Beschriftung, Muster, Auswahl oder getrennte Ansichten prüfen statt Farben zyklisch wiederholen.

## Weitere Inhalte nach Bedarf

Beantworte für die behandelten Charts auch Beschriftung, Einheiten, Bezugspunkte, Achsen/Legenden, fehlende Werte, kleine Ansichten, Bedienung ohne Hover und geeignete Datenalternativen. Charts bleiben auch für andere Plattformen als Web anwendbar; keine Bibliotheks-API als UX-Regel ausgeben. Prüfstand, Priorität und Aufwand gehören in ein getrenntes Bestandsinventar, nicht in die Definition eines Chart-Typs.

Zeige die Unterschiede mit wenigen passenden Vergleichen: eine Reihe mit wenigen/vielen Punkten; Linien gegenüber Flächen; Palettenfamilien mit ihrer Bedeutung. Die Kernaussage muss als Text verfügbar sein und darf nicht nur im Bild oder Quellcode stehen. Mobile Ansichten und Tastaturbedienung vorhandener Bedienelemente prüfen, ohne eine umfassende Zugänglichkeitsfreigabe zu behaupten.

## Verortung und Übernahme

Im Handbuch stehen die Regeln unter **Datenvisualisierung**: Übersicht, Charts einordnen (die fünf Ebenen auf einer Seite), Chart-Paletten (Familien auf einer Seite), Chart-Typen, Beschriftung/Achsen/Legenden, Interaktion/kleine Ansichten und Zugänglichkeit. Vorhandene Seiten nutzen; keine leeren Unterseiten je Begriff erzeugen.

Grundlagen/Farben führt die allgemeine Palette und Rollen; von dort auf Datenvisualisierung verweisen. Komponentenseiten verlinken die fachlichen Regeln, führen aber weiterhin ihren eigenen Implementierungs- und Contractstand. Keine parallelen widersprüchlichen Regeln kopieren. Carbon ist eine mögliche Quelle für Chartformen und Palettenfamilien; die fünf Ebenen sind eine lokale Synthese und nicht als vollständige Carbon-Taxonomie auszugeben.

Für eine autorisierte CMS-Übernahme: Inhalte redaktionell änderbar halten, Hierarchie in Navigation und URLs abbilden, Textalternativen auch über den vorgesehenen Agentenzugang verfügbar machen und Referenzexport aktualisieren. Unveröffentlichte Änderungen bewahren. Relevante Erkenntnisse aus Anwendung/Review in diesem Skill nachführen.
