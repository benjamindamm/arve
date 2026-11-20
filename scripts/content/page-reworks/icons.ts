import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const node = (text: string) => ({ type: 'text', version: 1, text })
const base = { version: 1, direction: 'ltr' as const, format: '' as const, indent: 0 }
const text = (key: string, title: string, ...paragraphs: string[]): Block => ({ blockType: 'text', blockName: key, body: { root: { ...base, type: 'root', children: [
  { ...base, type: 'heading', tag: 'h2', children: [node(title)] },
  ...paragraphs.map(p => ({ ...base, type: 'paragraph', children: [node(p)] })),
] } } })
export const release = {
  expectedUpdatedAt: '2026-11-17T23:33:02.566Z',
  summary: 'Beschrifte Handlungen, benenne reine Iconaktionen und erkläre Status mit Text.',
  content: [
    text('examples', 'Vier Anwendungen im Vergleich', 'Eigene Beispielzeichen · keine freigegebene Iconbibliothek'),
    text('label', 'Icon mit sichtbarem Text', 'Benennung gestalten', 'Der Pfeil ergänzt das Linkziel. Der Text benennt es; das Zeichen wird nicht zusätzlich angesagt.'),
    text('only', 'Icon allein: Zweck benennen', 'Hinweis zum Entwurf anzeigen', 'Hinweis zum Entwurf ausblenden', 'Die Informationstaste zeigt einen Hinweis. Ihr zugänglicher Name beschreibt die Handlung statt nur die Form «i».', 'Wähle bei seltenen oder mehrdeutigen Handlungen sichtbaren Text. Ein Name für assistive Technik macht ein unbekanntes Zeichen visuell noch nicht verständlich.'),
    text('status', 'Status auch ohne Farbe verstehen', 'Gespeichert', 'Speichern fehlgeschlagen', 'Prüfe die Verbindung und versuche es erneut.', 'Häkchen und Warnzeichen unterscheiden die Zustände; der Text erklärt den Sachverhalt. Beide Beispiele sind statisch, es wird nichts gespeichert.'),
    text('decoration', 'Dekoration trägt keine Information', 'Dein Arbeitsbereich', 'Das Schmuckzeichen ergänzt die Überschrift. Ohne das Zeichen bleibt die Aussage vollständig; es wird bei der Ansage übersprungen.'),
    text('rules', 'Für deinen Entwurf entscheiden',
      'Sichtbaren Text bevorzugen, wenn die Handlung nicht sofort klar ist. Verwende dasselbe Zeichen für dieselbe Bedeutung. Ein Tooltip darf ergänzen, aber keine unverständliche Oberfläche retten.',
      'Bedeutung genau einmal vermitteln: Neben klarem Text kann das Zeichen bei der Ansage entfallen. Bei einer reinen Iconaktion braucht das Bedienelement einen Namen für seinen Zweck, zum Beispiel «Suchen» statt «Lupe». Eigenständige informative Zeichen brauchen eine gleichwertige Textalternative.',
      'Zeichen und Bedienfläche getrennt prüfen: Strichstärke, optische Grösse und Abstand müssen neben der Schrift passen. Ein kleines Zeichen kann in einer grösseren Bedienfläche liegen. Prüfe den Fokus und die Erreichbarkeit der tatsächlichen Aktion.'),
    text('review', 'Im Kontext prüfen', 'Können Menschen die Handlung vor dem Auslösen benennen? Bleiben Erfolg und Fehler ohne Farbe unterscheidbar? Prüfe zugängliche Namen und Tastaturbedienung im Produkt.', 'Bei Richtungssymbolen entscheidet die Bedeutung über die Spiegelung. Prüfe Zurückpfeile mit der tatsächlichen Leserichtung; spiegle Logos und Gegenstände nicht pauschal. Illustrationen und Markenbilder brauchen eigene Bild- und Alternativtextregeln.'),
    { blockType: 'study', blockName: 'original', kind: 'icons', title: 'Ursprüngliche Suchzeichen-Studie', explanation: 'Das Suchzeichen neben «Suchen» ergänzt die sichtbare Handlung und braucht keine doppelte Ansage. Allein benötigt es einen zugänglichen Namen; die nicht interaktive Studie löst keine Suche aus. Ein unbekanntes Zeichen bleibt visuell rätselhaft, selbst wenn im Hintergrund ein Name vorhanden ist. Die Zeichen sind eigene schematische Illustrationen und belegen keine freigegebene Iconbibliothek.', source: 'Eigene Gestaltungsstudie für Arve; keine vollständige Komponentenimplementierung.' },
    text('sources', 'Quellen, Stand und Prüfgrenzen',
      'Grundlage: ursprüngliche lokale Icon-Studie und Grundlagenredaktion in scripts/content/foundations-release.ts sowie src/docs/foundation-studies.tsx. Die neue Darstellung verwendet eigene schematische SVG-Zeichen und eine lokale Informationstaste.',
      'WAI zu WCAG 1.1.1: Nichttext-Inhalt braucht eine gleichwertige Textalternative; Bedienelemente einen zweckbezogenen Namen, reine Dekoration muss ignorierbar sein. WAI zu WCAG 1.4.1: Bedeutung nicht allein durch Farbe vermitteln. Erläuterungen am 20.11.2026 gelesen.',
      'Der lokale Export belegt keinen vollständigen Iconkatalog und keine allgemeine Icongrössenskala. Herkunft, Lizenz, Zeichenumfang und Plattformvarianten eines verbindlichen Katalogs bleiben zu klären. Die Beispiele und ihre Grössen sind Gestaltungshilfen; sie belegen keine allgemeine Komponentenfreigabe oder Anwendungskonformität.'),
    { blockType: 'text', blockName: 'links', body: { root: { ...base, type: 'root', children: [
      { ...base, type: 'heading', tag: 'h2', children: [node('Weiter gestalten')] },
      ...[
        ['Content Design: verständlich benennen', '/systems/shadcn/content-design'],
        ['Abstände: Zeichen und Bedienfläche', '/systems/shadcn/abstaende'],
        ['Farbe: Bedeutung zusätzlich vermitteln', '/systems/shadcn/farben'],
        ['WAI · Non-text Content', 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html'],
        ['WAI · Use of Color', 'https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html'],
      ].map(([label, url]) => ({ ...base, type: 'paragraph', children: [{ ...base, type: 'link', fields: { url, linkType: 'custom', newTab: false }, children: [node(label)] }] })),
    ] } } },
  ] satisfies Page['content'],
}
