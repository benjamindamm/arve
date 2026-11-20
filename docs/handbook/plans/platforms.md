# Plattformen: Themenaudit und Darstellungsplan

Stand: 18. November 2026. Gegenstand ist das shadcn-Referenzhandbuch in Arve. Dieser Plan ergänzt den fehlenden Plattformbereich und verbindet ihn mit den vorhandenen Komponentenständen. Er ist eine redaktionelle Planung, keine Freigabe nativer Anwendungen, keine Änderung an Contracts und kein Auftrag zur Veröffentlichung.

## 1. Bestand und Evidenzgrenzen

Die aktuelle Datenbank wurde direkt mit `pg` und `default_transaction_read_only=on` gelesen; Payload wurde dafür nicht initialisiert. Gelesen wurden der gesamte Seitenindex, sämtliche Implementierungsdatensätze und deren Webkontexte sowie die Text-/Hinweisblöcke von Button, Input, Checkbox, Switch, Komponenten, Komponenten auswählen, Releases und Migrationen sowie Technische Anbindung und MCP. Der Seitenindex enthält keinen eigenen Plattformzweig und keine Plattformunterseiten. «Struktur für Plattformstände» aus der Inhaltsmatrix bezeichnet damit gegenwärtig das Datenmodell und die Komponentenanzeige, keinen ausformulierten Handbuchbereich.

| Gegenstand | Tatsächlicher Bestand | Aussagegrenze |
| --- | --- | --- |
| Button, Seite 8 | Ein veröffentlichter Datensatz, Implementierung 1: Spartan Button, Web, `preview`, `@spartan-ng/brain` 1.9.0; aktualisiert 13.11.2026, 13:05 UTC | Veröffentlichung bezeichnet die Sichtbarkeit des Datensatzes, Preview den eingetragenen Reifestand. Beides ist kein allgemeiner Prüfnachweis. |
| Webkontexte des Buttons | `desktop` und `mobile` eingetragen | Benannte Nutzungskontexte, keine Bestätigung erfolgreich geprüfter Desktop-/Mobilbedienung. |
| Button-Prüftext | «Klick und Deaktivierung im lokalen Browser geprüft. Mobile Bedienung, assistive Technologien und Contract-Konformität sind offen.» | Historische Aussage ohne Nachweisreferenz; Browser-/OS-Version, Zeitpunkt und reproduzierbarer Ablauf fehlen im Datensatz. In diesem Audit nicht erneut funktional geprüft. |
| Button-Verantwortung | `owner` und `verification.evidence` leer; Contractpin `fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d` | Team und belastbarer Nachweis sind offen. Pin allein beweist keine Konformität. |
| Input, Checkbox, Switch, Seiten 14–16 | Je eine veröffentlichte Komponentenseite mit Demo-Konfiguration; kein veröffentlichter Implementierungsdatensatz | «Demo vorhanden» und «keine Implementierung veröffentlicht» können zugleich stimmen. Die Anzeige muss die Unterscheidung erklären. |
| iOS und Android | Keine Implementierungsdatensätze, auch keine unveröffentlichten in der gelesenen Haupttabelle | Keine lokale native Implementierung dokumentiert. Daraus folgt weder technische Unmöglichkeit noch beschlossene Nichtunterstützung oder Lieferzusage. |
| Technische Anbindung, Seite 27 | Beschreibt veröffentlichte Seite, gepinnte Contractrevision und Demo-Konfiguration | Plattformstand im tatsächlichen Rückgabeobjekt weiter erläutern; keine eigenständige zweite Datenquelle schaffen. |
| Releases und Migrationen, Seite 26 | Datum, Auswirkungen, neue Contractrevision, Seitenhistorie | Reifebewertung und Veröffentlichung bleiben dort geführt; Plattformbereich konsumiert den nachvollziehbaren Stand. |

