import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = { version: 1, direction: 'ltr' as const, format: '' as const, indent: 0 }
const node = (text: string) => ({ type: 'text', version: 1, text })
const text = (blockName: string, title: string, ...paragraphs: string[]): Block => ({
  id: ({ comparison: '6b004e19522e8e5444d75e8e', rules: '6b004e19522e8e5444d75e8f', overlay: '6b004e19522e8e5444d75e90', radii: '6b004e19522e8e5444d75e91', check: '6b004e19522e8e5444d75e92', sources: '6b004e19522e8e5444d75e93' } as Record<string, string>)[blockName],
  blockType: 'text', blockName, body: { root: { ...base, type: 'root', children: [
    { ...base, type: 'heading', tag: 'h2', children: [node(title)] },
    ...paragraphs.map(p => ({ ...base, type: 'paragraph', children: [node(p)] })),
  ] } },
})
export const release = {
  expectedUpdatedAt: '2026-11-20T13:41:45.899Z',
  summary: 'Inhalte mit Abstand gruppieren, bei Bedarf umranden und überlagerte Flächen im Zusammenhang zeigen.',
  content: [
    text('comparison', 'Wann braucht eine Gruppe eine Umrandung?',
      'Offene Gruppe', 'Begrenzte Fläche', 'Schwebende Fläche',
      'Kontakt', 'Alex Beispiel', 'alex@example.com',
      'An Überschrift und Abstand ist erkennbar, dass die Angaben zusammengehören.',
      'Die Kontur fasst dieselben Angaben zu einem Bereich zusammen.',
      'Durch den Schatten wirkt die Fläche, als läge sie über dem Untergrund.',
      'Die Beispiele zeigen dieselben Inhalte auf unterschiedlich gestalteten Flächen. Ihre Radien und Schatten dienen nur der Veranschaulichung.'),
    text('rules', 'Drei Entscheidungen für deinen Entwurf',
      'Beginne mit Überschrift und Abstand. Umrande einen eigenständigen Bereich, wenn er sonst nicht klar erkennbar ist. Entferne ineinander verschachtelte Cards, wenn sie nicht zusätzlich verdeutlichen, welche Inhalte zusammengehören.',
      'Übernimm den Radius aus den Vorgaben der gewählten Komponente. An der Rundung allein ist nicht erkennbar, ob eine Fläche eine Aktion auslöst oder über anderem Inhalt liegt. Text, Position und Kontur müssen dies ebenfalls verständlich machen.',
      'Zeige bei einer überlagerten Fläche, zu welchem Auslöser sie gehört. Prüfe, ob sie sich auch auf dunklen Flächen und ohne sichtbaren Schatten vom Untergrund abhebt. Wie sich der Fokus bewegt, wie die Fläche geschlossen wird und ob der Hintergrund bedienbar bleibt, richtet sich nach der gewählten Komponente und ihrem Pattern.'),
    text('overlay', 'Kontur und Schatten einzeln vergleichen',
      'Nur Kontur', 'Nur Schatten', 'Kontur und Schatten',
      'Kontakt', 'Weitere Aktionen', 'Kontakt bearbeiten', 'Kontakt teilen',
      'Statische Darstellung: Unter «Weitere Aktionen» liegt eine Fläche über den Kontaktdaten. Der Auslöser bleibt sichtbar; die Fläche verdeckt einen Teil des Untergrunds. Die drei Varianten ändern nur Kontur und Schatten.',
      'Die dargestellten Aktionen lassen sich nicht bedienen. Die Beispiele zeigen weder das Verhalten eines Dialogs noch eines Popovers. Die Schatten dienen der Veranschaulichung; sie geben keine festen Stufen für die Höhe über dem Untergrund vor.'),
    text('radii', 'Radien der Komponenten aus dem Export',
      'Checkbox', '4 px', 'Kleiner Button', '6 px', 'Input und Standardbutton', '10 px', 'Switch', 'Pillenform',
      'Die Formen zeigen nur die jeweilige Rundung. Ihre Grössen und inneren Abstände dienen der Veranschaulichung; sie bilden keine vollständigen Komponenten nach. Die Werte gelten für die genannten Komponenten und bilden keine allgemeine Radiusskala.'),
    text('check', 'Mit deinem Inhalt prüfen',
      'Bleiben lange Texte und Gruppen auch in schmalen Ansichten lesbar? Reicht Abstand statt einer weiteren Card? Sind Kontur und Inhalt auch ohne Schatten unterscheidbar?',
      'Prüfe im Produkt beide Themes und veränderte Kontrasteinstellungen. Prüfe bei echten Überlagerungen zusätzlich die Tastaturbedienung, den Fokuswechsel und das Schliessen. Die statischen Beispiele bestätigen dieses Verhalten nicht.'),
    text('sources', 'Quellen und offene Festlegungen',
      'Lokaler shadcn-Export: src/contracts/libraries/shadcn/5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed/tokens.json. button.radiusSm = 6 px, button.radius = 10 px, checkbox.radius = 4 px, input.radius = 10 px. switch.radius = 9999 px wird hier als Pillenform gezeigt.',
      'Der frühere Portalwert 7 px gehört zu einem anderen Gestaltungsstand. Er gibt keinen gemeinsamen Basisradius für diese Komponenten vor.',
      'Im gelesenen lokalen Bestand ist nicht allgemein festgelegt, welche Flächen über anderen liegen, welche Schattenstufen gelten oder welche zusätzlichen Aufgaben Flächen übernehmen. Die Vergleichsflächen und ihre Schatten wurden für diese Beispiele gestaltet. Damit sind sie noch nicht für eine Anwendung freigegeben.'),
    {"id": "6b004e19522e8e5444d75e94", "kind": "shape", "title": "Wie Kontur und Schatten eine Fläche verändern", "explanation": "An Überschrift und Abstand ist erkennbar, welche Angaben eine offene Gruppe bilden. Eine begrenzte Fläche fasst den Inhalt zusätzlich mit einer Kontur ein. Eine schwebende Fläche wirkt, als läge sie über anderem Inhalt. Kontur, Fläche und Schatten wirken dabei zusammen. Die Beispiele zeigen nicht, wie sich ein Dialog verhält. Die Radiusübersicht enthält die Werte aus dem Komponentenexport: Checkbox 4 px, kleiner Button 6 px, Input und Standardbutton 10 px, Switch als Pillenform. Daraus lässt sich keine allgemeine Skala für Radien oder die Höhe von Flächen über dem Untergrund ableiten.", "source": "Radiuswerte aus dem lokalen tokens.json; Flächen und Schatten wurden für die schematischen Beispiele gestaltet.", "revision": "5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed", "blockName": "original-study", "blockType": "study"},
    { id: '6b004e19522e8e5444d75e95', blockType: 'text', blockName: 'links', body: { root: { ...base, type: 'root', children: [
      { ...base, type: 'heading', tag: 'h2', children: [node('Weiter gestalten')] },
      ...[
        ['Abstände: Inhalte gruppieren und Platz schaffen', '/systems/shadcn/abstaende'],
        ['Farbe: Fläche und Kontur', '/systems/shadcn/farben'],
        ['Themes und visuelle Zustände', '/systems/shadcn/themes-und-zustaende'],
        ['Komponenten auswählen', '/systems/shadcn/komponenten-auswahl'],
      ].map(([label,url]) => ({ ...base, type: 'paragraph', children: [{ ...base, type: 'link', fields: { url, linkType: 'custom', newTab: false }, children: [node(label)] }] })),
    ] } } },
  ] satisfies Page['content'],
}
