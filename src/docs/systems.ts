import config from '@payload-config'
import { getPayload } from 'payload'
import type { Page } from '../payload-types'

export async function readSystem(slug: string) {
  const payload = await getPayload({ config })
  const { docs: [system] } = await payload.find({
    collection: 'design-systems', depth: 0, limit: 1, where: { slug: { equals: slug } },
  })
  return system
}

export async function listSystems() {
  const payload = await getPayload({ config })
  return (await payload.find({ collection: 'design-systems', depth: 0, pagination: false, sort: 'name' })).docs
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
