# Anwendung auf die shadcn-Seite „Animation“

24.11.2026 · Anwendung des Fach-Skills durch den Hauptagenten. Kein unabhängiger Designer-Review oder Nutzertest des fertigen Ergebnisses.

## Ergebnis

Die Seite zeigt drei kompakte, steuerbare Studien:

1. **Dauer:** 150/300/600 ms, gleiche Strecke und gleicher abbremsender Verlauf.
2. **Verlauf:** gleichmässig, abbremsend und sanfter Beginn/Abschluss, jeweils 600 ms. Kleine Kurvendiagramme bleiben auch ohne Abspielen verständlich.
3. **Reduzierte Animation:** echte lokale Kontaktdetails öffnen/schliessen, wahlweise direkt oder mit 240-ms-Einblendung und 0,5-rem-Verschiebung. Identischer Inhalt und Fokus auf der Taste.

Die Vergleiche bieten Start, Pause/Fortsetzen, Zurücksetzen und vierfach verlangsamte Analyseansicht. Sie starten nicht beim Laden. Werte und Kurven sind lokale Showcase-Entscheidungen, keine neue allgemeine shadcn-Skala. Die historische Studie bleibt unverändert als Archiv erhalten. Der Titel „Animation“ und die bisherige Adresse bleiben bestehen.

## Fragenzuordnung

| Fragen | Fundstelle / Stand |
| --- | --- |
| ANM-01/02 | `anm-start`, `anm-source`: Webscope, Quelle, lokale Studien und Grenzen. |
| ANM-03/04 | `anm-choice`, `anm-reduced`: Zweck vor Effekt, Anfang/Ziel und tatsächliche Kontaktinformationen. |
| ANM-05/06 | `anm-duration`, `anm-curve`: Werte, Verzögerung/Wiederholung und aufgelöste Kurven; genau eine Vergleichseigenschaft ändert sich. |
| ANM-07/09 | `anm-duration`, `anm-reduced`, `anm-recipes`: Neustart ohne Warteschlange, Pause, Fortsetzen, Rücksetzen, Schliessen und erhaltene Bedienung. |
| ANM-08 | `anm-reduced`, `anm-preferences`: Systempräferenz gegenüber lokaler Wahl; Inhalt bleibt gleich, Rückwechsel startet nichts von selbst. |
| ANM-10 | `anm-processing`: Spinner/Skeleton-Zyklus nicht mit Verarbeitungsdauer oder Erfolg gleichsetzen; keine simulierte Serveranfrage. |
| ANM-11 | `anm-recipes`: keine Verzögerungen/Staffelung im gewählten Beispiel; weitere Sequenzen offen, keine Ausstattung zur Vervollständigung erfunden. |
| ANM-12 | `anm-preferences`: keine Autostarts/Schleifen in den Studien; automatische Aktualisierung und Flashing als gesonderter Prüfbereich eingeordnet. |
| ANM-13/14 | `anm-adaptation`: relative Wege, lange Inhalte, gültiger Zustand; native Profile und Zielgeräte-Leistung nicht bestätigt. |
| ANM-15/16 | `anm-checks`: konkrete Prüfaufträge, offene Systemrezepte, Zuständigkeit und Änderungsfolgen. |

Spinner 1000 ms und Skeleton-Puls 2000 ms bleiben unveränderte Komponentenbefunde aus dem ausgewählten Export `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`. Sie werden nicht als globale Übergangsskala übernommen. Die Rezepte sind in `src/docs/animation-showcase.json` versioniert; CMS-Prosa ändert deren Geometrie und Ablauf nicht automatisch. Profile, Renderer und Erklärungen müssen zusammen gepflegt werden.

## Redaktionelle Anwendung

Für ergänzende Kontaktangaben reicht ein unmittelbares Offen/Geschlossen-Ergebnis. Ein zurückhaltender Übergang kann das Hinzukommen verdeutlichen; der Name bleibt bestehen. Reduziert erscheinen dieselben Details direkt. Schliessen beendet die Darstellung, erneutes Öffnen startet einen einzelnen neuen Übergang. An den getrennten Vergleichen lässt sich vorher unterscheiden, was andere Dauer beziehungsweise anderer Verlauf verändert. Damit ist die Auswahl einer lokalen Lösung nachvollziehbar, aber nicht als Produktrezept allgemein freigegeben.

## Tatsächliche Prüfungen

