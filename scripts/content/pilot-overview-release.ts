import type { Page } from '../../src/payload-types'

type TextBlock = Extract<NonNullable<Page['content']>[number], { blockType: 'text' }>
type ReleasePage = { slug: string; title: string; summary: string; parent: string | null; order: number; pageType: Page['pageType']; content: Page['content'] }
const node = (text: string) => ({ type: 'text', version: 1, text, detail: 0, format: 0, mode: 'normal', style: '' })
const heading = (title: string) => ({ type: 'heading', tag: 'h2', version: 1, direction: 'ltr', format: '', indent: 0, children: [node(title)] })
function text(title: string, ...paragraphs: string[]): TextBlock { return { blockType: 'text', body: { root: { type: 'root', version: 1, direction: 'ltr', format: '', indent: 0, children: [heading(title), ...paragraphs.map(p => ({ type: 'paragraph', version: 1, direction: 'ltr', format: '', indent: 0, children: [node(p)] }))] } } } }
function links(title: string, entries: [string, string][]): TextBlock { return { blockType: 'text', body: { root: { type: 'root', version: 1, direction: 'ltr', format: '', indent: 0, children: [heading(title), ...entries.map(([label, url]) => ({ type: 'paragraph', version: 1, direction: 'ltr', format: '', indent: 0, children: [{ type: 'link', version: 1, direction: 'ltr', format: '', indent: 0, fields: { linkType: 'custom', url, newTab: false }, children: [node(label)] }] }))] } } } }

