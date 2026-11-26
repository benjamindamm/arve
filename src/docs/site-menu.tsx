'use client'
import Link from 'next/link'
import {Menu} from '@base-ui/react/menu'
import './site-menu.css'

/** shadcn's Base UI dropdown composition, styled with Arve's existing tokens. */
export function SiteMenu({cmsEnabled}:{cmsEnabled:boolean}){
 return <Menu.Root><Menu.Trigger className="site-menu-trigger" aria-label="Arve-Menü öffnen"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/></svg></Menu.Trigger><Menu.Portal><Menu.Positioner className="site-menu-positioner" align="end" sideOffset={8} collisionPadding={16}><Menu.Popup className="site-menu-popup" aria-label="Arve-Navigation" data-slot="dropdown-menu-content">
  {[['Startseite','/'],['Zusammenarbeit','/#workflows'],['Mit KI arbeiten','/#mcp'],['Design-Systeme','/#systeme'],['Arve-Handbuch','/handbuch']].map(([label,href])=><Menu.LinkItem key={href} closeOnClick render={<Link href={href}/>} className="site-menu-link">{label}</Menu.LinkItem>)}
  {cmsEnabled&&<><Menu.Separator className="site-menu-separator"/><Menu.LinkItem closeOnClick render={<Link href="/admin"/>} className="site-menu-link">CMS öffnen <span aria-hidden="true">↗</span></Menu.LinkItem></>}
 </Menu.Popup></Menu.Positioner></Menu.Portal></Menu.Root>
}
