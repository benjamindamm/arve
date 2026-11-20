# Systemprofil, Plattformen, Pflege und technische Nutzung

Version 0.1 · 18.11.2026 · Redaktioneller Sollvorschlag. Gemeinsam mit [BAS-01–10](README.md) verwenden. **P** bedeutet Pflicht im gewählten Systemumfang; **B** bedingt mit genanntem Auslöser. Die Tabellen sind inhaltliche Vorlagen, keine Verpflichtung zu gleichnamigen Seiten oder Datenbankfeldern.

## 1. Einstieg und Systemprofil

| ID | Bedarf | Zu beantwortende Frage | Ausreichender Beleg |
| --- | --- | --- | --- |
| SYS-01 | P | Welches Problem lösen wir für welche Menschen/Teams? | Zweck, Zielgruppen und tatsächliche Produkt-/Nutzeraufgaben; Abgrenzung zu anderen Systemen. |
| SYS-02 | P | Welche Produkte, Marken und Plattformen gehören zum Scope? | Benannte Geltung; geplant, unterstützt, offen und ausgeschlossen unterscheidbar. |
| SYS-03 | P | Welche Prinzipien helfen bei Zielkonflikten? | Wenige begründete Entscheidungsprinzipien mit erkennbarem Anwendungsfall, statt Markenadjektiven. |
| SYS-04 | P | Wie beginnt Design bzw. Umsetzung? | Ein realer erster Weg, erreichbare Ressourcen und nötige Voraussetzungen; fehlende Zugänge benannt. |
| SYS-05 | P | Welche Themenfamilien sind für unsere Aufgaben relevant? | Inventar: erforderlich/bedingt/nicht relevant samt Grund. Kein stillschweigend leerer Bereich. |
| SYS-06 | B: gemeinsame Plattform für mehrere Systeme | Wie wähle ich das richtige System? | Systemidentität, Geltung und Zuständigkeit je System; keine implizite Vererbung fremder Regeln. |

**Mögliche Gliederung:** Zweck und Umfang → Prinzipien → Arbeitswege/Ressourcen → Themenkarte → Zuständigkeiten. Ein kleiner Einstieg darf all dies knapp zusammenführen. Er sollte nicht den vollständigen Komponentenkatalog erklären.

## 2. Plattformen und nutzbare Ressourcen

Hier steht, welche konkrete Umsetzung zu einer Aufgabe und Umgebung passt. Der Baustein selbst wird auf seiner Komponentenseite erklärt.

| ID | Bedarf | Zu beantwortende Frage | Ausreichender Beleg |
| --- | --- | --- | --- |
| PLT-01 | P | Welche Umgebungen unterstützen wir tatsächlich? | Unterstützungsumfang mit Einschränkungen, Version/Zeitraum oder ausdrücklich offener Entscheidung. Mobile Web und Desktop-Web als Kontexte von Web; native Plattformen separat. |
| PLT-02 | P | Wo liegen führende Design- und Umsetzungsressourcen? | Auffindbare Bibliothek/Designressource/Paket/Referenz mit Stand, Zuständigkeit und Nutzungsgrenze. Keine Pflicht zu einem bestimmten Werkzeug. |
| PLT-03 | P | Ist das ein Muster, eine Demo oder eine verwendbare Implementierung? | Reifestand und Begriffslegende; Komponentenreferenz mit konkreter Variante/Version. Fehlende Implementierung bleibt erkennbar. |
| PLT-04 | P | Was wurde in welchem Kontext geprüft? | Testgegenstand, Version, Umgebung, Verfahren, Ergebnis, Zeitpunkt und offene Punkte; gegebenenfalls explizit kein Nachweis. |
| PLT-05 | B: mehr als eine Plattform | Was bleibt an der Aufgabe gleich, was unterscheidet sich? | Matrix für Navigation, Eingabe, Fokus/Zugänglichkeit, Rückmeldung und Lebenszyklus; konkrete Abweichungen statt nachgebauter Screenshots. |
| PLT-06 | B: mehrere Eingabe-/Anzeigekontexte | Welche Bedien- und Platzbedingungen müssen berücksichtigt werden? | Tastatur/Zeiger/Touch, Bildschirmtastatur, verfügbare Fläche, Textvergrösserung; jeweils Bezug zu führendem Pattern/Layout. |
| PLT-07 | B: native Zielplattform oder eigener Desktopclient | Wie werden Plattformkonventionen und Hilfsmittel angebunden? | Benannte native Quelle, Navigation/Zurück, Semantik und relevante Systemereignisse für die gewählte Aufgabe. Browserbelege ersetzen dies nicht. |
| PLT-08 | B: Ressourcenwechsel | Was ist kompatibel und wie wird umgestellt? | Versionenbeziehung, betroffene Gestaltung/Verhalten und konkrete Migration; Verweis auf Pflege. |

