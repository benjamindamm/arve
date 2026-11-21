# Button · Redaktion

Gelesen: PAGE-BRIEF, Redaktionsbericht und eigener Auditabschnitt 41; vollständige Release mit allen sechs Vertiefungsblöcken, eigener Seitenrenderer, `Button()` in `component-studies.tsx` und Ankerbildung. Der Seitenrenderer gibt die Studie über `ComponentStudy kind="button"` aus; nur die Zusatztexte in `Button()` wurden angepasst.

## Änderungen

- «Gewicht folgt der Aufgabe» → «Die wichtigste Handlung hervorheben». Der Absatz erklärt die Entscheidung zwischen Haupt- und Nebenaktion und behält Default/Outline als die beiden lokalen Demo-Varianten bei.
- «Ruhigeres Gewicht» → «Weniger stark hervorgehoben, mit derselben verständlichen Beschriftung». Auch Einstieg, Regeln und Variantenvergleich benennen jetzt die sichtbare Hervorhebung.
- «Eine verständliche Handlung ist bereit, erhält sichtbaren Tastaturfokus» → «Ein verfügbarer Button macht die Handlung verständlich, erhält sichtbaren Tastaturfokus und löst bei Aktivierung einen Vorgang aus.»
- Beschriftung, Umbruch, Rückmeldungen, Fokuswechsel, Deaktivierung und Implementierungsgrenzen in ganzen Sätzen formuliert. Die Vertiefung wird als sprachlich überarbeitet bezeichnet, nicht mehr als unverändertes Original.

## Erhalten

Button/Default/Outline, alle Beispielaktionen, Klick/Enter/Leertaste, sichtbarer Fokus, Bedingungen für Fokus nach Dialog-/Kontextwechsel, Mehrfachaktivierung und Erklärung ausserhalb deaktivierter Buttons bleiben erhalten. Ebenso Beispielmeldung ohne Rechnungsdownload, Web-Preview, Umfang der bestehenden Prüfung (Klick/Deaktivierung), offene mobile/assistive/Contract-Prüfungen, fehlende Varianten- und Grössenfreigaben. Contractrevision `65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26`, Dateipfade und Links unverändert. Keine Demo-, Metadaten-, Contract- oder CMS-Änderung.

## Ausgeführte Prüfungen

- Read-only MCP `get_component_page(shadcn, button)`: bisherige Release und veröffentlichter Inhalt samt Zusammenfassung vor Bearbeitung identisch (normalisiert ohne IDs/null). Frisches `updatedAt` `2026-11-20T15:06:42.364Z` als `expectedUpdatedAt` übernommen.
- Strukturvergleich vor/nach Redaktion: zehn Blöcke, IDs, Typen, Reihenfolge, Rich-Text-Knoten und vom Renderer gelesene Zeilenzahlen unverändert. Vergleich mit HEAD bestätigt: `component-studies.tsx` ausserhalb `Button()` unverändert. Seitenrenderer und CSS unverändert.
- Eingehende Anker in `scripts`, `src` und `docs` gesucht: gefunden wurden nur `#live-beispiel`, `#plattformstand` und `#contract`; diese bleiben erhalten. Neuer automatisch erzeugter Anker der redigierten Überschrift: `#abschnitt-die-wichtigste-handlung-hervorheben`, vorher `#abschnitt-gewicht-folgt-der-aufgabe`; kein eingehender Verweis gefunden.
- `npm run typecheck` erfolgreich; `git diff --check` für eigene Änderungen erfolgreich.

## Browserprüfung nach Veröffentlichung

Die veröffentlichte Seite in einem eigenen BrowserOS-neo-Tab vollständig gelesen, einschliesslich aller sechs geöffneten Vertiefungen, Quellen und vollständiger Textfassung der Studie. Echte Ansichten mit 1440 × 1000 und 390 × 844 über Gerätemetriken und ganzseitige Screenshots geprüft. Neue Hervorhebungs- und Outline-Texte erscheinen korrekt. Überschriften, Regeln, Studienbeschriftungen und Quellen umbrechen lesbar; bei 390 px stehen Aktionspaar und Studienvarianten untereinander. Kein sprachlicher Restbefund und kein Abschneiden der redigierten Texte gesehen.

Keine erneuten Demo-Funktionstests und keine Contractprüfung ausgeführt. Gerätemetriken zurückgesetzt und eigenen Prüftab geschlossen. Redaktion und Browserprüfung abgeschlossen.
