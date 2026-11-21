'use client'
import { SiteAnchor } from './site-anchor'


import { useState } from 'react'
import type { getComponentPage } from './component-pages'

type Result = NonNullable<Awaited<ReturnType<typeof getComponentPage>>>

export function McpDemo({ system, component }: { system: string; component: string }) {
  const [result, setResult] = useState<Result | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function run() {
    setStatus('loading')
    setResult(null)
    try {
      const [{ Client }, { StreamableHTTPClientTransport }] = await Promise.all([
        import('@modelcontextprotocol/sdk/client/index.js'),
        import('@modelcontextprotocol/sdk/client/streamableHttp.js'),
      ])
      const client = new Client({ name: 'design-system-demo', version: '1.0.0' })
      try {
        await client.connect(new StreamableHTTPClientTransport(new URL('/mcp', window.location.origin)))
        const response = await client.callTool({ name: 'get_component_page', arguments: { system, component } }, undefined, { timeout: 10000 })
        const data = response.structuredContent as Partial<Result> | undefined
        if (response.isError || data?.system !== system || data.component !== component ||
          !Array.isArray(data.content) || !Array.isArray(data.implementations)) {
          throw new Error('Unexpected MCP response')
        }
        setResult(data as Result)
        setStatus('success')
      } finally {
        await client.close()
      }
    } catch {
      setStatus('error')
    }
  }

  const rule = result?.content.find((block) => block.blockType === 'guideline' && block.recommendation === 'do')
  const source = result?.contract?.sources.behavior
  const behavior = source ? result?.contract?.files[source] : undefined

  return (
    <section className="catalog mcp-demo" id="mcp-demo" aria-labelledby="mcp-demo-title">
      <div>
        <h2 id="mcp-demo-title">Was bekommt ein Agent über MCP?</h2>
        <p>Ruf die Einsatzregel, den UI Contract und den Plattformstand für den Button «Rechnung herunterladen» ab.</p>
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
            <div><dt>Einsatzregel</dt><dd>{rule?.blockType === 'guideline' ? rule.explanation : 'Keine Do-Regel veröffentlicht.'}</dd></div>
            <div><dt>Technischer Contract</dt><dd>{result.contract
              ? <>{result.contract.library} / {result.contract.component} · {result.contract.status}<br /><code>{result.contract.revision}</code>{source && <><br /><code>{source}</code></>}</>
              : 'Kein Contract verfügbar.'}</dd></div>
            <div><dt>Plattformstand</dt><dd>{result.implementations.length
              ? <ul>{result.implementations.map((entry) => <li key={entry.id}>
                <strong>{{ web: 'Web', ios: 'iOS', android: 'Android' }[entry.platform]} · {entry.releaseStatus === 'preview' ? 'Preview' : entry.releaseStatus}</strong>
                <br />{entry.name}{entry.packageName && ' · ' + entry.packageName}{entry.packageVersion && ' ' + entry.packageVersion}
                {entry.contract?.revision && <><br />Contract: <code>{entry.contract.revision}</code></>}
                {entry.verification?.scope && <><br />{entry.verification.scope}</>}
              </li>)}</ul> : 'Keine Implementierung veröffentlicht.'}</dd></div>
          </dl>
          {behavior && <details><summary>SCXML aus der MCP-Antwort lesen</summary><pre className="contract-code"><code>{behavior.content}</code></pre></details>}
          <SiteAnchor href={result.path}>Komponentenseite öffnen ↗</SiteAnchor>
        </>}
      </div>
    </section>
  )
}
