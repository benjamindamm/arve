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
  expectedUpdatedAt: '2026-11-20T08:39:33.967Z',
  summary: 'Wähle die räumliche Anordnung nach Breite und Gewicht deiner Inhalte.',
  content: [
    text('examples', 'Sechs Anordnungen im Vergleich', ['Die Schemen zeigen breite Ansichten. Auf schmalen Ansichten folgen die Bereiche untereinander.']),
    text('main-sidebar', 'Main+Sidebar', [
      'Wähle es für einen Hauptinhalt mit ergänzendem Kontext.',
      'Breit: grosser Hauptbereich und schmalere Inhaltsspalte. Schmal: Hauptinhalt vor Ergänzung.',
      'Hauptinhalt', 'Ergänzung',
    ], ['Main+Sidebar ansehen', '/systems/shadcn/main-sidebar']),
    text('card-grid-4x4', '4-column Card Grid', [
      'Wähle es für mehrere Cards mit unterschiedlichem Platzbedarf.',
      'Vier Grundspalten, variable Reihen. Eine Card kann 1, 2 oder 4 Spalten belegen. Schmal: eine Spalte.',
      '2 Spalten', '1', '1', '4 Spalten',
    ], ['4-column Card Grid ansehen', '/systems/shadcn/card-grid-4x4']),
    text('narrow-single-card', 'Narrow Single Card', [
      'Wähle es für einen kompakten Inhalt mit ruhigem Lesefluss.',
      'Eine zentrierte Card mit begrenzter Breite. Schmal: verfügbare Breite mit seitlichem Abstand nutzen.',
      'Kompakter Inhalt',
    ], ['Narrow Single Card ansehen', '/systems/shadcn/narrow-single-card']),
    text('wide-single-card', 'Wide Single Card', [
      'Wähle es, wenn ein zusammengehöriger Inhalt viel Breite braucht.',
      'Eine Card füllt den Inhaltscontainer. Text und Felder dürfen darin schmaler bleiben.',
      'Breiter Inhalt',
    ], ['Wide Single Card ansehen', '/systems/shadcn/wide-single-card']),
    text('stacked-section-cards', 'Stacked Section Cards', [
      'Wähle es für mehrere Abschnitte in einer klaren Lesereihenfolge.',
      'Cards folgen untereinander. Halte ihre Reihenfolge auch bei schmaler Ansicht bei.',
      'Abschnitt 1', 'Abschnitt 2', 'Abschnitt 3',
    ], ['Stacked Section Cards ansehen', '/systems/shadcn/stacked-section-cards']),
    text('card-grid-3-columns', '3-column Card Grid', [
      'Wähle es für gleichwertige Cards, die nebeneinander vergleichbar sein sollen.',
      'Drei gleich breite Spalten, variable Reihen. Schmal: eine Spalte in derselben Lesereihenfolge.',
      'Card 1', 'Card 2', 'Card 3', 'Card 4',
    ], ['3-column Card Grid ansehen', '/systems/shadcn/card-grid-3-columns']),
    text('questions', 'Drei Fragen für die Auswahl', [
      'Gibt es einen Hauptinhalt mit Ergänzung? Main+Sidebar trennt beide räumlich. Für gleichwertige Inhalte passt ein Card Grid.',
      'Wie viel Breite braucht ein zusammengehöriger Inhalt? Narrow Single Card begrenzt ihn. Wide Single Card gibt ihm die Containerbreite.',
      'Sollen Abschnitte nacheinander gelesen oder parallel verglichen werden? Stacked Section Cards führt nach unten. Ein Card Grid stellt Cards nebeneinander.',
      'Der Seitentyp beschreibt die Aufgabe. Das Page layout beschreibt die Anordnung. Wähle beides unabhängig voneinander.',
    ], ['Seitentyp wählen', '/systems/shadcn/page-types']),
    text('responsive', 'Breite und schmale Ansichten', [
      'Die Beispiele dieser Übersicht stehen ab 60rem Ansichtsbreite in zwei Spalten, darunter untereinander. Innerhalb der Schemen wechseln Main+Sidebar und beide Grids bis 37.5rem auf eine Spalte. Die Narrow Card bleibt auf 12rem begrenzt; die Wide Card füllt ihr Schema.',
      'Diese Grenzen dienen dem Vergleich. Für Produktseiten richtet sich der Umbruch nach dem benötigten Inhaltsraum. Halte die Lesereihenfolge im Dokument ein. Verkleinere Text und Bedienflächen nicht, um Spalten zu erzwingen.',
    ]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Grundlage: veröffentlichter CMS-Stand von shadcn-page-layouts vom 20.11.2026 mit seinen sechs verknüpften Layouts. Die Übersicht enthielt keine eigenen Inhaltsblöcke. Ergänzend: unverändertes internes Layout-Mapping (Abschnitt „Layouts und Varianten“) und visuelles Inventar. Die Quellen ordnen beobachtete Anordnungen ein; sie bestätigen keinen Technologiestack.',
      'Die Schemen und Auswahlfragen sind redaktionelle Abstraktionen für die shadcn-Referenz. Narrow Single Card wird als eigenständige Bibliotheksoption geführt; für diese Variante liegt kein eigener beobachteter Seitenbeleg vor.',
      'Die Übersicht zeigt Anordnung und Umbruch. Sie prüft keine vollständigen Produktabläufe, Komponentenimplementierung oder allgemeine Barrierefreiheit. Tabellen, Formulare und weitere Inhalte innerhalb einer Card brauchen eigene Layoutregeln.',
    ]),
  ] satisfies Page['content'],
}
