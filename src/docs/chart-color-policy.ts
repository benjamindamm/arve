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
 diverging:{label:'Abweichung ohne Gut-/Schlechtwertung',refs:[ref('purple'),ref('purple','40'),ref('neutral','20'),ref('blue','40'),ref('blue')],labels:['Unter Bezug','','Bezugspunkt','','Über Bezug']},
 semantic:{label:'Zustand zusätzlich benennen',refs:[ref('green'),ref('red')],labels:['✓ Innerhalb der Grenze','! Grenze überschritten']},
 reference:{label:'Hauptwert und Vergleich',refs:[ref('blue'),ref('neutral')],labels:['Hauptwert','Referenz · gestrichelt']},
}

export const chartColorConflicts=[
 {id:'brand',title:'Markenfarbe',meaning:'Markenidentität ist keine Datenbedeutung. „Primär“ bezeichnet im bestehenden System eine Handlung, nicht automatisch die Marke.',
  allowed:'Als neutrale Reihenfarbe möglich, wenn weder die lokale Rollenbelegung noch die erwartbare Lesart eine Bewertung oder Auswahl suggeriert. In diesem Showcase ist keine eigenständige Markenfarbe festgelegt.',
  fallback:'Rote oder grüne Marke in einem Finanzchart: blue.70 als neutralen Kandidaten wählen. Ist Blau dort für Auswahl oder eine andere Datenrolle besetzt, purple.70; bei weiterem Konflikt neutral.70. Alle Kandidaten auf Lesbarkeit prüfen. Die Marke kann im Seitenrahmen bleiben.'},
 {id:'red',title:'Rot',meaning:'Im UI: Fehler und destruktive Handlung. Im Finanzchart können Rot als Abfluss, Minus oder Verlust unterschiedliche, jeweils zu benennende Rollen belegen.',
  allowed:'Für die ausdrücklich festgelegte Datenrolle, zusätzlich mit Vorzeichen, Lage und Beschriftung. Eine Auszahlung ist keine destruktive UI-Handlung und kein Verarbeitungsfehler.',
  fallback:'Bei reserviertem Abfluss keine neutrale dritte Reihe in Rot. Neutrale Messreihe blue.70, bei Blaukonflikt purple.70; Referenz neutral.70 mit Strichmuster. Eine Fehlermeldung ausserhalb der Datenmarken zeigen.'},
 {id:'green',title:'Grün',meaning:'Im UI: Erfolg. Im Finanzchart kann Grün Zufluss oder Plus bedeuten; das ist keine Erfolgsbestätigung.',
  allowed:'Für den festgelegten Zufluss oder positiven Wert. In einem neutralen Kategorienvergleich nur, wenn keine Plus-/Erfolgslesart oder aktive Reservierung die Gleichrangigkeit verfälscht.',
  fallback:'Im Finanzkontext keine beliebige Kategorie durch Grün als „besser“ erscheinen lassen. Neutrale Kategorien mit blue.70, purple.70 und neutral.70 kennzeichnen; lokal belegte Kandidaten entfernen.'},
 {id:'blue',title:'Blau',meaning:'Im UI: primäre Handlung, Sachinformation und Fokus. Im Chart kann derselbe Farbton eine Messreihe, einen Vergleich oder eine Auswahl kennzeichnen.',
  allowed:'Als Datenfarbe, wenn Form, Legende und Kontext sie eindeutig von Bedienung und Auswahl trennen. Blaue UI-Buttons verbieten nicht pauschal blaue Daten.',
  fallback:'Ist Blau im Chart für die aktive Auswahl belegt, eine dauerhafte neutrale Reihe mit purple.70, ersatzweise neutral.70 kennzeichnen. Auswahl zusätzlich mit Kontur oder Strichstärke markieren; Reihenfarben beim Auswählen nicht neu verteilen.'},
 {id:'amber',title:'Amber',meaning:'Im UI: Warnung. Eine gelbe oder orange Kategorie kann ebenfalls Aufmerksamkeit oder eine Grenzannäherung suggerieren.',
  allowed:'Für einen ausdrücklich definierten Warnbereich oder eine geklärte neutrale Kategorie ohne konkurrierende Warnbedeutung. Nicht zum dekorativen Hervorheben einer beliebigen Reihe.',
  fallback:'Bei Warnkontext aus der Kategorienauswahl entfernen. Ersatz aus den noch unbelegten blue.70, purple.70 und neutral.70 wählen. Gibt es keinen klaren Kandidaten, Kategorien direkt beschriften oder getrennt zeigen.'},
 {id:'purple-neutral',title:'Violett und Neutral',meaning:'Auch Ausweichfarben sind nicht bedeutungsfrei: Violett kann eine zweite Handlung oder bestehende Kategorie tragen, Grau eine Referenz oder fehlende Verfügbarkeit.',
  allowed:'purple.70 als neutrale Alternative nach Kontextprüfung; neutral.70 als lesbarer Datenwert oder Referenz mit eindeutiger Beschriftung. Fehlende Werte nicht als graue Nullwerte darstellen.',
  fallback:'Wenn alle Kandidaten belegt oder nicht unterscheidbar sind: keine Farbe erzwingen, keine zusätzlichen Hexwerte erfinden. Reihen direkt beschriften, nach Aufgabe auswählen oder in vergleichbare Teilgrafiken aufteilen.'},
]

