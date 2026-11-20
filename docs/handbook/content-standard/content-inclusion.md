# Inhaltsstandard: Content Design und inklusive Gestaltung

Status: redaktioneller Sollstandard mit begrenztem Bestandsabgleich, 18. November 2026. Die Anforderungen wurden vor dem Lesen der Arve/shadcn-Inhalte formuliert. Sie gelten für ein Design-System-Handbuch unabhängig von Framework, Marke und Publikationssystem. „Pflicht“ bedeutet eine im Handbuch beantwortete Frage, keine Pflicht zu einem bestimmten CMS-Feld oder einer eigenen Seite. Die IDs bleiben bei Umbenennung und Zusammenlegung erhalten.

## Umfang und Zuständigkeit

Content Design verantwortet Begriffe, Informationsstruktur, Stimme, Ton, Texte und Darstellungsformate. Inklusive Gestaltung verantwortet übergreifende Zugänglichkeitsziele, Nutzungsvoraussetzungen, Prüfmethoden, Grenzen und den Umgang mit Ausschlüssen. Beides muss in Komponenten und Abläufe eingehen: Der konkrete Dialog-Fokusverlauf gehört zur Dialogdokumentation, die Fehlermeldung eines Eingabefeldes zum Feld beziehungsweise Formularpattern. Die übergreifende Inklusionsseite erklärt dafür die Kriterien und verweist auf die lokale Regel; sie kopiert nicht sämtliche Komponentenregeln.

Visuelle Grundlagen führen Kontrastpaare, Typografie, Bewegung und Anpassbarkeit. Plattformdokumentation führt semantische APIs, unterstützte Betriebssysteme und technische Testkombinationen. Content Design benennt die sprachlichen Konsequenzen; Inklusion benennt das zu erreichende Nutzungsergebnis und die Methode zu seiner Prüfung. Governance führt Verantwortliche, Eskalation, Abweichungen und Revisionen. Ein Link ersetzt eine Wiederholung nur, wenn das Ziel die offene Frage tatsächlich beantwortet.

## Gemeinsamer Mindestinhalt

Jeder Fachbereich beantwortet vier Fragen in lesbarer Form: Für wen und welche Aufgabe gilt die Regel? Was ist konkret zu tun? Wie sieht eine richtige und eine problematische Anwendung aus? Woran und in welchem Umfang wurde die Aussage geprüft? Eine kurze Tabelle oder zwei Absätze können genügen. Behauptete Nutzerbedürfnisse, redaktionelle Entscheidungen und beobachtete Ergebnisse werden unterscheidbar bezeichnet.

Die folgenden Matrizen sind Inhaltsanforderungen. Bei bedingten Anforderungen ist bereits die begründete Entscheidung über den Auslöser Pflicht. „Noch nicht untersucht“ ist eine gültige transparente Antwort, aber kein erfüllter Qualitätsnachweis. Ein Beispiel darf mehrere Anforderungen belegen; es braucht weder für jede Zeile eine Seite noch die immer gleiche lange Checkliste.

## Unterthemenmatrix Content Design

