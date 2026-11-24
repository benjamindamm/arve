# Anwendung auf die shadcn-Seite „Form und Ebenen“

23.11.2026 · Anwendung des Fach-Skills durch den Hauptagenten. Kein unabhängiger Transferlauf oder Designer-Review der fertigen Seite.

## Ergebnis und Herkunft

Die Seite enthält zwölf aktuelle Textblöcke und die unverändert erhaltene historische Studie. Formenwahl und Kombination werden an einer kleinen gemeinsamen Inhaltsaufgabe erklärt. Flächenvarianten wechseln am selben Objekt; mobil ist kein Vergleich zweier langer, weit auseinanderliegender Darstellungen nötig.

Die Radien stammen aus `src/contracts/current-reference.ts` und der dort ausgewählten Revision `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`, `package/library/tokens.css`. Gezielte Auswahl: Sheet 0, Checkbox 4, kleiner Button 6, Tooltip 8, Input/Standardbutton 10, Card/Dialog 14 px; Switch als Pillenform. Diese Auswahl ist kein vollständiges Inventar aller Komponenten und keine globale Radiusskala.

Flächenrollen, Beispielschatten, verbundene Ecken und Ablauf Menü → Dialog sind ausdrücklich lokale Showcase-Entscheidungen. Die Seite importiert sie nicht in die Komponenten-Contracts. Der Schatten ist ein lokal gestaltetes Rezept, keine exportierte Höhenstufe. Untergrundwechsel bedeutet keine Dark-Theme-Freigabe.

## Fragenzuordnung

| Fachfrage | Antwort / Fundstelle und Grenzen |
| --- | --- |
| FLE-01/02 | `shape-start`, `shape-source`: Webumfang, Exportstand und lokale Entscheidungen getrennt. |
| FLE-03 | `shape-radii`: gleiche Probengeometrie, Radius und jeweilige Komponentenverwendung. |
| FLE-04/06 | `shape-surfaces`: offen, begrenzt, schwebend nach Aufgabe wählen; Schatten verspricht keine Klickbarkeit. |
| FLE-05 | `shape-combination`: Card 14/Input 10 px, Innenraum; gemeinsame Aussenform verbundener Elemente. Keine universelle Subtraktionsformel. |
| FLE-07 | `shape-depth`: Kontur und Schatten unabhängig schalten, tatsächlichen Untergrund variieren; Fokus-Schatten getrennt halten. |
| FLE-08/09 | `shape-order`: Menü vor Inhalt; bei Dialogaktion Menü beenden; Dialog vor abgedunkelter Seite. Weitere Konkurrenzen bleiben offen. Zeichnung und reales Verhalten ausdrücklich getrennt, Komponenten verlinkt. |
| FLE-10 | `shape-depth`, `shape-checks`: dunkler Untergrund als Studie; echte Themes und Kontrasteinstellungen weiterhin zu prüfen. |
| FLE-11 | `shape-adaptation`: längere Beschriftung, inhaltsabhängiges Wachstum; anderer Darstellungstyp benötigt eigenes Verhalten. |
| FLE-12 | `shape-states`: dieselbe Form, getrennte Signale für neutral/Fokus/Fehler; schematische Probe statt neuer Zustandsfreigabe. |
| FLE-13 | `shape-start`, `shape-checks`: begrenzter Webscope; native Zuordnungen bleiben offen. |
| FLE-14/15 | `shape-checks`: tatsächlicher begrenzter Prüfstand, noch offene Produktprüfungen, fehlende systemweite Ebenenreferenz und fachliche Zuständigkeit. |

## Redaktionelle Anwendung

Die Anleitung erlaubt folgende Entscheidung: Kontaktangaben innerhalb eines klar gegliederten Bereichs offen lassen; einen eigenständigen Abschnitt bei Bedarf mit Kontur begrenzen; temporäre Aktionen mit der passenden Overlay-Komponente zeigen. Das Feld in einer Card kombiniert bestehende 10-/14-px-Rezepte. Wird aus dem Menü eine Dialogaktion gewählt, endet das Menü zuerst. Bei längerem Inhalt wächst die Fläche. Weitere konkurrierende Overlays erfordern zusätzliche Regeln. Dies ist eine nachvollzogene Gestaltungsentscheidung, kein Nutzertest.

## Tatsächlich geprüft

