import type { ComponentPropsWithRef } from 'react'
import { sitePath } from './site-path'

export function SiteAnchor({ href, ...props }: ComponentPropsWithRef<'a'>) {
  return <a {...props} href={href ? sitePath(href) : href} />
}
