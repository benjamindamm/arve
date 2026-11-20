# Inklusive Gestaltung: Themenaudit und Darstellungsplan

Stand: 18. November 2026. Gegenstand ist Arves lokales shadcn-Referenzsystem. Der Plan beschreibt Inhalte, Darstellungen und spätere Prüfwege; er bescheinigt weder Konformität noch rechtliche Erfüllung. Neue CMS-Inhalte, Anwendung und Contracts wurden nicht verändert.

## Ausgangspunkt und Evidenz

Die zentrale Seite «Barrierefreiheit» (CMS-ID 24, `shadcn-barrierefreiheit`, Status veröffentlicht, letzter Änderungsstand 13.11.2026, 12:43:02.693 UTC) enthält drei kurze Absätze: Tastatur/Fokus samt Dialogrückkehr; Kontrast/Umbruch samt nicht ausschliesslich farblicher Bedeutung; Namen/Rückmeldungen samt Aufforderung, den Prüfumfang zu dokumentieren. Sie erklärt weder eine konkrete Gestaltung noch einen reproduzierbaren Prüfweg. Ihre Summary «Tastatur, Fokus, Kontrast und Statusmeldungen» ist enger als die notwendige Aufgabe.

Gelesen wurden die tatsächlichen veröffentlichten CMS-Datensätze mit Summary, sämtlichen gefüllten Vorlagenfeldern sowie vollständigen Text- und Do/Don't-Blöcken der IDs 8–24, 43–50 und 52. Damit sind alle vorhandenen Grundlagen-, Komponenten- und Patternseiten einschliesslich ihrer Übersichten sowie Content Design, Grid, Seitenstruktur und Detailseite berücksichtigt. Die Lektüre erfolgte direkt über PostgreSQL mit `default_transaction_read_only=on` und Produktionsumgebung; Payload wurde nicht initialisiert, daher war kein Schema-Push möglich. Keine CMS-Schreiboperation wurde ausgeführt. Entwürfe und Versionshistorien wurden in diesem Themenaudit nicht verglichen.

Für Zuständigkeiten und bereits untersuchte technische Grenzen dienen [foundations.md](foundations.md), [components.md](components.md) und [patterns.md](patterns.md). Deren technische Beobachtungen werden hier als vorhandene Berichte übernommen, nicht als neu durchgeführte Laufzeitprüfungen. `src/collections/Pages.ts` wurde für den Darstellungsbedarf gelesen. Die unten genannten WCAG-Abschnitte und W3C-Internationalisierungshinweise wurden gezielt über BrowserOS neo geprüft. Es wurden keine neuen Tastatur-, Screenreader-, Kontrast-, Zoom- oder Touchtests der Anwendung ausgeführt.

## Was die Nachbarseiten bereits beitragen

