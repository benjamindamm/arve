# Arve / shadcn: UI-Design-Review

20. November 2026 · unabhängige neue visuelle Sichtung · keine Umsetzung

## Gesamturteil

**Arve sieht gepflegt aus, führt aber noch nicht wie ein gutes Arbeitswerkzeug.** Der Einstieg verspricht ein konzentriertes Handbuch. Tiefer im System bekommt das Team häufig eine lange Folge aus Vorschau, Erläuterung, drei Regeln, weiteren Erläuterungen, Quellenklappen, Plattformkarten und Dateilisten. Es ist viel sauber gesetztes Material, aber zu wenig redaktionell gestaltete Priorität. Der Roast: Das Projekt erklärt Hierarchie besser, als es sie auf seinen eigenen Fachseiten anwendet.

Das Grundproblem ist ausdrücklich nicht zu viel Weissraum. Die globale Startseite und die Handbuchübersicht zeigen, wie angenehm grosszügig dieses Projekt sein kann. Schwach wird es dort, wo dieselbe Information zweimal als vollständige Demo erscheint, eine geschlossene Vorschau eine leere Bühne hinterlässt oder jede Nebeninformation dieselbe grosse Fläche beansprucht. Luft braucht eine Aufgabe.

Für eine ruhige professionelle Referenz ist die Basis gut. Für den täglichen Gebrauch im Team fehlen vor allem schneller Zugriff, erkennbare Systemorientierung und eine konsequente Trennung von Arbeitsbeispiel, Entscheidungsregel und technischem Nachweis. Ein weiterer Textdurchgang allein wird diese Probleme nicht lösen.

## Umfang und Beleggrenzen

Alle **50 Pfade** aus `docs/handbook/editorial-review/revisions/progress.json` plus die globale Startseite `/` wurden im laufenden Portal über BrowserOS neo als vollständige PNG-Seitenansichten tatsächlich angezeigt und visuell betrachtet: je bei **1440 × 1000** und **390 × 844 CSS-Pixeln**. Der Einstieg erfolgte bei `/`, danach auf der Systemstartseite. Der Seitenbestand wurde aus der Sitemap gelesen; keine alten Audittexte wurden als Befunde übernommen. `coverage.json` führt jeden Pfad und seine kurze Beobachtung.

Zusätzlich gezielt angesehen: offene mobile Handbuchnavigation auf Grundlagen, aufgeklapptes Grundlagenbeispiel, ein Ausschnitt der visuellen Pilotvertiefung, aufgeklappter Beobachtungsstand im Patternkatalog und die Button-Vertiefung «Welche Handlung führt weiter?». Das ist eine repräsentative Vertiefung, keine Sichtung sämtlicher historischer Quellen, aller 28 Patternkandidaten oder jeder Klappe. Eine Formularvertiefung wurde geöffnet, deren übergrosse vollständige Aufnahme aber nicht als gelesene Bildprüfung gewertet.

Die schmale Ansicht verwendet `mobile:false`: geprüft wurde das Layout eines schmalen Browserfensters, kein reales Touchgerät. Keine umfassenden Funktions-, Tastatur-, Screenreader-, Zoom-, Kontrastmessungen oder WCAG-Konformitätsaussagen. Demos wurden nicht bis zu Datenänderungen durchgespielt. CMS, Contracts und Anwendung blieben unverändert. Eigener Browsertab geschlossen und Viewportemulation aufgehoben.

## Die fünf wichtigsten Probleme

### 1 · P1: Das Handbuch bietet Seiten, aber zu wenig Orientierung zwischen ihnen

