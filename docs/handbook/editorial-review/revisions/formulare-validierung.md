# Formulare und Validierung · Redaktion

Gelesen wurden der verbindliche Seitenauftrag, der Gesamtbericht und der eigene Abschnitt des Audits sowie die vollständige Release und der Renderer. Hauptteil, alle sieben auswählbaren Zustandsbilder, Quellenhinweise und die gesamte aufklappbare Vertiefung wurden im Zusammenhang geprüft und redigiert. Der Renderer enthält keine zusätzlichen fachlichen Texte und blieb unverändert.

## Wesentliche Änderungen

- «den Speicherausgang verständlich zeigen» wird zu «das Ergebnis beim Speichern verständlich anzeigen».
- «1–80 Unicode-Graphemcluster nach Randtrim» wird als Längenregel nach Entfernen äusseren Leerraums erklärt; die genaue Zählweise steht mit Erklärung weiterhin dabei.
- Der Vergleich beim Bearbeiten wird in ganzen Sätzen beschrieben: aktueller Name und bestätigter Ausgangswert werden jeweils ohne äusseren Leerraum verglichen.
- Die Vertiefung erklärt den Vorrang eines unbekannten Ergebnisses vor Verwerfen oder Wiederholen, ohne «Dirty-Regel» oder «Speicherausgang» vorauszusetzen. Die acht Zustände bleiben ein verzweigter Ablauf, keine zwingende Acht-Schritte-Folge.
- Die heutige Erläuterung wird als sprachlich überarbeitet gekennzeichnet. Die historischen Quellen und die Datierung der lokalen Präzisierung bleiben erhalten; eine unveränderte wörtliche Abschrift wird nicht mehr behauptet.
- Nach Rootreview heisst die Vertiefung «Alle Regeln zum Formular». Eine erneute Suche ergab keine eingehenden Links auf den bisherigen Aufklapptitel. Die technische Graphemcluster-Definition bleibt vollständig in der Vertiefung; der Hauptteil erklärt die Grenze in Zeichen und verweist auf die genaue Zählweise.

## Fachliche Erhaltung und Checks

Read-only MCP `get_documentation_page` für `shadcn/formulare-validierung`: Inhalt und Zusammenfassung stimmten vor der Bearbeitung mit der alten Release überein (bereinigt um CMS-IDs und null-Felder). Das frisch gelesene `updatedAt` `2026-11-20T14:23:11.593Z` steht als `expectedUpdatedAt` in der Release.

Pflichtangabe, 1–80 Graphemcluster, ausschliessliches Entfernen äusseren Leerraums, gleiche Namen, Prüfung beim Absenden und erneute Prüfung des zuvor fehlerhaften Feldes beim Verlassen bleiben erhalten. Ebenso bleiben ungeklärte Ergebnisse vor Verwerfen/Wiederholen, fehlende Statusschnittstelle, Anfragebezug, Rückkehrsperren, q/status, Dialog- und Zielfokus, Escape, mobile Grenze 640 px sowie offene Prüfungen und Vorschaugrenzen erhalten. Keine neuen Funktionen oder Freigaben.

Ein Strukturvergleich gegen die bisherige Release bestätigt unveränderte Blocktypen, blockName, IDs, Block-/Knotenfolge und Anzahl der Textzeilen. Eingehende Anker wurden gesucht. Die verlinkten Überschriften «Bestehenden Namen bearbeiten», «Abbrechen, verlassen und zurückkehren» und «Ergebnis unbekannt» bleiben unverändert. Keine fremden Dateien oder historischen Quellen geändert.

Ausgeführt: `npm run typecheck` erfolgreich; `git diff --check` erfolgreich.

## Browserprüfung nach Veröffentlichung

Nach der Veröffentlichung durch Root wurde die gesamte Neufassung in BrowserOS neo gelesen: Hauptinhalt, alle sieben Zustandsbilder sowie die geöffneten Bereiche «Quellen und Prüfgrenzen» und «Alle Regeln zum Formular» einschliesslich der vollständigen Ablaufstudie und aller folgenden Regeln.

Screenshots bei 1440 px und 390 px Breite wurden visuell geprüft. Alle sieben Zustandsbilder wurden in beiden Breiten ausgewählt und angesehen. Meldungen, längere Erklärungen, Aktionsbeschriftungen und Phasentexte brechen lesbar um. Bei 390 px stehen die Aktionen untereinander; auch die längere Erklärung zum unbekannten Ergebnis bleibt durch Scrollen lesbar. Der neue Aufklapptitel und die geöffneten Vertiefungen wurden in beiden Breiten zusätzlich angesehen. Kein konkreter sprachlicher Restbefund und keine durch die Redaktion verursachte Überlagerung oder abgeschnittene Textstelle festgestellt.

Die Auswahl zeigt statische Zustandsbilder. Diese QA bestätigt keine ausführbare Validierung, Speicherung, Navigation, Statusklärung oder Fokussteuerung der späteren Anwendung. Keine CMS-Schreibzugriffe; keine erneute Veröffentlichung. Der eigene QA-Tab wurde anschliessend geschlossen.
