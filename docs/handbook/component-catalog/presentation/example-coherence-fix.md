# Beispielkonsistenz · Select, Data Table, Table, Toast

Stand: 21. November 2026. Redaktionelle Darstellung auf Grundlage der unveränderten Hauptbeispiele und Autorenbeschreibungen. Contractbibliothek `shadcn`, Revision `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`; deren Draft-Status bleibt bestehen.

| Komponente | Durchgehender Beispieldatensatz | Gezielte Zustandsänderung |
| --- | --- | --- |
| Select | Versandart: Standard, Express, Abholung | Standard bleibt gewählt; im geöffneten Zustand ist Express markiert. Kompakte Höhe und gesperrte Felder behalten Standard. Die zusätzliche Mehrfachansicht bezeichnet ausdrücklich eine separate Konfiguration angebotener Versandarten, mit Standard und Express und beiden versteckten Formularwerten. |
| Data Table | anna@example.com / Ausstehend / USD 100.00; beat@example.com / Bezahlt / USD 125.00 | Sortierung und Auswahl ändern jeweils ein Merkmal; ausgeblendeter Status erhält beide Identitäten und Beträge. 3 passende Zahlungen, davon 2 auf der sichtbaren Seite. Leer zeigt 0 passende Zahlungen; ein Datenfehler bleibt eine eigene Rückmeldung. |
| Table | Atelier 10 Std. / CHF 450; Seminarraum 8 / 360; Werkraum 6 / 270 | Hervorhebung betrifft nur Atelier. Native Fusszeile: Total 24 Std. / CHF 1’080. Beschriftung: Interne Buchungen · Oktober 2026. |
| Toast | Archivierte Sitzungsnotiz: «Notiz archiviert», «Im Archiv verfügbar.», «Rückgängig» | Symbol, Stapelöffnung und deaktivierte Aktion bleiben getrennte Vergleiche mit identischen Meldungstexten. |

## Umsetzung

Vergleichswerte und Texte liegen in `src/docs/comparisons/forms-feedback-data.ts` und `data-content-data.ts`. Forms-Feedback verwendet weiterhin die kuratierten HTML-Strings, inerte Darstellung und Präfixierung aller Instanz-IDs. Der Table-Renderer erhielt eine optionale native Fusszeile; deren Inhalt stammt ausschliesslich aus den Vergleichsdaten. Numerische Raumspalten werden rechts ausgerichtet. Bestehende Aufrufsignaturen, Vorschauauswahl, zusätzliche Ansichten und Quellenreferenzen bleiben erhalten. Andere Komponenten einschliesslich Calendar und Tooltip wurden in diesen Modulen nicht geändert.

## Tatsächlich ausgeführte Prüfungen

- `npm run typecheck`: erfolgreich.
- Direkter Import der öffentlichen Datenhelfer: 21 Vergleichseinträge geprüft, keine alten Beispielidentitäten in den vier Komponenten.
- HTML-Prüfung mit parse5: eindeutige präfixierte IDs, auflösbare ID-Verweise, keine Eventhandlerattribute in allen 12 Select-/Toast-Ansichten.
- 56 gebundene Quellenreferenzen gegen SHA-256 der gepinnten Paketdateien geprüft.
- Raumsummen aus den drei Zeilen berechnet: 24 Stunden und CHF 1’080.
- Fremdkomponenten liefern über die betreffenden Datenhelfer keine Treffer.

BrowserOS-Neo-Prüfung nach Integration auf `http://127.0.0.1:3010`: alle vier Seiten bei 360 und 390 CSS-Pixeln geöffnet; jeweils Beispiel, Varianten und Zustände über die Seitennavigation erreicht. Zusätzliche Ansichten von Select, Data Table und Toast tatsächlich mit den aufklappbaren Steuerungen geöffnet. Sichtbar waren 7 Select-, 6 Data-Table-, 3 Table- und 5 Toast-Illustrationen. Die gemessene Dokumentbreite entsprach bei allen vier Seiten der jeweiligen Fensterbreite (360/390), auch mit geöffneten Zusatzansichten. Tabellen bleiben bei Bedarf innerhalb ihres Scrollcontainers. Sichttexte im Browser stimmen mit den Datenhelfern überein. Screenshots der schmalen Vergleiche geprüft; Desktop-Stichprobe bei 1440 Pixeln mit unveränderten Einträgen und ohne seitenweiten horizontalen Überlauf, darunter Select- und Data-Table-Zustände visuell geprüft. Keine Formularaktionen und keine Downloads ausgelöst. Statische Illustrationen belegen keine ausgeführten Select-, Toast- oder TanStack-Abläufe, Timer, Fokussteuerung oder allgemeine Barrierefreiheit. Kein Build, Commit, Push, CMS-/Datenbankeingriff oder Veränderung der Haupt-SVGs, Autorenquellen und Contractpakete.
