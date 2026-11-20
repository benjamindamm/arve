import { getPayload } from 'payload'
import config from '../src/payload.config'
import type { Page } from '../src/payload-types'

const docs = 'https://ui.shadcn.com/docs/'
const component = (name: string) => docs + 'components/base/' + name

const guides = [
  {
    parent: 'grundlagen', slug: 'themes-und-zustaende', title: 'Themes und Zustände',
    summary: 'Semantische Farbrollen, Theme-Wechsel und Prüfungen für interaktive Zustände.',
    source: ['shadcn/ui · Theming', docs + 'theming'],
    basis: 'shadcn/ui beschreibt Farbrollen als CSS-Variablen. Rollen für Flächen und Text lassen sich als Paare zuweisen und für ein dunkles Theme neu belegen.',
    rule: 'Prüfe in Arve pro Theme Grundfläche, primäre Aktion, Feldrand und Fehlermeldung. Teste auch Fokus und deaktivierte Zustände mit langen Beschriftungen.',
    avoid: 'Eine einzelne Farbe austauschen, ohne Textfarbe und Fokusindikator auf der betroffenen Fläche zu prüfen.',
  },
  {
    parent: 'layout', slug: 'seitenstruktur-und-navigation', title: 'Seitenstruktur und Navigation',
    summary: 'Wann Tabs oder ein seitliches Panel helfen und wie die Seite bei wenig Platz funktioniert.',
    source: ['shadcn/ui · Tabs', component('tabs')],
    basis: 'Tabs gruppieren mehrere Inhaltsansichten und zeigen jeweils die gewählte Ansicht.',
    rule: 'Nutze Tabs für gleichrangige Ansichten desselben Kontexts, etwa Rechnungsdetails und Verlauf. Für Aufgaben mit eigenem Titel und eigener Adresse plane eine Seite. Auf schmalen Ansichten folgt Zusatzinformation dem Hauptinhalt.',
    avoid: 'Pflichtschritte eines Prozesses hinter frei wählbaren Tabs verstecken.',
  },
  {
    parent: 'patterns', slug: 'felder-und-fehlermeldungen', title: 'Felder und Fehlermeldungen',
    summary: 'Eingaben beschriften, Fehler zuordnen und Korrekturen verständlich machen.',
    source: ['shadcn/ui · Field', component('field')],
    basis: 'Field bündelt Beschriftung, Eingabe, ergänzende Beschreibung und Fehlermeldung zu einer Einheit.',
    rule: 'Zeige das Label dauerhaft. Erläutere ungewöhnliche Eingabeformate vorab. Nach dem Absenden bleibt die Eingabe erhalten und der Fehler nennt direkt am Feld eine Korrektur.',
    avoid: 'Den Platzhalter als einziges Label verwenden oder bei einem Fehler gültige Eingaben leeren.',
  },
  {
    parent: 'patterns', slug: 'auswahl-und-suche', title: 'Auswahl und Suche',
    summary: 'Entscheidungshilfe für sichtbare Optionen, Auswahllisten und durchsuchbare Listen.',
    source: ['shadcn/ui · Combobox', component('combobox')],
    basis: 'Die Combobox verbindet eine Eingabe mit einer filterbaren Optionsliste.',
    rule: 'Zeige wenige Optionen direkt, wenn sie gut vergleichbar sind. Biete bei einer langen bekannten Liste eine Suche an. Prüfe Tastaturbedienung, keine Treffer und die Anzeige des gewählten Werts.',
    avoid: 'Freitext stillschweigend akzeptieren, wenn nur Einträge aus einer festen Liste gültig sind.',
  },
  {
    parent: 'patterns', slug: 'destruktive-aktionen', title: 'Destruktive Aktionen bestätigen',
    summary: 'Bestätigung für folgenreiche Änderungen mit klar benannter Konsequenz.',
    source: ['shadcn/ui · Alert Dialog', component('alert-dialog')],
    basis: 'Ein Alert Dialog unterbricht den Ablauf für eine Entscheidung und bietet Aktionen zum Abbrechen und Fortfahren.',
    rule: 'Beschreibe Objekt und Folge, etwa «Rechnung RE-1048 endgültig löschen?». Benenne beide Aktionen eindeutig und prüfe, wohin der Fokus nach Abbruch oder Abschluss zurückkehrt.',
    avoid: 'Jede kleine, leicht rückgängig zu machende Änderung mit einer Bestätigung unterbrechen.',
  },
  {
    parent: 'patterns', slug: 'tabellen-und-listen', title: 'Tabellen und Listen',
    summary: 'Sortierung, Suche und Zeilenaktionen am Beispiel der Rechnungsliste.',
    source: ['shadcn/ui · Data Table', component('data-table')],
    basis: 'Das Data-Table-Beispiel kombiniert eine Tabelle mit Funktionen wie Sortierung, Filterung und Seitennavigation.',
    rule: 'Wähle Spalten nach der Aufgabe. Bei Rechnungen sind Nummer, Status und Betrag gut vergleichbar. Zeige die aktive Sortierung und trenne Zeilenaktionen von Aktionen für mehrere Einträge.',
    avoid: 'Auf schmalen Ansichten benötigte Werte ausblenden, ohne einen Weg zu den Details anzubieten.',
    example: true,
  },
  {
    parent: 'patterns', slug: 'systemzustaende', title: 'Systemzustände gestalten',
    summary: 'Die Oberfläche erklärt, ob Inhalte laden, fehlen oder nicht verfügbar sind.',
    source: ['shadcn/ui · Empty', component('empty')],
    basis: 'Die Empty-Komponente bietet Platz für Titel, Beschreibung und eine optionale Aktion.',
    rule: 'Unterscheide «Noch keine Rechnungen», «Keine Treffer» und «Rechnungen konnten nicht geladen werden». Biete passend dazu Erstellen, Filter zurücksetzen oder Erneut versuchen an.',
    avoid: 'Einen leeren Zustand als Ladeanzeige verwenden oder dieselbe Meldung für jeden Zustand zeigen.',
  },
  {
    parent: 'komponenten', slug: 'komponenten-auswahl', title: 'Komponenten auswählen',
    summary: 'Vom gewünschten Verhalten zur passenden Komponente und ihrem Stand in Arve.',
    source: ['shadcn/ui · Komponenten', docs + 'components'],
    basis: 'Der shadcn/ui-Katalog bietet Beispiele und technische Dokumentation für einzelne Bausteine.',
    rule: 'Ordne zuerst die Aufgabe zu: Aktion auslösen → Button, Text erfassen → Input, mehrere Optionen markieren → Checkbox, eine Einstellung direkt ein- oder ausschalten → Switch. Öffne danach die Arve-Komponentenseite für Contract, Vorschau und Prüfstand.',
    avoid: 'Aus einem Eintrag im shadcn-Katalog auf eine geprüfte Spartan-Implementierung schliessen.',
  },
  {
    parent: 'mitwirken', slug: 'referenz-pflegen', title: 'Von der Quelle zum Release',
    summary: 'Upstream-Änderungen einordnen, lokal prüfen und im Handbuch veröffentlichen.',
    source: ['shadcn/ui · Registry', docs + 'registry'],
    basis: 'Über die shadcn-Registry lassen sich Komponenten und weitere Projektdateien verteilen.',
    rule: 'Bei einer Änderung zuerst die Upstream-Quelle und betroffene Arve-Seiten festhalten. Prüfe die lokale Implementierung getrennt. Aktualisiere bei geänderten technischen Vorgaben die Contractrevision und nenne im Release-Eintrag betroffene Seiten, Migration und Prüfumfang.',
    avoid: 'Eine neue Upstream-Version als Freigabe für die lokale Implementierung übernehmen.',
  },
] as const