Der ausgelieferte Button-Seitentext wurde über BrowserOS neo gelesen. Sichtbar sind nacheinander Einsatzhinweise, «Plattformen und Implementierungen», Web/iOS/Android, Demo und technischer Contract. Web zeigt zuerst `Freigabestatus: preview`, Paket, beide Kontexte und langen Contracthash; erst danach folgt die Einschränkung des Prüfstands. Beide nativen Abschnitte sagen «Keine Implementierung veröffentlicht». Der gelesene Contract wird separat als `draft` angezeigt. Dies sind mehrere verschiedene Statusachsen, kein Widerspruch, aber derzeit unzureichend erklärt.

Codebefund: Die drei Plattformkarten werden auf jeder Komponentenseite fest erzeugt. Das gemeinsame CSS verwendet zwei Spalten und bei schmaler Ansicht eine; drei gleichwertig wirkende Karten bilden somit keine bewusst gestaltete Vergleichsmatrix. Die Browserlektüre bestätigt Text und Reihenfolge, keine visuelle oder mobile Abnahme. Es wurden keine Screenreader-, Touch-, Zoom- oder nativen Tests durchgeführt.

## 2. Was fehlt und was erhalten bleibt

Es fehlt ein Ort für die Frage «Was kann ich für meine Zielplattform verwenden, und was muss ich noch entscheiden oder prüfen?». Die vorhandene Komponentenwahl beginnt mit der Aufgabe und warnt zu Recht davor, aus dem shadcn-Katalog geprüfte Spartan-Verfügbarkeit abzuleiten. Der Plattformbereich ergänzt die zweite Entscheidung: Welche konkrete Umsetzung und welcher Nachweis passen zum geplanten Nutzungskontext?

Es fehlen Beziehungen zwischen gemeinsamer Aufgabe, plattformspezifischer Ausgestaltung, konkreter Implementierung und begrenztem Nachweis. Das CMS verknüpft Implementierungen heute nur mit Komponentenseiten. Ein Formularablauf oder eine Detailseite kann deshalb keinen eigenen Implementierungsstand aus dieser Relation beziehen. Aus vier lokal demonstrierten Controls darf insbesondere kein geprüftes Formular, keine vollständige mobile Oberfläche und keine native Bibliothek abgeleitet werden.

Bestehende Komponentenrouten und Contractpins bleiben erhalten. Neue Plattformseiten verlinken auf deren führende Daten. Den technischen Hash nicht als erstes Entscheidungskriterium für Gestaltende präsentieren; er bleibt in den Nachweisdetails unverzichtbar. Kein Kopieren der gesamten Komponenten- oder Inklusionsdokumentation in drei Plattformhandbücher.

## 3. Minimaler Zielbaum

Alle folgenden Slugs sind Vorschläge, keine bestehenden Seiten oder Links.

| Seite unter `/systems/shadcn/` | Aufgabe und Inhalt | Führende Darstellung |
| --- | --- | --- |
| `plattformen` · Plattformen und Umsetzungsstand | Gemeinsame Aufgabe erklären; Webkontext/native Plattform unterscheiden; konkreten Komponentenstand finden; Bedeutung der Statusachsen verstehen | Kleine Verfügbarkeitstabelle mit textlicher Legende, darunter ein Beispiel «gleiche Aufgabe – andere Plattformentscheidung» |
| `plattformen-web` · Web auf Desktop und Mobilgeräten | Dieselbe Webaufgabe bei wechselndem Platz, Eingabe, Browser und assistiver Nutzung entwerfen; tatsächliche Prüfkontexte bestimmen | Zwei gleich befüllte Ansichten plus ein darunterliegender Eingabe-/Prüfkontextstreifen |
| `plattformen-ios` · iOS: Gestaltung und offener Umsetzungsstand | Native Ziele und ihre Abhängigkeiten vorbereiten; systemeigene Navigation, Eingabe und Rückmeldung erst anhand konkreter Aufgabe entscheiden | Aufgabenfolge mit ausdrücklich offenen nativen Entscheidungspunkten; zunächst keine scheinbar fertigen App-Screens |
| `plattformen-android` · Android: Gestaltung und offener Umsetzungsstand | Dieselbe gemeinsame Aufgabe mit Android-spezifischen Entscheidungen verbinden; Umsetzung und Nachweise getrennt halten | Dieselbe Aufgabenfolge, aber eigenständige begründete Android-Entscheidungen statt umgefärbter iOS-Screens |

