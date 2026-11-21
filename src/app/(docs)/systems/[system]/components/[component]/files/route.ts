import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { getComponentPage } from '../../../../../../../docs/component-pages'
import { contractArtifactPath } from '../../../../../../../contracts/catalog'

export async function GET(request: Request, { params }: { params: Promise<{ system: string; component: string }> }) {
  const { system, component } = await params
  const page = await getComponentPage(system, component)
  const name = new URL(request.url).searchParams.get('path')
  const artifact = page?.contractArtifacts.find(file => file.path === name)
  const contract = page?.contract
  if (!contract || !artifact || !name || name.includes('\\') || name.split('/').some(part => !part || part === '.' || part === '..')) return new Response('Not found', { status: 404 })
  let bytes: Uint8Array
  const text = contract.files[name]
  if (text) bytes = Buffer.from(text.content, 'utf8')
  else {
    if (!/^[a-z][a-z0-9-]*$/.test(contract.library) || !/^[a-f0-9]{64}$/.test(contract.revision)) return new Response('Not found', { status: 404 })
    const filename = contractArtifactPath(contract, name)
    if (!filename) return new Response('Artifact unavailable', { status: 404 })
    try { bytes = await readFile(/*turbopackIgnore: true*/ filename) }
    catch { return new Response('Artifact unavailable', { status: 404 }) }
  }
  if (createHash('sha256').update(bytes).digest('hex') !== artifact.sha256) return new Response('Artifact integrity check failed', { status: 500 })
  const inline = new URL(request.url).searchParams.get('display') === 'inline' && name.endsWith('.png') && Buffer.from(bytes).subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))
  return new Response(new Uint8Array(bytes), { headers: {
    'Content-Type': inline ? 'image/png' : 'application/octet-stream',
    'Content-Disposition': `${inline ? 'inline' : 'attachment'}; filename*=UTF-8''${encodeURIComponent(path.posix.basename(name))}`,
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': 'no-store',
  } })
}
