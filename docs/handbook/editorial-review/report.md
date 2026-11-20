# Kritische Lektüre des shadcn-Handbuchs

Stand: 20. November 2026. **50 von 50 veröffentlichten Seiten gelesen; 92 konkrete sprachliche Befunde.** Neun Seiten haben eine zentrale Verständnishürde (P1), 26 gezielten Redaktionsbedarf (P2), sechs nur kleinere Schwächen (P3). Bei neun Seiten wurde kein konkreter sprachlicher Änderungsbedarf festgestellt. Das ist eine priorisierte Beobachtungsliste, keine Neufassung und keine fachliche oder technische Abnahme.

Das Handbuch hat bereits viele verständliche Beispiele und brauchbare Gestaltungsregeln. Seine grösste sprachliche Schwäche ist der Wechsel der Perspektive: Es spricht zuerst zu Menschen, die etwas gestalten wollen, und kurz darauf wie ein internes Spezifikations-, Forschungs- oder Veröffentlichungsprotokoll. Dieser Wechsel betrifft ganze Absätze, Zusammenfassungen und Bildunterschriften; eine Liste verbotener Wörter würde ihn nicht beheben.

## Zuerst lesen: die neun Seiten mit P1-Befunden

Die Reihenfolge dient der nächsten kritischen Seitenlektüre. Sie ist kein Auftrag zur Umsetzung.

