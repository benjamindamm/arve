# Form Layout · Redaktion

## Gelesener Umfang

PAGE-BRIEF, redaktioneller Gesamtbericht und eigener Auditabschnitt 27; vollständige aktuelle Release und zugehöriger Renderer einschliesslich Vorschau, drei Anordnungsregeln und aufklappbarer Quellen. Den veröffentlichten Stand am 20. November 2026 frisch über `get_documentation_page` (shadcn/content-layout-form-layout) gelesen. Zusammenfassung und alle sechs Inhaltsblöcke stimmten vor der Redaktion mit der bisherigen Release überein; CMS-IDs und null-Werte wurden beim Vergleich ausgeklammert. Frisches `updatedAt`: `2026-11-20T14:15:07.383Z`, als `expectedUpdatedAt` übernommen.

## Wichtigste Änderungen

- Einstieg erklärt nun die Anordnung von Formularfeldern, statt das Erfassen von Eingaben zu beschreiben.
- Die Bildunterschrift lädt zum Vergleich der beiden vorhandenen Zustände ein und erklärt die schreibgeschützte Vorschau.
- «denselben Feldplatz» wird zu «dasselbe Feld in zwei Zuständen»; der Fehler bleibt die Darstellung einer leeren Eingabe nach erfolglosem Absenden.
- Die Regeln geben eine kurze Anleitung: Felder einspaltig anordnen, 24 px Abstand lassen, Aktionen nach dem Feld platzieren. Die bereits klare Erklärung mehrzeiliger Texte bleibt erhalten.
- «Die Formularreferenz führt … Speicherausgänge» wird zur konkreten Erklärung, welche Seite Anordnung und welche Formularverhalten beschreibt: Prüfzeitpunkt, Fokuswechsel, Korrektur und mögliche Ergebnisse beim Speichern.
- Quellen erläutern Referenzmasse und Vorschaugrenzen in ganzen Sätzen. Quellenstände und Quellenlinks bleiben erhalten.

## Fachliche Erhaltung und Checks

- Name Form Layout, alle Überschriften, Blocknamen, Block-/Knotenreihenfolge, sechs Blöcke und Zeilenanzahl unverändert. Keine Rendereränderung erforderlich.
- Beispielwerte, Zustands-/Feld-/Aktionslabels, Hilfe, Fehlertext und Links unverändert. Renderer weiterhin unverändert: readOnly, aria-invalid, aria-describedby und Reihenfolge Label → Eingabe → Hilfe → Fehler.
- Weiterhin maximal 640 px Formularbreite, 24 px Gruppenabstand und Aktionen untereinander unter 640 px; keine neue Funktion und kein neuer Nachweis für Barrierefreiheit.
- Eingehende Links auf `content-layout-form-layout#` im Repository gesucht: keine Treffer. Keine Überschrift geändert, damit keine neuen Ankerziele.
- Ausgeführt: automatischer Vergleich mit bisheriger Release auf unveränderte Struktur, Überschriften, Beispielwerte und Feld-/Aktions-/Zustandslabels; erfolgreich.
- `npm run typecheck`: erfolgreich.
- `git diff --check`: erfolgreich.

## Browser-QA nach Veröffentlichung durch Root

- Veröffentlichte ganze Seite in BrowserOS neo gelesen und «Quellen und Prüfgrenzen» geöffnet. Einstieg, Vorschauerklärung, Aufbau, Regeln und alle drei Quellenabsätze zeigen die neue Redaktion.
- Echte Breiten per Geräteansicht eingestellt; vollständige Screenshots bei 1440 × 1000 und 390 × 844 CSS-Pixeln betrachtet. Desktop zeigt Aktionen nebeneinander, schmal stehen sie untereinander. Neue Texte, mehrzeilige Überschriften, Hilfe und Fehler bleiben lesbar und innerhalb ihrer Inhaltsflächen.
- Normalvorschau, Fehlervorschau und Rückkehr zur Normalvorschau angesehen; Fehler bleibt unter der Hilfe am selben Feld. Auf 390 px beide Zustände visuell betrachtet.
- Die Erklärung unterscheidet klar zwischen der Feldanordnung und den separat dokumentierten Abläufen. Bildunterschrift und Quellen benennen das schreibgeschützte Feld und die nicht ausführbaren Formularaktionen; der Zustandsschalter stellt keine tatsächliche Validierung dar.
- Kein sprachlicher Restbefund. Keine erneuten Validierungs- oder Fokusregeltests ausgeführt. Geräteansicht zurückgesetzt und eigenen Prüftab geschlossen.

Redaktion und begrenzte Browserprüfung abgeschlossen. Keine eigene Veröffentlichung vorgenommen.