**Unterthemen nach Bedarf:** Plattformübersicht; Webkontexte; native iOS-/Android-/Desktopumsetzung; Designressourcen; Implementierungsinventar. Drei leere Plattformseiten sind kein Vollständigkeitsbeleg. Eine begründete Scopeübersicht genügt, bis ein eigener Plattforminhalt existiert.

## 3. Mitwirken und Pflege

| ID | Bedarf | Zu beantwortende Frage | Ausreichender Beleg |
| --- | --- | --- | --- |
| GOV-01 | P | Wer entscheidet und wer pflegt? | Fachliche Verantwortung, Reviewrollen und erreichbarer Rückmeldeweg, auch bei geteilter Zuständigkeit. |
| GOV-02 | P | Wie melde ich Bedarf, Widerspruch oder Fehler? | Eingabeanforderungen: Problem, Kontext, betroffener Stand, Beobachtung/Beleg, gewünschtes Ergebnis; realer Einreichungsweg. |
| GOV-03 | P | Wie wird ein Vorschlag eine geltende Regel? | Schritte, benötigte Belege, Entscheidungszuständigkeit, Umgang mit Einwänden/offenen Punkten. |
| GOV-04 | P | Was bedeutet der angezeigte Status? | Getrennte Bedeutung von Seitenveröffentlichung, Fachentscheidung, Contractrevision und Implementierungsreife. |
| GOV-05 | P | Welche Quelle trägt welche Aussage? | Fundstelle und Stand; eigene Anpassung/Abweichung mit Begründung, Auswirkungen einer Quellenänderung. |
| GOV-06 | P | Wie erkennen wir Änderungsbedarf? | Reviewauslöser wie Nutzerbefund, Bibliothekswechsel oder geänderte Anforderung; Zuständigkeit und Bearbeitungsweg. |
| GOV-07 | P | Wie bleibt eine Änderung nachvollziehbar? | Entscheidungsgrund, Änderungsumfang, historischer Stand und betroffene Referenzen. |
| GOV-08 | B: Ablösung oder inkompatible Änderung | Wie migrieren bestehende Nutzer? | Ersatz oder ausdrücklich kein Ersatz, Übergang, Handlung und alte Verweise. |
| GOV-09 | B: geregelte Ausnahmen | Wie wird eine lokale Abweichung behandelt? | Anlass, Scope, verantwortete Entscheidung, Gültigkeits-/Reviewbedingung; keine stillschweigende globale Regel. |

**Mögliche Gliederung:** Mitwirken → Regeln/Quellen pflegen → Änderungen/Migrationen. Ein Tickettool, Git-Workflow oder mehrstufiges Approval ist nicht allgemein vorgeschrieben. Der reale Weg muss lediglich benutzbar und nachvollziehbar sein.

## 4. Technische und agentische Nutzung

Diese Familie wird aktiviert, sobald maschinenlesbare Referenzen oder Agenten Teil des Systemauftrags sind. Ein rein redaktionelles Handbuch muss kein MCP und keine Contracts bereitstellen.

| ID | Bedarf | Zu beantwortende Frage | Ausreichender Beleg |
| --- | --- | --- | --- |
| AGT-01 | B: maschinelle Nutzung | Wie wählt ein Konsument System, Gegenstand und gültigen Stand? | Stabile Identität, Geltung, Status und Version im Ergebnis; Such-/Abrufweg samt Fehlerfall. |
| AGT-02 | B: zwei Darstellungswege | Sind Aussagen und Einschränkungen im Portal und Export gleich? | Nachvollziehbare gemeinsame Quelle oder Abgleich mit konkretem Stand; Textfassung für entscheidende visuelle Aussagen. |
| AGT-03 | B: formale Contracts | Welche Regel wird durch welches Artefakt beschrieben? | Zuordnung von Schnittstelle, Werten/Darstellung, Verhalten oder Semantik zur führenden Regel und Revision; keine Pflicht zu jeder Domäne für jede Seite. |
| AGT-04 | B: Agentenarbeit | Was darf der Agent lesen, vorschlagen, ändern oder veröffentlichen? | Ausdrücklicher Arbeitsumfang, benötigte Eingaben, fehlende Information und menschliche Entscheidung; tatsächliche Toolfähigkeiten. |
| AGT-05 | B: Skills/Arbeitsanleitungen | Wie läuft ein erster Auftrag ab? | Systemwahl → passende Regeln finden → Grenzen prüfen → Vorschlag/Umsetzung → begrenzter Nachweis → Teamentscheidung. Verlinkter, tatsächlich verfügbarer Skill samt Stand. |
| AGT-06 | B: übergebene externe Quellen/Artefakte | Was bleibt nach der Übergabe zuverlässig nutzbar? | Auflösbare Dateien/Referenzen, Integrität und Versionsbezug; keine nur beim Exporteur existierenden lokalen Pfade. |
| AGT-07 | B: vorgeschlagene automatische Änderung | Wie werden Konflikte und bestehende Arbeit erhalten? | Betroffener Stand, Änderungsgrenze, Review und Rücknahme/Versionierung. Lesender Zugriff begründet keine Schreibbefugnis. |

