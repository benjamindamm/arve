import type { Page } from '../../../src/payload-types'

type Block = NonNullable<Page['content']>[number]
const text = (text: string) => ({ type: 'text', version: 1, text, detail: 0, format: 0, mode: 'normal', style: '' })
const paragraph = (value: string) => ({ type: 'paragraph', version: 1, direction: 'ltr', format: '', indent: 0, children: [text(value)] })
function block(blockName: string, title: string, copy: string[], destination?: [string, string]): Block {
  return { blockType: 'text', blockName, body: { root: { type: 'root', version: 1, direction: 'ltr', format: '', indent: 0, children: [
    { type: 'heading', tag: 'h2', version: 1, direction: 'ltr', format: '', indent: 0, children: [text(title)] },
    ...copy.map(paragraph),
    ...(destination ? [{ type: 'paragraph', version: 1, direction: 'ltr', format: '', indent: 0, children: [
      { type: 'link', version: 1, direction: 'ltr', format: '', indent: 0, fields: { url: destination[1], linkType: 'custom', newTab: false }, children: [text(destination[0])] },
    ] }] : []),
  ] } } }
}
// Published CMS read on 20 November 2026, push:false and a read-only DB connection.
// The overview originally has no CMS content blocks; no original study is replaced.
export const release = {
  expectedUpdatedAt: '2026-11-20T14:08:28.181Z',
  summary: 'Content layouts ordnen Inhalte innerhalb einer Card oder eines Abschnitts; Page layouts ordnen die grossen Bereiche der gesamten Seite.',
  content: [
    block('clo-label-value', 'Label–Value', [
      'Eigenschaften eines Eintrags anzeigen.',
      'Statisches Beispiel · Eigenschaften',
      'Projektdaten', 'Projekt', 'Alpenblick', 'Status', 'In Arbeit', 'Verantwortlich', 'Mara Keller',
    ], ['Label–Value ansehen', '/systems/shadcn/content-layout-label-value']),
    block('clo-form-layout', 'Form Layout', [
      'Zusammengehörige Eingaben in einer festen Reihenfolge erfassen.',
      'Statisches Beispiel · Feldanordnung',
      'Projekt bearbeiten', 'Projektname', 'Alpenblick', 'Der Name erscheint in der Übersicht.', 'Verantwortlich', 'Mara Keller',
    ], ['Form Layout ansehen', '/systems/shadcn/content-layout-form-layout']),
    block('clo-card-header', 'Card Header', [
      'Einen Inhaltsbereich benennen und seine zugehörige Aktion anbieten.',
      'Statisches Beispiel · Kopfbereich',
      'Projektdaten', 'Name und Zuständigkeit des Projekts.', 'Aktion der Card', 'Inhalt der Card',
    ], ['Card Header ansehen', '/systems/shadcn/content-layout-card-header']),
    block('clo-evidence', 'Quellen und Darstellungsgrenzen', [
      'Zweck und Anordnung folgen den drei verlinkten Inhaltslayouts der shadcn-Referenzimplementierung (Stand 20. November 2026).',
      'Die Miniaturen zeigen statische Beispieldaten und die Anordnung innerhalb einer einzelnen Card. Felder und Aktionsplatz sind Beschriftungen, keine bedienbaren Funktionen. Verbindliche Anordnungsregeln und die Darstellung bei schmaler Breite stehen auf den jeweiligen Detailseiten.',
      'Die Vergleichsübersicht zeigt auf breiten Flächen drei Beispiele nebeneinander und auf schmalen Flächen eine Card pro Zeile. Ihre Miniaturen sind verkleinerte Anschauungsbeispiele und legen keine zusätzlichen Produktmasse fest.',
    ]),
  ],
} satisfies { expectedUpdatedAt: string } & Pick<Page, 'summary' | 'content'>
