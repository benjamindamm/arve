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
const links = (key: string, title: string, entries: [string, string][]): Block => ({
  blockType: 'text', blockName: key, body: { root: { ...base, type: 'root', children: [
    { ...base, type: 'heading', tag: 'h2', children: [node(title)] },
    ...entries.map(([label, url]) => ({ ...base, type: 'paragraph', children: [{ type: 'link', version: 3, fields: { linkType: 'custom', url, newTab: false }, children: [node(label)] }] })),
  ] } },
})
export const release = {
  expectedUpdatedAt: '2026-11-20T08:57:18.849Z',
  summary: 'Bestehende Angaben bearbeiten: Ausgangswert zeigen, Änderungen bewusst speichern und Rückwege passend zum Speicherstand gestalten.',
  content: [
    text('example', 'Bestehende Angaben bearbeiten', [
      'Statisches Gestaltungsschema · keine Eingabe, Speicherung oder Navigation. Die Aktionsflächen sind beschriftete Abbildungen.',
      'Projekt bearbeiten', 'Alpen · P-101', 'Aktiv', 'Projektname (erforderlich)', 'Alpen',
      '1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.',
      'Änderungen speichern', 'Abbrechen',
      'Ausgangspunkt: zuletzt bestätigter Name Alpen. ID und Status sind lesbarer Kontext; nur der Name ist bearbeitbar.',
    ]),
    text('rules', 'Drei Entscheidungen für den Entwurf', [
      'Kontext vor Eingabe: Objekt, bestätigter Ausgangswert und Berechtigung müssen feststehen. Archivierte Projekte bleiben lesbar und haben keine Speichern-Aktion.',
      'Explizit speichern: Eingabe und Verlassen des Felds speichern nichts. Unverändert speichern zeigt «Keine Änderungen zu speichern.» beim Aktionsbereich, sendet keine Anfrage und bleibt auf der Seite.',
      'Rückweg am Speicherstand ausrichten: unverändert direkt zum Detail; geändert und noch nicht übermittelt mit Verwerfennachfrage. Laufender oder unbekannter Speicherausgang benötigt einen eigenen Verlassenshinweis.',
    ]),
    text('normal', 'Normal · bestätigt geöffnet, noch unverändert', [
      'Projektname (erforderlich)', 'Alpen', '1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.',
      'Keine Änderungen zu speichern.', 'Änderungen speichern', 'Abbrechen',
      'Die Meldung erscheint erst nach unverändertem Speicherversuch. Nur Rand-Leerraum ergänzen oder zum bestätigten Wert zurückkehren bleibt unverändert.',
    ]),
    text('error', 'Fehler · leer abgesendet', [
      'Projektname (erforderlich)', '', '1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.',
      'Einen Projektnamen eingeben.', 'Änderungen speichern', 'Abbrechen',
      'Erst Absenden prüft und führt den Fokus zum Feld. Danach wird das zuvor fehlerhafte Feld beim Verlassen erneut geprüft; die Korrektur verschiebt den Fokus nicht.',
    ]),
    text('dirty', 'Geändert · vor Übermittlung abbrechen', [
      'Lokaler Entwurf: Alpen Nord · bestätigter Name: Alpen',
      'Ungespeicherte Änderungen verwerfen?', 'Die ungespeicherten Angaben gehen verloren.', 'Weiterbearbeiten', 'Verwerfen',
      'Weiterbearbeiten erhält den Entwurf und führt zurück zum Auslöser. Verwerfen führt zum Detail desselben Projekts. Anfänglicher Dialogfokus: Weiterbearbeiten; Escape verwirft nichts.',
    ]),
    text('unknown', 'Unbekannt · Antwort nach Speichern fehlt', [
      'Entwurf: Alpen Nord · Projekt P-101 · Vorgangsbezug erhalten',
      'Es ist noch unklar, ob die Änderungen gespeichert wurden',
      'Speicherstand ungeklärt. Die Anfrage kann weiterlaufen. Beim Zurückkehren muss das Ergebnis geklärt werden.',
      'Auf Seite bleiben', 'Seite verlassen',
      'Unbekannt hat Vorrang vor geändert: kein Verwerfen und kein erneuter Speicherversuch. Anfänglicher Fokus: Auf Seite bleiben; Escape bedeutet Bleiben. Bei Rückkehr bleiben Bearbeiten und Senden gesperrt, bis die noch bereitzustellende Statusklärung einen bestätigten Ausgang liefert.',
    ]),
    text('details', 'Grenzen und Anschluss', [
      'Pilotregel für den Namen: nach Randtrim 1–80 Unicode-Graphemcluster. Innere Leerzeichen und Gross-/Kleinschreibung bleiben erhalten; gleiche Namen sind erlaubt. Überlang: «Den Projektnamen auf höchstens 80 Zeichen kürzen.»',
      'Laufend steht «Änderungen werden gespeichert …» vor den Aktionen; erneutes Senden ist blockiert. Nur bestätigte Annahme führt zum Detail von P-101 mit «Änderungen gespeichert». Ausdrückliche Nichtannahme erhält die Eingabe; Ursache am Feld oder Vorgang erklären.',
      'q und status bleiben über Detail, Bearbeiten und Rückweg erhalten. Browser-Zurück innerhalb der Anwendung folgt demselben Schutz; Reload, Schliessen und externe Navigation sind damit nicht abgesichert. Es gibt keinen dauerhaften Entwurf.',
      'Einspaltiges Formular bis 640 px; breite Aktionsgruppe: Speichern vor Abbrechen. Unter 640 px verfügbarer Inhaltsbreite dieselbe Reihenfolge untereinander. Hilfe, Fehler und lange Namen umbrechen; keine fixierte Aktionsleiste.',
    ]),
    links('references', 'Detailregeln für die Ausarbeitung', [
      ['Formulare · Feldprüfung und Bearbeitungsvertrag', '/systems/shadcn/formulare-validierung#abschnitt-bestehenden-namen-bearbeiten'],
      ['Formulare · Abbrechen, unbekannter Ausgang und Rückkehr', '/systems/shadcn/formulare-validierung#abschnitt-abbrechen-verlassen-und-zuruckkehren'],
      ['Gestaltungs-Pilot · gemeinsamer Umfang und visuelle Entscheidungen', '/systems/shadcn/gestaltungs-pilot'],
      ['Detailseite · Identität und Rückwege', '/systems/shadcn/detailseite'],
    ]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Ausgang: veröffentlichte CMS-Seite shadcn-page-type-edit, ID 59, Stand 20.11.2026, updatedAt 2026-11-20T08:57:18.849Z; bisher Titel edit, ein Nutzensatz und kein Inhaltsblock. Titel bleibt erhalten.',
      'Fachquelle: veröffentlichte Seiten Formulare und Validierung sowie Gestaltungs-Pilot, am 20.11.2026 im Browser gelesen; einschliesslich der Präzisierung zum Vorrang des unbekannten Speicherausgangs vom 20.11.2026. Historische Originalstudien bleiben unverändert.',
      'Die Projektbeispiele und ihre Darstellung sind lokale redaktionelle Gestaltungsschemata. Sie begründen weder eine allgemeine shadcn-Regel noch eine Produkt- oder Komponentenfreigabe. Die schreibgeschützten Felder und abgebildeten Aktionen bilden keinen ausführbaren Formularvertrag.',
      'Kein Backend, keine Statusabfrage und keine Speichermaschine implementiert. Laufzeitprüfung von Validierung, Unicode-Grenzen, Fokus, Dialogen, assistiver Bedienung und Speicherergebnissen bleibt offen; die Statusklärung ist eine noch fehlende Integrationsvoraussetzung.',
    ]),
  ] satisfies Page['content'],
}
