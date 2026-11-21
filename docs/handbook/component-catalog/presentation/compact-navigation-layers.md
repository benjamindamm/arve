# Kompakte Vergleiche: Navigation und Ebenen

Stand: 21. November 2026. Umgesetzt in `navigation-layers-data.ts`, `navigation-layers.tsx` und `navigation-layers.css`. Keine CMS-, Snapshot-, Pin- oder Quelländerungen; kein Commit oder Push.

## Grundlage und Grenze

Verwendet: Bibliothek `shadcn`, Paketrevision `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`. Einstieg über `.agents/skills/arve-ui-contracts/SKILL.md`, danach Paketmanifest, portable Leseanleitung, Bibliotheksindex und `dependencies.json`. Für die 19 Komponenten wurden komponentenweise `component.json`, `interface.json` (CEM), `layout.css`, `behavior.scxml`, `accessibility.html`, `ux.json` und `stories.json` geladen und ihre SHA-256-Werte mit dem Manifest abgeglichen: 133 Dateien. Die vorhandenen paketrelativen Quellenverweise und Hashes bleiben im Getter erhalten, einschliesslich `library/tokens.css`.

Die folgenden Auswahlentscheidungen und deutschen Projektbeispiele sind redaktionelle Gestaltungshilfen. Sie verändern keine Contractregel. Statische Vergleichsbilder sind keine ausführbare Komponentenabnahme. Es wurden keine Radix-Annahmen übernommen.

## Einstiege je Seite

| Seite | Zunächst sichtbare Entscheidung | Aufklappbar |
| --- | --- | --- |
| Breadcrumb | vollständiger Pfad / Auslassung; Grundansicht / Fokus | Zeiger über Link |
| Navigation Menu | Zielvorschau; geschlossen / geöffnet | Fokus, deaktivierter Auslöser |
| Menubar | neutrale / rote Löschaktion; geschlossen / geöffnet | Einstellungen, Hervorhebung, Untermenü, deaktivierter Eintrag |
| Dropdown Menu | neutrale / rote Löschaktion; geschlossen / geöffnet | Einstellungen, Hervorhebung, Untermenü, deaktivierter Eintrag |
| Context Menu | dateibezogene neutrale / rote Löschaktion; geschlossen / geöffnet | Einstellungen, Hervorhebung, Untermenü, deaktivierter Eintrag |
| Command | auf der Seite / Dialogpalette; Treffer / keine Treffer | ohne Suchtext, Eingabefokus |
| Sidebar | angrenzend / abgesetzt; ausgeblendet / Symbole; Standard / Kontur; mobil geschlossen / geöffnet | eingerückter Rahmen, dauerhafte Navigation, vier Zeilen-/Unterzielgrössen, Desktopzustände |
| Tabs | Fläche / Linie; Übersicht / Details | Tastaturfokus, deaktivierter Bereich |
| Pagination | aktuelle Seite; Anfang / Ende | mittlere Seite |
| Accordion | einzeln / mehrere offen; geschlossen / geöffnet | Fokus, deaktiviert |
| Collapsible | Projektdetails; geschlossen / geöffnet | Fokus, deaktiviert |
| Scroll Area | vertikal / beide Richtungen; lange / kurze Liste | Fokus |
| Dialog | zentrierte Profilaufgabe; geschlossen / geöffnet | keine zusätzliche Achse |
| Alert Dialog | Standard / kompakt; geschlossen / geöffnet | keine zusätzliche Achse |
| Drawer | unten / rechts; geschlossen / geöffnet | oben, links |
| Sheet | rechts / unten; geschlossen / geöffnet | oben, links |
| Popover | unten / rechts; geschlossen / geöffnet | oben, links |
| Hover Card | unten / rechts; geschlossen / geöffnet | oben, links |
| Tooltip | oben / unten; geschlossen / geöffnet | rechts, links |

