# Anwendung des Typografie-Skills auf das shadcn-Handbuch

23.11.2026 · Ausarbeitung und lokale Veröffentlichung durch den Hauptagenten mit Skill v0.2. Keine unabhängige Transferprüfung oder Studie mit realen Nutzern.

Die bestehende Typografieseite wurde quellenbezogen überarbeitet und unter `/systems/shadcn/typografie` veröffentlicht. Der explizit prototypische Charakter der Referenz erlaubt einen eigenen Showcase-Entwurf. Neue Werte werden nicht als unveränderte shadcn-Originalskala ausgegeben.

## Getroffene Designentscheidungen

Für die deutschsprachige Web-Studie gelten sechs Rollen: Seitentitel, Abschnittstitel, Lesetext, Beschriftung, Hilfe sowie Code/Kennungen. Das Ziel verbindet schnelles Erfassen mit ruhiger Lektüre. Beschriftung und Hilfe unterscheiden sich in Gewicht und Zeilenhöhe; die Lesetextrolle erhält mehr Raum. Mehr Grösse allein ist nicht das Gliederungsprinzip.

Der Seitentitel bricht bei längerem Inhalt um. Eine aufgabenweite Erklärung wird als Lesetext vor dem Abschnitt eingesetzt, eine lokale Erläuterung bleibt Hilfe am Wert. Semantische Hierarchie wird von der visuellen Rolle getrennt erläutert. Die Studie enthält keine echten Formularfelder oder Speicheraktion und behauptet deren Verhalten nicht.

Die Rezepte werden im versionierten [Showcase-Profil](../../../src/docs/typography-showcase.json) geführt; ihre Beschreibungen und Parameter sind als [Payload-Inhaltsblöcke](../../../scripts/content/page-reworks/typografie.ts) veröffentlicht. Das Profil steuert die kuratierten Schriftproben, nicht die Typografie aller Komponenten. Eine isolierte Änderung am CMS-Rezepttext verändert die numerischen Probenwerte nicht automatisch; bei einer Rezeptänderung sind Profil und Beschreibung gemeinsam abzugleichen. Der bei dieser Veröffentlichung ausgeführte Abgleich ist im Nachweis dokumentiert. Ein neues universelles CMS-Blockmodell ist damit nicht eingeführt.

## Quellenabgleich

Der aktuell importierte Export `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90` führt Inter 400/500/600/700 normal, Noto Naskh Arabic 400 normal und Geist Mono 500 normal. Die vorhandenen Dateipfade sowie `fonts.css` und `tokens.css` wurden gelesen. Der Export nennt neben Komponentenrezepten eine Basis 14 px / 20 px. Die Showcase-Lesetextrolle 1 rem / 1,625 ist eine gesonderte Designentscheidung und verändert diese Quelle nicht.

Aktuelle Typeset-Dokumentation, lokale Exportdefinitionen und der eigene Entwurf sind auf der Seite getrennt. Die bereits im Fach-Skill recherchierten W3C-Quellen werden gezielt für Prüfbedingungen referenziert, nicht als Basisskala ausgegeben. Vollständige Nutzungsrechte, Zeichenabdeckung und native Implementierungen wurden nicht neu abgenommen.

## Abdeckung TYP-01–15

Die folgenden Blocknamen identifizieren die veröffentlichten CMS- und MCP-Abschnitte. Diese Matrix ist Autorenmaterial, keine zusätzliche Pflichttabelle im Portal.

| Frage | Antwort/Fundstelle | Fachlicher Stand und Grenze |
| --- | --- | --- |
| TYP-01 | `type-start`, `type-language-platforms` | Web-Showcase in deutscher lateinischer Schrift; native Zuordnung offen |
| TYP-02 | `type-source-scope`, `type-fonts` | Export, aktuelle Dokumentation und lokaler Entwurf getrennt |
| TYP-03 | `type-fonts` | Verfügbare Fontdefinitionen/Dateien gelesen; Probe lädt ausgewählte Schriften; keine vollständige Zeichen-/Rechteprüfung |
| TYP-04 | Sechs `type-role-*`-Blöcke, `type-combination` | Zweck, Abgrenzung und gemeinsame Anwendung ausgearbeitet |
| TYP-05 | Sechs `type-role-*`-Blöcke | Eigenes Rezept je Rolle; keine Überschreibung der Contractwerte |
| TYP-06 | `type-combination`, `type-source-scope` | Vorrang, Gleichrangigkeit und unterschiedliche Hierarchien erklärt |
| TYP-07 | `type-reading` | Konkreter Showcase-Rhythmus und Textbreite, keine globale Abstandsskala |
| TYP-08 | `type-adaptation`, `type-checks` | Lange Inhalte und lokale Anpassungen dargestellt; Produktprüfung getrennt |
| TYP-09 | `type-checks`, `type-review` | Anforderungsquellen, lokaler Prüfumfang und offene Nachweise |
| TYP-10 | `type-adaptation` | Kontextabhängige Kürzung und Erreichbarkeit des Inhalts; lokale Komponentenwege offen |
| TYP-11 | `type-numbers`, Code-Rolle | Numerische Darstellung und Code unterschieden; regionale Formate bleiben Content-Entscheidung |
| TYP-12 | `type-language-platforms`, `type-fonts` | Lateinische Studie; weitere Sprach-/Schriftproben offen, kein RTL-Nachweis aus Fontdatei |
| TYP-13 | `type-fonts`, Vergleichsschalter | Geladene Ressourcen beobachtet; Systemschriftvergleich simuliert keinen vollständigen Ladeausfall |
| TYP-14 | `type-language-platforms` | Gemeinsame Rollen als mögliche Grundlage; native Rezepte und weitere Marken offen |
| TYP-15 | `type-review` | Nutzen und offene Annahme/Pflege/Prüfung konkret benannt; keine Verantwortlichen erfunden |

