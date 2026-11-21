# Ausgeführte Bootstrap-Prüfungen

Stand: 20. November 2026. Der finale Snapshot wurde nach der Präzisierung der drei Pilotseiten erneut read-only aus dem veröffentlichten shadcn-Inhalt erfasst.

- Datei: `scripts/content/handbook-snapshot.json`
- SHA-256: `aafefd61f7be9219035171e810aedaad999666675c5edf3a79ef75986f805710`
- Quell-Repository-HEAD: `e0f8d12953f524b62e6309a0bffae93d4b7832fa` (Arbeitsbaum mit zusätzlichen Änderungen; kein vollständiger Inhaltsbeleg).
- 35 veröffentlichte Seiten, eine veröffentlichte Implementierung, null benötigte Medienobjekte.

## Ergebnisse am finalen Snapshot

`bootstrap-handbook.test.ts`: PASS auf neu angelegtem Schema `handbook_bootstrap_test_1795161942609_43664`.

- Vorschau erzeugt keine Seiten.
- Erstimport erzeugt 35 Seiten und eine Implementierung.
- Zweites Apply ist ein No-op; Seitendokumente einschließlich IDs und Zeitstempeln bleiben gleich.
- Systemzugehörigkeit, Startseite, sämtliche vorhandenen Elternbeziehungen und Implementierungszuordnung stimmen.
- Alle vier Komponenten-Seitenpins bleiben `65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26`; der Implementierungspin bleibt `fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d`.
- Eine anschließend redaktionell geänderte Entwurfsversion führt zum Importabbruch. Entwurf und veröffentlichter Stand bleiben erhalten.
- Ein zusätzlich angelegtes Fremdsystem mit eigener veröffentlichter Seite bleibt unverändert, einschließlich Zeitstempeln.

`bootstrap-handbook-empty-database.test.ts`: PASS auf vollständig neuer Datenbank `handbook_bootstrap_db_1795161941769_43748`.

- Echter CLI-Aufruf `--apply --initialize-empty-database` initialisiert das reguläre `public`-Schema und importiert den Snapshot.
- Standardaufruf ist Vorschau.
- Zweites `--apply` meldet null neue Einträge.
- Wiederholte Schema-Initialisierung auf der inzwischen nichtleeren Datenbank wird abgelehnt.

Beide isolierten Testziele wurden durch ihre `finally`-Bereinigung entfernt. Für diese Tests wurde die vorhandene Verbindungsumgebung nur als PostgreSQL-Zugang genutzt; weder bestehende Anwendungstabellen noch bestehende Daten wurden zurückgesetzt, gelöscht oder verändert.

Zusätzliche read-only Vorschau auf der bestehenden Anwendungsdatenbank mit `push:false`: 35 Seiten und eine Implementierung identisch, null neue Einträge. `npx tsc --noEmit --pretty false`: Exit 0.

Diese Nachweise prüfen Inhaltsübertragung und Guard-Verhalten im vorhandenen lokalen PostgreSQL-/Payload-Setup. Sie sind keine Produktionsmigrationsfreigabe, kein Nachweis paralleler redaktioneller Schreibsicherheit und keine allgemeine Abnahme der Komponentenimplementierungen.

## Erweiterung der Layoutgliederung · 20. November 2026

Der aktuelle Snapshot enthält 43 Seiten und eine Implementierung. Neu: Page types mit overview/detail/edit (detail ist die bestehende Seite) und Page layouts mit Main+Sidebar, 4-column Card Grid, Narrow Single Card, Wide Single Card. Vier Spalten bedeuten variable Zeilenzahl. Die bisherigen 35-Seiten-Prüfungen oben sind historisch. Schema- und Empty-Database-Integrationstests wurden mit 43 Seiten erfolgreich wiederholt; die danach präzisierte Card-Grid-Kurzbeschreibung ändert keine Beziehungen. Aktueller Snapshot-SHA-256: `20bfe1ac0018aaf977165ed23c5f2a441abc70157319cdf428a59791db27ccae`.

