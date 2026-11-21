import { withPayload } from '@payloadcms/next/withPayload'

const contractAssets = [
  './src/contracts/libraries/shadcn/bde7fffabf50d7983ea8a2bf0bdabdb09dd9a83537825c744af5f309db5edf91/package/**/*',
  './src/contracts/libraries/shadcn/65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26/**/*',
  './src/contracts/libraries/shadcn/5f44094657713ed167897c12a0a21e8ac6ee45fa9fd6983d15a2c77b19aab4ed/**/*',
]
export default withPayload({ agentRules: false, outputFileTracingIncludes: {
  '/mcp': contractAssets,
  '/systems/*/components/*': contractAssets,
  '/systems/*/components/*/files': contractAssets,
} })
