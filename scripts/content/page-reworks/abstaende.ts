import type { Page } from '../../../src/payload-types'

type Block = NonNullable<Page['content']>[number]
const node = (text: string) => ({ type: 'text', version: 1, text })
const base = { version: 1, direction: 'ltr' as const, format: '' as const, indent: 0 }
const text = (key: string, title: string, ...paragraphs: string[]): Block => ({
  blockType: 'text', blockName: key, body: { root: { ...base, type: 'root', children: [
    { ...base, type: 'heading', tag: 'h2', children: [node(title)] },
    ...paragraphs.map(p => ({ ...base, type: 'paragraph', children: [node(p)] })),
  ] } },
})

export const release = {
  expectedUpdatedAt: '2026-11-20T13:37:38.649Z',
  summary: 'Kleine Abstände zeigen, was zusammengehört. Grössere Abstände trennen Gruppen voneinander.',
  content: [
    { blockType: 'study', kind: 'spacing', blockName: 'groups', title: 'Zugehörigkeit auf einen Blick',
      explanation: 'Die beiden Beispiele zeigen denselben Inhalt. Im ersten stehen Beschriftung, Wert und Hilfe einer Angabe nah beieinander. Zur nächsten Angabe ist der Abstand grösser. Im zweiten sind die Abstände überall gleich gross. Dadurch ist schwerer zu erkennen, welche Hilfe zu welcher Angabe gehört. Alle gezeigten Abstände dienen der Veranschaulichung.',
      source: 'Eigene Gestaltungsstudie; statische Darstellung, keine Eingabefelder und keine allgemeine Abstandsskala.' },
    text('labels', 'Beschriftung der Beispiele', 'Klar gruppiert', 'Gleichmässig verteilt', 'Kleiner Abstand innerhalb der Angabe', 'Grösserer Abstand zur nächsten Angabe', 'Überall gleicher Abstand', 'Die Abstände im Beispiel bilden keine verbindliche Skala.'),
    text('sample', 'Beispielinhalt', 'Name', 'Alex Beispiel', 'So erscheint dein Name im Profil.', 'E-Mail-Adresse', 'alex@example.com', 'Für Nachrichten zu deinem Konto.'),
    text('rules', 'Drei Entscheidungen für deinen Entwurf',
      'Zusammengehöriges zuerst ordnen: Beschriftung, Wert und Hilfe einer Angabe stehen nah beieinander. Zur nächsten Angabe ist der Abstand grösser. Prüfe auch bei mehrzeiliger Hilfe, ob die Zuordnung erkennbar bleibt.',
      'Innenabstand bewusst wählen: Lass zwischen dem Inhalt und der Umrandung eines Bereichs genügend Platz, damit der Inhalt gut lesbar bleibt. Der Abstand zum nächsten Bereich trennt die Inhalte voneinander. Eine zusätzliche Card ist nur nötig, wenn sie eine eigene Gruppe verständlicher macht.',
      'Dichte nach der Aufgabe wählen: Wer viele Werte vergleicht, kann von einer kompakten Ansicht profitieren. Behalte die Schriftgrösse bei und achte auf klar erkennbare Gruppen und gut erreichbare Bedienflächen. Ordne Gruppen auf schmaler Fläche neu an, bevor du alle Abstände verkleinerst.'),
    text('padding', 'Innenabstand und Abstand zwischen Gruppen', 'Inhalt', 'Innenabstand zur Umrandung', 'Abstand zur nächsten Gruppe', 'Der Innenabstand liegt zwischen dem Inhalt und der Umrandung seines Bereichs. Der Abstand zwischen den Gruppen liegt ausserhalb dieser Bereiche. Die farbigen Flächen dienen nur der Veranschaulichung.'),
    text('target', 'Sichtbares Zeichen, Bedienfläche und Abstand', 'Zeichen', 'Bedienfläche', 'Abstand zwischen Zielen',
      'Das Zeichen liegt innerhalb seiner Bedienfläche. Erst ausserhalb dieser Fläche beginnt der Abstand zur nächsten Aktion. Mehr Platz um ein Zeichen vergrössert die Bedienfläche nur, wenn sich die Aktion auch dort auslösen lässt.',
      'Die gestrichelten Umrisse stehen hier für zwei getrennte Ziele; sie dürfen einander nicht überlagern. Die Darstellung ist schematisch und löst keine Aktion aus.'),
    text('check', 'Am echten Inhalt prüfen',
      'Prüfe die Anordnung mit kurzen und langen Beschriftungen, mehrzeiliger Hilfe und vergrösserter Schrift. Ist noch erkennbar, welche Hilfe zu welcher Angabe gehört? Bleiben die Gruppen auch nach dem Umbruch erkennbar?',
      'Prüfe im Produkt die tatsächlichen Bedienflächen und die Abstände zu benachbarten Aktionen. Aus der sichtbaren Icongrösse oder einer statischen Zeichnung lässt sich nicht ableiten, ob die Ziele ausreichend gross sind.'),
    text('values', 'Referenzwerte und ihr Geltungsbereich',
      'Die Reihe 4/8/12/16/24/32/48 px ist ein bisheriger redaktioneller Referenzvorschlag. Sie ist kein aus dem lokalen Export belegter Systemstandard; ihre verbindliche Verwendung bleibt offen.',
      'Im lokalen shadcn-Export sind für Input Innenabstände von 4 px vertikal und 10 px horizontal belegt. Zwischen Checkbox und Beschriftung sind es 8 px. Diese Werte gelten für die jeweiligen Komponentenrollen. Sie legen keine allgemeine Skala, Containerbreite oder Rasterregel fest.',
      'Quelle: src/contracts/libraries/shadcn/5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed/tokens.json · input.paddingBlock, input.paddingInline, checkbox.labelGap. Die Pixelwerte der Beispiele dienen ausschliesslich der Veranschaulichung.'),
    text('sources', 'Quellen und Prüfgrenzen',
      'WCAG 2.5.8 (AA) fordert grundsätzlich Zeigerziele von mindestens 24 × 24 CSS-Pixeln. Ausnahmen betreffen ausreichenden Abstand, gleichwertige Ziele, eingebettete Ziele im Text, unveränderte Browsersteuerung und wesentliche beziehungsweise rechtlich vorgeschriebene Darstellung.',
      'Bei der Abstandsausnahme für kleinere Ziele dürfen gedachte Kreise mit 24 CSS-Pixeln Durchmesser um ihre Mittelpunkte weder andere Ziele noch entsprechende Kreise weiterer kleiner Ziele schneiden. Eine beliebige 24-px-Lücke ist daher keine allgemeine Regel.',
      'Die WAI-Erläuterung wurde am 20.11.2026 gelesen. Das ist eine Orientierung für Web-Zeigerziele und keine pauschale Grössenvorgabe für jede Plattform. Diese Seite bescheinigt keine Konformität einer Anwendung.'),
    { blockType: 'text', blockName: 'links', body: { root: { ...base, type: 'root', children: [
      { ...base, type: 'heading', tag: 'h2', children: [node('Weiter gestalten')] },
      ...[
        ['Container und Raster im Layout wählen', '/systems/shadcn/layout'],
        ['Typografie und Textabstände', '/systems/shadcn/typografie'],
        ['WAI · Target Size (Minimum)', 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html'],
      ].map(([label, url]) => ({ ...base, type: 'paragraph', children: [{ ...base, type: 'link', fields: { url, linkType: 'custom', newTab: false }, children: [node(label)] }] })),
    ] } } },
  ] satisfies Page['content'],
}