- Veröffentlichung mit bestehender Schutzprüfung: erwarteter Änderungsstand und kein abweichender Entwurf. Danach nur `shadcn-form-und-ebenen` in der DB verändert; 122 weitere Seiten unverändert.
- Vollständiger Abgleich Ausarbeitung/CMS/MCP erfolgreich. Kompakter MCP-Abruf in vier Teilen: 14 Abschnitte einschliesslich Metadaten, eindeutige IDs; gezielter Abruf von `shape-order` vollständig mit passendem Hash.
- Snapshot neu aus DB erfasst: nur diese eine Seite verändert, 115 weitere Snapshotseiten sowie System, Implementierungen, Medien und Contractrevision unverändert.
- BrowserOS Neo, Desktop 1440 × 1000 sowie mobile Emulation 390 × 844. Screenshots von Flächenvergleich, Radien, Kontur-/Schattenstudie, Dialogablauf und langem Inhalt visuell angesehen. Zusätzliche Breitenmessung bei 320 px ohne horizontale Seitenüberbreite; kein gleichwertiger vollständiger visueller 320-px-Test.
- Flächenvariante per Tastatur geändert. Kontur und Schatten unabhängig ausgeschaltet, dunklen Untergrund eingeschaltet; berechneter Schatten dann `none`.
- Menü-/Dialogschritte per Tastatur aktiviert: Schritt Menü zeigt Menü ohne Dialog; Schritt Dialog zeigt Dialog ohne Menü. Das sind Zustände einer Illustration, kein nachgewiesenes Modalverhalten.
- Bei 390 px wächst die Inhaltsprobe durch längeren Inhalt von rund 138 auf 210 px Höhe; Radius bleibt 14 px. Alle drei Feldproben bleiben bei 10 px und haben keine interne horizontale Überbreite. Seitenbreite und Scrollbreite sind jeweils 390 px.
- Typprüfung erfolgreich. Statischer Build und Check erfolgreich: 198 HTML-Dateien, 116 Handbuchseiten, 69 Komponenten, 59 421 interne Links, 2 955 Assets, Basispfad `/arve`, kein Backend erforderlich.

Kein reales Mobilgerät, Screenreader-/Nutzertest oder umfassender Konformitätsnachweis. Kein echtes Menü/Dialog implementiert. Die Radien-/Vorschauwerte sind in `src/docs/shape-layers-showcase.json` versioniert; CMS-Prosa verändert diese Geometrie nicht automatisch. Profil, Renderer und Texte müssen bei Regeländerungen gemeinsam gepflegt werden.

## Überarbeitung nach Designer-Review: Kontext und Wiederholungen

23.11.2026 · Showcase-Profil v2. Der Flächenvergleich zeigt jetzt Kontaktangaben mit Benachrichtigungen und letzter Änderung in einer gemeinsamen Profilansicht. Offen und begrenzt behalten dieselbe Position. Schwebend verschiebt die Kontaktfläche in den Vordergrund und verdeckt tatsächlich Nachbarinhalt. Das ist weiterhin eine Illustration, kein interaktives Overlay.

Die wechselnde Bildlegende erläutert jeweils die sichtbare Variante. Der anschliessende Text wiederholt nicht mehr alle drei Rollen, sondern nennt nur die übergreifende Entscheidungsregel. Nach den Radiusproben entfällt die zweite vollständige Aufzählung aller Werte; Auswahlgrenze und Pillengeometrie bleiben erhalten. Die exakten Werte bleiben an den Proben und in den CMS-Quellenangaben verfügbar.

Geprüft: Desktop 1440 × 1000 und mobile Ansicht 390 × 844 im Browser. Offene Desktopansicht, schwebende Variante auf Desktop sowie begrenzte und schwebende mobile Ansicht visuell angesehen. Auswahl per Tastatur betätigt. Die schwebende Fläche überschneidet den darunterliegenden Inhaltsbereich um 28 px auf Desktop beziehungsweise den benachbarten Abschnitt um 32 px auf Mobil. Bei 390 px misst die gemeinsame Szene rund 406 px Höhe; kein horizontaler Seitenüberlauf. Zusätzliche Breitenmessung bei 320 px ebenfalls ohne Überlauf, kein vollständiger visueller Test dieser Breite.

Typprüfung, vollständiger CMS-/MCP-Inhaltsabgleich, statischer Build und statischer Check erfolgreich. Letzter statischer Check: 198 HTML-Dateien, 116 Handbuchseiten, 69 Komponenten, 59 421 interne Links und 2 955 Assets. Nur diese DB-Seite geändert (122 weitere unverändert); nur diese Snapshotseite geändert (115 weitere sowie System-/Implementierungs-/Medien-/Contractreferenzen unverändert). Historische Studie unverändert bewahrt. Keine neue unabhängige Nachprüfung durch einen Designer-Agenten und kein Nutzertest dieses überarbeiteten Stands.

## Korrektur: Nachbarinhalte lesbar halten

24.11.2026 · Showcase-Profil v3. Der Versatz der schwebenden Kontaktfläche wird jetzt durch rechten und unteren Aussenabstand im Layout berücksichtigt. Kontur und Schatten zeigen weiterhin die erhöhte Ebene; die Box verdeckt keine benachbarten Texte mehr. Die Legende wurde entsprechend angepasst.

Vor der Korrektur lag die Box bei 390 px um 32 px über dem Nachbarbereich. Nach der Korrektur überschneiden sich die Rechtecke der Kontaktfläche und der beiden Nachbarbereiche bei 320, 390 und 1440 px nicht; die jeweilige Dokumentbreite entspricht der Ansichtsbreite. Die mobile schwebende Variante wurde zusätzlich visuell geprüft. Die Prüfung betrifft dieses Beispiel, nicht sämtliche Overlay-Studien der Seite.
