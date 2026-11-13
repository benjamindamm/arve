import { readTemplate } from '../../../../../docs/page-templates'
import { TemplateContent } from '../../../../../docs/template-content'
import type { CSSProperties } from 'react'
import Link from 'next/link'
import { LayoutExamples } from '../../../../../docs/layout-examples'
import { notFound } from 'next/navigation'
import { readSystem } from '../../../../../docs/systems'
import { Content } from '../../../../../docs/content'
import { readPublishedSection } from '../../../../../docs/component-pages'
import { DocumentationNav } from '../../../../../docs/documentation-nav'
import { documentationTree } from '../../../../../docs/published-documentation'
import { colors, spacing } from '../../../../../docs/shadcn-foundations'

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

export default async function SectionPage({ params }: { params: Promise<{ system: string; section: string }> }) {
  const { system, section } = await params
  const [page, documentation, designSystem] = await Promise.all([readPublishedSection(system, section), documentationTree(system), readSystem(system)])
  if (!page || !documentation || !designSystem) notFound()
  const path = '/systems/' + system + '/' + section
  const find = (entries: typeof documentation.tree): (typeof documentation.tree)[number] | undefined => {
    for (const entry of entries) {
      if (entry.path === path) return entry
      const child = find(entry.children ?? [])
      if (child) return child
    }
  }
  const children = find(documentation.tree)?.children?.filter(({ kind }) => kind !== 'layout-example') ?? []
  const shadcn = system === 'shadcn'

  return (
    <main id="inhalt" className="shell docs-layout" data-system-theme={designSystem.theme}>
      <DocumentationNav system={system} tree={documentation.tree} current={path} />
      <article className="article">
        <h1>{page.title}</h1>
        {page.summary && <p>{page.summary}</p>}
        {shadcn && section === 'farben' && (
          <ul className="token-grid" aria-label="Farb-Tokens der Referenz">
            {colors.map(([token, use]) => (
              <li key={token}>
                <span className="token-swatch" style={{ backgroundColor: 'var(--' + token + ')' }} />
                <code>--{token}</code><small>{use}</small>
              </li>
            ))}
          </ul>
        )}
        {shadcn && section === 'layout' && (
          <>
            <div className="grid-example" role="img" aria-label="Responsives Raster mit vier, acht oder zwölf Spalten">
              {Array.from({ length: 12 }, (_, index) => <span key={index} aria-hidden="true" />)}
            </div>
            <ul className="spacing-scale" aria-label="Abstandsskala">
              {spacing.map((size) => <li key={size}><span style={{ '--size': size + 'px' } as CSSProperties} />{size} px</li>)}
            </ul>
          </>
        )}
        <TemplateContent sections={readTemplate(page.pageType, page.template)} />
        <Content blocks={page?.content} />
        {children.length > 0 && (
          <ul className="component-index">
            {children.map((child) => (
              <li key={child.slug}><Link href={child.path}><strong>{child.title}</strong>{child.summary && ' · ' + child.summary}</Link></li>
            ))}
          </ul>
        )}
        {shadcn && section === 'layout' && <LayoutExamples />}
        {shadcn && related[section] && (
          <section className="component-section" aria-labelledby="weiterlesen">
            <h2 id="weiterlesen">Weiterlesen</h2>
            <ul>{related[section].map(({ title, href }) => <li key={href}><Link href={href}>{title}</Link></li>)}</ul>
          </section>
        )}
      </article>
    </main>
  )
}
