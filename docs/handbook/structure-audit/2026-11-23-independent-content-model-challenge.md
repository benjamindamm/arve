# Arve: unabhängiger Challenge des Inhaltsmodells

23.11.2026 · Analysevorschlag, keine neue Handbuchnorm, keine Freigabe. Auftrag: heutige Struktur und vorhandenen Inhaltsstandard kritisch prüfen, bevor Fachskills entstehen. Keine Code-, CMS-, Snapshot-, Contract-, Commit- oder Push-Änderungen. Dieser Bericht ist die einzige eigene neue Datei.

## Ergebnis vorab

Die Grundkonzeption fehlt nicht: `content-standard/` v0.1 enthält Systemprofil, Themenfragen, Herkunft, bedingte Relevanz und getrennte Bewertungsachsen. Diese Konzeption ist aber selbst eine noch nicht extern validierte Hypothese. Sie führt weder die fünf Textvorlagen noch den Referenzimport nachweislich. Der heutige Baum ist zudem kein Beweis ihrer Richtigkeit. Die dringendste Arbeit ist deshalb ein kleiner adversarialer Pilot mit korrigierten Auslösern und eindeutiger Aussagezuständigkeit; noch keine Skills je heutigem `pageType`.

Beibehalten würde ich die zehn Verantwortungsbereiche aus v0.1 als Such- und Prüfstruktur. Korrigieren würde ich ihren Anspruch auf universelle Pflichtbelege, die Vermengung von dokumentierter Produktstruktur und Handbuchformat sowie einige zu grobe Auslöser. Mehr Seiten und Pflichtprosa lösen diese Probleme nicht.

## Quellen und Prüfumfang

Direkt gelesen: `src/docs/page-templates.ts`, `src/docs/component-standard.ts`, `src/collections/Pages.ts`, `src/collections/DesignSystems.ts`, `scripts/lib/system-template.ts`; `docs/handbook/content-standard/{README,foundations-components,patterns-layouts,content-inclusion,platforms-governance,review-template}.md`; `component-template/README.md`; historischer `content-matrix.md`; redaktionelle Revisionsberichte `page-types.md`, `page-layouts.md`, `content-layouts.md`. Gezielt im Renderer `src/docs/page-reworks/page-types.tsx` gelesen: Textzeilen werden abgeflacht und teilweise nach Position als Vorschau bzw. Detailinhalt verarbeitet.

Den Snapshot `scripts/content/handbook-snapshot.json` programmatisch vollständig nach Identitäten, Elternbeziehungen, Typen und Blocknamen inventarisiert, nicht alle 116 Artikel fachlich vollständig gelesen. Snapshot-Metadaten: aufgenommen 21.11.2026, Quellcommit `d629412b278151a273a9db94fca074092f1041b8`; Contractrevision `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`. Beobachtet: 116 veröffentlichte Seiten, darunter 69 Komponenten; 1003 Textblöcke von 1068 Blöcken; alle Vorlagengruppen leer. Typen: 69 component, 17 layout, 15 guide, 8 foundation, 4 pattern, 3 overview. Diese Zahlen belegen Struktur, keine fachliche Lücke einzelner Artikel. Die 32 Seiten in der historischen Inhaltsmatrix sind kein heutiger Bestand.

Keine neue Live-/DB-Abfrage, keine Quellenrecherche im Web, kein Funktions-, AT-, Plattform- oder Konformitätstest. Externe Quellenangaben in v0.1 sind hier historische Quellenangaben des Standards und wurden nicht erneut verifiziert. Die damaligen Abgleichtabellen bewerten ältere Releases; ihre Bewertungen werden nicht auf den aktuellen Snapshot übertragen. Ohne die Originalquellen und fachliche Zuständigkeit kann dieser Bericht auch keine Designregel als allgemeingültig bestätigen.

## Harte Gegenbeispiele und kleinste Korrekturen

