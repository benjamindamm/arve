import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Content } from '../../../../docs/content'
import { readPage, sections } from '../../../../docs/pages'

export default async function DocumentationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const section = sections.find((item) => item.slug === slug)
  if (!section) notFound()

  const page = await readPage('nordlicht-' + slug)
  return (
    <main id="inhalt" className="shell docs-layout">
      <nav className="docs-nav" aria-label="Dokumentation">
        <Link href="/">Übersicht</Link>
        {sections.map((item) => (
          <Link key={item.slug} href={'/docs/' + item.slug} aria-current={item.slug === slug ? 'page' : undefined}>
            {item.title}
          </Link>
        ))}
      </nav>
      <article className="article">
        <h1>{page?.title.replace(/^Nordlicht · (Pattern · )?/, '') ?? section.title}</h1>
        {page?._status === 'draft' && <p className="draft-note">Entwurf aus Payload</p>}
        {page ? <Content blocks={page.content} /> : (
          <>
            <p>{section.summary}</p>
            <p>Der vollständige Inhalt ist als Entwurf im CMS verfügbar. <a href="/admin">Im CMS anmelden</a></p>
          </>
        )}
      </article>
    </main>
  )
}
