# Portable Contract-Skills über MCP lesen

Arves `/mcp` bietet zusätzlich zu den vier bisherigen Dokumentationswerkzeugen zwei reine Lesewerkzeuge. Einstieg ist `list_library_skills` mit der ausdrücklich gewählten `library`, beispielsweise `shadcn`. Es gibt keine Standardbibliothek. Die Antwort enthält registrierte Exportrevisionen, Skill-IDs, `mainResourcePath`, zulässige `resources` mit SHA256 sowie passende Argumente für Komponentenseiten. Eine optionale `revision` schränkt die Entdeckung auf einen bekannten Export ein.

Seit 21. November sind zwei Revisionen ausdrücklich registriert: die vollständige 69-Komponenten-Quellenreferenz `bde7fffabf50d7983ea8a2bf0bdabdb09dd9a83537825c744af5f309db5edf91` und der bisherige Export `65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26`. Beide liefern je einen Hauptskill und eine Referenzdatei. Die folgenden Abrufbeispiele zeigen bewusst die weiterhin lesbare historische Revision; für den aktuellen Stand die über Entdeckung angebotene neue Revision einsetzen. Der vollständige Export umfasst 6309 manifestierte Dateien, ohne dass diese alle Skillressourcen werden. Details und Prüfgrenzen: [Vollständige Quellenreferenz](complete-shadcn/README.md).

```json
{"name":"list_library_skills","arguments":{"library":"shadcn"}}
```

Danach `library`, `revision` und `skill` aus der Antwort unverändert übernehmen. `get_library_skill` ohne `resourcePath` liest den Hauptskill. Mit `resourcePath` liest es genau eine der angebotenen Ressourcen.

```json
{"name":"get_library_skill","arguments":{"library":"shadcn","revision":"65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26","skill":"ui-contracts"}}
```

Relative Links beziehen sich auf das Verzeichnis der aktuellen paketrelativen `resourcePath`, auch als `resourceBase` zurückgegeben. Beispielsweise wird `references/reading.md` aus `skills/ui-contracts/SKILL.md` zu `skills/ui-contracts/references/reading.md`; `../../manifest.json` wird zu `manifest.json`. Zuerst innerhalb des Pakets normalisieren, dann den exakten entdeckten Pfad übergeben. Unnormalisierte `..`-Pfade akzeptiert das Werkzeug nicht.

```json
{"name":"get_library_skill","arguments":{"library":"shadcn","revision":"65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26","skill":"ui-contracts","resourcePath":"skills/ui-contracts/references/reading.md"}}
```

`manifest.json` und `library/library.json` sind ebenfalls lesbare Einstiegsressourcen. Die Komponentenbindungen im Index führen zu den getrennten vollständigen Component-Contracts: `componentPages` gibt die passenden `get_component_page`-Argumente an, etwa `{"system":"shadcn","component":"button"}`. Dort die zurückgegebene `contractReference` prüfen: veröffentlichte Komponentenseiten können an andere Revisionen gebunden sein als der gewählte Skill-Export. Indexpfade zu Komponentendateien sind Bindungen, keine über das Skillwerkzeug lesbaren Ressourcen. Der bisherige Komponentenabruf und seine Downloads bleiben unverändert.

## Paketbindung und Integrität

`src/contracts/library-skills.ts` registriert Bibliothek, Revision und lokalen Paketroot ausdrücklich. Die optionale `documentationSystem`-Bindung bestimmt die Argumente für publizierte Komponentenseiten; Bibliotheks-ID und Dokumentationssystem werden nicht gleichgesetzt. Ohne diese Bindung enthält die Entdeckung nur die Komponenten-ID und ihren Paketbindungspfad, keine erfundenen Systemargumente. Der Leser durchsucht ausschließlich diesen registrierten portablen Paketbaum zur Integritätsprüfung; es gibt keine Suche nach anderen Exporten, keinen Nachbarrepo-Fallback und keine CMS-Schreiboperation. Bei einer Installation muss das vollständige registrierte `package/` am gebundenen Ort vorliegen. Ein neuer Export wird erst durch eine bewusste Registryänderung angeboten; Entdeckung wählt nicht automatisch den jüngsten Ordner.

