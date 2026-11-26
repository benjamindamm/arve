import {editorialOf} from '../../../../../docs/editorial'
import {EditorialPage} from '../../../../../docs/editorial-page'
import {LegacyDocumentationRedirect} from '../../../../../docs/legacy-documentation-redirect'
import {LayoutGuide} from '../../../../../docs/layout-guide'
import {LayoutPilot} from '../../../../../docs/layout-pilot'
import {DataVisualizationGuide} from '../../../../../docs/data-visualization-guide'
import {pagePath,sectionSlug} from '../../../../../docs/systems'
import {documentationData} from '../../../../../docs/documentation-data'
import {canonicalHandbookHref} from '../../../../../docs/handbook-paths'
import { loadPageRework } from '../../../../../docs/page-reworks/registry'
import { ColorPage } from '../../../../../docs/color-page'
import { FoundationsOverview } from '../../../../../docs/foundations-overview'
import { HandbookOutline } from '../../../../../docs/handbook-outline'
import { HandbookContext } from '../../../../../docs/handbook-context'
import { ContentLayoutExample } from '../../../../../docs/content-layout-example'
import { DesignResourceLinks } from '../../../../../docs/design-resource-links'
import { readTemplate } from '../../../../../docs/page-templates'
import { TemplateContent } from '../../../../../docs/template-content'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { readSystem } from '../../../../../docs/systems'
import { Content } from '../../../../../docs/content'
import { readPublishedSection } from '../../../../../docs/component-pages'
import { DocumentationNav } from '../../../../../docs/documentation-nav'
import { documentationTree } from '../../../../../docs/published-documentation'

const related: Record<string, { title: string; href: string }[]> = {
  grundlagen: [
    { title: 'shadcn/ui · Theming', href: 'https://ui.shadcn.com/docs/theming' },
    { title: 'Atlassian · Foundations', href: 'https://atlassian.design/foundations/' },
  ],
  layout: [{ title: 'shadcn/ui · Blocks', href: 'https://ui.shadcn.com/blocks' }],
  patterns: [
    { title: 'Interaktives Beispiel · Rechnungen finden', href: '/systems/shadcn/beispiele/rechnungen' },
    { title: 'GOV.UK · Patterns', href: 'https://design-system.service.gov.uk/patterns/' },
  ],
  'formulare-validierung': [
    { title: 'Input', href: '/systems/shadcn/components/input' },
    { title: 'Content Design', href: '/systems/shadcn/content-design' },
    { title: 'Barrierefreiheit', href: '/systems/shadcn/barrierefreiheit' },
  ],
  'suchen-filtern': [
    { title: 'Interaktives Beispiel · Rechnungen finden', href: '/systems/shadcn/beispiele/rechnungen' },
    { title: 'Layouts', href: '/systems/shadcn/layout' },
    { title: 'Input', href: '/systems/shadcn/components/input' },
    { title: 'Laden, leer und Fehler', href: '/systems/shadcn/laden-leer-fehler' },
  ],
  'laden-leer-fehler': [
    { title: 'Interaktives Beispiel · Rechnungen finden', href: '/systems/shadcn/beispiele/rechnungen' },
    { title: 'Content Design', href: '/systems/shadcn/content-design' },
    { title: 'Barrierefreiheit', href: '/systems/shadcn/barrierefreiheit' },
  ],
  'technische-anbindung': [{ title: 'Carbon · Design-System und MCP', href: 'https://www.carbondesignsystem.com/getting-started/designing/overview' }],
}

