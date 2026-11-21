# Icons, Bewegung und Ebenen: Themenwegweiser

## Gelesener Umfang und Entscheidung

`PAGE-BRIEF.md`, den Redaktionsbericht und den eigenen Abschnitt 11 in `pages.md` gelesen. Die ganze aktuelle Release und der vollständige Renderer wurden gelesen: Zusammenfassung, eine Überschrift, drei Themenlinks und der zusätzliche Link zur Grundlagenübersicht. Der Renderer enthält keine eigenen fachlichen Texte und keine Vertiefungen.

Die Formulierungen bleiben erhalten. «Die Inhalte dieser früheren Sammelseite findest du jetzt in drei eigenen Grundlagen» erklärt den Zweck knapp und natürlich. Auch «Die passende Grundlage öffnen» und die drei beschreibenden Themenlinks sind verständlich. Es gibt deshalb keine künstlichen Vorher/Nachher-Ersetzungen, keine zusätzlichen Beispiele und keine neue Struktur.

## Abgleich und Erhaltung

Am 20. November 2026 frisch über MCP `get_documentation_page` mit `system: shadcn`, `section: icons-bewegung` gelesen. Inhalt und Zusammenfassung sind nach Entfernen der vom CMS vergebenen IDs exakt gleich zur bisherigen Release. Das gelesene `updatedAt` `2026-11-20T13:46:09.130Z` wurde als `expectedUpdatedAt` übernommen; das ist die einzige Releaseänderung.

Die drei Themenziele, der zusätzliche Übersichtslink, URL, Blockstruktur und Renderer bleiben unverändert. Keine Änderungen an Beziehungen, Quellen oder der bestehenden Navigationsausblendung. Eine repositoryweite Suche nach `icons-bewegung#` beziehungsweise `icons-bewegung.*#` (ohne Snapshot und Lockdatei) ergab keine eingehenden Ankerlinks. Die Überschrift bleibt ohnehin unverändert.

## Tatsächliche Prüfungen

- Frischer read-only MCP-Abruf und programmatischer Vergleich von Inhalt und Zusammenfassung: erfolgreich.
- `npm run typecheck`: erfolgreich.
- `git diff --check` für eigene Release, Renderer und Bericht: erfolgreich.
- `scripts/check-page-rework.ts icons-bewegung`: Release/CMS/MCP gleich, öffentliche Seite HTTP 200, neutrale Quelle bestätigt.
- Nach Root-Bestätigung, dass bei unverändertem Text keine CMS-Publikation nötig ist: BrowserOS neo bei 1440 × 1000 und 390 × 844 CSS-Pixeln geprüft. Die ganze kurze Seite mit Zusammenfassung, Überschriften und allen vier Inhaltslinkbeschriftungen gelesen und beide Screenshots betrachtet. Titel, Überschrift und längere Linktexte umbrechen auf 390 Pixeln lesbar und ohne sichtbaren Beschnitt. Kein sprachlicher Restbefund. Keine erneuten Zielseiten- oder Funktionsprüfungen, da Texte und Links unverändert sind. Eigene QA-Seite anschliessend geschlossen.
