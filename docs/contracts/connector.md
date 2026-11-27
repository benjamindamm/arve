# UI Contracts Connector für Arve

Technischer Entwurf vom 27. November 2026. Der erste Durchstich mit generischer Registry, automatischem Import und optionaler Payload-Auswahl ist umgesetzt; [Bedienung und tatsächlicher Umfang](connector-usage.md). Die folgenden Abschnitte enthalten auch die noch geplante Updatefunktion. Der Connector wird als kleine Integrationsschicht in Arve umgesetzt. UI Contracts bleibt ein eigenständiger Produzent portabler Datenpakete. Beide Anwendungen benötigen weder gemeinsame Datenbanken noch gegenseitige Laufzeitverbindungen.

Ziel: Ein geprüftes Exportpaket importieren, einem Design-System zuordnen und Komponenten im CMS auswählen können, ohne Quellcode für jede Bibliothek oder Revision anzupassen. Updates werden als Vorschläge für Entwürfe übernommen. Veröffentlichte Inhalte behalten ihren bisherigen Contract-Stand.

## Ausgangslage

Der bestehende Import prüft `ui-contracts-export/v1`, erhält Binärdateien und Leseskills und schreibt unveränderliche Revisionsordner. Diese Arbeit wird weiterverwendet. Manuell gepflegte Registrierungen in Katalog, Skill-Zugriff und Build werden durch eine gemeinsame Registrierung ersetzt.

Aktuelle Ansatzpunkte:

- [Paketimport](../../scripts/import-contract-library.mjs) und [Importtests](../../scripts/import-contract-library.test.mjs).
- [Contract-Katalog](../../src/contracts/catalog.ts), [Skill-Zugriff](../../src/contracts/library-skills.ts) und [Build-Konfiguration](../../next.config.mjs).
- [Seiten](../../src/collections/Pages.ts), [Implementierungen](../../src/collections/Implementations.ts) und [Freigabe](../../src/access/publication.ts).

UI Contracts liefert bereits `manifest.json`, `library/library.json`, komponentenbezogene Domänenverweise, `skills/`, `dependencies.json` und `provenance.json`. Das Exportformat muss für den ersten Durchstich nicht geändert werden. Die Existenz und Integrität dieser Daten bestätigt noch keine fachliche Freigabe einer Komponente.

## Zuständigkeiten

| Teil | Führende Daten und Aufgabe |
| --- | --- |
| UI Contracts | Originalbibliothek, CEM, DTCG/CSS, SCXML, HTML/ARIA, Komponentenregeln, Quellen und portable Leseskills |
| Connector | Export prüfen, Komponenten und Dateien erschliessen, Revisionen vergleichen, Referenzen auflösen |
| Arve | Redaktionelle Inhalte, Seitenbaum, Systemzuordnung, Implementierungsnachweise und Freigaben |
| Vorschauadapter in Arve | Bewusst integrierte React-, Angular- oder andere Darstellungen; eigener belegter Stand |

Der Connector importiert Daten. Er führt weder Paketcode noch mitgelieferte Autoren- oder Prüfwerkzeuge aus. Ein Contract allein ist keine ausführbare Komponentenbibliothek. Die bestehenden Autoren-Skills von Arve bleiben unabhängig von den importierten Leseskills.

## Aufbau in Arve

```text
contracts/
  registry.json
  packages/<library>/<revision>/       # unverändertes Originalpaket
  indexes/<library>/<revision>.json    # abgeleitete Lesedaten
src/contracts/connector/
  types.ts
  package-reader.ts
  registry.ts
  component-index.ts
  compare.ts
  service.ts
src/contracts/storage/
  filesystem.ts
src/contracts/payload/
  bindings.ts
  contract-picker.tsx
  endpoints.ts
scripts/contracts.ts
```

Dies ist eine geplante Zielstruktur. Der Connector-Kern kennt Payload und dessen Dokument-IDs nicht. Der Payload-Adapter übersetzt Systemrechte, CMS-Felder und Freigaben in Aufrufe des Kerns. Andere Verbraucher können denselben Paketvertrag lesen, ohne Arves Datenmodell zu übernehmen.

Für den Start genügt das Dateisystem. Ein separates Connector-Repository, npm-Paket oder zusätzlicher Netzwerkdienst ist nicht nötig. Eine spätere Extraktion des Kerns bleibt möglich, wenn tatsächlich ein zweiter Verbraucher entsteht.

