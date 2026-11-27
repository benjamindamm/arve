import {createHash} from 'node:crypto'
import {z} from 'zod'
import type {HandbookProvider} from '../../../src/mcp/server'
import {ReadError,componentFile} from '../../../src/docs/mcp-model'
import {LibrarySkillError} from '../../../src/contracts/skill-error'
import {searchDocuments} from '../../../src/docs/documentation-search'
const hash=(bytes:Uint8Array)=>createHash('sha256').update(bytes).digest('hex')
const hex=z.string().regex(/^[a-f0-9]{64}$/)
const pointerSchema=z.object({format:z.literal('arve-static-mcp/v1'),release:hex,manifest:z.string(),sha256:hex})
const manifestSchema=z.object({format:z.literal('arve-static-mcp/v1'),index:z.record(z.string(),z.any()),files:z.record(z.string(),z.object({sha256:hex,bytes:z.number().int().min(0).max(32*1024*1024),sitePath:z.string().optional()}))})
const validPath=(name:string)=>!!name&&!/[\\\0:%?#]/.test(name)&&name.split('/').every(p=>!!p&&p!=='.'&&p!=='..')
const own=(object:any,key:string)=>object&&Object.hasOwn(object,key)?object[key]:undefined
const key=(...values:string[])=>JSON.stringify(values)
export function normalizeBaseUrl(input:string){
 const url=new URL(input)
 if(!['https:','http:'].includes(url.protocol)||url.username||url.password||url.search||url.hash)throw Error('Use an HTTP(S) site root without credentials, query or fragment.')
 if(url.pathname.endsWith('/mcp')||url.pathname.endsWith('/mcp/'))throw Error('Use the static site root, not /mcp.')
 if(!url.pathname.endsWith('/'))url.pathname+='/'
 return url.href
}
/** One client session pins one release. Only manifest-listed, hash-verified resources are fetched. */
export async function staticProvider(input:string):Promise<{provider:HandbookProvider;release:string;baseUrl:string}>{
 const baseUrl=normalizeBaseUrl(input)
 async function fetchBytes(url:URL,max:number){
  const response=await fetch(url,{redirect:'error',signal:AbortSignal.timeout(20000),headers:{Accept:'application/json, text/plain, application/octet-stream'}})
  if(!response.ok||!response.body)throw new ReadError('STATIC_UNAVAILABLE','Published export resource is unavailable. Reconnect after deployment.')
  const length=Number(response.headers.get('content-length'))
  if(length>max){await response.body.cancel();throw new ReadError('RESOURCE_TOO_LARGE','Published resource exceeds the size limit.')}
  const reader=response.body.getReader(),chunks:Uint8Array[]=[];let total=0
  try{for(;;){const item=await reader.read();if(item.done)break;total+=item.value.length;if(total>max)throw new ReadError('RESOURCE_TOO_LARGE','Published resource exceeds the size limit.');chunks.push(item.value)}}finally{await reader.cancel()}
  return Buffer.concat(chunks)
 }
 const pointer=pointerSchema.parse(JSON.parse((await fetchBytes(new URL('arve-data/current.json',baseUrl),1024*1024)).toString('utf8')))
 if(pointer.sha256!==pointer.release||pointer.manifest!==`releases/${pointer.release}/manifest.json`)throw new ReadError('INVALID_MANIFEST','Invalid release pointer.')
 const manifestBytes=await fetchBytes(new URL(`arve-data/${pointer.manifest}`,baseUrl),16*1024*1024)
 if(hash(manifestBytes)!==pointer.sha256)throw new ReadError('HASH_MISMATCH','Published manifest failed SHA256 verification.')
 const manifest=manifestSchema.parse(JSON.parse(manifestBytes.toString('utf8')))
 for(const [name,file] of Object.entries(manifest.files))if(!validPath(name)||(file.sitePath&&(!validPath(file.sitePath)||!/^contracts\/[a-z][a-z0-9-]*\/[a-f0-9]{64}\//.test(file.sitePath))))throw new ReadError('INVALID_MANIFEST','Unsafe resource path.')
 const index=manifest.index,cache=new Map<string,Buffer>();let cacheBytes=0
 async function bytes(name:string){
  const descriptor=own(manifest.files,name)
  if(!descriptor||!validPath(name))throw new ReadError('UNKNOWN_RESOURCE','Resource is not listed in the pinned manifest.')
  const previous=cache.get(name);if(previous)return previous
  const value=await fetchBytes(new URL(descriptor.sitePath??`arve-data/releases/${pointer.release}/${name}`,baseUrl),32*1024*1024)
  if(value.length!==descriptor.bytes||hash(value)!==descriptor.sha256)throw new ReadError('HASH_MISMATCH','Published resource failed SHA256 verification.')
  if(cacheBytes+value.length>64*1024*1024){cache.clear();cacheBytes=0}
  cache.set(name,value);cacheBytes+=value.length;return value
 }
 async function read(name:string){return JSON.parse((await bytes(name)).toString('utf8'))}
 async function libraryData(library:string){const ref=own(index.libraries,library);if(!ref)throw new LibrarySkillError('UNKNOWN_LIBRARY','Unknown contract library.');return read(ref)}
 const provider:HandbookProvider={
  listSystems:()=>read(index.systems),
  authoringSkills:()=>read(index.authoring),
  colorReviewHtml:()=>read(index.colorReview),
  documentationTree:async(system)=>{
   const ref=own(index.trees,system);if(!ref)return null
   return {tree:await read(ref),searchDocuments:await read(own(index.search,system)),searchText:new Map()}
  },
  searchDocumentationDetailed:async(system,query,limit,offset=0)=>{const ref=own(index.search,system);return ref?searchDocuments(await read(ref),system,query,limit,offset):null},
  getDocumentationPage:async(system,section,example)=>{const ref=own(own(index.documentation,system),example?`${section}?example=${example}`:section);return ref?read(ref):null},
  getComponentPage:async(system,component)=>{const ref=own(own(index.components,system),component);return ref?read(ref):null},
  findContractPages:async({library,component,revision,system})=>(await read(index.mappings)).filter((row:any)=>row.contractReference.library===library&&(!component||row.contractReference.component===component)&&(!revision||row.contractReference.revision===revision)&&(!system||row.system===system)),
  listLibrarySkills:async(library,revision)=>{
   const {inventory}=await libraryData(library)
   if(revision&&!inventory.exports.some((e:any)=>e.revision===revision))throw new LibrarySkillError('UNKNOWN_REVISION','Unknown export revision.')
   return {...inventory,exports:inventory.exports.filter((e:any)=>!revision||e.revision===revision)}
  },
  compactLibrarySkills:async(library,revision,offset=0,limit=1)=>{
   const {compactExports,usage}=await libraryData(library)
   if(revision&&!compactExports.some((e:any)=>e.revision===revision))throw new LibrarySkillError('UNKNOWN_REVISION','Unknown export revision.')
   const all=compactExports.filter((e:any)=>!revision||e.revision===revision)
   if(offset>all.length)throw new ReadError('INVALID_RANGE','Offset exceeds export inventory.')
   const exports=all.slice(offset,offset+limit),nextOffset=offset+exports.length<all.length?offset+exports.length:null
   return {library,view:'compact',exports,usage,pagination:{offset,limit,total:all.length,nextOffset},omissions:[...(nextOffset!==null||offset>0?['Other registered exports; paginate or select an explicit revision.']:[]),'Component bindings are summarized; follow each pinned library index for the complete inventory.'],...(nextOffset!==null?{next:{tool:'list_library_skills',arguments:{library,...(revision?{revision}:{}),offset:nextOffset,limit}}}:{})}
  },
  getLibrarySkill:async(library,revision,skill,resourcePath)=>{
   const {inventory}=await libraryData(library),item=inventory.exports.find((e:any)=>e.revision===revision)
   if(!item)throw new LibrarySkillError('UNKNOWN_REVISION','Unknown export revision.')
   const selected=item.skills.find((s:any)=>s.id===skill)
   if(!selected)throw new LibrarySkillError('UNKNOWN_SKILL','Unknown portable skill.')
   const requested=resourcePath??selected.mainResourcePath
   if(!validPath(requested))throw new LibrarySkillError('INVALID_RESOURCE_PATH','Use an exact allowlisted resource path.')
   const ref=own(index.skillResources,key(library,revision,skill,requested))
   if(!ref)throw new LibrarySkillError('UNKNOWN_RESOURCE','Resource is not allowlisted for this skill.')
   return read(ref)
  },
  componentFile:async(page,name,expected)=>componentFile(page,name,expected,async(page,name)=>{
   const ref=own(index.artifacts,key(page.contract!.library,page.contract!.revision,name))
   if(!ref)throw new ReadError('UNKNOWN_FILE','Artifact is not exported.')
   return bytes(ref)
  }),
 }
 return {provider,release:pointer.release,baseUrl}
}
