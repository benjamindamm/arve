import type { Page } from '../../src/payload-types'

type TextBlock = Extract<NonNullable<Page['content']>[number], { blockType: 'text' }>
type ReleasePage = { slug: string; title: string; summary: string; pageType: 'guide'; parent: string | null; order: number; content: Page['content'] }
const node = (text: string) => ({ type: 'text', version: 1, text, detail: 0, format: 0, mode: 'normal', style: '' })
const paragraph = (text: string) => ({ type: 'paragraph', version: 1, direction: 'ltr', format: '', indent: 0, children: [node(text)] })
function text(title: string, ...paragraphs: string[]): TextBlock {
  return { blockType: 'text', body: { root: { type: 'root', version: 1, direction: 'ltr', format: '', indent: 0, children: [
    { type: 'heading', tag: 'h2', version: 1, direction: 'ltr', format: '', indent: 0, children: [node(title)] }, ...paragraphs.map(paragraph),
  ] } } }
}
function links(title: string, entries: [string, string][]): TextBlock {
  const block = text(title)
  block.body.root.children.push(...entries.map(([label, url]) => ({ ...paragraph(''), children: [{ type: 'link', version: 1, direction: 'ltr', format: '', indent: 0, fields: { linkType: 'custom', url, newTab: false }, children: [node(label)] }] })))
  return block
}