export const chartArchetypes=[
 {id:'neutral',code:'AR-01',title:'Verlauf ohne Bewertung',structure:'Eine Messreihe über Zeit; Farbe identifiziert die Reihe, nicht deren Steigung oder Vorzeichen.',
  rule:'Markenfarbe nur nach Konfliktprüfung. Rot und Grün sind bei Finanzverläufen als Verlust-/Gewinnsignal missverständlich, auch ohne explizite Reservierung. Lokaler Standard: blue.70, bei Auswahlkonflikt purple.70, danach neutral.70.',
  expansion:'Eine Vorperiode wird zur benannten Referenz in neutral.70 mit Strichmuster. Weitere gleichberechtigte Reihen wechseln zum Kategorienvergleich; nicht automatisch die nächste Markenfarbe ergänzen.'},
 {id:'categories',code:'AR-02',title:'Gleichrangige Kategorien',structure:'Mehrere ungeordnete Kategorien; Farbe kennzeichnet Identität, nicht Rang oder Qualität.',
  rule:'Kandidaten: blue.70, purple.70 und neutral.70. Keine dieser Farben ist universell frei. Rot/Grün bei Finanz- oder Statuskontext aussparen; Amber bei Warnkontext. Eine grüne Marke darf nicht beiläufig eine Kategorie als besser markieren.',
  expansion:'Nach Konfliktausschlüssen sind höchstens die verbleibenden Kandidaten verfügbar, nicht automatisch drei geprüfte Farben. Für weitere Kategorien Position und direkte Beschriftung nutzen oder Ansichten teilen; Farben nicht zyklisch wiederholen.'},
 {id:'flows',code:'AR-03',title:'Zwei Richtungen mit weiteren Werten',structure:'Einzahlungen und Auszahlungen bilden Gegenrichtungen. Eine Referenz und Unterkategorien haben jeweils eine andere strukturelle Rolle.',
  rule:'Lokale Finanzregel: green.70 = Einzahlung, red.70 = Auszahlung. Vorzeichen, Position zur Nulllinie und Text sichern die Richtung. Beide Farben bleiben für Richtungen reserviert; eine rote oder grüne Marke erhält keine zusätzliche Reihenrolle.',
  expansion:'Budget: neutral.70 als beschriftete, gestrichelte Referenz. Gebühren als Teil der Auszahlungen: weiterhin Rot, getrennt durch Position und Namen; bei Bedarf als eigene Aufschlüsselung. Gebühren nicht zusätzlich zum bereits vollständigen Auszahlungstotal stapeln. Saldo = Einzahlungen minus Auszahlungen: eigene Kennzahl oder Teilgrafik, keine beliebige dritte Kategorienfarbe.'},
 {id:'parts',code:'AR-04',title:'Teile eines Ganzen',structure:'Gestapelte oder angrenzende Flächen zeigen überschneidungsfreie Teile. Ein 100-%-Chart vergleicht Anteile.',
  rule:'Kategorische Auswahl aus der Grundpalette; Nachbarflächen und kleine Segmente prüfen. Gibt es eine Richtungs- oder Statussemantik, hat sie Vorrang vor der Kategorie. Positive Einzahlungen und negative Auszahlungen nicht als beliebige Teile eines positiven 100-%-Ganzen behandeln.',
  expansion:'Ein neuer Teil darf weder in einem vorhandenen Teil enthalten sein noch dessen Farbe als andere Identität wiederverwenden. Wenn die bereinigte Auswahl nicht reicht, direkte Labels, getrennte Balken oder eine Aufschlüsselung nutzen.'},
 {id:'deviation',code:'AR-05',title:'Abweichung von einem Bezug',structure:'Werte liegen unter oder über null, Ziel oder Benchmark. Richtung und gegebenenfalls Ausmass werden kodiert.',
  rule:'Ohne Bewertung: purple.70 für unterhalb, blue.70 für oberhalb, neutral.20 für die Mitte; abgestufte Flächen können purple.40 und blue.40 ergänzen. Die hellen Stufen sind keine dünnen Linien. Rot/Grün nur, wenn die konkrete Richtung ausdrücklich bewertet wird.',
  expansion:'Mehrere Kategorien nicht durch weitere Farben in dieselbe Richtungsskala mischen. Kategorien über Position oder getrennte Ansichten zeigen. Bei blauem Auswahlkontext eine gesonderte Auswahlkontur nutzen; gelingt die Trennung nicht, Richtungen über beschriftete Positionen statt Farbe unterscheiden.'},
 {id:'threshold',code:'AR-06',title:'Wert mit Grenze oder Status',structure:'Ein Messwert wird an einer benannten Grenze bewertet. Messreihe, Schwelle und Status sind unterschiedliche Rollen.',
  rule:'Neutrale Messreihe blue.70, Referenz neutral.70 gestrichelt. Nur wenn Schwellen fachlich festgelegt sind: amber.70 für Warnung, red.70 für Verletzung, gegebenenfalls green.70 für den definierten Normalzustand. Labels und Zeichen ergänzen Statusfarben.',
  expansion:'Keine gleichfarbige neutrale Kategorie für einen Status ergänzen. Eine grüne Marke darf keine ungeprüften Werte als „in Ordnung“ erscheinen lassen. Blauer Auswahlkonflikt: purple.70 für die Messreihe; zusätzliche Kennzahlen getrennt zeigen, wenn Rollen sonst kollidieren.'},
]

