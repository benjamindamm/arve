import { readTemplate } from './page-templates'
import { documentationData } from './documentation-data'
import { contractFileUrl, contractAssetUrl } from './site-path'
import { pagePath, readSystem } from './systems'
import type { Page } from '../payload-types'
import { getContract } from '../contracts/catalog'
import { catalogueMeta } from './component-catalogue-data'
import { getComponentComparisons } from './component-comparison-data'
import { componentNextSteps } from './component-next-steps-data'
import { frameworkReferences } from './framework-references'

export async function getComponentPage(system: string, component: string) {
  const designSystem = await readSystem(system)
  if (!designSystem) return null
  const data = await documentationData()
  const page = await data.page(designSystem, { component })
  if (!page) return null
  const implementations = await data.implementations(page)
  const contract = getContract(page.contract)
  const demo = system === 'shadcn' && page.demo?.key === 'spartan-' + component ? page.demo : null
  const references = frameworkReferences((await readPublishedSection(system, 'frameworks'))?.content)
  const published = await data.pages(designSystem)
  const nextSteps = componentNextSteps({system,component,pagePath:pagePath(system,page),contract,implementations,referenceFrameworks:references,documentation:published.map(entry=>({slug:entry.slug,path:pagePath(system,entry),title:entry.title}))})
  const previewPath = `components/${component}/preview.png`
  const previewHash = contract?.artifacts?.[previewPath]

  return {
    system,
    component,
    path: pagePath(system, page),
    title: page.title,
    summary: page.summary,
    updatedAt: page.updatedAt,
    nextSteps,
    content: publicContent(page.content),
    templateSections: readTemplate(page.pageType, page.template),
    catalogue: catalogueMeta({slug:component,path:pagePath(system,page),summary:page.summary ?? undefined}),
    visualComparisons: {
      kind: 'static-editorial' as const,
      variants: getComponentComparisons(component, contract, 'variants'),
      states: getComponentComparisons(component, contract, 'states'),
    },
    contractReference: page.contract ?? null,
    contract: contract ?? null,
    contractArtifacts: contract ? Object.entries(contract.artifacts ?? Object.fromEntries(Object.entries(contract.files).map(([name, file]) => [name, file.sha256]))).map(([path, sha256]) => ({
      path, sha256, url: contractFileUrl(contract.library, component, contract.revision, path),
    })) : [],
    demo,
    styleAssets: contract?.styleAssets?.map(asset=>({...asset,url:contractAssetUrl(system, component, contract.library, contract.revision, asset.path)})) ?? [],
    referenceFrameworks: references,
    designPreview: previewHash ? { path: previewPath, sha256: previewHash, kind: 'static-design' as const, url: contractFileUrl(contract!.library, component, contract!.revision, previewPath, true) } : null,
    implementations: implementations.map(({ id, name, platform, releaseStatus, packageName, packageVersion, owner, contexts, contract, verification }) => ({
      id, name, platform, releaseStatus, packageName, packageVersion, owner, contexts, contract, verification,
      framework: references.find(ref => ref.packagePrefix && packageName?.startsWith(ref.packagePrefix))?.framework ?? null,
    })),
  }
}

export async function readPublishedSection(system: string, section: string) {
  const designSystem = await readSystem(system)
  if (!designSystem) return null
  const page = await (await documentationData()).page(designSystem, {slugs:[system + '-' + section,section]})
  return page?.component ? undefined : page
}

export async function listPublishedComponents(system: string) {
  const designSystem = await readSystem(system)
  if (!designSystem) return []
  return (await (await documentationData()).pages(designSystem)).filter(page => page.component).sort((a,b) => a.title.localeCompare(b.title))
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
