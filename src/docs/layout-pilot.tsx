import type {Page} from '../payload-types'
import {Content} from './content'
import Detail from './page-reworks/detailseite'
import Edit from './page-reworks/page-type-edit'
import Create from './page-reworks/page-type-create'
import Form from './page-reworks/content-layout-form-layout'
import {LayoutVariantPicker} from './page-reworks/layout-variant-picker'
import './layout-guide.css'
export function LayoutPilot({content}:{content:Page['content']}){
 const variants=[['detail','Detailansicht',Detail],['edit','Bearbeiten',Edit],['create','Erstellen',Create],['form','Formular',Form]] as const
 return <div><div className="layout-pilot-note"><Content blocks={content?.filter(b=>b.blockName==='pilot-scope')}/></div><LayoutVariantPicker legend="Projektpilot · konkrete Beispielentscheidungen" variants={variants.map(([key,title,Component])=>({id:'pilot-'+key,title,purpose:'',kind:key,content:<div id={'pilot-'+key}><Component anchorPrefix={'pilot-'+key+'-'} content={content?.filter(b=>b.blockName?.startsWith('pilot-'+key+'--')).map(b=>({...b,blockName:b.blockName!.split('--').slice(1).join('--')}))}/></div>}))}/></div>
}
