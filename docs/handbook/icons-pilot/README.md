# Fach-Skill für Icons

23.11.2026 · Autorenprototyp v0.1; inzwischen auf die shadcn-Seite angewendet. Noch kein unabhängiger Transferlauf.

## Ergebnis

- [Skill](../../../.agents/skills/arve-icons-handbook/SKILL.md)
- [Fachfragen ICO-01–16](../../../.agents/skills/arve-icons-handbook/references/icon-questions.md)
- [Quellen- und Prüfhilfe](../../../.agents/skills/arve-icons-handbook/references/evidence-and-checks.md)

Das Kapitel soll das Finden, Auswählen und Einsetzen von Zeichen ermöglichen. Der Arbeitsrahmen verbindet Gestaltungsregeln mit verständlicher Bedeutung und zugänglicher Benennung. Er verlangt keine bestimmte Bibliothek, keine feste Galerie und keine identischen Assets auf allen Plattformen.

## Abdeckung

| Bereich | Fragen |
| --- | --- |
| Aufgabe, Zielgruppe und Geltung | ICO-01 |
| Herkunft, Stand und Nutzungsbedingungen | ICO-02 |
| Katalog, Bedeutung, Suche und Originalkennung | ICO-03 |
| Rolle und Auswahl; mit oder ohne sichtbaren Text | ICO-04 |
| Stil, Form, Strich und erlaubte Änderungen | ICO-05 |
| Grössen, Skalierung und sichtbarer Umriss | ICO-06 |
| Ausrichtung, Textbezug, Abstand und Bedienfläche | ICO-07 |
| Textalternative, zugänglicher Name und Dekoration | ICO-08 |
| Farbe, Zustände, Themes und Bewegung | ICO-09, bedingt |
| Varianten und eigene Zeichen | ICO-10, bedingt |
| Sprache, Kultur und Richtung | ICO-11, bedingt |
| Wenig Platz, lange Labels und Vergrösserung | ICO-12, bedingt |
| Plattformen und Marken | ICO-13, bedingt |
| Ressourcenübergabe und fehlende Assets | ICO-14, bedingt |
| Ergänzungen, Änderungen und Pflege | ICO-15 |
| Anforderungen und tatsächliche Prüfungen | ICO-16 |

Grundfragen dürfen mit konkreten offenen Entscheidungen beantwortet werden. Bedingte Fragen werden nach tatsächlichem Bedarf aktiviert. Die Matrix strukturiert die Autorenarbeit; sie schreibt keine sichtbaren Abschnitte oder feste Seitenlänge vor.

## Bestehende shadcn-Seite

Gezielt gelesen: `scripts/content/page-reworks/icons.ts`, `src/docs/page-reworks/icons.tsx`, Blockübersicht der Seite `shadcn-icons` im aktuellen Snapshot sowie Icongrössen im aktuell ausgewählten `package/library/tokens.css` der Revision `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`.

Die Seite zeigt ein Zeichen mit sichtbarem Linktext, eine lokale Informationstaste, Statusbeispiele und Dekoration. Ihre SVGs sind selbst gezeichnet und werden ausdrücklich nicht als verbindliche Iconbibliothek bezeichnet. Ihre vorhandenen Quellenangaben lassen Katalog, Lizenz, Umfang und Plattformvarianten offen. Das ist der dokumentierte Seitenstand, kein neuer Nachweis, dass im gesamten Import keine solchen Ressourcen existieren.

Gefundene lokale Grössen umfassen etwa Badge 12, Breadcrumb 14, Button 16 und Item 20 px. Diese Werte belegen Komponentenrezepte, keine allgemeine Grössenauswahl. Vor einer Anwendung müssen die tatsächlich gewählte Zeichenquelle und ihre Ressourcen gezielt geprüft werden.

Für ein umfassenderes Kapitel fehlen insbesondere eine auflösbare Zeichenquelle/Bedeutungsreferenz, begründete Grössenwahl, Stil-/Strichregeln, optische Ausrichtung und Beispiele für deren Zusammenspiel. Der neue Skill erlaubt, fehlende Entscheidungen im Bestandsmodus offen zu lassen oder im beauftragten Showcase sichtbar zu entwerfen.

## Quellen und gestalterische Lehren

Im Browser am 23.11.2026 gezielt gelesen: [WAI – alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/), [Lucide React – Sizing](https://lucide.dev/guide/react/basics/sizing) und [Stroke width](https://lucide.dev/guide/react/basics/stroke-width). Die WAI-Hilfe betrifft insbesondere `img`; sie wird nicht als pauschale Attributanweisung auf jedes Asset übertragen. Lucide dient nur als Beispiel für die Trennung von Bibliotheksdefault, gerenderter Grösse und skalierendem/konstantem Strich. Der Skill wählt Lucide nicht automatisch für ein Zielsystem und übernimmt keine neue globale Grössenskala.

Die bisherigen Designer-Reviews zeigen: ein isolierter Effekt braucht Anwendungskontext; mobile Vergleiche müssen zusammen nachvollziehbar bleiben; beschriftete Werte nicht im Anschluss nochmals vollständig aufzählen. Entsprechend verlangt der Skill eine erklärbare Entscheidung am Beispiel statt einer dekorativen Symbolwand. Vergrösserte Ausschnitte dürfen helfen, ersetzen aber keine Darstellung in tatsächlicher Ausgabegrösse.

## Prüfung und Grenzen

Formprüfung des Skills erfolgreich, lokale Markdownverweise auflösbar, 16 eindeutige Fragen-IDs vollständig. Die dokumentierten Gegenbeispiele wurden beim redaktionellen Abgleich berücksichtigt: fehlende Quelle, unterschiedliche Grössenarten, optische Ungleichheit, unbekannte Bedeutung trotz Name, redundante Ansage, mehrdeutiges X, Richtung, Ressourcenfehler und Paketumfang ohne Systementscheidung. Dieser Verfasserabgleich ist kein unabhängiger Verhaltenstest.

Bei der ursprünglichen Skill-Erstellung wurden CMS, Renderer, Snapshot und Contracts nicht verändert. Keine neue Iconbibliothek installiert oder erzeugt, keine Nutzungsfreigabe behauptet, kein UI-/Screenreader-/Nutzertest der bestehenden Seite durchgeführt. Die anschliessende Anwendung ist unter [Ausarbeitung und tatsächliche Prüfungen](shadcn-application.md) dokumentiert. Eine unabhängige Nachprüfung steht noch aus.
