import assert from 'node:assert/strict'
import { getPayload } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import config from '../src/payload.config'
import type { Page } from '../src/payload-types'
const entries = [
 {slug:'shadcn-page-types',title:'Page types',summary:'Der Zweck einer Seite und die Inhalte, die sie benötigt.',parent:'shadcn-layout',order:0},
 {slug:'shadcn-page-type-overview',title:'overview',summary:'Einen Überblick geben und den Einstieg in einzelne Inhalte ermöglichen.',parent:'shadcn-page-types',order:0},
 {slug:'shadcn-page-type-edit',title:'edit',summary:'Bestehende Angaben bearbeiten, prüfen und speichern.',parent:'shadcn-page-types',order:2},
 {slug:'shadcn-page-type-create',title:'create',summary:'Neue Angaben erfassen, prüfen und anlegen.',parent:'shadcn-page-types',order:3},
 {slug:'shadcn-page-layouts',title:'Page layouts',summary:'Die räumliche Anordnung einer Seite – unabhängig von ihrem Zweck.',parent:'shadcn-layout',order:1},
 {slug:'shadcn-main-sidebar',title:'Main+Sidebar',summary:'Ein grosser Hauptbereich mit einer schmaleren Seitenleiste für ergänzende Informationen.',parent:'shadcn-page-layouts',order:0},
 {slug:'shadcn-card-grid-4x4',title:'4-column Card Grid',summary:'Cards in vier Spalten, mit einer variablen Anzahl von Reihen.',parent:'shadcn-page-layouts',order:1},
 {slug:'shadcn-narrow-single-card',title:'Narrow Single Card',summary:'Eine einzelne Card mit begrenzter Inhaltsbreite.',parent:'shadcn-page-layouts',order:2},
 {slug:'shadcn-wide-single-card',title:'Wide Single Card',summary:'Eine einzelne Card über die verfügbare Inhaltsbreite.',parent:'shadcn-page-layouts',order:3},
 {slug:'shadcn-stacked-section-cards',title:'Stacked Section Cards',summary:'Mehrere Abschnittskarten untereinander, gegliedert nach Inhalt.',parent:'shadcn-page-layouts',order:4},
 {slug:'shadcn-card-grid-3-columns',title:'3-column Card Grid',summary:'Gleichwertige Cards in drei Spalten, mit variabler Zeilenzahl.',parent:'shadcn-page-layouts',order:5},
]
const overviewVariants = [
 ['Dashboard','Wichtige Informationen, Kennzahlen und Einstiege bündeln.'],
 ['List & Search','Einträge suchen, filtern, vergleichen und öffnen.'],
 ['Analytics','Kennzahlen und Entwicklungen mit Filtern und Diagrammen untersuchen.'],
 ['Catalog','Angebote oder Vorlagen vergleichen und auswählen.'],
 ['Service Hub','Den Einstieg in Funktionen, Arbeitsbereiche und Unterstützung anbieten.'],
]
const overviewContent: Page['content'] = overviewVariants.map(([title,description])=>({blockType:'text',body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[
 {type:'heading',tag:'h2',version:1,direction:'ltr',format:'',indent:0,children:[{type:'text',version:1,text:title,detail:0,format:0,mode:'normal',style:''}]},
 {type:'paragraph',version:1,direction:'ltr',format:'',indent:0,children:[{type:'text',version:1,text:description,detail:0,format:0,mode:'normal',style:''}]},
]}}}))
const clean=(x:unknown):unknown=>Array.isArray(x)?x.map(clean):x&&typeof x==='object'?Object.fromEntries(Object.entries(x).filter(([key,v])=>key!=='id'&&v!=null).sort(([a],[b])=>a.localeCompare(b)).map(([key,v])=>[key,clean(v)])):x
const cfg=await config;cfg.db={...postgresAdapter({push:false,pool:{connectionString:process.env.DATABASE_URI}}),name:'postgres',allowIDOnCreate:false}
const payload=await getPayload({config:cfg})
try {
 const {docs:[system]}=await payload.find({collection:'design-systems',where:{slug:{equals:'shadcn'}},depth:0});assert(system)
 const transactionID=await payload.db.beginTransaction();assert(transactionID);const req={transactionID}
 try {
  const pages=(await payload.find({collection:'pages',pagination:false,draft:true,depth:0,where:{designSystem:{equals:system.id}},req})).docs
  const bySlug=new Map(pages.map(p=>[p.slug,p]));assert(bySlug.has('shadcn-layout')&&bySlug.has('shadcn-detailseite'))
  for(const entry of entries){
   const parent=bySlug.get(entry.parent);assert(parent)
   const existing=bySlug.get(entry.slug)
   if(existing){assert.equal(existing.title,entry.title);assert.equal(existing.parent,parent.id);assert.equal(existing._status,'published');continue}
   const {parent:_,...data}=entry
   const page=await payload.create({collection:'pages',depth:0,draft:false,req,data:{...data,parent:parent.id,designSystem:system.id,system:'shadcn',pageType:'layout',content:[],_status:'published'}})
   bySlug.set(entry.slug,page)
  }
  const overview=bySlug.get('shadcn-page-type-overview')!
  if(JSON.stringify(clean(overview.content))!==JSON.stringify(clean(overviewContent))){
   assert(!overview.content?.length,'Overview enthält bereits redaktionelle Inhalte; keine Überschreibung')
   await payload.update({collection:'pages',id:overview.id,depth:0,draft:false,req,data:{content:overviewContent,_status:'published'}})
  }
  const edit=bySlug.get('shadcn-page-type-edit')!
  assert(['Angaben erstellen oder bearbeiten, prüfen und speichern.','Bestehende Angaben bearbeiten, prüfen und speichern.'].includes(edit.summary??''),'Edit-Beschreibung wurde redaktionell geändert')
  const changes=[{slug:'shadcn-page-type-edit',summary:'Bestehende Angaben bearbeiten, prüfen und speichern.'},{slug:'shadcn-layout',title:'Layouts',summary:'Seitentypen und räumliche Anordnungen.'},
   {slug:'shadcn-detailseite',title:'detail',parent:bySlug.get('shadcn-page-types')!.id,order:1},
   {slug:'shadcn-seitenstruktur-und-navigation',order:2}]
  for(const {slug,...data} of changes){const page=bySlug.get(slug);assert(page&&page._status==='published');
   if(Object.entries(data).every(([key,value])=>page[key as keyof typeof page]===value))continue
   await payload.update({collection:'pages',id:page.id,depth:0,draft:false,req,data:{...data,_status:'published'}})
  }
  await payload.db.commitTransaction(transactionID);console.log('Layouts: Page types (4) + Page layouts (6); 5 Overview-Varianten; bestehende Detailseite erhalten.')
 }catch(error){await payload.db.rollbackTransaction(transactionID);throw error}
}finally{await payload.destroy()}
process.exit(0)
