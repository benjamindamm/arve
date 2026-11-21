# Praxischeck: Kontaktverwaltung mit Arve / shadcn

20. November 2026. Eigenständiger Entwurfsversuch eines frischen Product/UI-Designers und Agent-Anwenders. Ausgewählte Bibliothek: **shadcn**. Ergebnis: **für einen reviewbaren Entwurf arbeitsfähig, für eine belastbar integrierte Anwendung klar begrenzt**. Das System hat konkrete Entscheidungen erleichtert. Den Prototyp und seine Ablaufsteuerung musste ich selbst ausarbeiten; keine vorhandene Komponentenfreigabe oder echte Speicherung wird behauptet.

[Prototyp](prototype.html) · [ausgeführte Checks](checks.md) · [vor dem Bau gesicherter Erstentwurf](design-first.md) · [Quellenregister](source-register.json). Lokale Vorschau: http://127.0.0.1:3018/prototype.html. Native HTML-Wireframe-Controls, keine echte Spartan-Implementierung und keine Contractkonformitätsaussage.

## Auftrag und Arbeitsgrenzen

Berechtigte Teammitglieder sollen Kontakte finden, Angaben lesen und den Anzeigenamen ändern. Eine separat gespeicherte Benachrichtigungseinstellung soll unmittelbar ein-/ausschaltbar sein. Desktop, schmale Fläche, Korrektur, Abbruch und problematische Speicherantworten gehören zum Auftrag. Drei neutrale Datensätze verwenden K-101 bis K-103, «Testkontakt Nord/Süd/West» und Adressen unter example.invalid. Berechtigung ist eine Eingangsvoraussetzung des Auftrags; ein Anmelde- oder Rollensystem wurde nicht erfunden.

Zuerst BrowserOS-Neo-Anleitung gelesen, danach Portal in eigenem Tab tatsächlich benutzt. MCP war nicht direkt als Arve-Connector verbunden. Minimalen SDK-Client mit vorhandenem @modelcontextprotocol/sdk gebaut: Client + StreamableHTTPClientTransport, listTools, selbst gewählte Lesewerkzeuge. Keine DB, keine Secrets, kein CMS-Write, keine Autorenwerkzeuge, keine alten Auditberichte und keine Portalimplementierung gelesen. Alle eigenen Dateien befinden sich in diesem Praxischeckordner. Der im Portal angebotene technische Artikel enthält selber Quellpfadverweise; diesen veröffentlichten Inhalt habe ich gelesen, die genannten Implementierungsdateien nicht geöffnet.

## Recherche: Frage → Zugriff → Ergebnis

Alle Portalpfade beginnen mit `http://127.0.0.1:3010`; sie wurden in Neo gelesen. Die ergänzenden MCP-Antworten liegen als JSON hier im Ordner, einschließlich vollständiger technischer Contractinhalte und Hashlisten. Seitenzeitstände im Quellenregister sind `updatedAt`, keine behaupteten technischen Contractrevisionen.

