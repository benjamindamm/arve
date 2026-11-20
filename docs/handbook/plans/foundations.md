# Gestaltungsgrundlagen: Themenaudit und Darstellungsplan

Stand: 18. November 2026. Ergebnis ist ein redaktioneller und visueller Umsetzungsplan, keine neue Gestaltungsspezifikation und keine Freigabe. Gegenstand ist das shadcn-Referenzsystem in Arve. Eine spätere Konzernbibliothek übernimmt die Entscheidungsstruktur, ersetzt aber Werte, Markenregeln, Quellen und Plattformnachweise.

## Evidenz und Reichweite

Vollständig gelesen wurden die aktuellen veröffentlichten CMS-Inhalte einschliesslich Summary, Vorlagenfeldern, aller Text- und Do/Don't-Blöcke der Seiten Grundlagen, Farben, Themes, Typografie/Form, Abstände und Icons/Bewegung/Elevation. Der aktuelle Draft-Leseweg liefert für diese Seiten denselben Status und Änderungszeitpunkt. Ergänzend wurden Grid und Abstände sowie der bestehende Detailseiten-Abgleich als Schnittstelle gelesen. Der Audit basiert nicht allein auf Seed-Dateien.

Weitere Belege: `docs/handbook/content-matrix.md`, `docs/handbook/local-review.md`, `docs/handbook/token-pairs.json`, `src/collections/Pages.ts`, `src/docs/page-templates.ts`, `src/app/(docs)/docs.css` und der vollständige Tokenbestand unter `src/contracts/libraries/shadcn/5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed/tokens.json`. Der dokumentierte Token-Dateihash lautet `52171cae1c65df3af3268f2e12017cd315c13c3a36c3db587a55256511698b9b`. Browsermessungen aus local-review wurden als damalige Beobachtungen gelesen, in diesem Audit nicht wiederholt. CSS-Lesen beweist keine erfolgreiche Darstellung im Browser.

CMS-Zugriffe riefen ausschliesslich Leseoperationen auf. Die ersten Initialisierungen verwendeten die Standardkonfiguration mit automatischem Schemaabgleich; der abschliessende Published-/Draft-Abgleich verwendete ausdrücklich `push:false` und eine schreibgeschützte Datenbanksitzung. Es wurde kein CMS-Inhalt geändert. Externe Quellen sind unten als vorhandene Referenzen oder noch erforderliche Recherche ausgewiesen; in diesem Durchgang fand keine neue externe Quellenprüfung statt.

## Was der Bestand tatsächlich leistet

| Unterseite | Vollständiger inhaltlicher Bestand | Urteil und konkrete Folge |
| --- | --- | --- |
| Grundlagen, ID 17, `shadcn-grundlagen`, Stand 13.11. | Zwei Abschnitte: Rollen statt Einzelwerte, einheitliche Abstandslogik; Herkunft der Farbrollen und technische Tokens in Contracts. Keine ausgefüllte Vorlage. | Nützlicher Ansatz, aber kein Wegweiser für reale Gestaltungsentscheidungen. Schrift, Form, Bewegung und wahrnehmbare Hierarchie sind nicht zusammengeführt. Als kurzen visuellen Einstieg neu ordnen. |
| Farben und Tokens, ID 9, `shadcn-farben`, Stand 17.11. 22:59 UTC | Vier ausgefüllte Grundlagenfelder; Auswahl, Hierarchie, Status/Interaktion, Themes, Review, offene Entscheidungen, Quellen; zwei textliche Do/Don't-Blöcke; ein Bildblock; späterer lokaler Abgleich mit Exportumfang, sechs Kontrastpaaren und CSS-Abweichung. | Inhaltlich tragfähig, aber zu viele nacheinander angehängte Erklärungsebenen. Regeln, Nachweise und offene Entscheidungen stehen teilweise im Widerspruch. Die Farbpaare müssen den Einstieg tragen und die Anwendung unmittelbar erklären. |
| Themes und Zustände, ID 43, `shadcn-themes-und-zustaende`, Stand 17.11. | Ein Absatz zum Paarprinzip und dunklem Theme, shadcn-Link, ein Do für Grundfläche/Aktion/Feld/Fehler/Fokus/deaktiviert, ein Don't gegen isolierten Farbtausch. Keine ausgefüllte Vorlage. | Nahezu vollständig eine Kurzfassung der Farbseite. Eigenständig nur sinnvoll als angewandte Vergleichsseite für gleiche Inhalte über Themes und kombinierte Zustände. |
| Typografie und Form, ID 10, `shadcn-typografie`, Stand 13.11. | Inter mit Systemfallback; kurze Titel-/Abschnitts-/Hilfetexthierarchie; angeblicher Basisradius 7 px und grössere Radien für grosse Flächen. Keine Vorlage, kein Schriftmuster. | Schrift wird behauptet, aber nicht als Hierarchie erfahrbar. Form ist ein fremdes zweites Thema. Der 7-px-Wert widerspricht der pauschalen Lesart des lokalen Komponentenexports. Trennen. |
| Abstände und Grössen, ID 18, `shadcn-abstaende`, Stand 13.11. | 4–8 px zwischen Label/Feld/Hilfe; 12–16 px innerhalb einer Gruppe; 24–48 px zwischen Gruppen; schmale Flächen, lange Labels, Zoom, Linkhinweis Layouts. Keine Vorlage oder Abbildung. | Zahlen werden ohne Herkunft wie verbindliche Skala gelesen. Kein Nachweis für eine allgemeine Systemskala, keine Erklärung der Wechselwirkung mit Inhalt und Bedienfläche. |
| Icons, Bewegung und Elevation, ID 19, `shadcn-icons-bewegung`, Stand 13.11. | Je ein kurzer Absatz: konsistente bekannte Symbole und zugängliche Namen; kurze Übergänge/reduzierte Bewegung; Karten durch Konturen/Abstand und stärkere Ebenen für Overlays. | Drei unabhängige Entscheidungen sind in einer Resteseite versteckt. Kein konkretes Icon, keine zeitliche Demonstration, keine Gegenüberstellung von Ebenen. In drei zielgerichtete Inhalte aufteilen, Form mit Ebenen verbinden. |
| Grid und Abstände, ID 11, `shadcn-layout`, Stand 13.11., Schnittstelle | Behauptet 4/8/12 Spalten unter 640/ab 640/ab 1024 px, 12/16/24 px Lücken als Referenzregeln; wiederholt 4/8/12/16/24/32/48 px; Beispiel zum Stapeln von Feldern. | Führende Abstandserklärung doppelt vorhanden. Rasterzahlen dürfen nicht still zur Konzern- oder Plattformvorgabe werden. Layout-Verantwortung erhält diese Befunde und entscheidet über die Rasterseite. |