Der Einstieg ist ein neuer Hauptzweig mit den drei Kindern. Web bleibt eine Plattform mit zwei benannten Nutzungskontexten; Mobil-Web wird kein vierter Implementierungstyp. iOS/Android-Seiten sind zunächst redaktionelle Entwürfe. Ihre Planung erzeugt keine Freigabe und keine zwingend zu veröffentlichenden leeren Seiten. Veröffentlichung erst, wenn pro Seite ein hilfreicher Entscheidungsweg mit Quellen, Verantwortlichkeit und klarer Grenze ausgearbeitet ist. Eine zusätzliche Seite «Statuslegende» oder vierte generische «Responsive»-Unterseite ist für diesen Umfang unnötig.

## 4. Gemeinsames Aufgabenmodell und Varianten

Die führende UX-Aufgabe wird im Pattern beschrieben. Eine Plattformvariante muss die fachliche Bedeutung erhalten: benötigte Informationen, Auswahlmöglichkeiten, Wirkungen, bestätigter Erfolg, Fehler und Wiederaufnahme. Sie darf Navigation, Darstellungsform, Eingabemethode und systemeigene Interaktion begründet ändern. Gleiche Geometrie ist dafür kein Qualitätsziel.

Als durchgängiges Lehrbeispiel genügt der bereits vorhandene Ablauf «Angaben eingeben → prüfen → korrigieren → übermitteln → Ergebnis erkennen». Keine neue fiktive Fachanwendung. Das Pattern verantwortet Prüfzeitpunkt, Datenbewahrung und unklaren Versand. Layout verantwortet Gruppierung und Position der Abschlussaktion. Komponenten liefern die lokal verfügbare Eingabe/Aktion. Die Plattformseite markiert die zusätzlichen Entscheidungen: Wie bleiben Feld, Hilfe und Abschluss bei Bildschirmtastatur erreichbar? Wie wirkt Zurück oder Verlassen? Wie wird ein Ergebnis mit der jeweiligen assistiven Technik verständlich? Welche Systemfunktion wird verwendet?

Eine kompakte Vergleichsdarstellung besitzt Zeilen «Aufgabe», «bleibt gleich», «muss lokal entschieden werden», «verfügbares Beispiel» und «offener Nachweis». Web zeigt den tatsächlich belegten Umfang; native Spalten zeigen offene Entscheidungen mit Gründen, keine erfundenen Controls. Vergleiche werden nur für einen konkreten Unterschied verwendet. Keine vollständige dreispaltige Duplikation des Formularpatterns und kein globaler Plattformumschalter, der fehlende Inhalte als vorhanden erscheinen lässt.

## 5. Verfügbarkeit und Prüfstand verständlich zeigen

Die Übersicht wird aus veröffentlichten Implementierungsdaten abgeleitet. Initiale, ausdrücklich auf den gelesenen Bestand begrenzte Darstellung:

| Komponente | Web | iOS nativ | Android nativ |
| --- | --- | --- | --- |
| Button | Spartan 1.9.0 · Preview. Klick/Deaktivierung laut vorhandenem Prüftext; mobile Bedienung, AT und Contractvergleich offen | Keine Implementierung veröffentlicht | Keine Implementierung veröffentlicht |
| Input | Lokale Demo vorhanden; keine Implementierung veröffentlicht | Keine Implementierung veröffentlicht | Keine Implementierung veröffentlicht |
| Checkbox | Lokale Demo vorhanden; keine Implementierung veröffentlicht | Keine Implementierung veröffentlicht | Keine Implementierung veröffentlicht |
| Switch | Lokale Demo vorhanden; keine Implementierung veröffentlicht | Keine Implementierung veröffentlicht | Keine Implementierung veröffentlicht |

