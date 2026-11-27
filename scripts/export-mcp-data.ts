import {readFile,mkdir,writeFile} from 'node:fs/promises'
import path from 'node:path'
import {createHash} from 'node:crypto'
import {liveProvider as source} from '../src/mcp/live-provider'
import {documentationData} from '../src/docs/documentation-data'
import {sectionSlug} from '../src/docs/systems'
import {legacyLayoutSections} from '../src/docs/handbook-paths'
import {layoutExamples} from '../src/docs/layout-metadata'
import {registeredSkillPackages} from '../src/contracts/library-skills'

const sha=(bytes:string|Uint8Array)=>createHash('sha256').update(bytes).digest('hex')
/** Materialize exactly the published read model. Same snapshot adapter as static HTML. No credentials or CMS records. */
export async function exportMcpData(output:string,emitAsset?:(name:string,bytes:Uint8Array)=>Promise<void>){
 const files:Record<string,{sha256:string;bytes:number;sitePath?:string}>={}
 const pending=new Map<string,Buffer>()
 const json=(value:unknown)=>Buffer.from(JSON.stringify(value))
 const put=(value:unknown)=>{
  const bytes=json(value),digest=sha(bytes),name=`objects/${digest}.json`
  pending.set(name,bytes);files[name]={sha256:digest,bytes:bytes.length};return name
 }
 const systems=await source.listSystems(),data=await documentationData()
 const index:any={systems:put(systems.map(({slug,name})=>({slug,name}))),documentation:{},components:{},trees:{},search:{},mappings:put(await Promise.all(systems.map(s=>data.pages(s))).then(rows=>rows.flatMap((pages,i)=>pages.filter(p=>p.component&&p.contract?.library).map(p=>({system:systems[i].slug,component:p.component,title:p.title,contractReference:p.contract,read:{tool:'get_component_page',arguments:{system:systems[i].slug,component:p.component}}}))).sort((a,b)=>a.system.localeCompare(b.system)||a.component!.localeCompare(b.component!)))),authoring:put(await source.authoringSkills()),libraries:{},skillResources:{},artifacts:{},colorReview:put(await source.colorReviewHtml())}
 for(const system of systems){
  const tree=await source.documentationTree(system.slug)
  if(!tree)throw Error('Missing published tree')
  index.trees[system.slug]=put(tree.tree);index.search[system.slug]=put(tree.searchDocuments)
  const docs:Record<string,string>={},components:Record<string,string>={}
  for(const page of await data.pages(system)){
   if(page.component){
    const model=await source.getComponentPage(system.slug,page.component)
    if(!model)throw Error('Missing published component')
    components[page.component]=put(model)
    if(model.contract)for(const file of model.contractArtifacts){
     const artifactKey=JSON.stringify([model.contract.library,model.contract.revision,file.path])
     if(index.artifacts[artifactKey])continue
     // All registered bytes, including binary previews, remain independently readable.
     const {contractArtifactPath}=await import('../src/contracts/catalog')
     const filename=contractArtifactPath(model.contract,file.path)
     const bytes=model.contract.files[file.path]?Buffer.from(model.contract.files[file.path].content):filename?await readFile(filename):undefined
     if(!bytes||sha(bytes)!==file.sha256)throw Error('Invalid published artifact: '+file.path)
     const name=`blobs/${file.sha256}`,sitePath=`contracts/${model.contract.library}/${model.contract.revision}/${file.path}`
     // Reuse the portal's immutable contract downloads instead of copying binary assets twice.
     if(!files[name])files[name]={sha256:file.sha256,bytes:bytes.length,sitePath}
     index.artifacts[artifactKey]=name
     if(emitAsset)await emitAsset(sitePath,bytes)
     else{await mkdir(path.dirname(path.join(output,sitePath)),{recursive:true});await writeFile(path.join(output,sitePath),bytes)}
    }
   }else{
    const section=sectionSlug(system.slug,page.slug),model=await source.getDocumentationPage(system.slug,section)
    if(!model)throw Error('Missing published page: '+section)
    docs[section]=put(model)
    docs[model.path.slice(`/systems/${system.slug}/`.length)]=docs[section]
   }
  }
  for(const alias of Object.keys(legacyLayoutSections)){
   const model=await source.getDocumentationPage(system.slug,alias)
   if(model)docs[alias]=put(model)
  }
  for(const example of layoutExamples){const model=await source.getDocumentationPage(system.slug,'layout',example.id);if(model)docs[`layout?example=${example.id}`]=put(model)}
  index.documentation[system.slug]=docs;index.components[system.slug]=components
 }
 // Export only allowlisted portable skill resources, not source repositories.
 for(const library of [...new Set(registeredSkillPackages().map(p=>p.library))]){
  const inventory=await source.listLibrarySkills(library)
  const compact=[]
  for(let offset=0;offset<inventory.exports.length;offset+=3)compact.push(await source.compactLibrarySkills(library,undefined,offset,3))
  index.libraries[library]=put({inventory,compactExports:compact.flatMap(p=>p.exports),usage:compact[0]?.usage})
  for(const item of inventory.exports)for(const skill of item.skills)for(const resource of skill.resources){
   const key=JSON.stringify([library,item.revision,skill.id,resource.resourcePath])
   index.skillResources[key]=put(await source.getLibrarySkill(library,item.revision,skill.id,resource.resourcePath))
  }
 }
 const manifest={format:'arve-static-mcp/v1',index,files}
 const manifestBytes=json(manifest),release=sha(manifestBytes),prefix=`arve-data/releases/${release}`
 const emit=async(name:string,bytes:Buffer)=>{if(emitAsset)await emitAsset(name,bytes);else{await mkdir(path.dirname(path.join(output,name)),{recursive:true});await writeFile(path.join(output,name),bytes)}}
 for(const [name,bytes]of pending)await emit(`${prefix}/${name}`,bytes)
 await emit(`${prefix}/manifest.json`,manifestBytes)
 // Written last. Clients pin this immutable release for the lifetime of their session.
 await emit('arve-data/current.json',json({format:'arve-static-mcp/v1',release,manifest:`releases/${release}/manifest.json`,sha256:release}))
 return {release,resources:Object.keys(files).length,systems:systems.length,components:Object.values(index.components).reduce((n:number,rows:any)=>n+Object.keys(rows).length,0)}
}
