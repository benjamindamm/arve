# Themes und visuelle Zustände

## Befund

Öffentlichen Stand am 20.11.2026 im BrowserOS neo geöffnet, gelesen und als Screenshot angesehen. Die initiale Ansicht zeigt Titel, Vorspann und sechs Inhaltslinks; der eigentliche Themevergleich folgt darunter. Die aktuelle Farbseite ebenfalls im Browser als visuelle Referenz angesehen. Relevanter Roast-Befund: Beispiel zu spät, Zustands- und Nachweisgrenzen beanspruchen den schnellen Lesepfad.

## Umsetzung

- Zwei gleich aufgebaute Ansichten für Hell und Dunkel: dieselbe E-Mail-Auswahl, derselbe fehlerhafte Wert mit schematischem Fokus, dieselbe inaktive Aktion mit sichtbarer Korrekturhilfe.
- Originalwerte direkt aus dem vorhandenen lokalen Theme-Export über `color-page-values` lesen; keine Palette und keine Fehlerrolle ergänzt.
- Alle fachlichen Texte und Beispielinhalte in den CMS-Release-Blöcken. Drei kurze Regeln und ein konkreter Produktprüfweg folgen dem Vergleich. Ursprüngliche Studie, Originaltexte, Referenzrevision und Quellen bleiben aufklappbar erhalten.
- Ab 621 px zwei gleich breite Spalten, bis 620 px einspaltig. Kein Bedienungs- oder Themewechselverhalten erfunden; Fokus ist ausdrücklich eine statische Darstellung.

## Tatsächlich ausgeführte Checks

- Aktuellen CMS-Stand read-only mit Payload, `push:false` und schreibgeschützter PostgreSQL-Verbindung gelesen: Seite 43, veröffentlicht, `updatedAt=2026-11-17T23:33:02.422Z`.
- `npm run typecheck`: erfolgreich.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts themes-und-zustaende`: Vorschau erfolgreich, 11 Blöcke, keine Veröffentlichung.

## Browserprüfung nach Veröffentlichung

Am 20.11.2026 ausschliesslich diese veröffentlichte Seite in einem eigenen BrowserOS-neo-Tab geprüft:

- Desktop **1440 × 1000 CSS-Pixel**: Screenshot der initialen Ansicht angesehen. Hell und Dunkel stehen gleich breit nebeneinander; beide vollständigen Beispiele inklusive Auswahl, Fehlertext, Fokusdarstellung und inaktiver Aktion mit Begründung sind im ersten Bildschirm sichtbar. Identischer Inhalt und Zustandsaufbau bestätigt.
- **390 × 844 CSS-Pixel**: initiale Ansicht und nach Scrollen beide Theme-Beispiele per Screenshot angesehen. Hell und Dunkel stehen untereinander; Auswahl, Feldwert, Fokus, Korrekturtext und Begründung bleiben lesbar. In den geprüften Ansichten kein abgeschnittener Beispielinhalt oder horizontaler Überlauf sichtbar.
- Quellen-Details auf Desktop geöffnet und wieder geschlossen; auf schmaler Ansicht erneut geöffnet. Der Browser bestätigte `expanded` sowie nach dem Desktop-Schliessen `collapsed`; ursprüngliche Studie, Originalabschnitte und Quellenlinks werden beim Öffnen eingeblendet. Geöffnete Details auch visuell angesehen. Nach einer unklaren unmittelbaren Rückmeldung zum mobilen Schliessklick in einem frischen Tab mit aktuellen Referenzen wiederholt: Öffnen per Klick und Schliessen nach Fokus per Enter bestätigten ausdrücklich `expanded` und `collapsed` bei 390 × 844.
- Beide Speichern-Buttons erscheinen im Browser als deaktiviert. Es wurde keine Formular- oder Speicherfunktion behauptet oder ausgelöst.

Keine allgemeine Freigabe für Komponentenverhalten, Tastaturbedienung, Kontrast oder Barrierefreiheit. Die Prüfung umfasst die genannten Ansichten und das Öffnen/Schliessen der Vertiefung; die Quellenlinks wurden dabei nicht verfolgt.
