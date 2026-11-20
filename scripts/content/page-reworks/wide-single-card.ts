import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = { version: 1, direction: 'ltr' as const, format: '' as const, indent: 0 }
const node = (text: string) => ({ type: 'text', version: 1, text })
const text = (key: string, title: string, paragraphs: string[], link?: [string, string]): Block => ({
  blockType: 'text', blockName: key, body: { root: { ...base, type: 'root', children: [
    { ...base, type: 'heading', tag: 'h2', children: [node(title)] },
    ...paragraphs.map(value => ({ ...base, type: 'paragraph', children: [node(value)] })),
    ...(link ? [{ ...base, type: 'paragraph', children: [{ ...base, type: 'link', fields: { url: link[1], linkType: 'custom', newTab: false }, children: [node(link[0])] }] }] : []),
  ] } },
})
export const release = {
  expectedUpdatedAt: '2026-11-20T08:39:34.023Z',
  summary: 'Eine Card füllt den Inhaltscontainer; Text und Felder behalten ihre passende Breite.',
  content: [
    text('example', 'Eine Fläche, unterschiedliche Inhaltsbreiten', [
      'Layoutstudie',
      'Breite Einzelkarte',
      'Eine zusammenhängende Übersicht nutzt eine gemeinsame Card. Die Abschnitte teilen sich deren Fläche; Lesetext und Eingabefeld bleiben darin begrenzt.',
      'Variante', 'Wide Single Card',
      'Inhalt', 'Übersicht und Arbeitsnotiz',
      'Stand', 'Gestaltungsbeispiel',
      'Zusammenfassung',
      'Die Card reicht bis an beide Seiten des Beispielcontainers. Ihre Trennlinien und die Übersicht nutzen die ganze innere Breite. Der längere Erklärungstext bleibt auf 65ch begrenzt, damit die Zeilen gut lesbar bleiben.',
      'Arbeitsnotiz',
      'Textbreite und Feldbreite unabhängig von der Card festlegen.',
      'Die Notiz ist lokal bearbeitbar und wird nicht gespeichert. Das Feld ist höchstens 28rem breit; bei wenig Platz nutzt es die verfügbare Breite.',
      'Beispiel: Die breite Umrandung gehört zur Card, die kürzere Textzeile und das kürzere Feld zum Inhalt. Verkleinere die Ansicht: Die drei Angaben folgen dann untereinander und die Card wächst nach unten.',
    ]),
    text('rules', 'Wann diese Anordnung passt', [
      'Verwende eine Wide Single Card für zusammengehörige Inhalte, die von Breite profitieren: mehrere Detailabschnitte, ein Formular mit Übersicht oder eine Tabelle. Trenne unabhängige Aufgaben in eigene Bereiche.',
      'Begrenze die Card auf den Inhaltscontainer, nicht auf die Textbreite. In dieser Studie: Card 100%, Lesetext höchstens 65ch, Feld höchstens 28rem. Diese Werte sind lokale Beispielregeln, keine globalen Tokens.',
      'Schmal bleibt die Card 100% breit. Bis 36rem Beispielbreite wechseln die drei Angaben in eine Spalte. Text bricht um, Felder schrumpfen mit und die Höhe folgt dem Inhalt; keine feste Höhe und kein Abschneiden.',
      'Eine Tabelle mit vielen vergleichbaren Spalten oder eine Arbeitsfläche darf die innere Cardbreite nutzen. Falls die Tabelle schmal nicht sinnvoll umbricht, braucht sie eine eigene beschriftete, per Tastatur erreichbare Scrollregion; die gesamte Seite soll dafür nicht seitlich scrollen. Die Studie zeigt keine solche Tabelle.',
      'Narrow Single Card begrenzt bereits die äussere Card und eignet sich für einen kompakten Lesefluss oder eine kurze Eingabe. Ein schmales Feld innerhalb dieser breiten Card macht daraus kein Narrow-Layout.',
    ], ['Narrow Single Card vergleichen', '/systems/shadcn/narrow-single-card']),
    text('css', 'CSS des Beispiels', [
      'Die Klassen unten wirken im Beispielcontainer. Der Umbruch richtet sich nach dessen Breite; die seitliche Handbuchnavigation zählt nicht als verfügbare Cardbreite.',
      `.wsc-example { container-type: inline-size; }
.wsc-card { width: 100%; min-width: 0; }
.wsc-reading { max-width: 65ch; }
.wsc-note { width: 100%; max-width: 28rem; }
.wsc-data { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); }
@container (max-width: 36rem) {
  .wsc-data { grid-template-columns: minmax(0, 1fr); }
}`,
    ]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Ausgangsstand: veröffentlichte CMS-Seite shadcn-wide-single-card vom 20.11.2026, ohne Inhaltsblöcke. Grundlage der Anordnung: unverändertes internes Layout-Mapping, Abschnitt „Layouts und Varianten“, und visuelles Inventar V08, V11, V13, V14 und V28. Dort sind breite Cards mit Formularen, Detailabschnitten oder Tabellen beobachtet; die Inhalte darin haben unterschiedliche Breiten.',
      'Die gezeigte Layoutstudie und ihre Grössenwerte sind eine redaktionelle CSS-Umsetzung für die shadcn-Referenz. Sie übernimmt keine Originaldaten und bestätigt keinen Technologiestack der beobachteten Oberflächen. Alle Regeln und Beispieltexte stehen im CMS.',
      'Gezeigt werden Cardbreite, innere Inhaltsbreiten und ein responsiver Umbruch. Die Notiz besitzt keine Speicherfunktion. Vollständige Formabläufe, breite Tabellen, assistive Technologien und allgemeine Barrierefreiheit sind damit nicht geprüft.',
    ]),
  ] satisfies Page['content'],
}
