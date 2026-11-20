# Gemeinsame Voraussetzungen für einen arbeitsfähigen Gestaltungsstand

Stand 18.11.2026. Ziel: Ein Team kann die drei vereinbarten Aufgaben für Web auf Desktop und in schmalen Ansichten gestalten. Das ist keine Produktionsfreigabe, kein Auftrag für einen Backendbau und kein Nachweis nativer Plattformen. Basis ist der [Inhaltsstandard 0.1](../content-standard/README.md).

Typen: **D** = eine vorhandene Regel/Ressource ist unzureichend erklärt oder auffindbar; **E** = eine tatsächliche Design-/Produktentscheidung ist offen; **B** = eine benötigte wiederverwendbare Zusammensetzung/Ressource fehlt oder ihre Nutzbarkeit ist nicht nachgewiesen. Bei B wird ausdrücklich unterschieden, was fehlt und was nur noch ungeprüft ist. Der primäre Typ bestimmt den nächsten Arbeitsschritt; Folgearbeit wird separat genannt.

## BASE-01 · Einen gemeinsamen Pilotgegenstand und seinen Umfang festlegen

**Typ E · blockiert die durchgängige Gestaltung · Zuständigkeit: Produkt/UX.**

**Beleg:** `src/docs/invoices/data.ts` und die Rechnungsrouten liefern Daten für Finden/Detail. Das neue Formularpaket verwendet bewusst «Projektname/Projekt erstellen». Beide Beispiele sind vorhanden und jeweils sinnvoll, aber noch kein gemeinsames Objektmodell für Finden → Detail → Bearbeiten. Quellen: `scripts/content/form-patterns-release.ts`, `src/app/(docs)/systems/shadcn/beispiele/rechnungen/[id]/page.tsx`.

**Benötigtes Ergebnis:** Eine Seite Scope: Zweck des neutralen Datensatzes, Identität, Pflicht-/optionale Angaben, vorhandene Zustände und erlaubte Aktionen. Anzeigen, Erstellen und Bearbeiten auf denselben Gegenstand beziehen. Festhalten, ob für diesen Pilot Auswahl einzelner Datensätze genügt; Mehrfachauswahl, Bulkaktionen, Upload und komplexe Filter sind nicht automatisch erforderlich. Unterstützte Sprache, Theme und Webkontexte benennen. Die Wahl des Gegenstands ist ein Gestaltungs-Prüfauftrag, keine Ausweitung des Komponentenbestands.

**Abnahme:** Eine unabhängige Person benennt für denselben Datensatz Suchinformation, Detailinhalt, editierbare Felder und Ergebnis der Änderung ohne widersprüchliche Bezeichnungen. Erstellen und Bearbeiten haben je einen nachvollziehbaren Einstieg/Abschluss.

## BASE-02 · Verbindliche visuelle Referenz für diesen Umfang entscheiden

**Typ E · blockiert konsistente Gestaltung · Zuständigkeit: Design-System-Design.**

**Beleg:** `scripts/content/foundations-release.ts` unterscheidet Export-/Portalwerte ausdrücklich. Allgemeine Textrollen, Abstands-/Radiusskalen, zusätzliche Flächenrollen und Ebenenfolge sind teilweise offen. Gute Erklärungen sind kein Ersatz für diese Entscheidungen.

**Benötigtes Ergebnis:** Eine benannte Referenz mit gültigen Rollen für die im Pilot verwendeten Farben und Zustände, Titel/Fliesstext/Hilfe, Gruppierungsabstände, Feld-/Aktionsgrössen, Flächen/Umrandungen und gegebenenfalls Icons. Vorhandene Werte übernehmen oder begründet abweichen; keine fehlenden Zahlen zur Tabellenfüllung erfinden. Container und Umbruch bei Layout führen. Eine gesamte Bewegungs-, Chart- oder Mehrmarkenskala ist ohne Nutzung im Pilot kein Blocker.

**Abnahme:** Zwei Gestaltende setzen dieselbe Meldung, Feldgruppe und Aktionshierarchie anhand derselben Referenz auf. Unterschiede lassen sich als erlaubter Spielraum oder Fehler entscheiden. Jedes verwendete Wert-/Rollenpaar führt zu seinem gültigen Stand.

## BASE-03 · Vorhandene Assets zu einer tatsächlich nutzbaren Teamressource machen

**Typ B: Nutzbarkeit/Übergabe noch nicht nachgewiesen · blockiert wiederverwendbare Gestaltung · Zuständigkeit: Designressourcen, unterstützt durch Contractpflege.**

**Beleg:** Im lokalen Import `src/contracts/libraries/shadcn/5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed/` liegen vier `.fig`-Dateien für Button, Input, Checkbox und Switch. In diesem Durchgang wurden vorhandene ZIP-Struktur und Einträge `canvas.fig`, `thumbnail.png`, `meta.json` gelesen. `library.json` bezeichnet die Bibliothek als draft. `src/contracts/catalog.ts` führt den neuen Bibliotheksimport neben älteren komponentenweisen Exportrevisionen. Eine sichtbare Demo oder ein vorhandenes Archiv beweist weder die Wiederverwendung in einem Designwerkzeug noch Übereinstimmung aller Revisionen.

