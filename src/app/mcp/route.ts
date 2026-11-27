import {WebStandardStreamableHTTPServerTransport} from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js'
import {createHandbookServer} from '../../mcp/server'
import {liveProvider} from '../../mcp/live-provider'
export const runtime = 'nodejs'

export async function POST(request: Request) {
  const origin = request.headers.get('origin')
  const requestUrl = new URL(request.url)
  // Next.js can normalize the loopback hostname in Request.url.
  const host = request.headers.get('host')
  const browserOrigin = host ? requestUrl.protocol + '//' + host : requestUrl.origin
  const localOrigins = new Set(['http://localhost:3010', 'http://127.0.0.1:3010'])
  const allowedLocalOrigin = origin && localOrigins.has(origin) && localOrigins.has(browserOrigin)
  if (origin && origin !== browserOrigin && !allowedLocalOrigin) {
    return new Response('Origin not allowed', { status: 403 })
  }

  const server=createHandbookServer(liveProvider,request.url)
  const transport = new WebStandardStreamableHTTPServerTransport({ enableJsonResponse: true })

  try {
    await server.connect(transport)
    return await transport.handleRequest(request)
  } finally {
    await server.close()
  }
}

export function GET() {
  return new Response(null, { status: 405, headers: { Allow: 'POST' } })
}