| Bestand | Inklusionsbezogener Inhalt | Konsequenz für diesen Themenbereich |
| --- | --- | --- |
| Grundlagen, ID 17 | Rollen und konsistente Abstände | Prinzipien sind vorhanden; kein eigener Prüfstand. Einstieg verlinkt hierher, statt neue Gestaltungswerte zu definieren. |
| Farben, ID 9; Themes, ID 43 | Nichtfarbliche Statusmerkmale, Fokus plus Fehler, Prüfung jedes Themes; sechs berechnete opake sRGB-Tokenpaare | Zentral erklären, wie ein realer Kontrastfall abgegrenzt wird. Farbseite behält konkrete Paare und Quellenrevision. Der alte Satz «geprüfte Kontrastpaare fehlen» muss mit dem späteren Teilnachweis abgeglichen werden. Die Tokenrechnung beweist weder Fokus-/Randkontrast noch Browserdarstellung. |
| Typografie/Form, ID 10; Abstände, ID 18; Grid, ID 11 | Umbruch, lange Labels, Zoom, Schriftvergrösserung; bisher feste Raster-/Abstandszahlen | Zentral Textvergrösserung, Reflow und Textabstände als unterschiedliche Prüfbedingungen erklären. Keine der bisherigen Zahlen wird hier zur allgemeinen Zugänglichkeitsvorgabe. |
| Icons/Bewegung/Elevation, ID 19 | Zugänglicher Name für Icon-Buttons, keine zusätzliche Ansage dekorativer Icons; kurze Übergänge, reduzierte Bewegung | Grundlagen erklären Symbolwahl und Bewegungsgestaltung. Hier werden Namensprüfung und Informationsgleichwertigkeit ohne Bewegung erläutert. «Kurz» allein ist kein nachgewiesenes Sicherheits- oder Normkriterium. |
| Komponenten, ID 13; Auswahl, ID 50 | Aufgabenwahl; Warnung vor Gleichsetzung Upstream/Spartan | Vorhandensein einer Demo klar von Prüfung einer Implementierung unterscheiden. Vier lokale Komponenten sind kein geprüfter Gesamtkatalog. |
| Button, ID 8 | Verständliches Aktionslabel | Sprachbedienung und sichtbares Label/zugänglicher Name ergänzen; Folge und Fokus bleiben abhängig vom Ablauf. |
| Input, ID 14 | Sichtbares Label, Hilfe/Fehler, Tastatur/Screenreader, Bildschirmtastatur, lange Werte, Fokus mit Fehler | Stärkster Bestand. Er enthält jedoch Gestaltungsziele, die der beschriebene Input-Contract nicht vollständig abdeckt. Kein allgemeines Prüfsiegel aus Labelbindung ableiten. Fehlerzuordnung am Feld und Fokus nach Submit auf zwei zuständige Ebenen verteilen. |
| Checkbox, ID 15; Switch, ID 16 | Unabhängige Auswahl, stabiles Switch-Label, unmittelbare Wirkung als Konvention | Konkrete Tastatur-, Zustands- und Labelaktivierungsfälle fehlen im CMS. Laut Komponentenplan benutzen Demos ARIA-Buttons, gepinnte Vorlagen native Inputs: Nachweise müssen diese Implementierungen auseinanderhalten. |
| Patterns, ID 12; Formular, ID 20; Felder/Fehler, ID 45 | Fehlerkorrektur ohne Verlust; Verweise zu Feldern; Rückmeldungen ohne visuelle Suche; kein Fokusversatz während laufender Korrektur | Zentral Methode und Kriterien erklären. Formular verantwortet Fokusziel nach Absenden, Prüfzeitpunkt, Persistenz und Wiederaufnahme. ID 45 wird gemäss Patternplan konsolidiert. |
| Suche/Filter, ID 21; Auswahl/Suche, ID 46 | Angewendete Filter, keine Treffer, Tastatur, gewählter Wert | Sichtbare Ergebniszahl allein genügt nicht als nichtvisuelle Rückmeldung. Aktiver Kandidat, übernommener Wert und Filteranwendung müssen im Pattern unterscheidbar bleiben. |
| Laden/Leer/Fehler, ID 22; Systemzustände, ID 49 | Unterschiedliche Ursachen, Erhalt von Eingaben/Filtern; Statusansagen prüfen | Zentral zeigen, wann eine Ankündigung ohne Fokus sinnvoll ist. Pattern bestimmt Zeitpunkt, Inhalt und Störungen. Nicht jede Änderung reflexhaft als dringende Ansage behandeln. |
| Destruktive Aktion, ID 47 | Konsequenz und Fokus nach Abbruch/Abschluss | Pauschales «zum Auslöser zurück» aus zentraler Seite relativieren: Nach dessen Entfernung braucht es ein sinnvolles anderes Ziel. Der genaue Weg gehört ins Pattern. |
| Tabellen/Listen, ID 48 | Sortierung, getrennte Zeilen-/Massenaktionen, Zugriff auf benötigte Werte in schmaler Darstellung | Semantische Beziehungen und Rückkehrkontext ergänzen. Zweidimensionale Tabellen sind ein differenzierter Reflow-Fall, kein Freibrief für Seitenüberlauf. |
| Seitenstruktur, ID 44; Detailseite, ID 52 | Zusatzinhalt folgt Hauptinhalt, Lesereihenfolge, Überschriften, Sticky-Bereiche dürfen nicht verdecken | Layout führt Regionsordnung und Umbruch; zentral erhält der Fall mit geringer Höhe und vergrössertem Text einen nachvollziehbaren Test. |
| Content Design, ID 23 | Verständliche Labels, Korrekturhinweise, lokale Formate, lange Übersetzungen | Content führt Sprache und Formate; hier Sprachkennzeichnung, Leserichtung und assistive Prüfung. RTL und gemischte Schreibrichtung sind bislang nicht ausgearbeitet. |

### Fachliche Lücken und missverständliche Zusagen

Die bestehende zentrale Seite ist ausschliesslich eine Aufforderung zum Prüfen. Es fehlt die Verbindung zwischen beobachteter Barriere, Gestaltungsentscheidung und nachvollziehbarem Ergebnis. «Prüfe Screenreader» nennt weder Aufgabe noch Umgebung noch Erwartung. «Prüfe Zoom» lässt offen, ob Textvergrösserung, Browserzoom oder tatsächlich verfügbarer Raum gemeint ist. «Prüfe Kontrast» lässt die betroffenen Paare und Zustände offen.

