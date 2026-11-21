import type { Page } from '../../../src/payload-types'

const base = { version: 1, direction: 'ltr' as const, format: '' as const, indent: 0 }
const text = (value: string) => ({ type: 'text', version: 1, text: value })
export const release = {
  expectedUpdatedAt: '2026-11-20T13:46:09.130Z',
  summary: 'Die Inhalte dieser früheren Sammelseite findest du jetzt in drei eigenen Grundlagen.',
  content: [{
    blockType: 'text', blockName: 'destinations',
    body: { root: { ...base, type: 'root', children: [
      { ...base, type: 'heading', tag: 'h2', children: [text('Die passende Grundlage öffnen')] },
      ...[
        ['Icons: Zeichen wählen und Handlungen benennen', '/systems/shadcn/icons'],
        ['Bewegung: Veränderungen mit und ohne Animation zeigen', '/systems/shadcn/bewegung'],
        ['Form und Ebenen: Inhalte gruppieren und Überlagerungen gestalten', '/systems/shadcn/form-und-ebenen'],
        ['Alle Grundlagen', '/systems/shadcn/grundlagen'],
      ].map(([label, url]) => ({ ...base, type: 'paragraph', children: [{
        ...base, type: 'link', fields: { url, linkType: 'custom', newTab: false }, children: [text(label)],
      }] })),
    ] } },
  }] satisfies Page['content'],
}
