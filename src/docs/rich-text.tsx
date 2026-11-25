import { RichText as PayloadRichText } from '@payloadcms/richtext-lexical/react'
import type { ComponentProps } from 'react'
import {canonicalHandbookHref} from './handbook-paths'
import { sitePath, staticPublication } from './site-path'

function publicationLinks<T>(node: T): T {
  if (!node || typeof node !== 'object') return node
  if (Array.isArray(node)) return node.map(publicationLinks) as T
  return Object.fromEntries(Object.entries(node).map(([key, value]) => [key, key === 'url' && typeof value === 'string' ? (staticPublication?sitePath(value):canonicalHandbookHref(value)) : publicationLinks(value)])) as T
}
export function RichText({data,...props}: ComponentProps<typeof PayloadRichText>) {
  return <PayloadRichText {...props} data={publicationLinks(data)}/>
}
