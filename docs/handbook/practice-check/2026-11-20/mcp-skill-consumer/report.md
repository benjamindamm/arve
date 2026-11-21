# Unabhängiger MCP-Verbrauchercheck · 20. November 2026

## 1. Entdeckung und Abrufnachweise

**Urteil:** Das Ziel „Skill selbständig finden, abrufen und auf die konkrete Aufgabe anwenden“ wurde in diesem Lauf erreicht. Das ist ein Nachweis der Lesekette und einer begrenzten fachlichen Beurteilung, keine Produkt-, Implementierungs- oder A11y-Freigabe. Die Aufgabe lässt sich mit dem gelieferten Paket nicht als vollständig spezifizierter Kontakteditor abschliessen.

Startwissen: Endpoint `http://127.0.0.1:3010/mcp`, ausdrücklich gewählte Bibliothek und Dokumentationssystem `shadcn`, Produktaufgabe. Keine Werkzeugnamen, Pfade oder Revision vorgegeben. Ausschliesslich MCP-Antworten wurden als fachliche Quellen benutzt. Kein lokales Exportpaket, Hostskill, Nachbarrepo, Implementierungs-/Testcode oder früherer Bericht wurde gelesen. Die vorinstallierte MCP-Clientbibliothek wurde nur importiert. Alle eigenen Dateien liegen in diesem Ergebnisordner. Kein Browser, keine CMS-Writes, keine Commits, keine Delegation.

`Client.listTools()` entdeckte sechs Werkzeuge. Ihre Beschreibungen und vollständigen Eingabeschemas wurden gelesen und in `tools.json` gesichert:

- `list_library_skills`: Bibliothek erforderlich; Revision optional; Entdeckung von Revisionen, Skills und erlaubten Ressourcen.
- `get_library_skill`: Bibliothek, Revision und Skill erforderlich; Hauptskill zuerst durch Weglassen von resourcePath; weitere Ressourcen nur exakt aus Allowlist.
- `get_component_page`: Dokumentationssystem und Komponentenslug; veröffentlichte Seite mit gepinntem Contract.
- `search_documentation`, `get_documentation_page`, `list_documentation_tree`: veröffentlichte Dokumentation lesen/suchen. Tree war zur konkreten Navigation nicht nötig und wurde nicht aufgerufen.

`calltrace.json` hält sämtliche konkreten Toolnamen, Argumente und Antwortdateien fest. Die nummerierten `.request.json` / `.response.json` sind die unveränderten Requests und Rohantworten. Ablauf:

| Nr. | Aufruf | Tatsächlich gelesenes Ergebnis |
|---|---|---|
| 01 | list_library_skills(library=shadcn) | Eine Revision, Skill ui-contracts, vier erlaubte Skillressourcen, vier Komponenten mit ausdrücklicher shadcn-Systembindung |
| 02 | get_library_skill(library, revision, skill=ui-contracts), ohne resourcePath | Hauptskill skills/ui-contracts/SKILL.md |
| 03 | gleicher Pin, resourcePath=library/library.json | Index, draft, Version 0.1.0, vier Komponenten, targets={} |
| 04 | gleicher Pin, resourcePath=manifest.json | Paketidentität shadcn, Format ui-contracts-export/v1, Dateihashes |
| 05 | gleicher Pin, resourcePath=skills/ui-contracts/references/reading.md | Sechs verbindliche Leseregeln |
| 06–09 | get_component_page(system=shadcn, component=input/button/switch/checkbox) | Definitionen und eingebettete gebundene Quellen, UX und Stories |
| 10 | search_documentation(system=shadcn, query=Formular, limit=10) | Formularpattern entdeckt, nachdem Input-Dokumentation darauf verwies |
| 11 | get_documentation_page(system=shadcn, section=formulare-validierung) | Projektpilot-Formularpattern, mit ausdrücklich lokaler Geltung und Prüfgrenzen |

Gemeinsamer Exportpin: `65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26`.
Skill-ID `ui-contracts`, Hauptressource `skills/ui-contracts/SKILL.md`.

| Gelesene Skillressource | SHA256 laut Entdeckung und Abruf |
|---|---|
| skills/ui-contracts/SKILL.md | 786cc70788ee6fda1f3cb24d9bcc3114a9f90a5ea50c6c306661c81afcd5ed0a |
| skills/ui-contracts/references/reading.md | ab4d2dfc3ba9705c2d76ab20fd851523d2043ab28595fe9d7bb09d02a77da1b2 |
| library/library.json | ae69420ed70221165b52a0e4532f15f5c964b66bde42b3b0802b275f185d0580 |
| manifest.json | 55a4ab92fc4669d86f3cea10c9671e3bb2996b2d9db9309d6f1d16379219ad7d |

