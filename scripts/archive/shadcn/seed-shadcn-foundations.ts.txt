import { getPayload } from 'payload'
import config from '../src/payload.config'

const sections = [
  ['farben', 'Farben und Tokens', [
    ['Semantische Rollen', 'Wähle Farben nach ihrer Aufgabe. Background und foreground bilden das Paar für die Grundfläche. Primary und primary-foreground bilden das Paar für eine hervorgehobene Aktion. Prüfe Paare immer gemeinsam auf Kontrast.'],
    ['Flächen, Trennung und Fokus', 'Die Referenz verwendet muted als dezente Fläche und muted-foreground für sekundären Text. Border trennt Bereiche, ring kennzeichnet Tastaturfokus.'],
    ['Destruktive Aktionen und Fehler', 'Verwende destructive für Handlungen mit Datenverlust oder für Fehler. Beschreibe den Fehler zusätzlich in Text und nenne, wie er behoben werden kann.'],
    ['Quelle', 'Die Rollen orientieren sich am shadcn/ui-Theming. Die Farbmuster zeigen die CSS-Werte dieses Portals. Die DTCG-Tokens des Button-Contracts gehören zum separat versionierten technischen Export.'],
  ]],
  ['typografie', 'Typografie und Form', [
    ['Schrift', 'Die Referenz verwendet Inter, soweit verfügbar, mit einer Systemschrift als Fallback. Fliesstext bleibt gut lesbar und kann umbrechen.'],
    ['Hierarchie', 'Seitentitel benennt das Thema. Abschnittstitel strukturieren die Entscheidung oder Aufgabe. Hilfetexte unterstützen direkt am Feld oder an der Aktion.'],
    ['Radien', 'Die Referenz verwendet einen Basisradius von 7 px für kompakte Bedienelemente. Grössere Flächen dürfen etwas stärker gerundet sein. Das lehnt sich an die Radius-Tokens von shadcn/ui an.'],
  ]],
  ['layout', 'Grid und Abstände', [
    ['Responsives Raster', 'Die Referenz nutzt 4 Spalten unter 640 px, 8 ab 640 px und 12 ab 1024 px. Die Spaltenabstände sind 12, 16 beziehungsweise 24 px. Das sind Layoutregeln dieses Referenzsystems.'],
    ['Abstandsskala', '4 und 8 px verbinden eng zusammengehörige Elemente. 12 und 16 px gliedern Elemente innerhalb eines Abschnitts. 24, 32 und 48 px trennen eigenständige Gruppen.'],
    ['Anwendung', 'Ein Eingabefeld und sein Label bleiben zusammen. Ein Formular stapelt Felder bei wenig Platz. Zwei kurze, zusammengehörige Felder können bei genügend Platz nebeneinander stehen.'],
  ]],
  ['patterns', 'UX-Patterns', [
    ['Formular und Validierung', 'Verwende ein sichtbares Label pro Feld, behalte Eingaben bei Fehlern und zeige konkrete Korrekturhinweise beim Feld. Ein Adressformular kann mit «Adresse speichern» abschliessen.'],
    ['Leerer Zustand', 'Erkläre, warum die Liste leer ist und welche nächste Aktion sinnvoll ist. «Noch keine Rechnungen» und «Rechnung erstellen» geben Orientierung.'],
    ['Destruktive Bestätigung', 'Benenne das betroffene Objekt und die Konsequenz. Ein Alert Dialog kann «Rechnung löschen?» mit «Abbrechen» und «Rechnung löschen» verbinden. Halte Fokus und Tastaturbedienung nachvollziehbar.'],
  ]],
  ['komponenten', 'Komponenten', [
    ['Button', 'Verwende einen Button, um eine Aktion auszulösen. Die verlinkte Seite enthält die Spartan-Demo, Einsatzbeispiele und das technische Zustandsmodell.'],
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