**Benötigtes Ergebnis:** Eine erreichbare, versionierte Designressource oder gleichwertige Gestaltungsvorlage mit ausdrücklich unterstütztem Variantenumfang. Bestehende Dateien zunächst öffnen/importieren und auf Wiederverwendung prüfen; sie nicht als fehlend behandeln und nicht vorsorglich nachbauen. Verbindung zwischen Designasset, gültiger visueller Referenz, dokumentiertem Verhalten und gegebenenfalls Implementierung kenntlich machen. Erst nach Prüfung fehlende Zusammensetzungen aus FIND/DETAIL/EDIT ergänzen. Die Auswahl des Designwerkzeugs bleibt offen, solange ein tatsächlicher Teamweg existiert.

**Abnahme:** Eine Person ausserhalb der Erstellung findet die Ressource, verwendet ein Feld und eine Aktion, ändert Inhalt sowie freigegebene Zustände und erkennt den gültigen Stand. Keine Rückfrage nach versteckten lokalen Pfaden oder unbenannten Varianten nötig. Dateiimport und Variantenprüfung sind hier noch nicht ausgeführt.

## BASE-04 · Vorschlag, geltende Pilotregel und offenen Punkt unterscheiden

**Typ E, danach D · blockiert Entscheidungssicherheit · Zuständigkeit: benannte fachliche Systemverantwortung.**

**Beleg:** `src/collections/Pages.ts` besitzt Veröffentlichung und Versionierung, aber keinen getrennten Fachstatus/Owner. Formular- und Grundlageninhalte markieren ihre offenen Entscheidungen ehrlich. `Implementations.ts` besitzt bereits Implementierungsstatus und Nachweisfelder; diese ersetzen keine fachliche Entscheidung über den Pilot.

**Benötigtes Ergebnis:** Für die Pilotregeln ein kurzes Entscheidungsregister mit Gegenstand, Entscheidung, Begründung, Geltung, verantwortlicher Rolle und offenem Rest. Das darf zunächst ein redaktioneller Datensatz sein, ohne neues Freigabesystem. Veröffentlichung, redaktionell entschieden und technisch geprüft getrennt kennzeichnen. Ein erreichbarer Weg für die Rückfrage «Diese Aufgabe ist nicht abgedeckt» gehört dazu.

**Abnahme:** Eine fremde Person erkennt bei Fokusziel, Filterauslösung und Regionswechsel, welche Vorgabe gilt, welchen Spielraum sie hat und wer eine Ausnahme klärt. Ein veröffentlichtes «offen» wird nicht zur freigegebenen Regel umgedeutet.

## BASE-05 · Den Gestaltungsauftrag durch eine unabhängige Person durchführen lassen

**Typ B: fehlender Nutzbarkeitsnachweis des Gesamtpakets · Abnahmeblocker, nach den Fachpaketen · Zuständigkeit: unabhängiges Designteam mit Review durch UX/Content/Inklusion.**

**Beleg:** Der bisherige Stand enthält begrenzte Portal-/Demo-/MCP-Prüfungen und konkrete Prüfaufträge. Kein dokumentierter Durchlauf eines unabhängigen Teams durch alle drei Gestaltungsaufgaben liegt in den herangezogenen Releaseberichten vor.

**Benötigtes Ergebnis:** Ein begrenzter Probeauftrag: denselben Datensatz finden, im Detail verstehen, neu anlegen und vorhandenen Wert ändern; jeweils weite und schmale Darstellung. Benötigte Zustände zeigen: normal, relevante fehlende/zu lange Inhalte, leer/Nulltreffer, korrigierbarer Fehler, laufend, bestätigt und unbekannter Ausgang soweit zur Aufgabe gehörig. Statische Designs dürfen diese Zustände darstellen. Eine neue Serverimplementierung ist keine Voraussetzung für die Gestaltungsabnahme.

**Abnahme:** Die Person kann den Auftrag allein mit Handbuch und Ressourcen fertigstellen. Jede Rückfrage wird klassifiziert: D, E oder B. Kritische ungeklärte Entscheidungen werden behoben; bewusst erlaubter Spielraum bleibt erlaubt. Dokumentierte Bewertung umfasst Inhalt, visuelle Referenz, Rückwege, Meldungen und vorgesehene Zugänglichkeit. Tatsächliche Tastatur-/Screenreaderbedienung wird nur für vorhandene interaktive Umsetzung geprüft und nicht aus statischen Entwürfen behauptet.

## Reihenfolge und Nachweisgrenze

BASE-01/02/04 führen die erforderlichen Entscheidungen zusammen. BASE-03 prüft vorhandene Ressourcen früh, damit die Fachpakete auf realen Bausteinen aufbauen. FIND/DETAIL/EDIT liefern die aufgabenbezogenen Vorlagen. BASE-05 ist die Abschlussprüfung. Das ergibt eine endliche Pilotgrenze, keine Pflicht zum gesamten Inhaltskatalog.

Ausgeführt: Sourcelektüre der genannten Dateien, Inventar und ZIP-Verzeichnis der vier `.fig`-Archive. Nicht ausgeführt: Import in ein Designwerkzeug, neue Contractvalidierung, Freigabe einer Skala, unabhängiger Gestaltungstest oder neue Plattformabnahme. Diese Datei wurde erstellt; App und CMS unverändert.
