import {APIError,headersWithCors,restoreVersionOperation,type Endpoint,type PayloadRequest} from 'payload'
/** Restore is deliberately separate from publishing, including Payload's version-view button. */
export async function restoreAsDraft(req:PayloadRequest,collection:'pages'|'implementations',id:number){
 if(!req.user)throw new APIError('Anmeldung erforderlich.',403)
 return restoreVersionOperation({collection:req.payload.collections[collection],id,draft:true,overrideAccess:false,req,depth:0})
}
export function restoreDraftEndpoint(collection:'pages'|'implementations'):Endpoint{
 return {path:'/versions/:id',method:'post',handler:async req=>{
  const id=String(req.routeParams?.id??'');if(!/^\d+$/.test(id))throw new APIError('Ungültige Versions-ID.',400)
  const result=await restoreAsDraft(req,collection,Number(id))
  return Response.json({...result,message:'Als Entwurf wiederhergestellt. Bitte erneut prüfen.'},{headers:headersWithCors({headers:new Headers(),req})})
 }}
}
