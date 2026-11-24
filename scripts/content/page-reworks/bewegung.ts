import type { Page } from '../../../src/payload-types'
import { foundationsRelease } from '../foundations-release'

type Block = NonNullable<Page['content']>[number]
const node = (text: string) => ({type:'text',version:1,text,detail:0,format:0,mode:'normal',style:''})
function copy(blockName:string, heading:string, ...paragraphs:string[]):Block {
  return {blockType:'text',blockName,body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[
    {type:'heading',tag:'h2',version:1,direction:'ltr',format:'',indent:0,children:[node(heading)]},
    ...paragraphs.map(text=>({type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[node(text)]})),
  ]}}}
}
// Keep the frozen foundation release intact; revise only the current page below.
const original = foundationsRelease.find(page=>page.slug==='shadcn-bewegung')!
function revise(block: Block, heading: string, ...paragraphs: string[]): Block {
  if (block.blockType !== 'text') return block
  const lines = [heading, ...paragraphs]
  return {...block, body:{...block.body, root:{...block.body.root, children:block.body.root.children.map((child,index)=>({...child, children:[node(lines[index])]}))}}}
}
export const release = {
  expectedUpdatedAt:'2026-11-20T13:43:19.240Z',
  title:'Animation',
  summary:'Zeige klar, was sich durch eine Handlung verändert. Das Ergebnis muss auch ohne Animation verständlich bleiben.',
  content:[
    copy('motion-example','Kontaktdetails öffnen',
      'Vorher · geschlossen','Nachher · geöffnet','Kontakt','Alex Beispiel',
      'Details anzeigen','Details ausblenden','E-Mail','alex@example.com',
      'Vorher ist nur der Name sichtbar. Nach dem Öffnen erscheint die zugehörige E-Mail direkt darunter. Der Name bleibt am selben Ort.',
      'Der Übergang kann zeigen, dass die E-Mail zu diesem Kontakt gehört. Auch ohne Bewegung ist die geöffnete Ansicht vollständig lesbar.'),
    copy('motion-preview','Freiwillige Vorschau',
      'Ohne Bewegung anzeigen','Vorschau öffnen','Vorschau schliessen',
      'Die Vorschau startet erst beim Öffnen und läuft einmal. Schliessen beendet sie; der Fokus bleibt auf dem Auslöser. Wenn du oben «Ohne Bewegung anzeigen» wählst oder reduzierte Bewegung in den Systemeinstellungen aktiviert hast, erscheint die E-Mail sofort.',
      'Gestaltungsstudie · Die Dauer von 300 ms gilt nur für diese Vorschau. Weder Dauer noch Kurve sind als Systemvorgabe freigegeben.'),
    copy('motion-rules','Drei Entscheidungen für den Entwurf',
      'Lege zuerst fest, was vor und nach der Handlung sichtbar ist. Welche Information kommt hinzu? Im Beispiel wird eine E-Mail sichtbar; ein Element nur zu verschieben würde diese Veränderung nicht erklären.',
      'Setze Bewegung ein, um zu zeigen, welcher Inhalt zu einem Auslöser gehört. Verzögere keine notwendige Rückmeldung und vermeide automatische Wiederholungen.',
      'Erhalte ohne Bewegung denselben Inhalt, dieselbe Reihenfolge und dieselbe Bedienung. Plane auch das Schliessen und wiederholte Eingaben. Es muss nachvollziehbar bleiben, wo sich der Fokus befindet.'),
    copy('motion-checks','Am Produkt prüfen',
      'Öffne die Vorschau, schliesse sie während des Übergangs und öffne sie erneut. Wiederhole den Ablauf ohne Bewegung und mit aktivierter Systempräferenz für reduzierte Bewegung. Prüfe Tastaturbedienung, Fokus, lange Inhalte und schmale Ansichten.',
      'Eine laufende Animation bestätigt keinen Erfolg. Rückmeldungen und Fehlermeldungen müssen den tatsächlichen Systemzustand beschreiben; eine Wiederholung muss dazu passen. Die Vorschau sendet keine Anfrage und speichert nichts.'),
    copy('motion-evidence','Quellen, Grenzen und ergänzende Studie',
      'Die WAI-Erläuterung zu WCAG 2.3.3 (AAA) beschreibt, warum sich nicht wesentliche, durch eine Interaktion ausgelöste Bewegung abschalten lassen soll. Die Quelle wurde am 20.11.2026 erneut gelesen. Die folgende Vertiefung erläutert die Gestaltungsregeln und zeigt eine ergänzende Studie mit einem bewegten Element.',
      'Die lokale Referenz enthält keine gemeinsame Skala für Dauer oder Kurven. Die Vorschau bestätigt weder die Freigabe einer Komponente noch die Unterstützung durch native Plattformen.'),
    {...original.content[0], title:'Wie sich ein Element an einen anderen Ort bewegt', explanation:'Die drei Standbilder zeigen, wo das Element A zuerst steht, welchen Weg es nimmt und wo es danach steht. Wenn du die Demonstration öffnest, bewegt sich A einmal zum Ziel. Schliessen beendet die Demonstration. Bei aktivierter Systempräferenz für reduzierte Bewegung erscheint direkt das Ergebnis. Die Dauer von 600 ms dient nur der Beobachtung und ist kein Systemtoken. Die Standbilder zeigen die Veränderung vollständig; du musst die Bewegung nicht abspielen, um sie zu verstehen.'} as Block,
    revise(original.content[1] as Block, 'Jede Bewegung braucht einen Zweck',
      'Eine Bewegung kann erklären, woher ein Element kommt, was sich verändert hat oder welche Handlung verarbeitet wird. Prüfe zuerst, ob der neue Zustand allein die Veränderung bereits verständlich macht. Zusätzliche Bewegung ist sinnvoll, wenn sie eine Beziehung erklärt, die sonst verloren ginge.',
      'Vermeide Animationen, die nur Aufmerksamkeit binden. Eine lange Verzögerung, bevor sich das Ergebnis bedienen lässt, verlangsamt wiederholte Aufgaben. Bewegung darf eine notwendige Rückmeldung nicht hinauszögern.'),
    revise(original.content[2] as Block, 'Anfang, Ziel und Unterbrechung gestalten',
      'Lege fest, wie die Ansicht vor und nach der Handlung aussieht, bevor du eine Animationskurve auswählst. Das Ergebnis muss auch ohne Übergang klar sein. Wiederholte Eingaben dürfen keine unübersichtliche Folge wartender Animationen erzeugen. Auch nach einer Unterbrechung muss die Ansicht verständlich bleiben.',
      'Plane auch, was bei Navigation oder Schliessen geschieht. Bewegung darf nicht unbeabsichtigt den Fokus versetzen oder die Leseposition verändern. Wesentliche Informationen bleiben zugänglich, während ein Vorgang bearbeitet wird.'),
    revise(original.content[3] as Block, 'Reduzierte Bewegung als gleichwertige Darstellung',
      'Die WAI-Erläuterung zu WCAG 2.3.3 (AAA) beschreibt abschaltbare, nicht wesentliche Bewegung nach einer Interaktion. Berücksichtige deshalb die entsprechende Nutzerpräferenz. «Weniger Bewegung» darf nicht «weniger Information» bedeuten.',
      'Zeige den neuen Zustand direkt, wenn eine räumliche Bewegung nicht erforderlich ist. Die Studie mit dem Element A zeigt dann dieselbe Endposition ohne Animation. Sie startet keine automatische Schleife. Wer die Demonstration öffnet, kann sie wieder schliessen.'),
    revise(original.content[4] as Block, 'Laufende Prozesse verständlich halten',
      'Ein bewegter Indikator kann zeigen, dass etwas bearbeitet wird. Er sagt allein weder, ob eine Anfrage angekommen ist, noch wie lange sie dauert oder was bei einem Fehler geschieht. Wie du diese Informationen zeigst, beschreibt das Pattern zu Systemzuständen.',
      'Vermeide eine Bewegung, die Erfolg suggeriert, bevor das Ergebnis bestätigt ist. Bei unbekannter Dauer darf die Darstellung keine genaue Restzeit vortäuschen. Wenn ein Fehler auftritt oder jemand den Vorgang wiederholen möchte, braucht es einen verständlichen Text und eine passende Handlung.'),
    revise(original.content[5] as Block, 'Keine erfundene Bewegungsskala',
      'Der lokale Tokenexport enthält keine allgemeine Sammlung von Dauern oder Kurven. Übergänge im Portal sind Details der Implementierung und gelten nicht automatisch als Systemregel. Prüfe bei neuen Übergängen zuerst Zweck, Umfang, Unterbrechung und die Variante mit reduzierter Bewegung. Erst danach lässt sich eine gemeinsame Skala festlegen.',
      'Für native Plattformen müssen Bewegungen und der Umgang mit Systempräferenzen gesondert gestaltet werden. Die Webdemonstration bestätigt keine iOS- oder Android-Unterstützung.'),
    original.content[6] as Block,
  ],
} satisfies {expectedUpdatedAt:string} & Pick<Page,'title'|'summary'|'content'>
