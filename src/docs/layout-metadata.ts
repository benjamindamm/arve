export const layoutExamples = [
  { id: 'detail', title: 'Detailseite', description: 'Zwei Drittel für den Hauptinhalt, ein Drittel für Zusatzinformationen.', layout: { columns: '2fr 1fr', sidebar: 'sticky', narrow: 'Eine Spalte ohne Sticky-Verhalten unter 640 px.' } },
  { id: 'uebersicht', title: 'Übersichtsseite', description: 'Vier gleichwertige Karten für den Einstieg in verschiedene Bereiche.', layout: { columns: 4, narrow: 'Zwei Spalten bis 800 px, eine Spalte unter 640 px.' } },
  { id: 'arbeitsflaeche', title: 'Arbeitsfläche', description: 'Eine Karte über die gesamte Inhaltsbreite für eine zusammenhängende Aufgabe.', layout: { columns: 1, example: 'Aktivitätstabelle' } },
]
