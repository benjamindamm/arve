# Designer-Roast: Arve/shadcn-Handbuch

Review vom 21.11.2026. Perspektive: Ich muss morgen damit eine echte Oberfläche entwerfen. Ausschliesslich Review; keine Inhalte, Komponenten, Datenbank oder Git-Historie verändert. Dieser Bericht ist das einzige neu erstellte Repository-Artefakt.

## Urteil

Das Handbuch dokumentiert gewissenhaft, was die Referenz behaupten darf. Es hilft deutlich weniger dabei, eine Gestaltung zu entscheiden. Der Unterschied ist fundamental: **Inhaltlich ausgearbeitete Komponentenbeschreibungen ergeben noch kein visuell benutzbares Designhandbuch.**

Ich bekomme auf zehn sehr unterschiedlichen Komponentenseiten dieselbe neunpunktige Führung, technische Statusbegriffe und lange Abgrenzungen. Bei der elementaren Frage „Welche Buttonvariante und welche Grösse soll ich nehmen?“ bekomme ich hingegen Codewörter. Das ist eine Referenz mit Gestaltungsillustrationen, noch kein ausreichend schneller Arbeitsplatz für Designer.

Die Kritik betrifft überwiegend starke Gestaltungsprobleme. In den begrenzten Bedienversuchen wurde kein allgemeiner Laufzeitfehler nachgewiesen. Die fehlende Interaktivität der SVGs ist ausdrücklich gekennzeichnet und wird hier nicht als Defekt ausgegeben.

## Prüfumfang und Methode

Live geprüft mit BrowserOS neo, eigener Tab, ohne alternative Browserautomation. Hauptquelle war die tatsächlich gerenderte Oberfläche auf `http://127.0.0.1:3010`. Browser-Screenshots wurden aufgenommen und visuell angesehen; sie liegen im Sitzungsnachweis, nicht als zusätzliche Dateien im Repository. Keine Bewertung aus einem blossen JSON-Dump, keine Quellencontract-Dateien zur Ersatzprüfung geladen.

Konkrete Aufgabe für den Einstieg: ein Formular mit Auswahl eines Landes/Standorts aus einer längeren Liste sowie eine filterbare Zahlungsübersicht entwerfen. Von der Handbuchübersicht zum Komponentenkatalog, dort Aufgabenbegriff suchen, dann Auswahlbaustein und Datentabelle untersuchen.

Desktop: überwiegend 1440 × 1000 CSS-Pixel. Die erste Handbuchaufnahme entstand vor der Grössenanpassung im bestehenden Browserfenster. Schmal: 390 × 844 CSS-Pixel als Browseremulation, kein physisches Telefon.