export default async function SectionPage({ params }: { params: Promise<{ system: string; section: string[] }> }) {
  const {system,section:segments}=await params
  const requested=segments.join('/')
  let section=canonicalHandbookHref('/systems/'+system+'/'+requested).slice(('/systems/'+system+'/').length)
  const [page, documentation, designSystem] = await Promise.all([readPublishedSection(system, section), documentationTree(system), readSystem(system)])
  if (!page || !documentation || !designSystem) notFound()
  const path=pagePath(system,page,await (await documentationData()).pages(designSystem))
  if('/systems/'+system+'/'+requested!==path)return <LegacyDocumentationRedirect href={path}/>
  section=sectionSlug(system,page.slug)
  const linkedPaths = new Set<string>()
  const collectLinks = (node: unknown) => {
    if (!node || typeof node !== 'object') return
    const value = node as { type?: string; fields?: { url?: string }; children?: unknown[] }
    if (value.type === 'link' && value.fields?.url) linkedPaths.add(canonicalHandbookHref(value.fields.url))
    value.children?.forEach(collectLinks)
  }
  page.content?.forEach((block) => { if (block.blockType === 'text') collectLinks(block.body.root) })
  const find = (entries: typeof documentation.tree): (typeof documentation.tree)[number] | undefined => {
    for (const entry of entries) {
      if (entry.path === path) return entry
      const child = find(entry.children ?? [])
      if (child) return child
    }
  }
  const children = find(documentation.tree)?.children?.filter(({ kind, path }) => kind !== 'layout-example' && !linkedPaths.has(path)) ?? []
  const shadcn = system === 'shadcn'
  const relatedEntries = shadcn ? (related[section] ?? []).map(e=>({...e,href:canonicalHandbookHref(e.href)})).filter(({ href }) => !linkedPaths.has(href)) : []

  const foundationsOverview = shadcn && section === 'grundlagen'
  const colorPage = shadcn && section === 'farben'
  const patternCatalog = shadcn && section === 'patterns'
  const componentCatalogue = shadcn && section === 'komponenten'
  const catalogueEntries = componentCatalogue ? find(documentation.tree)?.children?.filter(entry=>entry.kind==='component') ?? [] : undefined
  const guide=page.content?.some(b=>b.blockName==='layout-guide')
  const pilot=page.content?.some(b=>b.blockName==='pilot-scope')
  const dataVisualization=page.content?.some(b=>b.blockName==='data-viz-guide')
  const rendererKey=({'label-value':'content-layout-label-value','section-header':'content-layout-card-header'} as Record<string,string>)[section]??section
  const ReworkedPage = shadcn&&!guide&&!pilot ? await loadPageRework(rendererKey) : undefined

  return (
    <main id="inhalt" className="shell docs-layout" data-system-theme={designSystem.theme}>
      <DocumentationNav system={system} tree={documentation.tree} current={path} />
      <EditorialPage className="article" editorial={editorialOf(page)}>
        <HandbookContext system={system} name={designSystem.name} tree={documentation.tree} current={path} />
        <h1>{page.title}</h1>
        {page.summary && !patternCatalog && <p className="lead">{page.summary}</p>}
        {!patternCatalog && !componentCatalogue && !pilot && section!=='formulare-validierung' && <HandbookOutline scopeSelector={section==='formulare-validierung'?'.forms-current':undefined} key={path} initiallyCollapsed={section==='formulare-validierung'||dataVisualization||guide||pilot||shadcn && ['layout', 'page-types', 'page-layouts', 'content-layouts', 'beispiele', 'page-type-overview', 'main-sidebar', 'farben', 'themes-und-zustaende', 'typografie', 'abstaende', 'form-und-ebenen', 'icons', 'bewegung'].includes(section)} />}
        {dataVisualization?<DataVisualizationGuide content={page.content}/>:pilot?<LayoutPilot content={page.content}/>:guide?<LayoutGuide content={page.content}/>:ReworkedPage ? <ReworkedPage content={page.content} {...(patternCatalog ? { summary: page.summary } : {})} catalogueEntries={catalogueEntries} /> : foundationsOverview ? <FoundationsOverview content={page.content} /> : colorPage ? <ColorPage content={page.content} /> : <>
        <TemplateContent sections={readTemplate(page.pageType, page.template)} />
        <DesignResourceLinks system={system} section={section} />
        {shadcn && <ContentLayoutExample section={section} />}
        {shadcn && section.startsWith('content-layout-') ? <>
          <Content blocks={page.content?.slice(0, -1)} />
          <details><summary>Quelle und Stand</summary><Content blocks={page.content?.slice(-1)} /></details>
        </> : <Content blocks={page?.content} />}
        </>}
        {!foundationsOverview && !componentCatalogue && children.length > 0 && (
          <ul className="component-index">
            {children.map((child) => (
              <li key={child.slug}><Link href={child.path}><strong>{child.title}</strong>{child.summary && ' · ' + child.summary}</Link></li>
            ))}
          </ul>
        )}
        {!foundationsOverview && relatedEntries.length > 0 && (
          <section className="component-section" aria-labelledby="weiterlesen">
            <h2 id="weiterlesen">Weiterlesen</h2>
            <ul>{relatedEntries.map(({ title, href }) => <li key={href}><Link href={href}>{title}</Link></li>)}</ul>
          </section>
        )}
      </EditorialPage>
    </main>
  )
}
