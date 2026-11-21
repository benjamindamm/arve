import { GET as download } from '../../files/route'

// Preserve package directories so CSS @import and url() resolve in the browser.
export async function GET(request: Request, {params}: {params: Promise<{system:string;component:string;asset:string[]}>}) {
  const {system,component,asset}=await params
  const name=asset.join('/'), url=new URL(request.url)
  url.searchParams.set('path',name)
  const response=await download(new Request(url),{params:Promise.resolve({system,component})})
  if(!response.ok)return response
  const extension=name.split('.').pop()?.toLowerCase()
  const mime:Record<string,string>={css:'text/css; charset=utf-8',woff:'font/woff',woff2:'font/woff2',ttf:'font/ttf',otf:'font/otf'}
  if(!extension||!mime[extension])return response
  const headers=new Headers(response.headers)
  headers.set('Content-Type',mime[extension]);headers.set('Content-Disposition','inline')
  return new Response(response.body,{headers})
}