| Geprüfte Seite | Betrachtete Bereiche / Bedienversuch |
| --- | --- |
| `/systems/shadcn` | Einstieg, Projektvorschau, Direktzugänge; zusätzlich schmale Ansicht |
| `/systems/shadcn/komponenten` | Katalog, alphabetische Einträge, Suche `Land` → 0 von 69; schmale Ansicht; Kapiteldialog öffnen, Suche `Auswahl` → 11 Kapitel, mit Escape schliessen |
| `/systems/shadcn/components/button` | Kopf, Inhaltsverzeichnis, Vergleich, Demo, Varianten/Grössen, Zustände; Button aktivieren, Outline wählen, deaktivieren |
| `/systems/shadcn/components/input` | Kopf und redaktionelle Abschnitte, Illustration; langen Projektnamen eingeben, deaktivieren; Wert bleibt angezeigt |
| `/systems/shadcn/components/checkbox` | Kopf, Exportillustration, Zustands-/Beschriftungsregeln; lokale Checkbox per Werkzeug auswählen und Leertaste senden; keine vollständige Tastaturprüfung |
| `/systems/shadcn/components/combobox` | Einsatz, Abholortillustration, Varianten/Zustandstexte; Quellenvorschau aufklappen |
| `/systems/shadcn/components/dialog` | Umbenennungsillustration, Modalitäts-/Schliess-/Fokusregeln; zusätzlich schmale Illustration |
| `/systems/shadcn/components/data-table` | Zahlungsillustration, Filter-/Auswahl-/Paginationregeln; schmale Ansicht, Bildregion erfolgreich horizontal nach rechts scrollen |
| `/systems/shadcn/components/chart-bar` | Balkenillustration, Skala, Datenalternative, Varianten-/Zustandstexte |
| `/systems/shadcn/components/tooltip` | Speichernillustration, Einsatzgrenzen, Positionierung, Touch-/Fokusbeschreibung |
| `/systems/shadcn/components/label` | Kontaktillustration, alle neun redaktionellen Themen, Verweis auf Field |
| `/systems/shadcn/components/message` | Supportbeitrag mit Anhang, Ausrichtung, Status-/Kompositionsregeln |
| `/systems/shadcn/abstaende` | Gruppenvergleich, Bedienflächenschema, Referenzwerte und Geltungsbereich |
| `/systems/shadcn/main-sidebar` | Breite Vorschau, Umschalten auf Schmal, längeren Inhalt aufklappen |
| `/systems/shadcn/auswahl-und-suche` | Drei Vergleichsformen; Bern wählen und bestätigen, nach Luzern filtern: keine Treffer, Bern bleibt erhalten; zusätzlich schmale Ansicht |

Das sind **zehn Komponentenseiten**, nicht die Abnahme aller 69 Seiten. Nicht geprüft: komplette Tastaturfolgen, Screenreader, alle Quellenvorschauen, sämtliche Downloads, Figma-Dateien, physische Touch-Bedienung, alle Themes oder echte Produktdaten. Die zusätzliche statische Vorschau auf Port 3020 war für diese Live-Beobachtungen nicht erforderlich und wurde nicht als zweiter Prüfstand bewertet.

## Priorisierte Befunde

### 1. Hoch · Die Variantenentscheidung wird ausgerechnet ohne Variantenbilder präsentiert

**Art:** starkes Gestaltungsproblem, kein behaupteter Implementierungsfehler.

