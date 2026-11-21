import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = { version: 1, direction: 'ltr' as const, format: '' as const, indent: 0 }
const node = (text: string) => ({ type: 'text', version: 1, text })
const text = (blockName: string, title: string, ...paragraphs: string[]): Block => ({
  blockType: 'text', blockName, body: { root: { ...base, type: 'root', children: [
    { ...base, type: 'heading', tag: 'h2', children: [node(title)] },
    ...paragraphs.map(p => ({ ...base, type: 'paragraph', children: [node(p)] })),
  ] } },
})
export const release = {
  expectedUpdatedAt: '2026-11-20T14:04:38.248Z',
  summary: 'Mehrere Themen zu einem Objekt stehen in gleich breiten Karten untereinander.',
  content: [
    text('example', 'Ein Projekt, drei Themen',
      'Breite Ansicht · ein gemeinsamer Kartenstapel',
      'Projekt Garten', 'Entwurf · Stand 20. November 2026',
      'Hinweis zum Layout: Alle Abschnitte gehören zum gleichen Quartiergarten. Jede Karte fasst ein Thema dieses Projekts zusammen.',
      'Schmale Ansicht · gleiche Reihenfolge',
      'Übersicht → Termine → Unterlagen: Die Karten stehen auch in der breiten Ansicht untereinander. Kurze Angaben innerhalb einer Karte können nebeneinander stehen.'),
    text('project-overview', 'Übersicht',
      'Eine gemeinsame Grünfläche mit Sitzplätzen, Beeten und barrierearmem Zugang. Der aktuelle Entwurf sammelt die Ziele für die nächste Besprechung.',
      'Verantwortung', 'Projektteam Garten', 'Phase', 'Abstimmung',
      'Längeren Abschnitt öffnen',
      'Der Weg zwischen Eingang und Sitzbereich soll auch bei hoher Auslastung frei bleiben. Das Team prüft deshalb die Abstände mit dem Plan vor Ort. Rückmeldungen zur Bepflanzung werden gemeinsam mit den Vorschlägen für die Sitzplätze besprochen.',
      'Hinweis zum Layout: Auch die längere Zusammenfassung gehört zur Übersicht des Projekts. Die Karte wird mit dem Text höher, und die folgenden Karten stehen entsprechend weiter unten. Es gibt keine feste Kartenhöhe, die den Text abschneidet.'),
    text('project-dates', 'Termine',
      'Die nächsten beiden Schritte im Projekt:',
      '26. November', 'Entwurf vor Ort besprechen',
      '3. Dezember', 'Rückmeldungen bündeln und die überarbeitete Planung für die gemeinsame Entscheidung vorbereiten'),
    text('project-documents', 'Unterlagen',
      'Dokumente zum aktuellen Entwurf',
      'Lageplan des Quartiergartens · PDF · 2 Seiten',
      'Zusammenfassung der Rückmeldungen zur Bepflanzung und zu den gemeinsam nutzbaren Sitzplätzen · PDF · 6 Seiten'),
    text('rules', 'Drei Regeln für den Entwurf',
      'Ein Objekt, wenige Themen: Den gemeinsamen Projektkopf über die Karten setzen und jede Karte mit einer eindeutigen Abschnittsüberschrift beginnen. Termine und Dokumentzeilen bleiben innerhalb ihrer Themenkarte. Eine eigene Karte für jede Zeile würde diese Zusammenhänge aufteilen.',
      'Aussenkante und Reihenfolge erhalten: In diesem Beispiel haben alle Karten dieselbe Breite. Kurze Angaben mit Beschriftung und Wert stehen in der breiten Ansicht innerhalb ihrer Karte nebeneinander. Unter 32 rem verfügbarer Beispielbreite stehen sie untereinander. Die Reihenfolge Kopf → Übersicht → Termine → Unterlagen bleibt im Dokument und auf dem Bildschirm gleich. Die Grenze von 32 rem gilt für dieses Beispiel und ist kein Systemtoken.',
      'Inhalt wachsen lassen: Keine feste Höhe und keine eigene Scrollfläche pro Karte vorsehen. Lange Titel, Dateinamen und Texte umbrechen lassen. Für einen fortlaufenden Text oder wenige eng zusammengehörige Angaben reichen Überschriften und Abstand zwischen den Abschnitten. Kartenrahmen sind sinnvoll, wenn sie eigenständige Themen erkennbar voneinander trennen.'),
    text('sources', 'Quellen und Prüfgrenzen',
      'Die lokale visuelle Layoutanalyse zeigt in «Layouts und Varianten» und den Inventareinträgen V02 und V20 Themenkarten untereinander, die zu einem gemeinsamen Objekt gehören. Unterschiedliche Kartenbreiten sind dort eine mögliche Variante. Diese Beobachtung belegt keine technische Umsetzung.',
      'Die zuvor inhaltlich leere CMS-Seite shadcn-stacked-section-cards nannte mehrere Abschnittskarten untereinander. Die Projekttexte, die einheitliche Kartenbreite, die Anordnung kurzer Angaben innerhalb der Karten und die Umschaltgrenze von 32 rem wurden für dieses fiktive Beispiel in der shadcn-Referenz festgelegt. Daraus ergeben sich keine zusätzlichen Systemtokens oder zugesicherten Fähigkeiten der Komponenten.',
      'Die beiden Ansichten zeigen denselben Inhalt und eine Langfassung, die sich mit dem nativen Aufklappelement öffnen lässt. Die Unterlagen sind beschriftete Beispielzeilen ohne Downloadfunktion. Eine vollständige Prüfung mit Tastatur und Screenreader steht noch aus. Auch die Darstellung bei allen Schriftvergrösserungen und mit beliebig langen Inhalten ist damit nicht nachgewiesen.'),
  ] satisfies Page['content'],
}
