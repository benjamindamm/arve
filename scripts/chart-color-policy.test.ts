import {test} from 'node:test'
import assert from 'node:assert/strict'
import {chartColor,chartPalettes,colorRefLabel,ref} from '../src/docs/chart-color-policy'
import foundation from '../src/docs/foundation-colors.json'
import {colorContrast} from '../src/docs/color-page-values'
import {visualizationPages} from './content/data-visualization'

test('every palette resolves exclusively to existing foundation steps; unknown steps fail',()=>{
 for(const palette of Object.values(chartPalettes)){
  assert.equal(palette.refs.length,palette.labels.length)
  for(const r of palette.refs){
   const scale=foundation.scales.find(s=>s.id===r.family)!
   assert(scale)
   assert.equal(chartColor(r),scale.values[r.step as keyof typeof scale.values])
  }
 }
 assert.throws(()=>chartColor(ref('missing')),/Unknown foundation color/)
 assert.throws(()=>chartColor(ref('red','71')),/Unknown foundation color/)
})

test('dark mark candidates meet 3:1 against the stated white background, not against arbitrary neighbours',()=>{
 for(const r of [ref('blue'),ref('purple'),ref('neutral'),ref('red'),ref('green'),ref('amber')]){
  assert(Number(colorContrast(chartColor(r),'#FFFFFF'))>=3,colorRefLabel(r))
 }
})

test('CMS text alternatives expose the same foundation references and values as every displayed palette',()=>{
 const page=visualizationPages.find(p=>p.slug==='shadcn-datenvisualisierung-chart-paletten')!
 for(const [key,palette] of Object.entries(chartPalettes)){
  const block=page.content.find(b=>b.blockName==='dv-palette-'+key)
  assert(block)
  const full=JSON.stringify(block)
  for(const r of palette.refs){assert(full.includes(colorRefLabel(r)));assert(full.includes(chartColor(r)))}
 }
})
