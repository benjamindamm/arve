# Prüfung der kompakten MCP-Abrufe und Suche

Stand: 21. November 2026, Änderungen auf Basis Arve d629412. Keine Contractpakete oder CMS-Inhalte geändert. Die Untersuchung erfolgte mit tatsächlichen HTTP-MCP-Aufrufen und dem installierten SDK; ein frischer Reviewer untersuchte die überarbeitete Schnittstelle unabhängig von den Implementierungsagenten.

## Ausgeführt

- Produktionsbuild und Typecheck erfolgreich. Die bekannte Warnung zum breiten Dateimuster in library-skills.ts bleibt bestehen.
- Reine Prüfungen: Suche, Wortgrenzen und explizite Synonyme, Pattern-ID, Teiltreffer, Navigation samt Zweigfortsetzungen, Unicode-Rekonstruktion, SHA256, geänderte Pins, Pfadgrenzen und gezielte Exportauswahl. Die Skill-Prüfung weist zusätzlich nach, dass nicht ausgewählte beschädigte Exporte nicht gelesen werden und Manipulationen innerhalb ausgewählter Pakete weiterhin abgelehnt werden.
- Live-Fortsetzungsprüfung: sechs kompakte Komponenten, drei Dokumentationsseiten, vollständige Abschnittsinventare, Text-/Skillrekonstruktion und Ablehnung falscher Revisionen, Snapshots, Hashes und Dateipfade. Explizite Vollansichten behalten die bisherigen vollständigen Datenfelder.
- Live-Navigation: alle 118 Seitenreferenzen über kompakte Zweige erreichbar und exakt gegen den vollständigen Baum abgeglichen; keine doppelten oder fehlenden Pfade. Höchstens 14.034 Byte pro normaler Antwort im Navigationslauf; 19 geprüfte erfolgreiche Aufrufe einschliesslich Layoutbeispielen und Vollabgleich.
- Unabhängiger Review: alle 69 Komponentenseiten und 49 Dokumentations-/Layoutverweise erfolgreich abgerufen. Relevante Begrenzungen bleiben in den gelesenen Quellabschnitten erhalten. Tokens, Stories und JSON-Domänen wurden über Fortsetzungen rekonstruiert und ihre Hashes geprüft. Ein Patternabschnitt wurde mit bewusst kleinen Unicode-Codepunktgrenzen rekonstruiert.
- Bestehende Skill-Integrationsprüfung: zehn Tools, gepinnte Skills und Referenzen, Identitäts-/Pfadfehler, Komponentenseiten sowie 326 veröffentlichte Downloads geprüft. Die Vollständigkeitsprüfungen fordern `view: 'full'` ausdrücklich an.

## Gemessene normale Antwortgrössen

UTF-8-Bytezahl des serialisierten SDK-Ergebnisses einschliesslich strukturierter Daten und Textdarstellung. Keine geschätzten Modelltoken.

| Abruf | Byte |
| --- | ---: |
| Button | 29.904 |
| Input | 29.685 |
| Table | 29.662 |
| Data Table | 30.331 |
| Select | 29.834 |
| Calendar | 29.368 |
| Suchen und Filtern | 13.210 |
| Tabellen und Listen | 11.974 |
| Patternkatalog, erster Teil | 12.795 |
| Skill-Entdeckung, aktueller Export | 5.198 |

Die früheren sechs Komponentenantworten lagen zwischen 831.500 und 1.410.812 Byte. Die aktuellen Standardantworten überschritten im gemessenen Lauf keine 32 KiB. Explizit grössere Suchergebnisse und `view: 'full'` sind bewusste Ausnahmen, keine Behauptung eines globalen Transportlimits für jeden zukünftigen CMS-Inhalt.

## Tatsächliche Suchergebnisse

- „Schaltfläche“: Button zuerst.
- „responsive Tabelle“: Table, Tabellen und Listen, Data Table als relevante Auswahl. Der pro Treffer angegebene Umfang unterscheidet vollständige von teilweisen Begriffstreffern.
- „UX-001“: Patternkatalog zuerst mit der exakten ID und passendem Quellausschnitt.
- Lange Banking-Aufgaben: allgemeine UI-Hinweise als ausdrücklich markierte Teiltreffer; unbelegte Begriffe bleiben benannt. Keine Banking-Fachregeln werden daraus erfunden.

## Grenzen

Snapshot- und Revisionsprüfungen verhindern eine unbemerkte Fortsetzung mit geändertem veröffentlichtem Stand; sie bieten keinen historischen CMS-Abruf. Hashes belegen Datenintegrität, keine fachliche oder plattformübergreifende Freigabe. Regeln werden weiterhin aus ihrem tatsächlichen Inhalt und Geltungsbereich gelesen; eine neue formale Normenhierarchie wurde nicht eingeführt.

Die Skill-Entdeckung prüft nur die ausgewählten Exporte, diese aber weiterhin vollständig. Die unabhängige Messung von 3,523 Sekunden ist eine Beobachtung mit frischem SDK-Client, kein kontrollierter Kaltstartvergleich. Grosse explizit angeforderte Manifeste bleiben gross und benötigen viele Folgeabrufe. Eine vollständige Rekonstruktion des rund 1,4 Millionen Codepunkte langen Manifests wurde nicht beansprucht.

## Lokale Nachweise

`.runtime/mcp-compact/live-report.json`, `.runtime/mcp-navigation/report.json`, `.runtime/mcp-search-fix/acceptance-summary.json`, `.runtime/mcp-skills-compact/summary.json` und `.runtime/mcp-postfix-review/report.md`. Die wiederholte Banking-Erprobung wird separat im eigenständigen Angular-Repository dokumentiert.
