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
  expectedUpdatedAt: '2026-11-20T13:50:23.877Z',
  summary: 'Wähle eine Übersicht, die zur Aufgabe passt. Die fünf Varianten zeigen, welche Inhalte dafür im Vordergrund stehen.',
  content: [
    text('dashboard', 'Dashboard', [
      'Bündle wichtige Informationen, Kennzahlen und Einstiege.',
      'Wähle ein Dashboard, wenn das Team schnell erkennen soll, wie die Projekte stehen und was als Nächstes zu tun ist.',
      'Zeige die wichtigsten Informationen zuerst und mache deutlich, welche Aufgabe als Nächstes ansteht. Nicht jede verfügbare Kennzahl braucht eine eigene Kachel.',
      'Schematisches Projektbeispiel · Kennzahlen und nächste Aufgabe',
      'Projektübersicht', 'Aktive Projekte', '8', 'Diese Woche fällig', '2', 'Nächste Aufgabe', 'Website erneuern · Entwurf prüfen', 'Bis Freitag · Mara Keller',
    ]),
    text('list-search', 'List & Search', [
      'Einträge suchen, filtern, vergleichen und öffnen.',
      'Wähle List & Search, wenn ein konkretes Projekt aus vielen gleichartigen Einträgen gefunden werden soll.',
      'Ordne Suche und Filter bei der Ergebnisliste an. Zeige die Trefferzahl und bei jedem Eintrag dieselben Angaben, damit sich die Treffer vergleichen lassen.',
      'Schematisches Projektbeispiel · Suchbereich und Trefferliste, ohne Suchfunktion',
      'Projekte finden', 'Suche: Website', 'Filter: Aktiv', '2 Treffer', 'Projekt', 'Verantwortlich', 'Website erneuern', 'Mara Keller', 'Website Barrierefreiheit', 'Noah Frei',
    ]),
    text('analytics', 'Analytics', [
      'Kennzahlen und Entwicklungen mit Filtern und Diagrammen untersuchen.',
      'Wähle Analytics, wenn eine Entwicklung über einen Zeitraum verglichen und verstanden werden soll.',
      'Zeige bei der Auswertung den Zeitraum, die Einheit und den Vergleich. Eine Kennzahl ohne diesen Kontext erklärt keine Entwicklung.',
      'Schematisches Projektbeispiel · Auswertung mit erfundenen Beispieldaten',
      'Projektabschlüsse', 'Zeitraum: August–Oktober', 'Abgeschlossene Projekte pro Monat', 'August', '3', 'September', '5', 'Oktober', '7', 'Vergleich: 3 im August → 7 im Oktober. Die Zahl der Abschlüsse steigt.',
    ]),
    text('catalog', 'Catalog', [
      'Angebote oder Vorlagen vergleichen und auswählen.',
      'Wähle Catalog, wenn das Team eine passende Projektvorlage anhand ihrer Eigenschaften aussuchen soll.',
      'Beschreibe die Angebote mit denselben Merkmalen, damit sie sich vergleichen lassen. Zeige bei jeder Vorlage deutlich, wie sie ausgewählt werden kann.',
      'Schematisches Projektbeispiel · Vorlagen vergleichen, ohne Auswahlfunktion',
      'Projektvorlagen', 'Website starten', 'Für einen neuen Webauftritt', 'Enthält: Inhaltsplanung und Designprüfung', 'Vorlage ansehen', 'Jahresbericht planen', 'Für die jährliche Publikation', 'Enthält: Redaktion und Freigabe', 'Vorlage ansehen',
    ]),
    text('service-hub', 'Service Hub', [
      'Biete Einstiege in Funktionen, Arbeitsbereiche und Unterstützung an.',
      'Wähle einen Service Hub, wenn Menschen zuerst den passenden Arbeitsbereich oder die passende Hilfe finden müssen.',
      'Benenne die Einstiege nach den Aufgaben. Gruppiere Arbeitsbereiche und Unterstützung so, dass beide Bereiche erkennbar sind. Eine Serviceübersicht ersetzt keine Projektliste.',
      'Schematisches Projektbeispiel · Einstiege ohne Navigation',
      'Projektarbeit', 'Arbeitsbereiche', 'Projekte verwalten', 'Planung und Status der Projekte', 'Vorlagen finden', 'Mit einer passenden Vorlage beginnen', 'Unterstützung', 'Hilfe zur Projektarbeit', 'Anleitungen und Kontakt',
    ]),
    text('decision', 'Vom Zweck zum Entwurf', [
      'Dashboard beantwortet „Was ist jetzt wichtig?“, List & Search „Welchen Eintrag suche ich?“, Analytics „Wie entwickelt sich etwas?“, Catalog „Welche Vorlage passt?“ und Service Hub „Wo erledige ich meine Aufgabe?“.',
      'Lege zuerst die Hauptaufgabe fest und stelle die dafür wichtigen Inhalte in den Vordergrund. Das räumliche Raster wählst du anschliessend mit einem Page layout.',
      'Die Beispiele zeigen statische Ausschnitte. Gestalte für das Produkt zusätzlich Lade-, Leer- und Fehlerzustände sowie die jeweils benötigten Such-, Filter- und Navigationsabläufe.',
    ]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Die Seite beruht auf dem veröffentlichten CMS-Stand shadcn-page-type-overview vom 20.11.2026, updatedAt 2026-11-20T08:57:18.815Z. Die fünf vorhandenen Titel und Zwecke bleiben erhalten. Auswahlhilfen und Projektbeispiele wurden redaktionell ergänzt.',
      'Alle Beispiele sind schematische Darstellungen aus HTML und lokalem CSS. Sie verwenden keine freigegebenen Such-, Tabellen-, Diagramm- oder Kartenkomponenten. Aus den Beispielen lässt sich keine Freigabe neuer Muster ableiten. Zahlen, Personen und Projekte dienen nur dem Vergleich.',
      'Die Auswertung zeigt absolute Monatswerte als beschriftete Balken und Text. Die Beispiele behandeln weder Datenbeschaffung, Filterlogik und Speicherung noch vollständige Abläufe oder die Abnahme von Komponenten.',
    ]),
  ] satisfies Page['content'],
}
