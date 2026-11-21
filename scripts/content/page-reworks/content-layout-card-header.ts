import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = { version: 1, direction: 'ltr' as const, format: '' as const, indent: 0 }
const node = (text: string) => ({ type: 'text', version: 1, text })
const text = (key: string, title: string, paragraphs: string[]): Block => ({
  blockType: 'text', blockName: key, body: { root: { ...base, type: 'root', children: [
    { ...base, type: 'heading', tag: 'h2', children: [node(title)] },
    ...paragraphs.map(value => ({ ...base, type: 'paragraph', children: [node(value)] })),
  ] } },
})
export const release = {
  expectedUpdatedAt: '2026-11-20T14:18:10.834Z',
  summary: 'Titel, optionale Beschreibung und passende Aktion im Kopf eines Inhaltsbereichs anordnen.',
  content: [
    text('example', 'Card Header im Einsatz', [
      'Variante der Vorschau', 'Mit Aktion', 'Ohne Aktion',
      'Beide Varianten verwenden denselben Titel und Inhalt. Der Umschalter verändert nur diese Vorschau.',
    ]),
    text('card', 'Aktuelle Projekte und geplante Arbeiten für das gemeinsame Kundenportal', [
      'Alle aktiven Projekte dieses Arbeitsbereichs mit ihrem aktuellen Stand.',
      'Zur Projektliste', 'Projektliste',
      'Navigation überarbeiten', 'In Arbeit', 'Inhalte für den nächsten Release prüfen', 'Geplant',
    ]),
    text('legend', 'Teile des Beispiels', [
      'Titel: benennt den Inhalt der Card. Beschreibung: ergänzt den Titel und ist optional. Aktion: gehört zu genau dieser Card und ist optional; hier führt sie zur Projektliste innerhalb der Vorschau.',
      'Inhaltsbereich: beginnt mit eigenem Abstand unter dem Kopf. Die Bezeichnungen dieser Legende gehören nicht in den eigentlichen Kartentext.',
    ]),
    text('rules', 'Drei Regeln für die Anordnung', [
      'Titel und optionale Beschreibung bilden eine linksbündige Textgruppe. Lange Titel dürfen vollständig umbrechen; der Kopf hat keine feste Höhe.',
      'Breit steht die passende Aktion rechts oben. Bei wenig Platz folgt die Textaktion unter der Textgruppe. Kleine Symbolaktionen können neben dem Titel bleiben, solange beide genug Platz haben; ihr zugänglicher Name benennt Aktion und Bezug.',
      'Ohne Aktion nutzt die Textgruppe die verfügbare Kopfbreite; kein leerer Aktionsplatz bleibt zurück. Der fachliche Inhalt folgt unter dem Kopf mit eigenem Abstand. Ein Card Header ist ein inneres Inhaltsmuster und kein Seitentyp.',
    ]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Grundlage: veröffentlichter CMS-Stand shadcn-content-layout-card-header vom 20. November 2026 sowie die unveränderte visuelle Studie zu inneren Inhaltsmustern vom selben Tag. Beobachtet wurden Kartentitel links, kleine Symbolaktionen rechts, dieselbe Kopfstruktur ohne Aktion und ein eigener Abstand zum Karteninhalt. Kleine Symbolaktionen blieben auch schmal neben dem Titel.',
      'Die optionale Beschreibung, der synthetische lange Titel und die Textaktion unter der Textgruppe bei schmaler Darstellung sind Entscheidungen der shadcn-Referenz. Die Umbruchgrenze von 34 rem verfügbarer Beispielbreite ist eine lokale Gestaltungsentscheidung, keine gemessene Systemvorgabe. Ein Überlauf mit erzwungen langem Titel wurde in der Originalstudie nicht geprüft.',
      'Der Variantenwechsel und der Sprung zur Projektliste sind bedienbare Vorschauhilfen. Die Projekte sind Beispieldaten; es gibt keine Datenänderung. Die zugrunde liegende Sichtprüfung ist kein allgemeiner Nachweis für Barrierefreiheit, beliebige Titel oder sämtliche Symbolaktionen.',
    ]),
  ] satisfies Page['content'],
}
