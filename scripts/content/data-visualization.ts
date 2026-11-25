import type {Page} from '../../src/payload-types'
import {editorialContent,type ComponentEditorial} from '../../src/docs/component-editorial'
import chart from './component-docs/chart.json'
import {chartArchetypes,chartPalettes,colorRefLabel,chartColor} from '../../src/docs/chart-color-policy'

const root='/systems/shadcn/datenvisualisierung'
type Block=NonNullable<Page['content']>[number]
const text=(value:string)=>({type:'text',version:1,text:value})
const node=(type:string,children:unknown[],extra={})=>({type,version:1,format:'',indent:0,direction:'ltr',...extra,children})
export const section=(key:string,title:string,paragraphs:string[]=[],items:string[]=[],links:{label:string;href:string}[]=[]):Block=>({
 blockType:'text',blockName:key,body:{root:node('root',[
  node('heading',[text(title)],{tag:'h2'}),...paragraphs.map(p=>node('paragraph',[text(p)])),
  ...(items.length?[node('list',items.map((p,i)=>node('listitem',[text(p)],{value:i+1})),{listType:'bullet',tag:'ul',start:1})]:[]),
  ...links.map(l=>node('paragraph',[node('link',[text(l.label)],{fields:{url:l.href,linkType:'custom',newTab:false}})])),
 ]) as any},
})
const link=(label:string,path:string)=>({label,href:root+(path?'/'+path:'')})
const evidence=section('dv-evidence','Geltung und Quellen',[
 'Redaktioneller Entwurf für die shadcn-Referenz. Die fünf Einordnungsebenen und die semantischen Archetypen sind eine lokale Systematik, keine offizielle shadcn- oder Carbon-Taxonomie. Die Regeln gelten unabhängig von Framework und Chart-Bibliothek.',
 'Carbon liefert die Referenz für Darstellungsformen und die Palettenfamilien kategorisch, sequenziell, divergierend und statusbezogen. „Hauptwert und Referenz“ ergänzt eine Gestaltungsstrategie. Alle Datenfarben werden aus foundation-colors.json bezogen und mit Familie und Stufe dokumentiert. Die Beispiele sind lokale Entwürfe für helle Ansichten auf weisser Grundfläche; keine Dark-Palette und keine neuen Contract-Tokens. Linien, Punkte und Farbfelder zeigen die Auswahl, aber keine allgemein geprüfte Unterscheidbarkeit. Ein separater Markenfarbwert ist hier nicht festgelegt; blaue primäre Handlungen belegen keine Markenidentität. Ein Darstellungsbeispiel belegt keine Implementierungsverfügbarkeit.',
],[],[
 {label:'Carbon · Chart-Übersicht',href:'https://www.carbondesignsystem.com/building-blocks/data-visualization/overview'},
 {label:'Carbon · Farbpaletten',href:'https://www.carbondesignsystem.com/building-blocks/data-visualization/color-palettes'},
])
const row=(suffix:string,title:string,summary:string,order:number,content:Block[])=>({slug:'shadcn-'+(suffix?'datenvisualisierung-'+suffix:'datenvisualisierung'),parent:suffix?'shadcn-datenvisualisierung':null,title,summary,order,pageType:suffix?'guide':'overview',content})

