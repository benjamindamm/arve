import assert from 'node:assert/strict'
import {mkdir,readFile,writeFile,rm} from 'node:fs/promises'
import {createHash} from 'node:crypto'
import path from 'node:path'
import pg from 'pg'
import {createLocalReq} from 'payload'
import {importContractLibrary} from './import-contract-library.mjs'
import {connect} from './bootstrap-handbook'
import {getContract,contractArtifactPath} from '../src/contracts/catalog'
import {listLibrarySkills,getLibrarySkill} from '../src/contracts/library-skills'
import {installedExports,readRegistry} from '../src/contracts/connector/registry.mjs'
import {findContractPages} from '../src/contracts/connector/documentation-mappings'
import {getComponentPage} from '../src/docs/component-pages'
import {connectorOptions} from '../src/contracts/payload/bindings'
import {uiContractsPlugin} from '../src/contracts/payload/plugin'
import {upgradeContractBindings} from './lib/contract-bindings-migration'
const uri=process.env.DATABASE_URI;assert(uri)
const schema='handbook_bootstrap_connector_'+Date.now()+'_'+process.pid
const root=path.resolve('.runtime',schema);await mkdir(root,{recursive:true})
process.env.ARVE_CONTRACT_REGISTRY=path.join(root,'registry.json')
const hash=(b:any)=>createHash('sha256').update(b).digest('hex')
async function fixture(state:string){
 const bundle=path.join(root,'input-'+state),files:Record<string,string|Buffer>={
  'library/library.json':JSON.stringify({name:'Independent controls',components:{'Primary Action':'components/press-action/component.json'}}),
  'library/components/press-action/component.json':JSON.stringify({status:'draft',domains:{interface:'interface.json',behavior:'behavior.scxml',visual:{css:'layout.css'},accessibility:'accessibility.html'}}),
  'library/components/press-action/interface.json':'{"name":"PressAction"}',
  'library/components/press-action/behavior.scxml':'<scxml initial="'+state+'"/>',
  'library/components/press-action/accessibility.html':'<button>Action</button>',
  'library/components/press-action/layout.css':'@import "../../fonts.css"; button{padding:12px}',
  'library/fonts.css':'@font-face{font-family:Demo;src:url("./font.woff2")}',
  'library/font.woff2':Buffer.from([0,1,2,255]),
  'skills/ui-contracts/SKILL.md':'# Reader\nRead the selected component.',
  'dependencies.json':'{}',
 }
 for(const [name,bytes]of Object.entries(files)){const f=path.join(bundle,name);await mkdir(path.dirname(f),{recursive:true});await writeFile(f,bytes)}
 const entries=Object.entries(files).map(([name,bytes])=>[name,hash(bytes)]).sort(([a],[b])=>Buffer.compare(Buffer.from(a),Buffer.from(b)))
 await writeFile(path.join(bundle,'manifest.json'),JSON.stringify({format:'ui-contracts-export/v1',library:'demo-controls',revision:hash(JSON.stringify(entries)),files:Object.fromEntries(entries)}))
 return bundle
}
let p:any
try{
 const bundle=await fixture('ready')
 const preview=await importContractLibrary(bundle,path.join(root,'libraries'),{compact:true,preview:true})
 assert.equal(preview.writes,false);assert.equal(readRegistry().exports.length,0)
 const imported=await importContractLibrary(bundle,path.join(root,'libraries'),{compact:true})
 assert.equal(installedExports()[0].components[0].label,'Primary Action')
 await rm(bundle,{recursive:true})
 const ref={library:'demo-controls',component:'press-action',revision:imported.revision}
 const contract=getContract(ref)!;assert(contract);assert(contract.files['components/press-action/behavior.scxml'].content.includes('ready'))
 assert.deepEqual(await readFile(contractArtifactPath(contract,'font.woff2')!),Buffer.from([0,1,2,255]))
 assert((await getLibrarySkill(ref.library,ref.revision,'ui-contracts')).content.includes('Reader'))
 assert.equal((await listLibrarySkills(ref.library,ref.revision)).exports[0].componentPages[0].component,'press-action')
 p=await connect(uri,schema,true)
 const admin=await p.create({collection:'users',data:{email:'admin@connector.test',password:'Temporary-password-12345'}})
 const system=await p.create({collection:'design-systems',data:{name:'Atlas',slug:'atlas'}})
 const other=await p.create({collection:'design-systems',data:{name:'Other',slug:'other'}})
 const user=async(role:string)=>p.create({collection:'users',data:{email:role+'@connector.test',password:'Temporary-password-12345',memberships:[{designSystem:system.id,role}]}})
 const author=await user('author'),publisher=await user('publisher')
 const call=(user:any,draft=true)=>({user:{...user,collection:'users'},overrideAccess:false,draft,depth:0})
 const optional=await p.create({collection:'pages',data:{title:'Ohne Contract',slug:'atlas-optional',designSystem:system.id,pageType:'component',component:'press-action'},...call(author)})
 await p.update({collection:'pages',id:optional.id,data:{editorialStatus:'checked'},...call(publisher)})
 await p.update({collection:'pages',id:optional.id,data:{_status:'published'},...call(publisher,false)})
 assert(!((await p.findByID({collection:'pages',id:optional.id})).contract?.component),'Same name must not create a mapping')
 await assert.rejects(p.create({collection:'pages',data:{title:'Not connected',slug:'atlas-unbound',designSystem:system.id,pageType:'component',component:'local',contract:ref},...call(author)}))
 await assert.rejects(p.create({collection:'contract-bindings',data:{designSystem:system.id,library:ref.library,defaultRevision:ref.revision},...call(author,false)}))
 const binding=await p.create({collection:'contract-bindings',data:{designSystem:system.id,library:ref.library,defaultRevision:ref.revision},...call(publisher,false)})
 const page=await p.create({collection:'pages',data:{title:'Schaltfläche',slug:'atlas-schaltflaeche',designSystem:system.id,pageType:'component',component:'schaltflaeche',contract:ref},...call(author)})
 assert.equal(page.component,'schaltflaeche');assert.equal(page.contract.component,'press-action')
 await p.update({collection:'pages',id:page.id,data:{editorialStatus:'checked'},...call(publisher)})
 await p.update({collection:'pages',id:page.id,data:{_status:'published'},...call(publisher,false)})
 const published=await p.findByID({collection:'pages',id:page.id,depth:0,draft:false})
 const next=await importContractLibrary(await fixture('updated'),path.join(root,'libraries'),{compact:true})
 await p.update({collection:'contract-bindings',id:binding.id,data:{defaultRevision:next.revision},...call(publisher,false)})
 assert.deepEqual(await p.findByID({collection:'pages',id:page.id,depth:0,draft:false}),published)
 await assert.rejects(p.update({collection:'pages',id:page.id,data:{contract:{...ref,component:'missing'}},...call(author)}))
 await assert.rejects(p.update({collection:'contract-bindings',id:binding.id,data:{designSystem:other.id},...call(publisher,false)}))
 const portal=await getComponentPage(system.slug,'schaltflaeche');assert.equal(portal?.contract?.component,'press-action')
 assert(portal!.contractArtifacts.every(a=>a.url.includes('/components/schaltflaeche/files')))
 const mappings=await findContractPages(ref)
 assert.equal(mappings.length,1);assert.equal(mappings[0].read.arguments.component,'schaltflaeche')
 const req:any=await createLocalReq({user:{...author,collection:'users'}},p);req.url='http://localhost/api/contract-connector/options?system='+system.id
 const options=await (await connectorOptions.handler(req)).json();assert.equal(options.exports.length,2)
 req.url='http://localhost/api/contract-connector/options?system='+other.id
 await assert.rejects(async()=>connectorOptions.handler(req))
 await p.delete({collection:'contract-bindings',id:binding.id,...call(publisher,false)})
 assert.deepEqual(await p.findByID({collection:'pages',id:page.id,depth:0,draft:false}),published)
 await p.update({collection:'pages',id:page.id,data:{title:'Schaltfläche überarbeitet'},...call(author)})
 await p.update({collection:'pages',id:page.id,data:{editorialStatus:'checked'},...call(publisher)})
 await p.update({collection:'pages',id:page.id,data:{_status:'published'},...call(publisher,false)})
 assert.equal((await p.findByID({collection:'pages',id:page.id,draft:false})).contract.revision,ref.revision)
 const c=new pg.Client({connectionString:uri});await c.connect();try{const result=await upgradeContractBindings(c,{schema,apply:true});assert.equal(result.bindingsAdded,1)}finally{await c.end()}
 const disabled=await uiContractsPlugin({enabled:false})({collections:[]} as any)
 assert.equal(disabled.collections?.length,0)
 console.log('PASS: generic second library, standalone assets/skills, optional contracts, explicit different-name mapping, scoped picker, unchanged published pages after import/default/disconnect, migration and optional plugin')
}finally{
 if(p)await p.destroy()
 const c=new pg.Client({connectionString:uri});await c.connect();try{await c.query('DROP SCHEMA IF EXISTS "'+schema+'" CASCADE')}finally{await c.end()}
 await rm(root,{recursive:true,force:true})
}
process.exit(0)
