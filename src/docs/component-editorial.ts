import type { Page } from '../payload-types'

export type EditorialLink = {text: string; href: string; paragraph?: number}
export type EditorialSection = {
  key: string; title: string; paragraphs: string[]; bullets?: string[]; links?: EditorialLink[];
  illustration?: {src: string; alt: string; caption: string; minWidth?: number}
  notice?: {title: string; text: string; link?: {label: string; href: string}}
}
export type ComponentEditorial = {
  format: 1; library: 'shadcn'; revision: string; component: string;
  title: string; summary: string; sections: EditorialSection[]
}

/** Authoring interchange only. Published content remains editable Payload rich text. */
export function editorialContent(document: ComponentEditorial): Page['content'] {
  const base={version:1,direction:'ltr' as const,format:'' as const,indent:0}
  const leaf=(text:string)=>({type:'text',version:1,text})
  const inline=(text:string,links:EditorialLink[]=[])=>{
    const children:any[]=[];let cursor=0
    const word=(value:string|undefined)=>!!value&&/[\p{L}\p{N}_]/u.test(value)
    while(cursor<text.length){
      let chosen:EditorialLink|undefined,position=text.length
      for(const link of links){
        if(!link.text.trim()||!link.href.startsWith('/')||link.href.startsWith('//'))throw Error('Invalid editorial link')
        let start=text.indexOf(link.text,cursor)
        while(start>=0&&((word(link.text[0])&&word(text[start-1]))||(word(link.text.at(-1))&&word(text[start+link.text.length]))))start=text.indexOf(link.text,start+1)
        if(start>=0&&(start<position||(start===position&&link.text.length>(chosen?.text.length??0)))){chosen=link;position=start}
      }
      if(!chosen){children.push(leaf(text.slice(cursor)));break}
      if(position>cursor)children.push(leaf(text.slice(cursor,position)))
      children.push({...base,type:'link',fields:{linkType:'custom',url:chosen.href,newTab:false},children:[leaf(chosen.text)]})
      cursor=position+chosen.text.length
    }
    return children.length?children:[leaf(text)]
  }
  const paragraph=(text:string,links:EditorialLink[]=[])=>({...base,type:'paragraph',children:inline(text,links)})
  return document.sections.map(section=>({
    blockType:'text' as const,blockName:section.key,
    body:{root:{...base,type:'root',children:[
      {...base,type:'heading',tag:'h2',children:[leaf(section.title)]},
      ...(section.notice?[{...base,type:'quote',children:[
        {...leaf(section.notice.title),format:1},leaf(' '+section.notice.text+' '),
        ...(section.notice.link?[{...base,type:'link',fields:{linkType:'custom',url:section.notice.link.href,newTab:false},children:[leaf(section.notice.link.label)]}]:[]),
      ]}]:[]),
      ...section.paragraphs.map((text,index)=>paragraph(text,section.links?.filter(link=>link.paragraph===undefined||link.paragraph===index))),
      ...(section.bullets?.length?[{...base,type:'list',listType:'bullet',tag:'ul',start:1,children:section.bullets.map((text,i)=>({...base,type:'listitem',value:i+1,children:inline(text,section.links?.filter(link=>link.paragraph===undefined))}))}]:[]),
      ...(section.illustration?[
        {...base,type:'paragraph',children:[{...base,type:'link',fields:{linkType:'custom',url:section.illustration.src,newTab:false,editorialMinWidth:section.illustration.minWidth??320},children:[leaf(section.illustration.alt)]}]},
        paragraph(section.illustration.caption),
      ]:[]),
    ]}},
  }))
}
