# Eintrag erstellen und bearbeiten · konkrete Arbeitslücken

Stand: 18. November 2026 · Arve/shadcn · redaktionelle Bestandsprüfung für einen ersten arbeitsfähigen Web-Piloten auf Desktop und mobilen Browsern. Ziel ist Gestaltungsfreigabe und eine eindeutige Teamübergabe, keine Backend-Umsetzung, Contractänderung oder Funktionsabnahme.

## Ausgangslage und Belege

Der Formularweg ist bereits substanziell dokumentiert: acht Zustände mit Weiterwegen, Unterscheidung bestätigte Annahme / ausdrückliche Ablehnung / unbekanntes Ergebnis, Korrektur und Werterhalt, vier Meldungsvergleiche sowie konkrete Tastatur-, Screenreader-, Zoom-, Touch- und Serverprüfaufträge. Diese Inhalte fehlen **nicht**. Offen sind verantwortete Produktentscheidungen und die wiederverwendbare Zusammenstellung für ihre Anwendung. Die Studie stellt Erstellung dar; Bearbeiten eines bereits gespeicherten Eintrags benötigt zusätzliche Entscheidungen.

Gelesen wurden der [Inhaltsstandard](../content-standard/README.md), [Grundlagen/Komponenten](../content-standard/foundations-components.md), die aktuellen `scripts/content/form-{patterns,content,inclusion,workflow}-release.ts` und der [Integrationsbericht](../form-workflow-release.md). Am 18.11.2026 zusätzlich mit BrowserOS neo die tatsächlich veröffentlichten Seiten (rein lesend):

