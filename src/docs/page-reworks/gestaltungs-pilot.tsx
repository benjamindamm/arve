import type { Page } from '../../payload-types'
import { RichText } from '../rich-text'
import { blockAnchor } from '../content-outline'
import { DesignResourceLinks } from '../design-resource-links'
import './gestaltungs-pilot.css'

type Block = NonNullable<Page['content']>[number]
function strings(block?: Block) {
  return block?.blockType === 'text' ? block.body.root.children.map(n => Array.isArray(n.children) ? n.children.map((c: { text?: string }) => c.text ?? '').join('') : '') : []
}
export default function PilotGuide({ content }: { content: Page['content'] }) {
  const find = (key: string) => (content ?? []).find(b => b.blockName === key)
  const example = find('example'), e = strings(example), workflow = find('workflow'), tasks = find('tasks')
  const section = (key: string, disclosure = false) => {
    const b = find(key)
    if (b?.blockType !== 'text') return null
    return disclosure ? <details id={blockAnchor(b)}><summary>{strings(b)[0]}</summary><RichText data={{ ...b.body, root: { ...b.body.root, children: b.body.root.children.slice(1) } }} /></details>
      : <section id={blockAnchor(b)}><RichText data={b.body} /></section>
  }
  return <div className="pilot-guide">
    {section('goals')}
    {example && <section id={blockAnchor(example)}>
      <h2>{e[0]}</h2><p className="pg-caption">{e[1]}</p>
      <ol className="pg-journey">
        <li><h3>{e[2]}</h3><div className="pg-screen"><div className="pg-search"><span>{e[3]}</span><span>{e[4]}</span></div><p className="pg-result">{e[5]}</p><p className="pg-next">{e[6]}</p></div></li>
        <li><h3>{e[7]}</h3><div className="pg-screen"><strong className="pg-project">{e[8]}</strong><p>{e[9]}</p><p>{e[10]}</p><p className="pg-next">{e[11]}</p></div></li>
        <li><h3>{e[12]}</h3><div className="pg-screen"><strong>{e[13]}</strong><p className="pg-input">{e[14]}</p><p className="pg-next">{e[15]}</p></div></li>
      </ol><p className="pg-branch">{e[16]}</p><p className="pg-caption">{e[17]}</p>
    </section>}
    <div className="pg-resources"><DesignResourceLinks system="shadcn" section="gestaltungs-pilot" /></div>
    {tasks?.blockType === 'text' && <section id={blockAnchor(tasks)}><h2>{strings(tasks)[0]}</h2><div className="pg-tasks">{tasks.body.root.children.slice(1).map((node, index) => <article key={index}><RichText data={{...tasks.body,root:{...tasks.body.root,children:[node]}}} />{workflow?.blockType === 'workflowStudy' && <p>{workflow.steps?.[index]?.description}</p>}</article>)}</div></section>}
    {section('usage')}{section('limits')}
    {section('data', true)}{section('color', true)}{section('space', true)}{section('scope', true)}
    {workflow?.blockType === 'workflowStudy' && <details id={blockAnchor(workflow)}><summary>{workflow.title}</summary><p>{workflow.summary}</p><ol>{workflow.steps?.map(step => <li key={step.key}><h3>{step.title}</h3><p>{step.description}</p><p>{step.next}</p></li>)}</ol><p>{workflow.caption}</p><p>{workflow.source}</p></details>}
    {section('sources', true)}{section('links')}
  </div>
}
