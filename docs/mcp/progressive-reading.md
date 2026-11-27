# MCP gezielt lesen

Der lokale Endpunkt `http://127.0.0.1:3010/mcp` verwendet Streamable HTTP. Für statische Websites bietet das [separate MCP-Paket](../../packages/arve-mcp/README.md) dieselben Werkzeuge über lokalen stdio-Transport. Die Website-URL wird mit `--base-url` gewählt. Alle Tools sind lesend. Die MCP-Projektion ändert weder veröffentlichte CMS-Inhalte noch Contractpakete oder Portalansichten. Die normalen Antworten sind begrenzte Einstiege; eine ausgelassene Regel gilt dadurch nicht als abwesend.

## Arbeitsablauf

1. **Auftrag und Quelle wählen.** Ein Dokumentationssystem (`system`) und eine Contractbibliothek (`library`) sind unterschiedliche Auswahlen. `list_design_systems` entdeckt veröffentlichte Systeme; `list_documentation_tree` und `search_documentation` helfen danach bei der Seitenauswahl. `list_library_skills` entdeckt die ausdrücklich gewählte Bibliothek. Suchtreffer sind Orientierung, keine Norm oder Freigabe. Bei einer Suche ohne Treffer Schreibweise und Themenvarianten prüfen und den passenden Bereich lesen.
2. **Herkunft festhalten.** `get_component_page` liefert kompakte Komponentenmetadaten mit `contractReference`, Herkunft, Status, Plattformbezügen und nachladbaren Domänen. Veröffentlichte Implementierungen können an eine ältere Revision als die Seite gebunden sein. Fehlende Plattformbelege beweisen nicht, dass ausserhalb des Katalogs keine Implementierung existiert. Ein Skill-Export kann wiederum eine andere Revision haben: Revisionen vor der Verwendung vergleichen.
3. **Einsatzbedingungen lesen.** `get_documentation_page` und der Komponenten-Einstieg zeigen redaktionelle Quellabschnitte in ihrer Reihenfolge. Hinweise zu Einsatz, Alternativen, Voraussetzungen, Grenzen und Herkunft zusammen lesen. `readingScope`, `omissions`, `complete`, `pagination` und Fortsetzungen beachten. Ein vollständig gelesener Abschnitt bedeutet nicht, dass die gesamte Seite gelesen wurde. Vorschauen sind keine automatisch verdichteten Regeln und ersetzen die nötige Anwendbarkeitsprüfung nicht.
4. **Gezielt vertiefen.** Den in der Antwort gelieferten `read`-Aufruf übernehmen. Nur die benötigte Contractdomäne und anschliessend die konkrete Datei lesen. `behavior` lädt beispielsweise das Zustandsmodell; für diese Frage müssen gemeinsame Tokens und Stories nicht in den Kontext gelangen. Library, Komponente und Revision sowie Pfad und SHA-256 an den gelesenen Nachweis binden.
5. **Begrenzt fortsetzen.** Bei `nextOffset` die Fortsetzung mit unverändertem Pin abrufen. Nur die für die Entscheidung nötigen Abschnitte und Dateien lesen. Eine unvollständige Antwort ausdrücklich als Ausschnitt behandeln. Bei `SNAPSHOT_MISMATCH` den Einstieg erneut lesen: Das CMS kann inzwischen neu veröffentlicht worden sein; die API liefert keine historischen CMS-Snapshots.

## Aufrufe und Fortsetzungen

Die Beispiele zeigen Toolargumente. Ausgegebene `read`- und `next`-Aufrufe enthalten die konkreten Abschnittskennungen, Pins und Fortsetzungswerte. Diese Werte aus der Antwort übernehmen, nicht aus Titeln oder Verzeichnisnamen erraten.

```js
list_design_systems({ limit: 10 })
list_documentation_tree({ system: 'shadcn' })
search_documentation({ system: 'shadcn', query: 'Schaltfläche', limit: 5 })
get_documentation_page({ system: 'shadcn', section: 'formulare-validierung' })
get_documentation_page({ system: 'shadcn', section: 'layout', example: 'detail' })
get_component_page({ system: 'shadcn', component: 'button' })
list_library_skills({ library: 'shadcn' })
```

| Tool | Eingrenzung und Ergebnis |
| --- | --- |
| `list_design_systems` | Entdeckt Systeme; `offset`, `limit` (1–20, Standard 10), `snapshot` für konsistente Fortsetzungen. |
| `list_documentation_tree` | `system`; kompakte unmittelbare Kinder eines Zweigs. `parentPath` wählt einen entdeckten Zweig, `snapshot` bindet dessen Stand, `offset` und `limit` (1–20, Standard 12) begrenzen die Einträge. `expand` lädt Nachkommen; `next` die nächste Seite desselben Zweigs. |
| `search_documentation` | `system`, `query`, `offset`, `limit` (1–30); begrenzte Treffer zur Auswahl der nachfolgenden Leseaufrufe. |
| `get_documentation_page` | `system`, `section`, optional `example`; kompakte Abschnittsvorschauen, `snapshot`, Abschnitts-Paginierung mit `offset` und `limit` (1–4). |
| `get_documentation_section` | Dieselbe Seitenauswahl plus `snapshot`, `sectionId`; ein konkreter Quellabschnitt als Text in Zeichenabschnitten. |
| `get_component_page` | `system`, `component`; kompakter Einstieg mit Seitencontract, Hinweisinventar und Plattformbezügen. Optionale `snapshot` und `revision` prüfen den erwarteten Stand. |
| `get_component_domain` | `system`, `component`, `snapshot`, `revision`, `domain`; eine Domäne als JSON-Text. `domain: 'guidance'` mit `sectionId` liest genau einen redaktionellen Abschnitt als Klartext. Quelldomänen wie `behavior` liefern einen gezielten Dateiaufruf. |
| `get_component_file` | Derselbe Komponentenpin plus exakter `path`, optional erwarteter `sha256`; registrierte UTF-8-Originaldatei als Text. Binärdateien bleiben Downloads. |
| `list_library_skills` | `library`, optional `revision`; Exportauswahl mit `offset` und `limit` (1–3). |
| `get_library_skill` | `library`, `revision`, `skill`, optional `resourcePath` und erwarteter `sha256`; eine freigegebene Skillressource als Text in Zeichenabschnitten. |

