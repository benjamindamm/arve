import type { Page } from '../../src/payload-types'

type TextBlock = Extract<NonNullable<Page['content']>[number], { blockType: 'text' }>
export type FormPatternReleasePage = { slug: string; title: string; summary: string; pageType: Page['pageType']; parent: string | null; order: number; content: Page['content'] }
const node = (text: string) => ({ type: 'text', version: 1, text, detail: 0, format: 0, mode: 'normal', style: '' })
const heading = (title: string) => ({ type: 'heading', tag: 'h2', version: 1, direction: 'ltr', format: '', indent: 0, children: [node(title)] })
function text(title: string, ...paragraphs: string[]): TextBlock { return { blockType: 'text', body: { root: { type: 'root', version: 1, direction: 'ltr', format: '', indent: 0, children: [heading(title), ...paragraphs.map(p => ({ type: 'paragraph', version: 1, direction: 'ltr', format: '', indent: 0, children: [node(p)] }))] } } } }
function links(title: string, entries: [string, string][]): TextBlock { return { blockType: 'text', body: { root: { type: 'root', version: 1, direction: 'ltr', format: '', indent: 0, children: [heading(title), ...entries.map(([label, url]) => ({ type: 'paragraph', version: 1, direction: 'ltr', format: '', indent: 0, children: [{ type: 'link', version: 1, direction: 'ltr', format: '', indent: 0, fields: { linkType: 'custom', url, newTab: false }, children: [node(label)] }] }))] } } } }
const path = (slug: string) => `/systems/shadcn/${slug}`

