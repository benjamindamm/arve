import type {Page} from '../payload-types'
/** Public catalogue projection from the same CMS blocks used by the portal. */
export function patternCatalog(content:Page['content']) {
 return (content??[]).flatMap(block=>{
  if(block.blockType!=='workflowStudy'||!/^UX-\d{3}$/.test(block.blockName??''))return []
  const [category='',tagText='']=block.caption.split(' · Tags: ')
  return [{id:block.blockName,title:block.title,task:block.summary,status:'candidate',category:category.replace(/^Kategorie: /,''),tags:tagText==='ohne Tags'?[]:tagText.split(', ').filter(Boolean),steps:block.steps,observations:block.source}]
 })
}
