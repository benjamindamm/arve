# Reproduzierbarer Erstaufbau des shadcn-Handbuchs

Git enthält keine PostgreSQL-Inhalte. `scripts/bootstrap-handbook.ts` importiert deshalb den versionierbaren, ausdrücklich begrenzten öffentlichen Snapshot `scripts/content/handbook-snapshot.json`. Die alten Seed-/Release-Skripte mit historischen IDs und `updatedAt`-Voraussetzungen sind **kein** Erstaufbauverfahren.

## Umfang und Herkunft

- 46 veröffentlichte Seiten des Systems `shadcn`, System-Metadaten und eine veröffentlichte Implementierung.
- Alle vier Komponentenseiten behalten Contractrevision `65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26`.
- Die Implementierung Spartan Button behält ihren historischen Nachweisstand `fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d`. Ein neuer Seitenpin aktualisiert keinen Implementierungsnachweis.
- Erfassung ausschließlich mit Payload `push:false`, `draft:false`, Systemfilter und veröffentlichtem Status. Es werden ausdrücklich benannte Inhaltsfelder übernommen, keine Benutzer, Zugangsdaten, Sitzungen, IDs, Bearbeitungszeitpunkte oder Versionshistorien. Der öffentliche Inhalt enthält keine personenbezogenen Kontaktdaten.
- `sourceCommit` bezeichnet den damaligen Repository-HEAD; der Arbeitsstand enthielt zusätzliche Änderungen und ist durch diesen Commit allein **nicht** vollständig beschrieben. Maßgeblich für den exakten Inhalt ist die Snapshot-Datei mit ihrem SHA-256 in `verification.md`.
- Keine der 46 Seiten referenziert ein Medienobjekt über einen guideline-Block. Daher enthält der Snapshot keine Mediendateien. Die vier bestehenden Dateien im ignorierten `media/` werden nicht pauschal übertragen. Exporte mit Medien werden vom Import derzeit ausdrücklich abgelehnt.
- Contractdateien und öffentliche Gestaltungsdownloads kommen aus dem Repository; sie werden nicht aus der Datenbank rekonstruiert.

## Erstinstallation auf einer separaten leeren Datenbank

Voraussetzungen: Repository einschließlich Contractkatalog, installierte Node-Abhängigkeiten (`npm ci`), erreichbares PostgreSQL und `PAYLOAD_SECRET` in der Umgebung bzw. `.env`. Die Ziel-Datenbank muss bereits angelegt sein. `BOOTSTRAP_DATABASE_URI` muss ausdrücklich gesetzt sein; das Skript wählt `DATABASE_URI` niemals selbst als Ziel.

```sh
export BOOTSTRAP_DATABASE_URI='postgresql://USER:PASSWORD@HOST:PORT/NEW_DATABASE'
node --env-file=.env --import tsx scripts/bootstrap-handbook.ts --apply --initialize-empty-database
```

Dieser ausdrücklich aktivierte Erstaufbau prüft, dass die gesamte Ziel-Datenbank keine Nutzertabellen, Views oder Sequenzen enthält, und initialisiert dann mit Payload das reguläre `public`-Schema. Eine nichtleere Datenbank wird abgelehnt. Die Anwendung kann danach mit `DATABASE_URI` auf diese neue Datenbank zeigen. Admin-Benutzer werden nicht importiert; deren Einrichtung erfolgt separat über den üblichen Payload-Erstzugang.

Die Schema-Initialisierung ist **keine Produktionsmigration**. Bestehende Produktionsschemas müssen über einen separat geprüften Migrationsweg bereitgestellt bzw. aktualisiert werden. Bei einer bereits bereitgestellten leeren Payload-Datenbank genügt der Import ohne Initialisierungsoption.

## Vorschau und Wiederholung

```sh
node --env-file=.env --import tsx scripts/bootstrap-handbook.ts
node --env-file=.env --import tsx scripts/bootstrap-handbook.ts --apply
```

