# 3-column Card Grid

- Öffentlichen Stand am 20.11.2026 zuerst mit BrowserOS neo gelesen: Titel und Summary, keine Inhaltsblöcke.
- CMS read-only über Payload mit `push:false` geprüft: Seite 67, veröffentlicht, `updatedAt: 2026-11-20T08:57:18.767Z`, `content: []`.
- Ergänzt: fünf synthetische, gleichrangige Hilfe-Cards mit echten Handbuchlinks, variablen Reihen und langem Titel. Lokale Containergrenzen 30/48 rem ergeben 1/2/3 gleich breite Spalten. Keine Spannen, Umsortierung oder feste Card-Höhe.
- Fachtexte und Linkziele liegen im CMS-Release. Renderer, lokales CSS und Quellen-/Prüfgrenzen ergänzen die Seite; keine gemeinsamen Dateien oder CMS-Daten geändert.
- `npm run typecheck` nach Erstellung erfolgreich (20.11.2026).
- Nach Veröffentlichung und Registrierung durch Root am 20.11.2026 mit BrowserOS neo geprüft: Screenshots bei 1440×1000, 800×1000 und 390×844 CSS-Pixeln zeigen 3/2/1 Spalten. Sichtbar: gleich breite Cards, linksbündige letzte Reihe, lange Titel ohne Abschneiden, schmal kein sichtbarer horizontaler Überlauf im Beispiel. Unterschiedliche Inhaltshöhen werden je Reihe ausgeglichen.
- Accessibility-Snapshot: fünf Listeneinträge, h3-Titel und fünf Linkziele in Dokumentreihenfolge. Tastatur-Stichprobe: vom dritten Link mit Tab zum vierten; sichtbarer Fokusrahmen am Link „Inklusiv gestalten“, langer Titel und Kurztext bei 390 Pixeln vollständig sichtbar.
- Quellen-Details angeklickt und geöffneten Text gelesen. Alle fünf Card-Ziele einzeln im Browser aufgerufen, jeweils HTTP 200. Device-Override zurückgesetzt und eigenen Review-Tab geschlossen.
- Grenze: drei geprüfte Ansichtsgrössen und eine Fokusübergangs-Stichprobe; keine vollständige Tastatur-, Screenreader-, Zoom- oder Produktprüfung. Eigene Darstellung benötigte während QA keine Nachkorrektur.
