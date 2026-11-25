import type {Page} from '../../src/payload-types'
import {editorialContent,type ComponentEditorial} from '../../src/docs/component-editorial'
import chart from './component-docs/chart.json'
import {chartArchetypes,chartColorConflicts,chartFormRules,chartPalettes,colorRefLabel,chartColor} from '../../src/docs/chart-color-policy'

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
 row('charts-einordnen','Charts einordnen','Aus fünf Ebenen einen semantischen Archetyp und die passende Farbauswahl ableiten.',0,[
  section('data-viz-guide','Was wird wie dargestellt?',['Ein semantischer Archetyp beschreibt die Rollen und Beziehungen im Chart: etwa zwei Gegenrichtungen mit Referenz und Unterkategorien. Er entsteht aus den fünf Einordnungsebenen, nicht allein aus dem fachlichen Thema oder der Form.']),
  section('dv-archetypes','Semantische Chart-Archetypen',['Diese sechs Ausgangsfälle sind kombinierbar. Bei einer Kombination gelten alle beteiligten Reservierungen. Eine neue Reihe verändert die Gesamtstruktur und muss vor ihrer Einfärbung eingeordnet werden.']),
  ...chartArchetypes.map(a=>section('dv-archetype-'+a.id,a.code+' · '+a.title,[a.structure],['Farbregel: '+a.rule,'Wenn Werte hinzukommen: '+a.expansion])),
  section('dv-meaning','1 · Datenbedeutung',[],[
   'Neutral: Farbe kennzeichnet Werte ohne fachliche Bewertung.',
   'Kategorial: Farbe unterscheidet ungeordnete Kategorien.',
   'Geordnet: Abstufungen zeigen eine Reihenfolge oder Grössenordnung.',
   'Divergierend: Zwei Richtungen beziehen sich auf eine benannte Mitte, etwa null oder einen Zielwert.',
   'Statusbezogen: Farbe kennzeichnet einen definierten Zustand, etwa eine Grenzverletzung.',
   'Bedeutungen können zusammen auftreten. Halte fest, welche visuelle Eigenschaft jeweils welche Bedeutung trägt.',
  ]),
  section('dv-comparison','2 · Vergleichsstruktur',[],[
   'Einzelreihe: Ein Wert entwickelt sich über Zeit oder eine andere geordnete Dimension.',
   'Vergleichsreihen: Mehrere gleichberechtigte Reihen müssen unterscheidbar sein.',
   'Zusammensetzung: Teile gehören zu einem Ganzen; Kategorien bleiben stabil zugeordnet.',
   'Ist und Referenz: Hauptwert und Vergleichswert haben unterschiedliche Rollen.',
   'Werte und Grenzen: Messwerte stehen neben Zielbereich oder Schwellen.',
  ]),
  section('dv-visual-marks','3 · Darstellungsform',['Dünne Linien, kleine Punkte und grosse Flächen stellen unterschiedliche Anforderungen an dieselbe Farbe.'],[
   'Linien: Verlauf und Referenzen; auch bei dünnem Strich erkennbar halten.',
   'Punkte: Einzelwerte; Grösse, Dichte und Überdeckung beachten.',
   'Getrennte Flächen: Balken oder Säulen; grosse Farbflächen ruhig halten.',
   'Angrenzende Flächen: Gestapelte Balken und Segmente; Nachbarn unterscheiden.',
   'Überlagerte Flächen: Gefüllte Verläufe und Bänder; Verdeckung und Mischfarben prüfen.',
  ]),
  section('dv-visual-density','4 · Datenumfang und Dichte',['Zähle getrennt: Wie viele Reihen oder Kategorien müssen farblich unterschieden werden? Wie viele Marken oder Messpunkte sind gleichzeitig sichtbar?'],[
   'Illustration: Eine Reihe mit sechs oder achtzehn Messpunkten bleibt dieselbe Farbidentität.',
   'Eine, wenige oder viele Kategorien: „wenige“ endet dort, wo die konkrete Palette im vorgesehenen Chart nicht mehr zuverlässig unterscheidet. Es gibt hier keine pauschale Höchstzahl.',
   'Locker, dicht oder überlagert: Die sichtbare Dichte hängt auch von Bildschirmgrösse und Darstellungsform ab.',
   'Reicht die Unterscheidbarkeit nicht, Auswahl, Beschriftung oder getrennte Teilgrafiken prüfen. Farben nicht einfach zyklisch wiederholen.',
  ]),
  section('dv-identity','5 · Farbidentität und Wiederholung',[],[
   'Im Chart: Verschiedene Kategorien nicht gleich einfärben, wenn die Farbe ihre Identität vermitteln soll.',
   'In zusammengehörigen Charts: Dieselbe Kategorie behält dieselbe Farbe. Die Zuordnung darf nach Filtern oder Sortieren nicht verrutschen.',
   'In unabhängigen Charts: Wiederverwendung ist möglich, sofern keine gemeinsame Identität suggeriert wird.',
   'Bei gemeinsamer Bedeutung: Alle negativen Werte dürfen dieselbe Farbe haben, wenn diese Regel ausdrücklich gilt. Kategorien brauchen dann eine andere Kennzeichnung.',
   'Semantische Reservierung: Ist Rot im Nutzungskontext für negative Salden reserviert, darf es dort nicht nebenbei eine neutrale Vergleichsreihe kennzeichnen.',
  ]),
  section('dv-cases','Eine zusätzliche Reihe verändert die Entscheidung',['Einzahlungen und Auszahlungen belegen Grün und Rot für die Richtung. Ein Budget ist eine Referenz und erhält eine beschriftete gestrichelte Linie in neutral.70. Gebühren sind eine Unterkategorie der Auszahlungen: dieselbe Richtungsfarbe, getrennt durch Namen und Position. Ein berechneter Saldo gehört als Ergebnis in eine eigene Kennzahl oder Teilgrafik.','Der gleiche fachliche Kontext kann also mehrere Strukturen enthalten. Nicht jedem neuen Wert einfach die nächste Farbe zuweisen.'],[],[link('Farben auswählen und Konflikte lösen','chart-paletten')]),evidence,
 ]),
 row('chart-paletten','Chart-Paletten','Die Bedeutung bestimmt die Familie. Linien, Flächen und Dichte bestimmen ihre Eignung.',1,[
  section('data-viz-guide','Grundpalette → Archetyp → Farbauswahl',['Chart-Paletten sind Auswahlen aus der allgemeinen Farbpalette. Vor der Auswahl stehen Struktur, Datenbedeutung und vorhandene Rollen im selben Nutzungskontext. Die Markenfarbe ist ein Kandidat; sie erhält keinen automatischen Vorrang.']),
  section('dv-priority','So löst du einen Farbkonflikt',[],[
   'Rollen sammeln: Welche Bedeutung tragen Farbe, Vorzeichen, Position, Füllung und Strichmuster? Auch UI-Auswahl, Fokus, Fehler und destruktive Handlungen im Umfeld berücksichtigen.',
   'Geltung festlegen: Reservierungen gelten für den Chart und die zusammengehörigen Ansichten derselben Aufgabe. Andere Aufgaben dürfen andere Zuordnungen haben, müssen sie aber kenntlich machen. UI- und Datenrollen dürfen eine Familie teilen, wenn Form und Kontext die Bedeutung klar trennen.',
   'Konflikt prüfen: Neben ausdrücklich festgelegten Rollen auch erwartbare Lesarten berücksichtigen. Rote oder grüne Finanzdaten können als Minus/Plus wirken; Blau kann Auswahl, Amber Warnung bedeuten.',
   'Alternative wählen: Datenbedeutung und Lesbarkeit gehen vor Markenwunsch. Für neutrale Reihen blue.70, bei Konflikt purple.70, danach neutral.70 prüfen. Jede belegte oder ungeeignete Farbe überspringen. Keine Alternative ist automatisch semantisch frei.',
   'Reicht die bereinigte Auswahl nicht, über Position, Beschriftung oder getrennte Ansichten unterscheiden. Keine zusätzliche Farbe erfinden und keine bestehende Bedeutung heimlich umbelegen.',
  ]),
  ...chartColorConflicts.map(c=>section('dv-conflict-'+c.id,c.title,[c.meaning],['Passt, wenn: '+c.allowed,'Bei Konflikt: '+c.fallback])),
  section('dv-visual-flows','Beispiel: Ein- und Auszahlungen',['Grün kennzeichnet hier Einzahlungen, Rot Auszahlungen. Gebühren sind Teil der Auszahlungen und behalten Rot. Das Budget ist eine neutrale Referenz. Die Wiederholung von Rot ist hier richtig: Sie wiederholt die Richtung, keine neue Kategorie.','Eine rote Markenfarbe darf deshalb nicht zusätzlich den neutralen Saldo identifizieren. Auch Blau oder Violett sind keine pauschale Lösung: Ist die Farbe bereits für Auswahl oder eine Kategorie belegt, Ergebnis separat und eindeutig beschriftet zeigen.']),
  section('dv-palette-single','Einzelfarbe',['Für eine neutrale Reihe. Mehr Messpunkte erzeugen keinen zusätzlichen Farbbedarf. Eine helle Flächenfüllung gehört zur gleichen Identität wie ihre Konturlinie.']),
  section('dv-palette-categorical','Kategorisch',['Für ungeordnete Kategorien und gleichberechtigte Vergleichsreihen. Jede sichtbare Kategorie erhält eine stabile Zuordnung. Die Illustration zeigt drei Kandidaten aus der Grundpalette, keine geprüfte Kapazitätsgrenze. blue.70, purple.70 und neutral.70 müssen im konkreten Kontext noch unterscheidbar und semantisch frei sein.','Bei vielen Kategorien: direkte Beschriftung, Auswahl oder getrennte Ansichten ergänzen. Reservierte Statusfarben im jeweiligen Kontext aussparen.']),
  section('dv-palette-sequential','Sequenziell',['Für eine geordnete Grösse: Die Farbskala vermittelt niedrig bis hoch. Die Reihenfolge muss auch im gewählten Theme erkennbar sein.','Nicht als Ersatz für beliebige Kategorien verwenden. Die Farbe beschreibt eine Grösse und nicht bloss den Index eines Elements.']),
  section('dv-palette-diverging','Divergierend',['Für Abweichungen unter und über einer ausdrücklich benannten Mitte. Zwei Farbrichtungen und eine neutrale Mitte machen Richtung und Ausmass sichtbar.','Die Beispielskala verwendet Violett und Blau ohne Gut-/Schlechtwertung. In einem Ein-/Auszahlungs-Chart gelten dagegen die Richtungscodes des Archetyps. Rot/Grün nicht gleichzeitig für unabhängige Kategorien verwenden.']),
  section('dv-palette-semantic','Semantisch',['Für fachlich definierte Zustände. Die Illustration kennzeichnet „innerhalb der Grenze“ und „Grenze überschritten“ zusätzlich mit Text und Zeichen.','Negativ, Verlust, Warnung und Fehler sind verschiedene Aussagen. Lege ihre Zuordnung und ihren Geltungsbereich fest; übernimm keine Farbe allein aufgrund ihres Namens.']),
  section('dv-palette-reference','Hauptwert und Referenz',['Eine Hauptreihe wird hervorgehoben; Ziel, Vorperiode oder Benchmark treten zurück. Die Referenz bleibt durch Beschriftung und gegebenenfalls Strichmuster erkennbar.','Dies ist eine Kombination von Rollen, keine eigene Datenordnung. Eine wichtige Grenzverletzung darf durch die zurückhaltende Gestaltung nicht verschwinden.']),
  section('dv-form-choice','Die Form begrenzt die Auswahl',['Gleiche Farbfamilie bedeutet nicht gleiche Eignung: Helle Flächenstufen sind keine geeigneten dünnen Linien. Die folgenden Regeln gelten für die helle Referenzdarstellung.']),
  ...chartFormRules.map(f=>section('dv-form-'+f.id,f.title,[f.rule])),
  section('dv-palette-check','Eignung einer konkreten Palette festhalten',[],[
   'Geltung: Theme, Hintergrund und reservierte Bedeutungen.',
   'Form: dünne Linien, kleine Punkte, getrennte, angrenzende oder überlagerte Flächen.',
   'Umfang: Anzahl tatsächlich unterscheidbarer Kategorien unter den geprüften Bedingungen.',
   'Wiederholung: Identität im Chart und über zusammengehörige Ansichten.',
   'Nachweis: geprüfte Paarungen und Grenzen; offene Fragen ausdrücklich benennen.',
  ],[{label:'Grundpalette und Abstufungen',href:'/systems/shadcn/farben'},{label:'Farben für Flächen und Rückmeldungen',href:'/systems/shadcn/themes-und-zustaende'},link('Zugänglichkeit prüfen','zugaenglichkeit')]),evidence,
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
 if(palette&&block.blockType==='text')block.body.root.children.push(node('paragraph',[text('Grundpalette: '+palette.refs.map(r=>colorRefLabel(r)+' ('+chartColor(r)+')').join(' · ')+'. Die Auswahl ist ein Gestaltungsentwurf; die Unterscheidbarkeit im konkreten Chart bleibt zu prüfen.')]) as any)
}

export const visualizationCrosslinks=[
 {slug:'shadcn-farben',replace:false,block:section('col-charts','Farben in Charts',['Datenfarben folgen der Bedeutung und der Darstellung: eine Reihe, mehrere Kategorien, geordnete Werte oder eine Abweichung. Farben und ihre Wiederholung werden im Bereich Datenvisualisierung eingeordnet.'],[],[link('Charts einordnen','charts-einordnen'),link('Chart-Paletten','chart-paletten')])},
 {slug:'shadcn-chart',replace:true,block:editorialContent(chart as ComponentEditorial)!.find(b=>b.blockName==='usage')!},
]
