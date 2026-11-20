import {access} from 'node:fs/promises'
import {resolve} from 'node:path'
import {pathToFileURL} from 'node:url'
/** Presentation reworks supersede historical release copy; pins remain independent. */
export async function currentPage<T extends {slug:string}>(original:T):Promise<T>{
 const section=original.slug.replace(/^shadcn-/,'')
 const filename=resolve('scripts/content/page-reworks',section+'.ts')
 try{await access(filename)}catch{return original}
 const {release}=await import(pathToFileURL(filename).href)
 return {...original,...release}
}
