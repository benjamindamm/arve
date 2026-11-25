# Seitenaufgaben ergänzen

25.11.2026. Auf Nutzerauftrag aus einer anonymisierten, repräsentativen Referenzuntersuchung abgeleitet. Keine identifizierenden Quellnamen oder Screenshots in Handbuchinhalte übernommen. Es wurden keine Vorgänge abgesendet, gespeichert oder freigegeben.

## Entscheidungen

- **Prüfen und Entscheiden** als sechste Familie: vorbereitete Angaben bewusst beurteilen, Umfang und Folgen verstehen und die passende Entscheidung treffen. Zwei Varianten: eigene Angaben vor einem verbindlichen Abschluss prüfen; fremd vorbereitete Vorgänge oder Änderungen freigeben. Abgrenzung zur Detailansicht und zu blossen Validierungsschritten ausdrücklich beschrieben.
- **Arbeitsvorrat** unter Übersicht und Suche: Handlungsbedarf, Stand, Frist und nächste Handlung statt lediglich Finden und Öffnen. Eine Statusspalte allein begründet keinen Arbeitsvorrat.
- **Konfiguration** unter Erstellen und Bearbeiten: aktuellen Zustand und Geltungsbereich verstehen, Optionen ändern und Auswirkungen klären; bei Bedarf mit Detailansicht und Serviceeinstieg kombinieren.

Mehrstufigkeit, Rückkehr, Sammelauswahl, Upload und Übermittlungsergebnisse bleiben bei den UX-Patterns. Ein eigener Kommunikationstyp oder Abschluss-/Belegtyp wurde mangels ausreichender Beobachtung nicht ergänzt. Die Taxonomie ist damit keine behauptete vollständige Abdeckung aller Produkte.

## Umsetzung und Nachweise

Die neue Seite liegt unter `/systems/shadcn/layout/page-types/review-decision`. Die sechs Aufgaben sind in der Gruppenübersicht verlinkt. Zwei umschaltbare Gestaltungsstudien erklären Abschlussprüfung und Freigabe; die gezeichneten Aktionen führen keine Produktvorgänge aus. Arbeitsvorrat wird durch eine eigene Liste mit Handlungsbedarf veranschaulicht.

Der Seitenaufgaben-Skill und sein Fragenkatalog v0.3 berücksichtigen die neue Familie, Rollen-/Folgenklärung und die beiden ergänzten Varianten. Der gemeinsame Seitenlayout-Skill bleibt für ihre Anordnung zuständig.

Migration: eine Seite neu angelegt, drei bestehende Seiten aktualisiert; keine Löschungen, keine Änderungen an Implementierungsdaten oder unbeteiligten Seiten. Inhalt in Datenbank und Referenzsnapshot übernommen.

Ausgeführte Prüfungen:

- TypeScript, Pfad-/Kopierprüfungen und MCP-Unitprüfungen bestanden; Skill-Formatprüfung bestanden.
- Neue Entscheidungsseite über lokalen MCP vollständig abgerufen und mit der redaktionellen Quelle verglichen; kompakter Abruf erfolgreich.
- Gestaltungsstudie bei 390 px visuell geprüft und Variante per Tastatur gewechselt. Bei 320 px keine gemessene Seitenüberbreite oder über den rechten Rand reichende Elemente. Keine produktive Berechtigungs-/Übermittlungsfunktion getestet.
- Statischer Build und Link-/Assetprüfung bestanden: 220 HTML-Dateien, 124 Handbuchdatensätze, 69 Komponenten, 63.074 interne Links, 2.955 verifizierte Assets.

Kein erneuter unabhängiger Designer-Review, keine mobile Vollprüfung des gesamten Layoutbereichs oder allgemeine Zugänglichkeitsfreigabe. Keine GitHub-Veröffentlichung in diesem Auftrag ausgeführt.
