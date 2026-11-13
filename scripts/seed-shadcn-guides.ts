import { getPayload } from 'payload'
import config from '../src/payload.config'

const sections = [
  ['grundlagen', 'Grundlagen', [
    ['Mit Rollen anfangen', 'Wähle Farb-Tokens nach ihrer Funktion und verwende dieselbe Abstandslogik für zusammengehörige Elemente. Damit bleibt eine Oberfläche auch bei einem Theme-Wechsel verständlich.'],
    ['Referenz und Quellen', 'Die Farbrollen folgen dem shadcn/ui-Theming. Layoutwerte und Beispiele sind Entscheidungen dieser Referenz. Die technischen Tokens der Komponenten findest du in den jeweiligen Contracts.'],
  ]],
  ['abstaende', 'Abstände und Grössen', [
    ['Elemente gruppieren', '4–8 px verbinden Label, Eingabe und Hilfe. 12–16 px trennen einzelne Elemente einer Gruppe. 24–48 px gliedern eigenständige Gruppen und Abschnitte.'],
    ['Auf schmalen Flächen', 'Lass Inhalte umbrechen und nutze die verfügbare Breite. Prüfe lange Labels, Zoom und vergrösserte Schrift. Das Grid und die drei Seitentypen stehen unter Layouts.'],
  ]],
  ['icons-bewegung', 'Icons, Bewegung und Elevation', [
    ['Icons', 'Nutze bekannte Symbole konsistent. Gib Icon-Buttons einen zugänglichen Namen. Ein dekoratives Icon neben einem eindeutigen Text braucht keine zusätzliche Ansage.'],
    ['Bewegung', 'Nutze kurze Übergänge für Zustandswechsel und beachte reduzierte Bewegung. Die Information bleibt auch ohne Animation verständlich.'],
    ['Ebenen und Konturen', 'Trenne Karten über Konturen und Abstand. Reserviere deutlichere Ebenen für Menüs, Popovers und Dialoge.'],
  ]],
  ['formulare-validierung', 'Formulare und Validierung', [
    ['Beispiel · Rechnungsadresse ändern', 'Zeige Labels für Strasse, PLZ und Ort und benenne die primäre Aktion «Adresse speichern». Gib Format- oder Pflichtangaben vor der Eingabe an.'],
    ['Bei Fehlern', 'Behalte gültige Eingaben und zeige direkt am Feld eine Korrektur, etwa «Gib eine vierstellige Schweizer PLZ ein». Bei mehreren Fehlern kann eine Zusammenfassung zu den Feldern führen.'],
    ['Nach dem Speichern', 'Bestätige den Erfolg und zeige die gespeicherte Adresse. Prüfe Tastaturfolge und die Ansage von Fehler und Erfolg.'],
  ]],
  ['suchen-filtern', 'Suchen und Filtern', [
    ['Beispiel · Rechnung finden', 'Platziere die Suche über der Liste. Biete nur Filter an, die zur Aufgabe passen, etwa Zeitraum und Zahlungsstatus.'],
    ['Aktive Filter zeigen', 'Zeige angewendete Filter, Ergebniszahl und eine Möglichkeit zum Zurücksetzen. Mach ersichtlich, ob Änderungen sofort greifen oder bestätigt werden müssen.'],
    ['Bei null Treffern', 'Erkläre, dass keine Rechnung zu den Suchkriterien passt. Biete an, die Suche anzupassen oder Filter zurückzusetzen.'],
  ]],
  ['laden-leer-fehler', 'Laden, leer und Fehler', [
    ['Laden', 'Zeige früh, dass die Liste lädt. Halte den Bereich stabil, damit sich Inhalte beim Erscheinen möglichst wenig verschieben.'],
    ['Leer', '«Noch keine Rechnungen» beschreibt den Ausgangszustand. Bei einer gefilterten Liste erklärt «Keine Treffer für diese Filter», was geändert werden kann.'],
    ['Fehler', 'Erkläre, was fehlgeschlagen ist, und biete bei einem vorübergehenden Fehler «Erneut versuchen» an. Erhalte Filter und Eingaben. Prüfe, ob Statusänderungen angekündigt werden.'],
  ]],
  ['content-design', 'Content Design', [
    ['Labels und Aktionen', 'Benenne das erwartete Ergebnis. «Rechnung herunterladen» beschreibt die Aktion. Labels bleiben sichtbar, während jemand tippt.'],
    ['Hilfe und Meldungen', 'Schreibe kurze Hinweise am Ort der Entscheidung. Ein Fehlertext sagt, was falsch ist und wie es korrigiert werden kann.'],
    ['Formate und Übersetzung', 'Verwende konsistente Datums-, Zahlen- und Währungsformate für die gewählte Sprache. Prüfe Umbrüche mit langen übersetzten Labels.'],
  ]],
  ['barrierefreiheit', 'Barrierefreiheit', [
    ['Tastatur und Fokus', 'Prüfe Reihenfolge, sichtbaren Fokus und die Bedienung ohne Maus. Bei einem Dialog gehört die Rückkehr zum Auslöser zum Test.'],
    ['Kontrast und Umbruch', 'Prüfe Farbpaare und Zustände. Fehler, Auswahl und Fokus müssen auch ohne Unterscheidung allein über Farbe verständlich sein. Prüfe Zoom und schmale Fenster.'],
    ['Namen und Rückmeldungen', 'Prüfe zugängliche Namen, die Zuordnung von Hinweisen und die Ansage von Statusänderungen. Dokumentiere den geprüften Umfang.'],
  ]],
  ['mitwirken', 'Mitwirken und Releases', [
    ['Vorschlag', 'Beschreibe die Aufgabe, verlinke betroffene Seiten und ergänze ein konkretes Beispiel. Bestehende Patterns sind der erste Anlaufpunkt.'],
    ['Review', 'Prüfe Gestaltung, Verhalten und Barrierefreiheit anhand des Beispiels. Halte fest, wer die Seite pflegt und welche Änderungen geprüft wurden.'],
  ]],
  ['release-stand', 'Releases und Migrationen', [
    ['Änderung dokumentieren', 'Halte Datum, betroffene Komponenten und Auswirkungen fest. Bei einer inkompatiblen Änderung gehört ein vorher-nachher-Beispiel dazu.'],
    ['Versionen nachvollziehen', 'Payload verwaltet die Seitenhistorie. Eine technische Änderung bekommt eine neue Contract-Revision. Die Doku-Seite kann nach Review auf diese Revision wechseln.'],
  ]],
  ['technische-anbindung', 'Technische Anbindung und MCP', [
    ['Vom CMS zum Contract', 'Eine veröffentlichte Seite bindet eine Export-Revision. Das Portal liest die hinterlegten Originaldateien, etwa SCXML für Verhalten oder CEM für Schnittstellen.'],
    ['Für Agenten', 'Der lokale MCP-Endpunkt /mcp stellt get_component_page bereit. Für system shadcn und component button liefert er die veröffentlichte Seite, ihren Contract und die Demo-Konfiguration.'],
  ]],
] as const

const payload = await getPayload({ config })
try {
  for (const [section, title, parts] of sections) {
    const slug = 'shadcn-' + section
    const existing = await payload.find({
      collection: 'pages', draft: true, limit: 1, where: { slug: { equals: slug } },
    })
    if (existing.totalDocs) continue
    await payload.create({ collection: 'pages', data: {
      title, slug, system: 'shadcn', _status: 'published',
      content: [{ blockType: 'text', body: { root: {
        type: 'root', version: 1, direction: 'ltr', format: '', indent: 0,
        children: parts.flatMap(([heading, text]) => [
          { type: 'heading', tag: 'h2', version: 1, direction: 'ltr', format: '', indent: 0,
            children: [{ type: 'text', version: 1, text: heading, detail: 0, format: 0, mode: 'normal', style: '' }] },
          { type: 'paragraph', version: 1, direction: 'ltr', format: '', indent: 0,
            children: [{ type: 'text', version: 1, text, detail: 0, format: 0, mode: 'normal', style: '' }] },
        ]),
      } } }],
    } })
    console.log(slug)
  }
} finally {
  await payload.destroy()
}
