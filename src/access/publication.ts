import {mapHomeTargets} from '../docs/system-home-template'
import {transactionLock} from './transaction-lock'
import {createHash} from 'node:crypto'
import {APIError,type CollectionBeforeOperationHook,type CollectionBeforeChangeHook,type CollectionAfterChangeHook,type Field} from 'payload'
import {hasSystemRole,componentSystem,relationID,isAdministrator,systemIDs} from './permissions'
const fields={pages:['title','designSystem','parent','system','slug','pageType','template','order','summary','externalLinks','homeTemplate','editorialNote','editorialOwner','component','contract','demo','content'],implementations:['name','componentPage','platform','releaseStatus','packageName','packageVersion','owner','contexts','contract','verification']}
function canonical(value:any):any{
 if(Array.isArray(value))return value.map(canonical)
 if(value&&typeof value==='object')return Object.fromEntries(Object.keys(value).sort().filter(k=>value[k]!=null).map(k=>[k,canonical(value[k])]))
 return value??null
}
export function contentHash(collection:'pages'|'implementations',data:any){return createHash('sha256').update(JSON.stringify(canonical(Object.fromEntries(fields[collection].map(k=>[k,k==='externalLinks'&&!data[k]?.length?undefined:['designSystem','parent','componentPage'].includes(k)?relationID(data[k]):k==='homeTemplate'?mapHomeTargets(data[k],relationID):data[k]]))))).digest('hex')}
export const publicationField:Field={name:'publication',label:'Freigabe dieser Fassung',type:'group',access:{read:async({req,doc})=>{if(!req.user)return false;if(isAdministrator(req.user))return true;if(!doc)return systemIDs(req.user,'author').length>0;return hasSystemRole(req.user,doc.designSystem??await componentSystem(req,doc.componentPage),'author')}},admin:{position:'sidebar',readOnly:true,description:'Änderungen zuerst als Entwurf speichern, dann zur Prüfung geben. Ein Herausgeber setzt „Geprüft“ und speichert den Entwurf, bevor er ihn veröffentlicht.'},fields:[
 {name:'contentHash',type:'text',label:'Inhalts-Hash'},
 {name:'reviewedHash',type:'text',label:'Freigegebener Inhalts-Hash'},
 {name:'reviewedBy',type:'text',label:'Freigegeben von'},
 {name:'reviewedAt',type:'date',label:'Freigegeben am'},
 {name:'publishedBy',type:'text',label:'Veröffentlicht von'},
 {name:'publishedAt',type:'date',label:'Veröffentlicht am'},
]}
const intentKey=(collection:string,id:any)=>`arve-publication:${collection}:${id??'new'}`
export const capturePublicationIntent:CollectionBeforeOperationHook=async({args,operation})=>{
 if(['create','update','restoreVersion'].includes(operation)){
  const a=args as any
  let id=a.id??a.data?.id
  if(operation==='restoreVersion'){
   const version=await a.req.payload.findVersionByID({collection:a.collection.config.slug,id:a.id,depth:0,overrideAccess:true,req:a.req})
   id=relationID(version.parent)
  }
  if(a.req.user&&operation==='update'&&!id)throw new APIError('Bitte jedes Dokument einzeln speichern.',400)
  if(id)await transactionLock(a.req,a.collection.config.slug==='pages'?198735:198736,Number(id))
  a.req.context[intentKey(a.collection.config.slug,id)]={draft:a.draft===true,operation}
 }
 return args
}
export const enforcePublication:CollectionBeforeChangeHook=async({data,originalDoc,req,collection,context,operation})=>{
 const kind=collection.slug as 'pages'|'implementations'
 // Trusted bootstrap/import scripts are separate from authenticated editorial operations.
 if(!req.user){if(req.payloadAPI!=='local')throw new APIError('Anmeldung erforderlich.',403);return data}
 const system=kind==='pages'?relationID(data.designSystem??originalDoc?.designSystem):await componentSystem(req,data.componentPage??originalDoc?.componentPage)
 if(system===undefined)throw new APIError('Bitte ein Design-System zuordnen.',400)
 if(!hasSystemRole(req.user,system,'author'))throw new APIError('Keine Schreibrechte für dieses Design-System.',403)
 const publisher=hasSystemRole(req.user,system,'publisher')
 const intent=(context[intentKey(collection.slug,originalDoc?.id??data.id)]??context[intentKey(collection.slug,'new')]) as any
 if(context.isRestoringVersion&&intent?.draft)data._status='draft'
 if(!publisher&&(operation==='update'&&!intent?.draft||data._status==='published'))throw new APIError('Autoren dürfen nur Entwürfe speichern. Verwende „Entwurf speichern“ bzw. draft=true.',403)
 const ownerField=kind==='pages'?'designSystem':'componentPage'
 if(originalDoc?.[ownerField]&&Object.hasOwn(data,ownerField)&&relationID(data[ownerField])!==relationID(originalDoc[ownerField]))throw new APIError('Die System- bzw. Komponentenzuordnung einer bestehenden Seite darf nicht verändert werden.',403)
 const merged={...originalDoc,...data},hash=contentHash(kind,merged),changed=Boolean(context.isRestoringVersion)||!originalDoc||hash!==contentHash(kind,originalDoc)
 const metadata={...originalDoc?.publication,contentHash:hash}
 const stateField='editorialStatus'
 let state=data[stateField]??originalDoc?.[stateField]??'draft'
 if(changed){state=['clarify','review'].includes(state)?state:'draft';metadata.reviewedHash=null;metadata.reviewedBy=null;metadata.reviewedAt=null;metadata.publishedBy=null;metadata.publishedAt=null}
 else if(state==='checked'&&(originalDoc?.[stateField]!=='checked'||metadata.reviewedHash!==hash)){
  if(!publisher)throw new APIError('Nur Herausgeber dürfen eine Fassung freigeben.',403)
  metadata.reviewedHash=hash;metadata.reviewedBy=req.user.email??String(req.user.id);metadata.reviewedAt=new Date().toISOString()
 }
 if(!publisher&&state==='checked'&&originalDoc?.[stateField]!=='checked')throw new APIError('Nur Herausgeber dürfen eine Fassung freigeben.',403)
 const publishing=data._status==='published'||(!intent?.draft&&data._status==null&&originalDoc?._status==='published')
 if(publishing){
  if(!publisher)throw new APIError('Keine Veröffentlichungsrechte.',403)
  if(changed||state!=='checked'||metadata.reviewedHash!==hash)throw new APIError('Diese Fassung ist noch nicht freigegeben. Zuerst den Entwurf speichern, dann als Herausgeber „Geprüft“ setzen und erneut als Entwurf speichern.',400)
  metadata.publishedBy=req.user.email??String(req.user.id);metadata.publishedAt=new Date().toISOString()
 }
 data[stateField]=state;data.publication=metadata
 if(kind==='pages'){
  const targets:number[]=[]
  mapHomeTargets(data.homeTemplate??originalDoc?.homeTemplate,target=>{const id=relationID(target);if(id)targets.push(id);return target})
  for(const id of new Set(targets)){const page=await req.payload.findByID({collection:'pages',id,depth:0,draft:true,overrideAccess:true,req});if(relationID(page.designSystem)!==system||id===originalDoc?.id)throw new APIError('Startseitenlinks müssen auf andere Seiten desselben Design-Systems zeigen.',400)}
  if(Array.isArray(data.content))for(const block of data.content){
   if(block.blockType!=='guideline'||!block.image)continue
   const media=await req.payload.findByID({collection:'media',id:relationID(block.image)!,depth:0,overrideAccess:true,req})
   const legacy=!media.designSystem&&originalDoc?.content?.some((old:any)=>old.blockType==='guideline'&&relationID(old.image)===media.id)
   if(relationID(media.designSystem)!==system&&!legacy)throw new APIError('Bilder müssen zum selben Design-System gehören.',403)
  }
  const parent=relationID(data.parent??originalDoc?.parent)
  if(parent){const page=await req.payload.findByID({collection:'pages',id:parent,depth:0,draft:true,overrideAccess:true,req});if(relationID(page.designSystem)!==system||parent===originalDoc?.id)throw new APIError('Die übergeordnete Seite muss zum selben Design-System gehören.',400)}
 }
 return data
}
export const recordPublicationEvent:CollectionAfterChangeHook=async({doc,previousDoc,req,collection,context,operation})=>{
 if(!req.user)return doc
 const kind=collection.slug as 'pages'|'implementations'
 const intent=(context[intentKey(collection.slug,doc.id)]??context[intentKey(collection.slug,'new')]) as any
 const versions=await req.payload.findVersions({collection:kind,where:{and:[{parent:{equals:doc.id}},{latest:{equals:true}}]},limit:1,depth:0,overrideAccess:true,req})
 const stored=versions.docs[0]?.version as any
 if(!stored)throw new APIError('Versionsnachweis konnte nicht angelegt werden.',500)
 const hash=contentHash(kind,stored)
 const system=kind==='pages'?relationID(stored.designSystem):await componentSystem(req,stored.componentPage)
 if(stored.publication?.reviewedHash&&stored.publication.reviewedHash!==hash)throw new APIError('Der gespeicherte Inhalt weicht von der freigegebenen Fassung ab. Bitte erneut als Entwurf prüfen.',400)
 const action=intent?.operation==='restoreVersion'?'restored':doc._status==='published'?'published':!intent?.draft&&previousDoc?._status==='published'?'unpublished':doc.editorialStatus==='checked'&&doc.publication?.reviewedAt!==previousDoc?.publication?.reviewedAt?'approved':doc.editorialStatus==='review'&&previousDoc?.editorialStatus!=='review'?'review_requested':operation==='create'?'created':'edited'
 await req.payload.create({collection:'publication-events' as any,data:{designSystem:system,documentType:kind,documentID:doc.id,documentTitle:doc.title??doc.name??String(doc.id),versionID:versions.docs[0]?.id,contentHash:hash,action,actorID:req.user.id,actor:req.user.email??String(req.user.id)},overrideAccess:true,depth:0,req})
 return doc
}
