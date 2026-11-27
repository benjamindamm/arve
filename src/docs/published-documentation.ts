import {externalSourcesOf} from './external-sources'
import {editorialOf,type Editorial} from './editorial'
import type {Page,DesignSystem} from '../payload-types'
import { isLayoutRedirect,legacyLayoutSections } from './handbook-paths'
import { catalogueMeta } from './component-catalogue-data'
import { patternCatalog } from './pattern-catalog'
import { designResources } from './design-resources'
import { readTemplate } from './page-templates'
import { documentationData } from './documentation-data'
import { publicContent, readPublishedSection } from './component-pages'
import { layoutExamples } from './layout-metadata'
import { searchDocuments, type SearchDocument } from './documentation-search'

import { pageSections, snapshotOf } from './mcp-reads'

import { pagePath, readSystem, relationId, sectionSlug } from './systems'

export type Entry = {
  slug: string
  editorial?: Editorial
  title: string
  path: string
  summary?: string
  pageType?: string
  children?: Entry[]
  kind: 'section' | 'layout-example' | 'component'
  guidance?: { scope: string; sourceBlock: string }
  relatedGuidance?: { title: string; why: string; scope: string; read: NonNullable<Entry['matchedSection']> }[]
  pattern?: { id: string; status: 'candidate'; scope: string; observations: string }
  matchedSection?: { tool: 'get_documentation_section'; arguments: { system: string; section: string; snapshot: string; sectionId: string; offset: number; limit: number } }
  retrieval?: { tool: 'get_component_page' | 'get_documentation_page'; arguments: { system: string; component?: string; section?: string; example?: string } }
}

// Editorial discovery metadata only. These task labels describe the published
// sums preview / offer comparison, and do not add rules, verification or approval.
const patternDiscoveryAliases: Record<string, string[]> = {
  'UX-021': ['Gesamtbetrag', 'Gesamtsumme', 'Betrag', 'Zusammenfassung', 'Summen prüfen', 'Folgen', 'Konsequenzen'],
  'UX-024': ['Kostenvergleich', 'Preisvergleich'],
}

// Task-to-source navigation, not additional source wording. Each label is
// attached to one original block; page-level example decisions stay out of scope.
const guidanceDiscovery = [
  { slug: 'main-sidebar', key: 'ms-rules', aliases: ['Kosten', 'Gesamtbetrag', 'Zusammenfassung', 'Folgen', 'Konsequenzen'], why: 'Place information needed for a decision in the main task content; this is an editorial task connection, not a cost calculation rule.' },
  { slug: 'formulare-validierung', key: 'goals', aliases: ['Zusammenfassung', 'ungewisses Ergebnis', 'ungeklärtes Ergebnis', 'ungewiss', 'ungeklärt', 'unbekannt'], why: 'Explain required information and distinguish submitted, confirmed and unknown outcomes; local form examples remain separate.' },
  { slug: 'content-design', key: 'writing-rules', aliases: [], why: 'Name the next action precisely: checking information and transmitting it are different actions.' },
  { slug: 'content-design', key: 'writing-messages', aliases: ['ungewisses Ergebnis', 'ungeklärtes Ergebnis', 'ungewiss', 'ungeklärt', 'unbekannt'], why: 'Match messages to known outcome evidence; the project wording and numerical limits belong to the local example.' },
  { slug: 'laden-leer-fehler', key: 'states-rules', aliases: ['ungewisses Ergebnis', 'ungeklärtes Ergebnis', 'ungewiss', 'ungeklärt', 'unbekannt'], why: 'Distinguish unknown saving results from confirmed failure and offer only available safe next steps.' },
] as const

