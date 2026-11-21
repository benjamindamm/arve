# Handbuchrahmen und Vorschauen umgesetzt

20. November 2026 · erster gemeinsamer UI-Durchgang nach dem Design-Review

## Umfang

Fach- und Komponentenseiten zeigen vor dem Titel den Systemnamen, den Handbuchzugang und den Kapitelpfad aus dem vorhandenen Navigationsbaum. Die Titel und Leads folgen einem gemeinsamen dokumentarischen Massstab; die bisherigen Sonderregeln für Grundlagen und Farbe entfallen. Fliesstext in den gemeinsamen Abschnittsstrukturen bleibt auf etwa 68 Zeichen begrenzt, Beispiele dürfen die Inhaltsfläche nutzen.

«Kapitel öffnen» ersetzt den mobilen Inlinebaum durch einen nativen, benannten Dialog. Er bietet den vorhandenen Baum und eine echte Suche in Kapiteltitel, Kapitelpfad und Kurzbeschreibung. Die Suche ist keine Volltextsuche im gesamten Handbuch. Der Desktopbaum bleibt verfügbar; sein eigener Scrollbereich berücksichtigt nun auch Handbuchtitel und Kapitelknopf.

Fachseiten erhalten ab vier tatsächlich gerenderten Abschnitten einen lokalen Index. Er nutzt vorhandene Abschnittsanker, keine Überschriften innerhalb von Demos. Desktop ist er anfangs geöffnet, schmal anfangs geschlossen; die Abschnittszahl bleibt sichtbar. Ein Seitenwechsel setzt den Index zurück. Komponenten behalten ihre drei bestehenden Hauptsprünge ohne zweiten konkurrierenden Index.

Die wiederverwendbare Vorschau zeigt genau eine Variante gleichzeitig und kennzeichnet die Auswahl mit nativen Buttons und `aria-pressed`. Main+Sidebar, Stacked Section Cards und Narrow Single Card nutzen sie; auch der gemeinsame Content-Layout-Beispielrenderer ist angebunden. Die schmale Vorschau steht auf breiten Seiten zentriert. Bestehende Beschriftungen, Beispiele und Regeln bleiben erhalten. Der absichtlich andere Langtext von Narrow Single Card ist als «Schmal · Langtext» auswählbar. Die Umschaltung begrenzt die dargestellte Fläche und behauptet keine Geräte- oder Viewportsimulation. Statische Content-Layout-Beispiele und lokal bedienbare Beispiele sind entsprechend beschriftet. Bisherige Main+Sidebar-Sprungziele öffnen auch eine zunächst ausgeblendete Variante.

## Geänderte UI-Dateien

- `src/app/(docs)/handbook.css`: gemeinsames Raster, Kopf, Prosa, Dialog, Index und Vorschau; bisher widersprüchliche Rahmenregeln konsolidiert.
- `src/app/(docs)/systems/[system]/[section]/page.tsx`: Kapitelpfad und lokaler Index.
- `src/app/(docs)/systems/[system]/components/[component]/page.tsx`: Kapitelpfad; vorhandene Hauptsprünge erhalten.
- `src/docs/documentation-nav.tsx`: Anbindung des Kapitelzugangs und Suchdaten aus dem Baum.
- Neu: `src/docs/handbook-context.tsx`, `handbook-navigation.tsx`, `handbook-outline.tsx`, `handbook-preview.tsx`.
- `src/docs/content-layout-example.tsx`: gemeinsame Einzelvorschau statt zweier vollständiger Vorschauen.
- `src/docs/page-reworks/main-sidebar.tsx`, `stacked-section-cards.tsx`, `narrow-single-card.tsx`: gemeinsame Umschaltung, vorhandene Varianten unverändert als Inhalte.
- `src/docs/foundations-overview.css`, `color-page.css`: nur abweichende Titel-/Leadregeln entfernt.

Die vorhandene uncommittete Textredaktion wurde erhalten. Keine CMS-Schreiboperation, URL-Änderung, Contract-, Pin- oder Exportänderung, kein Commit oder Push.

## Ausgeführte Prüfungen

- `npm run typecheck`: bestanden.
- `npm run build`: bestanden, einschliesslich TypeScript und Routengenerierung.
- `git diff --check`: bestanden.
- BrowserOS neo, eigener Tab, echte CDP-Viewportvorgaben mit `Emulation.setDeviceMetricsOverride` und `Page.captureScreenshot` im selben Lauf: 1440 × 1000 und 390 × 844, `deviceScaleFactor:1`, `mobile:false`. Die folgenden PNGs wurden tatsächlich ausgegeben und visuell betrachtet; es sind repräsentative Bildausschnitte, keine neue Vollsichtung aller 50 Seiten.