Relative Links wurden vom Hauptskill-Verzeichnis `skills/ui-contracts` innerhalb des Pakets aufgelöst: `../../manifest.json`, `../../library/library.json`, `references/reading.md`. Komponentenpfade des Index wurden als Bindungen behandelt, nicht als automatisch mit get_library_skill lesbare Ressourcen. Entdeckung lieferte dazu die expliziten get_component_page-Argumente. Alle vier zurückgegebenen contractReference-Pins stimmen mit Bibliothek und Skillrevision überein; eine möglicherweise abweichende Publikationsrevision wurde also geprüft, nicht vorausgesetzt.

## 2. Sichtbar angewandte Skillregeln und Quellenbindungen

Die Quelle für die Arbeitsregeln ist ausschliesslich 02-main / 05-reading. Deren Anforderungen wurden wie folgt umgesetzt:

1. **Bibliothek explizit:** Manifest und Index bestätigen shadcn. Kein Ersatz aus einer anderen Bibliothek.
2. **Definitionen vor Domänen:** Für `shadcn:Input` 0.2.0, `shadcn:Button` 0.2.0, `shadcn:Switch` 0.1.0 und als Vergleich `shadcn:Checkbox` 0.2.0 wurden jeweils `components/<slug>/component.json` und alle von contract.sources gebundenen Dateien gelesen: interface.json, tokens.json, layout.css, behavior.scxml, accessibility.html, accessibility.rules.json, ux.json und stories.json. Die lokalen `06…09-*.reading.txt` sind lesbare Auszüge genau dieser MCP-Inhalte, keine lokalen Originalquellen. Alle Definitionen stehen auf draft.
3. **Domänen getrennt:** CEM beschreibt Werttypen und Events; SCXML Zustände und Übergänge; HTML/ARIA die native Projektion und Benennung; DTCG/CSS visuelle Werte und Selektoren. Ein visuelles Token wurde nicht als semantische Regel behandelt. Beispiel: Input specimenWidth=320 px und height=32 px sind visuelle Werte, keine fachliche Zeichenbegrenzung. Switch default=32×18 px, small=24×14 px sind Trackmasse; daraus folgt weder ausreichende Touchfläche noch A11y-Konformität. CSS enthält die jeweiligen Fokus-/Disabled-Regeln; Switch/Checkbox zusätzlich forced-colors-Fallback. Das sind gelesene Deklarationen, keine Laufzeitbeobachtungen.
4. **Vorhandene UX-Bindungen nutzen:** Alle vier ux.json wurden gelesen. Keine zusätzliche Auswahlpolicy erfunden. Insbesondere wird der Switch-Vorrang für unmittelbares Schalten aus dessen erklärtem Zweck abgeleitet; die Checkbox wird nicht pauschal als ungeeignet für boolesche Werte erklärt.
5. **Beleg, Ableitung, Annahme unterscheiden:** Die folgende Antwort kennzeichnet diese Ebenen. Unbekannte Fachregeln werden nicht aus Beispieltexten übernommen. Die Dokumentationsseite Input beschreibt einen Projektpilot mit 1–80 Graphemclustern nach Rand-Trimmen; das Formularpattern bestätigt ausdrücklich dessen lokale Geltung. Das ist keine Regel für Kontakt-Anzeigenamen.
6. **Draft und Nachweise begrenzen:** Kein historischer Beleg wurde als neue Prüfung ausgegeben. Die in MCP-Antworten mitgelieferten historischen Receipts wurden nicht als Prüfresultat dieses Laufs ausgewertet. Statische Stories sind keine Tastatur-, Screenreader- oder Produktbeobachtungen. Die zusätzliche CMS-Formularseite ist eine veröffentlichte lokale Gestaltungsreferenz, kein neuer gepinnter Komponentencontract und keine Kontaktfachregel.

Die Rohantworten enthalten Dateihashes für alle gebundenen Ressourcen. Exemplarische Definitionshashes:

- Input: `e6604150061b7e5486091f1617436402ac90df900109df072080da782245f2b2`
- Button: `176ee029cd471d7fdb6d95c0da26c5a7bce37824c19af2e31bd20044a380cddb`
- Switch: `8a7e9c68e0279684e230bd7ecf21cb69f99e308fc2c3f3f785040e49239d3d85`
- Checkbox: `e2f71f2d8c110dae66f33ed1a3bd28748b96b7865e5b0daa34eeef9247d7dff5`

## 3. Antwort auf die Produktaufgabe

**Auftragsfakten:** Vorhandenen Kontakt bearbeiten; Anzeigename frei eingeben; explizit speichern; davon getrennte Benachrichtigung unmittelbar ein-/ausschalten. Diese Anforderungen sind gesetzt. Kürze/Einzeiligkeit und konkrete Kontaktfachregeln sind nicht gesetzt.

