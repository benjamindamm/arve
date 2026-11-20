# Input · Seitenüberarbeitung

Ausgangsbefund am 20.11.2026 im BrowserOS-Tab 163: sechs statische Zustandsbilder und fünf Fachabschnitte stehen vor dem echten Spartan-Beispiel. Hilfe, Fehler und Schreibschutz sind dort Gestaltungsstudien, keine Funktionen der Demo.

Der neue Renderer setzt die unveränderte echte ComponentDemo früh in `#live-beispiel`. Darunter folgen drei kurze statische Feldbeispiele (leer, gefüllt, Fehler), drei Gestaltungsregeln sowie Typen- und Geltungsgrenzen. Fachliche Copy liegt vollständig im CMS-Release. Die sechs Originalblöcke sind im Release eingefroren und in Details erhalten, inklusive Draftstatus, Spartanabweichungen und ursprünglicher Quellen. Der alte Duplikatfehler bleibt als kontextgebundenes Beispiel erhalten; gleiche Namen sind im aktuellen Piloten erlaubt. Die 80-Zeichen-Grenze gilt ausschliesslich für den Piloten. Escape, natives Inputverhalten, Demo-Einstellungen und Contract-Pin bleiben unverändert.

Breit stehen die drei Zustandsstudien nebeneinander; bei höchstens 1000 px Bildschirmbreite stehen sie untereinander. Beschriftungen und Rückmeldungen umbrechen. Kein neuer Funktionsnachweis für Validierung, Speichern, Hilfe, Fehler oder Schreibschutz.

Tatsächlich ausgeführt: veröffentlichte Seite zuerst im Browser angesehen; aktuellen veröffentlichten CMS-Stand read-only mit `push:false` gelesen (updatedAt `2026-11-20T07:48:51.830Z`); `npm run typecheck` erfolgreich. BrowserOS `run` mit `browser.open` hing zweimal; granular `tabs new` funktionierte. Live- und schmale Browserprüfung wurden nach Root-Veröffentlichung ausgeführt; Nachweis siehe QA unten. Kein CMS-Schreibzugriff, keine Veröffentlichung.

## QA nach Veröffentlichung · 20.11.2026

Die veröffentlichte Seite auf Port 3010 im eigenen BrowserOS-Tab 167 geprüft. Screenshots mit per CDP gesetzten 1440 × 1000 und 390 × 844 CSS-Pixeln tatsächlich angesehen: echte Demo früh sichtbar; Desktop-Zustandsstudien nebeneinander, schmal vollständig untereinander. Label, Hilfe und konkrete Fehlermeldung umbrechen ohne Abschneiden. Keine eigene Darstellungsreparatur erforderlich.

Echte Eingabe `Jahresbericht 2026` eingegeben, per Pfeiltaste weiterbearbeitet und einen längeren Wert ergänzt. Escape erhält den Wert; sichtbarer Feldfokus vorhanden. Mit frischem Snapshot die Checkbox «Deaktiviert» angeklickt: Checkbox gesetzt, natives Input `disabled:true`, Wert erhalten. Mit fokussierter Checkbox und Leertaste zurückgeschaltet: Checkbox frei, Input `disabled:false`. DOM-Zustände nach ausdrücklichem Root-Prüfauftrag zusätzlich read-only kontrolliert. Frühere Versuche mit älteren Referenzen/`Space` ergaben keine Umschaltung; die erfolgreiche frische Gegenprobe ersetzt diesen nicht reproduzierten Verdacht.

Beide Quellen-/Original-Details per Fokus und Enter geöffnet; Ausgangsstudie, alle Fachabschnitte und WAI-/Formular-/Auswahllinks vorhanden. Wieder geschlossen. Plattformstand und gepinnter technischer Contract erscheinen weiterhin darunter. Emulierten Viewport abschliessend zurückgesetzt.

Begrenzter Nachweis: Browserdarstellung und die genannten nativen Eingabe-/Checkbox-/Details-Interaktionen. Keine neue Validierung, Speicherung, Screenreader-, IME-, Touch- oder allgemeine Konformitätsprüfung.