### Widersprüche, die vor der gestalterischen Ausarbeitung verschwinden müssen

Die Farbvorlage behauptet noch, die Zuordnung zur Designbibliothek **und geprüfte Kontrastpaare** fehlten. Der spätere Abgleich liefert bereits sechs berechnete opake sRGB-Paare. Richtig ist: sechs Tokenpaare sind berechnet; reale Oberflächen mit Transparenz, Fokus, Grenzen und verschachtelten Flächen sind nicht geprüft. Diese Trennung gehört einmal an die sichtbaren Paare, statt als Widerruf am Seitenende.

Die Farbseite führt Card, Popover, Secondary, Accent und destructive in ihrer Rollenerklärung. Im lokalen Theme-Export fehlen diese eigenen Rollen. Auch Erfolgs- und Warnrollen fehlen. Das bisherige Do «Nutze für eine Card das zusammengehörige Flächen- und Textpaar» kann deshalb als vorhandene lokale Zuweisung missverstanden werden. Die künftige Darstellung unterscheidet direkt an jeder Rolle «lokal vorhanden» von «Upstream-Konzept; lokale Zuordnung offen». Fehlende Werte werden niemals mit Portal-CSS aufgefüllt.

Der Export enthält acht neutrale Palettenfarben und je acht Theme-Rollen. Im hellen Theme ist primary/primaryForeground `#171717`/`#FAFAFA`; im Portal-CSS `#18181b`/`#ffffff`. Auch foreground, muted-foreground und border weichen ab: Portal `#18181b`, `#55555e`, `#e1e1e5`; Export hell `#0A0A0A`, `#737373`, `#E5E5E5`. Ein nur auf primary beschränkter Korrekturhinweis unterschätzt daher das Problem. Die Dokumentationsoberfläche darf ihr eigenes Erscheinungsbild haben; eine ausdrücklich als Systembeispiel bezeichnete Fläche muss dagegen die ausgewiesene Quelle verwenden.

«7 px Basisradius» auf Typografie/Form ist keine Zusammenfassung des Exports: Input und Standardbutton haben 10 px, kleiner Button 6 px, Checkbox 4 px, Switch eine Pillenform. Die 7 px gehören als beobachteter Portalstand in den Abgleich, nicht als allgemeine Designregel auf eine Grundlagenseite. Ebenso sind Input 14 px/20 px, 32 px Höhe und 4/10 px Padding komponentenspezifisch. Sie definieren keine Fliesstext-, Abstands- oder allgemeine Bedienflächenskala.

