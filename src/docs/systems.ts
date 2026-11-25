import { documentationData } from './documentation-data'
import type { Page } from '../payload-types'

export async function readSystem(slug: string) {
  return (await listSystems()).find(system => system.slug === slug)
}

export async function listSystems() {
  return (await documentationData()).systems()
}

export function sectionSlug(system: string, slug: string) {
  return slug.startsWith(system + '-') ? slug.slice(system.length + 1) : slug
}

/** Components keep stable addresses; editorial descendants follow their actual CMS hierarchy. */
export function pagePath(system: string, page: Pick<Page, 'slug' | 'component'> & Partial<Pick<Page,'id'|'parent'>>, pages?:Page[]) {
  const root = '/systems/' + encodeURIComponent(system)
  if(page.component)return root+'/components/'+encodeURIComponent(page.component)
  const trail=[sectionSlug(system,page.slug)],seen=new Set([page.id])
  let current=page
  while(pages&&relationId(current.parent)){
    const parent=pages.find(p=>p.id===relationId(current.parent))
    if(!parent||seen.has(parent.id))throw Error('Invalid documentation hierarchy: '+page.slug)
    seen.add(parent.id);trail.unshift(sectionSlug(system,parent.slug));current=parent
  }
  // Existing flat chapters keep their addresses; new families opt into CMS ancestry.
  const segments=['layout','datenvisualisierung'].includes(trail[0])?trail.map((part,i)=>i&&part.startsWith(trail[i-1]+'-')?part.slice(trail[i-1].length+1):part):[sectionSlug(system,page.slug)]
  return root+'/'+segments.map(encodeURIComponent).join('/')
}

export function relationId(value: number | { id: number } | null | undefined) {
  return typeof value === 'object' ? value?.id : value
}
