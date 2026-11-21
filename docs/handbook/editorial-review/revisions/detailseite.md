# Redaktion: Detailseite

Stand: 20. November 2026. Seite: `/systems/shadcn/detailseite`.

Die gesamte Seite wurde als zusammenhängende Anleitung gelesen und redigiert, einschliesslich der aufklappbaren Projektregeln und Quellenhinweise. Änderungen stehen ausschliesslich in der seitenbezogenen CMS-Release. Der Renderer enthält keine zusätzlichen Fachtexte und blieb unverändert. Es wurde kein Ersetzungsskript verwendet.

## Wichtige Änderungen

- «Der typische Regionsplan» wird zu «So ist die Seite aufgebaut». Die vier Punkte erläutern nun unmittelbar Rückweg, Projektangaben, Hauptinhalt und ergänzende Angaben. Der Schluss erklärt: Nicht jeder Seitenbereich braucht eine eigene Card; hier reichen Rücklink und Projektangaben mit Aktion.
- Anstelle von «die Detailidentität bleibt davon unabhängig» nennt der erste Punkt den konkreten Rückweg zur Projektübersicht. Die eindeutige Projektzuordnung erklären die nachfolgenden Angaben zu Name und ID.
- «Keine leere Sidebar, Card oder erfundene Verantwortung» wird als Gestaltungsentscheidung erklärt: Ohne fachlich vorgesehene Angaben entfallen zusätzliche Bereiche und Zuständigkeiten.
- «Rückkehrvertrag» wird zu «Zur Übersicht und aus dem Formular zurückkehren». Die Absätze beschreiben URL, Fokus und Formularrückkehr in vollständigen Sätzen. «unklarer Speicherausgang» heisst nun «der Fall, dass unklar ist, ob gespeichert wurde».
- Die Vertiefung löst verdichtete Zustands- und Layoutanweisungen auf. Sie erklärt die Grenze zwischen einer statischen Darstellung, einer technischen Fähigkeit und einer tatsächlich ausgeführten Prüfung.

Ein abschliessender Redaktionspass hat aufgeblähte Paraphrasen und Wiederholungen im Hauptteil gekürzt. Bedingungen für zusätzliche Inhalte stehen einmal am Ende der Seitengliederung; die Projektregeln bleiben in der Vertiefung vollständig erhalten.

## Fachliche Grenzen

Projektwerte, IDs, Status, zulässige Namenslänge von 1–80 Graphemclustern nach Entfernen äusserer Leerzeichen und unveränderte innere Leerzeichen bleiben erhalten. Gleiches gilt für q/status, UND-Suche, Rückkehrfokus, Browser-Zurück, Abbrechen und Speichern sowie die Abgrenzung unklarer Ergebnisse von bestätigtem Fehlen. Die Detailseite erfindet keine Regeln zum erneuten Speichern bei unbekanntem Ergebnis; dafür verweist sie weiterhin auf den Formularablauf. Zusätzliche Funktionen, Rollen und Zugriffs- oder Teilfehlerzustände wurden nicht ergänzt. Alle offenen Bedienungsprüfungen bleiben offen.

Die Vertiefung ist als aktuelle Erläuterung der Pilotentscheidungen gekennzeichnet, nicht als wörtliche historische Abschrift. Die historischen Ausgangsdateien und Quellenverweise wurden nicht geändert.

## Ausgeführte Prüfungen

- Frischer read-only MCP-Abruf mit `get_documentation_page`, system `shadcn`, section `detailseite`: Der abgerufene Inhalt und die Zusammenfassung entsprachen vor der Redaktion der bisherigen Release. Aktualisierungsstand: `2026-11-20T13:52:22.837Z`; dieser Wert steht als `expectedUpdatedAt` in der neuen Release. Kein Snapshotimport.
- Struktureller Vergleich gegen HEAD: Blockreihenfolge, Blocknamen, Anzahl und Struktur der Rich-Text-Knoten sowie sämtliche Quellen-URLs unverändert; nur Texte wurden redigiert.
- Suche nach eingehenden `detailseite#`-Verweisen in `src`, `scripts/content` und `docs` ohne den Snapshot: keine Treffer.
- `npm run typecheck`: erfolgreich.
- `git diff --check`: erfolgreich.

## Browserprüfung nach Veröffentlichung

Die anschliessend veröffentlichte Neufassung wurde in BrowserOS neo vollständig gelesen: Hauptteil, geöffnete Projektregeln und geöffnete Quellenhinweise. Die Beispielwerte Alpen, Bergsee, P-101, P-999, Aktiv und Archiviert sowie die Grenze von 1–80 Graphemclustern sind erhalten. Die früheren Ausdrücke «Regionsplan», «Detailidentität», «Objektkopf», «Rückkehrvertrag» und «Speicherausgang» kommen auf dieser Seite nicht mehr vor. Bei der erneuten Lektüre fiel keine weitere konkrete sprachliche Hürde auf.

Screenshots wurden bei 1440 × 1000 und 390 × 844 CSS-Pixeln visuell geprüft: Einstieg, Seitengliederung, Entwurfsregeln und geöffnete Vertiefung; zusätzlich die Quellenhinweise in der schmalen Ansicht. Texte und Aktionsbeschriftungen waren in diesen Ausschnitten vollständig lesbar. Die längeren Absätze und Aufklapptitel brachen ohne sichtbare Überlagerung oder Abschneiden um. Die schmale Seite hat entsprechend mehr vertikalen Umfang; aus den Satzlängen entstand kein erkennbarer Layoutfehler.

Beide Detailbereiche liessen sich nach Fokussieren mit Enter öffnen und wieder schliessen. Die Beispielaktionen führten wie angekündigt zu den Erläuterungsankern `#detail-edit-note` und `#detail-return-note`. Die sechs unveränderten Quellenziele wurden im Browser geladen und lieferten jeweils HTTP 200, einschliesslich `RE-1048?q=Hosting&status=open`.

Diese Prüfung betrifft Lesbarkeit, Textdarstellung, Linkziele und die Tastaturbedienung der beiden Aufklappbereiche. Sie ist keine Funktionsfreigabe für Projektaktionen, Speicherung, Formularabläufe, Screenreaderbedienung oder den beschriebenen Rückkehrfokus. Für diese Redaktion wurden keine weiteren CMS-Änderungen vorgenommen.
