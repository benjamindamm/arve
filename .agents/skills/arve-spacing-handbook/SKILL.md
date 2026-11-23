---
name: arve-spacing-handbook
description: Erarbeite oder prüfe das Kapitel Abstände und Grössen eines Design-System-Handbuchs aus Quellen, gezielten Rückfragen und delegierten Gestaltungsentscheidungen. Behandelt Skalen, Gruppierung, Dimensionen, Dichte und Bedienflächen; nicht die Implementierung einer UI oder einen vollständigen Seitenlayoutkatalog.
---

# Abstände und Grössen erarbeiten

Das Kapitel soll beim Ordnen von Informationen und beim Wählen von Abständen und Grössen helfen. Eine Tokenliste allein erklärt noch keinen Einsatz. Die fachliche Abdeckung ist gemeinsam; Darstellung und Umfang bleiben frei.

## Auftrag und Quellen

Kläre System, Umfang und Auftrag aus den vorhandenen Angaben. Im **Bestandsmodus** dokumentiere Werte und Anwendungen aus den Quellen; fehlende Festlegungen oder widersprüchliche Rezepte bleiben sichtbar. Im **delegierten Entwurf** entwickle ein begründetes System aus tatsächlichen Aufgaben, Inhalt und Bedienung. Kennzeichne neue Werte und Regeln als lokale Entwurfsentscheidungen. Bereits delegierte Entscheidungen benötigen keine erneute Erlaubnis, neue fachliche Annahmen aber eine erkennbare Einordnung.

Lies gezielt Designvariablen, Token-Exports, Komponentenrezepte, Frameworkkonfiguration und bestehende Regeln. Trenne gefundene Werte, beobachtete Umsetzung und fachlich angenommene Vorgaben. Eine veröffentlichte Bibliotheksvorgabe muss nicht die tatsächlich konfigurierte Projektvorgabe sein. Bei einem Konflikt keine Rangfolge Code/Design erfinden. Kein Framework und keine 4-/8-px-Basis sind vorgewählt.

Nutze den [Fragenkatalog SPC-01–15](references/spacing-questions.md) zur Quellenzuordnung und Klärung. Die [Quellen- und Prüfhilfe](references/evidence-and-checks.md) wird bei Frameworkskalen, Einheiten oder Bedienflächen relevant.

## Gestalterischen Zusammenhang erarbeiten

Beginne bei der Aufgabe: Welche Inhalte gehören zusammen, welche Gruppen müssen unterscheidbar sein, welche Information oder Handlung hat Vorrang? Welche Nutzung verlangt Überblick, ruhiges Lesen oder häufiges präzises Bedienen? Daraus folgen Auswahl und Kombination der Werte. Im Bestand unbekannte historische Gründe nicht nachträglich erfinden.

Trenne drei Entscheidungen: **Basiseinheit oder Ableitungsregel**, **angebotene Stufen mit konkreter Definition** und **deren Anwendungsrollen**. Ein 4er- oder 8er-System kann dafür eine Grundlage sein. Erst Einsatzregeln erklären, welcher Wert etwa Inhalt und Umrandung, Beschriftung und Feld oder zwei Gruppen voneinander trennt. Nicht alle angebotenen Stufen müssen überall verwendet werden; zulässige Ausnahmen brauchen einen nachvollziehbaren Grund statt beliebiger Einzelwerte.

Erkläre die Beziehungen im Zusammenhang. Wie tragen Innenabstand, Abstand zwischen Elementen und Abstand zwischen Gruppen die beabsichtigte Hierarchie? Wie bleiben gleichrangige Gruppen konsistent? Welche Änderung an Inhalt, Gewichtung oder Platz führt zu einer anderen Wahl? Ein Vergleich, eine annotierte Anordnung oder eine präzise Erklärung kann diese Entscheidung tragen. Weder jeder Unterschied noch jede kleine Gruppe braucht eine eigene Card.

Für Grössen benenne die jeweils gemeinte Fläche: sichtbares Zeichen/Inhalt, geometrischer Bereich und tatsächlich bedienbare Fläche können verschieden sein. Berücksichtige Inhalt, Beschriftung und Anpassung statt nur eine hübsche Grössentreppe zu erstellen. Feste, inhaltsabhängige, begrenzte und verfügbare Fläche ausfüllende Grössen sind unterschiedliche Regeln; nicht alles wird aus derselben Abstandsskala abgeleitet.

Leite im Entwurfsmodus eine konsistente Auswahl aus diesen Aufgaben ab. Begründe relevante Alternativen und Zielkonflikte, etwa höhere Informationsdichte gegenüber stärkerer Trennung. Ein vollständiges Parameterset mit „wirkt harmonisch“ genügt nicht. Im Bestandsmodus fehlende Kombinations- oder Anpassungsregeln konkret als Lücke benennen.

## Fachlich unterscheiden