| ID | Geltung / Auslöser | Zu beantwortende Unterthemen | Redaktioneller Abnahmebeleg |
|---|---|---|---|
| CNT-01 | Immer | Zielgruppen, wichtigste Aufgaben, vorausgesetztes Fachwissen, Nutzungssituation, Umgang mit geringer Sprach- oder Digitalkompetenz | Mindestens eine konkrete Aufgabe mit Zielgruppe; Herkunft des Bedarfs oder ausdrücklich benannte Annahme |
| CNT-02 | Immer | Stimme und situationsabhängiger Ton; Anrede, respektvolle Sprache, Klarheit, Vermeidung von Schuldzuweisung und unbegründeten Versprechen | Regel mit zwei kontrastierenden Beispielen, etwa reguläre Handlung und belastender Fehler; begründete Wortwahl |
| CNT-03 | Immer | Begriffe, Synonyme, Abkürzungen, Fachsprache, Schreibweisen; Navigation und Produkttext verwenden dieselbe Bedeutung | Kleines verbindliches Glossar mit bevorzugter/vermiedener Form; ein fachlicher Begriff wird bei Bedarf verständlich erklärt |
| CNT-04 | Immer | Titel, Überschriften, Informationsreihenfolge, scannbare Absätze, Listen, Linkziele; Wichtiges vor Zusatzwissen | Kommentierter Inhaltsausschnitt mit klarer Hierarchie und verständlichem Linktext; keine allein räumlichen Anweisungen |
| CNT-05 | Immer, lokale Ausprägung bei Interaktion | Labels, Aktionsverben, Hilfetexte, Pflicht-/Optionalangaben; sichtbare Texte und zugängliche Namen; keine versteckten Voraussetzungen | Zusammenhängendes Beispiel, das eine Handlung und deren Folge verständlich macht; Verweise auf Komponentenregeln |
| CNT-06 | Immer, lokale Ausprägung nach Zuständen | Fehler, Warnung, Erfolg, leere Ergebnisse, Laden, Unterbrechung; Problem, hilfreicher nächster Schritt, Erhalt eingegebener Daten | Zustandsübersicht eines realistischen Ablaufs mit vollständigen Beispieltexten; keine pauschale Erfolgsmeldung ohne gesicherte Folge |
| CNT-07 | Immer; Detailtiefe nach verwendeten Daten | Datum, Uhrzeit/Zeitzone, Zahl, Währung, Einheit, Bereich, fehlender/ungültiger Wert; Eingabeformat gegenüber Anzeigeformat | Verbindliche Formatentscheidung mit Grenzfall, etwa Null gegen fehlend; Locale und Einheiten eindeutig |
| CNT-08 | Mehrere Sprachen, Regionen oder fremdsprachige Inhalte | Übersetzungsverantwortung, Sprachwechsel, Glossar, Pluralisierung, Variablen, Textausdehnung, Locale-Fallback, gemischte Sprachabschnitte | Beispiel mit Variablen/Plural und längerer Übersetzung; Review pro unterstützter Sprache oder explizite Prüflücke |
| CNT-09 | RTL oder bidirektionale Inhalte im Zielumfang | Leserichtung, gemischte Zahlen/Bezeichner, richtungsabhängige Begriffe, nicht zu spiegelnde Inhalte | RTL-Beispiel mit gemischtem Text; Inhaltsreview und Verweis auf Plattform-/Layoutprüfung; „alles spiegeln“ genügt nicht |
| CNT-10 | Bilder, Audio, Video, Animation oder Downloads | Zweckbezogene Alternativtexte, dekorative Inhalte, Untertitel, Transkripte, Beschreibung visueller Information, Format/Grösse/Sprache von Downloads | Konkretes Medium samt begründeter Alternative; Zuständigkeit für Erstellung und Aktualisierung |
| CNT-11 | Diagramme, Tabellen oder datenbasierte Aussagen | Aussage, Einheit, Zeitraum, Quelle, Unsicherheit, Auslassungen; textliche Kernaussage und gleichwertiger Datenzugang | Ein erklärtes Datenbeispiel mit Alternative; fehlende Daten nicht als Null und Unsicherheit nicht als Gewissheit darstellen |
| CNT-12 | Immer | Textpflege, Quelle, Verantwortungsbereich, fachliche Prüfung, Änderungsanlass, veraltete Inhalte | Benannte zuständige Rolle und ein nachvollziehbarer Änderungs-/Reviewweg; keine unbelegten „freigegeben“-Etiketten |

## Unterthemenmatrix inklusive Gestaltung