- **F:** [Formulare und Validierung](http://127.0.0.1:3010/systems/shadcn/formulare-validierung), insbesondere «Wann prüfen?», «Fehler korrigieren», «Unbekanntes Ergebnis klären», «Abbrechen und später fortsetzen», «Vor einer Produktfreigabe entscheiden und prüfen».
- **I:** [Input](http://127.0.0.1:3010/systems/shadcn/components/input), insbesondere «Lokale Vorschau und noch offene Zusammenstellung», Plattformstand und technischer Contract.
- **C:** [Content Design](http://127.0.0.1:3010/systems/shadcn/content-design), insbesondere «Vor der Eingabe», «Vier Meldungen», «Bestätigung und Erhalt», «Quelle, Empfehlung und offener Review».
- **A:** [Barrierefreiheit und inklusive Gestaltung](http://127.0.0.1:3010/systems/shadcn/barrierefreiheit), Aufgaben 1–5, weitere Bedingungen und Prüfstand.
- **Q:** [Control-Demo](../../../src/demos/shadcn/controls.ts), [Button-Demo](../../../src/demos/shadcn/button.ts). Input zeigt Label, Text und Disabled; Button eine lokale Beispielaktion und Statusmeldung, keinen Speicherablauf.
- **K:** [Input-README](../../../src/contracts/libraries/shadcn/5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed/components/input/README.md), daneben `interface.json`, `behavior.scxml`, `accessibility.html`. Draft mit `value`, `SET_VALUE`, nativem Input-Ereignis; Fokus/Escape ändern den Wert nicht. Kein Formularzustand oder Dirty-Modell. Die veröffentlichte Seite nennt Export-Revision `70bc11b26ef7f00f952db731e1397a265648922a9e79181db08ac745ea0f7c76`; Importverzeichnis und Exportrevision sind unterschiedliche Referenzen und nicht auszutauschen.

Die vorhandene `input.fig` und die drei weiteren Komponentenressourcen werden nicht als fehlend bewertet. Gemeinsame Ressourcen-, Varianten- und Referenzkettenfragen gehören in die übergreifende Basisliste. Hier geht es um die fehlende **Formularzusammenstellung**. Die folgenden Abnahmeszenarien beschreiben künftig erforderliche Ergebnisse, keine durchgeführten Tests. Es wurde keine neue Funktionsabnahme erfunden oder ausgeführt.

Typen: **D** = vorhandene Regel für die Aufgabe unzureichend erschlossen; **E** = offene Design-/Produktentscheidung; **B** = fehlender wiederverwendbarer Baustein oder Gestaltungsressource im geprüften Bestand. P0 blockiert die konkrete Pilotfestlegung, P1 die wiederholbare Umsetzung/Übergabe, P2 darf bei ausdrücklich engerem Pilotumfang folgen. Benannte Zuständigkeiten sind Vorschläge, noch keine Zuweisungen.

## Priorisierte Lücken

### EDIT-01 · Echte Feldbedingungen und Pilotumfang entscheiden

**P0 · E · Pilotblocker.** C bezeichnet 80 Zeichen und Bedingungen ausdrücklich als erfunden; I beschränkt Input auf kurze einzeilige Werte. Daraus lässt sich noch kein reales Erstell-/Bearbeitungsformular ableiten.

**Erforderliches Ergebnis:** Produktverantwortung und Content legen pro Pilotfeld Zweck, Pflicht/optional, erlaubte Werte, wirkliche Grenzen und fachliche Ablehnungen fest; dazu Erstellen-/Speichern-Aktion und Resultatbezeichnung. Zusätzliche Eingabetypen nur bei tatsächlichem Bedarf aufnehmen. **Abhängigkeit:** BASE-01 (Pilotdatenfall), Sprache und Zielgruppe.

**Abnahmeszenario:** Eine zweite Person kann für leeren, gültigen und fachlich abgelehnten Wert dieselbe Hilfe und Korrektur wählen, ohne die 80-Zeichen-Beispielregel zu übernehmen. Belege: C «Vor der Eingabe», «Quelle …»; I «Zuerst den benötigten Wert klären».

### EDIT-02 · Prüfzeitpunkt und Fokusvorschlag für den Piloten entscheiden

**P0 · E · Pilotblocker.** F liefert bereits konkrete Vorschläge, kennzeichnet die Hausregel aber ausdrücklich als offen. Die Lücke ist nicht fehlende Validierungsdokumentation.

**Erforderliches Ergebnis:** Produkt-/Accessibility-Review entscheidet Erstprüfung, gegebenenfalls Prüfung beim Feldverlassen, Aktualisierung gemeldeter Fehler und Fokusziel nach einem/mehreren Fehlern. Entscheidung mit Geltung und verantwortlicher Rolle am führenden Pattern festhalten. **Abhängigkeit:** EDIT-01; Feldzusammenstellung EDIT-03.

**Abnahmeszenario:** Für unberührtes leeres Feld, Korrektur eines Fehlers und erneutes Absenden ist jeweils festgelegt, wann Meldung und Fokus wechseln. Die vorhandenen Aufgaben A 1–3 werden auf genau diese Entscheidung bezogen; ihr Prüfergebnis bleibt bis Durchführung offen. Belege: F «Wann prüfen?», «Fehler korrigieren», «Vor einer Produktfreigabe …»; A 1–3.

### EDIT-03 · Wiederverwendbare Feldzusammenstellung liefern

**P1 · B · Pilotblocker für ein Formular mit Hilfe/Fehlern.** I benennt Hilfe, Fehler und Schreibschutz ausdrücklich als Gestaltungsziele; Q und K liefern nur das einfache Feld. Vorhandene `.fig`-Feldvarianten ersetzen keine spezifizierte Zusammenstellung.

**Erforderliches Ergebnis:** Wiederverwendbare Gestaltungs- und Integrationsreferenz für Label, Pflichtkennzeichnung, Wert, Hilfe und Feldfehler; zugeordnete Benennung/Beschreibung, Fehlerstatus und gleichzeitigen Fokus festhalten. Schreibschutz nur dann ergänzen, wenn der Pilot ihn benötigt; nicht durch Disabled vortäuschen. **Abhängigkeit:** EDIT-01/02, BASE-02 (visuelle Referenz) und BASE-03 (Teamressourcen).

**Abnahmeszenario:** Ein Team kann ein fehlerhaftes Feld mit erhaltenem Wert und langer Hilfe zusammensetzen und nach Korrektur nur den veralteten Fehler entfernen. A 1, 3 und 5 liefern den vorhandenen Prüfauftrag. Belege: I «Lokale Vorschau …»; Q `spartan-input`; K `accessibility.html` und `interface.json`.

### EDIT-04 · Fehlerübersicht und Vorgangsrückmeldung als Zusammenstellung bestimmen

**P1 · B · Pilotblocker für Vorgangsrückmeldung; Übersicht nur bei Mehrfeldpilot.** Die Regeln und Texte sind da, eine wiederverwendbare Zusammensetzung für Übersicht, Feldlinks und die drei Ergebnisarten ist in den gesichteten Demos nicht vorhanden. Die lokale Button-Statusmeldung belegt sie nicht.

**Erforderliches Ergebnis:** Designreferenz für Platzierung, Dauer und erlaubte Folgeaktionen der Rückmeldungen; bei mehreren Feldern Fehlerübersicht mit Fokus-/Feldverknüpfung. Fokusübernahme und Statusansage gemeinsam beschreiben, ohne pauschal jeden Zustand als Alert zu behandeln. **Abhängigkeit:** EDIT-02/03/05, gemeinsame Layout-/Feedbackgrundlagen.

**Abnahmeszenario:** Ein und derselbe Ablaufentwurf zeigt laufend, bestätigt, ausdrücklich abgelehnt und unbekannt unterscheidbar. Im Mehrfeldfall führt jede Korrektur zu ihrem Feld. Vorhandene Prüfaufgaben A 2 und 4 bleiben die Prüfbasis. Belege: F «Fehler korrigieren» und Studie; C «Vier Meldungen»; A 2/4; Q Button.

### EDIT-05 · Annahme und unbekanntes Ergebnis mit realem Produktweg verbinden

**P0 · E · Pilotblocker.** F/C erklären die Unsicherheit bereits präzise; Statusabfrage, sichere Wiederholung und konkreter Klärungsweg sind ausdrücklich nicht nachgewiesen.

**Erforderliches Ergebnis:** Produktverantwortung definiert für die Gestaltung, welche Information Annahme/Nichtannahme bestätigen würde, wie ein ausgelöster Vorgang zugeordnet bleibt, welche Wiederholung zulässig ist und welches erreichbare Ziel bei Unklarheit angeboten wird. Der Gestaltungsentwurf kennzeichnet unbelegte Fähigkeiten als Voraussetzungen. Ein erreichbarer Supportweg kann eine Statusabfrage ersetzen; keine neue Fähigkeit allein wegen des Musters voraussetzen. Ein Dienst muss für diese Gestaltungsentscheidung nicht neu gebaut werden; reale Funktionsbelege sind erst bei entsprechender Fähigkeitsbehauptung nötig. **Abhängigkeit:** BASE-01/04 (Pilotfall und verantwortete Regeln), EDIT-04 und EDIT-07.

**Abnahmeszenario:** Für «Antwort nach Annahme verloren» und «während Übermittlung verlassen, dann zurückkehren» liegt ein konkreter Ablauf vor, der weder sicheren Misserfolg noch automatisches erneutes Senden behauptet. Dies sind bereits die Prüffälle F/A 4; die Dienstprüfung wurde hier nicht durchgeführt. Belege: F «Unbekanntes Ergebnis klären», «Abbrechen …»; C «Wann ist Erneut versuchen …».

### EDIT-06 · Bearbeiten eines bestehenden Werts und ungespeicherte Änderungen regeln

**P0 · E · Pilotblocker für Bearbeiten.** F/C führen «Projekt erstellen». K kann Werte übernehmen und ändern, besitzt aber keine fachliche Unterscheidung zwischen zuletzt gespeichertem Ausgangswert und ungespeicherter Änderung.

**Erforderliches Ergebnis:** Bearbeitungsvariante des bestehenden Patterns: Herkunft/Aktualität des Ausgangswerts, Bedeutung von «geändert», Rückkehr zum Ausgangswert, Verhalten bei unverändertem Speichern und Übergang nach bestätigtem Speichern. Falls parallele Änderung möglich ist: Konfliktentscheidung oder begründete Begrenzung des Piloten festhalten, nicht still überschreiben. **Abhängigkeit:** EDIT-01/05, Detail-/Rückkehrkontext.

**Abnahmeszenario:** Ausgangswert öffnen → ändern → ursprünglichen Wert wieder einsetzen → erneut ändern → speichern: Das Team kann für jeden Schritt benennen, was nur lokal geändert und was bestätigt gespeichert ist. Das ist eine künftig zu entscheidende Designsequenz, keine behauptete Produktfunktion. Belege: F Erstellstudie; C Erstellbegriffe; K `SET_VALUE`/`NATIVE_INPUT`.

### EDIT-07 · Abbruch, Rückkehr und Erhalt verbindlich abgrenzen

**P0 · E · Pilotblocker; dauerhafte Entwürfe optional später.** F beschreibt die nötigen Unterscheidungen, lässt aber ausdrücklich offen, welche Angaben Abbruch, Reload oder Sitzungsende überstehen.

**Erforderliches Ergebnis:** Produktentscheidung je Rückweg: unverändert verlassen, ungespeicherte Änderung verlassen, während Übermittlung verlassen, zurückkehren. Verlust/Erhalt vor der Entscheidung benennen; Ziel und gegebenenfalls Fokus nach Rückkehr bestimmen. Der Pilot darf dauerhafte Entwürfe ausschliessen, muss das ehrlich erklären. **Abhängigkeit:** EDIT-05/06 und gewählter Seiten-/Dialogkontext.

**Abnahmeszenario:** Ein gültiger Wert bleibt bei fachlicher Ablehnung zur Korrektur da; bei Abbruch und Rückkehr stimmt die angekündigte Folge mit der Spezifikation überein. Während laufender Übermittlung wird Verlassen nicht mit Stoppen gleichgesetzt. Vorhandene Prüfbasis: F «Abbrechen …»; A 3/4; C «Bestätigung und Erhalt …».

### EDIT-08 · Lokale Input-Regeln für Bearbeiten verständlich erschliessen

**P1 · D · vor technischer Pilotübergabe; mit EDIT-06 bündeln.** K erklärt bereits Host-Updates per `SET_VALUE`, native Eingabe/IME und Werterhalt bei Escape. Diese Aussagen stehen im technischen Draft; der fachliche Bearbeitungsweg ordnet sie noch nicht ein. Der Contract darf dafür nicht erweitert oder als Speicherzusage gelesen werden.

**Erforderliches Ergebnis:** Kurze, genaue Verweiskette vom Bearbeitungsabschnitt zu diesen vorhandenen lokalen Regeln samt Grenze: Escape verwirft nicht automatisch den Formularentwurf; Host-Synchronisation entscheidet nicht über Annahme, Konflikt oder Dirty-Status. **Abhängigkeit:** EDIT-06/07, BASE-03 (Teamressourcen/Referenzkette).

**Abnahmeszenario:** Eine zweite Person beantwortet ohne mündliche Ergänzung, wer den Ausgangswert setzt und warum Escape im Feld keine Abbruchbestätigung oder Rücksetzung bedeutet. Belege: K README/SCXML; I technischer Contract. Kein neuer Funktionsnachweis erforderlich, um die bestehende Regel korrekt zu verlinken.

### EDIT-09 · Desktop-/Mobilanordnung des Formularwegs festlegen

**P1 · E · Pilotblocker für gemeinsame Desktop-/Mobilgestaltung.** I/A enthalten bereits gute Regeln für Umbruch, Bildschirmtastatur, geringe Höhe, Zoom und nicht verdeckten Fokus. Es fehlt im geprüften Formularpaket die konkrete Anordnung von Feldern, Übersicht, Vorgangsmeldung, Speichern und Abbruch für den gewählten Pilotkontext.

**Erforderliches Ergebnis:** Ein nachvollziehbarer Layoutentscheid für breite/schmale Flächen und geringe verfügbare Höhe, einschliesslich Aktionsreihenfolge und Position der Rückmeldung. Fixierte Aktionen nur mit geklärtem Platz-/Verdeckungsverhalten; ein eigenes mobiles Framework ist nicht gefordert. **Abhängigkeit:** EDIT-03/04/07, übergreifender Seitenrahmen und Layoutregeln.

**Abnahmeszenario:** Mit langen Labels/Fehlern sind Feld und nächste Aktion in beiden Entwürfen erreichbar; die vorhandenen A-5-/Touch-Prüfaufträge lassen sich einem konkreten Prüfobjekt zuordnen. Die früheren Breitenprüfungen der Handbuchseiten sind kein Nachweis für dieses Produktformular. Belege: I «Platz nach Inhalt bemessen»; A 5/weitere Bedingungen; Integrationsbericht.

## Reihenfolge und Grenze

Zuerst EDIT-01/02/05/06/07 als begrenzte Pilotentscheidungen treffen; parallel vorhandene Regeln über EDIT-08 erschliessen. Daraus EDIT-03/04 und EDIT-09 als zusammenhängende Gestaltungsreferenz ableiten. Danach BASE-05 (unabhängiger Gestaltungstest) auf den konkreten Entwurf anwenden. Die **bereits vorhandenen** Funktionsprüfaufträge bleiben für eine spätere konkrete Webumsetzung erhalten; falls diese als funktionierend behauptet wird, Ergebnisse mit den in A verlangten Kontextangaben dokumentieren. Fehlende Durchführung ist kein fehlender Prüfplan.

Dauerhafte Entwürfe, Mehrschrittformulare, zusätzliche Eingabekomponenten und Übersetzungs-/RTL-Umfang dürfen später folgen, soweit der Pilot sie ausdrücklich nicht verlangt. Weder native Apps noch ein kompletter neuer Komponenten-Katalog werden aus dieser Lückenliste abgeleitet. Fachstatus bleibt offen; Inhaltsabdeckung und Umsetzungsnachweis sind getrennt.