Ein Architekturdiagramm genügt für AGT-05 nicht. Die Anleitung braucht einen tatsächlich nachvollziehbaren Auftrag mit sichtbarem Ergebnis und offenen Punkten. Automatische Prüfung ersetzt weder Produktentscheidung noch allgemeine fachliche Abnahme.

## 5. Belegter Abgleich mit Arve/shadcn

Prüfung dieses Dokuments: gezielte Sourcelektüre am 18.11.2026. Historische Audits werden als solche benannt. Kein neuer DB-Audit und keine neue Plattform-Funktionsprüfung.

| IDs | Inhaltsabdeckung | Beleg und Lücke |
| --- | --- | --- |
| SYS-01/04/06 | teilweise | `src/app/(docs)/page.tsx` erklärt Arbeitswege und Systemwahl; `src/docs/arve-workflows.tsx` beschreibt Tätigkeiten. Ein firmenspezifischer Auftrag mit tatsächlicher Verantwortungsübergabe fehlt. |
| SYS-02/03/05 | teilweise | `DesignSystems.ts` hält Name, Beschreibung, Theme und Home; Handbuch erklärt Referenzgrenzen. Ein beschlossener Produkt-/Plattformumfang, Entscheidungsprinzipien und Relevanzinventar sind nicht zusammengeführt. |
| PLT-01–04 | teilweise | `Implementations.ts` besitzt Plattform, Version, Status, Kontext, owner und verification. Die Struktur trägt den Nachweis; Datenfelder allein belegen weder gefüllte Verantwortung noch vollständige Prüfung. Frühere Plattformanalyse dokumentiert nur Button-Preview und begrenzte Prüfung. |
| PLT-05–07 | nicht belegt | Keine ausgeführte plattformübergreifende Aufgabenabnahme in den geprüften Releases; Plattformfachplan ist Planung. iOS/Android nicht automatisch als unerforderlich werten. |
| GOV-01–07 | teilweise | Pages-Drafts/Versions, Releaseberichte und Fachtexte liefern Teile. Fachstatus, Verantwortung, verbindlicher Review-/Einreichungsweg fehlen als zusammenhängende redaktionelle Praxis. |
| GOV-08 | teilweise | Wegweiser erhalten alte Adressen, Quellen-/Revisionen bleiben erhalten. Eine dokumentierte produktbezogene Migration ist damit nicht nachgewiesen. |
| GOV-09 | nicht belegt | Keine konkrete geregelte Ausnahme im geprüften Material. Relevanz muss das Systemprofil entscheiden. |
| AGT-01/02 | teilweise | Vier lesende Tools in `src/app/mcp/route.ts`; neue Ablauf-/Meldungsblöcke nutzen gemeinsame CMS-Daten. Fachstatus nicht strukturiert; ältere Studien besitzen zusätzlich feste JSX-Aussagen. |
| AGT-03/06 | teilweise | Gepinnte lokale Exportbibliotheken und `src/contracts/catalog.ts`; Artefakte und technische Domänen vorhanden. Dieser Audit prüft nicht erneut alle Artefakthashes oder deren fachliche Übereinstimmung. |
| AGT-04/05 | teilweise | Read-only MCP und lokale Skillbrücke vorhanden; der Einstieg beschreibt Verantwortung. Eine vollständige aktuelle Abruf-/Arbeitsanleitung fehlt noch, siehe unabhängiges Review. |
| AGT-07 | nicht belegt | Inhaltsimportskripte prüfen Baselines/Transaktionen; kein allgemeiner schreibender MCP-/Agentenprozess geprüft. |

### Quellen und Einordnung

[Carbon Contribution Overview](https://www.carbondesignsystem.com/getting-started/contributing/overview) und [Component checklist](https://www.carbondesignsystem.com/getting-started/contributing/component-checklist), direkt gelesen 18.11.2026. Carbon verbindet Beiträge mit Review/Reife und betrachtet Gestaltung, Code, Tests und Designressourcen. Die Tabellen oben sind unsere systemneutrale Ableitung, keine Carbon-Vorschrift. Insbesondere Werkzeugwahl, Statusnamen und native Unterstützung müssen das jeweilige Team selbst festlegen.

Bestandsbelege: `src/collections/Pages.ts`, `DesignSystems.ts`, `Implementations.ts`, `src/app/mcp/route.ts`, `src/docs/content.tsx`, `scripts/seed-system.mjs`, `docs/handbook/plans/platforms.md`, `plans/governance.md`, `critical-review-2026-11-18.md` und `form-workflow-release.md`. Quellpfade beziehen sich auf das Repository. Fachpläne ersetzen keine veröffentlichten Regeln oder ausgeführten Prüfungen.
