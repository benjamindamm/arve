import type { getContract } from '../contracts/catalog'
import { shadcnReferenceRevision } from '../contracts/current-reference'
import { getFormsFeedbackComparisons } from './comparisons/forms-feedback-data'
import { getNavigationLayersComparisons } from './comparisons/navigation-layers-data'
import { getDataContentComparisons } from './comparisons/data-content-data'
import { contractOptions } from './contract-options'

export type ComparisonSection = 'variants' | 'states'
export type ComparisonItem = { id: string; title: string; description: string; value?: string; height?: number }
export type ComparisonSource = { path: string; sha256: string; pointer?: string; snippet?: string }
export type ComponentComparison = { id: string; title: string; description: string; items: ComparisonItem[]; layout?: 'compact' | 'wide' | 'full'; sourceReferences?: ComparisonSource[]; previewItems?: string[]; detailsLabel?: string; technicalNotes?: string }
// Short editorial choice labels, not additional component rules or runtime evidence.
const variants: ComparisonItem[] = [
  {id:'default',value:'Speichern',title:'Primär',description:'Für den wichtigsten nächsten Schritt.'},
  {id:'outline',value:'Abbrechen',title:'Mit Umrandung',description:'Für eine gleichzeitige Alternative.'},
  {id:'secondary',value:'Vorschau',title:'Sekundär',description:'Für unterstützende Aktionen.'},
  {id:'ghost',value:'Bearbeiten',title:'Zurückhaltend',description:'Für Aktionen in einer Werkzeugleiste.'},
  {id:'destructive',value:'Löschen',title:'Für Löschaktionen',description:'Für eine Aktion mit Verlustfolge.'},
  {id:'link',value:'Mehr erfahren',title:'Textaktion',description:'Für eine visuell leichte Aktion; Navigation weiterhin als Link auszeichnen.'},
]
const buttonSizes: ComparisonItem[] = [
  {id:'xs',title:'Sehr klein',description:'24 px Mindesthöhe',height:24},
  {id:'sm',title:'Klein',description:'28 px Mindesthöhe',height:28},
  {id:'default',title:'Standard',description:'32 px Mindesthöhe',height:32},
  {id:'lg',title:'Gross',description:'36 px Mindesthöhe',height:36},
  {id:'icon-xs',title:'Symbol · sehr klein',description:'24 × 24 px',height:24},
  {id:'icon-sm',title:'Symbol · klein',description:'28 × 28 px',height:28},
  {id:'icon',title:'Symbol · Standard',description:'32 × 32 px',height:32},
  {id:'icon-lg',title:'Symbol · gross',description:'36 × 36 px',height:36},
]
const commonStates: ComparisonItem[] = [
  {id:'base',title:'Grundzustand',description:'Bereit für eine Aktion.'},
  {id:'hover',title:'Hover',description:'Visuelle Rückmeldung unter dem Zeiger.'},
  {id:'focus',title:'Tastaturfokus',description:'Der Ring macht das aktuelle Ziel sichtbar.'},
  {id:'disabled',title:'Deaktiviert',description:'Die Aktion ist momentan nicht verfügbar.'},
]

