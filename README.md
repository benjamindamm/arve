# Arve

Plattform für mehrere Design-Systeme mit Payload CMS, Next.js und PostgreSQL. Arve verbindet redaktionelles Designwissen, versionierte UI-Contract-Exports und plattformspezifische Implementierungen. Teams lesen die veröffentlichten Inhalte im Portal; KI-Agenten können denselben Stand über MCP abrufen.

Im Admin-Bereich lassen sich Seiten mit Rich Text, Bildern und Do’s und Don’ts pflegen. Die Sammlung **Seiten** unterstützt Entwürfe und Versionshistorie. Die Startseite erklärt die Arbeitswege für gemeinsames Entwerfen, gezieltes Umsetzen und die Weiterentwicklung bestehender Designs und Codebases.

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

### Contract-Export

```sh
node scripts/export-contract.mjs ../ui-contracts shadcn button
```

Der Befehl erstellt unter `src/contracts/exports/` einen Snapshot der lokalen Quellen. Die Export-Revision basiert auf den Prüfsummen aller exportierten Dateien und bezeichnet keinen Git-Commit. Neue Revisionen werden im Katalog `src/contracts/catalog.ts` registriert und danach in Payload ausgewählt. Alte registrierte Revisionen bleiben auflösbar.

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

Das Skript legt shadcn und ein minimales Beispielsystem an. Bereits zugeordnete Seiten werden bei einem erneuten Lauf übersprungen. Im Payload-Admin lassen sich Name, Slug, Beschreibung, Theme und Startseite unter **Design-Systeme** bearbeiten. Unter **Seiten** steuern Design-System, Seitentyp, übergeordnete Seite und Sortierung den veröffentlichten Baum. Portal und MCP lesen denselben Baum. Seiten und Komponenten sind unter `/systems/<system>/…` erreichbar.

Für Seitenslugs gilt aktuell die globale Eindeutigkeit in Payload. Verwende etwa `mein-system-grundlagen` für die URL `/systems/mein-system/grundlagen`. Systemübergreifende Zugriffstrennung für private Daten erfordert separate Instanzen oder eigene Zugriffskontrollen. Die beiden lokalen Referenzsysteme sind öffentlich lesbar.

## Seitenvorlagen

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
