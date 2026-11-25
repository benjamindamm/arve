'use client'
import {useEffect} from 'react'
import {SiteAnchor} from './site-anchor'
import {sitePath} from './site-path'
/** Static publications cannot issue HTTP redirects; retain a usable no-JS destination. */
export function LegacyDocumentationRedirect({href}:{href:string}){
 useEffect(()=>{const target=new URL(sitePath(href),location.origin);if(!target.search)target.search=location.search;if(!target.hash)target.hash=location.hash;location.replace(target.href)},[href])
 return <main className="shell"><noscript><meta httpEquiv="refresh" content={'0;url='+sitePath(href)}/></noscript><link rel="canonical" href={sitePath(href)}/><h1>Die Seite ist umgezogen</h1><p><SiteAnchor href={href}>Zur neuen Seite →</SiteAnchor></p></main>
}
