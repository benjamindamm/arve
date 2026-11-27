import {transactionLock} from '../access/transaction-lock'
import {APIError,type CollectionConfig} from 'payload'
import {administrators,isAdministrator,relationID,systemRoles} from '../access/permissions'
export const Users:CollectionConfig={
 slug:'users',labels:{singular:'Benutzer',plural:'Benutzer'},auth:{useAPIKey:true},
 admin:{useAsTitle:'email',defaultColumns:['email','isAdministrator']},
 access:{
  admin:({req})=>!!req.user,
  create:administrators,
  read:({req})=>isAdministrator(req.user)?true:req.user?{id:{equals:req.user.id}}:false,
  update:({req})=>isAdministrator(req.user)?true:req.user?{id:{equals:req.user.id}}:false,
  delete:({req,id})=>isAdministrator(req.user)&&req.user?.id!==id,
 },
 hooks:{beforeChange:[async({data,originalDoc,req,operation})=>{
  await transactionLock(req,198734,1002)
  if(req.user){
   const actor=await req.payload.findByID({collection:'users',id:req.user.id,depth:0,overrideAccess:true,req})
   if(!actor.isAdministrator&&(operation==='create'||req.user.id!==originalDoc?.id))throw new APIError('Keine Berechtigung zur Benutzerverwaltung.',403)
   if(!actor.isAdministrator){data.isAdministrator=originalDoc?.isAdministrator;data.memberships=originalDoc?.memberships}
  }
  if(operation==='create'){
   const users=await req.payload.count({collection:'users',overrideAccess:true,req})
   if(users.totalDocs===0)data.isAdministrator=true
  }
  if(originalDoc?.isAdministrator&&data.isAdministrator===false){
   if(req.user?.id===originalDoc.id)throw new APIError('Die eigene Administratorberechtigung kann nicht entfernt werden.',403)
   const others=await req.payload.count({collection:'users',overrideAccess:true,req,where:{and:[{isAdministrator:{equals:true}},{id:{not_equals:originalDoc.id}}]}})
   if(!others.totalDocs)throw new APIError('Mindestens ein Administrator muss erhalten bleiben.',403)
  }
  const memberships=data.memberships??originalDoc?.memberships??[]
  const ids=memberships.map((m:any)=>relationID(m.designSystem))
  if(ids.some((id:any)=>!id)||new Set(ids).size!==ids.length)throw new APIError('Jedes Design-System darf nur einmal zugewiesen sein.',400)
  return data
 }],beforeDelete:[async({id,req})=>{
  await transactionLock(req,198734,1002)
  if(req.user?.id===id)throw new APIError('Das eigene Konto kann nicht gelöscht werden.',403)
  if(req.user){const actor=await req.payload.findByID({collection:'users',id:req.user.id,depth:0,overrideAccess:true,req});if(!actor.isAdministrator)throw new APIError('Keine Berechtigung zur Benutzerverwaltung.',403)}
  const user=await req.payload.findByID({collection:'users',id,depth:0,overrideAccess:true,req})
  if(user.isAdministrator){const others=await req.payload.count({collection:'users',overrideAccess:true,req,where:{and:[{isAdministrator:{equals:true}},{id:{not_equals:id}}]}});if(!others.totalDocs)throw new APIError('Der letzte Administrator kann nicht gelöscht werden.',403)}
 }]},
 fields:[
  {name:'isAdministrator',label:'Arve-Administrator',type:'checkbox',defaultValue:false,access:{create:({req})=>isAdministrator(req.user),update:({req})=>isAdministrator(req.user)},admin:{description:'Verwaltet Benutzer und alle Design-Systeme. Nur Administratoren dürfen diese Berechtigung vergeben.'}},
  {name:'memberships',label:'Rechte pro Design-System',type:'array',access:{create:({req})=>isAdministrator(req.user),update:({req})=>isAdministrator(req.user)},fields:[
   {name:'designSystem',label:'Design-System',type:'relationship',relationTo:'design-systems',required:true},
   {name:'role',label:'Rolle',type:'select',options:[...systemRoles],required:true,defaultValue:'reader'},
  ]},
 ],
}