Die Grundlagen-Abstandsseite und Grid-Seite duplizieren die Zahlenreihe 4–48 px. Der jüngere Detailentwurf sagt dagegen ausdrücklich, eine allgemeine Skala fehle im Export. Diese Aussagen sind vereinbar, wenn die Zahlenreihe als bisheriger redaktioneller Vorschlag bezeichnet wird; heute ist dieser Status auf den älteren Seiten nicht erkennbar. Es braucht eine explizite Entscheidung über die Skala, keinen dritten Text mit denselben Zahlen.

## Zielseitenbaum und Verantwortung

Unter **Grundlagen** liegen sieben fachliche Seiten: **Farbe**, **Themes und visuelle Zustände**, **Typografie**, **Abstände und Grössen**, **Form und Ebenen**, **Icons**, **Bewegung**. Der Einstieg bleibt eine eigene Übersicht. Farbe und Themes bleiben getrennt, weil die eine Seite Rollen auswählen lässt und die andere die Konsistenz einer vollständigen Oberfläche prüfbar macht. Form und Ebenen teilen eine Seite, weil Kontur, Radius, Fläche und Schatten gemeinsam Zugehörigkeit und Überlagerung erklären. Bewegung braucht einen eigenen zeitlichen Erklärraum; Icons eine semantische Auswahlhilfe.

Raster/Container und Seitenaufbau bleiben bei Layout. Bildsprache erhält vorerst keine leere neue Seite: Der Icon-Inhalt erklärt die Grenze zwischen funktionalem Zeichen, Illustration und dekorativem Bild; eine spätere Bildsprache-Seite benötigt eine reale Markenentscheidung. Native Schrift-, Farb- oder Bewegungsrezepte werden nicht vorweggenommen.

Die Slugs `shadcn-farben`, `shadcn-typografie`, `shadcn-abstaende` und `shadcn-themes-und-zustaende` bleiben bestehen. Für die Aufteilung der Sammelseite sind neue Ziele `shadcn-form-und-ebenen`, `shadcn-icons` und `shadcn-bewegung` vorzubereiten. Die alte URL bleibt während der Migration als kurzer Inhaltswegweiser mit drei konkreten Zielverweisen erreichbar. Vor einer späteren Weiterleitung sind Portal-, CMS- und MCP-Verweise zu inventarisieren. Keine parallelen Volltexte dauerhaft erhalten.

## Darstellungsplan je Zielseite

### Grundlagen: eine Oberfläche lesen lernen

Die Einstiegsfrage lautet: «Woran erkennt eine Person, was zusammengehört, was wichtig ist und was sie tun kann?» Direkt danach steht ein einziges reduziertes, aber inhaltlich glaubwürdiges Beispiel: Titel, Erläuterung, zwei zusammengehörige Eingaben, Hilfetext und Aktion. Es ist ein Lehrbeispiel, kein neuer Produktscreen. Nummerierte Hinweise zeigen sechs Beiträge: Schrift für Hierarchie, Abstand für Beziehung, Farbe für Gewichtung, Form für Begrenzung, Icon für ergänzende Bedeutung und Bewegung für Veränderung.

Danach folgt ein kurzer Entscheidungsweg in Aufgabenform: Bedeutung gewichten → Lesereihenfolge und Gruppen schaffen → Zustände kenntlich machen → unter anderen Bedingungen prüfen. Die sieben Unterseiten werden mit ihrer konkreten Frage verlinkt, nicht mit sieben generischen Teasern. Ein kompakter Abschnitt erklärt den Geltungsbereich: shadcn als öffentliche Referenz; lokale Werte und offene Zuordnungen; bisher Web-Nachweise, native Umsetzung offen.

Das annotierte Beispiel muss ohne Hover vollständig lesbar sein. Optionales Aktivieren eines Hinweises hebt nur dessen Bereich hervor, verschiebt keinen Inhalt und verbirgt keine andere Erklärung. Auf schmaler Breite folgen die nummerierten Erklärungen unter dem Beispiel in derselben Reihenfolge. Erfolgskriterium: Eine Person kann eine fehlerhafte Gruppierung benennen und weiss, auf welcher Seite sie die passende Entscheidung findet.

### Farbe: Rollen und tatsächlich vorhandene Paare

Der Einstieg zeigt drei grosse, beschriftete Paare aus dem Export: Grundfläche/Text, primäre Aktion/Text und unterstützender Text auf Grundfläche. Jeder Ausschnitt benutzt denselben kurzen Inhalt und zeigt Rollenname, Theme, Herkunft und berechneten Kontrast. Hell/Dunkel steht zunächst vergleichbar nebeneinander; auf schmalen Flächen folgen die beiden Ansichten mit wiederholter Theme-Beschriftung. Werte sind sekundär aufklappbar, die Bedeutung ist immer sichtbar. Es ist keine bunte Palette ohne Einsatzkontext.

