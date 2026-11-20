# Content layouts

## Befund und Änderung

Öffentlichen Stand vor Umsetzung im eigenen BrowserOS-Tab geöffnet: nur drei Links mit Zwecksatz, keine visuellen Beispiele. Die CMS-Übersichtsseite hatte keine Inhaltsblöcke.

Drei unterschiedlich aufgebaute Miniaturen stehen jeweils in einer Vergleichs-Card: Label–Value mit ausgerichteten Eigenschaftspaaren, Form Layout als Label/Feld/Hilfe-Stapel und Card Header mit Titel, Beschreibung und beschriftetem Aktionsplatz über einem Inhaltsbereich. Alle sichtbaren Texte und drei kanonischen Detaillinks stehen im CMS-Release; Felder und Aktionsplatz bleiben statische Beschriftungen. Ein Satz grenzt die innere Anordnung vom Gesamtseitenlayout ab. Quellen und Grenzen sind aufklappbar.

Breit: drei Vergleichs-Cards nebeneinander. Unter 1000 px: eine Card pro Zeile, Miniatur neben Kurzbeschreibung. Unter 560 px: Miniatur über Kurzbeschreibung; Header-Aktionsplatz unter dem Titel. Keine zusätzlichen Produktmasse oder Layoutregeln behauptet.

## Tatsächlich ausgeführte Checks

- Öffentlichen Ausgangsstand über BrowserOS neo gelesen, einschliesslich drei Zieladressen.
- Aktuellen CMS-Stand mit Payload und `push:false` sowie schreibgeschützter Datenbankverbindung gelesen; erwarteter Änderungsstand der Übersicht: `2026-11-20T09:07:26.348Z`.
- `npm run typecheck`: erfolgreich.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts content-layouts`: Preview erfolgreich, vier Blöcke, keine Veröffentlichung.

## Browser-QA nach Root-Veröffentlichung

- Live-Übersicht im eigenen BrowserOS-Tab bei tatsächlichen 1440 × 1000 CSS-Pixeln geprüft: alle drei unterschiedlich aufgebauten Miniaturen nebeneinander, klare Beschriftungen und drei Detaillinks vollständig sichtbar.
- Tatsächliche schmale Ansicht bei 390 × 844 CSS-Pixeln mit CDP eingestellt und Screenshots angesehen. Alle drei Cards untereinander geprüft (einschliesslich Form Layout und Card Header nach PageDown). Texte umbrechen, Felddarstellung bleibt lesbar, der Header-Aktionsplatz folgt unter dem Titel. Kein sichtbarer horizontaler Überlauf oder abgeschnittener eigener Inhalt in diesen Ansichten.
- Quellen und Darstellungsgrenzen geöffnet und vollständig gelesen; die drei Absätze sind sichtbar und bei 390 px lesbar.
- Alle drei Detaillinks per Fokus + Enter aktiviert: Zieladressen `content-layout-label-value`, `content-layout-form-layout` und `content-layout-card-header` geladen und passende Seiteninhalte im Snapshot bestätigt.
- Kein eigener Darstellungsfehler in diesen Ansichten gefunden; keine Nachkorrektur nötig. Viewport-Override zurückgesetzt, eigener Tab geschlossen.

Begrenzter Nachweis für diese zwei Ansichten und die drei geprüften Links, keine allgemeine Barrierefreiheitsfreigabe. Keine eigenen CMS-Schreibzugriffe, Registry-/Routenänderungen, Commits oder Pushes ausgeführt.
