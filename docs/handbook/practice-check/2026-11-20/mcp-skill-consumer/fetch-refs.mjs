import { writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
const dir='/Users/kcnpxcp/Dev/GitHub/design-system/docs/handbook/practice-check/2026-11-20/mcp-skill-consumer';
for (const [id,path] of [['03-index','library/library.json'],['04-manifest','manifest.json'],['05-reading','skills/ui-contracts/references/reading.md']]) {
 await writeFile(`${dir}/${id}.request.json`,JSON.stringify({name:'get_library_skill',arguments:{library:'shadcn',revision:'65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26',skill:'ui-contracts',resourcePath:path}},null,2));
 const run=spawnSync(process.execPath,[`${dir}/client.mjs`,id],{encoding:'utf8'}); console.log(run.stdout); if(run.status)throw new Error(run.stderr);
}