| Bestehender Anspruch | Gegenbeispiel / Fehlanreiz | Zu prüfende Korrektur |
| --- | --- | --- |
| PAT-11: Suchen, Filtern und Auswählen; Beleg Anfrage → Ergebnis → Eingrenzung → Auswahl → Rückkehr | Zwei Radios benötigen weder Suche noch Ergebnisrückkehr. Eine Volltextsuche muss keine Auswahl besitzen. | Drei getrennte Auslöser und Teilfragen unter einer Familie: Informationssuche, Ergebniseingrenzung, Wertauswahl. Nur tatsächlich gekoppelte Aufgaben erhalten einen gemeinsamen Ablauf. |
| PAT-12: Daten betrachten und bearbeiten; Beleg Lesen → Ändern → Speichern | Öffentlicher read-only Datenkatalog hat keinen Speicherweg. | Betrachten/Sammlungsoperationen von Bearbeiten trennen. Schreibpfad nur bei Schreibaufgabe; Massen-/Import-/Exportpfade nur bei Angebot. |
| PAT-06 fordert realistischen Ablauf; LAY-05 erlaubt bereits gezielten Vergleich oder Grenzfall | PAT-06 kann als Aufforderung zu erfundener Produktgeschichte gelesen werden; LAY-05 bietet schon die passende weniger enge Form. | PAT-06 an die bereits offene LAY-05-Logik angleichen: Regel/Entscheidung zuerst, synthetische Grenzprobe oder annotierter Entscheidungsfall klar kennzeichnen. Reale Nutzungsvalidierung separat. |
| BAS-01 bis BAS-10 je Seite | Wegweiser „Icons, Bewegung und Ebenen“ soll zehn Metadatenantworten tragen; ein Index braucht kein eigenes Fachentscheidungsverfahren. | BAS an Aussage/Thema anwenden; reine Navigation/Archivverweise nur Identität, Ziel und Status. Verantwortung/Scope einmal zentral mit expliziter Geltung referenzieren. |
| BAS-02/PAT-01: Alternative bzw. mindestens ein anderer Patternfall | Singuläres Pflichtverfahren mit keinerlei zulässiger Alternative wird zu künstlichem Vergleich gezwungen. | Abgrenzung immer, benannte Alternative nur bei realer Verwechslungsgefahr. „Keine Alternative in diesem Scope“ ist eine überprüfbare Antwort. |
| CMP-03/04 enthalten bereits Relevanz-/Nichtinteraktivitätsklauseln; neun stabile Komponentenabschnitte bleiben trotzdem verbindlich | Aspect Ratio, Separator, Kbd brauchen keine Zustandsübergangstabelle, Tastaturfolge oder Beschriftung im Button-Sinn. Das ist kein fehlender Vorbehalt in CMP, sondern ein Konflikt mit dem durchgehend verlangten Darstellungsprofil. | Bestehende CMP-Vorbehalte operationalisieren: Relevanzentscheidung dokumentieren; neun IDs als Darstellungs-/Migrationsprofil der Referenz, nicht als universelle fachliche Pflichtabschnitte. |
| CMP-09: Bearbeitung oder Validierung; Beleg korrigierbarer Fehler am Baustein | Ein einfacher Eingabebaustein kann Werte bearbeiten, aber keine eigene Fehlermeldung anbieten. | Fähigkeit, Hostpflicht und fehlende Fähigkeit getrennt benennen. Fehlerdarstellung nur verlangen, wenn der Baustein sie beansprucht; der zusammengesetzte Feld-/Patternweg muss sie bei Bedarf abdecken. |
| CMP-12: Overlay oder Offenlegen → Fokus hinein/zurück, Hintergrundbedienung | Accordion legt Inhalt offen, ohne Fokus zu versetzen; Tooltip und nichtmodales Popover sind kein Dialog. | Offenlegung, Floating Layer und modales Unterbrechen getrennte Auslöser; Modalität explizit entscheiden. Keine Fokusverschiebung aus Familienzugehörigkeit ableiten. |
| CMP-14: dynamische Daten oder Meldungen → Meldungspriorität/-dauer, Ankündigung | Livechart-Updates müssen nicht jede Datenänderung ansagen; ein Badge ist keine temporäre Meldung. | Datenaktualisierung, Aufgabenfeedback und Unterbrechung unterscheiden; Ankündigungsstrategie und Informationsbedarf fachlich entscheiden. |
| CNT-02 fordert zwei kontrastierende Beispiele, CNT-03 verbindliches kleines Glossar | Einstufiges Iconset ohne Produktstimme und System mit vorhandener zentraler Terminologie bekommen künstliche Pflichtartefakte. | Geerbte, explizit geltende Terminologie-/Contentquelle zulassen. Anzahl von Beispielen kein universeller Qualitätsindikator. Kontrastfall nur, wenn Unterscheidung sonst unklar bleibt. |
| CNT-07 „Immer“ plus verbindliche Formate | System enthält nur Layoutprimitive, keine Datums-/Währungsdaten. | Formatauswahl/-delegation prüfen; konkrete Formatentscheidung erst beim jeweiligen Datenvorkommen. |
| INC-05 Auslöser „AT oder entsprechende Unterstützung beansprucht“ | Ein Team könnte fehlende Supportbehauptung als Grund nutzen, AT nicht zu betrachten. | Relevanz aus Zielgruppen und Aufgaben/Plattformen entscheiden, nicht aus Marketingversprechen. Prüfauftrag, gewählter Prüfumfang und Ergebnis getrennt. |
| INC-06 verlangt durchgehendes Szenario; INC-09 stets Testprotokoll | Reines, unimplementiertes Grundlageninventar kann Forschungs-/Laufzeittests noch nicht liefern. | Inhaltsabnahme mit präzisem Prüfplan zulassen; Ergebnis bleibt offen. Keine Aussage über Wirkung aus Textvollständigkeit. |
| Gemeinsame LAY-01–05 für Seitentyp und Layout | Card Header hat weder Seitenrückweg noch eigenen globalen Ort; Detail kann in Sheet statt eigener Seite stehen. | Dokumentiertes Objekt vor Vorlage klassifizieren: Ansicht/Aufgabe, Regionenlayout oder lokale Inhaltsanordnung. Gemeinsame Fragen entsprechend zuschneiden. |
| HTML/ARIA, keyboard, CEM-nahe Varianten prägen Referenz | iOS-Systemnavigation, VoiceOver, Dynamic Type oder Android-TalkBack können nicht durch dieselbe Websemantik nachgewiesen werden. | Gemeinsame UX-Fragen; plattformbezogene Antworten/Belege. HTML/ARIA nur Web. Framework und Plattform als unabhängige Dimensionen. |
| Gleiches Regelthema erscheint in FND-DAT, CMP-14, CNT-11, PAT-12, INC | Eine Chartseite kann fünf plausible „führende Orte“ haben. | Aussageweise Zuständigkeit: Kodierungsprinzip FND, Bausteinverwendung CMP, Datenbedeutung CNT, Aufgabenablauf PAT, Prüfmethode INC. Ein Objekt darf mehrere Fachmodule erfüllen, ohne Regelkopien. |

Diese Gegenbeispiele widerlegen nicht den gesamten Standard. Sie widerlegen die Annahme, dass seine heutigen Pflicht-/Belegformulierungen schon uneingeschränkt als verbindliche Agentenanweisung taugen.

## Begriffe und neutraler Themenbaum als Hypothese

