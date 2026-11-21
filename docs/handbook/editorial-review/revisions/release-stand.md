# Releases und Migrationen · Redaktion

Die ganze aktuelle Release und der Renderer wurden gelesen: Einstieg, Änderungsfolge, drei Versionsstände, reales Button-Beispiel, Prüfschritte, Links sowie die aufklappbaren Quellen mit dem eingefrorenen Ausgangstext. Der Auditabschnitt nennt keine konkreten Befunde. Die verständlichen Formulierungen bleiben erhalten.

Eine Überschrift wurde präzisiert: «Drei Stände getrennt lesen» heisst jetzt «Drei Versionsstände vergleichen». Die folgenden Erläuterungen zu Seitenfassung, Contractexport und Komponentenpaket bleiben unverändert. Der Renderer verwendet für diesen Abschnitt eine eigene ID; die Suche in `scripts`, `src` und `docs` fand keine eingehenden `release-stand#`-Links.

Der veröffentlichte Stand wurde am 20. November 2026 frisch über `get_documentation_page` gelesen. Inhalt, Zusammenfassung und Titel entsprachen vor der Redaktion der bisherigen Release (IDs und leere optionale Felder beim Vergleich ausgenommen). `expectedUpdatedAt` wurde auf den gelesenen Wert `2026-11-20T15:21:15.606Z` gesetzt.

Alle Datumsangaben, Hashes, Quellen und Revisionsbezüge bleiben erhalten: insbesondere der historische Implementierungsbezug `fe29…`, der Seitenbezug `651…`, `@spartan-ng/brain 1.9.0`, Web-Preview und die offenen Prüfbereiche. Die Anleitung behauptet weiterhin weder automatische Migrationen noch eine neue Implementierungsfreigabe. Der eingefrorene Originalblock wurde nicht verändert. Blockstruktur, Zeilenanzahl und Renderer bleiben gleich.

Ausgeführt: `npm run typecheck` erfolgreich; `git diff --check` ohne Befund.

Nach Veröffentlichung durch Root wurde die ganze öffentliche Seite in BrowserOS neo gelesen und bei echten Ansichtsbreiten von 1440 × 1000 und 390 × 844 visuell geprüft. Die Vertiefung «Quellen, Prüfgrenzen und ursprünglicher Inhalt» wurde geöffnet und einschliesslich der beiden ursprünglichen Abschnitte geprüft. Die neue Überschrift ist sichtbar und bricht bei 390 px sinnvoll in zwei Zeilen um. Änderungsfolge, Versionsvergleich, Button-Beispiel und lange Hashes sowie Quellenpfade bleiben lesbar; keine abgeschnittenen Textzeilen festgestellt. Kein sprachlicher Restbefund. Die Ansichtsüberschreibung wurde zurückgesetzt und der eigene Prüftab geschlossen.