| Gesuchte Frage | Werkzeug / Seite | Brauchbares Ergebnis oder Hindernis |
| --- | --- | --- |
| Wo beginnt ein konkreter Ablauf? | Neo `/systems/shadcn` | Einstieg Finden→Verstehen→Bearbeiten und direkte Links zu Seitentyp, Anordnung, Patterns, Komponenten. Statische Vorschau ausdrücklich begrenzt. |
| Welche Aufgabenansichten brauche ich? | Neo `/systems/shadcn/page-types`, MCP `get_documentation_page` | overview für Auswahl, detail für Angaben, edit für Änderung. create gehört nicht zum Auftrag. Seitentyp legt Spaltenzahl nicht fest. Siehe `mcp-page-types.json`. |
| Welche räumliche Anordnung passt? | Neo `/systems/shadcn/page-layouts`, MCP gleiche Seite | Wide Single Card für zusammengehörige Übersicht; Stacked Section Cards für Angaben und getrennte Einstellung. Gleiche Lesereihenfolge schmal erhalten. Kein Grid nötig: Daten sollen nacheinander gelesen, nicht verglichen werden. `mcp-page-layouts.json`. |
| Welche Patterns sind belastbar? | Neo `/systems/shadcn/patterns`, UX-002 angeklickt; MCP `get_documentation_page({section:patterns})` | UX-002 Liste sofort filtern ist candidate, Suchkorrektheit/Persistenz nicht belegt. UX-029 Eintrag öffnen: candidate, Rückkehrfilter in begrenzter Beobachtung erhalten, Browser-Zurück ungeprüft. UX-023 Bearbeitung öffnen/abbrechen: candidate, keine geänderten Werte verworfen. Nicht als Freigabe genutzt. Vollständige IDs/Beobachtungen: `mcp-patterns.json`. |
| Wie suche ich und komme zurück? | Neo `/systems/shadcn/suchen-filtern`, MCP gleiche Seite | Suchkriterien sichtbar halten; Ergebniszahl, keine Treffer und leerer Bestand unterscheiden; Rückkehr über stabile ID. Lokale Projektentscheidung sofortige Suche/max. 50 ist keine allgemeine Kontaktregel. `mcp-suchen-filtern.json`. |
| Wie lese/bearbeite ich einen Eintrag? | Neo `/systems/shadcn/detailseite`, `/systems/shadcn/page-type-edit` | Identität, bestätigter Ausgangswert, Rückweg und explizite Aktion. Geänderter Entwurf wird vor ungesendetem Verwerfen abgefragt. `mcp-detailseite.json`, `mcp-page-type-edit.json`. |
| Was passiert bei Fehler oder fehlender Antwort? | Neo `/systems/shadcn/formulare-validierung`, `/systemzustaende` | Feldproblem vs. Vorgangsstörung; laufend vs. bestätigt vs. ausdrücklich abgelehnt vs. unbekannt. Unbekannt nicht als Misserfolg darstellen; kein erneutes Senden/Verwerfen vor Klärung. Statusschnittstelle ausdrücklich nicht verfügbar. `mcp-forms.json`. |
| Wie ordne ich Feld, Hilfe, Fehler, Aktionen? | MCP `/systems/shadcn/content-layout-form-layout` | Label→Input→Hilfe→Fehler, einspaltig/max.640px, Meldung vor Speichern/Abbrechen, Aktionen untereinander bei weniger Platz. Redaktionelle Referenz, keine allgemeine shadcn-Vorschrift. `mcp-form-layout.json`. |
| Ist ein Switch passend, und speichert er? | Neo `/systems/shadcn/components/switch`, MCP `get_component_page` | Sofortige Einstellung, Label konstant, zwei bekannte Zustände; unbekannt nicht als Aus. Demo speichert nicht; Status und Speichersteuerung Hostaufgabe. `mcp-switch.json`. |
| Welche Verträge und Grenzen gelten? | MCP Seitenbaum, Input/Button/Switch | Revision/Status/Originaldateien und getrennte Implementierungsdatensätze tatsächlich geliefert. `mcp-tree.json`, `mcp-input.json`, `mcp-button.json`, `mcp-switch.json`. |
| Welche exportierten Leseskills kann ich verwenden? | listTools; `search_documentation(query:skill)`; Neo `/systems/shadcn/technische-anbindung` | Vier Lesetools, kein Skill-/Paket-Lesetool. Artikel erklärt, dass ein separates portables Paket `skills/ui-contracts/SKILL.md` enthält; Komponenten-Downloadliste liefert dieses Paket nicht. Im gelesenen MCP-Vertrag ist dieser Skill nicht erreichbar. **Kein Beleg, dass er im Export fehlt.** `mcp-tools.json`, `mcp-skill-search.json`, `mcp-technische-anbindung.json`. |

## Konkrete Gestaltung und Herkunft der Entscheidungen

**Aus Auftrag:** Kontakt finden→ansehen→Anzeigenamen ändern; berechtigte Teammitglieder; separate sofortige Einstellung; breite/schmale Ansicht; Korrektur, Abbruch und problematische Ergebnisse. Keine Erstellung, Löschung, Archivierung oder Projekteigenschaften übernommen.

**Vom System gelernt und für diesen Entwurf übernommen:** Suche vor Ergebniszahl/Liste. Ein Ergebnislink öffnet die eindeutige Kontakt-ID. Detail hält Kontaktangaben und nächste Aktion zusammen; separat gespeicherte Einstellung steht in eigener nachfolgender Card. Edit zeigt zuletzt bestätigten Ausgangswert, sichtbares Label, Hilfe und gegebenenfalls Feldfehler. Speichern ist eine explizite Aktion, nicht Blur oder Abbrechen. Die Meldung steht vor den Aktionen. Unverändertes Speichern sendet keine Anfrage. Nach bestätigter Annahme folgt Detail mit sichtbarer Bestätigung. Eine nachweisliche Nichtannahme erhält den Entwurf; eine fehlende Antwort sperrt Wiederholung und Verwerfen. Switchname bleibt «Benachrichtigungen». Unbekannter Zustand wird als «Zustand ungeklärt» dargestellt, ohne falsches Aus.

