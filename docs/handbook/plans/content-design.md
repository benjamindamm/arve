# Content Design: Themenaudit und Darstellungsplan

Stand: 18. November 2026. Arbeitsplan für das shadcn-Referenzhandbuch in Arve. Keine CMS-Änderung, Veröffentlichung oder sprachliche Produktfreigabe. Formulierungen und Seitenstruktur im Zielteil sind vorgeschlagene Hausregeln; sie werden durch Nennung einer W3C-Quelle nicht automatisch zum Standard.

## Evidenz und tatsächlicher Bestand

Gelesen: `content-matrix.md`, `local-review.md`, die Themenpläne Grundlagen, Komponenten und Patterns, `src/collections/Pages.ts`, `src/docs/page-templates.ts` und `src/docs/content.tsx`. Zusätzlich die veröffentlichten CMS-Inhalte über Payload Local API mit `draft:false`, `depth:0`: Content Design, sämtliche neun Patternseiten, Button, Input, Checkbox, Switch, Komponenten auswählen, Typografie und Barrierefreiheit. Der veröffentlichte Seitenbaum wurde auf Kinder geprüft. Beide Datenbankabrufe verwendeten einen eigens konfigurierten Adapter mit `push:false` und PostgreSQL `default_transaction_read_only=on`; keine Schreiboperation. Datum und IDs unten bezeichnen diesen gelesenen Bestand, keine gesicherten späteren Revisionspins.

Primärquellen wurden am 18.11.2026 über BrowserOS neo gezielt gelesen: WAI-Erläuterungen zu Labels/Anweisungen, Label in Name und Fehlerkorrektur sowie W3C Internationalization zu Textlänge bei Übersetzung. Die WCAG-Understanding-Seiten sind informative Erläuterungen zu den dort wiedergegebenen Erfolgskriterien. Sie begründen keine bestimmte Anrede, Satzlänge oder nationale Schreibweise. Die Internationalization-Seite ist ein älterer Grundlagenartikel (Stand 2007); ihre Expansionsbeispiele werden nicht als heutige universelle Prozentvorgabe übernommen. Keine neue visuelle Portal-, Screenreader-, Spracherkennungs- oder native Prüfung wurde ausgeführt.

| Ort | Tatsächlicher Textbeitrag | Redaktionelle Folgerung |
| --- | --- | --- |
| Content Design, ID 23, `shadcn-content-design`, geändert 13.11.2026 | Drei Abschnitte: Labels/Aktionen, Hilfe/Meldungen, Formate/Übersetzung; alle Vorlagenfelder leer; keine Kinder | Solider Themenhinweis, noch keine Anleitung zum Entscheiden oder Schreiben |
| Button 8 | «Rechnung herunterladen» gegenüber «Hier klicken» | Ergebnisorientierung erhalten; Download, Navigation und Zustandswechsel sauber auseinanderhalten |
| Input 14 | Sichtbares Label, Hint, Einheit, Pflichtkennzeichnung, kurze Feldbezeichnung; Beispiel «Gib eine E-Mail-Adresse mit @ ein.»; Umbruch und lange Fehler | Bestehender Referenztext ist Anwendungsfall, nicht zweites redaktionelles Regelwerk; Fehlerbeispiel zeigt einen möglichen Formatfehler, keine vollständige E-Mail-Prüfung |
| Checkbox 15 / Switch 16 | Auswahl als Aussage; Switch-Label «Benachrichtigungen» bleibt stabil | «Alle Labels nennen Aktionen» wäre falsch: Wert, Option und Einstellung benötigen andere Sprachformen |
| Patterns 12 / Formularvalidierung 20 | Folgen benennen, Korrekturhinweis, erhaltene Angaben; bestätigter Erfolg und unbekannte Serverantwort unterschieden | Wahrheitsgehalt einer Meldung vor Ton und Kürze; Prüfzeitpunkt und Wiederholbarkeit bleiben Patternentscheidungen |
| Felder/Fehlermeldungen 45 | Label dauerhaft, Format vorab, konkrete Korrektur | Anatomie gehört zur Komponente, Prüfablauf zum Formular, Formulierung hierher; auf keine vierte führende Fassung ausbauen |
| Laden/leer/Fehler 22 / Systemzustände 49 | Ausgangszustand, keine Treffer, Ladefehler; passende Folgeaktion | Sprachliche Unterscheidung tragfähig, zwei parallele Fassungen später gemäss Patternplan konsolidieren |
| Suche/Filter 21 / Auswahl/Suche 46 | Ergebniszahl, Filter, kein Treffer, gewählter Wert | «Keine Ergebnisse» muss den Suchraum benennen: Inhalte oder zulässige Optionen |
| Destruktive Aktionen 47 | Objekt und Endgültigkeit im Dialog, eindeutige Aktionen | Endgültigkeit nur bei tatsächlich fehlender Wiederherstellung; Frage, Konsequenz und Aktion zusammen redigieren |
| Tabellen/Listen 48 | Spalten nach Aufgabe, Status und Betrag, Zeilen- vs. Massenaktion | Begriffe, Einheiten und Auswahlumfang benötigen konsistente Sprache über Liste und Detail hinweg |
| Typografie 10 / Barrierefreiheit 24 | Überschriften nach Aufgabe, Hilfetext am Ort; Namen, Zuordnung, Statusansage | Lesbarkeit und Semantik nicht mit sprachlicher Verständlichkeit gleichsetzen |

