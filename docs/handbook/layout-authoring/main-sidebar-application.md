# Main+Sidebar · Anwendung des Layoutskills

24.11.2026. Ausarbeitung mit `arve-page-layouts-handbook` für die shadcn-Referenz. Bestehende Aufgabe, Projektbeispiel und Ausgangsmasse übernommen; Darstellung und Einsatzregeln als lokale Ausarbeitung überarbeitet. Kein neues Produkt-/Frameworkversprechen.

## Darstellung

Direkter Vergleich von breiter und schmaler Anordnung mit derselben Regionsfolge. Darunter ein einziges bedienbares Layoutbeispiel statt zweier unabhängig gepflegter Inhaltskopien. Umschalter für breite/schmale Vorschau, längeren Hauptinhalt, längere Zusatzinfos und fehlende Sidebar. Drei kurze Regeln führen die Entscheidung; Masse, Zustände und Quellen stehen in der Vertiefung.

Die Beispieltexte und vollständigen Regeln sind in veröffentlichten CMS-Blöcken abgelegt; der Renderer ordnet sie an. Die Quellfassung liegt in `scripts/content/page-reworks/main-sidebar.ts`, die Darstellung in `src/docs/page-reworks/main-sidebar.tsx` und `.css`. Der Referenzsnapshot übernimmt dieselbe Seite für Erststart und statische Veröffentlichung.

## Fachliche Abdeckung

| ID | Antwort und Fundstelle |
| --- | --- |
| PGL-01 | shadcn-Referenz, Web mit breiten/kompakten Inhaltsflächen; `ms-source`. |
| PGL-02 | Hauptinhalt mit Ergänzung; Grenze zu gleichrangigen Bereichen/einzelner kurzer Aufgabe in `ms-choice`. |
| PGL-03 | Kopf/Abschnittsnavigation, Hauptinhalt und optionale Sidebar; Nummerierung 1–4 in Schema und Beispiel. Links bleiben auf das Beispiel bezogen. |
| PGL-04 | Gleiche Reihenfolge in Grafik, Dokument und kompakter Anordnung; Regeln in `ms-comparison`/`ms-rules`. |
| PGL-05 | Verfügbare Beispielbreite nach Portalrahmen, nicht Fensterbreite; `ms-recipe`. |
| PGL-06 | Ab 42 rem Containerbreite 2:1, sonst eine Spalte; ohne Sidebar volle Fläche. Lokales Rezept, kein universelles Raster. |
| PGL-07 | Hauptbereich und Textbreite getrennt; maximal 60 ch für Lesetext. |
| PGL-08 | Lokale Anwendung: 24 px Bereichsabstand/Innenraum, bei kleinem Container 16 px innen; Grundlagenverweis. |
| PGL-09 | Gleicher Inhalt breit/schmal; zusätzliche Abschnitte, lange Ergänzung und fehlende Sidebar per Kontrolle; Umbruch und Wachstum statt Abschneiden. |
| PGL-10 | Sticky nur bei breiter Anordnung, kurzem Inhalt, mindestens 50 rem Fensterhöhe und gemessener passender Sidebarhöhe. Oben 5 rem, unten mindestens 1 rem. Begrenzung durch gemeinsame Gridfläche. |
| PGL-11 | Fehlende Sidebar sichtbar prüfbar. Lade-/Fehlerplatzierung in `ms-states`; kein vollständiger Zustandsablauf simuliert. |
| PGL-12 | Logische Folge Hauptbereich vor Ergänzung; echte Abschnittslinks mit Tastaturfokus am Ziel. Weitere Konformitätsprüfungen nicht behauptet. |
| PGL-13 | Responsive Webanwendung; native Zuordnungen und fremde Rahmen/Systemnavigation benötigen gesonderten Abgleich. |
| PGL-14 | Herkunft vom bestehenden lokalen Rezept, neue Ausarbeitung kenntlich; alle konkreten Masse lokale Entscheidungen. |
| PGL-15 | Kontrolle der Anordnung bei weniger Platz, mehr Inhalt, langem Zusatzbereich und fehlender Ergänzung; tatsächlich ausgeführte Prüfungen unten. |

## Tatsächlich geprüft

- TypeScript-Prüfung bestanden.
- BrowserOS Neo: breite Darstellung bei 1440 × 1000 visuell geprüft; Schema und Layoutausschnitt angesehen. Mobile Anordnung bei 320 × 844 visuell geprüft; bei 320 und 390 px zusätzlich gleiche Dokument-/Ansichtsbreite und keine überbreiten Nachfahren gemessen.
- Breite Inhaltsaufteilung: 644/322 px im Testcontainer. Ohne Sidebar ein Bereich mit 990 px. Schmale Vorschau: 352 px Gesamtbreite, eine Spalte, Hauptinhalt vor Sidebar, keine Haftung.
- Langer Hauptinhalt per Vorschaukontrolle eingeblendet. Kurze Sidebar beim Scrollen mit 80 px oberem Abstand gemessen; am unteren Ende des gemeinsamen Bereichs stimmen Sidebarunterkante und Gridunterkante überein.
- Lange Zusatzinfos per Tastatur eingeblendet: `position: static`, Haftung ausgeschaltet. Bei 1440 × 650 ebenfalls keine Haftung. Ohne Sidebar kein leeres Aside; zugehörige Langinhalt-Kontrolle deaktiviert.
- Abschnittslink per Tastatur aktiviert: Hash und aktives Fokuselement entsprechen dem Zielabschnitt. Für die abschliessende Scrollmessung reduzierte Bewegung emuliert, um Zwischenwerte der glatten Ankerbewegung zu vermeiden.
- Veröffentlichte Seite über lokalen MCP vollständig abgerufen und strukturell mit der redaktionellen Quellfassung verglichen; kompakter Abruf ebenfalls erfolgreich. DB-Inhalt entspricht dem Referenzsnapshot.
- Im Referenzsnapshot nur Main+Sidebar geändert; 115 andere Seiten sowie System-, Implementierungs-, Medien- und Contractmetadaten unverändert.
- Statischer Build und Check bestanden: 198 HTML-Dateien, 116 Handbuchseiten, 69 Komponenten, 2.955 verifizierte Assets. Links einschliesslich lokaler Abschnittsziele erfolgreich geprüft.

