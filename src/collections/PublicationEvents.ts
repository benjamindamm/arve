import type {CollectionConfig} from 'payload'
import {scope} from '../access/permissions'
export const publicationActions=['created','edited','review_requested','approved','published','unpublished','restored'] as const
export const PublicationEvents:CollectionConfig={
 slug:'publication-events',labels:{singular:'Veröffentlichungsereignis',plural:'Veröffentlichungsverlauf'},
 admin:{useAsTitle:'documentTitle',defaultColumns:['documentTitle','action','actor','createdAt'],description:'Unveränderliche Einträge zu Bearbeitung, Freigabe und Veröffentlichung. Die Version und der Inhalts-Hash kennzeichnen die betroffene Fassung.'},
 access:{read:({req})=>scope(req.user,'designSystem','author'),create:()=>false,update:()=>false,delete:()=>false},
 fields:[
  {name:'designSystem',type:'relationship',relationTo:'design-systems',required:true,label:'Design-System'},
  {name:'documentType',type:'select',options:['pages','implementations'],required:true,label:'Dokumenttyp'},
  {name:'documentID',type:'number',required:true,label:'Dokument-ID'},
  {name:'documentTitle',type:'text',required:true,label:'Dokument'},
  {name:'versionID',type:'number',label:'Versions-ID'},
  {name:'contentHash',type:'text',required:true,label:'Inhalts-Hash'},
  {name:'action',type:'select',options:publicationActions.map(value=>({value,label:({created:'Angelegt',edited:'Bearbeitet',review_requested:'Zur Prüfung',approved:'Freigegeben',published:'Veröffentlicht',unpublished:'Veröffentlichung zurückgenommen',restored:'Version wiederhergestellt'})[value]})),required:true,label:'Aktion'},
  {name:'actorID',type:'number',label:'Benutzer-ID'},
  {name:'actor',type:'text',required:true,label:'Ausgeführt von'},
 ],
}