Die Matrix beschreibt im Hauptteil noch Referenzentwürfe, im Schluss bereits die Veröffentlichung. `local-review.md` und die gelesenen CMS-Datensätze bestätigen den veröffentlichten Referenzstand. Die neue Themenplanung darf die vier Referenzseiten daher nicht als unveröffentlichte Ausgangsentwürfe behandeln.

## Widersprüche und offene Entscheidungen

**Kürze ist noch keine Prioritätenregel.** Die Einstiegsseite fordert kurze Hinweise; sie sagt nicht, was bei Platzmangel erhalten bleibt. Vorschlag: Bedeutung, Konsequenz und nächste Handlung vor Kürze. Keine pauschalen Zeichenlimits für Labels oder Fehler. Eine zu lange Anweisung kann ein Hinweis auf unklare Aufgabe oder unnötige Eingabebeschränkung sein; nicht automatisch ein Redaktionsproblem.

**Wiederholung braucht eine gesicherte Aussage.** ID 22 bietet bei vorübergehendem Fehler «Erneut versuchen», während ID 20 bei unbekannter Serverantwort ausdrücklich vor einer falschen Nicht-Speicherung warnt. Kein direkter Widerspruch beim reinen Laden, aber eine gefährliche Verallgemeinerung beim Schreiben. Die Meldungsseite muss Vorbedingung und Geltungsbereich jedes Musters mitführen. «Nicht gespeichert» darf nur bei bekanntem Nicht-Erfolg erscheinen.

**Anrede und Schreibweise sind implizit.** Das Handbuch spricht seine Leser mit Du an; der Input-Mustertext tut dies auch. Eine bewusste Produktentscheidung zu Du/Sie, de-CH/de-DE, Terminologie oder inklusiver Ansprache ist daraus nicht belegt. Handbuchredaktion und Produktoberfläche getrennt entscheiden. Bis zum Review neutrale Beispiele bevorzugen; keine Behauptung einer freigegebenen Markenstimme.

**Konsistente Sprache bedeutet nicht identisches Format.** Die aktuelle Formulierung bindet Zahl, Datum und Währung an die gewählte Sprache. Sprache allein bestimmt weder Region noch Währung, Zeitzone oder die Bedeutung eines Datums. Ein fachliches Kalenderdatum ist etwas anderes als ein Zeitpunkt. Ein Betrag kann auch bei deutschsprachiger Oberfläche in einer anderen Währung vorliegen.

**«Erwartetes Ergebnis» ist rollenabhängig.** Ein Button beschreibt eine Aktion, ein Label einen Wert, ein Switch eine Einstellung. Beim Toggle den Text von «Aktivieren» zu «Deaktivieren» umzuschreiben wäre kein allgemeines Heilmittel für Verständlichkeit. Sichtbares Label und zugänglicher Name müssen zusammenpassen; die Beschreibung darf diesen Namen nicht durch abweichenden Text ersetzen.

**Übersetzung ist bisher nur Umbruch.** Es fehlen Textkontext, vollständige Nachrichten, variable Werte, Plural, Begriffsfreigabe, Fallback und die Prüfung der Bedeutung. Rechts-nach-links-Darstellung betrifft zusätzlich Reihenfolge und gemischte Werte. Eine deutsche Langtextprobe ist dafür kein Nachweis.

## Begründeter Zielbaum

```text
Content Design                              content-design (bestehend)
  Beschriften und Anleiten                  content-beschriften (neu, geplant)
  Rückmeldungen und Bestätigungen            content-rueckmeldungen (neu, geplant)
  Formate und Übersetzung                   content-formate (neu, geplant)
```

