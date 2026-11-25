# Layoutseiten gezielt erarbeiten

Stand: 24.11.2026. Der Layoutbereich unterscheidet Aufgabe, Seitenanordnung und kombinierbare Inhaltsmuster. Konkrete Produktpiloten und Demos stehen unter Beispiele.

## Zuständigkeiten der Skills

| Skill | Führende Frage | Abdeckung |
| --- | --- | --- |
| [Seitenaufgaben](../../../.agents/skills/arve-page-types-handbook/SKILL.md) | Was soll eine Person hier erreichen? | PGT-01–12; Suche/Übersicht, Dashboard/Auswertung, Katalog/Serviceeinstieg, Detail Erstellen/Bearbeiten und Prüfen/Entscheiden |
| [Seitenanordnungen](../../../.agents/skills/arve-page-layouts-handbook/SKILL.md) | Wie verteilen sich die grossen Bereiche auf der verfügbaren Fläche? | PGL-01–15; ein Inhaltsbereich, Hauptinhalt mit Ergänzung, Raster, Abschnittsfolge sowie Rahmen/Navigation |
| [Inhaltsmuster](../../../.agents/skills/arve-content-layouts-handbook/SKILL.md) | Wie gehören Informationen oder Eingaben innerhalb eines Bereichs zusammen? | CTL-01–12; Eigenschaften, Formulargruppen und Abschnittsköpfe; diese Muster lassen sich kombinieren |

Nur den führenden Skill und die relevante Vertiefung laden. Die Fragen definieren fachliche Abdeckung und nötige Rückfragen, keine feste Überschriftenfolge. Der gemeinsame Inhaltsstandard LAY-01–05 bleibt die Grundlage. Seitentyp, Spaltenzahl und Cardhülle sind verschiedene Entscheidungen.

Nach jeder Anwendung oder jedem Review die betroffenen Skills und Fragen mitprüfen und übertragbare Erkenntnisse zurückführen. Lokale Werte und tatsächliche Nachweise gehören ins Anwendungsprotokoll. Historische Beispielregeln nicht als allgemeine Pflicht übernehmen.

## Aktueller Seitenbaum

```text
Layouts                                      /layout
├─ Seitenaufgaben                            /page-types
│  ├─ Übersicht und Suche                    /overview-search
│  ├─ Dashboard und Auswertung               /dashboard-analytics
│  ├─ Katalog und Serviceeinstieg             /catalog-service
│  ├─ Detailansicht                          /detail
│  ├─ Erstellen und Bearbeiten                /create-edit
│  └─ Prüfen und Entscheiden                  /review-decision
├─ Seitenanordnungen                         /page-layouts
│  ├─ Ein Inhaltsbereich                     /single-content
│  ├─ Hauptinhalt mit Zusatzbereich           /main-sidebar
│  ├─ Kartenraster                           /card-grid
│  └─ Abschnitte untereinander                /sections
├─ Inhalte anordnen                          /content-layouts
│  ├─ Eigenschaften und Werte                /label-value
│  ├─ Formularfelder und Gruppen              /form-layout
│  └─ Abschnittskopf und Aktionen             /section-header
├─ Seitenrahmen und Navigation               /seitenrahmen
└─ Beispiele                                 /beispiele
   ├─ Projektpilot                           /projektpilot
   │  └─ Detail / Bearbeiten / Erstellen / Formular als Ansichten
   ├─ Hauptinhalt mit Zusatzinfos              /detail
   ├─ Einstieg über vier Karten               /uebersicht
   └─ Breite Aktivitätsliste                  /arbeitsflaeche
```

Die Abschnitte werden an den jeweiligen Elternpfad angehängt, mit Systembasis `/systems/<system>`. Beispiel: `/systems/shadcn/layout/page-layouts/main-sidebar`. Deutsche Titel und stabile technische Kennungen dürfen sich unterscheiden.

23 sichtbare Seiten ersetzen die frühere Mischung aus 18 CMS-Seiten und drei separat eingespritzten Demos. Drei zusätzliche Weiterleitungsdatensätze behalten ihre bestehenden IDs/Versionen, stehen aber nicht im Navigationsbaum oder Suchindex. Die neue Zahl ist kein Umfangsziel: Entscheidend sind weniger konkurrierende Einstiege und klare Zuständigkeiten.

## Zusammenführung und Herkunft

- Narrow/Wide sind Varianten von **Ein Inhaltsbereich**.
- Drei-/Vier-Spalten-Raster stehen gemeinsam unter **Kartenraster**; Gleichrangigkeit und Gewichtung werden vor der Spaltenzahl erklärt.
- Abschnittsfolgen setzen keine Cardhülle voraus.
- Erstellen/Bearbeiten teilen eine allgemeine Anleitung mit ihren Unterschieden.
- Die vollständigen früheren Pilotinhalte aus Detail, Bearbeiten, Erstellen und Form Layout liegen gemeinsam im **Projektpilot**. Allgemeine Seiten setzen dessen Name-/Statusmodell, Zeichenlimits und Rückkehrparameter nicht voraus.
- Die drei ehemaligen virtuellen Demos sind echte CMS-Seiten unter **Beispiele**, mit Textaussage und Verweis zum passenden Rezept.

Die Umstellung und ihre Prüfungen stehen in [Strukturmigration](restructure-verification.md). Der frühere Main+Sidebar-Durchlauf und sein Review bleiben in [Main+Sidebar](main-sidebar-application.md) erhalten; die anfängliche [Eigenprüfung](trial.md) ist historisch.

## Pflege

Neue Anleitungen aus der Aufgabe und vorhandenen Quellen entwickeln. Breiten-, Spaltenzahl- und Rahmenvarianten zunächst innerhalb eines Rezepts erklären. Einen neuen Eintrag nur anlegen, wenn er eine eigenständige Auswahlentscheidung vermittelt. Beispielinhalte sollen diese Entscheidung zeigen; keine technischen Produktverträge in den allgemeinen Lernweg kopieren.

Kanonische Layoutpfade entstehen aus den tatsächlichen CMS-Elternbeziehungen. Alte shadcn-Adressen sind in `src/docs/layout-legacy.json` als Kompatibilitätseinstiege geführt. Änderungen an dieser Tabelle gegen die echte Hierarchie prüfen, nicht die Tabelle als primäre Inhaltsstruktur pflegen.

Die Aufgabenfamilie Prüfen und Entscheiden ergänzt die bisherige Auswahl. Arbeitsvorrat und Konfiguration sind Varianten innerhalb bestehender Familien. Die Ableitung ist in [Aufgabenergänzung](task-extension.md) festgehalten.
