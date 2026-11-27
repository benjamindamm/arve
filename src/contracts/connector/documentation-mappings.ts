import {documentationData} from '../../docs/documentation-data'
/** Explicit page pins are the mapping. Neither label equality nor contract ID predicts a route. */
export async function findContractPages({library,component,revision,system}:{library:string;component?:string;revision?:string;system?:string}){
 const data=await documentationData(),systems=await data.systems()
 const rows=await Promise.all(systems.filter(s=>!system||s.slug===system).map(async s=>(await data.pages(s)).filter(p=>p.component&&p.contract?.library===library&&(!component||p.contract.component===component)&&(!revision||p.contract.revision===revision)).map(p=>({system:s.slug,component:p.component!,title:p.title,contractReference:p.contract,read:{tool:'get_component_page' as const,arguments:{system:s.slug,component:p.component!}}}))))
 return rows.flat().sort((a,b)=>a.system.localeCompare(b.system)||a.component.localeCompare(b.component))
}
