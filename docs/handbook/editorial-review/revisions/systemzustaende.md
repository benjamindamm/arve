# Systemzustände gestalten · Redaktion

Vollständig gelesen: PAGE-BRIEF, Auditbericht und eigener Abschnitt 37 in `pages.md`, eigene Release sowie Renderer einschliesslich aufgeklappter Empty-Hinweise und Quelle. Der Renderer enthält keine zusätzlichen redaktionellen Texte.

Vor der Redaktion wurden Inhalt und Zusammenfassung der Release gegen `get_documentation_page` (`system: shadcn`, `section: systemzustaende`) abgeglichen: gleich nach Normalisierung von CMS-IDs und Nullfeldern. Frisches `updatedAt`: `2026-11-20T14:36:42.077Z`; als `expectedUpdatedAt` übernommen. Kein Snapshotimport.

- «Erstleere», «Nulltreffer» und «unklarer Speicherausgang» heissen jetzt wie auf der Zielseite «Noch keine Daten», «Keine Suchtreffer» und «Speicherung nicht bestätigt». Laden, Fehler und Nichtverfügbarkeit bleiben ausdrücklich unterscheidbar.
- Der Formularverweis beschreibt nun die unbestätigte Speicherung nach dem Senden und das Verhalten beim Verlassen.
- «Bisheriger Inhalt und Quelle» wird als «Empty-Komponente und Quelle» konkret benannt. Der Einleitungssatz erklärt die Ergänzung zur ausführlichen Zustandsseite. Die bereits klaren ursprünglichen Empty-Hinweise und Rechnungsbeispiele bleiben unverändert.

Erhalten: drei Fachziele mit exakten URLs einschliesslich `#abschnitt-ergebnis-unbekannt`, externe Empty-Quelle, alle sieben Blöcke, Blocknamen, Knotenstruktur und Reihenfolge. Navigation und Renderer bleiben unverändert. Keine neuen Beispiele, Regeln oder Freigaben.

Prüfungen: `npm run typecheck` erfolgreich; `git diff --check` erfolgreich. Ein Strukturvergleich mit der bisherigen Release bestätigt unveränderte Nichttextfelder, URLs, Zusammenfassung und die drei ursprünglichen Empty-Blöcke. Suche in `src`, `scripts/content` und Handbuchdokumentation ergab keine eingehenden Fragmentlinks auf `systemzustaende`; die geänderte Aufklappbeschriftung erzeugt zudem keinen Überschriftenanker.

Nach Veröffentlichung durch Root wurde die ganze Seite in BrowserOS neo gelesen, einschliesslich geöffneter Empty-Details. Screenshots mit echten Ansichtsbreiten von 1440 × 1000 und 390 × 844 geprüft: alle drei Linktexte mit Erläuterungen und die Details vollständig lesbar, natürliche Umbrüche, keine abgeschnittenen Wörter. Die bekannten drei URLs werden korrekt ausgegeben; Zielseiten wurden nicht erneut geprüft. Kein sprachlicher Restbefund. Die lokale Next.js-Entwicklungsanzeige überlagert im mobilen Screenshot einen kleinen Teil des Empty-Absatzes; sie gehört nicht zum redigierten Seiteninhalt. Emulation anschliessend zurückgesetzt und eigener QA-Tab geschlossen.
