import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = { version: 1, direction: 'ltr' as const, format: '' as const, indent: 0 }
const node = (text: string) => ({ type: 'text', version: 1, text })
const text = (key: string, title: string, paragraphs: string[], links: [string, string][] = []): Block => ({
  blockType: 'text', blockName: key, body: { root: { ...base, type: 'root', children: [
    { ...base, type: 'heading', tag: 'h2', children: [node(title)] },
    ...paragraphs.map(value => ({ ...base, type: 'paragraph', children: [node(value)] })),
    ...links.map(([label, url]) => ({ ...base, type: 'paragraph', children: [{ ...base, type: 'link', fields: { url, linkType: 'custom', newTab: false }, children: [node(label)] }] })),
  ] } },
})
// Published CMS sources read 20 November 2026 with push:false and a read-only DB connection.
export const release = {
  expectedUpdatedAt: '2026-11-20T13:30:59.790Z',
  summary: 'Zusammengehörige Eingaben in einer festen Reihenfolge erfassen.',
  content: [
    text('example', 'Projekt bearbeiten', [
      'Zustand ansehen', 'Normal', 'Mit Feldfehler',
      'Layoutvorschau · Das Feld ist schreibgeschützt, die dargestellten Formularaktionen sind nicht bedienbar. Die Auswahl wechselt nur das Zustandsbild.',
    ]),
    text('field', 'Projektname (erforderlich)', [
      'Neues Kundenportal', '1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.', 'Einen Projektnamen eingeben.',
    ]),
    text('actions', 'Formularaktionen', ['Änderungen speichern', 'Abbrechen']),
    text('anatomy', 'So ist die Feldgruppe aufgebaut', [
      'Label → Eingabe → Hilfe → gegebenenfalls Fehler. Die Beschriftung bleibt über dem Feld; ein Fehler ergänzt die Hilfe direkt darunter.',
      'Die Vorschau zeigt entweder einen ausgefüllten Normalzustand oder denselben Feldplatz mit dem Fehler für eine leere Eingabe nach erfolglosem Absenden. Der Wechsel löst keine Prüfung aus.',
    ]),
    text('rules', 'Drei Regeln für die Anordnung', [
      'Einspaltig bleiben: Das Formular nutzt höchstens 640 px Breite. Jede Feldgruppe folgt der Reihenfolge Label, Eingabe, Hilfe und gegebenenfalls Fehler; zwischen mehreren Gruppen liegen 24 px.',
      'Text braucht Platz: Labels, Hilfe und Fehler dürfen mehrzeilig werden. Nachfolgende Inhalte rücken nach unten; die Reihenfolge bleibt auf schmalen Flächen erhalten.',
      'Aktionen folgen dem Feld: «Änderungen speichern» steht vor «Abbrechen». Unter 640 px verfügbarer Formularbreite stehen beide untereinander und nutzen die Breite.',
    ], [['Prüfzeitpunkt und Formularablauf: Formulare und Validierung', '/systems/shadcn/formulare-validierung']]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Grundlage: veröffentlichter CMS-Stand shadcn-content-layout-form-layout (20. November 2026, 13:30 UTC) und shadcn-formulare-validierung (20. November 2026, 08:04 UTC). Die Formularreferenz führt Feldtexte, Prüfzeitpunkt, Fokus, Korrektur und Speicherausgänge; diese Seite übernimmt ausschliesslich die Anordnung und die vorhandenen Beispieltexte.',
      'Die maximale Formularbreite von 640 px und das Stapeln unter 640 px verfügbarer Inhaltsbreite stammen aus der bestehenden lokalen Gestaltungsreferenz. Der Gruppenabstand von 24 px stand bereits auf dieser Layoutseite. Das sind Referenzentscheidungen, keine allgemeine upstream-Vorgabe.',
      'Ein responsives Beispiel ersetzt die bisherigen getrennten Breit-/Schmalbilder. Die Zustandsauswahl ist eine Vorschau; Feld und Formularaktionen führen keine Bearbeitung, Validierung, Navigation oder Speicherung aus. Es gibt keine zusätzliche fachliche Regel und keinen allgemeinen Nachweis für Barrierefreiheit.',
    ], [['Input', '/systems/shadcn/components/input'], ['Button', '/systems/shadcn/components/button']]),
  ] satisfies Page['content'],
}
