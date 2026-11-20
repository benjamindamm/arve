# shadcn-Handbuch: Bestand, Lücken und Ausbau

## Ziel und Arbeitsstand

Arve soll Designentscheidungen nachvollziehbar machen: Teams und Agenten finden dieselben veröffentlichten Regeln, die passenden Komponenten und deren technischen Contract. Der Schwerpunkt dieses Ausbaus liegt auf UX und Design. Schnittstellen, Zustandsautomaten und Implementierungsdetails bleiben in Contracts.

Bestandsaufnahme vom 18. November 2026: Der veröffentlichte Handbuchbaum hat 32 Einträge: 25 Dokumentationsseiten, vier Komponentenseiten und drei programmierte Layoutbeispiele. Die Systemübersicht zählt dabei nicht als Handbuchseite. Viele Texte sind bisher nur kurze Einführungen. Die strukturierten Vorlagenfelder waren im geprüften Bestand nicht ausgefüllt. Ein vorhandener Seitentitel ist deshalb kein Nachweis für inhaltliche Abdeckung.

Vier Referenzentwürfe füllen erstmals die Vorlagen für Grundlage, Komponente, Pattern und Layout. Sie ersetzen noch keine veröffentlichte Fassung. Die vier Entwürfe enthalten inzwischen visuelle Erläuterungen und einen lokalen Token-/Contract-Abgleich. Produktprüfung und Freigabe bleiben offen. Ergebnisse und Grenzen stehen im [lokalen Abgleich](local-review.md).

## Inhaltsmatrix

P0 = Referenzqualität und grundlegende Entscheidungen, P1 = alltagstaugliches Handbuch, P2 = bedarfsgesteuerte Erweiterung. Diese Priorität ist keine Aussage über Implementierungsreife.

