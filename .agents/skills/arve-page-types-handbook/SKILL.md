---
name: arve-page-types-handbook
description: Erarbeite oder prüfe Handbuchseiten zu Seitentypen aus Nutzeraufgaben, Quellen und gezielten Rückfragen. Für Übersicht/Suche, Dashboard/Auswertung, Katalog/Serviceeinstieg, Detailansicht, Erstellen/Bearbeiten und Prüfen/Entscheiden sowie deren Auswahl; nicht für die räumliche Layoutspezifikation oder die Implementierung eines Produktscreens.
---

# Seitentypen im Handbuch erarbeiten

Eine Seitenaufgabe beschreibt, was Menschen erreichen sollen: Einträge finden, den aktuellen Stand erkennen, Entwicklungen untersuchen, einen Service wählen, einen Gegenstand verstehen Angaben erstellen/bearbeiten oder vorbereitete Inhalte beurteilen und entscheiden. Dieselbe Aufgabe kann unterschiedliche Seitenlayouts verwenden. Eine Seite mit vier Cards ist deshalb noch kein eigener Seitentyp.

## Auftrag und Quellen

Kläre Zielsystem, gewünschte Seite oder Themenfamilie, unterstützte Plattformen und Arbeitsmodus aus dem Auftrag. shadcn und seine Projektbeispiele sind keine automatisch geltende Basis. Im Bestandsmodus dokumentiere belegte Aufgaben und Regeln; unbekannte Entscheidungen bleiben offen. Bei ausdrücklich delegiertem Entwurf entwickle passende Vorschläge und kennzeichne sie als lokale Entscheidungen. Ein Referenzbeispiel begründet keine allgemeine Geschäftsregel.

Lies den [Fragenkatalog](references/page-type-questions.md). Für eine konkrete Typseite lade nur den passenden Abschnitt der [Typenhilfe](references/page-type-guidance.md). Für eine Katalogseite genügt zuerst die Auswahllogik; nicht alle Typen vollständig ausarbeiten, wenn sie nicht beauftragt sind.

Lade vorhandene Seiten, Nutzeraufgaben, Navigationswege, UX-Patterns und Inhaltsvorgaben gezielt. Screens zeigen eine Umsetzung, nicht automatisch deren Begründung oder alle Zustände. Trenne Quellbefund, Beobachtung, Entwurfsentscheidung und offene Frage. Links schrittweise verfolgen, keine ganze Bibliothek vorsorglich laden.

## Mit dem Nutzer entscheiden

Beginne bei drei Zusammenhängen: Was soll eine Person hier erreichen? Was weiss oder besitzt sie beim Einstieg? Woran erkennt sie den Abschluss beziehungsweise den nächsten sinnvollen Schritt? Frage nur nach fehlenden Angaben, die die Ausarbeitung tatsächlich ändern. Kleine Bündel mit ein bis drei zusammengehörigen Entscheidungen sind meist hilfreicher als ein vollständiger Fragebogen.

Bei Unklarheit erläutere eine begründete Auswahl: etwa Orientierung zwischen Bereichen gegenüber Finden in einer Ergebnismenge. Nicht zuerst nach der gewünschten Anzahl Cards oder Spalten fragen. Noch offene Entscheidungen sichtbar lassen; keine Zustimmung aus Schweigen ableiten. Bereits delegierte Entwurfsentscheidungen selbst bearbeiten.

## Inhaltliche Struktur entwickeln

Die Auswahl nicht auf CRUD-Aufgaben reduzieren. Suche, Dashboard, Auswertung und Serviceeinstieg müssen nach ihrer tatsächlichen Aufgabe auffindbar sein, statt sich hinter einer allgemeinen „Übersicht“ zu verbergen. Eine gemeinsame Seite für verwandte Aufgaben kann Unterschiede gezielt erklären, etwa Erstellen und Bearbeiten. Die konkrete Taxonomie folgt dem Zielsystem; Arves Kategorien sind ein Ausgangspunkt.

Allgemeine Anleitungen und spezialisierte Produktpiloten getrennt führen. Ein Pilot darf konkrete Datenfelder, Grenzen, Zustände und Rückkehrziele dokumentieren, ohne die allgemeine Anleitung zu dominieren. Produktdetails in einem klar benannten Beispiel erhalten und aus der Anleitung darauf verlinken. Eine Demo einer 2:1-Anordnung ist kein weiterer Seitentyp „Detail“.

