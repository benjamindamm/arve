import assert from 'node:assert/strict'
import { readFile,writeFile } from 'node:fs/promises'
import path from 'node:path'
import { createHash } from 'node:crypto'
import { parse } from 'parse5'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js'
import { getComponentComparisons } from '../src/docs/component-comparison-data'
import { componentNextSteps } from '../src/docs/component-next-steps-data'
import { catalogueMeta } from '../src/docs/component-catalogue-data'
import { getContract } from '../src/contracts/catalog'
import { shadcnReferenceRevision as revision } from '../src/contracts/current-reference'
import snapshot from './content/handbook-snapshot.json'
const previous: Record<string,[number[],number[]]> = {
  button:[[6,8],[4]],input:[[],[5]],checkbox:[[],[6]],switch:[[2],[4]],message:[[2],[]],
}
const sourceOnly=process.argv.includes('--source-only')
const staticOnly=process.argv.includes('--static')
const packageRoot=path.resolve('src/contracts/libraries/shadcn',revision,'package')
const components=snapshot.pages.filter(page=>page.component).map(page=>page.component!).sort()
assert.equal(components.length,69)
const client = new Client({name:'presentation-reader',version:'2'})
const result:any[]=[]
const checkedSources=new Map<string,string>()
async function check(component:string) {
  const contract=getContract({library:'shadcn',component,revision})
  assert(contract)
  const groups={variants:getComponentComparisons(component,contract,'variants'),states:getComponentComparisons(component,contract,'states')}
  assert(groups.variants.length+groups.states.length>0,component+': no visual reference')
  if(component==='calendar'){
    assert.deepEqual(groups.variants[0]?.previewItems,['single-default','multiple-example','range-start-middle-end'],'Calendar selection modes must be visible together first')
    assert(!groups.states.some(group=>group.items.some(item=>item.id==='range-start-middle-end')),'Range choice must not be presented as a state')
  }
  for (const [index,section] of (['variants','states'] as const).entries()) {
    const comparisons=groups[section]
    if(previous[component])assert.deepEqual(comparisons.map(group=>group.items.length),previous[component][index],component+': existing comparisons')
    assert.equal(new Set(comparisons.map(g=>g.id)).size,comparisons.length,component+': unique groups')
    for(const group of comparisons) {
      assert(group.title.trim()&&group.description.trim()&&group.items.length,component+': meaningful group')
      assert.equal(new Set(group.items.map(i=>i.id)).size,group.items.length,component+': unique item IDs')
      if(group.previewItems){
        assert.equal(new Set(group.previewItems).size,group.previewItems.length,component+': unique overview IDs')
        for(const id of group.previewItems)assert(group.items.some(item=>item.id===id),component+': unknown overview ID '+id)
      }
      for(const item of group.items)assert(item.id&&item.title.trim()&&typeof item.description==='string',component+': item labels')
      if(!previous[component])assert(group.sourceReferences?.length,component+': missing source evidence')
      for(const ref of group.sourceReferences??[]) {
        assert(!ref.path.includes('..')&&!path.isAbsolute(ref.path)&&!ref.path.includes('\\'),'safe package path')
        assert(ref.path.startsWith('library/'),component+': package-local evidence')
        let hash=checkedSources.get(ref.path)
        if(!hash){hash=createHash('sha256').update(await readFile(path.join(packageRoot,ref.path))).digest('hex');checkedSources.set(ref.path,hash)}
        assert.equal(ref.sha256,hash,component+': source hash '+ref.path)
        if(ref.pointer!==undefined){
          let value=JSON.parse(await readFile(path.join(packageRoot,ref.path),'utf8'))
          assert(ref.pointer===''||ref.pointer.startsWith('/'))
          for(const key of ref.pointer===''?[]:ref.pointer.slice(1).split('/').map(k=>k.replaceAll('~1','/').replaceAll('~0','~'))) {assert(value!=null&&Object.hasOwn(value,key),component+': '+ref.pointer);value=value[key]}
        }
        if(ref.snippet!==undefined)assert((await readFile(path.join(packageRoot,ref.path),'utf8')).includes(ref.snippet),component+': source snippet')
      }
    }
    assert.deepEqual(getComponentComparisons(component,{...contract,revision:'stale'},section),[])
    assert.deepEqual(getComponentComparisons(component,{...contract,library:'another'},section),[])
    assert.deepEqual(getComponentComparisons('unknown',contract,section),[])
  }
  if(staticOnly){
    const html=await readFile(path.join('.runtime/static-site/out/systems/shadcn/components',component,'index.html'),'utf8')
    if(component==='calendar'||component==='date-picker'){
      const notice=html.indexOf('class="component-handbook-notice"')
      const picture=html.indexOf('class="component-handbook-example"')
      assert(notice>=0&&notice<picture,'Calendar prerequisite must precede the first illustration')
      assert(html.includes('Vor dem Einsatz: Tastaturbedienung prüfen'))
    }
    assert(html.includes('id="weiterarbeiten"'),component+': missing next steps')
    const document=parse(html)
    const ids=new Set<string>()
    let specimens=0
    const figures=new Map<string,any>()
    function inspect(node:any,inside=false,inert=false,ariaHidden=false) {
      const attrs=new Map<string,string>((node.attrs??[]).map((a:any)=>[a.name,a.value]))
      const classes=(attrs.get('class')??'').split(/\s+/)
      inside=inside||classes.includes('component-comparisons')
      if(attrs.has('data-comparison-id'))figures.set(attrs.get('data-comparison-id')!,node)
      if(classes.includes('comparison-more'))assert(!attrs.has('open'),component+': extra comparisons initially expanded')
      if(classes.includes('comparison-notes'))assert(!attrs.has('open'),component+': technical notes initially expanded')
      inert=inert||attrs.has('inert')
      ariaHidden=ariaHidden||attrs.get('aria-hidden')==='true'
      if(inside&&node.tagName==='summary'&&!inert)assert(!ariaHidden,component+': disclosure excluded from accessibility tree')
      if(inside){
        const id=attrs.get('id')
        if(id){assert(!ids.has(id),component+': duplicate comparison ID '+id);ids.add(id)}
        assert(node.tagName!=='script',component+': script in comparison')
        assert(![...attrs.keys()].some(a=>a.startsWith('on')),component+': event handler attribute')
        if(classes.includes('comparison-specimen')) {
          specimens++
          assert((node.childNodes??[]).some((child:any)=>child.tagName||child.value?.trim()),component+': empty specimen')
          const text=(n:any):string=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join(' ')
          assert(!/Search fruit|Show options|Contact details|Project name|Report saved|Undo report change|Changes remain available/i.test(text(node)),component+': untranslated source fixture')
        }
        if(!inert&&['button','input','select','textarea'].includes(node.tagName))assert(attrs.has('disabled')||attrs.get('tabindex')==='-1',component+': focusable illustration')
      }
      for(const child of node.childNodes??[])inspect(child,inside,inert,ariaHidden)
    }
    inspect(document)
    if(component!=='message')assert.equal(specimens,[...groups.variants,...groups.states].reduce((sum,g)=>sum+g.items.length,0),component+': rendered specimens')
    for(const group of [...groups.variants,...groups.states]){
      assert(html.includes('comparison-'+group.id),component+': static group missing')
      const figure=figures.get(group.id);assert(figure,component+': comparison figure missing')
      let visible=0,hidden=0
      function countSpecimens(node:any,disclosed=false){
        const attrs=new Map<string,string>((node.attrs??[]).map((a:any)=>[a.name,a.value]))
        const classes=(attrs.get('class')??'').split(/\s+/)
        disclosed=disclosed||classes.includes('comparison-more')
        if(classes.includes('comparison-specimen'))disclosed?hidden++:visible++
        for(const child of node.childNodes??[])countSpecimens(child,disclosed)
      }
      countSpecimens(figure)
      if(component!=='message'){
        const expected=group.previewItems?.length??group.items.length
        assert.equal(visible,expected,component+': overview specimens '+group.id)
        assert.equal(hidden,group.items.length-expected,component+': disclosed specimens '+group.id)
      }
      for(const item of group.items)assert(html.includes(item.title.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#x27;')),component+': static item '+item.id)
    }
  }else if(!sourceOnly){
    const response=await client.callTool({name:'get_component_page',arguments:{view:'full',system:'shadcn',component}})
    assert(!response.isError)
    const page=response.structuredContent as any
    assert.equal(page.visualComparisons.kind,'static-editorial')
    if(component==='calendar'||component==='date-picker'){
      const example=page.content.find((block:any)=>block.blockName==='example')
      assert.equal(example?.body.root.children[1]?.type,'quote','MCP must include the editable early prerequisite')
      assert(JSON.stringify(example.body.root.children[1]).includes('Fokusfehler'))
    }
    assert.deepEqual(page.visualComparisons.variants,groups.variants,component+': MCP variants')
    assert.deepEqual(page.visualComparisons.states,groups.states,component+': MCP states')
    const expectedSteps=componentNextSteps({system:'shadcn',component,pagePath:page.path,contract,implementations:page.implementations,referenceFrameworks:page.referenceFrameworks,documentation:snapshot.pages.map(entry=>({slug:entry.slug,title:entry.title,path:entry.component?'/systems/shadcn/components/'+entry.component:'/systems/shadcn/'+entry.slug.replace(/^shadcn-/, '')}))})
    assert.deepEqual(page.nextSteps,JSON.parse(JSON.stringify(expectedSteps)),component+': next steps MCP parity')
    assert(page.nextSteps.steps.length>=1&&page.nextSteps.steps.length<=3)
    assert.deepEqual(page.catalogue,catalogueMeta({slug:component,path:page.path,summary:page.summary}))
  }
  result.push({component,variants:groups.variants.map(g=>({id:g.id,items:g.items.length,overview:g.previewItems?.length??g.items.length})),states:groups.states.map(g=>({id:g.id,items:g.items.length,overview:g.previewItems?.length??g.items.length}))})
  console.log(component+': PASS')
}
try {
  if(!sourceOnly&&!staticOnly)await client.connect(new StreamableHTTPClientTransport(new URL('http://127.0.0.1:3010/mcp')))
  // Keep requests bounded while checking every published component.
  for(let i=0;i<components.length;i+=3)await Promise.all(components.slice(i,i+3).map(check))
  const report={status:'PASS',revision,components:result.length,sourceFiles:checkedSources.size,mode:staticOnly?'static':sourceOnly?'source':'mcp',result:result.sort((a,b)=>a.component.localeCompare(b.component))}
  const prefix=process.argv.includes('--ux-followthrough')?'ux-followthrough-':process.argv.includes('--mobile-fixes')?'mobile-fixes-':process.argv.includes('--compact')?'compact-':''
  if(process.argv.includes('--report'))await writeFile('docs/handbook/component-catalog/presentation/'+prefix+'verification-'+report.mode+'.json',JSON.stringify(report,null,2)+'\n')
  console.log(JSON.stringify({status:report.status,components:report.components,sourceFiles:report.sourceFiles,mode:report.mode}))
} finally {if(!sourceOnly&&!staticOnly)await client.close()}
