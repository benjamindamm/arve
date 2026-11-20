# Main+Sidebar

Öffentlicher Ausgangsstand am 20.11.2026 in BrowserOS neo: H1 «Main+Sidebar» und leerer Absatz, keine Inhaltskomposition. Read-only Payload-Abfrage mit `push:false` und PostgreSQL-Lesemodus: Inhalt leer, updatedAt `2026-11-20T08:39:33.985Z`.

Gezielte Originalquelle: `docs/handbook/postfinance-analysis/mapping.md`, Abschnitt «Layouts und Varianten»; historische Studie unverändert.

Neue synthetische CSS-Studie: optionaler Kopf und Abschnittsnavigation, grosser Hauptbereich und ergänzende Sidebar. Zwei konkrete Beispiele zeigen die verfügbare Breite und eine schmale Vorschau. Die Abschnittslinks führen innerhalb des jeweiligen Beispiels zu echten Zielen. Längerer Haupttext lässt sich öffnen. Alle fachlichen Texte, Labels und Regeln kommen aus vier CMS-Inhaltsblöcken; der Renderer übernimmt ausschliesslich die Komposition.

Die lokale Umschaltgrenze ist 42 rem Beispielbreite: darüber 2:1, darunter Hauptinhalt vor Zusatzinhalt. Sticky ist nur bei zugleich mindestens 50 rem Fensterhöhe aktiv, mit 5 rem Abstand. Das sind lokale Studienwerte. Keine Fixed-Position, keine Überdeckung und keine separate Scrollfläche. Kurze Sidebar ist Voraussetzung; lange Zusatzinhalte sollen normal mitlaufen. Quellen und Prüfgrenzen stehen in einer aufklappbaren Region.

Tatsächlich ausgeführt:
- `npm run typecheck`: erfolgreich.
- `node --env-file=.env --import tsx scripts/apply-page-rework.ts main-sidebar`: Vorschau erfolgreich, vier Blöcke, keine CMS-Veröffentlichung durch diesen Worker.
- Browser-Ausgangsbefund mit eigener BrowserOS-neo-Seite.

Nach Veröffentlichung und Registrierung durch Root mit BrowserOS neo tatsächlich geprüft:
- 1440 × 1000 CSS-Pixel: grosse Hauptspalte und kurze Zusatzspalte sichtbar im Verhältnis 2:1. Nach Öffnen des langen Inhalts und Scrollen blieb die Sidebar bei 80 px oberem Abstand neben dem Haupttext; kein Überdecken.
- 390 × 844 CSS-Pixel über CDP-Geräteemulation: Hauptinhalt und vollständige Zusatzregion untereinander, lesbare Umbrüche. Screenshot am Seitenanfang und am Übergang Haupt-/Zusatzregion angesehen.
- 1440 × 600 CSS-Pixel: Sidebar scrollt normal mit, ihr oberer Teil liegt beim Abschnitt «Nächste Schritte» bereits oberhalb des sichtbaren Fensters; kein Sticky bei dieser Höhe.
- Echtes Abschnittsziel `#ms-wide-next` geöffnet: «Nächste Schritte» mit vorgesehenem oberem Abstand sichtbar.
- `scripts/check-page-rework.ts main-sidebar`: Release/CMS/MCP gleich, öffentliche Seite HTTP 200, neutraler Inhalt.

Während eines parallelen Entwicklungsupdates erschien kurz eine Darstellung ohne seitenbezogenes CSS. Nach Neuladen war das CSS vollständig vorhanden; alle oben genannten abschliessenden Sichtprüfungen erfolgten mit geladenem CSS. Keine Änderung an gemeinsamen Dateien oder CMS-Inhalten durch diesen Worker.

Tastatur-/Screenreaderbedienung sowie alle Textgrössen und beliebig lange Zusatzinhalte sind damit nicht geprüft.