Kein unabhängiger Designer-/Agentenreview, kein reales Mobilgerät, Screenreadertest oder umfassender Textvergrösserungs-/Plattformnachweis. Die Zustandshinweise sind Gestaltungsregeln, keine geprüfte Produktlogik. Die historischen Layoutanalysen bleiben unverändert.

## Überarbeitung nach Designer-Review

24.11.2026. Die vier Befunde des frischen Designer-Reviews wurden gezielt umgesetzt:

1. **Breitenwahl:** „Verfügbare Breite“ und „Schmale Vorschau“ statt „Breit/Schmal“. Die Auswahl erscheint erst ab 28 rem verfügbarer Fläche; die begrenzte Vorschau hat maximal 22 rem. Bei kleiner Fläche entfällt die praktisch wirkungslose Auswahl, und „Eine Spalte“ erklärt die tatsächlich sichtbare Anordnung. Die Meldung berücksichtigt auch eine entfernte Sidebar.
2. **Mobiler Lernweg:** Beide Schemata bleiben direkt vergleichbar nebeneinander. Auf Mobilgeräten führen die Nummern 1–4 und eine gemeinsame ausgeschriebene Legende durch die Bereiche; die zugänglichen Bildbeschreibungen enthalten die vollständige Anordnung. Der Vergleich misst bei 390 px nun 213 statt zuvor 635 px Höhe. Inhaltsvarianten stehen in einer standardmässig geschlossenen Klappe mit Anzeige der aktiven Optionen.
3. **Nutzbare Breite:** Bei schmalem Beispiel entfällt der äussere Rahmen samt Padding. Die Inhaltsbereiche behalten ihre Begrenzung und 16 px Innenabstand. Der Haupttext beginnt bei 390 und 320 px rund 37 statt zuvor 54 px vom Fensterrand entfernt. Die gemeinsamen Kanten und die Regionennummern bleiben erhalten.
4. **Ergänzung mit Nutzen:** Die Sidebar zeigt Stand, Zeitraum, Ansprechperson und Unterlagen. Sie wiederholt keine Abschnittslinks. Längere Zusatzinformationen ergänzen Unterlagen, Abstimmung, Rahmenbedingungen und Pflege. Der Hinweis zum Demonstrationsverhalten steht ausschliesslich ausserhalb des Projektinhalts.

Die Erkenntnisse wurden in `arve-page-layouts-handbook` und dessen Fragenkatalog v0.2 sowie die Main+Sidebar-Vertiefung übernommen: sinnvolle Vorschauoptionen nach verfügbarer Fläche, kompakter mobiler Lernweg, wirksame Textbreite und eigenständiger Informationswert der Ergänzung. Alle drei Layout-Skills und die Autorenübersicht halten zudem die Rückführung übertragbarer Erkenntnisse nach Anwendung/Review fest. Die konkreten Masse dieses Beispiels bleiben lokale Entscheidungen.

### Nachprüfung dieses Stands

- Mobile Darstellungen bei 390 × 844 und 320 × 844 visuell angesehen; Vergleich und Einstieg ins Beispiel geprüft. Keine gemessene horizontale Überbreite oder über den rechten Rand reichende Elemente der Layoutseite. Auf beiden Breiten keine wirkungslosen Breitenbuttons; die einspaltige Anordnung wird erklärt.
- Desktop 1440 × 1000: verfügbare Vorschau 1040 px breit, Haupt-/Zusatzbereich 644/322 px. Schmale Vorschau 352 px breit, eine Spalte und keine Haftung. Zurück zur verfügbaren Breite wieder zwei Spalten; kurze Sidebar haftend.
- Inhaltsklappe und Checkboxen per Tastatur bedient. Lange Zusatzinfos stehen statisch im Seitenfluss; Demonstrationserklärung bleibt ausserhalb. Ohne Sidebar kein Aside und deaktivierte Option für lange Zusatzinfos; die Breitenhilfe beschreibt dann die volle Inhaltsfläche.
- Sidebar besitzt keine redundanten Abschnittslinks; die zwei lokalen Navigationslinks bleiben im Kopfbereich erhalten.
- TypeScript-Prüfung und alle drei Skill-Formatprüfungen bestanden. Vollständiger lokaler MCP-Abruf entspricht der aktuellen Ausarbeitung; kompakter Abruf verfügbar. DB-Inhalt und Referenzsnapshot entsprechen sich.
- Statischer Build und Link-/Assetprüfung bestanden: 198 HTML-Dateien, 116 Handbuchseiten, 69 Komponenten, 59.540 interne Links und 2.955 Assets.

Diese Nachprüfung erfolgte durch den umsetzenden Agenten. Kein erneuter unabhängiger Designer-Review, Screenreader- oder Realgerätetest behauptet. Die URL-Hierarchie wurde in diesem Auftrag nicht umgestellt.
