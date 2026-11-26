import {EditorialPage} from '../../../../../../docs/editorial-page'
import { SiteAnchor } from '../../../../../../docs/site-anchor'
import '../../../../../../docs/component-page.css'
import { CopyValue } from '../../../../../../docs/copy-value'
import { ContractSource } from '../../../../../../docs/contract-source'
import { loadPageRework } from '../../../../../../docs/page-reworks/registry'
import type { Page } from '../../../../../../payload-types'
import { HandbookContext } from '../../../../../../docs/handbook-context'
import { TemplateContent } from '../../../../../../docs/template-content'
import { notFound } from 'next/navigation'
import { DocumentationNav } from '../../../../../../docs/documentation-nav'
import { documentationTree } from '../../../../../../docs/published-documentation'
import { readSystem } from '../../../../../../docs/systems'
import { getComponentPage } from '../../../../../../docs/component-pages'
import { Content } from '../../../../../../docs/content'
import { ComponentDemo } from '../../../../../../docs/demo'
import { ComponentHashLinks } from '../../../../../../docs/component-hash-links'
import { ComponentNextSteps } from '../../../../../../docs/component-next-steps'
import { ComponentHandbook } from '../../../../../../docs/component-handbook'
import { blockAnchor } from '../../../../../../docs/content-outline'
import { componentTemplateCoverage } from '../../../../../../docs/component-standard'


const domains = [
  ['interface', 'Schnittstelle (CEM)', 'json'],
  ['tokens', 'Design-Tokens (DTCG)', 'json'],
  ['css', 'Darstellung (CSS)', 'css'],
  ['behavior', 'Verhalten (SCXML)', 'xml'],
  ['accessibility', 'Semantik (HTML/ARIA)', 'xml'],
  ['accessibilityRules', 'Accessibility-Regeln', 'json'],
  ['ux', 'UX-Eignung', 'json'],
  ['stories', 'Stories', 'json'],
] as const