Bearbeite die aktiven PGT-Fragen. Das Ergebnis erklärt Auswahl und Grenze des Typs, notwendige und optionale Inhaltsbereiche, deren Priorität, Einstieg und Rückwege sowie räumliche Folgen relevanter Zustände. Ein Regionsschema kann die Anordnung erklären, ohne schon ein bestimmtes Spaltenrezept festzulegen.

Trenne allgemeine UX-Regeln von Produktentscheidungen und Beispieldaten. Pflichtfelder, Statusmodelle, Autosave, Löschrechte, Rücksprungziele oder Serverfähigkeiten nicht aus einem Beispiel verallgemeinern. Lade-/Fehlerabläufe und Datenerhalt führt das passende UX-Pattern; die Typseite erklärt, wo Orientierung, Meldungen und nächste Handlung Platz finden. Fehlende Patternentscheidungen bleiben konkret benannt statt als technische Zusicherung formuliert zu werden.

Bei mehreren Plattformen zuerst gemeinsame Aufgaben- und Inhaltspriorität beschreiben. Browsernavigation, native Zurück-Navigation, Fenstermodelle, Safe Areas und Bildschirmtastatur nur für den tatsächlich unterstützten Kontext konkretisieren. Eine responsive Webskizze ist kein iOS-/Android-Nachweis.

Prüfen und Entscheiden als eigenständige Aufgabenabsicht behandeln, wenn eine vorbereitete Zusammenstellung bewusst beurteilt werden muss. Eigene Angaben vor Abschluss und fremde Vorschläge zur Freigabe unterscheiden. Ein einzelner Validierungsschritt erzeugt noch keinen neuen Typ. Arbeitsvorrat als auf Abarbeiten ausgerichtete Übersicht und Konfiguration als Detail-/Bearbeitungsvariante klären; Dokumente und Mehrstufigkeit allein begründen keine weiteren Familien.

## Anschauliche Handbuchseite

Zeige früh einen erkennbaren Seitenausschnitt mit Aufgabe, Hauptinformation und nächster Handlung. Beschrifte die Regionen ausserhalb des Inhalts, wenn eine Annotation sonst den Entwurf verdeckt. Relevante breite und kompakte Varianten sollen denselben Inhalt zeigen; eine Sammlung leerer Rechtecke erklärt keine Informationshierarchie.

Kurze Auswahlregeln stehen am Beispiel. Weitere Zustände, Herkunft und Entscheidungsgründe dürfen vertiefend folgen. Wähle Grenzfälle danach, welche Regel sie erklären: viele Ergebnisse, langer Objekttitel, fehlende Zusatzinformationen oder lange Eingaben. Kein Pflichtpaket fiktiver Geschäftsszenarien erzeugen.

Katalogseiten helfen bei der Auswahl zwischen Typen. Einzelne Typseiten erklären deren konkrete Verwendung. Keine Miniatur sämtlicher Unterseiten und keine doppelte Pflege aller Regeln im Katalog. Vorschauen müssen auch schmal lesbar bleiben; Abbildungen brauchen eine gleichwertige Textaussage. Statische Studien und funktionsfähige Abläufe unterscheiden.

## Übergabe und Gegencheck

Nach Anwendung und Review übertragbare Erkenntnisse in diesen Skill beziehungsweise seine Fragen zurückführen. Konkrete Beispielwerte und lokale Korrekturen im Anwendungsprotokoll halten; eine einzelne Umsetzung nicht zur allgemeinen Pflicht machen.

Führe für jede PGT-ID Anwendbarkeit, Antwort/Fundstelle oder offene Entscheidung, Herkunft und fachlichen Stand. Benenne tatsächliche Nachweise separat. Diese Autorenmatrix darf ausserhalb der sichtbaren Seite liegen; die IDs sind keine vorgeschriebenen Überschriften.

Vollziehe aus dem beauftragten Umfang eine Entscheidung nach: Typ wählen, Hauptinformation und Handlung priorisieren, alternative Anordnung zulassen und einen relevanten Grenzfall berücksichtigen. Fehlt dafür Wissen, nenne die konkrete Frage. Das ist eine redaktionelle Prüfung, kein Nutzertest oder Nachweis eines funktionierenden Backends.

Seitentypen führen Aufgabe und Inhaltspriorität, Seitenlayouts die räumliche Anordnung, Inhaltslayouts die innere Gruppierung, Patterns den Ablauf und Komponenten die lokale Bedienung. Halte präzise Verweise statt duplizierter Definitionen. Der Skill setzt weder CMS noch Framework voraus und autorisiert keine zusätzliche Implementierung, Contractänderung oder Veröffentlichung.
