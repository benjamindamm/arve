# Komponentenseiten: Einsatz und verfügbarer Stand

20. November 2026 · Umsetzung von Befund 5 des UI-Design-Reviews

## Ergebnis und Grenzen

Button, Input, Checkbox und Switch beginnen mit ihrer unveränderten veröffentlichten Kurzbeschreibung. Direkt darunter stehen der tatsächliche Contractstatus (oben als «Entwurf»), die aus veröffentlichten Implementierungsdaten abgeleitete Verfügbarkeit und das separat bezeichnete lokale Live-Beispiel. Drei bestehende Sprunglinks führen weiterhin zu Beispiel, Plattformstand und Contract. Die allgemeinen Kapitelzugänge und Fachtexte bleiben erhalten.

Eine native Tabelle ersetzt die drei Plattformkarten. Web, iOS und Android behalten eigene, knappe Zeilen mit Zeilen- und Spaltenköpfen. Bei Button stehen der registrierte Spartan Button, Status preview und die deklarierten Kontexte Desktop-Web und Mobiles Web sichtbar; Paketversion und unveränderte Prüfgrenzen liegen in einer benannten Klappe. Kontextangaben stellen keine neue mobile Prüfung dar. Bei Input, Checkbox und Switch gibt es lokale Demos, aber keine veröffentlichten Implementierungseinträge. iOS und Android haben bei allen vier Komponenten keine Implementierungseinträge.

Der Contractkopf nennt Bibliothek, raw Status draft und vorhandene Domänen. Die vollständigen Inhalte bleiben in nativen Details mit Syntaxfarben verfügbar; lange Pfade stehen erst nach dem Öffnen. Exportrevision und vollständige Downloadliste liegen in einer technischen Vertiefung. Kopierbuttons lassen die vollständigen Werte weiterhin auswählen und melden Erfolg oder Fehler sichtbar über einen Statusbereich. Feedback wird bei Wert- oder Labelwechsel zurückgesetzt.

Der Seitencontract bleibt auf `65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26`. Der historische Implementierungsbezug des Buttons bleibt `fe29eb804f0b742433f143d6b6adbe4787aac0e183fed413f46b94313af9162d`. Die UI bezeichnet sie als unterschiedliche Contractstände und zeigt beide vollständig nebeneinander in derselben Vertiefung. Sie leitet daraus weder Inkompatibilität noch eine Freigabe ab. Alle vier Contracts bleiben draft; vorhandene Quellen-/Prüfgrenzen und die semantischen Lücken zwischen nativer Checkboxvorlage und Spartan-Button/ARIA bei Checkbox und Switch bleiben erhalten.

## Dateien

- `src/app/(docs)/systems/[system]/components/[component]/page.tsx`: gemeinsamer Kopf, Plattformtabelle und kompakter Contractbereich; bestehender Kapitelpfad und Sprungziele erhalten.
- `src/docs/component-page.css`: ausschliesslich auf `.component-documentation` beziehungsweise deren eigene Komponentenklassen begrenzte Darstellung; der zusätzliche äussere Button-Beispielrahmen entfällt, die bestehende Demo bleibt bestehen.
- `src/docs/copy-value.tsx`: kleine gemeinsame Kopierfunktion mit auswählbarem Rohwert und Rückmeldung.

Keine CMS-Schreiboperation, keine Änderung von Contract-, Pin-, Export-, API-, Skill- oder Demologik. Keine neue Bibliothek, Migration, Commits oder Pushes.

## Ausgeführte Prüfungen