/** Editorial proposal based on the live page and targeted WAI source reading on 18 November 2026. */
export const formContentRelease: ReleasePage[] = [{
  slug: 'shadcn-content-design', title: 'Content Design', parent: null, order: 4, pageType: 'guide',
  summary: 'Eingaben verständlich vorbereiten, Fehler korrigierbar machen und nur bestätigte Ergebnisse versprechen.',
  content: [
    text('Ein Projekt anlegen: jeder Text hat eine Aufgabe',
      'Das Feld heisst «Projektname», die Aktion «Projekt erstellen», das bestätigte Ergebnis «Projekt erstellt». Diese Begriffe bleiben auch im Fehler und im Rückweg erhalten. Ein Wechsel zu «Objekt» oder «Datensatz» verlangt eine unnötige Übersetzung.',
      'Die folgenden Formulierungen sind redaktionelle Empfehlungen für den Formularweg, keine freigegebene Markenstimme. Die Beispielbedingungen sind ausdrücklich erfunden. Prüfzeitpunkt und Wiederherstellung führt das Formularpattern; diese Seite entscheidet, welche Aussage zum jeweiligen Zustand passt.'),
    text('Vor der Eingabe: Label, Hilfe und Pflicht unterscheiden',
      'Label: «Projektname». Es benennt den Wert und bleibt beim Tippen sichtbar. «Hier eingeben» benennt keinen Wert; ein verschwindender Platzhalter ersetzt das Label nicht.',
      'Hilfe: «Bis zu 80 Zeichen.» Nur verwenden, wenn diese Grenze fachlich tatsächlich gilt. Die 80 Zeichen sind hier eine Beispielbedingung, keine Arve-Regel. Eine relevante Bedingung gehört vor die Eingabe; lange Hintergrundinformationen können über eine klar benannte Hilfe erreichbar sein.',
      'Pflicht: Für das einzelne Beispielfeld ist «Projektname (erforderlich)» eindeutig. Bei gemischten Formularen ist etwa «Alle Angaben sind erforderlich, sofern sie nicht als optional gekennzeichnet sind» vor den Feldern möglich. Dann heisst eine freiwillige Ergänzung «Beschreibung (optional)». Eine Konvention durchgängig verwenden; ein Sternchen braucht eine erklärte Bedeutung.',
      'Aktion: «Projekt erstellen» beschreibt die tatsächliche Übermittlung. Führt der nächste Schritt nur zu einer Prüfung, passt «Angaben prüfen». Ein Label für einen Wert, eine Einstellung und eine Aktion benötigt jeweils eine andere Sprachform.'),
    {
      blockType: 'messageComparison', title: 'Vier Meldungen: die Aussage folgt dem bekannten Zustand',
      items: [
        { context: 'Das Pflichtfeld ist leer', before: 'Ungültige Eingabe', after: 'Einen Projektnamen eingeben.',
          reason: 'Nur wenn der Projektname erforderlich ist und fehlt. Die Meldung benennt die fehlende Angabe und die Korrektur, ohne einen Formatfehler zu behaupten.' },
        { context: 'Der Projektname überschreitet die erlaubte Länge', before: 'Der Name ist zu lang', after: 'Den Projektnamen auf höchstens 80 Zeichen kürzen.',
          reason: '80 Zeichen sind eine erfundene Beispielgrenze. Hilfe, Prüfung und Fehler müssen dieselbe tatsächlich geltende Grenze nennen. Den Wert zum Kürzen erhalten.' },
        { context: 'Die Anfrage wird noch bearbeitet', before: 'Projekt erstellt', after: 'Projekt wird erstellt …',
          reason: 'Der Start der Übermittlung bestätigt noch keine Annahme. Diese Aussage passt nur zum laufenden Vorgang; ein erfolgreicher Feldcheck beweist ebenfalls keine Erstellung.' },
        { context: 'Die Antwort fehlt; das Ergebnis ist unbekannt', before: 'Projekt nicht erstellt. Erneut versuchen.', after: 'Es ist noch unklar, ob das Projekt erstellt wurde.',
          reason: 'Die ausgebliebene Antwort beweist keinen Nicht-Erfolg. «Status prüfen» nur anbieten, wenn eine verlässliche Abfrage des ursprünglichen Vorgangs existiert; sie darf kein zweites Projekt erstellen. Andernfalls braucht das Produkt einen konkreten Klärungsweg.' },
      ],
    },
    text('Korrektur am richtigen Ort',
      'Eine Fehlerübersicht verwendet dasselbe Feldlabel: «Projektname: Einen Projektnamen eingeben.» Der Eintrag führt zum Feld. Übersicht und Hinweis am Feld dürfen keine unterschiedlichen Korrekturen verlangen.',
      'Nur bei bestätigtem Namenskonflikt und zulässiger Offenlegung: «Dieser Projektname ist bereits vergeben. Einen anderen Namen wählen.» Die Schreibweise kann korrekt sein. Ist dagegen der Dienst nicht erreichbar, hilft ein anderer Projektname nicht: Das Problem gehört zum Vorgang.'),
    text('Bestätigung und Erhalt sind getrennte Zusagen',
      'Erst nach bestätigter Annahme: Projekt «Jahresbericht» erstellt. Der konkrete Name ordnet das Ergebnis zu. «Projekt öffnen» kann zum Ergebnis führen, wenn dieser Weg tatsächlich vorhanden ist.',
      '«Die Angaben bleiben erhalten» darf nur erscheinen, wenn der aktuelle Rückweg sie tatsächlich bewahrt. Daraus folgt weder eine Speicherung auf dem Server noch die Wiederaufnahme nach dem Schliessen.'),
    text('Wann ist «Erneut versuchen» eine ehrliche Hilfe?',
      'Bei bestätigtem Nicht-Erfolg und behobener oder vorübergehender Ursache kann «Projekt wurde nicht erstellt. Erneut versuchen.» passen. Ein Namenskonflikt verlangt dagegen erst eine Korrektur und danach erneut «Projekt erstellen».',
      'Bei unbekanntem Ausgang zuerst den Status klären. Ein erneutes Absenden darf nur angeboten werden, wenn das Produkt doppelte Erstellung verlässlich verhindert oder der Nicht-Erfolg inzwischen feststeht. Der Text ersetzt diese Voraussetzung nicht.'),
    text('Ton, Formate und Übersetzung mitführen',
      'Ruhig und konkret ist hier die Empfehlung: «Einen Projektnamen eingeben» hilft mehr als «Ups! Da ist etwas schiefgelaufen». Anrede, Orthografie und inklusive Ansprache bleiben bewusste Produktentscheidungen; die neutralen Beispiele legen weder Du noch Sie fest.',
      'Die bisherigen Themen Zahlen, Datum und Währung bleiben relevant: Sprache allein bestimmt weder Region noch Währung oder Zeitzone. Die fachliche Bedeutung muss vor der Formatierung feststehen. Ein Kalenderdatum und ein Zeitpunkt sind verschieden.',
      'Übersetzungen als vollständige Nachrichten mit Kontext übergeben: Zustand, Feldbezug, variable Werte und erlaubte Folgeaktion. Lange Labels, Projektnamen und Fehlermeldungen müssen lesbar umbrechen. Eine deutsche Langtextprobe belegt noch keine Übersetzungsqualität oder Rechts-nach-links-Darstellung.'),
    text('Quelle, Empfehlung und offener Review',
      'WAI erläutert zu WCAG 3.3.2 die Bereitstellung von Labels oder Anweisungen für Eingaben; notwendige Bedingungen sollen verständlich sein. Zu 3.3.3 müssen bei automatisch erkannten Eingabefehlern bekannte Korrekturvorschläge vermittelt werden, sofern Sicherheit oder Zweck dadurch nicht gefährdet werden. Die Understanding-Seiten sind informative Erläuterungen.',
      'Die konkreten deutschen Texte, die Pflichtkonvention und die Trennung der Rückmeldungen sind unsere redaktionellen Vorschläge. Die Quellen bestimmen keine Markenstimme und bestätigen keine Fähigkeiten der Demo.',
      'Vor einer Produktübernahme legt das Team die echten Eingabebedingungen und die Nachweise für Annahme, Ablehnung und Wiederholung fest. Eine unabhängige Person soll am Fehlertext die Korrektur finden und beim unbekannten Ergebnis erkennen, dass Erfolg noch offen ist. Dieser Verständlichkeitsreview und der assistive Test des Ablaufs stehen noch aus.'),
    links('Im Formularweg weiterarbeiten', [
      ['Formulare und Validierung · Ablauf, Prüfzeitpunkt und Wiederherstellung', '/systems/shadcn/formulare-validierung'],
      ['Barrierefreiheit · Feldzuordnung und Rückmeldungen prüfen', '/systems/shadcn/barrierefreiheit'],
      ['Input · Anatomie und bestehende Vorschau', '/systems/shadcn/components/input'],
      ['WAI · Labels or Instructions (3.3.2), gelesen 18.11.2026', 'https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html'],
      ['WAI · Error Suggestion (3.3.3), gelesen 18.11.2026', 'https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html'],
    ]),
  ],
}]
