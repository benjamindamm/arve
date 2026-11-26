import {EditorialPage} from '../../../../docs/editorial-page'
import {editorialOf} from '../../../../docs/editorial'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Content } from '../../../../docs/content'
import { documentationTree } from '../../../../docs/published-documentation'
import { listSystems, readSystem, relationId } from '../../../../docs/systems'
import { documentationData } from '../../../../docs/documentation-data'
import { ShadcnHome } from '../../../../docs/shadcn-home'

export default async function SystemHome({ params }: { params: Promise<{ system: string }> }) {
  const { system: slug } = await params
  const [system, documentation, systems] = await Promise.all([readSystem(slug), documentationTree(slug), listSystems()])
  if (!system || !documentation) notFound()
  const id = relationId(system.home)
  const home = id ? await (await documentationData()).page(system,{id}) : undefined
  if (slug === 'shadcn') return <EditorialPage as="section" className="shell system-home-editorial" editorial={editorialOf(home)}><ShadcnHome theme={system.theme} entries={documentation.tree} /></EditorialPage>
  const first = documentation.tree[0]

  return (
    <main id="inhalt" className="shell" data-system-theme={system.theme}>
      <EditorialPage as="section" className="hero" editorial={editorialOf(home)}>
        <div className="hero-content">
          <h1>{home?.title ?? system.name}</h1>
          {system.description && <p className="hero-copy">{system.description}</p>}
          <Content blocks={home?.content} />
          {first && <div className="hero-actions">
            <Link className="system-button" href={first.path}>{first.title} ansehen ↗</Link>
          </div>}
        </div>
      </EditorialPage>
      {!!documentation.tree.length && (
        <section className="catalog" aria-labelledby="systembereiche">
          <div className="section-title"><h2 id="systembereiche">Dokumentation</h2></div>
          <div className="card-grid">
            {documentation.tree.map(({ path, title, summary }) => (
              <Link key={path} className="card" href={path}><h3>{title}</h3>{summary && <p>{summary}</p>}</Link>
            ))}
          </div>
        </section>
      )}
      {systems.length > 1 && (
        <section className="catalog" aria-labelledby="andere-systeme">
          <h2 id="andere-systeme">Weitere Design-Systeme</h2>
          <ul>{systems.filter((item) => item.id !== system.id).map((item) => (
            <li key={item.id}><Link href={'/systems/' + encodeURIComponent(item.slug)}>{item.name} ↗</Link></li>
          ))}</ul>
        </section>
      )}
    </main>
  )
}
