# Angrenzende Formularseiten: allgemeine Ziele und Projektbeispiel

Stand: 22. November 2026. Lokale Inhalts- und Darstellungsänderungen; keine Veröffentlichung.

## Umfang

- `scripts/content/page-reworks/page-type-create.ts` — CMS-Slug `shadcn-page-type-create`, Route `/systems/shadcn/page-type-create`.
- `scripts/content/page-reworks/page-type-edit.ts` — CMS-Slug `shadcn-page-type-edit`, Route `/systems/shadcn/page-type-edit`.
- `scripts/content/page-reworks/content-layout-form-layout.ts` — CMS-Slug `shadcn-content-layout-form-layout`, Route `/systems/shadcn/content-layout-form-layout`.
- `src/docs/page-reworks/page-type-create.tsx` und `src/docs/page-reworks/content-layout-form-layout.tsx`.

Der edit-Renderer wurde vollständig gelesen, benötigt aber keine Änderung: Er zeigt zusätzliche Textblöcke bereits in Inhaltsreihenfolge.

## Änderungen

Alle drei Seiten beginnen jetzt mit `goals` (Überschrift «Allgemeine UX-Regeln · …») und `example-scope` (Überschrift «Festlegungen für das Projektbeispiel»). Die Ziele betreffen verständlichen Kontext, Erhalt und Zuordnung von Angaben, Schutz vor unbeabsichtigtem Verlust, unterscheidbare Vorgangsergebnisse beziehungsweise lesbare Anordnung und erreichbare Aktionen. Sie legen kein Framework oder plattformspezifisches Bedienmuster fest.

Die unmittelbar anschliessende Einordnung nennt die konkreten Festlegungen des lokalen Webbeispiels. Projektstatus, Namensgrenzen, Prüfzeitpunkte, ausdrückliches Speichern, Dialoge, Rückwege sowie 640-px-Grenzen bleiben erhalten. Form Layout bezeichnet die einspaltige 640-px-Anordnung, 24-px-Gruppenabstände und Aktionsanordnung ausdrücklich als Projektbeispiel. Die bisherigen konkreten Layout-Anweisungen sind dort als Beschreibung dieses Beispiels formuliert. Weitere Beispielabschnitte tragen entsprechend eingegrenzte Titel.

Create und Form Layout zeigen die neuen Blöcke ausdrücklich vor der statischen Vorschau; Form Layout schliesst sie von der späteren Wiederholung aus. Die Inhalte der Quellen-/Prüfgrenzenblöcke bleiben bytegleich. Historische Angaben und `expectedUpdatedAt` wurden nicht verändert. Keine Änderungen an CSS, Contracts, Export, Suche, CMS oder Snapshots; kein Commit oder Push.

## Tatsächlich ausgeführte Prüfungen

- `npm run typecheck`: erfolgreich (Exit 0).
- Lokaler React-Server-Render aller drei Renderer mit den jeweiligen Release-Inhalten (`node --import tsx`, CSS-Import für diesen Node-Test ignoriert): erfolgreich. Geprüft wurden die sichtbaren allgemeinen Überschriften, die genau einmal sichtbare Einordnung und ihre Reihenfolge vor dem ersten Eingabefeld.
- Derselbe lokale Test vergleicht für jede Seite `expectedUpdatedAt` und den kompletten Abschnitt ab `text('sources', …)` mit Git HEAD: unverändert.
- `git diff --check` für die fünf geänderten Inhalts-/Rendererdateien: erfolgreich.

Die Prüfungen belegen die lokale Inhaltsstruktur, gerenderte Reihenfolge und Typkonsistenz. Browserdarstellung, CMS-/MCP-Gleichstand und Veröffentlichung sind damit nicht geprüft; das übernimmt der übergeordnete Freigabeablauf. Keine allgemeine Barrierefreiheits- oder Plattformfreigabe.
