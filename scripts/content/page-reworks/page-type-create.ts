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
export const release = {
  expectedUpdatedAt: '2026-11-20T17:00:27.093Z',
  summary: 'Ein neues Projekt erfassen und die Erstellung erst bestätigen, wenn sie sicher abgeschlossen ist.',
  content: [
    text('goals', 'Allgemeine UX-Regeln · Neue Einträge erstellen', [
      'Beim Erstellen muss erkennbar sein, was neu angelegt wird, welche Angaben dafür erforderlich sind und welche Angaben das System ergänzt.',
      'Eingaben bei Fehlern erhalten und Korrekturen verständlich ermöglichen. Vor dem Verlust ungespeicherter Angaben schützen; Folgen eines Abbruchs oder Verlassens erklären.',
      'Eine laufende Anfrage und ein bestätigtes Ergebnis unterscheiden. Bei ungeklärtem Ergebnis den Stand und den nächsten sicheren Schritt erklären und unbeabsichtigte doppelte Einträge verhindern. Nach erfolgreichem Erstellen Orientierung und Kontext erhalten.',
    ]),
    text('example-scope', 'Festlegungen für das Projektbeispiel', [
      'Die folgenden Festlegungen gelten für das lokale Webbeispiel «Projekt erstellen». Feldumfang, Namensgrenze, Prüfzeitpunkte, Status, Texte, Navigation und die Grenze von 640 px sind Entscheidungen dieses Beispiels. Sie sind keine allgemeinen Vorgaben für andere Formulare oder Plattformen; dort müssen passende fachliche und gestalterische Entscheidungen getroffen werden.',
    ]),
    text('example', 'So beginnt eine Erstellung', [
      'Projekt erstellen',
      'Ein neuer Eintrag beginnt mit einem leeren Namen.',
      'Projektname (erforderlich)',
      '1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.',
      'Projekt erstellen', 'Abbrechen',
      'ID und Status vergibt das System. Erst wenn die Erstellung bestätigt ist, hat das neue Projekt den Status «Aktiv».',
      'Statisches Gestaltungsbeispiel: Das Feld und die Aktionen zeigen den Aufbau. Hier lässt sich kein Projekt erstellen.',
    ]),
    text('error', 'Eingabefehler', [
      'Projektname (erforderlich)', 'Einen Projektnamen eingeben.',
      'Nach dem ersten Absenden erscheint der Fehler am Feld, und das Feld erhält den Fokus. Der eingegebene Wert bleibt erhalten. Ein unberührtes Feld zeigt keinen Fehler.',
      'Bei überlangem Namen: «Den Projektnamen auf höchstens 80 Zeichen kürzen.»',
    ]),
    text('pending', 'Übermittlung läuft', [
      'Projekt wird erstellt …',
      'Die Meldung steht vor den Aktionen. Erneutes Absenden ist blockiert. Ein laufender Vorgang ist noch kein Erfolg.',
    ]),
    text('confirmed', 'Erstellung bestätigt', [
      'Projekt erstellt', 'Website erneuern', 'Aktiv',
      'Erst wenn die Erstellung bestätigt ist, zur Detailseite des neuen Projekts wechseln. Dort den Namen, die vom System vergebene ID und die Bestätigung zeigen. Die Suchparameter q/status bleiben erhalten.',
    ]),
    text('unknown', 'Ergebnis unbekannt', [
      'Es ist noch unklar, ob das Projekt erstellt wurde',
      'Die Eingabe und der Bezug zur Anfrage bleiben erhalten. Solange das Ergebnis unbekannt ist, gibt es weder erneutes Absenden noch Verwerfen. Zuerst muss das Ergebnis geklärt werden. Die dafür benötigte Funktion ist im Piloten noch nicht verfügbar; «Status prüfen» darf deshalb noch nicht bedienbar sein.',
    ]),
    text('decisions', 'Entscheidungen im Projektbeispiel', [
      'create beginnt mit einem leeren Formular und erstellt einen neuen Eintrag. edit lädt dagegen den bestätigten Namen eines bestehenden aktiven Projekts zur Bearbeitung.',
      'Der Pilot hat nur das Feld Projektname. Nach dem Entfernen von Leerraum am Anfang und Ende muss der Name 1 bis 80 Zeichen lang sein. Gezählt werden Unicode-Graphemcluster, also zusammengehörige Zeichen. Gleiche Namen sind erlaubt. ID und Status vergibt das System.',
      'Ist das Formular noch unverändert leer, führt «Abbrechen» zur Liste. Bei ungespeicherten Änderungen erscheint zuerst «Ungespeicherte Änderungen verwerfen?» mit «Weiterbearbeiten» und «Verwerfen». Die Angaben gehen beim Verwerfen verloren; der Entwurf wird nicht dauerhaft gespeichert.',
      'Wer die Seite während einer laufenden Anfrage oder bei unbekanntem Ergebnis verlässt, stoppt damit die Anfrage nicht. Vor dem Verlassen erscheint deshalb eine Warnung. Ist das Ergebnis unbekannt, muss es zuerst geklärt werden; die Nachfrage zum Verwerfen wird dann nicht angeboten. Die vollständigen Regeln für Warnung und Rückkehr stehen unter «Formulare und Validierung».',
    ], [['edit · vorhandenen Namen bearbeiten', '/systems/shadcn/page-type-edit']]),
    text('regions', 'Projektbeispiel · Breit und schmal dieselbe Reihenfolge', [
      'Titel und Kontext → Projektname mit Hilfe und gegebenenfalls Fehler → Meldung zum Vorgang → Projekt erstellen → Abbrechen. ID und Status erscheinen als Hinweis, nicht als bearbeitbare Felder.',
      'Der Seiteninhalt bleibt einspaltig. Ab 640 px verfügbarer Inhaltsbreite stehen die Aktionen nebeneinander; darunter untereinander, Hauptaktion zuerst. Hilfe und Fehler umbrechen, die Aktionen bleiben im normalen Seitenfluss.',
    ]),
    text('contract', 'Ablauf und Vertrag vertiefen', [
      'Die Varianten zeigen Ausschnitte desselben lokalen Gestaltungs-Piloten. Eine ausdrücklich abgelehnte Anfrage ist von einem unbekannten Ergebnis zu unterscheiden. Bei einer Ablehnung bleiben die Eingaben erhalten, und die nachgewiesene Ursache wird erklärt. Erneutes Senden ist erst möglich, wenn bestätigt ist, dass die Anfrage nicht angenommen wurde, und die Ursache behoben ist.',
      'Die vollständigen Regeln für Prüfzeitpunkt, Fokus, Korrektur, Abbruch, Verlassen und Rückkehr stehen unter «Formulare und Validierung».',
    ], [
      ['Formulare und Validierung · vollständiger Ablauf', '/systems/shadcn/formulare-validierung'],
      ['Gestaltungs-Pilot · Umfang und Entscheidungsstand', '/systems/shadcn/gestaltungs-pilot'],
    ]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Grundlage: veröffentlichter CMS-/MCP-Stand von shadcn-page-type-create am 20.11.2026 (zuvor Titel und ein Satz), sowie die veröffentlichten Seiten Formulare und Validierung und Gestaltungs-Pilot. shadcn dient als Referenzimplementierung.',
      'Diese Seite zeigt die bereits festgelegten Regeln des lokalen Piloten. Sie legt keine neue Feldgrenze fest und erteilt keine Produktfreigabe. Die Beispiele sind nicht mit einem Server verbunden. Speichern, Statusklärung, Nachfrage zum Verwerfen, Fokuswechsel und Statusansagen sind hier nicht umgesetzt und lassen sich an den statischen Beispielen nicht prüfen.',
      'Der tatsächliche Formularablauf muss noch mit Tastatur, Screenreader, Zoom und Touch geprüft werden. Auch Integration und unabhängige Prüfung stehen noch aus.',
    ]),
  ] satisfies Page['content'],
}
