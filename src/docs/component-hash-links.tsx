'use client'
import {useEffect} from 'react'

/** Reveal linked rules without replacing native URL, keyboard or details behaviour. */
export function ComponentHashLinks({pagePath}:{pagePath:string}) {
  useEffect(()=>{
    const reveal=(hash:string)=>{
      if(!hash)return
      let id:string
      try{id=decodeURIComponent(hash.slice(1))}catch{return}
      const target=document.getElementById(id)
      if(!target)return
      let parent:HTMLElement|null=target
      while(parent){if(parent instanceof HTMLDetailsElement)parent.open=true;parent=parent.parentElement}
    }
    const onHash=()=>reveal(window.location.hash)
    const onClick=(event:MouseEvent)=>{
      if(event.defaultPrevented||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return
      const anchor=event.target instanceof Element?event.target.closest('a'):null
      if(!anchor||anchor.hasAttribute('download')||(anchor.target&&anchor.target!=='_self'))return
      if(anchor.origin===location.origin&&anchor.pathname===location.pathname&&anchor.search===location.search)reveal(anchor.hash)
    }
    onHash()
    window.addEventListener('hashchange',onHash)
    document.addEventListener('click',onClick)
    return()=>{window.removeEventListener('hashchange',onHash);document.removeEventListener('click',onClick)}
  },[pagePath])
  return null
}
