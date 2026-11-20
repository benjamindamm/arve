import tokens from '../contracts/libraries/shadcn/5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed/tokens.json'
export type ColorTheme = 'light' | 'dark'
export type ColorRole = keyof typeof tokens.theme.light
export const colorPairs: [ColorRole, ColorRole][] = [['foreground','background'],['primaryForeground','primary'],['mutedForeground','background']]
export function exportColor(theme: ColorTheme, role: ColorRole) {
  const alias = tokens.theme[theme][role].$value.slice(9,-1) as keyof typeof tokens.palette
  return tokens.palette[alias].$value.hex
}
export function colorContrast(a: string, b: string) {
  const lum = (hex: string) => [1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0)
  const x=lum(a), y=lum(b)
  return ((Math.max(x,y)+.05)/(Math.min(x,y)+.05)).toFixed(2)
}
