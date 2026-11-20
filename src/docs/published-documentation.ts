import { patternCatalog } from './pattern-catalog'
import { designResources } from './design-resources'
import { readTemplate } from './page-templates'
import config from '@payload-config'
import { getPayload } from 'payload'
import { publicContent, readPublishedSection } from './component-pages'
import { layoutExamples } from './layout-metadata'

import { pagePath, readSystem, relationId, sectionSlug } from './systems'

export type Entry = {
  slug: string
  title: string
  path: string
  summary?: string
  pageType?: string
  children?: Entry[]
  kind: 'section' | 'layout-example' | 'component'
}

export async function documentationTree(system: string) {
  const designSystem = await readSystem(system)
  if (!designSystem) return null

  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages', draft: false, pagination: false, depth: 0, sort: ['order', 'title'],
    select: { slug: true, component: true, title: true, content: true, parent: true, summary: true, pageType: true, template: true },
    where: { and: [{ designSystem: { equals: designSystem.id } }, { _status: { equals: 'published' } }] },
  })
  const searchText = new Map<string, string>()
  const visible = docs.filter((page) => page.id !== relationId(designSystem.home) || page.pageType !== 'overview')
  const entries = new Map(visible.map((page) => {
    const path = pagePath(system, page)
    const slug = page.component || sectionSlug(system, page.slug)
    searchText.set(path, [JSON.stringify(designResources(system, slug) ?? ''), plainText(page.content), ...readTemplate(page.pageType, page.template).map(({ label, text }) => label + ' ' + text)].join(' '))
    const entry: Entry = {
      slug, path, title: page.title, summary: page.summary ?? undefined,
      pageType: page.pageType ?? undefined,
      kind: page.component ? 'component' : 'section',
      children: [],
    }
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

  return { tree, searchText }
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
      text.push(block.title, block.summary, block.caption, block.source, ...block.steps.flatMap(step => [step.title, step.description, step.next ?? '']))
    } else if (block.blockType === 'messageComparison') {
      text.push(block.title, ...block.items.flatMap(item => [item.context, item.before, item.after, item.reason]))
    } else {
      text.push(block.explanation)
      if (block.blockType === 'study' || block.blockType === 'componentStudy') text.push(block.title, block.source ?? '', block.revision ?? '')
    }
  }
  return text.join(' ')
}

function normalize(value: string) {
  return value.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '').replaceAll('ß', 'ss')
}

export async function searchDocumentation(system: string, query: string, limit: number) {
  const documentation = await documentationTree(system)
  if (!documentation) return null

  const terms = normalize(query).split(/\s+/)
  return flattenDocumentation(documentation.tree).flatMap((entry) => {
    const title = normalize(entry.title + ' ' + entry.slug)
    const body = normalize((entry.summary ?? '') + ' ' + documentation.searchText.get(entry.path))
    if (!terms.every((term) => title.includes(term) || body.includes(term))) return []
    return [{ entry, score: terms.filter((term) => title.includes(term)).length }]
  }).sort((a, b) => b.score - a.score).slice(0, limit).map(({ entry }) => entry)
}

export async function getDocumentationPage(system: string, section: string, example?: string) {
  const page = await readPublishedSection(system, section)
  if (!page) return null

  const path = '/systems/' + system + '/' + section
  if (example) {
    const layout = system === 'shadcn' && section === 'layout' && layoutExamples.find(({ id }) => id === example)
    return layout ? { kind: 'layout-example', path: path + '/' + example, ...layout } : null
  }

  return {
    kind: 'section',
    path,
    title: page.title,
    pageType: page.pageType,
    summary: page.summary,
    updatedAt: page.updatedAt,
    content: publicContent(page.content),
    templateSections: readTemplate(page.pageType, page.template),
    resources: designResources(system, section),
    ...(section === 'patterns' && {patterns: patternCatalog(page.content)}),
  }
}

export function flattenDocumentation(entries: Entry[]): Entry[] {
  return entries.flatMap(({ children, ...entry }) => [entry, ...flattenDocumentation(children ?? [])])
}