export async function documentationTree(system: string) {
  const designSystem = await readSystem(system)
  if (!designSystem) return null

  const docs = await (await documentationData()).pages(designSystem)
  const searchText = new Map<string, string>()
  const searchDocuments: SearchDocument[] = []
  const visible = docs.filter((page) => !isLayoutRedirect(page) && (page.id !== relationId(designSystem.home) || page.pageType !== 'overview'))
  const patternPage = visible.some(page => !page.component && sectionSlug(system, page.slug) === 'patterns') ? await getDocumentationPage(system, 'patterns',undefined,{designSystem,docs}) : null
  const guidancePages = new Map(await Promise.all([...new Set(guidanceDiscovery.map(item => item.slug))].map(async slug => [slug, await getDocumentationPage(system, slug,undefined,{designSystem,docs})] as const)))
  const guidanceHits: SearchDocument[] = guidanceDiscovery.flatMap(config => {
    const page = guidancePages.get(config.slug)
    const section = page && pageSections(page).find(section => section.key === config.key)
    if (!page || !section) return []
    return [{ entry: { slug: config.slug, title: page.title + ' · ' + section.title, path: page.path, kind: 'section' as const,
      summary: config.why, editorial:page.editorial, guidance: { sourceBlock: config.key, scope: 'This original guidance block only; local examples and layout measurements elsewhere on the page are not general requirements.' },
      retrieval: { tool: 'get_documentation_page' as const, arguments: { system, section: config.slug } },
      matchedSection: { tool: 'get_documentation_section' as const, arguments: { system, section: config.slug, snapshot: snapshotOf(page), sectionId: section.id, offset: 0, limit: 6000 } } },
      discoveryAliases: [...config.aliases], sections: [{ id: section.id, text: section.text }] }]
  })
  searchDocuments.push(...guidanceHits)
  const patternSections = patternPage ? pageSections(patternPage) : []
  const patternSnapshot = patternPage ? snapshotOf(patternPage) : undefined
  const entries = new Map(visible.map((page) => {
    const path = pagePath(system, page, docs)
    const slug = page.component || sectionSlug(system, page.slug)
    const catalogue = page.component ? catalogueMeta({slug,path,summary:page.summary ?? undefined}) : undefined
    searchText.set(path, [catalogue?.description ?? '', catalogue?.keywords ?? '', JSON.stringify(designResources(system, slug) ?? ''), plainText(page.content), ...readTemplate(page.pageType, page.template).map(({ label, text }) => label + ' ' + text)].join(' '))
    const entry: Entry = {
      slug, path, title: page.title, summary: page.summary ?? undefined, editorial:editorialOf(page),
      pageType: page.pageType ?? undefined,
      kind: page.component ? 'component' : page.content?.some(b=>b.blockName?.startsWith('guide-visual-demo-'))?'layout-example':'section',
      retrieval: page.component ? { tool: 'get_component_page', arguments: { system, component: page.component } } : { tool: 'get_documentation_page', arguments: { system, section: slug } },
      children: [],
    }
    const patterns = slug === 'patterns' && !page.component ? patternCatalog(page.content) : []
    for (const pattern of patterns) {
      const block = page.content?.find(block => block.blockName === pattern.id)
      if (!block) continue
      const section = patternSections.find(section => section.key === pattern.id)
      searchDocuments.push({
        entry: { ...entry, children: undefined, title: pattern.title, summary: pattern.task, path,
          ...(section && patternSnapshot ? { matchedSection: { tool: 'get_documentation_section' as const, arguments: { system, section: slug, snapshot: patternSnapshot, sectionId: section.id, offset: 0, limit: 6000 } } } : {}),
          ...(pattern.id === 'UX-021' ? { relatedGuidance: guidanceHits.filter(hit => ['ms-rules', 'goals', 'writing-rules'].includes(hit.entry.guidance!.sourceBlock)).map(hit => ({ title: hit.entry.title, why: hit.entry.summary!, scope: hit.entry.guidance!.scope, read: hit.entry.matchedSection! })) } : {}),
          pattern: { id: pattern.id!, status: pattern.status as 'candidate', scope: 'Observed UI pattern candidate; not an approved rule or evidence of domain correctness.', observations: pattern.observations } },
        keywords: [pattern.category, ...pattern.tags].join(' '),
        discoveryAliases: patternDiscoveryAliases[pattern.id!] ?? [],
        sections: [{ id: pattern.id!, text: [pattern.id, pattern.title, pattern.task, ...pattern.steps.flatMap(step => [step.title, step.description]), pattern.observations].join(' ') }],
      })
    }
    const legacyAliases=Object.entries(legacyLayoutSections).filter(([,target])=>target===slug).map(([alias])=>alias.replaceAll('-',' '))
    searchDocuments.push({ entry, description: catalogue?.description, keywords: catalogue?.keywords, discoveryAliases:legacyAliases.length?legacyAliases:undefined,
      sections: [...(page.content ?? []).filter(block => !patterns.some(pattern => pattern.id === block.blockName)).map(block => ({ id: block.blockName ?? undefined, text: plainText([block]) })),
        ...readTemplate(page.pageType, page.template).map(({ label, text }) => ({ text: label + ' ' + text }))] })
    return [page.id, entry] as const
  }))
  const parents = new Map(visible.map((page) => [page.id, relationId(page.parent)]))
  const tree: Entry[] = []
  for (const [id, entry] of entries) {
    const parentId = parents.get(id)
    const seen = new Set([id])
    let cursor = parentId
    while (cursor && !seen.has(cursor)) {
      seen.add(cursor)
      cursor = parents.get(cursor)
    }
    const parent = !cursor && parentId ? entries.get(parentId) : undefined
    if (parent) parent.children?.push(entry)
    else tree.push(entry)
  }

  return { tree, searchText, searchDocuments }
}

