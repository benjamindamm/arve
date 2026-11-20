export const contentLayouts = [
  { slug: 'label-value', title: 'Label–Value', purpose: 'Eigenschaften eines Eintrags anzeigen.',
    wide: 'Beschriftungen links, Werte rechts. Alle Werte beginnen an derselben Kante.',
    narrow: 'Die Beschriftung steht direkt über ihrem Wert.',
    rules: ['Zusammengehörige Paare stehen untereinander.', 'Werte dürfen umbrechen. Die Beschriftung bleibt beim Wert.', 'Fehlt ein Wert, steht «Nicht angegeben».'],
    stress: 'Ein langer Projektname läuft über mehrere Zeilen. Die nächste Eigenschaft folgt darunter.',
    parts: ['Beschriftung', 'Wert'], related: [{ label: 'detail', section: 'detailseite' }],
  },
  { slug: 'form-layout', title: 'Form Layout', purpose: 'Zusammengehörige Eingaben in einer festen Reihenfolge erfassen.',
    wide: 'Das Formular bleibt auf 640 px begrenzt. Labels stehen über den Feldern.',
    narrow: 'Felder und Aktionen stehen untereinander und nutzen die verfügbare Breite.',
    rules: ['Reihenfolge: Label, Feld, Hilfe, gegebenenfalls Fehler.', 'Zwischen Feldgruppen liegen 24 px Abstand.', 'Die Hauptaktion steht vor «Abbrechen».'],
    stress: 'Hilfe und Fehler dürfen mehrzeilig werden. Die folgenden Felder rücken nach unten.',
    parts: ['Label', 'Eingabe', 'Hilfe', 'Fehler', 'Aktionen'], related: [{ label: 'Formulare und Validierung', section: 'formulare-validierung' }, { label: 'Input', section: 'components/input' }, { label: 'Button', section: 'components/button' }],
  },
  { slug: 'card-header', title: 'Card Header', purpose: 'Einen Inhaltsbereich benennen und seine zugehörige Aktion anbieten.',
    wide: 'Titel und Beschreibung links, Aktion rechts oben.',
    narrow: 'Die Aktion folgt unter Titel und Beschreibung.',
    rules: ['Der Titel benennt den Inhalt der Card.', 'Die Beschreibung ergänzt den Titel; sie ist optional.', 'Die Aktion wirkt auf diese Card. Weitere Aktionen gehören in einen eigenen Bereich.'],
    stress: 'Ein langer Titel bricht um. Die Aktion bleibt vollständig lesbar und wechselt bei Platzmangel unter den Text.',
    parts: ['Titel', 'Beschreibung (optional)', 'Aktion (optional)'], related: [{ label: '4-column Card Grid', section: 'card-grid-4x4' }, { label: 'Button', section: 'components/button' }],
  },
] as const

export function contentLayout(section: string) {
  return contentLayouts.find(layout => section === 'content-layout-' + layout.slug) ?? null
}
