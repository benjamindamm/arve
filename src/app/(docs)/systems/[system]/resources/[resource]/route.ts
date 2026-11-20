import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { findDesignResource } from '../../../../../../docs/design-resources'
import { readPublishedSection } from '../../../../../../docs/component-pages'

export async function GET(_request: Request, { params }: { params: Promise<{ system: string; resource: string }> }) {
  const { system, resource: id } = await params
  const match = findDesignResource(system, id)
  if (!match || !await readPublishedSection(system, match.section)) return new Response('Not found', { status: 404 })
  const name = match.resource.path
  if (path.isAbsolute(name) || name.includes('\\') || name.split('/').some(part => !part || part === '.' || part === '..')) return new Response('Invalid resource', { status: 500 })
  let bytes: Buffer
  try { bytes = await readFile(path.join(process.cwd(), 'docs/handbook/design-resources', name)) }
  catch { return new Response('Resource unavailable', { status: 404 }) }
  if (createHash('sha256').update(bytes).digest('hex') !== match.resource.sha256) return new Response('Resource integrity check failed', { status: 500 })
  return new Response(new Uint8Array(bytes), { headers: {
    'Content-Type': 'application/octet-stream',
    'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(path.basename(name))}`,
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': 'no-store',
  } })
}