Eine weitere Lücke ist der Geltungsbereich: Webnachweise, native Plattformen, Contractbeschreibungen und Redaktionsempfehlungen dürfen nicht in einem einzigen Status zusammenlaufen. Der Komponentenplan belegt offene mobile und assistive Prüfungen sowie unterschiedliche Contractrevisionen und Demoformen. Diese Grenzen müssen direkt am jeweiligen Beispiel auffindbar sein.

Auch Inklusion jenseits visueller Kennwerte braucht Platz: verständliche Aufgabe, tolerante Eingabe, Korrektur ohne Datenverlust, erreichbare Hilfe und störungsarme Rückmeldungen. Hierfür sind konkrete Aufgabenbeispiele geeigneter als Personenbilder oder simulierte «Behinderungsfilter». Solche Simulationen ersetzen weder Nutzungsforschung mit betroffenen Menschen noch assistive Prüfungen.

## Zielbaum: Einstieg und vier zusammenhängende Vertiefungen

Der bestehende Slug `shadcn-barrierefreiheit` bleibt erhalten; sichtbarer Titel wird **«Barrierefreiheit und inklusive Gestaltung»**. Er wird zum Einstieg mit einer vollständigen kleinen Aufgabe, vier Wegen zur Vertiefung und einer transparenten Nachweiserklärung. Die vorhandenen drei Absätze werden in diesen Aufbau überführt, nicht zusätzlich davor stehen gelassen.

| Zielseite | Vorgeschlagener CMS-Slug | Leitfrage und Umfang |
| --- | --- | --- |
| Barrierefreiheit und inklusive Gestaltung | `shadcn-barrierefreiheit` | Kann eine Person eine Aufgabe verstehen, ausführen und ihr Ergebnis erkennen? Überblick, Querverweise, Nachweislesehilfe. |
| Bedienen und den Fokus behalten | `shadcn-bedienung-und-fokus` | Wie bleibt die Handlung mit Tastatur, Touch und alternativer Eingabe erreichbar? Fokus, Bedienfläche, Gestenalternativen. |
| Wahrnehmen und vergrössern | `shadcn-wahrnehmung-und-vergroesserung` | Bleiben Bedeutung und Bedienung bei anderem Sehen und anderem Platz erhalten? Kontrast, nichtfarbliche Merkmale, Zoom/Reflow, Textabstände. |
| Verstehen und Rückmeldungen erhalten | `shadcn-semantik-und-rueckmeldung` | Was wird ohne visuelle Suche verstanden? Struktur, Namen, Hinweise, Screenreader, dynamische Rückmeldungen, sprachliche Konsistenz. |
| Bewegung, Sprache und Leserichtung | `shadcn-bewegung-und-lokalisierung` | Funktioniert dieselbe Aufgabe mit reduzierter Bewegung, längeren Texten und anderer Schreibrichtung? Zwei klar getrennte Kapitel mit eigenen Ankern. |

Die letzte Seite bündelt bewusst Anpassungsbedingungen einer identischen Aufgabe; sie behauptet keinen gemeinsamen technischen Mechanismus. Bei genügend realen Beispielen kann sie später geteilt werden. Kein separater leerer «Prüfkatalog» zum Start: Die Prüfwege stehen neben der erklärten Entscheidung. Ein verlinktes Kriterienregister ist Sekundärnavigation, nicht Einstieg in eine top-down Checkliste. Alle neuen Slugs sind Vorschläge, noch keine vorhandenen Ziele.

## Konkrete Inhalts- und Darstellungskonzepte

### Einstieg: eine Einstellung ändern und das Ergebnis verstehen

Ein kleiner, glaubwürdiger Ausschnitt zeigt eine Einstellung, deren Label, Hilfetext und bestätigte Rückmeldung. Die vier Stationen **verstehen → erreichen → ändern → Ergebnis erkennen** bleiben als lineare Textfolge sichtbar. Nummerierte Annotationen zeigen, was schiefgeht, wenn das Label fehlt, Fokus verdeckt wird oder die Änderung nur als Farbwechsel erscheint. Es wird keine künstliche ganze Anwendung gestaltet.

Danach führt jede Station zu einer Vertiefung und zu ihrem konkreten Komponenten-/Patternbeispiel. Eine zweite kurze Szene «Formular korrigieren» zeigt, dass eine einzelne bedienbare Komponente noch keinen verständlichen Ablauf ergibt. Die Seite endet mit einer kompakten Lesebeispiel-Karte: «Tokenpaar berechnet» ist ein anderer Nachweis als «Formular mit genannter Screenreader-/Browserkombination durchlaufen».