### Ergänzung der Typen und Layouts

Aktueller Snapshot: 46 Seiten, eine Implementierung. Hinzugefügt: create, Stacked Section Cards und 3-column Card Grid. Die overview-Seite enthält fünf kurze Variantenabschnitte. SHA-256: `66ef2db0affcfd4c1034b1b29f28fd00bf852245b719718b3b4cbbb7e6148fb8`. TypeScript geprüft; Baum und Overview-Abschnitte über MCP sowie Erreichbarkeit aller zehn Typ-/Layoutseiten über das Portal geprüft. Die vorherigen isolierten Datenbanktests beziehen sich auf den davor dokumentierten 43-Seiten-Stand.

## Grundlagenübersicht überarbeitet

Der Snapshot mit 50 Seiten enthält jetzt die veröffentlichte visuelle Grundlagenübersicht. SHA-256: `5f728d180e2c7eddad61ccc75ef4e8c864828b9bf4d5094bacf874b8f875c8f5`. Die historischen Bootstrap-Integrationstests oben wurden für diesen redaktionellen Stand nicht erneut durchgeführt.

## Referenzimplementierung und Farbseite

Snapshot mit 50 Seiten nach Überarbeitung der Farbseite und neutraler öffentlicher Beschreibung erneut erfasst. shadcn ist die Referenzimplementierung; das separate Beispielsystem wurde entfernt. SHA-256: `40e656000ca647193e30ee37f85ca979c6ac94e095f83d6fd8c4619e9035c219`. Alle 49 veröffentlichten Unterseiten über MCP auf unerwünschte Herkunfts-/Beispielsystemnennungen geprüft; entferntes System liefert keinen Baum und HTTP404. Grundlagencheck und Typecheck erfolgreich.

## Abschluss der seitenweisen Präsentationsüberarbeitung · 20. November 2026

Aktueller Snapshot: 50 veröffentlichte Seiten, eine Implementierung, keine Medien. Erfasst am `2026-11-20T15:24:50.921Z`. SHA-256: `71d63523fb95d76bcc21fe52077922fff0c99ee6f76142cc9b3cf30eafa4c49e`. Quell-HEAD unverändert; der Arbeitsbaum enthält die noch nicht committeten Änderungen.

Mit genau diesem Snapshot erneut ausgeführt:

- `bootstrap-handbook.test.ts`: PASS auf isoliertem Schema `handbook_bootstrap_test_1795188383867_39142`. Vorschau ohne Schreibzugriff; Erstimport; Wiederholung einschließlich Zeitstempeln ohne Änderung; Beziehungen; alle vier Seitenpins und historischer Implementierungspin; Schutz eines redaktionellen Entwurfs; unverändertes Fremdsystem mit Fremdseite.
- `bootstrap-handbook-empty-database.test.ts`: PASS auf neu angelegter Datenbank `handbook_bootstrap_db_1795188407982_39838`. CLI-Erstinitialisierung im regulären public-Schema, Standardvorschau, wiederholtes Apply ohne neue Einträge, Ablehnung der erneuten Initialisierung einer nichtleeren Datenbank.
- Beide isolierten Testziele wurden in der jeweiligen finally-Bereinigung entfernt. Die bestehende Anwendungsdatenbank wurde dabei nicht zurückgesetzt.
- `npm run typecheck` und `npm run build`: erfolgreich.
- Die fünf Importer-Tests zu vollständigem Paket, Skills, unveränderlicher Wiederholung, manipulierten Dateien, Symlinks und unzulässigen Bindungen: erfolgreich.

Die Prüfungen belegen den beschriebenen lokalen Stand und seine Übertragbarkeit. Contract-Draftstatus und ausstehende fachliche beziehungsweise assistive Prüfungen bleiben davon unabhängig.

