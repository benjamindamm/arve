# Arve

Plattform für mehrere Design-Systeme mit Payload CMS, Next.js und PostgreSQL. Arve verbindet redaktionelles Designwissen, versionierte UI-Contract-Exports und plattformspezifische Implementierungen. Teams lesen die veröffentlichten Inhalte im Portal; KI-Agenten können denselben Stand über MCP abrufen.

Im Admin-Bereich lassen sich Seiten mit Rich Text, Bildern und Do’s und Don’ts pflegen. Die Sammlung **Seiten** unterstützt Entwürfe und Versionshistorie. Die Startseite erklärt die Arbeitswege für gemeinsames Entwerfen, gezieltes Umsetzen und die Weiterentwicklung bestehender Designs und Codebases.

## Statische Veröffentlichung

Das öffentliche Handbuch kann ohne laufendes CMS auf GitHub Pages erscheinen. `npm run build:static` baut den gespeicherten veröffentlichten Datenbankstand, `npm run check:static` prüft Seiten und Dateien, `npm run preview:static` startet die lokale Vorschau unter `http://127.0.0.1:3020/arve/`. Navigation, Suche, Live-Beispiele und Contract-Downloads bleiben bedienbar. Admin und MCP gehören zur separat laufenden Payload-Anwendung. [Inhalte aktualisieren und auf GitHub Pages veröffentlichen](docs/deployment/github-pages.md).

## Lokal starten

Voraussetzungen sind Docker mit Compose und Node.js 22 ab 22.23.4 oder Node.js ab 24.22.1. Die Befehle werden im Projektordner ausgeführt.

Einmalig die lokale Konfiguration anlegen, falls `.env` noch fehlt:

```sh
cp .env.example .env
printf '\nPAYLOAD_SECRET=%s\n' "$(openssl rand -hex 32)" >> .env
npm ci
```

Anschliessend die Datenbank und den Entwicklungsserver starten:

```sh
docker compose up -d --wait
npm run dev
```

Falls lokal nur eine ältere Node-Version vorhanden ist, können die npm-Befehle mit Node.js 26 ausgeführt werden:

```sh
npm exec --yes --package=node@26 -c 'npm ci'
npm exec --yes --package=node@26 -c 'npm run dev'
```

