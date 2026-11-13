'use client'

import type { Control } from '../demos/shadcn/controls'
import { useEffect, useRef, useState } from 'react'

export function ComponentDemo({ demoKey = 'spartan-button', label = 'Rechnung herunterladen', initialVariant = 'default' }: {
  demoKey?: 'spartan-button' | Control
  label?: string
  initialVariant?: 'default' | 'outline'
}) {
  const host = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    const element = host.current
    if (!element) return

    const demoHost = document.createElement('div')
    element.append(demoHost)
    let disposed = false
    let unmount: (() => void) | undefined
    async function mount() {
      if (demoKey === 'spartan-button') {
        const { mountButtonDemo } = await import('../demos/shadcn/button')
        if (!disposed) return mountButtonDemo(demoHost, label, initialVariant)
      } else {
        const { mountControlDemo } = await import('../demos/shadcn/controls')
        if (!disposed) return mountControlDemo(demoHost, demoKey, label)
      }
    }
    void mount()
      .then((cleanup) => {
        if (!cleanup) return
        if (disposed) cleanup()
        else {
          unmount = cleanup
          setState('ready')
        }
      })
      .catch((error: unknown) => {
        if (!disposed) {
          console.error('Angular-Demo konnte nicht gestartet werden', error)
          setState('error')
        }
      })

    return () => {
      disposed = true
      unmount?.()
      demoHost.remove()
    }
  }, [demoKey, label, initialVariant])

  return (
    <div className="demo">
      <div ref={host} />
      {state !== 'ready' && (
        <p className="demo-stage" role="status">
          {state === 'loading' ? 'Beispiel wird geladen …' : 'Das Beispiel konnte nicht geladen werden.'}
        </p>
      )}
    </div>
  )
}