**Eigene Entwurfsannahmen:** Der vollständige lokale Satz besteht aus drei Testkontakten. Suche reagiert sofort, ignoriert Gross-/Kleinschreibung und durchsucht ID und Anzeigename. Das ist eine Simulationsentscheidung, kein belegter Kontakt-Suchvertrag. Der Rücklink erhält q in der URL und berechnet die Liste neu; fehlt der umbenannte Kontakt im Suchergebnis, erscheint eine Erklärung. Kontakt-ID/Testadresse sind nur lesbar. Einstellung ist im Entwurf kontaktbezogen und wird unmittelbar separat angefragt; Schalterstellung wird erst mit bestätigter Antwort aktualisiert. Das ist eine konkrete Reviewvariante, ihre fachliche Eignung bleibt zu entscheiden. Anfragen dauern im Simulator 650ms, damit der Laufzustand sichtbar ist; keine reale Leistungsannahme.

**Bewusst nicht übertragen:** Die Projektregeln zu 1–80 Graphemclustern, Trim, erlaubten Duplikaten, Aktiv/Archiviert und höchstens 50 Projekten. Für Kontakt-Anzeigenamen gibt es im Auftrag keine solche Regel. Der Prototyp erzwingt deshalb keine Pflicht, Längengrenze, Normalisierung oder Eindeutigkeit. Die reproduzierbare «Feldablehnung» wird ausdrücklich über das Testlabor gewählt, nicht über eine erfundene Kontaktregel. Sie belegt die Darstellung und Korrekturmöglichkeit; eine fachlich bestimmte Validierung kann erst nach der offenen Produktentscheidung ergänzt werden.

Die Benachrichtigung ist vom Namensformular getrennt; Abbrechen des Namens führt keine Einstellungsänderung aus. Erneute widersprüchliche Einstellungsänderung bleibt während einer Anfrage gesperrt. Ein bestätigter Fehler zeigt, welcher alte Zustand bestehen bleibt; eine unklare Antwort lässt keinen binären Schalter vorgaukeln, dass Aus feststeht. Das Testlabor simuliert ausdrücklich eine Antwort zur ursprünglichen Anfrage. Es ist kein erfundener produktiver Status-Endpunkt.

## Verknüpfte technische Contracts

Alle drei ausgewählten Komponentenreferenzen stehen auf **Revision `65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26`**, Herkunft portable-export, Status **draft**. Keine technische Freigabe aus den redaktionellen Seiten abgeleitet.

| Contract | Verwendete Aussage | Grenze / tatsächlicher Implementierungsstand |
| --- | --- | --- |
| shadcn/input | `components/input/interface.json`: Stringwert, Label, natives input; `accessibility.html`/`.rules.json`: sichtbares Label, native Fokus-/Eingabeverantwortung; `behavior.scxml`: Ereigniswert/Hostupdates | Input ist einzeiliger Freitext, keine fachliche Validierung oder Formularmaschine. `implementations: []`. |
| shadcn/button | `components/button/ux.json`: benannte Aktion in aktueller Ansicht, Navigation als Link; `accessibility.html`: nativer type=button; `behavior.scxml`: native Aktivierung/disabled | **Formularübermittlung liegt ausdrücklich ausserhalb dieses Drafts.** Submit im Prototyp ist eigener Hostentwurf. Ein Webdatensatz: Spartan Button, @spartan-ng/brain 1.9.0, preview, Contract `fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d` – andere Revision. Klick/Deaktivierung lokal genannt; mobile Bedienung, Assistenztechnik und Konformität offen. |
| shadcn/switch | `components/switch/ux.json`: unmittelbar ein/aus; CEM checked/disabled/change; `accessibility.html` natives Checkboxinput mit Switchrolle; SCXML native boolesche Änderung/Hostupdate | Nur zwei bekannte Zustände. Speicherung, unbekannte Ergebnisse und Statusklärung sind keine zusätzliche Schalterfähigkeit. `implementations: []`. Demo verwendet laut Portal Button mit Switchrolle, Contract Checkboxinput; Gleichheit ungeprüft. Destructive-Varianten offen. |