- **Abstandsskala** beschreibt wiederverwendbare Werte und ihre Ableitung. **Seitenraster** beschreibt Spalten/Regionen und deren Anwendung. **Typografischer Rhythmus** verbindet Textmetriken und Abstände. Diese Systeme können zusammenarbeiten, sind nicht identisch.
- Ein Frameworkmultiplikator ist noch keine semantische Rolle. Prüfe tatsächliche Version, Konfiguration und Einheit; ein Index ist keine Pixelzahl. Keine universelle Schrittweite aus einem einzelnen Komponentenpadding ableiten.
- Innenabstand, Abstand zu Nachbarn und eine vergrösserte Bedienfläche sind verschiedene Wirkungen. Freier Raum ist nur dann aktivierbare Fläche, wenn die Aktion dort tatsächlich ausgelöst werden kann. Geometrie oder Screenshot beweisen das nicht.
- Inhalt, sichtbare Grösse, Mindest-/Höchstgrenze, Kontur und aktives Ziel getrennt behandeln. Rahmen, optische Korrektur, textabhängige Höhe und Systemfläche müssen nicht derselben Schrittlogik folgen.
- Einheiten und Bezugsgrössen benennen. `rem`, CSS-Pixel und native Plattformgrössen nicht stillschweigend gleichsetzen; auch proportionale oder inhaltsabhängige Werte nicht als fixe Masse ausgeben.
- Wenig Platz ist kein pauschaler Auftrag, alle Abstände, Schriften und Ziele zu verkleinern. Dichte, Leserichtung, Inhalt und Eingabemethoden aus dem tatsächlichen Kontext betrachten.
- Mindestanforderung, lokale Gestaltungsentscheidung und tatsächlich ausgeführter Nachweis bleiben getrennt. Weder ein 4er-Rhythmus noch eine bestimmte Zielgrösse allein bestätigt Zugänglichkeit oder fehlerfreie Bedienung.

## Dialog, Tiefe und Darstellung

Lies Quellen vor Rückfragen. Beginne mit offenen Entscheidungen, die andere Fragen freischalten: Umfang, führende Definitionen, tatsächliche Skala, Gruppierungsaufgaben und Nutzung. Frage in kleinen zusammenhängenden Bündeln. „Noch nicht entschieden“ ist ein gültiges Ergebnis. Vorschläge sind nicht angenommen, nur weil sie angeboten wurden. Präzise Nutzerangaben direkt festhalten; folgenreiche neue Entscheidungen kurz zur Korrektur zusammenfassen. Keine Nutzerantworten, Zuständigkeiten oder Freigaben simulieren.

Grundfragen sichern die Orientierung für den beauftragten Bereich. Bedingte Fragen vertiefen tatsächlich relevante Kontexte; unbekannter Bedarf bleibt unbekannt. Unterscheide aktuelle ungeregelte Anwendungen, offene Prüfungen und mögliche spätere Erweiterungen. Vertiefungen dürfen ausführlich begründen, vergleichen und Grenzfälle erklären. Es gibt keine feste Seitenlänge, Anzahl Stufen, Anzahl Beispiele oder vorgeschriebene Seitenaufteilung.

Verwendbare Werte und ihre Auswahl müssen gut auffindbar sein. Eine Skalenreferenz, Zuordnungen nach Aufgabe und ein Zusammenhang können gemeinsam helfen. Herkunft, Methoden und Begründungen können integriert, aufklappbar oder präzise verlinkt sein. Wiederhole gleiche Einschränkungen nicht an jeder Zeile. Eine lokale Grenze gehört zur betroffenen Verwendung. Illustrative Abstände als solche kennzeichnen; keine statische Grafik als Bediennachweis ausgeben.

## Ergebnis und Gegencheck

Fachlich auffindbar werden Geltung/Quellen, Skala/Ableitung, Auswahl- und Kombinationsregeln, relevante Grössen/Anpassung sowie tatsächlicher Prüfstand und offene Entscheidungen. Bedingte Themen ergänzen diesen Kern. Die Autorenprüfung ordnet SPC-IDs zu Antworten/Fundstellen, Anwendbarkeit, Herkunft, fachlichem Stand und Nachweisen; diese Matrix muss nicht im sichtbaren Kapitel stehen.

Nachbarbereiche besitzen ihre führenden Definitionen: Layouts Container/Spalten/Regionen, Typografie Textrezepte, Komponenten lokale Einbindung, Plattformen konkrete Implementierungen. Das Kapitel erklärt trotzdem die für Abstandswahl nötigen Beziehungen; ein allgemeiner Verweis ersetzt diese Erklärung nicht. Bestehende gültige Rezepte verlinken, fehlende Regeln im Bestand offenlassen oder im beauftragten Entwurf sichtbar vorschlagen.

Vollziehe einen begrenzten redaktionellen Anwendungsgang aus dem Auftragsumfang nach: Welche Aussagen erlauben die Abstandswahl und Gruppierung? Wie reagiert die Kombination auf eine relevante Änderung wie längere Hilfe, mehr Inhalte, weniger Platz oder eine andere Eingabeart? Benenne die benötigten Aussagen und fehlendes Zusatzwissen. Ein kleines Werteinventar verlangt keinen erfundenen kompletten Screen. Diese Prüfung betrifft die Entscheidungshilfe, keine tatsächliche Nutzungswirkung.

Berichte nur ausgeführte Messungen/Prüfungen mit Artefakt, Umgebung und Ergebnis. Eine Quelle, ein Rechnergebnis und ein bedienbarer Prototyp liefern unterschiedliche Nachweise. Werte oder Ausnahmebedingungen aus Standards nur mit gewählter Quelle, Version und Geltung anwenden. Die Prüfhilfe ist keine pauschale Freigabe.

Der Skill setzt weder Tailwind/shadcn noch ein bestimmtes CMS oder MCP voraus. Keine technische Bibliothek, Contracts, Datenbankstruktur oder veröffentlichte Seite nebenbei ändern. Für eine ausdrücklich beauftragte Übernahme gelten Zielsystem, Umfang und bestehende Autorisierung.
