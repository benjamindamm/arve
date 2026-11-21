import { currentPage } from './content/current-page'
import assert from 'node:assert/strict'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js'
import { getPayload } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import config from '../src/payload.config'
import { formWorkflowRelease } from './content/form-workflow-release'
import { publicContent } from '../src/docs/component-pages'
const safeConfig=await config
safeConfig.db={...postgresAdapter({pool:{connectionString:process.env.DATABASE_URI},push:false}),allowIDOnCreate:false,name:'postgres'}
const payload=await getPayload({config:safeConfig})
const client=new Client({name:'form-workflow-release-check',version:'1.0.0'})
try {
 await client.connect(new StreamableHTTPClientTransport(new URL('http://127.0.0.1:3010/mcp')))
 const tree=await client.callTool({name:'list_documentation_tree',arguments:{view:'full',system:'shadcn'}})
 assert(!tree.isError)
 const paths=new Set<string>()
 const collectPaths=(value:unknown):void=>{if(Array.isArray(value)) value.forEach(collectPaths);else if(value&&typeof value==='object'){for(const [key,child] of Object.entries(value)){if(key==='path'&&typeof child==='string') paths.add(child);else collectPaths(child)}}}
 collectPaths(tree.structuredContent)
 const checkLinks=(value:unknown):void=>{if(Array.isArray(value)) value.forEach(checkLinks);else if(value&&typeof value==='object'){for(const [key,child] of Object.entries(value)){if(key==='url'&&typeof child==='string'&&child.startsWith('/systems/shadcn/')) assert(paths.has(child.split('#')[0]),`Unveröffentlichter Link: ${child}`);else checkLinks(child)}}}
 for(const sourceEntry of formWorkflowRelease) {
    const entry = await currentPage(sourceEntry)
  const {docs:[page]}=await payload.find({collection:'pages',depth:1,draft:false,where:{and:[{slug:{equals:entry.slug}},{_status:{equals:'published'}}]}})
  assert(page)
  checkLinks(page.content)
  const section=entry.slug.slice('shadcn-'.length)
  const component=page.component
  const response=await client.callTool({name:component?'get_component_page':'get_documentation_page',arguments:component?{view:'full',system:'shadcn',component}:{view:'full',system:'shadcn',section}})
  assert(!response.isError,section)
  const data=response.structuredContent as Record<string,unknown>
  assert.deepEqual(data.content,publicContent(page.content))
  assert.deepEqual(data.templateSections,[])
  assert.equal(data.updatedAt,page.updatedAt)
  assert.equal(data.summary,page.summary)
  assert(JSON.stringify(tree.structuredContent).includes(String(data.path)))
  if(component) {
    assert.deepEqual(data.contractReference,page.contract)
    assert(data.contract && data.demo)
    const contract=data.contract as {revision:string}
    assert.equal(contract.revision,page.contract?.revision)
  }
  for(const block of page.content??[]) if(block.blockType==='workflowStudy') {
    assert(block.title && block.summary && block.caption && block.source)
    assert.equal(new Set(block.steps.map(step=>step.key)).size,block.steps.length)
    assert(block.steps.every(step=>step.title && step.description && step.tone))
  }
  console.log(`${section}: publiziert, im Baum, CMS/MCP identisch, interne Links veröffentlicht`)
 }
 const result=await client.callTool({name:'search_documentation',arguments:{system:'shadcn',query:'Ergebnis unbekannt',limit:30}})
 assert(!result.isError && JSON.stringify(result.structuredContent).includes('/systems/shadcn/formulare-validierung'))
} finally {await client.close();await payload.destroy()}
process.exit(0)