export default async function ComponentPage({ params }: {
  params: Promise<{ system: string; component: string }>
}) {
  const { system, component } = await params
  const [page, documentation, designSystem] = await Promise.all([getComponentPage(system, component), documentationTree(system), readSystem(system)])
  if (!page || !documentation || !designSystem) notFound()

  const contract = page.contract
  const scopeNote = page.content.find(block => block.blockName === 'complete-reference-scope')
  const editorialContent = page.content.filter(block => block !== scopeNote)
  const usesComponentStandard = componentTemplateCoverage(editorialContent as unknown as Page['content']).every(section=>section.blocks.length===1)
  const platformLabels = { web: 'Web', ios: 'iOS', android: 'Android' } as const
  const useSharedHandbook = usesComponentStandard && component !== 'button'
  const ReworkedPage = system === 'shadcn' && !useSharedHandbook ? await loadPageRework(component) : undefined

  return (
    <main id="inhalt" className="shell docs-layout" data-system-theme={designSystem.theme}>
      <DocumentationNav system={system} tree={documentation.tree} current={page.path} />
      <EditorialPage className="article component-documentation" editorial={page.editorial}>
        <ComponentHashLinks pagePath={page.path}/>
        <HandbookContext system={system} name={designSystem.name} tree={documentation.tree} current={page.path} />
        <h1>{page.title}</h1>
        {page.summary && <p className="lead">{page.summary}</p>}
        <p className="component-reference-label">Gestaltungsreferenz{page.demo ? ' · mit lokalem Beispiel zum Ausprobieren' : usesComponentStandard ? ' · mit statischem Beispiel' : ''}</p>
        <nav aria-label="Auf dieser Komponentenseite" className="component-jumps">
          {usesComponentStandard ? <SiteAnchor href={useSharedHandbook ? '#komponenten-beispiel' : '#live-beispiel'}>Beispiel</SiteAnchor> : page.demo ? <SiteAnchor href="#live-beispiel">Beispiel</SiteAnchor> : page.designPreview ? <SiteAnchor href="#design-vorschau">Designvorschau</SiteAnchor> : null}
          {editorialContent.filter(block => block.blockName === 'variants' || block.blockName === 'states').map(block => <SiteAnchor key={block.blockName} href={'#' + blockAnchor(block as unknown as NonNullable<Page['content']>[number])}>{block.blockName === 'variants' ? 'Varianten' : 'Zustände'}</SiteAnchor>)}
          <SiteAnchor href="#weiterarbeiten">Weiterarbeiten</SiteAnchor>
          <SiteAnchor href="#nachweise">Nachweise</SiteAnchor>
        </nav>
        {useSharedHandbook ? <ComponentHandbook component={component} contract={contract ?? undefined} content={editorialContent as unknown as Page['content']} demo={page.demo ?? undefined} /> : ReworkedPage ? <>{!usesComponentStandard && <p className="component-study-scope">Spartan · Angular-Referenz und vorhandene Gestaltungsstudie</p>}<ReworkedPage content={editorialContent as unknown as Page['content']} demo={page.demo ?? undefined} contract={contract ?? undefined} /></> : <>
        <TemplateContent sections={page.templateSections} />
        <Content blocks={editorialContent} />
        </>}
        {page.demo && !ReworkedPage && !useSharedHandbook && (
          <section className="component-section" id="live-beispiel">
            <h2>Spartan-Beispiel ausprobieren</h2>
            {(component === 'checkbox' || component === 'switch') && (
              <p>Spartan verwendet hier einen Button mit ARIA-Rolle. Die gebundene Contract-Vorlage verwendet ein natives Checkbox-Eingabefeld.</p>
            )}
            <ComponentDemo demoKey={page.demo.key ?? undefined} label={page.demo.label ?? undefined} initialVariant={page.demo.variant ?? undefined} />
          </section>
        )}
        <ComponentNextSteps data={page.nextSteps}/>
        <section className="component-section component-reference-details" id="nachweise">
          <h2>Referenz und Nachweise</h2>
          <div className="component-availability" aria-label="Verfügbarer Stand">
            <span>Contract <strong>{contract?.status === 'complete' ? 'Quellenreferenz vollständig' : contract?.status === 'draft' ? 'Entwurf' : contract?.status ?? 'nicht verknüpft'}</strong></span>
            <span>{page.implementations.length ? page.implementations.map(entry => `${platformLabels[entry.platform]} · ${entry.releaseStatus}`).join(' / ') : 'Keine Implementierung veröffentlicht'}</span>
            {page.demo && <span>Angular-Beispiel · Spartan</span>}
          </div>
          {page.demo && !usesComponentStandard && <p className="component-demo-note">{page.implementations.length ? (page.implementations.every(entry => entry.releaseStatus === 'preview') ? 'Der veröffentlichte Stand ist eine Preview. Prüfumfang und Contractbezug stehen im Plattformstand.' : 'Das lokale Beispiel ist bedienbar. Veröffentlichte Implementierungen und ihre Prüfgrenzen stehen im Plattformstand.') : 'Das Live-Beispiel dient dem Ausprobieren; es ist kein veröffentlichter Implementierungsnachweis.'}</p>}
          {scopeNote && <details className="component-reference-scope"><summary>Referenz und Prüfstand einordnen</summary><Content blocks={[scopeNote]} /></details>}
          {page.designPreview && <details className="component-design-preview">
            <summary>Designvorschau der Quellenreferenz</summary><figure id="design-vorschau"><div className="component-preview-image" tabIndex={0} role="region" aria-label="Quellenvorschau, bei Bedarf scrollbar"><img src={page.designPreview.url} alt={`Statische Designvorschau: ${page.title}`}/></div><figcaption>Statische Vorschau aus dem gewählten Export. <SiteAnchor href={page.designPreview.url} target="_blank" rel="noreferrer">In Originalgrösse öffnen ↗</SiteAnchor></figcaption></figure>
          </details>}
          <nav className="component-evidence-jumps" aria-label="Nachweise dieser Komponente"><SiteAnchor href="#plattformstand">Plattformstand</SiteAnchor><SiteAnchor href="#contract">Technischer Contract</SiteAnchor></nav>
        </section>
        <section className="component-section" id="plattformstand">
          <h2>Plattformen und Implementierungen</h2>
          <table className="component-platforms">
            <caption>In Arve dokumentierte Einbindungen mit eigenem Prüfumfang. Framework-Referenzen werden darunter separat aufgeführt.</caption>
            <thead><tr><th scope="col">Plattform</th><th scope="col">Verfügbarkeit</th></tr></thead>
            <tbody>{(['web', 'ios', 'android'] as const).map(platform => {
              const entries = page.implementations.filter(entry => entry.platform === platform)
              return <tr key={platform}><th scope="row">{platformLabels[platform]}</th><td>
                {entries.length === 0 ? 'Keine Implementierung veröffentlicht' : entries.map(entry => <div key={entry.id}>
                  <strong>{entry.name}</strong> <span className="component-status">{entry.releaseStatus}</span>
                  {entry.framework && <p>{entry.framework}</p>}
                  {!!entry.contexts?.length && <p>{entry.contexts.map(context => context === 'mobile' ? 'Mobiles Web' : 'Desktop-Web').join(' · ')}</p>}
                  <details className="component-evidence"><summary>Paket, Contractbezug und Prüfgrenzen</summary>
                    {entry.packageName && <p><code>{entry.packageName} {entry.packageVersion}</code></p>}
                    {entry.owner && <p>Team: {entry.owner}</p>}
                    {entry.contract?.revision && <>
                      <p>{entry.contract.revision === contract?.revision ? 'Implementierung und Seitencontract beziehen sich auf denselben Stand.' : 'Die Implementierung ist an einen anderen Contractstand gebunden als diese Seite. Der historische Bezug bleibt erhalten.'}</p>
                      <CopyValue label="Contract der Implementierung" value={entry.contract.revision} />
                      {contract && <CopyValue label="Contract dieser Seite" value={contract.revision} />}
                    </>}
                    {entry.verification?.scope && <p>{entry.verification.scope}</p>}
                    {entry.verification?.evidence && <p>Nachweis: {entry.verification.evidence}</p>}
                  </details>
                </div>)}
              </td></tr>
            })}</tbody>
          </table>
          {!!page.referenceFrameworks.length && <details className="component-frameworks"><summary>Framework-Referenzen · React, Angular und native Plattformen</summary>
            <p>Diese Bibliotheken sind Referenzen für das Designsystem. Ihre Abdeckung dieser Komponente und die Übereinstimmung mit dem gewählten Contract müssen je Framework geprüft werden.</p>
            <ul>{page.referenceFrameworks.map(ref => <li key={ref.id}><SiteAnchor href={ref.sourceUrl}>{ref.name} ↗</SiteAnchor> · {ref.framework} · {ref.platforms.join(' / ')}<small>{ref.relationship}</small></li>)}</ul>
            <SiteAnchor href={`/systems/${system}/frameworks`}>Frameworks und Prüfstände im Überblick →</SiteAnchor>
          </details>}
        </section>
        <section className="component-section" id="contract">
          <h2>Technischer Contract</h2>
          {contract ? (
            <>
              <p className="component-contract-meta">{contract.library} <span className="component-status">{contract.status}</span>{contract.status === 'draft' && ' · Entwurf, keine allgemeine Konformitäts- oder Produktionsfreigabe.'}</p>
              {contract.status === 'complete' && <p className="component-contract-release">Abgeschlossene Quellenreferenz · release: false. Konkrete Implementierungen behalten ihren eigenen Prüfstand.</p>}
              <p className="component-domain-list">{domains.filter(([domain]) => contract.files[contract.sources[domain]]).map(([, title]) => title).join(' · ')}</p>
              {page.implementations.some(entry => entry.contract?.revision && entry.contract.revision !== contract.revision) && <p className="component-revision-note">Seitencontract und Implementierung haben unterschiedliche Contractstände. <SiteAnchor href="#plattformstand">Bezug im Plattformstand vergleichen</SiteAnchor>.</p>}
              <details className="component-export-details">
                <summary>Export-Revision und Downloads</summary>
                <CopyValue label="Export-Revision dieser Seite" value={contract.revision} />
              {contract.artifacts && (
                <details>
                  <summary>Dateien im Bibliotheksimport</summary>
                  <ul>{page.contractArtifacts.map((file) => <li key={file.path}><SiteAnchor href={file.url} download><code>{file.path}</code></SiteAnchor></li>)}</ul>
                </details>
              )}
              </details>
              {!!page.styleAssets.length && <details className="component-export-details">
                <summary>CSS und Schriftdateien</summary>
                <p>Die CSS-Importkette und ihre lokalen Dateien gehören zu dieser Revision. Die Ordnerstruktur bleibt erhalten, damit relative Verweise aufgelöst werden können.</p>
                <ul>{page.styleAssets.map(file=><li key={file.path}><SiteAnchor href={file.url} download><code>{file.path}</code></SiteAnchor>{file.kind==='font'?' · Schriftdatei':''}</li>)}</ul>
              </details>}
              {domains.map(([domain, title, language]) => {
                const source = contract.files[contract.sources[domain]]
                if (!source && (domain === 'ux' || domain === 'stories')) return null
                if (!source) return <p key={domain}>{title} · Im Export fehlt eine Bindung.</p>
                const artifact=page.contractArtifacts.find(file=>file.path===source.path)
                return artifact?<ContractSource key={domain+contract.revision} title={title} path={source.path} url={artifact.url} sha256={source.sha256} language={language}/>:null
              })}
            </>
          ) : <p>Für diese Seite ist kein verfügbarer Contract-Export verknüpft.</p>}
        </section>
      </EditorialPage>
    </main>
  )
}