const text = (value: string) => ({ type: 'text', version: 1, text: value, detail: 0, format: 0, mode: 'normal', style: '' })
const node = { version: 1, direction: 'ltr', format: '', indent: 0 } as const
const paragraph = (value: string) => ({ ...node, type: 'paragraph', children: [text(value)] })
const link = (label: string, url: string) => ({
  ...node, type: 'paragraph', children: [{
    ...node, type: 'link', fields: { linkType: 'custom', url, newTab: false }, children: [text(label)],
  }],
})
function body(children: ReturnType<typeof paragraph | typeof link>[]): Extract<NonNullable<Page['content']>[number], { blockType: 'text' }> {
  return { blockType: 'text', body: { root: { ...node, type: 'root', children } } }
}

const payload = await getPayload({ config })
try {
  const { docs: [system] } = await payload.find({ collection: 'design-systems', limit: 1, where: { slug: { equals: 'shadcn' } } })
  if (!system) throw new Error('Run the shadcn seeds and design-system migration first.')
  const { docs: pages } = await payload.find({
    collection: 'pages', depth: 0, pagination: false, draft: false,
    where: { and: [{ designSystem: { equals: system.id } }, { _status: { equals: 'published' } }] },
  })
  const parents = new Map(pages.map((page) => [page.slug, page.id]))
  for (const { parent } of guides) {
    if (!parents.has('shadcn-' + parent)) throw new Error('Missing published parent: ' + parent)
  }
  for (const guide of guides) {
    const slug = 'shadcn-' + guide.slug
    const { totalDocs } = await payload.find({ collection: 'pages', draft: true, limit: 1, where: { slug: { equals: slug } } })
    if (totalDocs) continue

    await payload.create({ collection: 'pages', data: {
      slug, system: 'shadcn', designSystem: system.id, parent: parents.get('shadcn-' + guide.parent),
      title: guide.title, summary: guide.summary, pageType: 'guide', order: 100, _status: 'published',
      content: [
        body([paragraph(guide.basis), link(guide.source[0], guide.source[1])]),
        { blockType: 'guideline', recommendation: 'do', explanation: guide.rule },
        { blockType: 'guideline', recommendation: 'dont', explanation: guide.avoid },
        ...('example' in guide ? [body([link('Rechnungsliste ausprobieren', '/systems/shadcn/beispiele/rechnungen')])] : []),
      ],
    } })
    console.log(slug)
  }
} finally {
  await payload.destroy()
}