Lehrzweck: Inklusion als Qualität eines vollständigen Wegs erkennen. Darstellung in semantischem HTML; Annotationen unter dem Beispiel auf schmaler Breite, kein obligatorischer Hover. Die Einstellung ist eine beschriftete Studie, solange Rückmeldung und Speicherung lokal nicht implementiert sind. Ein dekoratives Erreichbarkeits-Scoreboard wäre irreführend.

### Bedienen und den Fokus behalten

Die erste Darstellung folgt einem Fokusweg: Ausgangsaktion → geöffneter Entscheidungsbereich → Abbrechen → sinnvolles Rückkehrziel. Eine alternative Endspur zeigt Abschluss mit entferntem Ausgangselement. Jeder Schritt hat aktuelle Aktion, sichtbares Fokusziel und kurze Begründung. Ein Textpfad enthält dieselbe Information wie die Pfeile. Das Beispiel ist mit dem destruktiven Pattern abgestimmt, nicht als vorhandener Dialogcontract ausgegeben.

Darauf folgt der Unterschied zwischen sequenzieller Navigation und interner Bedienung eines zusammengesetzten Widgets. Die Seite erklärt das Prinzip; konkrete Tastenbelegungen von Checkbox, Switch, Combobox und Dialog bleiben komponentenspezifisch. Eine pauschale Behauptung, jedes Element müsse per Tab erreichbar sein, entfällt. Fokusordnung soll Bedeutung und Bedienbarkeit erhalten; visuelle Pixelreihenfolge ist nicht allein das Urteil.

Zweite Darstellung: Kontrollzeichen, aktivierbares Label und tatsächliche Pointer-Zielfläche als beschriftete Überlagerung. Sichtbare Grösse und Trefferfläche unterscheiden sich. Kleine benachbarte Ziele werden mit dem normativen Grössen-/Abstandsfall erläutert; eine grössere komfortable Hausregel kann zusätzlich angeboten werden, erhält aber eine andere Kennzeichnung. Touchbeispiele zeigen Bedienung ohne Hover und einen Ersatz für Ziehen, wenn eine Aufgabe Ziehen anbietet. Sprachbedienung wird über Übereinstimmung sichtbarer Beschriftung und zugänglichem Namen eingebunden.

**Geplanter Prüfweg:** Eine Auswahl erreichen, umschalten, Änderung erkennen; danach Dialog öffnen und abbrechen bzw. abschliessen. Vorwärts und rückwärts navigieren, Fokus bei offenem Overlay und unter Sticky-Bereichen beobachten. Mit Pointer das Label und Randbereiche aktivieren; Touchweg einschliesslich Bildschirmtastatur am Input wiederholen. Erwartung: beabsichtigter Wert, verständliche Folge, erreichbare nächste Handlung. Pro Schritt dokumentieren, wo es stockt; nicht nur «Tastatur funktioniert» abhaken.

### Wahrnehmen und vergrössern

Am Anfang stehen identische Fehler-/Auswahl-/Fokuszustände nebeneinander. Texte, Symbole oder Konturen erhalten die Bedeutung zusätzlich zur Farbe. Die Erläuterung zeigt ausdrücklich, dass Auswahl und Fehler verschiedene Dinge sagen und Fokus beide begleiten kann. Farbwerte stammen später aus der geklärten lokalen Quelle; fehlende Rollen werden als offene Studien ausgewiesen.

Eine Kontrastdarstellung markiert genau das untersuchte Paar und den Kontext: normaler Text auf Grundfläche, Text auf Aktion, notwendige sichtbare Komponentengrenze, Fokusindikator gegen angrenzende Flächen. Ergebnis, Methode und Quelle stehen direkt daneben. Die sechs vorhandenen Tokenrechnungen werden verlinkt, nicht kopiert. Inaktive Elemente werden als normativer Ausnahmefall und eigenständige Designfrage verständlicher Nichtverfügbarkeit behandelt, nicht pauschal «müssen 4,5:1 erreichen» genannt.

Die zweite Hauptdarstellung zeigt dieselbe Detail-/Formulargruppe breit, vergrössert und schmal. Verbindungen markieren erhaltene Informationsbeziehungen. Der Problemfall ist eine hohe haftende Zusatz-Card, die eine fokussierte Aktion verdeckt; der Lösungsentwurf lässt sie bei unzureichendem Platz mitlaufen. Keine ausschliesslich dekorative Geräte-Mockup-Reihe. Eine kleine Tabelle erläutert getrennt Textvergrösserung, verfügbaren CSS-Raum und geänderte Textabstände. Der gewählte Viewport und Zoom sind sichtbar.

