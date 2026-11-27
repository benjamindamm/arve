import {createHash} from 'node:crypto'
import {readFileSync,lstatSync,realpathSync,statSync} from 'node:fs'
import {mkdir,readFile,writeFile,rename,rm} from 'node:fs/promises'
import path from 'node:path'
import {randomUUID} from 'node:crypto'

export const registryFormat='arve-contract-registry/v1'
export const digest=value=>createHash('sha256').update(value).digest('hex')
export const defaultRegistryFile=()=>path.resolve(process.env.ARVE_CONTRACT_REGISTRY??path.join(process.cwd(),'src/contracts/registry.json'))
const canonical=value=>value&&typeof value==='object'&&!Array.isArray(value)?Object.fromEntries(Object.keys(value).sort().map(key=>[key,canonical(value[key])])):value
const id=/^[a-z][a-z0-9-]*$/,sha=/^[a-f0-9]{64}$/
export function validRelative(value){return typeof value==='string'&&value.length>0&&!/[\\\0]/.test(value)&&!path.posix.isAbsolute(value)&&value.split('/').every(p=>p&&p!=='.'&&p!=='..')}
export function registeredPath(root,relative){
 if(!validRelative(relative))throw Error('Invalid registered path')
 let current=path.resolve(root)
 for(const part of relative.split('/')){current=path.join(current,part);if(lstatSync(current).isSymbolicLink())throw Error('Registered symlinks are forbidden')}
 if(!realpathSync(current).startsWith(realpathSync(root)+path.sep))throw Error('Registered path escaped storage')
 return current
}
const registryCache=new Map(),catalogCache=new Map()
export function readRegistry(file=defaultRegistryFile()){
 let data,stamp
 try{stamp=lstatSync(file);if(stamp.isSymbolicLink())throw Error('Registry symlinks are forbidden');const cached=registryCache.get(file);if(cached?.mtime===stamp.mtimeMs&&cached.size===stamp.size)return cached.data;data=JSON.parse(readFileSync(file,'utf8'))}catch(e){if(e.code==='ENOENT')return {format:registryFormat,exports:[]};throw e}
 if(data.format!==registryFormat||!Array.isArray(data.exports))throw Error('Unsupported contract registry')
 const seen=new Set()
 for(const entry of data.exports){
  const key=entry.library+'/'+entry.revision
  if(!id.test(entry.library)||!sha.test(entry.revision)||!sha.test(entry.catalogSha256)||!validRelative(entry.catalog)||seen.has(key))throw Error('Invalid contract registry entry')
  for(const key of ['artifactRoot','packageRoot'])if(entry[key]!=null&&!validRelative(entry[key]))throw Error('Invalid contract storage path')
  if(!['portable','legacy-library','legacy-component'].includes(entry.kind))throw Error('Unsupported registered export kind')
  seen.add(key)
 }
 if(registryCache.size>16)registryCache.clear();registryCache.set(file,{mtime:stamp.mtimeMs,size:stamp.size,data});return data
}
export function readCatalog(entry,file=defaultRegistryFile()){
 const filename=registeredPath(path.dirname(file),entry.catalog),stamp=statSync(filename),key=filename+'#'+entry.catalogSha256
 const cached=catalogCache.get(key);if(cached?.mtime===stamp.mtimeMs&&cached.size===stamp.size)return cached.rows
 const bytes=readFileSync(/*turbopackIgnore: true*/ filename)
 if(digest(bytes)!==entry.catalogSha256)throw Error('Contract index integrity check failed')
 const parsed=JSON.parse(bytes.toString('utf8')),rows=Array.isArray(parsed)?parsed:[parsed]
 if(rows.some(c=>c.library!==entry.library||c.revision!==entry.revision||!id.test(c.component)))throw Error('Contract index identity mismatch')
 if(catalogCache.size>16)catalogCache.clear();catalogCache.set(key,{mtime:stamp.mtimeMs,size:stamp.size,rows});return rows
}
/** Atomically append an explicitly verified import. Concurrent imports fail without losing another registration. */
export async function registerExport(entry,file=defaultRegistryFile()){
 await mkdir(path.dirname(file),{recursive:true})
 const lock=file+'.lock';await mkdir(lock).catch(()=>{throw Error('Contract registry is locked; finish the other import first')})
 const tmp=file+'.'+randomUUID()+'.tmp'
 try{
  const data=readRegistry(file),existing=data.exports.find(e=>e.library===entry.library&&e.revision===entry.revision)
  if(existing){if(JSON.stringify(canonical(existing))!==JSON.stringify(canonical(entry)))throw Error('Registered revision differs; refusing overwrite');return false}
  const next={...data,exports:[...data.exports,entry]}
  await writeFile(tmp,JSON.stringify(next,null,2)+'\n',{flag:'wx'})
  // Validate the candidate and its index before making it visible.
  readRegistry(tmp);readCatalog(entry,tmp)
  await rename(tmp,file);return true
 }finally{await rm(tmp,{force:true});await rm(lock,{recursive:true,force:true})}
}
export function installedExports(file=defaultRegistryFile()){
 return readRegistry(file).exports.map(entry=>({library:entry.library,revision:entry.revision,kind:entry.kind,hasSkills:!!entry.packageRoot,components:readCatalog(entry,file).map(c=>({component:c.component,label:entry.labels?.[c.component]??c.label??c.component,status:c.status??'draft'}))}))
}