## Paketablage und Registrierung

`contracts/registry.json` ist die einzige Registrierung installierter Exporte. Der Import pflegt sie automatisch. Sie enthält Bibliotheks-ID, exakte Exportrevision, relativen Paketpfad sowie Pfad und Hash des abgeleiteten Index. Paketpfade sind relativ zum konfigurierten Speicher und verlassen ihn nicht. Bibliotheks-IDs müssen innerhalb einer Installation eindeutig vergeben sein.

Originalpakete werden einmal gespeichert. Der Index enthält Metadaten und Dateiverweise, keine zweite Kopie sämtlicher Quellen. Er trägt eine `indexFormat`- und eine `readerVersion`-Angabe und kann aus dem Original neu erzeugt werden. Sein Hash wird unabhängig geprüft; seine Bytes verändern die ursprüngliche Exportrevision nicht.

Ein Index enthält pro Komponente:

- Stabile Komponenten-ID, Anzeigename und ausgewiesenen Contract-Status.
- Vorhandene Domänen und ihre paketrelativen Einstiegspfade.
- Zugehörige Stylesheets, Fonts und weitere benötigte Assets.
- Dateimenge und Fingerprint je Domäne, mit ausgewiesenem Abdeckungsumfang.
- Vorhandene Skills und deren Einstiegsdateien auf Paketebene.

Die Registry führt Pakete, keine Systemzuordnungen. Die Datenbank führt Systemzuordnungen, keine zweite veränderbare Kopie des Paketkatalogs. Installierte Pakete werden nicht allein durch eine Ordnersuche automatisch freigeschaltet.

## Datenmodell in Payload

Eine neue Collection `contract-bindings` verbindet ein Design-System mit einer Bibliothek:

| Feld | Bedeutung |
| --- | --- |
| `designSystem` | Beziehung zum Handbuch |
| `library` | Bibliotheks-ID aus der Registry |
| `defaultRevision` | Installierter Stand, der für neue Auswahlen vorgeschlagen wird |

Die Kombination aus System und Bibliothek ist eindeutig. Mehrere Systeme dürfen dieselbe Bibliothek verwenden; ein System darf mehrere Bibliotheken verbinden. Es gibt in der ersten Version keinen zustandsabhängigen Resolver namens `latest`.

Die bestehenden Felder `contract.library`, `contract.component` und `contract.revision` auf Seiten und Implementierungen bleiben die portable, führende Referenz. Ihre Werte sind keine numerischen Datenbank-IDs. Neue Bibliotheksbindungen benötigen eine Schema-Migration; bestehende Seitenreferenzen müssen dafür nicht umgeschrieben werden.

Im CMS ersetzt eine Auswahloberfläche das manuelle Eintragen der drei Zeichenketten:

1. Verbundene Bibliothek wählen, bei genau einer Verbindung vorbelegt.
2. Installierte Revision wählen, mit dem bevorzugten Stand als Vorschlag.
3. Komponente suchen und auswählen.

Die Auswahl schreibt die vollständige Referenz in den Entwurf. Der kurze Hash ist eine Anzeigehilfe; gespeichert wird immer der vollständige Hash. Ein lesbarer Versionsname wird nur angezeigt, wenn der Produzent ihn tatsächlich liefert. Paketversion und Exportrevision werden getrennt ausgewiesen.

Leere Referenzen werden vor der Freigabe geklärt. Ein Wechsel von `defaultRevision` verändert weder bestehende Entwürfe noch veröffentlichte Seiten. Beim Veröffentlichen wird keine Revision mehr automatisch ergänzt oder ausgetauscht: Der freigegebene Entwurf muss bereits vollständig gebunden sein.

## Schnittstelle des Kerns

```ts
type ContractRef = {
  library: string
  revision: string
  component: string
}

type ContractConnector = {
  inspectPackage(input: PackageInput): Promise<PackageInspection>
  installPackage(input: PackageInput): Promise<InstalledExport>
  listExports(library?: string): Promise<ExportSummary[]>
  listComponents(selection: ExportSelection): Promise<ComponentSummary[]>
  getComponent(reference: ContractRef): Promise<ComponentRecord>
  readResource(selection: ResourceSelection): Promise<ResourceChunk>
  listSkills(selection: ExportSelection): Promise<SkillSummary[]>
  compareExports(selection: ExportComparison): Promise<ExportDiff>
}
```