| Teilaufgabe | Quellengestützter Paketumfang | Abgeleitete Beurteilung |
|---|---|---|
| Anzeigename eingeben | Input CEM: value:string, label:string, optional placeholder, disabled und rounded; natives input:InputEvent. SCXML SET_VALUE/NATIVE_INPUT übernehmen Strings; FOCUS/Escape verändern den Wert nicht. HTML natives type=text mit sichtbarem zugeordnetem Label. UX: kurzer einzeiliger Freitext. | Input ist ein begründeter Kandidat, **falls** Anzeigenamen kurz und einzeilig sein sollen. Das ist noch keine bestätigte Produkteigenschaft. Bestehenden bestätigten Wert kann der Host über value/SET_VALUE bereitstellen; der Paketdefault leer ersetzt das Laden des Kontakts nicht. |
| Explizit speichern | Button CEM: beschriftete Aktion ohne gespeicherten Wert oder Anwendungspayload; click:MouseEvent. SCXML NATIVE_CLICK sendet action.requested an den Parent. HTML und Rules verlangen type=button. UX schliesst Formularübermittlung ausdrücklich aus. | Ein benannter Aktionstrigger ist vorhanden. **Der Button-Contract reicht für Formularübermittlung nicht.** Er enthält weder submit-Variante noch Formbindung, Validierung, Anfrage/Bestätigung, Fehler- oder Wiederholungsmodell. Ein Host könnte auf eine Aktion reagieren; damit ist der fehlende Formularcontract nicht nachgewiesen oder ersetzt. |
| Benachrichtigung unmittelbar schalten | Switch CEM: checked:boolean, disabled, label, size default/small, natives change:Event. SCXML NATIVE_CHANGE übernimmt nur geänderte boolesche Werte und meldet checked.changed mit checked; SET_CHECKED übernimmt Hostwerte. HTML: native Checkbox role=switch, zugeordnetes stabiles Label; dekorative Teile aria-hidden. UX benennt unmittelbares Ein-/Ausschalten ausdrücklich. | Switch passt unmittelbar zum genannten Interaktionszweck. Initialzustand vom vorhandenen Kontakt laden und danach getrennt behandeln. Der boolesche Default false belegt keinen gespeicherten Ausgangswert. Das Paket spezifiziert keine erfolgreiche dauerhafte Speicherung beim Schalten. |
| Checkbox als Alternative beurteilen | Checkbox liefert ebenfalls checked:boolean und natives change; native Checkbox-Semantik. UX beschreibt unabhängige Option an-/abwählen. | Boolescher Wert allein entscheidet nicht. Switch hat hier den spezifischeren erklärten Zweck. Kein allgemeines Verbot für Checkbox abgeleitet; keine unvorhandene Auswahlpolicy behauptet. |

**Annahmen:** Es wird hier keine Annahme zur erlaubten Anzeigenamenlänge, Pflichtigkeit, Eindeutigkeit, Normalisierung, Mehrzeiligkeit oder Speichertechnik als Fakt benutzt. „Input passt“ bleibt an Einzeiligkeit/Kürze gebunden. „Unmittelbar schalten“ wird als gewünschte Wirkung des Auftrags verstanden; ob persistente Serveränderung synchron, optimistisch oder nach Bestätigung erfolgen soll, ist offen.

**Vor Umsetzung fachlich zu klären:** Soll der Anzeigename zwingend kurz/einzeilig sein; darf er leer sein; welche Längen-/Unicode-/Whitespace-/Eindeutigkeitsregeln gelten? Wann werden Fehler gezeigt? Wie wird ein vorhandener Kontakt zuverlässig geladen und wie werden parallele Änderungen behandelt? Was geschieht bei unverändertem Namen, Abbruch und ungespeicherten Änderungen? Wie wird Speichern gegen Doppelauslösung geschützt, Erfolg bestätigt, Ablehnung erklärt und ein unbekanntes Ergebnis geklärt? Beim Switch: was bedeutet der sichtbare Zustand während einer laufenden/fehlgeschlagenen Änderung, gibt es Rücksetzen oder Wiederholung und wie werden Resultate zugänglich mitgeteilt? Gilt die Einstellung für diesen Kontakt und welche Benachrichtigungen genau? Diese Fragen können die Auswahl und vor allem die Interaktionsspezifikation verändern; für einen endgültigen Entwurf sind Antworten erforderlich.

Die nachgelesene Seite `formulare-validierung` zeigt, dass die veröffentlichte Dokumentation dafür bereits ein **Projektpilot**-Pattern mit Entwurf, Prüfung beim Absenden, laufender Anfrage, bestätigter Annahme, Ablehnung und unbekanntem Ergebnis beschreibt. Sie erklärt selbst: Vorschau schreibgeschützt/statisch, keine Serveranbindung oder ausführbare Validierung; Statusklärung fehlt; unabhängige Prüfung steht aus. Dieses Pattern liefert eine konkrete Vergleichsquelle und offene Prüffragen. Projekt-ID, Aktiv/Archiviert, q/status, 1–80 Graphemcluster und Projekttexte werden nicht auf Kontakte übertragen. Seine Existenz erweitert insbesondere den Button-Draft nicht um submit-Semantik.

