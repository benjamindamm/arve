# UX-Regeln, Beispiele und der Zugang über MCP

Stand: 22. November 2026. Ausgewählte Handbuchreferenz: shadcn. Vier frische Bereichsagenten bearbeiteten Rückmeldungen, Geltungsbereiche und Suche. Ein weiterer unabhängiger Leser entwickelte ausschliesslich über den MCP einen textlichen mobilen Reservierungsablauf. Framework-APIs, Laufzeitadapter und Banking-Fachregeln waren kein Abnahmekriterium.

## Was geändert wurde

### Ergebnis klären, bevor eine neue Aktion angeboten wird

Alert-Anleitung, Illustration und redaktionelle Varianten zeigen jetzt eine bestätigte Nichtannahme. Das Beispiel setzt zusätzlich eine behobene Ursache voraus. Die allgemeine Anleitung unterscheidet davon eine fehlende Antwort: Eingaben und Vorgangsbezug erhalten, Ergebnis klären, keine neue Aktion allein aus einem Verbindungsproblem ableiten. Eine sicher gegen doppelte Ausführung geschützte Wiederholung desselben Vorgangs bleibt ausdrücklich unterscheidbar. Die Icon-Studie verwendet denselben bestätigten Fehlerfall. Unveränderte rohe Quellenfixtures werden dadurch nicht zu einer neu geprüften Implementierung erklärt.

### Allgemeines Ziel vor dem Beispiel

Formulare und Validierung, Gestaltungs-Pilot, create, edit und Form Layout beginnen mit allgemeinen UX-Regeln. Der lokale Web-Projektpilot folgt unter einer ausdrücklich benannten Beispielgrenze. Namenslängen, Prüftakt, Spalten, Abstände und Pixelgrenzen bleiben als nachvollziehbare Beispielentscheidungen erhalten. Die bestehende Formular-Vertiefung und historische Quellenblöcke wurden bewahrt. Die Spezialansichten zeigen die neuen Abschnitte tatsächlich vor ihren Vorschauen; sie liegen nicht nur als ungerenderte CMS-Daten vor.

### Aufgaben finden statt IDs voraussetzen

Die Suche liefert einzelne Patterns mit ursprünglichem Kandidatenstatus, Grenzen und direktem Aufruf ihres tatsächlichen Quellabschnitts. Redaktionelle Suchbegriffe sind als Orientierung gekennzeichnet und erzeugen keine zusätzliche UX-Norm. Allgemeine Quellabschnitte können ebenfalls direkt gefunden werden. UX-021 verknüpft die vorhandenen allgemeinen Hinweise zu entscheidungsnotwendigen Informationen, Korrektur/Ergebnis und konkreten Aktionen.

Kostenbegriffe führen damit zur allgemeinen Informationsregel, nicht zu einer behaupteten Kostenberechnung. Ein allgemeiner Abschnitt aus Main+Sidebar verlangt dadurch weder eine Sidebar noch eine bestimmte Webanordnung. Begriffe rund um ein ungewisses Ergebnis führen zu Zustandsregeln statt zufälligen Erwähnungen.

## Veröffentlichung und Schutz vorhandener Inhalte

Genau sieben Seiten geändert: Alert, Icons, Formulare und Validierung, Gestaltungs-Pilot, create, edit und Form Layout. Vor Veröffentlichung wurden die bisherigen Releases aus HEAD gegen den tatsächlichen veröffentlichten CMS-Stand abgeglichen und fehlende neuere Entwürfe geprüft. Erst danach wurden veraltete Zeitstempelguards auf den nachgewiesenen Ausgangsstand gesetzt. Die Veröffentlichung prüfte nochmals den aktuellen Stand.

Im vollständigen Datenbankvergleich blieben 116 andere Seiten sowie Systemdaten, Implementierungen und Medien unverändert. Der öffentliche shadcn-Snapshot enthält weiterhin 116 Seiten; davon sind genau sieben geändert und 109 identisch. Alle Contractpins bleiben unverändert. Alert-Quellen und bisherige Contract-Claims wurden nicht umgeschrieben; neue Aussagen sind redaktionelle Entscheidungen.

