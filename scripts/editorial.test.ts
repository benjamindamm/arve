import {test} from 'node:test'
import assert from 'node:assert/strict'
import {editorialOf,editorialStates} from '../src/docs/editorial'
import {compactDocumentation,compactComponent} from '../src/docs/mcp-reads'
import {prepareTemplate} from './lib/system-template'
import snapshot from './content/handbook-snapshot.json'
test('unknown editorial states never imply a review judgement',()=>{
 for(const editorialStatus of [null,undefined,'invalid'])assert.deepEqual(editorialOf({editorialStatus}),{status:null,label:'Nicht eingeordnet',note:null,owner:null})
 for(const state of editorialStates)assert.equal(editorialOf({editorialStatus:state.value}).label,state.label)
})
test('compact reads carry the full editorial context before content pagination',()=>{
 const editorial=editorialOf({editorialStatus:'clarify',editorialNote:'Fokusfolge offen',editorialOwner:'UX-Team'})
 const page={title:'Test',editorial,content:[]}
 assert.deepEqual((compactDocumentation(page,{}) as Record<string,unknown>).editorial,editorial)
 const component={...page,system:'test',component:'test',path:'/systems/test/components/test',contract:null,contractReference:null,templateSections:[],implementations:[],styleAssets:[],contractArtifacts:[],referenceFrameworks:[],nextSteps:null,catalogue:null} as any
 assert.deepEqual(compactComponent(component,'https://arve.invalid/mcp').editorial,editorial)
})
test('a copied system does not inherit review judgements, issues or ownership',()=>{
 const source=structuredClone(snapshot) as any
 source.pages[0].editorialStatus='checked';source.pages[0].editorialOwner='Reference team';source.pages[0].editorialNote='Only reference reviewed'
 const copy=prepareTemplate(source,'other','Other')
 assert(copy.pages.every((p:any)=>p.editorialStatus==='draft'&&p.editorialNote===null&&p.editorialOwner===null))
 assert.equal(source.pages[0].editorialStatus,'checked')
})
