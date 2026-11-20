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
  expectedUpdatedAt: '2026-11-20T08:57:18.815Z',
  summary: 'Wähle die Übersicht nach der Aufgabe: Lage erfassen, Einträge finden, Entwicklungen untersuchen, Vorlagen vergleichen oder einen Arbeitsbereich öffnen.',
  content: [
    text('dashboard', 'Dashboard', [
      'Wichtige Informationen, Kennzahlen und Einstiege bündeln.',
      'Wählen, wenn das Team die aktuelle Projektlage und den nächsten Handlungsbedarf schnell erkennen soll.',
      'Kernregion: priorisierte Zusammenfassung mit direktem Bezug zur nächsten Aufgabe. Nicht jede verfügbare Kennzahl braucht eine eigene Kachel.',
      'Schematisches Projektbeispiel · Kennzahlen und nächste Aufgabe',
      'Projektübersicht', 'Aktive Projekte', '8', 'Diese Woche fällig', '2', 'Nächste Aufgabe', 'Website erneuern · Entwurf prüfen', 'Bis Freitag · Mara Keller',
    ]),
    text('list-search', 'List & Search', [
      'Einträge suchen, filtern, vergleichen und öffnen.',
      'Wählen, wenn ein konkretes Projekt aus vielen gleichartigen Einträgen gefunden werden soll.',
      'Kernregion: Suche und Filter gehören zur Ergebnisliste. Zeige die Trefferzahl und dieselben Vergleichsangaben je Eintrag.',
      'Schematisches Projektbeispiel · Suchbereich und Trefferliste, ohne Suchfunktion',
      'Projekte finden', 'Suche: Website', 'Filter: Aktiv', '2 Treffer', 'Projekt', 'Verantwortlich', 'Website erneuern', 'Mara Keller', 'Website Barrierefreiheit', 'Noah Frei',
    ]),
    text('analytics', 'Analytics', [
      'Kennzahlen und Entwicklungen mit Filtern und Diagrammen untersuchen.',
      'Wählen, wenn eine Entwicklung über einen Zeitraum verglichen und verstanden werden soll.',
      'Kernregion: Auswertung mit sichtbarem Zeitraum, Einheit und Vergleich. Eine Kennzahl ohne diesen Kontext erklärt keine Entwicklung.',
      'Schematisches Projektbeispiel · Auswertung mit erfundenen Beispieldaten',
      'Projektabschlüsse', 'Zeitraum: August–Oktober', 'Abgeschlossene Projekte pro Monat', 'August', '3', 'September', '5', 'Oktober', '7', 'Vergleich: 3 im August → 7 im Oktober. Die Zahl der Abschlüsse steigt.',
    ]),
    text('catalog', 'Catalog', [
      'Angebote oder Vorlagen vergleichen und auswählen.',
      'Wählen, wenn das Team eine passende Projektvorlage anhand ihrer Eigenschaften aussuchen soll.',
      'Kernregion: vergleichbare Angebote. Verwende je Vorlage dieselben Merkmale und einen eindeutigen Einstieg zur Auswahl.',
      'Schematisches Projektbeispiel · Vorlagen vergleichen, ohne Auswahlfunktion',
      'Projektvorlagen', 'Website starten', 'Für einen neuen Webauftritt', 'Enthält: Inhaltsplanung und Designprüfung', 'Vorlage ansehen', 'Jahresbericht planen', 'Für die jährliche Publikation', 'Enthält: Redaktion und Freigabe', 'Vorlage ansehen',
    ]),
    text('service-hub', 'Service Hub', [
      'Den Einstieg in Funktionen, Arbeitsbereiche und Unterstützung anbieten.',
      'Wählen, wenn Menschen zuerst den passenden Arbeitsbereich oder Hilfeweg finden müssen.',
      'Kernregion: nach Aufgaben benannte Einstiege. Gruppiere Arbeitsbereiche und Unterstützung erkennbar; eine Serviceübersicht ersetzt keine Projektliste.',
      'Schematisches Projektbeispiel · Einstiege ohne Navigation',
      'Projektarbeit', 'Arbeitsbereiche', 'Projekte verwalten', 'Planung und Status der Projekte', 'Vorlagen finden', 'Mit einer passenden Vorlage beginnen', 'Unterstützung', 'Hilfe zur Projektarbeit', 'Anleitungen und Kontakt',
    ]),
    text('decision', 'Vom Zweck zum Entwurf', [
      'Dashboard beantwortet „Was ist jetzt wichtig?“, List & Search „Welchen Eintrag suche ich?“, Analytics „Wie entwickelt sich etwas?“, Catalog „Welche Vorlage passt?“ und Service Hub „Wo erledige ich meine Aufgabe?“.',
      'Lege zuerst diese Hauptaufgabe fest und ordne die Kernregion entsprechend sichtbar an. Das räumliche Raster wählst du anschliessend mit einem Page layout.',
      'Die Beispiele zeigen statische Ausschnitte. Für das Produkt zusätzlich Lade-, Leer- und Fehlerzustände sowie die jeweils benötigten Such-, Filter- und Navigationsabläufe gestalten.',
    ]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Grundlage: veröffentlichter CMS-Stand shadcn-page-type-overview vom 20.11.2026, updatedAt 2026-11-20T08:57:18.815Z. Die fünf vorhandenen Titel und Zwecke bleiben erhalten; Auswahlhilfen und Projektbeispiele sind redaktionelle Ergänzungen.',
      'Alle Beispiele sind mit HTML und lokalem CSS gestaltete Schematiken. Sie binden keine freigegebenen Such-, Tabellen-, Diagramm- oder Kartenkomponenten und begründen keine Freigabe neuer Muster. Zahlen, Personen und Projekte dienen nur dem Vergleich.',
      'Die Auswertung zeigt absolute Monatswerte als beschriftete Balken und Text. Datenbeschaffung, Filterlogik, Speicherung, vollständige Abläufe und Komponentenabnahme sind nicht Gegenstand dieser Beispiele.',
    ]),
  ] satisfies Page['content'],
}
