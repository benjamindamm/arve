import {Client} from '@modelcontextprotocol/sdk/client/index.js'
import {InMemoryTransport} from '@modelcontextprotocol/sdk/inMemory.js'
import {createHandbookServer} from '../src/mcp/server'
import {liveProvider} from '../src/mcp/live-provider'
import {prepareTemplate} from './lib/system-template'
import assert from 'node:assert/strict'
import pg from 'pg'
import {connect} from './bootstrap-handbook'
import {upgradeExternalLinks} from './lib/external-links-migration'
import {contentHash} from '../src/access/publication'
import {externalSourcesOf,validSourceUrl} from '../src/docs/external-sources'
const schema='handbook_bootstrap_sources_'+Date.now()+'_'+process.pid,uri=process.env.DATABASE_URI!
assert(uri)
const c=new pg.Client({connectionString:uri});await c.connect();let p:any
try{
 p=await connect(uri,schema,true)
 const system=await p.create({collection:'design-systems',data:{name:'Source checks',slug:'source-checks'}})
 const existing=await p.create({collection:'pages',data:{designSystem:system.id,title:'Existing',slug:'source-existing',pageType:'guide',editorialStatus:'checked',_status:'published'}})
 assert.equal(contentHash('pages',{title:'Same'}),contentHash('pages',{title:'Same',externalLinks:[]}),'Empty field preserves existing content identity')
 const baseline=contentHash('pages',existing)
 for(const table of ['pages_external_links','_pages_v_version_external_links'])await c.query(`DROP TABLE "${schema}"."${table}"`)
 for(const type of ['enum_pages_external_links_type','enum__pages_v_version_external_links_type'])await c.query(`DROP TYPE "${schema}"."${type}"`)
 await upgradeExternalLinks(c,{schema})
 assert.equal((await c.query('SELECT 1 FROM information_schema.tables WHERE table_schema=$1 AND table_name=$2',[schema,'pages_external_links'])).rowCount,0)
 await upgradeExternalLinks(c,{schema,apply:true});await upgradeExternalLinks(c,{schema,apply:true})
 assert.equal(contentHash('pages',await p.findByID({collection:'pages',id:existing.id})),baseline)
 const sources=[{type:'figma',url:'https://www.figma.com/design/example/File?node-id=1-2',label:'Figma · Mobile'},{type:'storybook',url:'https://example.org/storybook/?path=/story/button--default'}]
 const published=await p.update({collection:'pages',id:existing.id,data:{externalLinks:sources,_status:'published'}})
 const links=externalSourcesOf(published)
 const copy=prepareTemplate({format:1,system:{slug:system.slug,home:published.slug},pages:[published],implementations:[],media:[]},'source-copy','Source copy')
 assert.deepEqual(externalSourcesOf(copy.pages[0]),links,'System copies retain source links')
 const component=await p.create({collection:'pages',data:{designSystem:system.id,title:'Linked component',slug:'linked-component',pageType:'component',component:'test-control',externalLinks:sources,_status:'published'}})
 const server=createHandbookServer(liveProvider,'http://example.org/'),client=new Client({name:'source-reader',version:'1'})
 const [a,b]=InMemoryTransport.createLinkedPair();await server.connect(a);await client.connect(b)
 try{
  for(const view of ['compact','full']){
   const doc=await client.callTool({name:'get_documentation_page',arguments:{system:system.slug,section:published.slug,view}})
   assert.ok(!doc.isError,JSON.stringify(doc));assert.deepEqual((doc.structuredContent as any).externalLinks,links)
   const item=await client.callTool({name:'get_component_page',arguments:{system:system.slug,component:component.component,view}})
   assert.ok(!item.isError,JSON.stringify(item));assert.deepEqual((item.structuredContent as any).externalLinks,links)
  }
 }finally{await client.close();await server.close()}

 assert.deepEqual(links.map(l=>l.label),['Figma · Mobile','Storybook'])
 assert.notEqual(contentHash('pages',published),baseline,'Changing links requires a fresh review')
 await p.update({collection:'pages',id:existing.id,draft:true,data:{externalLinks:[{type:'documentation',url:'https://example.org/unpublished'}]}})
 const live=await p.findByID({collection:'pages',id:existing.id,draft:false})
 assert.deepEqual(externalSourcesOf(live),links,'Draft links do not appear on the published page')
 const draft=await p.findByID({collection:'pages',id:existing.id,draft:true})
 assert.equal(externalSourcesOf(draft)[0].type,'documentation')
 const versions=await p.findVersions({collection:'pages',where:{parent:{equals:existing.id}},limit:100})
 assert.ok(versions.docs.some((v:any)=>externalSourcesOf(v.version).some(l=>l.type==='figma')),'Version history retains links')
 await assert.rejects(()=>p.update({collection:'pages',id:existing.id,draft:false,data:{_status:'published',externalLinks:[{type:'figma',url:'javascript:alert(1)'}]}}))
 for(const invalid of ['javascript:alert(1)','data:text/html,foo','//example.org','https://user:secret@example.org','https://example.org/\nfoo'])assert.equal(validSourceUrl(invalid),false)
 assert.deepEqual(externalSourcesOf({externalLinks:[{type:'other',url:'javascript:alert(1)'}]}),[])
 console.log('PASS: additive/idempotent upgrade; existing approval identity retained; source links persist in pages/drafts/versions/system copies and compact/full MCP; published reads stay isolated; unsafe URLs rejected')
}finally{if(p)await p.destroy();await c.query(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);await c.end()}
process.exit(0)