**Sichtbar:** Auf Fachseiten fehlen am Inhaltskopf ein klarer Systemname und ein Kapitelpfad. Oben bleibt die Plattformnavigation «Zusammenarbeit / Mit KI arbeiten / Design-Systeme / CMS öffnen». Auf Desktop hilft der aktive Eintrag im linken Baum. Bei390verschwindet dieser hinter «Handbuch durchsuchen». Aufgeklappt ist der Baum gut lesbar und markiert den aktuellen Bereich, schiebt den Grundlagen-Seitentitel aber bis ungefähr an die1000 px-Marke. «Durchsuchen» verspricht zudem eher eine Suche als einen Navigationsbaum. Beim Lesen langer Seiten gibt es keinen kompakten sichtbaren Abschnittsindex; die Komponenten haben immerhin die drei hilfreichen Sprunglinks.

**Beispiele:** `/systems/shadcn/grundlagen` (390, geschlossen und offen), `/systems/shadcn/page-type-overview`, `/systems/shadcn/page-type-edit`, `/systems/shadcn/suchen-filtern` (1440/390). Bemerkenswerte Selbstwidersprüchlichkeit: `/systems/shadcn/seitenstruktur-und-navigation` zeigt im Beispiel den aktuellen Ort «Projekte / Alpenblick»; das Handbuch selbst bietet keine entsprechende Kapitelzeile.

**Auswirkung:** Ein neuer Besucher muss den Baum öffnen oder zurück zur Übersicht, um seinen Ort und verwandte Kapitel zu verstehen. Erfahrene Nutzer scrollen auf langen Fachseiten zum gesuchten Zustand. Das bremst Nachschlagen und gemeinsames Besprechen.

**Designrichtung:** Einen kompakten Handbuchkopf mit «shadcn», Kapitelpfad und klar bezeichnetem «Kapitel»-Zugang. Globale Plattformlinks optisch zurücknehmen. Auf langen Fachseiten einen kurzen lokalen Index mit benannten Beispielen/Zuständen anbieten. Mobile Navigation soll den aktuellen Ort schon geschlossen verraten und einen klaren Weg zurück zum Inhalt bieten. Kein pauschaler Auftrag für eine dauerhaft hohe Kopfzeile.

**Beleg:** [Offene Navigation bei 390](screenshots/navigation-390.png).

### 2 · P1: Die Seitenlänge ist oft selbst erzeugt; doppelte Vorschauen ersetzen keinen Vergleich

**Sichtbar:** `/main-sidebar` und `/stacked-section-cards` zeigen die vollständige breite Demo und darunter die vollständige schmale Demo. Auf1440bleibt neben dem schmalen zweiten Beispiel ein riesiger leerer rechter Bereich. Bei390wird die breite Demo ebenfalls schmal; danach erscheint fast derselbe lange Inhalt ein zweites Mal. Auch `/narrow-single-card` verlängert die Seite stark mit einer zweiten Variante, dort wenigstens mit bewusst anderem Langtext. `/page-type-overview` führt fünf Varianten nacheinander vor, ohne vorab einen kompakten Vergleich zum Anspringen anzubieten.

**Auswirkung:** Das Team scrollt durch Wiederholungen, um zur eigentlichen Auswahlregel zu kommen. Die Desktopseite wirkt stellenweise unfertig, obwohl nichts fehlt. Mobil verschwinden die Unterschiede, der Umfang bleibt.

**Designrichtung:** Eine Vorschau mit klaren Umschaltern «Breit / Schmal» und optionalem Vergleich. Bei bewusstem Langtexttest diesen als Variante kennzeichnen. Die zwei Ansichten nicht ausgerechnet in einem ohnehin schmalen Fenster vollständig duplizieren. Übersichtstabellen oder kleine Entscheidungskarten vor die langen Varianten setzen.

**Weissraumabgrenzung:** Die Luft um den Hero auf `/` gliedert die Aussage sinnvoll. Die leere rechte Fläche neben dem zweiten Main+Sidebar-Beispiel erklärt dagegen keine zusätzliche Beziehung. Ebenso reserviert `/bewegung` im geschlossenen Zustand unter «Vorschau öffnen» eine grosse leere Bühne. Das sind konkrete Kompositionsprobleme, kein Argument für generell dichtere Seiten.