- Geschützter veröffentlichter DB-Stand ohne abweichenden Entwurf; nur `shadcn-bewegung` verändert, 122 weitere Seiten unverändert. Historischer Study-Block exakt erhalten.
- Vollständiger Abgleich Release/CMS/MCP erfolgreich. Kompakte MCP-Navigation in vier Teilen: 14 Abschnitte einschliesslich Metadaten. `anm-reduced` vollständig mit passendem Hash gezielt abgerufen.
- Snapshot neu erfasst: nur diese Seite verändert; 115 weitere Snapshotseiten sowie System, Implementierungen, Medien und Contractrevision unverändert.
- BrowserOS Neo, Desktop 1440 × 1000 sowie 390 × 844 und 320 × 800. Dauer-/Verlaufvergleiche und Kontaktdetails visuell angesehen. Lange Inhalte umbrechen vollständig. Nach dem Begrenzen der Bewegungsfläche keine horizontale Seitenüberbreite in den geprüften Zuständen; Endposition bleibt auch nach Grössenwechsel innerhalb der Spur.
- Dauervergleich per Tastatur gestartet, in Zeitlupe pausiert und fortgesetzt. Die drei nativen Animationszeiten blieben über getrennte Beobachtungen bei ungefähr 100,02 ms stehen. Kurzer Lauf endete bei 150 ms; bei einer weiteren Pause blieben die beiden längeren Läufe bei ungefähr 233,36 ms. Beim Fortsetzen blieb der kurze Lauf beendet und startete nicht erneut.
- Zurücksetzen entfernt alle drei Animationen und setzt den Vergleich auf Anfang. Zweifaches Starten erzeugt jeweils genau eine Animation pro Spur, keine Warteschlange. Abschluss mit nativen Animationszeiten 150/300/600 ms beobachtet. Das sind Timeline-Beobachtungen, keine allgemeine wall-clock- oder Bildratenkalibrierung.
- Verlaufvergleich: gleiche 600-ms-Dauer und gleicher Timeline-Zeitpunkt um 100 ms, aber unterschiedliche Positionen bei linear, cubic-bezier(0.2, 0, 0, 1) und cubic-bezier(0.4, 0, 0.2, 1). Pause und Zeitlupe tatsächlich bedient.
- Kontaktdetails normal und lokal ohne Bewegung geöffnet; Textinhalt exakt gleich, Fokus jeweils auf „Details schliessen“. Normal wurde `am-reveal` mit 0,24 s angewandt, reduziert `none`. Schliessen verbirgt den Bereich und entfernt seine Animation. Abschalten der lokalen Reduktion startet keinen neuen Lauf.
- Browserpräferenz `prefers-reduced-motion: reduce` tatsächlich emuliert. Laufender und pausierter Vergleich wechseln ans gültige Ziel, ohne aktive Animationen; geöffnete Kontaktdetails bleiben sichtbar. Start unter dieser Präferenz zeigt das Ziel direkt. Rückwechsel auf `no-preference` startet nichts automatisch.
- Typprüfung, statischer Build und statischer Check erfolgreich: 198 HTML-Dateien, 116 Handbuchseiten, 69 Komponenten, 59 431 interne Links und 2 955 Contractassets, Basispfad `/arve`, kein Backend erforderlich.

Die erste mobile Messung zeigte Überbreite durch den unsichtbaren, mitbewegten Träger. Die Spur begrenzt diese Ebene jetzt gezielt; der sichtbare Kontakt bleibt innerhalb des Start-/Zielbereichs. Die korrigierte Darstellung wurde bei 320 und 390 px erneut geprüft.

Für die Umsetzung wurden die MDN-Primärdokumentationen zu [Element.animate](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate) und [Animation.cancel](https://developer.mozilla.org/en-US/docs/Web/API/Animation/cancel) am 24.11.2026 gelesen. Beim Abbrechen zurückgewiesene `finished`-Promises werden abgefangen; beim Verlassen der Seite werden eigene Animationen beendet.

Keine echte Systemeinstellungsänderung auf einem realen Gerät, kein Screenreadertest, keine menschliche Wahrnehmungsstudie, kein nativer Plattformtest oder allgemeiner Konformitätsnachweis. Deklarierte Parameter und beobachteter Ablauf werden nicht als universelles Timing-/Performanceversprechen ausgegeben. Contracts und eingefrorene Ausgangsdefinitionen wurden nicht verändert.
