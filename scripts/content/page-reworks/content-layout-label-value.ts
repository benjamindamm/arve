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
  expectedUpdatedAt: '2026-11-20T14:09:10.568Z',
  summary: 'Eigenschaften eines Eintrags als gut lesbare Beschriftungs–Wert-Paare anzeigen.',
  content: [
    text('example', 'Projekteigenschaften', [
      'Ein Beispiel mit langem Namen, mehrzeiliger Adresse und fehlendem Wert.',
      'Beschriftung: benennt die Eigenschaft. Wert: enthält die zugehörige Angabe.',
    ]),
    text('pair-name', 'Projektname', ['Neugestaltung des Kundenportals für mehrere Geschäftsbereiche und regionale Serviceteams']),
    text('pair-status', 'Status', ['Aktiv']),
    text('pair-address', 'Projektadresse', ['Werkstrasse 18\nHaus B, 3. Obergeschoss\n8005 Zürich']),
    text('pair-description', 'Beschreibung', ['Nicht angegeben']),
    text('rules', 'Drei Regeln für die Anordnung', [
      'Breit: Beschriftungen und Werte stehen in zwei linksbündigen Spalten. Alle Werte beginnen an derselben Kante; die Beschriftung richtet sich an der ersten Wertzeile aus.',
      'Schmal: Jede Beschriftung steht direkt über ihrem Wert. Der Abstand zum nächsten Paar ist grösser als der Abstand innerhalb des Paares. Die Reihenfolge bleibt erhalten.',
      'Lange Inhalte dürfen vollständig umbrechen; Adresszeilen bleiben in einem Werteblock. Fehlende Angaben stehen ausdrücklich als «Nicht angegeben» statt als leere Zeile.',
    ]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Grundlage: veröffentlichter CMS-Stand shadcn-content-layout-label-value vom 20. November 2026 und die unveränderte visuelle Studie zu inneren Inhaltsmustern vom selben Tag. Beobachtet wurden zwei linksbündige Spalten im breiten Zahlungsdetail und Beschriftungen über den Werten bei schmaler Darstellung; eine mehrzeilige Adresse blieb zusammen.',
      'Der lange Projektname, die Beispieladresse und der fehlende Wert sind synthetische Prüffälle. Die Kennzeichnung «Nicht angegeben», kontrollierter Textumbruch und die konkrete Umbruchgrenze von 34 rem verfügbarer Beispielbreite sind Entscheidungen dieser shadcn-Referenz; keine gemessenen Systemvorgaben.',
      'Statisches Anordnungsbeispiel. Es zeigt keine Eingabe oder Bearbeitungsaktion. Die zugrunde liegende Sichtprüfung ist kein allgemeiner Nachweis für Barrierefreiheit oder alle Inhaltsfälle.',
    ]),
  ] satisfies Page['content'],
}