Standard ist Vorschau; normales Preview/Apply verwendet immer `push:false`. Auf einer noch völlig schemafreien Datenbank muss zuerst die explizite Initialisierung erfolgen. Die Ausgabe nennt Anzahlen, keine Datenbank-URI oder Zugangsdaten.

Logische Schlüssel: Systemslug; Seiten innerhalb dieses Systems anhand ihres Slugs; Implementierungen anhand Komponentenseitenslug, Plattform, Paketname und Name. Technische Datenbank-IDs werden nur zur Laufzeit aufgelöst. Zunächst entstehen alle Seitenidentitäten, dann Elternbeziehungen, Systemstartseite und Implementierungen. Der Inhaltsimport läuft in einer Transaktion. Ein identischer Wiederholungslauf erzeugt keine neuen Versionen und verändert keine Zeitstempel.

Abweichende vorhandene Inhalte, fremd belegte Seitenslugs und abweichende redaktionelle Entwürfe führen **vor Inhaltsänderungen** zum Abbruch. Es gibt kein Force-Overwrite und keine automatische Aktualisierung alter Snapshots. Zusätzliche fremde Inhalte werden nicht gelöscht. Eine teilweise bereits vorhandene, aber abweichende Installation wird ebenfalls nicht automatisch repariert.

Während des Imports müssen redaktionelle Schreibzugriffe pausieren. Der Transaktionsschutz macht den eigenen Import atomar, ersetzt aber keine Sperre gegenüber gleichzeitig schreibenden CMS-Sitzungen. Die Schema-Initialisierung ist ein separater Schritt; scheitert der folgende Inhaltsimport, kann das leere Schema bereits existieren. Danach normalen Import ohne Initialisierungsoption verwenden.

## Prüfungen auf isolierten Zielen

```sh
export BOOTSTRAP_TEST_DATABASE_URI='postgresql://USER:PASSWORD@HOST:PORT/TEST_ADMIN_DATABASE'
node --env-file=.env --import tsx scripts/bootstrap-handbook.test.ts
node --env-file=.env --import tsx scripts/bootstrap-handbook-empty-database.test.ts
```

Der erste Test erzeugt einen neuen zufällig benannten `handbook_bootstrap_test_*`-Schema-Bereich. Der zweite benötigt `CREATE DATABASE` und erzeugt eine vollständig neue `handbook_bootstrap_db_*`-Datenbank. Beide entfernen ausschließlich ihr selbst benanntes Testziel im `finally`-Block. Das konfigurierte bestehende Schema wird weder zurückgesetzt noch gelöscht. Der zweite Test prüft den echten CLI-Erstaufbau im normalen `public`-Schema. Ein fehlendes Datenbankrecht ist ein Testfehler, keine Freigabe.

Die Option `--schema ... --initialize-schema --apply` ist nur für neue isolierte `handbook_bootstrap_*`-Schemas vorgesehen; eine regulär konfigurierte Anwendung liest diese Schemas nicht automatisch.

## Bewusste Neuerfassung

`scripts/bootstrap-handbook-export.ts` ist das read-only Erfassungswerkzeug für den öffentlichen shadcn-Inhalt. Sein Aufruf liest `DATABASE_URI` aus der Umgebung und überschreibt die lokale Snapshot-Datei; deshalb nur als ausdrücklich beabsichtigte Inhaltsrevision ausführen, anschließend Diff, Pin-Erhaltung und Tests prüfen. Änderungen im CMS gelangen nicht automatisch nach Git.

```sh
node --env-file=.env --import tsx scripts/bootstrap-handbook-export.ts
```

Historische Releasequellen und Nachweise bleiben bestehen. Die Übernahme eines neu erfassten Snapshots in eine bereits redaktionell abweichende Datenbank braucht einen eigenen geprüften Aktualisierungslauf.
