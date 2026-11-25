# Inhaltsstandard für Design-System-Handbücher

Version 0.1 · Arbeitsvorschlag vom 18. November 2026. Systemunabhängig: weder shadcn noch Payload, Angular, React, Figma oder MCP sind Voraussetzung. Dieser Standard beschreibt redaktionelle Inhalte und ihre Prüfung. Er erteilt keine Produkt-, Implementierungs- oder Konformitätsfreigabe.

## Wozu dieser Standard dient

Ein Team soll ein neues Handbuch aufbauen und ein bestehendes nach denselben Fragen prüfen können. Dafür unterscheiden wir drei Ebenen:

1. **Systemprofil:** Für wen, für welche Aufgaben und Plattformen soll das System gelten?
2. **Themenvorlagen:** Welche fachlichen Entscheidungen und Grenzen muss jedes gewählte Thema erklären?
3. **Nachweise:** Worauf beruht eine Regel, wer hat sie entschieden und was wurde tatsächlich geprüft?

Die Vorlagen definieren Inhaltsabdeckung, keine feste Reihenfolge von Überschriften. Eine Aussage kann in einem Vergleich, einer Abbildung mit Textfassung, einer Tabelle oder einem kurzen Abschnitt stehen. Sie wird einmal am führenden Ort gepflegt. Verweise dürfen Inhalte abdecken, wenn sie zu einer konkreten gültigen Aussage führen; ein allgemeiner Link zur Startseite einer Bibliothek genügt nicht.

## Einstieg und Dateien

| Datei | Verwendung |
| --- | --- |
| [Grundlagen und Komponenten](foundations-components.md) | Visuelle Bedeutung und Bausteine; konkrete Unterthemen und Prüffragen |
| [Patterns und Layouts](patterns-layouts.md) | Nutzeraufgaben, Abläufe, Regionen und Seitentypen |
| [Content und Inklusion](content-inclusion.md) | Sprache, Formate, übergreifende Zugänglichkeit und Prüfwege |
| [Systemprofil, Plattformen, Pflege und technische Nutzung](platforms-governance.md) | Geltung, Umsetzungsstände, Verantwortung, Änderungen und Agenten |
| [Abgleich mit Arve/shadcn](assessment-shadcn.md) | Belegter aktueller Stand und Prioritäten |
| [Autoren-Skills für Layoutseiten](../layout-authoring/README.md) | Seitentypen, Seitenlayouts und Inhaltslayouts gezielt mit Fragen erarbeiten |
| [Prüfblatt](review-template.md) | Kopierbare Arbeitsvorlage für eine neue Familie oder ein neues System |

## Themenlandkarte

| Themenfamilie | Führende Frage | Welche Inhalte hier ihren Ursprung haben |
| --- | --- | --- |
| Einstieg und Systemprofil | Passt dieses System zu unserer Aufgabe? | Zielgruppen, Prinzipien, Umfang, Ressourcen, erster Arbeitsweg, Grenzen |
| Grundlagen | Wie wird Bedeutung visuell und räumlich vermittelt? | Farbe, Themes/Zustände, Typografie, Abstand/Grösse, Form/Ebenen, Icons, Bewegung; weitere visuelle Domänen nach Bedarf |
| Komponenten | Welcher Baustein passt, wie ist er aufgebaut und bedienbar? | Auswahl, Anatomie, Varianten, lokale Zustände, Verhalten, Inhalt, technische und gestalterische Referenz |
| UX-Patterns | Wie erreicht eine Person ihr Ziel einschliesslich Ausnahmen? | Aufgabe, Hauptweg, Entscheidungen, Fehler, Rückkehr, Wiederaufnahme, Ergebnis |
| Layouts und Seitentypen | Wie ordnen wir Informationen und Handlungen? | Regionen, Hierarchie, Navigation, Rasteranwendung, Umbruch, Scrollen, lange Inhalte |
| Content Design | Was sagen wir in welchem Zustand und Format? | Begriffe, Stimme, Labels, Hilfen, Meldungen, Zahlen/Datum, Übersetzung |
| Inklusive Gestaltung | Wie können Menschen die Aufgabe unter unterschiedlichen Bedingungen bewältigen? | Zielanforderungen, Testverfahren, Hilfsmittel, Nachweise, Zuständigkeiten; lokale Regeln werden verlinkt |
| Plattformen und Ressourcen | Welche konkrete Umsetzung können wir verwenden? | Unterstützungsumfang, Designressourcen, Pakete, Plattformabweichungen, Reife und geprüfte Kontexte |
| Mitwirken und Pflege | Wie werden Regeln entschieden, geändert und abgelöst? | Verantwortung, Vorschlag, Review, Quellen, Veröffentlichung, Migration, Rückmeldung |
| Technische/agentische Nutzung | Wie werden freigegebene Informationen zuverlässig konsumiert? | Referenzen und Zugriff; bei entsprechender Nutzung Contracts, Maschinenzugriff, Skills und Arbeitsgrenzen |

