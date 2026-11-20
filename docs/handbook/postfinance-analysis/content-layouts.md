# Content layouts: drei innere Muster

Visuelle Nachprüfung der PostFinance-Demo am 20. November 2026, mit BrowserOS neo im eigenen Tab. Die Screenshots wurden angesehen, nicht als Dateien gespeichert. Keine Datenwerte wurden übernommen oder Eingaben geändert. Die drei Muster beschreiben die Anordnung **innerhalb** einer Karte; sie sind keine Seitentypen.

Geprüft: breite Ansicht bei 1440×1000 und schmale Ansicht bei 390×844 CSS-Pixeln. Die schmale Darstellung wurde nach Navigation/Neuladen geprüft; ein zwischenzeitlich noch nicht umgebrochener Ausschnitt wurde nicht als Mobile-Beleg verwendet. Dies ist kein Gerätetest und keine Bestimmung des exakten Breakpoints.

## 1. Label–Value

Quelle: [Zahlungsdetail](https://www.postfinance.ch/ap/ga/ob/html/finance/transfer/pending-orders/search-single-orders/orders-detail), geöffnet über Zahlungen → Zahlungen/Kontoüberträge → Details. Ergänzend breit: [Profil](https://www.postfinance.ch/ap/ga/ob/html/finance/services/customer-hub/profile).

**Beobachtet:** Im Zahlungsdetail beginnt jeder Abschnitt mit einer Überschrift. Darunter stehen Bezeichnungen links und Werte in einer gemeinsamen zweiten Spalte. Beide Spalten sind linksbündig. Eine mehrzeilige Adresse bleibt ein zusammenhängender Werteblock; die Bezeichnung richtet sich an dessen erster Zeile aus. Manche Werte kombinieren eine hervorgehobene erste Zeile mit einer zweiten, normal gesetzten Zeile. Zwischen einzelnen Paaren liegt Abstand, zwischen größeren Abschnitten eine feine Trennlinie. Das Profil zeigt dieselbe Grundidee auch in einer kleineren Karte.

**Schmal:** Die Bezeichnung steht oberhalb ihres Werts und ist stärker hervorgehoben. Mehrzeilige Werte bleiben zusammen. Der Abstand zwischen Paaren ist größer als der Abstand innerhalb eines Paares. Die Abschnittsüberschrift und Trennlinien bleiben erhalten.

**Referenzentscheidung, nicht beobachtete PostFinance-Regel:** Für lange untrennbare Werte einen kontrollierten Umbruch erlauben. Fehlende Werte ausdrücklich als „Nicht angegeben“ auszeichnen statt sie als leere Zeile verschwinden zu lassen. Lange Bezeichnungen dürfen umbrechen; keine feste Zeilenhöhe voraussetzen. Diese Sonderfälle wurden nicht mit veränderten Daten getestet.

## 2. Form Layout

Quelle: [Überträge](https://www.postfinance.ch/ap/ga/ob/html/finance/transfer/transfers), erreichbar über Home → Überträge. Ergänzender breiter Edit-Beleg aus dem vorherigen Rundgang: Profil → Kontaktzeile → Edit unter `services/contact-data`.

**Beobachtet:** Oben in der breiten Karte stehen Tabs. Danach folgen Zeilen mit einer linken Labelspalte und einer gemeinsamen rechten Feldspalte. Die Felder nutzen nicht die ganze Kartenbreite. Kontoauswahlen können mehrere Textzeilen enthalten. Radiobuttons stehen innerhalb ihrer Gruppe nebeneinander. Betrag und Währung bilden eine gemeinsame Zeile. Der optionale Buchungstext trägt seinen Hinweis am Label. Am Ende trennt eine Linie den Inhalt von der rechts ausgerichteten Abschlussaktion.

**Schmal:** Die Tabs werden zur Auswahlbox. Labels stehen oberhalb ihrer Controls; Radiooptionen stehen untereinander. Kontoauswahlen nehmen die verfügbare Innenbreite ein. Betrag und Währung bleiben nebeneinander. Das Formular fließt nach unten weiter; die Abschlussaktion wurde in dieser schmalen Nachprüfung nicht bis zum Ende abgescrollt.

**Referenzentscheidung, nicht beobachtete PostFinance-Regel:** Die eigenständige shadcn-Referenz darf Labels auch breit oberhalb der Felder führen; das weicht bewusst von der beobachteten breiten Labelspalte ab. Hilfetext und Fehlermeldung direkt dem Feld zuordnen. Für lange Labels und Meldungen natürliche Höhe zulassen. Pflicht-/Optionalstatus textlich ausdrücken. Eine generische Referenz darf Save/Cancel als gemeinsame Aktionsgruppe zeigen; die geprüfte Übertragsseite zeigt eine einzelne Abschlussaktion, der zuvor geprüfte Kontakt-Edit dagegen Cancel/Save. Validierungs- und Leerzustände wurden nicht ausgelöst.

## 3. Card Header

Quelle: [Home](https://www.postfinance.ch/ap/ga/ob/html/finance/home), besonders die Bewegungs- und Analysekarte.

**Beobachtet:** Der Kartentitel steht oben links. Kleine runde Symbolaktionen stehen rechts in derselben Kopfzeile: Hilfe allein oder Einstellungen und Hilfe zusammen. Die zugänglichen Namen benennen die Aktion und die zugehörige Karte. Eine Karte ohne Kopfaktion verwendet denselben Titelbereich. Unter dem Kopf beginnt der fachliche Inhalt mit eigenem Abstand. Bei der Analysekarte folgt eine Zeitraumzeile unter dem Titelbereich. Die Kopfaktionen stehen nicht in der unteren Gruppe der fachlichen Aktionen.

**Schmal:** In der Bewegungskarte bleiben Titel und beide Symbolaktionen in einer gemeinsamen Zeile. Die nachfolgenden Konto-/Kennzahlinhalte ordnen sich darunter neu an. Daraus folgt kein belegtes Verhalten für beliebig lange Titel; ein erzwungener Titelüberlauf wurde nicht geprüft.

**Referenzentscheidung, nicht beobachtete PostFinance-Regel:** Titel und optionale Beschreibung als Textgruppe führen, Aktionen als eigene Gruppe. Eine Textaktion unter dem Text in der schmalen shadcn-Referenz ist eine eigene Entscheidung; beobachtet wurden bei PostFinance kleine Symbolaktionen neben dem Titel. Bei Platzmangel darf der Titel mehrzeilig werden; Aktionen dürfen eine eigene Zeile erhalten. Keine starre Kopfhöhe. Eine Aktion benötigt einen eindeutigen zugänglichen Namen. Ob ein Tooltip verwendet wird, wurde nicht geprüft.

## Weitere innere Muster

| Muster | Visueller Beleg aus dem Rundgang | Abgrenzung |
|---|---|---|
| Tabellenzeile | Zahlungsübersicht, Versicherungen | Objekt links, ergänzende Spalten, Aktion rechts; feine horizontale Linien. Kein Label–Value-Ersatz für beliebige Listen. |
| Suchbereich | Zahlungen, Dokumente | Getönter, einklappbarer Bereich mit Filtergruppen und eigener Aktionszeile. |
| Navigationszeile | Home-Suchkarte, Neuigkeiten, Support | Icon/Text und Chevron, mehrere Zeilen durch Linien getrennt. |
| Kennzahl mit Kontext | Home, Analysen | Prominenter Wert mit kleiner Erklärung; Werte in diesem Bericht ausgelassen. |
| Diagramm und Kennzahlgruppe | Analysen | Visualisierung neben zugehörigen Kennzahlzeilen, schmal untereinander. |
| Abschnitt mit Aktionen | Zahlungsdetail, Kontakt-Edit | Überschrift, Inhalt und Abschlussaktionen sind unterschiedliche Teile einer Karte. |
| Uploadfläche | EZAG, QR-Import | Getönte Fläche mit gestricheltem Innenrand, Symbol, Anweisung und Dateihinweisen. |
| Hinweisblock | Dokumentbestellung, Demo-Mailbox | Icon, Text und farbige Kontur innerhalb einer Karte; Zustand statt eigener Seitentyp. |

Diese Beobachtungen sind eine Gestaltungsreferenz. Sie belegen weder einen bestimmten PostFinance-Technologiestack noch eine allgemeine Barrierefreiheitsprüfung.
