# Progress · source-bound Draft

Quelle `provenance://source/.figma-pool%2Fshadcn.fig`, SHA-256 `ccbe95f20f501389a322d0f6de2c90ca79126a33355f1b31e2b1dcc7c8e2b3d5`, Seite `73:1983`. [Beobachtungen](../../../../components/progress/figma/figma-observations.json) bewahren native IDs, Varianten, Eigenschaftsdefinitionen und Geometrie.

## Aufgabe und Grenze

Represent advancement of an ongoing task. Unknown duration needs a distinct indeterminate state.

Das ist eine statische Rückführung aus dem lokalen Figma-Export. `interface.json` führt ausschliesslich Design-Anatomiekandidaten; die dortigen Modul-/Klassennamen sind zukünftige Bindungsplätze, keine belegte JavaScript-Implementierung. `layout.css` bindet konkrete native Knotenmasse und Darstellungen über `data-figma-node`. Die globale Tokenbindung ist vorhanden, ihre komponentenspezifische Zuordnung bleibt offen. Keine SCXML- oder HTML/ARIA-Regel wird aus dem Bild erfunden.

Explizites Coverage-Profil: `content-display/1`. Alle Komponenten bleiben `draft`. **Offene fachliche Entscheidungen:** Range/unit, accessible name/value, indeterminate status and update cadence.

## Vollständig inventarisierte Teile

| Teil | Quellknoten | Varianten |
| --- | --- | --- |
| Dokumentationsbeispiele ohne lokale Masterkomponente | `2066:2335` | siehe Stories |

[Stories](../../../../components/progress/stories.json) erfassen 6 native Varianten/Beispiele. [Aktueller Coverage-Record](../../../../components/progress/validation/completeness.json) hält die offenen Kriterien und gebundene Belege fest.

## Editierbarer Ausschnitt und Prüfung

`progress.fig` und `preview.png` werden mit dem gemeinsamen quellgesteuerten Exporter erstellt. Der Ausschnitt erhält native editierbare Knoten und benötigte Komponenten-/Variablen-/Bildabhängigkeiten. Die PNG ist eine verkleinerte Übersicht der Quelldokumentation. `validation/preview-check.json` bindet Ein- und Ausgaben per Hash und nennt Rückleseprüfungen und Renderinggrenzen. Das ist kein Nachweis identischer Figma-Pixel oder bedienbarer Webkomponenten.


## Behobene Darstellungsabweichung

Die übergrossen Geometrien stammten aus wiederverwendeten Renderer-Caches für unterschiedliche Dateien mit gleichen Knoten-IDs. Isoliertes Rendering behebt die Ursache; native Vektoren wurden nicht versteckt oder manuell umgeformt. [Nachweis](../../../geometry-regression/result.json).
