import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = { version: 1, direction: 'ltr' as const, format: '' as const, indent: 0 }
const node = (text: string) => ({ type: 'text', version: 1, text })
const text = (blockName: string, title: string, ...paragraphs: string[]): Block => ({
  blockType: 'text', blockName, body: { root: { ...base, type: 'root', children: [
    { ...base, type: 'heading', tag: 'h2', children: [node(title)] },
    ...paragraphs.map(p => ({ ...base, type: 'paragraph', children: [node(p)] })),
  ] } },
})
export const release = {
  expectedUpdatedAt: '2026-11-17T23:33:02.552Z',
  summary: 'Mit Abstand gruppieren, mit Konturen begrenzen und Überlagerungen im Kontext zeigen.',
  content: [
    text('comparison', 'Wie viel Grenze braucht der Inhalt?',
      'Offene Gruppe', 'Begrenzte Fläche', 'Schwebende Fläche',
      'Kontakt', 'Alex Beispiel', 'alex@example.com',
      'Überschrift und Abstand verbinden die Angaben.',
      'Die Kontur fasst dieselben Angaben zu einem Bereich zusammen.',
      'Der Schatten deutet eine Ebene über dem Untergrund an.',
      'Schematische Studie · gleiche Inhalte, unterschiedliche Flächen. Radien und Schatten dieser Flächen sind Demonstrationswerte.'),
    text('rules', 'Drei Entscheidungen für deinen Entwurf',
      'Grenze nur mit Zweck: Beginne mit Überschrift und Abstand. Füge eine Kontur hinzu, wenn ein eigenständiger Bereich sonst nicht klar erkennbar ist. Entferne verschachtelte Cards, die keine zusätzliche Beziehung erklären.',
      'Radius nach Komponente: Übernimm den belegten Radius der gewählten Komponente. Rundung allein erklärt weder eine Aktion noch eine Überlagerung; Text, Position und Kontur müssen die Bedeutung mittragen.',
      'Überlagerung im Kontext: Zeige, zu welchem Auslöser die Fläche gehört. Prüfe die Trennung vom Untergrund auch auf dunklen Flächen und ohne sichtbaren Schatten. Fokusführung, Schliessen und die Bedienbarkeit des Hintergrunds gehören zur gewählten Komponente und ihrem Pattern.'),
    text('overlay', 'Kontur und Schatten einzeln vergleichen',
      'Nur Kontur', 'Nur Schatten', 'Kontur und Schatten',
      'Kontakt', 'Weitere Aktionen', 'Kontakt bearbeiten', 'Kontakt teilen',
      'Statische Darstellung: Unter «Weitere Aktionen» liegt eine Fläche über den Kontaktdaten. Der Auslöser bleibt sichtbar; die Fläche verdeckt einen Teil des Untergrunds. Die drei Varianten ändern nur Kontur und Schatten.',
      'Die dargestellten Aktionen sind keine bedienbaren Elemente. Weder Dialog- noch Popoververhalten wird hier demonstriert. Die Schatten sind Anschauungswerte, keine Elevationsstufen.'),
    text('radii', 'Belegte Radien nach Komponente',
      'Checkbox', '4 px', 'Kleiner Button', '6 px', 'Input und Standardbutton', '10 px', 'Switch', 'Pillenform',
      'Die Formen zeigen nur die jeweilige Rundung. Grössen und Innenräume sind schematisch; sie bilden keine vollständigen Komponenten nach. Die Werte bilden keine allgemeine Radiusskala.'),
    text('check', 'Mit deinem Inhalt prüfen',
      'Bleiben lange Texte und Gruppen auf schmaler Fläche lesbar? Reicht Abstand statt einer weiteren Card? Sind Kontur und Inhalt auch ohne Schatten unterscheidbar?',
      'Prüfe im Produkt beide Themes und veränderte Kontrasteinstellungen. Bei echten Überlagerungen zusätzlich Tastaturbedienung, Fokuswechsel und Schliessen prüfen; die statischen Beispiele belegen dieses Verhalten nicht.'),
    text('sources', 'Quellen und offene Festlegungen',
      'Lokaler shadcn-Export: src/contracts/libraries/shadcn/5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed/tokens.json. button.radiusSm = 6 px, button.radius = 10 px, checkbox.radius = 4 px, input.radius = 10 px. switch.radius = 9999 px wird hier als Pillenform gezeigt.',
      'Der frühere Portalwert 7 px gehört zu einem anderen Gestaltungsstand; er ist kein gemeinsamer Basisradius dieser Komponenten.',
      'Im gelesenen lokalen Bestand sind keine allgemeine Ebenenfolge, Schattenstufen oder zusätzlichen Flächenrollen definiert. Die Vergleichsflächen und ihre Schatten sind eigene Studien. Aus ihnen folgt keine Freigabe für eine Anwendung.'),
    {"kind": "shape", "title": "Eine Grenze verändert die Bedeutung", "explanation": "Eine offene Gruppe wird durch Überschrift und Abstand verständlich. Eine begrenzte Fläche fasst Inhalt zusätzlich ein. Eine schwebende Fläche signalisiert Überlagerung. Kontur, Fläche und Schatten wirken zusammen; keine dieser Darstellungen behauptet Dialogverhalten. Die Radiusübersicht zeigt tatsächliche Komponentenwerte: Checkbox 4 px, kleiner Button 6 px, Input und Standardbutton 10 px, Switch als Pillenform. Das ist keine allgemeine Radius- oder Elevationsskala.", "source": "Radiuswerte aus lokalem tokens.json; Flächen und Schatten sind eigene schematische Studien.", "revision": "5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed", "blockName": "original-study", "blockType": "study"},
    { blockType: 'text', blockName: 'links', body: { root: { ...base, type: 'root', children: [
      { ...base, type: 'heading', tag: 'h2', children: [node('Weiter gestalten')] },
      ...[
        ['Abstände: Gruppierung und Innenraum', '/systems/shadcn/abstaende'],
        ['Farbe: Fläche und Kontur', '/systems/shadcn/farben'],
        ['Themes und visuelle Zustände', '/systems/shadcn/themes-und-zustaende'],
        ['Komponenten auswählen', '/systems/shadcn/komponenten-auswahl'],
      ].map(([label,url]) => ({ ...base, type: 'paragraph', children: [{ ...base, type: 'link', fields: { url, linkType: 'custom', newTab: false }, children: [node(label)] }] })),
    ] } } },
  ] satisfies Page['content'],
}