Bei Textlesern liegt `limit` zwischen 1 und 12000, standardmässig 6000. `offset` ist standardmässig 0. Die Absatzvorschauen und Exportlisten verwenden eigene Seitengrössen; ihre Grenzen sind keine Zeichenpositionen.

Die Textleser verwenden Unicode-Codepunkte für `offset` und `limit`, keine Bytepositionen. `sha256` bezeichnet den vollständigen UTF-8-Text, nicht nur den Ausschnitt. `totalBytes` und die Anzahl der Codepunkte können voneinander abweichen. Fortsetzungen innerhalb desselben Textes geordnet zusammensetzen; einen vollständigen Hash erst gegen den vollständigen Text prüfen. Strukturierte Domänen können als JSON-Text in begrenzten Ausschnitten geliefert werden: erst die benötigten Fortsetzungen zusammensetzen, dann JSON parsen.

Skillressourcen bleiben an `library`, `revision` und `skill` gebunden. Erst die Hauptanleitung lesen, dann benötigte Referenzen anhand der entdeckten Paketpfade. Relative Links gegen das Verzeichnis der aktuellen Ressource auflösen; nur freigegebene Pfade sind lesbar. Definitionen im Index sind Bindungen und nicht automatisch Skillressourcen. Die lokale Integritätsprüfung bleibt unabhängig davon bestehen, wie viele Zeichen eine einzelne Antwort enthält.

Die kompakte Skillliste prüft nur die Exporte auf der gewählten Ergebnisseite. `currentReference` kennzeichnet den aktuell registrierten Referenzexport. `componentPages.index` enthält den gepinnten Leseaufruf für das vollständige Bibliotheksverzeichnis; `documentationSystem` benennt die ausdrücklich registrierte Handbuchbindung. Eine Komponentenanzahl ist kein Nachweis für Plattformabdeckung. Jeder ausgewählte Export wird weiterhin vollständig auf Integrität geprüft; grosse Pakete verursachen deshalb auch bei kleinen Antworten einen Leseaufwand auf dem Server.

## Bestehende Clients umstellen

Ein alter Client, der eingebettete `content`, `contract.files` oder sämtliche Artefakte beziehungsweise einen rekursiven `tree` erwartet, muss seine Annahmen ändern. Im normalen Ablauf zuerst kompakt lesen und die benötigten Nachweise nachladen. Nicht bei jedem Aufruf automatisch auf die Vollantwort zurückfallen: Das würde die neue Kontextgrenze umgehen.

Für bewusste Vollständigkeits- und Byteparitätsprüfungen bleibt `view: 'full'` eine ausdrückliche Kompatibilitätsoption. Die vorhandenen Release- und Integritätsskripte fordern diese Ansicht gezielt an, damit ihre bestehenden Vergleiche weiterhin vollständige veröffentlichte Daten beziehungsweise Originaldateien prüfen. `view` gilt für `get_component_page`, `get_documentation_page`, `list_library_skills`, `get_library_skill` und `list_documentation_tree`. Nur die explizite Vollansicht des Baums liefert die bisherige rekursive `tree`-Form. Das ist keine Empfehlung für den Agentenstandard. Historische Prüfberichte und eingefrorene CMS-Texte beschreiben weiterhin den damaligen API-Stand.

Die vorhandene Demo-Komponente verwendet den kompakten Komponenten-Einstieg und liest die benötigten Hinweise und das SCXML getrennt. Seitencontract und veröffentlichter Implementierungsbezug bleiben sichtbar, auch wenn ihre Revisionen auseinanderliegen.

## Prüfungen

`npm run check:mcp:unit` prüft Suche, IDs, Wortgrenzen, Zeichengrenzen, Integrität, Metadatenprojektion und Navigation ohne laufenden Server. Derselbe Aufruf läuft in der Pages-Pipeline.

Bei laufendem MCP auf Port 3010 prüfen `node scripts/check-mcp-progressive.mjs` und `node scripts/check-mcp-navigation.mjs` die tatsächlichen Antworten, Grössen, Fortsetzungen, Rekonstruktion und Fehlerfälle. Die ausführlichen Ergebnisse werden unter `.runtime/mcp-compact/` beziehungsweise `.runtime/mcp-navigation/` abgelegt. Diese Prüfungen ändern keine CMS-Inhalte.