**Geplanter Prüfweg:** Lange Hilfe lesen, Eingabe korrigieren und Aktion erreichen bei 200 % Textvergrösserung; Reflow bei 320 CSS px Breite für vertikal fliessenden Inhalt; zusätzlich geringe Höhe und Sticky-Elemente prüfen. Textabstände gemeinsam überschreiben und abgeschnittene Texte/Bedienelemente suchen. Eine Datentabelle wird gesondert beurteilt: notwendige Zweidimensionalität lokal begründen, Zelleninhalte und umliegende Seite bleiben erreichbar. Reiner Screenshotvergleich belegt weder Bedienbarkeit noch vollständige Information.

### Verstehen und Rückmeldungen erhalten

Ein Feld erhält eine doppelte, beschriftete Darstellung: sichtbare Anatomie auf der einen Seite, zugehörige Informationen **Name, Rolle, Wert/Zustand, Beschreibung** auf der anderen. Diese zweite Spalte ist ein didaktisches Modell, kein angeblich identisches Screenreader-Transkript. Die tatsächliche Ausgabe hängt von Umgebung, Navigation und Einstellungen ab und wird erst im Nachweis beschrieben.

Ein darunterliegender Ablauf zeigt Submit mit zwei Fehlern → Fehlerübersicht → betroffener Wert → erfolgreiche Korrektur → bestätigte Übermittlung. Der Fokuspfad und die Rückmeldung ohne Fokusverschiebung erhalten unterschiedliche Linien und Textbeschriftungen. So wird sichtbar, weshalb eine Statusmeldung nicht automatisch ein Fokusziel ist. Die Produktentscheidung über das konkrete Submit-Fokusziel bleibt beim Formularpattern.

Ein zweites Beispiel behandelt Ergebniszahlen beim Filtern: bearbeitete Suche, angewendete Kriterien, aktualisierte Ergebnisse und keine Treffer. Die Seite erklärt die Gefahr konkurrierender oder zu häufiger Ansagen, ohne ein universelles Zeitintervall zu erfinden. Strukturierte Überschriften, benannte Regionen und Tabellenbeziehungen werden an einer Detail-/Listenansicht erklärt. Der vorhandene Content-Design-Bereich bleibt für Wortwahl und Meldungstexte führend.

**Geplanter Prüfweg:** Ohne visuelle Suche die Aufgabe über Überschriften/Regionen finden, Feldnamen und Hilfe erfassen, Fehler auslösen, gezielt korrigieren und Ergebnis bestimmen. Danach denselben Weg mit Tastatur und sichtbaren Labels vergleichen; abweichende Namen können auch Sprachbedienung erschweren. Pro Kombination Browser, Betriebssystem, assistive Technik und Version festhalten. Automatische Prüfung kann fehlende Zuordnungen aufdecken; verständliche Reihenfolge, richtige Ansage und Aufgabenerfolg brauchen reale Durchläufe.

### Bewegung, Sprache und Leserichtung

Bewegung wird als zeitliche Darstellung behandelt: dieselbe Zustandsänderung mit regulärem Übergang und mit reduzierter Bewegung. Beide enden in derselben klar erkennbaren Information. Wiedergabe nur bewusst starten; ein ruhiges Storyboard samt Text beschreibt den Ablauf vollständig. Kein automatisch bewegtes Negativbeispiel. Grundlagen führen Dauer, Kurve und Markenentscheidung; diese Seite zeigt, wie der Informationsverlust beim Reduzieren erkannt wird. Automatisch laufende Bewegung, Blitzen und zeitliche Beschränkungen sind andere Prüffragen; aus der Unterstützung einer Bewegungspräferenz folgt keine vollständige Abdeckung.

Das Lokalisierungsbeispiel verwendet dieselbe Feld-/Aktionsgruppe mit kurzem Text, langer geprüfter Übersetzung und RTL-Kontext. Pfeile erklären Leserichtung, Zusammengehörigkeit und Fokusfolge. Reale Texte müssen sprachlich geprüft sein; Pseudolokalisierung findet Platzprobleme, beweist aber keine verständliche Übersetzung. Zahlen, Kennungen und andere eingebettete Inhalte werden als mögliche Fälle gemischter Richtung separat erläutert. Kein pauschales Spiegeln aller Icons oder Diagramme. Basisrichtung, Sprachkennzeichnung und Formatierung sind unterschiedliche Entscheidungen.

