# Farbe · shadcn-Showcase

Generierter fachlicher Prototyp aus [showcase-color.json](showcase-color.json). Konkrete Werte und Ergänzungen sind eigene Showcase-Entscheidungen. Keine Änderung der Originalcontracts oder CMS-Veröffentlichung.

## Geltungsbereich

Prototypisches Web-Handbuch für Desktop und Mobile; helle und dunkle Darstellung. Die Rollen erklären das Showcase, ohne die aktuellen Komponenten-Contracts oder den Portalrahmen umzustellen. Native Zuordnungen bleiben offen.

## Rollen und Verwendung

| Rolle | Einsatz | Hell: Text / Fläche | Dunkel: Text / Fläche |
| --- | --- | --- | --- |
| Grundfläche | Seitenhintergrund, Überschriften und laufender Text. | #171717 / #FFFFFF | #FAFAFA / #0A0A0A |
| Inhaltsfläche | Zusammengehörige Inhalte. Eine Card ist eine mögliche Verwendung, keine Pflicht für jeden Abschnitt. | #171717 / #FAFAFA | #FAFAFA / #171717 |
| Überlagerte Fläche | Menüs und schwebende Informationen; Abgrenzung zusätzlich über Kontur oder Ebene. | #171717 / #FFFFFF | #FAFAFA / #262626 |
| Primäre Handlung | Die hervorgehobene Handlung. Primär ist eine Gewichtung, keine Erfolgsmeldung. | #FAFAFA / #171717 | #171717 / #E5E5E5 |
| Unterstützende Handlung | Weniger stark gewichtete Aktionen neben der primären Handlung. | #171717 / #F5F5F5 | #FAFAFA / #262626 |
| Ergänzende Information | Hilfen und Metadaten. Notwendige Informationen bleiben lesbar. | #525252 / #F5F5F5 | #D4D4D4 / #262626 |
| Interaktive Hervorhebung | Hover und hervorgehobene Menüeinträge. Eine dauerhafte Auswahl erhält zusätzlich eine Markierung. | #171717 / #E5E5E5 | #FAFAFA / #404040 |
| Destruktive Handlung | Aktionen mit löschender oder schwer rückgängig zu machender Wirkung; Folge und Objekt im Text nennen. | #FFFFFF / #B91C1C | #FFFFFF / #B91C1C |
| Fehlerhinweis | Bestätigter Fehler oder Korrekturbedarf. Fehler mit Text erklären; unbekannten Ausgang nicht als gescheitert darstellen. | #991B1B / #FEF2F2 | #FCA5A5 / #450A0A |
| Erfolgsbestätigung | Ein bestätigtes Ergebnis benennen; eine gestartete Aktion ist noch kein Erfolg. | #166534 / #F0FDF4 | #86EFAC / #052E16 |
| Warnhinweis | Relevante Folge oder Einschränkung vor der Entscheidung erklären. | #92400E / #FFFBEB | #FCD34D / #451A03 |
| Sachlicher Hinweis | Zusätzliche Information ohne Fehler- oder Erfolgsbehauptung. | #1E40AF / #EFF6FF | #93C5FD / #172554 |
| Nicht verfügbare Aktion | Verringerte Gewichtung; den Grund ausserhalb des deaktivierten Elements erklären. Diese Farben bilden keine allgemeine Opazitätsregel. | #666666 / #F5F5F5 | #A3A3A3 / #262626 |

## Konturen

- **Erforderliche Feldkontur:** Sichtbare Begrenzung auf den benannten Flächen. Dekorative Trenner dürfen eine eigene, schwächere Rolle erhalten, ersetzen aber keine erforderliche Feldkontur. Hell: #737373 auf #FFFFFF; Dunkel: #A3A3A3 auf #171717.
- **Fokusmarkierung:** Durchgehende äussere Kontur, mit Abstand zum Element; auf diesen angrenzenden Flächen berechnet. Verhalten auf farbigen Flächen, Beschneidung und reale Geometrie separat prüfen. Hell: #2563EB auf #FFFFFF; Dunkel: #93C5FD auf #171717.

