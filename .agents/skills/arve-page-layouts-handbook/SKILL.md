---
name: arve-page-layouts-handbook
description: Erarbeite oder prüfe Handbuchseiten zu Seitenlayouts, Raster/Containern, Seitenrahmen und räumlicher Navigation. Verbindet Regionen, Inhaltspriorität, Breiten, Umbruch und Scrollverhalten anhand von Quellen und Rückfragen; nicht für Produktimplementierung, innere Feldanordnung oder die vollständige UX-Ablaufbeschreibung.
---

# Seitenlayouts im Handbuch erarbeiten

Ein Seitenlayout ordnet die grossen Bereiche einer Ansicht. Die Aufgabe kommt vom Seitentyp; das Layout entscheidet, wie Hauptinhalt, Ergänzungen und Bedienung auf der verfügbaren Fläche zusammenpassen. Eine Anordnung kann für mehrere Seitentypen geeignet sein.

## Auftrag und Quellen

Kläre Zielsystem, Einzelrezept oder Überblick, unterstützte Kontexte und Arbeitsmodus. Vorhandene Raster, Container, Inhaltsbeispiele und relevante Grundlagen zuerst lesen. Im Bestandsmodus bleiben fehlende Masse und Regeln offen. In einem delegierten Entwurf begründete lokale Festlegungen entwickeln und von Quellen trennen. Bestehende Werte sind keine universellen Standards; shadcn, ein bestimmtes Raster und Cards sind nicht vorgewählt.

Lies die [Layoutfragen](references/page-layout-questions.md). Bei einem Einzelrezept nur den passenden Abschnitt der [Rezepthilfe](references/layout-guidance.md) ergänzen. Für Seitenrahmen, Navigation und übergreifende Adaptivität ist die [Rahmenhilfe](references/frame-navigation.md) relevant. Keine komplette Familie ausarbeiten, wenn nur eine Unterseite beauftragt ist.

## Mit dem Nutzer entscheiden

Ermittle zuerst Inhaltspriorität, Menge und Breitenbedarf: Was muss gemeinsam sichtbar sein? Was ist nur ergänzend? Welche Inhalte werden lang oder breit? Erst daraus Raster, Spaltenzahl und Grenzen ableiten. Kläre offene Entscheidungen in kleinen Bündeln; vorliegende Angaben und delegierte Entscheidungen nicht erneut abfragen.

Biete begründete Optionen am gleichen Inhalt an, wenn eine Entscheidung schwer vorstellbar ist. Etwa Hauptinhalt mit Zusatzbereich gegenüber einer einzigen Inhaltsfolge. Nenne den jeweiligen Gewinn und die Einschränkung. Keine Zustimmung aus einer unbeantworteten Frage ableiten, unbekannte Inhalte nicht stillschweigend aus dem Umfang entfernen.

## Räumliche Regeln erarbeiten

Katalogeinträge nach eigenständigen Anordnungsentscheidungen bilden. Breite, Spaltenzahl und Kartenrahmen sind häufig Varianten desselben Rezepts. Prüfe vor einer neuen Seite, ob ein zusammenhängender Inhaltsbereich, Hauptinhalt mit Ergänzung, ein Raster oder eine Abschnittsfolge die Entscheidung bereits erklärt. Unterschiedliche Gewichtung ist oft wichtiger als drei oder vier Spalten. Diese vier Familien sind ein Ausgangspunkt, keine Pflichtausstattung jedes Systems.

Demos den passenden Rezepten unterordnen. Eine Demo nach ihrer gezeigten Anordnung benennen, statt sie als konkurrierenden Seitentyp zu führen. Konkrete Produktregeln bleiben beim Beispiel. Seitentitel, Navigation, kanonische URL und Maschinenzugriff sollen dieselbe Hierarchie vermitteln; technische Identität und sichtbare Gliederung müssen dafür nicht identisch sein.

Bearbeite die aktiven PGL-Fragen. Unterscheide Fensterbreite, tatsächlich verfügbare Inhaltsbreite und Breitenbedarf des Inhalts. Navigation und Panels können dem Hauptinhalt Platz nehmen. Eine breite Card muss keinen breiten Fliesstext und kein vollbreites Eingabefeld erzeugen. Typografie, Abstandsbedeutung und Skalen kommen aus den Grundlagen; hier wird deren Anwendung festgelegt.

Erkläre pro Region Inhalt, Priorität, optionale Verwendung, Reihenfolge und Aktionsbezug. Gleichrangige Inhalte dürfen gleichrangig erscheinen, priorisierte Aufgaben brauchen erkennbare Gewichtung. Eine Card ist eine mögliche Gruppierung, kein Pflichtbehälter jedes Bereichs. Leere optionale Regionen hinterlassen keinen bedeutungslosen Rahmen.

Leite Änderungen aus Platz und Inhalt ab. Dokumentiere, was umbricht, schmaler wird, gestapelt oder bewusst in eine andere Ansicht verschoben wird. Grenzen und Werte nur als belegt oder lokale Entscheidung ausgeben. Keine universellen 640-/800-/1024-px-Regeln, kein 12-Spalten-Raster und kein 2:1-Verhältnis erfinden. Vier Spalten bedeuten variable Zeilenzahl, nicht zwingend ein 4×4-Raster.

