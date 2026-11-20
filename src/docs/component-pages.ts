import { readTemplate } from './page-templates'
import config from '@payload-config'
import { getPayload } from 'payload'
import { pagePath, readSystem } from './systems'
import type { Page } from '../payload-types'
import { getContract } from '../contracts/catalog'

export async function getComponentPage(system: string, component: string) {
  const designSystem = await readSystem(system)
  if (!designSystem) return null
  const payload = await getPayload({ config })
  const { docs: [page] } = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1,
    depth: 1,
    where: { and: [
      { designSystem: { equals: designSystem.id } },
      { component: { equals: component } },
      { _status: { equals: 'published' } },
    ] },
  })
  if (!page) return null

  const { docs: implementations } = await payload.find({
    collection: 'implementations', draft: false, pagination: false, depth: 0, sort: ['platform', 'name'],
    where: { and: [{ componentPage: { equals: page.id } }, { _status: { equals: 'published' } }] },
  })
  const contract = getContract(page.contract)
  const demo = system === 'shadcn' && page.demo?.key === 'spartan-' + component ? page.demo : null

  return {
    system,
    component,
    path: pagePath(system, page),
    title: page.title,
    summary: page.summary,
    updatedAt: page.updatedAt,
    content: publicContent(page.content),
    templateSections: readTemplate(page.pageType, page.template),
    contractReference: page.contract ?? null,
    contract: contract ?? null,
    contractArtifacts: contract ? Object.entries(contract.artifacts ?? Object.fromEntries(Object.entries(contract.files).map(([name, file]) => [name, file.sha256]))).map(([path, sha256]) => ({
      path, sha256, url: `${pagePath(system, page)}/files?path=${encodeURIComponent(path)}`,
    })) : [],
    demo,
    implementations: implementations.map(({ id, name, platform, releaseStatus, packageName, packageVersion, owner, contexts, contract, verification }) => ({
      id, name, platform, releaseStatus, packageName, packageVersion, owner, contexts, contract, verification,
    })),
  }
}

export async function readPublishedSection(system: string, section: string) {
  const designSystem = await readSystem(system)
  if (!designSystem) return null
  const payload = await getPayload({ config })
  const { docs: [page] } = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1,
    where: { and: [
      { designSystem: { equals: designSystem.id } },
      { or: [{ slug: { equals: system + '-' + section } }, { slug: { equals: section } }] },
      { component: { exists: false } },
      { _status: { equals: 'published' } },
    ] },
  })
  return page
}

export async function listPublishedComponents(system: string) {
  const designSystem = await readSystem(system)
  if (!designSystem) return []
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    draft: false,
    pagination: false,
    sort: 'title',
    select: { title: true, component: true },
    where: { and: [
      { designSystem: { equals: designSystem.id } },
      { component: { exists: true } },
      { _status: { equals: 'published' } },
    ] },
  })
  return docs
}

export function publicContent(content: Page['content']) {
  return content?.map((block) => {
      if (block.blockType === 'text' || block.blockType === 'study' || block.blockType === 'componentStudy' || block.blockType === 'workflowStudy' || block.blockType === 'messageComparison') return block
      const image = block.image
      return {
        ...block,
        image: typeof image === 'object' && image ? { url: image.url, alt: image.alt } : null,
      }
    }) ?? []
}