Diese Tabelle ist im Plan eine Momentaufnahme. Im späteren Handbuch darf sie kein von Komponentenständen getrennt gepflegter Text sein. Die Demozeile kommt aus der Demo-Relation, die Paket-/Releasezeile aus der Implementierung. Fehlender Datensatz bedeutet exakt fehlenden veröffentlichten Datensatz. «Geplant», «nicht vorgesehen» oder «nicht unterstützt» sind zusätzliche redaktionelle Entscheidungen und brauchen einen benannten Entscheid, bevor sie erscheinen.

Pro vorhandenem Eintrag zeigt ein kompakter Standblock: Implementierung und Version; eingetragener Reifestand mit Erklärung; benannter Nutzungskontext; nachgewiesene Aufgaben und offene Punkte; Datum/Umgebung/Quelle des Nachweises, sofern vorhanden; verantwortliche Stelle. Fehlende Angaben werden als «nicht dokumentiert» gezeigt. Technischer Contractpin und Einzelbefunde sind aufklappbare Details. Beim Button steht die fehlende mobile Prüfung unmittelbar neben «Mobiles Web», nicht erst nach dem Hash.

Keine grüne Ampel aus `published`, `stable`, einer Demo oder einem erfolgreichen Einzeltest ableiten. Reifestand, CMS-Veröffentlichung, Contractstatus und Prüfresultat bleiben getrennte Felder. Für Prüffälle braucht es mindestens «nicht geprüft», «bestanden im genannten Umfang», «Abweichung beobachtet» und «nicht anwendbar mit Begründung». Historische Nachweise bleiben mit Version sichtbar; nach einem Update ohne erneute Prüfung heisst es «Nachweis für frühere Version», nicht automatisch bestanden oder fehlgeschlagen. Keine Prozentzahl oder Gesamtampel über ungleichartige Kriterien.

Auf schmalen Flächen kann jede Tabellenzeile als beschriftete Liste je Komponente erscheinen. Plattformname und Feldbezeichnung bleiben wiederholt sichtbar. Bedeutung darf weder nur Farbe noch Hover benötigen. Die wichtigste Einschränkung bleibt ohne Aufklappen lesbar; Detailtiefe dient der Nachvollziehbarkeit, nicht dem Verstecken offener Punkte.

## 6. Webseite: Platz und Eingabe auseinanderhalten

Die Seite beginnt mit einer konkreten Aufgabe, nicht mit Breakpointzahlen. Zwei Darstellungen zeigen denselben Formularinhalt breit und schmal; die Reihenfolge und fachliche Handlung bleiben erkennbar. Beschriftete Änderungen betreffen Stapeln, Umbruch, Gruppierung und Erreichbarkeit des Abschlusses. Grundlagen führen Grössen und Typografie, Layout führt Container und Regionen. Diese Plattformseite erklärt zusätzlich Browserkontext, Eingabe und Prüfung.

Unter dem Vergleich stehen unabhängige Bedingungen: verfügbarer Raum, Tastatur/Pointer/Touch, Textvergrösserung, Bildschirmtastatur und assistive Nutzung. Eine schmale Ansicht beweist kein Touchgerät; ein breiter Bildschirm schliesst Touch nicht aus. Browser auf iOS bleibt in dieser Taxonomie Web. Native iOS- oder Android-Unterstützung folgt daraus nicht. Webview, eingebettete Oberfläche oder installierbare Web-App werden nur aufgenommen, wenn ein tatsächliches Produktziel dafür benannt wird.

