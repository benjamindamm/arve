import type { Page } from '../../../src/payload-types'

type Block = NonNullable<Page['content']>[number]
const text = (value: string) => ({ type: 'text', version: 1, text: value, detail: 0, format: 0, mode: 'normal', style: '' })
function destination(blockName: string, label: string, url: string, description: string): Block {
  return { blockType: 'text', blockName, body: { root: {
    type: 'root', version: 1, direction: 'ltr', format: '', indent: 0,
    children: [{ type: 'paragraph', version: 1, children: [
      { type: 'link', version: 1, fields: { linkType: 'custom', url, newTab: false }, children: [text(label)] },
      text(' · ' + description),
    ] }],
  } } }
}
// Published CMS read on 20 November 2026 with push:false and a read-only DB connection.
// Original blocks frozen literally; exporting the current handbook must not change this release.
const original: {content:Block[]} = {
  "content": [
    {
      "body": {
        "root": {
          "type": "root",
          "format": "",
          "indent": 0,
          "version": 1,
          "children": [
            {
              "type": "paragraph",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "mode": "normal",
                  "text": "Die Empty-Komponente bietet Platz für Titel, Beschreibung und eine optionale Aktion.",
                  "type": "text",
                  "style": "",
                  "detail": 0,
                  "format": 0,
                  "version": 1
                }
              ],
              "direction": "ltr"
            },
            {
              "type": "paragraph",
              "format": "",
              "indent": 0,
              "version": 1,
              "children": [
                {
                  "type": "link",
                  "fields": {
                    "url": "https://ui.shadcn.com/docs/components/base/empty",
                    "newTab": false,
                    "linkType": "custom"
                  },
                  "format": "",
                  "indent": 0,
                  "version": 1,
                  "children": [
                    {
                      "mode": "normal",
                      "text": "shadcn/ui · Empty",
                      "type": "text",
                      "style": "",
                      "detail": 0,
                      "format": 0,
                      "version": 1
                    }
                  ],
                  "direction": "ltr"
                }
              ],
              "direction": "ltr"
            }
          ],
          "direction": "ltr"
        }
      },
      "blockType": "text"
    },
    {
      "recommendation": "do",
      "explanation": "Unterscheide «Noch keine Rechnungen», «Keine Treffer» und «Rechnungen konnten nicht geladen werden». Biete passend dazu Erstellen, Filter zurücksetzen oder Erneut versuchen an.",
      "blockType": "guideline"
    },
    {
      "recommendation": "dont",
      "explanation": "Einen leeren Zustand als Ladeanzeige verwenden oder dieselbe Meldung für jeden Zustand zeigen.",
      "blockType": "guideline"
    }
  ]
}
export const release = {
  expectedUpdatedAt: '2026-11-17T22:33:55.422Z',
  summary: 'Die Zustandsbeispiele und Regeln stehen unter «Laden, leer und Fehler».',
  content: [
    destination('state-guide', 'Laden, leer und Fehler', '/systems/shadcn/laden-leer-fehler',
      'Zustand wählen: Laden, Erstleere, Nulltreffer, Fehler, Nichtverfügbarkeit oder unklarer Speicherausgang.'),
    destination('state-form', 'Formulare und Validierung', '/systems/shadcn/formulare-validierung#abschnitt-ergebnis-unbekannt',
      'Ergebnis unbekannt nach dem Senden und Verhalten beim Verlassen des Formulars.'),
    destination('state-rows', 'Tabellen und Listen', '/systems/shadcn/tabellen-und-listen',
      'Status einzelner Einträge im Zusammenhang mit Spalten und Zeilenaktionen gestalten.'),
    { blockType: 'text', blockName: 'state-history', body: { root: {
      type: 'root', version: 1, direction: 'ltr', format: '', indent: 0,
      children: [
        { type: 'paragraph', version: 1, children: [text('Bisheriger Inhalt und Quelle')] },
        { type: 'paragraph', version: 1, children: [text('Historischer Stand dieser Seite. Die Zustandsunterscheidung und Auswege sind inzwischen auf «Laden, leer und Fehler» zusammengeführt; die ursprüngliche Empty-Referenz und Hinweise bleiben hier erhalten.')] },
      ],
    } } },
    ...original.content as Block[],
  ],
} satisfies { expectedUpdatedAt: string } & Pick<Page, 'summary' | 'content'>
