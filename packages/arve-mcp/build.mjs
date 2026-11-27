import {build} from 'esbuild'
import {chmod} from 'node:fs/promises'
await build({entryPoints:[new URL('./src/cli.ts',import.meta.url).pathname],outfile:new URL('./dist/cli.js',import.meta.url).pathname,bundle:true,platform:'node',format:'esm',target:'node22',packages:'external'})
await chmod(new URL('./dist/cli.js',import.meta.url),0o755)