Vier Seiten reichen: Der Einstieg führt Ton, Wortwahl und gemeinsame Redaktionsprinzipien. Labels und Hilfen bilden gemeinsam die Vorbereitung einer Handlung. Fehler, Status und Bestätigung werden als Aussagen über denselben Vorgang gemeinsam erklärt. Zahlen, Datum und Übersetzung teilen die Abhängigkeit von Bedeutung und Nutzungskontext. Eine eigene Seite für jede Meldungsart oder jedes Format würde die Zusammenhänge verdecken. Erst bei belegtem Umfang, beispielsweise einem umfangreichen Fachglossar oder mehreren freigegebenen Sprachvarianten, daraus weitere Seiten ableiten.

Bestehenden Slug `content-design` bewahren. Neue Pfade sind Planung, heute keine existierenden Links. Bestehende Komponenten und Patterns erhalten später gezielte Abschnittsverweise statt kopierter Regeln. Die Konsolidierung von ID 45 sowie 22/49 gehört zum Patternplan; dieser Plan legt keine parallele Migration an.

## Seitenkonzept 1: Content Design — Sprache führt durch eine Aufgabe

Der Einstieg beantwortet nicht «Was ist Content Design?» über mehrere Absätze, sondern «Was muss ein Mensch hier verstehen, entscheiden oder tun?». Einstiegssatz als Vorschlag: «Texte benennen die Aufgabe, machen Folgen verständlich und sagen verlässlich, was geschehen ist.» Danach drei Wege zu den Unterseiten, jeweils mit einer echten Entscheidung: Eingabe vorbereiten, Ergebnis erklären, Angaben in einer Sprache darstellen.

Der Hauptteil erklärt Ton an derselben neutralen Aufgabe. Ruhig und direkt ist ein redaktioneller Vorschlag, keine W3C-Vorgabe. Freundlichkeit entsteht durch hilfreiche Information, nicht durch routinemässiges «Ups!», Entschuldigungen ohne Inhalt oder überschwängliches Lob nach jeder Speicherung. Bei Folgen und Unsicherheit wird der Ton präziser, ohne Menschen die Schuld zu geben. Höflichkeit darf nicht so viel Text erzeugen, dass die nächste Handlung untergeht.

Eine Vergleichszeile führt von «Oops, leider ist etwas schiefgelaufen!» zu «Die Liste konnte nicht geladen werden.» und, nur bei vorhandenem Weg, «Erneut laden». Daneben stehen zwei andere Situationen: «Änderungen gespeichert.» bei bestätigter Annahme; «Der Speicherstatus ist noch nicht bekannt.» bei unklarer Antwort. Lehrzweck: Ton bleibt wiedererkennbar, Inhalt ändert sich mit der nachweisbaren Situation. Nicht alle Varianten als austauschbare Textalternativen präsentieren.

Ein kurzer Abschnitt zur Wortwahl zeigt den Schaden von Synonymen: «Eintrag» in der Liste, «Datensatz» im Dialog und «Objekt» im Fehler können dasselbe meinen, aber unnötige Zuordnung verlangen. Vorschlag für ein kleines Terminologieregister: bevorzugter Begriff, Bedeutung, verworfene Alternative mit Grund, Kontext und Übersetzungsnotiz. Kein vorweggenommenes umfassendes Glossar. Fachbegriffe dort beibehalten, wo sie für die Zielgruppe genauer sind, und bei erster notwendiger Verwendung erklären.

Anrede, Orthografie und inklusive Bezeichnungen werden als drei offene Hausentscheidungen sichtbar gemacht. Kein generisches «leichte Sprache»-Versprechen: einfache, verständliche Sprache ist ein Redaktionsziel; eine spezifische Sprachform braucht ihren eigenen Auftrag und Review. Hinweise wie «oben rechts» oder «grüner Knopf» vermeiden, wenn die Handlung durch ihren Namen eindeutig beschrieben werden kann.

Abschluss mit einer kurzen Redaktionsprobe: Eine unabhängige Person erklärt anhand des Textes die erwartete Handlung und die Folge. Kann sie nur wiederholen «speichern» oder «Fehler», fehlt Kontext. Das ist ein konkreter Review, keine automatische Verständlichkeitszertifizierung.

## Seitenkonzept 2: Beschriften und Anleiten — Information am richtigen Ort

Die Seite startet mit einem beschrifteten Feldschema: Label «Dateiname», Hilfe «Bis zu 80 Zeichen.», eingegebener Wert und darunter ein Korrekturhinweis. Die Zahl 80 ist ausdrücklich eine erfundene Beispielbedingung, keine Arve-Vorgabe. Linien verbinden Text und Funktion. Eine zweite Ansicht zeigt dasselbe Feld ausgefüllt; das Label bleibt. Dadurch wird sichtbar, warum ein verschwundener Platzhalter keine dauerhafte Orientierung liefert. Die grafische Erklärung erhält dieselbe Information als Text, nicht nur einen dekorativen Alternativtext.