Die Inhaltsfolge: (1) Fläche und Text als Paar wählen; (2) visuelle Hierarchie am gleichen Inhalt vergleichen; (3) lokale Rollen gegenüber noch offenen Rollen unterscheiden; (4) Status und Interaktion auseinanderhalten; (5) Kontrast im tatsächlichen Kontext beurteilen; (6) aktuelle offene Entscheidungen und Quellen. Die acht Palettenfarben sind ein nachgeordnetes Inventar. Der Haupttext erklärt, warum ein bekannter Farbwert allein die Aufgabe nicht beschreibt.

Eine zweite Abbildung zeigt dieselbe kleine Inhaltsgruppe einmal mit klarer Hauptaktion, einmal mit gleich stark hervorgehobenen Nebeninformationen. Die Erläuterung benennt die verlorene Priorität; sie behauptet keine universelle Ein-Hauptaktion-Regel für eine ganze Seite. Eine dritte Gegenüberstellung zeigt Fehlertext plus Markierung und zusätzlich sichtbaren Fokus. Wo die lokale Fehlerrrolle fehlt, bleibt sie ausdrücklich ein schematischer Designvorschlag mit ungelöster Farbzuordnung. Kein rotes Beispiel darf heimlich eine neue Systemfarbe etablieren.

Der bestehende Bildblock bleibt als evidenzgebundene Basis verwendbar, wird aber in semantische HTML-Inhalte mit lesbaren Texten und optionalem Exportbild überführt. Die sechs bestehenden Zahlen erscheinen nur einmal in einer Datendarstellung mit Quelle und Prüfumfang. Ein aufklappbarer Vergleich «Export und aktuelle Vorschau» bündelt die Abweichungen. Die allgemeinen Rollenabsätze der Vorlage werden in diese Folge integriert, nicht zusätzlich vorangestellt.

### Themes und visuelle Zustände: Bedeutung über Bedingungen hinweg erhalten

Diese Seite erklärt keine zweite Farbpalette. Ihr Kern ist ein kontrollierter Vergleich derselben kleinen Oberfläche in hell/dunkel: dieselben Texte, dieselbe Auswahl, derselbe Fehler und derselbe Fokus. Der Wechsel ändert die Darstellung, nicht Aufgabe oder Auswahl. Die Inhaltsfolge lautet: unveränderte Bedeutung → gleichzeitig mögliche Zustände → Flächen und Überlagerungen → angebotene Theme-Auswahl und deren Geltungsbereich → Prüfweg und bekannte Lücken.

Eine kompakte Vergleichsmatrix zeigt Ruhe, Fokus, Auswahl, deaktiviert sowie Fehler mit Fokus. «Hover» wird nur als zusätzliche Web-Bedingung geführt; es darf keine Information enthalten, die ausschliesslich dort zugänglich ist. Die Matrix zeigt keine unimplementierten Zustände als funktionierende lokale Komponente. Belegt vorhandene Zustände werden live dargestellt; übrige sind ausdrücklich beschriftete Studien mit Link zum zuständigen Komponenten-/Patternplan.

Die zentrale Lernaufgabe ist das Erkennen von Kollisionen: Verschwindet Fokus im Fehlerzustand? Wird Auswahl mit Fehler verwechselt? Wird unterstützender Text auf einer abgesetzten Fläche unlesbar? Das Umschalten steuert nur den Demonstrationsbereich. Die Dokumentationsnavigation wechselt nicht überraschend mit. Alle Vergleichsinhalte bleiben als Text verfügbar; auf schmalen Flächen wird pro Zustand hell/dunkel untereinander gruppiert, damit Lesende nicht am Ende einer langen Tabelle zurücksuchen müssen. Theme-Verfügbarkeit und native Systempräferenzen bedürfen später eigener Plattformnachweise.

### Typografie: an realem Text statt an einer Grössenleiter erklären

Die Seite beginnt mit einem vollständigen kurzen Textmuster: Seitentitel, Einführung, zwei Abschnitte, Fliesstext, beschriftete Eingabe mit Hilfe und eine kleine Zahlenzeile. Eine Randannotation nennt jeweils die Rolle und erklärt ihren Unterschied. Die Frage lautet «Welche Information wird zuerst gelesen und wie bleibt der Rest bequem lesbar?» Das Muster verwendet keine unbeschriftete Reihe «Aa» als primäre Erklärung.

