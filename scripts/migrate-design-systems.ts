import { getPayload } from 'payload'
import config from '../src/payload.config'
import { groups, sections } from '../src/docs/shadcn-foundations'
import type { Page } from '../src/payload-types'

const payload = await getPayload({ config })
try {
  async function system(slug: string, name: string, description: string, theme: 'neutral' | 'blue') {
    const { docs: [existing] } = await payload.find({ collection: 'design-systems', where: { slug: { equals: slug } } })
    return existing ?? payload.create({ collection: 'design-systems', data: { slug, name, description, theme } })
  }
  const shadcn = await system('shadcn', 'shadcn', 'Grundlagen, Layouts, UX-Patterns und Angular-Komponenten mit Spartan.', 'neutral')
  const { docs } = await payload.find({
    collection: 'pages', pagination: false, depth: 0, draft: true, where: { system: { equals: 'shadcn' } },
  })
  const pages = new Map(docs.map((page) => [page.slug.replace(/^shadcn-/, ''), page]))
  const ordered = [...pages].sort(([a], [b]) => Number(!groups.some((group) => group.slug === a)) - Number(!groups.some((group) => group.slug === b)))
  for (const [slug, page] of ordered) {
    if (page.designSystem) continue
    const group = groups.find((entry) => entry.slug === slug || entry.children.includes(slug))
    const parentSlug = page.component ? 'komponenten' : group?.slug === slug ? undefined : group?.slug
    const pageType: Page['pageType'] = page.component ? 'component' : group?.slug === 'grundlagen' ? 'foundation' :
      group?.slug === 'patterns' ? 'pattern' : group?.slug === 'layout' ? 'layout' : 'guide'
    await payload.update({ collection: 'pages', id: page.id, draft: page._status === 'draft', data: {
      designSystem: shadcn.id, parent: parentSlug ? pages.get(parentSlug)?.id : undefined, pageType,
      order: parentSlug ? group?.children.indexOf(slug) ?? 0 : groups.findIndex((item) => item.slug === slug),
      summary: sections.find((entry) => entry.slug === slug)?.summary,
    } })
  }
  async function addPage(data: Omit<Page, 'id' | 'createdAt' | 'updatedAt'>) {
    const { docs: [existing] } = await payload.find({ collection: 'pages', draft: true, where: { slug: { equals: data.slug } } })
    return existing ?? payload.create({ collection: 'pages', data })
  }
  const overview = await addPage({ slug: 'shadcn-uebersicht', title: 'shadcn', pageType: 'overview', designSystem: shadcn.id, _status: 'published' })
  if (!shadcn.home) await payload.update({ collection: 'design-systems', id: shadcn.id, data: { home: overview.id } })
  console.log('Design-Systeme und Seitenstruktur eingerichtet.')
} finally {
  await payload.destroy()
}