export const visualizationPages=[
 row('','Datenvisualisierung','Daten verständlich zeigen. Darstellung und Farben aus der Aussage ableiten.',1,[
  section('data-viz-guide','Von der Frage zur Darstellung',['Was sollen Menschen erkennen? Kläre die Bedeutung der Daten, wähle eine Darstellung und leite daraus die Farbverwendung ab. Viele Messpunkte brauchen nicht automatisch viele Farben.']),
  section('dv-visual-overview','Eine Reihe oder mehrere Kategorien?',['Illustration: Eine Linie verbindet sechs Messpunkte derselben Reihe. Drei getrennte Balken stehen für drei Kategorien. Die Zahl der Punkte und die Zahl der farblich zu unterscheidenden Kategorien sind verschiedene Angaben.']),
  section('dv-start','So gehst du vor',[],[
   'Einordnen: Bedeutung, Vergleich, Form, Umfang und Farbidentität festhalten.',
   'Archetyp ableiten: Welche Richtungen, Kategorien, Referenzen und Zustände treten gemeinsam auf?',
   'Palette ableiten: Systemfarben nach Rolle, Struktur und möglicher Fehlinterpretation auswählen.',
   'Lesbarkeit sichern: Einheiten, Beschriftung, kleine Ansichten und eine Datenalternative mitplanen.',
  ],[link('Charts einordnen','charts-einordnen'),link('Chart-Paletten vergleichen','chart-paletten')]),
  section('dv-boundary','Regeln und Komponenten',['Hier stehen die Gestaltungsregeln. Die Komponentenseiten beschreiben verfügbare Bausteine und verknüpfte Contracts. Ein fachlicher Name wie „Kursverlauf“ legt weder Darstellung noch Bibliothek fest.'],[],[{label:'Zur Komponente Chart',href:'/systems/shadcn/components/chart'},{label:'Grundlagen · Farben',href:'/systems/shadcn/farben'}]),evidence,
 ]),
 row('charts-einordnen','Charts einordnen','Was zeigt dein Chart – und welche Aufgabe übernimmt die Farbe?',0,[
  section('data-viz-guide','Erst die Aussage, dann die Farbe',['Verlauf, Vergleich, Richtung oder Status: Die gleiche Form kann unterschiedliche Aufgaben erfüllen.']),
  section('dv-questions','Fünf kurze Fragen',[],['Was sollen Menschen erkennen?','Welche Werte gehören zusammen: Reihen, Teile, Richtungen oder Referenzen?','Linien, Punkte oder Flächen?','Wie viele Reihen und Messpunkte sind gleichzeitig sichtbar?','Welche Farbbedeutungen gelten bereits im Umfeld?']),
  section('dv-archetypes','Was passt zu deinem Chart?',['Wähle den passenden Fall. Mehrere können zusammen auftreten.']),
  ...chartArchetypes.map(a=>section('dv-archetype-'+a.id,a.title,[a.structure,a.rule,a.expansion])),
  section('dv-visual-flows','Beispiel: Ein- und Auszahlungen',['Erfundene Monatswerte: Einzahlungen +4’000 CHF, Auszahlungen −2’500 CHF. Das Ausgabenbudget liegt bei 2’700 CHF. Die Auszahlungen bestehen aus Miete 1’500, Sonstigem 950 und Gebühren 50 CHF. Saldo: +1’500 CHF.','Grün und Rot kennzeichnen die Richtung. Gebühren bleiben als Teil der Auszahlungen rot. Budget ist eine Referenz; Saldo ein Ergebnis. Eine rote Marke erhält hier keine zusätzliche Reihenrolle.']),
  section('dv-visual-density','Viele Punkte brauchen nicht viele Farben',['Beide Beispiele zeigen eine Reihe. Erst zusätzliche Reihen oder Kategorien erhöhen den Bedarf an unterscheidbaren Farben.']),
  section('dv-next','Farben auswählen',[],[],[link('Zu den Chart-Paletten','chart-paletten')]),evidence,
 ]),
 row('chart-paletten','Chart-Paletten','Farben aus der Grundpalette wählen, ohne ihre Bedeutung zu verfälschen.',1,[
  section('data-viz-guide','Welche Aufgabe hat die Farbe?',['Die Beispiele zeigen lokale Empfehlungen für helle Charts auf Weiss. Alle Farben kommen aus der Grundpalette. Unterscheidbarkeit im konkreten Chart bleibt zu prüfen.']),
  section('dv-palette-single','Eine Reihe',['Eine Farbe hält den Verlauf zusammen. Die Zahl der Messpunkte ändert daran nichts.']),
  section('dv-palette-categorical','Kategorien unterscheiden',['Blau, Violett und Dunkelgrau als Ausgangspunkt. Jede Kategorie behält ihre Farbe; bereits belegte Bedeutungen aussparen.']),
  section('dv-palette-sequential','Niedrige bis hohe Werte',['Helligkeitsstufen zeigen eine geordnete Grösse. Sie sind keine Palette für beliebige Kategorien.']),
  section('dv-palette-diverging','Unter oder über einem Bezug',['Bezugspunkt null: −20 liegt darunter, +30 darüber. Violett/Blau bedeuten hier unterhalb/oberhalb, nicht schlecht/gut.']),
  section('dv-palette-semantic','Einen Zustand erkennen',['Grenze 60: Der Wert 35 liegt innerhalb, 75 darüber. Text und Zeichen ergänzen die Farbe.']),
  section('dv-palette-reference','Zusätzlich: Wert und Referenz',['Die Hauptreihe steht vorn; Ziel oder Vorperiode bleiben als beschriftete, gestrichelte Referenz sichtbar.']),
  section('dv-conflicts','Wenn Farben schon etwas bedeuten',[],[
   'Marke: Passt, solange sie keine andere Aussage suggeriert. Rote oder grüne Marke im Finanzchart: neutrale Alternative wählen; die Marke bleibt im Rahmen.',
   'Rot/Grün: Bei Ein-/Auszahlungen für die Richtung reserviert. Nicht zusätzlich für unabhängige Kategorien verwenden. Auszahlung ist kein Fehler; Einzahlung keine Erfolgsbestätigung.',
   'Blau: Darf Datenfarbe sein, auch neben blauen Buttons. Ist im Chart aber Blau als Auswahl belegt, neutrale Reihen violett oder dunkelgrau zeigen; Auswahl zusätzlich mit Kontur markieren.',
   'Amber: Bei Warnbedeutung keine beliebige Kategorie damit hervorheben.',
   'Violett/Grau: Auch Alternativen auf bestehende Rollen prüfen. Keine freie, lesbare Farbe übrig? Beschriften oder in Teilgrafiken aufteilen statt Farben zu erfinden.',
  ]),
  section('dv-form-choice','Linien oder Flächen?',[],[
   'Dünne Linien und kleine Punkte: dunkle Stufen verwenden. Helle Füllfarben sind dafür ungeeignet.',
   'Angrenzende Flächen: Nachbarfarben und kleine Segmente prüfen.',
   'Überlagerte Flächen: Keine unklaren Mischfarben erzeugen. Konturlinien oder Teilgrafiken verwenden.',
  ]),
  section('dv-links','Anwenden und prüfen',[],[],[link('Ein- und Auszahlungen als vollständiges Beispiel','charts-einordnen'),{label:'Zur Grundpalette',href:'/systems/shadcn/farben'},link('Zugänglichkeit prüfen','zugaenglichkeit')]),evidence,
 ]),
 row('chart-typen','Chart-Typen','Wähle die Form nach der Frage an die Daten.',2,[
  section('data-viz-guide','Aufgabe vor Form',['Die folgende Auswahl ist ein Einstieg. Ein Chart-Name allein bestimmt weder Farbpalette noch Anzahl der Reihen. Für exaktes Nachschlagen kann eine Tabelle geeigneter sein.']),
  section('dv-type-line','Linien und Flächen',['Linien zeigen Verläufe über eine geordnete Dimension. Eine Füllung hebt die Fläche zusätzlich hervor; ihre Bedeutung muss klar sein. Überlagerte Füllungen können andere Reihen verdecken.'],[],[{label:'Chart Line · Komponentenstand',href:'/systems/shadcn/components/chart-line'},{label:'Chart Area · Komponentenstand',href:'/systems/shadcn/components/chart-area'}]),
  section('dv-type-bars','Balken und Säulen',['Vergleiche Einzelwerte über die Länge. Gruppiert stehen Reihen nebeneinander; gestapelt zeigen sie eine Zusammensetzung. Bei 100-%-Stapeln werden Anteile verglichen, nicht absolute Gesamtsummen.','Horizontal oder vertikal ist eine Ausrichtung. Abgerundete Ecken sind eine Gestaltungseigenschaft, kein neuer Chart-Typ.'],[],[{label:'Chart Bar · Komponentenstand',href:'/systems/shadcn/components/chart-bar'}]),
  section('dv-type-parts','Anteile eines Ganzen',['Donut oder Kreis können eine einfache Zusammensetzung zeigen. Für präzise Vergleiche ähnlicher Anteile sind gemeinsame Längen oft leichter abzulesen. Viele kleine Segmente erschweren Auswahl und Beschriftung.'],[],[{label:'Chart Pie · Komponentenstand',href:'/systems/shadcn/components/chart-pie'}]),
  section('dv-type-extensions','Punkte, Grenzen und weitere Formen',['Punkte zeigen einzelne Beobachtungen und Beziehungen. Referenzlinien oder Bänder ergänzen Ziele und zulässige Bereiche. Eine Bandbreitenverletzung ist eine fachliche Aussage, kein eindeutig festgelegter Diagrammtyp.','Weitere Formen nach tatsächlicher Aufgabe ergänzen. Aus einer Erwähnung entsteht noch keine Zusage einer verfügbaren Komponente.'],[],[link('Charts systematisch einordnen','charts-einordnen')]),evidence,
 ]),
 row('beschriftung-achsen-legenden','Beschriftung, Achsen und Legenden','Titel, Einheiten und Zuordnungen machen die Grafik verständlich.',3,[
  section('data-viz-guide','Die Frage muss lesbar sein',['Benenne Messgrösse, Zeitraum und relevante Einheit. Eine kurze Einordnung hilft beim Verstehen; sie darf keine Aussage behaupten, die die Daten nicht tragen.']),
  section('dv-labels','Skalen nachvollziehbar machen',[],['Einheit und Bezugspunkt benennen. Währung, Prozent und Prozentpunkte nicht austauschbar verwenden.','Bei Balken, die Werte über ihre Länge vergleichen, die quantitative Achse bei null beginnen. Abweichende Skalen anderer Darstellungen deutlich machen.','Zusammengehörige Ansichten mit vergleichbaren Skalen zeigen oder Unterschiede ausdrücklich kennzeichnen.','Lücken bleiben als fehlende Daten erkennbar. Fehlend ist weder null noch automatisch ein Fehler.']),
  section('dv-legend','Zuordnung nah an den Daten',[],['Kurze Reihen möglichst direkt beschriften. Legenden in einer nachvollziehbaren Reihenfolge halten.','Eine Farbe behält ihre Kategorie auch beim Filtern und Sortieren.','Werte, Einheiten und Reihenname gemeinsam zeigen. Ein Tooltip ergänzt die Information; er ist nicht der einzige Zugang.'],[{label:'Chart Tooltip · Komponentenstand',href:'/systems/shadcn/components/chart-tooltip'},link('Interaktion und kleine Ansichten','interaktion-und-kleine-ansichten')]),evidence,
 ]),
 row('interaktion-und-kleine-ansichten','Interaktion und kleine Ansichten','Die Frage an die Daten bleibt auch auf schmalen Screens beantwortbar.',4,[
  section('data-viz-guide','Anpassen statt nur verkleinern',['Bewahre die wesentliche Aussage, Einheit und Zuordnung. Weniger Platz darf nicht zu einer anderen, unbemerkten Aussage führen.']),
  section('dv-small','Darstellung an den Platz anpassen',[],['Beschriftungen ausdünnen, ohne Bezugszeitraum oder Einheit zu verlieren. Kategorienamen bei Bedarf unter der Grafik anordnen.','Bei vielen Reihen eine klar benannte Auswahl oder getrennte Teilgrafiken anbieten. Verborgene Reihen und aktive Filter sichtbar machen.','Aggregation, Ausschnitt und Wechsel des Diagrammtyps kennzeichnen. Die Änderung darf keinen Verlauf oder Extremwert stillschweigend verschlucken.','Eine Tabelle oder Zusammenfassung erhält den Zugang, wenn die Grafik allein nicht ausreichend lesbar ist.']),
  section('dv-input','Bedienung ohne Hover',[],['Werte müssen auch mit Touch und Tastatur erreichbar sein. Eine reine Hover-Interaktion reicht nicht.','Legenden nur dann wie Bedienelemente gestalten, wenn sie wirklich filtern oder umschalten. Zustand und Wirkung benennen.','Nach Filtern, Zoomen oder Zeitraumwechsel Auswahl und Bezug sichtbar halten. Eine Möglichkeit zum Zurücksetzen vorsehen, wenn sie für die Interaktion nötig ist.'],[link('Zugänglichkeit','zugaenglichkeit')]),evidence,
 ]),
 row('zugaenglichkeit','Zugänglichkeit','Farbe ergänzt die Information. Sie trägt sie nicht allein.',5,[
  section('data-viz-guide','Bedeutung mehrfach vermitteln',['Beschriftung, Position, Muster oder Zeichen sichern die Zuordnung zusätzlich zur Farbe. Wichtige Aussagen und Werte bleiben auch ohne die Grafik zugänglich.']),
  section('dv-access','Vor der Verwendung prüfen',[],['Titel, Einheit, Zeitraum und Kernaussage sind ohne Farben verständlich. Eine geeignete Text- oder Datenalternative ist vorhanden.','Linien und Flächen auf dem tatsächlichen Hintergrund sowie gegenüber relevanten Nachbarn prüfen. Textkontrast allein belegt keine unterscheidbare Chart-Palette.','Farbenfehlsichtigkeit, Graustufen, schmale Ansicht und Vergrösserung berücksichtigen. Eine Simulation allein ist keine allgemeine Freigabe.','Interaktive Werte, Filter und Tooltips mit Tastatur und Touch prüfen. Fokus, Name und aktueller Zustand müssen erkennbar sein.','Ladezustand, keine Daten, fehlende Werte und Fehler unterscheiden. Animation darf weder Pflicht für das Verständnis sein noch eine bestätigte Verarbeitung vortäuschen.']),
  section('dv-check-scope','Prüfstand konkret benennen',['Dokumentiere Chart, Palette, Theme, Ansicht und ausgeführte Prüfung. Ein einzelner Kontrastwert oder eine veröffentlichte Seite bestätigt keine allgemeine Zugänglichkeit.'],[],[{label:'Übergreifende Barrierefreiheit',href:'/systems/shadcn/barrierefreiheit'},link('Zur Palettenauswahl','chart-paletten')]),evidence,
 ]),
]

// Values in illustrations and their CMS text alternatives resolve through the same references.
for(const page of visualizationPages)for(const block of page.content){
 const key=block.blockName?.replace('dv-palette-','')??''
 const palette=chartPalettes[key]
 if(palette&&block.blockType==='text')block.body.root.children.push(node('paragraph',[text('Grundpalette: '+palette.refs.map(r=>colorRefLabel(r)+' ('+chartColor(r)+')').join(' · ')+'.')]) as any)
}

export const visualizationCrosslinks=[
 {slug:'shadcn-farben',replace:false,block:section('col-charts','Farben in Charts',['Datenfarben folgen der Bedeutung und der Darstellung: eine Reihe, mehrere Kategorien, geordnete Werte oder eine Abweichung. Farben und ihre Wiederholung werden im Bereich Datenvisualisierung eingeordnet.'],[],[link('Charts einordnen','charts-einordnen'),link('Chart-Paletten','chart-paletten')])},
 {slug:'shadcn-chart',replace:true,block:editorialContent(chart as ComponentEditorial)!.find(b=>b.blockName==='usage')!},
]
