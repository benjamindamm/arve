---
name: arve-animation-handbook
description: Erarbeite oder prüfe das Kapitel Animation eines Design-System-Handbuchs. Führt von Quellen und offenen Entscheidungen zu einer klar gegliederten Seite mit semantischen Rollen, anschaulichen Vergleichen, anwendbaren Rezepten und reduzierter Animation. Nicht für Animationsfilme oder die Implementierung einer App.
---

# Animation erarbeiten

Das Ergebnis hilft einem Team, eine passende Animation auszuwählen, anzuwenden oder bewusst wegzulassen. Die fachliche Vollständigkeit allein ergibt noch keine verständliche Seite. Entwickle zuerst deren Aufbau und Darstellungen, dann die nötigen Texte.

## Ausgangspunkt

Kläre aus vorhandenen Angaben Zielsystem, Aufgaben, Plattformen und Auftrag. Im **Bestand** bleiben fehlende Regeln offen. Bei **delegiertem Entwurf** entwickle begründete lokale Vorschläge; bereits delegierte Entscheidungen nicht erneut zur Erlaubnisfrage machen. Lies gezielt vorhandene Rezepte, Werte und Zustandsdefinitionen. Herkunft, tatsächlicher Systemstand und neue Vorschläge auseinanderhalten. Werte einer Vorschau oder eines einzelnen Spinners sind keine allgemeine Zeitskala.

Lies die [Seitenkomposition](references/page-composition.md), bevor du den sichtbaren Inhalt entwirfst. Sie überträgt die wirksame Struktur der Referenz auf andere Systeme, ohne deren Werte oder Spezialdarstellung vorauszusetzen.

## Vom Material zur Seite

1. **Ordnen:** Welche Aussage soll Bewegung vermitteln? Welche Rezepte/Werte sind belegt, vorgeschlagen oder offen? Ein konkreter fehlender Prüfzeitpunkt ist hilfreicher als ein allgemeiner Absatz über Unsicherheit.
2. **Aufbauen:** Plane wenige fachlich unterscheidbare Bereiche. Für jeden: Leserfrage → Darstellung → knappe Einsatzregel. Geeigneter Ausgangspunkt: Bedeutung, Dauer und Verlauf, Anwendung mit reduzierter Alternative, vertiefende Regeln sowie Quellen/offene Entscheidungen. Bereiche zusammenfassen oder an belegte Aufgaben anpassen.
3. **Zeigen:** Ein Zustandsvergleich erklärt Bedeutung; vergleichbare Proben erklären Timing; ein Kontextbeispiel zeigt die Anwendung. Nicht dieselbe Erklärung zusätzlich als Einleitung, Prinzip, Rezept und Fazit wiederholen. Ist nur Text möglich, nutze kompakte Tabellen oder eine beschriftete Bildfolge und benenne die fehlende laufende Vorschau.
4. **Verdichten:** Jede Regel hat eine Hauptfundstelle. Gemeinsame Geltung und Grenzen einmal nennen; eine besondere Einschränkung unmittelbar am betroffenen Beispiel. Weiterführende Herleitungen und Nachweise getrennt zugänglich machen.

## Fachlicher Kern

- **Bedeutung:** Rolle, Auslöser, beabsichtigte Aussage, Anfang/Ziel und gleichwertige reduzierte Darstellung klären. Bedienreaktion, lokaler Wechsel und bestätigter Erfolg unterscheiden. Nur relevante Rollen aufnehmen; Mikroanimation beschreibt den Umfang, nicht die Bedeutung.
- **Rezept:** Auslöser, veränderte Eigenschaften, räumlicher Bezug, Dauer/Verlauf und Verhalten bei erneuter Eingabe. Verzögerung, Wiederholung und Zusammenspiel nur ergänzen, wenn sie vorkommen. Parameter sollen eine Auswahl ermöglichen, nicht bloss Zahlen sammeln. Animationsende und fachlicher Erfolg bleiben getrennt.
- **Reduktion und Bedienung:** Inhalt, Orientierung, Rückmeldung und Zugang zu Aktionen erhalten. Eine kürzere Dauer oder ein ausgeblendeter Spinner allein ist keine gleichwertige Alternative. Fokus und Zustände aus Komponenten/Patterns beziehen. Lokaler Vorschauschalter, tatsächliche Systempräferenz und native Umsetzung sind unterschiedliche Dinge.

## Prüfen, ohne Text aufzublähen

Nutze die [Fachfragen ANM-01–17](references/animation-questions.md) als interne Abdeckungsprüfung: vorhandene Fundstelle, konkrete Lücke oder begründete Nichtanwendbarkeit. Sie sind keine sichtbare Gliederung und verlangen weder einen Absatz pro ID noch pro Rolle wiederholte Allgemeinregeln. Bedingte Themen nur bei tatsächlichem Bedarf vertiefen. Offene Entscheidungen zusammenführen; keine fehlenden Rezepte zur Vollständigkeit erfinden.

Für reduzierte Animation, automatische Inhalte oder Aussagen über Nachweise lies die [Quellen- und Prüfhilfe](references/evidence-and-checks.md). Berichte nur ausgeführte Prüfungen. Standbilder belegen keinen Zwischenverlauf, ein Token keine tatsächliche Laufzeit und eine Webvorschau keine native Freigabe.

Gegenprobe: Kann jemand anhand der Seite eine Animation wählen oder weglassen, ihr Rezept finden, eine erneute Eingabe behandeln und die reduzierte Alternative verstehen? Zeigt jeder sichtbare Bereich eine andere Entscheidung? Bleibt nach Entfernen einer Textwiederholung etwas fachlich Wesentliches verloren? Wenn nicht, streichen oder auf die Hauptfundstelle verweisen. Ein ausführlicher Teil ist sinnvoll, wenn er zusätzliches Verständnis liefert.

Der Skill setzt kein Framework, CMS oder MCP voraus. Eine reine Inhaltsausarbeitung liefert nicht automatisch die Vorschaukomponenten der Referenz. Übernahme oder Implementierung nur im beauftragten Umfang; keine Contracts, Pakete oder Veröffentlichung nebenbei ändern. Lokale Werte und Prüfergebnisse bleiben beim jeweiligen System.
