import type { getContract } from '../contracts/catalog'
import { getComponentComparisons, type ComparisonItem, type ComparisonSection, type ComponentComparison } from './component-comparison-data'
import { FormsFeedbackSpecimen } from './comparisons/forms-feedback'
import { NavigationLayersSpecimen } from './comparisons/navigation-layers'
import { DataContentSpecimen } from './comparisons/data-content'
import { SiteAnchor } from './site-anchor'
import './component-comparisons-contract.css'
import './component-comparisons.css'

function ActionIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
}
function Button({ variant = 'default', size = 'default', state, text = 'Speichern' }: {variant?: string; size?: string; state?: string; text?: string}) {
  return <span aria-hidden="true" className={`cn-button cn-button-variant-${variant} cn-button-size-${size}`} data-disabled={state === 'disabled' ? '' : undefined} data-illustrated-state={state}>
    {size.startsWith('icon') ? <ActionIcon /> : <>{text}</>}
  </span>
}
function Input({ item }: {item: ComparisonItem}) {
  return <div data-part="input-field" aria-hidden="true"><span data-part="input-label">Projektname</span>
    <span data-slot="input" data-empty={item.id==='empty' ? '' : undefined} data-disabled={item.id==='disabled' ? '' : undefined} aria-invalid={item.id==='error' ? true : undefined} data-illustrated-state={item.id}>{item.value}</span>
    {item.id==='error' && <span className="comparison-error">Dieser Projektname ist bereits vergeben.</span>}
  </div>
}
function Checkbox({ item }: {item: ComparisonItem}) {
  const checked=['checked','focus','disabled'].includes(item.id)
  return <div data-part="checkbox-field" aria-hidden="true"><span data-slot="checkbox" data-checked={checked ? '' : undefined} data-indeterminate={item.id==='mixed' ? '' : undefined} data-disabled={item.id==='disabled' ? '' : undefined} aria-invalid={item.id==='error' ? true : undefined} data-illustrated-state={item.id}>
    {(checked || item.id==='mixed') && <span data-slot="checkbox-indicator"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m20 6-11 11-5-5" /></svg></span>}
  </span><span>Alle Projekte</span></div>
}
function Switch({ item, sizes }: {item: ComparisonItem; sizes: boolean}) {
  return <div data-part="switch-field" aria-hidden="true"><span data-slot="switch" data-size={sizes ? item.id : 'default'} data-checked={item.id!=='off' ? '' : undefined} data-disabled={item.id==='disabled' ? '' : undefined} data-illustrated-state={item.id}><span data-slot="switch-thumb" /></span><span>Automatische Updates</span></div>
}
/** A curated overview stays visible; secondary comparisons keep their context in details. */
function ComparisonItems({component,comparison,items,section}:{component:string;comparison:ComponentComparison;items:ComparisonItem[];section:ComparisonSection}) {
  if(!items.length)return null
  if(component==='message')return <div className="comparison-conversation" data-slot="message-group">{items.map(item=><div className="comparison-message-entry" key={item.id}>
    <p className="comparison-item-title">{item.title}</p><div data-slot="message" data-align={item.id}>
      <span data-slot="message-avatar" aria-hidden="true">{item.id==='start'?'MI':'DU'}</span><div data-slot="message-content">
        <div data-slot="message-header">{item.description}</div><p className="comparison-message-text">{item.value}</p>
      </div>
    </div>
  </div>)}</div>
  return <div className="comparison-matrix" data-item-count={items.length}>{items.map(item=><div className="comparison-cell" key={item.id}>
    <p className="comparison-item-title">{item.title}</p>
    <div className="comparison-specimen">
      {component==='button'&&<Button text={item.value} variant={comparison.id==='button-variants'?item.id:'default'} size={comparison.id==='button-sizes'?item.id:'default'} state={section==='states'?item.id:undefined}/>}
      {component==='input'&&<Input item={item}/>}
      {component==='checkbox'&&<Checkbox item={item}/>}
      {component==='switch'&&<Switch item={item} sizes={section==='variants'}/>}
      <FormsFeedbackSpecimen component={component} groupId={comparison.id} item={item}/>
      <NavigationLayersSpecimen component={component} groupId={comparison.id} item={item}/>
      <DataContentSpecimen component={component} groupId={comparison.id} item={item}/>
    </div>
    {item.description&&<p className="comparison-item-description">{item.description}</p>}
  </div>)}</div>
}
export function ComponentComparisons({component,contract,section}:{component:string;contract:ReturnType<typeof getContract>;section:ComparisonSection}) {
  const comparisons=getComponentComparisons(component,contract,section)
  if(!comparisons.length)return null
  return <div className="component-comparisons">
    <p className="comparison-disclosure">Statische Beispiele · nicht bedienbar</p>
    {comparisons.map(comparison=>{
      const overview=comparison.previewItems ? comparison.previewItems.flatMap(id=>comparison.items.filter(item=>item.id===id)) : comparison.items
      const further=comparison.items.filter(item=>!overview.some(visible=>visible.id===item.id))
      return <figure className={`contract-comparison comparison-${comparison.id} comparison-layout-${comparison.layout??'compact'}${overview.length===1||comparison.items.length===1?' comparison-single':''}`} key={comparison.id} data-comparison-id={comparison.id}>
        <figcaption><h3>{comparison.title}</h3><p>{comparison.description}</p></figcaption>
        <ComparisonItems component={component} comparison={comparison} items={overview} section={section}/>
        {!!further.length&&<details className="comparison-more"><summary>{comparison.detailsLabel??'Weitere Vergleiche'} <span>{further.length}</span></summary><ComparisonItems component={component} comparison={comparison} items={further} section={section}/></details>}
      </figure>
    })}
    <details className="comparison-notes"><summary>Quellen und Darstellungsdetails</summary>
      <p>Die Beispiele zeigen die helle Ansicht der verknüpften Referenz. Fokus und Hover sind festgehaltene Ansichten. Sie ersetzen keine Prüfung einer Implementierung. <SiteAnchor href="#contract">Contract und Quellen ansehen →</SiteAnchor></p>
      {comparisons.filter(comparison=>comparison.technicalNotes).map(comparison=><div key={comparison.id}><h4>{comparison.title}</h4><p>{comparison.technicalNotes}</p></div>)}
    </details>
  </div>
}
