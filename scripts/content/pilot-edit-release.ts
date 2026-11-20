import type { Page } from '../../src/payload-types'
import { formPatternsRelease } from './form-patterns-release'
import { formContentRelease } from './form-content-release'

type ReleasePage = { slug: string; title: string; summary: string; parent: string | null; order: number; pageType: Page['pageType']; content: Page['content'] }
type TextBlock = Extract<NonNullable<Page['content']>[number], { blockType: 'text' }>
const base = { version: 1, direction: 'ltr', format: '', indent: 0 } as const
const node = (text: string) => ({ type: 'text', version: 1, text, detail: 0, format: 0, mode: 'normal', style: '' })
function text(title: string, ...paragraphs: string[]): TextBlock {
  return { blockType: 'text', body: { root: { ...base, type: 'root', children: [
    { ...base, type: 'heading', tag: 'h2', children: [node(title)] },
    ...paragraphs.map(value => ({ ...base, type: 'paragraph', children: [node(value)] })),
  ] } } }
}
function links(title: string, entries: [string, string][]): TextBlock {
  const block = text(title)
  block.body.root.children.push(...entries.map(([label, url]) => ({ ...base, type: 'paragraph', children: [{ ...base, type: 'link', fields: { linkType: 'custom', url, newTab: false }, children: [node(label)] }] })))
  return block
}
const source = formPatternsRelease.find(page => page.slug === 'shadcn-formulare-validierung')!
const studySource = source.content!.find(block => block.blockType === 'workflowStudy')!
if (studySource.blockType !== 'workflowStudy') throw new Error('Formularstudie fehlt')
const study = {
  ...studySource,
  summary: 'Ein Projekt erstellen: Name eingeben, prüfen und das Übermittlungsergebnis unterscheiden. Der Name wird erst mit «Projekt erstellen» übermittelt. Die acht Zustände bleiben die Erstellstudie; die Bearbeitungsvariante folgt darunter. Gültige Eingabe, laufende Übermittlung und bestätigte Speicherung sind getrennte Aussagen.',
  steps: studySource.steps.map(step => {
    if (step.key === 'fehler-verstehen') return { ...step, description: 'Der Pilot hat genau ein Eingabefeld. Der Fehler steht bei «Projektname», der Wert bleibt erhalten und der Fokus geht zum Feld. Eine Fehlerübersicht entfällt.' }
    if (step.key === 'bestaetigt') return { ...step, next: 'Zur Detailseite des bestätigt erstellten Projekts wechseln; Suchkontext q/status mitnehmen.' }
    if (step.key === 'abgelehnt') return { ...step, next: 'Belegte Feldursache am Feld korrigieren. Andere Ursachen als Vorgangsmeldung erklären; nur nach bestätigter Nichtannahme und behobener Ursache erneut senden.' }
    if (step.key === 'unbekannt') return { ...step, next: 'Ergebnis bleibt ungeklärt. Statusklärung ist eine erforderliche, noch nicht verfügbare Integrationsschnittstelle. Kein Wiederholungs- oder erfundener Supportweg.' }
    return step
  }),
  source: 'Lokale Referenzentscheidung für den Gestaltungs-Piloten, 18.11.2026; aufbauend auf der bestehenden achtteiligen Formularstudie. Keine upstream-Vorgabe, Firmenregel oder Produktfreigabe.',
}