**Beleg:** [Main+Sidebar bei 1440](screenshots/main-sidebar-1440.png).

### 3 · P1: Fachwissen wird zu oft als Lesestrecke präsentiert

**Sichtbar:** Viele erklärende Absätze laufen bei 1440über fast die gesamte rund 1026 px breite Inhaltsfläche, etwa auf `/icons`, `/detailseite`, `/page-type-create`, `/card-grid-3-columns`, `/content-layout-form-layout` und `/tabellen-und-listen`. Dazwischen stehen saubere Überschriften; das macht die Zeilen aber nicht kürzer. Gridgrenzen, Spannen und responsive Regeln werden nach einer visuellen Demo wieder in langen Absätzen erklärt. Auf `/suchen-filtern` sind die unteren Zustandskarten vor allem Text über ein mögliches UI. Auf `/laden-leer-fehler` folgt nach sechs grossen Zustandscards eine weitere lange Zustandstabelle.

**Auswirkung:** Zum Umsetzen muss das Team Anweisungen aus Prosa zusammensuchen. Die Seite ist formal gegliedert, aber die entscheidende Regel springt nicht schnell genug ins Auge. Mobil sind die einzelnen Zeilen gut lesbar; die vielen Absätze verlängern den Weg erheblich.

**Designrichtung:** Fliesstext konsequent auf eine angenehme Lesebreite begrenzen, Demos dürfen breit bleiben. Drei Regeln als drei knapp benannte Entscheidungen darstellen. Breakpoints und Spannen direkt an einem kleinen Schema annotieren. Zustände in derselben Vorschau wechseln lassen und daneben genau die veränderte Regel zeigen. Gute Gegenbeispiele existieren bereits: Farbpaare, Label–Value und die annotierte Fehler/Fokus-Darstellung unter Barrierefreiheit.

### 4 · P1: Der Patternkatalog ist ein Werkzeug hinter einer Vorlesung

**Sichtbar:** `/patterns` erklärt nach dem langen Lead unter «Patternkatalog» nochmals ausführlich, was der Katalog ist und nicht ist. Bei390beginnt das Suchfeld erst ungefähr bei750 px. Die Liste hat eine eigene begrenzte Scrollfläche; der letzte sichtbare Eintrag ist angeschnitten. Darunter folgt auf schmaler Fläche die ausgewählte Ablaufvorschau, danach nochmals ausgearbeitete Themen und weitere Verweisboxen. Desktop ist das Nebeneinander von Liste und Detail grundsätzlich richtig, aber Liste und Detail wiederholen ID, Status, Titel, Beschreibung und Tags. Auch «ohne Tags» wird als Metadatenzeile sichtbar.

**Auswirkung:** Für eine schnelle Patternsuche ist die eigentliche Arbeit unnötig weit weg. Auf schmaler Fläche sind Auswahl und Folge weit getrennt. Die Darstellung priorisiert den Beobachtungsapparat gegenüber der Frage des Nutzers. Das ist ein UI-Befund; dass ein Kandidat fachlich noch nicht freigegeben ist, wird nicht als Designfehler bewertet.

**Designrichtung:** Suche und Kategorien direkt unter eine kurze Zweckzeile. Beobachtungsstatus knapp und gut sichtbar, die Erklärung dazu in eine gezielte Klappe. Listeneinträge auf Aufgabe plus unterscheidendes Merkmal reduzieren. Mobil nach Auswahl einen klaren Detailmodus oder einen unmittelbar zugeordneten aufgeklappten Eintrag zeigen. Eine innere Scrollfläche braucht eine erkennbare Fortsetzung; hier ist die angeschnittene Zeile ein schwacher Hinweis.

**Beleg:** [Patternkatalog bei 390](screenshots/patterns-390.png).

### 5 · P1: Komponenten zeigen den Nachweisapparat zu gross und den aktuellen Nutzungsentscheid zu klein

