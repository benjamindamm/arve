import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = { version: 1, direction: 'ltr' as const, format: '' as const, indent: 0 }
const node = (text: string) => ({ type: 'text', version: 1, text })
const text = (key: string, title: string, paragraphs: string[], links: [string, string][] = []): Block => ({
  blockType: 'text', blockName: key, body: { root: { ...base, type: 'root', children: [
    { ...base, type: 'heading', tag: 'h2', children: [node(title)] },
    ...paragraphs.map(value => ({ ...base, type: 'paragraph', children: [node(value)] })),
    ...links.map(([label, url]) => ({ ...base, type: 'paragraph', children: [{ ...base, type: 'link', fields: { url, linkType: 'custom', newTab: false }, children: [node(label)] }] })),
  ] } },
})
// Published CMS sources read 20 November 2026 with push:false and a read-only DB connection.
export const release = {
  expectedUpdatedAt: '2026-11-20T17:12:35.800Z',
  summary: 'Zusammengehörige Formularfelder in einer klaren Reihenfolge anordnen.',
  content: [
    text('goals', 'Allgemeine UX-Regeln · Formulare anordnen', [
      'Zusammengehörige Angaben, Hilfe und Fehlermeldungen so anordnen, dass ihre Zuordnung verständlich bleibt und die Reihenfolge der Aufgabe folgt.',
      'Für längere Beschriftungen und Rückmeldungen sowie wenig verfügbaren Platz vorsorgen. Die logische Reihenfolge erhalten; Inhalte und Aktionen müssen erreichbar bleiben.',
      'Aktionen verständlich zuordnen und ihre Priorität erkennbar machen. Spalten, Abstände und die Anordnung von Aktionen anhand des Inhalts und der Zielumgebung festlegen.',
    ]),
    text('example-scope', 'Festlegungen für das Projektbeispiel', [
      'Die folgende Vorschau zeigt das lokale Webbeispiel «Projekt bearbeiten». Das einzelne Namensfeld mit seiner Grenze von 1 bis 80 Zeichen, die Reihenfolge Label → Eingabe → Hilfe → Fehler, die einspaltige Anordnung, 640 px maximale Formularbreite, 24 px Gruppenabstand und die Aktionsanordnung sind Festlegungen dieses Beispiels. Sie sind keine allgemeinen Vorgaben für andere Formulare oder Plattformen.',
    ]),
    text('example', 'Projekt bearbeiten', [
      'Zustand ansehen', 'Normal', 'Mit Feldfehler',
      'Layoutvorschau · Wähle einen Zustand, um die Anordnung mit und ohne Feldfehler zu vergleichen. Das Feld ist schreibgeschützt; «Änderungen speichern» und «Abbrechen» sind nicht bedienbar.',
    ]),
    text('field', 'Projektname (erforderlich)', [
      'Neues Kundenportal', '1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.', 'Einen Projektnamen eingeben.',
    ]),
    text('actions', 'Formularaktionen', ['Änderungen speichern', 'Abbrechen']),
    text('anatomy', 'So ist die Feldgruppe aufgebaut', [
      'Label → Eingabe → Hilfe → gegebenenfalls Fehler. Die Beschriftung bleibt über dem Feld; ein Fehler ergänzt die Hilfe direkt darunter.',
      'Die Vorschau zeigt dasselbe Feld in zwei Zuständen: ausgefüllt oder leer mit einer Fehlermeldung nach erfolglosem Absenden. Beim Wechsel wird keine Eingabe geprüft.',
    ]),
    text('rules', 'Anordnung im Projektbeispiel', [
      'Im Projektbeispiel sind die Felder in einer Spalte angeordnet und das Formular ist auf 640 px Breite begrenzt. Jede Feldgruppe folgt der Reihenfolge Label, Eingabe, Hilfe und gegebenenfalls Fehler. Zwischen mehreren Gruppen liegen 24 px Abstand.',
      'Text braucht Platz: Labels, Hilfe und Fehler dürfen mehrzeilig werden. Nachfolgende Inhalte rücken nach unten; die Reihenfolge bleibt auf schmalen Flächen erhalten.',
      'Im Projektbeispiel folgen die Aktionen auf das Feld: «Änderungen speichern» steht vor «Abbrechen». Sind weniger als 640 px Formularbreite verfügbar, stehen beide untereinander und nutzen die volle Breite.',
    ], [['Prüfzeitpunkt und Formularablauf: Formulare und Validierung', '/systems/shadcn/formulare-validierung']]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Grundlage: veröffentlichter CMS-Stand shadcn-content-layout-form-layout (20. November 2026, 13:30 UTC) und shadcn-formulare-validierung (20. November 2026, 08:04 UTC). Diese Seite beschreibt die Anordnung der Felder und verwendet die vorhandenen Beispieltexte. «Formulare und Validierung» erklärt das Formularverhalten: die Feldtexte, wann Eingaben geprüft werden, wohin der Fokus wechselt, wie Fehler korrigiert werden und welche Ergebnisse beim Speichern möglich sind.',
      'Die maximale Formularbreite von 640 px und die untereinander angeordneten Aktionen bei weniger als 640 px verfügbarer Inhaltsbreite stammen aus der bestehenden lokalen Gestaltungsreferenz. Der Abstand von 24 px zwischen Feldgruppen stand bereits auf dieser Layoutseite. Diese Masse gelten für die hiesige Referenzgestaltung; sie sind keine allgemeine Vorgabe von shadcn.',
      'Das Beispiel passt sich der verfügbaren Breite an und ersetzt die bisherigen getrennten Darstellungen für breite und schmale Flächen. Die Zustandsauswahl zeigt nur eine Vorschau. Das Feld lässt sich nicht bearbeiten, Eingaben werden nicht geprüft und die Formularaktionen lösen weder Navigation noch Speicherung aus. Daraus entstehen keine zusätzlichen fachlichen Regeln; ein allgemeiner Nachweis für Barrierefreiheit ist damit nicht erbracht.',
    ], [['Input', '/systems/shadcn/components/input'], ['Button', '/systems/shadcn/components/button']]),
  ] satisfies Page['content'],
}
