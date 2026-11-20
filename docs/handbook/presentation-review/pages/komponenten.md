# Komponentenübersicht

Browserbefund am 20.11.2026: `/systems/shadcn/komponenten` zeigte erst Einleitung und Sprungnavigation, danach eine reine Linkliste der vier Bausteine. Im initialen Screenshot (1040 × 719) war noch kein Komponentenbeispiel sichtbar. Keine visuelle Gegenüberstellung.

Umsetzung: Vier schematische Vorschauen ordnen Handlung, freien Wert, unabhängige Auswahl und Ein-/Aus-Einstellung sichtbar verschiedenen Aufgaben zu. Pro Baustein ein knapper Einsatzsatz und der kanonische Komponentenlink. Der Auswahlguide folgt direkt. Es sind statische Darstellungen, keine zusätzlichen Laufzeitfähigkeiten. Die vorhandenen Spartan-Demos bleiben auf ihren Komponentenseiten. Beschriftungen, Texte und Ziele kommen aus CMS-Inhaltsblöcken.

Breit zwei Spalten, unter 640 px eine Spalte; jede Vorschau hat eine eigene Form und ausreichend Raum für umbrechende Texte. Die Originalblöcke vom CMS-Stand `2026-11-20T13:30:59.979Z` sind im Release eingefroren und aufklappbar erhalten. Kein Liveimport des veränderlichen Snapshots.

Tatsächlich ausgeführt:
- Öffentliche Ausgangsseite mit BrowserOS neo gelesen und Screenshot angesehen.
- Veröffentlichte CMS-Daten read-only über MCP gelesen.
- `npm run typecheck`: erfolgreich.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts komponenten`: Preview erfolgreich, zwölf Blöcke, keine CMS-Veröffentlichung.

Dateien: `src/docs/page-reworks/komponenten.tsx`, zugehöriges CSS, `scripts/content/page-reworks/komponenten.ts`, dieser Bericht. Keine gemeinsame Route/Registry oder Schema geändert; kein CMS-Schreibzugriff. Root hat Integration und Veröffentlichung übernommen. Kein Commit/Push.


Nach Veröffentlichung geprüft (20.11.2026):
- BrowserOS neo/CDP bei 1440 × 1000 und 390 × 844; Screenshots der vier Vorschauen und der nachfolgenden Inhalte angesehen. Breit zwei Spalten, schmal eine Spalte; Labels/Werte und Einsatzsätze lesbar, kein sichtbares Abschneiden oder horizontales Überlaufen im geprüften Inhalt.
- Alle vier „… ansehen“-Links tatsächlich angeklickt und die kanonische Zielroute jeweils im Snapshot bestätigt. Auswahlguide angeklickt; Zielseite „Komponenten auswählen“ im Snapshot bestätigt. Ein gebündelter Browserlauf erreichte seine Zeitgrenze nach dem vierten Komponentenlink; die folgende Einzelprüfung bestätigte den Auswahlguide.
- Alle fünf Originaldetails geöffnet und im Snapshot als expanded mit Inhalt bestätigt, danach wieder geschlossen. Schmale Screenshots zeigen auch Originaltext und Weiterarbeiten-Links lesbar.
- Keine Darstellungsreparatur nötig. Dieser Nachweis umfasst die genannten Ansichten und Link-/Disclosure-Bedienung, keine vollständige assistive Prüfung und keine Prüfung von Speicherfunktionen.
