# Native Select · source-bound Draft

Quelle `provenance://source/.figma-pool%2Fshadcn.fig`, SHA-256 `ccbe95f20f501389a322d0f6de2c90ca79126a33355f1b31e2b1dcc7c8e2b3d5`, Seite `1254:65`. [Beobachtungen](../../../../components/native-select/figma/figma-observations.json) bewahren native IDs, Varianten, Eigenschaftsdefinitionen und Geometrie.

## Aufgabe und Grenze

Choose a value using the platform native select control. Source styling does not establish options or value types.

Das ist eine statische Rückführung aus dem lokalen Figma-Export. `interface.json` führt ausschliesslich Design-Anatomiekandidaten; die dortigen Modul-/Klassennamen sind zukünftige Bindungsplätze, keine belegte JavaScript-Implementierung. `layout.css` bindet konkrete native Knotenmasse und Darstellungen über `data-figma-node`. Die globale Tokenbindung ist vorhanden, ihre komponentenspezifische Zuordnung bleibt offen. Keine SCXML- oder HTML/ARIA-Regel wird aus dem Bild erfunden.

Explizites Coverage-Profil: `interactive-control/1`. Alle Komponenten bleiben `draft`. **Offene fachliche Entscheidungen:** Option keys, placeholder/empty value, disabled options and native event exposure.

## Vollständig inventarisierte Teile

| Teil | Quellknoten | Varianten |
| --- | --- | --- |
| NativeSelectLabel | `2171:3408` | 2 |
| NativeSelectOption | `2172:728` | 2 |
| NativeSelect | `2172:937` | 8 |

[Stories](../../../../components/native-select/stories.json) erfassen 12 native Varianten/Beispiele. [Aktueller Coverage-Record](../../../../components/native-select/validation/completeness.json) hält die offenen Kriterien und gebundene Belege fest.

## Editierbarer Ausschnitt und Prüfung

`native-select.fig` und `preview.png` werden mit dem gemeinsamen quellgesteuerten Exporter erstellt. Der Ausschnitt erhält native editierbare Knoten und benötigte Komponenten-/Variablen-/Bildabhängigkeiten. Die PNG ist eine verkleinerte Übersicht der Quelldokumentation. `validation/preview-check.json` bindet Ein- und Ausgaben per Hash und nennt Rückleseprüfungen und Renderinggrenzen. Das ist kein Nachweis identischer Figma-Pixel oder bedienbarer Webkomponenten.


## Behobene Darstellungsabweichung

Die übergrossen Geometrien stammten aus wiederverwendeten Renderer-Caches für unterschiedliche Dateien mit gleichen Knoten-IDs. Isoliertes Rendering behebt die Ursache; native Vektoren wurden nicht versteckt oder manuell umgeformt. [Nachweis](../../../geometry-regression/result.json).
