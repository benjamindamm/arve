# Scroll-area · source-bound Draft

Quelle `provenance://source/.figma-pool%2Fshadcn.fig`, SHA-256 `ccbe95f20f501389a322d0f6de2c90ca79126a33355f1b31e2b1dcc7c8e2b3d5`, Seite `73:1985`. [Beobachtungen](../../../../components/scroll-area/figma/figma-observations.json) bewahren native IDs, Varianten, Eigenschaftsdefinitionen und Geometrie.

## Aufgabe und Grenze

Provide a bounded viewport for overflowing content. Do not conceal essential content behind inaccessible scrolling.

Das ist eine statische Rückführung aus dem lokalen Figma-Export. `interface.json` führt ausschliesslich Design-Anatomiekandidaten; die dortigen Modul-/Klassennamen sind zukünftige Bindungsplätze, keine belegte JavaScript-Implementierung. `layout.css` bindet konkrete native Knotenmasse und Darstellungen über `data-figma-node`. Die globale Tokenbindung ist vorhanden, ihre komponentenspezifische Zuordnung bleibt offen. Keine SCXML- oder HTML/ARIA-Regel wird aus dem Bild erfunden.

Explizites Coverage-Profil: `interactive-control/1`. Alle Komponenten bleiben `draft`. **Offene fachliche Entscheidungen:** Scroll axis, keyboard reachability, nested scrolling and custom scrollbar semantics.

## Vollständig inventarisierte Teile

| Teil | Quellknoten | Varianten |
| --- | --- | --- |
| Scrollbar | `2070:219` | 3 |

[Stories](../../../../components/scroll-area/stories.json) erfassen 3 native Varianten/Beispiele. [Aktueller Coverage-Record](../../../../components/scroll-area/validation/completeness.json) hält die offenen Kriterien und gebundene Belege fest.

## Editierbarer Ausschnitt und Prüfung

`scroll-area.fig` und `preview.png` werden mit dem gemeinsamen quellgesteuerten Exporter erstellt. Der Ausschnitt erhält native editierbare Knoten und benötigte Komponenten-/Variablen-/Bildabhängigkeiten. Die PNG ist eine verkleinerte Übersicht der Quelldokumentation. `validation/preview-check.json` bindet Ein- und Ausgaben per Hash und nennt Rückleseprüfungen und Renderinggrenzen. Das ist kein Nachweis identischer Figma-Pixel oder bedienbarer Webkomponenten.