Gesamtabgleich nach Abschluss aller Seiten: `check-handbook-presentation.ts` PASS (50 Portal-Seiten, 49 MCP-Unterseiten, alle 47 Release-Dateien, neutraler öffentlicher Inhalt und unveränderte Pins).

## Sprachliche Überarbeitung der Detailseite · 20. November 2026

Nach der seitenweisen Redaktion wurde der veröffentlichte Snapshot erneut erfasst: 50 Seiten und eine Implementierung, keine Medien. SHA-256: `f16be6a44ddf5f2af76df8609bf35849a817ba2d766b4fc9fb880d044af22aa5`. Die Detailseite entspricht der neuen Release und der MCP-Ausgabe; HTTP 200. Blockstruktur, Beispielwerte, URLs und fachliche Bedingungen bleiben erhalten. Typecheck erfolgreich. Die weiter oben dokumentierten Datenbank-Integrationstests beziehen sich auf den dort genannten vorherigen Snapshot; sie wurden für diese Textänderung nicht wiederholt.

## Sprachliche Redaktion des gesamten Handbuchs · 20. November 2026

Alle 50 Seiten einzeln bearbeitet und bei 1440/390 CSS-Pixeln gelesen und visuell geprüft; Details siehe `../editorial-review/revisions/README.md`. 42 CMS-Seiten und die statische Systemstartseite erhielten Textänderungen; sieben weitere Seiten wurden vollständig geprüft und bewusst unverändert belassen.

Finaler Snapshot: 50 veröffentlichte Seiten, eine Implementierung, keine Medien. Erfasst `2026-11-20T17:50:01.352Z`, SHA-256 `cd49d38258bf708a4804710e39ef953f8ba0ead5b3f6ec98ee870bb33a1cd647`. HEAD `21a05df87cb270de46cab8db07e37794fc2150c3`; Arbeitsbaum enthält die noch nicht committete Redaktion.

Erneut ausgeführt: Typecheck und Produktionsbuild erfolgreich; Gesamtabgleich aller 50 Portal-Seiten und 49 MCP-Unterseiten mit Releases und Snapshot PASS; Grundlagen-, Komponenten-, Formularworkflow- und Pilotprüfungen PASS. Der Vergleich der Snapshot-Metadaten bestätigt unveränderte System-/Seitenzuordnung, Vorlagen, Reihenfolge, Status, Contractpins, Implementierung und Medien. Die Contractdateien wurden nicht verändert.

Die weiter oben dokumentierten isolierten Datenbank- und Importer-Integrationstests wurden für diese Textänderungen nicht erneut ausgeführt.

## Vollständiger shadcn-Export · 21. November 2026

Aktueller Snapshot: 116 veröffentlichte Seiten, darunter 69 Komponenten, eine unveränderte Implementierung und keine Medien. SHA-256: `c09df3e1b574cd839e0b68ac953880bf291c8482f06d6936448a2795782dd30d`. Alle Komponentenseiten sind an `bde7fffabf50d7983ea8a2bf0bdabdb09dd9a83537825c744af5f309db5edf91` gebunden. Der historische Implementierungspin bleibt unverändert.

Gesamtabgleich aller 116 Portal-Seiten und 115 MCP-Unterseiten PASS; alle 69 vollständigen Quellencontracts und Framework-Referenzen geprüft. Wiederholtes Apply der gesonderten Übernahme: null neue und null geänderte Seiten. Importer-/Skill-Tests (14), MCP-Skillprüfung beider Revisionen, Komponenten-Releaseprüfung, TypeScript und Produktionsbuild erfolgreich. Die früheren isolierten Bootstrap-Datenbanktests und die redaktionellen 50-Seiten-Reviews bleiben historische Nachweise und wurden nicht als Abnahme aller neuen Seiten fortgeschrieben. Umfang und Grenzen: [Vollständige Quellenreferenz](../complete-shadcn/README.md).
