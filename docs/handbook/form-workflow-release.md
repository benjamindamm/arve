# Formularweg · redaktionelle Ausarbeitung

Stand: 18. November 2026. Teilpaket Patterns, keine eigenständige Produktfreigabe.

## Umfang und Übergabe

`scripts/content/form-patterns-release.ts` exportiert `formPatternsRelease` mit drei bestehenden Seiten. Formular/Validierung führt mit der datenbasierten `workflowStudy`; Patterns verweist nach Aufgabe; Felder und Fehlermeldungen bleibt unter der bisherigen Adresse als knapper Wegweiser erreichbar. Die Formularvorlage muss bei der Integration geleert werden, damit keine zweite Regelfassung vor dem Inhalt erscheint. Root führt Schema, Renderer, Veröffentlichung und MCP-Abgleich aus. Dieses Teilpaket schreibt nicht in die Datenbank.

Der Ablauf unterscheidet Eingabe, Prüfung, Fehlerverständnis, Korrektur, Übermittlung, bestätigte Annahme, ausdrückliche Ablehnung und unbekanntes Ergebnis. `next` beschreibt die Zweige in menschlicher Sprache. Ein verlorener Antwortweg wird nicht als sichere Ablehnung dargestellt. Wiederholung setzt geklärte Nichtannahme oder gesicherte Vermeidung von Doppelungen voraus; diese Produktfähigkeit wird nicht behauptet.

Gemeinsames Beispiel nach direkter Abstimmung mit Content/Inklusion: Feld «Projektname», Aktion «Projekt erstellen», Bestätigung «Projekt erstellt». Content führt die Formulierungen; Inklusion führt den begrenzten Prüfweg. Pattern führt Ablauf, Prüfzeitpunkt, Wiederaufnahme und offene Produktentscheidungen. Die anderen Patternthemen wurden nur verlinkt, nicht neu ausgearbeitet.

## Herkunft und Annahmen

- Ausgangspunkt: `critical-review-2026-11-18.md` und `plans/patterns.md` im selben Handbuchordner.
- Aktuelle drei Seiten über BrowserOS neo gelesen. Formular zeigt die beschriebene Doppelung; Patterns enthält drei kurze Regelabsätze; Felder und Fehlermeldungen dupliziert Label-/Fehlerhinweise.
- Primärquelle am 18.11.2026 gezielt gelesen: [WAI Forms Tutorial – User Notifications](https://www.w3.org/WAI/tutorials/forms/notifications/), insbesondere Overview, Listing errors, After submit, During typing und On focus change. Belegt Rückmeldung zu Erfolg/Fehler, verständliche Korrekturhinweise, Feldbezug und verlinkte Fehlerlisten; zeigt mehrere Zeitpunkte und Fokusmöglichkeiten.
- Eigene redaktionelle Entscheidungen: erster Gesamtversuch als Prüfzeitpunkt, bedingte frühe Feldprüfung, Fokus zur Übersicht bei mehreren Fehlern bzw. zum eindeutig betroffenen Feld bei einem Fehler, Versand-/Unklarheitszweige und Wiederaufnahme. Keine Normvorgabe aus diesen Vorschlägen ableiten.
- Speicherung, Statusabfrage, Doppelungsvermeidung, Entwurfspersistenz und native Umsetzung sind hier nicht nachgewiesen.

Root übermittelte die rein lesend bestätigten Baselines: `shadcn-patterns` ID 12, `2026-11-13T12:43:02.775Z`; `shadcn-formulare-validierung` ID 20, `2026-11-17T22:59:27.677Z`; `shadcn-felder-und-fehlermeldungen` ID 45, `2026-11-17T22:33:55.259Z`. Parent, Reihenfolge und Seitentyp bleiben unverändert.

## Prüfstand dieses Teilpakets

Ausgeführt: Bestands- und Quellenlektüre sowie direkte fachliche Abstimmung. Der Source-Export verwendet `Page['content']`; Schema und generierte Typen liefert Root. Keine Datenbankschreiboperation, keine Demo-/Contractänderung, kein Commit oder Push. Browserprüfung der integrierten Ausgabe und MCP-Gleichheit gehören zur Integration; aus der statischen Studie folgt keine Formular-, Screenreader- oder Konformitätsabnahme.

Typecheck ausgeführt (`npx tsc --noEmit --pretty false`): zunächst nur ein Fehler im parallelen Integrationsstand, weil `form-inclusion-release` noch fehlte. Für `form-patterns-release.ts` wurde kein Fehler gemeldet; dies ist noch kein erfolgreicher Gesamtcheck. Root wiederholt den Gesamtcheck nach Zusammenführung.

## Integration und lokale Veröffentlichung

Der Koordinator hat alle drei Fachbeiträge zusammengeführt. Fünf bestehende Seiten wurden über `scripts/apply-form-workflow-release.ts --publish` transaktional aktualisiert: Formular/Validierung, UX-Patterns, der erhaltene Feld-/Fehlerwegweiser, Content Design und Barrierefreiheit. Die vorab im expliziten Lesemodus aufgenommenen IDs/Änderungsstände passten; der Import prüfte auch neuere Entwürfe und Änderungen innerhalb der Transaktion. Bestehende Template-Doppelungen wurden geleert. Andere Seiten, Demo-/Contractbindungen und Implementierungen blieben nach Rücklesevergleich unverändert. Doppelte automatisch ergänzte Weiterlesen-Links werden unterdrückt, wenn das CMS-Ziel bereits verlinkt ist.

`workflowStudy` und `messageComparison` sind registrierte CMS-Blöcke. Ihre sichtbaren fachlichen Inhalte stammen vollständig aus den veröffentlichten Blockdaten; die Renderer besitzen keine festen shadcn-Beispiele oder Systemlinks. Dieselben Daten werden über MCP ausgegeben und in die Suche aufgenommen. Die neue Ablaufstudie hat acht benannte Schritte/Ergebnisse mit expliziten Weiterwegen. Content Design vergleicht vier Meldungen samt Voraussetzungen. Der Inklusionsbeitrag wurde nach Review auf acht scanbare Abschnitte mit hervorgehobenen Aufgaben und Erwartungen verdichtet. Bestehende ältere Studien sind damit nicht automatisch auf diese Datenstruktur migriert.

### Ausgeführte Integrationsprüfungen

- TypeScript-Prüfung und `git diff --check` bestanden.
- `scripts/check-form-workflow-release.ts`: alle fünf veröffentlichten Seiten im Baum, Inhalt/Summary/Änderungsstand identisch zu MCP, keine verbliebenen Vorlagenkapitel, interne Inhaltslinks veröffentlicht; Suche nach «Ergebnis unbekannt» findet den Formularweg.
- BrowserOS: alle fünf Seiten bei 320, 390, 768 und 1280 CSS-Pixeln ohne horizontalen Dokumentüberlauf und ohne sichtbaren Runtimefehler.
- Desktop-Screenshots von Ablaufstudie, Meldungsvergleichen und Inklusions-Prüfschritten visuell kontrolliert; Meldungsvergleich zusätzlich bei 390 Pixeln. Der fachliche Link vom Formular zu Content Design wurde mit Tastatur aktiviert und das Ziel geprüft. Breitenemulation danach zurückgesetzt.

Diese Prüfungen betreffen die Handbuchveröffentlichung. Die dargestellte Erstellung eines Projekts ist keine neue ausführbare Formularfunktion. Serverfälle, vollständige Tastatur-/Screenreader-/Zoomabnahme eines Produktformulars und native Plattformnachweise bleiben offen; die Seiten kennzeichnen sie als Prüfaufträge bzw. Produktentscheidungen.
