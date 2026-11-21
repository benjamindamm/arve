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
  expectedUpdatedAt: '2026-11-20T13:59:31.356Z',
  summary: 'Hauptinhalt links, ergänzende Informationen rechts; auf schmaler Fläche folgen sie darunter.',
  content: [
    text('example', 'Ein Inhalt, zwei klar gewichtete Bereiche',
      'Breites Beispiel · passt sich der verfügbaren Fläche an',
      'Optionaler Seitenkopf', 'Projektübersicht', 'Optionale Abschnittsnavigation', 'Überblick', 'Nächste Schritte',
      'Hauptbereich · 2 Teile', 'Projekt Garten',
      'Der Quartiergarten verbindet eine gemeinsame Grünfläche mit kleinen Arbeitsbereichen. Diese Übersicht beschreibt den aktuellen Entwurf und die nächsten Absprachen.',
      'Überblick',
      'Im Mittelpunkt stehen die Zugänge, die Bepflanzung und die gemeinsam nutzbaren Flächen. Der Entwurf sammelt die vereinbarten Ziele an einem Ort und erklärt, welche Fragen noch offen sind.',
      'Nächste Schritte',
      'Zuerst werden die Wege und Sitzplätze vor Ort besprochen. Danach ergänzt das Team den Plan um die Rückmeldungen.',
      'Längeren Inhalt ansehen',
      'Für die nächste Besprechung werden Vorschläge gesammelt und nach Themen geordnet.',
      'Zusatzbereich · 1 Teil', 'Projektinfos', 'Stand', 'Entwurf', 'Zeitraum', 'Frühjahr',
      'Zusatzlinks', 'Zum Projektüberblick', 'Zu den nächsten Schritten',
      'Schmales Beispiel · gleiche Lesereihenfolge',
      'Die Projektzusammenfassung steht im Hauptbereich, ergänzende Informationen und Links in der Sidebar. Auch bei längerem Haupttext bleibt die Sidebar im breiten Beispiel daneben und verdeckt keinen Text. Alle Abschnitte bleiben im normalen Lesefluss. Die Abschnittsnavigation führt zu den Abschnitten im jeweiligen Beispiel.'),
    text('rules', 'Drei Regeln für den Entwurf',
      'Nutze das Layout, wenn ein Hauptinhalt klar überwiegt und kurze Zusatzinfos beim Lesen helfen. Für gleichrangige Inhalte oder eine einzige kurze Aufgabe genügt meist eine Spalte. Eine zweite Spalte ist nicht zwingend nötig.',
      'Anordnung nach verfügbarer Breite: In diesem Beispiel stehen ab 42 rem Haupt- und Zusatzbereich im Verhältnis 2:1 nebeneinander. Bei weniger Platz stehen sie untereinander: Kopf, Navigation, Hauptinhalt, Zusatzinfos. Die 42 rem beziehen sich auf die Breite des Beispiels und sind kein Systemtoken. Lange Wörter und Links müssen umbrechen können.',
      'Sidebar beim Scrollen: Nur die kurze Sidebar des breiten Beispiels bleibt ab 50 rem Fensterhöhe mit 5 rem Abstand zum oberen Rand sichtbar (sticky). Bei schmaler Fläche oder niedrigerem Fenster läuft sie normal mit. Auch lange Zusatzinhalte sollen normal mitlaufen. Sie dürfen keine Inhalte überdecken, keine feste Position haben und keine zweite Scrollfläche erfordern.'),
    text('responsive', 'Lange Inhalte und Lesereihenfolge',
      'Öffne «Längeren Inhalt ansehen» und scrolle: Der Hauptinhalt darf unabhängig von der kürzeren Zusatzspalte wachsen. In der schmalen Vorschau folgen die Zusatzinfos vollständig nach dem Hauptinhalt. Die Reihenfolge im Dokument bleibt in beiden Darstellungen gleich.',
      'Informationen, die zum Verstehen oder Abschliessen der Aufgabe nötig sind, gehören an die passende Stelle im Hauptinhalt. Sie dürfen nicht erst nach einem sehr langen Hauptbereich in der Zusatzspalte auftauchen. Prüfe den Entwurf mit echten langen Texten, vergrösserter Schrift und niedriger Fensterhöhe.'),
    text('sources', 'Quellen und Prüfgrenzen',
      'Das lokale Layout-Mapping der visuellen Referenz beschreibt im Abschnitt «Layouts und Varianten» einen grossen Hauptbereich mit ergänzender Inhaltsspalte. Bei wenig Platz stehen die Bereiche untereinander. Daraus wurde das hier gezeigte Layout abgeleitet. Diese Beobachtung und der Gestaltungsvorschlag belegen keine bestimmte Implementierung.',
      'Die zuvor leere CMS-Seite shadcn-main-sidebar benannte einen grossen Hauptbereich mit schmalerer Seitenleiste. Die Projekttexte und beide CSS-Beispiele wurden für diese shadcn-Referenz erstellt. Das Verhältnis 2:1, die 42 rem Breite, die 50 rem Fensterhöhe und die 5 rem Abstand für sticky gelten nur für diese Beispiele und sind keine Bibliothekstokens.',
      'Die Beispiele zeigen das Layout und Links zu den Abschnitten. Sie sind keine Anwendung, keine allgemeine Navigationskomponente und kein freigegebener Projektvertrag. Sie belegen keine Prüfung der Bedienung mit Tastatur und Screenreader oder der Darstellung bei allen Textgrössen und mit beliebig langen Zusatzinhalten.'),
  ] satisfies Page['content'],
}
