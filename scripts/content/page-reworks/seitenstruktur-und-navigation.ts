import type { Page } from '../../../src/payload-types'
type Block = NonNullable<Page['content']>[number]
const base = {version:1,direction:'ltr' as const,format:'' as const,indent:0}
const node=(text:string)=>({type:'text',version:1,text})
const block=(blockName:string,title:string,copy:string[],links:[string,string][]=[]):Block=>({blockType:'text',blockName,body:{root:{...base,type:'root',children:[{...base,type:'heading',tag:'h2',children:[node(title)]},...copy.map(text=>({...base,type:'paragraph',children:[node(text)]})),...links.map(([label,url])=>({...base,type:'paragraph',children:[{...base,type:'link',fields:{url,linkType:'custom',newTab:false},children:[node(label)]}]}))]}}})
export const release={
 expectedUpdatedAt:'2026-11-20T09:07:26.485Z',
 summary:'Globale Wege, lokale Navigation und Hauptinhalt geben Orientierung; der Rückweg erhält den Arbeitskontext.',
 content:[
  block('nav-example','Ein Seitenrahmen mit erkennbarem Ort',[
   'Schema wechseln','Tabs','Sidebar','Cards',
   'Schematische Vorschau · Beschriftungen zeigen die Bereiche, die Auswahl oben wechselt ihre Anordnung.',
   'Globale Navigation','Arbeitsraum','Projekte','Dokumente',
   'Aktueller Ort','Projekte / Alpenblick','Zur Ergebnisliste',
   'Lokale Navigation','Überblick','Unterlagen','Verlauf',
   'Hauptbereich','Projekt Alpenblick','Stand und nächste Schritte dieses Projekts. Der Seitentitel bleibt beim Wechsel der lokalen Ansicht erkennbar.',
   'Schmale Ansicht: Globale und lokale Navigation stehen vor dem Hauptinhalt. In diesem Schema werden beide gestapelt; nichts überdeckt den Inhalt.',
  ]),
  block('nav-tabs','Tabs · Ansichten eines Kontexts',[
   'Wähle Tabs für wenige gleichrangige Ansichten desselben Objekts, etwa Überblick, Unterlagen und Verlauf. Eine Ansicht ist sichtbar. Pflichtschritte gehören in einen geführten Ablauf.',
   'Die Vorschau zeigt die Anordnung. Für eine tatsächliche Tab-Komponente sind Auswahlzustand, zugehöriges Panel und Tastaturbedienung zusätzlich umzusetzen.',
  ]),
  block('nav-sidebar','Sidebar · beständige Bereiche',[
   'Wähle eine Sidebar für mehrere wiederkehrende Ziele in einem Arbeitsbereich. Der aktive Eintrag zeigt den Ort. Eigenständige Ziele erhalten eine eigene Seite mit Titel und Adresse.',
   'Auf schmaler Fläche kann die Navigation vor den Inhalt rücken. Ein eingeklapptes Menü braucht eine klar beschriftete Öffnen-Schaltfläche und einen sichtbaren Zustand.',
  ]),
  block('nav-cards','Cards · Einstieg über Inhalte',[
   'Wähle Cards als Inhaltsnavigation, wenn Titel und kurze Beschreibung beim Auswählen eines Ziels helfen. Jede Card führt zu einer eigenständigen Seite; sie ist kein umschaltbares Panel.',
   'Auf schmaler Fläche stehen die Einstiege untereinander. Ein eindeutiger Link pro Ziel genügt; vermeide mehrere gleichlautende Links in derselben Card.',
  ]),
  block('nav-rules','Drei Regeln für die Orientierung',[
   'Global und lokal trennen: Die globale Navigation wechselt den Arbeitsbereich; die lokale Navigation gliedert den aktuellen Bereich oder das Objekt. Beschrifte beide verständlich und markiere den aktuellen Ort.',
   'Die Hauptaufgabe sichtbar halten: Seitentitel und Hauptbereich führen. Auf schmaler Fläche folgt der Hauptinhalt nach der Navigation; keine überlagernde zweite Scrollfläche erzwingen.',
   'Einen verlässlichen Rückweg anbieten: Benenne das Ziel, etwa «Zur Ergebnisliste». Aus einem Suchtreffer zurückzukehren soll die vorherige Suche, Filter und Listenposition wieder aufnehmen.',
  ]),
  block('nav-return','Zurück zur Ergebnisliste',[
   'Beispielkontext · Projekte','Suche: Alpen · Status: In Arbeit · Seite 2 · Eintrag 14',
   'Der Rücklink im Schema führt zu diesem sichtbaren Kontext. In der Anwendung muss der tatsächliche Listenstand wiederhergestellt werden. Der fachführende Ablauf für Suche, Filter und Rückkehr steht im Suchpattern.',
  ],[['Suchen und Filtern · Rückkehr im Arbeitskontext','/systems/shadcn/suchen-filtern']]),
  block('nav-evidence','Quellen und Prüfgrenzen',[
   'Grundlage ist die bestehende CMS-Empfehlung: Tabs für gleichrangige Ansichten desselben Kontexts, eigene Seiten für eigenständige Aufgaben, Zusatzinformation im schmalen Lesefluss und keine Pflichtschritte hinter frei wählbaren Tabs.',
   'Die drei Anordnungen und der Projektkontext sind synthetische Gestaltungsbeispiele. Beschriftungen im Schema sind bewusst keine ausführbaren Navigationsziele. Nur der Schemawechsel und der Rücklink sind bedienbar. Die Auswahl ist keine vollständige Tab-, Sidebar- oder Card-Komponente.',
   'Die Vorschau verwendet ab 38 rem verfügbarer Breite eine seitliche lokale Navigation; darunter stehen die Bereiche untereinander. Diese Schwelle ist eine lokale Beispielentscheidung. Ein vollständiger Navigationsvertrag, Zustandswiederherstellung und eine allgemeine Barrierefreiheitsfreigabe sind damit nicht nachgewiesen.',
  ],[['shadcn/ui · Tabs','https://ui.shadcn.com/docs/components/base/tabs'],['shadcn/ui · Sidebar','https://ui.shadcn.com/docs/components/base/sidebar'],['shadcn/ui · Card','https://ui.shadcn.com/docs/components/base/card']]),
 ] satisfies Page['content'],
}
