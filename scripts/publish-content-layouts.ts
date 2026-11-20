import assert from 'node:assert/strict'
import {getPayload} from 'payload'
import {postgresAdapter} from '@payloadcms/db-postgres'
import config from '../src/payload.config'
import {contentLayouts} from '../src/docs/content-layouts'
import type {Page} from '../src/payload-types'
const text=(title:string,paragraphs:readonly string[]):NonNullable<Page['content']>[number]=>({blockType:'text',body:{root:{type:'root',version:1,direction:'ltr',format:'',indent:0,children:[{type:'heading',tag:'h2',version:1,children:[{type:'text',version:1,text:title}]},...paragraphs.map(text=>({type:'paragraph',version:1,children:[{type:'text',version:1,text}]}))]}}})
const cfg=await config;cfg.db={...postgresAdapter({push:false,pool:{connectionString:process.env.DATABASE_URI}}),name:'postgres',allowIDOnCreate:false}
const p=await getPayload({config:cfg})
try{
 const {docs:[system]}=await p.find({collection:'design-systems',where:{slug:{equals:'shadcn'}},depth:0});assert(system)
 const transactionID=await p.db.beginTransaction();assert(transactionID);const req={transactionID}
 try{
 const pages=(await p.find({collection:'pages',pagination:false,depth:0,draft:true,req,where:{designSystem:{equals:system.id}}})).docs;const bySlug=new Map(pages.map(page=>[page.slug,page]));assert(bySlug.has('shadcn-layout'))
 const create=async(slug:string,title:string,summary:string,parent:number,order:number,content:Page['content'])=>{
  const existing=bySlug.get(slug);if(existing){assert.equal(existing.title,title);assert.equal(existing.parent,parent);assert.equal(existing._status,'published');return existing}
  return p.create({collection:'pages',depth:0,draft:false,req,data:{slug,title,summary,parent,order,content,system:'shadcn',designSystem:system.id,pageType:'layout',_status:'published'}})
 }
 const root=await create('shadcn-content-layouts','Content layouts','Inhalte innerhalb einer Card oder eines Abschnitts anordnen.',bySlug.get('shadcn-layout')!.id,2,[])
 for(const [order,layout] of contentLayouts.entries())await create('shadcn-content-layout-'+layout.slug,layout.title,layout.purpose,root.id,order,[text('Anordnung',layout.rules),text('Passende Bausteine',layout.related.map(item=>item.label)),text('Quelle und Stand',['Die Projektinhalte, Abstände und Anordnungsregeln gehören zur shadcn-Referenzimplementierung. Labels stehen in der Formularreferenz über den Feldern.','20. November 2026 · Statische Darstellung. Lange und fehlende Inhalte sind bewusst ergänzte Prüffälle.'])])
 const navigation=bySlug.get('shadcn-seitenstruktur-und-navigation');if(navigation&&navigation.order===2)await p.update({collection:'pages',id:navigation.id,data:{order:3},draft:false,req})
 await p.db.commitTransaction(transactionID);console.log('Content layouts und drei Muster veröffentlicht')
 }catch(e){await p.db.rollbackTransaction(transactionID);throw e}
}finally{await p.destroy()}
process.exit(0)
