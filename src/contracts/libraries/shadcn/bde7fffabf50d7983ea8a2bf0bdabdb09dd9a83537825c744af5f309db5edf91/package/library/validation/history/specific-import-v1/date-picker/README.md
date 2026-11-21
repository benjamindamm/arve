# Date Picker · source-bound Draft

Quelle `provenance://source/.figma-pool%2Fshadcn.fig`, SHA-256 `ccbe95f20f501389a322d0f6de2c90ca79126a33355f1b31e2b1dcc7c8e2b3d5`, Seite `73:226`. [Beobachtungen](../../../../components/date-picker/figma/figma-observations.json) bewahren native IDs, Varianten, Eigenschaftsdefinitionen und Geometrie.

## Aufgabe und Grenze

Enter or choose a date using a field and calendar. Do not infer date parsing or locale from an example.

Das ist eine statische Rückführung aus dem lokalen Figma-Export. `interface.json` führt ausschliesslich Design-Anatomiekandidaten; die dortigen Modul-/Klassennamen sind zukünftige Bindungsplätze, keine belegte JavaScript-Implementierung. `layout.css` bindet konkrete native Knotenmasse und Darstellungen über `data-figma-node`. Die globale Tokenbindung ist vorhanden, ihre komponentenspezifische Zuordnung bleibt offen. Keine SCXML- oder HTML/ARIA-Regel wird aus dem Bild erfunden.

Explizites Coverage-Profil: `interactive-control/1`. Alle Komponenten bleiben `draft`. **Offene fachliche Entscheidungen:** Text parsing, calendar binding, confirmation, invalid dates and popup dismissal.

## Vollständig inventarisierte Teile

| Teil | Quellknoten | Varianten |
| --- | --- | --- |
| Dokumentationsbeispiele ohne lokale Masterkomponente | `2132:2615` | siehe Stories |

[Stories](../../../../components/date-picker/stories.json) erfassen 14 native Varianten/Beispiele. [Aktueller Coverage-Record](../../../../components/date-picker/validation/completeness.json) hält die offenen Kriterien und gebundene Belege fest.

## Editierbarer Ausschnitt und Prüfung

`date-picker.fig` und `preview.png` werden mit dem gemeinsamen quellgesteuerten Exporter erstellt. Der Ausschnitt erhält native editierbare Knoten und benötigte Komponenten-/Variablen-/Bildabhängigkeiten. Die PNG ist eine verkleinerte Übersicht der Quelldokumentation. `validation/preview-check.json` bindet Ein- und Ausgaben per Hash und nennt Rückleseprüfungen und Renderinggrenzen. Das ist kein Nachweis identischer Figma-Pixel oder bedienbarer Webkomponenten.