Die Inhaltsfolge: Texthierarchie und tatsächliche Überschriftenstruktur; Lauftext mit Zeilenlänge und Absatzrhythmus; Bedien- und Hilfetexte; Zahlen/vergleichbare Angaben; lange Titel und Übersetzungen; Vergrösserung und Fallbackschrift; lokale Werte und noch fehlende Rollen. Inhaltliche Formulierung, Ton und Datumsformate verweisen auf Content Design. Das Grundlagenkapitel behandelt deren visuelle Lesbarkeit.

Eine Breitensteuerung mit wenigen benannten Stufen demonstriert am selben Absatz Umbruch und Zeilenlänge. Daneben steht ein kurzer, konstanter Kommentar zur beobachtbaren Wirkung. Ein zweiter Vergleich zeigt einen langen Titel und lange Hilfetexte mit Vergrösserung; nichts wird abgeschnitten oder durch fixe Höhe versteckt. Zahlenbeispiele zeigen, wann Ausrichtung Vergleich erleichtert. Konkrete systemweite Schriftgrössen werden erst nach einer Rollenentscheidung festgelegt. Der Export belegt Inter sowie Button/Input-Grössen, nicht die gesamte Dokumenttypografie. Dass Inter im CSS genannt wird, beweist noch nicht, dass die Schrift tatsächlich geladen wird.

### Abstände und Grössen: Beziehungen sichtbar machen

Der Einstieg zeigt zwei Fassungen derselben Feldgruppe. Inhalt und Schrift bleiben identisch; nur die Abstände unterscheiden sich. In der ersten Fassung sind Label, Feld und Hilfe erkennbar verbunden und zwei Gruppen getrennt. In der zweiten konkurrieren gleichmässig grosse Lücken mit dieser Zuordnung. Masslinien werden auf Wunsch zugeschaltet; die inhaltliche Gruppierung ist auch ohne Linien erkennbar.

Danach folgen vier Entscheidungen: Nähe innerhalb einer Einheit, Abstand zwischen Einheiten, Innenraum eines begrenzten Bereichs, Trennung von sichtbarer Form und erreichbarer Bedienfläche. Erst danach folgt eine Tabelle der vorgeschlagenen Skala mit Rollen und Einsatzbeispielen. Die bestehende Reihe 4/8/12/16/24/32/48 px wird nicht automatisch übernommen: Sie ist als bereits publizierter Vorschlag zu bewerten und gegen reale Inhalte zu prüfen. Nicht jeder Unterschied braucht einen neuen Wert; gleichzeitig dürfen grosse Schrift und lange Hilfetexte nicht einer fixen Dichte geopfert werden.

Eine zweite Darstellung legt bei einem kleinen sichtbaren Kontrollzeichen dessen tatsächliche Bedienfläche offen. Die Lektion ist die Unterscheidung, nicht die Behauptung einer pauschalen Plattformmindestgrösse. Konkrete Anforderungen sind im anschliessenden Quellenreview je Plattform zu prüfen. «Kompakt/komfortabel» ist nur dann eine angebotene Auswahl, wenn dafür ein begründetes Dichtemodell ausgearbeitet wurde. Responsive Darstellung lässt Gruppen umbrechen und erklärt, welche Beziehung erhalten bleibt; sie skaliert nicht einfach alle Abstände proportional zur Fensterbreite. Raster, Container und Spaltenabstände werden ausschliesslich verlinkt.

### Form und Ebenen: Gruppierung und Überlagerung unterscheiden

Der Einstieg vergleicht denselben Inhalt als offene Gruppe, begrenzte Card und schwebende Fläche. Anmerkungen erklären, was jeweils zusätzlich signalisiert wird. Kontur, Fläche und Abstand werden als gemeinsam wirkende Hinweise gezeigt; Radius ist keine alleinige Bedeutungsträgerin. Der zweite Teil zeigt eine überlagerte Fläche im Kontext mit Anker oder auslösendem Element und dem darunterliegenden Inhalt. Das illustriert räumliche Beziehung; Fokusführung und Schliesslogik bleiben bei Dialog-/Popover-Komponenten und Patterns.

Die Inhaltsfolge: Wann braucht Inhalt eine Grenze? → Radius nach Rolle und Grösse → Kontur/Fläche/Schatten zusammendenken → überlagerte Ebenen → hell/dunkel und reduzierte visuelle Effekte → vorhandene Werte und offene Regeln. Eine kleine Radiusübersicht nennt die tatsächlichen Komponentenwerte 4, 6, 10 und Pillenform und zeigt ausdrücklich deren jeweiligen Kontext. Sie macht daraus keine neue systemweite Skala. Der bisherige 7-px-Satz entfällt als allgemeine Regel.

