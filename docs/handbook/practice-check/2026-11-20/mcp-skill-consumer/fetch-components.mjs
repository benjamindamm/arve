import { writeFile,readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
const dir='/Users/kcnpxcp/Dev/GitHub/design-system/docs/handbook/practice-check/2026-11-20/mcp-skill-consumer';
for (const [i,component] of ['input','button','switch','checkbox'].entries()) {
 const id=`0${i+6}-${component}`;
 await writeFile(`${dir}/${id}.request.json`,JSON.stringify({name:'get_component_page',arguments:{system:'shadcn',component}},null,2));
 const run=spawnSync(process.execPath,[`${dir}/client.mjs`,id],{encoding:'utf8'}); if(run.status)throw new Error(run.stderr);
 const data=JSON.parse(await readFile(`${dir}/${id}.response.json`,'utf8'));
 console.log(id,JSON.stringify(data.structuredContent||data,null,2));
}
