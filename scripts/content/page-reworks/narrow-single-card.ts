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
  expectedUpdatedAt: '2026-11-20T14:03:10.556Z',
  summary: 'Eine kurze Aufgabe in einer zentrierten Card; auf breiter Fläche bleibt bewusst Platz daneben.',
  content: [
    text('example', 'Eine Aufgabe mit ruhigem Aussenraum',
      'Breite Fläche · Card maximal 28 rem',
      'Projekt umbenennen', 'Der Name hilft deinem Team, das Projekt wiederzufinden.',
      'Projektname', 'Quartiergarten', 'Verwende einen kurzen, eindeutigen Namen.',
      'Abbrechen', 'Namen speichern',
      'Lokale Vorschau: Eingaben werden nur in diesem Beispiel übernommen.',
      'Name in der Vorschau übernommen.', 'Eingabe auf den Ausgangswert zurückgesetzt.',
      'Schmale Fläche · lange Texte und Aktionsnamen',
      'Projekt für die gemeinsame Quartierentwicklung umbenennen',
      'Wähle einen Namen, den alle Beteiligten auch in einer langen Projektliste eindeutig erkennen. Diese längere Hilfe bleibt Teil derselben kurzen Aufgabe.',
      'Name des gemeinsamen Quartierentwicklungsprojekts',
      'Quartiergarten – gemeinsamer Entwurf für die nächste Planungssitzung',
      'Änderung verwerfen und zurücksetzen', 'Neuen Projektnamen übernehmen',
      'Die zweite Vorschau ist auf 22 rem begrenzt und schrumpft bei weniger Platz mit. Beide zeigen dieselbe Aufgabe; lange Beschriftungen und Aktionen dürfen mehrzeilig werden.'),
    text('rules', 'Drei Regeln für den Entwurf',
      '1. Breite begrenzen, Aufgabe zusammenhalten: Die Card hat hier width: 100% und max-width: 28rem. Auf breiter Fläche wird sie horizontal zentriert; auf schmaler Fläche nutzt sie den Platz innerhalb des Aussenabstands vollständig. 28 rem ist eine lokale Beispielentscheidung, kein Systemtoken. Die Höhe wächst mit dem Inhalt.',
      '2. Eine kurze Aufgabe abschliessen: Titel, kurze Hilfe, ein benanntes Feld und die zugehörigen Aktionen bilden einen Zusammenhang. Das Feld füllt die innere Breite. Keine zweite Card um den Seiteninhalt legen und keine unabhängigen Aufgaben in diese Card zwängen.',
      '3. Umbruch vor Abschneiden: Lange Titel, Feldbeschriftungen und Hilfen umbrechen lassen. Aktionen stehen nebeneinander, solange sie passen, und dürfen in weitere Zeilen wechseln. Unter 26 rem verfügbarer Beispielbreite stehen die Buttons in voller Breite untereinander; jeder ist mindestens 44 px hoch. Einzeilige Eingaben scrollen ihren Text intern, ohne die Card zu verbreitern.'),
    text('usage', 'Wann einsetzen – wann vermeiden?',
      'Einsetzen für eine fokussierte, kurze Aufgabe wie das Umbenennen eines Projekts. Der freie Raum lenkt den Blick auf die Aufgabe und hält die Zeilen kurz.',
      'Vermeiden für Tabellen, breite Vergleiche, umfangreiche Formulare oder mehrere unabhängige Abschnitte. Wide Single Card nutzt die verfügbare Containerbreite für einen zusammengehörigen Inhalt. Narrow Single Card bleibt auch bei viel Platz begrenzt; zusätzliche Breite ist hier Aussenraum.',
      'Prüfe echte lange Inhalte und vergrösserte Schrift. Werden Hilfe und Formular umfangreich, wähle ein passenderes Layout statt die Card mit verschachtelten Flächen oder einer festen Innenhöhe zu verdichten.'),
    text('sources', 'Quellen und Prüfgrenzen',
      'Die bisherige CMS-Seite shadcn-narrow-single-card führte nur Titel und Kurzbeschreibung. Die lokale Layoutübersicht scripts/content/page-reworks/page-layouts.ts beschreibt die begrenzte Card im Unterschied zur breiten Variante.',
      'Die interne visuelle Layoutanalyse, Tabelle «Layouts und Varianten», enthält keinen eigenständigen beobachteten Seitenbeleg für Narrow Single Card. Das vorliegende Beispiel ist eine neue synthetische Gestaltung für die shadcn-Referenz; es behauptet keine beobachtete Implementierung.',
      '28 rem Cardbreite, 22 rem schmale Vorschau und 26 rem Umschaltgrenze sind lokale CSS-Entscheidungen. Das Formular demonstriert nur Eingabe, Übernehmen und Zurücksetzen im Browser. Es speichert keine Projektdaten. Eine vollständige Prüfung mit Screenreadern, allen Textgrössen oder beliebig langen Übersetzungen ist damit nicht nachgewiesen.'),
  ] satisfies Page['content'],
}
