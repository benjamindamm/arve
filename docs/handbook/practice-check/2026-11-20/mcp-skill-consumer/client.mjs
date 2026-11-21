import { Client } from '/Users/kcnpxcp/Dev/GitHub/design-system/node_modules/@modelcontextprotocol/sdk/dist/esm/client/index.js';
import { StreamableHTTPClientTransport } from '/Users/kcnpxcp/Dev/GitHub/design-system/node_modules/@modelcontextprotocol/sdk/dist/esm/client/streamableHttp.js';
import { writeFile, readFile } from 'node:fs/promises';
const dir = '/Users/kcnpxcp/Dev/GitHub/design-system/docs/handbook/practice-check/2026-11-20/mcp-skill-consumer';
const client = new Client({ name: 'independent-skill-consumer', version: '1.0.0' });
await client.connect(new StreamableHTTPClientTransport(new URL('http://127.0.0.1:3010/mcp')));
const mode=process.argv[2]||'list';
if(mode==='list') { const result=await client.listTools(); await writeFile(`${dir}/tools.json`,JSON.stringify(result,null,2)); console.log(JSON.stringify(result,null,2)); }
else { const request=JSON.parse(await readFile(`${dir}/${mode}.request.json`,'utf8')); const result=await client.callTool(request); await writeFile(`${dir}/${mode}.response.json`,JSON.stringify(result,null,2)); console.log(JSON.stringify(result,null,2)); }
await client.close();