Drei Achsen auseinanderhalten: **Gegenstand** der Regel (z.B. Wertauswahl), **Dokumentationsfunktion** (z.B. Themenartikel, Entscheidungsübersicht, Wegweiser, Quellen-/Statusreferenz) und **Darstellung** (z.B. Tabelle, Vergleich, Illustration, Ablauf). `overview/detail/edit/create` sind dokumentierte Aufgaben-/Ansichtsfamilien, keine Handbuch-Seitentypen. `guide` sagt etwas über die Darstellung/Intention, aber fast nichts über fachliche Zuständigkeit.

Minimal weitergeführter v0.1-Baum, keine Pflichtnavigation:

1. Systemprofil und Einstieg: Auftrag, Zielgruppen, Produkte/Marken, Scope, Prinzipien, Ressourcenwahl, Themenrelevanz.
2. Grundlagen: Farbe; Erscheinungsmodi/visuelle Zustände; Typografie; Abstand/Grösse; Form/Ebenen; Icons und bei Bedarf weitere Bildsprache; Bewegung; bei Angebot Datenkodierung.
3. Bausteine/Komponenten: aufgabenbezogene Auswahl und Objektinventar. Keine verpflichtende 69er Ausstattung anderer Systeme.
4. Aufgaben und UX-Patterns: Eingeben/Ändern, Finden/Filtern, Wertauswahl, Daten betrachten/operieren, folgenreiche Aktionen, Unterbrechung/Wiederherstellung; Einstieg/Berechtigungen nur bei Bedarf.
5. Informationsarchitektur und Anordnung: Orientierung/Navigation; Ansichts-/Aufgabenfamilien (Überblick, Detail, Bearbeiten, Erstellen als heutige Beispiele, keine vollständige Ontologie); Regionenlayouts; lokale Inhaltsanordnungen; adaptive Regeln. Aufgabe, Regionen und lokale Anordnung sind kombinierbare Beschreibungen, keine zwingende Eltern-Kind-Kette.
6. Content und Lokalisierung: Begriffe/Stimme, Informationshierarchie, Handlungstexte/Meldungen, Formate, Sprachen/Regionen/RTL, Medien- und Datenalternativen.
7. Inklusive Gestaltung: Ziele/Anwendungsbedingungen, querliegende Methoden, lokale Prüfverweise, Barrieren/Abhilfe.
8. Plattformen und Ressourcen: Web mit Desktop-/Mobilekontexten, iOS, Android und weitere nur nach Scope; Designressourcen, Implementierungen, Unterschiede, Prüfstände.
9. Governance/Pflege: Verantwortung, Vorschläge/Entscheidung, Änderungen/Ausnahmen, Review, Migration und Rückmeldung.
10. Technische/agentische Nutzung: Zugriff, Identität, veröffentlichter Stand, Originalcontracts und Grenzen; technische Definitionen bleiben ui-contracts.

Die erste notwendige Ergänzung ist ein explizites Systemprofil mit Relevanzinventar, keine neue umfangreiche Unterseitenhierarchie. Frameworks/Plattformen aus dem Komponentenast herausführen. `Main+Sidebar` als Regionskombination behalten; die 3-/4-spaltigen Card Grids als Varianten eines Sammlungslayouts zusammenführen; breite/schmale Single Card als Breiten-/Fokusvarianten, gestapelte Cards als Gruppierungsvariante prüfen. Keine Regel verlangt generell Cards. Label–Value, Form Layout und Card Header bleiben als lokale Anordnungen auffindbar, nicht als Seitentypen. Bestehende URLs zunächst erhalten; Zusammenführen betrifft fachliche Führung, nicht sofortige Löschung.

## Fragenmatrix: prüfbare Hypothese für den Pilot

Die v0.1-IDs bleiben Referenzen. Tabelle präzisiert erwartete Antwortformen, ersetzt den Standard aber noch nicht. Eine Antwort kann an konkreter anderer Stelle gelten und verlinkt werden. Es gibt keine Pflichtprosa oder Pflichtzahl von Beispielen.

**Offenstatus O:** genaue offene Frage, betroffener Scope, bekannte Herkunft/Annahme, benannte zuständige Rolle oder explizit noch fehlende Zuständigkeit, nächster Entscheidungsschritt. O ist zulässiger dokumentierter Stand, keine angenommene Regel oder bestandene Umsetzung. **NR:** begründeter fehlender Auslöser mit Reviewanlass. **NB:** Material nicht geprüft/verfügbar; nicht mit NR verwechseln.

