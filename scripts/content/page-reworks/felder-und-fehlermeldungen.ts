import type { Page } from '../../../src/payload-types'

const link = (text: string, path: string) => ({
  type: 'paragraph', version: 1, direction: 'ltr' as const, format: '' as const, indent: 0,
  children: [{
    type: 'link', version: 1, direction: 'ltr' as const, format: '' as const, indent: 0,
    fields: { url: `/systems/shadcn/${path}`, linkType: 'custom', newTab: false },
    children: [{ type: 'text', version: 1, text }],
  }],
})

export const release = {
  expectedUpdatedAt: '2026-11-20T14:34:01.284Z',
  summary: 'Felder anordnen, Formularverhalten gestalten, den Input wählen oder eine Meldung formulieren: direkt zur passenden Fachseite.',
  content: [{
    blockType: 'text',
    blockName: 'form-field-wayfinder',
    body: {
      root: {
        type: 'root', version: 1, direction: 'ltr', format: '', indent: 0,
        children: [
          link('Form Layout · Felder, Hilfe, Fehler und Aktionen anordnen', 'content-layout-form-layout'),
          link('Formulare und Validierung · Prüfzeitpunkte, Korrekturen und Rückmeldungen beim Speichern gestalten', 'formulare-validierung'),
          link('Input · Aufbau und Zustände des Eingabefelds ansehen', 'components/input'),
          link('Content Design · Labels, Hilfe und Fehlermeldungen formulieren', 'content-design'),
        ],
      },
    },
  }],
} satisfies { expectedUpdatedAt: string; summary: string; content: Page['content'] }