export function getComponentComparisons(component: string, contract: ReturnType<typeof getContract>, section: ComparisonSection): ComponentComparison[] {
  if (contract?.library !== 'shadcn' || contract.revision !== shadcnReferenceRevision || contract.revision !== '30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90' || contract.component !== component) return []
  const notes: Record<string,string> = {
    'button-states':'Hover und Fokus sind CSS-Merkmale. SCXML unterscheidet enabled und disabled; die dargestellten Merkmale sind keine zusätzlichen Ablaufzustände.',
    'input-states':'Wertebeispiele, Fokus, aria-invalid und disabled sind getrennte Merkmale. Der Fehlertext ist ein redaktionelles Beispiel und keine vorgegebene Validierungsregel.',
    'checkbox-states':'Gemischt ist über indeterminate, CSS und ARIA belegt. Das SCXML-Modell führt checked als Boolean; Fokus und Fehler sind zusätzliche Darstellungsmerkmale.',
    'switch-states':'checked beschreibt den Ein-/Aus-Wert. Fokus und disabled kommen getrennt hinzu.',
    'message-align':'start/end sind Ausrichtungen, keine Sende- oder Zustellzustände. Texte, Uhrzeiten und hinterlegte Textflächen sind redaktionelle Beispiele.',
  }
  const group = (id: string,title: string,description: string,items: ComparisonItem[]): ComponentComparison => ({id,title,description,items,...(notes[id]?{technicalNotes:notes[id]}:{})})
  if (component === 'button') {
    if (section === 'variants') return [
      group('button-variants','Wie deutlich soll die Aktion hervortreten?','Vergleiche die Gewichtung von der Hauptaktion bis zur zurückhaltenden Textaktion.',variants.filter(item=>contractOptions(contract,'variant').includes(item.id))),
      {...group('button-sizes','Die passende Grösse wählen','Vier Höhen für Textaktionen. Die zusätzlichen Symbolformen findest du darunter.',buttonSizes.filter(item=>contractOptions(contract,'size').includes(item.id))),previewItems:['xs','sm','default','lg'],detailsLabel:'Symbolformen vergleichen',technicalNotes:'Die Höhen sind Mindesthöhen, keine zugesicherten Touch-Zielflächen. Reine Symbolaktionen brauchen einen zugänglichen Namen.'},
    ]
    return [group('button-states','Rückmeldung bei derselben Aktion','Beschriftung und Grösse bleiben gleich. Zeiger, Tastaturfokus und Deaktivierung verändern nur die Rückmeldung.',commonStates)]
  }
  if(component === 'input' && section === 'states') return [group('input-states','Eingabe und Rückmeldung','Dasselbe Feld: leer, ausgefüllt, mit Fokus, mit Fehler oder deaktiviert.',[
    {id:'empty',title:'Leer',description:'Ein Platzhalter ersetzt kein Label.',value:'Projektname'},
    {id:'filled',title:'Ausgefüllt',description:'Der eingegebene Wert ist klar lesbar.',value:'Sommerplanung'},
    {id:'focus',title:'Fokus · ausgefüllt',description:'Ring am aktiven Eingabeziel.',value:'Sommerplanung'},
    {id:'error',title:'Fehler',description:'Fehlertext benennt die nötige Korrektur.',value:'Sommerplanung'},
    {id:'disabled',title:'Deaktiviert',description:'Der Wert bleibt zur Orientierung erhalten.',value:'Sommerplanung'},
  ])]
  if(component === 'checkbox' && section === 'states') return [group('checkbox-states','Auswahl und Rückmeldung','Vergleiche die Auswahlwerte zuerst. Fokus, Fehler und Deaktivierung kommen als zusätzliche Merkmale hinzu.',[
    {id:'unchecked',title:'Nicht gewählt',description:'Kein Element ausgewählt.'},
    {id:'checked',title:'Gewählt',description:'Das Element ist ausgewählt.'},
    {id:'mixed',title:'Gemischt',description:'Nur ein Teil einer Gruppe ist gewählt.'},
    {id:'focus',title:'Fokus · gewählt',description:'Auswahl und Fokus bleiben getrennt erkennbar.'},
    {id:'error',title:'Fehler · nicht gewählt',description:'Die erforderliche Auswahl fehlt.'},
    {id:'disabled',title:'Deaktiviert · gewählt',description:'Auswahl bleibt sichtbar, Änderung gesperrt.'},
  ])]
  if(component === 'switch') return section === 'variants' ? [group('switch-sizes','Zwei Grössen','Grösse ist eine Layoutoption; sie verändert den Ein-/Aus-Wert nicht.',[
    {id:'default',title:'Standard',description:'32 × 18 px'},
    {id:'sm',title:'Kompakt',description:'24 × 14 px'},
  ].filter(item=>contractOptions(contract,'size').includes(item.id)))] : [group('switch-states','Eine Einstellung ein- oder ausschalten','Die Beschriftung bleibt gleich. Der Tastaturfokus und eine gesperrte Änderung sind separat erkennbar.',[
    {id:'off',title:'Aus',description:'Die Einstellung ist ausgeschaltet.'},
    {id:'on',title:'Ein',description:'Die Einstellung ist eingeschaltet.'},
    {id:'focus',title:'Fokus · ein',description:'Ring um das aktuelle Bedienziel.'},
    {id:'disabled',title:'Deaktiviert · ein',description:'Der bestehende Wert bleibt sichtbar.'},
  ])]
  if(component === 'message' && section === 'variants') return [group('message-align','Eingehende und eigene Beiträge','Der Absender bestimmt die Ausrichtung. Beispieltexte und Uhrzeiten dienen der Orientierung.',[
    {id:'start',title:'Eingehend',description:'Mira · 10:24',value:'Ist der Entwurf bereit?'},
    {id:'end',title:'Eigener Beitrag',description:'Du · 10:25',value:'Ja, ich schicke ihn dir gleich.'},
  ].filter(item=>contractOptions(contract,'align').includes(item.id)))]
  return [
    ...getFormsFeedbackComparisons(component, section),
    ...getNavigationLayersComparisons(component, section),
    ...getDataContentComparisons(component, section),
  ]
}
