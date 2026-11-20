# overview · Darstellungsüberarbeitung

Ausgangsbefund: öffentliche Seite am 20.11.2026 in BrowserOS neo gelesen. Fünf Varianten bestanden jeweils nur aus einer Überschrift und einem Zwecksatz; sichtbare Beispiele, Auswahlhilfen und Kernregionen fehlten. Der gelesene MCP-Stand hat updatedAt `2026-11-20T08:57:18.815Z`.

Die fünf Varianten bleiben Abschnitte derselben CMS-Seite. Dashboard zeigt Kennzahlen und nächste Aufgabe, List & Search Suchkontext und vergleichbare Treffer, Analytics beschriftete Monatsbalken mit Textvergleich, Catalog zwei Projektvorlagen und Service Hub Arbeitsbereiche plus Unterstützung. Die Vorschauen sind statisch und jeweils ausdrücklich schematisch beschriftet. Fachtexte, Titel, Zweck, Auswahlhilfe, Beschreibung der Kernregion und sämtliche Beispieldaten liegen im Release-Inhalt und damit nach Veröffentlichung auch im MCP. Keine neue Collection, keine neue Freigabe oder Komponentenbindung.

Breit: Kennzahlen und Vorlagen jeweils zweispaltig; der Service Hub trennt Arbeitsbereiche und Unterstützung. Bis 640 px stehen Vorlagen sowie Hub-Bereiche untereinander. Tabellenzellen dürfen umbrechen, Diagrammwerte bleiben als Text vorhanden. Markierte Kernregionen werden zusätzlich im Text benannt.

Dateien:
- `src/docs/page-reworks/page-type-overview.tsx`
- `src/docs/page-reworks/page-type-overview.css`
- `scripts/content/page-reworks/page-type-overview.ts`

Tatsächlich geprüft: Ausgangsseite im Browser gelesen; CMS-Inhalt und Änderungszeit über read-only MCP `get_documentation_page` gelesen; `npm run typecheck` nach Erstellung und nach finaler CSS-Anpassung erfolgreich. Bestehende CSS-Variablen gezielt mit `docs.css` abgeglichen.

Prüfgrenze: Registry-Anbindung und Veröffentlichung erfolgen durch Root. Die neue Darstellung wurde noch nicht live gerendert; visuelle Prüfung breit/schmal und Release/CMS/MCP-Abgleich stehen nach Veröffentlichung aus. Keine Such-, Filter-, Auswahl-, Daten- oder Navigationsabläufe simuliert oder geprüft. Kein Commit/Push.

## Live-QA nach Veröffentlichung · 20.11.2026

Öffentliche Seite nach Root-Veröffentlichung mit BrowserOS neo geprüft. Vollseiten-Screenshots bei 1440 × 1000 und 390 × 844 CSS-Pixeln visuell gelesen: alle fünf Beispiele, Beschriftungen, Werte und die anschliessenden Kernregionsbeschreibungen sind lesbar. Desktop zeigt Vorlagen und Hub nebeneinander; bei 390 px stehen beide untereinander. Die Trefferliste bricht lange Projektnamen innerhalb der Zelle um; die drei Monatsbalken und Zahlen bleiben sichtbar. Kein eigener Darstellungsfehler gefunden, kein Fix erforderlich.

„Quellen und Prüfgrenzen“ einmal aufgeklappt, die drei Quellen-/Grenzabsätze über die sichtbare Seite verifiziert und wieder zugeklappt. Diese QA ergänzt die oben festgehaltene ursprüngliche Prüfgrenze; vollständige Produktabläufe und eine allgemeine Komponentenabnahme bleiben ausgeschlossen.

Zusätzliche Geometrieprüfung bei 390 px: Dokumentbreite = Viewportbreite = 390 px; alle fünf Beispielrahmen haben clientWidth = scrollWidth = 348 px, also keinen horizontalen Überlauf.
