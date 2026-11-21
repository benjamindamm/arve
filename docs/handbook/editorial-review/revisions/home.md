# shadcn-Startseite: sprachliche Redaktion

## Gelesener Umfang

Die vollständige Startseite in `src/docs/shadcn-home.tsx`: Einstieg, vier Aufgaben, beide Beispielkarten samt Vorschautexten und vier Themenkarten. Dazu `PAGE-BRIEF.md`, der Redaktionsbericht und Abschnitt 01 in `pages.md`. Es gibt auf dieser Seite keine aufklappbaren Vertiefungen. Der bestehende Einstieg und die hilfreichen Überschriften «shadcn Handbuch» und «Was möchtest du gestalten?» bleiben erhalten.

Den aktuellen CMS-Stand über `get_documentation_page` für `system: shadcn`, `section: shadcn-uebersicht` gelesen: Titel `shadcn`, `summary: null`, `content: []`, `updatedAt: 2026-11-13T12:43:03.191Z`. Die sichtbare Prosa stammt aus dem statischen Renderer. Kein CMS-Write und keine Release-Datei erforderlich.

## Wichtigste Änderungen

- «Prüfaufgaben für den Formularweg» → «Barrierefreiheit in Formularen prüfen»: Die Karte benennt direkt, was auf der verlinkten Seite geprüft wird.
- «Vom Ausfüllen über die Korrektur zum Speicherergebnis.» → «So sehen Eingaben, Fehlermeldungen und Rückmeldungen nach dem Speichern aus.»: Das Beispiel wird aus Sicht der gestaltenden Person beschrieben; die künstliche Verdichtung entfällt.

Die übrige Seite wurde zusammenhängend gelesen und bewusst erhalten. Routen, Slugs, Arraystruktur, IDs, Überschriften, Vorschaubeispiele, CSS und Logik bleiben unverändert. Die Suche nach eingehenden Links mit Fragment auf `/systems/shadcn` ergab keine Treffer; es wurden keine Anker geändert.

## Checks

- `npm run typecheck`: erfolgreich.
- `git diff --check -- src/docs/shadcn-home.tsx docs/handbook/editorial-review/revisions/home.md`: erfolgreich.
- Diff gelesen: genau zwei Prosastellen geändert; keine Änderungen an Struktur oder Verhalten.

## Browser-QA nach Root-Review

Die vollständige Seite unter `http://127.0.0.1:3010/systems/shadcn` in BrowserOS neo gelesen und anhand zweier echter Ganzseiten-Screenshots visuell geprüft: Desktop mit 1440 × 1000 und schmal mit 390 × 844. Die Breiten wurden jeweils über `Emulation.setDeviceMetricsOverride` gesetzt und im selben Aufruf mit `Page.captureScreenshot` aufgenommen; nach der Prüfung wurde die Emulation aufgehoben.

Alle Bereiche bis zum Fussbereich geprüft. Beide neuen Formulierungen sind tatsächlich sichtbar. Der Formulartext belegt bei beiden Breiten zwei vollständig lesbare Zeilen; der neue Text zur Barrierefreiheit bleibt jeweils in einer Zeile. Kein abgeschnittener Text oder seitlicher Überlauf erkennbar. Überschriften, Karten und Vorschauen bleiben lesbar; auf schmalen Bildschirmen stehen die Karten untereinander. Es gibt keine aufklappbaren Details. Kein sprachlicher Restbefund.

Beobachtung zur lokalen Entwicklungsansicht: Die schwebende Next.js-Entwicklungsmarke liegt im schmalen Screenshot teilweise vor der Überschrift «Mit einem Beispiel starten». Das ist keine Folge der Textänderungen; der Seitentext selbst passt in die vorgesehene Breite.