export const formPatternsRelease: FormPatternReleasePage[] = [
  {
    slug: 'shadcn-formulare-validierung', title: 'Formulare und Validierung',
    summary: 'Zusammengehörige Angaben eingeben, Fehler korrigieren und das Ergebnis einer Übermittlung sicher unterscheiden. Redaktioneller Ablaufvorschlag am Beispiel «Projekt erstellen».',
    pageType: 'pattern', parent: 'shadcn-patterns', order: 0,
    content: [
      {
        blockType: 'workflowStudy',
        title: 'Von der Eingabe zum geklärten Ergebnis',
        summary: 'Ein Formular passt, wenn Angaben gemeinsam übernommen werden. Im Beispiel wird der Projektname erst mit «Projekt erstellen» übermittelt. Eine sofort wirksame Einstellung braucht einen eigenen Übernahmeweg. Feldgültigkeit, laufende Übermittlung und bestätigte Erstellung sind unterschiedliche Aussagen.',
        steps: [
          { key: 'eingeben', title: 'Angaben eingeben', description: 'Zweck, Pflichtangaben und Anforderungen sind vor der Eingabe verständlich. Der Projektname bleibt während der Bearbeitung ein Entwurf.', next: '«Projekt erstellen» löst die Prüfung aus.', tone: 'normal' },
          { key: 'pruefen', title: 'Angaben prüfen', description: 'Die relevanten Angaben werden geprüft. Ein lokal gültiger Wert ist noch keine Annahme durch das Produkt.', next: 'Bei Eingabefehlern: Fehler verstehen. Ohne bekannte Eingabefehler: übermitteln.', tone: 'normal' },
          { key: 'fehler-verstehen', title: 'Fehler verstehen', description: 'Die Meldung benennt das betroffene Feld und eine mögliche Korrektur. Bei mehreren Fehlern führt eine Übersicht zu den Feldern. Bereits eingegebene Angaben bleiben erhalten.', next: 'Zum betroffenen Feld gehen und korrigieren.', tone: 'attention' },
          { key: 'korrigieren', title: 'Gezielt korrigieren', description: 'Nur die betroffenen Angaben ändern. Erledigte Fehler werden aktualisiert; die Korrektur verschiebt den Fokus nicht ungefragt.', next: '«Projekt erstellen» prüft die aktuellen Angaben erneut.', tone: 'normal' },
          { key: 'uebermitteln', title: 'Übermittlung läuft', description: 'Eine erkennbare Warteanzeige erklärt den laufenden Vorgang. Mehrfachauslösen wird nachvollziehbar verhindert. Eine laufende Übermittlung ist noch kein Erfolg.', next: 'Antwort auswerten: bestätigt, ausdrücklich abgelehnt oder Ergebnis unbekannt.', tone: 'normal' },
          { key: 'bestaetigt', title: 'Erstellung bestätigt', description: 'Erst die bestätigte Annahme erlaubt «Projekt erstellt». Das Ergebnis und ein sinnvoller nächster Ort bleiben erreichbar.', next: 'Das erstellte Projekt öffnen oder die nächste Aufgabe beginnen.', tone: 'success' },
          { key: 'abgelehnt', title: 'Übermittlung ausdrücklich abgelehnt', description: 'Der Dienst bestätigt, dass der Auftrag nicht angenommen wurde. Ein korrigierbares Problem wird dem Feld zugeordnet; fehlende Berechtigung oder eine Störung wird als solche erklärt.', next: 'Bei Eingabefehlern zurück zur Korrektur. Sonst den zur Ursache passenden Hilfe- oder Wiederholungsweg anbieten.', tone: 'attention' },
          { key: 'unbekannt', title: 'Ergebnis unbekannt', description: 'Eine fehlende Antwort beweist weder Erstellung noch Ablehnung. Der Entwurf und der Bezug zum ausgelösten Vorgang bleiben nachvollziehbar; die Oberfläche behauptet keinen sicheren Misserfolg.', next: 'Zuerst Status klären. Nur bei geklärter Nichtannahme oder gesicherter Vermeidung von Doppelungen erneut übermitteln.', tone: 'attention' },
        ],
        source: 'Eigener redaktioneller Ablaufvorschlag für das shadcn-Referenzhandbuch, 18.11.2026. WAI Forms Tutorial stützt verständliche Rückmeldungen und Korrekturwege; Versandzweige und Wiederholungsbedingungen sind Produktentscheidungen.',
        caption: 'Statische Ablaufstudie. Die Zweige sind in den Texten vollständig beschrieben. Kein ausführbares Formular, kein SCXML-Contract und kein Nachweis für Speicherung, Statusabfrage oder sichere Wiederholung.',
      },
      text('Wann prüfen?',
        'Vorschlag für dieses Referenzsystem: Unberührte Felder zeigen Anforderungen, noch keine Fehlermeldungen. Der erste Versuch mit «Projekt erstellen» prüft alle relevanten Angaben. Eine deaktivierte Hauptaktion soll nicht die einzige Erklärung fehlender Angaben sein.',
        'Beim Verlassen eines bearbeiteten Felds kann frühe Prüfung helfen, wenn bereits eine stabile, verständliche Korrektur möglich ist. Während der ersten Eingabe nicht jedes unvollständige Zwischenzeichen beanstanden. Bereits gemeldete Fehler zeitnah nach einer erkennbaren Korrektur aktualisieren.',
        'Eine serverseitige Ablehnung wird nach ihrer Ursache behandelt. Ein inzwischen belegter Projektname kann eine Feldkorrektur verlangen; eine Verbindungsstörung verlangt keine andere Schreibweise. Lokale Prüfung ersetzt die fachliche Prüfung durch den Dienst nicht.'),
      text('Fehler korrigieren',
        'Die Person muss erkennen, was geändert werden muss, und die Stelle direkt erreichen können. Die Übersicht verwendet dieselben Feldbezeichnungen wie das Formular und bietet Links zu den betroffenen Eingaben. Fehlertext und passende Hilfestellung bleiben am Feld verfügbar; korrekte Angaben gehen nicht verloren.',
        'Fokusvorschlag für den Produktreview: Nach einem erfolglosen Gesamtversuch mit mehreren Fehlern führt der Fokus zur Fehlerübersicht. Bei einem einzelnen, eindeutig zuordenbaren Fehler kann das betroffene Feld das Ziel sein. Während einzelner Korrekturen bleibt der Fokus in der Eingabe. Dies ist eine zu prüfende Ablaufentscheidung, keine allgemeine ARIA-Vorgabe.',
        'Für mehrschrittige Aufgaben bleiben Rückwege und bereits erfasste Werte nachvollziehbar. Ein Schrittwechsel erklärt den neuen Schritt; er ist kein Erfolg der Gesamtaufgabe. Ob mehrere Schritte nötig sind, richtet sich nach Aufgabe und Abhängigkeiten, nicht nach einer festen Feldanzahl.'),
      links('Meldungen und Bedienung am selben Beispiel', [
        ['Content Design · Labels, Korrekturhinweise und Ergebnisformulierungen', path('content-design')],
        ['Barrierefreiheit · begrenzter Prüfweg vom Feld bis zum Ergebnis', path('barrierefreiheit')],
        ['Input · Anatomie und tatsächlicher Stand der vorhandenen Vorschau', path('components/input')],
      ]),
      text('Unbekanntes Ergebnis klären',
        'Nach einer unterbrochenen Verbindung bleibt offen, ob das Projekt bereits erstellt wurde. Ein blindes «Erneut versuchen» kann denselben Auftrag nochmals auslösen. Der konkrete Produktweg muss deshalb zuerst den Annahmestatus klären oder eine Wiederholung ohne Doppelung gewährleisten.',
        'Eine Statusabfrage, eine eindeutig zugeordnete Ergebnisansicht oder ein Supportweg dürfen nur angeboten werden, wenn das Produkt sie tatsächlich bereitstellt. Die Abwesenheit eines Projekts in einer möglicherweise verzögert aktualisierten Liste belegt für sich allein keine Nichtannahme. Ohne verlässlichen Klärungsweg bleibt das Ergebnis sichtbar unbekannt; es wird nicht nach einer beliebigen Wartezeit zu «fehlgeschlagen».',
        'Eine ausdrücklich bestätigte Nichtannahme ist anders: Ursache erklären, Eingaben erhalten und eine passende nächste Handlung anbieten. Erneutes Absenden hilft bei unveränderten fehlenden Rechten nicht.'),
      text('Abbrechen und später fortsetzen',
        'Vor dem Absenden bedeutet Abbrechen, den noch nicht übermittelten Entwurf zu verlassen. Ob Angaben verworfen oder gespeichert werden, muss vor der Entscheidung erkennbar sein. Entwurfsspeicherung ist hier nicht nachgewiesen und darf nicht versprochen werden.',
        'Während einer Übermittlung ist Schliessen oder Zurückgehen kein Beleg dafür, dass der Dienst den Vorgang gestoppt hat. Bei der Rückkehr zuerst den tatsächlichen Stand klären; keinen Auftrag automatisch erneut auslösen.',
        'Wenn ein Produkt gespeicherte Entwürfe unterstützt, erklärt die Wiederaufnahme den gespeicherten Stand, fehlende Angaben und inzwischen geänderte Bedingungen. Aufbewahrung, sensible Werte und Gültigkeitsdauer brauchen eine eigene Produktentscheidung.'),
      text('Vor einer Produktfreigabe entscheiden und prüfen',
        'Offen: Wann werden einzelne Felder geprüft und welches Fokusziel erhält der erfolglose Gesamtversuch? Der vorgeschlagene Weg braucht Prüfung mit Tastatur und assistiver Technik am tatsächlichen Formular.',
        'Offen: Welche Angaben überstehen Abbruch, Reload oder Sitzungsende? Entwurfsaufbewahrung und Umgang mit sensiblen Werten sind nicht durch die Illustration festgelegt.',
        'Offen: Wie wird eine Annahme festgestellt und eine Doppelübermittlung vermieden? Bestätigung, ausdrückliche Ablehnung und verlorene Antwort müssen als getrennte Fälle am angebundenen Dienst geprüft werden.',
        'Gezielte Prüffälle: unberührtes Pflichtfeld absenden; einen und mehrere Fehler korrigieren; gültige Angaben nach Ablehnung erhalten; langsame Antwort und Mehrfachauslösen; nach Annahme die Antwort verlieren; während der Übermittlung verlassen und wiederkehren. Diese Fälle sind Prüfaufträge, hier keine ausgeführten Funktionsnachweise.'),
      text('Herkunft und Geltung',
        'WAI beschreibt verständliche Rückmeldungen zu Erfolg und Fehlern, feldnahe Hinweise sowie Fehlerlisten mit Feldbezug und Links. Das Tutorial zeigt verschiedene Prüfzeitpunkte und Fokusmöglichkeiten. Daraus folgt keine einzige vorgeschriebene Reihenfolge für jedes Formular.',
        'Die hier gewählte Reihenfolge, die Fokusverzweigung, der Erhalt von Entwürfen und der Umgang mit unbekannter Annahme sind redaktionelle Vorschläge. Eine verantwortete Hausregel und die Produktfreigabe stehen aus. Die bestehende Input-Vorschau belegt keine vollständige Übermittlung; neue Demo-, Contract- oder native Fähigkeiten werden nicht behauptet.'),
      links('Primärquelle und Nachbaraufgabe', [
        ['WAI Forms Tutorial · User Notifications, gezielt gelesen am 18.11.2026', 'https://www.w3.org/WAI/tutorials/forms/notifications/'],
        ['Systemzustände gestalten · weiterer Kontext zu Laden und Störungen', path('systemzustaende')],
      ]),
    ],
  },
  {
    slug: 'shadcn-patterns', title: 'UX-Patterns', pageType: 'pattern', parent: null, order: 2,
    summary: 'Von der Nutzeraufgabe zum passenden Ablauf. Der Formularweg verbindet Eingabe, verständliche Meldungen und einen begrenzten Prüfweg.',
    content: [
      links('Angaben gemeinsam übermitteln', [
        ['Formulare und Validierung · vom Entwurf über Korrektur zum geklärten Ergebnis', path('formulare-validierung')],
        ['Content Design · die passenden Texte an jedem Übergang', path('content-design')],
        ['Barrierefreiheit · denselben Weg gezielt prüfen', path('barrierefreiheit')],
      ]),
      links('Eine andere Aufgabe bearbeiten', [
        ['Vorgegebene Werte übernehmen → Auswahl und Suche', path('auswahl-und-suche')],
        ['Inhalte finden und eingrenzen → Suchen und Filtern', path('suchen-filtern')],
        ['Einträge vergleichen oder gemeinsam bearbeiten → Tabellen und Listen', path('tabellen-und-listen')],
        ['Laden, Leere und Störungen unterscheiden → Systemzustände gestalten', path('systemzustaende')],
        ['Eine folgenreiche Änderung absichern → Destruktive Aktionen bestätigen', path('destruktive-aktionen')],
      ]),
      text('Was ein Pattern leistet', 'Ein Pattern verbindet Bausteine zu einer Nutzeraufgabe. Die Komponentenseite erklärt einen einzelnen Baustein; ein Layout ordnet die Bereiche einer Seite. Die anderen Aufgaben bleiben im vorhandenen Bearbeitungsstand. Die ausgearbeitete Formularstudie ist ein redaktioneller Vorschlag, keine Freigabe einer Implementierung.'),
    ],
  },
  {
    slug: 'shadcn-felder-und-fehlermeldungen', title: 'Felder und Fehlermeldungen', pageType: 'guide', parent: 'shadcn-patterns', order: 100,
    summary: 'Wegweiser zum führenden Formularablauf, zu Meldungstexten und zur Input-Anatomie. Die bisherige Adresse bleibt erreichbar.',
    content: [
      links('Hier geht es weiter', [
        ['Formulare und Validierung · Prüfzeitpunkt, Korrektur und erhaltene Angaben', path('formulare-validierung')],
        ['Content Design · Labels, Hilfe und Fehlermeldungen formulieren', path('content-design')],
        ['Input · Beschriftung, Eingabe und Zustandsdarstellung', path('components/input')],
        ['Barrierefreiheit · Zuordnung, Fokus und Rückmeldungen prüfen', path('barrierefreiheit')],
      ]),
    ],
  },
]
