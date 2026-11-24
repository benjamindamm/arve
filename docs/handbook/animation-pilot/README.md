# Fach-Skill für Animation

24.11.2026 · Autorenprototyp v0.1, noch keine Anwendung auf einen neuen Seitenaufbau und kein unabhängiger Transferlauf.

## Ergebnis

- [Skill](../../../.agents/skills/arve-animation-handbook/SKILL.md)
- [Fachfragen ANM-01–16](../../../.agents/skills/arve-animation-handbook/references/animation-questions.md)
- [Quellen und Prüfhilfe](../../../.agents/skills/arve-animation-handbook/references/evidence-and-checks.md)

Der Arbeitsrahmen verbindet Zweck und Auswahl mit konkret beschriebenen Abläufen. Er trennt Parameter, Verhalten, fachlichen Zustand und tatsächlich beobachteten Verlauf. Reduzierte Animation ist eine gleichwertige Darstellung; ein eingeschalteter CSS-Schalter allein erfüllt diese Aufgabe nicht.

## Fachliche Abdeckung

| Bereich | Fragen |
| --- | --- |
| Auftrag, Aufgaben, Plattformen und Quellenstand | ANM-01/02 |
| Zweck und begründeter Verzicht | ANM-03 |
| Auslöser, Anfang/Ziel, Eigenschaften und Bezug | ANM-04 |
| Dauer, Verzögerung und Wiederholung | ANM-05 |
| Zeitlicher Verlauf, Kurven und dynamisches Verhalten | ANM-06 |
| Erneute Eingaben, Umkehr, Abbruch und Navigation | ANM-07 |
| Reduzierte oder unmittelbare Alternative | ANM-08 |
| Lesbarkeit, Zugriff, Fokus und Bedienung | ANM-09 |
| Verarbeitung, Ladezustand und Fortschritt | ANM-10, bedingt |
| Mehrere zusammenwirkende Elemente/Phasen | ANM-11, bedingt |
| Automatische, wiederholte oder aktualisierende Inhalte | ANM-12, bedingt |
| Kleine/grosse Ansichten, Inhalte und Plattformen | ANM-13, bedingt |
| Ressourcen-/Renderingbedingungen und gültiger Zustand | ANM-14, bedingt |
| Anforderungen und tatsächlich ausgeführte Prüfungen | ANM-15 |
| Offene Entscheidungen, Pflege und Änderungsfolgen | ANM-16 |

Die Fragen strukturieren die Ausarbeitung, nicht die sichtbare Reihenfolge oder die Anzahl Abschnitte. Umfangreiche Herleitungen sind möglich. Die praktische Auswahl und Vorschau sollen früh auffindbar bleiben.

## Bestehende shadcn-Seite

Gezielt gelesen: `scripts/content/page-reworks/bewegung.ts`, `src/docs/page-reworks/bewegung.tsx` und `.css`, veröffentlichter DB-Stand sowie einzelne Animationswerte im ausgewählten Contract-Export.

Vorhanden sind Kontaktdetails vor/nach dem Öffnen, eine freiwillige Vorschau mit lokaler 300-ms-Dauer, eine lokale Option ohne Bewegung, Berücksichtigung der Webpräferenz und ergänzende Texte/Studie. Das Kapitel enthält keine verbindliche systemweite Dauer-/Verlaufsskala. Im aktuellen `package/library/tokens.css` der Revision `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90` stehen jedoch ausdrücklich `--ui-skeleton-pulse-duration: 2000ms` und `--ui-spinner-duration: 1000ms`. Sie sind Komponentenwerte; daraus folgt weder eine globale Übergangsdauer noch eine Aussage zur tatsächlichen Verarbeitungszeit.

Bei einer neuen Ausarbeitung fehlen vor allem klar auffindbare Auswahl-/Rezeptbeziehungen, vergleichbare Timing-/Verlaufsbeispiele und konkret beschriebene Unterbrechungsfälle. Die reduzierte Alternative muss am jeweiligen Ablauf erklärbar bleiben. Das ist eine redaktionelle Bestandsaufnahme; die vorhandenen Animationen wurden in diesem Schritt nicht zeitlich vermessen oder auf ihre Bedienung geprüft.

## Umbenennung

Auf Nutzerwunsch heisst das veröffentlichte Kapitel jetzt **Animation**. Geändert wurden ausschliesslich Titel und Änderungszeit der Seite `shadcn-bewegung`; Inhalt, Summary, Beziehungen und Adresse bleiben erhalten. Die aktuelle Ausarbeitungsdatei nennt ebenfalls den neuen Titel. Der bestehende Inhaltsstand wurde neu erfasst; im Snapshot ist nur der Seitentitel geändert, zusätzlich zu den üblichen Erfassungsmetadaten.

Die aktuelle DB-Fassung entspricht inhaltlich nicht vollständig der älteren Ausarbeitungsdatei. Deshalb wurde diese nicht erneut über die Seite publiziert. Die gezielte Titeländerung bewahrt alle vorhandenen Inhalte und setzt keinen alten Inhalt zurück. Eingefrorene Ausgangsdateien wurden nicht umgeschrieben.

## Quellen und redaktioneller Gegencheck

Im Browser am 24.11.2026 gelesen: WAI [Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html), [Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html), [Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html) und [MDN prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion). Niveaus, Bedingungen und ihre begrenzte Anwendung stehen in der Prüfhilfe. Keine neue lokale Timingregel oder allgemeine Freigabe wird daraus abgeleitet.

Die Fragen wurden redaktionell gegen die dokumentierten Gegenbeispiele abgeglichen: Spinnerzeit statt Verarbeitung, Vorschauwert statt Skala, Dauer gegenüber Verlauf, früher Erfolg, erneute Eingaben, Fokus und ausgeblendeter Inhalt, Reduktion ohne Information, automatische Aktualisierung, stockendes Rendering und native Präferenzen. Offene Antworten sind möglich; das Kapitel muss kein vollständiges Animationsrepertoire erfinden.

## Tatsächlicher Prüfstand

Skillform und lokale Markdownverweise geprüft; 16 eindeutige Fachfragen vollständig. Umbenennung mit Schutz vor abweichendem Entwurf und konkurrierender Änderung durchgeführt, alle übrigen Seitenfelder bewahrt. Titel und Navigation „Animation“ in der laufenden Seite im Browser beobachtet. Scope-Prüfung erfolgreich: 122 weitere DB-Seiten unverändert; im Snapshot nur der Titel dieser Seite geändert. MCP liefert unter dem bisherigen Pfad den Titel „Animation“. Typprüfung, statischer Build und statischer Check erfolgreich: 198 HTML-Dateien, 116 Handbuchseiten, 69 Komponenten, 59 431 interne Links und 2 955 Contractassets, Basispfad `/arve`, kein Backend erforderlich.

Kein neues Animationsbeispiel implementiert, keine Token/Contracts geändert, keine fremde Bibliothek installiert und keine Skillverteilung über MCP ergänzt. Noch kein unabhängiger Verhaltenstest des Skills oder neuer Designer-Review der Seite. Nächster fachlicher Schritt ist die Anwendung auf den aktuellen Seiteninhalt; die blosse Umbenennung ersetzt diese Ausarbeitung nicht.
