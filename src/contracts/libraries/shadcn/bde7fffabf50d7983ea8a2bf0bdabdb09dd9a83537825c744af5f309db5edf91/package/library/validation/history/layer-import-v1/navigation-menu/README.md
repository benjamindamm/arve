# Navigation Menu · source-bound Draft

Quelle `provenance://source/.figma-pool%2Fshadcn.fig`, SHA-256 `ccbe95f20f501389a322d0f6de2c90ca79126a33355f1b31e2b1dcc7c8e2b3d5`, Seite `73:1980`. [Beobachtungen](../../../../components/navigation-menu/figma/figma-observations.json) bewahren native IDs, Varianten, Eigenschaftsdefinitionen und Geometrie.

## Aufgabe und Grenze

Navigate among grouped site destinations. Navigation destinations and application commands need distinct semantics.

Das ist eine statische Rückführung aus dem lokalen Figma-Export. `interface.json` führt ausschliesslich Design-Anatomiekandidaten; die dortigen Modul-/Klassennamen sind zukünftige Bindungsplätze, keine belegte JavaScript-Implementierung. `layout.css` bindet konkrete native Knotenmasse und Darstellungen über `data-figma-node`. Die globale Tokenbindung ist vorhanden, ihre komponentenspezifische Zuordnung bleibt offen. Keine SCXML- oder HTML/ARIA-Regel wird aus dem Bild erfunden.

Explizites Coverage-Profil: `interactive-control/1`. Alle Komponenten bleiben `draft`. **Offene fachliche Entscheidungen:** Link targets, disclosure focus, active destination and mobile arrangement.

## Vollständig inventarisierte Teile

| Teil | Quellknoten | Varianten |
| --- | --- | --- |
| NavigationMenuItem | `2111:6527` | 4 |

[Stories](../../../../components/navigation-menu/stories.json) erfassen 4 native Varianten/Beispiele. [Aktueller Coverage-Record](../../../../components/navigation-menu/validation/completeness.json) hält die offenen Kriterien und gebundene Belege fest.

## Editierbarer Ausschnitt und Prüfung

`navigation-menu.fig` und `preview.png` werden mit dem gemeinsamen quellgesteuerten Exporter erstellt. Der Ausschnitt erhält native editierbare Knoten und benötigte Komponenten-/Variablen-/Bildabhängigkeiten. Die PNG ist eine verkleinerte Übersicht der Quelldokumentation. `validation/preview-check.json` bindet Ein- und Ausgaben per Hash und nennt Rückleseprüfungen und Renderinggrenzen. Das ist kein Nachweis identischer Figma-Pixel oder bedienbarer Webkomponenten.