// Keep the existing comparison block and editorial structure. Only statements
// contradicted by the newly chosen pilot scope are replaced in this revision.
const replacements = new Map<string, string>([
  ['Die folgenden Formulierungen sind redaktionelle Empfehlungen für den Formularweg, keine freigegebene Markenstimme. Die Beispielbedingungen sind ausdrücklich erfunden. Prüfzeitpunkt und Wiederherstellung führt das Formularpattern; diese Seite entscheidet, welche Aussage zum jeweiligen Zustand passt.', 'Die folgenden Formulierungen begleiten den lokalen Gestaltungs-Piloten in de-CH. Projektname, Pflicht und Längengrenze sind dafür neu gewählte Referenzentscheidungen, keine upstream-Vorgaben oder Firmenregeln. Prüfzeitpunkt und Rückwege führt das Formularpattern; die vollständige Pilotgrenze führt «Gestaltungs-Pilot».'],
  ['Hilfe: «Bis zu 80 Zeichen.» Nur verwenden, wenn diese Grenze fachlich tatsächlich gilt. Die 80 Zeichen sind hier eine Beispielbedingung, keine Arve-Regel. Eine relevante Bedingung gehört vor die Eingabe; lange Hintergrundinformationen können über eine klar benannte Hilfe erreichbar sein.', 'Hilfe im Piloten: «1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.» Gezählt werden danach sichtbare Zeichen als Unicode-Graphemcluster, nicht Bytes oder einzelne Codepunkte. Diese Grenze ist eine neue lokale Referenzentscheidung für den Piloten, keine allgemeine Arve-Regel.'],
  ['80 Zeichen sind eine erfundene Beispielgrenze. Hilfe, Prüfung und Fehler müssen dieselbe tatsächlich geltende Grenze nennen. Den Wert zum Kürzen erhalten.', '80 Unicode-Graphemcluster nach Entfernen von Rand-Leerraum sind die lokale Pilotgrenze. Hilfe, Prüfung und Fehler nennen dieselbe Grenze; den Wert zum Kürzen erhalten. Keine upstream- oder Firmenregel.'],
  ['Eine Fehlerübersicht verwendet dasselbe Feldlabel: «Projektname: Einen Projektnamen eingeben.» Der Eintrag führt zum Feld. Übersicht und Hinweis am Feld dürfen keine unterschiedlichen Korrekturen verlangen.', 'Im Einzelfeld-Piloten steht «Einen Projektnamen eingeben.» direkt bei «Projektname»; nach fehlgeschlagenem Absenden geht der Fokus zum Feld. Eine Fehlerübersicht ist hier nicht vorgesehen. Allgemein ausserhalb des Piloten: Bei mehreren Feldern verwendet eine Übersicht dieselben Labels und Korrekturen wie die Feldhinweise.'],
  ['Nur bei bestätigtem Namenskonflikt und zulässiger Offenlegung: «Dieser Projektname ist bereits vergeben. Einen anderen Namen wählen.» Die Schreibweise kann korrekt sein. Ist dagegen der Dienst nicht erreichbar, hilft ein anderer Projektname nicht: Das Problem gehört zum Vorgang.', 'Ausserhalb des Piloten, nur bei fachlich verlangter Eindeutigkeit, bestätigtem Namenskonflikt und zulässiger Offenlegung: «Dieser Projektname ist bereits vergeben. Einen anderen Namen wählen.» Im Piloten sind gleiche Namen zulässig; es gibt keinen Namenskonfliktfehler. Eine Verbindungsstörung gehört zum Vorgang und verlangt keine andere Schreibweise.'],
  ['Bei bestätigtem Nicht-Erfolg und behobener oder vorübergehender Ursache kann «Projekt wurde nicht erstellt. Erneut versuchen.» passen. Ein Namenskonflikt verlangt dagegen erst eine Korrektur und danach erneut «Projekt erstellen».', 'Bei bestätigter Nichtannahme und behobener Ursache kann «Projekt wurde nicht erstellt. Erneut versuchen.» passen. Ein Namenskonflikt gehört nicht zum Piloten. Allgemein ausserhalb des Piloten kann ein fachlich verlangter eindeutiger Name erst Korrektur und dann erneutes Absenden verlangen.'],
  ['Bei unbekanntem Ausgang zuerst den Status klären. Ein erneutes Absenden darf nur angeboten werden, wenn das Produkt doppelte Erstellung verlässlich verhindert oder der Nicht-Erfolg inzwischen feststeht. Der Text ersetzt diese Voraussetzung nicht.', 'Bei unbekanntem Ausgang zuerst den Status klären. Im Piloten ist die dafür erforderliche Integrationsschnittstelle noch nicht verfügbar: kein bedienbares «Status prüfen», kein erfundener Supportweg und kein «Erneut versuchen». Die Unsicherheit bleibt sichtbar. Die Gestaltung benennt diese Voraussetzung; die vorhandene Demo erfüllt sie nicht.'],
  ['Vor einer Produktübernahme legt das Team die echten Eingabebedingungen und die Nachweise für Annahme, Ablehnung und Wiederholung fest. Eine unabhängige Person soll am Fehlertext die Korrektur finden und beim unbekannten Ergebnis erkennen, dass Erfolg noch offen ist. Dieser Verständlichkeitsreview und der assistive Test des Ablaufs stehen noch aus.', 'Für den begrenzten Gestaltungs-Piloten sind Eingabebedingungen und Rückwege lokal entschieden. Nachweise für Annahme, Ablehnung und Statusklärung fehlen weiterhin. Eine unabhängige Person soll am Fehlertext die Korrektur finden und beim unbekannten Ergebnis erkennen, dass Erfolg offen ist. Dieser Verständlichkeitsreview und der assistive Test stehen noch aus; die Texte sind keine Produktfreigabe.'],
])
function revise<T>(value: T): T {
  if (typeof value === 'string') return (replacements.get(value) ?? value) as T
  if (Array.isArray(value)) return value.map(revise) as T
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, revise(child)])) as T
  return value
}

