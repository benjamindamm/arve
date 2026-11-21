# Vollständige shadcn-Quellenreferenz · 21. November 2026

Arve enthält 69 veröffentlichte Komponentenseiten und insgesamt 116 veröffentlichte Handbuchseiten. Der importierte portable Export hat die Revision `bde7fffabf50d7983ea8a2bf0bdabdb09dd9a83537825c744af5f309db5edf91`. Alle 69 Quellencontracts haben den Status `complete`; `release: false` bleibt bestehen. Das beschreibt den Abschluss der Quellenreferenz, keine allgemeine Produkt-, Plattform- oder Barrierefreiheitsfreigabe.

## Bestand und Übernahme

Das unveränderte Paket liegt unter `src/contracts/libraries/shadcn/<revision>/package/`: 6309 manifestierte Dateien sowie das Manifest. Der kompakte Import speichert Bindungen und Hashes in `contracts.json`, statt sämtliche Quelltexte zusätzlich darin zu duplizieren. Nur die gebundenen Domänen werden bei Bedarf gelesen. Weitere komponentenbezogene Nachweise bleiben als hashgeprüfte Downloads verfügbar. Ein laufendes Arve benötigt das ursprüngliche ui-contracts-Repository nicht.

Reproduktion nach Bereitstellung eines vollständigen Exportordners:

```sh
node scripts/import-contract-library.mjs /path/to/portable-export --compact
node --env-file=.env --import tsx scripts/adopt-shadcn-complete.ts
node --env-file=.env --import tsx scripts/adopt-shadcn-complete.ts --apply
```

Die erste Übernahme ergänzt 65 Komponentenseiten und die Framework-Seite. Die bisherigen vier Seiten erhalten den neuen Quellenpin und eine Einordnung ihrer vorhandenen Angular-Studien. Bestehende redaktionelle Entwürfe werden geschützt. Ein erneutes Apply meldete null neue und null geänderte Seiten. Vorherige Exportrevisionen bleiben erhalten; die Registrierung neuer Skillrevisionen und der Build-Assets erfolgt ausdrücklich in `library-skills.ts` und `next.config.mjs`.

Der vorhandene Button-Implementierungsnachweis blieb unverändert an `fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d` gebunden. Die vier Spartan-Beispiele sind Angular-Referenzen desselben Designs. Ihre bisherigen redaktionellen Studien werden als Aussagen zum vorherigen Quellenstand eingeordnet, nicht als erneute Validierung gegen den neuen React-Contract.

## Frameworks und Plattformen

`/systems/shadcn/frameworks` führt React als Original und Spartan als Angular-Referenz. Hinzu kommen externe native Referenzen: [SwiftUI-Flx](https://github.com/felipemenezes098/swiftui-flx), [ShadKit](https://github.com/jasonkneen/shadkit), [SwiftCN](https://charlesbethin.com/blog/introducing-swiftcn/), [RikkaUI](https://github.com/rainxchzed/RikkaUi) und [KomoUI](https://github.com/derangga/komoui). Quellenstand: 21. November 2026. Plattformangaben der Community-Projekte sind kenntlich gemachte Projektangaben; native Pakete wurden weder installiert noch gegen Arves Contracts geprüft. KomoUIs Material-3-Grundlage wird ausdrücklich genannt.

Die Referenzen werden als veröffentlichte CMS-Inhalte gepflegt. Plattform, Framework, Projektbezug, Quelle und Prüfstand werden im Portal angezeigt und von MCP als `referenceFrameworks` ausgegeben. Ein optionales ausdrückliches Paketpräfix ordnet bestehende Implementierungsnachweise einem Framework zu, ohne die Nachweise umzuschreiben. Eine Plattform darf mehrere Frameworks und Bibliotheken haben.

## Portal und MCP

- Durchsuchbarer Katalog aller 69 Komponenten; vier bestehende Angular-Beispiele gesondert markiert.
- Statische Originalvorschauen mit Originalgrössen-Link. Lange Quellenbilder sind separat scrollbar; kleine Bilder werden nicht hochskaliert.
- Vollständige Domänendateien werden erst beim Öffnen geladen, im Browser per SHA-256 geprüft und bis 256 KiB farbig hervorgehoben. Grössere Dateien erscheinen vollständig als Klartext; der Download bleibt vollständig.
- Sechs MCP-Lesewerkzeuge bleiben erhalten. Der aktuelle und der vorherige portable Skill-Export sind ausdrücklich auswählbar.
- Die initiale Accordion-Seite sank durch das bedarfsweise Laden von etwa 25,2 MB auf etwa 327 KB HTML. Insbesondere der umfangreiche gemeinsame Tokenbestand wird nicht mehr vorab als farbiger HTML-Quelltext eingebettet.

## Tatsächlich ausgeführte Prüfungen

- Quell-Exportverifikation: `PASS_LIMITED`, portable Paketinventar-/Hashprüfung, 6309 Dateien, `release: false`.
- Importer und Skill-Leser: 14 Tests erfolgreich, einschliesslich kompakter Übernahme und Abgrenzung fremder Komponentenordner.
- `check-shadcn-complete.ts`: alle 69 Komponentenseiten mit vollständigen Domänenbindungen und Hashes, neuen Pins, Preview-Bindungen, sieben Framework-Referenzen, historischem Implementierungspin und HTTP 200. Ergebnisse: `verification.json`.
- `check-library-skills-mcp.mjs`: beide Skillrevisionen, Hauptskill, Referenzen, Manifest und Index bytegenau; Auswahl-/Pfadfehler; bestehende Lesewerkzeuge; 281 Button-Artefaktdownloads.
- `check-handbook-presentation.ts`: Snapshot, veröffentlichte CMS-Inhalte, MCP und Erreichbarkeit aller 116 Seiten stimmen überein. Die vorhandenen redaktionellen und visuellen 50-Seiten-Reviews bleiben historische Nachweise; die neuen 65 Quellenreferenzseiten werden dadurch nicht als einzeln redaktionell abgenommen ausgegeben.
- `check-components-release.ts`: sechs bisherige Komponenten-/Auswahlseiten stimmen zwischen CMS, Releases und MCP überein.
- Wiederholtes Apply: keine Änderungen, Implementierungsdokument unverändert. Snapshot: 116 Seiten, eine Implementierung, keine Medien.
- TypeScript und Produktionsbuild erfolgreich. Build-Traces der MCP-, Komponenten- und Dateiroute enthalten alle 6310 Paketdateien; keine `.env`- oder `.runtime`-Dateien.
- BrowserOS neo: Katalog bei 1440/390 CSS-Pixeln, Suche nach Dialog sowie leeres Ergebnis und Zurücksetzen; Framework-Seite bei beiden Breiten; Accordion mit geladenem SCXML und grossem Token-Klartext; Dialog mobil und Select am Desktop mit geladenen Originalbildern; Button-Variante Outline und Beispielaktion erfolgreich. Screenshots unter `screenshots/`.

Diese Prüfung umfasst keine Laufzeitbedienung aller 69 Komponenten, keine vollständige visuelle Einzelabnahme der neuen Seiten und keine iOS-/Android-Laufzeitabnahme. Die exportierten Quellenbilder sind keine zusätzlichen Live-Beispiele.
