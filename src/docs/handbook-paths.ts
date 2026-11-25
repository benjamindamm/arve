import legacy from './layout-legacy.json'
/** Legacy addresses are compatibility only; canonical addresses come from CMS parents. */
export const legacyLayoutSections:Record<string,string>=legacy.sections
export const legacyLayoutHrefs:Record<string,string>=legacy.hrefs
export function canonicalHandbookHref(value:string){
 const match=value.match(/^(\/systems\/shadcn\/)([^?#]*)(.*)$/)
 if(!match)return value
 const section=match[2].replace(/\/$/,'')
 return legacyLayoutHrefs[section]?match[1]+legacyLayoutHrefs[section]+match[3]:value
}
export function isLayoutRedirect(page:{content?:{blockName?:string|null}[]|null}){
 return page.content?.[0]?.blockName==='layout-redirect'
}
