import {APIError,type CollectionConfig,type CollectionBeforeChangeHook,type Endpoint} from 'payload'
import {componentSystem,hasSystemRole,isAdministrator,relationID,scope,systemIDs} from '../../access/permissions'
import {installedExports} from '../connector/registry.mjs'
import {getContract} from '../catalog'

export const ContractBindings:CollectionConfig={
 slug:'contract-bindings',labels:{singular:'Contract-Bibliothek',plural:'Contract-Bibliotheken'},
 admin:{group:'Erweiterungen',useAsTitle:'library',defaultColumns:['designSystem','library','defaultRevision'],description:'Optional: Installierte Bibliothek für ein Handbuch bereitstellen. Erst eine ausdrückliche Auswahl auf einer Seite stellt die Verknüpfung her. Änderungen am Standard verändern keine bestehenden Seiten.'},
 access:{
  read:({req})=>scope(req.user,'designSystem','author'),
  create:({req,data})=>data?.designSystem?hasSystemRole(req.user,data.designSystem,'publisher'):isAdministrator(req.user)||systemIDs(req.user,'publisher').length>0,
  update:({req})=>scope(req.user,'designSystem','publisher'),delete:({req})=>scope(req.user,'designSystem','publisher'),
 },
 indexes:[{fields:['designSystem','library'],unique:true}],
 hooks:{beforeChange:[async({data,originalDoc,req})=>{
  const system=relationID(data.designSystem??originalDoc?.designSystem)
  if(req.user&&!hasSystemRole(req.user,system,'publisher'))throw new APIError('Keine Berechtigung für diese Bibliothekszuordnung.',403)
  if(originalDoc?.id&&data.designSystem&&relationID(data.designSystem)!==relationID(originalDoc.designSystem))throw new APIError('Die Systemzuordnung darf nicht verändert werden.',400)
  const library=data.library??originalDoc?.library,revision=data.defaultRevision??originalDoc?.defaultRevision
  if(!installedExports().some((e:any)=>e.library===library&&e.revision===revision))throw new APIError('Bitte eine installierte Bibliothek und Revision wählen.',400)
  return data
 }]},
 fields:[
  {name:'designSystem',label:'Design-System',type:'relationship',relationTo:'design-systems',required:true},
  {name:'picker',type:'ui',admin:{components:{Field:{path:'/src/contracts/payload/contract-picker#ContractPicker',clientProps:{binding:true}}}}},
  {name:'library',label:'Bibliothek',type:'text',required:true,admin:{hidden:true}},
  {name:'defaultRevision',label:'Vorgeschlagene Revision',type:'text',required:true,admin:{hidden:true}},
 ],
}

export const validateContractReference:CollectionBeforeChangeHook=async({data,originalDoc,req,collection})=>{
 if(!req.user)return data // Explicitly trusted imports/bootstrap retain their original pins.
 const ref={...originalDoc?.contract,...data.contract}
 if(!Object.values(ref).some(Boolean))return data // Contracts are optional, including component pages.
 const keys=['library','revision','component'] as const
 if(!keys.every(key=>typeof ref[key]==='string'&&ref[key].trim()))throw new APIError('Contract vollständig auswählen oder die Zuordnung entfernen.',400)
 const changed=keys.some(key=>ref[key]!==originalDoc?.contract?.[key])
 if(!changed){
  if((data._status==='published'||data.editorialStatus==='checked')&&!getContract(ref))throw new APIError('Der verknüpfte Contract ist nicht verfügbar. Bitte das Paket vor der Freigabe bereitstellen.',400)
  return data // Disconnecting a library never invalidates an existing explicit pin.
 }
 const system=collection.slug==='pages'?relationID(data.designSystem??originalDoc?.designSystem):await componentSystem(req,data.componentPage??originalDoc?.componentPage)
 if(!hasSystemRole(req.user,system,'author'))throw new APIError('Keine Schreibrechte für dieses Design-System.',403)
 const bindings=await req.payload.find({collection:'contract-bindings',where:{and:[{designSystem:{equals:system}},{library:{equals:ref.library}}]},limit:1,depth:0,overrideAccess:true,req})
 if(!bindings.docs.length)throw new APIError('Diese Contract-Bibliothek ist nicht mit dem Design-System verbunden.',400)
 if(!getContract(ref))throw new APIError('Die ausgewählte Komponente ist in dieser Bibliotheksrevision nicht vorhanden.',400)
 return data
}

export const connectorOptions:Endpoint={path:'/contract-connector/options',method:'get',handler:async req=>{
 if(!req.user)throw new APIError('Anmeldung erforderlich.',403)
 const url=new URL(req.url!),binding=url.searchParams.get('mode')==='binding'
 const systemParam=url.searchParams.get('system'),pageParam=url.searchParams.get('page')
 if(systemParam&&!/^\d+$/.test(systemParam)||pageParam&&!/^\d+$/.test(pageParam))throw new APIError('Ungültige Zuordnung.',400)
 const system=systemParam?Number(systemParam):pageParam?await componentSystem(req,Number(pageParam)):undefined
 if(!system||!hasSystemRole(req.user,system,binding?'publisher':'author'))throw new APIError('Keine Berechtigung für dieses Design-System.',403)
 const bindings=await req.payload.find({collection:'contract-bindings',where:{designSystem:{equals:system}},pagination:false,depth:0,overrideAccess:true,req})
 const libraries=new Set(bindings.docs.map(b=>b.library))
 const all=installedExports(),exports=binding?all:all.filter((e:any)=>libraries.has(e.library))
 return Response.json({exports,bindings:bindings.docs.map(b=>({library:b.library,defaultRevision:b.defaultRevision})),optional:true},{headers:{'Cache-Control':'private, no-store'}})
}}
