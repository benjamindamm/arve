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
  expectedUpdatedAt: '2026-11-20T08:57:18.726Z',
  summary: 'Ein neues Projekt erfassen und erst nach bestätigter Annahme als erstellt zeigen.',
  content: [
    text('example', 'So beginnt eine Erstellung', [
      'Projekt erstellen',
      'Ein neuer Eintrag beginnt mit einem leeren Namen.',
      'Projektname (erforderlich)',
      '1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.',
      'Projekt erstellen', 'Abbrechen',
      'ID und Status vergibt das System. Erst nach bestätigter Annahme ist das neue Projekt «Aktiv».',
      'Statische Gestaltungsreferenz: Eingabe und Aktionen zeigen den Aufbau; sie erstellen kein Projekt.',
    ]),
    text('error', 'Eingabefehler', [
      'Projektname (erforderlich)', 'Einen Projektnamen eingeben.',
      'Nach dem ersten Absenden steht der Fehler am Feld; der Fokus geht zum Feld. Der eingegebene Wert bleibt erhalten. Ein unberührtes Feld zeigt keinen Fehler.',
      'Bei überlangem Namen: «Den Projektnamen auf höchstens 80 Zeichen kürzen.»',
    ]),
    text('pending', 'Übermittlung läuft', [
      'Projekt wird erstellt …',
      'Die Meldung steht vor den Aktionen. Erneutes Absenden ist blockiert. Ein laufender Vorgang ist noch kein Erfolg.',
    ]),
    text('confirmed', 'Bestätigte Annahme', [
      'Projekt erstellt', 'Website erneuern', 'Aktiv',
      'Zur Detailseite des bestätigt erstellten Projekts wechseln. Name, systemvergebene ID und Bestätigung zeigen; den Suchkontext q/status erhalten.',
    ]),
    text('unknown', 'Ergebnis unbekannt', [
      'Es ist noch unklar, ob das Projekt erstellt wurde',
      'Die Eingabe und der Vorgangsbezug bleiben erhalten. Kein erneutes Absenden und kein bedienbares «Status prüfen»: Die erforderliche Statusklärung ist im Piloten noch nicht verfügbar.',
    ]),
    text('decisions', 'Für den Entwurf beachten', [
      'Anders als edit beginnt create ohne vorhandenen Eintrag und ohne bestätigten Ausgangsnamen. edit lädt den Namen eines aktiven Projekts; create startet leer und legt einen neuen Eintrag an.',
      'Der Pilot hat nur das Feld Projektname. Namen umfassen nach Entfernen von Rand-Leerraum 1–80 Unicode-Graphemcluster; gleiche Namen sind erlaubt. ID und Status sind keine Eingaben.',
      'Unverändert leer führt Abbrechen zur Liste. Bei ungespeicherten Änderungen erst «Ungespeicherte Änderungen verwerfen?» mit «Weiterbearbeiten» und «Verwerfen» klären. Angaben gehen beim Verwerfen verloren; ein dauerhafter Entwurf ist nicht vorgesehen.',
      'Bei laufendem oder unbekanntem Vorgang bedeutet Verlassen keinen Stopp der Anfrage. Der führende Formularvertrag beschreibt die Verlassenswarnung und die Vorrangregel für ungeklärte Speicherung.',
    ], [['edit · vorhandenen Namen bearbeiten', '/systems/shadcn/page-type-edit']]),
    text('regions', 'Breit und schmal dieselbe Reihenfolge', [
      'Titel und Kontext → Projektname mit Hilfe und gegebenenfalls Fehler → Vorgangsmeldung → Projekt erstellen → Abbrechen. ID und Status als Systemhinweis, nicht als bearbeitbare Felder.',
      'Der Seiteninhalt bleibt einspaltig. Ab 640 px verfügbarer Inhaltsbreite stehen die Aktionen nebeneinander; darunter untereinander, Hauptaktion zuerst. Hilfe und Fehler umbrechen, die Aktionen bleiben im normalen Seitenfluss.',
    ]),
    text('contract', 'Ablauf und Vertrag vertiefen', [
      'Die Varianten zeigen Ausschnitte desselben lokalen Gestaltungs-Piloten. Ausdrückliche Nichtannahme ist vom unbekannten Ergebnis zu unterscheiden: Eingaben erhalten, belegte Ursache erklären und erst bei bestätigter Nichtannahme und behobener Ursache erneut senden.',
      'Vollständige Regeln für Prüfzeitpunkt, Fokus, Korrektur, Abbruch, Verlassen und Rückkehr stehen im führenden Formularvertrag.',
    ], [
      ['Formulare und Validierung · vollständiger Ablauf', '/systems/shadcn/formulare-validierung'],
      ['Gestaltungs-Pilot · Umfang und Entscheidungsstand', '/systems/shadcn/gestaltungs-pilot'],
    ]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Grundlage: veröffentlichter CMS-/MCP-Stand von shadcn-page-type-create am 20.11.2026 (zuvor Titel und ein Satz), sowie die veröffentlichten Seiten Formulare und Validierung und Gestaltungs-Pilot. shadcn dient als Referenzimplementierung.',
      'Diese Seite visualisiert bestehende lokale Pilotentscheidungen; sie führt keine neue Feldgrenze oder Produktfreigabe ein. Die Beispiele haben keinen Backend-Anschluss. Speicherung, Statusklärung, Verwerfendialog, Fokuswechsel und Statusansagen sind hier nicht implementiert und durch die statische Referenz nicht nachgewiesen.',
      'Tastatur-, Screenreader-, Zoom- und Touch-Prüfung des tatsächlichen Formularablaufs sowie Integration und unabhängiger Review bleiben offen.',
    ]),
  ] satisfies Page['content'],
}
