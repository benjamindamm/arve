import type { Page } from '../../src/payload-types'

const base = { version: 1, direction: 'ltr', format: '', indent: 0 } as const
const text = (value: string, format = 0) => ({ type: 'text', version: 1, text: value, detail: 0, format, mode: 'normal', style: '' })
const heading = (value: string) => ({ ...base, type: 'heading', tag: 'h2', children: [text(value)] })
const paragraph = (value: string) => ({ ...base, type: 'paragraph', children: [text(value)] })
const labelled = (label: string, value: string) => ({ ...base, type: 'paragraph', children: [text(`${label} `, 1), text(value)] })
const link = (label: string, url: string) => ({ ...base, type: 'paragraph', children: [{ ...base, type: 'link', fields: { linkType: 'custom', url, newTab: false }, children: [text(label)] }] })
const section = (title: string, children: Array<ReturnType<typeof paragraph> | ReturnType<typeof link>>) => ({ blockType: 'text' as const, body: { root: { ...base, type: 'root', children: [heading(title), ...children] } } })

// Editorial review material. The importing release owns the baseline comparison.
// These tasks describe expected results, not completed accessibility tests.
export const formInclusionRelease = [{
  slug: 'shadcn-barrierefreiheit',
  title: 'Barrierefreiheit und inklusive Gestaltung',
  summary: 'Ein Formular verstehen, mit Tastatur korrigieren und sein Ergebnis erkennen: konkrete Prüfaufgaben und ihre Grenzen.',
  pageType: 'guide',
  parent: null,
  order: 5,
  content: [
    section('Eine Aufgabe vollständig prüfen', [
      paragraph('Eine Person gibt einen Projektnamen ein und löst «Projekt erstellen» aus. Prüfe an einer konkreten Webumsetzung den vollständigen Weg: Eingeben → Prüfen → Fehler verstehen und korrigieren → erneut prüfen → Übermitteln → bestätigt, abgelehnt oder Ergebnis unbekannt.'),
      paragraph('Die folgenden Aufgaben beschreiben erwartete Ergebnisse. Die Ablaufentscheidungen führt das Formularpattern; Fokuswahl, Prüfzeitpunkt und Wiederherstellung sind dort redaktionelle Vorschläge. Prüfstand und Quellen stehen am Schluss.'),
      link('Formulare und Validierung: Ablauf und Wiederherstellung', '/systems/shadcn/formulare-validierung'),
    ]),
    section('1 · Feldname, Hilfe und Fehler verstehen', [
      labelled('Aufgabe:', 'Erreiche «Projektname» mit Tab. Prüfe mit Screenreader Name, Rolle, Pflichtstatus, Wert und Hilfe. Gib einen Wert ein; löse danach mit leerem Pflichtfeld «Projekt erstellen» aus.'),
      labelled('Erwartung:', 'Das sichtbare Label bleibt erhalten, der zugängliche Name enthält «Projektname». Ein Platzhalter ersetzt kein Label. Hilfe ergänzt die Benennung. «Einen Projektnamen eingeben.» erklärt beim Feld die Korrektur. Beim erneuten Erreichen sind Fehlerstatus und Hinweis wahrnehmbar.'),
      labelled('Zuordnung:', 'Im Web kann aria-describedby Hilfe und Fehler zuordnen; aria-invalid kennzeichnet den Fehlerzustand. Prüfe die tatsächliche Verbindung und Ausgabe. Sichtbare Nähe allein belegt sie nicht.'),
      link('Content Design: Labels und Meldungspaare', '/systems/shadcn/content-design'),
      link('Input: Anatomie und Umsetzungsgrenzen', '/systems/shadcn/components/input'),
    ]),
    section('2 · Nach Absenden zur Korrektur gelangen', [
      labelled('Aufgabe:', 'Sende ausschliesslich mit Tastatur ab. Prüfe einen einzelnen Fehler und, an einem geeigneten Mehrfeldformular, mehrere Fehler. Das Einzelfeld-Beispiel deckt nur den ersten Fall ab.'),
      labelled('Erwartung:', 'Nach dem Fokusvorschlag führt ein eindeutig zugeordneter Fehler zum Feld, mehrere Fehler zur Übersicht. Diese nennt Labels und Korrekturen. Jeder Feldlink setzt bei Tastaturaktivierung den Fokus auf das richtige Eingabeelement; blosses Scrollen genügt hier nicht.'),
      labelled('Weiterprüfen:', 'Fokus bleibt sichtbar, die Reihenfolge nachvollziehbar. Übersicht und Feldhinweis sind mit Screenreader verständlich, ohne konkurrierende Mehrfachansagen. Während der Korrektur versetzt keine laufende Prüfung den Fokus.'),
    ]),
    section('3 · Korrigieren ohne Verlust', [
      labelled('Aufgabe:', 'Korrigiere «Projektname» und sende erneut ab. Prüfe bei weiteren Angaben deren Erhalt. Erprobe auch den vorgesehenen Rückweg und Abbruch.'),
      labelled('Erwartung:', 'Nach erfolgreicher erneuter Prüfung verschwinden veralteter Fehlertext und Fehlerstatus; benötigte Hilfe bleibt zugeordnet. Gültige Angaben bleiben erhalten. Angekündigter Erhalt oder Verlust beim Abbruch stimmt mit dem Verhalten überein. Ein sichtbarer Wert belegt keine serverseitige Speicherung.'),
      labelled('Falls ein Dialog beteiligt ist:', 'Prüfe nach Schliessen die Rückkehr zum Auslöser. Existiert er nicht mehr, braucht das Pattern ein sinnvolles erreichbares Folgeziel.'),
    ]),
    section('4 · Übermittlung und Ergebnis erkennen', [
      labelled('Aufgabe:', 'Erzeuge in einer geeigneten Testumgebung laufende Übermittlung, bestätigten Erfolg, fachliche Ablehnung und ausbleibende eindeutige Antwort. Prüfe jeden Übergang auch mit Screenreader.'),
      labelled('Erwartung:', '«Projekt wird erstellt …» bezeichnet die Übermittlung. Erfolg erscheint erst nach bestätigter Annahme; eine Ablehnung erklärt den nächsten Schritt. «Es ist noch unklar, ob das Projekt erstellt wurde.» benennt die Unsicherheit. Zuerst folgt Statusklärung, kein blindes erneutes Senden.'),
      labelled('Voraussetzung:', '«Status prüfen» setzt eine verlässliche verfügbare Statusabfrage voraus. Werteerhalt und Schutz vor doppelter Anlage müssen eigens nachgewiesen werden.'),
      labelled('Ansage:', 'Statusmeldungen ohne Kontextwechsel kommen ohne Fokusübernahme verständlich an. Stimme Fokussteuerung und Live-Rückmeldung ab: Nicht jede Änderung braucht eine Ansage oder einen dringenden Alert.'),
    ]),
    section('5 · Vergrössert und ohne Farberkennung arbeiten', [
      labelled('Aufgabe:', 'Wiederhole die Korrektur mit 200 Prozent Textvergrösserung und separat bei 320 CSS-Pixeln Inhaltsbreite, etwa ausgehend von 1280 CSS-Pixeln bei 400 Prozent Browserzoom. Prüfe geringe Fensterhöhe und den Fehler mit gleichzeitigem Fokus in jedem vorgesehenen Theme.'),
      labelled('Erwartung:', 'Label, Hilfe, Fehler, Übersicht und Aktion bleiben lesbar und bedienbar. Lange Meldungen umbrechen; das vertikale Formular verlangt kein Scrollen in zwei Richtungen. Fixierte Bereiche verdecken weder fokussiertes Feld noch Korrektur. Fehlertext trägt Bedeutung zusätzlich zur Farbe, Fokus und Fehler bleiben unterscheidbar.'),
      labelled('Messung:', 'Prüfe tatsächliche Text-/Hintergrund- und relevante Nichttext-Kontraste. Berechnete Tokenpaare ersetzen keine Prüfung gerenderter Zustände. Ein schmaler Screenshot belegt weder Textvergrösserung noch Reflow vollständig.'),
      link('Farbe: Kontrastpaare und Nachweisgrenzen', '/systems/shadcn/farben'),
    ]),
    section('Weitere Bedingungen gezielt ergänzen', [
      paragraph('Auf vorgesehenen Touchgeräten müssen Feld, Hilfe und Aktion ohne Hover erreichbar bleiben; die Bildschirmtastatur darf die Korrektur nicht blockieren. Bei reduzierter Bewegung bleiben Status und Ergebnis ohne Animation verständlich.'),
      paragraph('Prüfe unterstützte Sprachen mit langen Labels, Sprachkennzeichnung und gegebenenfalls Rechts-nach-links-Leserichtung samt gemischten Werten: Zuordnung und Lesereihenfolge müssen erhalten bleiben. Dafür braucht es passende Testdaten und fachkundige Prüfung; Spiegelung oder Pseudotext genügen nicht. Prüfe Überschriften und Fokusreihenfolge auch im Seitenkontext.'),
      link('Bewegung: reduzierte Darstellung', '/systems/shadcn/bewegung'),
      link('Abstände und Grössen: Bedienflächen', '/systems/shadcn/abstaende'),
      link('Seitenstruktur und Navigation', '/systems/shadcn/seitenstruktur-und-navigation'),
    ]),
    section('Nachweise, Quellen und offene Prüfungen', [
      labelled('Protokoll:', 'Notiere Umsetzung/Revision, Datum, prüfende Person, Browser/Betriebssystem, Screenreader-Version, relevante Sprache/Theme/Vergrösserung, Eingabe, Erwartung, Beobachtung und Abweichungen. Bestanden gilt nur für diesen Fall; fehlende Zweige bleiben nicht prüfbar. DOM-Inspektion, assistiver Durchlauf, Kontrastrechnung und Nutzungsforschung liefern unterschiedliche Teilnachweise.'),
      labelled('Prüfstand:', 'Handbuch und verlinkte Primärquellen wurden am 18. November 2026 redaktionell gelesen. Tastatur-, Screenreader-, Zoom-, Touch- und Serverfälle sind hier nicht ausgeführt. Die Input-Demo belegt weder Formularversand noch Fehlerübersicht oder Serverergebnis. Native iOS-/Android-Nachweise, allgemeine Konformität und Produktfreigabe folgen daraus nicht.'),
      labelled('Normative Grundlage:', 'WCAG 2.2 führt Labels/Anleitungen (3.3.2, A), Fehleridentifikation (3.3.1, A), bekannte Korrekturvorschläge mit Ausnahmen (3.3.3, AA), sichtbaren Text im zugänglichen Namen (2.5.3, A) und Statusmeldungen ohne Fokusübernahme (4.1.3, AA). Textvergrösserung und Reflow (1.4.4/1.4.10, AA) haben eigene Bedingungen und Ausnahmen, etwa notwendige zweidimensionale Layouts beim Reflow.'),
      link('WCAG 2.2: Erfolgskriterien und Geltungsbereiche', 'https://www.w3.org/TR/WCAG22/'),
      labelled('Erläuternde Quellen:', 'WAI-Tutorial und Understanding-Dokument unterstützen die Gestaltung. Fehlerübersicht und konkretes Fokusziel sind Lösungswege, keine pauschale WCAG-Pflicht. Produkt und Accessibility-Review entscheiden die lokalen Vorschläge für die jeweilige Umsetzung.'),
      link('WAI Forms Tutorial: Fehlerübersicht und Feldhinweise', 'https://www.w3.org/WAI/tutorials/forms/notifications/'),
      link('Understanding 4.1.3: Status und Kontextwechsel', 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html'),
    ]),
  ],
}] satisfies Array<{ slug: string; title: string; summary: string; pageType: Page['pageType']; parent: string | null; order: number; content: Page['content'] }>
