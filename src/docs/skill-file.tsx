import Link from 'next/link'
import {CopyTextButton} from './copy-text-button'
export function skillFileHref(skill:string,file:string){return '/handbuch/dateien/'+encodeURIComponent(skill)+'/'+file.split('/').map(encodeURIComponent).join('/')}
export function SkillFile({skill,file}:{skill:string;file:{name:string;content:string}}){
 return <details className="authoring-skill-file" open={file.name==='SKILL.md'}><summary>{file.name}</summary><div className="guide-file-actions"><Link href={skillFileHref(skill,file.name)}>Separat lesen</Link><CopyTextButton value={file.content} label="Datei kopieren"/></div><pre tabIndex={0} aria-label={skill+' · '+file.name}><code>{file.content}</code></pre></details>
}
