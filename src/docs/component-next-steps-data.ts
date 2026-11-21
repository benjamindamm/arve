import { contractFileUrl, sitePath, staticPublication } from './site-path'
import { designResources } from './design-resources'

export type ComponentNextStepLink = { label: string; href: string; download?: boolean; scope?: string }
export type ComponentNextStep = { id: string; title: string; description: string; links: ComponentNextStepLink[]; scope?: string }
export type ComponentNextStepsData = { id: string; title: string; scopeTitle: string; steps: ComponentNextStep[] }
type PublishedEntry = { slug: string; path: string; title: string; children?: readonly PublishedEntry[] }
export type ComponentNextStepsInput = {
  system: string
  component: string
  pagePath: string
  contract?: { library: string; component: string; revision: string; artifacts?: Record<string, string>; files?: Record<string, { sha256: string }> } | null
  documentation: readonly PublishedEntry[]
  implementations: readonly { releaseStatus: string; contract?: { revision?: string | null } | null }[]
  referenceFrameworks?: readonly { framework: string; name: string }[]
}

// Editorial associations apply to the published shadcn project pilot only.
const pilotTasks: Record<string, { slug: string; label: string }> = {
  button: { slug: 'formulare-validierung', label: 'Aktionen im Formular gestalten' },
  input: { slug: 'formulare-validierung', label: 'Eingaben im Formular gestalten' },
  field: { slug: 'formulare-validierung', label: 'Felder und Validierung gestalten' },
  label: { slug: 'formulare-validierung', label: 'Felder und Validierung gestalten' },
  select: { slug: 'suchen-filtern', label: 'Auswahl als Filter gestalten' },
  'native-select': { slug: 'suchen-filtern', label: 'Auswahl als Filter gestalten' },
  'data-table': { slug: 'suchen-filtern', label: 'Ergebnislisten gestalten' },
  table: { slug: 'suchen-filtern', label: 'Ergebnislisten gestalten' },
}

/** Public next actions shared by the page and MCP. Derives only registered assets and published routes. */
export function componentNextSteps(input: ComponentNextStepsInput): ComponentNextStepsData {
  const { system, component, contract, implementations } = input
  const entries: PublishedEntry[] = []
  const collect = (items: readonly PublishedEntry[]) => items.forEach(item => { entries.push(item); if (item.children) collect(item.children) })
  collect(input.documentation)
  const section = (slug: string) => entries.find(entry =>
    (entry.slug === slug || entry.slug === `${system}-${slug}`) &&
    entry.path === `/systems/${encodeURIComponent(system)}/${slug}`)
  const onPage = (anchor: string) => sitePath(`${input.pagePath}#${anchor}`)
  const steps: ComponentNextStep[] = []
  const artifacts = contract?.artifacts ?? Object.fromEntries(Object.entries(contract?.files ?? {}).map(([path, file]) => [path, file.sha256]))
  const designFile = contract?.component === component ? Object.keys(artifacts).find(path => path === `components/${component}/${component}.fig`) : undefined
  if (contract && designFile) steps.push({
    id: 'design', title: 'Mit dem Quellenentwurf gestalten',
    description: 'Den vorhandenen FIG-Quellenentwurf im Designwerkzeug prüfen. Er ist keine freigegebene Figma-Bibliothek.',
    links: [{ label: 'Quellenentwurf herunterladen · FIG', href: sitePath(contractFileUrl(staticPublication ? contract.library : system, component, contract.revision, designFile)), download: true }],
    scope: 'Datei aus dem Seitencontract; keine freigegebene Figma-Bibliothek. Statische Vorschauen belegen keine Varianten, Auto-Layout oder Importierbarkeit im Zielwerkzeug.',
  })

  const association = system === 'shadcn' ? pilotTasks[component] : undefined
  const task = association ? section(association.slug) : undefined
  const pilot = association ? section('gestaltungs-pilot') : undefined
  const patterns = section('patterns')
  if (task || pilot || patterns) {
    const resources = pilot ? designResources(system, 'gestaltungs-pilot') : null
    const links: ComponentNextStepLink[] = []
    if (task && association) links.push({ label: association.label, href: sitePath(task.path) })
    else if (patterns) links.push({ label: 'Patterns für die eigene Aufgabe ansehen', href: sitePath(patterns.path) })
    if (pilot) links.push({ label: resources?.templates.length ? 'Ablaufvorlagen · SVG und OpenPencil-FIG' : 'Gestaltungspilot ansehen', href: sitePath(pilot.path + (resources?.templates.length ? '#designvorlagen' : '')) })
    steps.push({
      id: 'context', title: task || pilot ? 'Im Ablauf weitergestalten' : 'Den Einsatz im Ablauf planen',
      description: task || pilot ? 'Die Komponente mit Inhalt, Zuständen und Rückwegen für die eigene Aufgabe verbinden.' : 'Ein veröffentlichtes Pattern für den Zusammenhang der Komponente auswählen.',
      links,
      scope: pilot ? 'Der Projektpilot ist eine ergänzende Web-Gestaltungsreferenz. Seine SVG- und OpenPencil-FIG-Vorlagen sind statische Entwürfe; sie sind keine Komponentenbibliothek oder geprüfte Anwendung.' : undefined,
    })
  }

  const frameworks = section('frameworks')
  const mismatch = implementations.some(entry => entry.contract?.revision && entry.contract.revision !== contract?.revision)
  steps.push({
    id: 'implementation', title: 'Die Umsetzung klären',
    description: implementations.length
      ? `Veröffentlichter Implementierungsstand: ${[...new Set(implementations.map(entry => entry.releaseStatus))].join(', ')}. Vor der Übernahme den konkreten Prüfumfang vergleichen.`
      : 'Für diese Komponente ist keine Implementierung veröffentlicht. Den dokumentierten Plattformstand vor der Umsetzung prüfen.',
    links: [
      { label: 'Implementierungsstand prüfen', href: onPage('plattformstand') },
      ...(frameworks && input.referenceFrameworks?.length ? [{ label: 'Framework-Referenzen vergleichen', href: sitePath(frameworks.path) }] : []),
    ],
    scope: mismatch ? 'Seitencontract und Implementierung beziehen sich auf unterschiedliche Revisionen. Framework-Referenzen belegen keine Komponentenabdeckung.' : 'Der Quellenstand belegt keine veröffentlichte Implementierung. Framework-Referenzen haben einen eigenen Prüfumfang.',
  })
  return { id: 'weiterarbeiten', title: 'Weiterarbeiten', scopeTitle: 'Hinweise zur Weiterverwendung', steps }
}