Ein zweites, kleines Storyboard zeigt Feldfokus → Bildschirmtastatur → Korrekturhilfe → Abschluss erreichbar. Es ist zunächst eine Zielbeschreibung, keine vorhandene geprüfte Demo. Die Prüfaufgabe erfasst konkrete Browser-/OS-Version, Fenstergrösse, Eingabe, Vergrösserung und Aufgabe. Die historische 390-px-Prüfung aus `local-review.md` bleibt ein begrenzter Altbefund; sie ersetzt diese Folge nicht. Für mobile Freigaben sind echte passende Nutzungskontexte erforderlich, nicht nur schmal gezogene Desktopfenster.

## 7. Native Seiten: Recherche und eigene Entscheidungen

Eine native Seite darf mit ehrlichem offenem Stand nützlich sein, wenn sie die nächsten Entscheidungen präzise macht. Ihr Aufbau: angestrebte Aufgabe; lokale Verfügbarkeit; zu klärende Plattformkonventionen; begründete eigene Abweichungen; erforderlicher Prototyp/Prüfweg; Verantwortliche und Quellenstand. Keine Markenillustration im Geräteframe als Ersatz für diese Information.

| Thema | iOS-Recherche | Android-Recherche | Eigene Entscheidung, die Quellen nicht abnehmen |
| --- | --- | --- | --- |
| Navigation und Rückweg | Aktuelle Apple Human Interface Guidelines zu Navigation, Modalität und Plattformen; passende SwiftUI/UIKit-Dokumentation | Aktuelle Android-Design- und Navigationsdokumentation, Back-Verhalten und adaptive Navigation; passende Toolkit-Dokumentation | Informationshierarchie, Abbruch-/Datenfolgen und welche Ansichten überhaupt nötig sind |
| Eingabe und Systemintegration | Systemfelder, Tastatur, Fokus, Eingabehilfen, systemeigene Auswahl | Entsprechende native Felder, Tastatur/Fokus und Auswahl; konkrete Toolkitfähigkeit | Akzeptierte Werte, Pflichtangaben, Zeitpunkt der Validierung und Speicherung |
| Anpassung und Bedienbarkeit | Textskalierung, sichere Flächen, assistive Nutzung und VoiceOver in der konkreten Zielumgebung | Schrift-/Anzeigeanpassung, Fenstergrössen, Inset-Verhalten und TalkBack in der konkreten Zielumgebung | Mindestzielumfang, welche Gerätekategorien unterstützt werden und welche Testkombinationen tragfähig sind |
| Visuelle Sprache und Rückmeldung | Systemfarben, Schrift, Bewegung und native Rückmeldemuster | Material-/Android-Leitlinien zu Rollen, Bewegung und Rückmeldung | Markenrolle versus Systemkonvention; Zuordnung der lokalen semantischen Tokens |

Diese Themen sind ein gezielter Rechercheauftrag, keine in diesem Audit bereits belegten nativen Regeln. Einstiegspunkte für die spätere Primärrecherche sind Apple Developer Human Interface Guidelines und Apple Frameworkdokumentation sowie Android Developers Design/UI und Material Design. Konkrete Artikel und Versionsstände erst zur jeweiligen Entscheidung lesen und dokumentieren. Hier wurden keine externen nativen Quellen geprüft; deshalb werden weder Zahlenwerte noch aktuelle Konventionsdetails als Regeln behauptet.

Vor nativen Screens ist lokal zu entscheiden: Gehören native Apps tatsächlich zum Systemumfang? Welche Betriebssystem-/Gerätekategorien und Toolkits? Wer verantwortet jede Umsetzung? Welches erste reale Pattern prüft die Übertragung? Keine pauschale Wahl von SwiftUI, UIKit oder Compose allein aus dem Plattformnamen. iPad-/Mehrfenster- oder Foldable-Anforderungen brauchen eine ausdrückliche Zielentscheidung und werden nicht stillschweigend aus iOS/Android abgeleitet.

Native Nachweise werden am nativen Artefakt und seiner Version geführt. HTML/ARIA und CEM bleiben Webartefakte; ihr Vorhandensein beweist keine native Semantik. Gemeinsame Bedeutungen und Zustandsfolgen können Ausgangspunkte sein, aber jede native Abbildung braucht eine explizite Zuordnung und reale Prüfung.

