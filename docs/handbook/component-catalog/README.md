# Komponentenseiten ausarbeiten

Der Ausgangsstand ist mit Arve-Commit `0c16bdc` gesichert. Ein frischer Agent bearbeitet jeweils genau eine Komponente gegen die ausdrücklich ausgewählte portable Shadcn-Revision. Der Button bleibt die bereits abgeglichene Vorlage. Alle 68 Seiten sind ausgearbeitet; zusammen mit dem Button umfasst das Handbuch 69 Komponentenseiten. Der Bearbeitungsstand steht in `progress.json`.

## Inhalt und Quellen

Pro Komponente gibt es einen redaktionellen Entwurf unter `scripts/content/component-docs/`, eine eigenständige Quellenprüfung unter `reviews/` und eine statische Illustration unter `public/component-examples/`. Alle neun Themen müssen sinnvoll ausgearbeitet sein; bei fehlender eigener Tastaturbedienung wird die tatsächliche Semantik erklärt. Der Auftrag ist in `AUTHORING.md` beschrieben.

Die Quellenprüfung bindet wichtige Aussagen an Dateihashes und konkrete JSON-Pointer oder Textstellen. Redaktionelle Empfehlungen bleiben als solche erkennbar. Ein korrekt auflösbarer Beleg allein beweist noch nicht, dass jede Aussage fachlich vollständig ist; deshalb werden die Ergebnisse zusätzlich gelesen und die Beispiele visuell geprüft.

## CMS und Darstellung

`src/docs/component-editorial.ts` überträgt die Entwürfe in gewöhnliche editierbare Payload-Textblöcke. Überschriften, Absätze, Listen und Bildverweise stehen dadurch sowohl im Portal als auch über MCP zur Verfügung. Die Illustration liegt als eigenständiges SVG vor; ihr Verweis, Alternativtext und die Kennzeichnung als statisches Beispiel werden mit dem Inhalt gespeichert. Eine Quelle wird dadurch nicht zur neuen Implementierung erklärt.

`ComponentHandbook` stellt diese Inhalte mit Abschnittsnavigation, lesbarer Textbreite und grosszügigen Abständen dar. Tastaturdetails, technische Einbindung und Quellen bleiben aufklappbar. Vorhandene Angular-Demos werden erhalten und ausdrücklich von statischen Illustrationen getrennt. Die ursprüngliche Exportvorschau bleibt zusätzlich verfügbar.

## Geschützte Übernahme

Der lokale Datenbankstand vor der Redaktion liegt in `.runtime/component-catalog/baseline.json`; er ist kein öffentlicher Seed. `scripts/adopt-component-catalog.ts` übernimmt nur zentral geprüfte Seiten aus `progress.json`. Abweichende Entwürfe, konkurrierende CMS-Änderungen und fremde Quellenrevisionen führen zum Abbruch. Änderungen dieses Durchlaufs werden zusätzlich als exakter letzter Übernahmestand festgehalten, damit spätere redaktionelle Korrekturen möglich bleiben, ohne fremde Änderungen zu überschreiben.

Die Übernahme ändert nur Zusammenfassung und redaktionelle Inhaltsblöcke. Seitenzuordnung, Reihenfolge, Contractpins, Plattformnachweise und andere Handbuchseiten werden dagegen geprüft. Frühere Inhalte bleiben durch Payload-Versionen und den gesicherten Ausgangscommit nachvollziehbar.

## Prüfungen

```sh
node --import tsx scripts/check-component-catalog.ts --component accordion
node --env-file=.env --import tsx scripts/adopt-component-catalog.ts
node --env-file=.env --import tsx scripts/adopt-component-catalog.ts --apply
```

Nach vollständiger Übernahme Snapshot erfassen und alle Seiten prüfen:

```sh
node --env-file=.env --import tsx scripts/bootstrap-handbook-export.ts
npm run check:component-catalog
node --import tsx scripts/check-component-catalog-mcp.ts
```

Diese Nachweise prüfen Struktur, genaue Quellenbezüge, Inhaltsgleichheit und Auslieferung. Sie ersetzen keine Laufzeitabnahme sämtlicher Frameworkimplementierungen oder allgemeine Barrierefreiheitsprüfung. Die tatsächlichen Resultate werden nach den Prüfungen als getrennte Berichte gespeichert.

Der Pages-Workflow prüft die Originalquellen der redaktionellen Referenz sowie die neun Themen und Contractbindung des veröffentlichten Snapshots. Die Formulierungen der neuen Seiten bleiben im CMS editierbar; die laufende CI verlangt keine wortgleiche Übereinstimmung mit dem Startentwurf. `--snapshot` prüft diese Gleichheit ausdrücklich für die erstmalige Übergabe. Eine Quellenprüfung des ursprünglichen Entwurfs gilt nicht automatisch für spätere fachliche Textänderungen.

## Abgeschlossener Stand · 21. November 2026

Alle 69 veröffentlichten Komponentenseiten haben neun ausgearbeitete Themen. Die 68 neuen Seiten enthalten eigene statische SVG-Beispiele und insgesamt 1.049 einzeln zugeordnete Prüfnotizen mit 660 Dateiverweisen. Alle Illustrationen wurden im Browser gelesen; ihre statisch veröffentlichten Bytes stimmen mit den Originaldateien überein.

Der Gesamtabgleich bestätigt den gleichen Inhalt in Payload, Snapshot und MCP. Alle 69 Seiten wurden bei 390 Pixeln auf überbreite Dokumente, neun Abschnittsanker und fehlerhafte geladene Bilder geprüft; es gab keine Auffälligkeiten. Ein frischer unabhängiger Leser prüfte alle 68 Einstiege und neun vollständige Seiten ohne belastbare Findings. Regulärer und statischer Build sowie die statische Link-/Dateiprüfung bestehen.

Nachweise: [Gesamtbericht](verification-summary.json), [Quellen und Übergabe](verification.json), [MCP](mcp-verification.json), [schmale Ansichten](mobile-verification.json), [SVG-Ausgabe](static-examples.json), [unabhängiger Leser](final-reader-review.json). Diese Nachweise betreffen Redaktion und Integration; sie sind keine allgemeine Implementierungsfreigabe sämtlicher Plattformen.