**Zielprüfungen für eine spätere Umsetzung:** Geladenen Anzeigenamen korrekt zeigen; Texteingabe und IME erhalten; fachliche Grenzfälle nach Klärung prüfen; kein unbeabsichtigtes Speichern durch Eingabe/Schalten; expliziten Speicherablauf samt unverändertem Wert, Doppelauslösung, Ablehnung und verloren gegangener Antwort prüfen; getrennte Einstellung initialisieren, sofortige Wirkung und Fehlerfall prüfen. Benennung/Beziehungen, Tabreihenfolge, native Enter-/Space-Bedienung, sichtbaren Fokus, zugängliche Status-/Fehlermeldungen, Zoom, Touch, Kontrast und forced colors an der tatsächlichen Oberfläche prüfen. Diese Prüfungen wurden hier nicht ausgeführt.

## 4. Friktionen, ausführbare Prüfungen und Grenzen

**Ausgeführt:** Erfolgreiche MCP-Verbindung; Tool-/Schemaentdeckung; 11 fachliche Toolcalls; Hauptskill und benötigte relative Links gelesen; Paket-/Komponentenpins verglichen; Definitionen und alle gebundenen Domänen samt UX/Stories textuell gelesen; Fähigkeiten und ausdrückliche Ausschlüsse mit dem Auftrag verglichen. Zusätzlich prüfte `verify.mjs` nur auf MCP-Daten die SHA256 der vier Skillressourcen gegen Entdeckung und Abruf sowie der 36 Komponentenressourcen gegen ihre Rückgabemetadaten und vier Pins. `integrity-check.json`: 44/44 Einzelchecks bestanden. Das ist eine selbst erstellte technische Integritätsprüfung, kein mitgelieferter Validator. Hashgleichheit bestätigt keine Normerfüllung.

**Was der Skill ermöglicht:** Quellen lesen und zuordnen; Typen/Zustände/Einheiten auseinanderhalten; deklarierte Eignung argumentieren; Ausschlüsse und fehlende Evidenz benennen; notwendige Zielprüfungen beschreiben. Die Werkzeuge bieten JSON/Text/XML/CSS-Inhalte für diese Arbeit direkt über MCP. Die Laufzeit des Servers behauptet in der Toolbeschreibung eine vollständige Manifest-/Integritätsprüfung je Skillabruf; unabhängig nachgerechnet wurde hier nur der oben beschriebene Teil auf zurückgegebenem Inhalt.

**Was fehlt:** Kein entdecktes Tool führt Schema-/CEM-/DTCG-/SCXML-Validierung, Policyevaluation, Rendering, Interaktions-/Browserprüfungen, Screenreaderprüfungen oder Autorentätigkeiten aus. Der Hauptskill und reading.md versprechen dies auch ausdrücklich nicht. Vorhandene Textlesefähigkeit ist keine installierte ausführbare Toolchain. Keine Produkt-/A11y-Konformität kann mit diesem Lauf bestätigt werden, und die Antwort bestätigt sie nicht.

**Reibungen:** Komponentenabrufe sind sehr gross, weil Dokumentationsseite, diverse Ressourcen und gemeinsame Tokens zusammen zurückkommen; eine ungekürzte Inspektion verursachte eine abgeschnittene Werkzeugausgabe. Die vollständigen Rohantworten waren bereits gesichert; die anschliessende gezielte Extraktion und Lektüre der gebundenen Quellen löste das ohne Repo-Fallback. get_library_skill hat eine enge Allowlist: Manifestdateien sind nicht automatisch alle als Skillressource abrufbar. Das ist durch Beschreibungen/Discovery erkennbar; die Komponentenbindung ermöglichte hier sämtliche benötigten Textquellen dennoch. Ein Fehler/Blocker beim Abruf trat nicht auf. Die enge Skillfassung ist für Lesen brauchbar, liefert aber keine detaillierte Kontakt- oder Speicherpolicy; dazu durfte keine erfunden werden.

**Ehrliches Gesamtergebnis:** Entdeckung, Abruf **und Anwendung** sind mit den persistierten Quellenbindungen nachvollziehbar erfolgreich. Ein positives Produkturteil wäre falsch: Kandidat Input ist bedingt, Switch ist zweckpassend aber ohne Persistenznachweis, Button deckt Formularübermittlung ausdrücklich nicht ab, alle Contracts bleiben draft. Eine allgemeine Konformität oder vollständige Implementierbarkeit wurde weder geprüft noch zugesichert.
