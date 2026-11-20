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
  expectedUpdatedAt: '2026-11-17T23:33:02.523Z',
  summary: 'Kleine Lücken verbinden eine Einheit; grössere Lücken trennen Gruppen.',
  content: [
    { blockType: 'study', kind: 'spacing', blockName: 'groups', title: 'Zugehörigkeit auf einen Blick',
      explanation: 'Gleicher Inhalt, zwei Anordnungen: Im ersten Beispiel stehen Label, Wert und Hilfe eng zusammen; zwischen den Angaben bleibt mehr Raum. Im zweiten Beispiel sind alle Lücken gleich gross. Die gleichmässige Verteilung macht die Zuordnung schwieriger. Alle gezeigten Abstände sind Demonstrationswerte.',
      source: 'Eigene Gestaltungsstudie; statische Darstellung, keine Eingabefelder und keine allgemeine Abstandsskala.' },
    text('labels', 'Beschriftung der Beispiele', 'Klar gruppiert', 'Gleichmässig verteilt', 'Innerhalb einer Angabe: Nähe', 'Zwischen Angaben: Trennung', 'Überall dieselbe Lücke', 'Demo · keine verbindliche Skala'),
    text('sample', 'Beispielinhalt', 'Name', 'Alex Beispiel', 'So erscheint dein Name im Profil.', 'E-Mail-Adresse', 'alex@example.com', 'Für Nachrichten zu deinem Konto.'),
    text('rules', 'Drei Entscheidungen für deinen Entwurf',
      'Zusammengehöriges zuerst ordnen: Halte Label, Wert und Hilfe näher zusammen als den Abstand zur nächsten Angabe. Prüfe die Zuordnung auch mit mehrzeiliger Hilfe.',
      'Innenraum bewusst setzen: Der Abstand zwischen Inhalt und Kontur schützt die Lesbarkeit. Der Abstand zwischen zwei Bereichen trennt ihre Inhalte. Eine zusätzliche Card ist nur nötig, wenn sie eine eigene Gruppe verständlicher macht.',
      'Dichte nach der Aufgabe wählen: Viele Werte vergleichen kann eine kompakte Ansicht rechtfertigen. Erhalte Schriftgrösse, klare Gruppen und erreichbare Ziele; ordne Gruppen auf schmaler Fläche neu an, bevor du alle Lücken verkleinerst.'),
    text('padding', 'Innenraum ist kein Gruppenabstand', 'Inhalt', 'Innenraum zur Kontur', 'Abstand zur nächsten Gruppe', 'Innenraum gehört zum Bereich; die Lücke dazwischen gehört zur Anordnung. Die farbigen Flächen markieren nur die Demonstration.'),
    text('target', 'Sichtbares Zeichen, Bedienfläche und Lücke', 'Zeichen', 'Bedienfläche', 'Abstand zwischen Zielen',
      'Das Zeichen liegt innerhalb seiner Bedienfläche. Erst ausserhalb dieser Fläche beginnt der Abstand zur nächsten Aktion. Mehr leere Fläche um ein Zeichen vergrössert das Ziel nur, wenn sie tatsächlich zur Bedienung gehört.',
      'Die gestrichelten Umrisse stehen hier für zwei getrennte Ziele; sie dürfen einander nicht überlagern. Die Darstellung ist schematisch und löst keine Aktion aus.'),
    text('check', 'Am echten Inhalt prüfen',
      'Kurze und lange Labels, mehrzeilige Hilfe und vergrösserte Schrift: Bleibt jede Hilfe ihrer Angabe zugeordnet? Bleiben Gruppen nach dem Umbruch erkennbar?',
      'Prüfe die tatsächlichen Bedienflächen samt Nachbaraktionen im Produkt. Die sichtbare Icongrösse oder eine statische Zeichnung belegt keine ausreichende Zielgrösse.'),
    text('values', 'Referenzwerte und ihr Geltungsbereich',
      'Die Reihe 4/8/12/16/24/32/48 px ist ein bisheriger redaktioneller Referenzvorschlag. Sie ist kein aus dem lokalen Export belegter Systemstandard; ihre verbindliche Verwendung bleibt offen.',
      'Im lokalen shadcn-Export sind Input-Innenabstände von 4 px vertikal und 10 px horizontal sowie ein Checkbox-Labelabstand von 8 px belegt. Diese Werte gelten für die jeweiligen Komponentenrollen. Sie legen keine allgemeine Skala, Containerbreite oder Rasterregel fest.',
      'Quelle: src/contracts/libraries/shadcn/5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed/tokens.json · input.paddingBlock, input.paddingInline, checkbox.labelGap. Die Pixelwerte der Anschauungsbeispiele sind ausschliesslich Demo.'),
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
