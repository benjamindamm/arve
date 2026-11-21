# Kompakte Designer-Vergleiche: Integration

Stand: 21.11.2026. Bibliothek shadcn, Revision `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`.

## Umgesetzte Reviewpunkte

Drei frische Bereichsagenten überarbeiteten 22 Formular-/Rückmeldungsseiten, 19 Navigations-/Ebenenseiten und 23 Daten-/Inhaltsseiten. Die fünf bestehenden Vergleichsseiten erhalten denselben gemeinsamen Rahmen; ihre kurzen Gestaltungshinweise wurden ebenfalls vereinfacht.

- Jede Gruppe zeigt eine redaktionell gewählte Übersicht. Weitere Ansichten bleiben als native, anfangs geschlossene Details erreichbar. Kleine Vergleiche stehen auch mobil nebeneinander; zwei/vier Zellen erhalten passende Raster. Einzelbilder nutzen einen schmaleren Rahmen ohne leere zweite Spalte.
- Deutsche Beispieldaten und direkte Gestaltungshinweise ersetzen englische Source-Fixtures und technische Einleitungen. Modell- und Herkunftshinweise stehen in geschlossenen Darstellungsdetails. Die Quellexporte bleiben unverändert.
- Field und Combobox zeigen einzelne Merkmale gezielter. Label verwendet ein gestaltetes Eingabefeld. Kalender zeigen einen ausdrücklich bezeichneten Ausschnitt anstelle wiederholter ganzer Monate. Questionnaire beschränkt sich auf den jeweiligen Antwortbereich.
- Diagramme zeigen ihre Zahlen in einer beschrifteten nativen Datentabelle zum Aufklappen. Zustandsbeispiele wiederholen nicht mehr jedes Mal den vollständigen Plot. Die Tabellen bleiben per Tastatur und Screenreader erreichbar.
- Native Details benötigen weder CMS-Runtime noch zusätzliches Client-Script; sie funktionieren im statischen Export.

Aktueller vollständiger Datenumfang: 69 Komponenten, 141 Gruppen, 422 Ansichten. Davon stehen 297 in den zunächst sichtbaren Übersichten; weitere Ansichten bleiben aufgeklappt verfügbar. Die Zahl der Ansichten ist kein Qualitäts- oder Freigabenachweis. `previewItems`, `detailsLabel` und `technicalNotes` werden über `get_component_page` identisch mitgeliefert.

## Gezielte CMS-Korrektur

Nur Toast erhielt zwei neue Abschnittsüberschriften: „Typ und Dringlichkeit bewusst wählen“ → „Die Meldung gestalten“; „Laufzeit und Abschluss unterscheiden“ → „Meldungen anzeigen und schliessen“. Vorhandene Regeln zu Priorität, Zeitverhalten und Stapeln bleiben vollständig erhalten. Veröffentlichungsvorschau zeigte genau eine Änderung; danach wurde nur diese Seite aktualisiert. Der neue Snapshot wurde gegen die gesicherte Vorgängerversion geprüft: andere 115 Seiten, Vertragspins, Systemdaten, Implementierungen und Medien identisch. Auch innerhalb von Toast unterscheiden sich nur die beiden Überschriften.

Neuer Snapshot-SHA256: `c99e26f5390915ceebdbe113605bc71cd2b55d84f37b4ebaef00dfc76361e057`. Vorgänger: `c5942ad8005856e2726743e5b227d04370a956878476ff23d845830370547bf4`.

## Tatsächlich ausgeführte Prüfungen

