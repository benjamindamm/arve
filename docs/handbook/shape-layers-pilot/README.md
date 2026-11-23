# Fach-Skill für Form und Ebenen

23.11.2026 · Autorenprototyp v0.1, noch kein unabhängiger Transferlauf.

## Ergebnis

- [Skill](../../../.agents/skills/arve-shape-layers-handbook/SKILL.md)
- [Fachfragen FLE-01–15](../../../.agents/skills/arve-shape-layers-handbook/references/shape-layers-questions.md)
- [Quellen- und Prüfhilfe](../../../.agents/skills/arve-shape-layers-handbook/references/evidence-and-checks.md)

Der Arbeitsrahmen trennt Form/Begrenzung, visuelle Flächenhierarchie und tatsächliche Überlagerungsreihenfolge. Das Kapitel soll Auswahl und Kombination erklären. Es verlangt weder ein bestimmtes Framework noch eine universelle Radien-/Schattenleiter.

## Fachliche Abdeckung

| Bereich | Fragen |
| --- | --- |
| System, Aufgaben, Wirkung und Quellen | FLE-01/02 |
| Formen, Konturen und lokale Definitionen | FLE-03 |
| Auswahl, Alternativen und Einsatz | FLE-04 |
| Verschachtelte und verbundene Formen | FLE-05 |
| Flächenaufgaben und visuelle Hierarchie | FLE-06 |
| Schatten und andere Tiefensignale | FLE-07, bedingt |
| Reihenfolge und Konflikte konkurrierender Flächen | FLE-08, bedingt |
| Beziehung zu Auslöser, Hintergrund und Overlayverhalten | FLE-09, bedingt |
| Themes und Kontrasteinstellungen | FLE-10, bedingt |
| Lange Inhalte, wenig Platz und Vergrösserung | FLE-11, bedingt |
| Fokus, Auswahl und andere Zustände | FLE-12, bedingt |
| Plattform-/Markenunterschiede | FLE-13, bedingt |
| Anforderungen und tatsächliche Nachweise | FLE-14 |
| Offene Entscheidungen und Pflege | FLE-15 |

Grundfragen, bedingte Fragen und Vertiefungen bleiben getrennt. Rollen, Werte, Beispiele und Gliederung werden nach Auftrag gewählt. Die Autorenmatrix darf neben der Leseseite liegen. Ausführlichkeit ist erlaubt; wiederholte Einschränkungen und lange Vorreden sind keine Ersatzleistung für verständliche Beispiele.

## Ausgangslage im shadcn-Handbuch

Gezielt gelesen: `scripts/content/page-reworks/form-und-ebenen.ts`, der zugehörige Renderer sowie die Blockübersicht von `shadcn-form-und-ebenen` im aktuellen Handbuchsnapshot. Die bestehende Seite enthält acht Blöcke: Vergleich offener/begrenzter/schwebender Fläche, Entscheidungsregeln, Kontur-/Schattenvergleich, lokale Radien, Prüfung, Quellen, historische Studie und Nachbarlinks.

Bereits vorhanden sind gleiche Inhalte in unterschiedlichen Flächen, die Trennung statischer Darstellung von Overlayverhalten und die Begrenzung einzelner Komponentenradien. Noch nicht hinreichend ausgearbeitet sind Auswahl und Kombination der Formen, verschachtelte/verbundene Ecken, systematische Flächenrollen und die Auflösung konkreter Ebenenkonflikte. Das ist eine redaktionelle Bestandsaufnahme, kein neuer visueller Seitenreview.

Die gespeicherten Quellen nennen noch Revision `5f4409…`, während `src/contracts/current-reference.ts` jetzt `30c496…` auswählt. Im aktuellen `package/library/tokens.css` wurden gezielt unter anderem Checkbox 4 px, kleiner Button 6 px, Input/Standardbutton 10 px sowie Card/Dialog 14 px gefunden. Die älteren Einzelwerte werden dadurch nicht automatisch falsch; die Seite ist aber keine vollständige aktuelle Formenreferenz. Fokus-Schattenwerte stehen ebenfalls im Export und dürfen nicht als Elevationsstufen übernommen werden. Die vollständige Formen-/Ebeneninventur steht aus.

## Lehre aus den bisherigen Seiten

Der unmittelbar vorherige Designer-Review der Abstandsseite kritisiert Text vor Demonstration, wiederholte Geltungshinweise, grosse Einzelkarten und mobile Vergleiche weit untereinander. Der neue Skill übernimmt daraus eine fachliche Darstellungsanforderung: entscheidende Wirkung früh und direkt am Objekt zeigen; mobile Vergleichbarkeit mitprüfen. Er schreibt weder eine Umschalterkomponente noch eine feste Zahl Beispiele vor. Bei Form/Ebenen muss zudem die einzeln geänderte Eigenschaft sichtbar bleiben, bevor ein Gesamtbild mehrere Signale kombiniert.

## Redaktioneller Gegencheck

Die Fragen wurden gegen die in der Referenz dokumentierten Gegenbeispiele abgeglichen: kleines Radiusinventar ohne globale Skala, Fokus-Schatten ohne Elevation, nicht klickbare Card, klare Fläche ohne Schatten, verschachtelte Radien, konkurrierende Overlays und native Unterschiede. Der Arbeitsrahmen erlaubt jeweils begrenzte Antworten oder offene Festlegungen; er verlangt keine erfundene Systemausstattung.

Skillform, auflösbare lokale Markdownverweise und 15 eindeutige Fragen-IDs wurden geprüft. Das ist eine Prüfung durch den Verfasser, kein unabhängiger Verhaltenstest. Keine neuen externen Plattform- oder Kontrastvorgaben wurden recherchiert oder als lokale Anforderungen eingeführt.

## Nächste Anwendung

Bei der Überarbeitung der shadcn-Seite zunächst den aktuellen Export gezielt nach Formen, Flächen und tatsächlich vorhandenen Ebenenregeln auswerten. Fehlende Showcase-Entscheidungen nur innerhalb des delegierten Entwurfs sichtbar ergänzen. Für Leser sollen Formenwahl, Kombination und eine relevante Überlagerung entscheidbar werden; Quellen und Prüfgrenzen müssen auffindbar bleiben. Ob diese Antworten als eine Seite oder mehrere verknüpfte Ansichten besser funktionieren, folgt dem tatsächlichen Inhalt.

Inzwischen wurde der Skill auf die veröffentlichte shadcn-Seite angewendet: [Ausarbeitung, Fragenzuordnung und tatsächliche Prüfungen](shadcn-application.md). Die Inhalte sind auch über MCP abrufbar. Contracts und Skillverteilung bleiben unverändert. Der offene Umbau der Abstandsseite aus deren Designer-Review bleibt ein separater Auftrag.
