# Seitenstruktur und Navigation · Redaktion

Stand: 20. November 2026. Release redigiert, durch Root veröffentlicht und anschliessend im Browser geprüft.

## Gelesener Umfang

`PAGE-BRIEF.md`, Auditbericht und eigener Abschnitt 29 in `pages.md`; gesamte aktuelle Release einschliesslich Seitenrahmen, Tabs, Sidebar, Cards, Rückweg und Quellenvertiefung sowie der gesamte eigene Renderer. Der Renderer enthält keine zusätzlichen redaktionellen Texte und bleibt unverändert.

Vor der Redaktion per MCP `get_documentation_page` gelesen: `shadcn`, `seitenstruktur-und-navigation`. Zusammenfassung und vollständiger Inhalt stimmten nach Normalisierung von IDs und null-Werten mit der bisherigen Release überein. Frisches `updatedAt`: `2026-11-20T14:18:52.178Z`; als `expectedUpdatedAt` übernommen. Kein Snapshotimport und kein CMS-Write.

## Wesentliche Änderungen

- «Globale Wege … geben Orientierung» erklärt jetzt, dass die Navigation den aktuellen Ort und aufrufbare Inhalte zeigt. Der zweite Satz nennt Suche, Filter und Listenposition als Rückkehrkontext.
- «Seitentitel und Hauptbereich führen» benennt jetzt die konkrete Aufgabe: Der Titel benennt die Seite, der Hauptbereich enthält ihre Inhalte und Aufgaben.
- «Ansichten eines Kontexts», «beständige Bereiche» und «Inhaltsnavigation» werden durch Beschreibungen desselben Objekts, wiederkehrender Ziele und der Auswahl anhand von Titel und Beschreibung verständlich.
- «fachführender Ablauf» und «synthetische Gestaltungsbeispiele» weichen einer direkten Erklärung des Suchpatterns und der Formulierung «für dieses Beispiel entworfen». Die Quellenvertiefung nennt weiterhin ausdrücklich die Grenzen der Vorschau.

## Fachliche Erhaltung und Checks

- Automatischer Vergleich gegen die bisherige Release: Block-/Knotenstruktur, Reihenfolge, Linkdaten und Anzahl der vom Renderer gelesenen Zeilen identisch. Beispielbeschriftungen, Projekttext, Angaben zur schmalen Ansicht und Listenstand unverändert.
- Bestehende Anforderungen erhalten: Trennung global/lokal; aktive Markierung; eigenständige Seiten mit Titel und Adresse; Pflichtschritte im geführten Ablauf; Tab-Auswahl, zugehöriger Inhalt und Tastaturbedienung; sichtbarer Menüzustand; keine überlagernde zweite Scrollfläche; Wiederherstellung von Suche, Filtern und Listenposition. Keine neue allgemeine Navigationsnorm ergänzt.
- `38 rem`, die Anordnung unterhalb der Schwelle, ausschliesslich bedienbarer Schemawechsel/Rücklink sowie Grenzen für Navigationsvertrag, Zustandswiederherstellung und allgemeine Barrierefreiheit erhalten. Quellenlinks unverändert. Keine CSS-, ARIA-, Funktions- oder Rendereränderung.
- Eingehende Links auf `seitenstruktur-und-navigation` mit Fragment in `scripts`, `src` und `docs` gesucht: keine Treffer. Geänderte Überschriften benötigen deshalb dort keine Anpassung anderer Seiten; interner Rücklink und seine dynamische ID bleiben unverändert.
- `npm run typecheck`: erfolgreich. `git diff --check` für eigene Release und Renderer: erfolgreich.

## Browserprüfung nach Veröffentlichung

Die veröffentlichte Seite in BrowserOS neo vollständig gelesen, alle drei Varianten Tabs, Sidebar und Cards ausgewählt und «Quellen und Prüfgrenzen» geöffnet. Einstieg, jeweilige Variantenerklärung, drei Regeln, Rückweghinweis, Beispielstand und vollständige Vertiefung gelesen. Die durch Root geglättete Formulierung «Die drei Anordnungen und das Projekt wurden für dieses Beispiel entworfen» ist veröffentlicht sichtbar.

Alle drei Varianten mit geöffneter Vertiefung bei echten 1440 × 1000 und 390 × 844 CSS-Pixeln über CDP aufgenommen und visuell geprüft. Überschriften, Beschriftungen, Erläuterungen, Rückkehrangaben und Quellenlinks brechen lesbar um; kein konkreter sprachlicher Restbefund und keine durch die Textänderung sichtbare Abschneidung oder Überlagerung. Die schmale Ansicht stapelt die Bereiche wie beschrieben. Breitenvorgabe danach entfernt und eigenen Prüftab geschlossen.

Dies war die redaktionelle Sichtprüfung des veröffentlichten Texts; keine erneute Navigations-, Fokus-, Quellen- oder allgemeine Funktionsfreigabe. Keine weitere Inhaltsänderung oder Veröffentlichung erforderlich.
