---
name: arve-icons-handbook
description: Erarbeite oder prüfe das Iconkapitel eines Design-System-Handbuchs aus Quellen, Rückfragen und delegierten Gestaltungsentscheidungen. Behandelt Zeichenwahl, Katalog, Stil, Grössen, Beschriftung und Anwendung; nicht die Erstellung einer vollständigen Iconbibliothek oder die Implementierung einer App.
---

# Icons erarbeiten

Das Kapitel soll beim Finden, Auswählen und Einsetzen von Icons helfen. Eine Symbolgalerie allein erklärt weder Bedeutung noch passende Verwendung. Eine ausschliessliche Accessibility-Erklärung ersetzt umgekehrt keine gestalterische Anleitung.

## Auftrag und Material

Kläre System, Aufgaben und Plattformen aus dem Auftrag. Im **Bestandsmodus** dokumentiere vorhandenes Material und belegte Regeln; fehlende Entscheidungen bleiben offen. Im **delegierten Entwurf** entwickle begründete lokale Vorschläge. Keine historische Absicht, universelle Zeichendeutung oder bestehende Freigabe erfinden. Bereits delegierte Entscheidungen brauchen keine erneute Erlaubnis.

Lies gezielt gewählten Katalog, Designvariablen, Komponentenrezepte, vorhandene Bedeutungszuordnungen und Lizenz-/Nutzungshinweise. Trenne Originalmaterial, Bearbeitung, beobachteten Einsatz und neue Vorschläge. Ein Iconpaket im Projekt beweist noch keinen verbindlich gewählten Katalog. Wenige Inline-SVGs oder Grössenwerte belegen keine vollständige Bibliothek. Keine Zeichenquelle oder Plattform vorwählen.

Nutze die [Fachfragen ICO-01–16](references/icon-questions.md). Bei Quellen, SVG-Metriken, Textalternativen oder Prüfbehauptungen lies gezielt die [Quellen- und Prüfhilfe](references/evidence-and-checks.md).

## Bedeutung und Auswahl erarbeiten

Beginne mit der Aufgabe: Welche Handlung, welches Ziel oder welcher Sachverhalt soll erkennbar sein? Muss ein Icon diese Information tragen oder ergänzt es bereits verständlichen Text? Unterscheide **Handlung/Navigation**, **informative Darstellung** und **Dekoration** nach tatsächlichem Gebrauch; das Motiv allein bestimmt seine Rolle nicht.

Erarbeite eine passende Zuordnung zwischen fachlicher Bedeutung, sichtbarer Beschriftung und auffindbarem Zeichen. Ein Assetname wie „trash“ ist kein fertiges Wording für eine Löschaktion. Bevorzuge keine textlose Darstellung nur, weil ein Symbol vertraut aussieht oder Platz gespart werden soll. Bei unbekannter Bedeutung ist sichtbarer Text eine begründete Alternative. Zugänglicher Name und Tooltip machen ein unbekanntes Zeichen visuell nicht automatisch verständlich.

Für wiederkehrende Bedeutungen eine konsistente Auswahl anbieten; ähnliche Zeichen und echte Ausnahmen erklären. Dasselbe Motiv kann in unterschiedlichen Kontexten sinnvoll sein. Beurteile die dort erkennbare Handlung und Benennung, statt eine pauschale Eins-zu-eins-Zeichensprache zu erzwingen.

Ein vorhandener Katalog muss zum tatsächlichen Zeichen führen: auflösbare Quelle/Assetkennung, Bedeutung und relevante Einsatzgrenze. Bei grossem Umfang passende Suchbegriffe, Gruppen und verlinkte Referenzen nutzen; nicht die gesamte Bibliothek in einen langen Artikel kopieren. Eigene semantische IDs sind bei Bedarf möglich, aber keine Pflicht und kein Ersatz für die Originalkennung. Eine dokumentierte Auswahl nicht als vollständigen Katalog ausgeben.

## Gestalterische Regeln erklären

Arbeite die im System benötigten Regeln für Formensprache, Grössen und Kombination aus. Bei Strichicons etwa Strichgewicht, Enden und Ecken betrachten; bei gefüllten Icons deren eigene Merkmale. Keine Pflicht zu Outline, einer bestimmten Zeichenfläche oder einem festen Strichwert. Unveränderte Quellmerkmale, lokal erlaubte Anpassungen und neue Varianten auseinanderhalten.

Unterscheide Zeichenfläche, sichtbare Kontur, gerenderte Grösse und aktive Bedienfläche. Gleich grosse SVG-Boxen garantieren keine gleiche optische Wirkung. Prüfe relevante Formen neben Text und nebeneinander, etwa Kreis, diagonales Zeichen und längliches Motiv. Erkläre Ausrichtung und Abstand im tatsächlichen Zusammenhang, statt eine isolierte Grössentreppe zur Systemregel zu machen. Skalierbare Geometrie und in Bildschirmkoordinaten konstant gehaltene Striche sind unterschiedliche Entscheidungen.

Zu einem verwendbaren Rezept gehören Grösse samt Einheit, Stilvariante, Farbe/Rolle, Textbezug und gegebenenfalls aktive Fläche oder ein konkreter Verweis auf die führende Komponente. Zustandsinformation darf nicht mit Dekoration verwechselt werden. Wo Form, Füllung oder Bewegung Zustände kennzeichnen, deren Bedeutung und Alternativen erläutern; reine Farbwechsel nicht als vollständige Erklärung ausgeben.

