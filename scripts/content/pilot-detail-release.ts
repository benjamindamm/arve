import type { Page } from '../../src/payload-types'

type TextBlock = Extract<NonNullable<Page['content']>[number], { blockType: 'text' }>
type PilotDetailPage = { slug: string; title: string; summary: string; parent: string | null; order: number; pageType: Page['pageType']; content: Page['content'] }
const node = (text: string) => ({ type: 'text', version: 1, text, detail: 0, format: 0, mode: 'normal', style: '' })
const heading = (title: string) => ({ type: 'heading', tag: 'h2', version: 1, direction: 'ltr', format: '', indent: 0, children: [node(title)] })
function text(title: string, ...paragraphs: string[]): TextBlock {
  return { blockType: 'text', body: { root: { type: 'root', version: 1, direction: 'ltr', format: '', indent: 0, children: [heading(title), ...paragraphs.map(p => ({ type: 'paragraph', version: 1, direction: 'ltr', format: '', indent: 0, children: [node(p)] }))] } } }
}
function links(title: string, entries: [string, string][]): TextBlock {
  return { blockType: 'text', body: { root: { type: 'root', version: 1, direction: 'ltr', format: '', indent: 0, children: [heading(title), ...entries.map(([label, url]) => ({ type: 'paragraph', version: 1, direction: 'ltr', format: '', indent: 0, children: [{ type: 'link', version: 1, direction: 'ltr', format: '', indent: 0, fields: { linkType: 'custom', url, newTab: false }, children: [node(label)] }] }))] } } }
}
const path = (slug: string) => `/systems/shadcn/${slug}`