| ID | Geltung / Auslöser | Zu beantwortende Unterthemen | Redaktioneller Abnahmebeleg |
|---|---|---|---|
| INC-01 | Immer | Nutzungsvielfalt, dauerhafte/situative Einschränkungen, ausgeschlossene Kontexte, angestrebtes Qualitätsniveau und dessen Reichweite | Expliziter Geltungsbereich; Ziel von erreichtem Prüfergebnis trennen; kein pauschales Versprechen „barrierefrei“ |
| INC-02 | Immer | Wahrnehmbarkeit, Bedienbarkeit, Verständlichkeit, verlässliche Semantik; Zuordnung zu Grundlagen, Komponenten und Patterns | Navigierbare Zuständigkeitsmatrix mit einem konkreten Beleg je zuständigem Bereich; keine zentrale Duplikatsammlung |
| INC-03 | Interaktive Oberflächen | Tastatur, Zeiger/Touch, Spracheingabe, Fokus, Alternativen zu komplexen Gesten, Eingabeerhalt und Fehlerkorrektur | Plattformbezogene Prüfmethode und verlinkte lokale Regeln; nachvollziehbarer Ablauf mit Start, Handlung und erwartetem Ergebnis |
| INC-04 | Digitale visuelle Oberfläche | Vergrösserung, Umbruch, Textanpassung, Kontrast, Farbe als Zusatzsignal, Bewegung, Orientierung | Auswahl begründeter manueller Prüffälle; konkrete visuelle Werte in Grundlagen, lokale Ausnahmen bei der Komponente |
| INC-05 | Assistive Technologie oder entsprechende Unterstützung beansprucht | Zugängliche Namen/Rollen/Zustände, Lesereihenfolge, Statusänderungen, Screenreader, Sprachsteuerung und bei Bedarf Schaltersteuerung | Dokumentierte Plattform-/Browser-/AT-Kombination, Version/Datum, konkrete Aufgabe, Befund; ungetestete Kombinationen ausdrücklich markieren |
| INC-06 | Immer; vertieft bei komplexen oder belastenden Aufgaben | Kognitive Last, vorhersehbare Abläufe, verständliche Hilfe, Wiederholung vermeiden, Erholung von Fehlern, Zeitdruck | Durchgehendes Szenario mit Hilfe und Rückweg; Nutzerforschung oder explizit als Expertenreview begrenzter Befund |
| INC-07 | Fristen, Authentifizierung, sensible Daten oder irreversible Folgen | Zeitverlängerung, zugängliche Identifikation, Korrektur/Bestätigung, Erläuterung von Konsequenzen, alternative Wege | Lokales Pattern und überprüfbare Konsequenztexte; Risiken und offene Abhängigkeiten benennen |
| INC-08 | Mehr als eine Ausgabetechnologie | Web, native Apps, Desktop, Dokument/Print, gegebenenfalls Sprache oder Kiosk; äquivalente Ziele statt identischer Implementierung | Pro beanspruchter Plattform eigener Umfang und Testverweis; fehlende Umsetzung ist eine Grenze, kein impliziter Support |
| INC-09 | Immer | Automatisierte Checks, manuelle Prüfung, assistive Tests, gegebenenfalls Forschung mit betroffenen Menschen; Fehlerpriorisierung, Wiederholungsprüfung | Kleines Testprotokoll mit Version, Auswahl, Methode, Befund und offenen Punkten; automatische Prüfung ersetzt kein Gesamturteil |
| INC-10 | Immer | Bekannte Barrieren, begründete Ausnahme, Zwischenlösung, Meldemöglichkeit und Abhilfe | Auffindbarer Status mit verantwortlicher Rolle und nächstem Prüf-/Entscheidungsschritt; offene Barrieren bleiben sichtbar |

## Abnahme ohne Pflichtfeldwand

Ein Reviewer wählt einen repräsentativen Ablauf und verfolgt ihn über Text, Darstellung, Interaktion und Ausnahmezustände. Er kann dabei jede anwendbare ID auf eine konkrete Stelle abbilden und für bedingte IDs den Auslöser nachvollziehen. Inhaltsinventar, Glossar, kommentiertes Beispiel und kurzes Prüfprotokoll reichen als Formate aus, sofern sie die Fragen beantworten. Viele Wörter, vorhandene Überschriften oder ein Quellenlink allein erfüllen keine Anforderung.

Für jede Lücke genügt ein knapper Satz: offene Frage, betroffener Umfang, zuständige Rolle und nächster Schritt. Beispiel: „Die französische Fehlermeldung wurde sprachlich geprüft; Textausdehnung im mobilen Dialog ist offen, Plattformteam prüft vor Freigabe.“ Eine Antwort ist redaktionell abnahmefähig, wenn sie konkret, widerspruchsfrei und auffindbar ist. Ob das beschriebene Verhalten implementiert und wirksam ist, benötigt zusätzlich Laufzeit- beziehungsweise Nutzungsbelege.

