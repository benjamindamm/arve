export const groups = [
  { slug: 'grundlagen', title: 'Grundlagen', summary: 'Farben, Schrift, Icons und Bewegung.', children: ['farben', 'typografie', 'abstaende', 'icons-bewegung'] },
  { slug: 'layout', title: 'Layouts', summary: 'Responsive Raster und vollständige Seitentypen.', children: [] },
  { slug: 'patterns', title: 'UX-Patterns', summary: 'Wiederkehrende Aufgaben und Abläufe gestalten.', children: ['formulare-validierung', 'suchen-filtern', 'laden-leer-fehler'] },
  { slug: 'komponenten', title: 'Komponenten', summary: 'Spartan-Beispiele und technische Contracts.', children: [] },
  { slug: 'content-design', title: 'Content Design', summary: 'Verständliche Labels, Hilfetexte und Meldungen.', children: [] },
  { slug: 'barrierefreiheit', title: 'Barrierefreiheit', summary: 'Tastatur, Fokus, Kontrast und Statusmeldungen.', children: [] },
  { slug: 'mitwirken', title: 'Mitwirken und Releases', summary: 'Vorschläge, Reviews, Versionen und MCP.', children: ['release-stand', 'technische-anbindung'] },
]

export const sections = [
  { slug: 'farben', title: 'Farben und Tokens', summary: 'Semantische Farben für Flächen, Text, Aktionen und Fokus.' },
  { slug: 'typografie', title: 'Typografie und Form', summary: 'Schrift, Hierarchie und Radien für die Referenz.' },
  { slug: 'layout', title: 'Grid und Abstände', summary: 'Abstandsskala, Container und responsive Spalten.' },
  { slug: 'patterns', title: 'UX-Patterns', summary: 'Formulare, leere Zustände und Bestätigungen gestalten.' },
  { slug: 'komponenten', title: 'Komponenten', summary: 'Implementierungen, interaktive Beispiele und technische Contracts.' },
  ...groups.filter(({ slug }) => !['layout', 'patterns', 'komponenten'].includes(slug)),
  { slug: 'abstaende', title: 'Abstände und Grössen', summary: 'Abstandswerte nach ihrem Einsatz auswählen.' },
  { slug: 'icons-bewegung', title: 'Icons, Bewegung und Elevation', summary: 'Symbole, Übergänge und Ebenen gezielt einsetzen.' },
  { slug: 'formulare-validierung', title: 'Formulare und Validierung', summary: 'Felder beschriften, Fehler erklären und Eingaben bewahren.' },
  { slug: 'suchen-filtern', title: 'Suchen und Filtern', summary: 'Rechnungen finden und aktive Filter verstehen.' },
  { slug: 'laden-leer-fehler', title: 'Laden, leer und Fehler', summary: 'Für jeden Zustand eine verständliche Rückmeldung geben.' },
  { slug: 'release-stand', title: 'Releases und Migrationen', summary: 'Änderungen an Doku, Contracts und Implementierung nachvollziehen.' },
  { slug: 'technische-anbindung', title: 'Technische Anbindung und MCP', summary: 'Veröffentlichte Seiten und ihre Contract-Quellen abrufen.' },
]

export const colors = [
  ['background', 'Seitenfläche'],
  ['foreground', 'Standardtext'],
  ['muted', 'Dezente Fläche'],
  ['muted-foreground', 'Sekundärer Text'],
  ['primary', 'Primäre Aktion'],
  ['primary-foreground', 'Text auf primärer Aktion'],
  ['border', 'Trennlinie'],
  ['ring', 'Fokusindikator'],
  ['destructive', 'Destruktive Aktion oder Fehler'],
] as const

export const spacing = [4, 8, 12, 16, 24, 32, 48] as const