| Bereich / Zielseite | Vorhanden | Fehlende Entscheidung oder Inhalt | Grundlage / Quellenstatus | Priorität und nächster Schritt |
| --- | --- | --- | --- | --- |
| System verstehen | Systemübersicht, Grundlagen-Einstieg | Zweck, Zielgruppen, unterstützte Kontexte, Gestaltungsprinzipien, verbindliche Regeln gegenüber Spielraum | Eigene Systementscheidungen, aus shadcn nicht ableitbar | P0: kurzen Systemauftrag festhalten |
| Farbe | Farben und Tokens; Themes und Zustände | Lokale Palette, freigegebene Kontrastpaare, Statusfarben, Designvariablen, Zustandsabbildungen | shadcn Theming gelesen; Anwendungsempfehlungen eigene Vorschläge | P0: Entwurf, Token-Abgleich und visuelle Paare vorhanden; Vorschauabweichungen und Statusrollen klären |
| Typografie | Typografie und Form | Rollen, Hierarchie, Zeilenlänge, Absatzabstände, Zahlen, lange Überschriften, Zoom | Lokale Werte prüfen; Quellenrecherche noch nötig | P1: Typografie von Form trennen |
| Abstände und Grössen | Kurze Grundlagenseite | Skala, Gruppierung, Innen-/Aussenabstand, Dichte, Bedienflächen | Lokalen Token-Export und Nutzung vergleichen | P1: Skala mit begründeten Anwendungen |
| Raster und responsive Gestaltung | Grid und Abstände; drei Layoutbeispiele | Container, Umbruch nach Inhalt, Priorisierung, Breiten/Höhen, Überlauf | Bestehende Beispiele sind Beobachtung, keine allgemeine Regel | P1: Rastergrundlage von Seitentypen trennen |
| Form, Ebenen und Bewegung | Sammelseite Icons, Bewegung und Elevation | Radien, Grenzen, Ebenen, Overlays, Dauer und reduzierte Bewegung | Quellen und konkrete Tokens noch prüfen | P1: in eigenständige Grundlagen gliedern |
| Icons und Bildsprache | Teil der Sammelseite | Bedeutung, Beschriftung, Grössen, Illustrationen, Alternativtexte | Designentscheidungen und Quellen noch offen | P1: getrennte Seite mit Auswahlregeln |
| Input | Vorschau, Contract, kurzer Text | Vollständige Zustandsansicht, Anatomie, Token-Zuordnung und Abgleich mit Spartan | shadcn Input und WAI gelesen; lokale Fähigkeiten getrennt prüfen | P0: Referenzentwurf vorhanden |
| Button, Checkbox, Switch | Jeweils Seite, Vorschau und Contract | Einsatzgrenzen, Alternativen, Anatomie, Sprache, Zustandsmatrix, Produktprüfung | Lokale Contracts als technische Quelle; UX je Komponente prüfen | P1: nach Input-Standard überarbeiten |
| Weitere Komponenten | Auswahlleitfaden, keine vollständigen lokalen Nachweise | Zuerst Link, Textarea, Field, Radio, Select/Combobox; danach Navigation, Dialog, Listen und Feedback | Verfügbarkeit upstream, lokale Umsetzung und native Unterstützung getrennt erfassen | P1/P2: nach konkretem Patternbedarf, keine Katalogkopie |
| Formularvalidierung | Zwei überlappende Seiten | Verbindlicher Prüfzeitpunkt, Fokusführung, Wiederaufnahme, unklare Übermittlung | WAI Form Validation / Notifications gelesen; Hausregeln als Vorschläge | P0: Referenzentwurf vorhanden, Überlappung später konsolidieren |
| Suchen und Filtern | Kurzseite | Suchauslösung, aktive Filter, kein Treffer, Zurücksetzen, Ergebnismenge, Rückkehrkontext | Aufgabenbezogen recherchieren und entscheiden | P1: vollständigen Suchweg dokumentieren |
| Auswahl und Suche | Kurzer Auswahlleitfaden | Feste Werte vs. Freitext, Einzel-/Mehrfachwahl, lange Listen, keine Treffer | Von Informationssuche abgrenzen; Komponenten prüfen | P1: Entscheidungshilfe mit Grenzen |
| Systemzustände | Laden/leer/Fehler und Systemzustände | Teilausfall, Offline, Berechtigung, veraltete Daten, Wiederholung, Erfolg | Eigene Produktregeln plus zugängliche Rückmeldungen | P1: eine führende Seite bestimmen |
| Destruktive Aktionen | Kurzer Leitfaden | Reversibilität, Bestätigung, Folgen, Abbruch, Fokus und Wiederherstellung | Risiko nach Aufgabe; keine pauschale Dialogpflicht | P1: Entscheidungsbaum und kompletter Ablauf |
| Tabellen und Listen | Leitfaden und Rechnungsbeispiel | Vergleich vs. Exploration, Spaltenpriorität, Auswahl, Massenaktion, Überlauf | Beispiel nicht zur allgemeinen Spezifikation erklären | P1: anwendungsneutrale Regeln herausarbeiten |
| Detailseite | Programmiertes Layoutbeispiel | Regionengewichtung, Aktionen, Umbruch, haftender Bereich, Grenzfälle | Eigener Arve-Vorschlag, keine shadcn-Vorgabe | P0: neuer Referenzentwurf vorhanden |
| Weitere Seitentypen | Vierergrid und breite Card als Beispiele | Übersicht, Liste/Suche, Formular, Einstellungen, mehrstufiger Prozess | Zweck und Informationshierarchie vor Layout festlegen | P1: wiederverwendbare Seitenregeln statt neue Demo-Geschichten |
| Content Design | Einstieg | Tonalität, Labels, Fehler-/Erfolgstexte, Zahlen/Datum, Übersetzung, lange Inhalte | Redaktionelle Hausregeln; Quellenrecherche noch offen | P1: Textregeln mit Begründung |
| Inklusive Gestaltung | Einstieg und einzelne Hinweise | Tastatur, Screenreader, Touch, Zoom/Reflow, Bewegung, Kontrast, RTL; Prüfabläufe | WAI vertiefen; konkrete Nachweise je Seite/Plattform fehlen | P1: als Querschnitt plus zentrale Prüfhilfe |
| Plattformen | Struktur für Plattformstände | Gemeinsame Prinzipien und begründete Web/iOS/Android-Abweichungen | Keine native Freigabe aus einer Web-Vorschau ableiten | P1: Plattformverantwortung und tatsächliche Verfügbarkeit erfassen |
| Mitwirken und Pflege | Mitwirken, Releases, Referenzpflege | Verantwortliche, Review, Quellenstand, Entscheidungen, Ausnahmen, Ablösung, Feedback | Organisationsentscheidung | P1: schlanken redaktionellen Ablauf festlegen |
| Contracts und Agenten | Exporte, technische Anbindung, veröffentlichtes Handbuch über MCP | Vollständigkeit/Revisionen abgleichen; Designregeln mit Contracts auf Widerspruch prüfen | Technische Quelle ui-contracts; redaktionelle Quelle Payload | P1: nach Review veröffentlichten Inhalt und MCP identisch prüfen |