Web-Semantik, HTML/ARIA und browserbasierte Werkzeuge sind nur Web-Nachweise. Ein Screenreader-Test unter Windows belegt keine iOS-, Android-, PDF- oder Druckausgabe. Gemeinsame sprachliche Ziele dürfen übertragen werden; Plattform-APIs, Bedienkonventionen und assistive Ergebnisse müssen separat beschrieben und geprüft werden. Nicht angebotene Plattformen werden als ausserhalb des Umfangs geführt; unbelegte Unterstützungsversprechen bleiben offen.

## Quellen und Ableitung

Gezielt am 18. November 2026 mit BrowserOS neo gelesen: [WAI: Writing for Web Accessibility](https://www.w3.org/WAI/tips/writing/) stützt aussagekräftige Titel, semantische Überschriften, verständliche Links, zweckbezogene Textalternativen, Medienalternativen und klare Anweisungen. [GOV.UK Design System: Error message](https://design-system.service.gov.uk/components/error-message/) demonstriert die Trennung korrigierbarer Eingabefehler von Dienstproblemen sowie den Erhalt eingegebener Antworten. Diese Quellen begründen ausgewählte Prinzipien und Beispiele; sie definieren weder diese gesamte Matrix noch eine Markenstimme. GOV.UK-spezifische Farben oder technische Lösungen werden nicht zu universellen Regeln. Die Matrix ist eine eigene redaktionelle Synthese, keine normative Konformitätscheckliste.

## Begrenzter Abgleich: Arve/shadcn

Abgleich nach Formulierung des Sollstandards, ausschliesslich anhand lokaler Dateien. Führende Belege: **C** = [form-content-release.ts](../../../scripts/content/form-content-release.ts), **I** = [form-inclusion-release.ts](../../../scripts/content/form-inclusion-release.ts), **F** = [foundations-release.md](../foundations-release.md), **R** = [form-workflow-release.md](../form-workflow-release.md). C und I repräsentieren das laut R veröffentlichte Formularpaket; hier wurde weder CMS noch Portal erneut geprüft. Weitere Quellen sind ausdrücklich Fachpläne, keine umgesetzten Handbuchkapitel.

„Erfüllt“ bewertet nur den genannten redaktionellen Teilumfang. „Teilweise“ bedeutet vorhandene, aber unvollständige Antwort. „Fehlt“ bedeutet keine passende Antwort im gelesenen Inhalt. „Nicht belegt“ betrifft fehlende Evidenz beziehungsweise unentschiedenen Zielumfang. „Nicht relevant“ ist nur mit eng benannter Umfangsgrenze zulässig; es bedeutet nicht global unnötig.

| IDs | Befund | Beleg und konkrete Grenze |
|---|---|---|
| CNT-01 | Teilweise | C, „Ein Projekt anlegen“: klare Aufgabe; keine belegte Zielgruppe, Vorkenntnisse oder Bedarfserhebung. |
| CNT-02 | Teilweise | C, „Ton, Formate und Übersetzung mitführen“: ruhiger Ton und Gegenbeispiel; Anrede, Orthografie und inklusive Ansprache bleiben Produktentscheidungen. |
| CNT-03 | Teilweise | C, Einstieg: Projektname/Projekt erstellen/Projekt erstellt konsistent; verbindliches Glossar nur in [Content-Plan](../plans/content-design.md), „Seitenkonzept 1“, vorgeschlagen. |
| CNT-04 | Teilweise | C hat aufgabenbezogene Überschriften und benannte Weiterwege; allgemeine Regeln für Titel, Informationshierarchie und Linktexte fehlen dort. F verweist auf Typografiestudien. |
| CNT-05 | Erfüllt, Formularbeispiel | C, „Vor der Eingabe“; I, „1 · Feldname“: Label, Hilfe, Pflicht und Aktionsfolge konkret erklärt; echte Eingabebedingungen bleiben offen. |
| CNT-06 | Teilweise | C, Meldungsvergleich und Bestätigung: Fehler, Übermittlung, Erfolg und unbekannter Ausgang differenziert. Leere Ergebnisse und weitere Produktabläufe sind nicht ausgearbeitet; R begrenzt das Paket auf Formulare. |
| CNT-07 | Teilweise | C unterscheidet Sprache, Region, Zeitpunkt und Datum; keine verbindlichen Ausgabeformate. [Content-Plan](../plans/content-design.md), „Seitenkonzept 4“, enthält erst Entscheidungsfragen. |
| CNT-08 / CNT-09 | Teilweise; Ergebnisse nicht belegt | C fordert vollständige Übersetzungsnachrichten; I, „Weitere Bedingungen“, fordert RTL und gemischte Werte. Sprachumfang, geprüfte Übersetzung, Plural-/Fallbackentscheidung und RTL-Beispiel fehlen in der Ausarbeitung. |
| CNT-10 | Teilweise | F beschreibt vollständige Textfassungen für Studien; Bild-/Medienregeln bleiben unvollständig. Audio-/Videoalternativen sind für das reine Textformular nicht relevant; ein Ausschluss für das gesamte Handbuch ist nicht belegt. |
| CNT-11 | Nicht belegt | F dokumentiert Kontrastwerte samt Herkunft und Grenzen, aber kein allgemeines Chart-/Datenmuster. Ob quantitative Charts zum Produktumfang gehören, ist ungeklärt; daraus folgt kein pauschales „nicht relevant“. |
| CNT-12 | Teilweise | C, „Quelle, Empfehlung und offener Review“, nennt notwendige Prüfung; [Content-Plan](../plans/content-design.md), „Umsetzungsfolge“, benennt Rollen. Dauerhafte Textpflege und konkreter Revisionsanlass sind nicht vollständig festgelegt. |
| INC-01 / INC-02 | Teilweise | I begrenzt den Webformularnachweis und verlinkt führende Bereiche. Ein systemweiter Nutzungsumfang und eine vollständige Zuständigkeitsübersicht fehlen; [Inklusionsplan](../plans/inclusion.md), „Zuständigkeiten“, liefert Planung. |
| INC-03 / INC-04 | Teilweise | I, Aufgaben 2–5, gibt konkrete Tastatur-, Fokus-, Zoom-, Reflow- und Kontrastprüfungen vor; Touch und Bewegung sind ergänzt. Spracheingabe und komplexe Gesten sind nicht ausgearbeitet. F berichtet begrenzte Grundlagenprüfungen. |
| INC-05 | Nicht belegt | I verlangt Screenreader-Protokoll mit Umgebung/Version und sagt ausdrücklich, dass assistive Formularprüfungen nicht ausgeführt wurden. Kein Ergebnis aus einem Prüfauftrag ableiten. |
| INC-06 / INC-07 | Teilweise | I, „Korrigieren ohne Verlust“ und „Übermittlung“: Fehlererholung konkret; Zeitdruck, Authentifizierung und weitere sensible Abläufe nicht behandelt. Ihre Anwendbarkeit muss am Produktumfang entschieden werden. |
| INC-08 | Teilweise | I grenzt native Nachweise aus; [Plattformplan](../plans/platforms.md), Abschnitte 7–8, trennt Web/native Ziele und Prüfungen. Native Umsetzung und Dokumentausgabe sind damit nicht belegt. |
| INC-09 | Teilweise | I, „Nachweise“, beschreibt Methode und Grenzen präzise. R berichtet Portal-/Breitenprüfungen; kein vollständiges Produktformularprotokoll, keine assistive Freigabe. |
| INC-10 | Fehlt im Fachinhalt | I nennt offene Prüfungen, aber keinen vollständigen Weg zum Melden einer Barriere mit zuständiger Rolle, Zwischenlösung und Abhilfeschritt. |

## Kompakte Zusammenfassung

Der Bestand erklärt einen Formularweg überzeugend und trennt Sprachvorschlag, technische Voraussetzung und Prüfauftrag. Für ein vollständiges Handbuch fehlen vor allem entschiedener Zielgruppen-/Sprachumfang, verbindliche Begriffe und Formate, konkrete bedingte Beispiele sowie nachvollziehbare Abhilfewege. Zuerst diese offenen Entscheidungen beantworten; danach die betroffenen lokalen Kapitel ergänzen und reale Prüfergebnisse nachtragen. Diese Inhaltsanalyse erteilt weder Produktfreigabe noch allgemeine Accessibility- oder Plattformkonformität.