export const pilotEditRelease: ReleasePage[] = [
  {
    ...source,
    summary: 'Projekt erstellen oder seinen Namen bearbeiten: lokale Referenzentscheidungen für Prüfung, Rückwege und unklare Speicherung im Gestaltungs-Piloten.',
    content: [
      study,
      text('Pilotumfang und Feldbedingungen',
        'Ein Projekt besitzt eine unveränderliche, systemvergebene ID, einen erforderlichen Namen und den systemgesetzten Status «Aktiv» oder «Archiviert». Eine Rolle erstellt Projekte und bearbeitet den Namen aktiver Projekte. Archivierte Projekte bleiben lesbar; im Piloten gibt es keine Archivierungsaktion.',
        'Neue lokale Referenzentscheidung: Der Name umfasst nach Entfernen des Rand-Leerraums 1–80 Unicode-Graphemcluster. Innere Leerzeichen und Gross-/Kleinschreibung bleiben erhalten; keine weitere Normalisierung. Gleiche Namen sind erlaubt. Diese Entscheidung gilt für den Pilot, nicht als upstream- oder Firmenregel.'),
      text('Feld zusammenstellen und zum richtigen Zeitpunkt prüfen',
        'Reihenfolge: «Projektname (erforderlich)», Eingabe, Hilfe «1 bis 80 Zeichen. Leerzeichen am Anfang und Ende werden entfernt.», gegebenenfalls Feldfehler. Label bleibt sichtbar und dem Feld zugeordnet; Hilfe und Fehler sind als Beschreibung verbunden, ein Fehler erhält zusätzlich den Fehlerstatus. Fokus und Fehler müssen gleichzeitig erkennbar sein.',
        'Erst «Projekt erstellen» oder «Änderungen speichern» prüft. Ein unberührtes Feld zeigt keinen Fehler. Leer nach Randtrim: «Einen Projektnamen eingeben.» Über 80 Graphemcluster: «Den Projektnamen auf höchstens 80 Zeichen kürzen.» Nach erfolglosem Absenden geht der Fokus zum Feld; keine Fehlerübersicht für dieses Einzelfeld.',
        'Danach wird nur das zuvor fehlerhafte Feld beim Verlassen erneut geprüft: gültig entfernt den veralteten Fehler, ungültig aktualisiert ihn. Kein Fokuswechsel bei dieser Korrektur. Erneutes Absenden prüft den aktuellen Wert erneut. Die Hauptaktion bleibt erreichbar; eine deaktivierte Aktion ersetzt keine Erklärung.'),
      text('Bestehenden Namen bearbeiten',
        'Die Detailseite öffnet «Projekt bearbeiten» mit dem zuletzt bestätigten Namen. Ausgangswert und systemgesetzter Status müssen beim Öffnen feststehen; bei ungeklärtem Laden gibt es noch keinen bearbeitbaren Ausgang. «Archiviert» zeigt Name, ID und Status als lesbare Werte ohne Speichern-Aktion.',
        'Geändert bedeutet: Der randgetrimmte aktuelle Name unterscheidet sich vom randgetrimmten bestätigten Ausgangswert. Zurück zum Ausgangswert oder nur Rand-Leerraum ergänzen bedeutet ungeändert. «Änderungen speichern» bei identischem Wert meldet «Keine Änderungen zu speichern.» am Aktionsbereich, sendet keine Anfrage und bleibt auf der Seite. Eingabe, Blur und Abbrechen senden niemals heimlich.',
        'Nach bestätigtem Speichern führt der Weg zur Detailseite desselben Projekts: gespeicherter Name, unveränderte ID und «Änderungen gespeichert». q und status aus der Suche bleiben über Detail und Bearbeiten erhalten. Die Referenzabläufe setzen sequenzielle Bearbeitung voraus; gleichzeitige Änderungen sind ausserhalb des Piloten. Eine Rolle bedeutet nicht nur eine Person. Vor einer Umsetzung mit paralleler Bearbeitung ist ein Konfliktweg festzulegen; stilles Überschreiben ist damit nicht freigegeben.'),
      text('Laufend, bestätigt, abgelehnt oder ungeklärt',
        'Die Vorgangsmeldung steht nach dem Feld und vor den Aktionen. Laufend: «Projekt wird erstellt …» beziehungsweise «Änderungen werden gespeichert …»; erneutes Senden ist blockiert. Meldungen ohne Seitenwechsel erhalten eine abgestimmte Statusansage ohne Fokusübernahme. Nicht jeder Übergang ist ein dringender Alert.',
        'Nur bestätigte Annahme führt zur Detailseite des gespeicherten Projekts; dort folgt der Fokus der Seitenüberschrift und die Bestätigung bleibt sichtbar. Ausdrückliche Nichtannahme erhält die Eingabe: belegte Feldursachen am Feld, andere Ursachen beim Vorgang. Ein anderer Name hilft nicht gegen eine Verbindungsstörung.',
        'Ohne eindeutige Antwort: «Es ist noch unklar, ob das Projekt erstellt wurde» beziehungsweise «Es ist noch unklar, ob die Änderungen gespeichert wurden». Keine Zeitüberschreitung macht daraus einen sicheren Fehler. Statusklärung mit Bezug zum ursprünglichen Vorgang ist eine erforderliche, noch nicht verfügbare Integrationsschnittstelle. Im Entwurf als Voraussetzung markieren, nicht als bedienbare Funktion. Kein erfundener Supportweg, kein Wiederholen, keine Bestätigung anhand einer möglicherweise veralteten Liste. Ein Status-Endpunkt wird erst bei der Umsetzung spezifiziert.'),
      text('Abbrechen, verlassen und zurückkehren',
        'Bei unverändertem Bearbeiten führt «Abbrechen» direkt zur Detailseite; bei unverändert leerem Erstellen zur Liste. q/status bleiben erhalten. Bei ungespeicherten Änderungen fragt jeder interne Rückweg: «Ungespeicherte Änderungen verwerfen?» mit «Weiterbearbeiten» und «Verwerfen». Erstellen vergleicht dabei mit dem leeren Ausgangswert. Weiterbearbeiten erhält den Entwurf und führt den Fokus zum Auslöser zurück; Verwerfen führt beim Bearbeiten zum Detail, beim Erstellen zur Liste.',
        'Lokale Präzisierung vom 20.11.2026: Ein bereits unbekannter Speicherausgang hat Vorrang vor der Dirty-Regel. Hier gibt es kein «Verwerfen» und keinen erneuten Speicherversuch. Beim Verlassen lautet die Nachfrage «Speicherstand ungeklärt. Die Anfrage kann weiterlaufen. Beim Zurückkehren muss das Ergebnis geklärt werden.» Aktionen: «Auf Seite bleiben» und «Seite verlassen»; anfänglicher Fokus auf «Auf Seite bleiben». Bleiben erhält Eingabe und Vorgangsbezug, Escape bedeutet Bleiben. Verlassen bestätigt weder Erfolg noch Nichtannahme. Bei Rückkehr bleibt Bearbeiten oder erneutes Senden gesperrt, bis die noch bereitzustellende Statusklärung einen bestätigten Ausgang liefert.',
        'Browser-Zurück zwischen den Projektseiten innerhalb der Anwendung folgt demselben Schutz wie ein interner Rückweg: vor Übermittlung die Dirty-Nachfrage, während laufendem oder unbekanntem Vorgang die Verlassenswarnung. Navigation ausserhalb der Anwendung, Reload und Schliessen sind davon nicht abgesichert. Bei regulärem Öffnen von Detail oder Formular sowie nach bestätigtem Speichern, sauberem Abbrechen oder Verwerfen zum Detail erhält die Zielüberschrift den Fokus. Abbruch einer Erstellung führt zur Ergebnisüberschrift der Liste; Suchkriterien bleiben erhalten.',
        'Vor der Entscheidung klar sagen: «Die ungespeicherten Angaben gehen verloren.» Der Pilot hat keinen dauerhaften Entwurf. Neuladen, Schliessen oder Sitzungsende kann lokale Angaben verlieren; keine Wiederherstellung versprechen. Interne Abbruchbestätigung ist keine Zusage für Browser-Reload.',
        'Während Übermittlung heisst der Rückweg «Seite verlassen», nicht «Vorgang abbrechen». Warnung: «Die Anfrage kann weiterlaufen. Beim Zurückkehren muss das Ergebnis geklärt werden.» Lokales Verwerfen stoppt keinen Serverauftrag. Bei Rückkehr ohne Bestätigung bleibt der Ausgang ungeklärt; kein automatisches Senden. Die dafür benötigte Statusklärung ist weiterhin offen.'),
      text('Breite und schmale Darstellung',
        'Web in de-CH: einspaltiger Seiteninhalt, Überschrift und Kontext vor dem Feld, Vorgangsmeldung vor den Aktionen. Desktop zeigt die Hauptaktion «Projekt erstellen» beziehungsweise «Änderungen speichern» zuerst, danach «Abbrechen». Unter 640 px verfügbarer Inhaltsbreite stehen dieselben Aktionen in derselben Lese- und Fokusreihenfolge untereinander.',
        'Keine fixierte Aktionsleiste. Hilfe, Fehler und lange Namen umbrechen; bei Bildschirmtastatur und geringer Höhe bleibt vertikales Scrollen möglich. Feldfokus darf nicht verdeckt werden. Der Verwerfendialog zeigt die Folge vor «Weiterbearbeiten» und «Verwerfen»; Weiterbearbeiten erhält den anfänglichen Fokus. Escape schliesst nur diese Nachfrage und verwirft nichts.'),
      text('Arbeitsstand und gezielte Abnahme',
        'Lokale Gestaltungsreferenz; die unabhängige Prüfung steht aus. Die vorhandene Input-/Button-Demo zeigt weder diesen Formularweg noch Speicherung, Dirty-Erkennung, Verwerfendialog oder Statusklärung. Die bestehenden lokalen Input-Regeln SET_VALUE und NATIVE_INPUT betreffen Werte, nicht Speicherannahme oder Konflikte; Escape im Feld verwirft den Entwurf nicht.',
        'Noch auszuführen: leer und überlang absenden; kombinierte Unicode-Zeichen an der Grenze prüfen; Fehler beim Blur korrigieren; Ausgangswert ändern und wiederherstellen; identisch speichern ohne Anfrage; Dirty-Abbruch in beiden Varianten; bestätigte Speicherung mit Suchrückweg; Ablehnung mit Werterhalt; verlorene Antwort und Rückkehr während Übermittlung. Tastatur-, Screenreader-, Zoom- und Touch-Prüfung an der späteren Umsetzung bleiben offen. Mehrfeld- und Mehrschrittprüfungen gehören nicht zu diesem Piloten.'),
      links('Geltung, Texte und technische Grenze', [
        ['Gestaltungs-Pilot · gemeinsamer Umfang und Entscheidungsstand', '/systems/shadcn/gestaltungs-pilot'],
        ['Content Design · erhaltene Meldungsvergleiche und Pilotgrenze', '/systems/shadcn/content-design'],
        ['Barrierefreiheit · bestehende Prüfaufträge, noch keine Funktionsabnahme', '/systems/shadcn/barrierefreiheit'],
        ['Input · bestehende Vorschau und technischer Draft-Contract', '/systems/shadcn/components/input'],
        ['WAI Forms Tutorial · Quelle der bestehenden Studie, kein neuer Quellenreview', 'https://www.w3.org/WAI/tutorials/forms/notifications/'],
      ]),
    ],
  },
  ...formContentRelease.map(page => ({ ...page, content: revise(page.content) })),
]
