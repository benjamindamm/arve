# Arve: unabhängiges kritisches Review

Stand: 18. November 2026. Review des laufenden lokalen Bestands auf `http://127.0.0.1:3010`, nicht nur der Umsetzungsberichte. Keine App-/CMS-Änderung und kein Commit. Einzige neu geschriebene Datei ist dieses Review.

## Wo stehen wir?

Arve ist ein brauchbarer redaktioneller Referenzpilot mit funktionierender Wissensausgabe. Grundlagen und Komponenten zeigen inzwischen, wie ein gutes Handbuch in dieser Plattform aussehen kann: konkrete Gestaltungsfragen, erklärende Studien, nachvollziehbare Grenzen und getrennte technische Nachweise. Es ist noch kein belastbares gemeinsames Arbeitsinstrument für mehrere Konzernteams. Der nächste Engpass ist die Verbindung von Gestaltungsentscheidung, vollständiger Nutzeraufgabe und fachlich verantworteter Regel – nicht ein erneuter Aufbau der Oberfläche.

Die Reife ist ungleich verteilt:

| Ebene | Einschätzung aus diesem Review |
| --- | --- |
| Visuelle Handbuchbasis | Gut genug für den weiteren Ausbau; ruhige Flächen, deutliche Hierarchie und lesbare Textbreite tragen die neuen Seiten. |
| Grundlagen und Komponenten | Als erklärendes Referenzhandbuch brauchbar. Noch keine allgemeine Komponenten- oder Produktfreigabe. |
| Durchgängige UX-Aufgaben | Teilweise beschrieben, aber noch nicht konsistent geführt. Formular und Detailseite enthalten gute Entscheidungen in unnötig mehrfacher Darstellung. |
| Content und Inklusion | Veröffentlichte Kurzmerkblätter, noch kein ausreichend konkreter Anschluss für Teams. |
| MCP | Die geprüften Abrufe funktionieren und erhalten die Einschränkungen der Studien. Veröffentlichung und fachliche Verbindlichkeit sind jedoch noch nicht als getrennte Regelmerkmale abfragbar. |
| Übertragung auf ein Firmensystem | Datenmodell und Grundstruktur tragen einen Pilot. Die konkreten Studien sind derzeit stark an shadcn und Code gebunden; eine redaktionell unabhängige Übernahme ist nicht belegt. |
| Plattformen | Ehrlich als begrenzter Web-/Demostand dargestellt. Keine hier nachgewiesene native Reife. |

## Priorisierte Befunde

### 1. P1 – Die fachlichen Anschlusswege brechen nach den guten Komponentenseiten ab

