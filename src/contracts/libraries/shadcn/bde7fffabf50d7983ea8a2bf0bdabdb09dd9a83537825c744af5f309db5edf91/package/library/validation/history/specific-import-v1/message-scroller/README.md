# Message Scroller · source-bound Draft

Quelle `provenance://source/.figma-pool%2Fshadcn.fig`, SHA-256 `ccbe95f20f501389a322d0f6de2c90ca79126a33355f1b31e2b1dcc7c8e2b3d5`, Seite `2360:5132`. [Beobachtungen](../../../../components/message-scroller/figma/figma-observations.json) bewahren native IDs, Varianten, Eigenschaftsdefinitionen und Geometrie.

## Aufgabe und Grenze

Browse a conversation history in a scrolling region. New messages must not unexpectedly displace a reader of older content.

Das ist eine statische Rückführung aus dem lokalen Figma-Export. `interface.json` führt ausschliesslich Design-Anatomiekandidaten; die dortigen Modul-/Klassennamen sind zukünftige Bindungsplätze, keine belegte JavaScript-Implementierung. `layout.css` bindet konkrete native Knotenmasse und Darstellungen über `data-figma-node`. Die globale Tokenbindung ist vorhanden, ihre komponentenspezifische Zuordnung bleibt offen. Keine SCXML- oder HTML/ARIA-Regel wird aus dem Bild erfunden.

Explizites Coverage-Profil: `interactive-control/1`. Alle Komponenten bleiben `draft`. **Offene fachliche Entscheidungen:** Scroll anchoring, unread position, virtualization, update announcements and history loading.

## Vollständig inventarisierte Teile

| Teil | Quellknoten | Varianten |
| --- | --- | --- |
| Dokumentationsbeispiele ohne lokale Masterkomponente | `2395:2323` | siehe Stories |

[Stories](../../../../components/message-scroller/stories.json) erfassen 20 native Varianten/Beispiele. [Aktueller Coverage-Record](../../../../components/message-scroller/validation/completeness.json) hält die offenen Kriterien und gebundene Belege fest.

## Editierbarer Ausschnitt und Prüfung

`message-scroller.fig` und `preview.png` werden mit dem gemeinsamen quellgesteuerten Exporter erstellt. Der Ausschnitt erhält native editierbare Knoten und benötigte Komponenten-/Variablen-/Bildabhängigkeiten. Die PNG ist eine verkleinerte Übersicht der Quelldokumentation. `validation/preview-check.json` bindet Ein- und Ausgaben per Hash und nennt Rückleseprüfungen und Renderinggrenzen. Das ist kein Nachweis identischer Figma-Pixel oder bedienbarer Webkomponenten.