Darauf folgt die zentrale Rollentabelle:

| Textrolle | Frage der Person | Beispiel | Grenze |
| --- | --- | --- | --- |
| Feldlabel | Was soll ich angeben? | «Dateiname» | Nicht zugleich ganze Anleitung oder bloss «Eingeben» |
| Gruppenüberschrift | Worauf beziehen sich die Optionen? | «Benachrichtigungskanal» | Nicht dieselbe Überschrift für fachlich verschiedene Gruppen |
| Optionslabel | Was wähle ich aus? | «E-Mail» | Benötigt den erkennbaren Gruppenkontext |
| Stabile Einstellung | Was ist ein- oder ausgeschaltet? | «Benachrichtigungen» | Zustand getrennt vermitteln, nicht durch wechselnden Namen verbergen |
| Aktionslabel | Was geschieht? | «Änderungen speichern» | Keine Speicherung behaupten, wenn nur ein Prüfschritt startet |
| Linktext | Wohin führt der Weg? | «Dateidetails» | Unterschied zwischen Navigation und Aktion mit Komponentenplan abstimmen |
| Hilfetext | Was muss ich vorher wissen? | «Bis zu 80 Zeichen.» | Nur tatsächliche, relevante Bedingung; nicht jede Oberfläche mit Hilfe füllen |

Anschliessend erklärt die Seite die Staffelung von Information: unmittelbar notwendige Bedingung beim Feld, selten benötigte Erläuterung über erreichbare Hilfe, lange Fachinformation auf verlinkter Seite. Eine Formatbedingung erst nach dem Absenden zu verraten ist ein vermeidbarer Umweg. Umgekehrt sollte die Redaktion unnötige Formatstrenge an das Produkt zurückgeben, bevor sie diese ausführlich erklärt. WAI begründet Labels und nötige Anweisungen; die konkrete Staffelung und dauerhaft sichtbare Feldbeschriftung sind der hier vorgeschlagene Hausstil. [Quelle: Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html).

Pflicht und Optional benötigen eine formularweite Entscheidung. Keine universelle Sternchenpflicht festlegen. Falls ein Symbol verwendet wird, muss seine Bedeutung vor der Eingabe verständlich sein. Einheit und Bereich getrennt vom frei bearbeitbaren Wert benennen, etwa «Gewicht in kg»; Zusätze dürfen nicht bei Fokus verschwinden. Die technische Zuordnung führt die Komponentenseite.

Ein kleiner Vergleich «sichtbar / gesprochen» zeigt «Datei herunterladen» in beiden Spalten. Eine absichtlich falsche Gegenprobe zeigt sichtbar «Herunterladen», zugänglicher Name «Dokument speichern»; erklärt wird die fehlende Wortübereinstimmung. Gemäss SC 2.5.3 muss der zugängliche Name bei vorhandener Textbeschriftung deren Text enthalten; vollständige Gleichheit ist nicht ausnahmslos gefordert. Zusätzlicher Kontext kann sinnvoll sein. [Quelle: Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html).

Abnahme der Seite: Von Label, Hilfe und Aktion lässt sich die Aufgabe ohne Platzhalter rekonstruieren; Labels bleiben beim Wechsel von leer zu gefüllt eindeutig; die Beispielzuordnung erklärt mehr als «kurz schreiben». Gegenproben mit langer Gruppenbezeichnung und mehreren gleichnamigen Zeilenaktionen einbeziehen. Keine neue ARIA-Anleitung hier duplizieren.

## Seitenkonzept 3: Rückmeldungen und Bestätigungen — nur behaupten, was bekannt ist

Leitfrage: «Was weiss das System, was bedeutet das für die Person, und welcher nächste Schritt ist tatsächlich möglich?» Die Seite beginnt mit einer kleinen Zeitlinie desselben Speichervorgangs: Aktion → Übermittlung → bestätigte Annahme, Ablehnung oder unbekannter Ausgang. Unter jedem Zustand steht genau eine passende Aussage. So wird der Fehler «Gespeichert» direkt nach Klick sichtbar. Die Ablaufdefinition kommt aus Formular/Systemzuständen; diese Abbildung erklärt den jeweiligen Text, sie führt keine neue Zustandsmaschine ein.