Die Typen sind ein vorgeschlagener Vertrag. `ExportSelection` enthält Bibliothek und exakte Revision. Ressourcen werden ausschliesslich anhand registrierter Paketpfade gelesen, nie über beliebige lokale Pfade. Grössere Ressourcen unterstützen begrenzte Abschnitte mit Offset, Länge und Inhalts-Hash; bestehende MCP-Fortsetzungen können darauf aufbauen.

Der Payload-Adapter ergänzt `planAdoption` und `applyAdoption`. Er kennt Zielsystem, aktuelle Entwurfsfassungen und Rechte. Diese Funktionen gehören nicht zum CMS-unabhängigen Paketleser.

## Importablauf

Geplante Befehle, noch keine vorhandenen npm-Skripte:

```sh
npm run contracts:import -- /pfad/zum/export
npm run contracts:import -- /pfad/zum/export --apply
npm run contracts:plan -- --system shadcn --library shadcn --revision <hash>
npm run contracts:adopt -- --plan <datei> --apply
```

`import` prüft ohne `--apply` und zeigt nur den geplanten Umfang. `--apply` verifiziert Manifest, Dateimenge, Hashes, Pfade, unterstütztes Format und benötigte Einstiege, erzeugt den Index und speichert das Paket in einem temporären Ordner. Erst nach erfolgreicher Prüfung werden Paket und Index an ihren endgültigen Ort verschoben und die Registry atomar ersetzt. Gleiche Revision mit gleichen Bytes ist ein wiederholbarer Import; abweichende Bytes unter derselben Revision sind ein Fehler.

Ein Import veröffentlicht nichts und setzt keine Seite auf „Geprüft“. Gleichzeitige Registry-Schreibvorgänge werden serialisiert. Ein Abbruch vor dem Registry-Wechsel kann einen unreferenzierten Ordner hinterlassen; dieser ist nicht automatisch aktiv und kann gezielt bereinigt werden. Es wird keine gemeinsame Transaktion über Dateisystem und PostgreSQL behauptet.

Pakete werden als versionierte Dateien ausserhalb der Datenbank bereitgestellt. Der erste Durchstich verwendet einen lokalen Exportordner und übernimmt den bestehenden Prüfer. Das CMS verwaltet Auswahl und Zuordnungen; ein Paket-Upload ist nicht vorgesehen.

## Vergleich von Revisionen

Die Paketrevision bleibt der Integritätsanker. Für verständliche Updates vergleicht der Connector Komponenten zusätzlich nach Domänen:

| Befund | Ausgabe und Übernahme |
| --- | --- |
| Komponente hinzugefügt | Als neue Komponente anbieten; eine leere redaktionelle Vorlage kann auf Wunsch entstehen |
| Komponente entfernt | Betroffene Verknüpfungen melden; veröffentlichte Seiten behalten die alte Revision |
| SCXML geändert | Verhalten geändert, erneute Prüfung vorschlagen |
| Tokens, CSS oder Fonts geändert | Visuelle Grundlage geändert, Vorschauen prüfen |
| HTML/ARIA oder CEM geändert | Semantik bzw. Schnittstelle geändert, Umfang prüfen |
| Nur Nachweise oder Skills geändert | Getrennt ausweisen, sofern alle fachlichen Abhängigkeiten nachweislich unverändert sind |
| Abhängigkeit nicht eindeutig ermittelbar | „Auswirkung unklar“ statt „unverändert“ |

Ein Domänen-Fingerprint wird aus sortierten Paketpfaden und deren Manifest-Hashes gebildet. Er umfasst den Einstieg und die nachvollziehbaren Abhängigkeiten. CSS-Imports und lokale Assets werden transitiv verfolgt. Gemeinsam verwendete Tokens und Definitionen gehören ebenfalls zum Vergleich. Bei einem geänderten gemeinsamen Tokenbestand darf die erste Version konservativ mehrere Komponenten als betroffen melden; eine präzise Analyse unbenutzter Tokens folgt erst später.

Ein Text- oder Dateivergleich entscheidet nicht automatisch, ob eine Änderung kompatibel oder fachlich korrekt ist. Der Vergleich nennt geänderte Dateien und Domänen. Fachliche Auswirkungen und Freigaben bleiben Entscheidungen im Handbuch.

