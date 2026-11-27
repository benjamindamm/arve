# Arve

**UX für Teams und Agenten.**

Arve ist ein gemeinsames Handbuch für Design und Entwicklung. Es beschreibt, wie Oberflächen gestaltet werden, welche Komponenten passen und welche Bedienregeln gelten. Teams lesen und pflegen das Handbuch im Browser. KI-Agenten können die veröffentlichten Regeln über MCP abrufen.

Mit Arve lassen sich mehrere Design-Systeme parallel verwalten. Jedes hat einen eigenen Seitenbaum, eigene Inhalte und verknüpfte Komponentenbibliotheken. Als Ausgangspunkt ist ein vollständiges **shadcn-Handbuch mit 69 Komponenten** enthalten.

**Für Agenten im Repository:** Zum Erarbeiten oder Prüfen von Handbuchinhalten zuerst den passenden [Autoren-Skill](#autoren-skills) lesen.

## Was ihr damit machen könnt

- **Gestaltung dokumentieren:** Farben, Typografie, Seitentypen, Layouts, UX-Patterns und Komponenten mit Beispielen sowie Do’s und Don’ts beschreiben.
- **Gemeinsam weiterarbeiten:** Inhalte im CMS bearbeiten, als Entwurf prüfen und veröffentlichen. Änderungen werden versioniert.
- **Agenten mit Regeln versorgen:** Über MCP passende Seiten finden und benötigte Regeln, Contracts oder Skills gezielt abrufen.
- **Ein eigenes System aufbauen:** Die shadcn-Referenz kopieren und die Inhalte unabhängig anpassen.

Das Handbuch kann Regeln für Web, iOS und Android zusammenführen. Welche Bibliothek eine Komponente tatsächlich anbietet und welcher Prüfstand vorliegt, wird getrennt dokumentiert.

## Lokal ausprobieren

Ihr braucht Docker mit Compose und Node.js **22 ab 22.23.4** oder **ab 24.22.1**. Führt die folgenden Befehle im Projektordner aus.

Bei einer neuen Installation zuerst die Konfiguration anlegen und die Abhängigkeiten installieren:

```sh
cp .env.example .env
printf '\nPAYLOAD_SECRET=%s\n' "$(openssl rand -hex 32)" >> .env
npm ci
```

Dann Datenbank und Anwendung starten:

```sh
docker compose up -d --wait
npm run dev
```

Beim ersten Start richtet Arve die veröffentlichte shadcn-Referenz automatisch in der Datenbank ein. Es sind keine zusätzlichen Seed-Skripte nötig. Ein bereits vorhandenes shadcn-System wird nicht überschrieben.

| Einstieg | Adresse |
| --- | --- |
| Arve öffnen | [localhost:3010](http://127.0.0.1:3010/) |
| shadcn-Handbuch erkunden | [/systems/shadcn](http://127.0.0.1:3010/systems/shadcn) |
| Inhalte bearbeiten | [/admin](http://127.0.0.1:3010/admin) |
| Agenten verbinden | `http://127.0.0.1:3010/mcp` |

Zum Bearbeiten beim ersten Besuch im Admin-Bereich ein eigenes Konto anlegen. Dieses erste Konto wird Administrator und kann weitere Benutzer mit Rechten pro Design-System anlegen. Unter **Seiten** findet ihr Texte, Inhaltsblöcke und Vorlagen. Unter **Design-Systeme** verwaltet ihr die einzelnen Handbücher.

## Die Referenz als Ausgangspunkt nutzen

Das shadcn-Handbuch zeigt Grundlagen, Layouts, UX-Patterns und Komponenten in einem zusammenhängenden System. Es enthält statische Gestaltungsbeispiele, ausgewählte interaktive Spartan-Beispiele für Angular und versionierte UI Contracts. Die Referenz bleibt als Orientierung erhalten, während ihr ein eigenes System aufbaut.

Um alle gespeicherten Inhalte zu übernehmen, setzt `TEMPLATE_DATABASE_URI` in `.env` ausdrücklich auf die gewünschte Ziel-Datenbank. Das kann dieselbe Datenbank sein, in der shadcn liegt. Danach zunächst die geplante Kopie ansehen:

```sh
npm run reference:import -- --slug mein-system --name "Mein Design-System"
```

Mit `--apply` wird sie angelegt:

```sh
npm run reference:import -- --slug mein-system --name "Mein Design-System" --apply
```

Die Kopie bekommt eigene Seiten und beginnt als **Entwurf**. Seitenbaum und interne Systemlinks werden angepasst; Contract-Revisionen und Quellen behalten ihre Herkunft. Vorhandene Zielsysteme werden nicht überschrieben. Einige eigens gestaltete shadcn-Vorschauen sind weiterhin Anwendungscode; die Kopie verwendet zunächst die allgemeinen Seitenansichten.

[Referenz einrichten, kopieren und als Paket weitergeben](docs/handbook/reference-template.md)

## Autoren-Skills

Die [Autoren-Skills](.agents/skills/) helfen, ein eigenes Design-System inhaltlich auszuarbeiten. Sie beschreiben, welche Fragen ein Kapitel beantworten soll und welche Entscheidungen, Beispiele und Nachweise dafür gebraucht werden. Die shadcn-Referenz zeigt eine mögliche Ausarbeitung; ihre Texte und Regeln werden nicht ungeprüft auf ein neues System übertragen.

| Thema | Einstieg für den Agenten |
| --- | --- |
| Farben und Farbrollen | [arve-color-handbook](.agents/skills/arve-color-handbook/SKILL.md) |
| Typografie | [arve-typography-handbook](.agents/skills/arve-typography-handbook/SKILL.md) |
| Abstände und Grössen | [arve-spacing-handbook](.agents/skills/arve-spacing-handbook/SKILL.md) |
| Form und Ebenen | [arve-shape-layers-handbook](.agents/skills/arve-shape-layers-handbook/SKILL.md) |
| Icons | [arve-icons-handbook](.agents/skills/arve-icons-handbook/SKILL.md) |
| Animation und ihre Bedeutung | [arve-animation-handbook](.agents/skills/arve-animation-handbook/SKILL.md) |
| Seitentypen und Nutzeraufgaben | [arve-page-types-handbook](.agents/skills/arve-page-types-handbook/SKILL.md) |
| Seitenlayouts und Seitenrahmen | [arve-page-layouts-handbook](.agents/skills/arve-page-layouts-handbook/SKILL.md) |
| Inhaltsanordnung innerhalb von Abschnitten und Cards | [arve-content-layouts-handbook](.agents/skills/arve-content-layouts-handbook/SKILL.md) |
| Datenvisualisierung, semantische Chart-Archetypen und Paletten | [arve-data-visualization-handbook](.agents/skills/arve-data-visualization-handbook/SKILL.md) |
| UX-Patterns, etwa Formulare und Validierung | [arve-pattern-handbook](.agents/skills/arve-pattern-handbook/SKILL.md) |

Für die Arbeit mit vorhandenen Komponenten-Contracts gibt es ergänzend [arve-ui-contracts](.agents/skills/arve-ui-contracts/SKILL.md).

So arbeitet ein Agent damit:

1. Zielsystem und Thema bestimmen, dann die verlinkte `SKILL.md` lesen. Weitere Referenzen nach Bedarf über deren Verweise laden.
2. Vorhandene Quellen auswerten und fehlende Entscheidungen mit dem Nutzer klären. Belegte Regeln, eigene Vorschläge und offene Fragen auseinanderhalten.
3. Das Kapitel für das Zielsystem ausarbeiten oder prüfen. Beispiele sollen Entscheidungen erklären; fehlende Inhalte nicht mit allgemeinen Texten auffüllen.

Beispielauftrag:

> Lies `.agents/skills/arve-data-visualization-handbook/SKILL.md`. Erarbeite für unser Design-System die Chart-Farbregeln aus unserer Grundpalette. Kläre zuerst die semantischen Archetypen und Konflikte mit bestehenden Farbrollen. Frage nach fehlenden Entscheidungen, bevor du sie als Vorgaben formulierst.

Die Autoren-Skills liegen im Repository und können direkt gelesen werden. Über MCP sind sie mit `list_authoring_skills` auffindbar und mit `get_authoring_skill` schrittweise lesbar. MCP stellt die veröffentlichten Handbuchinhalte sowie separat die mit den UI-Contracts importierten Bibliotheks-Skills bereit.

## Inhalte pflegen

Das [Arve-Handbuch](http://127.0.0.1:3010/handbuch) dokumentiert Arve selbst mit eigener Navigation ausserhalb der Design-Systeme. Unter **Redaktion und Seitenstatus** lässt sich die farbige Umrandung ausprobieren. Unter **Autoren-Skills** sind die Originaldateien aufklappbar lesbar.

Unter **Seiten → Externe Quellen** lassen sich Figma-Dateien, Storybook-Seiten, Repositories und weitere Quellen verlinken. Typ, optionale Beschriftung und URL werden je Seite gepflegt und im Seitenkopf als Link-Badges angezeigt. Die Links gehören zur Seitenversion und erscheinen nach Veröffentlichung auch über MCP und im statischen Export. Bestehende Installationen ergänzen die Tabellen mit `npm run db:external-links -- --apply` (ohne `--apply` nur Vorschau).

Die Admin-Felder sind zentral in `src/collections/Pages.ts` definiert. Die typabhängigen Felder unter **Seitenvorlage** stammen aus `src/docs/page-templates.ts`; der Quellenabschnitt gilt für alle Seitentypen. Payload erzeugt daraus die Bearbeitungsoberfläche.

Seiten besitzen einen redaktionellen Stand: **Entwurf**, **Zu klären**, **Im Review** oder **Geprüft**. Er ist unabhängig von Payloads Veröffentlichung. Klärungsnotiz und optionale Zuständigkeit erscheinen im Portal und über MCP; bei „Zu klären“ ist eine Notiz erforderlich. Bestehende Seiten ohne Zuordnung zeigen „Nicht eingeordnet“. Der Seitenstatus steuert automatisch einen farbigen Rahmen um die gesamte Browseransicht. Bei **Geprüft** entfällt er; auch **Nicht eingeordnet** bleibt als offener Stand sichtbar. In der Navigation steht bei offenen Seiten ein Farbpunkt vor dem Titel; der genaue Status ist per Tooltip und für Screenreader zugänglich. Geprüfte Seiten haben dort keinen Indikator. Einen separaten Redaktionsmodus gibt es nicht mehr.

Bei einer bestehenden Datenbank vor dem Start nach diesem Update einmal `npm run db:editorial` ausführen. Das ergänzt ausschliesslich die Statusfelder an Seiten und Versionen; bestehende Inhalte und Prüfstände werden nicht überschrieben. Neue leere Datenbanken erhalten die Felder beim Erstaufbau. Beim Kopieren eines Systems beginnen die redaktionellen Stände als Entwurf, ohne übernommene Klärungsnotizen oder Zuständigkeiten.

Texte und Inhalte liegen in **PostgreSQL** und werden mit **Payload CMS** bearbeitet. Für Grundlagen, Layouts, UX-Patterns und Komponenten gibt es eigene Inhaltsvorlagen. Seitentyp, übergeordnete Seite und Sortierung bestimmen den Seitenbaum.

Veröffentlichte Inhalte erscheinen im Portal und über MCP. Entwürfe bleiben im CMS. Ein gespeicherter Export der shadcn-Referenz liefert die Basis für neue Installationen; spätere Änderungen in der Datenbank werden bewusst mit `npm run reference:capture` in diesen Export übernommen.

Unter **Implementierungen** lässt sich dokumentieren, welche Bibliothek eine Komponente für Web, iOS oder Android umsetzt – einschließlich Paketversion, Freigabestatus und Prüfumfang. Eine veröffentlichte Dokumentation bedeutet dabei noch keine technische Freigabe der Implementierung.

[Komponentenvorlage](docs/handbook/component-template/README.md) · [Komponentenkatalog](docs/handbook/component-catalog/README.md)

## Gemeinsame Startseitenvorlage

Alle Design-Systeme verwenden dieselbe Startseitenvorlage: **Seite aufbauen**, **Ablauf gestalten**, **Komponenten auswählen**, anschliessend Grundlagen, Zusammenarbeit und alle Themen. Der Aufbau liegt im Anwendungscode; die Inhalte und Zielseiten lassen sich pro System ändern.

Im CMS die unter **Design-Systeme → Startseite** gewählte Übersichtsseite öffnen. Unter **Systemstartseite · gemeinsame Vorlage** können Titel, Einleitung, Einstiegstexte und Zielseiten angepasst werden. Leere Felder verwenden die allgemeinen Vorgaben; ein optionales Beispiel erscheint erst nach Auswahl einer veröffentlichten Zielseite. Nicht verfügbare Einstiege bleiben erkennbar, ohne ins Leere oder zu einem anderen System zu führen.

Für eine andere Ausarbeitung die Übersichtsseite duplizieren, Texte und Ziele ändern und nach Prüfung veröffentlichen. Anschliessend diese Seite als Startseite des Systems auswählen. Anpassungen werden mit der Seite versioniert und freigegeben. Beim Referenzimport werden Startseitenverknüpfungen auf die kopierten Seiten umgebogen. Weitere Seitentypen verwenden bereits die gemeinsamen Inhaltsvorlagen für Grundlagen, Layouts, Patterns und Komponenten.

Bestehende Installationen vor dem Start aktualisieren; die Vorschau schreibt nichts:

```sh
npm run db:home-template
npm run db:home-template -- --apply
```

Die Erweiterung ergänzt ausschliesslich Felder für Seiten und Versionen. Neue Installationen erhalten sie beim Erstaufbau. `npm run check:home-template` prüft Vorgaben, eigene Ziele und portable Kopien; `npm run check:home-template:db` prüft das Datenbank-Upgrade isoliert.

## Rechte, Versionen und Veröffentlichung

Im CMS unter **Benutzer → Rechte pro Design-System** die Rolle zuweisen:

| Rolle | Rechte |
| --- | --- |
| Leser | Veröffentlichte Inhalte lesen |
| Autor | Entwürfe im eigenen System erstellen, bearbeiten und Versionen lesen |
| Herausgeber | Zusätzlich freigeben, veröffentlichen, zurückziehen und löschen |
| Administrator | Alle Systeme und die Benutzerverwaltung |

**Arbeitsweg:** Entwurf speichern → „Im Review“ → Herausgeber prüft und speichert „Geprüft“ als Entwurf → unverändert veröffentlichen. Jede Inhaltsänderung hebt die Freigabe auf. Ein Autor kann eine bestehende Veröffentlichung als Entwurf überarbeiten; öffentlich bleibt die bisherige Fassung sichtbar. Dieselbe Person darf prüfen und veröffentlichen; ein verpflichtendes Vier-Augen-Prinzip besteht nicht.

Seiten und Implementierungen behalten neue gespeicherte Versionen ohne automatische Begrenzung. Wiederherstellungen über das CMS und die REST-API werden immer als Entwurf angelegt und benötigen eine neue Freigabe. Der **Veröffentlichungsverlauf** speichert Person, Aktion, Version und Inhalts-Hash. Seine Einträge sind über CMS und APIs nicht veränderbar. Privilegierter Datenbank- und Serverzugriff bleibt vertrauenswürdig; dies ist keine externe revisionssichere Archivierung. Frühere, bereits bereinigte Versionen sind nicht wiederherstellbar.

Veröffentlichte Inhalte bleiben öffentlich. Systemrechte begrenzen die Redaktion, sie richten keine vertraulichen Mandanten ein. Eine CMS-Freigabe löst keinen GitHub-Pages-Deploy aus; dafür muss der veröffentlichte Snapshot aktualisiert und ausgeliefert werden.

### Bestehende Datenbank aktualisieren

Vorher eine Datenbanksicherung erstellen. Bei älteren Ständen zuerst `npm run db:editorial` ausführen, danach die Erweiterung prüfen:

```sh
npm run db:publishing
```

Die Vorschau wird vollständig zurückgerollt. Mit `--apply` die zusätzlichen Rechte-, Freigabe- und Protokollfelder anlegen:

```sh
npm run db:publishing -- --apply
```

Bei genau einem bestehenden Benutzer bleibt dieser als Administrator handlungsfähig. Gibt es mehrere Benutzer und noch keinen Administrator, verlangt das Skript ausdrücklich `--administrator=ID`. Bestehende Inhalte, Veröffentlichungen und redaktionelle Stände bleiben erhalten. Bestehende Freigaben bekommen keinen erfundenen historischen Nachweis; bei der nächsten Veröffentlichung muss die Fassung ausdrücklich freigegeben werden. Neue leere Datenbanken werden beim Erststart vollständig eingerichtet. Automatische Schemaänderungen durch Payload sind deaktiviert (`push: false`).

**Für Anwendungsentwickler:** Payloads Local API umgeht standardmässig die Zugriffskontrolle. Bei Aufrufen im Namen eines Benutzers `overrideAccess: false` und dessen authentifizierten Request übergeben. Für Wiederherstellungen `restoreAsDraft` aus `src/access/restore-draft.ts` verwenden; der installierte Local-API-Wrapper reicht die Entwurfsoption nicht weiter. Vertrauenswürdige lokale Bootstrap-/Importskripte sind bewusst davon getrennt und erzeugen keine vorgetäuschten Benutzerfreigaben.

Prüfen mit `npm run check:publishing:db` und `npm run check:publishing:migration`. Beide benötigen PostgreSQL und verwenden jeweils ein isoliertes, anschliessend entferntes Schema. Sie prüfen Systemgrenzen, Rollen, Entwürfe, Freigabe, Wiederherstellung und das Upgrade eines bestehenden Datenbestands. Diese Prüfungen laufen auch im eigenen CI-Workflow.

[Rechte und Freigabe im Arve-Handbuch](http://127.0.0.1:3010/handbuch/rechte-und-freigabe)

## Mit einem Agenten arbeiten

Verbindet ein MCP-fähiges Werkzeug mit `http://127.0.0.1:3010/mcp` über Streamable HTTP. Der Agent kann zuerst ein Design-System auswählen und nach einer Aufgabe suchen. Anschließend lädt er die passenden Regeln, Komponenten-Contracts und mitgelieferten Skills nach.

Beispielsweise könnt ihr ihn bitten:

> Finde im shadcn-Handbuch passende Regeln für ein Formular mit einer Zusammenfassung. Unterscheide allgemeine Vorgaben von Beispielentscheidungen und nenne die Quellen.

Portal und MCP lesen denselben veröffentlichten Datenbankstand. Größere Inhalte werden in begrenzten Abschnitten abgerufen.

[MCP einrichten und die verfügbaren Abrufe verstehen](docs/mcp/progressive-reading.md)

## UI Contracts anbinden

UI Contracts ist eine **optionale Erweiterung**. Sie beschreibt Schnittstelle, Gestaltung, Verhalten und Barrierefreiheit von Komponenten in strukturierten Dateien. Durch die Verknüpfung können Teams und Agenten Handbuchregeln und den zugehörigen Contract gemeinsam lesen. Arve funktioniert auch ohne Contracts.

Pakete und Registry bleiben als versionierte Dateien im Arve-Projekt. Die Datenbank speichert ihre Zuordnungen zu Systemen und Seiten; das CMS dient zum Auswählen und Verknüpfen. Das ui-contracts-Repository muss nach dem Import nicht erreichbar sein.

[Kurzanleitung im Arve-Handbuch](http://127.0.0.1:3010/handbuch/ui-contracts)

Ein neues Contract-Paket zuerst prüfen, dann installieren:

```sh
npm run contracts:import -- /pfad/zum/contract-export
npm run contracts:import -- /pfad/zum/contract-export --apply
```

Der Import prüft Dateien und Prüfsummen und registriert Komponenten, Assets und Skills automatisch. Im CMS unter **Erweiterungen → Contract-Bibliotheken** die Bibliothek einem Design-System bereitstellen. Danach auf einer Komponentenseite unter **UI Contracts · optional** den gewünschten Contract wählen. Die Handbuch-Kennung darf anders lauten als die Contract-Kennung; es gibt keine automatische Namenszuordnung. Bestehende Seiten behalten ihre bisherige Revision.

Bestehende Datenbanken einmal mit `npm run db:contract-bindings` prüfen und mit `npm run db:contract-bindings -- --apply` ergänzen. Dabei werden keine Seiten verändert. [Einrichtung, Zuordnungen und Prüfungen](docs/contracts/connector-usage.md).

[Contract-Stand und Abhängigkeiten](docs/handbook/semantic-shadcn/README.md) · [Skills für die Arbeit mit Contracts](.agents/skills/arve-ui-contracts/SKILL.md)

[Technischer Entwurf für einen UI Contracts Connector](docs/contracts/connector.md): automatische Paketregistrierung, Bibliotheksauswahl im CMS und kontrollierte Updates.

## Das Handbuch statisch veröffentlichen

Für eine Veröffentlichung etwa auf GitHub Pages kann Arve den gespeicherten veröffentlichten Handbuchstand als statische Website bauen:

```sh
npm run build:static
npm run check:static
npm run preview:static
```

Die lokale Vorschau läuft unter [localhost:3020/arve](http://127.0.0.1:3020/arve/). Navigation, Suche, Beispiele und Contract-Downloads funktionieren dort ohne laufendes CMS. Zum Bearbeiten wird die datenbankgestützte Arve-Anwendung benötigt. Für MCP kann ein separates lokales Paket die statische Veröffentlichung lesen.

### MCP ohne Anwendungsserver

Der statische Build erzeugt unter `arve-data/` einen versionierten JSON-Export derselben veröffentlichten Inhalte. Das separate [MCP-Paket](packages/arve-mcp/README.md) liest ihn von einer konfigurierbaren Website-URL. Auf dem Webserver braucht es weder Node.js noch eine Datenbank; das Paket läuft lokal beim Agenten.

```sh
npm run build:mcp
node packages/arve-mcp/dist/cli.js --base-url https://example.org/arve/
```

Alternativ die URL über `ARVE_BASE_URL` setzen. Das ist die Website-Adresse inklusive Unterverzeichnis, ohne `/mcp`. In einem MCP-Client den Befehl als lokalen stdio-Server eintragen. Das [Arve-Handbuch erklärt die Einrichtung](https://benjamindamm.github.io/arve/handbuch/statischer-mcp/).

Die [Exportstruktur und Prüfung](docs/mcp/static-export.md) sind separat dokumentiert. Die Werkzeuge bleiben gleich: Seitenbaum, Suche, veröffentlichte Seiten, Komponenten, optionale Contracts und beide Arten von Skills. Eine Sitzung bleibt auf einer Exportversion; nach einem Deployment neu verbinden. Jeder nachgeladene Inhalt wird anhand seines SHA256-Hashes geprüft. Es gibt keine CMS-Schreibrechte.

`npm run check:mcp:static` installiert das gepackte npm-Artefakt isoliert und vergleicht die Abrufe mit dem bisherigen Datenzugang. `npm run pack:mcp` erzeugt das installierbare Paket unter `.runtime/`. Der manuelle Workflow **Release Arve MCP on GitHub** prüft und liefert ebenfalls ein Paketartefakt; eine Veröffentlichung in GitHub Packages mit einem GitHub-Release ist eine separate Auswahl. Die Einrichtung steht in der [Paket-README](packages/arve-mcp/README.md#build-and-release-in-the-arve-repository).

[Inhalte aktualisieren und auf GitHub Pages veröffentlichen](docs/deployment/github-pages.md)

## Technische Grundlagen

Arve verwendet **Next.js und React** für das Portal, **Payload CMS** für die Redaktion und **PostgreSQL** für die Inhalte. Die dokumentierten Komponentenbibliotheken können andere Frameworks verwenden; ausgewählte Angular-Beispiele laufen mit Spartan.

- **REST-API:** `/api/pages` und weitere Payload-Sammlungen. API-Schlüssel verwenden den Header `Authorization: users API-Key <Schlüssel>`.
- **Prüfungen:** `npm run typecheck`, `npm run check:reference` und `npm run check:mcp:unit`.
- **Leerer Seitenbaum:** `npm run seed:system -- --slug mein-system --name "Mein Design-System"` legt über die REST-API acht leere Entwurfsseiten an; benötigt `PAYLOAD_API_KEY`. Für die vollständige Inhaltsbasis stattdessen `reference:import` verwenden.
- **Zugriffstrennung:** Mehrere Systeme in einer Instanz sind keine getrennten privaten Mandanten. Dafür sind zusätzliche Zugriffskontrollen oder getrennte Instanzen erforderlich.

[Expliziter Datenbank-Erstaufbau](docs/handbook/bootstrap/README.md) · [Gestaltungsvorlagen und Prüfgrenzen](docs/handbook/design-resources/README.md) · [Dokumentierte Agentenprobe](docs/handbook/independent-trial/README.md)

### Interaktive Klärung im Chat

Unter [Interaktion mit Agenten](http://127.0.0.1:3010/handbuch/interaktion-mit-agenten) zeigt Arve einen visuellen Farbvergleich. Im Portal wird die Antwort kopiert; über `compare_color_roles` kann ein MCP-Apps-fähiger Host dieselbe Ansicht im Gespräch öffnen. Der Agent liefert ein ausdrücklich gewähltes Zielsystem, Scope, Grundlage und zwei bis drei Varianten für primäre Handlung und Fehlermeldung. Der Nutzer wählt eine Arbeitsrichtung, beschreibt eine Änderung oder lässt die Frage offen. Eine Übergabe schreibt nichts ins CMS. Text-Clients erhalten vollständige Optionen ohne eingebettete UI.

Die [Autorenfragen für Agentendialoge](.agents/skills/arve-pattern-handbook/references/agent-interaction.md) ergänzen den Pattern-Skill. Der Farb-Skill beschreibt die Anwendung. `npm run build:mcp-apps` erzeugt die eigenständige HTML-Ressource; Entwicklungsstart und Builds führen das automatisch aus. GitHub Pages zeigt die Demo ohne Chat-Anbindung. Prüfgrenzen und Einrichtung stehen im [Pilotbericht](docs/arve-handbook/color-dialog-pilot.md).
