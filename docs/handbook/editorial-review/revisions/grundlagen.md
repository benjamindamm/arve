# Grundlagen · Redaktion

Gelesen: PAGE-BRIEF.md, Auditbericht und eigener Abschnitt 03 in pages.md; vollständiger aktueller MCP-Inhalt; bisherige foundationsOverviewRelease einschliesslich ihrer beiden übernommenen Blöcke aus foundations-release; kompletter Spezialrenderer foundations-overview.tsx und die zugehörige Overview-Studie mit Textfassung und Quellenhinweis in foundation-studies.tsx.

Der read-only MCP-Abruf von get_documentation_page (system shadcn, section grundlagen) lieferte updatedAt `2026-11-20T13:30:59.939Z`. Zusammenfassung und Inhalt stimmten vor der Redaktion mit foundationsOverviewRelease überein, nach Ausblenden der zusätzlichen CMS-IDs und null-Felder. Die neue Release enthält den vollständigen aktuellen Inhalt als Literal einschliesslich IDs und null-Feldern; kein Snapshotimport und kein Rückgriff auf historische Seeds.

## Redaktion

- «Zusammenspiel ansehen: eine Oberfläche lesen» → «Beispiel: Informationen ordnen und die nächste Aktion hervorheben». Der CMS-Studientitel benennt dieselbe konkrete Entscheidung ohne das Präfix.
- «Label, Wert und Hilfe stehen näher zusammen als zwei eigenständige Felder» → «Beschriftung, Wert und Hilfe eines Felds stehen nah beieinander; zum nächsten Feld ist der Abstand grösser.» Auch die entsprechende Anmerkung im Beispiel erklärt nun beide Abstände.
- «Quellenbelegte Konzepte, lokale Exportwerte und eigene Gestaltungsstudien sind jeweils bezeichnet» → ein vollständiger Satz erklärt, welche Angaben aus Quellen, dem Export oder eigenen Studien stammen.
- Alle sieben Karten samt Linktexten und Vorschauen gelesen. Farbe, Typografie, Abstände, Form, Bewegung und Themes direkter formuliert; die bereits klare Icons-Karte erhalten. Die Typografievorschau sagt «Hilfe zum Feld». Die Bildunterschrift verweist in vollständigen Sätzen auf Beispiele und Werte.
- Overview-Studie: «Lege fest, wie andere dich erkennen» → «Lege fest, wie dein Profil angezeigt wird»; Anmerkungen und Geltungsgrenze konkretisiert. Keine anderen Studien oder gemeinsamen Figurenbeschriftungen geändert.

## Erhaltung und Checks

- 16 Blöcke, sieben Themenkarten, sämtliche IDs, blockName/null-Felder, Block-/Knotenreihenfolge, Linkziele, Typen und sonstige Strukturdaten per rekursivem Vergleich gegen den MCP-Abruf geprüft; ausschliesslich Prosa ausgenommen.
- Quellenherkunft, begrenzte Aussage der Webstudien, fehlender nativer iOS-/Android-Nachweis, fehlende Speicherung, fehlende Komponentenfreigabe und Trennung zwischen Komponentenwert und Systemregel erhalten. Keine Tokens, Freigaben, Funktionen oder Plattformfähigkeiten hinzugefügt.
- Suche nach eingehenden `grundlagen#`- und `grundlagen/#`-Links in src, scripts und docs ohne Treffer; keine fremden Seiten geändert. Historische foundations-release.ts und foundations-overview-release.ts unverändert.
- `npm run typecheck` erfolgreich; `git diff --check` erfolgreich. Textänderungen am Spezialrenderer sowie gezielt an Overview() und boundaries.overview; keine Styles, Tokens, Kontrastberechnungen oder anderen Studien verändert.
- Nach Roots Veröffentlichung am 20.11.2026 die frische Seite in BrowserOS neo gelesen: alle sieben Karten und Vorschauen, beide äusseren Details sowie die geöffnete vollständige Textfassung der Overview-Studie. Vollständige Screenshots bei 1440 und 390 CSS-Pixeln visuell geprüft. Neue Überschrift, Kartenbeschreibungen, Vorschautexte, vier Anmerkungen, Quellenhinweis und Geltungsbereich vollständig sichtbar; keine abgeschnittenen Wörter oder überlappenden Texte festgestellt. Die lange Beispielüberschrift bricht bei 390 px auf mehrere verständliche Zeilen um. Kein weiterer sprachlicher Restbefund. Das ist eine Prüfung der Texte und ihrer Lesbarkeit, keine Prüfung oder Freigabe von Tokens, Funktionen oder WCAG-Konformität. Eigenen QA-Tab anschliessend geschlossen.

DONE · veröffentlichten Stand redaktionell und visuell nachgeprüft.
