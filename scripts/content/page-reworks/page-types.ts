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
  expectedUpdatedAt: '2026-11-20T08:39:33.894Z',
  summary: 'Wähle den Seitentyp nach der Aufgabe: überblicken, verstehen, bearbeiten oder anlegen.',
  content: [
    text('examples', 'Vier Aufgaben, vier Seitentypen', ['Schematische Projektbeispiele: Die Felder zeigen den Aufbau; hier wird nichts gespeichert.']),
    text('overview', 'overview · Übersicht', [
      'Mehrere Einträge überblicken und einen passenden auswählen.',
      'Typische Bereiche: Titel, Suche oder Filter bei Bedarf, Ergebnisliste und Einstieg zum Eintrag.',
      'Projekte', '3 Projekte', 'Website erneuern', 'Aktiv', 'Kundenportal', 'In Planung', 'Jahresbericht', 'Abgeschlossen',
    ], ['overview ansehen', '/systems/shadcn/page-type-overview']),
    text('detail', 'detail · Detailansicht', [
      'Einen Eintrag erkennen und seine Angaben und seinen Status verstehen.',
      'Typische Bereiche: Rückweg, eindeutiger Titel, Status, Angaben und passende Folgeaktionen.',
      'Website erneuern', 'Aktiv', 'Verantwortlich', 'Mara Keller', 'Termin', '30. November', 'Projektziel', 'Den neuen Webauftritt vorbereiten.',
    ], ['detail ansehen', '/systems/shadcn/detailseite']),
    text('edit', 'edit · Bearbeiten', [
      'Vorhandene Angaben ändern, prüfen und speichern.',
      'Typische Bereiche: Eintragskontext, vorausgefüllte Felder, Hinweise oder Fehler und Abschluss mit Speichern oder Abbrechen.',
      'Projekt bearbeiten', 'Projektname', 'Website erneuern', 'Verantwortlich', 'Mara Keller', 'Abschluss: Änderungen speichern oder abbrechen.',
    ], ['edit ansehen', '/systems/shadcn/page-type-edit']),
    text('create', 'create · Anlegen', [
      'Einen neuen Eintrag erfassen, prüfen und anlegen.',
      'Typische Bereiche: Titel, erforderliche Eingaben, Hinweise oder Fehler und Abschluss mit Anlegen oder Abbrechen.',
      'Projekt anlegen', 'Projektname', 'Namen eingeben', 'Verantwortlich', 'Person angeben', 'Abschluss: Projekt anlegen oder abbrechen.',
    ], ['create ansehen', '/systems/shadcn/page-type-create']),
    text('decision', 'Für deinen Entwurf entscheiden', [
      'Geht es um viele Einträge, beginne mit overview. Geht es um einen vorhandenen Eintrag, wähle detail zum Lesen oder edit zum Ändern. Für einen neuen Eintrag wähle create.',
      'Leite die benötigten Bereiche aus dieser Aufgabe ab. Das räumliche Raster wählst du anschliessend mit einem Page layout; ein Seitentyp legt keine Spaltenzahl oder Kartenbreite fest.',
    ]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Grundlage: der veröffentlichte CMS-Stand von shadcn-page-types vom 20.11.2026 und seine vier zugeordneten Seitentypen. Die ursprüngliche Übersicht war eine Linkliste ohne eigene Inhaltsblöcke.',
      'Die Beispiele sind redaktionelle Schematiken zur Wahl des Seitentyps. Sie beschreiben typische Inhaltsbereiche, keine verbindlichen Feldvorgaben, vollständigen Abläufe oder allgemein freigegebenen Komponenten. Die Unterseiten vertiefen ihren jeweiligen Typ; diese Übersicht behauptet keinen vollständigen Ausarbeitungsstand aller Unterseiten.',
      'Prüfe für das konkrete Produkt zusätzlich Validierung, Lade-, Leer- und Fehlerzustände sowie Rückwege und den Umgang mit ungespeicherten Änderungen. Die Übersicht führt diese Abläufe nicht aus.',
    ]),
  ] satisfies Page['content'],
}
