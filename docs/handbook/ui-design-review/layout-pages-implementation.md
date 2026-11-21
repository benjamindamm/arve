# Page types und Layouts · Umsetzung

20. November 2026 · READY nach Reviewkorrekturen und begrenzter visueller QA.

Alle 17 Pfade stehen mit eigener Entscheidung und tatsächlich ausgeführter Sichtung in `layout-pages-coverage.json`. 16 Seiten wurden gezielt angepasst; die bereits kurze Label–Value-Seite wurde bewusst unverändert erhalten und ebenfalls vollständig geprüft. Bestehende CMS-Quelltexte, Beispieldaten, Werte, Einheiten, Links und Zustandsbedingungen bleiben erhalten. Keine CMS-, Contract-, Pin-, Schema-, API- oder Routenänderungen. Kein Commit/Push; vorhandener Arbeitsbaum erhalten.

## Komposition

- Layouts: die drei Ebenen Zweck / Gesamtanordnung / Anordnung im Inneren als nummerierte Folge; vorhandene Beispiele und englische Taxonomie bleiben bestehen.
- Page types: Aufgabe vor dem jeweiligen vorhandenen Projektbeispiel, ohne zusätzlichen äusseren Kartenrahmen. Alle vier Aufgaben und Beispieldaten bleiben vollständig.
- overview: fünf grafisch unterscheidbare Auswahlknöpfe, genau eine vollständige statische Variante sichtbar. Alle Varianten bleiben montiert; alte Abschnittsanker öffnen die passende Variante. Die Auswahl synchronisiert das Fragment ohne Scrollsprung. Der gemeinsame Abschnittsindex bleibt verfügbar und ist ausschliesslich hier über eine optionale Eigenschaft zunächst geschlossen.
- Detailseite: Beispiel und drei Kernregeln zuerst, danach die vollständige Erklärung der Seitengliederung als benannte Vertiefung. Die drei Zustände und ihre Rückwege bleiben sichtbar.
- Edit: drei Entscheidungen mit Scanlabels und ein statischer Zustandwähler für vier vollständig erhaltene Beispiele. So folgen nicht mehr vier vollständige Formular-/Dialogausschnitte nacheinander. Create: vollständige Entscheidungen direkt nach dem Beispiel, danach der vorhandene Zustandsvergleich mit weniger konkurrierenden Rahmen. Statische Beispiele bleiben ausdrücklich gekennzeichnet.
- Sechs Page layouts: vorhandene Demos und HandbookPreview-Wechsel bleiben bestehen. Originalregelabsätze behalten ihre RichText-Knoten, Links und Reihenfolge und bekommen knappe Scanlabels. Beide Grids zeigen ihre tatsächlichen lokalen Containergrenzen und vorhandenen Spannen als kompaktes Schema. Auch schmal bleiben alle drei Grössenbereiche vergleichbar sichtbar.
- Content layouts: zusätzlicher äusserer Kartenrahmen entfernt. Eigenschaften / Eingaben / Kopfbereich bleiben durch die vorhandenen Beispiele unterscheidbar. Label–Value bleibt kurz. Form Layout und Card Header behalten ihre vorhandenen lokalen Umschalter; Regeln werden mit knappen Labels gegliedert.

Keine exakten CMS-Satzmatches und keine Laufzeit-Satzersetzungen. RuleBlock gruppiert vorhandene RichText-Knoten; zukünftige CMS-Texte werden weiterhin gerendert. Diagramme annotieren die tatsächlichen lokalen CSS-Grenzen; sie simulieren keine Fenster. CSS und Beschriftungen unterscheiden ausdrücklich Containerbreite und Fensterhöhe.

## Tatsächlich ausgeführte Prüfungen