| Seite | Konkrete Stelle | Wirkung beim Lesen |
|---|---|---|
| [detail](http://127.0.0.1:3010/systems/shadcn/detailseite) | «Der typische Regionsplan»; «die Detailidentität bleibt davon unabhängig» | Ein einfaches Seitenschema wird wie ein neues Fachmodell benannt. Schon der erste Schemapunkt verlangt Übersetzungsarbeit. |
| [Formulare und Validierung](http://127.0.0.1:3010/systems/shadcn/formulare-validierung) | «den Speicherausgang verständlich zeigen»; «1–80 Unicode-Graphemcluster nach Randtrim» | Der Einstieg und die ersten Entwurfsregeln setzen technische Kurzsprache voraus. |
| [Laden, leer und Fehler](http://127.0.0.1:3010/systems/shadcn/laden-leer-fehler) | «Erstleere»; «Unknown · Speicherausgang unklar» | Die Überschriften sind schwerer verständlich als die direkt darunterstehenden Beispielmeldungen. |
| [UX-Patterns](http://127.0.0.1:3010/systems/shadcn/patterns) | «Kriterien entwerfen»; «Angewandten Kontext lesen» | Nutzerhandlung, Gestaltungsarbeit und Forschungsmodell vermischen sich bereits beim zuerst angezeigten Ablauf. |
| [Mit dem Handbuch gestalten](http://127.0.0.1:3010/systems/shadcn/gestaltungs-pilot) | «Zusammenhängende Hauptfolge mit Erstellen-Abzweig»; «kopierbare Regionen» | Gerade der praktische Download-Einstieg klingt nach interner Diagrammproduktion. |
| [Grundlagen](http://127.0.0.1:3010/systems/shadcn/grundlagen) | «Zusammenspiel ansehen: eine Oberfläche lesen» | Der sichtbare Aufklapptitel benennt keine klare Gestaltungsentscheidung; innen wird die Metapher wiederholt. |
| [Narrow Single Card](http://127.0.0.1:3010/systems/shadcn/narrow-single-card) | «Eine Aufgabe mit ruhigem Aussenraum» | Die erste Überschrift vermittelt Atmosphäre, erklärt aber die konkrete Anordnung nicht. |
| [edit](http://127.0.0.1:3010/systems/shadcn/page-type-edit) | «mit Verwerfennachfrage» | Ein künstlicher Modellname erschwert die wichtige Entscheidung beim Abbrechen. |
| [Suchen und Filtern](http://127.0.0.1:3010/systems/shadcn/suchen-filtern) | «Die vollständige URL- und Fokusmatrix bleibt verbindlich» | Ein interner Verbindlichkeitsverweis unterbricht die Gestaltungserklärung. |

Die vollständigen Zitate, Lesepositionen und Einzelbegründungen stehen in [pages.md](pages.md). P1 bezieht sich auf die zentrale sprachliche Hürde, nicht pauschal auf die ganze Seite.

## Wiederkehrende Befunde

### 1. Neue Substantive schaffen unnötige Begriffsebenen

«Regionsplan», «Detailidentität», «Wertvertrag», «Speicherausgang», «Verwerfennachfrage», «Speichermaschine» und «Binnengruppe» benennen oft etwas, das der Text daneben bereits konkret zeigt. Die Wörter sind nicht allein wegen ihrer Länge problematisch: Sie verlangen zusätzliche Modellkenntnis, ohne eine für die Gestaltung erkennbare Unterscheidung zu gewinnen.

Besonders deutlich ist der Gegensatz auf der Zustandsseite: «Noch keine Projekte» und «Ob die Änderung gespeichert wurde, ist unklar» sind verständlich; die zugehörigen Klassennamen «Erstleere» und «Unknown · Speicherausgang unklar» erschweren dieselbe Aussage. Die sachliche Trennung der Zustände ist sinnvoll und wird durch diesen Sprachbefund nicht infrage gestellt.

### 2. Metaphern ersetzen beobachtbare Gestaltungsmerkmale

«Eine Oberfläche lesen», «ruhiger Aussenraum», «ruhigeres Gewicht», «ein klarer Speicherweg» und «Seitentitel und Hauptbereich führen» klingen stellenweise nach Designrhetorik. Die Leserin erfährt daraus nicht immer, welches sichtbare Merkmal oder welche Entscheidung gemeint ist. Nicht jede Metapher ist gleich dringlich: «Lesen braucht Rhythmus» ist geläufig und lediglich P3; «Regionsplan» behindert den Einstieg deutlich stärker.

### 3. Interne Nachweissprache überlagert die Anleitung

«Wertvertrag benennen», «Die vollständige URL- und Fokusmatrix bleibt verbindlich», «lösen keinen Plattformnachweis aus», «Bulkabschluss» und «keine neue Selektionspolicy» sprechen aus der Perspektive der Dokumentproduktion. Einige Quellen- und Prüftexte müssen technisch sein. Der Befund betrifft ihre sprachliche Verpackung und teils prominente Position, nicht die Notwendigkeit genauer Quellen, offener Prüfungen oder technischer Grenzen.

Auf «Mitwirken» steht direkt am Teamablauf eine Dateiliste mit «Lokale Mechanik». Auf technischen Pflege- und Anbindungsseiten sind solche Angaben dagegen passend. Ein pauschales Entfernen technischer Begriffe wäre redaktionell falsch.

### 4. Ganze Sätze sind verdichtet oder idiomatisch schief

Beispiele sind «Halte Label, Wert und Hilfe näher zusammen als den Abstand zur nächsten Angabe», «Die ausgebliebene Antwort beweist keinen Nicht-Erfolg» und «wenn du ein Projekt erkennst und seinen nächsten Schritt brauchst». Hier reicht keine Terminologieliste: Vergleich, Verneinung beziehungsweise Satzbeziehung müssen beim Lesen gedanklich repariert werden.

«im shadcn-Referenzimplementierung» ist zusätzlich ein eindeutiger grammatischer Fehler. Er steht in einer aufklappbaren Vertiefung und wiegt deshalb anders als eine unklare Hauptüberschrift.

### 5. Aufklappbare Originale wiederholen die Einführung

Besonders auf Formular-, Such-, Komponenten-, Content-Design-, Theme- und Typografieseiten erklären Hauptteil und erhaltene Ausgangstexte dieselbe Grundidee erneut. Die zweite Erklärung ist oft abstrakter und erheblich länger. Wer eine Vertiefung öffnet, erhält dadurch nicht durchgehend neue Einordnung, sondern einen weiteren vollständigen Einstieg.

Das ist ein struktureller Sprachbefund. Die Originaltexte sind als historischer Stand gekennzeichnet; ihre Existenz wird nicht als sachlicher Fehler behandelt. Dieses Protokoll verlangt weder ihre Löschung noch ihre Veränderung. Es hält nur fest, dass Wiederholung, Tonwechsel und konkurrierende Benennungen die heutige öffentliche Lektüre erschweren.

### 6. Bezeichnungen und Perspektiven wechseln

Die Seitentypenübersicht nennt dieselbe Beispielaktion «Projekt anlegen», die create-Seite «Projekt erstellen». Im Gestaltungs-Pilot wechselt die Ansprache zwischen direkter Anleitung und «So arbeitet ihr». Bei Layoutbeispielen geraten zudem Lehrkommentare mitten in den fiktiven Projekttext, etwa wenn «die folgenden Themenkarten nach unten wandern». Diese Wechsel sind kein Beleg für falsche Regeln, aber Material für eine spätere redaktionelle Konsistenzprüfung.

## Was bereits funktioniert

Ohne konkreten sprachlichen Befund blieben: Startseite, Icons/Bewegung-Wegweiser, 3-column Card Grid, Card Header, Label–Value, Content-layouts-Übersicht, Wide Single Card, Releases und Migrationen sowie Technische Anbindung und MCP. Das bedeutet nur: Bei dieser Lektüre fiel dort keine prioritär zu benennende sprachliche Schwäche auf.

Auch auf beanstandeten Seiten sind viele Texte klar: die Themenkarten der Grundlagen, konkrete Zustandsmeldungen, verständliche Aktionsbeschriftungen und die Beispiele mit Name, ID und Status. Diese Stellen liefern innerhalb des Handbuchs einen brauchbaren Vergleichsmassstab.

Page types, Page layouts, Content layouts und benannte englische Layout- oder Variantenbezeichnungen wurden nicht allein wegen ihrer Sprache beanstandet. Ebenso wenig Screenreader, Reflow, SCXML, CEM, DTCG, HTML/ARIA, exakte Contractrevisionen oder Dateinamen an passenden Stellen. Fachliche Präzision und natürliches Deutsch schliessen sich nicht aus.

## Grundlage und Reichweite der Lektüre

- Vollständig gelesen wurden die 50 veröffentlichten Seiteneinträge aus `scripts/content/handbook-snapshot.json`, Stand `2026-11-20T15:24:50.921Z`. Die Lektüre umfasste Titel, Zusammenfassungen, alle Inhaltsblöcke, verschachtelte Meldungsvergleiche, Workflow-Schritte, Quellen und erhaltene Originaltexte. Es wurden nicht lediglich Suchtreffer gesammelt.
- Das Seitenverzeichnis wurde mit den 50 Pfaden aus `docs/handbook/presentation-review/page-progress.json` abgeglichen.
- Zusatztexte und Aufklappgrenzen wurden anhand der seitenbezogenen Renderer in `src/docs/page-reworks/`, der Spezialrenderer `shadcn-home`, `foundations-overview` und `color-page` sowie der verwendeten Studien-/Ressourcenrenderer abgeglichen. Die Seitenliste kennzeichnet Einstieg, Hauptinhalt und Vertiefung getrennt.
- Im Browser wurden zusätzlich Startseite, Grundlagen, Detailseite, Zustandsseite, Patternkatalog und Gestaltungs-Pilot gelesen. Das ist eine Stichprobe der tatsächlichen Ausgabe, keine Behauptung von 50 vollständigen Browserdurchläufen oder ausgeführten Funktionsprüfungen.
- Alle 92 Befundzitate wurden als exakte Ausschnitte gegen den jeweiligen Snapshotinhalt oder den zusätzlichen Renderer-/Ressourcentext geprüft. Snapshot- und seitenbezogene Renderer-Hashes stehen in `coverage.json`.
- Die Diagnose «klingt übersetzt» ist ein Leserurteil; es wurde keine englische Originalfassung oder tatsächliche Übersetzungsgeschichte nachgewiesen. Alte interne Plan- und Forschungsdokumente wurden nicht als aktuelle öffentliche Texte beanstandet.

Es wurden ausschliesslich diese Auditdateien erstellt. Öffentliche Inhalte, Code, CMS-Daten, Contracts, Pins und historische Definitionen wurden nicht geändert. Dieses Ergebnis enthält keine Ersatztexte, kein Umsetzungsskript und keine erteilte Freigabe.
