# Animations-Skill: Struktur und Übertragbarkeit

27.11.2026 · Analyse und gezielte Skill-Überarbeitung. Ausgangsstand `f7e5da0`. Die misslungene Seite des neuen Systems liegt für diesen Vergleich noch nicht vor; die folgenden Befunde erklären ein Risiko der bisherigen Anleitung, nicht den konkreten Lauf dieses fremden Agenten.

## Befund

Die gute Referenzseite entsteht aus zwei Leistungen: aus fachlichem Inhalt und aus einer eigens entwickelten Darstellung. Der Skill vermittelte vor allem die erste.

| Referenz in Arve | Bisherige Anleitung | Folge für eine neue Ausarbeitung |
| --- | --- | --- |
| Rollen werden ausgewählt; Auslöser, Aussage und Zustandsvergleich stehen kompakt zusammen. | Alle Angaben sind verlangt, ihre Darstellung bleibt weitgehend frei. | Die Angaben können als viele gleichartige Absätze je Rolle erscheinen. |
| Dauer und Verlauf haben getrennte, steuerbare Vergleiche. | Umfangreiche fachliche Regeln zum Vergleichen, aber kein vorangestellter Seitenentwurf. | Auch korrekte Erklärungen ergeben noch keine erkennbare Leseführung. |
| Eine Kontextanwendung zeigt dieselben Inhalte mit und ohne Bewegung. | Rezept, Unterbrechung, Präferenz, Fokus und Reduktion stehen in mehreren Arbeitsabschnitten. | Die gleiche Regel kann in Einleitung, Rollenbeschreibung, Rezept, Grundsatz und Fazit wiederkehren. |
| Details, weitere Regeln, Quellen und Archiv sind aufklappbar. | Ausführlichkeit ist freigestellt; Prüffragen und Lesefluss bleiben nur schwach getrennt. | Viel Vollständigkeitsprosa kann die eigentliche Auswahl verdecken. |
| Spezielle Darstellung wird nur für shadcn geladen. | Keine ausdrückliche Warnung, dass der Skill die Darstellung nicht mitliefert. | Ein anderes System kann denselben Textbestand als lange Folge generischer Textblöcke zeigen. |

Das ist keine Empfehlung, weniger Fachlichkeit zu verlangen. Die Frage ist, welche Information wo einmal verständlich dargestellt wird.

## Nachvollzogene Stellen

- `src/app/(docs)/systems/[system]/[...section]/page.tsx`: `ReworkedPage` wird über die Bedingung `shadcn` ausgewählt; andere Systeme erhalten den allgemeinen Inhaltsrenderer.
- `src/docs/page-reworks/registry.ts`: besonderer Renderer für `bewegung`.
- `src/docs/page-reworks/bewegung.tsx`: Neuordnung der Inhaltsblöcke, zwei steuerbare Timingvergleiche, reduzierte Kontextanwendung und aufklappbare Details. Rollenblöcke werden aus der allgemeinen Ausgabe herausgenommen.
- `src/docs/animation-roles.tsx`, `animation-semantics.json`, `animation-showcase.json`: eigene Rollenansicht und feste Referenzdaten ausserhalb der CMS-Texte. Nicht bereits automatisch systemübergreifend konfigurierbar.
- `scripts/content/page-reworks/bewegung.ts`: ausführliche CMS-Fassung einschliesslich Quellen und offener Punkte. Die knappe Erscheinung ist nicht mit einer ebenso knappen Rohtextfassung gleichzusetzen.

Im laufenden Portal den Rollenwähler bedient und die Referenzdarstellung angesehen. Zwei Vergleichsgruppen und sieben geschlossene Detailbereiche im DOM beobachtet. Keine neue Prüfung des Timings, nativer Plattformen oder Screenreader vorgenommen.

## Änderungen am Skill

- Einstieg auf 590 Wörter gekürzt, zuvor 1212. Fachliche Detailfragen und Prüfhilfe bleiben vorhanden.
- Neue Referenz `references/page-composition.md`: Leserfrage → Darstellung → ergänzende Regel. Empfohlene Bereiche: Bedeutung, Timing, Anwendung, weitere relevante Regeln, Quellen/offene Punkte.
- Seitenentwurf vor Fliesstext; Fachfragen erst als interne Abdeckungsprüfung. Keine sichtbaren Kapitel pro ANM-ID.
- Für wiederkehrende Regeln eine Hauptfundstelle festlegen. Unterschiedliche konkrete reduzierte Darstellungen bleiben sinnvoll; wiederholte allgemeine Aussagen nicht.
- Aussagekraft einer fehlenden visuellen Umsetzung benennen: Zustandsfolge und laufende Vorschau sind verschiedene Ergebnisse. Eine Demo-Spezifikation ersetzt ihre Implementierung nicht.
- shadcn-Darstellung und ihre festen Werte ausdrücklich nicht als portable Systemvorgabe behandeln.

Die gesamte Skill-Bibliothek ist nicht pauschal gekürzt. Entscheidend sind die früh auffindbare Ergebnisstruktur und das gezielte Nachladen der Fachprüfung. Die Regeln bleiben unabhängig von Payload, React und einer bestimmten Palette oder Zeitstaffel.

## Begrenzte Gegenprobe

Eine manuelle Ausarbeitung mit neuen, ausdrücklich fiktiven Webvorgaben liegt isoliert unter `.runtime/animation-skill-check/`: `source.md` und `page.md`. Sie übernimmt keine shadcn-Werte. Sie ordnet drei Bedeutungen, zwei tatsächlich vorgegebene Rezepte, einen Anwendungsablauf und konkrete offene Fragen. Unbekannte Dauerstaffel, native Rezepte und die laufende Vorschau werden nicht erfunden. Unterschiedliche Kurven werden nicht als reiner Dauereffekt ausgegeben.

Das ist eine redaktionelle Eigenprüfung des geänderten Ansatzes, kein unabhängiger Agententest und kein Beweis, dass der neue Skill bei jedem Modell den gewünschten Output erzeugt. Die konkrete misslungene Zielseite bleibt die nächste Vergleichsgrundlage.

## Prüfung und Abgrenzung

Skill-Format und lokale Markdownverweise geprüft; die 17 eindeutigen ANM-Fragen sind erhalten. Den geänderten Einstieg und die neue Kompositionsreferenz über den laufenden HTTP-MCP-Zugang jeweils in sechs Abschnitten gelesen und exakt mit den Originaldateien verglichen. Autoren-Dateien werden automatisch im Arve-Handbuch und über den bestehenden MCP-Lesezugang angeboten. Keine bestehende shadcn-Seite, kein Renderer und kein Datenbankinhalt geändert. Kein Commit oder Push vorgenommen.

Eine bessere übertragbare Darstellung erfordert gegebenenfalls zusätzlich eine systemunabhängige, mit Projektdaten konfigurierte Animationsvorlage. Der Skill allein kann die gegenwärtige shadcn-Beschränkung im Renderer nicht aufheben. Das wäre eine eigene Umsetzung.