**Geplanter Prüfweg:** Aufgabe in angebotenen Sprachen ausführen, lange Labels und Fehlermeldungen umbrechen lassen, Eingabe und Kopieren gemischter Inhalte prüfen, Zahlen/Datum durch Content-Verantwortliche bestätigen lassen. Sprachwechsel und assistive Aussprache kontrollieren. Reduzierte Bewegung aktivieren und Zustandswechsel, Laden und Erfolg erneut verfolgen. Es gibt bislang keine lokale RTL- oder native Freigabe; die Darstellung bleibt Zielkonzept bis zum entsprechenden Nachweis.

## Regeln, Prüfwege und Nachweise sichtbar unterscheiden

Jede relevante Aussage erhält unmittelbar ihren Typ und Geltungsbereich. **Anforderung** nennt Normversion, Kriterium, Niveau und Bedingungen. **Hausregel** benennt die Systementscheidung und verantwortliche Rolle. **Prüfweg** nennt Aufgabe, Ausgangslage, Handlung und beobachtbare Erwartung. **Nachweis** nennt die tatsächlich untersuchte Revision und Umgebung, Ergebnis, Datum und verbleibende Lücke. **Offen** ist kein Resultat und keine erfüllte Anforderung. Ein Quellenlink allein belegt keine Implementierung.

Gezielt geprüfte Primäranker für die Ausarbeitung, keine vollständige WCAG-Prüfliste:

