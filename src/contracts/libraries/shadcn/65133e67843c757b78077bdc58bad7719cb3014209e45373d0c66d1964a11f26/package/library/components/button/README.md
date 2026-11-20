# Button

Quelle ist `provenance://source/.figma-pool%2Fshadcn.fig`, Dateistand `2026-11-12T09:48:25.567Z`, SHA-256 `ccbe95f20f501389a322d0f6de2c90ca79126a33355f1b31e2b1dcc7c8e2b3d5`. Seite `72:2719`, Component Set `1872:3230`. Der lokale FIG-Reader v0.4.2 lieferte die [Knoten und Varianten](figma/figma-observations.json).

- **Inventar:** 192 eindeutige Kombinationen aus sechs Stilen, vier Grössen, vier dargestellten Zuständen und zwei Rundungen. Die Figma-Eigenschaft heisst `Roudness`. `Left icon`, `Right icon` und `Kbd` sind boolesche Design-Eigenschaften mit Default `false`. Das eigenständige Set Icon Button hat die ID `1892:615`.
- **Abgebildet:** Default in XS, SM, Default und LG, dazu Hover, Focus und Disabled in Default-Grösse und die Standarddarstellung von Outline. Alle acht verwenden die Rundung Default. Das [Layout-CSS](layout.css) setzt die Darstellung um. Die [Tokens](../../tokens.json) führen Variablen-IDs, Aliasreferenzen und die belegten Light/Dark-Farbwerte. Die dunkle Vorschau verwendet denselben extrahierten Fokusschatten als Annahme. Abmessungen des Textes hängen im Browser vom Font-Rendering ab.
- **React-Abgleich:** Das Nova-Registry-Beispiel stimmt bei den nominalen Höhen überein. Figma verwendet bei Default und LG 4 px Abstand, der Registry-Button 6 px. Das Figma-Design setzt beim Default-Hover den ganzen Knoten auf 80 % Deckkraft. Der Registry-Button mischt nur seinen Hintergrund mit Transparenz.
## Contract

[component.json](component.json) bindet die vier Domänen und die [acht Stories](stories.json). Der Draft modelliert den Textbutton für eine Aktion. [CEM](interface.json) beschreibt die Schnittstelle und den nativen `click`. [SCXML](behavior.scxml) modelliert die Aktivierung und den Wechsel zwischen enabled und disabled. `action.requested` ist die interne Meldung an den Host und erzeugt keinen zweiten DOM-Click. Die [HTML-Vorlage](accessibility.html) und die [Projektionsregeln](accessibility.rules.json) übernehmen Fokus, Benennung und Tastaturaktivierung vom nativen Button. Die [UX-Regel](ux.json) beschreibt den Einsatzzweck.

Diese Verhaltens- und Semantikregeln sind Entscheidungen für die Übung, abgeglichen mit den nativen Textbuttons des React-Starters. Die Registry-API enthält weitere Varianten und Optionen. Die Figma-Stories beschreiben statische Zustände.

## Prüfungen

Der Bibliothekscheck akzeptierte Referenzen, Token-Aliase und die ausgewählten Quellenschemata. Der [Coverage-Record](validation/completeness.json) bindet zehn Kriterien. A11Y-002 bleibt im Check offen, weil dessen Prüfprofil die native Benennung durch Button-Text nicht als Beleg erkennt. Eine separate SCXML-Ausführung prüfte Aktivierung, Escape, Deaktivierung und Reaktivierung. In der React-Vorschau habe ich Enter, Leertaste, Escape und die Tab-Reihenfolge mit deaktiviertem Button geprüft. Diese Browserprobe führt die SCXML-Datei nicht aus und ersetzt keine Prüfung mit assistiver Technik.

Die editierbare [OpenPencil-Datei](button.fig) und die daraus gerenderte [PNG-Vorschau](preview.png) zeigen die acht Muster in beiden Farbmodi. Der [Prüfnachweis](validation/preview-check.json) hält Ein- und Ausgabehashes fest. Das [Exportskript](provenance://source/tools%2Fopenpencil%2Fexport-shadcn-button.mjs) verwendet die installierten OpenPencil- und React-Abhängigkeiten. Mit einem neuen Verzeichnis als Argument lässt sich der Export wiederholen, etwa `node provenance://source/tools%2Fopenpencil%2Fexport-shadcn-button.mjs provenance://source/%2Ftmp%2Fshadcn-button-preview`.
