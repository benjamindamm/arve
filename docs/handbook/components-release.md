# Komponentenpaket: redaktionelle Umsetzung

Stand: 18. November 2026. Sechs bestehende Seiten, fünf registrierte HTML-Studien. Das Paket ist im lokalen Portal veröffentlicht. Schemaanbindung, Veröffentlichung und begrenzte Portalprüfung wurden durch den Koordinator abgeschlossen.

## Inhalt und Struktur

`scripts/content/components-release.ts` liefert `componentsRelease` mit sechs Seiten: Komponenten, Komponenten auswählen, Button, Input, Checkbox, Switch. `componentsReleaseBaseline` hält ID und Änderungszeit je Slug aus dem aktuellen veröffentlichten CMS. Der erneute Lesezugriff nutzte Payload im Produktionsmodus, `postgresAdapter({push:false})` und PostgreSQL `default_transaction_read_only=on`. Es wurden keine CMS-Daten geschrieben.

Der Komponentenindex führt über Aufgaben zu den vier Bausteinen. Der Leitfaden vergleicht Handlung/Navigation, freie/feste Werte und unabhängige Auswahl/Ein-Aus-Einstellung. Jede Detailseite folgt ihrer eigenen Gestaltungsfrage. Input ersetzt wiederholte Vorlagen-/Langtextabschnitte durch eine Feldstudie, kurze Entscheidungen und einen begrenzten Standhinweis. Exakte Pixelwerte und CEM-/SCXML-Erzählungen werden nicht erneut im redaktionellen Haupttext geführt. Die Geschichte früherer Abgleiche bleibt in `local-review.md` erhalten.

Die Inhalte behaupten keine zusätzlichen lokalen Komponenten: Loading, Fehler, Schreibschutz, Gruppen-/Mischzustand und dauerhafte Einstellungsübernahme sind jeweils als Kompositionsziel oder offene Fähigkeit bezeichnet. Die Switch-/Checkbox-Speicherkonvention ist ausdrücklich eine lokale Empfehlung. Nur Button hat aktuell einen veröffentlichten Web-Implementierungsdatensatz (Preview); Demos und registrierte Implementierungen sind unterschiedliche Sachverhalte.

## Integration

1. `componentStudy` als CMS-Block mit `kind` (selection/button/input/checkbox/switch), `title`, `explanation`, optional `source` und `revision` registrieren und Payload-Typen generieren. Die Release-Seiten verwenden ausdrücklich `Page['content']`; vor Typgenerierung kann die neue Discriminante noch nicht passen.
2. In Content-Renderer `ComponentStudy` einbinden, `src/docs/component-studies.css` laden. Kein Clientmodul und keine externe Bildabhängigkeit nötig. Die fünf Studien haben eine native Details-Textfassung; Beispiele selbst sind bewusst nicht fokussierbare, statische Darstellungen.
3. `summary` auf Komponentenseiten anzeigen. Bestehende Templatefelder bei diesen sechs Datensätzen leeren bzw. ihre doppelte Ausgabe vermeiden. Die veröffentlichte redaktionelle Quelle ist `content`.
4. Vor Schreiben ID/updatedAt gegen Baseline und mögliche neuere Entwürfe prüfen. Bestehende Component-IDs, Demo-Konfigurationen, Contractpins, Implementierungsdatensätze und Slugs erhalten. Nur die im Release bezeichneten redaktionellen Felder übernehmen. Elternbeziehungen via Slug auflösen.
5. `componentStudy` vollständig über MCP ausgeben; Suchindex berücksichtigt Erklärung und Herkunft. Jede wesentliche Aussage der Darstellung steht in `explanation`, zusätzlich zum sichtbaren Studieninhalt. Renderer und Erklärung gemeinsam reviewen.
6. Technischen Contractzugang erhalten, aber SCXML nicht automatisch zum aufgeklappten Hauptinhalt machen. Die Live-Demos bleiben getrennte Bereiche; Studiendesign ist keine Token- oder Contract-Konformitätsbehauptung.

## Gestaltung und Prüfumfang