Zu jeder Komponente liefert `contract.sources` zudem `tokens.json` (DTCG) und `components/<id>/layout.css`; vollständige Dateien und SHA-256 stehen in den jeweiligen `mcp-*.json`. Gezielte lesbare Domänenauszüge: `contract-input-extract.json`, `contract-button-extract.json`, `contract-switch-extract.json`. Die Wireframe-Farben und Abmessungen sind eigener Entwurfsstil, nicht als DTCG/CSS-Projektion ausgegeben. SCXML-Dateien wurden gelesen, im Prototyp nicht ausgeführt. Keine Hash-Downloadprüfung oder neue Contractvalidierung behauptet.

## Offene Produktentscheidungen und echte Handbuchreibungen

### offeneEntscheidung beim Produkt

- Geltungsbereich der Benachrichtigung: Kontakt, einzelne Person, Team oder Arbeitsbereich; Kanal, Ereignisse und tatsächliche Wirkung.
- Zulässige Anzeigenamen: Pflicht, Länge, Zählweise, Whitespace, Duplikate, Normalisierung. Der Fehlerfall ist bis dahin nur Simulation.
- Suchbestand/-menge, Suchfelder, Sortierung und spätere Serverabfrage. Drei vollständige lokale Testdaten sind kein Produktionsmodell.
- Rollen und Berechtigungsentzug während der Bearbeitung, Offenlegung von Kontaktdaten und Verhalten bei Zugriffsausfall.
- Gleichzeitige Bearbeitung, Konflikte und Versionsprüfung. Kein stilles Überschreiben als Produktregel festgelegt.
- Reale Speicher- und Statusabfrageschnittstelle mit stabiler Anfragezuordnung, Wiederholungssicherheit und Aufbewahrung des Entwurfs bei Verlassen/Neuladen.

Diese Punkte kann ein allgemeines Handbuch nicht ohne Produktauftrag entscheiden. Ich werte ihr Offenbleiben nicht als fehlende allgemeine Regel.

### Harte Reibungen für Arve, nach Nutzen priorisiert

1. **P1 – Agentenzugriff auf Leseskill/Paket fehlt im angebotenen MCP.** Das Portal sagt, der vollständige Export enthalte Skills; listTools bietet nur Dokumentationsbaum/-suche/-seite/Komponentenseite. Keine angebotene Route für `skills/ui-contracts/SKILL.md`. Fundstellen: `mcp-tools.json`, `mcp-technische-anbindung.json`, `contractArtifacts` in `mcp-switch.json`. Verbesserung: lesbaren Einstieg zum gepinnten Skill samt Paketrevision anbieten. Befund betrifft Zugriff, nicht Vorhandensein im Export.
2. **P1 – Hostablauf ist nicht durch Komponentencontracts gedeckt.** Speichern/Abbruch/Statusklärung muss aus Text nachgebaut werden. Button schliesst Submit sogar aus, Input/Switch enthalten keine Speichermaschine. Das Handbuch erklärt die Grenze ehrlich, aber liefert keine zusammenhängende ausführbare Hostreferenz. Fundstellen: `components/button/ux.json` in `contract-button-extract.json`; `mcp-forms.json` und `mcp-page-type-edit.json` mit ausdrücklich fehlender Statusklärung. Für Gestaltung genug; integrierte Umsetzung bleibt abhängig von Produkt/Backend.
3. **P2 – Transfer aus dem Projektpiloten ist mühsam.** Ausführliche, hilfreiche Regeln und sehr konkrete lokale Fachentscheidungen liegen auf denselben Seiten. Ohne sorgfältiges Lesen hätte ich 80-Zeichen-Limit, Archivierung und Bestandslimit übernommen. Fundstellen: `mcp-forms.json` Abschnitte Pilotumfang/Feldbedingungen; `mcp-suchen-filtern.json` Referenzentscheidung. Ein kurzer Hinweis «übertragbare Interaktionsregel vs. nur Projektfachregel» direkt am Einstieg würde diesen konkreten Kontaktentwurf erleichtern.
4. **P2 – Kandidaten reichen allein nicht als Arbeitsmuster.** UX-023 nennt Abbruch, belegt aber keine geänderten Werte; UX-002 nennt Suche, aber keine fachliche Korrektheit/Persistenz. Die eigentliche Antwort kommt erst über Fachseiten. Fundstelle `mcp-patterns.json`. Der Status ist klar, die Verbindung von Kandidat zu ausführbarer Folge bleibt Handarbeit.
5. **P2 – Komponentenstand und Anwendungsstand müssen separat rekonstruiert werden.** Buttonseitenrevision und preview-Implementierungsrevision unterscheiden sich; Switch/Input haben keinen Implementierungsdatensatz. Fundstellen `mcp-button.json`, `mcp-switch.json`, `mcp-input.json`. Die Trennung ist nützlich, macht aber eine Planung «welche gewählten Regeln kann ich wirklich einsetzen?» ohne zusätzliche technische Abklärung unmöglich.

