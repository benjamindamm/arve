import { designResources } from './design-resources'

export function DesignResourceLinks({ system, section }: { system: string; section: string }) {
  const resources = designResources(system, section)
  if (!resources) return null
  const groups = new Map<string, typeof resources.templates>()
  for (const resource of resources.templates) groups.set(resource.title, [...(groups.get(resource.title) ?? []), resource])
  return <section className="component-section" aria-labelledby="designvorlagen">
    <h2 id="designvorlagen">Vorlagen verwenden</h2>
    <p>Die Vorlagen verbinden Suche, Detail und Formular für denselben Projektworkflow. SVG enthält editierbare Texte und Formen; FIG enthält native OpenPencil-Ebenen.</p>
    <ul className="design-resource-index">
      {[...groups].map(([title, formats]) => <li key={title}>
        <strong>{title}</strong>
        <p>{formats[0].description}</p>
        <p>{formats.map((resource, index) => <span key={resource.id}>
          {index > 0 && ' · '}<a href={resource.url} download>{resource.kind.toUpperCase()} herunterladen</a>
        </span>)}</p>
      </li>)}
    </ul>
    <details>
      <summary>Stand und Grenzen der Vorlagen</summary>
      <p className="contract-revision">Ressourcenstand <code>{resources.revision}</code></p>
      <ul>{resources.limitations.map((limitation: string) => <li key={limitation}>{limitation}</li>)}</ul>
    </details>
  </section>
}
