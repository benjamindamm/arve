/** One-time, read-only capture; only the public shadcn handbook is allowlisted. */
import { getPayload } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { writeFile, mkdir, copyFile, readFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import config from '../src/payload.config'
import { completeRevision } from './content/shadcn-complete'
const c=await config;c.db={...postgresAdapter({pool:{connectionString:process.env.DATABASE_URI},push:false}),allowIDOnCreate:false,name:'postgres'}
const p=await getPayload({config:c})
const clean=(x:any):any=>Array.isArray(x)?x.map(clean):x&&typeof x==='object'?Object.fromEntries(Object.entries(x).filter(([k,v])=>!['id','createdAt','updatedAt'].includes(k)&&v!=null).map(([k,v])=>[k,clean(v)])):x
const pick=(x:any,keys:string[])=>clean(Object.fromEntries(keys.filter(k=>x[k]!=null).map(k=>[k,x[k]])))
try{
 const {docs:[system]}=await p.find({collection:'design-systems',where:{slug:{equals:'shadcn'}},depth:0,limit:1})
 if(!system)throw Error('shadcn missing')
 const {docs:pages}=await p.find({collection:'pages',where:{and:[{designSystem:{equals:system.id}},{_status:{equals:'published'}}]},depth:0,pagination:false,draft:false})
 const ids=new Map(pages.map(d=>[d.id,d.slug]));const mediaIDs=new Set<number>();
 const pageData=pages.map((d:any)=>{const row=pick(d,['title','system','pageType','template','order','summary','component','contract','demo','slug','content','_status']);if(d.parent){if(!ids.has(d.parent))throw Error('External parent');row.parent=ids.get(d.parent)}
 for(const b of row.content??[])if(b.blockType==='guideline'&&b.image)mediaIDs.add(b.image)
 return row}).sort((a,b)=>a.slug.localeCompare(b.slug))
 await mkdir('scripts/content/handbook-snapshot-media',{recursive:true})
 const media=[];for(const id of mediaIDs){const d=await p.findByID({collection:'media',id,depth:0});const bytes=await readFile('media/'+d.filename);await copyFile('media/'+d.filename,'scripts/content/handbook-snapshot-media/'+d.filename);media.push({key:d.filename,alt:d.alt,sha256:createHash('sha256').update(bytes).digest('hex')});for(const page of pageData)for(const b of page.content??[])if(b.blockType==='guideline'&&b.image===id)b.image=d.filename}
 const {docs:implementations}=await p.find({collection:'implementations',depth:0,pagination:false,draft:false,where:{and:[{componentPage:{in:[...ids.keys()]}},{_status:{equals:'published'}}]}})
 const revision=completeRevision
 const impl=implementations.map((d:any)=>({...pick(d,['name','platform','releaseStatus','packageName','packageVersion','owner','contexts','contract','verification','_status']),componentPage:ids.get(d.componentPage)}))
 const snapshot={format:1,sourceCommit:execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),capturedAt:new Date().toISOString(),contractRevision:revision,system:{...pick(system,['name','slug','description','theme']),home:ids.get(system.home as number)},pages:pageData,implementations:impl,media}
 await writeFile('scripts/content/handbook-snapshot.json',JSON.stringify(snapshot,null,2)+'\n');console.log(JSON.stringify({pages:pages.length,implementations:impl.length,media:media.length,sourceCommit:snapshot.sourceCommit}))
}finally{await p.destroy()}
process.exit(0)