| Seite / Zustand | Belege |
| --- | --- |
| Lange Pilotseite, Kopf und lokaler Index | [1440](screenshots/frame-gestaltungs-pilot-1440.png), [390](screenshots/frame-gestaltungs-pilot-390.png) |
| Kurzer Themenwegweiser mit langem Titel/Kapitelpfad | [1440](screenshots/frame-icons-bewegung-1440.png), [390](screenshots/frame-icons-bewegung-390.png) |
| Komponentenseite Button, bestehende drei Sprünge | [1440](screenshots/frame-button-1440.png), [390](screenshots/frame-button-390.png) |
| Main+Sidebar, Standardansicht | [1440](screenshots/frame-main-sidebar-1440.png), [390](screenshots/frame-main-sidebar-390.png) |
| Main+Sidebar, umgeschaltet | [1440](screenshots/frame-main-sidebar-1440-narrow.png), [390](screenshots/frame-main-sidebar-390-narrow.png) |
| Mobiler Kapitelbaum und echte Suche | [Baum](screenshots/frame-navigation-390.png), [Suchtreffer](screenshots/frame-search-390.png) |
| Weitere umgeschaltete Vorschauen | [Stacked bei 1440](screenshots/frame-stacked-section-cards-1440-narrow.png), [Narrow-Langtext bei 390](screenshots/frame-narrow-single-card-390-narrow.png) |

Gezielte Interaktionen: Kapitelsuche nach «Barrierefreiheit» und «Icons», tatsächlicher Suchtreffer-Seitenwechsel von Main+Sidebar zum Themenwegweiser (neuer Titel und neuer/ausgeblendeter Index), Dialog schliessen per Button und Escape mit Fokusrückkehr zum Kapitelknopf. Im nativen Suchfeld leert das erste Escape den Suchtext, das nächste schliesst den Dialog. Pilotindex: elf Ziele, keine fehlenden Anker; Sprung zu «Die drei Aufgaben» erfolgreich. Mobiler Index auf-/zugeklappt und Regelsprung erfolgreich. Vorschauwechsel: genau ein sichtbarer Bereich, korrekte `aria-pressed`-Werte; Main+Sidebar schmal bei 1440 ist 352 px breit. Alter `#ms-narrow-next`-Link wählt die schmale Variante. Stacked- und Langtextvarianten bleiben sichtbar und ohne festgestellten Seitenausbruch. Desktop: letzter Eintrag «Von der Quelle zum Release» per Fokus erreichbar, Navigation scrollt intern (Linkunterkante rund 976 bei Fensterhöhe 1000).

Viewportemulation am Ende aufgehoben und eigener Browsertab geschlossen.

## Bewusst später

Der Patternkatalog, die Plattform-/Contractdarstellung und die individuelle Komposition aller Fachseiten bleiben Folgearbeit. Kein vollständiger Umbau sämtlicher statischer Vorschauen. Der lokale Index ergänzt nur vorhandene Abschnittsanker und wird nach der Clientinitialisierung aufgebaut. Das ist keine umfassende Tastatur-, Screenreader-, Zoom-, Kontrast- oder WCAG-Prüfung. Geprüft wurden schmale Browserfenster, keine realen Touchgeräte. Der lokale Next.js-Entwicklungsschalter bleibt in den Belegen sichtbar.

## Nachtrag: Zweck der shadcn-Startseite

Auf die anschliessende Nutzerfrage wurde die unveränderte aktuelle Systemstartseite nochmals gezielt aus Designersicht bei [1440](screenshots/frame-home-assessment-1440.png) und [390](screenshots/frame-home-assessment-390.png) tatsächlich angesehen. Die frühere Bewertung ihrer Übersichtlichkeit hat die Zweckfrage zu wenig geprüft.

Die Seite ist geordnet, vermittelt jedoch keinen empfohlenen Arbeitsbeginn. «Unsere Referenzimplementierung» erklärt weder Zielgruppe noch erwartbares Ergebnis oder den Unterschied zwischen Regeln, Vorlagen und bereits bedienbaren Beispielen. Danach müssen Leser sofort zwischen Seite, Layout, Pattern und Komponente wählen. Diese Kategorien setzen ein Verständnis des Handbuchs voraus. Vier Aufgabenzugänge, zwei Beispiele und vier Regelzugänge ergeben zehn Einstiege ähnlichen Gewichts. Das kleine Ablaufschema und die Formularminiatur zeigen kaum, welche konkrete Arbeit das Handbuch erleichtert. Mobil liegen die Beispiele erst unter den vier Kategorien.

Empfehlung für einen kleinen eigenen Durchgang: Systemzuordnung «Arve · shadcn-Referenz», zwei klare Sätze über Nutzen und verfügbaren Stand, danach ein empfohlener bestehender Projektablauf mit einer erkennbaren Vorschau und dem erwartbaren Ergebnis. Zum Beispiel: mit der Vorlage einen Ablauf entwerfen und die zugehörigen Regeln nachschlagen. Für erfahrene Nutzer daneben beziehungsweise darunter kompakte Direktzugriffe; die Regeln bleiben als Nachschlagezugang erhalten. Das Formularbeispiel ist eine Vertiefung dieses Einstiegs. Die Startseite soll Neueinsteiger orientieren und Wiederkehrende schnell weiterführen. Ein grösserer Hero allein löst die unklare Priorität nicht. Die Startseite wurde in diesem Auftrag nicht umgebaut.

Letzter technischer Sichtabgleich: Die neuen Prosa-/Überschriftenregeln berücksichtigen sowohl `.rich-text` als auch Payloads tatsächlichen Wrapper `.payload-richtext`. Am Main+Sidebar-Regelabschnitt gemessen: Absatzbreite rund 685 px bei 1040 px Inhaltsfläche. [Breite Prosaansicht](screenshots/frame-prose-1440.png) und [schmale Prosaansicht](screenshots/frame-prose-390.png) wurden nach dieser Korrektur tatsächlich angesehen.
