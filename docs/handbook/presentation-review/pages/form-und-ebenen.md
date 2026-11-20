# Form und Ebenen

## Befund

Öffentliche Seite am 20.11.2026 mit BrowserOS neo gelesen. Die bisherige Studie stellte offene und begrenzte Kontakte einer schwebenden Fläche mit anderem Inhalt gegenüber. Ein sichtbarer Auslöser und Untergrund fehlten. Radiuswerte erschienen als reine Textreihe; danach folgten vier längere Regelabschnitte.

## Änderung

- Einstieg: dieselben Kontaktdaten als offene, begrenzte und schwebende Fläche. Alle Beschriftungen und Erläuterungen stammen aus dem CMS-Release.
- Drei konkrete Entscheidungen zu Begrenzung, Komponentenradius und Überlagerung.
- Statische Überlagerung mit sichtbarem Auslöser und Untergrund in drei Varianten: Kontur, Schatten, beides. Keine scheinbar bedienbaren Buttons oder Dialogrollen.
- Sichtbare Rundungen mit Komponentenbezug: Checkbox 4 px, kleiner Button 6 px, Input/Standardbutton 10 px, Switch Pillenform. Lokalen Export gezielt gelesen; keine allgemeine Radius- oder Elevationsskala abgeleitet.
- Quellen, offene Festlegungen und unveränderte ursprüngliche Studie als Details erhalten. Kurze Inhaltsprüfung und Nachbarthemen bleiben sichtbar.
- Vergleich in breiter Ansicht dreispaltig, unter 760 px untereinander. Radiusschau wechselt von vier zu zwei Spalten. Text kann umbrechen; Schatten bleiben innerhalb der gepolsterten Studie.

## Tatsächlich geprüft

- Aktuellen veröffentlichten CMS-Inhalt über SDK/MCP `get_documentation_page` gelesen: Änderungsstand `2026-11-17T23:33:02.552Z`. Snapshot zur Arbeit unter `/tmp/form-und-ebenen-before.json`; kein CMS-Schreibzugriff.
- Gezielter Abgleich der Radien mit `src/contracts/libraries/shadcn/5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed/tokens.json`.
- `npm run typecheck` erfolgreich nach Erstellung.
- Nach Root-Veröffentlichung in BrowserOS neo bei 1440 × 1000 und 390 × 844 CSS-Pixeln geprüft: Flächenvergleich breit dreispaltig, schmal untereinander; Radiusschau breit vier-, schmal zweispaltig. Die statischen Auslöser und Aktionsflächen sowie die Radienbeschriftungen sind lesbar und im verfügbaren Bereich.
- Seitenbreite im Browser gemessen: 1440 bei 1440 Pixel Viewport und 390 bei 390 Pixel Viewport; kein horizontaler Überlauf in diesen Ansichten.
- «Quellen und offene Festlegungen» über den sichtbaren Summary geöffnet; Browser-Diff bestätigte expanded und drei eingeblendete Absätze. Umbruch des langen Exportpfads in der schmalen Ansicht visuell geprüft.
- Im ersten Desktopbefund war die Studienanmerkung zu blass: `--muted` war eine Flächenfarbe. Eigene CSS-Regel auf `var(--muted-foreground, #526071)` berichtigt. Nach vollständigem Neuladen bei beiden Breiten geprüft; berechnete Farbe `rgb(85, 85, 94)`, Hinweise sichtbar lesbar. Nach Korrektur `npm run typecheck` erneut erfolgreich.
- Kein Verhalten echter Overlays, kein vollständiger Theme-/Forced-Colors-Test und keine allgemeine Barrierefreiheitsfreigabe geprüft.

## Übergabe

Renderer: `src/docs/page-reworks/form-und-ebenen.tsx`, Styles: gleichnamige `.css`, Inhalt: `scripts/content/page-reworks/form-und-ebenen.ts`. Gemeinsame Route/Registry/Schema nicht verändert. Kein Commit/Push.