Das Exportformat `ui-contracts-export/v1` enthält keinen eigenen Skillindex. Deshalb wird dieser aus tatsächlich manifestierten Pfaden `skills/<id>/SKILL.md` abgeleitet. Ressourcen sind die manifestierten Dateien unter genau diesem Skillordner sowie die zwei ausdrücklich zugelassenen Paketeinstiege. Der derzeitige Export enthält **einen Skill und eine zugehörige Referenzdatei**; diese Zahl ist keine Laufzeitannahme. Fremde Skillordner, Abhängigkeiten, Quellprovenienzpfade und beliebige Dateisystempfade sind keine Skillressourcen.

Jeder Aufruf prüft Paketidentität, vollständiges Dateiinventar und SHA256 aller manifestierten Dateien. Der Revisionshash folgt dem Importer: SHA256 der kompakten JSON-Liste `[Pfad, SHA256]`, nach UTF-8-Pfadbytes sortiert. Fehlende, zusätzliche, manipulierte oder unsichere Dateien sperren das gesamte Paket. Symlinks, Spezialdateien, Traversal und kodierte Ressourcenpfade sind ausgeschlossen. Es werden die geprüften UTF-8-Bytes unverändert als Text ausgeliefert, einschließlich des Manifests. Dessen in der Antwort mitgelieferter SHA256 ist der Hash seiner tatsächlichen Bytes; das Manifest hasht sich im Exportformat nicht selbst. Lokale absolute Pfade und interne Dateisystemfehler werden nicht ausgegeben.

`UNKNOWN_LIBRARY`, `UNKNOWN_REVISION`, `UNKNOWN_SKILL`, `UNKNOWN_RESOURCE` und `INVALID_RESOURCE_PATH` kennzeichnen Auswahlfehler. `INVALID_PACKAGE` sperrt ein unvollständiges, unsicheres oder integritätswidriges Paket. Diese Nachweise betreffen Dateiintegrität und begrenzten Lesezugriff; sie bestätigen weder Autorenwerkzeuge noch Schema-/Policy-Prüfung, UX-Eignung, Barrierefreiheit oder Laufzeitabnahme.

## Gezielte technische Prüfung

`node --test scripts/library-skills.test.ts` prüft den tatsächlich registrierten Export bytegenau sowie isolierte temporäre Pakete für fehlende/manipulierte Dateien, falsche Manifestidentität und Revision, Traversal, nicht erlaubte Referenzen, Symlinks und Fehler ohne lokale Pfade. `node scripts/check-library-skills-mcp.mjs` prüft den realen MCP-Endpunkt, die Werkzeugbeschreibungen, den Skill-/Referenzabruf und die bisherigen vier Lesewerkzeuge. Beide Prüfungen schreiben keine CMS-Inhalte.

## Unabhängiger Verbrauchercheck

Am 20. November 2026 hat ein frischer Agent ausschliesslich mit dem MCP-Endpunkt und der gewählten Bibliothek begonnen. Ohne vorgegebene Toolnamen, Skillpfade oder Revision fand und las er Hauptskill, Leseanleitung, Manifest und Index und wandte die Anleitung auf einen Kontakteditor mit separater Einstellung an. Er verfolgte die Komponentenbindungen, prüfte die Pins und unterschied deklarierte Fähigkeiten, Annahmen und fehlende Nachweise. Entdeckung, Abruf und begrenzte Anwendung waren erfolgreich; eine Produkt- oder Konformitätsfreigabe wurde nicht behauptet. Der [Verbraucherbericht samt Aufrufnachweisen](practice-check/2026-11-20/mcp-skill-consumer/report.md) hält auch die weiterhin grossen Komponentenantworten als Reibung fest.