**Beleg:** [Input](http://127.0.0.1:3010/systems/shadcn/components/input) führt nachvollziehbar vom Label über Zustandsbilder zu Formular, Rückmeldung und Quellen. [Content Design](http://127.0.0.1:3010/systems/shadcn/content-design) liefert danach lediglich drei kurze Absätze über Labels, Hilfe und Formate. [Barrierefreiheit](http://127.0.0.1:3010/systems/shadcn/barrierefreiheit) liefert drei Absätze mit Prüfaufforderungen, ohne einen ausgearbeiteten Prüfweg am Feld oder Formular. Der [Systemeinstieg](http://127.0.0.1:3010/systems/shadcn) stellt diese Bereiche gleichrangig neben die ausgearbeiteten Grundlagen und Komponenten.

**Auswirkung:** Wer nach dem Verstehen eines Inputs eine konkrete Meldung formulieren und deren Wahrnehmbarkeit prüfen will, muss die entscheidende Arbeit selbst ergänzen. Die Einstiegsseite zeigt keine unterscheidbare redaktionelle Tiefe. Mehr Navigationseinträge würden diese Lücke nicht schliessen.

**Nächster Schritt:** Ein zusammenhängender Weg „Angaben eingeben → Fehler verstehen → korrigieren → bestätigtes Ergebnis“ mit Pattern, präzisen Meldungspaaren und begrenztem Prüfbeispiel. Bestehende Fachpläne `plans/patterns.md`, `plans/content-design.md` und `plans/inclusion.md` gezielt daran umsetzen. Nicht alle Themen gleichzeitig aufblasen.

### 2. P1 – Veröffentlichung ist noch kein zuverlässig auffindbarer fachlicher Regelstatus

**Beleg:** Die [Formularseite](http://127.0.0.1:3010/systems/shadcn/formulare-validierung) benennt Prüfzeitpunkt und Fokusziel ausdrücklich als Vorschläge/offene Entscheidungen. [Mitwirken](http://127.0.0.1:3010/systems/shadcn/mitwirken) fordert zwar, Pflege und Review festzuhalten, nennt aber keinen konkreten Übergabeweg. `src/collections/Pages.ts:8` aktiviert Drafts/Versions; im Seitenschema fehlen eigene fachliche Verantwortung, Reviewstand und Regelstatus. `src/docs/published-documentation.ts:112` gibt Titel, Typ, Änderungsdatum und Inhalte aus, keine solche Regelqualifikation. Die live geprüfte MCP-Suche nach „Fehler“ liefert veröffentlichte Treffer ohne dieses Unterscheidungsmerkmal.

**Auswirkung:** Menschen und Agenten müssen aus verstreuten Sätzen rekonstruieren, ob etwas Quellenaussage, Vorschlag oder beschlossene Hausregel ist. Das ist für ein Referenzhandbuch noch handhabbar; für mehrere verantwortliche Teams wird es unzuverlässig.

**Nächster Schritt:** Am Formular eine tatsächlich verantwortete Entscheidung samt Geltung, offenem Rest und nachvollziehbarem Review durchspielen und im Portal/MCP gleich erkennbar machen. Erst daraus die minimal nötigen redaktionellen Felder ableiten. Kein umfassendes Governance-System vorab bauen.

**Wichtige Differenzierung:** Implementierungen besitzen bereits `releaseStatus`, `owner` und `verification` (`src/collections/Implementations.ts:38–54`). Dieser Befund betrifft die fachlichen Seitenregeln, nicht das Fehlen jeglicher Reifeverwaltung. Seitenhistorie, Contractrevision und Implementierungsfreigabe sind verschiedene Ebenen.

### 3. P1 – Studien sind als shadcn-Referenz gelungen, aber noch keine unabhängig pflegbare Firmenvorlage

**Beleg:** `src/docs/foundation-studies.tsx:2` importiert eine feste shadcn-Tokenrevision; Zeilen 26–44 enthalten feste Beispielaussagen. `src/docs/component-studies.tsx:30` verlinkt fest auf `/systems/shadcn/components/…`; Zeile 87 beschriftet jede Komponentenstudie als shadcn-Referenz. Gleichzeitig sind Titel, Textalternative, Quelle und Revision im CMS editierbar (`src/collections/Pages.ts`, study/componentStudy). Der Renderer übernimmt diese Felder, aber nicht die sichtbaren Beispielaussagen als Daten (`src/docs/content.tsx:18–25`).

**Auswirkung:** Das Kopieren einer Seite in ein Firmensystem genügt nicht: sichtbare Referenz, Tokens und Ziele können weiter shadcn bleiben. Eine Änderung nur an der CMS-Textalternative kann zudem eine Abweichung zur sichtbaren Studie erzeugen.

**Kein erfundener aktueller Defekt:** Bei den tatsächlichen MCP-Abrufen von Farbe und Switch stimmten Textalternative, Einschränkungen und gelesene Darstellung inhaltlich überein. Für die heutige Referenz ist feste JSX-Gestaltung ein angemessener Ansatz. Das Problem ist die noch unbewiesene Übertragbarkeit und die getrennte Pflege, nicht die Existenz gestalteter Einzelstudien.

**Nächster Schritt:** Genau eine Studie mit eigener Quelle in einem ausdrücklich gewählten Firmensystem übernehmen. Dabei entscheiden, was bewusst unveränderliche Referenz und was systemabhängiger Inhalt ist; Herkunft und erforderlichen gemeinsamen Review von Bild/Text festhalten. Daraus kleine Datenparameter ableiten, keinen universellen Grafikeditor.

### 4. P2 – Formular und Detailseite haben gute Substanz, aber die zentrale Erklärung kommt zu spät

**Beleg:** [Formulare und Validierung](http://127.0.0.1:3010/systems/shadcn/formulare-validierung) beginnt mit fünf Vorlagenkapiteln, danach folgen Langtextkapitel mit nochmals Ablauf, Fehlern, Review und offenen Entscheidungen. Die Ablaufabbildung folgt erst nach Quellen und mehreren Do/Don't-Blöcken. [Detailseite](http://127.0.0.1:3010/systems/shadcn/detailseite) hat dieselbe Doppelung von fünf Vorlagenthemen und anschliessender Ausarbeitung. Im Renderer stehen `TemplateContent` und `Content` unmittelbar hintereinander (`src/app/(docs)/systems/[system]/[section]/page.tsx`).

**Auswirkung:** Ein Leser muss viel Text überfliegen, bevor das tragende Schema hilft. Mehr Weissraum verbessert die Lesbarkeit, löst aber nicht die Wiederholung. Besonders auf schmalen Bildschirmen wird die zentrale Entscheidung unnötig weit nach unten geschoben.

**Nächster Schritt:** Je Seite eine führende Argumentationsfolge. Bei Formular zuerst Aufgabenabgrenzung und Ablauf mit Fehlerzweigen, danach Prüfzeitpunkt und Wiederherstellung. Bei Detailseite zuerst Informationsgewichtung und Regionen, danach Umbruch und Ausnahmen. Gute Inhalte erhalten; doppelte Zusammenfassungen entfernen bzw. an der passenden Stelle verwenden.

### 5. P2 – Der Themenbaum verlangt unnötige Orientierungsarbeit; mobile Navigation verstärkt sie

**Beleg:** Live stehen „Laden, leer und Fehler“ neben „Systemzustände gestalten“ sowie „Suchen und Filtern“ neben „Auswahl und Suche“. Es gibt sowohl „Detailseite · Beispiel“ als auch „Detailseite“. Diese Unterschiede sind sachlich möglich, aber vor der Wahl kaum erklärt. Die MCP-Suche „Fehler“ setzte die beiden titelpassenden Altseiten vor die umfassendere Formularseite. Das entspricht der einfachen Titelgewichtung in `src/docs/published-documentation.ts:89–99`.

Bei der Input-Seite bei 390 × 844 px öffnete „Handbuch durchsuchen“ eine 1674 px hohe Gesamtliste; der Seitentitel wanderte von y≈261 auf y≈1878. `src/docs/documentation-nav.tsx` rendert rekursiv alle Zweige offen. Es handelt sich um eine Linkliste, nicht um ein Suchfeld. Im Desktop-Einstieg bei 1280 × 900 ist die aktuelle Komponentengruppe zunächst unterhalb des sichtbaren Navigationsteils.

**Auswirkung:** Nutzer müssen die Informationsarchitektur verstehen, bevor sie die fachliche Frage lösen können. Die neue mobile Klappnavigation ist eine funktionierende Verbesserung, aber der vollständige Baum bleibt schwer zu überblicken.

**Nächster Schritt:** Zuerst die im Patternplan bereits begründete Konsolidierung und klare Aufgabentitel umsetzen, alte Adressen erhalten. Danach aktive Familie und Nachbarziele priorisieren; die mobile Grundlösung beibehalten. Suchranking erst mit konkreten Fragen prüfen – nicht vorschnell durch komplexere Suche ersetzen.

### 6. P2 – Der Einstieg erklärt die Idee überzeugender als den ersten ausführbaren Arbeitsweg

**Beleg:** [Arve-Home](http://127.0.0.1:3010/) beschreibt Analyse vorhandener Designs und den Abruf von Einsatzregeln, Contract und Plattformstand. „Im Design-System ausprobieren“ führt zur Systemauswahl. Die [technische Anbindung](http://127.0.0.1:3010/systems/shadcn/technische-anbindung) erklärt lediglich `get_component_page`, während `src/app/mcp/route.ts` vier Lese-Werkzeuge registriert. Die Aussage „Eine veröffentlichte Seite bindet eine Export-Revision“ ist dort zu pauschal: allgemeine Handbuchseiten benötigen keinen Komponentencontract.

**Auswirkung:** Ein neues Team versteht den Nutzen, erhält aber keinen vollständigen ersten Weg vom Auftrag zur passenden Regel, offenen Entscheidung und Rückmeldung. Die vorhandene technische Fähigkeit ist grösser als ihre sichtbare Anleitung.

**Nächster Schritt:** Einen kurzen realen Einstieg „Passenden Baustein für Aufgabe finden“ mit Systemwahl, Suche, Seitenabruf, Contract-/Plattformgrenze und Teamentscheidung anbieten. Den Unterschied zwischen lesendem MCP und einem gesondert beauftragten Erstellungsworkflow erklären. Keine zusätzliche Plattformfunktion ist dafür nötig.

### 7. P2 – Plattformstatus ist ehrlich, aber noch nicht als Auswahlentscheidung aufbereitet

**Beleg:** Die live bediente Input-Demo nimmt Text an. Direkt darunter steht in Web, iOS und Android jeweils „Keine Implementierung veröffentlicht“. Die Komponentenübersicht erklärt den Unterschied korrekt: lokale Vorschau, veröffentlichter Implementierungsdatensatz und Contractstatus sind getrennt. Der live geprüfte MCP-Switch-Abruf enthält folgerichtig `implementations: []` und einen konkreten Contractpin. Auf dem Systemeinstieg gibt es keinen eigenen Weg „Welche Umsetzung kann mein Team verwenden?“.

**Auswirkung:** Der Stand ist nicht falsch, aber eine Person auf einer direkt geöffneten Komponentenseite muss die Bedeutung der scheinbar gegensätzlichen Anzeigen erschliessen. Für einen Plattformentscheid reicht die Existenz der drei Karten noch nicht.

**Nächster Schritt:** Eine kleine führende Übersicht aus den bestehenden Datensätzen, mit klarer Unterscheidung zwischen Demo, registrierter Umsetzung, Status und geprüftem Kontext. Web auf Mobil/Desktop als Nutzungskontexte erhalten. iOS/Android weiterhin offen benennen und keine nativen Beispieloberflächen als Reifenachweis erzeugen.

## Was gut genug ist und erhalten bleiben sollte

- Die ruhige visuelle Grundlage und themenspezifischen Studien. Farbe macht Paare vergleichbar; Input erklärt Anatomie und Zustände. Kein erneutes globales Layoutprojekt erforderlich.
- Die ausdrückliche Trennung von Studie, echter Spartan-Demo und Contract. Der Input liess sich in der mobilen Browseransicht tatsächlich bearbeiten; statische Zustandsbilder werden nicht als Funktionsbeweis ausgegeben.
- Gepinnte Originalartefakte sowie die vorhandene separate Implementierungsstruktur. Weiterentwickeln statt durch eine zweite Datenquelle ersetzen.
- Die gemeinsame Veröffentlichungsausgabe an Portal/MCP. In den geprüften Farb- und Switch-Antworten blieben Herkunft und Grenzen erhalten.
- Die vorhandenen Fachpläne. Sie benennen die zentralen Übergaben bereits konkreter, als eine neue allgemeine Roadmap es tun würde.

## Sinnvolle nächste Themenfolge

1. **Patterns mit einem vollständigen Formularweg:** Dubletten konsolidieren, führende Ablaufdarstellung, Prüfzeitpunkt und unbekanntes Ergebnis präzisieren. Content und Inklusion an diesem konkreten Weg mitliefern.
2. **Layouts und Navigation:** Detailseite und Beispiel verständlich verbinden; Haupt-/Zusatzinhalt, Rückweg, schmale Ansicht und lange Inhalte an einem realistischen Fall zeigen. Dabei die Themenführung vereinfachen.
3. **Pflege und Agenteneinstieg:** Den im ersten Paket tatsächlich durchlaufenen Entscheid/Review als verständlichen Arbeitsweg dokumentieren; fachlichen Status und Verantwortung auch über MCP erkennbar machen.
4. **Firmen- und Plattformpilot:** Eine begrenzte Familie in einem ausdrücklich gewählten Firmensystem übernehmen und mit einem Team anwenden. Bestehende Plattformdaten als Entscheidungshilfe zusammenführen. Erst daraus den nächsten Implementierungsumfang ableiten.

## Tatsächlich ausgeführte Prüfungen und Grenzen

BrowserOS neo, eigener Tab: Home, shadcn-Systemhome, Grundlagen, Farbe, Komponentenübersicht, Switch, Input, Patterns, Formular/Validierung, Grid/Abstände, Detailseite, Content Design, Barrierefreiheit, Mitwirken, Releases und technische Anbindung gelesen. Lange Formularausgabe aus der vom Browserwerkzeug gespeicherten vollständigen Textdatei nachgelesen. Desktop-Screenshots von Input und Farbe bei 1280 × 900 visuell geprüft; Input bei 390 × 844 am Einstieg und an der Demo visuell geprüft. Mobile Navigation geöffnet/geschlossen, Live-Beispiel-Anker verwendet, Text „Review Probe“ eingegeben und tatsächlichen Eingabewert geprüft. Input bei 390 und Farbe bei 1280 hatten keinen horizontalen Dokumentüberlauf. Keine erneute Vollprüfung aller 37 Seiten.

Drei reale lesende JSON-RPC-Aufrufe an den vorhandenen `/mcp`-Endpunkt über den Browser: `get_documentation_page(shadcn, farben)`, `get_component_page(shadcn, switch)`, `search_documentation(shadcn, Fehler, 10)`. Keine MCP-Schreiboperation. Gezielte Quelllektüre von Seitenschema, Implementierungsmodell, Studien, Renderer, Navigation, Veröffentlichungsausgabe und MCP-Route; Pläne zu Patterns, Content, Pflege und Plattformen sowie Planübersicht gelesen. Keine direkte Datenbankverbindung und keine eigene Payload-Initialisierung, somit kein Audit-Schema-Push.

Keine Screenreader-Abnahme, keine vollständige Tastatur-/Touchprüfung, keine native Prüfung, kein Test auf realem Mobilgerät und kein vollständiger Vergleich aller Studien/MCP-Texte. Externe Normquellen nicht erneut geöffnet; dieses Review prüft die vorhandene Anwendung und ihre Aussagegrenzen, nicht die allgemeine Normkonformität. Die Aussagen zur Konzernübertragung sind aus konkreten Codebindungen und Nutzerwegen abgeleitete Bewertung, kein bereits ausgeführter Firmenpilot.
