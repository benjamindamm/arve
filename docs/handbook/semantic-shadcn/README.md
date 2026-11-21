# Semantische Shadcn-Referenz

Arve übernimmt den eigenständigen Export aus ui-contracts, Commit `8bc65e7b6abd003264d98b84c2ccd3b5c199d583`. Paketrevision: `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`. Das vollständige Paket liegt unter `src/contracts/libraries/shadcn/<revision>/package/`, einschliesslich Originalbelegen, binären Assets und Leseskill. Es benötigt kein benachbartes ui-contracts-Repository.

Alle 69 veröffentlichten Komponentenseiten verweisen ausdrücklich auf diese Revision. Der Import bewahrt die Paketbytes und prüft Dateimenge, Manifestrevision und jeden Dateihash. `--compact` verkleinert die Komponentenbeschreibungen; das eigenständige Paket bleibt vollständig. Vorhandene Revisionen werden nur bei identischem Ergebnis wiederverwendet, niemals überschrieben.

## Übernahme

In ui-contracts einen neuen Exportordner erzeugen; bei einem frischen Checkout stellen die Bibliothekswerkzeuge die komprimierten Quellen wieder her. Direkte Quellenwerkzeuge benötigen zuvor `python3 tools/libraries/evidence.py restore --library shadcn`.

```sh
python3 tools/libraries/export.py --library shadcn --out dist/exports/shadcn-NEUER-STAND
python3 tools/libraries/export.py --verify dist/exports/shadcn-NEUER-STAND
```

Den ganzen Ordner übertragen. In Arve:

```sh
node scripts/import-contract-library.mjs /absoluter/pfad/zum/export --compact
```

Neue Revisionen anschliessend ausdrücklich im Contractkatalog und Skillregister registrieren. Die CMS-Seiten behalten ihre bisherige Revision bis zur geschützten Übernahme. Die vorhandene historische Implementierung wird separat geführt und durch einen neuen Seitencontract nicht automatisch neu geprüft.

Die aktuelle einmalige Übernahme verwendet `scripts/adopt-shadcn-semantic.ts`. Sie erwartet den zuvor gesicherten lokalen Datenbankstand `.runtime/semantic-before.json`, prüft konkurrierende oder unveröffentlichte Änderungen und aktualisiert die 69 Pins in einer Transaktion. Nur beim Button ändern sich zusätzlich Zusammenfassung und Inhalt. Ein erneuter Aufruf ändert null Seiten. Für einen späteren Quellenstand eine neue gezielte Migration vorbereiten; den alten Baseline-Schutz nicht entfernen.

## CSS und Schriftdateien

Der Import folgt den tatsächlichen CSS-Importen und `url()`-Referenzen. `styleAssets` enthält Pfad, SHA-256 und Dateityp. Dadurch stehen `layout.css`, globale Tokens, `fonts.css` und die lokalen Schriftdateien im Portal und in der MCP-Antwort bereit. Relative Pfade bleiben erhalten. Fehlende oder aus dem Paket herausführende lokale Abhängigkeiten führen zum Abbruch.

Das Portal liefert diese Dateien unter `.../components/<component>/assets/<paketpfad>` aus. Die statische Veröffentlichung verwendet `/contracts/shadcn/<revision>/<paketpfad>`. Die Styles werden als Contractdateien angeboten; die bestehende Angular-Demo behält ihre eigene Implementierung und ihren Nachweis.

## Nachweise

- `import.json`: Exportrevision, Quellencommit und Snapshotbezug.
- `verification.json`: alle 69 Komponenten über Portal und MCP; Quellenhashes, Frameworkreferenzen und 77 unterschiedliche CSS-/Schriftdateien geprüft.
- `../component-template/contract-alignment.json`: Button-Vorlage mit neun Abschnitten, 20 Quellen und 21 überprüften Aussagen.
- `../component-template/verification.json`: Build-, Datenbank-, Browser- und statische Prüfungen mit Grenzen.

Importer- und Skilltests: jeweils acht bestanden. Regulärer Produktionsbuild und Build ohne Datenbank bestanden. Statische Veröffentlichung: 198 HTML-Dateien, 116 Handbuchseiten, 69 Komponenten, 57.348 geprüfte interne Verweise und 2.955 Dateien mit geprüftem Hash.

Der Quellenstatus `complete` und `release:false` wird übernommen. Diese Integration ist keine allgemeine Abnahme aller React-, Angular-, iOS- oder Android-Implementierungen. Die Texte der übrigen 68 Komponenten wurden bei diesem Import nicht redaktionell neu ausgearbeitet. Arve ist lokal vorbereitet und noch nicht committet oder gepusht; ui-contracts ist gepusht.