export const chartFormRules=[
 {id:'lines',title:'Linien und kleine Punkte',rule:'Dunkle Kandidaten der Stufe 70 auf heller Grundfläche verwenden; leichte Stufen nicht auf dünne Marken übertragen. Schnittpunkte und dichte Verläufe zusätzlich über Labels oder Muster unterscheiden. Die Palette allein löst keine Überlagerung.'},
 {id:'separate',title:'Getrennte Flächen',rule:'Für Einzelwerte können Balken dieselbe Reihenfarbe wiederholen, wenn Position und Namen die Kategorien tragen. Gleichberechtigte farblich kodierte Reihen brauchen dagegen unterschiedliche Identitäten. Grosse Markenfarbflächen dürfen keine unbeabsichtigte Wertung erzeugen.'},
 {id:'adjacent',title:'Angrenzende Flächen',rule:'Jedes relevante Nachbarpaar und kleine Segmente prüfen; drei vorhandene Farbtöne sind noch keine geprüfte Dreierpalette. Reicht die Unterscheidbarkeit nicht, beschriftete getrennte Balken oder eine Aufschlüsselung verwenden.'},
 {id:'overlap',title:'Überlagerte Flächen',rule:'Keine transparente Kategorienmischung als neue Farbe interpretieren lassen. Konturlinien statt mehrerer Füllungen oder getrennte Teilgrafiken verwenden. Ein semantisches Band bleibt als Zielbereich beschriftet; es übernimmt keine zusätzliche Kategorienrolle.'},
]
