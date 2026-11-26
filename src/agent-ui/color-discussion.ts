import {z} from 'zod'

const hex = z.string().regex(/^#[0-9a-fA-F]{6}$/)
export const colorDiscussionSchema = z.object({
  system: z.string().trim().min(1).max(100),
  scope: z.string().trim().min(1).max(200),
  question: z.string().trim().min(1).max(400),
  source: z.string().trim().min(1).max(400),
  variants: z.array(z.object({
    id: z.string().regex(/^[a-z][a-z0-9-]{0,39}$/).refine(v=>v!=='open'&&v!=='change','Reserved choice'),
    title: z.string().trim().min(1).max(80),
    primary: hex,
    error: hex,
    explanation: z.string().trim().min(1).max(300),
  })).min(2).max(3).refine(v=>new Set(v.map(x=>x.id)).size===v.length,'Duplicate variant IDs'),
})
export type ColorDiscussion = z.infer<typeof colorDiscussionSchema>
export const colorReviewSchema = z.object({
  kind: z.literal('arve-color-discussion/1'),
  snapshot: z.string().regex(/^[a-f0-9]{64}$/),
  discussion: colorDiscussionSchema,
})
export type ColorReview = z.infer<typeof colorReviewSchema>
export type ColorChoice = {choice:string;note:string}

// An Arve illustration, deliberately independent of any project palette.
export const exampleDiscussion: ColorDiscussion = {
  system:'Unbenanntes Design-System',
  scope:'Primäre Handlung und Fehlermeldung im Formular',
  question:'Wie unterscheiden wir die primäre Handlung von einem Fehler, wenn die Markenfarbe Rot ist?',
  source:'Arve-Pilot: erfundene Varianten zur Klärung, keine bestehende Design-System-Regel.',
  variants:[
    {id:'brand',title:'Markenfarbe für die Handlung',primary:'#B42318',error:'#B42318',explanation:'Beide Rollen sind rot. Beschriftung, Symbol und Position müssen die Bedeutung deutlich unterscheiden.'},
    {id:'separate',title:'Rollen farblich trennen',primary:'#21618C',error:'#B42318',explanation:'Die Handlung wird blau, der Fehler bleibt rot. Ob Blau hier verfügbar ist, muss das Team klären.'},
  ],
}
export function decisionText(review:ColorReview,selection:ColorChoice){
  const note=selection.note.trim()
  if(note.length>600)throw Error('Die Anmerkung ist zu lang.')
  const variant=review.discussion.variants.find(v=>v.id===selection.choice)
  if(!variant&&!['open','change'].includes(selection.choice))throw Error('Bitte eine Antwort wählen.')
  if(selection.choice==='change'&&!note)throw Error('Bitte die gewünschte Änderung beschreiben.')
  return [
    'Farbklärung · Gesprächsergebnis',
    `System: ${review.discussion.system}`,
    `Geltungsbereich: ${review.discussion.scope}`,
    `Frage: ${review.discussion.question}`,
    `Grundlage: ${review.discussion.source}`,
    `Vergleichsstand: ${review.snapshot}`,
    variant?`Gewählte Arbeitsrichtung: ${variant.title}. Primäre Handlung ${variant.primary}, Fehler ${variant.error}. ${variant.explanation}`:
      selection.choice==='open'?'Entscheidung bleibt offen. Keine Variante ist bestätigt.':'Änderung gewünscht. Keine gezeigte Variante ist bestätigt.',
    note?`Anmerkung: ${note}`:'',
    'Nur für diesen Gesprächsstand. Keine CMS-Speicherung oder Veröffentlichung. Als lokale Entscheidung bzw. offene Frage behandeln; keine allgemeine Farbregel ableiten.',
    'Bitte fasse die Arbeitsrichtung und verbleibende Klärung kurz zusammen.',
  ].filter(Boolean).join('\n')
}
export function readableComparison(review:ColorReview){
  return [`System: ${review.discussion.system}`,`Geltungsbereich: ${review.discussion.scope}`,review.discussion.question,`Grundlage: ${review.discussion.source}`,
    ...review.discussion.variants.map(v=>`${v.id}: ${v.title} — primäre Handlung ${v.primary}, Fehler ${v.error}. ${v.explanation}`),
    'Antwortmöglichkeiten: eine Variante, Änderung mit Beschreibung oder bewusst offenlassen. Ohne UI dieselben Optionen im Gespräch anbieten. Eine Auswahl speichert oder veröffentlicht nichts.',
    `Vergleichsstand: ${review.snapshot}`].join('\n')
}
export function inkOn(hex:string){
  const channels=hex.slice(1).match(/../g)!.map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4)
  const l=channels[0]*.2126+channels[1]*.7152+channels[2]*.0722
  return (l+.05)/.05 >= 1.05/(l+.05)?'#111111':'#FFFFFF'
}