Es gab keine Portalblockade, die den Wireframe verhindert hat. Externe Quellen oder eigenes Repo-Quellcodewissen waren für die fachliche Recherche nicht nötig. Eigene HTML/CSS/JS- und Browsererfahrung war nötig, um aus den Regeln eine bedienbare Simulation zu machen; diese Implementierungsleistung wird dem Handbuch nicht als vorhandene Fähigkeit zugerechnet.

## Urteil

**Arbeitsfähig für die Designabstimmung.** Ich konnte ohne alte Auditkenntnisse einen kleinen, konsistenten Kontaktablauf ableiten und die kritischen Ergebnisse sichtbar machen. Besonders nützlich waren die Trennung von Seitentyp/Anordnung, der Unterschied zwischen ausdrücklicher Nichtannahme und unbekanntem Ergebnis und die Switch-Regeln.

**Grenzen:** Die App braucht eigene Produktentscheidungen und einen Hostablauf; die Contracts sind draft, die einzige registrierte Webimplementierung hat eine andere Revision, Statusklärung fehlt. Der Prototyp zeigt eine mögliche Anwendung gelernter Regeln. Er ist weder eine fertige Anwendung noch ein allgemeines WCAG-, Mobile- oder Produktionszertifikat. Ausgeführte Prüfungen und offen gebliebene Punkte stehen in checks.md.

## Unabhängiger Gegencheck: echter Fehler der Agentumsetzung

Der Root-Gegencheck hat nach dem ersten Walkthrough einen schweren Zuordnungsfehler der ursprünglichen Simulation reproduziert: Nord einschalten mit unbekanntem Ergebnis → Liste → West öffnen → «Annahme simulieren» schaltete West ein. Die Anfrage galt Nord. Ursache war globale `selected`-/`settingPhase`-/`pendingSetting`-Verwendung im eigenen Prototyp. **Das war ein Agent-Implementierungsfehler und macht den ursprünglichen Walkthrough als ausreichende Absicherung unbrauchbar.** Kein fehlendes Kontaktfachwissen rechtfertigt eine Antwortzuordnung zum falschen Objekt.

Die fehlerhafte Requestlogik ist in [prototype-before-request-fix.html](prototype-before-request-fix.html) bewahrt: aus dem früheren Toolstand rekonstruiert, keine behauptete byteidentische historische Kopie; spätere visuelle Anpassungen bleiben darin. Sie dient nur der Fehlernachstellung. Das Handbuch formuliert bereits die Bindung an die ursprüngliche Anfrage (`mcp-forms.json`); ich habe diese gelesene Regel im ersten Code nicht korrekt umgesetzt. Eine explizite Regression «Antwort nach Objektwechsel» wäre eine sinnvolle zusätzliche Handbuchprüfhilfe; ihr Fehlen ist **nicht** die Ursache oder Entschuldigung dieses Fehlers.

Korrektur: Einstellungszustand und Anfrage (ID, Kontakt-ID, Zielwert) sind am ursprünglichen Kontakt gebunden; der Timer hält den Zielkontakt fest. Andere Kontakte laden ihre eigenen Zustände. Die Namensantwort hält ebenfalls den beim Senden gewählten Zielkontakt fest. Wiederholung und Abbruch bleiben beim unklaren Namensvorgang gesperrt.

Tatsächlich nachgeprüft: Nord unbekannt → West öffnen → dort Klärung versuchen (West bleibt false/idle) → Nord wieder öffnen (weiterhin ursprüngliche S-1 ungeklärt) → Annahme simulieren (nur Nord true). Trace: [regression-contact-request.json](regression-contact-request.json). Zusätzlich bei 390px Einstellung und Namensänderung gleichzeitig ungeklärt gehalten; simulierte Annahmen änderten nur Nord, andere Kontakte blieben unverändert. Das ist eine gezielte Regression, keine allgemeine Nebenläufigkeitsfreigabe.

Unabhängiger ursprünglicher Fehlernachweis vor der Korrektur: [Root-Prüfnotiz](root-review.md) und [Screenshot des falschen Kontakts](root-failure-wrong-contact.png), vom Root erstellt und tatsächlich angesehen. Diese Dateien wurden von mir nicht verändert.
