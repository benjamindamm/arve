#!/usr/bin/env node
import {StdioServerTransport} from '@modelcontextprotocol/sdk/server/stdio.js'
import {createHandbookServer} from '../../../src/mcp/server'
import {staticProvider} from './static-provider'
const args=process.argv.slice(2)
if(args.includes('--help')){
 process.stdout.write('Arve MCP 0.1.0\nUsage: arve-mcp --base-url https://example.org/arve/\nAlternative: ARVE_BASE_URL environment variable. Read-only stdio MCP; no CMS or database required.\n');process.exit(0)
}
try{
 const flag=args.indexOf('--base-url')
 if(args.length!==0&&(flag!==0||args.length!==2||!args[1]||args[1].startsWith('--')))throw Error('Unknown arguments. Use --help.')
 const input=(flag>=0?args[flag+1]:undefined)??process.env.ARVE_BASE_URL
 if(!input)throw Error('Set --base-url or ARVE_BASE_URL to the static Arve site root.')
 const {provider,baseUrl,release}=await staticProvider(input)
 const server=createHandbookServer(provider,baseUrl)
 console.error(`Arve MCP: pinned release ${release}`)
 await server.connect(new StdioServerTransport())
}catch(error){console.error('Arve MCP:',error instanceof Error?error.message:'Startup failed.');process.exitCode=1}
