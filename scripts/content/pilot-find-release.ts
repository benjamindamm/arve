import type { Page } from '../../src/payload-types'

type TextBlock = Extract<NonNullable<Page['content']>[number], { blockType: 'text' }>
type ReleasePage = { slug: string; title: string; summary: string; parent: string | null; order: number; pageType: Page['pageType']; content: Page['content'] }
const node = (text: string) => ({ type: 'text', version: 1, text, detail: 0, format: 0, mode: 'normal', style: '' })
const heading = (title: string) => ({ type: 'heading', tag: 'h2', version: 1, direction: 'ltr', format: '', indent: 0, children: [node(title)] })
function text(title: string, ...paragraphs: string[]): TextBlock { return { blockType: 'text', body: { root: { type: 'root', version: 1, direction: 'ltr', format: '', indent: 0, children: [heading(title), ...paragraphs.map(p => ({ type: 'paragraph', version: 1, direction: 'ltr', format: '', indent: 0, children: [node(p)] }))] } } } }
function links(title: string, entries: [string, string][]): TextBlock { return { blockType: 'text', body: { root: { type: 'root', version: 1, direction: 'ltr', format: '', indent: 0, children: [heading(title), ...entries.map(([label, url]) => ({ type: 'paragraph', version: 1, direction: 'ltr', format: '', indent: 0, children: [{ type: 'link', version: 1, direction: 'ltr', format: '', indent: 0, fields: { linkType: 'custom', url, newTab: false }, children: [node(label)] }] }))] } } } }