## 8. Übergaben an andere Themen

| Führender Bereich | Liefert an Plattformen | Plattformen liefert zurück |
| --- | --- | --- |
| [Grundlagen](foundations.md) | Semantische Rollen, Typografie-/Abstandsbedeutung, Bewegungsabsicht und beschlossene lokale Werte | Welche Plattformzuordnung fehlt; wo Systemschrift, Skalierung, Systemfarben oder Einheiten gesondert entschieden werden müssen |
| [Komponenten](components.md) | Einsatzgrenze, lokale Zustände, Demo-/Contract-/Implementierungsrelation | Kompakter konsistenter Standblock und begrenzte Plattformvariante; kein zweiter Komponentenkatalog |
| [Patterns](patterns.md) | Fachliche Aufgabe, Speicherung, Fehler, Rückkehr und Wiederaufnahme | Unterschiede bei Systemnavigation/Eingabe/Rückmeldung; fachliche Semantik bleibt beim Pattern |
| [Layouts](layouts.md) | Regionen, Priorität, Umbruch und räumliche Navigation | Kontextbedingungen wie Tastatur, Fenster, sichere Flächen; keine neue eigene Rasterskala |
| [Inklusion](inclusion.md) | Kriterien, Aufgabenprüfwege, präzise Aussagegrenzen und assistive Methodik | Konkrete Betriebssystem-/Browser-/AT-Kombination und Implementierungsversion des Nachweises |
| [Content Design](content-design.md) | Konsistente Labels, verständliche Meldungen und Statusvokabular | Systembedingte Text-/Aktionsunterschiede und Rückmeldungsorte zur sprachlichen Prüfung |
| Mitwirken/Releases | Verantwortung, Review, Versionen, Migration und Publikationsentscheidung | Welche Plattform/Version/Quelle von einer Änderung betroffen ist; erneuter Prüfbedarf |

## 9. Minimaler CMS- und Ausgabebedarf

Die neuen Seiten können zunächst `guide` mit `parent`, `order`, `summary` und vorhandenen Textblöcken verwenden. Für erklärende Bilder den gemeinsam geplanten neutralen Abbildungsblock mit Textalternative verwenden, nicht Do/Don't umdeuten. Ein gezielter Vergleichsblock mit Aufgabe und benannten Unterschieden reicht; keine eigene umfangreiche Plattform-Editorfamilie.

`Implementations` besitzt bereits Plattform, Reifestand, Version, Team, Webkontexte, Contractpin und zwei Freitextfelder für Prüfung. Diese Felder bewahren. Benannte Kontexte im Editor und Portal ausdrücklich von geprüften Kontexten unterscheiden. Für belastbare mehrere Nachweise ist später eine kleine strukturierte Nachweisliste nötig: Artefaktversion/Revision, Aufgabe/Kriterium, Ergebnis, Datum, Umgebung, Nachweisreferenz, offene Punkte. Eine pauschale Freitextzeile bleibt als Erläuterung brauchbar, kann aber keine vergleichbaren Prüfdatensätze ersetzen. Ob Relation oder eingebettete Liste genügt, am ersten Button-Nachweis entscheiden; keinen universellen Testmanager vorbauen.

Eine Relation von Plattformleitfaden zu Design-System und zu betroffenen Seiten genügt für den Einstieg. Layout-/Patternnachweise erst modellieren, wenn ein echtes geprüftes Beispiel existiert; nicht durch eine falsche Komponentenrelation erzwingen. Demonstration, Implementierung und Nachweis bleiben unterschiedliche Gegenstände.