## Beispiele und Leseseite

Zeige die entscheidenden Beispiele früh im Gebrauch: etwa Icon mit Text in einer Aktion, ein benanntes Icon ohne sichtbaren Text, ein erklärter Status oder ein rein dekoratives Zeichen. Wähle die tatsächlich relevanten Fälle; es gibt weder eine feste Anzahl noch eine vorgeschriebene Galerie.

Für eine einzelne Gestaltungsfrage die übrigen Eigenschaften möglichst gleich halten: Grössen im selben Textzusammenhang, Strichvarianten am selben Motiv, Ausrichtung an derselben Zeile. Zeige native Ausgabegrösse; eine vergrösserte Detailansicht allein belegt keine Erkennbarkeit im Produkt. Bei erklärungsbedürftigen Alternativen kann ein Gegenvergleich helfen. Kennzeichne eigene schematische Zeichen, statt sie als Originalassets auszugeben.

Stelle Auswahl, Wert und Probe räumlich zusammen. Eine kurze Legende erklärt, was der Vergleich zeigt und welche Entscheidung daraus folgt. Nicht dieselben Grössen und Einsatzregeln nach der beschrifteten Übersicht nochmals vollständig aufzählen. Gemeinsame Herkunft und Geltung einmal nennen; lokale Grenzen am betroffenen Beispiel lassen. Ausführliche Herleitungen dürfen in passenden Vertiefungen stehen.

Mobil sollen Zeichen, Beschriftung und Bezug gleichzeitig verständlich bleiben. Kleine Vergleichsreihen, kompakte Ausschnitte oder ein Wechsel am selben Objekt sind mögliche Formen. Lange Kartenstapel und abgeschnittene Katalogzeilen nicht mit Vollständigkeit verwechseln. Bei interaktiven Proben zwischen Simulation und tatsächlicher Aktion unterscheiden; keine destruktive Beispielaktion auslösen.

## Dialog und Tiefe

Quellen vor Rückfragen lesen. Beginne bei offenen Punkten, die weitere Antworten ermöglichen: Aufgaben, Zielgruppe, gewählte Quelle, vorhandener Stil und relevante Grössen. Frage in kleinen zusammenhängenden Bündeln; Fachbegriffe bei Bedarf in Alltagssprache erklären. Bei gestalterischen Entscheidungen begrenzte visuelle Alternativen mit Anwendungskontext anbieten. „Noch nicht festgelegt“ bleibt eine gültige Antwort. Keine Nutzerantworten, Zuständigkeiten, Lizenzerlaubnisse oder Freigaben simulieren.

Grundfragen sichern die Orientierung. Bedingte Fragen nur für vorhandene oder geplante Anwendungen vertiefen; unbekannter Bedarf bleibt offen. Das Kapitel darf umfassend sein. Umfang folgt den Entscheidungen, nicht einer festen Seitenlänge, Anzahl Icons oder Zahl Unterseiten.

## Ergebnis und Gegencheck

Auffindbar werden Quelle/Nutzungsbedingungen, Bedeutungs- und Auswahlhilfe, passende visuelle Rezepte, Anwendung mit und ohne Text, relevante Grenzen und Pflege. Die Autorenprüfung ordnet ICO-IDs zu Anwendbarkeit, Antwort/Fundstelle oder Lücke, Herkunft, fachlichem Stand und tatsächlichen Nachweisen. Diese Übersicht muss nicht als sichtbarer Abschnitt pro Frage erscheinen.

Vollziehe eine Auswahl aus dem Auftragsumfang nach: Bedeutung finden, Zeichen und Beschriftung wählen, passend neben Text oder in einer Aktion einsetzen und auf eine relevante Änderung reagieren. Etwa eine mehrdeutige Handlung, längere Übersetzung, kleinere Darstellung oder fehlendes Asset. Benenne die tragenden Kapitel-Aussagen und verbleibendes Zusatzwissen. Das ist ein redaktioneller Anwendungsgang, kein Nutzertest.

Berichte nur tatsächlich ausgeführte Prüfungen mit Artefakt, Umgebung und Ergebnis. Beschriftung im Markup, tatsächlicher zugänglicher Name, Erkennbarkeit und Verständlichkeit sind verschiedene Nachweise. Keine universelle Verständlichkeit oder allgemeine Zugänglichkeitsfreigabe aus einer Lupe, einem Screenshot oder einem vorhandenen Label ableiten.

Benachbarte Kapitel führen ihre Definitionen: Typografie Textrezepte, Abstände Gruppierung/Bedienflächen, Farbe Rollen und Paarungen, Komponenten Verhalten und Zustände, Content Design Benennung, Bewegung Übergänge, Plattformen native Zuordnungen. Die für den Iconeinsatz nötigen Beziehungen trotzdem hier erklären. Kein bestimmtes Framework, CMS oder MCP vorausgesetzt. Dieser Autorenauftrag autorisiert keine neuen Contracts, Paketwechsel oder Veröffentlichung; für eine ausdrücklich beauftragte Übernahme gelten Zielsystem und vorhandene Autorisierung.