- `npm run typecheck`: bestanden.
- `npm run build`: bestanden, nach den abschliessenden UI-Korrekturen erneut ausgeführt.
- `git diff --check`: bestanden.
- `node --env-file=.env --import tsx scripts/check-components-release.ts`: bestanden für beide Komponentenübersichten und alle vier Komponenten; publizierte Inhalte/Baum/Bindings und CMS/MCP-Abgleich. Kein Importer oder DB-Reset. Der erste Aufruf mit reinem Node-Type-Stripping konnte die extensionlosen Imports nicht auflösen; der vorhandene tsx-Loader löste dies ohne Repositoryänderung.
- BrowserOS neo: alle vier Seiten mit echten CDP-Metriken 1440 × 1000 und 390 × 844, deviceScaleFactor 1, mobile false. Viewportvorgabe und Screenshotaufnahme jeweils im selben Lauf. Vollständige sichtbare Hauptkomposition einschliesslich Fachtext, Plattformtabelle und Contractbereich tatsächlich als Bilder angesehen. Finaler Kopf enthält einen einzelnen Einstieg; der beim ersten Durchgang gefundene Umbruch von «Plattform» wurde korrigiert und neu gesichtet.
- Button: drei Hauptsprunglinks per echter UI aktiviert, korrekte Hashziele; Paket-/Contractklappe, Export-/Downloadklappe, CEM und SCXML tatsächlich geöffnet. Syntaxhighlighting bleibt vorhanden. Native Tabellenköpfe und native Disclosures erscheinen im Accessibility-Baum.
- Kopieren des historischen Implementierungspins: sichtbares «Kopiert.». Fehlerpfad durch ausschliesslich temporär im eigenen Testtab verweigerten Clipboard-Aufruf ausgelöst: sichtbare Erklärung zum manuellen Kopieren und vollständiger auswählbarer Rohwert blieben erhalten; Override danach entfernt. Eine Browser-Permissionsimulation war im verwendeten Tool nicht verfügbar.
- Echter Browserdownload von `components/button/interface.json`: Toolaufruf überschritt seine 30-Sekunden-Grenze, die Datei wurde dennoch in Downloads gespeichert. SHA-256 der heruntergeladenen Datei und des gebundenen Exportartefakts stimmen überein: `9d9395efef7d5a5fc792eec8955c48f6dec89c722e8572619389547f3c7c3087`.

## Sichtbelege

Alle folgenden Hauptbilder zeigen den abschliessenden Stand. `*-full.png` enthält die vollständige Seite, die kürzere Datei den ersten Viewport.

| Komponente | Kopf 1440 | Kopf 390 | Vollansicht 1440 | Vollansicht 390 |
| --- | --- | --- | --- | --- |
| Button | [Bild](screenshots/components-button-1440.png) | [Bild](screenshots/components-button-390.png) | [Bild](screenshots/components-button-1440-full.png) | [Bild](screenshots/components-button-390-full.png) |
| Input | [Bild](screenshots/components-input-1440.png) | [Bild](screenshots/components-input-390.png) | [Bild](screenshots/components-input-1440-full.png) | [Bild](screenshots/components-input-390-full.png) |
| Checkbox | [Bild](screenshots/components-checkbox-1440.png) | [Bild](screenshots/components-checkbox-390.png) | [Bild](screenshots/components-checkbox-1440-full.png) | [Bild](screenshots/components-checkbox-390-full.png) |
| Switch | [Bild](screenshots/components-switch-1440.png) | [Bild](screenshots/components-switch-390.png) | [Bild](screenshots/components-switch-1440-full.png) | [Bild](screenshots/components-switch-390-full.png) |

Offener historischer Implementierungsbezug mit Paket und Prüfgrenzen: [1440](screenshots/components-button-1440-evidence.png), [390](screenshots/components-button-390-evidence.png).

Die Sichtung prüft diese vier Komponentenseiten und gezielte neue Bedienelemente. Sie ist keine allgemeine WCAG-, Screenreader-, Tastatur-, Kontrast-, Zoom- oder Contractkonformitätsfreigabe. Schmale Browserfenster sind keine realen mobilen Geräte. Bestehende native Plattformlücken, Drafts und Previewgrenzen bleiben offen. Der lokale Next.js-Entwicklungsschalter ist teilweise sichtbar. Die Browseremulation wurde am Ende aufgehoben und der eigene Prüftab geschlossen.
