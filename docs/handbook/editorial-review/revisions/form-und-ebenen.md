# Form und Ebenen · Redaktion

## Gelesener Umfang

PAGE-BRIEF, Gesamtbericht und eigener Auditabschnitt 08; ganze bisherige Release, eigener Seitenrenderer sowie `Shape()` und `boundaries.shape` im gemeinsamen Studienrenderer. Frischer read-only MCP-Abruf für `shadcn` / `form-und-ebenen`: `2026-11-20T13:41:45.899Z`. Inhalt und Zusammenfassung stimmten vor der Redaktion nach Bereinigung generierter IDs mit der bisherigen Release überein. `check-page-rework.ts form-und-ebenen` bestätigte zusätzlich HTTP 200.

## Redaktion

- «Wie viel Grenze braucht der Inhalt?» wird zu «Wann braucht eine Gruppe eine Umrandung?». Die drei Beispiele erklären weiterhin offene, begrenzte und schwebende Flächen am selben Kontakt.
- «Grenze nur mit Zweck» entfällt als elliptischer Merksatz. Der Absatz erklärt unmittelbar, wann eine Umrandung gebraucht wird und wann ineinander verschachtelte Cards entfallen sollen.
- «Radius nach Komponente» und «belegter Radius» werden als Übernahme der Vorgaben der gewählten Komponente erklärt. Die Radiusüberschrift benennt den Komponentenexport als Herkunft.
- «Grössen und Innenräume sind schematisch» wird zu einer Erklärung von Grössen und inneren Abständen. Die Beispiele bleiben ausdrücklich unvollständige Komponentenabbildungen.
- Die Absätze zur Überlagerung benennen Auslöser, Untergrund, Fokusbewegung, Schliessen und die mögliche Bedienbarkeit des Hintergrunds in vollständigen Sätzen. Der Unterschied zwischen Kontur und Schatten und der statische Charakter bleiben erhalten.
- Quellen und aufklappbare Studienerläuterung wurden sprachlich durchgesehen. Es wird keine unveränderte historische Abschrift behauptet; historische Dateien und der referenzierte Export wurden nicht geändert.
- Im gemeinsamen Renderer ausschliesslich Texte in `Shape()` und `boundaries.shape` angepasst. Der eigene Seitenrenderer hat keine zusätzlichen Fachtexte und erforderte keine Änderung. «Gewichtung» kommt im eigenen Seiteninhalt nicht vor; andere Studien wurden nicht verändert.

## Erhaltung und Checks

- Checkbox 4 px, kleiner Button 6 px, Input/Standardbutton 10 px, Switch 9999 px als Pillenform, historischer Portalwert 7 px und vollständiger Exportpfad unverändert. Keine neue allgemeine Radius-, Schatten- oder Ebenenskala; keine Anwendungsfreigabe.
- Gestaltungsregeln zu Gruppierung, Umrandung, Komponentenradius und Überlagerung erhalten. Prüfung dunkler Flächen, beider Themes, veränderter Kontraste, langer Inhalte, schmaler Ansichten und echter Overlaybedienung erhalten. Statische Beispiele bestätigen weiterhin kein Dialog-/Popoververhalten.
- Strukturvergleich gegen frischen MCP-Inhalt erfolgreich: acht Blöcke, bestehende IDs, blockName, Typen, Reihenfolge, Knotenstruktur, Anzahl und Position der Textzeilen sowie Linkziele erhalten. Die bisherigen CMS-IDs wurden in die vorher ID-lose Release übernommen. `expectedUpdatedAt` entspricht dem frischen Abruf.
- Eingehende `form-und-ebenen#`-Links in `src`, `scripts` und `docs` gesucht: keine gefunden. Drei automatisch erzeugte Anker ändern sich: `abschnitt-wie-viel-grenze-braucht-der-inhalt` → `abschnitt-wann-braucht-eine-gruppe-eine-umrandung`; `abschnitt-belegte-radien-nach-komponente` → `abschnitt-radien-der-komponenten-aus-dem-export`; `abschnitt-eine-grenze-verandert-die-bedeutung` → `abschnitt-wie-kontur-und-schatten-eine-flache-verandern`.
- `npm run typecheck`: erfolgreich. `git diff --check`: erfolgreich.
- Keine CMS-Schreibzugriffe durch den Redaktionsagenten.

## Browserprüfung nach Veröffentlichung

- Die durch Root veröffentlichte Seite in BrowserOS neo vollständig gelesen: Einstieg, alle drei Vergleichsflächen, drei Entwurfsregeln, Kontur-/Schattenvergleich, vier Radiusbeispiele, Produktprüfung und Nachbarthemen.
- Beide Details über ihre sichtbaren Zusammenfassungen geöffnet; der Browser-Diff bestätigte `expanded` und die eingeblendeten Absätze. Quellen, offene Festlegungen und ergänzende Studienerläuterung nochmals gelesen.
- Ganze Seite bei 1440 × 1000 und 390 × 844 CSS-Pixeln mit geöffneten Details als Screenshots visuell geprüft. Vergleichsflächen und statische Überlagerungen stehen breit nebeneinander und schmal untereinander; Radien breit in vier und schmal in zwei Spalten. Neue Überschriften, Hinweise und «Input und Standardbutton» umbrechen lesbar. Der lange Exportpfad und Revisionshash bleiben auch schmal im Inhaltsbereich.
- Bei 390 Pixel Viewportbreite beträgt die gemessene Dokumentbreite 390 Pixel. Kein horizontaler Überlauf in dieser Ansicht. Kein konkreter sprachlicher Restbefund in der geprüften Ausgabe.
- Die gemeinsame `Shape()`-Studie wird auf dieser Zielseite nicht zusätzlich gerendert; dort erscheint ihre überarbeitete Erläuterung als Detail. Keine anderen Seiten zur Prüfung dieser Beschriftungen geöffnet. Keine erneuten Token- oder Overlayverhaltenstests durchgeführt.
- Eigene Browsertab nach Abschluss gemäss Browserhinweis geschlossen. Keine weitere Veröffentlichung.

DONE