Die Beispielstudie erlaubt «Kontur», «Schatten», «beides» einzeln zu vergleichen, bleibt aber ohne Interaktion verständlich. Es werden keine unbelegten Elevations- oder Schattenstufen erfunden. Auf schmaler Fläche stehen die drei begründeten Beispiele untereinander. Schatten dürfen keinen Seitenüberlauf erzeugen, Beschriftungen dürfen nicht auf der überlagerten Fläche verdeckt werden. Die Bedienung eines echten Overlays wird nicht als Nebeneffekt dieses Vergleichs eingeführt.

### Icons: Bedeutung vor Zeichenbibliothek

Die Seite startet mit drei Anwendungen desselben Zeichens: ergänzend neben eindeutigem Text, allein als benannte Aktion und als erklärungsbedürftiges Symbol. Die Annotationen unterscheiden sichtbare Bedeutung, zugänglichen Namen und rein dekorative Verwendung. Ein zugänglicher Name ersetzt nicht automatisch eine verständliche sichtbare Beschriftung für alle Menschen.

Danach folgen Auswahl nach Bedeutung, Konsistenz innerhalb einer Aufgabe, Text/Icon-Kombinationen, optische Grösse und Ausrichtung, Farbe/Status, Sprach- und Richtungsabhängigkeit sowie Herkunft/Lizenz der tatsächlichen Iconbibliothek. Eine kleine Gegenüberstellung zeigt unterschiedliche Zeichen für dieselbe Handlung und dasselbe Zeichen für zwei Handlungen; beide Konflikte werden konkret benannt. Richtungszeichen werden erst nach semantischer Prüfung gespiegelt; Logos und nicht gerichtete Gegenstände werden nicht pauschal gedreht.

Ein Iconkatalog ist nachgeordnet und erst sinnvoll, wenn Bibliothek und freigegebener Umfang bekannt sind. Der gelesene Tokenexport enthält keine vollständige Iconskala oder benannte Bibliothek. Ein Filter darf nur belegte lokale Zeichen durchsuchen und keine Upstream-Auswahl als lokale Unterstützung ausgeben. Für den ersten Ausbau reichen sorgfältig ausgewählte statische Fälle. Button-Bedienung und Tooltipverhalten gehören in Komponenten, Bildalternativen und Textformulierung in die angrenzenden Kapitel.

### Bewegung: Veränderung nachvollziehbar machen

Ein explizit gestarteter Vergleich zeigt denselben Zustandswechsel in drei Fassungen: ohne Bewegung, mit zurückhaltender Beziehung zwischen Ausgang und Ziel, mit ablenkender Bewegung. Die mittlere Fassung erklärt räumliche oder zeitliche Kontinuität; die dritte erklärt anhand der Aufgabe, was Aufmerksamkeit unnötig bindet. Die Seite startet nicht mit einer Schleife und bleibt ohne Abspielen lesbar.

Die Inhaltsfolge: Zweck eines Übergangs; Unterschied zwischen Rückmeldung und Dekoration; Anfang/Ziel und Unterbrechbarkeit; reduzierte Bewegung mit gleichwertiger Information; laufende Prozesse; konkrete Dauern und Kurven erst nach Systementscheidung. Ein Vorher-/Nachher-Standbild mit Pfeilen ist das zugängliche und exportierbare Äquivalent. Eine Darstellung zum Laden erklärt nur die Bewegung eines Indikators; Fehlermeldungen, Prozessdauer und Wiederherstellung bleiben beim Systemzustands-Pattern.

Es gibt Start, Pause beziehungsweise Beenden und Wiederholen mit klarer Beschriftung. Die Präferenz für reduzierte Bewegung wird berücksichtigt; ein bewusst angeforderter Vergleich erhält eine unbewegte Alternative. Keine Animation verändert nebenbei die Dokumenthöhe oder Fokusposition. Aus den CSS-Transitions der Portal-Cards wird keine verbindliche Dauer für das System abgeleitet. Der lokale Export liefert keine allgemeine Bewegungsskala. Das ist eine offene Designentscheidung, kein Anlass für eine beliebige Zahlenliste.

## Gemeinsame Qualität ohne einheitliches Seitenraster

Kohärenz entsteht durch dieselbe Begrifflichkeit, nachvollziehbare Quellen, klar beschriftete Beispiele und konsistente Interaktionsregeln. Die Seiten erhalten bewusst verschiedene Hauptdarstellungen: Paarvergleich, Zustandsmatrix, Textspecimen, Gruppierungsdiagramm, Ebenenstudie, Bedeutungsvergleich und zeitlicher Ablauf. Keine Pflicht, jede Seite mit demselben Hero, drei Cards und einer Do/Don't-Zeile zu füllen.

