import { TemplateContent } from '../../../../../../docs/template-content'
import hljs from 'highlight.js/lib/core'
import Link from 'next/link'
import css from 'highlight.js/lib/languages/css'
import json from 'highlight.js/lib/languages/json'
import xml from 'highlight.js/lib/languages/xml'
import { notFound } from 'next/navigation'
import { DocumentationNav } from '../../../../../../docs/documentation-nav'
import { documentationTree } from '../../../../../../docs/published-documentation'
import { readSystem } from '../../../../../../docs/systems'
import { getComponentPage } from '../../../../../../docs/component-pages'
import { Content } from '../../../../../../docs/content'
import { ComponentDemo } from '../../../../../../docs/demo'

hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)
hljs.registerLanguage('json', json)

const domains = [
  ['interface', 'Schnittstelle (CEM)', 'json'],
  ['tokens', 'Design-Tokens (DTCG)', 'json'],
  ['css', 'Darstellung (CSS)', 'css'],
  ['behavior', 'Verhalten (SCXML)', 'xml'],
  ['accessibility', 'Semantik (HTML/ARIA)', 'xml'],
  ['accessibilityRules', 'Accessibility-Regeln', 'json'],
] as const

export default async function ComponentPage({ params }: {
  params: Promise<{ system: string; component: string }>
}) {
  const { system, component } = await params
  const [page, documentation, designSystem] = await Promise.all([getComponentPage(system, component), documentationTree(system), readSystem(system)])
  if (!page || !documentation || !designSystem) notFound()

  const contract = page.contract

  return (
    <main id="inhalt" className="shell docs-layout" data-system-theme={designSystem.theme}>
      <DocumentationNav system={system} tree={documentation.tree} current={page.path} />
      <article className="article">
        {system === 'shadcn' && <p><Link href="/systems/shadcn/komponenten">← Komponenten</Link></p>}
        <h1>{page.title}</h1>
        <TemplateContent sections={page.templateSections} />
        <Content blocks={page.content} />
        <section className="component-section">
          <h2>Plattformen und Implementierungen</h2>
          <div className="architecture-grid">
            {([['web', 'Web'], ['ios', 'iOS'], ['android', 'Android']] as const).map(([platform, label]) => {
              const entries = page.implementations.filter((entry) => entry.platform === platform)
              return <section className="card" key={platform}>
                <h3>{label}</h3>
                {entries.length === 0 && <p>Keine Implementierung veröffentlicht.</p>}
                {entries.map((entry) => <div key={entry.id} className="implementation">
                  <strong>{entry.name}</strong>
                  <p>Freigabestatus: {entry.releaseStatus}</p>
                  {entry.packageName && <p><code>{entry.packageName} {entry.packageVersion}</code></p>}
                  {!!entry.contexts?.length && <p>{entry.contexts.map((context) => context === 'mobile' ? 'Mobiles Web' : 'Desktop-Web').join(' · ')}</p>}
                  {entry.owner && <p>Team: {entry.owner}</p>}
                  {entry.contract?.revision && <p className="contract-revision">Contract: <code>{entry.contract.revision}</code></p>}
                  {entry.verification?.scope && <p>{entry.verification.scope}</p>}
                  {entry.verification?.evidence && <p>Nachweis: {entry.verification.evidence}</p>}
                </div>)}
              </section>
            })}
          </div>
        </section>
        {page.demo && (
          <section className="component-section" id="live-beispiel">
            <h2>Spartan-Beispiel ausprobieren</h2>
            {(component === 'checkbox' || component === 'switch') && (
              <p>Spartan verwendet hier einen Button mit ARIA-Rolle. Die gebundene Contract-Vorlage verwendet ein natives Checkbox-Eingabefeld.</p>
            )}
            <ComponentDemo demoKey={page.demo.key ?? undefined} label={page.demo.label ?? undefined} initialVariant={page.demo.variant ?? undefined} />
          </section>
        )}
        <section className="component-section">
          <h2>Technischer Contract</h2>
          {contract ? (
            <>
              <p>Bibliothek {contract.library} · Status {contract.status} · Lokaler Arbeitsstand</p>
              <p className="contract-revision">Export-Revision <code>{contract.revision}</code></p>
              {domains.map(([domain, title, language]) => {
                const source = contract.files[contract.sources[domain]]
                if (!source) return <p key={domain}>{title} · Im Export fehlt eine Bindung.</p>
                return (
                  <details key={domain} open={domain === 'behavior'}>
                    <summary>{title} · {source.path}</summary>
                    <pre className="contract-code"><code dangerouslySetInnerHTML={{
                      __html: hljs.highlight(source.content, { language }).value,
                    }} /></pre>
                    <p className="contract-revision">SHA-256 <code>{source.sha256}</code></p>
                  </details>
                )
              })}
            </>
          ) : <p>Für diese Seite ist kein verfügbarer Contract-Export verknüpft.</p>}
        </section>
      </article>
    </main>
  )
}
