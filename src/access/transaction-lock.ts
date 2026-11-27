import {sql} from '@payloadcms/db-postgres'
import {APIError,type PayloadRequest} from 'payload'
/** Serialize changes before reading authority/content. The lock ends with Payload's transaction. */
export async function transactionLock(req:PayloadRequest,namespace:number,key:number){
 const id=await req.transactionID
 const transaction=id&&(req.payload.db.sessions?.[String(id)]?.db as {execute:(query:unknown)=>Promise<unknown>}|undefined)
 if(!transaction)throw new APIError('Diese Änderung benötigt eine Datenbanktransaktion.',500)
 await transaction.execute(sql`select pg_advisory_xact_lock(${namespace}, ${key})`)
}
