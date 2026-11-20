# Referenz pflegen · Seitenreview

Status: veröffentlicht durch Root; abschliessende eigene Browser-QA bestanden.

## Ausgangsbefund

Am 20. November 2026 eigenen BrowserOS-neo-Tab auf `/systems/shadcn/referenz-pflegen` geöffnet, öffentlichen Text gelesen und Screenshot angesehen. Die Seite zeigte nach Titel/Kurzbeschreibung lediglich Registry-Verweis und Do/Don't. Ein nachvollziehbarer Pflegeweg mit portablem Export, Skills, Import und expliziter Seitenrevision fehlte.

MCP `get_documentation_page({system:'shadcn', section:'referenz-pflegen'})` lieferte `updatedAt: 2026-11-17T22:33:55.533Z` und drei Inhaltsblöcke. Diese sind im Release literal eingefroren, ohne Snapshotimport. Der ursprüngliche öffentliche Registry-Link blieb unverändert; keine Nachbarrepository-Pfade wurden als Voraussetzung ergänzt.

## Änderung

Anschauliches angenommenes Button-Beispiel mit fünf Übergaben: Quellenbeobachtung → UI-Contracts-Export inklusive portabler Leseskills → Arve-Import und Katalogregistrierung → bewusste Wahl von Bibliothek/Komponente/Revision auf der Seite → Prüfung/Veröffentlichung und Portal/MCP-Vergleich. Kurze Übergabekriterien bleiben direkt sichtbar. Technischer Importbefehl, Pfade, Hash und Prüfgrenzen sowie die drei Originalblöcke liegen in zwei zunächst geschlossenen Details-Bereichen.

Fachliche Texte kommen vollständig aus dem CMS-Release. Der Renderer ordnet diese Texte und besitzt einen allgemeinen Content-Fallback. CSS zeigt den Ablauf breit in zwei Spalten mit abschliessendem Schritt über beide Spalten; unter 720 px stehen alle Schritte untereinander. Lange Pfade/Hashes umbrechen. Details bleiben nativ per Tastatur bedienbar und haben sichtbaren Fokus.

Nachbarseiten werden verlinkt: Mitwirken für Teambeitrag/Review, Releases und Migrationen für drei Versionsstände, Technische Anbindung und MCP für lesenden Zugriff. Keine Katalog-, Pin-, Artefakt-, Registry- oder gemeinsamen Änderungen.

## Quellen und tatsächlich ausgeführte Checks

- Gezielt gelesen: Arve `README.md`, `scripts/import-contract-library.mjs`, `src/contracts/catalog.ts`, `.agents/skills/arve-ui-contracts/SKILL.md`, das vorhandene portable Paket (README, Manifest, dependencies, Leseskill), zugehörige Seiten-/Prüfwerkzeuge.
- Vorhandenes Paket `src/contracts/libraries/shadcn/65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26/package/`: read-only SHA-256-Prüfung aller 73 manifestierten Dateien, darunter zwei Skilldateien, und Gesamt-Revision aus sortierten Pfad/Hash-Paaren: PASS. Das ist ein Integritätsnachweis, keine umfassende Validierung des Importers oder der Komponenten.
- `npm run typecheck`: PASS.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts referenz-pflegen` ohne Publish: PASS, Preview meldet 8 Blöcke und erwartete Inhaltsänderung. Der bestehende gemeinsame Prüfer liest Payload mit `push:false`; kein CMS-Schreibzugriff.
- Keine Export-/Importausführung, CMS-Veröffentlichung, Pinänderung, Plattform- oder Barrierefreiheitsabnahme. Keine Commits/Pushes.

Nach Root-Veröffentlichung erneut eigene BrowserOS-neo-Tabs verwendet: Screenshots bei echten CDP-Ansichten 1440×1000 und 390×844 angesehen. Breit zeigt der Ablauf zwei lesbare Spalten; schmal stehen die Schritte untereinander. Snapshot bestätigt alle fünf Schritte. Beide Details zuerst geschlossen beobachtet und dann jeweils per Fokus + Enter geöffnet; Snapshot bestätigt beide als expanded. Offener Importcode und langer Revisionshash umbrechen schmal; Originaltext, Registry-Link und Do/Don’t bleiben sichtbar. CDP Page.getLayoutMetrics bestätigt bei offenen Details cssContentSize.width=390 und cssLayoutViewport.clientWidth=390, somit keinen Gesamtüberlauf im geprüften Zustand. Drei Nachbarziele in eigenen Tabs geöffnet und die erwarteten H1 bestätigt: Mitwirken, Releases und Migrationen, Technische Anbindung und MCP. Keine eigenen Darstellungsfehler gefunden; keine weitere Quelländerung erforderlich. Abschliessender CMS/MCP-Gesamtabgleich liegt bei Root. Eigene Tabs nach Rücksetzen der CDP-Ansicht geschlossen.

## Vier Dateien

- `src/docs/page-reworks/referenz-pflegen.tsx`
- `src/docs/page-reworks/referenz-pflegen.css`
- `scripts/content/page-reworks/referenz-pflegen.ts`
- `docs/handbook/presentation-review/pages/referenz-pflegen.md`
