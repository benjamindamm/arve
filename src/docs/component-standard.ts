import type { Page } from '../payload-types'

/** Editorial sections shared by component pages. Not a conformance certificate. */
export const componentSections = [
  { key: 'usage', label: 'Einsatz und Alternativen', group: 'usage' },
  { key: 'example', label: 'Beispiel und sein Umfang', group: 'usage' },
  { key: 'anatomy', label: 'Aufbau und Teile', group: 'anatomy' },
  { key: 'variants', label: 'Varianten und Grössen', group: 'anatomy' },
  { key: 'states', label: 'Zustände und Interaktion', group: 'states' },
  { key: 'labels', label: 'Beschriftung und gute Anwendung', group: 'accessibility' },
  { key: 'keyboard', label: 'Tastatur und Fokus', group: 'accessibility' },
  { key: 'semantics', label: 'Semantik und besondere Einbindungen', group: 'accessibility' },
  { key: 'sources', label: 'Quellen und belegter Stand', group: 'verification' },
] as const

export function componentTemplateHelp(group: string) {
  const topics = componentSections.filter(section => section.group === group).map(section => section.label).join('; ')
  return topics ? `Für diesen Bereich ausarbeiten: ${topics}. Die Button-Seite zeigt den Aufbau. Nicht zutreffende Punkte kurz begründen. Quellenregel, Empfehlung und Beispiel unterscheiden.` : undefined
}

export function componentTemplateCoverage(content: Page['content']) {
  return componentSections.map(section => ({ ...section, blocks: (content ?? []).filter(block => block.blockName === section.key) }))
}
