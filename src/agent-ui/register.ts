import {createHash} from 'node:crypto'
import type {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js'
import {registerAppTool,registerAppResource,RESOURCE_MIME_TYPE} from '@modelcontextprotocol/ext-apps/server'
import {colorDiscussionSchema,readableComparison,type ColorDiscussion,type ColorReview} from './color-discussion'

export const colorReviewUri='ui://arve/color-review-v1.html'
export function makeColorReview(discussion:ColorDiscussion):ColorReview{
  const value=colorDiscussionSchema.parse(discussion)
  return {kind:'arve-color-discussion/1',snapshot:createHash('sha256').update(JSON.stringify(value)).digest('hex'),discussion:value}
}
export function registerColorReview(server:McpServer,loadHtml:()=>Promise<string>){
  registerAppTool(server,'compare_color_roles',{
    title:'Farben gemeinsam klären',
    description:'Show 2–3 explicitly proposed color-role variants in a visual MCP App or as full text. Select the target system/scope explicitly; no default library. Read arve-color-handbook first through get_authoring_skill. Supply only sourced values or clearly labelled proposals and their provenance. For comparing primary actions against error messages, not chart palettes or palette approval. The user can choose, request a change or leave the question open. Result stays in conversation; no CMS writes/publication. Text clients must ask the same question with the returned options. Never infer a choice from a tool call.',
    inputSchema:colorDiscussionSchema.shape,
    annotations:{readOnlyHint:true,destructiveHint:false,idempotentHint:true,openWorldHint:false},
    _meta:{ui:{resourceUri:colorReviewUri}},
  },async args=>{
    const review=makeColorReview(args)
    return {structuredContent:review,content:[{type:'text',text:readableComparison(review)}]}
  })
  registerAppResource(server,'Farben gemeinsam klären',colorReviewUri,{mimeType:RESOURCE_MIME_TYPE},async()=>({contents:[{
    uri:colorReviewUri,mimeType:RESOURCE_MIME_TYPE,
    text:await loadHtml(),
    _meta:{ui:{csp:{connectDomains:[],resourceDomains:[]}}},
  }]}))
}
