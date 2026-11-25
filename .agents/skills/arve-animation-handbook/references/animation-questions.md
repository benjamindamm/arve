# Animation: Fachfragen und erwartete Antworten

Version 0.2 · Autorenprototyp aus FND-MOT und dem gemeinsamen Grundlagenrahmen. Keine universelle Animationssprache, Dauer- oder Verlaufsskala.

**Grundfragen** geben Orientierung im aufgenommenen Thema; eine konkrete offene Entscheidung kann die Antwort sein. **Bedingte Fragen** vertiefen relevante Abläufe. **Vertiefungen** erklären Zusammenhänge und Alternativen ohne feste Seitenaufteilung.

## Grundfragen

| ID | Frage | Woran erkennt man eine brauchbare Antwort? |
| --- | --- | --- |
| ANM-01 | Für welches System, welche Aufgaben und Plattformen gilt das Kapitel? Dokumentieren oder entwerfen wir? | Benannter Umfang und Gestaltungsziel; funktionale Übergänge, Feedback und dekorative Effekte nach tatsächlichem Bedarf. „Keine Animation“ ist eine mögliche bewusste Regel. |
| ANM-02 | Wo sind geltende Rezepte, Verhaltenszustände und Werte definiert? Was ist Quelle, Umsetzung oder Vorschau? | Auflösbare Referenz mit Stand/Scope. Einzelne Spinner-, Skeleton- oder Portalwerte nicht zur Systemskala erklären. Fehlende Belege und Widersprüche sichtbar. |
| ANM-17 | Welche semantische Rolle hat Bewegung im jeweiligen Kontext? | Immer behandeln: Rolle → Auslöser/Kontext → Aussage → Anfang/Ziel → unzulässige Suggestion → reduzierte Alternative. Mikroanimation ist ein Umfang, keine Bedeutung. Wahrgenommene Eingabe, lokaler Wechsel und bestätigter Erfolg auseinanderhalten; offene Rollen im Bestand benennen. |
| ANM-03 | Wann hilft Animation und wann genügt die direkte Veränderung? | Aufgabe, beabsichtigte Information/Beziehung und begründete Auswahl. Keine reine Effektliste oder nachträglich erfundene Absicht. Eine relevante Alternative erklärt die Entscheidung. |
| ANM-04 | Was löst den Ablauf aus und was verändert sich zwischen Anfang und Ziel? | Zustände, betroffene Eigenschaften, Weg/Bezug und Auslöser konkret. Visueller Übergang nicht mit fachlichem Zustand oder tatsächlichem Verarbeitungserfolg gleichsetzen. |
| ANM-05 | Welche Dauer, Verzögerung und Wiederholung gilt wofür? | Auflösbare Werte/Regeln mit Einheit, Aufgabe und Grenzen. Einmaliger Übergang, Zyklusdauer und Wartezeit auf Daten unterscheiden. Keine allgemeine Mindest-/Höchstdauer erfinden. |
| ANM-06 | Wie verläuft die Veränderung zeitlich und warum passt dieser Verlauf? | Konkrete Kurve/aufgelöste Referenz oder begründetes dynamisches Verhalten, etwa Federparameter. Beschleunigung und Abbremsen am gleichen Zusammenhang verständlich; ein freundlicher Name allein genügt nicht. |
| ANM-07 | Was gilt bei Wiederholung, Umkehr, Abbruch und Navigation während des Ablaufs? | Zustandsbezogene Behandlung der relevanten Eingaben; zum Beispiel Fortsetzen oder sinnvoller unmittelbarer Wechsel. Keine unkontrollierte Effektwarteschlange oder erfundene allgemeine Eingabesperre. |
| ANM-08 | Wie bleibt die Darstellung mit reduzierter oder ohne Animation gleichwertig? | Benannte Alternative mit erhaltener Information, Orientierung und Bedienung; tatsächliche Präferenz, lokale Option und Vorschausimulation getrennt. Eine kurze Dauer allein belegt keine geeignete Reduktion. |
| ANM-09 | Was bleibt während des Übergangs lesbar, bedienbar und im Fokus? | Führende Komponenten-/Patternregeln referenziert und im Ablauf erklärt. Fokus, DOM-/Lesereihenfolge und visuelle Reihenfolge nicht automatisch gleichsetzen. Rückmeldung und Zugriff nicht durch dekorative Verzögerung blockieren. |
| ANM-15 | Welche Anforderungen und Prüfungen gelten, was ist tatsächlich nachgewiesen? | Gewählte Anforderungsquelle und Geltung, konkretes Prüfobjekt, Methode/Umgebung und Ergebnis oder offener Auftrag. Visueller Ablauf, Zeitmessung, Präferenztest und Nutzungswirkung auseinanderhalten. |
| ANM-16 | Welche Entscheidungen, Ausnahmen und Nachweise fehlen, wer klärt sie und was löst eine Überprüfung aus? | Bestand, lokale Vorschläge und mögliche Erweiterungen unterscheidbar. Verantwortung nur soweit bekannt; Änderungen an Rezept, Zustand, Plattform oder Ressourcen mit Auswirkungen einordnen. |

## Bedingte Fragen