| Thema / Referenz | Konkret zu beantwortende Fragen | Erwartete Antwort / minimale Evidenz | Offenstatus |
| --- | --- | --- | --- |
| Systemprofil SYS | Welche Aufgabe löst das System für wen? Welche Produkte/Marken und Plattformen? Welche Themen braucht es? Was leitet Zielkonflikte? | Scope-/Relevanzmatrix, benannte Entscheidungsträger und wenige nachvollziehbare Prinzipien. Auftragsentscheidung oder markierte Bedarfsannahme mit Quelle; keine shadcn-Vererbung. | O für unentschiedenen Scope; erforderliche Scopeklärung verhindert Supportbehauptung. |
| Farbe / FND-COL | Welche Bedeutungsrollen, Paare, Zustands-/Themezuordnungen? Was darf kombiniert werden? | Rollen-/Paartabelle, Quellenstand; geprüfte Paarung nur mit realer Fläche und benannter Methode. | O für nicht entschiedene Palette/Rolle; Illustration bleibt Beispiel. |
| Themes / FND-THM | Welche Dimensionen sind vorgesehen, welche Vorrang-/Wechsel-/Persistenzregel, welche Kombinationen? | Unterstützungs-/Zuordnungsmatrix mit Entscheidungsquelle; einzelne Themeprobe kein Gesamtnachweis. | O, NR bei einem einzigen Erscheinungsmodus; persönliche Anpassungen separat prüfen. |
| Typografie / FND-TYP | Welche Rollen und Ressourcen? Wie unterscheiden sich visuelle und semantische Hierarchie? Wachstum, Zahlen, Fallbacks? | Rollenreferenz, annotierte Hierarchie und gezielte lange/skalierte Textprobe oder Prüfplan. | O für offene Werte; NB für ungeprüfte Sprach-/Schriftprobe. |
| Abstand/Grösse / FND-SPC | Was zeigt Zusammengehörigkeit? Welche Dichte-/Bedienbedingungen? Wer führt Werte? | Anwendungs-/Auswahltabelle, Referenz auf gültige Skala; Container bleibt Layout. | O statt erfundener Skala; NR nur für einzelne nicht angebotene Dichtemodi. |
| Form/Ebenen / FND-SHP/LYR | Welche Oberfläche/Form bedeutet was? Welche Konflikt-/Stapelregel? | Rollen plus Konfliktentscheidung, visuelle Tiefenwirkung getrennt von Fokus und tatsächlichem Stapeln. | O für nicht entschiedene Ebenen; Verhalten an Overlayreferenz delegieren. |
| Icons/Bildsprache / FND-ICO | Welche Quelle/Lizenz, Bedeutung, dekorative/funktionale Verwendung, Benennung, Richtung? | Assetreferenz und konkrete Verwendungsunterscheidung; weitere Medien nur bei Angebot. | O/NB bei fehlender Herkunft, keine Nutzungserlaubnis ableiten. |
| Bewegung / FND-MOT | Welcher Zweck/Auslöser, Unterbrechung, reduzierte Alternative? | Bewegungsarten-/Alternativtabelle plus Wertquelle; Testplan oder enger Laufzeitbeleg separat. | NR bei tatsächlich bewegungslosen Systemen; O sonst. |
| Datenkodierung / FND-DAT | Welche Aussage/Datentypen begründen Kodierung, Skala, Reihenfolge, Unsicherheit und Alternative? | Auswahlkriterien + synthetischer Grenzfall mit deklarierter Aussage; reale Datenquelle nur bei realen Daten. | O bei ungeklärtem Einsatz; Charts im Katalog sind Relevanzindiz, keine vollständige Regel. |
| Komponenten / CMP | Welche Aufgabe/Alternative, Teile, Variantenzwecke, relevante Zustände, Bedienung, Inhalte/Anpassung, Abhängigkeiten, Grenzen? | Gemeinsame Fragenmatrix, ergänzt um aktivierte Familienfragen; Quell-/Designentscheidung und Version. Bedienbeleg nur für tatsächlich beanspruchte Bedienung. | O/NR pro Kriterium; kein künstliches keyboard-Kapitel für Strukturprimitive. |
| Eingeben/Ändern / PAT-10 | Voraussetzungen, Gruppierung, Prüfen, Korrigieren, Absenden, Erfolg, unbekannter Ausgang, Abbruch/Wiederaufnahme? | Zustands-/Entscheidungstabelle mit Rückmeldung, nächster Handlung und Datenerhalt. Mehrschritt nur bei Angebot. | O für Produktpersistenz, Konflikt oder Retrypolitik. |
| Finden/Filtern/Wertauswahl / PAT-11 | Welche Teilaufgabe? Auslösung, Eingrenzung, Menge, Auswahlmodell, Nulltreffer, Zustandserhalt soweit angeboten? | Getrennte Auswahlkriterien und nur aktive Zweige im Ablauf; Radio ohne Suchweg zulassen. | NR für nicht angebotene Teilaufgabe; O für ungeklärten Zustandserhalt. |
| Daten betrachten/operieren / PAT-12 | Welche Darstellung/Operation dient der Aufgabe? Umfang, Sortierung, Auswahl, Massenaktion, Schreib-/Teilfehler nur bei Angebot? | Aufgaben-/Operationsmatrix und passender Grenzfall; read-only Fall ohne Speicherung. | NR für Schreibpfad; O für unbekannte Konkurrenz-/Teilfehlerpolitik. |
| Folgenreiche Aktionen / PAT-13 | Welche Folgen/Reichweite, Reversibilität, Bestätigung/Undo, Abbruch, unbekanntes Resultat? | Entscheidungstabelle nach Konsequenz; Objekt/Folge/Weiterweg konkret. Kein pauschaler Dialog. | O bis zuständige Produktrolle Konsequenz und Schutz festlegt. |
| Zustände/Erholung / PAT-14/15 | Ursache, wahrnehmbarer Zustand, Datenstand, nächste sichere Handlung und Wiederaufnahmeort? | Führende Zustandstabelle; lokale Einbindung verlinkt. Offline/Permission/Timeout nur bei Auslöser. | O für unentschiedene Backend-/Persistenzfähigkeit, NB für ungetestete Wiederholung. |
| Einstieg/Berechtigungen / PAT-16 | Wer braucht wann welche Einrichtung/Berechtigung? Optionalität, Ablehnung, späterer Einstieg? | Bedingter Ablauf mit erklärtem erreichbarem Folgezustand. | NR bei begründetem fehlendem Bedarf, sonst O. |
| Navigation/Orientierung / LAY-11 | Welche Ziele/Hierarchie, aktueller Ort, Direktaufruf, Zurück und Zustandsbewahrung? | Ziel-/Beziehungsmodell und Hin-/Rückweg; Menübedienung in Komponente. | O für ungeklärte IA oder Plattformzurück, kein Webverlauf als native Regel. |
| Ansichts-/Aufgabenfamilien / LAY-12/13 | Welche Informationsentscheidung dominiert? Objekt-, Mengen-, Arbeits- oder Erfassungsbezug? Welche Pflichtinformation/Aktion? | Inhalts-/Prioritätsmodell, Auswahlgrenzen und verknüpfter Aufgabenablauf. Keine feste Zahl von vier Typen. | O für bedarfsgesteuerte weitere Familie. |
| Regionenlayouts / LAY-10/14/15 | Welche Regionen, Reihenfolge, optionale Teile, Aktionsbezug, Umbruch/Scrollen/Systemflächen? | Regionsliste oder Annotation plus zwei begründete Grenzbedingungen bzw. eng begrenzter Scope; keine universellen Breakpoints. | O für offene Grenzregel, NB für ungeprüfte Bildschirmtastatur. |
| Lokale Inhaltsanordnung / zugeschnittenes LAY | Welche Elemente gehören zusammen, was ist obligatorisch, wie wachsen/leeren sie sich, welcher Kontext? | Annotierte Gruppierung mit Inhalts-/Reihenfolgeregel. Label–Value, Feldgruppe, Card Header sind Beispiele. | NR für Seitennavigation; O für ungeklärte Inhaltsanforderung. |
| Content/Lokalisierung / CNT | Welche Begriffe/Tonregeln? Was erklärt Handlung/Zustand? Welche Daten-/Sprach-/Richtungs-/Medienfälle? | Terminologie-/Format-/Nachrichtenreferenzen, verantwortete Auswahl; variable/lang/RTL-Probe nur bei Auslöser. Eine zentrale geltende Quelle genügt. | O für sprachliche Produktentscheidung, NB für fehlenden Sprachreview. |
| Inklusion / INC | Welche Nutzungsbedingungen/Ziele? Wo liegen lokale Anforderungen? Wie prüfen/melden/beheben wir Barrieren? | Zuständigkeits-/Methodenmatrix, benannte Prüfobjekte und offener Prüfplan; Ergebnisse nur mit Umgebung/Version/Datum. | O für Ziele/Abhilfe, NB für nicht ausgeführte AT-/Nutzungsprüfung. |
| Plattform/Ressourcen / PLT | Was ist geplant, unterstützt, demonstriert, geprüft? Was bleibt UX-seitig gleich, was ändert sich? | Matrix Web Desktop/Mobile, iOS, Android plus getrennte Ressourcen-/Frameworkstände; plattformbezogene Originalbelege. | O für Supportentscheidung; keine native Freigabe aus Webvorschau. |
| Governance / GOV | Wer entscheidet/pflegt/reviewt? Wie melden, entscheiden, ändern, ausnehmen, migrieren? | Benannte Rollen/realer Weg und Entscheidungshistorie; Zuständigkeiten dürfen zentral referenziert sein. | O für organisatorische Lücke; kein erfundenes Gremium/Approval. |
| Zugriff/Contracts / AGT | Welches System/Objekt/Stand liefert Abruf? Was ist führende Quelle? Welche Grenzen gelten für Änderung/Veröffentlichung? | Identitäts-/Herkunftskette, Portal-/Exportabgleich und konkreter Arbeitsweg. Technische Contractrevision unverändert referenzieren. | NB für nicht geprüften Kanal; O für fehlende Berechtigung/Entscheidung. |

