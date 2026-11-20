# page-type-edit

Ausgangsbefund: Die veröffentlichte Seite zeigte nur «edit» und «Bestehende Angaben bearbeiten, prüfen und speichern.». CMS-ID 59, `content: []`, `updatedAt: 2026-11-20T08:57:18.849Z`. Öffentliche Seite zuerst mit BrowserOS neo angesehen.

Umsetzung: vorhandenen Titel erhalten; statisches einspaltiges Bearbeitungsschema für Alpen / P-101 / Aktiv mit bestehendem Feldwert, Hilfe und sichtbarer Reihenfolge Speichern → Abbrechen. Vier Zustandsausschnitte zeigen unverändertes Speichern, Fehler nach leerem Absenden, Dirty-Abbruch vor Übermittlung und unbekannten Speicherausgang. Abgebildete Aktionen sind Textflächen, Felder schreibgeschützt; keine Speicherung oder Navigationswirkung. Alle fachlichen Texte kommen aus dem CMS-Releaseinhalt.

Drei kurze Gestaltungsregeln stehen direkt bei den Beispielen. Ausführlichere Anschlussbedingungen und Quellen sind aufklappbar; die bestehenden Formular- und Pilotverträge sind verlinkt. Regeln aus den aktuell veröffentlichten Seiten `formulare-validierung` und `gestaltungs-pilot` am 20.11.2026 im Browser gelesen, einschliesslich unknown-Vorrang vom 20.11.2026. Historische Evidenzdateien gezielt gelesen und unverändert gelassen.

Breit: Formular bis 640 px, Aktionen nebeneinander. Unter 640 px verfügbarer Inhaltsbreite: Aktionsflächen in derselben Reihenfolge untereinander, reduzierte Innenränder, umbruchfähige Meldungen und keine haftende Aktionsleiste.

Tatsächlich geprüft:

- Aktuellen veröffentlichten CMS-Ausgang mit Payload, `push:false` und schreibgeschützter PostgreSQL-Verbindung gelesen.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts page-type-edit`: reine Vorschau erfolgreich, 9 Blöcke; keine Veröffentlichung.
- `npm run typecheck`: nach Erstellung sowie nach finaler Rendereranpassung erfolgreich.

Nach Root-Veröffentlichung geprüft (20.11.2026): BrowserOS neo, tatsächliche Viewports per CDP 1440 × 1000 und 390 × 844. Screenshots von Einstiegsschema und allen vier Zustandsausschnitten angesehen. Feldhilfe, Fehler, lange Überschriften und Unknown-Warnung bleiben lesbar; unter 640 px stehen alle Aktionsabbildungen in derselben Reihenfolge untereinander. Keine eigene Darstellungsreparatur nötig. Ein zwischenzeitlicher ungestylter HMR-Stand war nach Reload behoben; der geprüfte stabile Stand war gestaltet.

Beide Detailbereiche im Browser geöffnet; auf schmaler Ansicht wurden Anschlussregeln und Quellen ausgegeben. Alle vier Links unter «Detailregeln für die Ausarbeitung» tatsächlich angeklickt: Formular-Bearbeitungsanker, Formular-Rückweganker, Gestaltungs-Pilot und Detailseite öffneten die erwarteten Seiten/URLs. Viewport-Override anschliessend zurückgesetzt.

Der Nachweis betrifft Darstellung und Dokumentationslinks dieser statischen Seite. Keine Laufzeitprüfung von Validierung, Graphemgrenzen, Dialogfokus, Speicherung, Statusklärung oder assistiver Bedienung erfolgt; die Seite implementiert diese Funktionen nicht.
