import type { Page } from '../../src/payload-types'

// Published page read through a read-only database connection on 2026-11-18.
// Compare this baseline before applying the patch; do not overwrite newer edits.
export const layoutFoundationAlignmentBaseline = {
  id: 11,
  updatedAt: '2026-11-13T12:43:02.791Z',
} satisfies Pick<Page, 'id' | 'updatedAt'>

const base = { version: 1, direction: 'ltr', format: '', indent: 0 } as const
const text = (value: string) => ({
  type: 'text', version: 1, text: value, detail: 0, format: 0, mode: 'normal', style: '',
})
const heading = (value: string) => ({ ...base, type: 'heading', tag: 'h2', children: [text(value)] })
const paragraph = (value: string) => ({ ...base, type: 'paragraph', children: [text(value)] })
const link = (label: string, url: string) => ({
  ...base, type: 'paragraph', children: [{
    ...base, type: 'link', fields: { linkType: 'custom', url, newTab: false }, children: [text(label)],
  }],
})

// Only the foundation/layout boundary is aligned here. Title, slug, parent,
// templates, publication status and code-provided example navigation are untouched.
export const layoutFoundationAlignment: Partial<Page> = {
  summary: 'Inhalte sinnvoll anordnen und bei wenig Platz umbrechen. Die Rasterwerte zeigen die aktuelle Portalvorschau.',
  content: [{
    blockType: 'text',
    id: '6af6f3dece36b87f8db414bd',
    body: { root: { ...base, type: 'root', children: [
      heading('Responsives Raster im aktuellen Beispiel'),
      paragraph('Die Rastervorschau im Portal zeigt bei weniger als 640 px Fensterbreite 4 Spalten mit 12 px Spaltenabstand, von 640 bis unter 1024 px 8 Spalten mit 16 px Abstand und ab 1024 px 12 Spalten mit 24 px Abstand. Diese Zahlen beschreiben die aktuelle Beispielimplementierung. Sie sind keine allgemeine shadcn-Vorgabe und keine freigegebene systemweite Raster- oder Abstandsskala.'),
      paragraph('Die verfügbare Inhaltsfläche kann durch Navigation und Container schmaler als das Fenster sein. Wähle Anordnung und Umbruch deshalb nach Inhalt, Lesbarkeit und Textvergrösserung; aus der Zahl sichtbarer Rasterspalten folgt noch keine passende Aufteilung für jede Seite.'),
      heading('Abstände nach ihrer Aufgabe wählen'),
      paragraph('Die Grundlage «Abstände und Grössen» erklärt Nähe innerhalb einer Einheit, Trennung zwischen Gruppen, Innenraum und Bedienflächen. Sie führt auch den Status der vorgeschlagenen Abstandswerte. Hier wird keine zweite allgemeine Skala festgelegt.'),
      link('Grundlage: Abstände und Grössen', '/systems/shadcn/abstaende'),
      heading('Anwendung'),
      paragraph('Ein Eingabefeld und sein Label bleiben zusammen. Ein Formular stapelt Felder bei wenig Platz. Zwei kurze, zusammengehörige Felder können bei genügend Platz nebeneinander stehen. Prüfe dabei lange Beschriftungen und vergrösserten Text; eine feste Spaltenzahl ersetzt diese Prüfung nicht.'),
      heading('Vorhandene Layoutbeispiele'),
      paragraph('Die drei Beispiele veranschaulichen eine Aufteilung in Haupt- und Zusatzbereich, gleichrangige Bereiche und eine zusammenhängende Arbeitsfläche. Sie zeigen begrenzte Anordnungen, keine vollständig geprüften Seitenabläufe. Die Detailseiten-Anleitung erklärt die weitergehenden Entscheidungen.'),
      link('Beispiel: Detailseite', '/systems/shadcn/layout/detail'),
      link('Beispiel: Übersichtsseite', '/systems/shadcn/layout/uebersicht'),
      link('Beispiel: Arbeitsfläche', '/systems/shadcn/layout/arbeitsflaeche'),
      link('Anleitung: Detailseite', '/systems/shadcn/detailseite'),
      link('Seitenstruktur und Navigation', '/systems/shadcn/seitenstruktur-und-navigation'),
    ] } },
  }],
}