## Vier Aussagearten, die keine automatische Vererbung erlauben

1. **Allgemeine Regel/Anforderung:** mit benannter externer normativer Grundlage oder als ausdrücklich interne systemübergreifende Synthese. Der Fragenkatalog selbst ist redaktionelle Synthese, kein universelles Gesetz.
2. **Systemspezifische Entscheidung:** zuständiges System/Marke/Plattform, Verantwortlichkeit und Beschluss-/Reviewstand. shadcn-Referenz ist fremde Entscheidung bzw. Beispiel, bis ein anderes System bewusst entscheidet.
3. **Illustration:** erklärt die Aussage; Quelle, synthetische Werte und Darstellungsgrenze sichtbar. Sie beweist weder Nutzungserfolg noch Laufzeitfähigkeit.
4. **Implementierungsbeleg:** prüft ein benanntes Artefakt/Version in einer konkreten Umgebung mit Methode/Ergebnis. Enger Beleg; keine Übertragung von React auf Angular oder Web auf iOS/Android.

Eine beantwortete Frage kann als Ergebnis „nicht entschieden“ haben. Eine fachlich angenommene Regel kann unimplementiert sein. Eine geprüfte Implementierung kann einer unzureichend dokumentierten oder falschen Regel folgen. Die drei Achsen aus v0.1 müssen deshalb erhalten bleiben; Statusnamen sind noch kein entschiedenes Organisationsmodell. Auch „veröffentlicht“ ist keine dieser fachlichen Freigaben.

## Komponentenfamilien statt 69 gleichförmiger Kataloge

Gemeinsamer Kern bleibt CMP-01–08 mit präzisierten Auslösern. Die Zusatzmodule werden nach tatsächlichen Eigenschaften aktiviert, nicht exklusiv nach Ordnerfamilie. Vorschlag zur Prüfung: Eingabe (Format, Hilfe, Werterhalt); Auswahl (Wert/Fokus, Menge, Gruppen); Aktion (Wirkung, Hostfolge, asynchron); Navigation (Ziel, Ort, Rückkehr); Offenlegung/Layer (Modalität, Schliessen, Fokus nur soweit nötig); Rückmeldung (Priorität, Lebensdauer, Ankündigung); Daten/Struktur (Bedeutung, Wachstum, Alternativen). Charts zusätzlich Kodierung; Kommunikation zusätzlich Sender, Verlauf, Reihenfolge/Erhalt; Medien/Code zusätzlich Alternative, Darstellung/Kopieren, Herkunft.