Bei Sticky-Elementen, Überlagerungen und mehreren Scrollbereichen die Lesbarkeit, Fokus-Erreichbarkeit und verfügbare Höhe mitdenken. Der optische Versatz einer Fläche darf Nachbartext nicht unbeabsichtigt verdecken. Wenn ein Vergleich nur Kontur oder Schatten erklärt, bleiben Position und Inhalt gleich. Eigene Scrollbereiche oder feste Höhen brauchen eine Aufgabenbegründung.

Plattformabweichungen folgen tatsächlichen Kontexten. Mobiles Web ist keine native Plattform. Für native Nutzung gegebenenfalls Systemnavigation, Safe Areas, Split View, Fensteränderung oder Bildschirmtastatur klären. Eine Webdarstellung belegt deren Implementierung nicht. Gleichwertige Aufgaben und Priorität können je Plattform unterschiedlich angeordnet sein.

## Anschauliche Handbuchseite

Eine Katalogseite hilft bei der Layoutauswahl und führt zu Einzelrezepten. Ein Einzelrezept zeigt früh die Anordnung mit verständlichem Inhalt und wenigen externen Regionsbeschriftungen. Füge nur Vergleiche hinzu, die eine Entscheidung erklären. Breite und kompakte Darstellung verwenden denselben Inhalt und dieselbe Prioritätslogik.

Am Beispiel schnell auffindbar: wofür die Anordnung passt, was zusammengehört, wo die Hauptaktion liegt und wie die schmale Darstellung entsteht. Breiten, Spannen oder Sticky-Regeln direkt an ihrem Wirkungsort erläutern. Lange technische Absätze und doppelte Inhaltslisten vermeiden. Ein reines Kästchenschema darf eine Regel erklären, ersetzt aber nicht jeden Kontextbeleg.

Vorschauoptionen müssen auf der tatsächlich verfügbaren Fläche einen erkennbaren Unterschied erzeugen. Eine als „breit“ bezeichnete Vorschau, die auf kleiner Fläche ebenfalls stapelt, entsprechend erklären oder als verfügbare Breite benennen. Wenn zwei Optionen praktisch gleich aussehen, die wirkungslose Auswahl weglassen und den aktuellen Zustand verständlich erklären. Technische Einheiten gehören nicht als einzige Erklärung in die Auswahl.

Mobil den gesamten Weg von Einstieg und Vergleich bis Beispiel und Regeln betrachten. Schemata dürfen kompakter werden, solange Zuordnung und Textaussage erhalten bleiben. Selten benötigte Testvarianten können aufgeklappt werden; ihr Zustand und ihre Erreichbarkeit müssen verständlich bleiben. Verschachtelte Hüllen und Innenabstände nicht unnötig von der knappen Inhaltsbreite abziehen.

Beispielinhalte müssen die gewählte Anordnung rechtfertigen: Eine Sidebar ergänzt tatsächlich, statt nur die Hauptnavigation zu wiederholen. Glaubhafte Metadaten, Unterlagen oder Kontakte können den Nutzen zeigen, sofern sie zum Auftrag passen. Hinweise zur Bedienung der Demonstration ausserhalb des fachlichen Beispielinhalts halten. Das ist eine Auswahlhilfe, keine vorgeschriebene Sidebar-Ausstattung.

Grenzfälle nach Aufgabe wählen: lange Sidebar, mehrzeilige Titel, viele Cards, breite Tabelle, Textvergrösserung oder wenig Fensterhöhe. Keine fixe Mindestanzahl an Demos. Statische Vorschauen als solche kennzeichnen; eine Darstellung ist kein funktionsfähiger Navigations- oder Scrollnachweis. Werte und Regeln bleiben auch ohne interaktive Grafik lesbar.

## Übergabe und Gegencheck

Führe die PGL-IDs mit Anwendbarkeit, Antwort/Fundstelle oder Lücke, Herkunft, fachlichem Stand und tatsächlichem Nachweis. Die Autorenmatrix ist keine vorgeschriebene Seitenstruktur. Offene Werte, fehlende Plattformentscheidung und fehlender Prüfnachweis sind unterschiedliche Lücken.

Vollziehe einen begrenzten Entwurf mit der Anleitung nach: passende Anordnung wählen, Regionen zuordnen, Reihenfolge bei weniger Platz festlegen und einen relevanten Grenzfall behandeln. Ist eine Entscheidung nur durch stillschweigend erfundene Regeln möglich, fehlt eine Antwort. Berichte nur tatsächlich ausgeführte Prüfungen; keine allgemeine Freigabe aus einer Desktop- und einer Mobilgrafik.

Nach einer Anwendung oder einem Review prüfen, ob eine Erkenntnis auch den Skill oder seine Fragen präzisieren muss. Übertragbare Entscheidungskriterien in die Anleitung übernehmen; konkrete Beispielwerte und lokale Korrekturen im Anwendungsprotokoll halten. Eine einzelne Umsetzung nicht zur universellen Pflicht erheben.

Seitenlayouts führen Rasteranwendung und Anordnung. Seitentypen führen Aufgabe/Inhaltspriorität, Inhaltslayouts die innere Gruppierung, Grundlagen die visuellen Werte, Patterns die Arbeitsabläufe, Komponenten ihre Bedienung. Der Skill setzt kein CMS oder Framework voraus und autorisiert keine zusätzliche Implementierung, Contractänderung oder Veröffentlichung.
