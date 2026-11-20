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
  expectedUpdatedAt: '2026-11-20T08:57:18.751Z',
  summary: 'Ein Objekt, mehrere Themen: Abschnittskarten führen mit gemeinsamer Aussenkante von oben nach unten.',
  content: [
    text('example', 'Ein Projekt, drei Themen',
      'Breite Ansicht · ein gemeinsamer Kartenstapel',
      'Projekt Garten', 'Entwurf · Stand 20. November 2026',
      'Alle Abschnitte gehören zum gleichen Quartiergarten. Die Karten trennen Themen innerhalb dieses Projekts.',
      'Schmale Ansicht · gleiche Reihenfolge',
      'Übersicht → Termine → Unterlagen. Die Karten bleiben auch auf breiter Fläche untereinander; innerhalb einer Karte können kurze Angaben nebeneinander stehen.'),
    text('project-overview', 'Übersicht',
      'Eine gemeinsame Grünfläche mit Sitzplätzen, Beeten und barrierearmem Zugang. Der aktuelle Entwurf sammelt die Ziele für die nächste Besprechung.',
      'Verantwortung', 'Projektteam Garten', 'Phase', 'Abstimmung',
      'Längeren Abschnitt öffnen',
      'Der Weg zwischen Eingang und Sitzbereich soll auch bei hoher Auslastung frei bleiben. Das Team prüft deshalb die Abstände mit dem Plan vor Ort. Rückmeldungen zur Bepflanzung werden gemeinsam mit den Vorschlägen für die Sitzplätze besprochen.',
      'Die Zusammenfassung hält die offenen Punkte im Projektkontext zusammen. Sie wächst im normalen Lesefluss; die folgenden Themenkarten wandern nach unten. Kein Text wird durch eine feste Kartenhöhe abgeschnitten.'),
    text('project-dates', 'Termine',
      'Zwei Schritte gehören zu diesem Abschnitt; sie benötigen keine eigenen Karten.',
      '26. November', 'Entwurf vor Ort besprechen',
      '3. Dezember', 'Rückmeldungen bündeln und die überarbeitete Planung für die gemeinsame Entscheidung vorbereiten'),
    text('project-documents', 'Unterlagen',
      'Dokumente zum aktuellen Entwurf',
      'Lageplan des Quartiergartens · PDF · 2 Seiten',
      'Zusammenfassung der Rückmeldungen zur Bepflanzung und zu den gemeinsam nutzbaren Sitzplätzen · PDF · 6 Seiten'),
    text('rules', 'Drei Regeln für den Entwurf',
      'Ein Objekt, wenige Themen: Den gemeinsamen Projektkopf über dem Stapel setzen und jede Karte mit einer eindeutigen Abschnittsüberschrift beginnen. Termine und Dokumentzeilen bleiben innerhalb ihrer Themenkarte. Ein Stapel einzelner Zeilenkarten zerlegt den Zusammenhang.',
      'Aussenkante und Reihenfolge erhalten: In dieser Studie haben alle Karten dieselbe Breite. Auf breiter Fläche bilden kurze Label–Wert-Angaben eine bewusste Binnengruppe; unter 32 rem verfügbarer Beispielbreite stehen sie untereinander. Kopf → Übersicht → Termine → Unterlagen bleibt im Dokument und auf dem Bildschirm gleich. 32 rem ist eine lokale Beispielentscheidung, kein Systemtoken.',
      'Inhalt wachsen lassen: Keine feste Höhe und keine eigene Scrollfläche pro Karte. Lange Titel, Dateinamen und Texte umbrechen lassen. Für einen fortlaufenden Text oder wenige eng zusammengehörige Angaben reichen Abschnitte mit Überschriften und Abstand ohne Karten; ein Rahmen ist nur sinnvoll, wenn er eigenständige Themen erkennbar trennt.'),
    text('sources', 'Quellen und Prüfgrenzen',
      'Lokale visuelle Layoutanalyse, Abschnitte «Layouts und Varianten» sowie Inventareinträge V02 und V20: beobachtet wurden vertikale Themenkarten innerhalb eines erhaltenen Objektkontexts; unterschiedliche Kartenbreiten sind dort eine mögliche Variante. Diese Beobachtung weist keine technische Umsetzung nach.',
      'Die bisher leere CMS-Seite shadcn-stacked-section-cards benannte mehrere Abschnittskarten untereinander. Projekttexte, gemeinsame Kartenbreite, Binnengruppen und die Umschaltgrenze von 32 rem sind neue synthetische Gestaltungsentscheidungen für die shadcn-Referenz. Es werden keine zusätzlichen Systemtokens oder Komponentenfähigkeiten zugesichert.',
      'Die zwei Kompositionen zeigen denselben Inhalt und eine native aufklappbare Langfassung. Die Unterlagen sind beschriftete Beispielzeilen ohne Downloadfunktion. Vollständige Tastatur-/Screenreaderprüfung, alle Schriftvergrösserungen und beliebig lange Inhalte sind damit nicht nachgewiesen.'),
  ] satisfies Page['content'],
}
