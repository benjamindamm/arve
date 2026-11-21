import type { Entry } from './published-documentation'

export const catalogueGroups = [
  { id: 'choose', title: 'Werte auswählen', hint: 'Land, Datum, Optionen' },
  { id: 'write', title: 'Eingaben & Aktionen', hint: 'Formular, Text, Auslösen' },
  { id: 'data', title: 'Daten darstellen', hint: 'Tabelle, Diagramm, Inhalte' },
  { id: 'feedback', title: 'Rückmeldung geben', hint: 'Fehler, Laden, Bestätigen' },
  { id: 'navigate', title: 'Orientieren & öffnen', hint: 'Navigation, Menüs, Ebenen' },
  { id: 'talk', title: 'Gespräche gestalten', hint: 'Nachricht, Anhang, Verlauf' },
] as const
export type CatalogueGroup = typeof catalogueGroups[number]['id'] | 'other'
export type CatalogueMeta = { group: CatalogueGroup; description: string; keywords?: string; shape?: string }
const curated: Record<string, CatalogueMeta> = {}
function add(group: CatalogueGroup, shape: string, rows: [string, string, string?][]) {
  for (const [slug, description, keywords] of rows) curated[slug] = { group, shape, description, keywords }
}
add('choose', 'select', [
  ['combobox', 'Lange Optionslisten durch Tippen eingrenzen.', 'Land Länder Standort Person Auswahl auswählen Suche suchen Filter lange Liste'],
  ['select', 'Eine Option aus einer überschaubaren Liste wählen.', 'Land Länder Standort Auswahl auswählen Dropdown Liste'],
  ['native-select', 'Eine Option mit der Auswahl des Browsers wählen.', 'Land Länder Standort Auswahl auswählen Dropdown nativ Browser'],
  ['radio-group', 'Eine von mehreren sichtbaren Optionen wählen.', 'Auswahl auswählen Einfachauswahl Radiobutton'],
  ['toggle-group', 'Zusammengehörige Optionen direkt umschalten.', 'Auswahl auswählen Werkzeug Formatierung'],
  ['slider', 'Einen Wert auf einer Skala einstellen.', 'Auswahl auswählen Bereich Lautstärke Regler'],
])
add('choose', 'check', [
  ['checkbox', 'Unabhängige Optionen an- oder abwählen.', 'Auswahl auswählen Mehrfachauswahl Datei Export Zustimmung'],
  ['switch', 'Eine Einstellung direkt ein- oder ausschalten.', 'aktivieren deaktivieren Einstellung Schalter'],
])
add('choose', 'calendar', [
  ['calendar', 'Ein Datum im Kalender auswählen.', 'Datum Termin Tag Zeitraum Auswahl'],
  ['date-picker', 'Ein Datum über ein Feld und einen Kalender wählen.', 'Datum Termin Tag Zeitraum Auswahl'],
])
add('write', 'field', [
  ['input', 'Einen kurzen freien Text eingeben.', 'Formular Name E-Mail Suche suchen Datei Dateiname'],
  ['textarea', 'Mehrzeiligen Text schreiben.', 'Formular Nachricht Kommentar Beschreibung'],
  ['input-otp', 'Einen Einmalcode eingeben.', 'Formular Passwort Anmeldung Code Bestätigung'],
  ['input-group', 'Eingabe und ergänzende Aktionen verbinden.', 'Formular Suche suchen Einheit Symbol'],
  ['field', 'Beschriftung, Eingabe und Hilfe zusammenführen.', 'Formular Fehler Pflichtfeld Validierung'],
  ['label', 'Ein Eingabefeld eindeutig benennen.', 'Formular Beschriftung Pflichtfeld'],
  ['questionnaire', 'Fragen zu einem Eingabeablauf zusammenstellen.', 'Formular Umfrage Fragen'],
])
add('write', 'button', [
  ['button', 'Eine Aktion auslösen.', 'Speichern Absenden Löschen Datei hochladen Upload Aktion'],
  ['button-group', 'Verwandte Aktionen zusammenfassen.', 'Speichern Aktionen Werkzeugleiste'],
  ['kbd', 'Eine Tastenkombination lesbar zeigen.', 'Tastatur Shortcut Tastenkürzel'],
])
add('data', 'table', [
  ['data-table', 'Datensätze filtern, sortieren und auswählen.', 'Zahlung Zahlungen Übersicht Tabelle Filter filtern Suche suchen Auswahl'],
  ['table', 'Werte in Zeilen und Spalten vergleichen.', 'Zahlung Zahlungen Übersicht Tabelle Vergleich'],
])
add('data', 'chart', [
  ['chart', 'Diagramme mit gemeinsamer Gestaltung aufbauen.', 'Diagramm Statistik Daten Visualisierung'],
  ['chart-area', 'Verläufe als Flächen vergleichen.', 'Diagramm Statistik Zeit Entwicklung'],
  ['chart-bar', 'Mengen mit Balken vergleichen.', 'Diagramm Statistik Säule Vergleich'],
  ['chart-line', 'Entwicklungen als Linien zeigen.', 'Diagramm Statistik Zeit Verlauf'],
  ['chart-pie', 'Anteile eines Ganzen zeigen.', 'Diagramm Statistik Kreis Anteil'],
  ['chart-radar', 'Mehrere Merkmale auf Achsen vergleichen.', 'Diagramm Statistik Profil'],
  ['chart-radial', 'Werte auf einer kreisförmigen Skala zeigen.', 'Diagramm Statistik Kreis'],
  ['chart-tooltip', 'Werte eines Diagrammpunkts erläutern.', 'Diagramm Statistik Details'],
])
add('data', 'content', [
  ['card', 'Zusammengehörigen Inhalt als Einheit zeigen.', 'Inhalt Übersicht Karte'],
  ['item', 'Einträge einer Liste strukturieren.', 'Liste Übersicht Inhalt'],
  ['avatar', 'Eine Person oder Identität darstellen.', 'Person Profil Bild Absender'],
  ['badge', 'Status oder Kategorie knapp kennzeichnen.', 'Status Markierung Etikett'],
  ['aspect-ratio', 'Ein festes Seitenverhältnis für Medien halten.', 'Bild Video Medien Format'],
  ['carousel', 'Mehrere Inhalte nacheinander betrachten.', 'Bild Bilder Galerie Medien'],
  ['separator', 'Inhaltsbereiche visuell trennen.', 'Trennlinie Gruppierung Abstand'],
  ['code-block', 'Quelltext als lesbaren Block darstellen.', 'Code Programmierung kopieren'],
])
add('feedback', 'feedback', [
  ['alert', 'Eine wichtige Meldung im Inhalt zeigen.', 'Fehler Warnung Hinweis Erfolg Rückmeldung'],
  ['toast', 'Ein Ereignis kurz und beiläufig rückmelden.', 'Fehler Erfolg gespeichert Benachrichtigung Rückmeldung'],
  ['empty', 'Bei fehlenden Inhalten den nächsten Schritt zeigen.', 'leer Nulltreffer keine Ergebnisse Suche Fehler'],
  ['progress', 'Den Fortschritt einer Aufgabe zeigen.', 'Laden Upload Datei Fortschritt warten'],
  ['spinner', 'Eine laufende Tätigkeit anzeigen.', 'Laden warten beschäftigt'],
  ['skeleton', 'Die Struktur noch ladender Inhalte andeuten.', 'Laden warten Platzhalter'],
])
add('feedback', 'dialog', [
  ['alert-dialog', 'Vor einer folgenreichen Aktion bestätigen lassen.', 'Löschen Warnung Fehler bestätigen Abbrechen'],
])
add('navigate', 'menu', [
  ['breadcrumb', 'Den Ort in einer Hierarchie zeigen.', 'Navigation Pfad zurück'],
  ['navigation-menu', 'Zwischen Bereichen navigieren.', 'Navigation Menü Seiten'],
  ['menubar', 'Befehle in einer Menüleiste bündeln.', 'Navigation Menü Aktion Datei'],
  ['dropdown-menu', 'Aktionen in einem aufklappbaren Menü anbieten.', 'Menü Aktion Datei'],
  ['context-menu', 'Aktionen zum aktuellen Objekt anbieten.', 'Menü Rechtsklick Datei'],
  ['command', 'Befehle oder Ziele über eine Suche finden.', 'Suche suchen Navigation Befehl Palette'],
  ['sidebar', 'Hauptbereiche seitlich erreichbar halten.', 'Navigation Menü Seitenleiste'],
  ['tabs', 'Zwischen gleichrangigen Inhaltsansichten wechseln.', 'Navigation Reiter Register'],
  ['pagination', 'Durch mehrere Ergebnisseiten gehen.', 'Navigation blättern Tabelle Datensätze'],
  ['accordion', 'Inhalte abschnittsweise aufklappen.', 'aufklappen zuklappen FAQ Details'],
  ['collapsible', 'Einen ergänzenden Bereich ein- und ausblenden.', 'aufklappen zuklappen Details'],
  ['scroll-area', 'Inhalte in einem begrenzten Bereich scrollen.', 'scrollen blättern Überlauf'],
])
add('navigate', 'dialog', [
  ['dialog', 'Eine abgegrenzte Aufgabe in einer Ebene bearbeiten.', 'Fenster Modal Formular bestätigen'],
  ['drawer', 'Zusatzinhalte vom Rand einblenden.', 'Ebene Fenster mobil öffnen'],
  ['sheet', 'Ergänzende Arbeit seitlich öffnen.', 'Ebene Fenster Seitenpanel'],
  ['popover', 'Zusatzinhalte direkt am Auslöser öffnen.', 'Ebene Fenster Details'],
  ['hover-card', 'Eine verlinkte Information vorab zeigen.', 'Vorschau Profil Details'],
  ['tooltip', 'Eine knappe Zusatzinformation anbieten.', 'Hilfe Hinweis Erklärung'],
])
add('talk', 'message', [
  ['message', 'Einen Beitrag mit erkennbarem Absender zeigen.', 'Nachricht Chat Gespräch Absender'],
  ['bubble', 'Einen Gesprächsbeitrag als Sprechblase zeigen.', 'Nachricht Chat Gespräch'],
  ['message-scroller', 'Einen längeren Gesprächsverlauf zugänglich halten.', 'Nachricht Chat Gespräch Verlauf scrollen'],
  ['attachment', 'Einen Anhang am Beitrag darstellen.', 'Datei Dokument Upload Anhang Nachricht'],
  ['marker', 'Einen Punkt im Gespräch markieren.', 'Nachricht Chat Gespräch Markierung'],
  ['trace', 'Schritte eines Arbeitsverlaufs nachvollziehbar zeigen.', 'Nachricht Chat Gespräch Verlauf Prozess'],
])

// Editorial decisions belong to this library, never to a matching slug in another system.
export function catalogueMeta(entry: Pick<Entry, 'slug' | 'path' | 'summary'>): CatalogueMeta {
  return (/^\/systems\/shadcn\/components\//.test(entry.path) && curated[entry.slug]) || {
    group: 'other', description: entry.summary || 'Beschreibung und Beispiele ansehen.', shape: 'content',
  }
}
export function normalizeCatalogue(value: string) {
  return value.toLocaleLowerCase('de').normalize('NFD').replace(/\p{M}/gu, '').replaceAll('ß', 'ss')
}
export function searchCatalogue(entries: Entry[], query: string) {
  const terms = normalizeCatalogue(query).trim().split(/\s+/).filter(Boolean)
  return entries.filter(entry => {
    const meta = catalogueMeta(entry)
    const group = catalogueGroups.find(group => group.id === meta.group)
    const text = normalizeCatalogue([entry.title, entry.slug.replaceAll('-', ' '), entry.summary, meta.description, meta.keywords, group?.title].join(' '))
    return terms.every(term => text.includes(term))
  }).sort((a, b) => a.title.localeCompare(b.title, 'de'))
}