Beispiele für Prüfzuordnung: Dialog = Layer + ggf. Aktion; Accordion = Offenlegung, keine pauschale Modalität; Combobox = Auswahl + Eingabe + Layer; Date Picker = Datumseingabe + Auswahl + ggf. Layer; Data Table = Sammlung + optional Auswahl/Aktion; Message Scroller = Kommunikationsverlauf + Scroll-/Ankündigungsregel. Für Questionnaire/Trace ist bereits die Objektklassifikation ungeklärt: zusammengesetztes Aufgabenmuster, Baustein oder Implementierungsname? Vor einer verbindlichen Familienzuordnung ihre tatsächliche Aufgabe und Quelle lesen. Der Katalogname ist kein fachlicher Nachweis.

## Pilot vor Skills

1. **Standard challengen:** Die obigen Gegenfälle als Prüffälle verwenden. Ein Reviewer muss jeweils unnötige Pflichtteile ausschliessen können, ohne relevante Risiken zu verlieren. PAT-11/PAT-12/CMP-12 zuerst redaktionell präzisieren, keine neuen Default-UX-Regeln erfinden.
2. **Zwei unabhängige Systeme:** shadcn als ausgefüllte Referenz und ein tatsächlich anders beauftragtes System auswählen. Für das zweite System eigenes Profil/Relevanzinventar aus seinen Quellen erstellen; kein Vollimport der 116 Referenzseiten als Ausgangspunkt. Falls keine zweite Organisation zugänglich ist, Transfer nur als unvalidiert kennzeichnen.
3. **Kleine adversariale Stichprobe:** Separator oder Aspect Ratio; Combobox; read-only Sammlung; Radioauswahl ohne Suche; Formular mit unbekanntem Ausgang; Detail in einem Sheet; native Zurück-/Tastatursituation; langer lokalisierter Inhalt; Governanceänderung. Nicht jeder Fall muss als Produktfeature existieren: bei fehlender Quelle Scope/NR/O korrekt ausweisen.
4. **Zwei unabhängige Bearbeitungen aus gleicher Basis:** unterschiedliche Darstellungen frei erlauben. Reviewer prüft nur auffindbare Antworten, Herkunft, Geltung und Widerspruchsfreiheit. Kein Pixelvergleich oder identische Abschnittsfolge. Jede kritische Aussage hat genau einen führenden Ort; mehrere Modulverweise sind zulässig.
5. **Abnahme des Inhaltsmodells:** Keine erzwungenen nicht vorhandenen Funktionen oder erfundenen Regeln; jede aktive Frage hat konkrete Antwort oder O; NR begründet; unbekannte Quellen als NB; Plattformgrenzen erhalten; durchgehender Arbeitsweg gelingt ohne mündliche Zusatzregel. Abweichende Zuordnung zwischen Reviewern wird diskutiert und als Modellproblem dokumentiert, nicht durch mehr Pflichtfelder verdeckt.
6. **DB-/Ausgabeprobe erst danach:** wenige bestehende Seiteninhalte gegen Kriterien-IDs abbilden und im veröffentlichten Kanal gleich lesen. Fragen, Antworten, Herkunft, fachlicher Stand und Prüfstand müssen abrufbar bleiben; Darstellung bleibt frei. Noch keine detaillierte Schemaimplementierung. Heutige leere Templates oder positionsabhängige Textzeilen sind nicht das künftige Inhaltsmodell.

Erst nach diesem Pilot Skills: ein gemeinsamer Arbeitsablauf (System/Scope wählen, Originalquellen prüfen, Fragen aktivieren, Antwort verfassen, reviewen, begrenzt prüfen) plus Fachmodule für Aufgaben, Anordnung, Bausteine, Grundlagen, Content/Inklusion und Governance. Fragenkataloge als separat versionierte Ressourcen halten. Kein Skill je Produkttyp `overview/detail/edit/create` und kein Skill je Darstellungstyp Tabelle/Illustration. Skills orchestrieren die Arbeit; sie dürfen offene Designentscheidungen nicht stillschweigend schließen.

## Dialogische Autorenarbeit statt fachlicher Seed-Inhalte

Zielbild für einen späteren Skillprototyp: Quelleninventar → bekannte Antworten den aktivierten Fragen zuordnen → nur offene fachliche Entscheidungen in kleinen thematischen Bündeln erfragen → kurze Entscheidungszusammenfassung zur fachlichen Korrektur → erst danach Inhalte ausarbeiten. Kein vollständiger Fragebogen und keine erneute Rückfrage zu bereits beantworteten Punkten. Frage, Antwortform und mögliche Konsequenz helfen dem Nutzer beim Entscheiden; der Agent darf begründete Optionen anbieten, aber keine als angenommene Defaultregel behandeln.

Nutzerantworten werden als eigene, auf System/Produkt/Plattform bezogene Quelle mit Geltung und Entscheidungsstand festgehalten. Sie überschreiben widersprechende Originalquellen nicht stillschweigend: Konflikt, gewollte Abweichung und ungelöste Frage unterscheiden. „Offen“, „Vorschlag“ und „noch nicht geprüft“ bleiben legitime Ergebnisse. Das Gespräch klärt die Fachentscheidung; erst danach wählt der Agent eine passende freie Darstellung.

Ein Seed sollte nur Metastruktur, Identitäten und Versionen liefern, keine Default-Inhalte, fachlichen Claims, Tokenwerte oder verpflichtenden Komponentenbestände. shadcn bleibt unabhängige, ausdrücklich gewählte Anschauungsreferenz. Der heutige `prepareTemplate` ist beobachtet ein geschützter **Inhaltskopierer**, der fremde Prosa unverändert übernimmt und Implementierungsstände auf Draft setzt; das ist kein neutraler Autorenprozess und liefert keine fachliche Zustimmung zu den kopierten Regeln. Die Beibehaltung originaler Contractidentität ist richtig und bleibt davon getrennt.