## Die vier Referenzseiten

| Seite | CMS-Datensatz | Vorlage | Besondere Aufgabe | Stand |
| --- | --- | --- | --- | --- |
| Farben und Tokens | `shadcn-farben` | Grundlage | Rollen wählen, Bedeutung erhalten, Themes prüfen | Bestehende Seite erhält Entwurf |
| Input | `shadcn-input` | Komponente | Passendes Feld wählen und alle relevanten Zustände gestalten | Bestehende Seite erhält Entwurf; Contract/Demo bleiben erhalten |
| Formulare und Validierung | `shadcn-formulare-validierung` | Pattern | Vollständiger Weg einschliesslich Fehler, Abbruch und Erfolg | Bestehende Seite erhält Entwurf |
| Detailseite | `shadcn-detailseite` | Layout | Informationen und Aktionen nach Relevanz anordnen | Neuer Entwurf unter Grid und Abstände |

Jede Seite enthält Zweck, Entscheidungsregeln, Grenzen, Prüffragen, Do/Don't und verwandte Seiten. Belegte Upstream-Grundlagen sind von eigenen Vorschlägen getrennt. Offene lokale Prüfungen werden ausdrücklich genannt. Die Texte und vier schematische Abbildungen sind ausgearbeitet. Die PNG-Dateien sind visuell geprüft; die CMS-Darstellung und die Plattformfreigaben bleiben offen.

## Reihenfolge des Ausbaus

1. **Referenzqualität prüfen:** Vier Entwürfe im CMS prüfen; notwendige eigene Entscheidungen treffen. Pro Seite eine gezielte visuelle Erklärung ergänzen: Farbpaare, Feldanatomie/Zustände, Validierungsablauf, Layoutregionen/Umbruch. Keine zusätzlichen fiktiven Produktszenarien.
2. **Grundlagen vervollständigen:** Token-Quelle zuordnen, Typografie, Abstände, Raster, Form, Icons und Bewegung konsistent erklären. Entscheidungen mit Herkunft und Geltungsbereich erfassen.
3. **Komponenten und Patterns verbinden:** Button, Checkbox und Switch überarbeiten; Formular, Auswahl, Suche, Feedback und destruktive Aktionen zu vollständigen Abläufen ausbauen. Neue Komponenten nur ergänzen, wenn die dokumentierten Aufgaben sie benötigen.
4. **Seitenfamilien und Plattformen:** Detail, Übersicht, Liste, Formular und Einstellungen definieren. Gemeinsame Informationsstruktur von plattformspezifischer Navigation und Bedienung trennen.
5. **Pflege und Veröffentlichung:** Verantwortung, Quellenreview, Änderungshistorie und Ablösung festlegen. Veröffentlichte Seiten mit MCP-Ausgaben und referenzierten Contracts abgleichen.

## Konsolidierung ohne Informationsverlust

- Formulare/Validierung wird die führende Patternseite; Felder/Fehlermeldungen später integrieren oder als gezielten Unteraspekt verlinken.
- Laden/leer/Fehler und Systemzustände zusammenführen, nachdem bestehende Verweise geprüft sind.
- Abstände als Grundlage; Raster und Seitenaufbau als Layoutthema. Überschneidungen durch Links auflösen.
- Informationssuche von Auswahl aus einer Werteliste trennen.
- Icons, Bewegung und Elevation sowie Typografie/Form auseinanderziehen, wenn ihre eigenständigen Inhalte ausgearbeitet sind.
- Bestehende Slugs, Verweise und MCP-Konsumenten berücksichtigen; keine Seiten in diesem Durchstich löschen oder umbenennen.

## Anforderungen an die spätere Pflege

