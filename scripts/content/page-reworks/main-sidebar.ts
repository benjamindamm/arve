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
  expectedUpdatedAt: '2026-11-20T13:58:14.914Z',
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
      'Zuerst werden die Wege und Sitzplätze vor Ort besprochen. Danach ergänzt das Team den Plan um die Rückmeldungen. Die Zusammenfassung bleibt im Hauptbereich; zusätzliche Unterlagen sind über die rechte Spalte erreichbar.',
      'Längeren Inhalt ansehen',
      'Für die nächste Besprechung werden Vorschläge gesammelt und nach Themen geordnet. Jeder Abschnitt bleibt Teil des normalen Leseflusses. Auch wenn dieser Hauptbereich wächst, bleibt die ergänzende Spalte ein eigener Bereich daneben und verdeckt keine Textzeile.',
      'Zusatzbereich · 1 Teil', 'Projektinfos', 'Stand', 'Entwurf', 'Zeitraum', 'Frühjahr',
      'Zusatzlinks', 'Zum Projektüberblick', 'Zu den nächsten Schritten',
      'Schmales Beispiel · gleiche Lesereihenfolge',
      'Der Zusatzbereich ergänzt die Hauptaufgabe. Die Abschnittsnavigation verweist hier auf echte Abschnitte im jeweiligen Beispiel.'),
    text('rules', 'Drei Regeln für den Entwurf',
      'Einsetzen, wenn ein Hauptinhalt klar überwiegt und kurze Zusatzinfos beim Lesen helfen. Für gleichrangige Inhalte oder eine einzige kurze Aufgabe genügt meist eine Spalte; eine zweite Spalte ist kein Pflichtbereich.',
      'Breite nach Inhalt: In dieser lokalen Studie stehen ab 42 rem verfügbarer Beispielbreite Haupt- und Zusatzbereich im Verhältnis 2:1 nebeneinander. Darunter werden sie gestapelt: Kopf, Navigation, Hauptinhalt, Zusatzinfos. 42 rem ist die Umschaltgrenze dieser Studie, kein Systemtoken. Lange Wörter und Links müssen umbrechen können.',
      'Mitlaufend statt überdeckend: Nur die kurze Sidebar des breiten Beispiels wird ab 50 rem Fensterhöhe mit 5 rem Abstand zum oberen Rand sticky. Bei schmaler Fläche oder niedrigerem Fenster läuft sie normal mit. Lange Zusatzinhalte ebenfalls normal mitlaufen lassen; keine feste Position und keine zweite zwingende Scrollfläche vorsehen.'),
    text('responsive', 'Lange Inhalte und Lesereihenfolge',
      'Öffne «Längeren Inhalt ansehen» und scrolle: Der Hauptinhalt darf unabhängig von der kürzeren Zusatzspalte wachsen. In der schmalen Vorschau folgen die Zusatzinfos vollständig nach dem Hauptinhalt. Die Reihenfolge im Dokument bleibt in beiden Darstellungen gleich.',
      'Informationen, die zum Verstehen oder Abschliessen der Aufgabe nötig sind, gehören an die passende Stelle im Hauptinhalt. Sie dürfen nicht erst nach einem sehr langen Hauptbereich in der Zusatzspalte auftauchen. Prüfe den Entwurf mit echten langen Texten, vergrösserter Schrift und niedriger Fensterhöhe.'),
    text('sources', 'Quellen und Prüfgrenzen',
      'Lokales Layout-Mapping der visuellen Referenz, Abschnitt «Layouts und Varianten». Belegt ist dort die Abstraktion aus grossem Hauptbereich und ergänzender Inhaltsspalte sowie die sequenzielle schmale Anordnung. Das ist eine Beobachtung und ein Gestaltungsvorschlag, kein Nachweis einer bestimmten Implementierung.',
      'Die zuvor leere CMS-Seite shadcn-main-sidebar benannte einen grossen Hauptbereich mit schmalerer Seitenleiste. Die Projekttexte und beide CSS-Kompositionen sind neue synthetische Studien für die shadcn-Referenz. Verhältnis 2:1, 42 rem Breite, 50 rem Fensterhöhe und 5 rem Sticky-Abstand sind lokale Beispielentscheidungen, keine Bibliothekstokens.',
      'Die Beispiele zeigen Layout und Abschnittslinks. Sie bilden keine Anwendung, keine allgemeine Navigationskomponente und keinen freigegebenen Projektvertrag ab. Tastatur-/Screenreaderprüfung, alle Textgrössen und beliebig lange Zusatzinhalte sind dadurch nicht nachgewiesen.'),
  ] satisfies Page['content'],
}
