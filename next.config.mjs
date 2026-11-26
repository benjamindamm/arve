import { withPayload } from '@payloadcms/next/withPayload'

const contractAssets = [
  './src/contracts/libraries/shadcn/30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90/package/**/*',
  './src/contracts/libraries/shadcn/bde7fffabf50d7983ea8a2bf0bdabdb09dd9a83537825c744af5f309db5edf91/package/**/*',
  './src/contracts/libraries/shadcn/65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26/**/*',
  './src/contracts/libraries/shadcn/5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed/**/*',
]
export default withPayload({ agentRules: false, outputFileTracingIncludes: {
  '/mcp': [...contractAssets, './.agents/skills/arve-*-handbook/**/*.md', './public/mcp-apps/color-review.html'],
  '/systems/*/components/*': contractAssets,
  '/systems/*/components/*/files': contractAssets,
  '/systems/*/components/*/assets/*': contractAssets,
} })
