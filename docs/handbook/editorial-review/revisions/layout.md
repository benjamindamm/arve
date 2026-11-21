# Layouts · Redaktion

## Umfang und Ausgangsstand

`PAGE-BRIEF.md`, Auditbericht und eigener Abschnitt 12 in `pages.md` gelesen. Die eigene Release und der vollständige Renderer `src/docs/page-reworks/layout.tsx` wurden gelesen: Zusammenfassung, drei Vergleichsschemata mit Beschriftungen und Links, Navigation sowie aufklappbare Quellen und bisherige Rasterstudie. Der Renderer enthält keine zusätzlichen redaktionellen Texte.

Der aktuelle Stand wurde read-only über MCP (`get_documentation_page`, `system: shadcn`, `section: layout`) gelesen. Inhalt und Zusammenfassung waren vor Bearbeitung gleich der bisherigen Release, nach Entfernung generierter IDs und Nullwerte. Frisches `updatedAt`: `2026-11-20T13:47:57.528Z`; als `expectedUpdatedAt` übernommen. Lokale Prüfbasis: `/tmp/editorial-layout-baseline.json`.

## Redaktion

- «Sie führt auch den Status der vorgeschlagenen Abstandswerte» → «Sie erklärt auch, welchen Status die vorgeschlagenen Abstandswerte haben.» «Innenraum» wurde im selben Satz zu «Innenabstände» konkretisiert.
- Die Einleitung der Rasterstudie nennt nun ihre Quellen und «die Grenzen ihrer Aussagekraft». Sie behauptet nach der sprachlichen Überarbeitung nicht mehr, die Darstellung sei unverändert. Der fachliche Stand bleibt angegeben.
- Gute Texte bleiben bestehen: die knappe Zusammenfassung, die drei klar abgegrenzten Kategorien, sämtliche Beispielbeschriftungen und Links. «Anordnung im Inneren» wird unmittelbar durch Card, Abschnitt sowie Bezeichnungen und Werte erklärt und benötigt keine zusätzliche Umschreibung.

## Erhalten und geprüft

- Page types / Page layouts / Content layouts, Beispielnamen, sämtliche Überschriften und Linkziele unverändert.
- Rasterwerte unverändert: unter 640 px 4 Spalten / 12 px; 640 bis unter 1024 px 8 / 16 px; ab 1024 px 12 / 24 px. Abgrenzung zur allgemeinen shadcn-Vorgabe und zur systemweiten Raster-/Abstandsskala unverändert.
- Inhalte zu Navigation und Containern, Textvergrösserung, Feldgruppen, Beispielgrenzen und weiterführenden Anleitungen vollständig erhalten. Keine Layout-, CSS- oder Rendereränderungen.
- Strukturvergleich gegen den frischen MCP-Stand bestanden: 6 Blöcke und 47 Textknoten; Knotenstruktur, blockName, Reihenfolge, Anzahl der Renderertextzeilen und URLs gleich. Genau zwei Textknoten geändert; Zusammenfassung gleich.
- Repositorysuche nach eingehenden `/systems/shadcn/layout#`-Links ohne Treffer. Keine Überschrift geändert, daher keine verschobenen Ankerziele.
- `npm run typecheck` bestanden; `git diff --check` bestanden.

## Befund ausserhalb der Schreibgrenzen

`src/docs/layout-examples.tsx:23` verlinkte mit «← Grid und Abstände» auf die heute «Layouts» genannte Übersichtsseite. Root hat diesen gemeldeten Rücklink anschliessend zu «← Layouts» korrigiert. Ein Renderer namens `SharedLayoutExample` ist im aktuellen Repository nicht vorhanden; der vorhandene `LayoutExample` liegt ausserhalb der eigenen Schreibgrenzen. Keine weiteren konkreten sprachlichen Befunde aus diesem Zusatzrenderer.

## Browserprüfung nach Veröffentlichung

Die veröffentlichte Zielseite wurde in BrowserOS neo bei 1440 × 1000 und 390 × 844 CSS-Pixeln gelesen und anhand vollständiger Screenshots visuell geprüft. Die Quellen/Rasterstudie wurde geöffnet. Drei Vergleichsschemata, Überschriften, Beschriftungen, Links und die zwei geänderten Absätze sind vollständig sichtbar und lesbar; bei 390 px stehen die Kategorien untereinander. Keine abgeschnittenen Texte oder störenden Umbrüche in den geprüften Inhalten festgestellt. Die neue Statusformulierung und die Einordnung der Rasterstudie erscheinen im veröffentlichten Text korrekt.

Keine konkrete sprachliche Reststelle auf der Zielseite gefunden. Die Prüfung blieb auf die Zielseite begrenzt; keine erneute Unterseiten- oder Quellenprüfung. Browser-Tab nach der Prüfung geschlossen. Redaktion und zugewiesene Browserprüfung abgeschlossen.
