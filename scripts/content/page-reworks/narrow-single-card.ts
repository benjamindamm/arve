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
  expectedUpdatedAt: '2026-11-20T14:04:47.003Z',
  summary: 'Eine Card für eine kurze Aufgabe: Sie steht mittig und bleibt auch auf breiten Seiten schmal.',
  content: [
    text('example', 'Eine kurze Aufgabe in einer zentrierten Card',
      'Breite Fläche · Card maximal 28 rem',
      'Projekt umbenennen', 'Der Name hilft deinem Team, das Projekt wiederzufinden.',
      'Projektname', 'Quartiergarten', 'Wähle einen kurzen Namen, an dem dein Team das Projekt erkennt.',
      'Zurücksetzen', 'Namen übernehmen',
      'Lokale Vorschau: Eingaben werden nur in diesem Beispiel übernommen.',
      'Name in der Vorschau übernommen.', 'Eingabe auf den Ausgangswert zurückgesetzt.',
      'Schmale Fläche · lange Texte und Buttonbeschriftungen',
      'Projekt für die gemeinsame Quartierentwicklung umbenennen',
      'Wähle einen Namen, an dem alle Beteiligten das gemeinsame Quartierentwicklungsprojekt auch in einer langen Projektliste eindeutig erkennen.',
      'Name des gemeinsamen Quartierentwicklungsprojekts',
      'Quartiergarten – gemeinsamer Entwurf für die nächste Planungssitzung',
      'Änderung verwerfen und zurücksetzen', 'Neuen Projektnamen übernehmen',
      'Die zweite Vorschau ist höchstens 22 rem breit. Steht weniger Platz zur Verfügung, wird sie schmaler. Beide Beispiele zeigen dieselbe Aufgabe. Lange Beschriftungen, auch auf Buttons, dürfen über mehrere Zeilen laufen.'),
    text('rules', 'Drei Regeln für den Entwurf',
      '1. Die Card in der Breite begrenzen: Die Card hat hier width: 100% und max-width: 28rem. Auf breiten Flächen steht sie horizontal zentriert. Auf schmalen Flächen füllt sie den verfügbaren Platz zwischen den äusseren Abständen. Die Grenze von 28 rem wurde für dieses Beispiel gewählt und ist kein Systemtoken. Die Höhe wächst mit dem Inhalt.',
      '2. Die Inhalte auf eine kurze Aufgabe beschränken: Titel, kurze Hilfe, ein beschriftetes Feld und die zugehörigen Aktionen gehören zur selben Aufgabe. Das Feld füllt die innere Breite. Lege keine zweite Card um den gesamten Seiteninhalt und fasse hier keine unabhängigen Aufgaben zusammen.',
      '3. Lange Texte umbrechen lassen: Titel, Feldbeschriftungen und Hilfen dürfen über mehrere Zeilen laufen. Buttons stehen nebeneinander, solange sie passen, und können in weitere Zeilen wechseln. Unter 26 rem verfügbarer Beispielbreite stehen sie in voller Breite untereinander; jeder ist mindestens 44 px hoch. Bei einzeiligen Eingabefeldern scrollt langer Text innerhalb des Feldes, ohne die Card zu verbreitern.'),
    text('usage', 'Wann einsetzen – wann vermeiden?',
      'Nutze das Layout für eine einzelne kurze Aufgabe wie das Umbenennen eines Projekts. Durch die begrenzte Cardbreite bleiben die Textzeilen kurz. Auf breiten Flächen bleibt links und rechts Platz frei.',
      'Für Tabellen, breite Vergleiche, umfangreiche Formulare oder mehrere unabhängige Abschnitte eignet sich das Layout nicht. Wide Single Card nutzt für zusammengehörige Inhalte die verfügbare Containerbreite. Narrow Single Card bleibt auch bei viel Platz schmal; der zusätzliche Platz bleibt neben der Card frei.',
      'Prüfe das Layout mit langen Inhalten aus der Anwendung und mit vergrösserter Schrift. Werden Hilfe und Formular umfangreich, wähle ein passenderes Layout. Zusätzliche verschachtelte Flächen oder eine feste Innenhöhe lösen dieses Platzproblem nicht.'),
    text('sources', 'Quellen und Prüfgrenzen',
      'Die bisherige CMS-Seite shadcn-narrow-single-card enthielt nur Titel und Kurzbeschreibung. Die lokale Layoutübersicht scripts/content/page-reworks/page-layouts.ts beschreibt, wie sich die in der Breite begrenzte Card von der breiten Variante unterscheidet.',
      'Die interne visuelle Layoutanalyse zeigt in der Tabelle «Layouts und Varianten» keine eigenständig beobachtete Seite mit Narrow Single Card. Dieses Beispiel wurde eigens für die shadcn-Referenz entworfen. Es bildet keine beobachtete Implementierung ab.',
      'Die Cardbreite von 28 rem, die schmale Vorschau mit 22 rem und die Umschaltgrenze von 26 rem wurden für dieses Beispiel im CSS festgelegt. Das Formular zeigt nur Eingabe, Übernehmen und Zurücksetzen im Browser. Es speichert keine Projektdaten. Daraus lässt sich keine vollständige Prüfung mit Screenreadern, allen Textgrössen oder beliebig langen Übersetzungen ableiten.'),
  ] satisfies Page['content'],
}
