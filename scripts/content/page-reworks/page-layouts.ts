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
  expectedUpdatedAt: '2026-11-20T13:57:44.713Z',
  summary: 'Wähle ein Layout danach, wie viel Breite deine Inhalte brauchen und wie sie zusammengehören.',
  content: [
    text('examples', 'Sechs Anordnungen im Vergleich', ['Die Schemata zeigen breite Ansichten. In schmalen Ansichten stehen die Bereiche untereinander.']),
    text('main-sidebar', 'Main+Sidebar', [
      'Wähle es für einen Hauptinhalt mit ergänzendem Kontext.',
      'In breiten Ansichten stehen ein grosser Hauptbereich und eine schmalere Inhaltsspalte nebeneinander. In schmalen Ansichten steht der Hauptinhalt vor der Ergänzung.',
      'Hauptinhalt', 'Ergänzung',
    ], ['Main+Sidebar ansehen', '/systems/shadcn/main-sidebar']),
    text('card-grid-4x4', '4-column Card Grid', [
      'Wähle es für mehrere Cards mit unterschiedlichem Platzbedarf.',
      'Das Raster hat vier Grundspalten und eine variable Anzahl an Reihen. Eine Card kann 1, 2 oder 4 Spalten belegen. In schmalen Ansichten bleibt eine Spalte.',
      '2 Spalten', '1', '1', '4 Spalten',
    ], ['4-column Card Grid ansehen', '/systems/shadcn/card-grid-4x4']),
    text('narrow-single-card', 'Narrow Single Card', [
      'Wähle es für einen kompakten Inhalt, der wenig Breite braucht.',
      'Eine zentrierte Card hat eine begrenzte Breite. In schmalen Ansichten nutzt sie die verfügbare Breite mit seitlichem Abstand.',
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
      'Das Raster hat drei gleich breite Spalten und eine variable Anzahl an Reihen. In schmalen Ansichten stehen die Cards in einer Spalte und behalten ihre Lesereihenfolge.',
      'Card 1', 'Card 2', 'Card 3', 'Card 4',
    ], ['3-column Card Grid ansehen', '/systems/shadcn/card-grid-3-columns']),
    text('questions', 'Drei Fragen für die Auswahl', [
      'Gibt es einen Hauptinhalt mit Ergänzung? Main+Sidebar trennt beide räumlich. Für gleichwertige Inhalte passt ein Card Grid.',
      'Wie viel Breite braucht ein zusammengehöriger Inhalt? Bei Narrow Single Card ist die Card-Breite begrenzt. Bei Wide Single Card nutzt die Card die volle Containerbreite.',
      'Sollen Abschnitte nacheinander gelesen oder parallel verglichen werden? Bei Stacked Section Cards stehen sie untereinander. Ein Card Grid stellt Cards nebeneinander.',
      'Der Seitentyp beschreibt die Aufgabe. Das Page layout beschreibt die Anordnung. Wähle beides unabhängig voneinander.',
    ], ['Seitentyp wählen', '/systems/shadcn/page-types']),
    text('responsive', 'Breite und schmale Ansichten', [
      'Die Beispiele dieser Übersicht stehen ab 60rem Ansichtsbreite in zwei Spalten, darunter untereinander. Innerhalb der Schemata haben Main+Sidebar und beide Grids bei Ansichtsbreiten bis 37.5rem eine Spalte. Die Narrow Card bleibt auf 12rem begrenzt; die Wide Card füllt ihr Schema.',
      'Diese Grenzen dienen dem Vergleich. Für Produktseiten richtet sich der Umbruch danach, wie viel Platz die Inhalte brauchen. Halte die Lesereihenfolge im Dokument ein. Verkleinere Text und Bedienflächen nicht, um Spalten zu erzwingen.',
    ]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Grundlage: veröffentlichter CMS-Stand von shadcn-page-layouts vom 20.11.2026 mit seinen sechs verknüpften Layouts. Die Übersicht enthielt keine eigenen Inhaltsblöcke. Ergänzend: unverändertes internes Layout-Mapping (Abschnitt „Layouts und Varianten“) und visuelles Inventar. Die Quellen ordnen beobachtete Anordnungen ein; sie bestätigen keinen Technologiestack.',
      'Die Schemata und Auswahlfragen sind redaktionelle Vereinfachungen für die shadcn-Referenz. Narrow Single Card wird als eigenständige Bibliotheksoption geführt; für diese Variante liegt kein eigener beobachteter Seitenbeleg vor.',
      'Die Übersicht zeigt Anordnung und Umbruch. Sie prüft keine vollständigen Produktabläufe, Komponentenimplementierung oder allgemeine Barrierefreiheit. Tabellen, Formulare und weitere Inhalte innerhalb einer Card brauchen eigene Layoutregeln.',
    ]),
  ] satisfies Page['content'],
}
