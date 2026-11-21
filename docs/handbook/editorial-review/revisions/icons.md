# Icons: Redaktion

Gelesen: PAGE-BRIEF, Auditbericht und eigener Abschnitt 09 in pages.md; vollständige Release und vollständiger Renderer, einschliesslich aller vier Beispiele, des aufklappbaren Hinweises, der Suchzeichen-Erläuterung und der Quellen. Die zusätzlichen Icons-Texte in foundation-studies.tsx wurden geprüft. Der Spezialrenderer zeigt diese Studie nicht an, sondern nur deren Erläuterung und Quelle; daher dort keine Änderung.

Frischer MCP-Abruf für `shadcn` / `icons`: `updatedAt` = `2026-11-20T13:43:28.710Z`. Inhalt und Zusammenfassung entsprachen vor der Redaktion vollständig der bisherigen Release (IDs/null-Felder normalisiert). Dieser Zeitstempel ist als `expectedUpdatedAt` eingetragen.

Die bereits klaren vier Beispiele und der kurze Einstieg bleiben weitgehend erhalten. «Ein Tooltip darf ergänzen, aber keine unverständliche Oberfläche retten» lautet jetzt: «Ein Tooltip kann zusätzliche Hinweise geben; die Handlung muss auch ohne ihn verständlich sein.» Die Gestaltungsregeln sprechen die Leserin direkt an. «Informationstaste» wurde im Beispiel zu «Taste mit dem ‹i›»; der zugängliche Name bezeichnet weiterhin die Handlung. Die Quellenbeschreibung spricht von den Beispielen auf dieser Seite statt von einer «neuen Darstellung».

Erhalten: zweckbezogene Benennung reiner Iconaktionen, ergänzende Zeichen ohne doppelte Screenreader-Ansage, Textalternativen eigenständig informativer Zeichen, ignorierbare Dekoration, farbunabhängige Statusunterscheidung, statische Speicherbeispiele und Grenzen hinsichtlich Iconbibliothek, Lizenz, Plattformvarianten und allgemeiner Freigabe. SVG, ARIA, Interaktion und Styles wurden nicht verändert. Der Renderer benötigt keine zusätzlichen Textänderungen.

Prüfungen: `npm run typecheck` erfolgreich; gezieltes `git diff --check` erfolgreich. Strukturvergleich gegen die bisherige Release bestätigt Block-/Knotenreihenfolge, Typen, blockName, Anzahl der Textzeilen und Links. Überschriften bleiben unverändert. Die Suche nach eingehenden `/systems/shadcn/icons#`-Links ergab keine Treffer; es entstehen keine geänderten Anker.

Nach der Veröffentlichung BrowserQA in BrowserOS neo ausgeführt: ganze Seite mit allen vier Beispielen gelesen, den Entwurfshinweis sowie beide Vertiefungen geöffnet und gelesen. Vollseitige Screenshots bei 1440 × 1000 und 390 × 844 CSS-Pixeln visuell geprüft. Die Beispiele wechseln auf 390 Pixeln in eine Spalte; Überschriften, Hinweistext, redigierte Regeln und Quellen brechen ohne abgeschnittene Textzeilen oder überlappende Inhalte um. Kein sprachlicher Restbefund. Die ursprünglichen klaren Formulierungen bleiben erhalten. Keine erneuten SVG-, ARIA- oder Screenreader-Funktionsprüfungen; keine weitere Veröffentlichung. Eigene QA-Registerkarte anschliessend geschlossen.

DONE nach Veröffentlichung und BrowserQA.
