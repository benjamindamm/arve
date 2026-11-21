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
  expectedUpdatedAt: '2026-11-20T13:48:10.853Z',
  summary: 'Wähle den Seitentyp danach, ob du mehrere Einträge überblicken, einen Eintrag ansehen, Angaben bearbeiten oder einen neuen Eintrag erstellen willst.',
  content: [
    text('examples', 'Vier Aufgaben, vier Seitentypen', ['Die vereinfachten Projektbeispiele zeigen den Aufbau der vier Seitentypen. Die Felder sind schreibgeschützt; hier wird nichts gespeichert.']),
    text('overview', 'overview · Übersicht', [
      'Mehrere Einträge überblicken und einen passenden auswählen.',
      'Typische Bereiche: Titel, bei Bedarf Suche oder Filter, Ergebnisliste und Links zu den einzelnen Einträgen.',
      'Projekte', '3 Projekte', 'Website erneuern', 'Aktiv', 'Kundenportal', 'In Planung', 'Jahresbericht', 'Abgeschlossen',
    ], ['overview ansehen', '/systems/shadcn/page-type-overview']),
    text('detail', 'detail · Detailansicht', [
      'Einen bestimmten Eintrag ansehen und seine Angaben und seinen Status verstehen.',
      'Typische Bereiche: Rückweg, eindeutiger Titel, Status, Angaben und passende nächste Aktionen.',
      'Website erneuern', 'Aktiv', 'Verantwortlich', 'Mara Keller', 'Termin', '30. November', 'Projektziel', 'Den neuen Webauftritt vorbereiten.',
    ], ['detail ansehen', '/systems/shadcn/detailseite']),
    text('edit', 'edit · Bearbeiten', [
      'Vorhandene Angaben ändern, prüfen und speichern.',
      'Typische Bereiche: Angaben zum bearbeiteten Eintrag, vorausgefüllte Felder, Hinweise oder Fehlermeldungen sowie die Aktionen Speichern und Abbrechen.',
      'Projekt bearbeiten', 'Projektname', 'Website erneuern', 'Verantwortlich', 'Mara Keller', 'Zum Abschliessen: «Änderungen speichern» oder «Abbrechen».',
    ], ['edit ansehen', '/systems/shadcn/page-type-edit']),
    text('create', 'create · Erstellen', [
      'Angaben für einen neuen Eintrag erfassen, prüfen und den Eintrag erstellen.',
      'Typische Bereiche: Titel, erforderliche Eingaben, Hinweise oder Fehlermeldungen sowie die Aktionen Erstellen und Abbrechen.',
      'Projekt erstellen', 'Projektname', 'Namen eingeben', 'Verantwortlich', 'Person angeben', 'Zum Abschliessen: «Projekt erstellen» oder «Abbrechen».',
    ], ['create ansehen', '/systems/shadcn/page-type-create']),
    text('decision', 'Für deinen Entwurf entscheiden', [
      'Geht es um viele Einträge, beginne mit overview. Geht es um einen vorhandenen Eintrag, wähle detail zum Lesen oder edit zum Ändern. Für einen neuen Eintrag wähle create.',
      'Leite aus der Aufgabe ab, welche Bereiche du brauchst. Wie du sie auf der Seite anordnest, bestimmst du anschliessend mit einem Page layout. Der Seitentyp legt weder die Spaltenzahl noch die Kartenbreite fest.',
    ]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Grundlage: der veröffentlichte CMS-Stand von shadcn-page-types vom 20.11.2026 und seine vier zugeordneten Seitentypen. Die ursprüngliche Übersicht war eine Linkliste ohne eigene Inhaltsblöcke.',
      'Die vereinfachten Beispiele helfen dir, den Seitentyp zu wählen. Sie zeigen typische Inhaltsbereiche. Daraus lassen sich keine verbindlichen Feldvorgaben, vollständigen Abläufe oder allgemeinen Freigaben für Komponenten ableiten. Die verlinkten Unterseiten erklären den jeweiligen Typ genauer; wie weit sie ausgearbeitet sind, geht aus dieser Übersicht nicht hervor.',
      'Prüfe für das konkrete Produkt zusätzlich die Eingabeprüfung, Lade-, Leer- und Fehlerzustände sowie Rückwege und den Umgang mit ungespeicherten Änderungen. Diese Abläufe sind in der Übersicht nicht ausgearbeitet.',
    ]),
  ] satisfies Page['content'],
}
