import Link from 'next/link'
import type {DesignSystem,Page} from '../payload-types'
import type {Entry} from './published-documentation'
import {systemHomeModel} from './system-home-template'
import {Content} from './content'
import {HandbookIcon,chapterIcon} from './handbook-icon'
import './system-home.css'

function HomeLink({label,path}:{label:string;path?:string}) {
  return path?<Link href={path}>{label} <span aria-hidden="true">→</span></Link>:<span className="system-home-unavailable">{label}<small>Noch nicht veröffentlicht</small></span>
}
export function SystemHomeTemplate({system,home,pages,entries}:{system:DesignSystem;home?:Page;pages:Page[];entries:Entry[]}) {
  const model=systemHomeModel({name:system.name,slug:system.slug,home,pages,entries})
  return <main id="inhalt" className="shell system-home" data-system-theme={system.theme}>
    <header className="system-home-intro"><p className="system-home-eyebrow">{model.eyebrow}</p><h1>{model.heading}</h1><p>{model.intro}</p></header>
    <section className="system-home-start" aria-labelledby="system-home-start"><h2 id="system-home-start">{model.startTitle}</h2>
      <div className="system-home-start-grid">{model.tasks.map(task=><div className="system-home-task" key={task.key}><h3><HandbookIcon name={task.key}/><span>{task.title}</span></h3><p>{task.description}</p><ul>{task.links.map((link,i)=><li key={i}><HomeLink {...link}/></li>)}</ul></div>)}</div>
    </section>
    <section className="system-home-reference" aria-labelledby="system-home-reference"><h2 id="system-home-reference">{model.referenceTitle}</h2>
      <div className="system-home-reference-grid">{model.references.map(group=><div key={group.key}><h3><HandbookIcon name={group.key}/><span>{group.title}</span></h3><ul>{group.links.map((link,i)=><li key={i}><HomeLink {...link}/></li>)}</ul></div>)}</div>
      {model.example&&<aside className="system-home-example"><div><h3><HandbookIcon name="example"/><span>{model.example.title}</span></h3><p>{model.example.description}</p></div><Link href={model.example.path}>{model.example.label} <span aria-hidden="true">→</span></Link></aside>}
    </section>
    {entries.length>0&&<section className="system-home-reference" aria-labelledby="system-home-topics"><h2 id="system-home-topics">Alle Themen</h2><ul className="system-home-topics">{entries.map(entry=><li key={entry.path}><Link href={entry.path}><span className="system-home-topic-label"><HandbookIcon name={chapterIcon(entry.slug,entry.pageType)}/><span>{entry.title}</span></span><span aria-hidden="true">→</span></Link></li>)}</ul></section>}
    {!!home?.content?.length&&<section className="system-home-reference" aria-label="Ergänzende Inhalte"><Content blocks={home.content}/></section>}
  </main>
}