/** Editorial pilot decisions; neither a new implementation nor a completed design acceptance. */
export const pilotDetailRelease: PilotDetailPage[] = [{
  slug: 'shadcn-detailseite', title: 'detail', summary: 'Ein Projekt eindeutig erkennen, seinen Status verstehen, den Namen bei Aktiv bearbeiten und zur passenden Ergebnisliste zurückkehren.',
  parent: 'shadcn-page-types', order: 1, pageType: 'layout',
  content: [
    text('Geltung: ein Projekt im Gestaltungs-Pilot',
      'Diese redaktionell entschiedene Vorlage gilt für den neutralen Projektdatensatz im shadcn-Referenzimplementierung: Web auf Desktop und in schmalen Ansichten, Deutsch (Schweiz), höchstens 50 Datensätze und eine Rolle. Der Gestaltungs-Pilot führt die gemeinsame visuelle Referenz, Zuständigkeiten und Nachweisgrenzen. Veröffentlichung und fachliche Entscheidung sind kein Implementierungsnachweis.',
      'Ein Projekt besitzt genau drei Pflichtangaben: eine systemgesetzte unveränderliche ID, einen Projektnamen und den systemgesetzten Status Aktiv oder Archiviert. Der Name umfasst nach Entfernen äusserer Leerzeichen 1–80 Graphemcluster; innere Leerzeichen bleiben erhalten. Die ID unterscheidet auch gleichnamige Projekte. Erstellen erzeugt ein aktives Projekt; nur dessen Name ist bearbeitbar. Es gibt keine Archivierungsaktion, keine Löschung und keinen Download im Projektpilot.'),
    {
      blockType: 'workflowStudy', title: 'Dieselbe Detailvorlage von Einstieg bis Rückkehr',
      summary: 'Annotierte Gestaltungsfolge für Projekt P-101 mit dem Namen «Alpen» und Status Aktiv. Die Inhalte sind Beispiele für eine statische Vorlage; die Darstellung führt keine Projektaktionen aus.',
      steps: [
        { key: 'kontext', title: '1 · Rückweg vor dem Objektkopf', description: '«Zurück zu Projekten» führt zur Projektübersicht mit den übernommenen Parametern q und status. Ohne Suchkontext führt «Zurück zu Projekten» zur ungefilterten Übersicht.', next: 'Objekt anhand von Name, ID und Status erkennen.', tone: 'normal' },
        { key: 'identitaet', title: '2 · Projektname, ID und Status', description: 'Seitentitel «Alpen», darunter «Projekt-ID: P-101» und «Status: Aktiv». Status immer als Text zeigen. Name und ID vollständig lesbar lassen; die ID ist keine Eingabe.', next: 'Die zum Status passende Handlung lesen.', tone: 'normal' },
        { key: 'aktion', title: '3 · Aktiv: «Projekt bearbeiten»', description: 'Eine Hauptaktion öffnet das Formular für denselben Projektnamen. ID, Status und Suchkontext werden mitgeführt. Nach bestätigtem Speichern zeigt dieselbe Detailseite den gespeicherten Namen.', next: 'Bei Archiviert entfällt die Bearbeitungsaktion; «Archivierte Projekte sind nur lesbar.» erklärt dies.', tone: 'normal' },
        { key: 'rueckkehr', title: '4 · Ausgangsprojekt wiederfinden', description: 'Nach Rückkehr dieselbe Suche und denselben Statusfilter anwenden. Fokus auf den Projektlink mit derselben ID setzen; falls er nicht mehr im Ergebnis steht, auf die Ergebnisüberschrift.', next: 'Ein geänderter Name kann das Projekt aus den bisherigen Suchergebnissen entfernen. Der Filter bleibt trotzdem erhalten.', tone: 'normal' },
      ],
      caption: 'Diese Reihenfolge bildet zugleich die Lese- und Fokusreihenfolge. Den gespeicherten Namen nicht zusätzlich in einer leeren Haupt-Card wiederholen. Für dieses kleine Objekt genügt der Objektkopf mit Aktion und Rückweg.',
      source: 'Lokale Pilotentscheidung zu DETAIL-01/02/03/06/07; Grundlage: Detailhandbuch und docs/handbook/team-readiness/detail.md, Stand 18.11.2026. Keine ausgeführte Bedienungsprüfung.',
    },
    text('Information und Handlung nach Status',
      'Aktiv: Name, ID und Status sind sichtbar. «Projekt bearbeiten» ist die einzige Hauptaktion und ändert ausschliesslich den Namen. Der Rücklink ist eine Navigationshandlung. Archiviert: dieselben Angaben bleiben sichtbar; es gibt keine Bearbeitungsaktion. Der Satz «Archivierte Projekte sind nur lesbar.» erklärt die Grenze direkt beim Status, ohne einen unbedienbaren Button zu benötigen.',
      'Die eine Pilotrolle sieht beide Status. Das ist eine begrenzte Aufgabenentscheidung und kein umfassendes Rechtemodell. Ein Zustand «kein Zugriff» gehört nicht zum vereinbarten Rollenmodell. Sobald ein Produkt Zugriffsbeschränkungen ergänzt, müssen Sichtbarkeitsgrenzen und Ausweg eigens entschieden werden.',
      'Verantwortung, Beschreibung, Frist, Datum und weitere Metadaten gehören nicht zum Pilotobjekt. Deshalb entfallen Zusatzregion und Sidebar vollständig. Keine leere Card und kein Strich suggerieren fehlende Daten. Fehlende Pflichtangaben sind ein Datenproblem, nicht eine optionale Leere; keinen Namen oder Status erfinden. Eine spätere fachliche Erweiterung muss fehlend, unbekannt und nicht anwendbar ausdrücklich definieren, bevor neue Regionen entstehen.'),
    text('Rückkehrvertrag für Liste, Direktlink und Bearbeitung',
      'Die Übersicht sucht sofort lokal in ID und Projektname und verknüpft die Suche mit dem Statusfilter durch UND. Führend sind die URL-Parameter q und status; ihre gültigen Werte und die Normalisierung beschreibt Suchen und Filtern. Detail- und Bearbeitungsadresse tragen diesen Kontext mit. Nicht angebotene Sortierung, Pagination oder Mehrfachauswahl werden nicht als Rückkehrzustand ergänzt.',
      'Der explizite Rücklink rekonstruiert die Übersicht aus q und status. Ein Direktlink ohne diese Parameter führt zur ungefilterten Übersicht. Nach Rückkehr erhält der Link des Ausgangsprojekts, identifiziert durch seine unveränderliche ID, den Fokus und wird bei Bedarf in die sichtbare Fläche gescrollt. Fehlt das Projekt im Ergebnis, erhält die Ergebnisüberschrift den Fokus. Es wird keine exakte Scrollpixelposition zugesagt.',
      'Lokale Präzisierung vom 20.11.2026: Beim Öffnen eines Details oder des Formulars erhält die neue Seitenüberschrift den Fokus. Sauberes Abbrechen und bestätigtes Verwerfen vor einer Übermittlung führen zum Detailtitel; beim Erstellen zur Ergebnisüberschrift der Liste. Der spezielle Rückweg Detail → Liste behält sein ID-basiertes Fokusziel.',
      'Browser-Zurück bleibt ein eigener Rückweg: Der vorherige Eintrag im Browserverlauf samt URL wird wiederhergestellt; bei Rückkehr zur Projektübersicht gilt dasselbe Fokusziel. Einzelne Suchänderungen sollen den Verlauf nicht mit Zwischenständen füllen. Diese Rückkehr muss separat von einem angeklickten Rücklink geprüft werden. Abbrechen und Speichern des Formulars führen zum Detail derselben ID mit erhaltenem Suchkontext; der Formularweg regelt ungespeicherte Änderungen und unklaren Speicherausgang.'),
    text('Zustandsvorlagen mit einem konkreten Ausweg',
      'Laden: «Projekt wird geladen …». Rückweg bleibt verfügbar, eine bekannte ID aus der Adresse darf als «Angeforderte Projekt-ID» erscheinen. Unbestätigten Namen oder Status nicht als geladenen Inhalt zeigen; Bearbeiten erst nach vorliegenden Pflichtangaben anbieten. Für die statische Gestaltung ist dies eine Zustandsvariante, keine Behauptung einer vorhandenen Lade-API.',
      'Bestätigt nicht vorhanden: «Projekt nicht gefunden.» mit «Zurück zu Projekten». Die angeforderte ID kann den Bezug erhalten. Kein Bearbeiten und kein automatischer Wiederholungsversuch. Ein unbekanntes Ladeergebnis ist nicht mit diesem bestätigten Fehlen gleichzusetzen.',
      'Laden fehlgeschlagen oder Pflichtdaten unvollständig: «Projekt konnte nicht vollständig geladen werden.» Der Rückweg bleibt sichtbar. «Erneut laden» bedeutet eine erneute Leseabfrage derselben ID und ist nur in einer Umsetzung mit dieser Fähigkeit anzubieten. Kein Bearbeiten, solange Name oder Status nicht verlässlich vorliegen. Die statische Vorlage zeigt Meldung, Wiederholungsplatz und Rückweg; sie belegt keinen Dienstfehler.',
      'Teilfehler einer Zusatzregion entfallen, weil der Pilot keine solche Region besitzt. Erst bei einer bestätigten Erweiterung gilt: verfügbare Hauptinformationen erhalten, Fehler am betroffenen Zusatzbereich erklären und nur diesen erneut laden. Kein Zugriff und Zusatzteilfehler werden nicht als bereits unterstützte Projektzustände dargestellt.'),
    text('Breite, schmale Ansicht und Wiederverwendung',
      'Für diesen Pilot bleibt das Detail auch auf Desktop einspaltig im Inhaltscontainer der gemeinsamen visuellen Referenz. Name, ID, Status, Erklärung und Aktion folgen derselben Reihenfolge. Das vorhandene 2:1-Demolayout wird nicht auf drei kurze Pflichtangaben angewendet. Alle Bereiche laufen normal mit; keine Sticky-Positionierung.',
      'Ab 640 CSS-Pixeln verfügbarer Inhaltsbreite darf die Aktion neben dem Objektkopf stehen, sofern der vollständige Name und der Aktionsname ohne Abschneiden Platz finden. Unter 640 CSS-Pixeln oder sobald der Inhalt mehr Platz benötigt, steht sie unter Status und Erklärung; im schmalen Entwurf wird diese gestapelte Variante verwendet. Die 640 CSS-Pixel sind eine Pilotentscheidung für die Inhaltsbreite, kein allgemeiner Systemtoken. Massgebend ist die tatsächlich verfügbare Inhaltsbreite inklusive Textvergrösserung. Die 639 px und 24 px der bestehenden Demo sind keine Systemtokens. Abstände und Grössen stammen aus der im Gestaltungs-Pilot benannten Referenz.',
      'Als wiederverwendbare statische Varianten dieselbe Reihenfolge mit «Alpen» sowie einem zulässigen 80-Graphemcluster-Namen, einer langen untrennbaren ID, Aktiv und Archiviert bestücken. Titel und Kennung müssen umbrechen dürfen und vollständig lesbar bleiben. Ergänzend Laden, fehlendes Projekt und Ladefehler darstellen. Eine Zusatzregion wird nicht künstlich zum Belastungstest erfunden.',
      'Noch zu prüfen: breite und schmale Ansicht, niedrige Fensterhöhe, vergrösserter Text, mehrzeilige Aktion sowie Rückkehr nach einer Namensänderung, die den Treffer entfernt. Die statischen Varianten und dieser Ablauf sind eine Gestaltungsvorgabe; unabhängige Wiederverwendung, Tastatur-/Screenreaderbedienung und tatsächlicher Fokus-/Scrollverlauf sind damit nicht nachgewiesen.'),
    links('Führende Entscheidungen und begrenzte Beispiele', [
      ['Gestaltungs-Pilot · Objektmodell, visuelle Referenz, Zuständigkeit und Nachweisgrenze', path('gestaltungs-pilot')],
      ['Suchen und Filtern · q, status und Wiederfinden in der Projektübersicht', path('suchen-filtern')],
      ['Formulare und Validierung · Projekt erstellen und Namen bearbeiten', path('formulare-validierung')],
      ['Rechnungsdetail RE-1048 · anderer Objektfall; begrenzter Beleg für Identität und q/status-Rücklink, keine fertige Projektvorlage', path('beispiele/rechnungen/RE-1048?q=Hosting&status=open')],
      ['Layoutdemo Detail · begrenzte Illustration von Haupt-/Zusatzregion; keine freigegebene Projektvorlage oder Sticky-Regel', path('layout/detail')],
      ['Seitenstruktur und Navigation · gleichrangige Ansichten und eigenständige Ziele; zusätzliche Tabs sind im Pilot nicht erforderlich', path('seitenstruktur-und-navigation')],
    ]),
  ],
}]
