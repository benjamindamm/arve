# Farbe: Seite vom 20. November 2026

## Befund und Änderung

Die veröffentlichte Seite hatte sieben Inhaltsverzeichnislinks und einen weiteren Studienvorspann vor den Farbproben. Der erste Desktopbildschirm erreichte die Beispiele erst am unteren Rand. Vorhandene echte Paare waren zwischen Rollenprosa und wiederholten Nachweisgrenzen schwer zu finden.

Nur `/systems/shadcn/farben` erhält den Renderer `src/docs/color-page.tsx` mit eigenem CSS. Reihenfolge: kurzer Nutzensatz, Lesetext / primäre Handlung / ergänzender Text jeweils als Hell-Dunkel-Paar, drei Regeln, konkrete textliche Zustandsbeispiele und Link zur Zustandsseite. Berechnung, Rollenlücken, Abweichung zum Portalrahmen und Originalquellen sind aufklappbar. Die Grundlagenübersicht und alle übrigen Renderer bleiben erhalten.

Die CMS-Fassung `scripts/content/color-page-release.ts` enthält alle Fachinformationen, Rollen, Werte, Kontrastverhältnisse und Quellen. Der Renderer verwendet veröffentlichte CMS-Titel und -Erklärungen. Werte und Kontrastberechnung kommen gemeinsam für Release und Darstellung aus `src/docs/color-page-values.ts`; diese bindet ausschliesslich den bereits verwendeten Export `5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed/tokens.json`. Keine Tokens, Contractrevisionen oder DemoPins verändert. Historische Releasequelle bleibt unverändert.

## Veröffentlichung

`scripts/apply-color-page-release.ts --publish` lief mit Datenbank-`push:false` in einer Transaktion. Ausgangsversion war `2026-11-17T23:33:02.381Z`, publizierte Farbseite danach `2026-11-20T13:30:55.891Z`. Draft und veröffentlichte Fassung wurden vor dem Schreiben verglichen. Andere Felder der Seite sowie andere Seiten (Entwürfe und veröffentlichte Fassungen) und Implementierungen wurden vor Commit auf unveränderten Inhalt geprüft. Anschliessend Quellinhalt und veröffentlichter Inhalt verglichen. Erneuter Lauf erkannte `alreadyApplied:true` und schrieb nicht erneut.

## Tatsächlich ausgeführte Prüfungen

- `npm run typecheck`: erfolgreich, nach letzter CSS-Anpassung erneut erfolgreich.
- `scripts/check-foundations-release.ts`: alle neun vorhandenen Grundlagenziele im MCP-Baum gefunden, Portal-/MCP-Content identisch und keine Vorlagenduplikate; neue Farbrelease zusätzlich unmittelbar gegen veröffentlichten CMS-Inhalt geprüft. Suche nach Abständen erfolgreich. Parallel nachfolgende Root-Redaktionsänderungen sind nicht Teil dieses Laufs.
- BrowserOS neo: eigene Registerkarte, ursprüngliche Seite gelesen und Desktopbildschirm tatsächlich angesehen. Neue veröffentlichte Seite bei 1440 × 1000 und 390 × 844 CSS-Pixeln tatsächlich per Screenshot angesehen. Desktop zeigt alle drei Paaranwendungen im ersten Bildschirm; mobil zeigt der erste Bildschirm das komplette erste Paar und den Beginn der primären Handlung. Hell und Dunkel bleiben nebeneinander; Wertzeilen umbrechen. Mobile Wertschrift nach Sichtprüfung auf 12 px erhöht und erneut angesehen.
- Quellenvertiefung über ihr sichtbares Bedienelement geöffnet, expanded-Zustand und Quellenüberschriften im Browser bestätigt, Inhalt bis zu Referenzstand und Paarwerten gescrollt und angesehen; anschliessend geschlossen. Auch Zustandsabschnitt mobil tatsächlich angesehen.

Das ist ein begrenzter Präsentations- und Inhaltsabgleich. Die sechs Zahlen betreffen opake sRGB-Paare, keine transparenten Flächen oder vollständigen Komponenten-/Browserzustände. Keine allgemeine Tastatur-, Screenreader- oder Konformitätsprüfung. Keine neue Laufzeitdemo; alle Farbproben sind statisch.
