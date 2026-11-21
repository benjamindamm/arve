import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = {version:1,direction:'ltr' as const,format:'' as const,indent:0}
const node=(text:string)=>({type:'text',version:1,text})
const block=(blockName:string,title:string,copy:string[],links:[string,string][]=[]):Block=>({blockType:'text',blockName,body:{root:{...base,type:'root',children:[{...base,type:'heading',tag:'h2',children:[node(title)]},...copy.map(text=>({...base,type:'paragraph',children:[node(text)]})),...links.map(([label,url])=>({...base,type:'paragraph',children:[{...base,type:'link',fields:{url,linkType:'custom',newTab:false},children:[node(label)]}]}))]}}})
export const release={
 expectedUpdatedAt:'2026-11-20T14:18:52.178Z',
 summary:'Eine klare Navigation zeigt, wo du bist und welche Inhalte du aufrufen kannst. Der Rückweg zur Ergebnisliste erhält Suche, Filter und Listenposition.',
 content:[
  block('nav-example','Der Seitenrahmen zeigt den aktuellen Ort',[
   'Schema wechseln','Tabs','Sidebar','Cards',
   'Schematische Vorschau · Die Beschriftungen benennen die Bereiche der Seite. Mit der Auswahl oben wechselst du deren Anordnung.',
   'Globale Navigation','Arbeitsraum','Projekte','Dokumente',
   'Aktueller Ort','Projekte / Alpenblick','Zur Ergebnisliste',
   'Lokale Navigation','Überblick','Unterlagen','Verlauf',
   'Hauptbereich','Projekt Alpenblick','Stand und nächste Schritte dieses Projekts. Der Seitentitel bleibt beim Wechsel der lokalen Ansicht erkennbar.',
   'Schmale Ansicht: Globale und lokale Navigation stehen vor dem Hauptinhalt. In diesem Schema werden beide gestapelt; nichts überdeckt den Inhalt.',
  ]),
  block('nav-tabs','Tabs · Ansichten desselben Objekts',[
   'Wähle Tabs für wenige gleichrangige Ansichten desselben Objekts, etwa Überblick, Unterlagen und Verlauf. Jeweils eine Ansicht ist sichtbar. Pflichtschritte gehören in einen geführten Ablauf.',
   'Die Vorschau zeigt, wie die Tabs angeordnet sind. Eine tatsächliche Tab-Komponente muss zusätzlich zeigen, welcher Tab ausgewählt ist, den zugehörigen Inhalt zuordnen und die Bedienung per Tastatur ermöglichen.',
  ]),
  block('nav-sidebar','Sidebar · wiederkehrende Ziele',[
   'Wähle eine Sidebar für mehrere wiederkehrende Ziele in einem Arbeitsbereich. Markiere den aktiven Eintrag, damit der aktuelle Ort erkennbar ist. Eigenständige Ziele erhalten eine eigene Seite mit Titel und Adresse.',
   'Auf schmaler Fläche kann die Navigation vor dem Inhalt stehen. Ein eingeklapptes Menü braucht eine klar beschriftete Schaltfläche zum Öffnen. Ob das Menü geöffnet oder geschlossen ist, muss sichtbar sein.',
  ]),
  block('nav-cards','Cards · Einstieg über Inhalte',[
   'Wähle Cards für die Navigation, wenn ein Titel und eine kurze Beschreibung bei der Auswahl des Ziels helfen. Jede Card verlinkt eine eigenständige Seite; sie schaltet keine Ansicht innerhalb der aktuellen Seite um.',
   'Auf schmaler Fläche stehen die Cards untereinander. Ein eindeutiger Link pro Ziel genügt; vermeide mehrere gleichlautende Links in derselben Card.',
  ]),
  block('nav-rules','Drei Regeln für die Orientierung',[
   'Global und lokal trennen: Die globale Navigation wechselt den Arbeitsbereich; die lokale Navigation gliedert den aktuellen Bereich oder das Objekt. Beschrifte beide verständlich und markiere den aktuellen Ort.',
   'Die Hauptaufgabe sichtbar halten: Der Seitentitel benennt die Seite, der Hauptbereich enthält ihre Inhalte und Aufgaben. Auf schmaler Fläche folgt der Hauptinhalt nach der Navigation; vermeide eine zweite Scrollfläche, die den Inhalt überlagert.',
   'Einen verlässlichen Rückweg anbieten: Benenne das Ziel, etwa «Zur Ergebnisliste». Wer von einem Suchtreffer zurückkehrt, soll die vorherige Suche, die Filter und die Listenposition wieder vorfinden.',
  ]),
  block('nav-return','Zurück zur Ergebnisliste',[
   'Beispielkontext · Projekte','Suche: Alpen · Status: In Arbeit · Seite 2 · Eintrag 14',
   'Der Rücklink im Schema springt zu den hier gezeigten Angaben. In der Anwendung muss er den tatsächlichen Listenstand wiederherstellen. Wie Suche, Filter und Rückkehr zusammenwirken, beschreibt das Pattern «Suchen und Filtern».',
  ],[['Suchen und Filtern · Rückkehr im Arbeitskontext','/systems/shadcn/suchen-filtern']]),
  block('nav-evidence','Quellen und Prüfgrenzen',[
   'Die Empfehlungen auf dieser Seite stammen aus dem bestehenden Handbuch: Tabs zeigen gleichrangige Ansichten desselben Kontexts, eigenständige Aufgaben erhalten eigene Seiten. Auf schmaler Fläche bleiben Zusatzinformationen im Lesefluss. Pflichtschritte gehören nicht hinter frei wählbare Tabs.',
   'Die drei Anordnungen und das Projekt wurden für dieses Beispiel entworfen. Die Beschriftungen im Schema lassen sich nicht als Navigationsziele aufrufen. Bedienbar sind nur der Schemawechsel und der Rücklink. Die Vorschau zeigt keine vollständige Tab-, Sidebar- oder Card-Komponente.',
   'Die Vorschau verwendet ab 38 rem verfügbarer Breite eine seitliche lokale Navigation; darunter stehen die Bereiche untereinander. Diese Schwelle wurde für dieses Beispiel gewählt. Die Vorschau belegt weder einen vollständigen Navigationsvertrag noch die Wiederherstellung des vorherigen Zustands oder die allgemeine Barrierefreiheit.',
  ],[['shadcn/ui · Tabs','https://ui.shadcn.com/docs/components/base/tabs'],['shadcn/ui · Sidebar','https://ui.shadcn.com/docs/components/base/sidebar'],['shadcn/ui · Card','https://ui.shadcn.com/docs/components/base/card']]),
 ] satisfies Page['content'],
}
