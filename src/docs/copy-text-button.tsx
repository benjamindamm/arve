'use client'
import {useState} from 'react'
export function CopyTextButton({value,label='Kopieren'}:{value:string;label?:string}){
 const [message,setMessage]=useState('')
 async function copy(){try{await navigator.clipboard.writeText(value);setMessage('Kopiert.')}catch{setMessage('Bitte den Text markieren und manuell kopieren.')}}
 return <span className="guide-copy"><button type="button" onClick={copy}>{label}</button><span role="status">{message}</span></span>
}
