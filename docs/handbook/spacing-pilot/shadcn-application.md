# Anwendung auf die shadcn-Abstandsseite

23.11.2026 · Anwendung durch den Hauptagenten, kein unabhängiger Transferlauf.

Die veröffentlichte Seite `shadcn-abstaende` wurde anhand des Fach-Skills neu ausgearbeitet. Ihr Umfang sind Webbeispiele; native Werte und eine allgemeine Freigabe aller Komponenten werden daraus nicht abgeleitet.

## Fachliche Zuordnung

| Fragen | Fundstellen / Stand |
| --- | --- |
| SPC-01/02 | `space-start`, `space-sources`, `space-framework`: Scope, Exportbefunde und eigene Showcase-Entscheidungen getrennt. |
| SPC-03 | `space-scale`: Basis 0,25 rem; angebotene Faktoren 0/1/2/3/4/6/8/12/16. Illustrative Pixelwerte bei 16 px Wurzelgrösse. |
| SPC-04 | `space-role-related/items/groups/inset`: Auswahl nach Zusammenhang, Elementen, Gruppen und Innenraum. |
| SPC-05/06 | `space-sizes`, `space-grouping`: inhaltsabhängige Höhe und Vergleich unterschiedlicher Gruppierung. |
| SPC-07 | `space-adaptation`: Umbruch, längere Hilfe und erhaltene Zugehörigkeit. |
| SPC-08 | `space-checks`: Anforderungen und tatsächliche Nachweise getrennt. |
| SPC-09 | `space-density`: normal und kompakt bei unveränderter Schriftgrösse und Mindestbedienfläche. |
| SPC-10/11 | `space-targets`: sichtbares 20-px-Zeichen gegenüber 44-px-Bedienfläche; keine allgemeine Mediengrössenskala behauptet. |
| SPC-12/13 | `space-adaptation`: logische Richtungen und Grenzen der Web-/Sprach-/Plattformnachweise; native Profile bleiben offen. |
| SPC-14 | `space-exceptions`: belegtes Inputpadding 10 px ist eine lokale Ausnahme, keine zweite globale Skala. |
| SPC-15 | `space-review`: offene Entscheidungen, Pflege und Prüfbedarf. |

Die neun Stufen und vier Rollen sind ein ausdrücklich gewähltes Showcase-Profil. Tailwind-Basis und einzelne Exportwerte begründen keine unveränderte globale shadcn-Vorgabe. Die 44-px-Fläche ist hier eine Komfortentscheidung. WCAG Target Size Minimum (24 px mit Bedingungen/Ausnahmen) und Enhanced (44 px mit Bedingungen/Ausnahmen) bleiben getrennt; kein Konformitätsnachweis.

## Darstellung und Pflege

Die Texte liegen als 16 benannte CMS-Blöcke vor, einschliesslich semantischer Skalenliste für MCP. Der Renderer stellt diese Liste zusätzlich als kompakte Grössenbalken dar. Vertiefungen sind einklappbar. Das Zahlenprofil liegt versioniert in `src/docs/spacing-showcase.json`; reine Prosaänderungen im CMS verändern die Vorschaugeometrie nicht automatisch. Texte, Rezepte und Profil müssen gemeinsam gepflegt werden.

## Tatsächlich geprüft

- Sicherer Abgleich vor Veröffentlichung: veröffentlichter Stand, keine abweichenden Entwürfe, erwarteter Änderungszeitpunkt. Nur Abstände und Typografie geändert, 121 übrige DB-Seiten sowie Systeme und Implementierungen unverändert.
- Vollständiger Inhaltsabgleich zwischen Ausarbeitung, veröffentlichtem Payload-Inhalt und MCP mit den bestehenden Prüfskripten erfolgreich.
- Desktopansicht sowie 390-px-Ansicht im Browser geprüft. Bei 390 px keine horizontale Seitenüberbreite. Normal: Innenraum 24, Elementabstand 16, Gruppenabstand 32 px. Kompakt: 16/12/24 px. Schrift 16 px und beide Bedienflächen 44 × 44 px bleiben erhalten.
- Beide Anpassungen per Tastatur eingeschaltet. Beispielaktion A per Leertaste ausgelöst; Zähler von 0 auf 1. Geometrie und DOM-Treffertest der Fläche geprüft. Pointerauslösung konnte mit der verwendeten Browserautomation nicht zuverlässig bestätigt werden; daraus wird kein erfolgreicher Pointertest abgeleitet.
- Typprüfung und statischer Build erfolgreich. Statische Prüfung: 198 HTML-Dateien, 116 Handbuchseiten, 69 Komponenten, 59 420 interne Links und 2 955 Assets geprüft; Basispfad `/arve`, kein Backend erforderlich.

Kein vollständiger Screenreader-, nativer Plattform- oder Nutzungstest. Kein neuer unabhängiger Designer-Review dieses fertigen Ergebnisses.