| Entscheidung | Quelle und begrenzte Aussage |
| --- | --- |
| Tastatur und Fokus | [WCAG 2.2: 2.1.1](https://www.w3.org/TR/WCAG22/#keyboard), [2.1.2](https://www.w3.org/TR/WCAG22/#no-keyboard-trap), [2.4.3](https://www.w3.org/TR/WCAG22/#focus-order), [2.4.7](https://www.w3.org/TR/WCAG22/#focus-visible): Tastaturzugang, Verlassen, sinnvolle Reihenfolge und sichtbarer Fokus. Konkrete Widget-Tasten brauchen passende zusätzliche Referenzen. |
| Verdeckung | [2.4.11, AA](https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum) verlangt, dass ein fokussiertes Element durch vom Autor erstellten Inhalt nicht vollständig verdeckt wird. Arves Ziel «nicht verdecken» ist stärker zu formulieren und darf nicht als wörtlicher AA-Mindeststandard ausgegeben werden. |
| Wahrnehmbarkeit | [1.4.3, AA](https://www.w3.org/TR/WCAG22/#contrast-minimum): grundsätzlich 4,5:1 für Text, 3:1 für grossen Text, mit benannten Ausnahmen. [1.4.11, AA](https://www.w3.org/TR/WCAG22/#non-text-contrast): 3:1 für erforderliche visuelle Identifikation von Komponenten/Zuständen sowie relevante Grafikanteile, mit Ausnahmen. Keine pauschale Forderung für jede dekorative Linie. |
| Vergrösserung | [1.4.4, AA](https://www.w3.org/TR/WCAG22/#resize-text): Text bis 200 % ohne Verlust, mit Ausnahmen. [1.4.10, AA](https://www.w3.org/TR/WCAG22/#reflow): 320 CSS px Breite bzw. 256 CSS px Höhe bei horizontalem Fluss, mit begründeten zweidimensionalen Ausnahmen. |
| Textabstände | [1.4.12, AA](https://www.w3.org/TR/WCAG22/#text-spacing): ohne Verlust bei gemeinsam gesetzter Zeilenhöhe 1,5, Absatzabstand 2, Buchstabenabstand 0,12 und Wortabstand 0,16 mal Schriftgrösse; sprach-/schriftabhängige Ausnahme beachten. Das sind Prüfbedingungen, keine vorgeschriebene Grundtypografie. |
| Pointer und Touch | [2.5.8, AA](https://www.w3.org/TR/WCAG22/#target-size-minimum): 24 × 24 CSS px oder einschlägige Ausnahme, insbesondere definierter Abstand; keine allgemeine 44-px-AA-Regel. [2.5.1](https://www.w3.org/TR/WCAG22/#pointer-gestures) und [2.5.7](https://www.w3.org/TR/WCAG22/#dragging-movements) unterscheiden komplexe Gesten und Ziehen samt Alternativen/Ausnahmen. Native Plattformwerte gesondert belegen. |
| Benennung und Status | [2.5.3](https://www.w3.org/TR/WCAG22/#label-in-name): sichtbarer Beschriftungstext ist im Namen enthalten. [4.1.2](https://www.w3.org/TR/WCAG22/#name-role-value): programmatisch bestimmbare Eigenschaften. [4.1.3, AA](https://www.w3.org/TR/WCAG22/#status-messages): Statusmeldungen über Rolle/Eigenschaften ohne Fokusnahme verfügbar. Keine Forderung, jede Änderung dringend anzukündigen. |
| Bewegung | [2.3.3, AAA](https://www.w3.org/TR/WCAG22/#animation-from-interactions): abschaltbare interaktionsbedingte Bewegungsanimation, soweit nicht wesentlich. Diese Quelle nicht zu einer pauschalen AA-Regel für jede Animation umdeuten. Weitere Bewegungs-/Zeitkriterien bei realem Anwendungsfall gezielt prüfen. |
| Sprache und Richtung | [3.1.1](https://www.w3.org/TR/WCAG22/#language-of-page) und [3.1.2](https://www.w3.org/TR/WCAG22/#language-of-parts) behandeln programmatisch erkennbare Sprache mit Ausnahmen. [W3C Internationalization: Structural markup and right-to-left text in HTML](https://www.w3.org/International/questions/qa-html-dir) erläutert Basisrichtung über HTML und logische Layouteigenschaften. RTL ist keine alleinige Ableitung der Sprachkriterien. |

Die Werte werden auf der späteren Seite dort erläutert, wo sie eine Entscheidung tragen; diese interne Quellentabelle wird nicht unverändert als langer Seitenauftakt übernommen. Recherche in diesem Audit wurde auf diese Entscheidungen begrenzt. Veröffentlichung setzt fachliches Review der endgültigen Aussagen und ggf. zusätzliche Primärreferenzen für neue Beispiele voraus.

## Zuständigkeiten und verbindende Verweise

Zentral bleiben gemeinsame Begriffe, normative Einordnung, Prüfmethoden und Nachweisformat. Komponenten führen ihre Anatomie, Tasten, Zustandskombinationen, Namen und konkrete Implementierung. Patterns führen den gesamten Weg samt Fokus nach Übergängen, Fehlerkorrektur, Rückmeldung, Abbruch und Wiederaufnahme. Grundlagen führen Farb-/Typografie-/Abstands-/Bewegungswerte und ihre Quellen. Layout führt Regionen, Reihenfolge, Umbruch und Sticky-Verhalten. Content führt verständliche Formulierungen, Übersetzungen und lokale Formate. Plattformverantwortliche führen native Interaktion und echte native Prüfungen; Webbelege werden nicht übertragen.

Verweise sind bidirektional und auf Abschnitte bezogen: Input → Feldbenennung/Fehlerzuordnung; Checkbox/Switch → Bedienfläche und Zustandsansage; Farbe/Themes → Kontrastmethode; Typografie/Abstände → Vergrösserung; Bewegung → reduzierte Darstellung; Formular → nichtvisuelle Korrektur; Suche/Systemzustände → Status ohne Fokus; Destruktiv → Rückkehr nach entfernter Aktion; Detailseite → Verdeckung/geringe Höhe; Tabellen → differenzierter Reflow; Content → Sprache/RTL. Ein pauschaler Footerlink «Barrierefreiheit» genügt dafür nicht.

Eine gemeinsame Regel wird einmal gepflegt. Komponentenseiten nennen ihre Anwendung und den aktuellen Nachweis. Ein Nachweis verweist auf die konkret geprüfte Contract-/Implementierungsrevision; ein neuer Import macht alte Ergebnisse nicht automatisch gültig. Verantwortlich für den Inhalt sind Design und Accessibility-Review gemeinsam; Engineering liefert Implementierung und Prüfumgebung, Produkt entscheidet über Ablauf-/Speicherfolgen. Tests mit betroffenen Menschen ergänzen technische Prüfungen für die priorisierten Aufgaben; sie sind weder allgemeines Gütesiegel noch Ersatz für Kriterienprüfung.

## CMS-Bedarf und Umsetzung

Das bestehende Schema unterstützt Text, Beziehungen über Elternseiten und Do/Don't mit optionalem Bild. Damit lassen sich der neue Einstieg und präzise Textwege bereits redaktionell vorbereiten. Eine neutrale Fokusspur, Kontrastabbildung oder Nachweiskarte sollte nicht künstlich als «Do» etikettiert werden.

Benötigte gezielte Erweiterungen: neutraler Figure-Block mit Lehrzweck, Beschriftung und vollständiger Textalternative; semantische Vergleichstabelle; stabile Abschnittsanker; verwandte Seiten als Beziehungen; Quellen mit belegter Aussage/Stand; Regeltyp und Plattformumfang; strukturierter Prüfnachweis mit Aufgabe, Revision, Umgebung, Erwartung, Ergebnis und offenen Punkten. Der Status muss lesbar benannt sein, nicht nur eine Farbe. Browser-/Screenreader-Version, Theme, Sprache, Richtung, Viewport und Vergrösserung erscheinen nur soweit für den konkreten Nachweis relevant. Automatischer Befund und manueller Durchlauf bleiben unterscheidbar.

Eine einfache kuratierte Schrittfolge genügt vor einem interaktiven Simulator. Interaktive Demonstrationen sind erst sinnvoll, wenn sie selbst mit Tastatur und assistiver Technik funktionieren, keine Information verstecken und einen statischen gleichwertigen Zugang behalten. Portal und MCP erhalten denselben fachlichen Text, dieselben Beziehungen und dieselben Einschränkungen; ein Bild darf keine nur visuell verfügbare Regel enthalten.

Umsetzung in drei zusammenhängenden Paketen: zuerst Einstieg, Nachweisbegriffe und zwei reale Wege (Formular korrigieren, Einstellung ändern) mit vorhandenen Seiten verbinden. Danach Fokus-/Wahrnehmungsdarstellungen mit Grundlagen- und Komponentenplan ausarbeiten. Anschliessend nichtvisuelle Rückmeldungen, Bewegung und Lokalisierung an denselben Wegen ergänzen. Neue Seiten erst veröffentlichen, wenn sie ein vollständiges Beispiel und klaren aktuellen Stand besitzen. Keine grosse leere Kriterienhierarchie auf Vorrat anlegen.

## Abnahmekriterien des späteren Themenpakets

- Die drei bisherigen Kernabschnitte bleiben fachlich erhalten; jede oben inventarisierte Schnittstelle hat ein eindeutiges führendes Ziel. Kein Komponenten-/Patternablauf wird zentral doppelt gepflegt.
- Eine gestaltende Person kann an der Einstellungs- und Formularszene eine konkrete Barriere erkennen, eine Gestaltungsentscheidung erklären und den zugehörigen Prüfweg finden. Die Seite beginnt mit dieser Erfahrung, nicht mit Normnummern.
- Alle acht Themen sind greifbar: Tastatur/Fokus, Wahrnehmung/Kontrast, Zoom/Reflow, Touch, Bewegung, Screenreader, Lokalisierung und RTL. Jedes hat eine passende Darstellung und beobachtbare Prüfaufgabe, nicht nur einen Stichpunkt.
- Kontrastrechnung, DOM-Inspektion, automatischer Test, manueller Aufgabendurchlauf und Nutzungsforschung werden korrekt benannt. Keiner dieser Teilnachweise wird zu einer pauschalen Freigabe hochgestuft.
- Fokus nach Abbruch und Abschluss, entfernter Auslöser, Fehler plus Fokus, lange Labels, kleine Ziele, geringe Höhe, gemischte Schreibrichtung und dynamische Statusmeldungen sind in konkreten Fällen berücksichtigt.
- Normative Mindestanforderung, weitergehende Hausregel, Vorschlag und offene Entscheidung sind unmittelbar unterscheidbar. Niveau und Ausnahmen stehen bei Zahlen; ein 24-px-Kriterium wird weder zu einem universellen Designziel noch zu einer nativen Plattformfreigabe.
- Die Lehrdarstellungen funktionieren schmal, vergrössert und ohne Hover; Animation startet nicht ungewollt; Diagramme sind linear verständlich. Vergleichssteuerungen erhalten eigene Tastatur-/assistive Prüfung.
- Nachweise führen tatsächlich getestete Versionen und Bedingungen; ungeprüfte Kombinationen bleiben offen. Die lokale Referenz und die neu geplanten Inhalte sind nicht als geprüft markiert, bevor diese Prüfungen stattgefunden haben.
- Sprach-/RTL-Beispiele werden fachlich und sprachlich geprüft. Automatische Pseudolokalisierung oder Spiegelung ersetzt diese Prüfung nicht.
- Vor Veröffentlichung stimmen Quellen, CMS-Haupttext, Vorlagenfelder, Medienalternativen und MCP überein. Die historische Token-/Demodifferenz bleibt auffindbar, ohne den Gestaltungsweg mit wiederholten Nachträgen zu überladen.

Diese Abnahmen sind geplant. Tatsächlich ausgeführt wurden in diesem Auftrag Bestandslektüre, Schnittstellenvergleich, gezielte Primärquellenprüfung und Prüfung dieses Planartefakts auf Inhalt und Schreibgrenze.
