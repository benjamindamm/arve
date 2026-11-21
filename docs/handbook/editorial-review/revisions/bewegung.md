# Bewegung: Redaktion

Gelesen: PAGE-BRIEF, Auditbericht und eigener Abschnitt 10 in pages.md; ganze Release, Spezialrenderer und die darin über Content tatsächlich ausgegebene FoundationStudy für motion samt Textalternative, Funktionshinweisen und Grenzen.

Frischer Read-only-MCP-Abruf für `shadcn` / `bewegung`: `updatedAt` = `2026-11-20T13:43:19.240Z`. Inhalt und Zusammenfassung waren vor der Redaktion gleich der bisherigen Release (IDs, null-Felder und Schlüsselreihenfolge normalisiert). Der Zeitstempel steht als `expectedUpdatedAt` in der Release.

«Ausgang und Ergebnis zuerst» erklärt jetzt konkret, dass zuerst festzulegen ist, was vor und nach der Handlung sichtbar ist. «Ausgang und Ziel verbinden» heisst «Wie sich ein Element an einen anderen Ort bewegt»; Erklärung und drei Standbilder benennen A, seinen Weg und seine neue Position. Die Vorschau erklärt die beiden Möglichkeiten für eine Darstellung ohne Bewegung in einem vollständigen Satz. Die Vertiefung beschreibt laufende Vorgänge, Unterbrechung und Plattformgrenzen ohne verdichtete Modellnamen. «Zustandsfähigkeiten» kommt auf dieser Seite nicht vor. Gute Kontaktbeispiele und klare Beschriftungen bleiben erhalten.

Die historischen Inhalte in foundations-release.ts bleiben unverändert. Die heutige Vertiefung wird deshalb als ergänzende Studie bezeichnet, nicht als unveränderte Abschrift. Zusätzliche Renderertexte wurden ausschliesslich in Motion() und boundaries.motion in foundation-studies.tsx geändert; der eigene Spezialrenderer enthält keine zusätzlichen Texte.

Erhalten: einmaliges, ausdrücklich geöffnetes Abspielen; Schliessen und erneute Eingaben; Fokus- und Lesepositionsbedingungen; dieselben Informationen bei reduzierter Bewegung; 300 ms nur für die Kontaktvorschau und 600 ms nur für die Beobachtung der A-Studie; keine gemeinsame Bewegungsdauer-/Kurvenskala, keine Komponentenfreigabe und kein Nachweis nativer Unterstützung. CSS, SVG, ARIA, Animationslogik, Dauerwerte und Reduced-Motion-Verhalten wurden nicht geändert. Quellen, Datumsangaben und Links bleiben erhalten.

Prüfungen: `npm run typecheck` erfolgreich. Strukturvergleich mit dem vor der Redaktion abgerufenen MCP-Inhalt erfolgreich: Block-/Knotenreihenfolge, Typen, blockName, Textzeilenanzahl und Links unverändert. Gezieltes `git diff --check` erfolgreich. Suche nach eingehenden `/systems/shadcn/bewegung#`-Links ohne Treffer. Der Studientitel ändert das generierte Ziel von `abschnitt-ausgang-und-ziel-verbinden` zu `abschnitt-wie-sich-ein-element-an-einen-anderen-ort-bewegt`; auch «Quellen, Grenzen und ergänzende Studie» ersetzt im Inhaltsverzeichnis den bisherigen Titel. Root wurde informiert.

Nach der Veröffentlichung durch Root: vollständige Seite in BrowserOS neo erneut als Leserin gelesen, einschliesslich geöffneter Kontaktvorschau, Quellen/Vertiefung, A-Demonstration und vollständiger Textfassung. Vollseitige Screenshots bei 1440 × 1000 und 390 × 844 CSS-Pixeln visuell geprüft. Neue Formulierungen und Überschriften umbrechen lesbar; Kontaktkarten und die drei Standbilder stehen auf schmaler Breite untereinander. Keine abgeschnittenen Texte und kein konkreter sprachlicher Restbefund. Animationsdauer, Reduced Motion und Tastaturverhalten wurden dabei nicht erneut funktional getestet. Eigener Prüftab geschlossen.

Redaktion und Browser-QA abgeschlossen.
