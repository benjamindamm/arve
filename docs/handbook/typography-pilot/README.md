# Fach-Skill für ein umfassendes Typografiekapitel

23.11.2026 · Prototyp mit redaktioneller Überarbeitung nach UI-Designer-Review (Fragenkatalog v0.2). Der Skill liefert einen fachlichen Fragen- und Arbeitsrahmen, keine universelle Schrift- oder Grössenskala.

## Ergebnis

- [Skill: Typografiekapitel erarbeiten](../../../.agents/skills/arve-typography-handbook/SKILL.md)
- [Fragenkatalog TYP-01–15](../../../.agents/skills/arve-typography-handbook/references/typography-questions.md)
- [Quellen und Prüfhilfe](../../../.agents/skills/arve-typography-handbook/references/evidence-and-checks.md)

Wie beim Farb-Skill sind Grundfragen, bedingte Fragen und Vertiefungen getrennt. Der Artikel darf ausführlich sein. Für Leser müssen Rollenwahl, Einsatz und Grenzen auffindbar bleiben; die Autorenmatrix kann daneben oder in einer Vertiefung liegen.

## Fachliche Abdeckung

| Bereich | Fragen |
| --- | --- |
| System, Quellen und tatsächlicher Stand | TYP-01/02 |
| Schriftfamilien, Schnitte, Fallbacks und Ressourcen | TYP-03 |
| Textrollen und zusammenhängende typografische Rezepte | TYP-04/05 |
| Semantische gegenüber sichtbarer Hierarchie | TYP-06 |
| Leseführung, Textbreite, Absätze und Betonung | TYP-07 |
| Längere Inhalte und nutzerseitige Anpassung | TYP-08 |
| Anforderungen und tatsächliche Nachweise | TYP-09 |
| Begrenzte Flächen und Kürzung | TYP-10, bedingt |
| Zahlen, Code, Kennungen und besondere Zeichen | TYP-11, bedingt |
| Sprachen, Schriftsysteme und Schreibrichtung | TYP-12, bedingt |
| Laden, Ersatzschrift und Ressourcenwechsel | TYP-13, bedingt |
| Marken-, Plattform- und Modusunterschiede | TYP-14, bedingt |
| Offene Entscheidungen, Verantwortung und Änderungen | TYP-15 |

Diese Themen müssen nicht jeweils einen eigenen sichtbaren Abschnitt bilden. Der Skill soll nach dem beauftragten Kontext entscheiden, welche Fragen zusammen erklärt oder präzise verlinkt werden. Eine vollständige Dokumentation kann etwa eine vorhandene Systemschrift ohne Download-Ressourcen beschreiben; „umfassend“ bedeutet nicht, zusätzliche Funktionen oder Textrollen zu erfinden.

## Gestalterische Ergänzungen nach dem Review

Der unabhängige UI-Designer hat den Skill und seine Referenzen gelesen, keine erzeugte Typografieseite oder laufende Oberfläche getestet. Seine Hauptkritik: Die Absicherung von Aussagen war konkreter als die Anleitung zur gestalterischen Wahl und Kombination.

Die Überarbeitung ergänzt vier Punkte, ohne neue Frage-IDs, Pflichtrollen oder Seitenlängen einzuführen:

1. **Herleitung im Entwurf:** Textaufgaben und relevante Gestaltungsziele führen zur Schriftwahl, zu Rezepten und ihrem Zusammenspiel. Alternativen und Zielkonflikte werden bei tatsächlichem Entscheidungsbedarf erklärt. Im Bestandsmodus werden keine historischen Absichten erfunden.
2. **Kombination als fachlicher Kern:** TYP-04/06 erklären nun Rollenbeziehungen, Vorrang und Gleichrangigkeit. Die Darstellungsform bleibt frei; isolierte Muster allein beantworten die Kombinationsfrage nicht.
3. **Anwendung über Zuständigkeitsgrenzen:** Textbreite, Abstand und Komponenten behalten ihre führenden Definitionen. Die Typografieseite erläutert trotzdem ihren gestalterischen Zusammenhang.
4. **Redaktioneller Anwendungsgang:** An einer Textaufgabe aus dem vereinbarten Umfang Rollenwahl, Kombination und eine relevante Anpassung anhand der Kapitel-Aussagen nachvollziehen. Fehlendes Zusatzwissen bleibt sichtbar. Das ist kein Produkt-/Nutzungs-/Konformitätstest und keine Pflicht zu einem vollständigen Screenbeispiel.

Diese Änderungen adressieren den gelesenen Arbeitsrahmen. Sie belegen noch nicht, dass ein anderer Agent damit eine gute Fachseite erstellt. Die ursprüngliche Bestandsaufnahme und Quellenprüfung unten bleiben unverändert gültig; eine erneute unabhängige Anwendung steht aus.

## Bestandsaufnahme als Startpunkt

Im gespeicherten shadcn-Handbuch (`scripts/content/handbook-snapshot.json`, aufgenommen 21.11.2026) wurde die Seite `shadcn-typografie` gezielt gelesen. Vorhanden sind Rollenbeschreibungen, eine Gestaltungsstudie, Textproben für lange Inhalte, erhöhte Abstände, eine lokale 200%-Ansicht, Ersatzschriftvergleich, Zahlenbeispiele sowie benannte Prüfgrenzen.

