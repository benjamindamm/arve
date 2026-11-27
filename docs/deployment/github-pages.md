# Handbuch auf GitHub Pages veröffentlichen

Die Pages-Ausgabe rendert den veröffentlichten Datenbankinhalt aus `scripts/content/handbook-snapshot.json` als HTML, CSS und JavaScript. GitHub benötigt dafür weder Payload-Konfiguration noch einen Datenbankzugang. Die normale Anwendung mit Payload, PostgreSQL und MCP bleibt separat nutzbar.

## Inhalte aktualisieren

1. Inhalte in Payload bearbeiten und veröffentlichen.
2. Den freigegebenen shadcn-Stand lokal aus der Datenbank erfassen:

```sh
node --env-file=.env --import tsx scripts/bootstrap-handbook-export.ts
```

3. Export lokal bauen und prüfen:

```sh
npm run build:static
npm run check:static
npm run preview:static
```

Die Vorschau läuft unter `http://127.0.0.1:3020/arve/`. Sie liefert ausschliesslich Dateien aus dem erzeugten Export. Eine Datenbankverbindung wird beim statischen Build ausdrücklich geleert. Der Build verändert keine CMS-Daten und aktualisiert den Snapshot nicht automatisch.

4. Den geprüften Snapshot samt Codeänderungen committen und nach `main` pushen. `.github/workflows/pages.yml` baut, prüft und veröffentlicht ihn. Der Workflow kann unter Actions auch manuell gestartet werden.

Im Repository muss unter Settings → Pages → Source **GitHub Actions** gewählt sein. Die vorgesehene Adresse ist `https://benjamindamm.github.io/arve/`. Der Workflow übernimmt den tatsächlichen Basispfad aus der Pages-Konfiguration. Für eine lokale Ausgabe ohne Unterverzeichnis jeweils `ARVE_BASE_PATH=''` vor den drei npm-Befehlen setzen.

## Enthaltene Funktionen

- Alle 116 veröffentlichten Handbuchseiten, darunter 69 Komponenten.
- Kapitelnavigation, Komponentensuche, Patternsuche und Filter.
- React-basierte Portalinteraktionen und die vier Angular-/Spartan-Beispiele im Browser.
- Vollständige gebundene Contractdateien mit Hashprüfung, Syntaxhervorhebung und Downloads; statische Quellenbilder.
- SVG-/FIG-Designvorlagen sowie Rechnungsbeispiele mit Filterrückkehr und vorab erzeugten PDFs.

Payload-Admin, REST-API und der serverseitige MCP-Endpunkt werden nicht veröffentlicht. Die allgemeine Beschreibung der Agentenarbeit bleibt sichtbar; die Startseite verlinkt den lokalen MCP-Zugang für diese statische Ausgabe. Inhalte ändern sich erst nach erneutem Export und Deployment.

## Umsetzung und Prüfgrenzen

Die gemeinsame Darstellung bleibt in `src/app/(docs)` und `src/docs`. Eine kleine Datenzugriffsschicht liest entweder Payload oder den Snapshot. Der statische Build erzeugt eine isolierte Anwendung unter `.runtime/static-site` mit genau den vorab bekannten Routen; Backendrouten und die alte Dokumentationsroute werden dort weggelassen. Die normale Next.js-/Payload-Konfiguration wird nicht auf statischen Betrieb umgestellt.

Der Assetexport schreibt nur die gebundenen, SHA-256-geprüften Contractartefakte sowie registrierte Designressourcen und veröffentlichte Medien. Gemeinsame Dateien werden einmal je Exportrevision abgelegt. Keine `.env`, Benutzerkonten oder Datenbankdateien gehören zur Veröffentlichung. `handbook-snapshot.json` und `publication.json` dokumentieren den veröffentlichten Inhalt und die Ressourcenhashes.

`check:static` prüft alle veröffentlichten Seiten, interne HTML-Verweise einschliesslich Scripts, Stylesheets und Inline-Bildressourcen sowie sämtliche exportierten Ressourcenhashes. Das ersetzt keine vollständige manuelle Einzelprüfung aller Seiten oder eine Barrierefreiheitsprüfung. Die Browserprüfung umfasst Arbeitsweg-Tabs, Komponenten- und Patternsuche, Angular-Button, geladenes SCXML und den Rechnungsablauf mit Filterrückkehr.

Am 21. November 2026 erfolgreich ausgeführt: statischer Build ohne Datenbankzugang; 116 Handbuchseiten mit 69 Komponenten; 198 HTML-Dateien einschliesslich HTML-Contractartefakten; 54.951 interne Dateiverweise; SHA-256 aller 1.664 exportierten Ressourcen. Die normale Payload-Anwendung bestand ebenfalls den Produktionsbuild und die Komponenten-Releaseprüfung. Alle 69 Komponenten wurden weiterhin über den lokalen MCP-Endpunkt geprüft. Browserprüfung in BrowserOS neo bei breiter und schmaler Ansicht; insbesondere Suche, Live-Button, SCXML, Filterrückkehr und der Hinweis zum fehlenden MCP-Endpunkt funktionieren in der statischen Ausgabe. Diese Nachweise beziehen sich auf den lokalen Export vor der Veröffentlichung.

## MCP über den statischen Export

Der Build erzeugt auch `arve-data/current.json` und eine unveränderliche, über SHA256 adressierte Release-Struktur. Das lokale [Arve-MCP-Paket](../../packages/arve-mcp/README.md) liest diese Daten über die konfigurierbare Website-URL. Die statische Website selbst bietet weiterhin keinen `/mcp`-Endpunkt.

HTML und JSON verwenden denselben gespeicherten veröffentlichten Handbuchstand. Datenbankänderungen zuerst mit dem bestehenden Referenzexport übernehmen; ein Push veröffentlicht keine ungespeicherten Datenbankänderungen. Für einen neuen Stand den Agenten neu verbinden. Ein Deployment darf alte Releases entfernen: Bereits verbundene Agenten melden dann für noch nicht geladene Dateien einen Fehler und müssen neu verbinden.

`npm run check:mcp:static` prüft das installierte Paket gegen die veröffentlichte Leseschicht. Der Pages-Workflow führt diesen Vergleich vor der Veröffentlichung aus.
