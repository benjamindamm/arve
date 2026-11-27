# UI Contracts als optionale Erweiterung verwenden

Arve funktioniert ohne UI Contracts. Ein Paketimport, die Bereitstellung einer Bibliothek für ein Design-System und die Verknüpfung einer Seite sind drei getrennte Vorgänge. Es werden keine Seiten automatisch angelegt, zugeordnet oder veröffentlicht.

## Ein Paket installieren

Im Arve-Projektordner ein vollständiges `ui-contracts-export/v1`-Verzeichnis prüfen:

```sh
npm run contracts:import -- /pfad/zum/export
```

Mit `--apply` installieren und automatisch registrieren:

```sh
npm run contracts:import -- /pfad/zum/export --apply
```

Die Vorschau schreibt nichts. Der Import erhält das Originalpaket mit Skills und Assets. Registry, Komponentenindex und Dateizugriff werden automatisch verbunden. Ein Zugriff auf das ui-contracts-Repository ist danach nicht erforderlich. Pakete bleiben versionierte Dateien ausserhalb der Datenbank; im CMS werden ihre Zuordnungen gepflegt.

Die Registrierung liegt unter `src/contracts/registry.json`, importierte Pakete unter `src/contracts/libraries/<bibliothek>/<revision>/`. Bestehende Pfade werden zur Erhaltung historischer Verknüpfungen weitergenutzt. Der Import selbst erzeugt keine Datenbankzuordnung. Pakete, Registry und zugehörige Anwendungsänderungen müssen mit dem Deployment ausgeliefert werden.

## Bibliothek für ein System bereitstellen

Im CMS unter **Erweiterungen → Contract-Bibliotheken** einen Eintrag mit Design-System, installierter Bibliothek und vorgeschlagener Revision anlegen. Dafür braucht es Herausgeberrechte im jeweiligen System oder Administratorrechte.

Der Vorschlag wird nur bei einer bewussten neuen Bibliotheksauswahl auf einer Seite übernommen. Ein späterer Standardwechsel aktualisiert keine vorhandene Seite. Beim Kopieren eines vollständigen Handbuchs werden dessen ausdrückliche Bibliotheksreferenzen als eigene Systemzuordnungen bereitgestellt.

## Eine Komponentenseite verknüpfen

Auf einer Komponentenseite unter **UI Contracts · optional** Bibliothek, Revision und Contract-Komponente auswählen und den Entwurf speichern. Das Suchfeld zeigt den Anzeigenamen der Bibliothek und die stabile Contract-Kennung. Die Veröffentlichung verwendet weiterhin Arves Prüfung und Freigabe.

Beispiel einer ausdrücklichen Zuordnung:

| Handbuch | Contract |
| --- | --- |
| Titel: Schaltfläche | Anzeigename: Primary Action |
| Handbuch-Kennung: `schaltflaeche` | Contract-Kennung: `press-action` |
| URL: `/systems/atlas/components/schaltflaeche` | Referenz: Bibliothek + Revision + `press-action` |

Weder Titel noch Kennung müssen übereinstimmen. Arve übernimmt keine Zuordnung anhand ähnlicher Namen. Mehrere Seiten dürfen denselben Contract verwenden; eine Seite hat in diesem Durchstich eine primäre Contract-Referenz. Implementierungsnachweise können separat eigene Contracts auswählen, beispielsweise für eine andere Plattformbibliothek.

**Zuordnung entfernen** löst die Verknüpfung im Entwurf. Ohne Contract kann die Seite weiter gepflegt und veröffentlicht werden. Das Entfernen einer Bibliothekszuordnung löscht weder Pakete noch vorhandene Seitenreferenzen. Bestehende Verknüpfungen bleiben lesbar; neue Verknüpfungen benötigen eine bereitgestellte Bibliothek.

## Agenten und Dateien

Portal und MCP lösen die gespeicherte Kombination aus Bibliothek, Revision und Contract-Kennung auf. Downloads verwenden die tatsächliche Contract-Kennung für die Artefakte und die Handbuch-Kennung für die Seitenadresse.

Mit `find_contract_pages` findet ein Agent die veröffentlichten Seiten zu einer Contract-Kennung. Die Antwort enthält die tatsächlichen Argumente für `get_component_page`. Aus einem Bibliotheksnamen oder einer Contract-Kennung darf keine Handbuchadresse abgeleitet werden. `list_library_skills` liefert einen entsprechenden Verweis; Skillabrufe bleiben an die explizite Exportrevision gebunden.

## Bestehende Installation aktualisieren

Vorher eine Datenbanksicherung erstellen. Die Vorschau ergänzt nichts dauerhaft:

```sh
npm run db:contract-bindings
npm run db:contract-bindings -- --apply
```

Die Migration ergänzt die Collection und übernimmt vorhandene ausdrückliche Bibliotheksverweise als Systemzuordnungen. Bei mehreren alten Revisionen wird der häufigste vorhandene Stand als Vorschlag verwendet; keine Seite wird umgestellt. Bestehende Seitenreferenzen, Veröffentlichungen und Prüfstände bleiben erhalten. Neue Datenbanken erhalten das Schema beim Erstaufbau.

Das Payload-Modul wird in `src/payload.config.ts` mit `uiContractsPlugin()` eingebunden. Sein Kernleser ist unabhängig von Payload. Ohne bereitgestellte Bibliotheken sind keine Contracts erforderlich. Für eine neue Installation ohne die Redaktionserweiterung kann die Plugin-Einbindung entfallen oder `uiContractsPlugin({enabled:false})` verwendet werden; Paket- und Seitendaten werden dadurch nicht gelöscht.

## Prüfungen und Umfang

- `npm run check:connector`: Import-, Registry- und MCP-Lesetests.
- `npm run check:connector:db`: zweite unabhängige Bibliothek, abweichende Namen, optionale Contracts, Systemrechte und unveränderte veröffentlichte Seiten; eigenes temporäres PostgreSQL-Schema.
- `npm run check:static`: statische Ausgabe einschliesslich Contract-Dateien und interner Links nach dem Build.

Die Suche nach betroffenen Änderungen und die Übernahme von Updates in mehrere Entwürfe sind der nächste Schritt. Ebenso bleiben ausführbare React-, Angular- oder native Vorschauadapter eigene Integrationen. Ein importierter Contract installiert keine Komponentenbibliothek in der Anwendung.
