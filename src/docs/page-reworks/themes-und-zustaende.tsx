import type { CSSProperties } from 'react'
import type { Page } from '../../payload-types'
import { Content } from '../content'
import { exportColor } from '../color-page-values'
import './themes-und-zustaende.css'

type Block = NonNullable<Page['content']>[number]
function texts(block: Block | undefined) {
  if (block?.blockType !== 'text') return []
  return block.body.root.children.map(child => {
    const children = child.children as {text?:string}[] | undefined
    return children?.map(node=>node.text??'').join('')??''
  })
}

export default function ThemesAndStates({content}: {content:Page['content']}) {
  const blocks = content??[]
  const example = texts(blocks.find(block=>block.blockName==='theme-example'))
  const stand = texts(blocks.find(block=>block.blockName==='theme-stand'))
  const evidence = blocks.findIndex(block=>block.blockName==='theme-evidence')
  if (example.length !== 14 || evidence < 0) return <Content blocks={content}/>
  return <div className="themes-rework">
    <div className="tr-comparison" role="group" aria-label={example[0]}>
      {(['light','dark'] as const).map((theme,index)=>{
        const style = Object.fromEntries((['background','foreground','primary','primaryForeground','mutedForeground','border','input','ring'] as const).map(role=>[`--tr-${role}`,exportColor(theme,role)])) as CSSProperties
        return <section className="tr-theme" style={style} key={theme} aria-labelledby={`tr-${theme}`}>
          <header><h2 id={`tr-${theme}`}>{example[index+1]}</h2><span>{example[3]}</span></header>
          <div className="tr-state">
            <h3>{example[4]}</h3>
            <div className="tr-selected"><span aria-hidden="true">✓</span>{example[5]}</div>
          </div>
          <div className="tr-state">
            <h3>{example[6]}</h3>
            <p className="tr-field-label">{example[7]}</p>
            <div className="tr-field">{example[8]}</div>
            <p className="tr-error"><strong><span aria-hidden="true">! </span>{example[9]}</strong><span>{example[10]}</span></p>
          </div>
          <div className="tr-state">
            <h3>{example[11]}</h3>
            <button type="button" disabled aria-describedby={`tr-reason-${theme}`}>{example[12]}</button>
            <p id={`tr-reason-${theme}`} className="tr-reason">{example[13]}</p>
          </div>
        </section>
      })}
    </div>
    <div className="tr-stand"><p>{stand[1]}</p><p>{stand[2]}</p></div>
    <div className="tr-reading"><Content blocks={blocks.filter(block=>block.blockName==='theme-rules'||block.blockName==='theme-review')}/></div>
    <details className="tr-evidence"><summary>{texts(blocks[evidence])[0]}</summary>
      <p>{texts(blocks[evidence])[1]}</p>
      {blocks.slice(evidence+1).map((block,index)=>block.blockType==='study'
        ? <div className="tr-source" key={index}><h2>{block.title}</h2><p>{block.explanation}</p><p>{block.source}</p><code>{block.revision}</code></div>
        : <Content key={index} blocks={[block]}/>)}
    </details>
  </div>
}
