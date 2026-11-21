import test from 'node:test'
import assert from 'node:assert/strict'
import {compactTree} from './mcp-navigation'
import type {Entry} from './published-documentation'
const page = (slug: string, children: Entry[] = []): Entry => ({slug,title:slug,path:'/systems/test/'+slug,kind:'section',summary:'Ein lesbarer Einstieg.',children,retrieval:{tool:'get_documentation_page',arguments:{system:'test',section:slug}}})

test('branch pagination preserves every entry once and exposes exact expansions',()=>{
 const tree=[page('grundlagen',[page('farben'),page('typografie')]),page('patterns'),page('komponenten')]
 const first=compactTree('test',tree,'http://localhost:3010/mcp',undefined,0,1)
 assert.equal(first.entries.length,1);assert.equal(first.entries[0].childCount,2)
 assert.equal(first.entries[0].pageUrl,'http://localhost:3010/systems/test/grundlagen')
 assert.equal(first.entries[0].retrieval?.arguments.section,'grundlagen')
 assert(!('children' in first.entries[0]))
 const expand=first.entries[0].expand!.arguments
 const branch=compactTree('test',tree,'http://localhost:3010/mcp',expand.parentPath,0,expand.limit,expand.snapshot)
 const branchNext=branch.next!.arguments
 const branchRest=compactTree('test',tree,'http://localhost:3010/mcp',branchNext.parentPath,branchNext.offset,branchNext.limit,branchNext.snapshot)
 assert.deepEqual([...branch.entries,...branchRest.entries].map(entry=>entry.slug),['farben','typografie'])
 const continuation=first.next!.arguments
 const second=compactTree('test',tree,'http://localhost:3010/mcp',undefined,continuation.offset,continuation.limit,continuation.snapshot)
 assert.equal(second.entries[0].slug,'patterns');assert.equal(second.pagination.total,3)
})

test('stale snapshots, unknown branches and unguarded continuations are rejected',()=>{
 const tree=[page('a'),page('b')]
 const snapshot=compactTree('test',tree,'http://localhost:3010/mcp').snapshot
 assert.throws(()=>compactTree('test',[...tree,page('c')],'http://localhost:3010/mcp',undefined,0,12,snapshot),/hierarchy changed/)
 assert.throws(()=>compactTree('test',tree,'http://localhost:3010/mcp',undefined,1,1),/snapshot/)
 assert.throws(()=>compactTree('test',tree,'http://localhost:3010/mcp','/missing'),/parentPath/)
 assert.throws(()=>compactTree('test',tree,'http://localhost:3010/mcp',undefined,0,21),/1..20/)
})

test('long summary previews preserve Unicode and disclose omitted wording',()=>{
 const tree=[{...page('lange-seite'),summary:'🌲'.repeat(300)}]
 const result=compactTree('test',tree,'http://localhost:3010/mcp')
 assert.equal(Array.from(result.entries[0].summary!).length,240)
 assert.equal(result.entries[0].summaryComplete,false)
 assert(result.omissions.some(text=>text.includes('summaries')))
 assert.equal(tree[0].summary.length,600)
})
