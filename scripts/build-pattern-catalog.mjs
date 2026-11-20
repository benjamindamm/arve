import {readFile,writeFile} from 'node:fs/promises'
import assert from 'node:assert/strict'
const root='docs/handbook/postfinance-analysis/systematic'
const areas=await Promise.all(['assets','payments','services'].map(async name=>JSON.parse(await readFile(`${root}/${name}.json`,'utf8'))))
const statuses=new Set(['tested','visible','absent','blocked','unreviewed'])
const tasks=['navigate','find','select','input','edit','act','understand','status']
const registry=JSON.parse(await readFile(`${root}/registry.json`,'utf8'))
const byAlias=new Map(registry.flatMap(p=>[p.key,...(p.aliases??[])].map(key=>[key,p])))
assert.equal(new Set(registry.map(p=>p.id)).size,registry.length)
const patterns=new Map()
const coverage=[]
for(const area of areas){
 for(const view of area.views){
  for(const key of tasks)assert(statuses.has(view.tasks[key]?.status),`${area.area}/${view.id}: missing ${key}`)
  coverage.push({area:area.area,...view,patterns:view.patterns.map(key=>{assert(byAlias.has(key),'Unregistered view pattern: '+key);return byAlias.get(key).id})})
 }
 for(const pattern of area.patterns){
  const entry=byAlias.get(pattern.key);assert(entry,'Unregistered pattern: '+pattern.key)
  const current=patterns.get(entry.id)??{id:entry.id,key:entry.key,title:entry.title,category:entry.category,tags:[],status:'candidate',observations:[]}
  current.tags=[...new Set([...current.tags,...pattern.tags])].sort()
  current.observations.push({area:area.area,...pattern})
  patterns.set(entry.id,current)
 }
}
const followUps=[]
for(const name of ['assets','payments','services']) {
 let followUp
 try { followUp=JSON.parse(await readFile(`${root}/${name}-follow-up.json`,'utf8')) }
 catch(error) {if(error.code==='ENOENT')continue;throw error}
 for(const check of followUp.checks)assert(['closed','partial','blocked'].includes(check.result),'Invalid gap status')
 for(const update of followUp.patternUpdates??[]) {
  const entry=byAlias.get(update.key);assert(entry,'Unknown follow-up key: '+update.key)
  const pattern=patterns.get(entry.id);assert(pattern,'Missing pattern for follow-up: '+entry.id)
  pattern.followUps??=[];pattern.followUps.push({area:followUp.area,...update})
 }
 followUps.push(followUp)
}
await writeFile(`${root}/gap-checks.json`,JSON.stringify({date:'2026-11-20',areas:followUps},null,2)+'\n')
const catalog={format:'arve-pattern-catalog/v1',scope:'PostFinance E-Finance-Demo; reference research',date:'2026-11-20',patterns:[...patterns.values()].sort((a,b)=>a.id.localeCompare(b.id))}
await writeFile(`${root}/catalog.json`,JSON.stringify(catalog,null,2)+'\n')
await writeFile(`${root}/coverage.json`,JSON.stringify({date:catalog.date,views:coverage,limits:areas.map(a=>({area:a.area,limits:a.limits}))},null,2)+'\n')
const md=['# Pattern-Katalog','', 'Referenzaufnahme der PostFinance-Demo. IDs sind stabil; alle Einträge bleiben fachliche Kandidaten. Prüfstatus steht bei jeder Beobachtung.','', '| ID | Pattern | Kategorie | Tags |', '| --- | --- | --- | --- |',...catalog.patterns.map(p=>`| [${p.id}](#${p.id.toLowerCase()}) | ${p.title} | ${p.category} | ${p.tags.join(', ')} |`)]
for(const p of catalog.patterns){md.push('',`## ${p.id} · ${p.title}`,'',`Kategorie: ${p.category} · Tags: ${p.tags.join(', ')}`)
 for(const o of p.observations){md.push('',`### ${o.area} · ${o.evidence}`,'',o.task,'',...o.flow.map((step,i)=>`${i+1}. ${step}`),'','Quellen: '+o.sources.map(path=>`[Ansicht](https://www.postfinance.ch/ap/ga/ob/html/finance/${path.replace(/^\//,'')})`).join(', '),'','Grenzen: '+o.limits.join(' '))}}
for(const p of catalog.patterns.filter(p=>p.followUps?.length)) {
 md.push('',`## Nachprüfung ${p.id}`)
 for(const update of p.followUps) md.push('',`Bereich: ${update.area} · ${update.evidence}`,'',...update.flow.map(step=>'- '+step),'','Grenzen: '+update.limits.join(' '))
}
await writeFile(`${root}/catalog.md`,md.join('\n')+'\n')
console.log(JSON.stringify({patterns:catalog.patterns.length,views:coverage.length,cells:coverage.length*tasks.length,states:Object.fromEntries([...statuses].map(status=>[status,coverage.reduce((n,v)=>n+tasks.filter(k=>v.tasks[k].status===status).length,0)]))}))