- Typecheck und Produktionsbuild erfolgreich. Die bestehende Turbopack-Warnung zum breiten Dateimuster in `library-skills.ts` bleibt unverändert.
- Vergleichsdaten und Quellen: alle 69 echten MCP-Antworten exakt gegen den gemeinsamen Helper geprüft, einschliesslich Übersichtsauswahl und technischen Notizen. 453 Paketdateihashes, sichere Quellenpfade und Bibliotheks-/Revisions-/Komponentengrenzen geprüft. Bericht `compact-verification-mcp.json`.
- Alle 69 statischen Seiten: vollständige Gruppen/Itemtitel und gefüllte Specimens; Übersicht und versteckte Zusatzansichten stimmen mit den Metadaten überein. Zusatzansichten und Quellenhinweise zunächst geschlossen; keine doppelten Vergleichs-IDs, Scripts oder Eventattribute. Native Disclosures liegen nicht unter aria-hidden. Bekannte englische Alt-Fixtures wie Search fruit/Contact details/Report saved werden in den Specimens nicht mehr gerendert. Bericht `compact-verification-static.json`.
- Alle 69 veröffentlichten Komponenteninhalte über MCP exakt gegen die redaktionellen Ausgangsdaten geprüft, einschliesslich Toasts aktualisierter Überschriften.
- Button-Vorlagenprüfung bestanden: neun Abschnitte, 23 Quellen, 21 Aussagen. Geänderte gemeinsame Rendererhashes und Belegausschnitte aktualisiert. Toast zusätzlich gegen neuen Snapshot geprüft.
- CSS der drei Bereiche mit PostCSS auf lokale Selektoren geprüft; keine globalen Imports, Fontfaces oder Keyframes.
- Finaler statischer Build sowie statische Prüfung bestanden: 198 HTML-Dateien, 116 Handbuchseiten, 69 Komponenten, 58'173 interne Links, 2'955 Contractassets, Basis `/arve`, ohne Backend.
- Browserprüfungen der Agenten: Formulare alle 22 mobil visuell und sechs Desktop-Schwerpunkte; Navigation alle 19 mobil mit Screenshot des Einstiegs und fünf Desktop-Schwerpunkte; Daten alle 23 mobil auf Geometrie/Überlauf, fünf Schwerpunkte zusätzlich visuell mobil/Desktop. Details und Messgrenzen in den Bereichsberichten.
- Zentral Bubble mobil im Portal visuell angesehen. Im finalen statischen Export Bubble-Zusatzoberflächen tatsächlich geöffnet (4 in der Übersicht, 3 zusätzliche; Dokumentbreite und scrollWidth 390 px). Chart-Bar-Datentabelle per Fokus+Enter geöffnet: Summary behält Fokus, Tabelle im Accessibilitybaum, kein aria-hidden-Vorfahr; anschliessend visuell angesehen.

## Höhenbeispiele und Grenzen

Die Bereichsberichte enthalten konkrete Messungen bei 390 × 844. Combobox-Zustände wurden von 1957 auf rund 815 px reduziert, Kalender-Varianten von 2975 auf rund 787 px; Field-Varianten von 1603 auf rund 514 px. Kleine spätere Textkorrekturen können die exakten Werte ändern. Bubble liegt neu bei rund 1765 px für den Variantenabschnitt inklusive Prosa; sein reiner Vergleichscontainer misst rund 1217 px. Die übergebene alte Bubble-Messung 3399 px hat keine zweifelsfrei identische Abschnittsgrenze, deshalb hier keine präzise prozentuale Reduktion dieses Rasters. Die alte/neue gesamte Seite wurde mit rund 9660/7294 px gemessen; darin wirken auch die gemeinsamen Disclosureänderungen.

Statische Bilder bleiben Gestaltungsreferenzen. Die bestehenden Angular-Demos, Release- und Quellenstände erhalten dadurch keine neue Laufzeitfreigabe. Kein Commit oder Push in dieser Runde.

## Bereichsberichte

- [Formulare und Rückmeldungen](compact-forms-feedback.md)
- [Navigation und Ebenen](compact-navigation-layers.md)
- [Daten und Inhalte](compact-data-content.md)

## Implementierungsstand

- `src/docs/comparisons/data-content-data.ts`: `e2e08076a90a211748bce90f8a10471d00fd49ca8255027793ced55afb5d5b8e`
- `src/docs/comparisons/data-content.css`: `194549e8acba36c3bf751f0d87609983f524cd55a156d9e93a7ee4300d57d8d0`
- `src/docs/comparisons/data-content.tsx`: `8acd2efb5adb49d4b64d1a7a155a8e207f8759848cf7716523249820325ffb2d`
- `src/docs/comparisons/forms-feedback-data.ts`: `7272242cd8fa2426de1d3ff862cb1e7ebbac5ffeb2655b5fb5de2fbe4d73c687`
- `src/docs/comparisons/forms-feedback.css`: `65b9538a09aadc21097deeff87bac855ac4046dfdbb69d4e0584fbde46991c12`
- `src/docs/comparisons/forms-feedback.tsx`: `a2231e5cc2873b70622daa5d1d3bd678480cd08e0803b78bc125643c47e79126`
- `src/docs/comparisons/navigation-layers-data.ts`: `38359b46aed654f65c705fbe018e3023ccd2f2604e7346441ec8ff11787d8c32`
- `src/docs/comparisons/navigation-layers.css`: `fa61a3f21113dbcf259f81e723b229804f18eac381c2b431a0c11b897c3ddfb9`
- `src/docs/comparisons/navigation-layers.tsx`: `e6b534d3fb10cdb4a0573c6d25951d8295ad5e3ea713c06d73b528245f41e87a`
- `src/docs/component-comparison-data.ts`: `553f6dfa032468872e9657d490d8dee9341211814824a6a82254ef9514cf9a73`
- `src/docs/component-comparisons.css`: `19b73d2c31ff89abcc4d3d3a6fcc8e92e9df3c24f4a376759206264e0151ad97`
- `src/docs/component-comparisons.tsx`: `cea4476788c81721a76ba9b0b0bf1b74b130cda9e2934e83dbeb1753f4fea537`
