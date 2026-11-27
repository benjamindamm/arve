/** Shared labels and safe public URLs for CMS, portal and MCP. No embedded credentials or active schemes. */
export const externalSourceTypes=[
 {value:'figma',label:'Figma'},
 {value:'storybook',label:'Storybook'},
 {value:'repository',label:'Repository'},
 {value:'documentation',label:'Dokumentation'},
 {value:'other',label:'Weitere Quelle'},
] as const
export function validSourceUrl(value:unknown){
 if(typeof value!=='string'||value.length>2000||/[\u0000-\u0020\u007f]/.test(value))return false
 try{const url=new URL(value);return ['https:','http:'].includes(url.protocol)&&!!url.hostname&&!url.username&&!url.password}catch{return false}
}
export type ExternalSource={type:typeof externalSourceTypes[number]['value'];label:string;url:string}
export function externalSourcesOf(page?:{externalLinks?:unknown}|null):ExternalSource[]{
 if(!Array.isArray(page?.externalLinks))return []
 return page.externalLinks.flatMap((row:unknown)=>{
  if(!row||typeof row!=='object')return []
  const {type,label,url}=row as Record<string,unknown>,kind=externalSourceTypes.find(item=>item.value===type)
  if(!kind||!validSourceUrl(url))return []
  return [{type:kind.value,label:typeof label==='string'&&label.trim()?label.trim():kind.label,url:url as string}]
 })
}
