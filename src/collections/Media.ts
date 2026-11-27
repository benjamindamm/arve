import {APIError,type CollectionConfig,type PayloadRequest,type Where} from 'payload'
import {hasSystemRole,scope,systemIDs,isAdministrator} from '../access/permissions'
async function referencedImages(req:PayloadRequest){
 const {docs}=await req.payload.find({collection:'pages',draft:false,depth:0,pagination:false,overrideAccess:true,req,select:{content:true},where:{_status:{equals:'published'}}})
 const ids=new Set<number>();for(const page of docs)for(const block of page.content??[])if(block.blockType==='guideline'&&typeof block.image==='number')ids.add(block.image)
 return [...ids]
}
export const Media:CollectionConfig={
 slug:'media',
 access:{
  read:async({req}):Promise<boolean|Where>=>{
   if(isAdministrator(req.user))return true
   const published=await referencedImages(req),own=systemIDs(req.user,'author')
   return own.length?{or:[{id:{in:published}},{designSystem:{in:own}}]}:published.length?{id:{in:published}}:false
  },
  create:({req,data})=>data?.designSystem?hasSystemRole(req.user,data.designSystem,'author'):isAdministrator(req.user)||systemIDs(req.user,'author').length>0,
  update:({req})=>scope(req.user,'designSystem','author'),
  delete:({req})=>scope(req.user,'designSystem','publisher'),
 },
 hooks:{beforeChange:[async({data,originalDoc,req,operation})=>{
  if(req.user&&!data.designSystem&&!originalDoc?.designSystem)throw new APIError('Bitte ein Design-System für die Datei wählen.',400)
  if(req.user&&!hasSystemRole(req.user,data.designSystem??originalDoc?.designSystem,'author'))throw new APIError('Keine Schreibrechte für dieses Design-System.',403)
  if(req.user&&originalDoc?.designSystem&&data.designSystem&&data.designSystem!==originalDoc.designSystem)throw new APIError('Die Systemzuordnung einer Datei darf nicht verändert werden.',403)
  if(req.user&&operation==='update'&&(await referencedImages(req)).includes(originalDoc?.id))throw new APIError('Diese Datei wird veröffentlicht verwendet. Lade eine neue Datei hoch und ändere die Seite zunächst als Entwurf.',400)
  return data
 }],beforeDelete:[async({id,req})=>{if(req.user&&(await referencedImages(req)).includes(Number(id)))throw new APIError('Die Datei wird noch von einer veröffentlichten Seite verwendet.',400)}]},
 upload:{staticDir:'media',mimeTypes:['image/*']},
 fields:[{name:'designSystem',label:'Design-System',type:'relationship',relationTo:'design-systems',index:true},{name:'alt',label:'Alternativtext',type:'text',required:true}],
}