## Übernahme in Entwürfe

Ein Übernahmeplan enthält Zielsystem, Zielrevision, betroffene Seiten und Implementierungen, deren bisherige Referenzen und den jeweiligen Entwurfsstand. Neue, geänderte, entfernte und unklare Komponenten stehen getrennt. Unveränderte Komponenten werden standardmässig nicht auf eine neue Paketrevision umgestellt.

Beim Anwenden wird jede ausgewählte Seite einzeln als Entwurf aktualisiert. Der Server prüft die zugrunde liegende Entwurfsfassung erneut. Hat inzwischen jemand daran gearbeitet, wird die Übernahme für diese Seite mit einem Konflikt abgelehnt. Ein Plan-Hash identifiziert den Vorschlag, ersetzt diese Prüfung aber nicht. Teilweise erfolgreiche Übernahmen werden ausdrücklich berichtet und können ohne doppelte Änderungen fortgesetzt werden.

Es ändern sich nur ausgewählte Contract-Referenzen und eindeutig abgeleitete Metadaten. Redaktionelle Texte, Quellenbewertungen und Gestaltungsentscheidungen werden nicht überschrieben. Die bestehende Freigabe wird durch die Referenzänderung ungültig; die veröffentlichte Fassung bleibt erhalten.

Eine fehlende Datei oder ein unbekannter Contract blockiert die Freigabe der betroffenen Referenz. Alte Pakete bleiben für veröffentlichte Seiten und gespeicherte Versionen verfügbar. In der ersten Version gibt es keine automatische Paketlöschung.

## Rechte und Endpunkte

Globale Paketinstallation ist eine administrative Aufgabe. Herausgeber dürfen in ihren Systemen bereits installierte Bibliotheken verbinden und den vorgeschlagenen Stand ändern. Autoren dürfen im eigenen System Komponenten für Entwürfe auswählen und Updatevorschläge übernehmen. Freigabe und Veröffentlichung bleiben Herausgebern vorbehalten.

Geplante interne Endpunkte:

- `GET /api/contract-connector/exports`: registrierte Exporte, kompakt und paginiert.
- `GET /api/contract-connector/components`: Komponenten einer expliziten Bibliothek und Revision, mit Suche und Pagination.
- `POST /api/contract-connector/adoption-plan`: Vorschau für ein berechtigtes Zielsystem.
- `POST /api/contract-connector/adoption-apply`: ausgewählte Vorschläge als Entwürfe übernehmen.

Leseabfragen des CMS benötigen Anmeldung und werden für Autoren auf die Bibliotheksbindungen ihrer Systeme begrenzt; Administratoren können alle installierten Pakete sehen. Handbuch- und MCP-Leser erhalten weiterhin nur den veröffentlichten Kontext. Benutzerbezogene Schreibaufrufe verwenden den authentifizierten Request und `overrideAccess: false`. Eine CLI zur redaktionellen Übernahme verwendet dieselben berechtigten Endpunkte. Vertrauenswürdige Bootstrap-Migrationen bleiben ein ausdrücklich separater Weg.

## Portal, MCP und Vorschauen

Portal und MCP verwenden denselben Connector-Leser und dieselbe gespeicherte Contract-Referenz. Die Antwort einer veröffentlichten Komponentenseite verweist auf Skills und Artefakte ihrer exakten Revision. Der bevorzugte Stand des Systems wird dabei nicht als Ersatz verwendet. Bibliotheksübersichten dürfen mehrere Revisionen anbieten; einzelne Dateiabrufe benötigen eine eindeutige Auswahl.

Eine globale Paketprüfung erfolgt beim Import. Einzelabrufe prüfen die ausgelieferten Dateien gegen das zugehörige Manifest und laden nicht jedes Mal die gesamte Bibliothek. Ein separater vollständiger Integritätscheck kann die installierte Ablage prüfen.

Contract-Daten werden als strukturierte Daten oder als maskierter Code angezeigt. Mitgeliefertes HTML oder JavaScript wird nicht als vertrauenswürdiger Anwendungscode ausgeführt. Varianten- und Zustandslisten können aus dem Index stammen. Eigene redaktionelle Vergleichsgrafiken speichern einen Bezug zur zugrunde liegenden Revision und werden bei relevanten Änderungen zur Prüfung vorgeschlagen.