**Seite/Abschnitt:** [Button – Variante und Grösse wählen](http://127.0.0.1:3010/systems/shadcn/components/button#abschnitt-variante-und-grosse-wahlen), anschliessend „Zustände und Rückmeldungen“. Vergleichbar: Checkbox „Auswahlzustände statt dekorativer Varianten“, Message „Anfang oder Ende des Verlaufs“.

**Beobachtet:** Button zeigt `default`, `outline`, `secondary`, `ghost`, `destructive`, `link` als gleich aussehende Codeetiketten. Acht Grössen folgen ebenfalls als Namen. Der Zustandsteil besteht aus nummerierten Textfeldern; beispielsweise wird Fokus mit `:focus-visible` und SCXML-Abgrenzung erklärt. Die bedienbare Demo erlaubt ausdrücklich nur Default, Outline und disabled. Die Checkbox illustriert die normale Exportauswahl; gemischt, Fehler und Fokus werden im Text beschrieben. Message erklärt start/end, zeigt aber einen einzelnen eingehenden Beitrag statt eines Ausrichtungsvergleichs.

**Folge:** Ich kenne die zulässigen Namen, kann aber Gewichtung, Dichte, Proportionen und Zustandserkennung nicht unmittelbar vergleichen. Genau vor der Gestaltungsentscheidung werde ich vom visuellen Denken zurück ins Lesen geschickt. Dass weitere Fixtures im Contract existieren, ersetzt ihre brauchbare Präsentation nicht.

**Verbesserung:** Die belegten Varianten in einer beschrifteten visuellen Matrix zeigen; bei Button zusätzlich tatsächliche Grössen, Text-/Iconformen und Fokus/disabled nebeneinander. Bei Checkbox einen kleinen Zustandsstreifen, bei Message eingehend/ausgehend im selben Verlauf. Für statische Vergleiche ist dafür keine neue Laufzeitimplementierung nötig. Redaktionelle Illustration und contractgebundene Darstellung weiterhin ehrlich kennzeichnen.

### 2. Hoch · Die erste Bildschirmhöhe gehört dem Nachweis, nicht der Entscheidung

**Art:** starkes Hierarchieproblem.

**Seite/Abschnitt:** [Input](http://127.0.0.1:3010/systems/shadcn/components/input), [Combobox](http://127.0.0.1:3010/systems/shadcn/components/combobox), jeweils Seitenkopf bis zum ersten Beispiel; dasselbe Muster auf den übrigen geprüften Komponenten.

**Beobachtet:** Vor dem eigentlichen Gestaltungsbeispiel stehen Contractstatus, Implementierungsstatus, teils Angular-Hinweis, drei Sprunglinks, eine eingeklappte „Designvorschau der Quellenreferenz“ und ein geöffnetes Inhaltsverzeichnis mit neun Abschnitten. Bei 1440 × 1000 beginnt der erste Einsatztext im unteren Bildschirmbereich; die redaktionelle Illustration folgt erst nach weiterem Scrollen. Die sichtbare Bühne sagt zuerst „Quellenreferenz vollständig“ und „Keine Implementierung veröffentlicht“.

**Folge:** Ein Designer muss zuerst den Nachweisapparat übersetzen, bevor er die Komponente sieht. „Vollständig“ und „keine Implementierung“ können gleichzeitig korrekt sein, ergeben aber keine schnelle Antwort auf „Was kann ich für diesen Entwurf verwenden?“. Der Informationsaufwand wiederholt sich bei jeder geöffneten Alternative.

**Verbesserung:** Oben eine konkrete Ansicht, zwei bis drei Einsatzentscheidungen und eine kurze, verständliche Verfügbarkeitsangabe. Technischen Stand im vorhandenen Nachweisbereich bündeln. Inhaltsverzeichnis kompakter oder zunächst geschlossen anbieten; Beispiele, Varianten und Zustände zuerst erreichbar machen. Die bestehenden Prüfgrenzen bewahren, ihre Wiederholung aber aus der primären Lesespur nehmen.

### 3. Hoch · Ein Katalog mit 69 Einträgen verlangt noch immer, dass ich das Komponentenwort schon kenne

**Art:** Auffindbarkeitsproblem; der Nulltreffer selbst ist kein Suchabsturz.

**Seite/Abschnitt:** [Komponenten – Komponentenkatalog](http://127.0.0.1:3010/systems/shadcn/komponenten), Suche und Ergebnisliste.

**Beobachtet:** Der Katalog ist ein alphabetisches Grid aus Namen und relativ langen Beschreibungstexten. Im Grid fehlen erkennbare Komponentenminiaturen und Aufgabengruppen. Die Suche wirbt mit „Name oder Aufgabe“; die konkrete Eingabe `Land` lieferte 0 von 69 Komponenten. Die Leermeldung fordert nur auf, den Suchtext zu ändern. Die Hilfen zur Komponentenwahl und die vier bestehenden Beispiele sind unterhalb beziehungsweise hinter der weiteren Vertiefung angeordnet. Mobil wird das Grid zur langen einspaltigen Textliste. Die Kapitelsuche existiert und findet mit `Auswahl` tatsächlich passende Komponenten und Patterns; sie ist also kein fehlendes Feature.

**Folge:** Ohne Fachvokabular muss ich mehrere Synonyme ausprobieren oder die Liste lesen. Die neue Breite des Bestands wird als Textmenge präsentiert. Die Frage „Land aus einer langen Liste wählen“ führt nicht direkt zur Entscheidung zwischen Combobox, Select und nativer Auswahl.

**Verbesserung:** Den vorhandenen Katalog zusätzlich nach Aufgaben gliedern, etwa Werte auswählen, Daten vergleichen, Rückmeldungen, Navigation und Gespräch. Pro Eintrag eine erkennbare Miniatur statt einer zweiten Textdefinition. Eine knappe Entscheidungshilfe oberhalb der 69 Einträge und Aufgaben-/Synonymbegriffe in der Suche ergänzen; beim Nulltreffer direkt Auswahlhilfe und Kapitelsuche anbieten.

### 4. Mittel · Das Handbuch nennt die nächste passende Komponente, verlinkt sie aber nicht dort

**Art:** konkrete Reibung in der Informationsarchitektur.

**Seite/Abschnitt:** [Label – Ein Feld eindeutig benennen](http://127.0.0.1:3010/systems/shadcn/components/label#abschnitt-ein-feld-eindeutig-benennen), [Combobox – Aus einer längeren Liste wählen](http://127.0.0.1:3010/systems/shadcn/components/combobox#abschnitt-aus-einer-langeren-liste-wahlen), [Message – Ein Beitrag mit erkennbarem Absender](http://127.0.0.1:3010/systems/shadcn/components/message#abschnitt-ein-beitrag-mit-erkennbarem-absender), [Auswahl und Suche – Weiterführungen](http://127.0.0.1:3010/systems/shadcn/auswahl-und-suche).

**Beobachtet:** Label empfiehlt Field als bessere Zusammenstellung, aber Field ist im betreffenden Satz kein Link. Combobox nennt Select und Input als Alternativen ebenfalls nur im Text. Message nennt Bubble und Message Scroller ohne direkte Links im Absatz. Auf dem Auswahlpattern gibt es interne Weiterführungen zu Checkbox, Switch und Input, während die zentrale Combobox-Weiterführung nach extern zu shadcn führt; die inzwischen vorhandene lokale Combobox-Seite wird dort nicht direkt angeboten.

**Folge:** Die Beratung endet einen Klick zu früh. Ich muss die genannten Begriffe in der langen Navigation wiederfinden oder erneut suchen. Besonders mobil geht der unmittelbare Vergleich zwischen zwei Alternativen verloren.

**Verbesserung:** Empfehlungen im Einsatzabsatz direkt auf die vorhandenen lokalen Seiten verlinken. Ein kleiner Vergleich „stattdessen wählen“ sollte unmittelbar zur Alternative und zum zugehörigen Pattern führen. Die externe Originalquelle bleibt als Quelle daneben erhalten.

### 5. Mittel · Mobil ist das Bild erreichbar, aber noch keine mobile Gestaltungsantwort

**Art:** Gestaltungsproblem, ausdrücklich kein Verlust der Bilddaten.

**Seite/Abschnitt:** [Data Table – Zahlungen nach E-Mail filtern](http://127.0.0.1:3010/systems/shadcn/components/data-table#abschnitt-zahlungen-nach-e-mail-filtern), [Dialog – Beispiel: ein Projekt umbenennen](http://127.0.0.1:3010/systems/shadcn/components/dialog#abschnitt-beispiel-ein-projekt-umbenennen), jeweils bei 390 Pixeln Breite.

**Beobachtet:** Bei Data Table sieht man zunächst nur den linken Ausschnitt der statischen Zahlungstabelle. Status, Beträge und Seitenaktionen liegen weiter rechts. Horizontales Scrollen der beschrifteten Bildregion funktioniert und wurde ausgeführt. Eine ausdrückliche mobile Entwurfsalternative wird dadurch aber nicht gezeigt. Beim Dialog passt die ganze Illustration durch Verkleinern in die Fläche; die innere Formularschrift ist merklich kleiner als der normale Fliesstext. Das ist eine verkleinerte Illustration, kein Nachweis tatsächlicher Feld- und Touchgrössen.

**Folge:** Ich kann auf dem Telefon die Dokumentation lesen, lerne aber wenig darüber, wie ich diese Komponenten für ein Telefon entwerfen soll. Bei der Tabelle muss ich den Zusammenhang zwischen Identität, Status, Betrag und Aktion aus Bildausschnitten zusammensetzen.

**Verbesserung:** Eine bewusst gestaltete schmale Ansicht zusätzlich zur Desktopillustration zeigen und ihre Entscheidung erklären: Welche Spalten bleiben, wie bleibt die Zeilenidentität beim Scrollen erhalten, wo stehen Aktionen? Beim Dialog echte schmale Typografie, Umbruch und Aktionsanordnung illustrieren. Das Layoutkapitel zeigt mit „Breit/Schmal“ bereits ein passendes Präsentationsprinzip.

### 6. Mittel · Neun Abschnitte für alles erzeugen Umfang statt Gewichtung

**Art:** redaktionelles Gestaltungsproblem, nicht blosse Abneigung gegen lange Texte.

**Seite/Abschnitt:** [Label](http://127.0.0.1:3010/systems/shadcn/components/label), besonders „Keine eigene Grössen- oder Farbauswahl“ und „Die Beschriftung bleibt beim Feld“; zum Vergleich Message und Chart Bar.

**Beobachtet:** Label bekommt dieselben neun Inhaltspositionen wie Data Table und Combobox. Ein Abschnitt erklärt, dass keine benannten Grössen/Farben existieren; ein weiterer, dass Label keinen Auswahl-, Lade- oder Bestätigungsablauf besitzt. Diese Aussagen sind korrekt, belegen aber viel sichtbare Fläche mit der Abwesenheit von Funktionen. Die vorhandenen Klappen für die letzten technischen Themen reduzieren bereits Belastung; der Rest bleibt trotzdem als umfangreicher Pflichtdurchgang bestehen.

**Folge:** Wichtiges und Selbstverständliches sehen gleich wichtig aus. Nach mehreren Seiten entsteht eine monotone Lesearbeit; ich scanne die wiederkehrende Form und riskiere, gerade den relevanten Sonderfall zu übersehen. Eine einfache Komponente wirkt unnötig kompliziert.

**Verbesserung:** Seitentiefe am Entscheidungsbedarf ausrichten. Für Label reichen ein beschriftetes Beispiel, Position/Umbruch/Pflichtkennzeichnung, echte Zuordnung und der Übergang zu Field. Nicht vorhandene Funktionen einmal knapp nennen. Platz für konkrete Sonderfälle nutzen statt neun Kapitel als sichtbares Vollständigkeitsritual durchzuziehen.

### 7. Mittel · Das Zusammenspiel bleibt an entscheidenden Stellen eine Gestaltungsaufgabe des Lesers

**Art:** Lücke zwischen Prinzipienvermittlung und praktisch verwendbarer Referenz.

**Seite/Abschnitt:** [Abstände und Grössen – Referenzwerte und ihr Geltungsbereich](http://127.0.0.1:3010/systems/shadcn/abstaende#abschnitt-referenzwerte-und-ihr-geltungsbereich), [Input – Beschriftung und Hilfe nah am Feld](http://127.0.0.1:3010/systems/shadcn/components/input#abschnitt-beschriftung-und-hilfe-nah-am-feld), [Dialog – Titel, Arbeitsbereich und Abschluss verbinden](http://127.0.0.1:3010/systems/shadcn/components/dialog#abschnitt-titel-arbeitsbereich-und-abschluss-verbinden).

**Beobachtet:** Die Grundlagenseite erklärt Gruppierung visuell nachvollziehbar und trennt belegte Komponentenwerte von einer noch offenen allgemeinen Skala. Input und Dialog beschreiben räumliche Nähe, verfügbare Breite und Umbruch überwiegend sprachlich. Die Illustrationen enthalten keine aufeinander bezogenen Massannotationen für Label–Feld–Hilfe, Feldgruppen und Aktionsbereich. Es fehlt nicht jede Zahl: Checkbox benennt beispielsweise 16/14 Pixel und 8 Pixel Labelabstand. Es fehlt ein zusammenhängender, praktisch übernehmbarer Satz von Entscheidungen für den konkreten Entwurf.

**Folge:** Zwei Designer können dieselben richtigen Prinzipien lesen und danach deutlich unterschiedliche Formularrhythmen und Dialogdichten zeichnen. Ich weiss, warum etwas zusammengehört, muss aber den tatsächlich zu verwendenden Rhythmus selbst wieder erfinden.

**Verbesserung:** Einen vollständigen, annotierten Formular-/Dialogentwurf anbieten: belegte Werte, redaktionelle Vorschlagswerte und offene Systementscheidungen direkt am jeweiligen Mass unterscheiden. Eine vorgeschlagene Skala darf ausdrücklich vorläufig bleiben. Der Wert liegt in einer überprüfbaren Ausgangsgestaltung, nicht in einem erfundenen verbindlichen Standard.

## Systemische Ursachen

1. **Quellenabschluss wird mit Leserabschluss verwechselt.** Die Referenz hält Provenienz und Grenzen sauber fest. Das sichtbare Seitenmodell priorisiert diese Nachweislogik aber stärker als das schnelle Entscheiden, Vergleichen und Weiterarbeiten.
2. **Die einheitliche Vorlage nivelliert Komplexität.** Passive Beschriftung, interaktiver Auswahlbauplan und Diagramm bekommen dieselbe neunpunktige Erzählkurve. Das vereinfacht Redaktion, macht das Lesen jedoch nicht entsprechend einfacher.
3. **69 Einzelbeschreibungen sind noch kein zusammenhängendes Werkzeug.** Katalog, Alternativen, Patterns und Grundlagen existieren, sind aber am konkreten Entscheidungspunkt zu schwach verbunden. Visuelle Zustandsvergleiche und nachvollziehbare Kompositionen sind die fehlende Verbindung.

## Die drei Änderungen mit dem grössten Nutzen

1. **Komponentenseiten mit einer visuellen Entscheidung beginnen lassen.** Echtes Beispiel, belegte Varianten/Zustände im Vergleich, zwei bis drei Einsatzregeln. Nachweise und Implementierungsgrenzen bleiben erreichbar, beanspruchen aber nicht den ersten Bildschirm.
2. **Den Katalog zu einer aufgabenbezogenen Auswahlhilfe machen.** Visuelle Miniaturen, wenige sinnvolle Aufgabengruppen, direkte Alternativlinks und Suchbegriffe aus realen Aufgaben. Vorhandene Patterns unmittelbar mit den lokalen Komponenten verbinden.
3. **Einige vollständige Entwürfe statt weiterer Einzeldefinitionen liefern.** Formular im Dialog, gefilterte Datentabelle und kurzer Gesprächsverlauf, jeweils breit/schmal und mit relevanten Zustandswechseln. Masse und offene Entscheidungen annotieren. Das bestehende Main+Sidebar-Beispiel und der bedienbare Auswahlvergleich zeigen, dass die Darstellungsform bereits möglich ist.

## Was diese Kritik nicht behauptet

Die Startseite hat einen konkreten Projekteinstieg. Der Katalog hat eine funktionierende Suche, und die Kapitelnavigation hat zusätzlich eine tatsächlich hilfreiche übergreifende Suche. Inhaltsverzeichnisse, Quellenvorschauen und technische Detailklappen sind vorhanden. Statische Illustrationen und die begrenzten Angular-Demos werden erkennbar auseinandergehalten. Das Auswahlpattern erhält im ausgeführten Nulltrefferfall die gewählte Option; die schmale Layoutvorschau ordnet Zusatzinhalt unter dem Hauptbereich an. Diese bereits gelösten Dinge werden nicht als fehlend verkauft.

Die zurückhaltende Schwarz-Weiss-Gestaltung ist für sich kein Fehler. Persönlich würde ich stärkere visuelle Unterscheidung für schnelleres Scannen bevorzugen; daraus folgt hier kein eigener Befund. Priorität haben die nachgewiesenen Entscheidungs- und Navigationskosten, nicht eine Geschmacksrevision.
