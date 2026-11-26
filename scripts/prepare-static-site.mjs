import {pagePath} from '../src/docs/systems.ts'
import {snapshotData} from '../src/docs/snapshot-data.ts'
import { cp, mkdir, readFile, rm, symlink, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd(), stage = path.join(root, '.runtime/static-site')
const basePath = process.env.ARVE_BASE_PATH ?? '/arve'
if (!/^(?:\/[a-zA-Z0-9_-]+)*$/.test(basePath)) throw Error('Invalid ARVE_BASE_PATH')
const snapshot = JSON.parse(await readFile('scripts/content/handbook-snapshot.json','utf8'))
if (snapshot.format !== 1 || !snapshot.pages.length || snapshot.pages.some(page=>page._status!=='published')) throw Error('Expected an explicit published handbook snapshot')
await rm(stage,{recursive:true,force:true})
await mkdir(stage,{recursive:true})
await cp('src',path.join(stage,'src'),{recursive:true})
await cp('.agents/skills',path.join(stage,'.agents/skills'),{recursive:true})
await mkdir(path.join(stage,'scripts/content'),{recursive:true})
await cp('scripts/content/handbook-snapshot.json',path.join(stage,'scripts/content/handbook-snapshot.json'))
await cp('docs/handbook/design-resources/manifest.json',path.join(stage,'docs/handbook/design-resources/manifest.json'),{recursive:true})
try { await cp('public',path.join(stage,'public'),{recursive:true}) } catch(error) { if(error.code!=='ENOENT')throw error }
await mkdir(path.join(stage,'public'),{recursive:true})
await symlink(path.join(root,'node_modules'),path.join(stage,'node_modules'),'dir')
await cp('package.json',path.join(stage,'package.json'))
const tsconfig = JSON.parse(await readFile('tsconfig.json','utf8'))
tsconfig.include=['next-env.d.ts','src/**/*.ts','src/**/*.tsx','.next/types/**/*.ts']
tsconfig.exclude=['node_modules','src/app/(payload)']
await writeFile(path.join(stage,'tsconfig.json'),JSON.stringify(tsconfig,null,2)+'\n')
await writeFile(path.join(stage,'next.config.mjs'),`export default ${JSON.stringify({output:'export',trailingSlash:true,basePath,images:{unoptimized:true},turbopack:{root},env:{ARVE_STATIC_EXPORT:'1',NEXT_PUBLIC_ARVE_STATIC:'1',NEXT_PUBLIC_ARVE_BASE_PATH:basePath}})}\n`)
await rm(path.join(stage,'src/app/(payload)'),{recursive:true})
await rm(path.join(stage,'src/app/mcp'),{recursive:true})
await rm(path.join(stage,'src/app/(docs)/docs'),{recursive:true})
// Dynamic download endpoints become immutable files in public/.
for(const suffix of ['systems/[system]/components/[component]/files','systems/[system]/components/[component]/assets','systems/[system]/resources','systems/shadcn/beispiele/rechnungen/[id]/pdf']) await rm(path.join(stage,'src/app/(docs)',suffix),{recursive:true})
const home = path.join(stage,'src/app/(docs)/page.tsx')
const homeSource = await readFile(home,'utf8')
if(!homeSource.includes("export const dynamic = 'force-dynamic'"))throw Error('Review static home route configuration')
await writeFile(home,homeSource.replace("export const dynamic = 'force-dynamic'",''))
const [system]=await snapshotData.systems(), pages=await snapshotData.pages(system)
const legacy=JSON.parse(await readFile('src/docs/layout-legacy.json','utf8'))
const sections=[...new Set([...pages.filter(p=>!p.component&&p.slug!==snapshot.system.home).map(p=>pagePath(system.slug,p,pages).split('/systems/'+system.slug+'/')[1]),...Object.keys(legacy.hrefs)])]
const params = [
  ['systems/[system]/page.tsx',[{system:snapshot.system.slug}]],
  ['systems/[system]/[...section]/page.tsx',sections.map(section=>({system:system.slug,section:section.split('/')}))],
  ['systems/[system]/components/[component]/page.tsx',snapshot.pages.filter(p=>p.component).map(p=>({system:snapshot.system.slug,component:p.component}))],
  ['systems/shadcn/beispiele/rechnungen/[id]/page.tsx',['RE-1048','RE-1047','RE-1046','RE-1045','RE-1044'].map(id=>({id}))],
]
for(const [relative,values]of params) {
  const file=path.join(stage,'src/app/(docs)',relative)
  await writeFile(file,(await readFile(file,'utf8'))+`\nexport const dynamicParams = false\nexport function generateStaticParams() { return ${JSON.stringify(values)} }\n`)
}
await writeFile(path.join(stage,'public/.nojekyll'),'')
console.log(JSON.stringify({stage,basePath,pages:snapshot.pages.length,components:snapshot.pages.filter(p=>p.component).length,snapshot:snapshot.capturedAt}))
