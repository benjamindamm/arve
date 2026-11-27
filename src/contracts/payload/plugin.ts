import type {Config,Field,Plugin} from 'payload'
import {ContractBindings,connectorOptions,validateContractReference} from './bindings'

/** Optional Payload module. The registry reader has no Payload dependency. */
export const uiContractsPlugin=({enabled=true}:{enabled?:boolean}={}):Plugin=>config=>{
 if(!enabled)return config
 const contractFields:Field[]=[
  {name:'contractPicker',type:'ui',admin:{condition:(_,siblings)=>siblings.pageType==null||siblings.pageType==='component',components:{Field:'/src/contracts/payload/contract-picker#ContractPicker'}}},
  {name:'contract',type:'group',label:'Technischer Contract',admin:{hidden:true},fields:[
   {name:'library',type:'text',label:'Bibliothek'},
   {name:'component',type:'text',label:'Contract-Kennung'},
   {name:'revision',type:'text',label:'Export-Revision'},
  ]},
 ]
 return {...config,
  collections:[...(config.collections??[]).map(collection=>{if(!['pages','implementations'].includes(collection.slug))return collection;const fields=[...collection.fields];const at=fields.findIndex(field=>'name' in field&&['demo','verification'].includes(field.name??''));fields.splice(at<0?fields.length:at,0,...contractFields);return {...collection,fields,hooks:{...collection.hooks,beforeChange:[validateContractReference,...collection.hooks?.beforeChange??[]]}}}),ContractBindings],
  endpoints:[...config.endpoints??[],connectorOptions],
 } satisfies Config
}
