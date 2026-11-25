import foundation from './foundation-colors.json'

export type ChartColorRef={family:typeof foundation.scales[number]['id'];step:string}
export const ref=(family:string,step='70'):ChartColorRef=>({family,step})
export function chartColor(reference:ChartColorRef){
 const scale=foundation.scales.find(s=>s.id===reference.family)
 const value=scale?.values[reference.step as keyof typeof scale.values]
 if(!value)throw Error(`Unknown foundation color: ${reference.family}.${reference.step}`)
 return value
}
export const colorRefLabel=(r:ChartColorRef)=>`${r.family}.${r.step}`
export const chartPalettes:Record<string,{label:string;refs:ChartColorRef[];labels:string[]}>= {
 single:{label:'Eine Reihe, eine Identität',refs:[ref('blue')],labels:['Messwert']},
 categorical:{label:'Drei Kategorien · keine Rangfolge',refs:[ref('blue'),ref('purple'),ref('neutral')],labels:['A','B','C']},
 sequential:{label:'Eine geordnete Grösse',refs:['20','40','50','70','90'].map(s=>ref('blue',s)),labels:['Niedrig','','','','Hoch']},
 diverging:{label:'Abweichung ohne Gut-/Schlechtwertung',refs:[ref('purple'),ref('purple','40'),ref('neutral','20'),ref('blue','40'),ref('blue')],labels:['Unter Bezug','','Bezug: 0','','Über Bezug']},
 semantic:{label:'Zustand zusätzlich benennen',refs:[ref('green'),ref('red')],labels:['✓ Innerhalb der Grenze','! Grenze überschritten']},
 reference:{label:'Hauptwert und Vergleich',refs:[ref('blue'),ref('neutral')],labels:['Hauptwert','Referenz · gestrichelt']},
}

export const chartArchetypes=[
  {
    "id": "neutral",
    "title": "Ein Verlauf",
    "structure": "Eine Reihe über die Zeit. Die Farbe benennt die Reihe, nicht Gewinn oder Verlust.",
    "rule": "Neutrales Blau verwenden. Ist Blau für Auswahl belegt, Violett oder Dunkelgrau wählen. Markenfarbe nur ohne Bedeutungsverwechslung.",
    "expansion": "Eine Vorperiode als beschriftete, gestrichelte Referenz ergänzen."
  },
  {
    "id": "categories",
    "title": "Mehrere Kategorien",
    "structure": "Mehrere gleichrangige Reihen oder Kategorien.",
    "rule": "Blau, Violett und Dunkelgrau sind Kandidaten. Reservierte Farben aussparen; keine Kategorie versehentlich als besser darstellen.",
    "expansion": "Reichen die unterscheidbaren Farben nicht, direkt beschriften oder Ansichten teilen. Farben nicht zyklisch wiederholen."
  },
  {
    "id": "flows",
    "title": "Ein- und Auszahlungen",
    "structure": "Zwei Richtungen: Zufluss und Abfluss.",
    "rule": "Hier gilt Grün für Einzahlung, Rot für Auszahlung. Vorzeichen und Nulllinie zeigen die Richtung zusätzlich.",
    "expansion": "Gebühren gehören zu den Auszahlungen und bleiben rot. Budget als graue Referenz, Saldo als separate Kennzahl. Teile nicht nochmals zum Total addieren."
  },
  {
    "id": "parts",
    "title": "Anteile eines Ganzen",
    "structure": "Teile ergeben zusammen das Total.",
    "rule": "Kategorienfarben stabil halten. Benachbarte und kleine Segmente müssen unterscheidbar bleiben.",
    "expansion": "Ein neuer Teil darf nicht schon in einem anderen enthalten sein. Ein- und Auszahlungen sind kein positives 100-%-Ganzes."
  },
  {
    "id": "deviation",
    "title": "Unter oder über einem Bezug",
    "structure": "Werte weichen von null, Ziel oder Benchmark ab.",
    "rule": "Ohne Wertung: Violett unterhalb, Blau oberhalb. Rot/Grün nur bei ausdrücklich bewerteter Richtung.",
    "expansion": "Weitere Kategorien über Position oder Teilgrafiken unterscheiden; die Richtungsfarben bleiben erhalten."
  },
  {
    "id": "threshold",
    "title": "Ein Wert mit Grenze",
    "structure": "Ein Messwert wird an einer festgelegten Schwelle bewertet.",
    "rule": "Messwert neutral, Grenze grau gestrichelt. Warnung oder Verletzung mit Amber/Rot und Text kennzeichnen.",
    "expansion": "Neue neutrale Reihen dürfen nicht dieselben Statusfarben erhalten. Bei Konflikten getrennt zeigen."
  }
]