## Tatsächliche Prüfung

- Quellen-/Strukturprüfung für Alert und exakter Vergleich mit dem neuen veröffentlichten Snapshot bestanden.
- Alle sechs geänderten Fachseiten: Release, CMS und vollständiger MCP-Inhalt gleich; Portal jeweils HTTP200.
- Redaktionelle Links: 63 Seiten, 117 Linkdefinitionen; Absatzbindung und unveränderte Absatztexte bestanden.
- MCP-Einheitenprüfungen inklusive Aufgabenwortschatz, falscher Treffer, Patternstatus, Geltung, direkte Quelllinks, Unsicherheitsbegriffe und Pagination bestanden. Kompakte HTTP-Abrufe samt Rekonstruktion und Pin-/Hash-/Pfadfehlern weiterhin bestanden.
- Typecheck, Produktionsbuild, statischer Build und statische Prüfung bestanden: 198 HTML-Dateien, 116 Handbuchseiten, 69 Komponenten, 59.415 interne Links und 2.955 geprüfte Assets, ohne Backend. Die bereits bekannte Produktionswarnung zum breiten Dateimuster in `library-skills.ts` bleibt unverändert.
- Mobil mit BrowserOS Neo bei tatsächlicher Breite 390: alle sechs Fachseiten und Alert ohne horizontalen Seitenüberlauf. Allgemeine Abschnitte und Beispielgrenzen stehen in richtiger Reihenfolge. Formulare/Form Layout und Alert-Illustration visuell geprüft; Alert-SVG vollständig geladen und lesbar. Icontext zur bestätigten Ablehnung und unbekannten Antwort vorhanden.

## Unabhängiger Handbuchzugang

Der neue Leser konnte eine Prüfseite mit Korrekturweg und getrennten Zuständen laufend, angenommen, abgelehnt und unbekannt begründen. Die allgemeinen Ziele wurden ohne Übernahme der lokalen 640-px- oder Namensregeln verstanden. Alert und allgemeine Fachseiten wurden als inhaltlich konsistent beurteilt.

Sein erster Durchlauf benannte noch einen Umweg von Kosten-/Zusammenfassungsbegriffen zu allgemeinen Regeln. Nach gezielter Ergänzung wurden alle vier verbleibenden Abfragen erneut über den echten MCP geprüft: Kosten und Gesamtbetrag führen unmittelbar zur allgemeinen Regel über entscheidungsnotwendige Informationen; Zusammenfassung und ungewisses Ergebnis führen zu den allgemeinen Formularregeln. Sämtliche drei UX-021-Fachverknüpfungen wurden vollständig gelesen. Kandidatenstatus und Quellenbegrenzungen blieben erkennbar; für diese geprüften Aufrufe fand der Leser keinen neuen konkreten Defekt.

## Grenzen

Die Abnahme umfasst diese konkreten Änderungen und Aufgaben, nicht jede denkbare Suchanfrage oder die gesamte Handbuchqualität. Ein textlicher Screenaufbau ist keine Nutzungsstudie, keine visuell geprüfte neue Anwendung und keine allgemeine Barrierefreiheitsfreigabe. Produktdaten, Kostenberechnung und rechtlich verbindliche Fachfolgen bleiben Produktentscheidungen. Die bestehenden Framework- und Contractquellen wurden nicht verändert.

Lokale technische Nachweise: `.runtime/ux-handbook-coherence/publication.json`, `snapshot-parity.json`, Ausgangs-/Folgezustände und Quellguards; `.runtime/mcp-compact/live-report.json`. Bereichsdetails stehen in den benachbarten `ux-feedback-fix.md`, `ux-scope-fix.md`, `ux-scope-neighbors-fix.md` und `ux-pattern-search-fix.md`.
