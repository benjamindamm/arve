# Statisches Handbuch über MCP

Arve baut HTML und MCP-Daten aus demselben veröffentlichten Referenzexport. Der lokale MCP-Server aus `packages/arve-mcp` liest die Daten über HTTP(S). Die statische Website benötigt keine ausführbare Anwendung.

## Veröffentlichung

`npm run build:static` führt `scripts/export-mcp-data.ts` mit dem bestehenden Snapshot-Datenadapter aus. Exportiert werden die veröffentlichten Lesemodelle, Suchdokumente, expliziten Contract-Zuordnungen, Autoren-Skills und allowlisteten Ressourcen der registrierten Bibliotheks-Skills. Benutzer, CMS-Versionen und unveröffentlichte Entwürfe werden nicht exportiert.

```text
arve-data/
  current.json
  releases/<sha256>/
    manifest.json
    objects/<sha256>.json
contracts/<library>/<revision>/<path>
```

`current.json` nennt Format, Release und Manifest-Hash. Der SHA256 des Manifests ist zugleich die Release-Kennung. Das Manifest verwendet `format: arve-static-mcp/v1` und enthält:

- `index`: Verweise für Systeme, Bäume, Suchindizes, Seiten, Komponenten, Zuordnungen, Skills und die Farbvergleichs-Ressource.
- `files`: erlaubte Ressourcen mit SHA256 und Bytezahl. JSON-Objekte liegen im Release-Verzeichnis. Contract-Dateien können über `sitePath` auf die bereits veröffentlichten, revisionsgebundenen Portal-Downloads verweisen.

Inhaltsgleiche JSON-Ressourcen werden nur einmal geschrieben. Vorschaubilder und andere Contract-Downloads werden nicht erneut kopiert. Der Versionszeiger wird zuletzt geschrieben; GitHub Pages veröffentlicht das vollständige Build-Artefakt.

## Verbindung

`src/mcp/server.ts` registriert die gemeinsamen Werkzeuge. Der bisherige HTTP-Endpunkt verwendet den Live-Datenadapter; das separate npm-Paket einen HTTP-Leseadapter für den statischen Export. So bleiben Schemas, Suchlogik, kompakte Projektionen und Fortsetzungen gemeinsam gepflegt.

`--base-url` oder `ARVE_BASE_URL` wählt die Website inklusive Unterverzeichnis, ohne `/mcp`. Der Server bindet sich beim Start an eine Release-Kennung und lädt nur benötigte Ressourcen. Ressourcen müssen im Manifest stehen und Prüfsumme sowie Bytezahl erfüllen. Weiterleitungen, beliebige URL-Argumente und Pfadtraversierung sind ausgeschlossen. Abrufe sind zeitlich und in ihrer Grösse begrenzt; der Speicher-Cache ist begrenzt. HTTPS und der konfigurierte Host bleiben die Vertrauensbasis, Hashes ersetzen keine Signatur des Herausgebers.

Ein neues Deployment wird erst nach erneutem Verbinden gelesen. Fehlen Ressourcen des alten Stands, schlägt der Abruf ausdrücklich fehl. Für unterbrechungsfreie längere Sitzungen kann der Host alte Release-Ordner zusätzlich aufbewahren.

Die Werkzeuge bleiben lesend. Ohne Contract-Verknüpfung sind Handbuch und Plattforminformationen weiterhin nutzbar. Ein Bibliotheksname oder Komponentenlabel erzeugt keine automatische Zuordnung zu einer Seite.

## Prüfen und verteilen

- `npm run check:static`: HTML-Verweise sowie alle Manifest- und Ressourcen-Hashes.
- `npm run check:mcp:static`: echtes npm-Paket packen, ausserhalb des Repositories installieren und über SDK/stdio mit der bisherigen veröffentlichten Leseschicht vergleichen. Prüft auch Skills, Fortsetzungen, beschädigte Dateien und Release-Bindung; kein Datenbankzugriff.
- `npm run pack:mcp`: installierbares `.tgz` unter `.runtime/`.

Die GitHub-Workflows prüfen die statische Ausgabe vor einer Pages-Veröffentlichung. `mcp-package.yml` liefert zusätzlich ein Paketartefakt. Für GitHub Packages und den öffentlichen Release-Download siehe [Paket-README](../../packages/arve-mcp/README.md#build-and-release-in-the-arve-repository).
