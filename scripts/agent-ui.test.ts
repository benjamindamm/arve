import test from 'node:test'
import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {Client} from '@modelcontextprotocol/sdk/client/index.js'
import {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js'
import {InMemoryTransport} from '@modelcontextprotocol/sdk/inMemory.js'
import {colorDiscussionSchema,exampleDiscussion,decisionText,readableComparison,inkOn} from '../src/agent-ui/color-discussion'
import {makeColorReview,registerColorReview,colorReviewUri} from '../src/agent-ui/register'
import {registerAuthoringSkills,readAuthoringSkill} from '../src/agent-ui/authoring-mcp'
import {authoringSkills} from '../src/docs/authoring-skills'

test('color comparisons preserve scope, proposals, changed/open answers and exact content identity',()=>{
 const review=makeColorReview(exampleDiscussion)
 assert.equal(review.snapshot,makeColorReview({...exampleDiscussion}).snapshot)
 assert.notEqual(review.snapshot,makeColorReview({...exampleDiscussion,scope:'Ein anderer Scope'}).snapshot)
 assert.throws(()=>decisionText(review,{choice:'',note:''}))
 assert.throws(()=>decisionText(review,{choice:'change',note:'  '}))
 const open=decisionText(review,{choice:'open',note:'Bitte mit Branding klären.'})
 assert.match(open,/Entscheidung bleibt offen/);assert.match(open,/Keine Variante ist bestätigt/);assert.match(open,/Branding/)
 const selected=decisionText(review,{choice:'brand',note:'Vorläufige Arbeitsrichtung.'})
 assert.match(selected,/#B42318/);assert.match(selected,/Keine CMS-Speicherung/);assert.match(selected,new RegExp(review.snapshot))
 assert.match(readableComparison(review),/Änderung mit Beschreibung/)
 assert.equal(inkOn('#FFFFFF'),'#111111');assert.equal(inkOn('#000000'),'#FFFFFF')
 assert.equal(colorDiscussionSchema.safeParse({...exampleDiscussion,variants:[exampleDiscussion.variants[0],exampleDiscussion.variants[0]]}).success,false)
 assert.equal(colorDiscussionSchema.safeParse({...exampleDiscussion,variants:exampleDiscussion.variants.map(v=>({...v,primary:'url(https://example.org)'}))}).success,false)
})

test('authoring files reconstruct exactly; changed hashes, arbitrary paths and unpinned continuations fail',async()=>{
 const skills=await authoringSkills()
 assert(skills.find(s=>s.id==='arve-color-handbook'))
 const source=skills.find(s=>s.id==='arve-color-handbook')!.files[0]
 let data=await readAuthoringSkill('arve-color-handbook',source.name,undefined,0,400),text=data.content
 while(data.next){const n=data.next.arguments;data=await readAuthoringSkill(n.skill,n.file,n.sha256,n.offset,n.limit);text+=data.content}
 assert.equal(text,source.content)
 assert.equal(data.sha256,createHash('sha256').update(source.content).digest('hex'))
 await assert.rejects(()=>readAuthoringSkill('arve-color-handbook','../../README.md'))
 await assert.rejects(()=>readAuthoringSkill('arve-color-handbook','SKILL.md','0'.repeat(64)))
 await assert.rejects(()=>readAuthoringSkill('arve-color-handbook','SKILL.md',undefined,1))
})

test('real MCP discovery, tool fallback and self-contained App resource work without a database',async()=>{
 const server=new McpServer({name:'arve-pilot-test',version:'1'})
 registerColorReview(server);registerAuthoringSkills(server)
 const [clientTransport,serverTransport]=InMemoryTransport.createLinkedPair()
 const client=new Client({name:'text-test-client',version:'1'})
 await server.connect(serverTransport);await client.connect(clientTransport)
 try{
  const inventory=await client.listTools()
  const comparison=inventory.tools.find(t=>t.name==='compare_color_roles')!
  assert.equal((comparison._meta as any).ui.resourceUri,colorReviewUri)
  const result=await client.callTool({name:'compare_color_roles',arguments:exampleDiscussion})
  assert(!result.isError);assert.equal((result.structuredContent as any).discussion.system,exampleDiscussion.system)
  assert(result.content instanceof Array);assert.match((result.content[0] as any).text,/Ohne UI/)
  const resources=await client.listResources();assert(resources.resources.some(r=>r.uri===colorReviewUri))
  const resource=await client.readResource({uri:colorReviewUri})
  assert('text' in resource.contents[0])
  assert.equal(resource.contents[0].mimeType,'text/html;profile=mcp-app')
  assert.equal(typeof resource.contents[0].text,'string');assert.match(resource.contents[0].text as string,/<!doctype html>/)
  assert.doesNotMatch(resource.contents[0].text as string,/<script[^>]+src=/)
  const list=await client.callTool({name:'list_authoring_skills',arguments:{limit:10}})
  assert((list.structuredContent as any).skills.some((s:any)=>s.skill==='arve-color-handbook'))
  let inventoryPage=await client.callTool({name:'list_authoring_skills',arguments:{limit:3}})
  const discovered:string[]=[]
  while(true){
   const page=inventoryPage.structuredContent as any
   discovered.push(...page.skills.map((s:any)=>s.skill))
   if(!page.next)break
   inventoryPage=await client.callTool({name:page.next.tool,arguments:page.next.arguments})
  }
  assert.equal(discovered.length,(await authoringSkills()).length)
  assert.equal(new Set(discovered).size,discovered.length)
  const unsafeContinuation=await client.callTool({name:'list_authoring_skills',arguments:{offset:3}})
  assert(unsafeContinuation.isError)
  const staleInventory=await client.callTool({name:'list_authoring_skills',arguments:{snapshot:'0'.repeat(64)}})
  assert(staleInventory.isError)
  const file=await client.callTool({name:'get_authoring_skill',arguments:{skill:'arve-pattern-handbook',file:'references/agent-interaction.md'}})
  assert(!file.isError);assert.match((file.structuredContent as any).content,/Gespräch/)
 }finally{await client.close();await server.close()}
})