**Sichtbar:** Alle vier Komponenten führen von der Demo über Regeltext und Klappen zu drei Plattformkarten und anschliessend technischen Dateiklapplisten. Bei Input, Checkbox und Switch enthalten Web, iOS und Android jeweils dieselbe Meldung «Keine Implementierung veröffentlicht». Drei grosse Karten für eine einzige Aussage. Button hat eine gefüllte Webkarte; die gleich hohe iOS-Karte ist fast leer. Lange Hashes werden schon im Lesefluss angezeigt. «draft» steht erst weit unten im technischen Contract, der Implementierungsstatus ist ebenfalls nicht am Kopf. Die kleinen Live-Bausteine sitzen derweil in grossen neutralen Bühnen; der Button zusätzlich in einem äusseren Beispielrahmen.

**Beispiele:** `/systems/shadcn/components/button`, `/input`, `/checkbox`, `/switch`, jeweils1440/390. Die drei Sprunglinks «Live-Beispiel / Plattformstand / Contract» sind eine gute vorhandene Grundlage.

**Auswirkung:** Designer müssen viel technische Umgebung überfliegen, um zu klären, was sie verwenden können. Entwicklung bekommt Rohreferenzen, aber keine kompakte visuelle Gegenüberstellung des Seiten- und Implementierungsstands. Die Menge der Darstellung suggeriert mehr fertiges Angebot, als die sichtbaren Statusmeldungen liefern.

**Designrichtung:** Direkt am Kopf eine kompakte, begrenzte Statuszeile für Contract und tatsächliche Plattformverfügbarkeit. Eine kleine Plattformtabelle statt drei grossen Negativkarten. Hashes und vollständige Dateipfade in eine bewusst technische Vertiefung mit Kopiermöglichkeit. Beispiel, Einsatzregel und Nachweis visuell klarer voneinander unterscheiden. Die fehlende Implementierung selbst ist ein inhaltlicher Reifegrad, die grossflächige dreifache Negativdarstellung ein UI-Problem.

**Beleg:** [Button bei 390](screenshots/button-390.png).

## Weitere konkrete Befunde

- **P2 · inkonsistente Seitentitel:** `/grundlagen` und `/farben` verwenden einen ruhigeren Kopf; viele Fachseiten inszenieren den Titel wesentlich grösser. Besonders absurd wirkt die Hero-Grösse von `/icons-bewegung` für vier Verweislinks. Ein klarer dokumentarischer Titelmassstab würde die Fachseiten vereinheitlichen.
- **P2 · Beispiele sehen unterschiedlich verbindlich aus:** Pilot, Form Layout, create/edit, Auswahl und die Spartan-Demos wechseln zwischen schwarzen, grünen, grauen und farbig akzentuierten Inszenierungen, unterschiedlicher Rundung, Feldbreite und Aktionsplatzierung. Teile sind bewusst Studien. Diese Herkunft sollte bereits am Rahmen der Vorschau erkennbar sein; oft erklärt sie erst ein Absatz darunter. Statisch gezeichnete Buttons sehen häufig genauso bedienbar aus wie lokale echte Demos.
- **P2 · zu viele konkurrierende Rahmen:** Page types, Content layouts, Formulare und Referenzpflege verschachteln Demo, Karte, weitere Karte und Hinweis. Manche Grenzen sind fachlich nötig, aber ihre nahezu gleiche helle Kontur erklärt ihre verschiedenen Rollen schlecht. Die grün getönte aufgeklappte Buttonstudie zeigt immerhin einen klareren eigenen Geltungsraum.
- **P2 · Rhythmus mit unmotivierten Sprüngen:** Mitwirken, Releases, Auswahl und Referenzpflege haben unten sehr grosse Abstände vor kurzen Linkgruppen. Die Links wirken abgehängt. Das ist anders als ein bewusst grosszügiger Abschnittswechsel auf der globalen Startseite.
- **P2 · schwache grafische Fortsetzung:** Bei `/tabellen-und-listen` bleiben in 390die rechten Spalten ausserhalb der sichtbaren Tabelle. Der Texthinweis zum horizontalen Scrollen ist vorhanden; ein sichtbarer Scrollindikator oder eine klare Schattenkante würde die räumliche Fortsetzung schneller verständlich machen. Kein behaupteter Datenverlust.
- **P2 · Verweisseiten blähen die Informationsarchitektur auf:** `/felder-und-fehlermeldungen`, `/systemzustaende` und `/icons-bewegung` sind visuell grosse Seiten für wenige Weiterleitungen. Diese Seiten brauchen eine präzise Wegweiserkomposition oder eine klarere Einbindung als Alias/Weiterleitung. Ob historische URLs erhalten bleiben müssen, ist eine separate Entscheidung.
- **P3 · Entwicklungsoberfläche im Produktbild:** In den lokalen Screenshots liegt links unten der Next.js-Schalter «N» über Text oder Beispielinhalt. Das stört die Begutachtung der veröffentlichten Anmutung, ist hier aber ein Befund der laufenden Entwicklungsumgebung, keine Aussage über eine produktive Veröffentlichung.

