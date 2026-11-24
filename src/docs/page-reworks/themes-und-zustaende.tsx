import type { Page } from '../../payload-types'
import { ColorPage } from '../color-page'
export default function ThemesAndStates({content}: {content:Page['content']}) {
 return <ColorPage content={content} presentation="usage"/>
}