Die aktuelle Komponentenfunktion liefert Implementierungsfelder an Portal und MCP, aber kein Implementierungs-`updatedAt`. Die MCP-Demo zeigt nur einen Teil dieser Informationen und lässt Kontext, Team und Nachweisreferenz aus. Bei späterer Umsetzung müssen Übersicht, Komponentenanzeige, MCP-Demo und strukturierte MCP-Ausgabe denselben Stand und dieselbe Grenze transportieren. Die allgemeine Dokumentationssuche durchsucht heute Seiteninhalte/Vorlagen, nicht automatisch alle Implementierungsfelder. Plattformsuche und Übersicht deshalb gezielt anbinden; keine versteckten, technisch aktuellen aber redaktionell unauffindbaren Nachweise.

## 10. Umsetzung und Abnahme

1. Bestand und Begrifflichkeit konsolidieren: die vier Statusachsen, Demoabgrenzung und fehlenden Nachweise anhand des Buttons redaktionell lösen; verantwortliche Teams und nativen Zielumfang als offene Entscheidungen benennen.
2. Plattformübersicht und kompakte Komponentenstandanzeige gemeinsam entwerfen; mit Button und Input den Unterschied Datensatz/Demo/Nachweis demonstrieren. Datenquelle statt manueller Doppeltabelle festlegen.
3. Webseite mit dem Formularpattern und Layout ausarbeiten. Den identischen Inhalt breit/schmal und mit Bildschirmtastatur prüfen; Inklusion liefert Kriterien und dokumentierte Testbedingungen.
4. Native Seiten erst nach Zielentscheidung gezielt recherchieren und ausarbeiten. Gemeinsame Aufgabe, begründete native Entscheidungen und noch fehlende Implementierungen sichtbar halten. Keine vorsorgliche native App bauen.
5. Zusammenhängenden Bereich durch Aufgabenreview und Ausgabeabgleich prüfen; spätere Veröffentlichung bleibt ein eigener autorisierter Schritt.

Abnahmeaufgaben für Lesende: den verfügbaren Buttonstand samt mobiler Einschränkung finden; erklären, warum eine Input-Demo keine registrierte Implementierung ist; mobiles Web von nativer iOS-Nutzung unterscheiden; bei einer Formularübertragung gemeinsame fachliche Regeln und native Entscheidungen benennen; Version und Umfang eines Nachweises bestimmen; offene Entscheidung und verantwortlichen nächsten Schritt finden. Jede Aufgabe muss ohne Contractcode lösbar sein.

Darstellungsabnahme: lange deutsche Labels, schmale Ansicht, Vergrösserung, Tastaturfokus und reine Text-/Screenreaderfolge prüfen. Keine abgeschnittenen Hashes als notwendige Information; Details vollständig erreichbar. Tabellenkopfzuordnung und alternative gestapelte Reihenfolge müssen verständlich bleiben. Prüfung eines Filters oder Aufklappers ist gesondert nachzuweisen, falls solche Interaktion tatsächlich nötig wird. Bei vier Komponenten ist eine statische Übersicht zunächst ausreichend.

Datenabnahme: kein Status aus Publikation/Demo abgeleitet; fehlende Daten nicht als Negativtest behandelt; historische Prüfung an konkrete Version gebunden; keine mobile oder native Freigabe aus Desktopbeobachtung; Komponentenstand, Übersicht und MCP inhaltlich deckungsgleich. Redaktionelle Abnahme der nativen Leitfäden ist ausdrücklich keine Implementierungsfreigabe.

Lokale Primärquellen: gelesene CMS-Haupttabellen `pages`, `pages_blocks_text`, `pages_blocks_guideline`, `implementations`, `implementations_contexts`; `src/collections/Implementations.ts`, `src/collections/Pages.ts`, `src/docs/component-pages.ts`, `src/docs/published-documentation.ts`, `src/docs/mcp-demo.tsx`, `src/app/(docs)/systems/[system]/components/[component]/page.tsx`, `src/app/(docs)/docs.css`; ausgelieferter Button-Seitentext. Planerische Schnittstellen: Inhaltsmatrix, local-review und die oben verlinkten Fachpläne. Ergebnis dieses Auftrags ist ausschliesslich diese Datei; Anwendung, CMS, Contracts und Veröffentlichung wurden nicht geändert.