export const pilotOverviewRelease: ReleasePage[] = [{
  slug: 'shadcn-gestaltungs-pilot', title: 'Mit dem Handbuch gestalten', parent: null, order: -1, pageType: 'guide',
  summary: 'Ein gemeinsamer Arbeitsweg: Projekte finden, verstehen und bearbeiten. Hier beginnt die Gestaltungsreferenz für Web.',
  content: [
    text('Ein Arbeitsweg, gemeinsame Entscheidungen',
      'Referenzstand 0.1 · 18.11.2026. Diese lokalen Entscheidungen machen den kleinen Projektworkflow gestaltbar. Sie sind weder allgemeine shadcn-Regeln noch eine Freigabe für ein Firmensystem. Die unabhängige Gestaltungsprüfung steht aus.',
      'Geltung: Web auf Desktop und schmalen Ansichten, Sprache de-CH, helles Erscheinungsbild. Die vorhandenen Rechnungs- und Komponentenbeispiele bleiben eigenständige Studien. Der beschriebene Projektworkflow ist eine Gestaltungsreferenz, noch keine ausführbare Anwendung.'),
    { blockType: 'workflowStudy', title: 'So arbeitet ihr mit der Referenz',
      summary: 'Gestaltet denselben Datensatz durch alle drei Schritte. Nutzt die verlinkten Fachseiten für Regeln, Zustände und Rückwege.',
      steps: [
        { key: 'finden', title: 'Finden', description: 'ID oder Name suchen, Status eingrenzen und genau ein Projekt öffnen. Suchkriterien bleiben beim Rückweg erhalten.', next: 'Suchseite: Ergebnisse, Erstleere, Nulltreffer und schmale Darstellung.', tone: 'normal' },
        { key: 'verstehen', title: 'Verstehen', description: 'Name, unveränderliche ID und Status bilden die Identität. Aktive Projekte lassen sich bearbeiten, archivierte nur lesen.', next: 'Detailseite: Informationsfolge, Aktionen und Rückkehr.', tone: 'normal' },
        { key: 'bearbeiten', title: 'Erstellen oder bearbeiten', description: 'Ein Name, ein klarer Speicherweg. Unveränderte, ungespeicherte und bestätigte Werte bleiben unterscheidbar.', next: 'Formularseite: Validierung, Abbruch, Erfolg und unbekanntes Ergebnis.', tone: 'normal' },
        { key: 'pruefen', title: 'Zusammen prüfen', description: 'Eine zweite Person soll den gesamten Weg ohne mündliche Ergänzungen gestalten können. Offene Entscheidungen und fehlende Ressourcen werden erfasst.', next: 'Diese Teamprobe ist noch durchzuführen.', tone: 'attention' },
      ],
      source: 'Lokale Pilotentscheidung 0.1 vom 18.11.2026; aus der gemeinsamen Arbeitsfähigkeitsprüfung abgeleitet.',
      caption: 'Statische Arbeitsanleitung. Sie belegt keine bereits implementierte Navigation, Speicherung oder assistive Bedienung.' },
    links('Die drei Aufgaben', [
      ['Projekte finden · Suche, Filter und Rückkehr', '/systems/shadcn/suchen-filtern'],
      ['Projekt verstehen · Detail und Aktionen', '/systems/shadcn/detailseite'],
      ['Projekt erstellen oder bearbeiten · Formular und Validierung', '/systems/shadcn/formulare-validierung'],
    ]),
    text('Das gemeinsame Datenmodell',
      'Ein Projekt hat genau drei fachliche Angaben: eine vom System gesetzte, unveränderliche ID; einen erforderlichen Projektnamen; den vom System gesetzten Status Aktiv oder Archiviert. Namen enthalten nach Entfernen äusserer Leerzeichen 1–80 Unicode-Graphemcluster. Doppelte Namen sind zulässig; die ID unterscheidet Projekte.',
      'Neue Projekte sind Aktiv. Nur ihr Name wird bearbeitet. Archivierte Projekte sind lesbar; eine Archivieren-Aktion gehört nicht zum Pilot. Die Referenz setzt sequenzielle Abläufe voraus, ohne gleichzeitige Bearbeitung durch mehrere Personen.',
      'Der Suchbestand ist vollständig und enthält höchstens 50 Projekte. Suche und Status wirken sofort lokal. q und status sind URL-gebunden und werden durch Detail und Bearbeitung weitergegeben. Grössere Bestände, Server-Suche, Rollen und Massenaktionen benötigen eigene Entscheidungen.'),
    text('Visuelle Referenz · Farbe und Typografie',
      'Für diesen Pilot wählen wir lokal: Fläche #FFFFFF, Text und primäre Aktion #171717, Text auf primärer Aktion #FAFAFA, sekundäre Fläche #F5F5F5. Inter ist die Referenzschrift; falls sie im Designwerkzeug fehlt, muss sie vor der Übergabe verfügbar gemacht werden. Diese Auswahl ist kein vollständiges, freigegebenes Markentoken-System.',
      'Rollen: Seitentitel 32/40 px, Abschnittstitel 24/32 px, Lesetext 16/24 px, Label und Hilfetext 14/20 px. Titel und Labels mit Gewicht 600, Lesetext mit 400. Bei Textvergrösserung wachsen Container; feste Höhen dürfen keinen Text abschneiden.',
      'Fehler: #B91C1C auf Weiss, immer mit verständlichem Text. Eingabebegrenzung #737373 auf Weiss. Fokus: sichtbarer 2-px-Ring #171717 mit 2 px Abstand auf Weiss. Zustände nie nur durch Farbe unterscheiden. Diese Paare sind lokale Entwurfsentscheidungen; Kontrast und Fokus müssen im fertigen Entwurf und bei der Umsetzung geprüft werden.'),
    text('Visuelle Referenz · Raum und Anordnung',
      'Abstände verwenden 4, 8, 12, 16, 24, 32 und 48 px. Label zum Feld: 8 px. Feld zur Hilfe oder Fehlermeldung: 8 px. Zwischen Feldern oder zusammengehörigen Regionen: 24 px. Zwischen grossen Seitenabschnitten: 48 px. Dokumentation und längere Texte bleiben bei höchstens 65 Zeichen pro Zeile.',
      'Inhaltsbreite maximal 1120 px; Seitenränder breit 32 px, schmal 16 px. Formular maximal 640 px; die kurze Detailansicht bleibt einspaltig. Unter 640 px verfügbarer Inhaltsbreite stehen Suchfelder und Aktionsgruppen untereinander. Lange Namen umbrechen. Listen zeigen schmal dieselben Angaben in gestapelten Einträgen.',
      'Buttons und Eingaben haben im Entwurf mindestens 44 px Höhe, dürfen mit Inhalt wachsen und erhalten 8 px Radius. Das ist eine eigene einheitliche Pilotwahl, keine Behauptung über unveränderte Spartan-Defaults oder die unterschiedlichen Radien der importierten Komponenten. Es gibt keine zusätzliche Card um jede Information und keine haftenden Aktionsleisten.'),
    text('Herkunft und offene Nachweise',
      'Herkunft: Das Handbuch und die importierte shadcn-Contractbibliothek liefern bestehende Komponenten- und Gestaltungsbefunde. Die hier gewählten Typografie-, Abstands-, Radius- und Layoutrollen sind ergänzende lokale Entscheidungen vom 18.11.2026. Sie ändern keine versionierten Contractdateien und lösen keinen Plattformnachweis aus.',
      'Design verantwortet künftig die visuellen Rollen; UX und Fachbereich prüfen Begriffe, Bedingungen und Rückwege; Entwicklung prüft die Umsetzbarkeit und technischen Nachweise. Das benennt benötigte Rollen, weist aber keinem realen Team ungefragt Verantwortung oder eine erteilte Freigabe zu.',
      'Noch offen: vorhandene Designressourcen im Designwerkzeug verwenden und prüfen; breite und schmale Aufgabenentwürfe ausarbeiten; unabhängige Teamprobe durchführen. Ebenso offen sind reale Speicheranbindung, Statusklärung bei unbekanntem Ergebnis und Laufzeitprüfungen mit Tastatur, Zoom und assistiven Werkzeugen. Ein unbekannter Speicherstand darf nicht als Erfolg oder als sicher ungespeichert erscheinen.'),
    links('Weiterführende Regeln', [
      ['Grundlagen · Gestaltungswissen und Quellen', '/systems/shadcn/grundlagen'],
      ['Content Design · verständliche Meldungen', '/systems/shadcn/content-design'],
      ['Komponenten · verfügbare Bausteine und Contractstände', '/systems/shadcn/komponenten'],
    ]),
  ],
}]
