# Abstände und Grössen: Skalen, Quellen und Prüfungen

Bei Frameworkbezug, Einheiten, Bedienflächen oder behaupteten Nachweisen gezielt lesen. Onlinequellen am 23.11.2026 gelesen; veränderliche Angaben vor späterer Nutzung am gewählten Stand prüfen. Die Quellen setzen nicht automatisch lokale Designentscheidungen in Kraft.

## Basiseinheit, angebotene Stufen, Einsatz und Seitenraster

Eine 4er-Basis beschreibt eine mögliche Ableitung von Werten. Ein System kann daraus nur bestimmte Stufen anbieten. Eine Anwendungsregel erklärt danach, welcher Wert etwa Beschriftung und Feld verbindet oder zwei Gruppen voneinander trennt. Diese Ebenen getrennt dokumentieren; ein numerisch erzeugbarer Wert ist nicht automatisch für jeden Einsatz vorgesehen.

Ein Seitenraster beschreibt Spalten, Regionen und deren Anordnung. Es kann dieselben Abstandswerte verwenden, ist aber kein Synonym für die Abstandsskala. Eine Komponentenabmessung, feste Kontur oder optische Korrektur braucht jeweils ihren tatsächlichen Scope. Eine 4-/8-px-Logik ist kein Anlass, belegte abweichende Werte mechanisch zu ändern.

## Tailwind als mögliche technische Abbildung

Gelesen: [Theme variables / Default theme variable reference](https://tailwindcss.com/docs/theme#default-theme-variable-reference) und [Padding](https://tailwindcss.com/docs/padding).

Der gelesene Standard definiert `--spacing: 0.25rem`. Numerische Padding-Utilities berechnen ihren Wert aus dieser Variablen und dem Zahlenfaktor. Bei 16 CSS-Pixeln Root-Schriftgrösse entspricht die Basis 4 CSS-Pixeln: `p-1` → 4, `p-2` → 8, `p-4` → 16. Die tatsächliche Root-Grösse und eine abweichende Theme-Konfiguration können andere Werte ergeben.

Die Padding-Dokumentation zeigt auch `p-px` und eigene Werte wie `p-[5px]`. Deshalb keine strenge Ganzzahl-4er-Pflicht aus dem Framework ableiten. Ein Projekt muss bewusst festlegen, welche seiner möglichen Werte und Ausnahmen es als gestalterische Auswahl anbietet. Eine allgemeine Skillvorgabe übernimmt diese Auswahl nicht ungefragt.

Projektversion und Konfiguration prüfen; ein älteres oder angepasstes Projekt kann andere Definitionen besitzen. Tailwind-Utility, lokaler Token, Designvariablenname und native Grösse sind verschiedene Referenzen. Der Skill benötigt Tailwind nicht.

## Grössen und Bedienflächen

Gelesen: [W3C Understanding SC 2.5.8, Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) sowie [SC 2.5.5, Enhanced](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html).

Bei gewählter WCAG-2.2-Anforderung sind Geltung und Ausnahmen zu berücksichtigen. Das Minimum-Kriterium auf AA nennt grundsätzlich 24 × 24 CSS-Pixel für Zeigerziele und beschreibt mehrere Ausnahmen. Die Abstandsausnahme kleinerer Ziele verwendet gedachte Kreise von 24 CSS-Pixeln Durchmesser um ihre Bounding-Box-Mittelpunkte; daraus folgt keine allgemeine 24-px-Lücke. Enhanced auf AAA nennt 44 × 44 CSS-Pixel und hat eigene Ausnahmen. Mindestkriterium, lokale Komfortentscheidung und Plattformempfehlung sind getrennte Aussagen.

Nicht automatisch auf dekorative Icons, statische Boxen, jede Plattform oder ausschliesslich Touch übertragen. Für reale Ziele tatsächliche aktive Flächen, Nachbarn und jeweilige Ausnahme prüfen. Ein statisches Zielrechteck oder vorhandenes Padding ist kein Aktivierbarkeitsnachweis. Grössere Fläche hilft nur, wenn sie tatsächlich zum Ziel gehört; ein Abstand allein erweitert es nicht.

## Was eine Messung tatsächlich belegt

- Token-/CSS-Werte belegen eine Definition für den gelesenen Stand; sie bestätigen nicht automatisch tatsächliche Abstände oder Verhalten nach Umbruch.
- Einheiten, Bezugsgrössen, Boxmodell und angewandte Bedingungen gehören zur Messung. Aussen-/Innenabstand, Kontur, Inhalt und sichtbare Form unterscheiden; einen Screenshot nicht unbemerkt in physische oder native Einheiten umrechnen.
- Beim vorhandenen Kontext mit längeren Beschriftungen, mehrzeiliger Hilfe, angepasstem Text und weniger Platz prüfen, ob Zuordnung und Zugang erhalten bleiben. Erwartungen und tatsächliche Ergebnisse trennen. Ein schmaler Screenshot allein ist keine Reflowfreigabe.
- Bei bedienbaren Zielen nicht nur Dimensionen lesen, sondern die tatsächliche Aktivierung und benachbarte Ziele im gewählten Umfang betrachten. Nicht ausgeführte Prüfungen bleiben offen.
- Native Quellen und Einheiten bei entsprechendem Auftrag gesondert heranziehen. Gleiche Zahl und gleicher Rollenname sind keine Bestätigung identischer Fläche oder Bedienbarkeit.

Ein redaktioneller Anwendungsgang prüft, ob die Anleitung eine Wahl ermöglicht. Rechenprüfung, gerenderte Darstellung und beobachtete Nutzung liefern weitere, unterschiedliche Nachweise. Keiner davon allein bestätigt das gesamte Design-System.

## Beziehungen, Weissraum und Innen-/Aussenabstand

Am 24.11.2026 gezielt gelesen: [Carbon – Spacing, Designing with space](https://www.carbondesignsystem.com/building-blocks/foundations/spacing/overview). Die Quelle erläutert Nähe und wiederkehrende Abstandsmuster als Beziehungssignale sowie Weissraum als Mittel zur Gruppierung ohne zusätzliche Trennlinien. Sie behandelt die Nutzung von Werten innerhalb und zwischen Komponenten. Das begründet gestalterische Orientierung, übernimmt aber weder Carbons Zahlen noch seine Komponenten als Regel eines anderen Systems.

Für die Ausarbeitung zuerst Einheiten und Themen benennen, dann sichtbare Trennung gestalten. Abstand innerhalb einer Einheit, Abstand zwischen Einheiten im selben Thema und Abstand zwischen Themen bilden mögliche Entscheidungsebenen. Die tatsächliche Aufgabenstruktur kann anders sein. Eine nützliche Ausgangsheuristik ist engere Nähe bei stärkerem Bezug; kein universelles Verhältnis und keine Zahlenformel daraus machen.

Innenraum hält Inhalt von der Grenze seiner Fläche fern; Abstand nach aussen hält Flächen auseinander. Die Grössen können unabhängig voneinander gewählt werden. Gemeinsame Kanten und konsistente Muster unterstützen die Ordnung. Textmetriken, Konturen und Verschachtelung beeinflussen den sichtbaren Eindruck. Vergleiche deshalb nicht nur Tokenwerte, sondern deren tatsächliche Kombination. Der didaktische Vergleich kann Innenraum ändern und Aussenabstand bewusst konstant halten.