- `npm run typecheck`: bestanden nach den letzten Codekorrekturen.
- `npm run build`: bestanden nach den letzten Codekorrekturen.
- `git diff --check`: bestanden.
- BrowserOS neo im eigenen Tab: alle 17 Seiten jeweils bei 1440 × 1000 und 390 × 844 CSS-Pixeln als vollständige Bilder ausgegeben und tatsächlich visuell angesehen, einschliesslich Beispielen und Regeln unterhalb des Folds. `Emulation.setDeviceMetricsOverride` und `Page.captureScreenshot` jeweils im selben Lauf; `deviceScaleFactor:1`, `mobile:false`. Die finalen kompakten Grid-Annotationen erneut angesehen; CDP bestätigt 1440 bzw. 390 Pixel. Kein sichtbares Abschneiden von Fachtexten in diesen Ansichten beobachtet.
- overview: alle fünf Varianten über die Oberfläche angewählt, jeweils nur eine vollständige Variante in der zugänglichen Ansicht. Alter Analytics-Anker → Catalog-Button → derselbe Analytics-Indexlink öffnet Analytics erneut. Fehlerhaft kodiertes Fragment lässt die Auswahl nutzbar. Dashboard bei beiden Breiten, Analytics und Service Hub zusätzlich visuell betrachtet.
- Edit: alle vier statischen Zustände einzeln angewählt; der unbekannte Ausgang zusätzlich bei 390 tatsächlich angesehen. Vollständige Vorrang-/Fokus-/Rückkehrerläuterung bleibt vorhanden. Keine Ausführung dieser fachlichen Speicherabläufe behauptet.
- Main+Sidebar: alter `#ms-narrow-next`-Anker öffnet die schmale Vorschau. Nach Wechsel auf Breit blieb zuvor ein veraltetes Fragment stehen. Der gezielte Fix entfernt nur den nun verborgenen eigenen Fragmentbezug und erhält den History-Zustand. Nachtest: derselbe Altanker öffnet wieder Schmal. Langtextklappe mit Enter geöffnet.
- Detailseite: neue Vertiefung «So ist die Seite aufgebaut» mit Enter geöffnet und bei 390 vollständig visuell angesehen.
- Form Layout: Fehlervorschau über fokussierten Umschalter mit Enter eingeblendet. Card Header: Ohne Aktion entfernt den Aktionslink aus der zugänglichen Ansicht.
- Root meldet zusätzlich den unabhängigen Gesamtabgleich PASS: 50 HTTP-200-Pfade, 49 MCP-Abgleiche, Quellen/Snapshot und Pins. Dieser Gesamtabgleich wurde von diesem Worker nicht wiederholt.

Repräsentative PNG-Belege, jeweils tatsächlich ausgegeben und angesehen:

- [Page types · 1440](screenshots/layout-pages-page-types-1440.png) / [390](screenshots/layout-pages-page-types-390.png)
- [overview · 1440](screenshots/layout-pages-page-type-overview-1440.png) / [390](screenshots/layout-pages-page-type-overview-390.png)
- [4-column Card Grid · 1440](screenshots/layout-pages-card-grid-4x4-1440.png) / [390](screenshots/layout-pages-card-grid-4x4-390.png)

## Dateigrenzen

Neue kleine Bausteine mit jeweiligem CSS: `src/docs/page-reworks/layout-rule-block.*`, `layout-variant-picker.*`, `layout-width-diagram.*`.

Gezielt angepasste Renderer unter `src/docs/page-reworks/`: `layout.tsx`, `page-types.tsx`, `page-type-overview.tsx`, `detailseite.tsx`, `page-type-edit.tsx`, `page-type-create.tsx`, `page-layouts.tsx`, `main-sidebar.tsx`, `card-grid-4x4.tsx`, `narrow-single-card.tsx`, `wide-single-card.tsx`, `stacked-section-cards.tsx`, `card-grid-3-columns.tsx`, `content-layout-form-layout.tsx`, `content-layout-card-header.tsx`. Zusätzliche lokale CSS-Anpassungen: `page-types.css`, `detailseite.css`, `page-type-create.css`, `content-layouts.css`. `content-layouts.tsx` sowie Label–Value-Renderer und CSS bleiben inhaltlich unverändert.

Mit Root abgestimmte minimale gemeinsame Stellen: `src/docs/handbook-outline.tsx` (optionales `initiallyCollapsed`), `src/app/(docs)/systems/[system]/[section]/page.tsx` (nur overview übergibt diese Eigenschaft), `src/docs/handbook-preview.tsx` (veraltetes eigenes Fragment beim Breitenwechsel entfernen). Breadcrumbs, allgemeine Navigation und übrige Defaults bleiben erhalten.

Nachweise: dieser Bericht, `layout-pages-coverage.json`, die sechs oben verlinkten PNGs.

## Grenzen

Geprüft wurden schmale Browserfenster und repräsentative lokale Bedienungen, keine realen Touchgeräte. Keine umfassende Tastatur-, Screenreader-, Zoom-, Kontrast- oder WCAG-Prüfung. Keine Speicheranwendung, Statusabfrage, Serverintegration oder Formularvertrags-Laufzeitprüfung. Keine neue Quellenvalidierung sämtlicher historischer Links. Der lokale Entwicklungsschalter bleibt in manchen Bildern sichtbar. Die Sichtprüfung belegt die dargestellten Breiten und Zustände, keine allgemeine Freigabe.
