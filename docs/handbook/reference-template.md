# Referenz und eigene Systeme

Die Datenbank ist der Arbeitsstand. Das versionierte Handbuch liefert die vollständige veröffentlichte shadcn-Ausgangslage für eine neue Installation. Ein Export ist eine transportierbare Inhaltsbasis, kein Datenbankbackup mit Benutzerkonten oder Versionshistorie.

## Erster Start

Nach der lokalen Einrichtung in der README genügt `npm run dev`. Der vorgeschaltete Schritt `reference:setup` prüft die Datenbank und richtet auf einem vollständig leeren Ziel zunächst das Payload-Schema ein. Danach importiert er shadcn mit **116 veröffentlichten Seiten, 69 Komponenten und einer dokumentierten Implementierung**. Alle zugehörigen Contract-Dateien, Stile, Schriften und Skills liegen bereits im Repository. Portal und MCP greifen anschließend auf PostgreSQL zu. Es gibt keine Verbindung zum ursprünglichen ui-contracts-Checkout.

Auch `npm start` führt die Einrichtung aus. Direkte Aufrufe von `next dev` oder `next start` umgehen die npm-Schritte; in solchen Betriebsumgebungen `npm run reference:setup` als Einrichtungsschritt ausführen. Eine bestehende Datenbank braucht das aktuelle Payload-Schema; der Schritt ersetzt keine Produktionsmigration.

Besteht bereits ein System mit dem Slug shadcn, werden dessen Inhalte nicht verändert – auch dann nicht, wenn es sich um einen älteren oder unvollständigen Stand handelt. Eine solche Installation braucht eine bewusst geplante Ergänzung; sie wird nicht heimlich zurückgesetzt. `ARVE_BOOTSTRAP_REFERENCE=0` deaktiviert die automatische Einrichtung. Benutzerkonten und bestehende andere Systeme werden nicht kopiert oder entfernt.

## Referenz als eigenes System übernehmen

In `.env` bzw. der Umgebung `TEMPLATE_DATABASE_URI` ausdrücklich auf die gewünschte Ziel-Datenbank setzen. Das darf dieselbe Datenbank sein, in der die Referenz liegt. Die Zieladresse muss neu sein.

```sh
npm run reference:import -- --slug mein-system --name "Mein Design-System"
npm run reference:import -- --slug mein-system --name "Mein Design-System" --apply
```

Der erste Aufruf ist eine Vorschau ohne Inhaltsänderung. Der zweite erzeugt alle Seiten als Entwürfe mit neuen Datenbank-IDs. Startseite, Elternbeziehungen und dokumentinterne System-URLs zeigen auf die Kopie. Contract-Bibliothek, Revision, Quellenzitate und Quelltexte behalten ihre tatsächliche Herkunft; shadcn wird nicht pauschal durch einen Firmennamen ersetzt. Implementierungen werden als ungeprüfte Entwürfe übernommen. Bestehende Zielsysteme oder belegte Seitenslugs führen zum Abbruch. Es gibt keine Überschreiboption.

Die Inhalte können anschließend im CMS unabhängig geändert werden. Entwürfe erscheinen erst nach der Veröffentlichung im öffentlichen Portal und über MCP. Die ursprüngliche shadcn-Referenz bleibt sofort vollständig erkundbar. Der Vorgang wird derzeit per Skript angeboten, nicht als Kopieraktion im Admin.

## Paket zum Weitergeben

```sh
npm run reference:export -- --out /pfad/arve-referenz
```

Das neue Verzeichnis enthält `snapshot.json`, `manifest.json`, gebundene Contract-Verzeichnisse einschließlich Skills und gegebenenfalls referenzierte Medien. Das Manifest enthält Prüfsummen aller Paketdateien. Historische Implementierungsnachweise behalten ihre damaligen Contract-Revisionen. Die große Bibliothek wird nur für dieses Paket kopiert; pro Systemkopie in derselben Arve-Installation werden keine Contract-Dateien dupliziert.

Auf einer weiteren Arve-Installation mit demselben Contract-Katalog:

```sh
npm run reference:import -- --input /pfad/arve-referenz --slug mein-system --name "Mein Design-System"
npm run reference:import -- --input /pfad/arve-referenz --slug mein-system --name "Mein Design-System" --apply
```

Der Import prüft Paketdateien und Abhängigkeiten gegen den installierten Katalog. Fehlende oder abweichende Contract-Abhängigkeiten führen vor Inhaltsänderungen zum Abbruch. Ein Datenpaket installiert keinen neuen Anwendungscode oder Katalogeintrag. Für eine vollständig leere neue Ziel-Datenbank zusätzlich `--apply --initialize-empty-database` verwenden; das wird auf nichtleeren Datenbanken abgelehnt.

## Basis nach redaktioneller Überarbeitung aktualisieren

```sh
npm run reference:capture
npm run check:reference
npm run reference:export -- --out /pfad/arve-referenz-neuer-stand
```

`reference:capture` liest die veröffentlichten shadcn-Inhalte aus `DATABASE_URI` und aktualisiert `scripts/content/handbook-snapshot.json`. Änderungen im CMS gelangen bewusst nicht bei jedem Start in Git. Entwürfe, Benutzerkonten, Sitzungen und Bearbeitungsverläufe sind nicht Teil der veröffentlichten Vorlage. Neue Medien werden im Paket transportiert; im Repository ist das bisher leere Snapshot-Medienverzeichnis bei Bedarf mit zu versionieren.

Der öffentliche Snapshot unterstützt derzeit eine gemeinsame Komponentenrevision. Seiten-Eltern, Startseite, Implementierungen und guideline-Bilder sind als Beziehungen abgebildet. Nicht abgebildete interne Lexical-Dokumentverweise werden beim Kopieren ausdrücklich abgelehnt, statt fremde Datenbank-IDs weiterzuverwenden.

## Inhalte und besondere Darstellungen

Alle gespeicherten Texte, Inhaltsblöcke und Vorlagen werden kopiert. Einige besonders gestaltete shadcn-Ansichten, interaktive Beispiele und die shadcn-Startseite sind weiterhin Anwendungscode. Das Original ist mit diesem Repository vollständig erkundbar. Andere Systeme verwenden die allgemeinen Datenbank-Renderer; die Kopie übernimmt noch nicht automatisch alle besonderen Vorschau-Layouts. Das Paket allein ist deshalb kein unabhängiger Ersatz für die Arve-Anwendung.

## Prüfungen

`npm run check:reference` prüft die Umformung und Schutzregeln ohne Datenbank. `npm run check:reference:db` legt ein neues isoliertes Schema an, importiert Referenz und Kopie und entfernt das Testschema danach. `node --env-file=.env --import tsx scripts/setup-reference.integration.ts` prüft den echten Erststart in einer kurzlebigen neuen Datenbank (benötigt CREATE DATABASE). Beide Datenbankprüfungen verwenden die konfigurierte Verbindung ausschließlich für das explizit neu benannte Testziel.