Für alle Lehrbeispiele gilt: eine konkrete Frage, unveränderte Vergleichsinhalte, benannte veränderte Variable und ein Satz zur Schlussfolgerung. Beschriftung und Kernaussage liegen als Text vor. Farbe, Position oder Bewegung allein tragen keine Erklärung. Breite Tabellen bekommen eine sachgerechte schmale Darstellung; das Bild in Originalgrösse ist eine Ergänzung und kein Ersatz für lesbare eingebettete Inhalte. Interaktive Darstellungen sind per Tastatur bedienbar und besitzen eine sinnvolle statische Ausgangsfassung.

## CMS-Bedarf und Inhaltsmigration

Die bestehenden vier Grundlagen-Textfelder eignen sich als redaktionelle Prüffragen, aber nicht als vier zwangsläufig vor dem Inhalt gerenderte Kapitel. Pro Aussage gibt es künftig genau einen führenden Ort. Summary fasst das Nutzerziel zusammen; Langtext erklärt Entscheidungen; strukturierte Nachweise tragen Herkunft und Prüfumfang. Eine Migration muss erhaltene Inhalte semantisch zuordnen, nicht einfach zusätzliche Abschnitte anhängen.

Der wichtigste fehlende Block ist eine **neutrale Abbildung mit Legende**: Bild/Visualtyp, aussagekräftiger Titel, Lernfrage, Erklärung, Alternativtext beziehungsweise längere Textalternative, Datenquelle und Revision. Heute wird jede Abbildung als «Do» verpackt. Ein Tokenpaarvergleich ist jedoch weder eine Handlungsempfehlung noch ein positives Gegenbeispiel.

Für Datenvergleiche werden geordnete Einträge mit Rolle, Kontext, Wertreferenz, Belegstatus und kurzen Anmerkungen benötigt. Farbwerte sollen aus der angegebenen Tokenrevision aufgelöst werden; redaktionelle Felder speichern keine unkontrollierte zweite Palette. Fehlende Tokens bleiben explizit unaufgelöst. Für interaktive Studien braucht es einen engen registrierten Darstellungsmodus und geprüfte Parameter, keine beliebigen Scripts im Richtext. Eine statische Fassung und die Erklärtexte gehören zum selben Datensatz und müssen auch über MCP verfügbar sein.

Quellen-/Entscheidungsmetadaten: Ursprung als lokale Beobachtung, externe Regel oder eigener Vorschlag; URL beziehungsweise lokaler Revisionsverweis; Prüfdatum; Geltungsbereich; konkrete offene Frage; zuständige Rolle und verknüpfte Seite. «Veröffentlicht» bleibt ein Auslieferungsstatus und ersetzt keine fachliche Prüfung. Die technische Umsetzung dieser Felder wird mit dem Pflege-/Plattformteam abgestimmt; der Plan fordert keine grosse neue CMS-Abstraktion vor der ersten guten Farbseite.

## Quellen und eigene Entscheidungen

Die lokale Tokenrevision, CSS und CMS-Inhalte sind in diesem Audit direkt geprüft. `local-review.md` liefert ältere punktuelle Browsermessungen; `token-pairs.json` liefert sechs bestehende Berechnungen. Diese Nachweise reichen für die Bestandsaussagen, nicht für eine Gesamtfreigabe.