| Bekannte Situation | Beispieltext, neutral und anwendungsunabhängig | Nutzbare Folge / Vorbedingung |
| --- | --- | --- |
| Pflichtangabe fehlt | «Einen Dateinamen eingeben.» | Feld erreichbar; Name nicht als ungültiges Format beschreiben |
| Nachweisbare Längenüberschreitung | «Den Dateinamen auf höchstens 80 Zeichen kürzen.» | Grenze nur nennen, wenn sie tatsächlich gilt |
| Fachliche Ablehnung | «Dieser Name ist bereits vergeben. Einen anderen Namen wählen.» | Nur wenn die Information bekannt und zur Anzeige geeignet ist |
| Liste lädt | «Einträge werden geladen.» | Noch keine Aussage über Leerheit |
| Anfangsbestand leer | «Noch keine Einträge.» | «Eintrag erstellen» nur mit entsprechender Möglichkeit |
| Filter ergibt null Treffer | «Keine Einträge für diese Filter.» | «Filter zurücksetzen» nur mit klarem Resetumfang |
| Laden fehlgeschlagen | «Einträge konnten nicht geladen werden.» | «Erneut laden» bei sinnvoller Wiederholung |
| Speicherung bestätigt | «Änderungen gespeichert.» | Ergebnis zugänglich, nicht bloss lokal gültige Angaben |
| Übermittlungsantwort unbekannt | «Der Speicherstatus ist noch nicht bekannt.» | «Status prüfen» nur bei vorhandenem Prüfweg; sonst den tatsächlich angebotenen Klärungsweg nennen |
| Teilweiser Erfolg | «3 von 5 Einträgen gelöscht. 2 konnten nicht gelöscht werden.» | Betroffene Einträge und weitere Möglichkeit getrennt zugänglich machen |
| Berechtigung fehlt | «Für diese Änderung fehlt die Berechtigung.» | Keinen erfundenen Supportkontakt oder garantierte Freigabe versprechen |

Diese Tabelle ist ein Musterregister mit Bedingungen, kein Copy-and-paste-Katalog beliebiger Erfolgstexte. Bei Fehlern, deren konkrete Ursache nicht bekannt ist, keine Ursache erfinden. «Die Verbindung ist unterbrochen» ist präziser als ein generischer Fehler nur dann, wenn es tatsächlich festgestellt wurde. Sensible Systemdetails und ungeprüfte Rohfehlermeldungen gehören nicht direkt in die Oberfläche.

Korrekturtexte benennen, soweit bekannt und angemessen, den Fehler und den möglichen Weg. Die WAI erläutert Korrekturvorschläge für automatisch erkannte Eingabefehler, wenn diese bekannt sind, mit Ausnahme bei Gefährdung von Sicherheit oder Zweck. Daraus folgt keine Pflicht, unbekannte Ursachen zu raten. [Quelle: Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html).

Bestätigungsdialoge erhalten eine eigene Vergleichsfläche, aber keine eigene Seite: «Sind Sie sicher?» mit «Ja / Nein» steht einem vollständigen neutralen Beispiel gegenüber: Titel «Eintrag endgültig löschen?», Folge «Der Eintrag kann danach nicht wiederhergestellt werden.», Aktionen «Abbrechen / Endgültig löschen». Die Endgültigkeit ist ausdrücklich Beispielannahme. Die Patternseite entscheidet zuvor, ob Bestätigung, Rücknahme oder keine Unterbrechung angemessen ist. Die Textseite erklärt, weshalb Objekt, Folge und Aktion zusammenpassen müssen. Bei mehreren Objekten muss klar sein, ob alle Treffer oder nur ausgewählte Einträge betroffen sind.

Statusansagen, sichtbare Inline-Meldung, Fehlerübersicht und Bestätigungsseite sind unterschiedliche Ausgabekontexte. Gleichen Sachverhalt bewahren, aber Wiederholung nicht ungeprüft vervielfachen. Ein bereits bekanntes Label in einer Fehlerübersicht hilft der Zuordnung; eine dreifach gleichzeitig angekündigte Meldung kann stören. Das technische Ankündigungs- und Fokusverhalten wird mit Barrierefreiheit/Komponenten geprüft, nicht durch guten Text behauptet.

Abnahme: Für jeden Text sind auslösendes Ereignis, belegter Zustand und mögliche Folge dokumentiert. Die Zustände «abgesendet», «angenommen», «nicht angenommen» und «unbekannt» bleiben sprachlich unterscheidbar. Eine Person kann im Teilfehler erkennen, welcher Anteil erledigt ist. «Abbrechen», «Zurück» und «Schliessen» versprechen keine Serverstornierung.

## Seitenkonzept 4: Formate und Übersetzung — Bedeutung erhalten, Darstellung anpassen

Die Seite beginnt mit einer Vergleichstafel aus drei Spalten: fachlicher Wert, Kontextentscheidung, sichtbare Darstellung. Das verhindert eine beliebige Galerie verschiedener Datumsformate.

