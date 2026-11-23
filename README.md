# Arve

**UX für Teams und Agenten.**

Arve ist ein gemeinsames Handbuch für Design und Entwicklung. Es beschreibt, wie Oberflächen gestaltet werden, welche Komponenten passen und welche Bedienregeln gelten. Teams lesen und pflegen das Handbuch im Browser. KI-Agenten können die veröffentlichten Regeln über MCP abrufen.

Mit Arve lassen sich mehrere Design-Systeme parallel verwalten. Jedes hat einen eigenen Seitenbaum, eigene Inhalte und verknüpfte Komponentenbibliotheken. Als Ausgangspunkt ist ein vollständiges **shadcn-Handbuch mit 116 Seiten und 69 Komponenten** enthalten.

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

Zum Bearbeiten beim ersten Besuch im Admin-Bereich ein eigenes Konto anlegen. Unter **Seiten** findet ihr Texte, Inhaltsblöcke und Vorlagen. Unter **Design-Systeme** verwaltet ihr die einzelnen Handbücher.

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

## Inhalte pflegen

Texte und Inhalte liegen in **PostgreSQL** und werden mit **Payload CMS** bearbeitet. Für Grundlagen, Layouts, UX-Patterns und Komponenten gibt es eigene Inhaltsvorlagen. Seitentyp, übergeordnete Seite und Sortierung bestimmen den Seitenbaum.

Veröffentlichte Inhalte erscheinen im Portal und über MCP. Entwürfe bleiben im CMS. Ein gespeicherter Export der shadcn-Referenz liefert die Basis für neue Installationen; spätere Änderungen in der Datenbank werden bewusst mit `npm run reference:capture` in diesen Export übernommen.

Unter **Implementierungen** lässt sich dokumentieren, welche Bibliothek eine Komponente für Web, iOS oder Android umsetzt – einschließlich Paketversion, Freigabestatus und Prüfumfang. Eine veröffentlichte Dokumentation bedeutet dabei noch keine technische Freigabe der Implementierung.

[Komponentenvorlage](docs/handbook/component-template/README.md) · [Komponentenkatalog](docs/handbook/component-catalog/README.md)

## Mit einem Agenten arbeiten

Verbindet ein MCP-fähiges Werkzeug mit `http://127.0.0.1:3010/mcp` über Streamable HTTP. Der Agent kann zuerst ein Design-System auswählen und nach einer Aufgabe suchen. Anschließend lädt er die passenden Regeln, Komponenten-Contracts und mitgelieferten Skills nach.

Beispielsweise könnt ihr ihn bitten:

> Finde im shadcn-Handbuch passende Regeln für ein Formular mit einer Zusammenfassung. Unterscheide allgemeine Vorgaben von Beispielentscheidungen und nenne die Quellen.

Portal und MCP lesen denselben veröffentlichten Datenbankstand. Größere Inhalte werden in begrenzten Abschnitten abgerufen.

[MCP einrichten und die verfügbaren Abrufe verstehen](docs/mcp/progressive-reading.md)

## UI Contracts anbinden

UI Contracts ergänzen die redaktionellen Regeln um versionierte Beschreibungen von Komponenten, Gestaltung, Verhalten und Barrierefreiheit. Arve verwendet eigenständig kopierbare Exportpakete einschließlich Quellenbezügen und Skills. Ein laufendes oder lokal danebenliegendes ui-contracts-Repository ist dafür nicht erforderlich.

Ein neues Contract-Paket importieren:

```sh
node scripts/import-contract-library.mjs /pfad/zum/contract-export --compact
```

Der Import prüft die Dateien und ihre Prüfsummen. Neue Revisionen werden anschließend in `src/contracts/catalog.ts` registriert und auf den gewünschten CMS-Seiten verknüpft. Bestehende Seiten behalten ihre bisherige Revision, bis sie ausdrücklich umgestellt werden.

[Contract-Stand und Abhängigkeiten](docs/handbook/semantic-shadcn/README.md) · [Skills für die Arbeit mit Contracts](.agents/skills/arve-ui-contracts/SKILL.md)

## Das Handbuch statisch veröffentlichen

Für eine Veröffentlichung etwa auf GitHub Pages kann Arve den gespeicherten veröffentlichten Handbuchstand als statische Website bauen:

```sh
npm run build:static
npm run check:static
npm run preview:static
```

Die lokale Vorschau läuft unter [localhost:3020/arve](http://127.0.0.1:3020/arve/). Navigation, Suche, Beispiele und Contract-Downloads funktionieren dort ohne laufendes CMS. Zum Bearbeiten und für MCP wird die datenbankgestützte Arve-Anwendung benötigt.

[Inhalte aktualisieren und auf GitHub Pages veröffentlichen](docs/deployment/github-pages.md)

## Technische Grundlagen

Arve verwendet **Next.js und React** für das Portal, **Payload CMS** für die Redaktion und **PostgreSQL** für die Inhalte. Die dokumentierten Komponentenbibliotheken können andere Frameworks verwenden; ausgewählte Angular-Beispiele laufen mit Spartan.

- **REST-API:** `/api/pages` und weitere Payload-Sammlungen. API-Schlüssel verwenden den Header `Authorization: users API-Key <Schlüssel>`.
- **Prüfungen:** `npm run typecheck`, `npm run check:reference` und `npm run check:mcp:unit`.
- **Leerer Seitenbaum:** `npm run seed:system -- --slug mein-system --name "Mein Design-System"` legt über die REST-API acht leere Entwurfsseiten an; benötigt `PAYLOAD_API_KEY`. Für die vollständige Inhaltsbasis stattdessen `reference:import` verwenden.
- **Zugriffstrennung:** Mehrere Systeme in einer Instanz sind keine getrennten privaten Mandanten. Dafür sind zusätzliche Zugriffskontrollen oder getrennte Instanzen erforderlich.

[Expliziter Datenbank-Erstaufbau](docs/handbook/bootstrap/README.md) · [Gestaltungsvorlagen und Prüfgrenzen](docs/handbook/design-resources/README.md) · [Dokumentierte Agentenprobe](docs/handbook/independent-trial/README.md)
