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
  expectedUpdatedAt: '2026-11-20T08:41:38.924Z',
  title: '4-column Card Grid',
  summary: 'Für Übersichten, Dashboards und Kataloge: Cards auf vier Grundspalten verteilen und je nach Inhalt eine, zwei oder alle vier Spalten nutzen.',
  content: [
    text('example', 'Projektübersicht im Vier-Spalten-Raster', [
      'Synthetisches, statisches Beispiel mit sechs Cards. Die nummerierte Lesereihenfolge bleibt beim Umbruch erhalten; die Spaltenangaben beziehen sich auf die breite Ansicht.',
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
      '04 · 4 von 4 Spalten', 'Gemeinsamer Review am Donnerstag', 'Offene Fragen vor dem Termin im jeweiligen Projekt sammeln. Diese übergreifende Information erhält die volle Breite.',
    ]),
    text('card-template', 'Website starten', [
      '05 · 2 von 4 Spalten', 'Projektvorlage', 'Für einen neuen Webauftritt mit Inhaltsplanung, Gestaltung und Review.',
    ]),
    text('card-report', 'Jahresbericht planen', [
      '06 · 2 von 4 Spalten', 'Projektvorlage', 'Für eine Publikation mit Redaktion und Freigabe. Die beiden Vorlagen zeigen vergleichbare Inhalte nebeneinander.',
    ]),
    text('rules', 'So gestaltest du das Raster', [
      'Einsatz: Für eine overview-Seite mit eigenständigen Informationseinheiten oder vergleichbaren Angeboten. Gib jeder Card einen eindeutigen Titel und wähle ihre Spanne nach dem benötigten Inhalt. Eine, zwei und vier Spalten sind bewusste Breitenoptionen; vier Spalten bedeuten eine variable Anzahl von Reihen.',
      'Breit: Ab 52 rem verfügbarer Beispielbreite vier gleich breite Grundspalten. Die erste Reihe belegt 2 + 1 + 1 Spalten, die zweite 4 und die dritte 2 + 2. Zwischen den Cards liegen 1 rem Abstand; innen jeweils 1 rem.',
      'Mittel: Ab 32 rem bis unter 52 rem Beispielbreite zwei Grundspalten. Cards mit Spanne 2 oder 4 belegen beide Spalten, Cards mit Spanne 1 eine. Schmal: Unter 32 rem stehen alle Cards in einer Spalte. Die Grenzen richten sich nach dem Inhaltscontainer, nicht nach der Fensterbreite.',
      'Reihenfolge und Höhe: Von links nach rechts, dann nach unten lesen; schmal von oben nach unten. Keine visuelle Umsortierung und kein Nachfüllen von Lücken. Die höchste Card bestimmt die Höhe einer Reihe; kürzere Cards bleiben oben ausgerichtet. Wechselnde Inhaltshöhen erzeugen kein Masonry-Layout.',
    ]),
    text('sources', 'Quellen und Prüfgrenzen', [
      'Grundlage: veröffentlichter CMS-Stand shadcn-card-grid-4x4 vom 20.11.2026, updatedAt 2026-11-20T08:41:38.924Z, sowie das dokumentierte visuelle Layout-Mapping vom selben Tag. Beobachtet wurden vier Grundspalten mit Spannen 1, 2 und 4 und eine einspaltige schmale Ansicht; exakte Abstände und Umbruchgrenzen wurden daraus nicht gemessen.',
      'Die Grenzen 32 rem und 52 rem, der Abstand 1 rem, das Card-Innenmass 1 rem und die sechs Beispieldaten sind lokale Referenzentscheidungen. Sie sind im begleitenden CSS umgesetzt und keine freigegebenen Systemtokens.',
      'Die Card-Komposition orientiert sich an der shadcn-Referenz: abgegrenzte Fläche mit Titel, Beschreibung und Inhalt. Sie verwendet semantisches HTML und lokales CSS, keine hier abgenommene Card-Komponente. Das Beispiel bietet keine Projekt-, Auswahl- oder Navigationsfunktion.',
      'Das Raster beschreibt die Anordnung vorhandener Inhalte. Lade-, Leer- und Fehlerzustände sowie die tatsächlichen Aktionen je Card müssen für das jeweilige Produkt ergänzt und geprüft werden. Eine allgemeine Komponenten- oder Barrierefreiheitsfreigabe ist damit nicht verbunden.',
    ]),
  ] satisfies Page['content'],
}
