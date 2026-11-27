import { withPayload } from '@payloadcms/next/withPayload'

const contractAssets = ['./src/contracts/registry.json','./src/contracts/libraries/**/*','./src/contracts/exports/**/*']
export default withPayload({ agentRules: false, outputFileTracingIncludes: {
  '/mcp': [...contractAssets, './.agents/skills/arve-*-handbook/**/*.md', './public/mcp-apps/color-review.html'],
  '/systems/*/components/*': contractAssets,
  '/systems/*/components/*/files': contractAssets,
  '/systems/*/components/*/assets/*': contractAssets,
} })
