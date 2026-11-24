# Abstände: Beziehungen und grafische Vermittlung

24.11.2026 · Überarbeitung nach Nutzerfeedback. Die Anwendung vom 23.11. bleibt als historischer Nachweis erhalten.

## Fachlicher Aufbau

Die Seite beginnt jetzt bei Zugehörigkeit: Beschriftung/Feld/Hilfe als Einheit, mehrere Angaben im selben Thema und die Trennung verschiedener Themen. Der Hauptvergleich zeigt dieselbe Ansicht abgestuft oder mit überall gleichen Abständen. Die Skala steht als kompakte Nachschlagereferenz weiter unten.

Allgemeine Heuristiken und lokale Werte bleiben getrennt. Nähe, wiederkehrende Abstandsmuster, Weissraum und gemeinsame Kanten geben Orientierung. Daraus folgt keine universelle Verdoppelungsformel. Innenraum und Abstand zur Umgebung sind unabhängige Entscheidungen. Die Beispiele verwenden lokale Rezepte auf einer 0,25-rem-Basis; bestehende Komponentenwerte und ihre Ausnahmen bleiben erhalten.

Auf den weiteren Nutzerhinweis „zeigen statt viel erklären“ wurden die sichtbaren Texte deutlich gekürzt. Hauptbestandteile sind jetzt:

- Ein grafischer Vergleich mit statischen Feldformen, farbigen Messzonen und direkt danebenliegenden Masslinien.
- Eine unabhängig veränderbare Innenabstandsprobe mit konstantem Abstand zwischen zwei Flächen.
- Zwei kleine schematische Darstellungen für Gruppierung durch Weissraum und Ordnung durch gemeinsame Kanten.
- Kurze Bildlegenden; ausführlichere Regeln, Dichte, Skala, Grössen und Nachweise aufklappbar.

Blau kennzeichnet Messhilfen, keine zusätzliche semantische Fläche oder neue Farbrolle. Die Feldformen sind keine echten Eingabekomponenten. Die Markierung lässt sich ausschalten, ohne die Abstände zu verändern.

## Quellen und Fragenzuordnung

Am 24.11.2026 im Browser gelesen: [Carbon – Spacing](https://www.carbondesignsystem.com/building-blocks/foundations/spacing/overview), insbesondere Beziehungen, Weissraum sowie Anwendung innerhalb/zwischen Komponenten. Carbon-Werte werden nicht als shadcn-Token übernommen. Die zusätzlich versuchte Nielsen-Norman-Seite wurde wegen eines Browser-Timeouts nicht ausgewertet und ist keine verwendete Quelle.

| Fragen | Aktuelle Fundstellen |
| --- | --- |
| SPC-01/02 | `space-start`, `space-sources`: lokaler Web-Showcase, Quellen und Werte getrennt. |
| SPC-03 | `space-scale`: Basis und semantische Stufenliste in CMS/MCP; visuelle Tabelle im Portal. |
| SPC-04/06 | `space-grouping`, drei `space-role-*`, `space-inset`, `space-principles`: Zugehörigkeit, Themen, Innen/Aussen und sichtbare Anwendung. |
| SPC-05/10/11 | `space-sizes`, `space-targets`: Grössenarten und Bedienflächen in eigener Vertiefung. |
| SPC-07/09 | `space-density`, `space-principles`: lange Hilfe, Inhaltswachstum und erhaltener Unterschied bei kompakter Dichte. |
| SPC-08/15 | `space-checks`: Anforderungs-/Prüfauftrag, Grenzen und Pflege. |
| SPC-12/13 | `space-framework`, `space-checks`: logische Kanten, Plattform-/Einheitenabgrenzung; native und weitere Sprachprüfungen offen. |
| SPC-14 | `space-exceptions`: 10-px-Inputpadding als konkrete Ausnahme, keine neue globale Basis. |

Der Fach-Skill wurde auf v0.2 präzisiert: Beziehungen vor Zahlen, Innen/Aussen getrennt, anpassbare Heuristiken und direkte grafische Erklärung. Die 15 Fragen-IDs bleiben bestehen.

## Tatsächlich geprüft

- Sicher veröffentlichter aktueller Stand ohne abweichenden Entwurf; nur `shadcn-abstaende` verändert, 122 weitere DB-Seiten unverändert.
- Vollständiger Abgleich Ausarbeitung/CMS/MCP erfolgreich. Kompakter MCP-Abruf in fünf Teilen mit 17 Abschnitten einschliesslich Metadaten; `space-principles` vollständig und mit passendem Hash gezielt gelesen.
- Snapshot neu erfasst: nur diese Seite verändert; 115 weitere Snapshotseiten sowie System, Implementierungen, Medien und Contractrevision unverändert. Der zuvor umbenannte Animationstitel bleibt erhalten.
- Desktop 1440 × 1000 und mobile Emulation 390 × 844 sowie 320 × 800 im Browser visuell geprüft. Gruppierung, Innenabstand und die kleinen Ordnungsskizzen angesehen; keine horizontale Seitenüberbreite in den gemessenen Zuständen.
- Normal: exemplarisch 8/16/32 px. Gleichmässig: alle gemessenen Zwischenräume 16 px; die Kompaktoption wird in diesem Vergleich deaktiviert. Zurück zur abgestuften Darstellung funktionieren Kompakt und lange Hilfe.
- Kompakt: 8 px innerhalb der Angabe, 12 px zwischen Angaben, 24 px zwischen Themen und 16 px Innenraum; Vorschautext bleibt bei 15 px. Bei 320 px mit langer Hilfe wächst die Probe auf rund 551 px Höhe, ohne den Text abzuschneiden.
- Innenabstand auf 8 und 48 px umgeschaltet und gemessen; Abstand zwischen den beiden Flächen bleibt jeweils 32 px. Vorschauwerte beziehen sich auf 16 px Wurzelgrösse.
- Skillform, Fragen-IDs, lokale Referenzen und Diff-Formatierung geprüft. Typprüfung, statischer Build und Check erfolgreich: 198 HTML-Dateien, 116 Handbuchseiten, 69 Komponenten, 59 431 interne Links und 2 955 Contractassets, Basispfad `/arve`, kein Backend erforderlich.

Kein neuer unabhängiger Designer-Agentenreview, kein Nutzertest, kein reales Mobilgerät und keine vollständige Zoom-/Hilfsmittel-/Konformitätsprüfung. Die bereits vorhandenen Bedienflächenbeispiele wurden in die Vertiefung verschoben; ihre frühere Aktivierungsprüfung wird hier nicht als neu ausgeführt ausgegeben.

Profile und Zahlen liegen versioniert in `src/docs/spacing-showcase.json`, erklärende Inhalte im CMS. Prosaänderungen ändern die Vorschaugeometrie nicht automatisch; Profile, Renderer und Rezepte müssen gemeinsam gepflegt werden. Contracts und eingefrorene Ausgangsstände bleiben unverändert.