| Fachliche Frage | Zu entscheiden | Beispiel / Erklärung |
| --- | --- | --- |
| Kalenderdatum oder Zeitpunkt? | Reines Datum ohne unbeabsichtigte Zeitzonenverschiebung; bei Zeitpunkt relevante Zone | «18. November 2026» gegenüber «18. November 2026, 14:30 Uhr, UTC»; Beispiele, kein Standardformat |
| Zahl oder Kennung? | Rechnen/vergleichen oder exakt wiedererkennen | Betrag formatieren; führende Nullen einer Kennung nicht entfernen |
| Welcher Betrag? | Währung, Präzision, Rundung und fehlende Werte | «12,50 EUR» als Beispiel, nicht Währung aus UI-Sprache ableiten |
| Null oder nicht vorhanden? | Fachliche Unterscheidung | «0» ist ein Wert; «Nicht angegeben» bezeichnet fehlende Angabe; «Nicht verfügbar» ist wiederum etwas anderes |
| Zeitpunkt relativ anzeigen? | Aufgabe und Rückkehrkontext | «Vor 2 Minuten» nur mit geklärter Aktualisierung und bei Bedarf präzisem Zeitpunkt; keine allein relative Frist |
| Bereich / Einheit? | Grenzen, Einheit und Genauigkeit | «10–20 kg» nur bei entsprechender fachlicher Bedeutung; Einheitenumrechnung separat klären |

Danach folgt die Trennung Eingabe/Ausgabe: Ein angenehm lesbares Datum ist nicht automatisch das einzige akzeptierte Eingabeformat. Format- und Interpretationsmöglichkeiten müssen Produkt und Plattform festlegen. Keine automatische Umdeutung eines mehrdeutigen Datums als redaktionelle Regel. Lokalisierte Anzeige getrennt von maschinenlesbarem Austausch und unveränderlichen Kennungen halten. Die spätere Ausarbeitung soll die gewählte Formatierungsbibliothek und tatsächlichen Locale-Daten prüfen; in diesem Audit wurden keine aktuellen CLDR-/Intl-Formatwerte verifiziert, deshalb keine verbindlichen Trennzeichen oder Locale-Matrix behaupten.

Übersetzung wird als vollständige Nachricht erklärt. Ein Vergleich zeigt fragmentiertes «{count}» + «Einträge ausgewählt» gegenüber einer zusammenhängenden Nachricht mit Kontext und definierten Variablen. Beispielausgaben «Kein Eintrag ausgewählt», «1 Eintrag ausgewählt», «2 Einträge ausgewählt» erklären den Bedarf; sie sind keine vollständige Pluralregel für alle Sprachen. Übersetzende benötigen Bedeutung der Variablen, Ort, Auslöser, Platzbedingungen, Screenshot und zugelassene Fachbegriffe. Variable Namen und vollständige Nachrichten sind ein Redaktionsvorschlag; konkrete Message-Syntax gehört zur technischen Umsetzung.