React, Angular, iOS und Android bleiben getrennte Implementierungsnachweise. Ein shadcn-Contract beweist keine Verfügbarkeit in Spartan oder einer SwiftUI-Bibliothek. Ausführbare Vorschauen benötigen weiterhin einen ausdrücklich registrierten Adapter und dessen Abhängigkeiten.

## Betrieb und statische Veröffentlichung

Der erste Betrieb verwendet eingecheckte Pakete und Registry. Imports benötigen keine manuellen Codeänderungen mehr, aber neue Daten müssen weiterhin in das Zieldeployment gelangen. Ein CMS-Update verteilt keine Dateien auf andere Server und löst nicht automatisch einen GitHub-Pages-Build aus.

Die Next-Konfiguration erhält feste Einbindungsmuster für den generischen Paketspeicher statt einzelner shadcn-Hashes. Der statische Export ermittelt alle von den veröffentlichten Snapshot-Seiten und Implementierungen referenzierten Pakete und übernimmt deren benötigte Daten, Assets und Skills. Eine fehlende Revision lässt den Build fehlschlagen. Der Referenzimport erhält die bisherigen Zeichenkettenreferenzen ohne lokale Repository-Pfade.

Auf mehreren Servern müssen dieselben Paketdateien und dieselbe Registry verfügbar sein, etwa durch ein gemeinsames Deployment oder einen dauerhaften Dateispeicher. Die Datenbank enthält weiter nur die Bibliothekszuordnungen und Seitenreferenzen.

## Migration und Umsetzung

1. **Generischer Leser und Registry.** Bestehenden Import und dessen Integritätsprüfungen weiterverwenden. Alle vorhandenen Referenzen inventarisieren, moderne Pakete registrieren und historische Einzelexporte vorübergehend über einen Legacy-Adapter lesen. Katalog, Skills und Build auf die Registry umstellen. Alte Pfade erst entfernen, wenn keine Referenz mehr darauf angewiesen ist.
2. **Payload-Anbindung.** `contract-bindings` ergänzen, bestehende shadcn-Zuordnung explizit anlegen und die Auswahloberfläche auf Seiten und Implementierungen einführen. Die vorhandenen Referenzfelder und Freigaben beibehalten.
3. **Vergleich und Übernahme.** Domänenvergleich, Updateplan, Konfliktprüfung und gezielte Entwurfsänderungen ergänzen. Änderungen an eigenen Vorschauen ausweisen.
4. **Komfort nach Bedarf.** Automatisierte Bereitstellung und Benachrichtigung über neue Exporte. Eine npm-Verteilung oder ein gemeinsamer Onlinedienst sind keine Voraussetzung.

Die ersten beiden Schritte sind der vorgeschlagene Umfang für den ersten Durchstich dieses Entwurfs: Paket importieren, Bibliothek verbinden, Komponente im CMS auswählen und ohne Codeänderung über Portal und MCP lesen. Der dritte Schritt ergänzt den kontrollierten Updateweg.

## Abnahme

- Eine zweite, kleine Contract-Bibliothek lässt sich ohne Änderung am Quellcode registrieren und verwenden.
- Zwei Design-Systeme können dieselbe Bibliothek in unterschiedlichen Revisionen verwenden.
- Import funktioniert nach Entfernen des ursprünglichen ui-contracts-Verzeichnisses, einschliesslich Skills, CSS und Fonts.
- Bekannte veröffentlichte Referenzen und historische Seitenversionen bleiben nach der Migration auflösbar.
- Neues Paket und geänderter Systemstandard verändern keine vorhandene Seite.
- Ausgewählte Übernahme erzeugt ausschliesslich Entwürfe; gleichzeitige redaktionelle Änderungen werden erkannt.
- Veränderte gemeinsame Abhängigkeiten erscheinen im Vergleich; unklare Abdeckung wird nicht als unverändert ausgegeben.
- Portal und MCP liefern identische Bibliotheks-, Revisions- und Komponentenidentitäten sowie dazu passende Skills.
- Paketmanipulation, fehlende Dateien, unbekannte Formate, Symlinks und ausbrechende Pfade werden abgelehnt.
- Fremde Systembindungen und Entwürfe sind nicht schreibbar; weder Import noch Updateplan umgehen die Freigabe.
- Der statische Build funktioniert mit einer Mischung alter und neuer ausdrücklich referenzierter Revisionen.
