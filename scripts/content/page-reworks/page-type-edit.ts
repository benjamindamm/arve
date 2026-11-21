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
  expectedUpdatedAt: '2026-11-20T13:53:38.750Z',
  summary: 'Bestehende Angaben bearbeiten, Änderungen speichern und beim Abbrechen vor dem Verlust ungespeicherter Angaben warnen.',
  content: [
    text('example', 'Bestehende Angaben bearbeiten', [
      'Statisches Gestaltungsbeispiel: Die Felder und Aktionen zeigen die Anordnung. Eingeben, Speichern und Navigieren sind hier nicht möglich.',
      'Projekt bearbeiten', 'Alpen · P-101', 'Aktiv', 'Projektname (erforderlich)', 'Alpen',
      '1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.',
      'Änderungen speichern', 'Abbrechen',
      'Der zuletzt bestätigte Name ist Alpen. ID und Status helfen, das Projekt zu erkennen; nur der Name lässt sich bearbeiten.',
    ]),
    text('rules', 'Drei Entscheidungen für den Entwurf', [
      'Vor dem Bearbeiten muss feststehen, welches Projekt geöffnet ist, welcher Wert zuletzt bestätigt wurde und ob die Person es bearbeiten darf. Archivierte Projekte bleiben lesbar und bieten keine Aktion zum Speichern.',
      'Nur «Änderungen speichern» übermittelt die Eingabe. Weder Tippen noch das Verlassen des Felds speichert etwas. Ohne Änderung erscheint bei den Aktionen «Keine Änderungen zu speichern.»; es wird keine Anfrage gesendet und die Seite bleibt geöffnet.',
      'Ohne Änderungen führt Abbrechen direkt zur Detailseite. Bei noch nicht übermittelten Änderungen fragt ein Dialog, ob sie verworfen werden sollen. Läuft die Anfrage bereits oder ist ihr Ergebnis unklar, braucht das Verlassen einen eigenen Hinweis.',
    ]),
    text('normal', 'Unverändert · zuletzt bestätigter Name', [
      'Projektname (erforderlich)', 'Alpen', '1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.',
      'Keine Änderungen zu speichern.', 'Änderungen speichern', 'Abbrechen',
      'Die Meldung erscheint erst, wenn ohne Änderung gespeichert wird. Zusätzliche Leerzeichen am Anfang oder Ende zählen nicht als Änderung. Auch wer nach einer Eingabe zum bestätigten Wert zurückkehrt, hat nichts geändert.',
    ]),
    text('error', 'Fehler · leer abgesendet', [
      'Projektname (erforderlich)', '', '1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.',
      'Einen Projektnamen eingeben.', 'Änderungen speichern', 'Abbrechen',
      'Die erste Prüfung erfolgt beim Absenden; bei einem Fehler erhält das Feld den Fokus. Danach wird das zuvor fehlerhafte Feld beim Verlassen erneut geprüft. Eine Korrektur verschiebt den Fokus nicht.',
    ]),
    text('dirty', 'Ungespeichert · vor dem Absenden abbrechen', [
      'Lokaler Entwurf: Alpen Nord · bestätigter Name: Alpen',
      'Ungespeicherte Änderungen verwerfen?', 'Die ungespeicherten Angaben gehen verloren.', 'Weiterbearbeiten', 'Verwerfen',
      '«Weiterbearbeiten» erhält den Entwurf und setzt den Fokus zurück auf die Aktion, die den Dialog geöffnet hat. «Verwerfen» führt zur Detailseite desselben Projekts. Beim Öffnen des Dialogs liegt der Fokus auf «Weiterbearbeiten»; Escape verwirft nichts.',
    ]),
    text('unknown', 'Ergebnis unklar · Antwort nach dem Speichern fehlt', [
      'Entwurf: Alpen Nord · Projekt P-101 · Zuordnung zur Anfrage bleibt erhalten',
      'Es ist noch unklar, ob die Änderungen gespeichert wurden',
      'Die Anfrage kann noch laufen. Bei der Rückkehr muss geklärt werden, ob die Änderungen gespeichert wurden.',
      'Auf Seite bleiben', 'Seite verlassen',
      'Solange das Ergebnis der Anfrage unklar ist, gelten diese Regeln auch bei geänderten Angaben: Weder Verwerfen noch erneutes Speichern ist möglich. Der Fokus liegt zunächst auf «Auf Seite bleiben»; auch Escape lässt die Seite geöffnet. Bei der Rückkehr bleiben Bearbeiten und Senden gesperrt, bis das Ergebnis bestätigt ist. Die dafür nötige Statusabfrage muss noch bereitgestellt werden.',
    ]),
    text('details', 'Detailregeln und technische Voraussetzungen', [
      'Für den Namen gilt im Pilot: Leerzeichen am Anfang und Ende werden entfernt (Randtrim). Danach muss der Name 1–80 Unicode-Graphemcluster umfassen. Innere Leerzeichen und Gross-/Kleinschreibung bleiben erhalten; gleiche Namen sind erlaubt. Bei zu langen Namen lautet der Fehler: «Den Projektnamen auf höchstens 80 Zeichen kürzen.»',
      'Während der Anfrage steht «Änderungen werden gespeichert …» vor den Aktionen; erneutes Senden ist blockiert. Erst die bestätigte Annahme führt zur Detailseite von P-101 mit der Meldung «Änderungen gespeichert». Wird die Anfrage ausdrücklich nicht angenommen, bleibt die Eingabe erhalten. Erkläre die Ursache am Feld oder für den gesamten Vorgang.',
      'Die URL-Parameter q und status bleiben beim Wechsel zwischen Detailseite und Bearbeitung sowie auf dem Rückweg erhalten. Browser-Zurück innerhalb der Anwendung bietet denselben Schutz vor unbeabsichtigtem Verlassen. Neuladen, Schliessen und externe Navigation sind damit nicht abgesichert. Ein Entwurf wird nicht dauerhaft gespeichert.',
      'Das Formular ist einspaltig. Bei ausreichend Platz stehen die Aktionen nebeneinander: Speichern vor Abbrechen. Unter 640 px verfügbarer Inhaltsbreite stehen sie in derselben Reihenfolge untereinander. Hilfe, Fehler und lange Namen müssen umbrechen können; die Aktionsleiste ist nicht fixiert.',
    ]),
    links('references', 'Detailregeln für die Ausarbeitung', [
      ['Formulare · Namen bearbeiten und Eingaben prüfen', '/systems/shadcn/formulare-validierung#abschnitt-bestehenden-namen-bearbeiten'],
      ['Formulare · Abbrechen, ungeklärtes Ergebnis und Rückkehr', '/systems/shadcn/formulare-validierung#abschnitt-abbrechen-verlassen-und-zuruckkehren'],
      ['Gestaltungs-Pilot · gemeinsamer Umfang und visuelle Entscheidungen', '/systems/shadcn/gestaltungs-pilot'],
      ['Detailseite · Identität und Rückwege', '/systems/shadcn/detailseite'],
    ]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Die Beispiele wurden für die veröffentlichte CMS-Seite shadcn-page-type-edit (ID 59) erarbeitet. Ausgangspunkt war der Stand vom 20.11.2026 mit updatedAt 2026-11-20T08:57:18.849Z: Titel edit, ein kurzer Einleitungssatz und keine Inhaltsblöcke. Der Titel bleibt erhalten.',
      'Fachliche Grundlage sind die veröffentlichten Seiten «Formulare und Validierung» und «Gestaltungs-Pilot», gelesen am 20.11.2026 im Browser. Dazu gehört die Präzisierung vom selben Tag: Bei unklarem Ergebnis der Anfrage gelten die Regeln für diesen Fall, auch wenn Angaben geändert wurden. Die historischen Originalstudien bleiben unverändert.',
      'Die Projektbeispiele wurden für diese Anleitung gestaltet. Aus ihnen folgt weder eine allgemeine shadcn-Regel noch eine Freigabe für Produkte oder Komponenten. Die Felder sind schreibgeschützt und die Aktionen nur abgebildet; das beschriebene Formularverhalten ist hier nicht ausführbar.',
      'Die Beispiele haben kein Backend und setzen weder eine Statusabfrage noch den Ablauf zum Speichern um. Validierung, Unicode-Grenzen, Fokus, Dialoge, assistive Bedienung und Ergebnisse der Speicherung sind nicht zur Laufzeit geprüft. Vor einer Integration muss die Abfrage zur Klärung des Ergebnisses noch bereitgestellt werden.',
    ]),
  ] satisfies Page['content'],
}