Dies sind Verantwortungsbereiche, keine Pflicht, zehn Hauptmenüpunkte anzulegen. Kleine Systeme dürfen Bereiche bündeln. Ein eigenes Unterthema bekommt eine Seite, wenn es eine eigenständige Entscheidung erklärt; sonst genügt ein klar auffindbarer Abschnitt. Ein Formularpattern gehört nur dann in den Umfang, wenn die Produkte Formularaufgaben haben. Die Systementscheidung über diese Relevanz gehört immer ins Profil.

## Gemeinsamer Seitenrahmen

Für Chart-Farbentscheidungen zusätzlich einen **semantischen Archetyp** aus diesen Ebenen ableiten: Welche Werte sind Richtungen, Kategorien, Unterkategorien, Referenzen, Ergebnisse oder Zustände? Die Auswahl kommt aus der Grundpalette. Konflikte mit Marke, UI-Rollen und erwartbaren Datenlesarten brauchen konkrete Alternativen und einen benannten Geltungsbereich. Eine neue Reihe erhält nicht automatisch eine neue Farbe.

Datenvisualisierung ist in der shadcn-Referenz ein eigener Bereich. Die Taxonomie trennt Datenbedeutung, Vergleichsstruktur, Darstellungsform, Datenumfang/Dichte und Farbidentität. Die fünf Ebenen und die Palettenfamilien bleiben jeweils auf einer gemeinsamen Seite; Chart-Typen, Beschriftung, kleine Ansichten und Zugänglichkeit ergänzen sie. Grundlagen/Farben führt allgemeine Farben, Komponentenseiten ihren Contract- und Implementierungsstand. Beide verlinken die Chart-Regeln. Für neue Systeme unterstützt der [Datenvisualisierungs-Skill](../../../.agents/skills/arve-data-visualization-handbook/SKILL.md) die fachliche Ausarbeitung; Palette und Beispielwerte werden nicht blind übertragen.

Die folgenden IDs ergänzen jede Themenvorlage. **P** = im gewählten Umfang erforderlich; **B** = bei genanntem Auslöser. Ein Punkt benötigt keine eigene sichtbare Überschrift.

| ID | Pflichtfrage | Ausreichender redaktioneller Beleg |
| --- | --- | --- |
| BAS-01 · P | Welche konkrete Entscheidung oder Aufgabe unterstützt die Seite? | Kurzer Zweck, Zielgruppe und Geltung; Titel/Einleitung passen dazu. |
| BAS-02 · P | Wann gilt die Aussage, wann nicht, welche Alternative ist relevant? | Einsatzgrenze und bei Verwechslungsgefahr ein Vergleich mit Alternative. |
| BAS-03 · P | Was soll das Team konkret tun oder entscheiden, und warum? | Handlungsfähige Regel mit Begründung oder ausdrücklich offene Entscheidung mit zuständigem Review. |
| BAS-04 · P | Was ist Quelle, eigene Festlegung oder beobachteter Befund? | Herkunft pro Regelgruppe, genaue Fundstelle/Stand; Annahmen getrennt. |
| BAS-05 · P | Wie verbindlich ist der Stand, wer verantwortet ihn? | Fachstatus, verantwortliche Rolle/Team und letzter Review bzw. sichtbarer fehlender Review. Veröffentlichung allein genügt nicht. |
| BAS-06 · P | Welche Nachbarregel gehört zu dieser Entscheidung? | Konkrete Hin-/Rückverweise; keine gegensätzlichen Kopien in Vorlagen und Fliesstext. |
| BAS-07 · P | Woran erkennt man die richtige Anwendung? | Prüffrage mit erwartetem Ergebnis; Beispiele nur dort, wo sie eine Entscheidung erklären. |
| BAS-08 · B: Abbildung, Studie oder Demo | Was zeigt die Darstellung, und welche Grenze hat sie? | Vollständige wesentliche Aussage als Text; erkennbar statisch oder interaktiv; Quelle/Version; keine Fähigkeitsbehauptung aus einem Bild. |
| BAS-09 · B: Abweichungen zwischen Marken, Themes oder Plattformen | Was bleibt gemeinsam, was unterscheidet sich? | Benannter Scope und begründete Abweichung mit Referenz; keine bloss umgefärbte Kopie. |
| BAS-10 · B: bestehende Aussage wird geändert/abgelöst | Wer ist betroffen und wohin führt der alte Verweis? | Änderungswirkung, Ersatz/Übergang und nachvollziehbarer alter Stand. |

Bei BAS-03/05 macht ein dokumentierter offener Punkt die Lücke sichtbar. Er zählt nicht als geklärte Regel oder bestandene Prüfung. Früh veröffentlichte Entwürfe sind möglich, sofern ihr Status erkennbar bleibt.

## So wird bewertet

Drei Achsen getrennt festhalten:

