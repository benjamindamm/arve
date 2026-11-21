# UX-Roast: Verbindungen und Inhaltskonsistenz

Stand: 21.11.2026. Ausgewählte Bibliothek shadcn, Pin `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`. Drei frische Bereichsagenten, gemeinsame Integration und gezielte CMS-Publikation. Kein Commit oder Push.

## Behobene Punkte

1. Aktive Auswahlhilfe: Die falsche Behauptung, für Radio/Select/Combobox gebe es keine Contracts, durch den aktuellen Quellenstand und konkrete Links ersetzt. Verfügbarkeit eines Quellencontracts und Veröffentlichung einer Implementierung bleiben getrennt. Historische Originalblöcke unverändert; ihr damaliger Umfang wird ausdrücklich eingeordnet.
2. Alternativen: 116 bewusst gewählte, absatzgebundene Linkdefinitionen auf 63 Komponentenseiten. Standard-Lexical-Links bleiben im CMS editierbar und werden auch über MCP geliefert. Wortgrenzen, längere Namen und Absatzkontext verhindern etwa einen falschen Table-Link in der Selbstbeschreibung „Data Table“. Bei der Katalogsuche nach „Termin“ führt die Entscheidungshilfe jetzt direkt zu Calendar/Date Picker statt zur Standort-/Vier-Baustein-Beratung.
3. Weiterarbeiten: Gemeinsamer kompakter Abschnitt mit höchstens drei Schritten vor technischen Nachweisen, plus Sprunglink im Seitenkopf. Nur tatsächlich vorhandene Designartefakte und veröffentlichte Handbuchwege. FIG wird als Quellenentwurf bezeichnet; keine zugesicherte Figma-Bibliothek oder Importfreigabe. Pilotvorlagen nur bei passender veröffentlichter shadcn-Zuordnung. Lange Einordnungen gemeinsam aufklappbar. Derselbe reine Datenhelper liefert `nextSteps` für Portal und MCP; fremde Systeme bekommen keine erfundenen shadcn-Pilotwege.
4. Date Picker: Editierbarer früher Hinweis vor dem Bild nennt dieselbe dokumentierte Fokusvoraussetzung wie Calendar. Die Runtime selbst wird dadurch nicht repariert. Abschnittslinks öffnen jetzt die angesprochenen Regel-Disclosures direkt, auch nach statischem Export; native URLs und Details bleiben erhalten.
5. Beispielkonsistenz: Select durchgehend Versandart (Standard/Express/Abholung), Data Table durchgehend die vorhandenen USD-Zahlungen (3 passend, 2 sichtbar), Table dieselben Räume und Summen, Toast dieselbe archivierte Sitzungsnotiz. Vergleichsvarianten dürfen keine andere fachliche Geschichte suggerieren; Mehrfachkonfiguration beim Select ist gesondert als Filter/Angebotsauswahl bezeichnet.

## Publikation und Schutz bestehender Inhalte

Komponentenpublikation nach Vorschau: 63 Seiten, weitere 48 zu diesem Zeitpunkt unverändert. Danach genau zwei Guidance-Seiten aktualisiert. Ihre veralteten Zeitstempelguards wurden erst erneuert, nachdem Quelle/CMS und Baseline exakt übereinstimmten und keine jüngeren Entwürfe vorlagen.

Snapshot-Abgleich: genau 65 Inhaltsänderungen, andere 51 Seiten identisch. Systemdaten, alle Contractpins, Implementierungen, Medien, Seitentitel und sonstige Metadaten unverändert. Neuer Snapshot-SHA256 `ae2252b7b6700b85b716eb05e1c8f048b481aedab2bebba055d21528fc3d25af`. Der Seitenübernahme-Schutz prüft unveränderte Nachbarseiten jetzt gegen den tatsächlich vor diesem Lauf gelesenen Zustand; erkannte manuelle Komponentenänderungen werden weiterhin nicht übergangen.

## Ausgeführte Prüfungen

- Typecheck und Produktionsbuild erfolgreich; bestehende Warnung zu breitem Dateimuster in library-skills.ts unverändert.
- Inline-Linkprüfung: 63 Seiten/116 Definitionen, Absatztexte bytegenau erhalten, Absatzbindung und längste Wortfolge (Alert Dialog vor Alert) geprüft.
- Alle 68 redaktionell ergänzten Komponenten mit Quellbelegen gegen neuen Snapshot geprüft. Button-Vorlagenprüfung weiterhin bestanden (9 Abschnitte, 23 Quellen, 21 Aussagen).
- Alle 69 veröffentlichten Komponenten über MCP auf exakten redaktionellen Inhalt abgeglichen. Ein erster Lauf erlitt während paralleler Entwicklungsserver-/Buildarbeit einen Verbindungsreset; der anschliessende vollständige Lauf bestand.
- Alle 69 MCP-Vergleichsantworten inklusive `nextSteps` gegen die reine Ableitung geprüft. 453 Paketdateihashes und Revisions-/Bibliotheks-/Komponentengrenzen bestanden.
- Beide Guidance-Releases/CMS/MCP exakt gleich; öffentliche Seiten HTTP200.
- Statischer Build und Prüfung bestanden: 198 HTML-Dateien, 116 Handbuchseiten, 69 Komponenten, 58'724 interne Links, 2'955 Contractassets, Basis /arve, ohne Backend. Alle 69 Vergleichsseiten vollständig und mit Weiterarbeiten-Abschnitt geprüft.
- Bereichsagenten: vier vereinheitlichte Beispiele bei 360/390 sowie Desktopstichproben; alternative Links/Guidance bei 360/390 mit tatsächlichen Zielwechseln; Weiterarbeiten auf Button/Select/Calendar/DataTable bei 360/390/1440, zugehörige Zielrouten und Fremdsystem-/Static-Fallbacks geprüft. Einzelberichte nennen genaue Grenzen.
- Zentral im statischen Export: Date-Picker-Link bei 360 geklickt, korrektes Hashziel und geöffnetes Regel-Details bestätigt und visuell angesehen. Weiterarbeiten bei 390 mit drei Schritten und ohne Seitenüberlauf visuell kontrolliert. Katalog „Termin“ tatsächlich eingegeben: zwei passende Treffer und datumsbezogene Hilfe; 390 px Dokumentbreite und scrollWidth identisch.

Browser-Emulationshinweis: Für abschliessende Screenshots CDP-Viewport nach Navigation gesetzt, auf requestAnimationFrame gewartet und Page.captureScreenshot über BrowserOS neo verwendet; tatsächliche innerWidth geprüft. Granulare Screenshots können abweichende/verspätete Ansichten liefern. Keine Designimporte oder Downloads ausgelöst, keine allgemeine Accessibility-/Runtimefreigabe behauptet.

## Bereichsbelege

- [Auswahlhilfen und Alternativen](guidance-consistency-fix.md)
- [Designweitergabe](design-handoff-fix.md)
- [Beispielkontexte](example-coherence-fix.md)
- `ux-followthrough-verification-mcp.json`
- `ux-followthrough-verification-static.json`

