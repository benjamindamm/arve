# Datenvisualisierung · erste Einordnung

Aktueller Nachtrag vom 25.11.2026: Die sichtbaren AR-Nummern wurden auf Nutzerwunsch entfernt. Natürliche Fallnamen und fünf kurze Fragen ersetzen den ausführlichen Einstieg. Die Palettenseite bündelt Konflikte und Formregeln, statt pro Farbe einen Abschnitt zu führen. Das Finanzbeispiel zeigt jetzt echte erfundene Werte, Nulllinie, Budget, Aufschlüsselung und Saldo. Divergenz und Status besitzen kleine Chart-Beispiele. Werte aus der Grundpalette stehen einmal aufklappbar; ihre Textalternative bleibt vollständig im CMS/MCP. Der Autoren-Skill verlangt diese knappe, anschauliche Darstellung ohne starre Archetypen-IDs. Die folgenden Abschnitte dokumentieren frühere Ausbaustände.

Für diesen Nachtrag: TypeScript, drei Farbquellenprüfungen, Skill-Format, vollständige/kompakte MCP-Abrufe aller sieben Seiten und statischer Build mit Linkprüfung bestanden. Finanzbeispiel bei 390 px und divergierendes Beispiel bei 320 px visuell geprüft, jeweils ohne gemessene horizontale Überbreite. Keine unabhängige Designer-Freigabe behauptet.

25.11.2026 · Lokaler redaktioneller Entwurf auf Nutzerauftrag. Die Taxonomie ist eine eigene Synthese; Carbon liefert die Referenz für Chartformen und die zentralen Palettenfamilien. Keine Behauptung einer offiziellen shadcn-Palette oder universell geprüfter Farben.

Sieben veröffentlichte CMS-Seiten unter `/systems/shadcn/datenvisualisierung`: Übersicht, Charts einordnen, Chart-Paletten, Chart-Typen, Beschriftung/Achsen/Legenden, Interaktion/kleine Ansichten und Zugänglichkeit. Die fünf Ebenen und die Palettenfamilien erhalten keine zusätzlichen Unterseiten. Grundfarben und Chart-Komponente verlinken den Bereich. Die neun etablierten Inhaltsabschnitte der Chart-Komponente bleiben erhalten.

Die Übernahme über `scripts/add-data-visualization.ts --apply` erstellt sieben Seiten und ergänzt zwei bestehende. Transaktion, kein Schema-Push, keine Löschungen. Abweichende unveröffentlichte Entwürfe oder geänderte Bestandsinhalte brechen die Übernahme ab. Andere Seiten und Implementierungen wurden vor/nach der Transaktion verglichen und blieben unverändert. Ein erneuter Vorschauaufruf findet keine neu anzulegenden Seiten. Der Referenzsnapshot enthält nun 131 Seiten und weiterhin 69 Komponenten.

Prüfungen:

- TypeScript erfolgreich; beide geänderten/neuen Autoren-Skills formal validiert.
- Hierarchie und Kopie in ein anderes Design-System getestet; dort bleiben neue URLs hierarchisch und interne Inhaltslinks werden umgeschrieben. Bestehende Layout- und flache Grundlagenadressen bleiben erhalten.
- Chart-Katalogprüfung für `chart` inklusive Quellen/Review und exaktem Inhaltsvergleich mit dem Snapshot bestanden.
- Tatsächlicher MCP-Abruf aller sieben Seiten: vollständiger Inhalt mit redaktioneller Quelle verglichen, kompakte Fortsetzungen bis zum Ende abgerufen. Der neue Baumzweig enthält sechs Kinder; Suche findet Paletten, Farbidentität und negative Salden.
- Alle sieben Seiten bei 320 px ohne gemessene horizontale Überbreite. Paletten bei 390 px und Taxonomie bei 320 px visuell im Browser angesehen. Kein unabhängiger Designer- oder Screenreader-Test behauptet.
- Statischer Build und Link-/Assetprüfung bestanden: 227 HTML-Dateien, 131 Handbuchseiten, 67 132 interne Links und 2 955 verifizierte Assets. Keine Veröffentlichung ausgelöst.

Die Illustrationen erklären eine Reihe gegenüber mehreren Kategorien, Datenpunktdichte, Linien/Flächen und Palettenfamilien. Sie sind statisch. Konkrete produktive Chart-Paletten, Theme-Paarungen und deren Unterscheidbarkeit sind damit noch nicht freigegeben.

## Revision: Archetypen und Farbkonflikte

25.11.2026 · Nach dem UX-Review auf ausdrücklichen Auftrag ergänzt. Alle Datenfarben der Illustrationen werden nun in `chart-color-policy.ts` über Familie/Stufe direkt aus `foundation-colors.json` aufgelöst. Die separate Hexpalette wurde entfernt. CMS-Blöcke führen dieselben Referenzen und Werte für MCP und Referenzexport. Die Grundpalette selbst wurde nicht erweitert.

Sechs kombinierbare semantische Archetypen ergänzen die fünf Einordnungsebenen. Sie unterscheiden unter anderem Richtungen, Kategorien, Unterkategorien, Referenzen und abgeleitete Ergebnisse. Der Ein-/Auszahlungsfall zeigt: Gebühren behalten als Abfluss die Richtungsfarbe; ein Budget ist eine neutrale Referenz; Saldo wird separat als Ergebnis gezeigt. Eine zusätzliche Reihe erhält nicht automatisch eine neue Farbe.

Die Konfliktregeln behandeln Marke, Rot, Grün, Blau, Amber und Violett/Neutral. Sie dokumentieren bestehende und erwartbare Lesarten, Geltungsbereich, passende Verwendung und konkrete Alternativen. Alternativen werden erneut geprüft; ist die verfügbare Auswahl ausgeschöpft, werden Beschriftung/Struktur/Teilansichten angepasst. Eine eigene Markenfarbe ist nicht belegt und wird deshalb nicht aus der primären Handlungsfarbe erfunden. Die lokalen Zuordnungen sind keine universellen Farbverbote.

Sieben Seiten wurden transaktional aktualisiert; übrige Seiten und Implementierungen blieben unverändert. Wiederholter Aufruf ist ohne neue Änderungen möglich. Snapshot weiterhin 131 Seiten/69 Komponenten. Beide Autoren-Skills und die bedingte Farbfrage COL-09 sind aktualisiert.

Ausgeführte Prüfungen dieser Revision:

- TypeScript, drei Palette-/Quellenprüfungen und fünf Hierarchie-/Kopierprüfungen bestanden. Alle dunklen Kandidaten erreichen 3:1 gegen Weiss; das prüft weder alle Nachbarpaare noch Farbenfehlsichtigkeit oder Dark Mode.
- Vollständige MCP-Inhalte aller sieben Seiten mit Quelle verglichen; kompakte Fortsetzungen komplett gelesen. Archetypen umfassen vier, Paletten sechs kompakte Abrufe. Suche findet die Konfliktregeln; „Blau Auswahl“ benötigt bei zehn Treffern pro Abruf die zweite Ergebnisseite. Suchranking wurde in diesem Auftrag nicht verändert.
- Beide geänderten Kernseiten bei 320 px ohne gemessene Überbreite. Mobile Ansichten bei 320/390 px visuell geprüft; der Blau-Abschnitt lässt sich per Klick öffnen und mit Enter wieder schliessen. Kein unabhängiges Designer- oder Screenreader-Review dieser Revision durchgeführt.
- Statischer Build sowie Link-/Assetprüfung bestanden: 227 HTML-Dateien, 67 132 interne Links, 2 955 Assets. Keine Veröffentlichung ausgelöst.
