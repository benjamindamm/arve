import { spawnSync } from 'node:child_process'
import path from 'node:path'
function run(cmd,args,cwd=process.cwd()) {
  const result=spawnSync(cmd,args,{cwd,stdio:'inherit',env:{...process.env,ARVE_STATIC_EXPORT:'1',NEXT_PUBLIC_ARVE_STATIC:'1',NEXT_PUBLIC_ARVE_BASE_PATH:process.env.ARVE_BASE_PATH??'/arve',DATABASE_URI:'',PAYLOAD_SECRET:''}})
  if(result.status!==0)process.exit(result.status??1)
}
run(process.execPath,['--import','tsx','scripts/prepare-static-site.mjs'])
run(process.execPath,['--import','tsx','scripts/export-static-assets.ts'])
run(process.execPath,[path.resolve('node_modules/next/dist/bin/next'),'build'],path.resolve('.runtime/static-site'))
