export const pageTemplates = [
  { key: 'foundation', label: 'Grundlagen', fields: [
    { key: 'purpose', label: 'Zweck und Geltungsbereich' },
    { key: 'roles', label: 'Rollen und Verwendung' },
    { key: 'source', label: 'Token-Quelle und technische Referenz' },
    { key: 'accessibility', label: 'Barrierefreiheit und Prüfkriterien' },
  ] },
  { key: 'layout', label: 'Layout', fields: [
    { key: 'purpose', label: 'Einsatz und Grenzen' },
    { key: 'regions', label: 'Bereiche und Inhaltsreihenfolge' },
    { key: 'grid', label: 'Raster, Container und Abstände' },
    { key: 'responsive', label: 'Umbruch und responsive Regeln' },
    { key: 'accessibility', label: 'Lesereihenfolge und Barrierefreiheit' },
  ] },
  { key: 'pattern', label: 'UX-Pattern', fields: [
    { key: 'task', label: 'Nutzeraufgabe und Kontext' },
    { key: 'usage', label: 'Wann einsetzen und wann vermeiden' },
    { key: 'flow', label: 'Ablauf und beteiligte Komponenten' },
    { key: 'states', label: 'Zustände, Fehler und Wiederherstellung' },
    { key: 'accessibility', label: 'Barrierefreiheit und Prüfkriterien' },
  ] },
  { key: 'component', label: 'Komponente', fields: [
    { key: 'usage', label: 'Einsatz und Grenzen' },
    { key: 'anatomy', label: 'Aufbau und Varianten' },
    { key: 'states', label: 'Zustände und Interaktion' },
    { key: 'accessibility', label: 'Tastatur, Fokus und Semantik' },
    { key: 'verification', label: 'Implementierungsversion und Prüfumfang' },
  ] },
] as const

export function readTemplate(pageType: string | null | undefined, values: unknown) {
  const template = pageTemplates.find(({ key }) => key === pageType)
  if (!template || !values || typeof values !== 'object') return []
  const fields = (values as Record<string, Record<string, unknown>>)[template.key]
  return template.fields.flatMap(({ key, label }) => {
    const text = fields?.[key]
    return typeof text === 'string' && text.trim() ? [{ key, label, text }] : []
  })
}
