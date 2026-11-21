# Input

Der Draft beschreibt ein beschriftetes, einzeiliges Textfeld. [CEM](../../../../components/input/interface.json) bindet Textwert, Platzhalter, Disabled und das native `input`-Ereignis. In der [HTML-Vorlage](../../../../components/input/accessibility.html) liefert das sichtbare Label den zugänglichen Namen. Die [Projektionsregeln](../../../../components/input/accessibility.rules.json) dokumentieren die Zuständigkeit des nativen Textfeldes für Fokus und Eingabe.

## Figma-Quelle

Der [Importbeleg](../../../../components/input/figma/figma-observations.json) bindet `provenance://source/.figma-pool%2Fshadcn.fig` per SHA-256 und erfasst die 32 Varianten des Sets `1928:3990` auf Seite `73:1977`. Die Grundfläche misst 320 × 32 px. Figma verwendet 10 px horizontalen und 4 px vertikalen Innenabstand. Der fokussierte LTR-Platzhalter mit Standardrundung hat im Export einen kleinen Schlagschatten, das fokussierte Feld mit Text einen 3-px-Ring.

Die [Stories](../../../../components/input/stories.json), [editierbare FIG](../../../../components/input/input.fig) und [PNG-Vorschau](../../../../components/input/preview.png) zeigen sieben LTR-Varianten in Light und Dark. Für diese Übung habe ich ein eigenständiges Textfeld ohne Icons und Add-ons mit eigenen Beispieltexten gewählt. Die [CSS-Projektion](../../../../components/input/layout.css) begrenzt die Breite auf 320 px und lässt das Feld in schmaleren Containern schrumpfen. Die Schatten und der ungebundene Disabled-Füllwert werden für beide Farbmodi aus dem Export übernommen. Die [DTCG-Tokens](../../../../tokens.json) halten Masse, Farben und Fundstellen fest. RTL und Destructive sind im Importbeleg erfasst. Der [OpenPencil-Export](provenance://source/tools%2Fopenpencil%2Fexport-shadcn-input.mjs) erzeugt die Vorschau mit [Hashnachweis](../../../../components/input/validation/preview-check.json).

## Draft-Stand

Das [SCXML-Modell](../../../../components/input/behavior.scxml) übernimmt String-Werte aus dem nativen `input`-Ereignis, solange das Feld aktiviert ist. `SET_VALUE` synchronisiert Host-Updates auch im deaktivierten Zustand. Das native Feld besitzt Fokus, Tastatur und IME. Das Modell verarbeitet weitergeleitete Zwischenwerte wie andere native Input-Ereignisse. Escape ändert den gespeicherten Wert nicht. Der Host erhält das ursprüngliche DOM-Ereignis. Das Modell erzeugt kein zusätzliches DOM-Ereignis. Der [Coverage-Record](../../../../components/input/validation/completeness.json) bindet die Modellstellen.
