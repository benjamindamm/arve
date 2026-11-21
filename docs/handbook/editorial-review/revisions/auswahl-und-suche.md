# Auswahl und Suche · Redaktion

## Gelesener Umfang

`PAGE-BRIEF.md`, Auditbericht und eigener Abschnitt 34 in `pages.md`; vollständige eigene Release und Renderer einschliesslich der drei unabhängigen Vorschauen, Regeln, Prüffälle, Quellen und historischen Vertiefung.

Der veröffentlichte Inhalt und die Zusammenfassung wurden am 20.11.2026 über `get_documentation_page` (system `shadcn`, section `auswahl-und-suche`) vor der Änderung mit der bisherigen Release verglichen: gleich, abgesehen von CMS-IDs und null-Feldern. Frisches `updatedAt`: `2026-11-20T14:30:18.333Z`, als `expectedUpdatedAt` eingetragen.

## Wichtige Änderungen

- «Wertvertrag benennen» wird zu «Welche Werte sind erlaubt?»; die anschliessenden Sätze erklären leeren Wert, Pflichtangabe, stabile Kennung und sichtbare Bezeichnung direkt.
- «Auswahl und Abschluss trennen» wird zu «Wann wird die Auswahl übernommen?»; Entwurf, lokale Bestätigung und Speicherung im Produkt werden verständlich unterschieden.
- «keine neue Selektionspolicy» wird zur konkreten Grenze: Die Bestätigung der lokalen Vorschau legt keine allgemeine Übernahmeregel fest.
- Die Beschreibung der Suche erklärt ausdrücklich: Sie grenzt Optionen ein, der Suchtext wird nie als Standort übernommen. Die bestehende Auswahl bleibt bei nicht passendem Suchtext erhalten.
- Die drei Auswahlformen, Prüffälle und Quellenabsätze wurden als zusammenhängende Anleitung gelesen und sprachlich geglättet. Gute Überschriften und kurze Beschriftungen bleiben bestehen.

## Fachliche Erhaltung

Bern, Basel und Zürich, Einzelauswahl, drei unabhängige Vorschauen und fehlende starre Mengenschwellen sind unverändert. Ebenso erhalten: keine Speicherung, keine shadcn-Combobox, getrennte Suche und Standortwert, Auswahl trotz nicht passender Suche, eigene Bestätigung je Vorschau, Mehrfachwahl-/Switch-Abgrenzung, zulässige Werte, Lade-/Leer-/Fehlerfälle, bisherige nicht verfügbare Werte, Berechtigungen, Tastaturgrenzen und assistive Prüfgrenze. Quellen und Beobachtungsgrenzen bleiben erhalten. Die drei eingefrorenen CMS-Blöcke sind unverändert.

Nur eigene Release und dieser Bericht geändert; Renderer, Verhalten, native Steuerelemente, HTML/ARIA und CSS unverändert.

## Ausgeführte Prüfungen

- `npm run typecheck`: bestanden.
- `git diff --check`: bestanden.
- Strukturvergleich gegen HEAD: Block-/Knotenstruktur, Reihenfolge und Textzeilenzahlen unverändert; die letzten drei historischen Blöcke exakt gleich.
- Suche nach `auswahl-und-suche#` in `scripts`, `src` und `docs`: keine eingehenden Abschnittslinks gefunden. Die bestehenden Überschriften bleiben unverändert.

## Browserprüfung nach Veröffentlichung

Am 20.11.2026 die veröffentlichte Seite mit BrowserOS neo vollständig gelesen, einschliesslich aller drei Vorschauen, Bildunterschriften, Entscheidungsregeln, Prüffälle und der geöffneten Vertiefung mit Quellen und den drei historischen Blöcken. Den von Root aktualisierten UX-003-Quellentitel «Zeitraum oder Konten auswählen» in der Ausgabe bestätigt.

Mit echten emulierten Breiten von 1440 × 1000 und 390 × 844 vollständige Screenshots mit geöffneter Vertiefung betrachtet: Die drei Karten, Beschriftungen, Regeln und Quellenlinks brechen lesbar um; keine abgeschnittenen Texte oder neuen sprachlichen Restbefunde festgestellt. Die historischen Texte sind verständlich und bleiben unverändert. Keine erneuten Combobox-/ARIA-Funktionsprüfungen ausgeführt. Ansicht danach zurückgesetzt und eigenen QA-Tab geschlossen.

Redaktion und begrenzte Browserprüfung abgeschlossen; kein weiterer Veröffentlichungsbedarf.
