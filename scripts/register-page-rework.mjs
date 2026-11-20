import {readFile,writeFile} from 'node:fs/promises'
const slug=process.argv[2]
if(!/^[a-z][a-z0-9-]+$/.test(slug??''))throw new Error('Expected section slug')
const target='src/docs/page-reworks/registry.ts'
let source=await readFile(target,'utf8')
if(!source.includes(`'${slug}': () =>`))source=source.replace(' = {\n', ` = {\n  '${slug}': () => import('./${slug}'),\n`)
await writeFile(target,source)