## Tatsächlich ausgeführte Prüfungen

- Vor Änderung alle 123 Seiten, Systeme und Implementierungen lokal gesichert; Payload-Verbindung mit `push:false`. Kein neuerer Typografieentwurf vorhanden.
- Veröffentlichung mit `expectedUpdatedAt`-Schutz und Transaktion über `apply-page-rework.ts`. Der Nachabgleich bestätigt ausschließlich `shadcn-typografie` geändert; 122 andere Seiten, Systeme und Implementierungen unverändert.
- Snapshot aktualisiert: Nur Typografie unter 116 veröffentlichten Seiten geändert; die 115 anderen Inhalte, Systembeziehungen, Implementierungen und Contractrevision bleiben unverändert.
- Typecheck erfolgreich. `check-page-rework.ts typografie` bestätigt Release/CMS/MCP-Gleichheit und HTTP 200 der Seite.
- Über echtes MCP fünf kompakte Abrufe bis zum vollständigen Inventar: 17 Abschnitte einschließlich Metadaten, alle sechs Rollen enthalten. Der Kombinationsabschnitt wurde über `get_documentation_section` vollständig gelesen und sein Hash mit dem Inventar abgeglichen. [Maschinenlesbarer Nachweis](shadcn-evidence.json).
- Browseransichten 1440 × 1000 und 390 × 844 visuell geprüft, ohne gemessenen horizontalen Seitenüberlauf. In der schmalen Ansicht zusätzlich lange Inhalte, erhöhte Abstände, verdoppelte Basis und Systemschrift gemeinsam aktiviert; Seite 390 px und Studie 348 px ohne inneren horizontalen Überlauf.
- Checkboxen per Maus beziehungsweise Fokus/Leertaste, Quellenvertiefung per Fokus/Enter bedient. Bei allen vier Optionen aktiv: Titel 64 px, Zeilenhöhe 96 px, Titel-Laufweite 7,68 px, Wortabstand 10,24 px; Systemschrift laut berechnetem Stil. Die Abstände beziehen sich nach Korrektur auf die jeweilige Schriftgrösse, nicht nur die Containerbasis.
- `document.fonts.ready` abgewartet; die drei deklarierten Proben-Faces Inter 400/600 und Mono 500 meldeten `loaded`. Das ist kein Beleg für jedes einzelne Zeichen. Ein zusätzlicher Per-Glyph-Nachweis war über den verfügbaren CDP-Scope nicht möglich (`CSS.enable` nicht unterstützt); es wird keiner behauptet.
- Statischer Build nach Korrektur eines zunächst fehlenden Profil-Imports erfolgreich. `check:static` bestätigt 198 HTML-Dateien, 116 Handbuchseiten, 69 Komponenten, 59.418 interne Verweise und 2.955 Assets ohne Backend. Das gilt für den lokalen Build, nicht für einen GitHub-Pages-Deploy.
- Bestehende MCP-Unitprüfungen erfolgreich.

## Grenzen

Der redaktionelle Anwendungsgang beschreibt anhand der Seite Rollenwahl, Kombination und Anpassung; reale Nutzungswirkung wurde nicht untersucht. Browserchecks betreffen die lokale Studie und ausgewählte Ansichten, keine vollständige WCAG-, Screenreader-, Sprach- oder native Abnahme. Die Dateien der Contractbibliothek wurden nicht geändert. Die seitenspezifische Vorschau bleibt eine kuratierte Darstellung; andere Design-Systeme sind nicht auf diese Seite oder Skala festgelegt.
