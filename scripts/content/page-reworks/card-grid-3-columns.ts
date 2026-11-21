import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = { version: 1, direction: 'ltr' as const, format: '' as const, indent: 0 }
const node = (text: string) => ({ type: 'text', version: 1, text })
const text = (key: string, title: string, paragraphs: string[], link?: [string, string]): Block => ({
  blockType: 'text', blockName: key, body: { root: { ...base, type: 'root', children: [
    { ...base, type: 'heading', tag: 'h2', children: [node(title)] },
    ...paragraphs.map(value => ({ ...base, type: 'paragraph', children: [node(value)] })),
    ...(link ? [{ ...base, type: 'paragraph', children: [{ ...base, type: 'link', fields: { url: link[1], linkType: 'custom', newTab: false }, children: [node(link[0])] }] }] : []),
  ] } },
})
export const release = {
  expectedUpdatedAt: '2026-11-20T14:07:52.070Z',
  summary: 'Stelle gleichrangige Themen oder Angebote in drei gleich breiten Spalten gegenüber; zusätzliche Einträge bilden weitere Reihen.',
  content: [
    text('example', 'Hilfe für dein nächstes Design', [
      'Synthetisches Beispiel mit fünf gleichrangigen Themen. Die Links führen zu vorhandenen Handbuchseiten.',
    ]),
    text('card-layout', 'Seite aufbauen', ['Finde eine passende Anordnung für Hauptinhalt, Ergänzungen und vergleichbare Einträge.'], ['Layouts vergleichen', '/systems/shadcn/page-layouts']),
    text('card-components', 'Komponenten auswählen', ['Wähle passende Bedienelemente für die Aufgabe und den jeweiligen Zustand.'], ['Komponenten auswählen', '/systems/shadcn/komponenten-auswahl']),
    text('card-forms', 'Formulare gestalten', ['Strukturiere Eingaben und hilf Menschen, Fehler zu erkennen und zu korrigieren.'], ['Formularmuster ansehen', '/systems/shadcn/formulare-validierung']),
    text('card-accessibility', 'Barrierefreiheit von Anfang an berücksichtigen', ['Plane verständliche Inhalte, Tastaturbedienung und erkennbare Zustände gemeinsam. Dieser längere Titel zeigt den Zeilenumbruch ohne Abschneiden.'], ['Inklusiv gestalten', '/systems/shadcn/barrierefreiheit']),
    text('card-content', 'Klar und hilfreich schreiben', ['Formuliere Titel, Hinweise und Aktionen so, dass der nächste Schritt verständlich wird.'], ['Content Design ansehen', '/systems/shadcn/content-design']),
    text('rules', 'So nutzt du das Raster', [
      'Einsatz: Für eine Übersicht mit gleichrangigen, eigenständigen Themen, Hilfeangeboten oder Vorlagen. Gleiche Card-Breiten und eine gemeinsame Inhaltsstruktur erleichtern den Vergleich. Jede Card enthält einen eindeutigen Titel, einen kurzen Text und hier genau einen beschreibenden Link.',
      'Breit: Ab 48 rem innerer Beispielbreite drei gleich breite Spalten. Mittel: Ab 30 rem bis unter 48 rem zwei Spalten. Schmal: Unter 30 rem eine Spalte. Zwischen den Cards und innerhalb jeder Card liegen jeweils 1 rem Abstand. Die CSS-Grenzen beziehen sich auf den Beispielcontainer, nicht auf das Fenster.',
      'Reihen: Die Anzahl folgt den Einträgen; fünf Cards ergeben breit 3 + 2 und mittel 2 + 2 + 1. Jede Card belegt genau eine Spalte. Die letzte Reihe bleibt linksbündig und erhält keine gestreckten Cards. Cards sind innerhalb ihrer Reihe gleich hoch; die Linkzeile steht unten. Keine feste Card-Höhe, keine gekürzten Titel und kein Masonry-Nachfüllen.',
      'Reihenfolge: Von links nach rechts, dann nach unten; schmal von oben nach unten. Dokument-, Lese- und Fokusreihenfolge bleiben identisch. Nur der Link ist interaktiv; die übrige Card hat keinen eigenen Klickbereich. Ein sichtbarer Fokus kennzeichnet den aktiven Link.',
    ]),
    text('choice', 'Wann eine einzelne Card besser passt', [
      'Narrow Single Card: Wenn eine kompakte, zusammengehörige Aufgabe im Mittelpunkt steht, etwa ein kurzes Formular. Ein Grid würde diese Aufgabe unnötig in gleichrangige Einträge zerlegen.',
      'Wide Single Card: Wenn ein zusammengehöriger Inhalt viel Breite braucht, etwa eine Tabelle oder ein umfangreicher Detailbereich. Eine dreispaltige Darstellung innerhalb dieser einen Card ist ein inneres Inhaltslayout und noch kein Card Grid als Seitenlayout.',
      'Benötigen eigenständige Cards bewusst unterschiedlich viel Platz oder Gewicht, prüfe stattdessen das 4-column Card Grid mit variablen Spannen.',
    ]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Ausgangspunkt: veröffentlichter CMS-Stand shadcn-card-grid-3-columns vom 20.11.2026, updatedAt 2026-11-20T08:57:18.767Z. Er enthielt Titel und Summary, aber keine Inhaltsblöcke. Das unveränderte interne Layout-Mapping beschreibt gleichberechtigte Cards im begrenzten Inhaltscontainer mit variabler Zeilenzahl; das visuelle Inventar ordnet einen Hilfe-Einstieg diesem Muster zu.',
      'Die fünf Themen sind synthetische Beispieldaten. Die Grenzen 30 rem und 48 rem, Abstände von 1 rem sowie die Ausrichtung der Links sind lokale Referenzentscheidungen und im begleitenden CSS umgesetzt. Sie sind weder aus der Beobachtung gemessene Werte noch freigegebene Systemtokens.',
      'shadcn dient als Referenz für die Card-Komposition mit Titel, Beschreibung und Aktion. Dieses Beispiel verwendet semantisches HTML und lokales CSS; es ist keine hier abgenommene Komponentenimplementierung. Links navigieren zu Handbuchseiten und lösen keine Geschäftsaktionen aus.',
      'Das Beispiel zeigt Anordnung, Textumbruch und Navigation. Laden, leere Ergebnisse und Fehler sind für datenabhängige Anwendungen gesondert zu gestalten. Eine vollständige Produkt- oder Barrierefreiheitsfreigabe ist damit nicht verbunden.',
    ]),
  ] satisfies Page['content'],
}
