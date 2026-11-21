# 4-column Card Grid · Sprachredaktion

Gelesen: PAGE-BRIEF, Auditbericht und eigener Abschnitt 20, vollständige aktuelle Release und Renderer einschliesslich Quellen-Details. Der Renderer enthält keine zusätzlichen redaktionellen Texte und bleibt unverändert.

Vor der Redaktion waren Release-Inhalt, Titel und Zusammenfassung mit dem frisch abgerufenen MCP-Stand gleich (`scripts/check-page-rework.ts card-grid-4x4` erfolgreich). Separater MCP-Abruf: `updatedAt 2026-11-20T13:59:40.358Z`; als `expectedUpdatedAt` übernommen. Der historische Quellenzeitpunkt im Text bleibt unverändert.

- «eigenständigen Informationseinheiten» wird anhand der vorhandenen Aufgaben, Hinweise und Vorlagen konkret erklärt.
- Der Einstieg benennt schlicht das statische Beispiel mit sechs Karten; der Teamhinweis und die Jahresberichtvorlage enthalten nun ausschliesslich Beispielinhalt. Ihre Layoutkommentare stehen in der Bildunterschrift. Die Quelle erklärt weiterhin die eigens gewählten Beispieldaten.
- Karten, Spalten und Umbruch werden in vollständigen deutschen Sätzen beschrieben. «Review» wird im Beispiel zu «Prüfung». Der bewusst englische Layoutname und die Kategorie `overview` bleiben erhalten.
- Die Quellenvertiefung trennt weiterhin Beobachtungen, lokale Beispielentscheidungen und fehlende Freigaben, formuliert diese aber direkt und verständlich.

Erhalten: neun Blöcke mit gleichen blockNames, Knotenreihenfolgen und Textzeilenzahlen; sechs Karten mit Projekten, Zahlen und Terminen; Spannen 2 + 1 + 1 / 4 / 2 + 2; variable Reihenzahl; 32/52 rem, 1 rem Abstand und Innenabstand; Containerbezug, Reihenfolge, kein Nachfüllen, Höhenregel und kein Masonry. HTML/CSS, Renderer, URL und sämtliche Überschriften bleiben unverändert. Es wurden keine neuen Beispiele ergänzt.

Prüfungen: `npm run typecheck` erfolgreich; `git diff --check` ohne Befund. Repositoryweite Suche nach `card-grid-4x4#` ohne Treffer; unveränderte Überschriften ändern ohnehin keine Anker. Keine Veröffentlichung durch diesen Worker.

Nach Veröffentlichung durch Root: Die öffentliche Seite in BrowserOS neo vollständig gelesen, alle sechs Karten und Gestaltungsregeln kontrolliert und die Quellen-Details geöffnet. Vollseitige CDP-Screenshots bei echten 1440 × 1000 und 390 × 844 CSS-Pixeln visuell geprüft. Texte und Überschriften brechen lesbar um; kein sprachlicher Restbefund. Die Projektkarten enthalten ausschliesslich Beispielinhalt, die Layoutbeschreibung steht darunter in der Bildunterschrift und bezieht sich ausdrücklich auf die breite Ansicht. Keine erneuten CSS-/Spannentests durchgeführt. Breitenvorgabe danach zurückgesetzt und eigenen Prüftab geschlossen.
