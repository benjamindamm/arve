'use client'
import Link from 'next/link'
type Chapter={slug:string;title:string}
export function ArveChapterNavigation({chapters,current}:{chapters:Chapter[];current:string}){
 const links=chapters.map(c=><Link key={c.slug} href={'/handbuch'+(c.slug?'/'+c.slug:'')} aria-current={current===c.slug?'page':undefined}>{c.title}</Link>)
 return <aside className="arve-chapter-navigation"><p>Arve-Handbuch</p><nav className="arve-chapters-wide" aria-label="Arve-Handbuch">{links}</nav><details className="arve-chapters-compact" key={current}><summary>Kapitel: {chapters.find(c=>c.slug===current)?.title??'Autoren-Skills'}</summary><nav aria-label="Kapitel wählen">{links}</nav></details></aside>
}