Die visuelle Erklärung zeigt dasselbe kleine Bedienfeld in drei Zuständen: kurzer Text, lange Übersetzung, vergrösserter Text. Beschriftete Markierungen machen Umbruch, wachsende Höhe und erhaltene Aktionsbezeichnung sichtbar. Keine Auswahl einer hübschen Kurzfassung als einzige Lösung. Lange Komposita, andere Glyphenbreiten und Zeilenhöhen werden zusätzlich benannt. W3C Internationalization begründet flexible Layouts und zeigt, dass insbesondere kurze Texte stark wachsen können. Es wird kein pauschales «30 Prozent Platz reichen» übernommen. [Quelle: Text size in translation](https://www.w3.org/International/articles/article-text-size).

Grenzen erklären: Kritische Aktionen und Fehlermeldungen dürfen durch Kürzung nicht mehrdeutig werden. Bei langen Nutzereingaben kann ein gekürzter Ausschnitt sinnvoll sein, wenn der vollständige Inhalt erreichbar bleibt; blosses Hover ist dafür auf Touch kein allgemeiner Ersatz. Fallbacksprache sichtbar und bewusst festlegen, nicht stillschweigend gemischte Sprachen als geprüft behandeln. RTL und eingebettete lateinische Kennungen als eigenen Prüffall planen; das Spiegeln einer Abbildung belegt weder Leserichtung noch korrekte Ausgabe. Übersetzungsqualität durch sprachkundiges Review prüfen, Pseudolokalisierung nur als Belastungstest für Platz und fehlende Übersetzung verwenden.

Abnahme: An Datum, Betrag und Kennung lässt sich erklären, was lokalisiert wird und was unverändert bleibt. Der Text behält seine Bedeutung mit 0/1/mehreren Werten, langen Variablen und fehlenden Angaben. Für jede unterstützte Locale sind Formatquelle, Zeitzonenentscheidung und fachliches Review bekannt. Aktuell keine Aussage, dass Arve solche Locales oder native Ausgaben bereits unterstützt.

## Verflechtungen und führende Orte

| Nachbarthema | Dort führend | Beitrag von Content Design und gezielter Rückverweis |
| --- | --- | --- |
| Input / künftiges Field | Anatomie, technische Zuordnung, Zustand | Label/Hint/Error als ausgearbeitetes Sprachbeispiel; auf «Beschriften» verweisen |
| Button / Link | Semantik und Verhalten der Aktion/Navigation | Handlung und Ziel verständlich benennen; Kontext ergänzen, ohne zugänglichen Namen abweichend zu ersetzen |
| Checkbox / Switch / Auswahl | Auswahlmodell, Zeitpunkt der Wirkung, Zustandsanzeige | Stabile Namen, verständliche Optionen, Gruppenbegriffe; «Aus» nicht mit «nicht gespeichert» verwechseln |
| Formulare | Prüfzeitpunkt, Fokus, Wiederaufnahme, Annahme | Sprachmuster mit denselben Zuständen; Formulierung entscheidet nicht, ob gespeichert wurde |
| Systemzustände / Suche / Tabellen | Suchraum, Wiederholung, Filterumfang, Teilfehler | Menge, Gültigkeit und nächste Aktion präzise benennen; Musterregister verlinken |
| Destruktive Aktionen | Risiko, Reversibilität, Bestätigung/Rücknahme | Objekt und Konsequenz; kein pauschales «endgültig» |
| Grundlagen / Layout | Schrift, Zeilenhöhe, Reflow, Platzierung und Inhaltspriorität | Fachliche Bedeutung, Übersetzungs- und Langtextproben; keine eigenen Font- oder Breitentokens |
| Barrierefreiheit | Prüfmethode und technische Nachweise | Sichtbarer/zugänglicher Name, verständliche Hilfe, Textalternativen und Kontext; keine Gesamtfreigabe aus Textreview |
| Plattformen | Lokalisierungsressourcen, Formatierer, native Namen/Ansagen, Systemdialoge | Gemeinsame Bedeutung, erlaubte plattformspezifische Formulierungen; Webdemo nicht als nativer Beleg |
| Pflege | Zuständigkeit, Änderung, Quellenreview, Veröffentlichung | Begriffseigner und sprachkundiges Review; geänderte Semantik einer Aktion verlangt Pattern-/Komponentenreview |

## CMS-Bedarf und Darstellungsgrenzen

Heute vorhanden: Hierarchie über `parent`, Sortierung, Summary, Richtext, Do/Don't mit Bild/Alternativtext sowie Vorlagen für Grundlage/Pattern/Komponente/Layout. Keine eigene Content-Vorlage; `guide` ist verfügbar. Für diese vier Seiten zunächst `overview` beziehungsweise `guide` und frei komponierten Text verwenden, statt künstlich Token-Quelle oder Zustandsmatrix in unpassende Felder zu schreiben. Nicht denselben Text in Vorlagen und Langtext wiederholen.

Der Renderer koppelt jede Abbildung an ein verpflichtendes Do/Don't-Prädikat. Eine neutrale Anatomie, Zeitlinie oder Formattafel ist jedoch keine Bewertung. Für hochwertige Umsetzung einen neutralen Figure-Block mit Bild, Bildunterschrift, Lehrsatz und längerer Textalternative vorsehen; bestehende Medienberechtigung auf die neue Referenzart bewusst erweitern und prüfen. Andernfalls neutrale Vergleiche zunächst als zugänglichen Text darstellen, nicht willkürlich als «Do» etikettieren.

Weiterer konkreter Bedarf: stabile Abschnittsanker; semantische Vergleichstabelle oder geeigneter Vergleichsblock, dessen Reihenfolge auf schmalen Flächen erhalten bleibt; Quellen mit Datum und Aussagebezug; Vorschlag/entschiedene Hausregel/belegte Anforderung getrennt vom Publikationsstatus; verwandte Seiten als auflösbare Relation. Die derzeitige Richtext-Konfiguration und der Renderer wurden nicht auf vollständige Tabellen-/Ankerunterstützung geprüft: vor Umsetzung nachweisen, nicht voraussetzen. MCP-Ausgabe muss Bedingungen, Tabellen, Quellen und Textalternativen erhalten; kein Bild darf alleiniger Träger einer Regel sein.

Ein separates Produkt-String-Management ist hier kein notwendiger CMS-Ausbau. Das Handbuch dokumentiert Regeln und Muster, nicht automatisch sämtliche Laufzeittexte. Erst bei tatsächlichem Wiederverwendungsbedarf ein kleines strukturiertes Musterregister erwägen: Situation, belegte Vorbedingung, Text, Variablen, Folgeaktion, Plattform/Locale, Status und führendes Pattern. Kopierfunktion darf den Vorbedingungskontext nicht unterschlagen. Übersetzung des Handbuchs und Übersetzung einer Produktoberfläche bleiben getrennte Vorhaben.

## Umsetzungsfolge und Abnahme

1. **Sprachliche Entscheidungen vorbereiten:** Anrede für Handbuch und Produkt, Sprach-/Regionsumfang, bevorzugte Begriffe und Status von Hausregeln festhalten. Offene Entscheidungen nicht durch neue Beispieltexte scheinbar lösen. Verantwortliche Redaktion sowie Produkt- und Sprachreview benennen.
2. **Beschriften und Rückmeldungen gemeinsam ausarbeiten:** Bestehende Input-/Formularreferenzen als Fälle nutzen. Zuerst Rollen und belegte Zustände prüfen, dann die Mikrotexte formulieren. Generische Wiederholungsaufforderung gegenüber unbekanntem Speicherergebnis ausdrücklich begrenzen. Checkbox-/Switch-Beispiele als Gegenprobe zur reinen Verbregel verwenden.
3. **Formate und Übersetzung konkretisieren:** Unterstützte Locales und Plattformen ermitteln, Primärquellen zum tatsächlich eingesetzten Formatierer lesen, Zahlen-/Datumsbeispiele reproduzierbar prüfen. Übersetzungs- und Langtextproben vor festen Layoutannahmen erstellen. Fachliche Kalenderdaten und Zeitpunkte getrennt testen.
4. **Einstieg und Darstellungen komponieren:** Ton aus den ausgearbeiteten Beispielen erklären. Neutralen Bild-/Vergleichsblock nur bei tatsächlichem Bedarf ergänzen. Grafiken unmittelbar bei der jeweiligen Entscheidung, Quellen und Nachweise kompakt danach. Lange Seite durch sinnvolle Abschnittsanker erschliessen, nicht durch weitere künstliche Unterseiten.
5. **Querreview und Veröffentlichung vorbereiten:** Jede Regel hat einen führenden Ort; alte Verweise auf Content Design bleiben auflösbar. Pattern-/Komponentenseiten erhalten konkrete Links und kurze lokale Beispiele. Veröffentlichung erst nach entsprechendem Auftrag; danach Portal und veröffentlichte MCP-Fassung auf dieselben Bedingungen und Aussagen prüfen.

Zwei gemeinsame Reviews sind verbindliche Abnahmeschritte dieses Plans: Mit Patterns werden unbekannter Speicherstand, sichere Wiederholung und tatsächlich vorhandenes Klärungsangebot anhand desselben Ablaufs geprüft. Mit Komponenten werden stabile Switch-/Optionslabels und die Zuordnung sichtbarer und zugänglicher Namen am selben Beispiel geprüft. Die dort führenden Verhaltensregeln werden hier nur referenziert; Content Design pflegt die dazu passenden Formulierungsbedingungen, keine zweite Regelversion.

Fachliche Abnahme erfolgt mit zusammenhängenden Aufgaben: Eine Person beschriftet ein Feld mit echter Formatbedingung, schreibt die Korrektur, unterscheidet bestätigte Speicherung von unbekanntem Ausgang und erklärt eine Mehrfachaktion. Anschliessend überträgt sie das Beispiel auf einen Switch, eine gefilterte Liste und ein lokalisiertes Datum. Erfolg bedeutet nicht identische Wörter, sondern dieselbe zutreffende Aussage und einen tatsächlich vorhandenen nächsten Schritt.

Visuelle Abnahme umfasst die vier vorgesehenen Erklärungen (Tonvergleich, Feldrollen, Zustands-/Textzeitlinie, Formate/Langtext), ihre Textalternativen, lesbare schmale Reihenfolge und vergrösserten Text. Sprachreview prüft Terminologie, Anrede, Variablen und lange Übersetzungen; Barrierefreiheitsreview prüft Namen, Zuordnung und Ankündigung im tatsächlichen Ablauf. Dokumentierte Plattform-/Locale-Abdeckung ersetzt kein pauschales «barrierefrei» oder «internationalisiert».

Für diesen Plan ausgeführt: lokale Inhalts- und Schemalesung, veröffentlichte CMS-Inhaltsabfrage unter Schreibschutz, Abgleich mit Nachbarplänen und gezielte Primärquellenlektüre. Die vorgeschlagenen Texte, Darstellungen, Locale-Werte und CMS-Erweiterungen sind noch nicht umgesetzt oder praktisch abgenommen.