Beim ersten Start ein [Administratorkonto anlegen](http://127.0.0.1:3010/admin/create-first-user). Danach ist der [Admin-Bereich](http://127.0.0.1:3010/admin) über den regulären Einstieg erreichbar. Danach können unter **Seiten** Inhalte erstellt und unter **Media** Bilder mit Alternativtext hochgeladen werden.

## REST-API

Die REST-Sammlung ist unter `/api/pages` erreichbar. Für einen Agenten kann beim vorgesehenen Benutzerkonto ein API-Schlüssel aktiviert werden. Payload erwartet den Header `Authorization: users API-Key <Schlüssel>`.

## shadcn-Referenz

Die [Startseite](http://127.0.0.1:3010/) verlinkt auf den [shadcn-Button](http://127.0.0.1:3010/systems/shadcn/components/button). Die Seite kommt aus Payload und enthält ein Angular-Beispiel mit der Originaldirektive `BrnButton` aus `@spartan-ng/brain` sowie lokale Demo-Styles. Die SCXML-Quelle wird angezeigt. Das Beispiel führt sie nicht aus.

Eine leere lokale Datenbank mit der veröffentlichten Beispielseite befüllen:

```sh
node --env-file=.env --import tsx scripts/seed-shadcn.ts
node --env-file=.env --import tsx scripts/seed-shadcn-controls.ts
node --env-file=.env --import tsx scripts/seed-shadcn-foundations.ts
node --env-file=.env --import tsx scripts/seed-shadcn-guides.ts
```

Die Übersicht verlinkt Farben und Tokens, Typografie und Form, Grid und Abstände, UX-Patterns sowie Komponenten. Die Texte liegen in Payload. Farbproben und Raster zeigen die Werte der Portal-Referenz. Unter Grid und Abstände sind drei responsive Seitentypen verlinkt.

Die [Komponentenübersicht](http://127.0.0.1:3010/systems/shadcn/komponenten) listet veröffentlichte Komponentenseiten aus Payload. Button, Input, Checkbox und Switch haben Spartan-Demos und gebundene Originalquellen. Alle vier Komponenten enthalten SCXML. Checkbox und Switch verwenden in Spartan Buttons mit ARIA-Rolle, während die Contract-Vorlagen native Checkbox-Eingabefelder verwenden.

### Handbuch auf einer neuen Datenbank aufbauen

Der öffentliche shadcn-Stand ist als begrenzter Snapshot versioniert. Der Bootstrap legt 46 Seiten, Beziehungen und eine Implementierung ohne feste Datenbank-IDs an; Wiederholung verändert identische Inhalte nicht. [Anleitung, Vorschau und Schutz bestehender Inhalte](docs/handbook/bootstrap/README.md).

[Editierbare Pilotvorlagen und Prüfgrenzen](docs/handbook/design-resources/README.md) · [Unabhängige Agentenprobe mit Nachprüfung](docs/handbook/independent-trial/README.md).

### UI Contracts importieren

UI Contracts erzeugt ein eigenständiges Exportverzeichnis mit Manifest, Bibliothek, Designartefakten, Herkunftsregister und portablen Skills. Diesen Ordner beliebig kopieren und in Arve importieren:

```sh
node scripts/import-contract-library.mjs /pfad/zum/shadcn-export
```

Arve liest ausschliesslich dieses Paket. Kein Quellcheckout, keine Umgebungsvariable mit Repositorypfad und keine Laufzeitverbindung zum Erzeuger sind erforderlich. Der Import prüft Formatversion, alle Dateihashes, die Gesamt-Revision und gebundene Contractquellen. Zusätzliche oder fehlende Dateien, Symlinks und aus der Bibliothek führende Contractbindungen werden abgelehnt. Bereits vorhandene Revisionen werden nur bei identischem Inhalt wiederverwendet, nie überschrieben.

Unter `src/contracts/libraries/<bibliothek>/<revision>/package/` bleibt das vollständige Originalpaket einschliesslich `manifest.json`, `dependencies.json` und `skills/` erhalten. Die Bibliotheksdateien stehen zusätzlich an den bisherigen Arve-Artefaktpfaden bereit; `contracts.json` ist die lokale Projektion für Portal und MCP. Die Revision identifiziert das gesamte Paket einschliesslich Skills. Herkunftsverweise sind ausdrücklich keine lokal auflösbaren Dateiverweise. Historische Prüfbelege bleiben von den Prüfsummen des Exportpakets getrennt.

Neue Revisionen werden im Katalog `src/contracts/catalog.ts` registriert. Bestehende Payload-Seiten behalten ihre gebundene Revision. Um eine Seite umzustellen, im CMS die Contractrevision ändern und die Seite veröffentlichen. Eine separat dokumentierte Implementierungsprüfung bleibt an ihrer bisherigen Revision gebunden. Portal und MCP lesen den Stand der veröffentlichten Komponentenseite.

Der Projekt-Skill [arve-ui-contracts](.agents/skills/arve-ui-contracts/SKILL.md) nutzt die mitimportierten Anleitungen. Das portable Paket unterstützt Lesen, UX-Auswahl und die Einordnung vorhandener Nachweise. Autorenwerkzeuge und ausführbare Plattformprüfungen werden nicht durch das Kopieren eines Skills verfügbar; der Export benennt diese Grenzen und Voraussetzungen ausdrücklich.

Den alten Einzelkomponenten-Exporter ersetzt der Export in UI Contracts. Bereits importierte historische Revisionen bleiben aus Gründen der Seitenversionierung unverändert erhalten.

Importprüfung: `node --test scripts/import-contract-library.test.mjs`.

### MCP

`http://127.0.0.1:3010/mcp` verwendet Streamable HTTP. Das lesende Tool `get_component_page` erwartet `{"system":"shadcn","component":"button"}`. Portal und MCP nutzen dieselbe Abfrage für veröffentlichte Payload-Inhalte, Demo-Konfiguration und Contract-Referenz. Der lokale Server bindet an Loopback.

Für veröffentlichte Leitfäden stehen zusätzlich diese lesenden MCP-Tools bereit:

- `list_documentation_tree` mit `{"system":"shadcn"}` listet Bereiche, Seiten, Layoutbeispiele und Komponenten.
- `search_documentation` mit `{"system":"shadcn","query":"Schweizer PLZ"}` durchsucht Titel, Kurzbeschreibungen und redaktionelle Texte.
- `get_documentation_page` mit `{"system":"shadcn","section":"formulare-validierung"}` liest den veröffentlichten Leitfaden. Mit `section: "layout"` und `example: "detail"` liefert es die Daten zum entsprechenden Layoutbeispiel.

## Mehrere Design-Systeme

Nach den shadcn-Seed-Skripten die bestehenden Seiten dem System und seinem Seitenbaum zuordnen:

```sh
node --env-file=.env --import tsx scripts/migrate-design-systems.ts
```

Das Skript ordnet die Seiten der shadcn-Referenzimplementierung zu. Bereits zugeordnete Seiten werden bei einem erneuten Lauf übersprungen. Im Payload-Admin lassen sich Name, Slug, Beschreibung, Theme und Startseite unter **Design-Systeme** bearbeiten. Unter **Seiten** steuern Design-System, Seitentyp, übergeordnete Seite und Sortierung den veröffentlichten Baum. Portal und MCP lesen denselben Baum. Seiten und Komponenten sind unter `/systems/<system>/…` erreichbar.

Für Seitenslugs gilt aktuell die globale Eindeutigkeit in Payload. Verwende etwa `mein-system-grundlagen` für die URL `/systems/mein-system/grundlagen`. Systemübergreifende Zugriffstrennung für private Daten erfordert separate Instanzen oder eigene Zugriffskontrollen. Die shadcn-Referenzimplementierung ist öffentlich lesbar.

## Seitenvorlagen

### shadcn-Handbuch ergänzen

Nach den shadcn-Seeds und der Seitenmigration können die kuratierten Leitfäden eingespielt werden:

```sh
node --env-file=.env --import tsx scripts/seed-shadcn-handbook.ts
```

Das Skript legt fehlende Leitfäden unter den veröffentlichten Handbuchbereichen an. Bestehende Seiten werden übersprungen, damit redaktionelle Änderungen in Payload erhalten bleiben.

Im Payload-Admin unter **Seiten** das Design-System und den **Seitentyp** auswählen. Bei **Grundlagen**, **Layout**, **UX-Pattern** und **Komponente** erscheinen unter **Seitenvorlage** die passenden leeren Felder. Bestehende freie Inhaltsblöcke bleiben separat bearbeitbar. Auf veröffentlichten Seiten erscheinen die ausgefüllten Vorlagenabschnitte und sind über MCP als `templateSections` abrufbar und durchsuchbar.

### Leeren Seitenbaum per REST-API anlegen

Voraussetzungen sind eine laufende Payload-Instanz mit aktuellem Datenbankschema und ein Payload-API-Schlüssel mit Lese- und Schreibzugriff auf **Design-Systeme** und **Seiten**. Den Schlüssel als Umgebungsvariable `PAYLOAD_API_KEY` bereitstellen.

```sh
npm run seed:system -- --slug mein-system --name "Mein Design-System"
```

Mit `--url https://cms.example.org` lässt sich eine andere Instanz wählen. Der Standard ist `http://127.0.0.1:3010`. Das Skript legt das System und acht leere Seiten als Entwürfe an und setzt die Übersicht als Startseite, falls noch keine zugeordnet ist. Der Komponentenbereich ist ein Leitfaden als Einstieg in den späteren Katalog. Bestehende Seiten und eine bereits gewählte Startseite bleiben erhalten. Die Seiten werden nach der redaktionellen Veröffentlichung im Portal und über MCP auffindbar.

## Plattformimplementierungen

Unter **Implementierungen** lässt sich eine Komponentenseite mit veröffentlichten Einträgen für Web, iOS und Android verknüpfen. Web kann Desktop und Mobile als Nutzungskontexte führen. Paketversion, technische Referenz, Freigabestatus und Prüfumfang sind pro Eintrag editierbar. Der Freigabestatus ist unabhängig vom Payload-Veröffentlichungsstatus. Das Portal und `get_component_page` zeigen veröffentlichte Einträge.

Für die shadcn-Referenz kann nach der Seitenmigration der vorhandene Spartan-Button als Web-Preview eingetragen werden:

```sh
node --env-file=.env --import tsx scripts/seed-spartan-implementation.ts
```