Die bestehende Primärreferenz [shadcn Theming](https://ui.shadcn.com/docs/theming) bleibt für Rollennamen, Paarprinzip und Theme-Zuordnung zuständig. Vor der Umsetzung ist ihr aktueller Inhalt erneut zu prüfen und der verwendete Stand festzuhalten. Sie entscheidet weder Arves systemweite Typografie noch Konzernmarkenfarben, Abstände oder Native-Varianten.

Gezielter nächster Quellenreview: W3C/WAI zu Kontrast, Farbbedeutung, Nicht-Text-Kontrast, Textvergrösserung, Reflow, Textabständen, Fokus, Zielgrösse und Bewegung; für Icon-Namen die passenden WAI-Beispiele und tatsächlich gewählte Zeichenbibliothek. Normative Schwellenwerte und Ausnahmen werden erst nach diesem Review in die Inhalte übernommen. Apple- und Android-Primärquellen sind erforderlich, sobald konkrete native Regeln geplant werden; aus Webbeispielen entsteht keine native Freigabe.

Eigene redaktionelle Entscheidungen dieses Plans sind der Zielseitenbaum, die Lernfragen, die sieben unterschiedlichen Darstellungsformen, die Konsolidierung der Abstandsführung sowie die direkte Kennzeichnung unvollständiger lokaler Rollen. Offen bleiben insbesondere verbindliche Palette/Theme-Abdeckung, Statusrollen, systemweite Schriftrollen, Abstandsskala, Bedienflächengestaltung, Radius-/Ebenenmodell, Iconbibliothek und Bewegungsparameter. Diese Entscheidungen werden nicht mit dem Wort «shadcn» legitimiert.

## Umsetzung in begründeter Reihenfolge

**P0 – belastbare Farb- und Quellenreferenz.** Den widersprüchlichen Satz zu fehlenden Kontrastpaaren korrigieren, lokale und Upstream-Rollen direkt unterscheiden, aktuelle Abweichungen in einer Stelle bündeln. Eine Quelle für System-Lehrbeispiele festlegen; Portalrahmen und Systembeispiel gestalterisch auseinanderhalten. Neutralen Abbildungsblock anhand Farbe erproben. Ausgang ist der vorhandene veröffentlichte Inhalt, nicht ein neuer Seed.

**P1 – die tägliche Gestaltungsarbeit ermöglichen.** Typografie und Abstände als konkrete Specimens ausarbeiten, gleichzeitig Radius aus Typografie entfernen und Abstandsduplikat aus Grid konsolidieren. Danach Form/Ebenen erstellen. Jede Seite braucht ein echtes, geprüftes Beispiel vor einer umfangreichen Textausweitung. Themes baut auf der geklärten Farbquelle und den vom Komponenten-Team belegten Zuständen auf.

**P2 – Bedeutung und Veränderung ergänzen.** Icons und Bewegung mit klaren lokalen Bibliotheks-/Parameterentscheidungen ausarbeiten. Die alte Sammelseite erst dann auf die drei Ziele umstellen. Den Grundlagen-Einstieg zuletzt aus den realen fertigen Beispielen komponieren, damit er die tatsächlichen Fähigkeiten zusammenführt. Wenn ein Produkt vorher bewegungs- oder iconabhängige Aufgaben benötigt, wird das betroffene Paket begründet vorgezogen.

## Abnahme und Übergaben

Eine Grundlage ist inhaltlich abnahmefähig, wenn eine gestaltende Person die erklärte Entscheidung an einem neuen Beispiel anwenden und ihre Grenzen benennen kann. Für Farbe muss sie ein tatsächlich vorhandenes Paar wählen und eine unaufgelöste Rolle erkennen. Für Themes muss sie eine Zustandskollision finden. Für Typografie muss sie Hierarchie und lange Inhalte beurteilen. Für Abstände muss sie Gruppen und Bedienflächen unterscheiden. Für Form/Ebenen muss sie Gruppierung und Überlagerung auseinanderhalten. Für Icons muss sie eine verständliche Benennung wählen. Für Bewegung muss die Information ohne Animation erhalten bleiben.

Konkrete Prüffälle vor Veröffentlichung: lange deutsche Beschriftung und mehrzeiliger Titel; schmale Ansicht; Textvergrösserung; Tastaturbedienung sämtlicher Vergleichssteuerungen; dunkle und helle Beispieldarstellung, sofern angeboten; reduzierte Bewegung; Fallback ohne interaktive Erweiterung. In Farb- und Formenbeispielen werden die tatsächlich gerenderten Werte mit der angegebenen Revision verglichen. Berechnete Tokenpaare und gemessene Browserpaare sind getrennte Nachweise. Die aktuellen Prüfungen dieses Audits sind lediglich Lesen und Bestandsvergleich; diese späteren Abnahmetests sind noch nicht ausgeführt.

Die publizierte Seite darf keine gegensätzlichen Zeitstände in Template, Text und Nachtrag enthalten. Jede Zahl hat einen Geltungsbereich und Ursprung. Fehlende lokale Rollen, native Nachweise oder Contractfähigkeiten bleiben sichtbar offen. Veröffentlichte Portal- und MCP-Fassungen müssen dieselben Regeln, Grenzen, Textalternativen und Quellen liefern; ein Agent darf keine entscheidende Aussage nur aus einer Grafik erraten müssen.

Übergabe an **Komponenten**: belegte Zustände und kombinierter Fehler/Fokus; reale Schrift-/Radius-/Grössenbindungen; sichtbare Form gegenüber Bedienfläche. An **Patterns**: Statusbedeutung, nichtfarbliche Rückmeldungen und Ladebewegung; keine Verdopplung von Validierungszeitpunkten oder Wiederherstellungsabläufen. An **Layout**: führende Abstandserklärung hier, Raster und Container dort; die bislang pauschalen 4/8/12-Spaltenregeln prüfen und als konkreten Referenzvorschlag kennzeichnen. An **Content**: Formulierung und Lokalisierung, während Grundlagen die visuelle Lesbarkeit erklären. An **Plattformen/Pflege**: Geltungsbereich, Quellenstände, offener Native-Status und notwendige Metadaten. Keine dieser Übergaben ändert im vorliegenden Auftrag CMS, Contracts, Anwendung oder Veröffentlichung.
