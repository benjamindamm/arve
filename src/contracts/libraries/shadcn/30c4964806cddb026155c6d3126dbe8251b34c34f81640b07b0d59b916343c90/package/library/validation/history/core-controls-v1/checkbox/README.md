# Checkbox

Der Draft bildet eine beschriftete Checkbox mit zwei Werten ab. [CEM](../../../../components/checkbox/interface.json) hält den booleschen Wert und das native `change`-Ereignis fest. Die [HTML-Vorlage](../../../../components/checkbox/accessibility.html) verbindet ein natives Checkbox-Eingabefeld mit seinem sichtbaren Label. [CSS](../../../../components/checkbox/layout.css) und die [DTCG-Tokens](../../../../tokens.json) beschreiben die Darstellung.

## Figma-Quelle

Der [Importbeleg](../../../../components/checkbox/figma/figma-observations.json) bindet `provenance://source/.figma-pool%2Fshadcn.fig` per SHA-256. Er enthält das Checkbox-Set `1939:2183` mit neun Varianten, den beschrifteten LTR-Beispielframe `1944:481` und das verknüpfte Lucide-Häkchen. Der Kasten ist 16 × 16 px gross, das Häkchen 14 × 14 px. Das beschriftete Beispiel verwendet 8 px Abstand.

Die [Stories](../../../../components/checkbox/stories.json) und die editierbare [OpenPencil-Datei](../../../../components/checkbox/checkbox.fig) zeigen sechs Varianten in Light und Dark. Die drei Invalid-Varianten sind im Importbeleg erfasst. Für das Häkchen nutzt die Projektion die Lucide-Geometrie und `primary-foreground` als Annahme, da der Reader die Farb-Overrides der Instanz nur als Anzahl ausgibt. Der dunkle Fokusschatten übernimmt den extrahierten Schatten der Light-Darstellung. Die [PNG-Vorschau](../../../../components/checkbox/preview.png) wurde aus der erneut eingelesenen FIG gerendert. Der [Export](provenance://source/tools%2Fopenpencil%2Fexport-shadcn-checkbox.mjs) dokumentiert die Eingabe- und Ausgabehashes im [Prüfnachweis](../../../../components/checkbox/validation/preview-check.json).

## Draft-Stand

Das [SCXML-Modell](../../../../components/checkbox/behavior.scxml) übernimmt die boolesche Auswahl aus dem nativen `change`-Ereignis, solange die Checkbox aktiviert ist. `SET_CHECKED` synchronisiert Host-Updates auch im deaktivierten Zustand. Die native Checkbox besitzt Fokus und Space-Aktivierung. Escape ändert den gespeicherten Wert nicht. Der Host erhält das ursprüngliche DOM-Ereignis. Das Modell erzeugt kein zusätzliches DOM-Ereignis. Der [Coverage-Record](../../../../components/checkbox/validation/completeness.json) bindet die Modellstellen.
