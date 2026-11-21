'use client'
import { SiteAnchor } from './site-anchor'


import { useState } from 'react'
import type { compactComponent } from './mcp-reads'

type Result = ReturnType<typeof compactComponent>
type ToolRead = { tool: string; arguments: Record<string, unknown> }

export function McpDemo({ system, component }: { system: string; component: string }) {
  const [result, setResult] = useState<Result | null>(null)
  const [guidance, setGuidance] = useState('')
  const [behavior, setBehavior] = useState<{ path: string; content: string } | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function run() {
    setStatus('loading')
    setResult(null)
    setGuidance('')
    setBehavior(null)
    try {
      const [{ Client }, { StreamableHTTPClientTransport }] = await Promise.all([
        import('@modelcontextprotocol/sdk/client/index.js'),
        import('@modelcontextprotocol/sdk/client/streamableHttp.js'),
      ])
      const client = new Client({ name: 'design-system-demo', version: '1.0.0' })
      try {
        await client.connect(new StreamableHTTPClientTransport(new URL('/mcp', window.location.origin)))
        const read = async ({ tool, arguments: args }: ToolRead) => {
          const response = await client.callTool({ name: tool, arguments: args }, undefined, { timeout: 10000 })
          if (response.isError || !response.structuredContent) throw new Error('Unexpected MCP response')
          return response.structuredContent as Record<string, unknown>
        }
        const data = await read({ tool: 'get_component_page', arguments: { system, component } }) as Result
        if (data.view !== 'compact' || data.system !== system || data.component !== component ||
          !Array.isArray(data.guidance?.inventory) || !Array.isArray(data.platform?.entries)) {
          throw new Error('Unexpected MCP response')
        }
        setResult(data)
        // Read the exact first published guidance block, without loading the whole page.
        const first = data.guidance.inventory.find(section => section.key === 'usage') ?? data.guidance.inventory[0]
        if (first) {
          const section = await read({ ...first.read, arguments: { ...first.read.arguments, limit: 3000 } })
          if (typeof section.content !== 'string') throw new Error('Unexpected guidance response')
          const wording = section.content.replace(/^tag: h[1-6]\n/gm, '')
          const prefix = first.key ? `blockName: ${first.key}\n` : ''
          setGuidance((prefix && wording.startsWith(prefix) ? wording.slice(prefix.length) : wording) + (section.complete ? '' : '\nAusschnitt – weitere Hinweise stehen auf der Komponentenseite.'))
        }
        const behaviorRead = data.domains.find(entry => entry.domain === 'behavior')
        if (behaviorRead) {
          const chunk = await read(behaviorRead)
          if (typeof chunk.content !== 'string' || !chunk.complete) throw new Error('Unexpected behavior reference')
          const domain = JSON.parse(chunk.content) as { path?: string; read?: ToolRead }
          if (typeof domain.path === 'string' && domain.read && typeof domain.read === 'object') {
            const file = await read(domain.read as ToolRead)
            if (typeof file.content !== 'string') throw new Error('Unexpected behavior file')
            setBehavior({ path: domain.path, content: file.content + (file.complete ? '' : '\n<!-- Ausschnitt: vollständige Datei auf der Komponentenseite -->') })
          }
        }
        setStatus('success')
      } finally {
        await client.close()
      }
    } catch {
      setResult(null)
      setGuidance('')
      setBehavior(null)
      setStatus('error')
    }
  }

  return (
    <section className="catalog mcp-demo" id="mcp-demo" aria-labelledby="mcp-demo-title">
      <div>
        <h2 id="mcp-demo-title">Was bekommt ein Agent über MCP?</h2>
        <p>Ruf den Einsatzhinweis, den UI Contract und den Plattformstand für den Button «Rechnung herunterladen» ab.</p>
        <button type="button" className="system-button" aria-disabled={status === 'loading'} onClick={() => { if (status !== 'loading') void run() }}>
          {status === 'loading' ? 'MCP wird abgefragt …' : status === 'success' ? 'Erneut über MCP abrufen' : 'Button über MCP abrufen'}
        </button>
        <p role="status">{{
          idle: '', loading: 'Verbindung zum MCP-Endpunkt wird aufgebaut.',
          success: 'Antwort vom MCP-Endpunkt erhalten.',
          error: 'Der MCP-Abruf ist fehlgeschlagen. Versuche es erneut.',
        }[status]}</p>
      </div>
      <div className="mcp-demo-response">
        <div className="mcp-demo-call"><code>get_component_page</code><code>{system} / {component}</code></div>
        {result && <>
          <dl>
            <div><dt>Einsatzhinweis</dt><dd style={{ whiteSpace: 'pre-line' }}>{guidance || 'Kein redaktioneller Hinweis veröffentlicht.'}</dd></div>
            <div><dt>Technischer Contract</dt><dd>{result.contract
              ? <>{result.contract.library} / {result.contract.component} · {result.contract.status}<br /><code>{result.contract.revision}</code>{behavior && <><br /><code>{behavior.path}</code></>}</>
              : 'Kein Contract verfügbar.'}</dd></div>
            <div><dt>Plattformstand</dt><dd>{result.platform.entries.length
              ? <ul>{result.platform.entries.map((entry) => <li key={entry.id}>
                <strong>{{ web: 'Web', ios: 'iOS', android: 'Android' }[entry.platform]} · {entry.releaseStatus === 'preview' ? 'Preview' : entry.releaseStatus}</strong>
                <br />{entry.name}{entry.packageName && ' · ' + entry.packageName}{entry.packageVersion && ' ' + entry.packageVersion}
                {entry.contract?.revision && <><br />Contract: <code>{entry.contract.revision}</code></>}
                {entry.verification?.scope && <><br />{entry.verification.scope}</>}
              </li>)}</ul> : 'Keine Implementierung veröffentlicht.'}</dd></div>
          </dl>
          {behavior && <details><summary>SCXML aus der MCP-Antwort lesen</summary><pre className="contract-code"><code>{behavior.content}</code></pre></details>}
          <SiteAnchor href={result.pageUrl}>Komponentenseite öffnen ↗</SiteAnchor>
        </>}
      </div>
    </section>
  )
}
