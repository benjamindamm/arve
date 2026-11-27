/** Live artifact adapter; pure projections are shared with the standalone MCP package. */
import {constants} from 'node:fs'
import {lstat,open,realpath} from 'node:fs/promises'
import {contractArtifactPath} from '../contracts/catalog'
import {componentFile as readFile,ReadError} from './mcp-model'
import type {getComponentPage} from './component-pages'
export * from './mcp-model'
export async function componentFile(page:NonNullable<Awaited<ReturnType<typeof getComponentPage>>>,name:string,expectedHash?:string){
 return readFile(page,name,expectedHash,async(page,name)=>{
  const filename=page.contract&&contractArtifactPath(page.contract,name)
  if(!filename)throw new ReadError('FILE_UNAVAILABLE','Registered file is unavailable.')
  if(await realpath(filename)!==filename||!(await lstat(filename)).isFile())throw new ReadError('UNSAFE_FILE','Registered file is unsafe.')
  const handle=await open(filename,constants.O_RDONLY|constants.O_NOFOLLOW)
  try{return await handle.readFile()}finally{await handle.close()}
 })
}
