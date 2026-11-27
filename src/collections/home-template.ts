import type {Field,Where} from 'payload'
const target=(name:string,label:string):Field=>({name,label,type:'relationship',relationTo:'pages',filterOptions:({data,id}):Where|boolean=>data?.designSystem?{and:[{designSystem:{equals:typeof data.designSystem==='object'?data.designSystem.id:data.designSystem}},...(id?[{id:{not_equals:id}}]:[])]}:false})
const copyFields:Field[]=[{name:'title',label:'Überschrift',type:'text'},{name:'description',label:'Kurztext',type:'textarea'}]
export const homeTemplateField:Field={
  name:'homeTemplate',label:'Systemstartseite · gemeinsame Vorlage',type:'group',
  admin:{condition:(_,siblings)=>siblings.pageType==='overview',description:'Wird verwendet, wenn diese Seite unter Design-Systeme als Startseite gewählt ist. Leere Felder übernehmen Arves Vorgaben. Alle Systeme verwenden denselben Aufbau. Zielseiten müssen zum selben System gehören; Entwürfe werden erst nach ihrer Veröffentlichung verlinkt.'},
  fields:[
    {name:'eyebrow',label:'Kleine Dachzeile',type:'text'},
    {name:'heading',label:'Seitentitel (leer = Systemname + Handbuch)',type:'text'},
    {name:'intro',label:'Einleitung',type:'textarea'},
    {name:'startTitle',label:'Überschrift der Einstiege',type:'text'},
    {name:'referenceTitle',label:'Überschrift zum Nachschlagen',type:'text'},
    {name:'page',label:'Einstieg: Seite aufbauen',type:'group',fields:[...copyFields,target('primary','Seitentypen'),target('secondary','Seitenlayouts')]},
    {name:'flow',label:'Einstieg: Ablauf gestalten',type:'group',fields:[...copyFields,target('primary','UX-Patterns'),target('secondary','Formulare und Rückmeldungen')]},
    {name:'components',label:'Einstieg: Komponenten auswählen',type:'group',fields:[...copyFields,target('primary','Komponentenkatalog')]},
    {name:'foundations',label:'Nachschlagen: Gestaltungsgrundlagen',type:'group',fields:[target('primary','Grundlagen'),target('secondary','Content Design')]},
    {name:'collaboration',label:'Nachschlagen: Qualität und Zusammenarbeit',type:'group',fields:[target('primary','Barrierefreiheit'),target('secondary','Mitwirken und Releases')]},
    {name:'example',label:'Optional: Beispiel',type:'group',fields:[...copyFields,target('primary','Beispielseite (leer = kein Beispiel)')]},
  ],
}
