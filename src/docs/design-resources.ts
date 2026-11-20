import manifest from '../../docs/handbook/design-resources/manifest.json'

// Resources are scoped to their published handbook page, never to the global home.
const registry = [{ system: 'shadcn', section: 'gestaltungs-pilot', manifest }]

export function designResources(system: string, section: string) {
  const entry = registry.find(item => item.system === system && item.section === section)
  if (!entry) return null
  return {
    revision: entry.manifest.revision,
    source: entry.manifest.source,
    limitations: entry.manifest.limitations,
    templates: entry.manifest.templates.map(resource => ({
      ...resource,
      url: `/systems/${encodeURIComponent(system)}/resources/${encodeURIComponent(resource.id)}`,
    })),
  }
}

export function findDesignResource(system: string, id: string) {
  for (const entry of registry.filter(item => item.system === system)) {
    const resource = entry.manifest.templates.find(item => item.id === id)
    if (resource) return { section: entry.section, resource }
  }
  return null
}