function plainText(content: Parameters<typeof publicContent>[0]) {
  const text: string[] = []
  function visit(node: unknown) {
    if (!node || typeof node !== 'object') return
    if ('text' in node && typeof node.text === 'string') text.push(node.text)
    if ('children' in node && Array.isArray(node.children)) node.children.forEach(visit)
  }
  for (const block of content ?? []) {
    if (block.blockType === 'text') visit(block.body.root)
    else if (block.blockType === 'workflowStudy') {
      text.push(block.blockName ?? '', block.title, block.summary, block.caption, block.source, ...block.steps.flatMap(step => [step.title, step.description, step.next ?? '']))
    } else if (block.blockType === 'messageComparison') {
      text.push(block.title, ...block.items.flatMap(item => [item.context, item.before, item.after, item.reason]))
    } else {
      text.push(block.explanation)
      if (block.blockType === 'study' || block.blockType === 'componentStudy') text.push(block.title, block.source ?? '', block.revision ?? '')
    }
  }
  return text.join(' ')
}

export async function searchDocumentationDetailed(system: string, query: string, limit: number, offset = 0) {
  const documentation = await documentationTree(system)
  return documentation ? searchDocuments(documentation.searchDocuments, system, query, limit, offset) : null
}

// Existing in-process consumers can continue to request entries only.
export async function searchDocumentation(system: string, query: string, limit: number) {
  const result = await searchDocumentationDetailed(system, query, limit)
  return result?.results.map(({ entry }) => entry) ?? null
}

export async function getDocumentationPage(system: string, section: string, example?: string, context?:{designSystem:DesignSystem;docs:Page[]}) {
  const legacyExample=example&&section==='layout'?layoutExamples.find(item=>item.id===example):undefined
  if(example&&!legacyExample)return null
  const designSystem=context?.designSystem??await readSystem(system)
  if(!designSystem)return null
  const docs=context?.docs??await (await documentationData()).pages(designSystem)
  const requested=legacyExample?'beispiele-'+example:section,alias=legacyLayoutSections[requested]
  const matchSlug=(slug:string)=>docs.find(p=>!p.component&&(p.slug===system+'-'+slug||p.slug===slug))
  const page=requested.includes('/')?docs.find(p=>!p.component&&pagePath(system,p,docs)==='/systems/'+encodeURIComponent(system)+'/'+requested):(alias?matchSlug(alias):undefined)??matchSlug(requested)
  if(!page)return null

  return {
    kind: legacyExample?'layout-example':'section',
    path:pagePath(system,page,docs),
    title: page.title,
    pageType: page.pageType,
    editorial:editorialOf(page),
    externalLinks:externalSourcesOf(page),
    summary: page.summary,
    updatedAt: page.updatedAt,
    content: publicContent(page.content),
    templateSections: readTemplate(page.pageType, page.template),
    resources: designResources(system,sectionSlug(system,page.slug)),
    ...(section === 'patterns' && {patterns: patternCatalog(page.content)}),
    ...(legacyExample&&{layout:legacyExample.layout}),
  }
}

export function flattenDocumentation(entries: Entry[]): Entry[] {
  return entries.flatMap(({ children, ...entry }) => [entry, ...flattenDocumentation(children ?? [])])
}
