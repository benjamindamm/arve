# Page types · Redaktion

## Gelesener Umfang

Seitenbrief, Redaktionsbericht und eigener Auditabschnitt 13; vollständige aktuelle Release mit allen vier Miniaturen, Erklärungen, Entscheidungshilfe und aufklappbaren Quellen/Prüfgrenzen sowie vollständiger Renderer. Die Aktionsbezeichnung «Projekt erstellen» wurde mit der create- und Formularseite abgeglichen.

Der MCP-Abruf von `get_documentation_page` (`system: shadcn`, `section: page-types`) bestätigte vor der Bearbeitung die Gleichheit von Inhalt und Zusammenfassung mit der bisherigen Release, abgesehen von CMS-IDs und Nullwerten. Frisches `updatedAt`: `2026-11-20T13:48:10.853Z`; als `expectedUpdatedAt` übernommen.

## Wichtigste Änderungen

- «Projekt anlegen» → «Projekt erstellen»; auch deutsche Typbezeichnung, Zusammenfassung, Erklärung und Abschlusszeile verwenden nun «erstellen». Die Abschlusszeilen nennen die jeweiligen Aktionen ausdrücklich: «Änderungen speichern» / «Projekt erstellen» oder «Abbrechen».
- «Eintragskontext» → «Angaben zum bearbeiteten Eintrag»; «Einstieg zum Eintrag» → «Links zu den einzelnen Einträgen». Die Beschreibungen benennen sichtbare Inhalte und Handlungen.
- «redaktionelle Schematiken» → «vereinfachte Beispiele». Die Vertiefung erklärt verständlich, welche Aussagen die Übersicht ermöglicht und welche Prüfungen im konkreten Produkt nötig bleiben.
- Die guten knappen Erklärungen der vier Aufgaben und die Entscheidungshilfe wurden bewahrt; die räumliche Anordnung wird als nachfolgende Wahl eines Page layouts erklärt.

## Erhalten und geprüft

- Sieben Blöcke; Typen, Namen, Knotenreihenfolge und Anzahl der vom Renderer gelesenen Zeilen bleiben identisch. Strukturvergleich mit der bisherigen Release erfolgreich.
- Linkziele, Miniaturwerte, Projektstatus, Felder und fachliche Grenzen bleiben erhalten. Vergleich der bestehenden Datenzeilen erfolgreich. Die geänderte Aktionsbezeichnung fügt keine Funktion hinzu; die Felder bleiben schreibgeschützt.
- Keine Renderer- oder Layoutänderung. Page types, overview, detail, edit und create bleiben bewusst englisch.
- Repositoryweit nach `/systems/shadcn/page-types#` gesucht: keine eingehenden Anker gefunden. Die Überschrift `create · Anlegen` wird `create · Erstellen`; dadurch wechselt der automatisch erzeugte Anker von `abschnitt-create-anlegen` zu `abschnitt-create-erstellen`.
- `npm run typecheck`: erfolgreich.
- `git diff --check` für eigene Release und Renderer: erfolgreich.

## Browserprüfung nach Veröffentlichung

Nach Veröffentlichung durch Root am 20.11.2026 in einem eigenen BrowserOS-neo-Tab die ganze Seite gelesen, einschliesslich aller vier Miniaturen und ihrer Beschreibungen, Entscheidungshilfe und Quellen/Prüfgrenzen. Die Vertiefung per Klick geöffnet und den aufgeklappten Zustand im Snapshot geprüft.

- 1440 × 1050 CSS-Pixel: vollständiger Screenshot mit geöffneter Vertiefung geprüft. Die vier Miniaturen erscheinen zweispaltig; neue Beschreibungen, Abschlusszeilen und Quellenabsätze sind vollständig lesbar.
- 390 × 844 CSS-Pixel: vollständiger Screenshot mit geöffneter Vertiefung und zusätzlicher Ausschnitt der Vertiefung geprüft. Die Miniaturen stehen untereinander. Abschlusszeilen, Beschreibungen und Quellenabsätze brechen innerhalb der verfügbaren Breite um; kein horizontales Abschneiden der eigenen Inhalte sichtbar.
- «create · Erstellen», «Projekt erstellen» und die beiden Abschlusszeilen erscheinen wie redigiert. Vorausgefüllte edit-Werte und leere create-Felder mit ihren Hinweisen sind vorhanden.

Kein sprachlicher Restbefund. Diese Prüfung betrifft Text und Darstellung; sie erteilt keine Funktionsfreigabe für die statischen Formularbeispiele. QA-Tab anschliessend geschlossen.