// Neue lokale Referenzentscheidung für den neutralen Projektpilot, 18.11.2026.
// Herkunft: team-readiness/find.md, content-standard/README.md und patterns-layouts.md;
// bisherige Regeln aus seed-shadcn-guides.ts bleiben als Suchregion, Ergebniszahl,
// sichtbarer Anwendungszeitpunkt, Reset und Nulltreffer erhalten. Kein neuer Laufzeitnachweis.
// Ergänzende lokale Entscheidungen: ungültige URL-Kriterien fallen verständlich zurück;
// schmal gestapelte Einzelergebnisse statt einer horizontalen Vergleichstabelle.
// Verantwortungs-/Reviewdaten ergänzt der koordinierte Release, keine Hausregel behauptet.
export const pilotFindRelease: ReleasePage[] = [{
  slug: 'shadcn-suchen-filtern', title: 'Suchen und Filtern', parent: 'shadcn-patterns', order: 1, pageType: 'pattern',
  summary: 'Ein Projekt finden, einzeln öffnen und mit erhaltenen Suchkriterien zurückkehren.',
  content: [
    text('Referenzentscheidung · Projekte finden',
      'Für Web auf Desktop und schmalen Ansichten, Sprache de-CH: Eine vollständige Menge von höchstens 50 Projekten wird sofort lokal durchsucht. Suche nach ID oder Projektname, ohne Gross-/Kleinschreibung, als zusammenhängender Teilstring. Der Statusfilter «Alle / Aktiv / Archiviert» wird mit der Suche über UND kombiniert. Leere Suche trifft alle Namen und IDs. Der Hinweis «Suche und Filter wirken sofort» steht bei den Eingaben.',
      'Die geladene Projektübersicht bietet immer den Einstieg «Projekt erstellen», auch bei vorhandenen Ergebnissen und Nulltreffern. Er führt zum leeren Erstellformular und trägt q/status mit. Die Liste zeigt ID, Projektname und Status. Reihenfolge: Projektname nach de-CH, bei gleichem Sortierwert ID aufsteigend. Es gibt Einzelöffnung, keine Mehrfachauswahl, Massenaktionen, Seitennavigation oder Sortiersteuerung. Bei mehr als 50 Einträgen, Teilmengen oder Serverabfragen muss das Produkt Such-, Mengen- und Antwortverhalten neu entscheiden; eine Teilmenge darf nicht als vollständiges Ergebnis erscheinen.',
      'Diese Festlegung konkretisiert FIND-01/02/05/07 als lokale fachliche Referenzentscheidung, nicht als shadcn-Upstream- oder Firmenregel. Der gemeinsame Pilot führt Datenmodell, Grenzen und offenen Review. Das Rechnungsbeispiel bleibt ein anderes, begrenztes Beispiel.'),
    {
      blockType: 'workflowStudy', title: 'Von der Übersicht zum Projekt und zurück',
      summary: 'Statische, übertragbare Aufgabenreferenz: Die Übersicht bietet den bezeichneten Einstieg «Projekte». Die Liste trägt dieselbe Überschrift. Die Suchregion steht vor Ergebniszahl und Ergebnissen; ein Projektname als Link öffnet genau ein Detail.',
      steps: [
        { key: 'einstieg', title: 'Projekte öffnen', description: 'Übersicht → «Projekte». Zuerst Seitenüberschrift, dann sichtbar beschriftete «Projekte suchen»-Eingabe und «Status»-Auswahl, danach «N Projekte» und Ergebnisse.', next: 'Nach ID oder Name suchen und bei Bedarf Status eingrenzen.', tone: 'normal' },
        { key: 'eingrenzen', title: 'Ergebnis verstehen', description: 'Jede Änderung wirkt sofort. Eingabefokus bleibt erhalten; die aktualisierte Ergebniszahl wird ruhig als Status angekündigt. Sichtbare Kriterien bleiben in Suche und Statusauswahl erkennbar. «Suche zurücksetzen» leert q und setzt Status auf Alle; Daten bleiben erhalten.', next: 'Ein Ergebnis über seinen Projektnamen öffnen.', tone: 'normal' },
        { key: 'detail', title: 'Identität und Handlung prüfen', description: 'Detail zeigt dieselbe ID, denselben Namen und Status. Aktive Projekte erlauben Namensbearbeitung; archivierte sind nur lesbar. ID und Status werden vom System gesetzt. Keine Archivieren-Aktion im Pilot.', next: 'Bei Aktiv bei Bedarf bearbeiten; sonst oder danach «Zurück zu Projekten».', tone: 'normal' },
        { key: 'rueckkehr', title: 'Im Suchkontext weiterarbeiten', description: 'Detail und Bearbeitung tragen q/status weiter. Explizite Rückkehr und Browser-Zurück stellen dieselben Kriterien her. Die Liste berechnet Ergebnisse aus dem aktuellen Bestand neu. Fokus und sichtbare Position kehren zum Ergebnislink der geöffneten ID zurück, wenn er noch vorkommt.', next: 'Fehlt die ID im Ergebnis, Fokus zur Ergebnisüberschrift; kurz erklären: «Das zuvor geöffnete Projekt ist in diesen Ergebnissen nicht enthalten.»', tone: 'success' },
      ],
      source: 'Lokale Pilotentscheidung vom 18.11.2026; bestehende Such-, Detail- und Zustandsregeln zusammengeführt. FIND-01–08 und PAT-11/14, LAY-11/13/15 sind die redaktionelle Prüfbasis.',
      caption: 'Statische Ablaufstudie, keine neue Projektanwendung und kein Implementierungsnachweis. Die unabhängige Gestaltungsprüfung mit den untenstehenden Fällen steht aus.',
    },
    text('Kontextmatrix · Rückkehr, Reload und Direktlink',
      'Liste: q und status sind URL-gebunden und werden bei jeder Änderung aktualisiert. Eingaben erzeugen keine Browser-Historie pro Zeichen; das Öffnen eines Details bleibt ein eigener Navigationsschritt. Reload und Direktlink übernehmen die URL-Kriterien. Ohne q gilt leere Suche, ohne status «Alle». Ungültiger Status fällt auf «Alle» zurück und wird als zurückgesetzter Filter erklärt; q bleibt erhalten.',
      'Detail und Bearbeitung: q/status gehören auch zu diesen Rückwegen. Direkt geöffnetes Detail mit Kriterien führt zur entsprechend gefilterten Liste; ohne Kriterien zu allen Projekten. Browser-Zurück und der ausdrückliche Listenrücklink liefern dieselben Kriterien. Beim Zurückkehren nach Namensänderung kann das Projekt seine Position wechseln oder aus dem Ergebnis fallen: ID ist die stabile Zuordnung, nie die alte Zeilennummer.',
      'Fokusmatrix: Rückkehr aus Detail oder Bearbeitung → Link der geöffneten ID und dessen sichtbare Position, sonst Ergebnisüberschrift. Neuer Direktaufruf oder Reload der Liste → normale Seitennavigation ohne erzwungenen Sprung in eine Eingabe. Ändern der Kriterien und Zurücksetzen → Fokus bleibt am bedienten Element. Keine sitzungsübergreifende Speicherung ausserhalb der URL zugesagt.'),
    {
      blockType: 'messageComparison', title: 'Zustandsmatrix · Ursache, Text und nächster Schritt',
      items: [
        { context: 'Vollständiger Bestand, passende Ergebnisse', before: 'Nicht nur «Fertig».', after: '«2 Projekte»; ID, Name und Status pro Ergebnis; Projektname öffnet das Detail.', reason: 'Ergebniszahl nach Änderung als ruhiger Status, ohne Fokusübernahme. q/status bleiben sichtbar und in der URL.' },
        { context: 'Bestand vorhanden, keine passenden Ergebnisse', before: 'Nicht «Noch keine Projekte».', after: '«Keine Projekte für diese Suche.» · «Suchbegriff oder Status anpassen.» · «Suche zurücksetzen».', reason: 'Kriterien bleiben bis zur bewussten Änderung erhalten. Zurücksetzen zeigt den vollständigen Bestand mit Status Alle.' },
        { context: 'Vollständiger Bestand ist leer', before: 'Keine nutzlose Aufforderung zur Filterkorrektur.', after: '«Noch keine Projekte.» · «Projekt erstellen».', reason: 'Erstleere ist unabhängig von Suchkriterien. Erstellung folgt dem Formularweg; keine vorhandenen Projekte werden durch Reset erzeugt.' },
        { context: 'Bestand wird bereitgestellt oder Bereitstellung scheitert', before: 'Keine Nulltreffer vortäuschen; lokale Suche braucht keine künstliche Wartephase.', after: 'Falls geladen wird: «Projekte werden geladen.» Bei Fehler: «Projekte konnten nicht geladen werden.» · «Erneut versuchen».', reason: 'Bestehende Zustandsregel für eine spätere Datenanbindung: Suchkriterien erhalten, Bereich als beschäftigt kennzeichnen, Ladeende/Fehler verständlich ankündigen, Fokus nicht verschieben. Retry nur bei vorübergehender Ursache. Im lokalen Gestaltungsfall kein laufender Suchdienst.' },
        { context: 'Detail-ID unbekannt oder nicht mehr in der Liste', before: 'Keinen leeren Detailrahmen zeigen.', after: '«Projekt nicht gefunden.» · «Zurück zu Projekten».', reason: 'q/status bleiben erhalten, Rückkehrfokus zur Ergebnisüberschrift. Rechtewechsel und Löschung im laufenden Pilotbestand sind ausgeschlossen; reale veränderliche oder geschützte Daten lösen einen eigenen Berechtigungs- und Offenlegungsreview aus.' },
      ],
    },
    text('Breit und schmal · dieselben benötigten Angaben',
      'Breit stehen ID, Projektname und Status in klar bezeichneten Spalten; der Projektname ist der einzelne Öffnungslink. Die Aufgabe ist Wiederfinden, kein Zahlenvergleich. Schmal wird jedes Ergebnis als zusammengehöriger Eintrag mit denselben drei Angaben untereinander angeordnet. Eine zweite, doppelt fokussierbare Darstellung ist zu vermeiden.',
      'Suche und Statusfilter stehen breit nebeneinander und schmal untereinander vor der Ergebnisüberschrift. Lange Namen und IDs dürfen umbrechen; kein Abschneiden der einzigen Identifikation. Status bleibt als Text sichtbar, nicht nur als Farbe. Sichtbare Beschriftungen ersetzen keinen benötigten zugänglichen Namen.',
      'Entwurfsfälle: 1280 px breite und 320 px schmale Inhaltsfläche, zusätzlich 200 % Textvergrösserung mit einem 80-Graphemcluster-Namen. Alle Angaben, Reset und Detaillink bleiben lesbar und erreichbar. Bei Bildschirmtastatur muss die aktive Suche samt Kriterien erreichbar bleiben; keine haftende Region verdeckt sie. Tastaturfolge: Suche → Status → Reset, sofern angeboten → Ergebnislinks. Diese Zielwerte sind lokale Prüfflächen, kein ausgeführter Mobil-, Zoom- oder Screenreader-Test.'),
    text('Konkrete Prüffälle · erwartete Ergebnisse',
      'Statischer Beispielsatz: P-101 «Alpen» Aktiv; P-102 «Alpen Archiv» Archiviert; P-103 «Berg» Aktiv. q=ALP mit Status Alle ergibt P-101, P-102 in dieser Reihenfolge; Status Aktiv ergibt nur P-101. q=102 mit Archiviert ergibt P-102; q=Tal ergibt null Treffer. Zurücksetzen ergibt alle drei Projekte. Das sind erwartete Ergebnisse der Referenz, keine gemessenen Laufzeitresultate.',
      'P-102 aus der gefilterten Liste öffnen: expliziter Rückweg und Browser-Zurück erhalten q/status und fokussieren P-102. Liste neu laden: Kriterien bleiben. Detail-Direktlink mit Kriterien: gleicher Rückweg; ohne Kriterien: vollständige Liste. P-101 aktiv umbenennen, sodass ALP nicht mehr passt: Rückkehr erhält ALP, zeigt die neu berechnete Menge und fokussiert die Ergebnisüberschrift.',
      'Unabhängige Gestaltungsprüfung noch offen: Eine zweite Person soll Übersicht → Suche → Detail → Bearbeitung → Rückkehr an breiter und schmaler Vorlage ohne mündliche Hilfe nachvollziehen, Nulltreffer von Erstleere unterscheiden und die erwarteten Ergebnisse benennen. Bei einer späteren Umsetzung zusätzlich Tastatur, Statusansagen, Fokus, URL-Verhalten und Zoom prüfen. Dokumentierte Entscheidungen schliessen diese Nachweislücke nicht.',
      'Vorhandener begrenzter Befund laut Bestandsprüfung vom 18.11.2026: Die Rechnungssuche mit fünf statischen Datensätzen liefert für Hosting + Bezahlt RE-1046 und RE-1044 und erhält die Kriterien im ausdrücklichen Detailrücklink. Laden/Retry sind dort Simulation; laufende URL-Aktualisierung, mobile Bedienung und assistive Tests sind damit nicht belegt. Dieser neue Projektvertrag verändert die Rechnungsdemo nicht.'),
    links('Führende Entscheidung und Anschlussregeln', [
      ['Gestaltungspilot · gemeinsamer Umfang, Datenmodell und offener Review', '/systems/shadcn/gestaltungs-pilot'],
      ['Detailseite · Identität, Aktionen und Rückweg', '/systems/shadcn/detailseite'],
      ['Formulare und Validierung · Projekt erstellen und aktiven Namen bearbeiten', '/systems/shadcn/formulare-validierung'],
      ['Laden, leer und Fehler · bestehende Zustandsregeln', '/systems/shadcn/laden-leer-fehler'],
      ['Tabellen und Listen · benötigte Informationen erhalten', '/systems/shadcn/tabellen-und-listen'],
      ['Rechnungssuche · eigenständiges begrenztes Beispiel', '/systems/shadcn/beispiele/rechnungen'],
    ]),
  ],
}]