## Anwendungsregeln

- Wähle die Rolle nach dem Zweck; verwende Text und Fläche als benanntes Paar. Ein allein kopierter Hexwert beschreibt seinen Einsatz nicht.
- Primäre Handlung, Auswahl, Fokus und Status sind unterschiedliche Bedeutungen. Fokus und Fehler müssen gleichzeitig erkennbar bleiben.
- Zeige Status durch verständlichen Text und bei Bedarf ein Symbol. Die Farbe unterstützt die Aussage.
- Hover ist eine zusätzliche Rückmeldung. Notwendige Informationen bleiben ohne Hover zugänglich. Dauerhafte Auswahl bekommt eine zusätzliche Markierung.
- Die Bedeutung der Rollen bleibt in Hell und Dunkel gleich. Die konkreten Werte sind pro Modus festgelegt; keine pauschale Farbinvertierung.
- Information wird im Showcase auf einer opaken Fläche dargestellt. Texte auf Bildern, Verläufen oder transparenten Mischflächen brauchen eine gesonderte Paarungsentscheidung und Prüfung.

## Datenvisualisierung

Kategorische Diagramme im Showcase, höchstens fünf Kategorien. Reihenfolge und Bedeutung bleiben innerhalb eines Diagramms stabil. Keine Aussage zur Unterscheidbarkeit allein durch Farbe.

Hell: #2563EB, #7C3AED, #0F766E, #B45309, #BE185D. Dunkel: #93C5FD, #C4B5FD, #5EEAD4, #FCD34D, #F9A8D4.

- Kategorien zusätzlich direkt benennen; bei Bedarf Marker oder Muster verwenden.
- Werte, Einheiten und fehlende Daten in einer textlichen oder tabellarischen Alternative bereitstellen.
- Keine Statusbedeutung aus der Farbe einer Datenreihe ableiten. Mehr als fünf Kategorien benötigt eine eigene Darstellungsentscheidung.

## Anforderungen und Nachweise

Eigene Showcase-Entscheidung: alle aufgeführten Textpaare erreichen mindestens 4,5:1 ohne Abstützung auf Ausnahmen für grosse oder inaktive Texte. Die W3C-Erläuterung nennt 4,5:1 für gewöhnlichen Text, mit definierten Ausnahmen. Dieses Ziel ersetzt keine vollständige Prüfung.

Alle 26 Textpaare erreichen das Rechenziel; siehe [Prüfbericht](contrast-report.json). Kontur- und Diagrammkontraste sind separat aufgeführt, keine vollständigen Fähigkeitsnachweise. Keine Browser-Komponentenprüfung oder native Freigabe.

## Abdeckung der Fragen