Studien verwenden semantische HTML-Abschnitte, Überschriften, Listen und Definitionen. Responsive Container-Regeln stapeln Vergleiche bei wenig Platz. Lange Texte umbrechen, kein Bildtext und keine Animation. Markierungen sind dekorativ verborgen, während lesbarer Text Auswahl und Ein-/Aus-Zustand erklärt. CSS berücksichtigt Fokus der tatsächlichen Links/Details und Forced Colors. Studienfarben sind eigene Portalgestaltung, keine zusätzlichen Design-System-Tokens.

Ausgeführt durch den Komponentenagenten: aktueller CMS-Baselinezugriff im beschriebenen Lesemodus; Quellabgleich mit dem Audit, Grundlagenrelease und vorhandenen Demo-/Contractgrenzen. Die APG-Primärquellen für Button, Checkbox und Switch wurden im vorausgehenden Audit am selben Tag gelesen. Die verlinkten WAI-Formularquellen für Validierung und Beschriftung wurden für dieses Paket am 18.11.2026 erneut gelesen. Nach der Schemaerzeugung durch den Koordinator bestand `npm run typecheck`. Eine ausgeführte Inhaltsprüfung bestätigte sechs eindeutige Slugs, passende Baselineeinträge und fünf vollständig beschriftete Studien mit Textfassung. `git diff --check` für die vier zugewiesenen Dateien meldete keinen Befund. Keine Behauptung einer Browser-, Screenreader- oder Plattformfreigabe.

Für die Integration verbleibt: Typprüfung nach Schemaerzeugung; Veröffentlichung/Rücklesen; Vergleich CMS/MCP; visuelle Prüfung aller fünf Studien bei 320/390/768/1280 px und vergrösserten Textabständen; Tastaturbedienung der Studienlinks und Textfassungen; keine horizontalen Seitenüberläufe; Kontrolle der unveränderten Pins/Demos. Die realen Spartan-Demos sind durch statische Studien nicht mitgeprüft.

## Integrierter und geprüfter Stand

Die sechs Seiten wurden transaktional über `scripts/apply-components-release.ts --publish` aktualisiert und zurückgelesen. Die Baselines stimmten vor dem Schreiben. Pins, Component-IDs, Demo-Konfigurationen, Implementierungen und sämtliche anderen Seiten blieben unverändert. Ein zweiter Lauf bestätigte den wiederholbaren Import ohne weitere Inhaltsänderung. Bestehende redundante Templatefelder wurden geleert.

`componentStudy` ist in Payload, Portal, öffentlicher Serialisierung und Suche integriert. `scripts/check-components-release.ts` bestätigt für alle sechs Seiten Inhalt, Summary, Änderungsstand und Seitenbaum zwischen CMS und MCP; interne Inhaltslinks führen zu veröffentlichten Seiten. Bei den vier Komponenten sind Demo und gebundener Contract vorhanden, die Revision entspricht dem Seitenpin. Kurzbeschreibung und Sprunglinks stehen im Seitenkopf; Live-Beispiele erscheinen vor den Plattformnachweisen; Contractcode ist anfangs eingeklappt.

BrowserOS-Prüfung: Alle sechs Seiten bei 320, 390, 768 und 1280 CSS-Pixeln ohne horizontalen Seitenüberlauf. Screenshots der fünf Studien visuell geprüft: Button, Switch und Auswahlhilfe am Desktop; Input und Checkbox auf 390 Pixeln, einschliesslich langer Beschriftung. Die Textfassung wurde per Tastatur geöffnet und geschlossen. Die vorhandenen Checkbox-/Switch-Demos wechselten per Leertaste von false zu true. Die Breitenemulation wurde danach zurückgesetzt. Der erste Tastaturversuch mit dem Automationsnamen `Space` löste keinen Wechsel aus; die tatsächliche Leertaste funktionierte.

Abschliessend bestanden TypeScript-Prüfung und `git diff --check`. Nicht durchgeführt: vollständige Screenreader-/Touchprüfung, systematischer Textabstandstest dieses Pakets, native iOS-/Android-Prüfung oder vollständiger Demo-/Contract-Konformitätsnachweis. Diese begrenzte Prüfung ist keine allgemeine Komponentenfreigabe.
