# Farbpalette und visuelle Zustände · shadcn-Referenz

Stand: 24.11.2026. Lokaler Showcase-Entwurf auf Nutzerauftrag. Die historischen Pilotdateien bleiben erhalten; die aktuelle veröffentlichte Anwendung liegt in den unten genannten Dateien.

## Aufteilung

- **Farbe:** sechs Skalen mit je zehn Stufen sowie Weiss und Schwarz. Flat UI Palette v1 liefert fünf Ausgangstöne bei Stufe 50; die übrigen Stufen sind eigene Ableitungen. Die neutrale Skala ist eine lokale Entscheidung.
- **Themes und visuelle Zustände:** Grund-/Inhaltsflächen, Überlagerung, primäre und sekundäre Handlung, Kontextinformation, interaktive Hervorhebung, destruktive Handlung, Fehler, Erfolg, Warnung, Sachhinweis, nicht verfügbare Aktion sowie Konturen und Fokus. Hell und Dunkel lassen sich umschalten.
- **Datenvisualisierung:** ausdrücklich nicht bearbeitet.

Carbon liefert das Strukturprinzip Palette → Rolle → Token → Theme-Wert, nicht die konkreten Werte. Eigene Rollenbezeichnungen sind keine behaupteten Carbon- oder shadcn-Bibliotheks-Tokens. Die Komponenten-Contracts und der Portalrahmen bleiben auf ihrem bisherigen Stand.

## Dateien und Pflege

- Werte: `src/docs/foundation-colors.json`.
- CMS-Inhalte: `scripts/content/page-reworks/farben.ts` und `themes-und-zustaende.ts`; die vollständigen Werte sind auch als Text vorhanden.
- Darstellung beider Seiten: `src/docs/color-page.tsx` und `.css`.
- Startreferenz: dieselben beiden Seiten in `scripts/content/handbook-snapshot.json`.
- Autorenfragen: `.agents/skills/arve-color-handbook/`, einschliesslich der neuen Anwendungsfragen.

Bei Änderungen an Farbwerten Profil, veröffentlichte CMS-Inhalte und Referenzsnapshot gemeinsam aktualisieren. `node --import tsx scripts/check-foundation-colors.ts` prüft die Skalenrichtung, Ausgangstöne, opaken Farbpaare und die Präsenz der Werte im redaktionellen Quellinhalt. Der generierte Kontrastbericht enthält die konkreten Paare und ungerundeten Ergebnisse.

## Abdeckung des Farbskills

| Frage | Antwort im aktuellen Stand |
| --- | --- |
| COL-01 | shadcn-Showcase, Web auf Desktop und Mobile, lokaler Entwurf. Native Zuordnungen bleiben offen. |
| COL-02 | Flat UI als Quelle der Ausgangstöne; Carbon als Strukturreferenz; abgeleitete Stufen und Zuordnungen als eigene Entscheidungen gekennzeichnet. |
| COL-03 | Sechs Skalen, neutrale Flächen-/Text-/Rahmenrollen und sieben Handlungs-/Rückmeldungsrollen. |
| COL-04 | Konkrete Flächen-, Inhalts- und Rahmenwerte pro Rolle, Theme und dargestelltem Zustand. Vollständige Werte im CMS/MCP. |
| COL-05 | Alle 13 vom Nutzer benannten Anwendungskontexte in der Anwendungsseite; Symbol und Text ergänzen Statusfarbe. Destruktive Handlung bleibt von Fehlerhinweis getrennt. |
| COL-06 | 78 opake sRGB-Paare berechnet, mindestens 4,5:1 für gezeigten normalen Text und 3:1 für geprüfte Grenzen/Fokus. Keine vollständige Komponentenfreigabe. |
| COL-07 | Hell/Dunkel mit gleicher Rollenbedeutung; Theme-Umschaltung steuert nur die Beispiele. Mehrmarken-/native Abbildung offen. |
| COL-08 | Überlagernde opake Menüfläche im sichtbaren Umfeld. Schatten rein illustrativ, keine Information darauf. Bild- und transparente Texthintergründe nicht geprüft. |
| COL-09 | Charts ausdrücklich zurückgestellt; keine Statusfarben als Diagrammpalette ausgegeben. |
| COL-10 | Ausgearbeitete lokale Referenz; Einbau in tatsächliche Bibliotheks-Tokens, native Plattformzuordnungen und spätere Diagrammpaletten offen. Keine Zuständigkeit oder Freigabe erfunden. |

## Ausgeführte Prüfungen

- Farbprüfung: sechs monoton dunkler werdende Skalen und 78 Paarprüfungen bestanden; alle Skalen-/Rollenwerte im redaktionellen Farbquellinhalt vorhanden.
- Skill-Formatprüfung bestanden. Kein unabhängiger Transfer-Test dieser Revision behauptet.
- Veröffentlichte Inhalte beider Seiten über den lokalen MCP vollständig abgerufen und strukturell mit den Releases verglichen; kompakte Abrufe ebenfalls erfolgreich.
- Browserprüfung: Farbskalen bei 320 Pixeln, Rollen und Hell-/Dunkel-Umschaltung bei 390 Pixeln, Anwendung auch bei 320 und 1440 Pixeln. Keine gemessenen horizontalen Überläufe; Skalen, Rollenkarten und Überlagerung visuell geprüft.
- TypeScript-Prüfung, statischer Build und Link-/Asset-Prüfung bestanden: 198 HTML-Seiten, 116 Handbuchseiten, 69 Komponenten, 59.543 interne Links und 2.955 verifizierte Assets.
- Beide aktualisierten veröffentlichten Seiten entsprechen strukturell ihren Einträgen im Referenzsnapshot.
