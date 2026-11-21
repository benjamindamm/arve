export const staticPublication = process.env.NEXT_PUBLIC_ARVE_STATIC === '1'
const basePath = process.env.NEXT_PUBLIC_ARVE_BASE_PATH ?? ''

/** Raw anchors/assets need a prefix; next/link adds the configured basePath itself. */
export function sitePath(value: string) {
  return value.startsWith('/') && !value.startsWith('//') && basePath && value !== basePath && !value.startsWith(basePath + '/')
    ? basePath + value : value
}

export function contractFileUrl(system: string, component: string, revision: string, file: string, inline = false) {
  return staticPublication
    ? sitePath(`/contracts/${encodeURIComponent(system)}/${revision}/${file.split('/').map(encodeURIComponent).join('/')}`)
    : `/systems/${encodeURIComponent(system)}/components/${encodeURIComponent(component)}/files?path=${encodeURIComponent(file)}${inline ? '&display=inline' : ''}`
}

export function contractAssetUrl(system:string,component:string,library:string,revision:string,file:string) {
  return staticPublication ? contractFileUrl(library,component,revision,file)
    : sitePath(`/systems/${encodeURIComponent(system)}/components/${encodeURIComponent(component)}/assets/${file.split('/').map(encodeURIComponent).join('/')}`)
}