- **Inhaltsabdeckung:** erfüllt / teilweise / fehlt / nicht belegt / nicht relevant.
- **Fachstand:** Vorschlag / in Review / entschieden / abgelöst / offen. Diese Bezeichnungen sind ein Vorschlag für die spätere redaktionelle Abbildung.
- **Umsetzungsnachweis:** nicht umgesetzt / Demonstration / begrenzt geprüft / für benannten Umfang freigegeben. Keine dieser Stufen folgt automatisch aus der Inhaltsabdeckung.

**Erfüllt:** Die geforderte Frage ist für den erklärten Scope konkret und nachvollziehbar beantwortet. **Teilweise:** ein Teil ist beantwortet, relevante Entscheidung oder Beleg fehlt. **Fehlt:** im geprüften Material ist der erforderliche Inhalt nicht vorhanden. **Nicht belegt:** die betrachteten Quellen erlauben keine Aussage, etwa über einen nicht eingesehenen CMS-Stand. **Nicht relevant:** der bedingte Punkt trifft nach begründeter Scopeentscheidung nicht zu; Grund und Reviewauslöser dokumentieren. Nicht geprüft darf nicht in nicht relevant umbenannt werden.

Ein Thema kann redaktionell vollständig sein und dennoch nur einen Vorschlag beschreiben. Umgekehrt kann eine funktionierende Komponente unzureichend dokumentiert sein. Deshalb keine Gesamtprozentzahl, die diese Ebenen vermischt. Familienstand anhand der offenen kritischen Entscheidungen zusammenfassen.

## Leitende Zuständigkeiten an typischen Übergaben

| Gegenstand | Führender Ort | Andere Orte verlinken oder konkretisieren |
| --- | --- | --- |
| Semantische Fehlerfarbe | Grundlagen | Komponente zeigt Verwendung; Inklusion prüft tatsächliche Kombination. |
| Feldfehler darstellen/zuordnen | Komponente bzw. Feldzusammenstellung | Pattern legt Prüfzeitpunkt/Fokuswechsel fest; Content formuliert Meldung. |
| Unbekanntes Übermittlungsergebnis | Pattern | Content formuliert Unsicherheit; Layout platziert Rückmeldung; Plattform belegt Fähigkeit. |
| Containerbreite/Regionswechsel | Layout | Abstandsbedeutung und Skala stammen aus Grundlagen. |
| Bestätigte Paketfähigkeit | Plattform/Implementierungsreferenz | Komponente/Pattern verlinken genau diese Version und Grenze. |
| Review oder Ablösung | Pflege | Jede betroffene Seite zeigt ihren eigenen gültigen Stand. |

## Anwendung auf ein neues System

1. Systemprofil mit bewusstem Umfang festhalten; bestehende Quellen/Artefakte inventarisieren.
2. Themenbedarf anhand tatsächlicher Nutzeraufgaben auswählen; bedingte Themen begründen.
3. Pro Familie eine fachlich verantwortliche Person bestimmen und die passende Vorlage nutzen.
4. Vorhandene Aussagen zuordnen, Lücken und Widersprüche festhalten. Beispielwerte nicht übernehmen, um leere Felder zu füllen.
5. Einen durchgängigen Arbeitsweg über mehrere Themen abgleichen; danach fachlich entscheiden und begrenzt prüfen.
6. Erst den abgestimmten Inhalt in das jeweilige CMS/Repository übertragen. Mit Veröffentlichung Referenzen und gegebenenfalls maschinelle Ausgabe prüfen.

**Abnahmekriterium für das Handbuch:** Eine zweite Person kann die ausgewählte Aufgabe ohne mündliches Zusatzwissen gestalten, die noch offenen Entscheidungen benennen und die einschlägigen Nachweise finden. Ob die tatsächliche Umsetzung korrekt funktioniert, benötigt einen eigenen Nachweis.

## Herkunft und Grenzen

Der Katalog ist unsere redaktionelle Synthese und ein zu validierender Vorschlag. Die Fachdateien nennen gezielt gelesene Primärquellen. Carbon trennt beispielsweise Anforderungen an Gestaltung, Code, Tests und Designressourcen und führt deren Reife gesondert; daraus folgt für uns die Trennung von Inhalt und Nachweis, keine Übernahme von Carbons Freigaben oder Werkzeugpflichten. Quellen: [Carbon Contribution Overview](https://www.carbondesignsystem.com/getting-started/contributing/overview), [Component checklist](https://www.carbondesignsystem.com/getting-started/contributing/component-checklist), gelesen 18.11.2026.

Der Sollkatalog wurde von drei unabhängigen Fachagenten und dem Koordinator ausgearbeitet, bevor der jeweilige Bestandsabgleich ergänzt wurde. Eine zweite Organisation hat ihn noch nicht praktisch erprobt. Das ist der nächste Validierungsschritt, keine bereits bewiesene universelle Vollständigkeit.
