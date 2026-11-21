'use client'

import { useEffect, useState } from 'react'

/** The complete source value stays selectable when clipboard access is unavailable. */
export function CopyValue({ label, value }: { label: string; value: string }) {
  const [message, setMessage] = useState('')
  useEffect(() => { setMessage('') }, [label, value])
  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setMessage('Kopiert.')
    } catch {
      setMessage('Kopieren nicht möglich. Den Wert markieren und manuell kopieren.')
    }
  }
  return <div className="component-copy-value">
    <div><span>{label}</span><button type="button" onClick={copy} aria-label={`${label} kopieren`}>Kopieren</button></div>
    <code>{value}</code>
    <span className="component-copy-feedback" role="status">{message}</span>
  </div>
}
