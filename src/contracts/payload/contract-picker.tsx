'use client'

import {useEffect,useState,useId} from 'react'
import {ReactSelect,useField,useFormFields,useConfig} from '@payloadcms/ui'
import type {UIFieldClientProps} from 'payload'
import './contract-picker.css'

type ExportOption={library:string;revision:string;components:{component:string;label:string;status:string}[]}
type Options={exports:ExportOption[];bindings:{library:string;defaultRevision:string}[]}
type Choice={value:string;label:string}
const valueOf=(option:any)=>typeof option?.value==='string'?option.value:''
function PickerSelect({label,value,options,readOnly,onChange}:{label:string;value:string;options:Choice[];readOnly:boolean;onChange:(value:string)=>void}){
 const id=useId()
 const selected=options.find(option=>option.value===value)??(value?{value,label:value}:undefined)
 return <div className="field-type select"><label className="field-label" htmlFor={id}>{label}</label><ReactSelect inputId={id} value={selected??[]} placeholder="Auswählen …" options={options} disabled={readOnly} isClearable={false} isSearchable onChange={option=>onChange(valueOf(option))}/></div>
}
export function ContractPicker({binding=false,readOnly}:UIFieldClientProps&{binding?:boolean}){
 const {config}=useConfig()
 const system=useFormFields(([fields])=>fields.designSystem?.value) as number|{id:number}|undefined
 const componentPage=useFormFields(([fields])=>fields.componentPage?.value) as number|{id:number}|undefined
 const localComponent=useFormFields(([fields])=>fields.component?.value) as string|undefined
 const library=useField<string>({path:binding?'library':'contract.library'})
 const revision=useField<string>({path:binding?'defaultRevision':'contract.revision'})
 const component=useField<string>({path:'contract.component'})
 const [options,setOptions]=useState<Options>({exports:[],bindings:[]}),[loading,setLoading]=useState(false),[error,setError]=useState('')
 const id=(value:typeof system)=>typeof value==='object'?value?.id:value
 const owner=id(system),page=id(componentPage)
 useEffect(()=>{
  setOptions({exports:[],bindings:[]});setError('')
  if(!owner&&!page)return
  const controller=new AbortController();setLoading(true)
  const params=new URLSearchParams({...owner?{system:String(owner)}:{page:String(page)},...binding?{mode:'binding'}:{}})
  fetch(`${config.routes.api}/contract-connector/options?${params}`,{signal:controller.signal,credentials:'same-origin'})
   .then(async response=>{if(!response.ok)throw Error('Bibliotheksauswahl nicht verfügbar. Bitte Rechte und Zuordnung prüfen.');return response.json()})
   .then(setOptions).catch(e=>{if(e.name!=='AbortError')setError(e.message)}).finally(()=>{if(!controller.signal.aborted)setLoading(false)})
  return()=>controller.abort()
 },[owner,page,binding,config.routes.api])
 const libraries=[...new Set(options.exports.map(e=>e.library))]
 const revisions=options.exports.filter(e=>e.library===library.value)
 const selected=revisions.find(e=>e.revision===revision.value)
 const disabled=Boolean(readOnly)||loading
 const clear=()=>{library.setValue('');revision.setValue('');component.setValue('')}
 return <section className="contract-picker" aria-label={binding?'Contract-Bibliothek verbinden':'Optionalen Contract zuordnen'}>
  <h3>{binding?'Bibliothek bereitstellen':'UI Contracts · optional'}</h3>
  <p>{binding?'Hier wird nur die Bibliothek bereitgestellt. Seiten werden separat zugeordnet. Der vorgeschlagene Stand verändert keine bestehenden Seiten.':'Handbuchname und Contract-Name dürfen unterschiedlich sein. Die Auswahl ändert weder Seitentitel noch Handbuch-Kennung.'}</p>
  {library.value&&revision.value&&<p className="contract-picker-current">{binding?'Aktuelle Auswahl':'Aktuelle Zuordnung'}: <strong>{library.value}{!binding&&component.value?' / '+component.value:''}</strong> · <code title={revision.value}>{revision.value.slice(0,12)}</code>{!binding&&localComponent&&component.value!==localComponent&&<span>Handbuch: {localComponent} → Contract: {component.value}</span>}</p>}
  {!owner&&!page?<p>Zuerst das Design-System bzw. die Komponentenseite wählen.</p>:error?<p role="alert">{error}</p>:loading?<p role="status">Bibliotheken laden …</p>:!libraries.length?<p>{binding?'Noch kein Exportpaket installiert. Ein Administrator kann es mit dem Paketimport hinzufügen.':'Keine Contract-Bibliothek verbunden. Das Handbuch ist auch ohne Contracts nutzbar. Herausgeber können unter „Contract-Bibliotheken“ eine Bibliothek bereitstellen.'}</p>:<div className="contract-picker-fields">
   <PickerSelect label="Bibliothek" value={library.value??''} options={libraries.map(value=>({value,label:value}))} readOnly={disabled} onChange={next=>{library.setValue(next);revision.setValue(binding?'':options.bindings.find(b=>b.library===next)?.defaultRevision??'');if(!binding)component.setValue('')}}/>
   <PickerSelect label="Revision" value={revision.value??''} options={revisions.map(e=>({value:e.revision,label:e.revision.slice(0,12)+' · '+e.components.length+' Komponenten'}))} readOnly={disabled||!library.value} onChange={next=>{revision.setValue(next);if(!binding)component.setValue('')}}/>
   {!binding&&<PickerSelect label="Contract-Komponente suchen" value={component.value??''} options={selected?.components.map(c=>({value:c.component,label:c.label+' · '+c.component}))??[]} readOnly={disabled||!selected} onChange={next=>component.setValue(next)}/>}
  </div>}
  {!binding&&library.value&&<button type="button" className="contract-picker-clear" disabled={disabled} onClick={clear}>Zuordnung entfernen</button>}
 </section>
}
