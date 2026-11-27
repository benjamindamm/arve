import assert from 'node:assert/strict'
import {test} from 'node:test'
import {systemHomeModel,mapHomeTargets} from '../src/docs/system-home-template'
import {prepareTemplate} from './lib/system-template'
const entries:any[]=[{slug:'page-types',title:'Seitentypen',path:'/systems/atlas/page-types',kind:'section'},{slug:'komponenten',title:'Komponenten',path:'/systems/atlas/komponenten',kind:'section'}]
const pages:any[]=[{id:1,slug:'atlas-page-types'},{id:2,slug:'atlas-komponenten'},{id:3,slug:'atlas-private'}]
test('all systems have the same starting structure, including incomplete systems',()=>{
  const model=systemHomeModel({name:'Atlas',slug:'atlas',pages,entries})
  assert.equal(model.heading,'Atlas Handbuch');assert.equal(model.tasks.length,3)
  assert.equal(model.tasks[0].links[0].path,entries[0].path)
  assert.equal(model.tasks[0].links[1].path,undefined)
  assert.equal(model.example,undefined)
  const empty=systemHomeModel({name:'New',slug:'new',pages:[],entries:[]})
  assert.deepEqual(empty.tasks.map(t=>t.title),model.tasks.map(t=>t.title))
  assert(empty.tasks.every(t=>t.links.every(l=>!l.path)))
})
test('explicit targets override defaults, but unpublished or foreign targets never produce links',()=>{
  const home:any={homeTemplate:{heading:'  Unser Handbuch  ',page:{primary:2,secondary:3},flow:{primary:999},example:{primary:3}}}
  const model=systemHomeModel({name:'Atlas',slug:'atlas',pages,entries,home})
  assert.equal(model.heading,'Unser Handbuch');assert.equal(model.tasks[0].links[0].path,entries[1].path)
  assert.equal(model.tasks[0].links[1].path,undefined);assert.equal(model.tasks[1].links[0].path,undefined);assert.equal(model.example,undefined)
  home.homeTemplate.page.primary=null
  assert.equal(systemHomeModel({name:'Atlas',slug:'atlas',pages,entries,home}).tasks[0].links[0].path,entries[0].path)
})
test('portable templates remap every explicit home target to the copied system',()=>{
  const source:any={format:1,system:{slug:'atlas',name:'Atlas',home:'atlas-home'},pages:[{slug:'atlas-home',homeTemplate:{intro:'Our rules',page:{primary:'atlas-types'}}},{slug:'atlas-types'}],implementations:[],media:[]}
  const copy=prepareTemplate(source,'new','New')
  assert.equal(copy.pages[0].homeTemplate.page.primary,'new-types')
  assert.equal(copy.pages[0].homeTemplate.intro,'Our rules')
  assert.equal(source.pages[0].homeTemplate.page.primary,'atlas-types')
  source.pages[0].homeTemplate.page.primary='foreign'
  assert.throws(()=>prepareTemplate(source,'new','New'),/External home template target/)
  assert.deepEqual(mapHomeTargets({page:{primary:2},heading:'2'},v=>'page-'+v),{page:{primary:'page-2'},heading:'2'})
})
