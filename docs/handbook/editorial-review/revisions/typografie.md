# Typografie · Redaktion

## Gelesener Umfang

PAGE-BRIEF, Gesamtbericht und eigener Auditabschnitt 06; gesamte bisherige Release mit eingebundener Studie, eigener Renderer sowie `Typography()` und `boundaries.typography` im gemeinsamen Studienrenderer. Frischer MCP-Abruf für `shadcn` / `typografie`: `2026-11-20T13:38:04.290Z`. Vor der Änderung bestätigte `check-page-rework.ts typografie` die Gleichheit von Inhalt und Zusammenfassung mit der bisherigen Release sowie HTTP 200.

## Redaktion

- «Lesen braucht Rhythmus» wird zu «Zeilenlänge und Absätze gestalten». Die Absätze erläutern konkret Textbreite, Zeilenanfang und Absatzabstand.
- «Das aufgeklappte Lesemuster» wird zur aufklappbaren Textprobe. Textrollen, Abstände, Zahlenvergleich und begrenzte Aussagekraft bleiben vollständig erklärt.
- «Gestaltungsbeispiel · lokale Textproben bedienbar · systemweite Rollenskala offen» wird zu zwei Sätzen über die bedienbaren Textdarstellungen und die noch offene systemweite Skala.
- Die Entwurfsregel zur Texthöhe verwendet vollständige Handlungsanweisungen. Rollenbezeichnungen, konkrete Kontaktbeispiele, Beträge und die kurze Zusammenfassung bleiben erhalten.
- «Quellen und vollständige Herleitung» wird zu «Quellen und weitere Gestaltungsregeln». Die Einleitung benennt die sprachliche Überarbeitung der Erläuterungen; sie behauptet keine unveränderte historische Abschrift.
- Die Textprobe im Studienrenderer erklärt das Überfliegen, Gedanken pro Absatz und vergrösserte Abstände mit natürlichen Sätzen. Nur `Typography()` und `boundaries.typography` wurden dort angefasst. Der eigene Seitenrenderer enthält keine zusätzlichen fachlichen Texte und brauchte keine Änderung.
- Die aktuelle Release enthält die 14 bestehenden Blöcke als eigenständiges Literal mit ihren bestehenden IDs. Historische `foundationsRelease`, Quellenlinks und technische Definitionen bleiben unberührt.

## Erhaltung und Checks

- Rollen und Beispiele, Beträge, rechtsbündige gleich breite Ziffern, WCAG 1.4.12 mit Zeilenhöhe 1,5, Absatzabstand 2 em, Zeichenabstand 0,12 em und Wortabstand 0,16 em erhalten. Die Werte bleiben ausdrücklich Prüfwerte.
- Inter, Input 14 px / 20 px, der historische Basisradius 7 px, fehlende allgemeine Typografieskala und Prüfungen von Browserzoom, schmalen Ansichten, Schriftladung sowie Fallbackschrift bleiben erhalten. Die lokale 200%-Probe ersetzt weiterhin keine Produktprüfung.
- Strukturvergleich gegen den frischen MCP-Abruf erfolgreich: alle 14 Blöcke, IDs, blockName, Typen, Knotenreihenfolge und Textknotenanzahl unverändert. Alle vom Renderer ausgewerteten Textzeilen bleiben an ihren Positionen.
- Eingehende `typografie#`-Links in `src`, `scripts` und `docs` gesucht: keine gefunden. Die geänderte Zwischenüberschrift hatte damit kein gefundenes eingehendes Linkziel.
- `npm run typecheck`: erfolgreich. `git diff --check`: erfolgreich.
- Keine CMS-Schreibzugriffe durch diesen Agenten.

## Browserprüfung nach Veröffentlichung

- Am 20.11.2026 die veröffentlichte Seite in BrowserOS neo vollständig gelesen: kurzer Einstieg, kurze und lange Textprobe, Rollen, Entwurfsregeln, alle drei Beträge und geöffnete «Quellen und weitere Gestaltungsregeln» bis zu den Quellenlinks. Die überarbeiteten Formulierungen erscheinen im veröffentlichten Stand.
- Ganzseitenscreens bei 1440 × 1000 und 390 × 844 CSS-Pixeln visuell geprüft. Lange Titel, Kontaktadresse, Rollenbeschreibungen und die geöffnete Vertiefung umbrechen ohne sichtbare abgeschnittene Wörter oder Überlagerungen. Beträge bleiben sauber rechtsbündig. Kein neuer konkreter sprachlicher Restbefund.
- «Lange Inhalte» nur zum Lesen der vorhandenen zweiten Textprobe geöffnet. Keine erneuten Prüfungen von WCAG-Konformität, 200%-Darstellung, Browserzoom, Schriftladung oder Systemschrift vorgenommen.
- Konkrete Grenze des gewünschten Live-Nachweises: Der eigene Typografie-Seitenrenderer rendert den Studienblock als Überschrift, Erklärung und Quelle. `Typography()` und `boundaries.typography` aus dem gemeinsamen Studienrenderer werden hier nicht ausgegeben. Ihre Texte wurden im Quelltext redigiert und per Typecheck geprüft; ein Live-Nachweis dieser beiden gemeinsamen Texte wird daher nicht behauptet. Root wurde darüber informiert.
- Eigener QA-Tab danach geschlossen.

DONE
