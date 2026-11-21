# Aktuelle Auswahlhilfen und konkrete Alternativen

Bearbeitet am 21.11.2026 in `design-system`, Bibliothek `shadcn`, Quellenrevision `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`.

## Umfang

- `scripts/content/page-reworks/komponenten-auswahl.ts`: aktuelle Behauptung fehlender Radio-/Select-/Combobox-Contracts berichtigt; Radio Group, Select und Combobox mit konkreten Seiten verknüpft. Der Einleitungstext vor den historischen Originalblöcken trennt deren Verfügbarkeitsaussagen vom aktuellen Importstand.
- `scripts/content/page-reworks/auswahl-und-suche.ts`: aktuelle Verweise auf Radio Group, Select, Native Select und Combobox ergänzt; Quellenaufklapper ordnet den früheren Umfang zeitlich ein.
- `scripts/content/component-docs/select.json`: explizite Alternativverweise im Abschnitt `usage` auf Combobox, Native Select und Radio Group.
- `scripts/content/component-docs/date-picker.json`: expliziter Alternativverweis im Abschnitt `usage` auf Calendar. Die direkte Datumseingabe wird bewusst nicht mit dem generischen Input gleichgesetzt: dessen beschriebene Textkomposition ist kein dedizierter Datumsformat-/Parsing-/Validierungsvertrag.
- `scripts/content/component-docs/data-table.json`: explizite Alternativverweise im Abschnitt `usage` auf Table und Item.

Nach zusätzlicher vollständiger Sichtung der Nutzungsabschnitte: 63 Komponenten-Seiten enthalten zusammen 116 bewusst ausgewählte Alternativverweise (62 Seiten/115 Verweise in dieser Teilaufgabe; Date Picker mit einem Verweis vor der Übergabe an die Hauptaufgabe). Jeder Verweis ist auf den konkreten Absatz begrenzt (`paragraph`, 0-basiert). Dazu gehören etwa Input → Textarea/Select, Checkbox → Radio Group/Switch, Tooltip → Popover, Popover → Tooltip/Hover Card/Dialog und Chart Area → Chart Line/Chart Bar. Allgemeine Wörter wie «Tabelle» oder «Liniendiagramm» wurden nicht automatisch zu konkreten Komponenten umgedeutet; Avatar und Separator erhielten beispielsweise keine erzwungenen Verweise. In zusätzlichen Komponenten-JSONs wurde ausschliesslich `usage.links` ergänzt.

Keine automatische globale Begriffsverlinkung. Alle drei Komponenten behalten neun Abschnitte und ihre gebundene Quellenrevision. Historische Originalblöcke, Beispielillustrationen und vorhandene Quellenprüfungen bleiben erhalten. Der zusätzliche frühe Date-Picker-Fokushinweis liegt ausserhalb dieser Teilaufgabe.

## Quellengrundlage

Gelesen wurden die lokale Arve-Leseanleitung, Manifest und Abhängigkeitsgrenze des portablen Pakets, dessen Leseskill und Auswahlhilfe sowie Bibliotheksindex und die relevanten Komponenten-/UX-Beschreibungen für Select, Combobox, Native Select, Radio Group, Date Picker, Calendar, Input, Data Table, Table und Item. Das Paket enthält 69 Komponentenordner. Quellenverfügbarkeit und Quellenstatus sind keine Freigabe einer Browserimplementierung.

## Ausgeführte Prüfungen

- `node --import tsx scripts/check-component-catalog.ts --component select`: PASS, `snapshotChecked: false`.
- Entsprechende Quellenprüfung für `date-picker`: PASS, `snapshotChecked: false`.
- Entsprechende Quellenprüfung für `data-table`: PASS, `snapshotChecked: false`.
- Vollständige Quellenprüfung `node --import tsx scripts/check-component-catalog.ts`: PASS für 68 Komponenten, `snapshotChecked: false`.
- Die Konstanten vor `export const release` der zwei Auswahlhilfen wurden mit dem Stand in HEAD verglichen: historische Originalblöcke unverändert.
- Renderpfade geprüft: beide Auswahlhilfen lesen die betroffenen Texte und Verweise aus CMS-Blöcken. Keine ausschliesslich im Frontend versteckte Textkorrektur.

## Übergabe und Grenzen

Die veralteten `expectedUpdatedAt`-Werte wurden erst nach lesender Inhaltsprüfung erneuert: Für beide Seiten sind Draft und publizierter Stand identisch; Summary und bereinigter Inhalt entsprechen exakt dem unveränderten HEAD-Release; das volle Seitenobjekt entspricht der zuvor aufgenommenen Katalogbaseline. Neue Guards: `komponenten-auswahl` = `2026-11-20T17:27:58.513Z`, `auswahl-und-suche` = `2026-11-20T17:16:20.383Z`. Der bestehende Schutz gegen konkurrierende redaktionelle Änderungen bleibt aktiv. Diese Teilaufgabe verändert keine Datenbank, Snapshots oder Veröffentlichungen und führt keinen Build aus. Nach der koordinierten Veröffentlichung durch die Hauptaufgabe wurden die öffentlichen Browseransichten mit BrowserOS neo auf Port 3010 geprüft: Select, Date Picker und Data Table sowie die beiden Auswahlhilfen bei 360 und 390 CSS-Pixel Breite. Die Absätze und Alternativverweise waren sichtbar, lesbar umbrochen und fokussierbar. Tatsächlich geklickte Komponentenverweise führten von Select zu Combobox, von Date Picker zu Calendar und von Data Table zu Table (jeweils richtige Zielüberschrift). In der aktuellen Komponenten-Auswahl ist die Behauptung fehlender Contracts entfernt; der geöffnete Quellenaufklapper von Auswahl und Suche nennt den damaligen Seitenumfang und die inzwischen importierten Quellen getrennt. CMS-/MCP-Gleichheit und Snapshot-Nachweise liegen bei der Hauptaufgabe. Ein in der Browserprobe entdeckter Hinweislink auf zunächst geschlossenes Date-Picker-Fokusdetails wurde der Hauptaufgabe gemeldet; sie übernimmt die allgemeine Hash-/Details-Korrektur und deren gesonderten Nachweis. Diese Prüfung belegt keine Kalenderlaufzeitkorrektur oder allgemeine Barrierefreiheit.