Kleine Sidebar-Zeilenausschnitte und Tooltipvergleiche nutzen mobil zwei Spalten. Kontextkompositionen bleiben einspaltig. Bilder, technische Beschreibungen und zusätzliche Vergleiche bleiben vollständig in den Daten verfügbar. Die Beschreibungen führen mit der sichtbaren Gestaltungsentscheidung; technische Herkunftsdetails liegen in `technicalNotes`. Feste sichtbare Bildtexte werden als `navigationLayersExample` aus dem reinen Datenhelper bezogen. Beispiele bleiben beim Projekt Jahresbericht und beim Kontakt Mira Lang. Weitere dynamisch zusammengesetzte Beispieltexte stehen im Renderer.

Hervorhebung und Deaktivierung sind bei den drei Menüfamilien getrennte Ansichten. Navigation-, Accordion- und Collapsible-Fokus werden am geschlossenen Auslöser gezeigt. Der deaktivierte Tab erscheint nur im dafür vorgesehenen Vergleich. Dialog-, Sidebar- und Tooltipkontext bleiben erhalten.

## Ausgeführte Prüfung

- `npm run typecheck`: bestanden nach der letzten Codeänderung.
- Getterprüfung für alle 19 Komponenten und beide Abschnitte: alle `previewItems` verweisen auf vorhandene Items; jede Gruppe behält acht Quellenverweise.
- BrowserOS neo gegen den lokalen Entwicklungsserver auf Port 3010: alle 19 Seiten bei 390 × 844 CSS-Pixeln geladen, horizontalen Seitenüberlauf geprüft, Vergleichseinstiege anhand von Screenshots angesehen. Kein horizontaler Seitenüberlauf beobachtet. Zusätzliche Vergleiche sind anfangs geschlossen.
- Desktopstichproben bei 1440 × 1000 CSS-Pixeln: Sidebar, Dialog, Tooltip, Dropdown Menu und Command visuell angesehen und auf horizontalen Seitenüberlauf geprüft. Kein Seitenüberlauf beobachtet. Dialog-Singleton verwendet seine volle Vergleichszelle; Menüs stehen mittig auf ihrer Bühne.
- Tooltip-Ergänzungen über den sichtbaren Aufklapper tatsächlich geöffnet: alle vier Positionen zugänglich; weiterhin kein horizontaler Seitenüberlauf. Nach der Umstellung auf zwei Spalten erneut mobil angesehen: 148 Pixel breite Bilder, 150 Pixel Höhe für die geöffneten Tooltipansichten.
- Einzelne Seriennavigationen lieferten während laufender Entwicklung `ERR_ABORTED` bzw. einmal noch keinen Vergleichsknoten. Die betroffenen Seiten wurden anschliessend erfolgreich erneut geladen; diese Fehlversuche werden nicht als erfolgreiche Prüfung gewertet.

### Gemessene Seitenhöhe vor und nach der Überarbeitung

Gleicher Browser, gleicher Ausschnitt 390 × 844, geschlossene Zusatzvergleiche. Gemessen wurde die vollständige Dokumenthöhe. Die Ergebnisse enthalten gleichzeitig integrierte Änderungen am gemeinsamen Renderer und sind daher kein isolierter Wirksamkeitsnachweis für diese drei Bereichsdateien.

| Seite | Vorher | Nachher | Differenz |
| --- | ---: | ---: | ---: |
| Sidebar | 12627 px | 9773 px | −2854 px |
| Dialog | 8221 px | 7978 px | −243 px |
| Tooltip | 8282 px | 7211 px | −1071 px |
| Dropdown Menu | 9236 px | 8224 px | −1012 px |
| Command | 8566 px | 7808 px | −758 px |

Die Messwerte wurden vor dem letzten rein redaktionellen Feinschliff an Aufklappertiteln und kurzen Bildbeschreibungen erfasst. Daraus folgt keine pixelgenaue Garantie für spätere Inhaltsänderungen. Kein Build und keine vollständige Tastatur-/Screenreaderprüfung durch diesen Bereichsagenten. Die Entwicklungsansichten zeigen Darstellung, nicht die Laufzeitkonformität der zugrunde liegenden Komponenten.