Die Seite erklärt selbst, dass ihre Beispielgrössen und Zeilenlängen keine systemweite Skala festlegen. Sie berichtet über Inter und ein Inputrezept von 14 px / 20 px aus dem damals gelesenen Export. Diese Aussagen wurden hier als **Inhalt der vorhandenen Seite** aufgenommen, nicht als neuer Nachweis der aktuellen Ressourcen oder aller Komponenten. Weder tatsächliche Schriftladung noch Nutzungsrechte oder vollständige Zeichenvorräte wurden in diesem Auftrag geprüft.

Der Renderer `src/docs/page-reworks/typografie.tsx` liest teils positionsbezogene Textzeilen. Das ist eine vorhandene Darstellungsbindung und keine Inhaltsanforderung des neuen Skills. Der neue Skill verlangt keine identische Textfolge und keinen Nachbau dieser Vorschau.

## Gezielt geprüfte fachliche Grenzfälle

Beim Verfassen wurden die Fragen gegen folgende Gegenbeispiele abgeglichen:

- Nur Systemschriften: TYP-03 lässt eine belegte Systemschrift-/Fallbackzuordnung ohne Downloadartefakt zu.
- Inputrezept statt Lesetextskala: TYP-02/04/05 und die Ableitungshinweise halten den Scope getrennt.
- Grosser Card-Titel: TYP-06 trennt Rolle und visuelles Rezept von semantischem Rang.
- Unbelegter 600-Schnitt: TYP-03/05 unterscheiden numerische CSS-Angabe und tatsächlich verfügbare Schriftressource.
- Einzelne Sprache: TYP-12 fordert keine frei erfundene RTL-Ausstattung; zukünftiger Bedarf bleibt ggf. offen.
- Native Skalierung: TYP-08/14 übernehmen keine CSS-Einheiten oder Browsernachweise als native Freigabe.
- Textabstände: TYP-09 und die Prüfhilfe behandeln die gleichzeitigen Anpassungen als Prüfbedingungen, nicht als Basisskala.
- Umfangreicher Artikel: Die Gewichtung erlaubt lange Herleitungen und integrierte Quellen, statt Kürze oder separate Nachweisdateien vorzuschreiben.

Dies ist ein redaktioneller Gegencheck des Verfassers, kein unabhängiger Verhaltenstest. Er bestätigt keine tatsächliche Produktfähigkeit.

## Quellen und Grenzen

Für die Fachstruktur wurden der bestehende Arve-Inhaltsstandard FND-TYP/FND-01–06 und die Erfahrungen des Farb-Piloten ausgewertet. Am 23.11.2026 im Browser gezielt gelesen: [shadcn Typeset](https://ui.shadcn.com/docs/typeset), [W3C Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html), [W3C Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html), [W3C Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). Deren eingegrenzte Verwendung steht in der Prüfhilfe; sie legen keine neue lokale Typografieskala fest.

Keine neue Typografieseite im CMS veröffentlicht, kein Fontpaket ausgetauscht und keine Contracts oder vorhandenen Inhalte geändert. Kein neuer Browser-/AT-Test der Arve-Typografieseite oder einer nativen Implementierung. Die Skill-Verteilung über MCP ist nicht Bestandteil dieses Schritts.

## Auf die shadcn-Seite angewendet

Der Skill v0.2 wurde inzwischen auf die bestehende veröffentlichte Typografieseite angewendet. Das Kapitel enthält eine explizit lokale Showcase-Skala, Rollenwahl und Kombination sowie die Trennung von Exportbefunden, Entwurfsentscheidungen und Nachweisen. [Ausarbeitung, Fragenzuordnung und tatsächliche Prüfungen](shadcn-application.md).

Dies ist die Anwendung durch den Hauptagenten, noch kein unabhängiger Transferlauf. Der separate UI-Designer hatte zuvor den Arbeitsrahmen geprüft, nicht diese fertiggestellte Seite.

## Weitere Präzisierung: verfügbare Schriftschnitte

Auf Nutzerhinweis wurde die Erklärung des Schriftmaterials deutlicher von den Textrollen getrennt: Bei mehreren relevanten Schnitten sollen Wirkung und Einsatz nachvollziehbar werden; ein Vergleich desselben Texts ist dafür eine mögliche Form. Nur tatsächlich verfügbare oder ausdrücklich als Entwurf gekennzeichnete Schnitte/Achsen zeigen. Die veröffentlichte Seite zeigt inzwischen alle vier vorhandenen Inter-Gewichte, drei Überschriftengrössen und drei Laufweiten direkt im Vergleich. [Ergänzungen und tatsächliche Prüfungen](shadcn-examples.md).

## Nächste Erprobung

Den Skill an einer echten oder ausdrücklich synthetischen zweiten Quellenlage anwenden: etwa Designnotiz und CSS mit abweichender Lesetextgrösse, unvollständiger Schnittverfügbarkeit und konkretem Sprachbedarf. Ein frischer Bearbeiter erhält nur Skill und Quellen. Nötige Rückfragen, erzeugte Seite und fachliche Zuordnung prüfen. Zusätzlich an einer Textaufgabe nachvollziehen, ob die Seite Rollenwahl, Kombination und eine relevante Anpassung erklärt. Im Entwurfsmodus die Herleitung aus Gestaltungszielen beurteilen; im Bestandsmodus fehlende Anwendungsvorgaben sichtbar halten. Fehlende Definitionen dürfen weder als globale Skala ausgegeben noch durch allgemeine Prosa verdeckt werden. Dieser unabhängige Durchlauf steht noch aus.
