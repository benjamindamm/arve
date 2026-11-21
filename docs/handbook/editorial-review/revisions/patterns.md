# UX-Patterns · Redaktion

Stand: 20.11.2026 · bereit für Root-Review und Veröffentlichung.

Vollständig gelesen: Zusammenfassung, Einstieg, alle 28 Patternkandidaten mit je drei Schritten, Kategorien/Tags und Beobachtungsgrenzen, beide nicht beobachteten Kandidaten, Fachseitenverweise und Quellenabschnitt sowie sämtliche zusätzlichen Filter-, Ergebnis-, Detail- und Aufklapptexte im Renderer. Gute, bereits verständliche Texte wurden beibehalten; am Renderer war keine Textänderung nötig.

Der bisherige Releaseinhalt und seine Zusammenfassung stimmten vor der Bearbeitung mit dem read-only abgerufenen MCP-Stand überein (`scripts/check-page-rework.ts patterns`). Die öffentliche Seite antwortete mit HTTP 200. Der zusätzliche MCP-Abruf lieferte `updatedAt: 2026-11-20T14:21:43.941Z`; dieser Wert steht nun als `expectedUpdatedAt` im Release.

Wichtige Änderungen:

- UX-001: «Kriterien entwerfen» → «Suchkriterien festlegen»; «Angewandten Kontext lesen» → «Aktive Filter erkennen». Vorläufige Eingaben und tatsächlich angewendete Kriterien bleiben unterschieden.
- UX-002: «Ein Nichttreffer zeigt eine leere Menge» → «Passt keine Zeile zum Suchtext, bleibt die Liste leer.»
- UX-018: «Einen Bereichshub aufrufen» → «Die Übersichtsseite eines Bereichs aufrufen.»
- UX-020: Die Vorschau benennt bearbeitbare Felder einer Vorlage und die getrennte Aktion zum Erstellen aus der Vorlage; sie behauptet keine ausgeführte Bearbeitung.
- UX-019 und UX-028: Die Zusammenfassungen beschreiben das Erkennen einer Auswahl beziehungsweise eines Links. Der jeweilige Quellenabschnitt hält weiterhin fest, dass kein Wechsel ausgeführt wurde.
- Beobachtungsgrenzen erläutern unter anderem den nicht beobachteten Verarbeitungsverlauf, die teilweise Zeilenauswahl, die gesondert geprüfte Rückkehr und die Einführung ohne Transaktionsabschluss in vollständigen deutschen Sätzen.
- «Zwei weitere Registervormerkungen» → «Zwei weitere Kandidaten ohne aktuelle Beobachtung». Der Einstieg unterscheidet die Nutzung der untersuchten Oberfläche von den Gestaltungsbeispielen auf den Fachseiten.

Erhalten: alle UX-IDs, Kandidatenstatus, Kategorien und Tags, Block-/Schrittkeys, URLs, Reihenfolge und Anzahl aller Blöcke und Textknoten. Beobachtete Fähigkeiten und alle Einschränkungen bleiben inhaltlich erhalten: unter anderem Reset erst nach erneutem Anwenden, nicht verlässliche Ergebniswerte/Datumsbereiche, offene Speicherung/Validierung, Unterschiede zwischen breiter und schmaler Ansicht, Zahlen und Abmessungen, Fokusbeobachtungen und ungeprüfte Rückwege. Keine neuen Beispiele oder Freigaben.

Ausgeführte Checks: `npm run typecheck` erfolgreich; `git diff --check` für die eigene Release erfolgreich. Ein struktureller Vorher/Nachher-Vergleich bestätigte gleiche Keys, IDs, Block-/Knotenreihenfolge und -anzahl sowie unveränderte Bildunterschriften mit Kategorien/Tags; weiterhin 28 Workflow-Blöcke. Suche nach eingehenden `patterns#`-Links in `scripts`, `src` und `docs` ohne Treffer (Snapshot ausgenommen). Geänderte Überschriften erzeugen andere Anker; kein fremder Seiteninhalt wurde verändert.

Nach Root-Veröffentlichung: BrowserOS-neo-Prüfung der veröffentlichten Seite bei 1440 × 1000 und 390 × 844 durchgeführt. Einstieg, Zusammenfassung, Filterbeschriftungen, alle 28 Katalogeinträge und aufgeklappte Register-/Quellenabschnitte gelesen. UX-001, UX-002, UX-018, UX-020 und UX-025 im Detail samt Beobachtungsgrenzen gelesen; UX-005 mit Kategorie «Eingeben» und Tag «conditional» ausgewählt. Die ID-Suche führte jeweils zum passenden Eintrag, Kategorie und Tags blieben auswählbar. Bei 390 Pixeln UX-005 und UX-020 mit geöffneten Grenzen sowie beide aufgeklappten Schlussabschnitte visuell geprüft: neue Überschriften, längere Schritte und Quellenabsätze umbrechen innerhalb ihrer Bereiche. Keine durch die Textänderungen verursachte Überlagerung oder abgeschnittene Formulierung beobachtet. Die historische Referenzanwendung wurde nicht erneut funktional geprüft.

Den kleinen sprachlichen Restbefund in UX-018 auf Root-Auftrag gezielt nachredigiert: «keine vollständige Reichweite» → «nicht alle Ziele wurden geprüft». Die Beschränkung auf sichtbare Ziele und einzelne Unterziele sowie der Hinweis zur Kachel bleiben erhalten. Frischer read-only-MCP-Abruf des veröffentlichten UX-018-Textes lieferte `updatedAt: 2026-11-20T16:30:29.160Z`; als `expectedUpdatedAt` übernommen. Die sachliche Textkontrolle bestätigt denselben begrenzten Prüfumfang. `git diff --check` für die eigenen Dateien erfolgreich. Kein erneuter vollständiger Browser-/Funktionsdurchlauf und keine eigene Veröffentlichung. Bereit für die abschliessende Root-Veröffentlichung. Keine CMS-Schreibzugriffe ausgeführt.
