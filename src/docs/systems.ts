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

export function pagePath(system: string, page: Pick<Page, 'slug' | 'component'>) {
  const root = '/systems/' + encodeURIComponent(system)
  return page.component ? root + '/components/' + encodeURIComponent(page.component) :
    root + '/' + encodeURIComponent(sectionSlug(system, page.slug))
}

export function relationId(value: number | { id: number } | null | undefined) {
  return typeof value === 'object' ? value?.id : value
}
