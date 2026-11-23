# Fach-Skill für Abstände und Grössen

23.11.2026 · Autorenprototyp, noch kein unabhängiger Verhaltenstest.

## Dateien

- [Skill](../../../.agents/skills/arve-spacing-handbook/SKILL.md)
- [Fachfragen SPC-01–15](../../../.agents/skills/arve-spacing-handbook/references/spacing-questions.md)
- [Skalen, Quellen und Prüfungen](../../../.agents/skills/arve-spacing-handbook/references/evidence-and-checks.md)

Der Skill übernimmt Grundfragen, bedingte Fragen und Vertiefungen aus den bisherigen Fach-Skills. Die Lernerfahrung aus dem Typografie-Review ist enthalten: Aufgaben und Gestaltungsziele, Auswahl, Zusammenspiel und eine relevante Anpassung werden erklärt. Eine reine Skalenliste genügt nicht; feste Seitenlänge oder Beispielanzahl werden ebenfalls nicht verlangt.

## Was er erarbeitet

| Bereich | Fragen |
| --- | --- |
| System, Aufgabe, Quellen und Scope | SPC-01/02 |
| Basiseinheit, Ableitungsregel, angebotene Stufen und Einheiten | SPC-03 |
| Auswahl nach Beziehung und Zweck | SPC-04 |
| Relevante Grössenarten, feste/inhaltsabhängige Masse und Grenzen | SPC-05 |
| Innenabstand, Gruppierung, Gewichtung und Rhythmus im Zusammenhang | SPC-06 |
| Inhalt, Umbruch und Anpassung | SPC-07 |
| Anforderungen und tatsächlich ausgeführte Nachweise | SPC-08 |
| Dichtevarianten | SPC-09, bedingt |
| Sichtbare Darstellung, aktive Fläche und Nachbarziele | SPC-10, bedingt |
| Icons, Bilder und andere Mediengrössen | SPC-11, bedingt |
| Sprach-/Richtungsunterschiede | SPC-12, bedingt |
| Plattformen, Marken, Systemflächen und Bezugsgrössen | SPC-13, bedingt |
| Optische Korrekturen und andere Skalenabweichungen | SPC-14, bedingt |
| Offene Entscheidungen, Pflege und Änderungsfolgen | SPC-15 |

## Antwort auf die Frage nach dem 4er-/8er-System

Ja, eine solche Schrittlogik gehört in diesen Bereich. Der Katalog trennt aber Basiseinheit, angebotene Stufen und deren Verwendung. Ein Projekt mit 4er-Basis kann bestimmte grössere Stufen bevorzugen und zugleich belegte besondere Werte besitzen. Das Seitenraster für Spalten und Regionen bleibt ein verwandtes Layoutthema.

Die aktuelle [Tailwind-Themereferenz](https://tailwindcss.com/docs/theme#default-theme-variable-reference) nennt `--spacing: 0.25rem`; die [Padding-Dokumentation](https://tailwindcss.com/docs/padding) erläutert Zahlenfaktoren und eigene Werte. Beide Quellen wurden am 23.11.2026 gelesen. Daraus folgt keine ungeprüfte Standardkonfiguration jedes shadcn-/Tailwind-Projekts und keine Vorschrift für alle Grössen.

## Bestehende shadcn-Seite als Ausgangspunkt

Die gespeicherte Seite `shadcn-abstaende` wurde im aktuellen Snapshot gelesen. Sie enthält Studien zu Gruppierung, Innen-/Aussenabstand und sichtbarem Zeichen gegenüber Bedienfläche sowie Regeln zu Dichte und langen Inhalten. Der Renderer `src/docs/page-reworks/abstaende.tsx` verwendet teilweise positionsgebundene Textzeilen; diese Darstellungsbindung ist keine Vorgabe des neuen Skills.

Die Seite bezeichnet ihre bisherige Reihe 4/8/12/16/24/32/48 px selbst als redaktionellen Referenzvorschlag. Die dort zitierten Komponentenwerte stammen aus einer älteren Exportrevision. Sie werden vom Skill nicht als allgemeine aktuelle Systemskala übernommen. Der aktuelle Export wurde zusätzlich gezielt nach Inputpadding, Labelgap und Grundwerten durchsucht; das ist keine vollständige Token- oder Komponentenprüfung.

Diese Bestandsaufnahme beschreibt den Zustand vor der Anwendung. Inzwischen wurde der Skill auf die veröffentlichte Seite angewendet; [Ausarbeitung und tatsächliche Prüfungen](shadcn-application.md). Die Contracts bleiben unverändert. Der Skill selbst wurde hier nicht neu über MCP verteilt.

## Prüfung und Grenzen

Bei der Konzeption wurden die im Fragenkatalog genannten Gegenbeispiele redaktionell geprüft: Komponentenwert statt globaler Basis, Kontur ausserhalb einer Schrittlogik, unbekannte aktive Fläche, langer Text, System ohne Bedienziele und native Einheiten. Die Onlinequellen zu Target Size Minimum und Enhanced wurden getrennt gelesen und in der Prüfhilfe eingeordnet.

Skillform, lokale Referenzen und eindeutige Fragen-IDs sind geprüft. Das ist kein unabhängiger Transferlauf und keine UI-/Zugänglichkeitsprüfung. Nächster Nachweis wäre eine echte oder ausdrücklich synthetische Anwendung mit einer vorhandenen Skala, lokalen Ausnahmen und einer konkreten Gruppierungsaufgabe; fehlende Regeln müssen sichtbar bleiben, statt aus einer geometrischen Reihe erfunden zu werden.
