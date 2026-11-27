import type {Page} from '../payload-types'
import type {Entry} from './published-documentation'

export const homeTargetPaths = [
  ['page','primary'], ['page','secondary'], ['flow','primary'], ['flow','secondary'],
  ['components','primary'], ['foundations','primary'], ['foundations','secondary'],
  ['collaboration','primary'], ['collaboration','secondary'], ['example','primary'],
] as const

/** Map only declared page relationships, between database IDs and portable snapshot slugs. */
export function mapHomeTargets(value:any, resolve:(target:any)=>any):any {
  if(!value)return value
  const result=structuredClone(value)
  for(const [group,key] of homeTargetPaths)if(result[group]?.[key]!=null)result[group][key]=resolve(result[group][key])
  return result
}

const fallbackLinks = {
  page:[['page-types','Seitentyp wählen'],['page-layouts','Layout finden']],
  flow:[['patterns','UX-Patterns nachschlagen'],['formulare-validierung','Formulare und Rückmeldungen']],
  components:[['komponenten','Zum Komponentenkatalog']],
  foundations:[['grundlagen','Grundlagen'],['content-design','Content Design']],
  collaboration:[['barrierefreiheit','Barrierefreiheit'],['mitwirken','Mitwirken und Releases']],
} as const
const text=(override:unknown,fallback:string)=>typeof override==='string'&&override.trim()?override.trim():fallback
export function systemHomeModel({name,slug,home,pages,entries}:{name:string;slug:string;home?:Page;pages:Page[];entries:Entry[]}) {
  const value=home?.homeTemplate??{}
  const flat=(items:Entry[]):Entry[]=>items.flatMap(e=>[e,...flat(e.children??[])])
  const published=flat(entries),bySlug=new Map(published.map(e=>[e.slug,e]))
  function target(group:keyof typeof fallbackLinks,index:number) {
    const key=index?'secondary':'primary',custom=(value[group] as any)?.[key]
    const fallback=fallbackLinks[group][index]
    const page=custom!=null?pages.find(p=>p.id===(typeof custom==='object'?custom.id:custom)):undefined
    const entry=custom!=null ? page&&bySlug.get(page.component??(page.slug.startsWith(slug+'-')?page.slug.slice(slug.length+1):page.slug)) : bySlug.get(fallback[0])
    return {label:custom!=null?entry?.title??'Zielseite noch nicht veröffentlicht':fallback[1],path:entry?.path}
  }
  const tasks=[
    {key:'page' as const,title:'Eine Seite aufbauen',description:'Lege den Zweck der Seite fest und ordne die Inhalte.'},
    {key:'flow' as const,title:'Einen Ablauf gestalten',description:'Plane Eingaben, Rückwege und Rückmeldungen.'},
    {key:'components' as const,title:'Komponenten auswählen',description:'Vergleiche Bausteine und prüfe, wann sie passen.'},
  ].map(task=>({...task,title:text(value[task.key]?.title,task.title),description:text(value[task.key]?.description,task.description),links:fallbackLinks[task.key].map((_,i)=>target(task.key,i))}))
  const references=[
    {key:'foundations' as const,title:'Gestaltungsgrundlagen'},
    {key:'collaboration' as const,title:'Qualität und Zusammenarbeit'},
  ].map(group=>({...group,links:fallbackLinks[group.key].map((_,i)=>target(group.key,i))}))
  const exampleTarget=value.example?.primary
  const examplePage=exampleTarget!=null?pages.find(p=>p.id===(typeof exampleTarget==='object'?exampleTarget.id:exampleTarget)):undefined
  const exampleEntry=examplePage&&bySlug.get(examplePage.component??examplePage.slug.replace(new RegExp('^'+slug+'-'),''))
  return {
    eyebrow:text(value.eyebrow,'Design-System · Handbuch'),heading:text(value.heading,/handbuch$/i.test(name.trim())?name:name+' Handbuch'),
    intro:text(value.intro,'Hier findest du Gestaltungsregeln, Vorlagen und Komponenten für die Arbeit mit deinem Team.'),
    startTitle:text(value.startTitle,'Was möchtest du gestalten?'),referenceTitle:text(value.referenceTitle,'Weiter nachschlagen'),
    tasks,references,example:exampleEntry?{title:text(value.example?.title,'An einem Beispiel nachvollziehen'),description:text(value.example?.description,'So hängen die Regeln im Entwurf zusammen.'),path:exampleEntry.path,label:exampleEntry.title}:undefined,
  }
}
