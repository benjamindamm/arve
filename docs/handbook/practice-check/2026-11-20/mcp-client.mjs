import {Client} from '/Users/kcnpxcp/Dev/GitHub/design-system/node_modules/@modelcontextprotocol/sdk/dist/esm/client/index.js';
import {StreamableHTTPClientTransport} from '/Users/kcnpxcp/Dev/GitHub/design-system/node_modules/@modelcontextprotocol/sdk/dist/esm/client/streamableHttp.js';
const c=new Client({name:'handbook-practice',version:'1.0'}); await c.connect(new StreamableHTTPClientTransport(new URL('http://127.0.0.1:3010/mcp')));
const action=process.argv[2]; console.log(JSON.stringify(action==='list'?await c.listTools():await c.callTool({name:action,arguments:JSON.parse(process.argv[3]||'{}')}),null,2)); await c.close();
