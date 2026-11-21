# Card Header · redaktioneller Durchgang

Die ganze Seite wurde gelesen: Titel und Zusammenfassung, Variantenwahl und Beispielkarte, Legende, drei Anordnungsregeln sowie sämtliche Absätze der aufklappbaren Quellen und Prüfgrenzen. Dazu wurden der eigene Renderer, der Redaktionsbrief, der Auditbericht und Abschnitt 28 des Seitenaudits gelesen.

Es ergab sich kein konkreter sprachlicher Änderungsbedarf. Die verständlichen Formulierungen bleiben erhalten, darunter «Lange Titel dürfen vollständig umbrechen; der Kopf hat keine feste Höhe.» und «Ohne Aktion nutzt die Textgruppe die verfügbare Kopfbreite; kein leerer Aktionsplatz bleibt zurück.» Es gibt deshalb keine künstlichen Vorher/Nachher-Ersetzungen. Der bewusst englische Name Card Header bleibt ebenfalls bestehen.

Beispieldaten, Beschreibung und Aktion, Varianten, Inhaltsreihenfolge, Blocknamen und Textzeilenzahlen bleiben unverändert. Das gilt auch für die Umbruchregel mit 34 rem, die Unterscheidung zwischen Text- und Symbolaktion, Quellen und begrenzten Nachweisen. Renderer und CSS wurden nicht geändert.

Der frische read-only MCP-Abruf von `get_documentation_page` für `shadcn` / `content-layout-card-header` ergab `updatedAt: 2026-11-20T14:18:10.834Z`. Zusammenfassung und gesamter Inhalt wurden mit der bisherigen Release verglichen: identisch nach Entfernen der CMS-IDs und leerer Felder. Nur `expectedUpdatedAt` wurde auf diesen Stand gebracht. Keine CMS-Schreiboperation wurde ausgeführt.

Die Suche in den aktuellen Release- und Rendererdateien ergab einen eingehenden Link aus `content-layouts.ts`, ohne Fragment. Kein eingehender Fragmentlink wurde gefunden. Da alle Überschriften erhalten bleiben, ändern sich keine Anker.

Prüfungen: MCP-/Release-Altgleichheit, `npm run typecheck` und `git diff --check` erfolgreich. Zusätzlich wurde unter `scripts/content`, `src` und `docs` (ohne Snapshot) nach eingehenden Fragmentlinks gesucht; kein Treffer.

Nach dem erfolgreichen Root-Abgleich wurde die veröffentlichte Seite im BrowserOS neo vollständig gelesen und mit geöffneten Quellen und Prüfgrenzen bei 1440 × 1000 sowie 390 × 844 visuell geprüft. Titel, Beispielbeschreibung, Aktion, Bildunterschrift, Legende, Regeln und Details sind lesbar. Der lange Beispieltitel bricht bei 390 px vollständig um; die Textaktion steht darunter. Kein sprachlicher Restbefund und kein sichtbarer abgeschnittener Text. Funktions- oder Geometrietests wurden nicht wiederholt. Die Geräteansicht wurde zurückgesetzt und der eigene QA-Tab geschlossen.
