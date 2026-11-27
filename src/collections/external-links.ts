import type {Field} from 'payload'
import {externalSourceTypes,validSourceUrl} from '../docs/external-sources'
/** One reusable admin field definition for every page template. */
export const externalLinksField:Field={
 name:'externalLinks',label:'Externe Quellen',type:'array',maxRows:12,
 labels:{singular:'Quelle',plural:'Quellen'},
 admin:{description:'Figma, Storybook oder andere Quellen. Erscheinen nach Veröffentlichung als Links im Seitenkopf und über MCP. Es werden keine externen Inhalte importiert.'},
 fields:[
  {name:'type',label:'Typ',type:'select',required:true,defaultValue:'other',options:externalSourceTypes.map(({value,label})=>({value,label}))},
  {name:'label',label:'Beschriftung',type:'text',maxLength:80,admin:{description:'Optional, z. B. „Figma · Mobile“. Ohne Angabe wird der Typ angezeigt.'}},
  {name:'url',label:'URL',type:'text',required:true,maxLength:2000,validate:(value:unknown)=>validSourceUrl(value)||'Bitte einen vollständigen HTTP- oder HTTPS-Link ohne Zugangsdaten eingeben.'},
 ],
}
