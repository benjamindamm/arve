import type { Page } from '../../src/payload-types'
import { foundationsRelease } from './foundations-release'

type Block = NonNullable<Page['content']>[number]
const link = (label: string, url: string): Block => ({ blockType: 'text', body: { root: {
  type: 'root', version: 1, direction: 'ltr', format: '', indent: 0, children: [{
    type: 'paragraph', version: 1, direction: 'ltr', format: '', indent: 0, children: [{
      type: 'link', version: 1, direction: 'ltr', format: '', indent: 0,
      fields: { linkType: 'custom', url, newTab: false }, children: [{type: 'text', version: 1, text: label, detail: 0, format: 0, mode: 'normal', style: ''}],
    }],
  }],
} } })
const topics = [
  ['colors', 'Farbe', 'Wähle Fläche und Text als Paar und prüfe ihren Kontrast zusammen.', 'farben'],
  ['typography', 'Typografie', 'Unterscheide Titel, Lesetext und Hilfe durch eine erkennbare Hierarchie.', 'typografie'],
  ['spacing', 'Abstände', 'Halte zusammengehörige Angaben näher beieinander als getrennte Gruppen.', 'abstaende'],
  ['shape', 'Form und Ebenen', 'Vergleiche offene Gruppen, begrenzte Flächen und Überlagerungen.', 'form-und-ebenen'],
  ['icons', 'Icons', 'Ergänze verständliche Beschriftungen durch passende Zeichen.', 'icons'],
  ['motion', 'Bewegung', 'Verbinde Ausgang und Ergebnis; erhalte die Information ohne Animation.', 'bewegung'],
  ['themes', 'Themes und Zustände', 'Erhalte Bedeutung, Auswahl und Fokus in hellen und dunklen Ansichten.', 'themes-und-zustaende'],
] as const
const original = foundationsRelease.find(page => page.slug === 'shadcn-grundlagen')!
export const foundationsOverviewRelease = {
  summary: 'Farbe, Schrift, Abstände und Zustände für deine Oberfläche wählen.',
  content: [
    ...topics.flatMap(([kind, title, explanation, slug]): Block[] => [
      { blockType: 'study', kind, title, explanation, source: 'Schematische Themenvorschau; keine Token- oder Komponentenfreigabe.' },
      link(title, `/systems/shadcn/${slug}`),
    ]),
    original.content[0] as Block,
    original.content[3] as Block,
  ],
} satisfies Pick<Page, 'summary' | 'content'>