## Was bereits trägt

Die **globale Startseite** ist die stärkste gestalterische Aussage: gut lesbare Hero-Hierarchie, ruhige grüne Akzente, sinnvoller Weissraum und ein verständliches Wissensdiagramm. Die mobile Umsetzung bleibt geordnet. Nur die drei Workflowtabs werden bei 390recht schmal und mehrzeilig; der erste Systemzugang bleibt weit unten, obwohl es einen Hero-Sprunglink dorthin gibt.

Die **Systemstartseite** hat klare aufgabenbezogene Einstiege, kurze Beschreibungen und verständliche Pfeile. Sie ist kein Kartenfriedhof. Die **Grundlagenübersicht** macht Themen durch kleine, passende Bilder unterscheidbar. **Farbe** und **Themes** zeigen echte Unterschiede im Bild. **Label–Value** ist angenehm direkt: ein konkretes Beispiel, ein kurzer Regelblock, gute mobile Paarbildung. Die **Barrierefreiheitsseite** verbindet Beispiel und Annotation und trennt Prüfaufgabe/erwartetes Ergebnis verständlich. Das **Content Design** zeigt gute Vorher/Nachher-Bezüge, auch wenn die gesamte Seite zu lang wird.

Die untersuchten schmalen Standardansichten zeigen überwiegend geordnete Stapel, lesbare Texte und vollständig umgebrochene Aktionsbeschriftungen. Es wurde kein offensichtlicher allgemeiner Seitenausbruch in diesen beiden Layoutbreiten gesehen. Das ersetzt keine Prüfung weiterer Breiten, Vergrösserung oder tatsächlicher Bedienung.

## Inhaltliche Defizite separat behandeln

Offene Implementierungen, nicht freigegebene Systemwerte, fehlende Statusabfrage, noch ausstehende Teamprobe und fehlender verbindlicher Einreichkanal sind sichtbare inhaltliche Grenzen. Sie sind nicht automatisch schlechtes UI. Problematisch gestaltet ist, dass wichtige Grenzen teils erst nach langer Lesestrecke auftauchen oder mit vielen wiederholten Negativkarten präsentiert werden. Besonders bei Mitwirken bleibt nach der langen Anleitung kein klarer konkreter Übergabekanal; hier kann Design nur einen vorhandenen fachlichen Weg darstellen, keinen erfinden.

Die erste Designüberarbeitung sollte deshalb den **Handbuchrahmen, die mobile Orientierung, die Vorschaukomponente und das Fachseitenraster** gemeinsam angehen. Erst dann einzelne Seiten kürzen und glätten. Sonst bekommt jede der50 Seiten eine hübschere Variante desselben Scrollproblems.
