# Inhaltsstandard: Grundlagen und Komponenten

Stand: 18. November 2026. **Vorschlag für einen wiederverwendbaren Inhaltsstandard**, keine neue Designregel und keine Konformitätsbescheinigung. Der Sollteil wurde vor dem Lesen der aktuellen Release-Texte formuliert. Er definiert beantwortbare Fragen, keine Seitenreihenfolge, Anzahl Beispiele oder Bildschirmgestaltung. Zusammenlegen und Verlinken sind erlaubt, sofern Antworten auffindbar bleiben.

## Vorlage anwenden

Der [gemeinsame Seitenrahmen BAS-01 bis BAS-10](README.md#gemeinsamer-seitenrahmen) gilt ergänzend. Die folgenden Fragen konkretisieren ihn fachlich; dieselbe Antwort wird nur einmal gepflegt und bei Überschneidung verlinkt.

Für jedes Thema festhalten: Name und Geltungsbereich; fachlich verantwortliche Stelle; gültige Quelle und Version; Antwort auf die zutreffenden Punkte; Beleg; offene Entscheidung. „Pflicht“ gilt für jedes aufgenommene Thema. Bedingte Punkte werden anhand ihres Auslösers geprüft; Nichtanwendung erhält eine Begründung. Ein fehlendes Produktmerkmal ist kein Dokumentationsmangel, eine ungeklärte Anwendbarkeit bleibt offen. Werte, Skalen und Bedienregeln werden aus gültigen Systementscheidungen übernommen, niemals zur Vervollständigung erfunden.

## Grundlagen: gemeinsamer Pflichtinhalt

| ID | Auszufüllender Inhalt | Prüffrage / Abnahmebeleg |
|---|---|---|
| FND-01 | Zweck, Begriffe, Geltungsbereich und Abgrenzung | Welche Entscheidung ermöglicht dieses Thema? Kurzdefinition plus Abgrenzung zu angrenzenden Themen vorhanden? |
| FND-02 | Rollen und Auswahlregeln | Kann eine Person zwischen den angebotenen Rollen wählen, ohne Werte zu erraten? Benannte Rollen, Auswahlkriterium und mindestens ein konkret benannter Grenzfall sind auffindbar. |
| FND-03 | Verbindliche Referenz | Wo liegen aktuelle Werte, Assets oder Spezifikationen; welchen Status haben sie? Auflösbare Referenz mit Version/Stand und Zuständigkeit; abweichende Empfehlung ausdrücklich markiert. |
| FND-04 | Anwendung und Kombination | Welche Kombinationen sind vorgesehen, eingeschränkt oder ausgeschlossen und warum? Nachvollziehbare Regel mit gezieltem Beleg für die entscheidende Unterscheidung; keine illustrative Beispielsammlung erforderlich. |
| FND-05 | Zugänglichkeit und Anpassung | Welche Nutzungshürden sind relevant, was muss die Anwendung erhalten und wo wird es geprüft? Konkreter Prüfauftrag plus Verweis auf zuständige Barrierefreiheitsregeln; Prüfergebnis und offene Prüfung getrennt. |
| FND-06 | Grenzen und Änderungen | Was ist nicht definiert, welche Ausnahmen bestehen, wer entscheidet? Ausnahmen/offene Punkte und zuständige Stelle; bei ersetzten Regeln Nachfolger und Migrationshinweis. |

### Grundlagen: Unterthemen und bedingte Ergänzungen

Das Inventar legt Themen nahe, schreibt keine vollständige Design-System-Ausstattung vor. Für verwendete Themen gelten FND-01 bis FND-06. Ein eigenständiges Kapitel ist nicht erforderlich.

| Themen-ID | Unterthema / Auslöser | Inhalt zusätzlich zum gemeinsamen Kern | Prüfbarer Beleg |
|---|---|---|---|
| FND-COL | Farbe, sobald Farbe Gestaltung oder Bedeutung trägt | Semantische Rollen und Vorder-/Hintergrundpaare; Status/Interaktion; zusätzliche Bedeutungsträger; bei Transparenz reale Mischfläche; bei mehreren Erscheinungsbildern Zuordnung | Zulässige Paarung mit Kontext und Prüfquelle; rein dekorative und bedeutungstragende Verwendung unterscheidbar |
| FND-TYP | Typografie, sobald Text dargestellt wird | Textrollen, Hierarchie gegenüber semantischer Gliederung, Schriftressourcen/Fallbacks, Lesbarkeit; Anpassung bei Vergrösserung und längeren Übersetzungen | Eine Textrolle lässt sich zur gültigen Definition verfolgen; Prüfbedingungen für Textanpassung genannt |
| FND-SPC | Abstände, sobald räumliche Gruppierung gestaltet wird | Rollen für Innen-/Aussenabstand und Zusammengehörigkeit; Dichte; Verweis auf Layout für Container, Umbruch und Raster | Entscheidung zwischen Abstandsanwendungen erklärt; kein ungeklärter Wechsel zwischen Tokenwert und Layoutregel |
| FND-SHP | Form, sofern Konturen, Radien oder Umrandungen systematisch sind | Bedeutung der Formen, Kombination mit Zustand und Oberfläche, Ausnahmen | Rollen und erlaubte Anwendung auffindbar; fehlende Skala als offene Entscheidung benannt |
| FND-LYR | Ebenen, sofern Überlagerung, Schatten oder gestapelte Flächen vorkommen | Flächenhierarchie, Tiefensignal gegenüber tatsächlicher Stapelreihenfolge; Konfliktauflösung; Verweis auf Overlay-Verhalten | Zwei konkurrierende Ebenen sind regelgeleitet auflösbar; Schatten allein definiert keine Fokusreihenfolge |
| FND-ICO | Icons/Bildzeichen, sofern verwendet | Quelle/Lizenz, Bedeutung, Grössen-/Strichkonsistenz, dekorativ gegenüber funktional, Beschriftung; bei Richtungssymbolen Spiegelung | Herkunft und zugängliche Benennung einer funktionalen Verwendung nachvollziehbar |
| FND-MOT | Bewegung, sofern animiert oder zeitlich überblendet wird | Zweck, Auslöser, Dauer-/Verlaufreferenz, Unterbrechung, reduzierte Bewegung; wesentliche Information ohne Animation | Zuständige Bewegungsregel und Alternative pro relevanter Bewegungsart auffindbar |
| FND-THM | Themes, sofern mehrere Modi/Marken oder persönliche Einstellungen unterstützt werden | Unterstützte Dimensionen; Auswahl, Vorrang und Fortbestand; semantische Zuordnung; ausgeschlossene Kombinationen | Ein Wechsel lässt sich bis zur Wertquelle verfolgen; Umfang der überprüften Modi ausdrücklich benannt |
| FND-DAT | Datenvisualisierung, sofern Diagramme/visuelle Kodierungen zum System gehören | Datentyp und Aussage, Kodierung/Skala, Kategorienreihenfolge, Legende/Einheiten, fehlende Daten/Unsicherheit, zugängliche Alternative; bei Interaktion Auswahl/Details | Datenverständnis hängt nicht nur an Farbe; Darstellungswahl und alternative Informationsform nachvollziehbar |

## Komponenten: gemeinsamer Pflichtinhalt

Ein Komponentenartikel beantwortet Auswahl und korrekte Verwendung eines Bausteins. Ein API-Verzeichnis oder eine Galerie allein erfüllt diese Aufgabe nicht.

| ID | Auszufüllender Inhalt | Prüffrage / Abnahmebeleg |
|---|---|---|
| CMP-01 | Aufgabe, geeignete/ungeeignete Verwendung, nächste Alternativen | Lässt sich die Komponente gegenüber einem benachbarten Baustein begründet wählen? Benannte Entscheidung mit Grenze. |
| CMP-02 | Anatomie, Pflicht-/optionale Bestandteile, Varianten | Ist erkennbar, welche Teile Bedeutung tragen und was kombiniert werden darf? Beschriftete Beschreibung oder gezielte Darstellung; jede freigegebene Variante hat einen Zweck. |
| CMP-03 | Zustände und Übergänge | Was löst welchen Zustand aus, was sieht/hört die Person, wie endet er? Zustandsliste/-tabelle mit Ein-/Austritt; nur tatsächlich relevante Zustände. |
| CMP-04 | Bedienung und zugängliche Semantik | Welche Eingaben werden unterstützt, welche Rolle, Benennung und Rückmeldung sind erforderlich? Dokumentierte Bedienfolge und Prüfbeleg; bei nicht interaktiven Elementen begründete Einschränkung. |
| CMP-05 | Inhalt und Grenzfälle | Welche Inhalte sind erforderlich, optional, unzulässig; was passiert bei langen, fehlenden oder lokalisierten Inhalten? Komponentenspezifische Inhaltsvorgaben und Grenzfallentscheidung mit Verweis auf Content-Grundsätze. |
| CMP-06 | Anordnung und Anpassung | Wie verhält sich der Baustein bei wenig Platz, Textvergrösserung, Dichteänderung und in seiner Umgebung? Bedingungen und Verhalten, gegebenenfalls Verweis auf Layout/Pattern. |
| CMP-07 | Integration und Abhängigkeiten | Wo liegen gültige Implementierung/Designressource, Schnittstelle, Werte und Voraussetzungen? Versionierte Referenzen; erforderliche Daten, Ereignisse und Zusammenspiel fachlich erläutert. Technische Syntax darf separat liegen. |
| CMP-08 | Reife, Grenzen und Nachweise | Was ist freigegeben, eingeschränkt, ungeprüft oder ersetzt? Zuständigkeit, Stand und konkrete Prüfobjekte/-ergebnisse; bekannte Probleme und Nachfolger. |

### Komponenten: bedingte Punkte

| ID | Auslöser | Zusätzlich zu beantworten / Abnahmebeleg |
|---|---|---|
| CMP-09 | Bearbeitung oder Validierung von Werten | Lokale Fähigkeiten für Datenformat, Pflicht/optional, Fehlerzustand, Meldungszuordnung und Werterhalt benennen. Das führende Formularpattern entscheidet Validierungszeitpunkt und vollständigen Korrekturweg; konkret dorthin verlinken. Beleg: Ein Fehler lässt sich am Baustein anzeigen und korrigieren, mit klar benannten Grenzen seiner Fähigkeit. |
| CMP-10 | Auswahl, mehrere Optionen oder Sammlungen | Einfach-/Mehrfachauswahl, Ausgangs-/Leerzustand, Gruppen, nicht verfügbare Optionen und grossen Umfang erklären. Auswahlzustand von Fokus unterscheiden. |
| CMP-11 | Navigation oder wechselnder Kontext | Ziel und aktueller Ort, Zurückweg, URL/Verlauf soweit relevant, erwarteter Fokus nach Wechsel. Auswahl allein darf nicht ungeklärt Navigation auslösen. |
| CMP-12 | Overlay, modaler Bereich oder Offenlegen | Öffnen/Schliessen, Modalität, Fokus hinein/zurück, Hintergrundbedienung und Stapelkonflikte erklären; Ablauf für Abbruch dokumentiert. |
| CMP-13 | Asynchrone, zeitabhängige oder folgenreiche Aktion | Lokale Fähigkeiten für Lade-/Erfolg-/Fehlerdarstellung, Aktivierungssperre und angebotene Aktionen benennen. Speicherfolgen, Wiederholung, Wiederherstellung und Schutz bei irreversibler Wirkung werden führend im Aufgabenpattern entschieden und konkret verlinkt. Beleg: Unterstützte Bausteinzustände sind von den Aufgabenregeln unterscheidbar; keine Speicherfähigkeit aus einer lokalen Anzeige ableiten. |
| CMP-14 | Dynamische Daten oder Meldungen | Leer-, Lade-, Fehler- und aktualisierten Zustand, Meldungspriorität/-dauer, Ankündigung sowie alternative Information erklären. Voraussetzungen für Sortierung/Filter/Paginierung nur bei Unterstützung. |

### Komponenten: Inventarhilfe

Die Gruppen sind ein Suchraster, kein verpflichtender Katalog. Eine Komponente kann mehrere Gruppen berühren; dadurch gelten mehrere Auslöser. Eine Gruppe kann begründet nicht relevant sein.

| Gruppe | Mögliche Bausteine | Typische zusätzliche Punkte |
|---|---|---|
| Eingabe | Textfeld, Upload, Dateneingabe | CMP-09; bei Upload auch CMP-13 |
| Aktion | Button, Aktionsmenü | CMP-13; beim Menü CMP-10/12 |
| Auswahl | Checkbox, Radio, Select, Schalter | CMP-10; CMP-09 bei Formulareinbindung |
| Navigation | Link, Tabs, Breadcrumbs, Pagination | CMP-11; Auswahlmodell bei Tabs |
| Feedback | Status, Hinweis, Fortschritt, Fehlermeldung | CMP-13/14 je Auslöser |
| Overlay/Offenlegung | Dialog, Popover, Accordion, Tooltip | CMP-12; Modalität nicht pauschal unterstellen |
| Daten/Struktur | Tabelle, Liste, Karte, Diagramm | CMP-14 bei dynamischen Daten; FND-DAT bei Visualisierung |

## Zuständigkeit statt Doppelpflege

**Grundlagen** erklären Bedeutung und Auswahl gestalterischer Mittel. **Token-/Assetreferenzen** besitzen Namen, Werte und Zuordnungen. **Layout** besitzt seitenübergreifende Anordnung und Anpassung; Komponenten dokumentieren nur ihre örtlichen Bedingungen. **Komponentenverhalten** besitzt Zustände, Eingaben und Semantik; **Patterns** den Ablauf über mehrere Bausteine. **Content Design** besitzt allgemeine Sprach-/Benennungsregeln; Komponenten ergänzen Felder und Restriktionen ihres Inhalts. **Barrierefreiheit** besitzt übergreifende Anforderungen und Prüfmethoden; der Artikel nennt seine konkreten Prüfobjekte und Ergebnisse. Ein Verweis ersetzt die Kopie nur, wenn sein Ziel die betreffende Frage tatsächlich beantwortet.

## Abgleich: aktueller Arve/shadcn-Stand

**Umfang:** Inhaltsprüfung der beiden unten genannten Release-Dateien, ergänzende Quelltextsichtung der vier Demo-Einbindungen. Keine neue Live-, Tastatur-, Screenreader-, Token- oder CMS-Prüfung. Die Bewertung beschreibt redaktionelle Abdeckung; sie bestätigt keine Produktfähigkeit. Bereits im Text berichtete Tests wurden nicht wiederholt.

**Status:** erfüllt = betreffende Inhaltsfrage im genannten Umfang beantwortet; teilweise = Antwort vorhanden, aber unvollständig; fehlt = verlangter Inhalt im geprüften Text nicht vorhanden; nicht belegt = Aussage oder Anwendbarkeit mit diesen Quellen nicht überprüfbar; nicht relevant = Auslöser im ausdrücklich begrenzten Bestand nicht vorhanden.

Belegschlüssel (Abschnittsnamen dienen als Suchanker):

- **F:** [foundations-release.ts](../../../scripts/content/foundations-release.ts), insbesondere `page('farben')`, `page('typografie')`, `page('form-und-ebenen')` und die übrigen gleichnamigen Unterthemen.
- **C:** [components-release.ts](../../../scripts/content/components-release.ts), `component('button'|'input'|'checkbox'|'switch')`, jeweils „Was das vorhandene Beispiel zeigt“ beziehungsweise „Lokale Vorschau und noch offene Zusammenstellung“.
- **D:** [button.ts](../../../src/demos/shadcn/button.ts), `ButtonDemoComponent`, und [controls.ts](../../../src/demos/shadcn/controls.ts), `ControlDemo`. Die Dateien belegen die eingebundenen Demo-Elemente, nicht das gesamte Verhalten importierter Bibliotheken.

| Punkte | Status und begrenzter Befund | Beleg / nächste Ergänzung |
|---|---|---|
| FND-01 | **erfüllt** für die sieben fachlichen Grundlagenseiten: Zweck und Nachbarthemen klar | F, jeweilige Summary, Übersicht „Wofür diese Referenz gilt“; keine zusätzliche Einleitung nötig |
| FND-02/03 | **teilweise**: Auswahlprinzipien und Quellen vorhanden, systemweite Rollen/Skalen oft ausdrücklich offen; fachliche Zuständigkeit fehlt | F, „Lokaler Stand“, „Was die vorhandenen Zahlen bedeuten“, Revision am Dateianfang; gültige Rollenreferenz und verantwortliche Stelle ergänzen |
| FND-04 | **teilweise**: Kombinationen und Grenzfälle erklärt; offene Flächenrollen und Ebenenfolge verhindern verbindliche Auswahl in allen Fällen | F, Farbe und Form/Ebenen; fehlende Systementscheidungen klären, statt Studienwerte zu übernehmen |
| FND-05 | **teilweise**: konkrete Prüfaufträge und begrenzte Paarberechnungen; vollständige Anwendungsnachweise **nicht belegt** | F, „Kontrast im tatsächlichen Kontext prüfen“, „Anpassungen zulassen“; Ergebnisse mit Prüfobjekt nachführen |
| FND-06 | **teilweise**: Grenzen und alter Themenwegweiser vorhanden; Entscheidungen ohne benannte Verantwortliche | F, offene Abschnitte und `icons-bewegung`; zuständige Stelle ergänzen |
| FND-COL | **teilweise**: Rollen/Paare und Transparenz erklärt, Status-/Flächenzuordnungen offen | F, `farben`; Zuordnung und Prüfung dieser Paare ergänzen |
| FND-TYP/SPC/SHP | **teilweise**: Anwendung und Grenzfälle vorhanden, allgemeine Skalen bewusst nicht behauptet | F, Typografie, Abstände, Form; fehlende verbindliche Referenzen entscheiden oder begrenzten Geltungsbereich festhalten |
| FND-LYR | **teilweise**: visuelle Hierarchie erklärt, Ebenenfolge fehlt ausdrücklich | F, „Prüfen und offen halten“; Konfliktregel und zuständiges Overlay-Verhalten referenzieren |
| FND-ICO/MOT | **teilweise**: Benennung, Richtung, Unterbrechung und reduzierte Bewegung erklärt; Assetlizenz/-quelle bzw. Bewegungswerte noch offen | F, Icons „Lokaler Stand“, Bewegung „Keine erfundene Bewegungsskala“; diese Entscheidungen nicht durch Demonstrationen ersetzen |
| FND-THM | **teilweise**: hell/dunkel und kombinierte Zustände erklärt; Auswahl/Persistenz bewusst Produktentscheidung | F, `themes-und-zustaende`; unterstützten Produktumfang und zuständige Entscheidung nennen |
| FND-DAT | **nicht belegt** hinsichtlich Anwendbarkeit; eigenständiger Inhalt **fehlt** in F | Erwähnung von Chartfarben in `farben` beweist keine angebotene Datenvisualisierung; Inventarentscheidung erforderlich |
| CMP-01 | **erfüllt** für die vier beschriebenen Bausteine | C, Auswahlseite und jeweilige Aufgaben-/Alternativbeschreibung |
| CMP-02 | **teilweise**: Input-Anatomie, Varianten und binäre Werte beschrieben; Pflicht-/optional-Zuordnung nicht durchgängig explizit | C, Studien und Variantenhinweise; alle freigegebenen Teile/Varianten gezielt inventarisieren |
| CMP-03/04 | **teilweise**: Zustandsdimensionen und Bedienhinweise vorhanden; keine vollständige Übergangs-/Bedienbeschreibung im Artikel | C, Zustandsabsätze, Checkbox/Switch-Leertaste; exakte Contractreferenz als Antwort prüfen, bevor ergänzende Texte entstehen |
| CMP-05/06 | **erfüllt** als Inhaltsanleitung im Viererumfang: Beschriftung, lange Inhalte, Vergrösserung und schmale Ansichten behandelt; Durchführung **nicht belegt** | C, „Die Folge benennen“, „Platz nach Inhalt bemessen“, Checkbox-/Switch-Labels |
| CMP-07/08 | **teilweise**: Referenzstand, Vorschaugrenzen und fehlende Freigaben benannt; Zuständigkeit und vollständige Referenzkette nicht nachgewiesen | C, technische Abgrenzungen; tatsächliche Pins/Registrierung in diesem Abgleich nicht geprüft |
| CMP-09/10 | **teilweise**: Input-Korrektur/Werterhalt, unabhängige Auswahl und Grenzen der Sammelauswahl erklärt; Feldzusammenstellung bleibt offen | C, Input/Checkbox; D enthält keine Fehler-/Hilfetextzusammenstellung und keine Checkboxgruppe |
| CMP-11/12 | **nicht relevant** als eigene Navigation-/Overlay-Komponenten im ausdrücklich auf vier Bausteine begrenzten Paket; für deren Verwendung weiter bedingt relevant | C, Auswahlseite und Button-Kontextwechsel; keine fehlenden Komponenten allein aus dem Inventarraster ableiten |
| CMP-13 | **teilweise**: Ablaufanforderungen dokumentiert, konkrete Integration nicht geliefert | C, Button-Rückmeldung/Switch-Übernahme; D zeigt Button-Beispielmeldung und lokal eingebundene Controls, keinen Speicherablauf |
| CMP-14 | **nicht relevant** für Datensammlungen im Viererpaket; **teilweise** für asynchrone Meldungen | C, Button/Switch; Vorrang und Dauer im zuständigen Systemzustands-Pattern prüfen, hier nicht vollgeprüft |

**Empfehlung:** Erst offene Systementscheidungen und Verantwortliche ergänzen, dann Zustände/Referenzketten pro Baustein vervollständigen. Vorhandene gute Entscheidungs- und Inhaltstexte behalten. Eine fehlende freigegebene Skala darf weiterhin offen bleiben; sie braucht Status und Entscheidungspfad, keine erfundenen Werte.

## Methodische Quellen

Am 18. November 2026 über BrowserOS neo gelesen:

- [GOV.UK Design System · Colour](https://design-system.service.gov.uk/styles/colour/): trennt funktionale Farbrollen, Anwendungskontexte und Wertzugriff. Methodische Anregung für FND-02/03; weder Palette noch technische Zugriffsfunktion werden übernommen.
- [GOV.UK Design System · Button](https://design-system.service.gov.uk/components/button/): verbindet Einsatz, Beschriftung, Variantenwahl und technische Nutzung. Methodische Anregung für CMP-01/02/05/07; seine konkreten Produktkonventionen sind keine universellen Regeln.

Der Standard ist eine eigene Synthese. Die Quellen begründen die Art der Inhaltsfragen, nicht eine Zertifizierung und nicht jede einzelne Anforderung. Der versuchte Carbon-Aufruf lieferte keinen auswertbaren Text und wurde nicht als Beleg verwendet.