Im Pilot zusätzlich prüfen: Kann der Nutzer mit zwei kleinen Fragebündeln eine echte offene Entscheidung beantworten? Erzeugt die Zusammenfassung eine nachvollziehbare lokale Entscheidung statt pauschaler Zustimmung zur ganzen Referenz? Bleiben ungelöste Fragen und Quellenkonflikte sichtbar? Erst wenn das gelingt, einen kleinen dialogischen Fachskill erproben; keine flächige Skillproduktion.

## Anhang: Mapping sämtlicher heutiger Seiten

Das folgende Mapping betrifft Themenzuständigkeit, nicht aktuelle Inhaltsqualität. „Behalten“ ist keine Bestätigung einer Regel. Slugs bleiben in dieser Analyse unangetastet. Komponenten werden einzeln inventarisiert, aber über die gemeinsame Matrix und aktivierte Familienfragen geprüft. Geplante Konsolidierung benötigt später Link-/Verbraucherprüfung.

| Heutige Seite | Titel | Vorgeschlagene fachliche Führung | Entscheidung |
| --- | --- | --- | --- |
| `shadcn-gestaltungs-pilot` | Mit dem Handbuch gestalten | Systemprofil / Arbeitsweg | Behalten, Scope des Piloten von systemweiter Regel trennen |
| `shadcn-grundlagen` | Grundlagen | Grundlagen / Themenübersicht | Behalten als Wegweiser, BAS schlank |
| `shadcn-farben` | Farbe | Grundlagen / Farbe | Behalten |
| `shadcn-themes-und-zustaende` | Themes und visuelle Zustände | Grundlagen / Erscheinungsmodi | Behalten; visuelle Zustände von Aufgabenzuständen abgrenzen |
| `shadcn-typografie` | Typografie | Grundlagen / Typografie | Behalten |
| `shadcn-abstaende` | Abstände und Grössen | Grundlagen / Abstand/Grösse | Behalten; Container-/Umbruchregeln verlinken |
| `shadcn-form-und-ebenen` | Form und Ebenen | Grundlagen / Form/Ebenen | Behalten; getrennte Aussagen zulassen |
| `shadcn-icons` | Icons | Grundlagen / Icons | Behalten |
| `shadcn-bewegung` | Bewegung | Grundlagen / Bewegung | Behalten |
| `shadcn-icons-bewegung` | Icons, Bewegung und Ebenen: Themenwegweiser | Grundlagen / historischer Wegweiser | Als Alias/Archivwegweiser erhalten, keine neue Fachseite |
| `shadcn-uebersicht` | shadcn | Systemprofil / Einstieg | Um verantworteten Auftrag und Relevanzinventar ergänzen |
| `shadcn-layout` | Layouts | Informationsarchitektur und Anordnung | Behalten als Übersicht, Begriffe präzisieren |
| `shadcn-page-types` | Page types | Anordnung / Ansichts-/Aufgabenfamilien | Behalten als bedarfsbezogene Auswahlhilfe, keine vollständige Viererontologie |
| `shadcn-page-type-overview` | overview | Anordnung / Übersicht/Sammlung | Behalten; Dashboard/Katalog/Servicehub nach Aufgabe unterscheiden |
| `shadcn-detailseite` | detail | Anordnung / Objekt-/Detailansicht | Behalten; Seite ist nur mögliche Darstellung |
| `shadcn-page-type-edit` | edit | Anordnung / Bearbeitungsansicht + PAT-10 | Räumliche Regeln hier, Speicher-/Korrekturregeln im Pattern führen |
| `shadcn-page-type-create` | create | Anordnung / Erfassungsansicht + PAT-10 | Räumliche Regeln hier, Erstellungs-/Resultatregeln im Pattern führen |
| `shadcn-page-layouts` | Page layouts | Anordnung / Regionenlayouts | Behalten; geometrische Varianten nicht als Aufgabenfamilien behandeln |
| `shadcn-main-sidebar` | Main+Sidebar | Anordnung / Haupt- und Nebenregion | Behalten |
| `shadcn-card-grid-4x4` | 4-column Card Grid | Anordnung / Sammlung in Raster | Mit 3-column als variable Rasterfamilie prüfen; Beispiel erhalten |
| `shadcn-narrow-single-card` | Narrow Single Card | Anordnung / fokussierter Einzelinhalt | Mit wide als Inhaltsbreitenvariante prüfen |
| `shadcn-wide-single-card` | Wide Single Card | Anordnung / fokussierter Einzelinhalt | Mit narrow als Inhaltsbreitenvariante prüfen |
| `shadcn-stacked-section-cards` | Stacked Section Cards | Anordnung / sequenzielle Gruppierung | Behalten als Variante; Cardpflicht nicht übertragen |
| `shadcn-card-grid-3-columns` | 3-column Card Grid | Anordnung / Sammlung in Raster | Mit 4-column als variable Rasterfamilie prüfen; Beispiel erhalten |
| `shadcn-content-layouts` | Content layouts | Anordnung / lokale Inhaltsanordnung | Behalten, zugeschnittene LAY-Fragen |
| `shadcn-content-layout-label-value` | Label–Value | Anordnung / Eigenschaft–Wert | Behalten; keine Seitennavigation erzwingen |
| `shadcn-content-layout-form-layout` | Form Layout | Anordnung / Feld-/Aktionsgruppen | Behalten; Validierungszeitpunkt im Pattern |
| `shadcn-content-layout-card-header` | Card Header | Anordnung / lokaler Inhaltskopf | Behalten; Abgrenzung zur Card-Anatomie |
| `shadcn-seitenstruktur-und-navigation` | Seitenstruktur und Navigation | Informationsarchitektur / Orientierung | Als führenden Ort beibehalten, Komponentenbedienung verlinken |
| `shadcn-patterns` | UX-Patterns | Aufgaben / Themenübersicht | Behalten als bedingtes Inventar; Registryeinträge nicht als ausgearbeitete Pattern zählen |
| `shadcn-formulare-validierung` | Formulare und Validierung | Aufgaben / Eingeben/Ändern | Führend behalten, lokale Feldregeln verlinken |
| `shadcn-suchen-filtern` | Suchen und Filtern | Aufgaben / Informationssuche/Eingrenzung | Behalten, Auswahl nur wenn tatsächliche Teilaufgabe |
| `shadcn-laden-leer-fehler` | Laden, leer und Fehler | Aufgaben / Zustände/Unterbrechung | Als führenden Zustandsort mit systemzustaende abstimmen |
| `shadcn-auswahl-und-suche` | Auswahl und Suche | Aufgaben / Wertauswahl | Behalten, klar von Informationssuche abgrenzen |
| `shadcn-destruktive-aktionen` | Destruktive Aktionen bestätigen | Aufgaben / folgenreiche Aktionen | Behalten; Bestätigung ist Option, keine Vorentscheidung |
| `shadcn-felder-und-fehlermeldungen` | Felder und Fehlermeldungen | Aufgaben / Formularwegweiser | Alias/gezielten Verweis erhalten, keine doppelte Patternführung |
| `shadcn-systemzustaende` | Systemzustände gestalten | Aufgaben / Zustände/Erholung | Mit laden-leer-fehler fachlich konsolidieren, Kontextanwendungen verlinken |
| `shadcn-tabellen-und-listen` | Tabellen und Listen | Aufgaben / Daten betrachten/operieren | Behalten; Darstellungsauswahl, Anordnung und Komponenten trennen |
| `shadcn-komponenten` | Komponenten | Komponenten / Übersicht | Behalten; keine Pflichtausstattung anderer Systeme |
| `shadcn-frameworks` | Frameworks und Plattformen | Plattformen und Ressourcen | Aus Komponentenast verschieben; Framework ≠ Plattform |
| `shadcn-komponenten-auswahl` | Komponenten auswählen | Komponenten / Auswahlentscheidung | Behalten; universelle und konkrete Referenzentscheidung trennen |
| `shadcn-button` | Button | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-input` | Input | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-checkbox` | Checkbox | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-switch` | Switch | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-accordion` | Accordion | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-alert` | Alert | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-alert-dialog` | Alert Dialog | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-aspect-ratio` | Aspect Ratio | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-attachment` | Attachment | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-avatar` | Avatar | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-badge` | Badge | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-breadcrumb` | Breadcrumb | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-bubble` | Bubble | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-button-group` | Button Group | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-calendar` | Calendar | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-card` | Card | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-carousel` | Carousel | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-chart` | Chart | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-code-block` | Code Block | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-collapsible` | Collapsible | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-combobox` | Combobox | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-command` | Command | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-context-menu` | Context Menu | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-data-table` | Data Table | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-date-picker` | Date Picker | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-dialog` | Dialog | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-drawer` | Drawer | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-dropdown-menu` | Dropdown Menu | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-empty` | Empty | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-field` | Field | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-hover-card` | Hover Card | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-input-group` | Input Group | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-input-otp` | Input OTP | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-item` | Item | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-kbd` | Kbd | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-label` | Label | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-marker` | Marker | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-menubar` | Menubar | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-message` | Message | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-message-scroller` | Message Scroller | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-native-select` | Native Select | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-navigation-menu` | Navigation Menu | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-pagination` | Pagination | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-popover` | Popover | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-progress` | Progress | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-questionnaire` | Questionnaire | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-radio-group` | Radio Group | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-scroll-area` | Scroll-area | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-select` | Select | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-separator` | Separator | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-sheet` | Sheet | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-sidebar` | Sidebar | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-skeleton` | Skeleton | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-slider` | Slider | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-spinner` | Spinner | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-table` | Table | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-tabs` | Tabs | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-textarea` | Textarea | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-toast` | Toast | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-toggle-group` | Toggle & Toggle Group | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-tooltip` | Tooltip | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-trace` | Trace | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-chart-area` | Chart Area | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-chart-bar` | Chart Bar | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-chart-line` | Chart Line | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-chart-pie` | Chart Pie | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-chart-radar` | Chart Radar | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-chart-radial` | Chart Radial | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-chart-tooltip` | Chart Tooltip | Komponenten / CMP-Kern + aktivierte Familienfragen | Inventar behalten; keine pauschale normative Übernahme; Objektklassifikation aus Quelle prüfen |
| `shadcn-content-design` | Content Design | Content und Lokalisierung | Behalten; konkrete Zustands-/Bausteintexte verlinken |
| `shadcn-barrierefreiheit` | Barrierefreiheit und inklusive Gestaltung | Inklusive Gestaltung | Behalten; Anforderungen/Prüfauftrag/Ergebnis trennen |
| `shadcn-mitwirken` | Mitwirken | Governance / Mitwirken | Behalten |
| `shadcn-release-stand` | Releases und Migrationen | Governance / Änderung/Migration | Behalten; fachliche Entscheidung von Paketversion trennen |
| `shadcn-technische-anbindung` | Technische Anbindung und MCP | Technische/agentische Nutzung | Fachlich aus Governance-Unterordnung herauslösen oder mehrfach auffindbar machen |
| `shadcn-referenz-pflegen` | Von der Quelle zum Release | Governance / Quellenpflege | Behalten; technische Originalquellen unverändert |

Mappingprüfung: alle 116 Snapshotseiten genau einmal aufgenommen. Kein Livebestand oder vollständiger Artikelaudit daraus abgeleitet.
