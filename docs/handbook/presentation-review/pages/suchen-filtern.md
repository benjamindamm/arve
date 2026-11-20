# Suchen und Filtern · Präsentationsrevision

## Befund

Öffentliche Seite vor der Änderung über BrowserOS neo gelesen: sieben ausführliche Vertragsblöcke, kein früher konkreter Listenentwurf. Der aktuelle publizierte Stand enthält bereits die Präzisierung mit vollständigem Bestand bis 50, de-CH-Sortierung und immer sichtbarem Erstelleinstieg. CMS-Daten über den lesenden SDK-Endpunkt `get_documentation_page` geladen; keine CMS-Schreibaktion.

## Umsetzung

- Frühes bedienbares Live-Beispiel: originaler Beispielsatz P-101 Alpen / Aktiv, P-102 Alpen Archiv / Archiviert, P-103 Berg / Aktiv. Teilstringsuche über ID oder Name ohne Gross-/Kleinschreibung, Status mit UND, sofortige Ergebniszahl und Reset; Name nach de-CH, ID als zweiter Sortierschlüssel.
- Dieselben Ergebnisdaten breit in drei Spalten, bis 700 px untereinander; keine doppelte fokussierbare Darstellung. Eingaben schmal untereinander, Namen umbrechbar, Status als Text, keine haftende Region.
- Immer sichtbarer Erstelleinstieg führt in die Formular-Dokumentation. Lokale Detailvorschau mit ID, Name, Status und Rückkehr zum Ergebnislink. Vorschau ausdrücklich abgegrenzt: keine Projektanwendung, keine URL-/Browser-Zurück-Implementierung, keine Datenspeicherung, keine Bearbeitung oder Erstellung.
- Drei kurze Regeln, vier Zustandsschnitte, gesonderter URL-/Rückkehrvertrag, UX-001 Anwenden gegenüber UX-002 Live als begrenzte Patternkandidaten und Links zu Detail/Formular/Patternkatalog.
- Die sieben ursprünglichen CMS-Blöcke sind vollständig und unverändert in aufklappbaren Details erhalten, inklusive Studien-/Nachweisgrenzen. Alle fachlichen Texte und Daten kommen aus dem vorgesehenen CMS-Release.

## Tatsächliche Checks

- `npm run typecheck` erfolgreich am 20.11.2026.
- Vollständiger Deep-Equal der letzten sieben Release-Blöcke mit dem gelesenen Original erfolgreich; `expectedUpdatedAt` stimmt mit `2026-11-20T08:04:53.481Z` überein.
- SHA-256 des JSON-Originalcontent: `09af9af6d51203c25357eb8cc9b7d0eb1fe12f176143e30d95da5aab048705f8`.
- Keine Registry, gemeinsame Route, globales CSS oder CMS-Daten verändert. Root hat den Release veröffentlicht und den Renderer eingebunden. Keine Mobilgeräte-, Zoom-, Screenreader- oder allgemeine Freigabe behauptet.

## Browser-QA nach Root-Veröffentlichung · 20.11.2026

BrowserOS neo, tatsächliche CDP-Ansichten 1440 × 1000 und 390 × 844. Screenshots beider Breiten visuell angesehen: breite Suchzeile und drei Ergebnisspalten; schmal Suche, Status und Reset untereinander, IDs/Namen/Status je Ergebnis zusammenhängend. Im gezeigten Beispiel kein seitliches Abschneiden der eigenen Liste oder Eingaben.

In beiden Breiten tatsächlich bedient und per Seitenlesung bestätigt:
- `ALP` + Alle → P-101, P-102 / 2 Projekte.
- `ALP` + Aktiv → P-101 / 1 Projekt.
- `Tal` → 0 Projekte, expliziter Nulltrefferhinweis; Erstelleinstieg bleibt sichtbar.
- Reset → alle drei Projekte in ursprünglicher Reihenfolge.
- P-102 geöffnet → lokale Detailvorschau mit P-102, Alpen Archiv, Archiviert. Rückkehr schliesst Vorschau; Accessibility-Baum meldet Fokus auf dem Link Alpen Archiv.

Zusätzlich schmal geprüft: `102` + Archiviert → ausschliesslich P-102; Detailvorschau und Rückkehr bewahren diese lokalen Kriterien. Quellen-Details geöffnet und die sechs Anschlusslinks lesend bestätigt. «Projekt erstellen» geklickt: Ziel ist wie angekündigt die Formular-Dokumentation, keine Projektanlage.

Kein Fehler in diesen Fällen gefunden, keine weitere Änderung am Renderer erforderlich. URL-Kriterien, Browser-Zurück, echte Erstellung/Bearbeitung, Erstleere als bedienbarer Datenbestand, 200-%-Textvergrösserung und Screenreader nicht als umgesetzt oder geprüft ausgegeben. Geräteemulation anschliessend aufgehoben, eigene QA-Ansicht geschlossen.
