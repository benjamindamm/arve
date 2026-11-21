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
export const release = {
  expectedUpdatedAt: '2026-11-20T13:59:40.358Z',
  title: '4-column Card Grid',
  summary: 'Verteile Karten auf vier Grundspalten, um Projekte, Aufgaben oder Angebote in einer Übersicht zu zeigen. Je nach Inhalt nutzt eine Karte eine, zwei oder alle vier Spalten.',
  content: [
    text('example', 'Projektübersicht im Vier-Spalten-Raster', [
      'Dieses statische Beispiel zeigt sechs Karten. Die Nummern geben die Lesereihenfolge an; sie bleibt beim Umbruch erhalten. Die Spaltenangaben gelten für die breite Ansicht: Der Teamhinweis nutzt die volle Breite, die beiden Vorlagen stehen mit vergleichbaren Inhalten nebeneinander.',
    ]),
    text('card-focus', 'Nächste Prüfung', [
      '01 · 2 von 4 Spalten', 'Website erneuern', 'Den überarbeiteten Entwurf bis Freitag prüfen. Inhalt und Navigation gemeinsam mit dem Projektteam besprechen.',
    ]),
    text('card-projects', 'Aktive Projekte', [
      '02 · 1 von 4 Spalten', '8 Projekte', 'In Planung und Umsetzung.',
    ]),
    text('card-due', 'Diese Woche fällig', [
      '03 · 1 von 4 Spalten', '2 Aufgaben', 'Prüfung und Inhaltsabnahme.',
    ]),
    text('card-notice', 'Teamhinweis', [
      '04 · 4 von 4 Spalten', 'Gemeinsame Prüfung am Donnerstag', 'Offene Fragen vor dem Termin im jeweiligen Projekt sammeln.',
    ]),
    text('card-template', 'Website starten', [
      '05 · 2 von 4 Spalten', 'Projektvorlage', 'Für einen neuen Webauftritt mit Inhaltsplanung, Gestaltung und Prüfung.',
    ]),
    text('card-report', 'Jahresbericht planen', [
      '06 · 2 von 4 Spalten', 'Projektvorlage', 'Für eine Publikation mit Redaktion und Freigabe.',
    ]),
    text('rules', 'So gestaltest du das Raster', [
      'Einsatz: Nutze das Raster auf einer overview-Seite für eigenständige Aufgaben, Hinweise, Vorlagen oder vergleichbare Angebote. Gib jeder Karte einen eindeutigen Titel. Wähle je nach Inhalt eine Breite von einer, zwei oder vier Spalten. Die Anzahl der Reihen ist variabel.',
      'Breit: Ab einer verfügbaren Breite von 52 rem hat das Beispiel vier gleich breite Grundspalten. Die Karten belegen in der ersten Reihe 2 + 1 + 1 Spalten, in der zweiten 4 und in der dritten 2 + 2. Zwischen den Karten liegt 1 rem Abstand. Jede Karte hat 1 rem Innenabstand.',
      'Mittel: Ab 32 rem bis unter 52 rem hat das Beispiel zwei Grundspalten. Karten, die in der breiten Ansicht zwei oder vier Spalten nutzen, belegen nun beide Spalten. Karten mit einer Spalte bleiben einspaltig. Schmal: Unter 32 rem stehen alle Karten in einer Spalte. Entscheidend ist die Breite des Inhaltscontainers, nicht die Fensterbreite.',
      'Reihenfolge und Höhe: In der breiten und mittleren Ansicht liest du von links nach rechts und dann nach unten, in der schmalen von oben nach unten. Behalte diese Reihenfolge bei und fülle Lücken nicht mit späteren Karten auf. Die höchste Karte bestimmt die Höhe einer Reihe; kürzere Karten sind oben ausgerichtet. Unterschiedliche Inhaltshöhen erzeugen kein Masonry-Layout.',
    ]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Grundlage sind der veröffentlichte CMS-Stand shadcn-card-grid-4x4 vom 20.11.2026, updatedAt 2026-11-20T08:41:38.924Z, und die dokumentierte visuelle Zuordnung der Layouts vom selben Tag. Dort wurden vier Grundspalten, Karten über eine, zwei und vier Spalten sowie eine einspaltige schmale Ansicht beobachtet. Exakte Abstände und Umbruchgrenzen wurden dabei nicht gemessen.',
      'Die Umbruchgrenzen von 32 rem und 52 rem, der Abstand von 1 rem und der Innenabstand von 1 rem sind für dieses Beispiel im begleitenden CSS festgelegt. Diese Werte sind keine freigegebenen Systemtokens. Auch die sechs Beispieldaten wurden für diese Darstellung gewählt.',
      'Die Karten orientieren sich an der shadcn-Referenz: eine abgegrenzte Fläche mit Titel, Beschreibung und Inhalt. Das Beispiel verwendet semantisches HTML und lokales CSS. Eine hier abgenommene Card-Komponente kommt nicht zum Einsatz. Das Beispiel bietet keine Projekt-, Auswahl- oder Navigationsfunktion.',
      'Das Raster legt fest, wie vorhandene Inhalte angeordnet werden. Lade-, Leer- und Fehlerzustände sowie die tatsächlichen Aktionen je Karte musst du für das jeweilige Produkt ergänzen und prüfen. Das Beispiel erteilt keine allgemeine Freigabe für Komponenten oder Barrierefreiheit.',
    ]),
  ] satisfies Page['content'],
}
