import type {Access,PayloadRequest,Where} from 'payload'
export const systemRoles=[{value:'reader',label:'Leser'},{value:'author',label:'Autor'},{value:'publisher',label:'Herausgeber'}] as const
export type SystemRole=typeof systemRoles[number]['value']
const rank:Record<SystemRole,number>={reader:0,author:1,publisher:2}
export function relationID(value:any):number|undefined{const id=typeof value==='object'&&value?value.id:value;return typeof id==='number'?id:undefined}
export function isAdministrator(user:any):boolean{return user?.collection==='users'&&user.isAdministrator===true}
export function systemIDs(user:any,minimum:SystemRole):number[]{
 if(!user||user.collection!=='users')return[]
 return [...new Set<number>((user.memberships??[]).filter((m:any)=>m.role in rank&&rank[m.role as SystemRole]>=rank[minimum]).map((m:any)=>relationID(m.designSystem)).filter((id:any)=>typeof id==='number'))]
}
export function hasSystemRole(user:any,system:any,minimum:SystemRole){const id=relationID(system);return isAdministrator(user)||(id!==undefined&&systemIDs(user,minimum).includes(id))}
export const administrators:Access=({req})=>isAdministrator(req.user)
export function scope(user:any,path:string,minimum:SystemRole):boolean|Where{if(isAdministrator(user))return true;const ids=systemIDs(user,minimum);return ids.length?{[path]:{in:ids}}:false}
export function pageRead(user:any,path='designSystem'):boolean|Where{
 if(isAdministrator(user))return true
 const ids=systemIDs(user,'author')
 return ids.length?{or:[{_status:{equals:'published'}},{[path]:{in:ids}}]}:{_status:{equals:'published'}}
}
export const pageAccess={
 read:(({req})=>pageRead(req.user)) as Access,
 create:(({req,data})=>data?.designSystem?hasSystemRole(req.user,data.designSystem,data?._status==='published'?'publisher':'author'):isAdministrator(req.user)||systemIDs(req.user,'author').length>0) as Access,
 update:(({req,data})=>scope(req.user,'designSystem',data?._status==='published'?'publisher':'author')) as Access,
 delete:(({req})=>scope(req.user,'designSystem','publisher')) as Access,
 readVersions:(({req})=>scope(req.user,'version.designSystem','author')) as Access,
}
export async function componentSystem(req:PayloadRequest,value:any){
 const id=relationID(value);if(!id)return undefined
 const page=await req.payload.findByID({collection:'pages',id,depth:0,draft:true,overrideAccess:true,disableErrors:true,req})
 return relationID(page?.designSystem)
}
export const implementationAccess={
 read:(({req})=>pageRead(req.user,'componentPage.designSystem')) as Access,
 create:(async({req,data})=>data?.componentPage?hasSystemRole(req.user,await componentSystem(req,data.componentPage),data?._status==='published'?'publisher':'author'):isAdministrator(req.user)||systemIDs(req.user,'author').length>0) as Access,
 update:(({req,data})=>scope(req.user,'componentPage.designSystem',data?._status==='published'?'publisher':'author')) as Access,
 delete:(({req})=>scope(req.user,'componentPage.designSystem','publisher')) as Access,
 readVersions:(({req})=>scope(req.user,'version.componentPage.designSystem','author')) as Access,
}