Die vorhandenen Vorlagen reichen für diese vier Textentwürfe. Erst anhand ihres Reviews weitere strukturierte CMS-Felder bestimmen: Quellen mit Prüfdatum, verantwortliches Team, Geltungsbereich, Regelstatus, verwandte Inhalte und nachvollziehbare Entscheidungen. Keinen universellen Freigabestatus aus einer einzigen Prüfung ableiten.

Designregeln werden in Payload gepflegt, technische Definitionen bleiben in versionierten Contracts. Eine Änderung des Handbuchs darf nicht stillschweigend einen neuen technischen Contract behaupten. Nicht erfüllte Regeln werden als offene Abweichung behandelt. MCP liefert weiterhin nur veröffentlichte Inhalte; Entwürfe sind keine Agentenvorgaben.

## Abnahme für ein alltagstaugliches Handbuch

Ein Team kann anhand des Handbuchs eine Suche, Detailansicht und Eingabe mit Fehlerkorrektur entwerfen und seine Komponentenwahl begründen. Die Anleitung deckt Erfolg, Laden, fehlende Inhalte, Fehler, Abbruch und Wiederaufnahme passend zur Aufgabe ab. Entscheidungen sind auf Quellen oder ausdrücklich eigene Regeln zurückführbar. Für jedes Ziel ist der Plattform- und Prüfstand erkennbar. Ein Agent erhält nach Veröffentlichung dieselben Regeln mit ihren Contractverweisen.

Das ist mit den vier Entwürfen noch nicht insgesamt erreicht. Sie bilden den Qualitätsmassstab für die nächsten Arbeitspakete.

## Quellen

- [shadcn Theming](https://ui.shadcn.com/docs/theming): semantische Rollen und Farbpaare.
- [shadcn Input](https://ui.shadcn.com/docs/components/base/input): Feldzusammenstellung und dokumentierte Varianten; kein Nachweis für lokale Spartan-Implementierung.
- [WAI: Validating Input](https://www.w3.org/WAI/tutorials/forms/validation/): Eingabeanforderungen, Formatverträglichkeit, Validierung.
- [WAI: User Notifications](https://www.w3.org/WAI/tutorials/forms/notifications/): verständliche, zuordenbare Rückmeldungen.
- [Allianz Aquila](https://allianz.github.io/ng-aquila/welcome?theme=aquila&gridType=default): zuvor untersuchte Referenz für Dokumentationstiefe; keine Übernahme Allianz-spezifischer Regeln.

## Entwürfe reproduzierbar anlegen

Aus dem Projektverzeichnis: `node --env-file=.env --import tsx scripts/seed-shadcn-reference-drafts.ts`.

Die Inhalte liegen in `scripts/content/shadcn-reference-pages.ts`. Das Script erwartet das vorhandene shadcn-System und seine übergeordneten Seiten. Es speichert Entwürfe, überspringt vorhandene Entwürfe und prüft, dass die veröffentlichten Datensätze unverändert bleiben. Bereits im CMS bearbeitete Entwürfe werden bei Wiederholung nicht überschrieben. Spätere redaktionelle Arbeit erfolgt im CMS; dieses Script ist ein einmaliger Ausgangsstand, keine laufende Synchronisation.

## Fortschritt: visueller und lokaler Abgleich

Vier Medien mit Alternativtexten sind in den Entwürfen verknüpft. Der Abgleich unterscheidet vorhandene Exportwerte, beobachtete Portal-Styles und eigene Gestaltungsvorschläge. Konkrete Abweichungen und die nächsten Schritte stehen in [local-review.md](local-review.md). Die öffentliche Medienauslieferung ist vor Veröffentlichung noch zu klären.

## Veröffentlichter Referenzstand

Die vier Referenzseiten sind inzwischen veröffentlicht und inklusive ihrer Abbildungen im Portal abrufbar. Die öffentliche Medienberechtigung, schmale Darstellung und Übereinstimmung der MCP-Inhalte mit dem CMS wurden geprüft. Die bisherigen Entwurfsangaben oben beschreiben den Entstehungsstand; aktueller Auslieferungsstand: veröffentlicht. Offene fachliche Entscheidungen bleiben ausdrücklich offen. Details: [Veröffentlichung und Portalprüfung](local-review.md#veröffentlichung-und-portalprüfung).