| ID | Geltung | Antwort | Stand | Quelle |
| --- | --- | --- | --- | --- |
| COL-01 | yes | shadcn dient als Web-Showcase. Ein vollständiger Farbentwurf ist delegiert; Hell und Dunkel sind lokale Entwurfsentscheidungen. Native Plattformen werden nicht als umgesetzt behauptet. | showcase-design | USER-DESIGN, SHOWCASE-DECISION |
| COL-02 | yes | Die Rollenbenennung orientiert sich an der aktuellen shadcn-Theming-Dokumentation. Dieses Artefakt führt die konkreten Showcase-Werte; bestehende exportierte Contract-Dateien werden nicht ersetzt. | showcase-design | SHADCN-THEME, SHOWCASE-DECISION |
| COL-03 | yes | 13 Flächen-/Textpaare und zwei Konturrollen decken Inhalt, Aktionen und Rückmeldungen ab. Zusätzliche Status- und disabled-Rollen sind eigene Ergänzungen; sie sind nicht als verfügbare Bibliothekstokens belegt. | showcase-design | SHOWCASE-DECISION |
| COL-04 | yes | Jedes Paar nennt Einsatz und Grenzen. Die Rollenregeln erklären Auswahl, Gewichtung und zulässige Verwendung. Die Gegenüberstellung der Modi zeigt dieselbe Rolle mit angepassten Werten. | showcase-design | SHOWCASE-DECISION |
| COL-05 | yes | Fehler, Erfolg, Warnung und sachliche Information haben eigene Rollen. Auswahl und Fokus sind davon getrennt; Meldung und Folgeschritt sind zusätzlich sprachlich zu erklären. Zeitpunkt und Ablauf bleiben Sache des jeweiligen Patterns. | showcase-design | SHOWCASE-DECISION |
| COL-06 | yes | Alle 26 opaken Textpaare werden gegen das Showcase-Ziel 4,5:1 berechnet. Kontur-/Diagrammpaare werden separat dokumentiert. Reale Zustände, assistive Nutzung und native Kontexte bleiben ungeprüft. | calculated-pairs-only | WCAG-TEXT, SHOWCASE-DECISION |
| COL-07 | yes | Hell und Dunkel sind als zwei Modi definiert. Theme-Auswahl, Präferenzvorrang und Speicherung sind kein Bestandteil dieses Farbentwurfs. Weitere Marken benötigen eine eigene Zuordnung. | showcase-design | SHOWCASE-DECISION |
| COL-08 | restricted | Der Entwurf begrenzt die freigegebenen Rechenbedingungen auf opake sRGB-Flächen. Bild-/Verlaufs-/Transparenzkombinationen sind nicht abgedeckt und brauchen eigene Belege. | scope-limited | SHOWCASE-DECISION |
| COL-09 | yes | Fünf kategorische Diagrammfarben je Modus sind als Showcase-Vorschlag festgelegt. Benennung und Datenalternative sind erforderlich; visuelle Unterscheidbarkeit wird nicht aus dem Kontrast zur Grundfläche abgeleitet. | showcase-design | SHOWCASE-DECISION |
| COL-10 | yes | Der Stand ist ein ausgearbeiteter Prototyp. Verantwortliche Organisation, Implementierung, native Rollenabbildung und weitere Prüfungen bleiben offen. Neue Werte brauchen eine Aktualisierung der Berechnung und fachliche Einordnung. | showcase-design | USER-DESIGN, SHOWCASE-DECISION |

## Offene Entscheidungen und Prüfungen

- Abbildung der zusätzlichen Rollen auf echte React-/Angular-Implementierungen; derzeit keine installierten Erweiterungstokens behaupten.
- Prüfung tatsächlicher Fokusgeometrie, Hover-/Auswahlkombinationen, Fehlermeldungen und Komponenten im Browser.
- Diagramme bei Farbsehschwächen, mit Mustern/Markern und textlicher Alternative prüfen.
- Native iOS-/Android-Zuordnung und Prüfungen; keine Übertragung einer Web-Berechnung als nativer Nachweis.
- Transparente Flächen, Bilder/Verläufe und vom Nutzer erzwungene Farben gesondert behandeln.
- Verantwortliche Stelle und Freigabe für eine reale Organisation sind nicht festgelegt.

## Quellen

- **USER-DESIGN:** Gespräch 23.11.2026: prototypisch/ideal arbeiten; shadcn als Showcase; fehlende Palette selbst entwerfen.. Autorisierung zum Entwerfen, keine vorgegebene konkrete Palette oder simulierte Freigabe.
- **SHADCN-THEME:** https://ui.shadcn.com/docs/theming. Semantische Flächen-/Inhaltsrollen, erweiterbare Tokens, mehrere Erscheinungsmodi; keine Behauptung pixelgleicher Werte.
- **WCAG-TEXT:** https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html. Erläuterung zu Textkontrast; Berechnung opaker sRGB-Paare, kein allgemeiner Produktnachweis.
- **SHOWCASE-DECISION:** Dieses Showcase-Artefakt. Alle konkreten Werte, zusätzlichen Statusrollen und Anwendungsentscheidungen; fachlicher Stand: ausgearbeiteter Prototyp, nicht für eine Organisation freigegeben.