| ID | Auslöser | Frage | Brauchbare Antwort |
| --- | --- | --- | --- |
| ANM-10 | Lade-, Fortschritts- oder Verarbeitungszustände werden animiert | Was sagt der Indikator tatsächlich aus, wie endet er bei Erfolg/Fehler/Abbruch, was bleibt ohne Animation? | Bestätigte Zustände und unbekannte Dauer getrennt; kein falscher Prozentwert oder vorweggenommener Erfolg. Führendes Zustands-/Feedbackpattern und verständliche Alternative referenziert. Spinnerumlauf ist keine Verarbeitungsdauer. |
| ANM-11 | Mehrere Elemente oder Phasen wirken zusammen | Was läuft gleichzeitig, versetzt oder nacheinander und warum? | Nachvollziehbare Beziehung/Abfolge mit Priorität; Gesamtzeit und Unterbrechung gemeinsam betrachten. Lokale Verzögerungen dürfen wichtige Information nicht unnötig spät verfügbar machen. Keine Pflicht zu gestaffelten Effekten. |
| ANM-12 | Automatisch gestartete, wiederholte, blinkende oder sich aktualisierende Inhalte kommen vor | Welche Kontrolle ist nötig und wie bleibt notwendige Information zugänglich? | Startbedingung, Pause/Stop/Ausblenden oder andere anwendbare Regel mit Quelle/Geltung. Interaktionsanimation und automatische Aktualisierung unterscheiden; keine universelle Fünf-Sekunden-Ausnahme. Flashing separat beurteilen. |
| ANM-13 | Kleine/grosse Ansichten, unterschiedliche Inhalte, Eingabearten oder Plattformen verändern den Ablauf | Was bleibt gleich und was wird angepasst? | Tatsächliche Varianten oder offene Zuordnung, etwa Weg, Platz, lange Inhalte und native Präferenz. Keine pauschale Regel „Mobile schneller“ und keine native Freigabe durch Webbeispiel. |
| ANM-14 | Rendering, Ressourcen oder Gerätebedingungen beeinflussen die beabsichtigte Darstellung | Wie bleiben gültiger Zustand, Information und Zugang bei stockendem oder ausfallendem Übergang erhalten? | Relevante Beobachtungen/Prüfaufträge und robuste Alternative, etwa direkter gültiger Zustand. CSS-Dauer bestätigt keine flüssige Darstellung; kein universelles Bildratenversprechen oder verpflichtendes Optimierungsrezept. |

## Vertiefung und Anwendung

- **ANM-03/04:** Kontext, Anfang und Ziel erläutern; danach zeigen, was der Übergang zusätzlich verständlich macht. Eine Vorher-/Nachherbeschreibung bleibt ohne Abspielen nutzbar.
- **ANM-05/06:** Dauer und Verlauf getrennt vergleichen. Strecke, Inhalt und nicht untersuchte Parameter möglichst konstant halten. Zeitlupe als Analyseansicht kenntlich machen.
- **ANM-07–09:** Schliessen während des Öffnens, erneutes Aktivieren oder Navigation nach Bedarf durchgehen; danach dieselbe Aufgabe ohne Animation lösen. Bestehendes Komponentenverhalten nicht zur hübscheren Demonstration verändern.
- **ANM-10–14:** tatsächliche Lade-, Sequenz-, Automatik- oder Plattformfälle vertiefen. Eine kleine Auswahl muss nicht jeden Animationsbereich erfinden.

Ein Anwendungsgang benennt Auswahl, Rezept, relevante Unterbrechung/Änderung und reduzierte Alternative mit ihren Fundstellen. Lücken konkret halten, keine Zusatzregeln als vermeintlich bekannten Kontext hinzufügen. Das ist eine redaktionelle Prüfung der Anleitung, kein Nutzungsnachweis.

## Gegenbeispiele für die Autorenprüfung

- 1000-ms-Spinner: nicht daraus ableiten, dass ein Vorgang eine Sekunde dauert oder alle Übergänge diese Dauer verwenden.
- 300-ms-Vorschau: keine allgemeine Systemvorgabe aus ihrem Funktionieren ableiten.
- Gleich lange Bewegung mit anderer Kurve: nicht als reine Dauervariante beschreiben.
- Animation endet vor der Serverantwort: keinen bestätigten Erfolg behaupten.
- Erneuter Klick während des Öffnens: Verhalten bestimmen statt unbemerkt mehrere Läufe anzuhängen.
- Ausblenden vor dem Fokuswechsel: konkrete Reihenfolge der Komponente prüfen statt eine kurze Dauer als Lösung auszugeben.
- Reduzierte Darstellung ohne Spinner: laufenden Vorgang trotzdem verständlich anzeigen.
- Weniger Bewegung durch schnelle Skalierung: kürzer ist nicht automatisch geeigneter.
- Autoaktualisierung nach vier Sekunden: keine pauschale Freigabe aus einer Fünf-Sekunden-Grenze ableiten.
- Automatik pausiert nur solange ein Element fokussiert ist: Kontrollierbarkeit anhand der anwendbaren Regel beurteilen.
- Ausgeblendeter Tab oder langsames Gerät: vorgegebene Dauer beweist keinen beobachteten Ablauf.
- Native App: ein vorhandener Web-Präferenzschalter bestätigt keine native Umsetzung.
