import Link from 'next/link'
import {notFound} from 'next/navigation'
import {authoringSkills} from '../../../../../../docs/authoring-skills'
import {ArveGuideShell} from '../../../../../../docs/arve-guide'
import {CopyTextButton} from '../../../../../../docs/copy-text-button'
export async function generateStaticParams(){return (await authoringSkills()).flatMap(s=>s.files.map(f=>({skill:s.id,file:f.name.split('/')})))}
export default async function Page({params}:{params:Promise<{skill:string;file:string[]}>}){
 const {skill,file}=await params
 const item=(await authoringSkills()).find(s=>s.id===skill),source=item?.files.find(f=>f.name===file.join('/'))
 if(!item||!source)notFound()
 return <ArveGuideShell section="autoren-skills"><p className="arve-guide-eyebrow">Autoren-Skills · Originaldatei</p><h1>{source.name}</h1><p>{item.title}</p><p><code>{item.id}</code></p><div className="guide-file-actions"><Link href="/handbuch/autoren-skills">Zur Skill-Übersicht</Link><CopyTextButton value={source.content} label="Datei kopieren"/></div><pre className="guide-full-source"><code>{source.content}</code></pre><h2>Weitere Dateien</h2><ul>{item.files.filter(f=>f.name!==source.name).map(f=><li key={f.name}><Link href={'/handbuch/dateien/'+item.id+'/'+f.name}>{f.name}</Link></li>)}</ul></ArveGuideShell>
}
