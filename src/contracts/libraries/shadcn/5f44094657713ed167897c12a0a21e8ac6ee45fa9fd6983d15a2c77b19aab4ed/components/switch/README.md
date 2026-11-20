# Switch

Der Draft beschreibt einen Ein/Aus-Schalter für eine Einstellung. [CEM](interface.json) bindet den booleschen Wert, die Grösse und das native `change`-Ereignis. Die [HTML-Vorlage](accessibility.html) verwendet ein natives Checkbox-Eingabefeld mit `role="switch"` und einer sichtbaren, gleichbleibenden Beschriftung.

Das [SCXML-Modell](behavior.scxml) übernimmt den aktualisierten booleschen Wert nach der nativen Aktivierung und meldet eine Änderung einmal an den Host. Escape ändert den Wert nicht. Ein deaktivierter Schalter ignoriert Nutzeränderungen. Der Host kann den Wert weiterhin setzen. Diese Regeln sind Entscheidungen für die Übung. Die [Projektionsregeln](accessibility.rules.json) delegieren Tab und Leertaste an das native Eingabefeld.

## Figma-Quelle und Vorschau

Der [Importbeleg](figma/figma-observations.json) bindet `.figma-pool/shadcn.fig` per SHA-256 und erfasst alle 16 Varianten aus Set `2004:1928`. Default misst 32 × 18 px, Small 24 × 14 px. Der Abstand zum Gehäuserand beträgt 1 px. Der Fokuszustand hat eine innenliegende Kontur. Die Dark-Farben stammen aus den Variablenmodi des Kits. Der ausgeschaltete Track hebt sich in Dark nur schwach vom Hintergrund ab.

Die [Stories](stories.json), [editierbare FIG](switch.fig) und [PNG-Vorschau](preview.png) decken zwölf Varianten in beiden Farbmodi ab. Die vier Destructive-Varianten sind im Importbeleg erfasst. Ihre Bedeutung und Umsetzung bleiben offen. Der Labelabstand von 0,5 em in der [CSS-Projektion](layout.css) ist eine Übungsentscheidung. Der [OpenPencil-Export](../../../../tools/openpencil/export-shadcn-switch.mjs) bindet die gerenderte PNG über den [Prüfnachweis](validation/preview-check.json) an die FIG.

## Prüfung

Der [Coverage-Record](validation/completeness.json) bindet alle elf Kriterien des Profils. Der Entwurf bleibt bis zur Klärung der Destructive-Varianten und der Prüfung im Webziel im Draft. Geprüft wurden der Ordner, die FIG nach erneutem Einlesen und die gerenderte PNG. Der separat ausgeführte SCXML-Test deckte Umschalten, doppelte Meldungen, Escape, Deaktivierung und Wertänderungen durch den Host ab. Browser- und Assistenzbedienung stehen aus.
