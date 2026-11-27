import {createHash} from 'node:crypto'
import {z} from 'zod'
import type {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js'
import type {authoringSkills as sourceSkills} from '../docs/authoring-skills'
type Source=typeof sourceSkills
import {ReadError,textChunk} from '../docs/mcp-model'
const hash=(s:string)=>createHash('sha256').update(s).digest('hex')
export async function readAuthoringSkillFrom(authoringSkills:Source,skill:string,file='SKILL.md',expected?:string,offset=0,limit=6000){
  const item=(await authoringSkills()).find(s=>s.id===skill)
  const source=item?.files.find(f=>f.name===file)
  if(!source)throw new ReadError('UNKNOWN_RESOURCE','Use an exact skill/file from list_authoring_skills; arbitrary paths are not accepted.')
  const sha256=hash(source.content)
  if(expected&&expected!==sha256)throw new ReadError('HASH_MISMATCH','Authoring file changed. Discover and read it again.')
  if(offset>0&&!expected)throw new ReadError('HASH_REQUIRED','Pass the file hash when continuing.')
  const chunk=textChunk(source.content,offset,limit)
  return {skill,file,...chunk,...(chunk.nextOffset!==null?{next:{tool:'get_authoring_skill',arguments:{skill,file,sha256,offset:chunk.nextOffset,limit}}}:{})}
}
export function registerAuthoringSkillsFrom(server:McpServer,authoringSkills:Source){
  const fail=(e:unknown)=>({isError:true,content:[{type:'text' as const,text:e instanceof ReadError?`${e.code}: ${e.message}`:'Unable to read authoring skill.'}]})
  server.registerTool('list_authoring_skills',{
    description:'Discover Arve authoring skills, independently of any project/library. These guide drafting chapters and asking questions; they do not grant CMS write access or make a proposal a published rule. Read SKILL.md first, then only relevant exact reference files. Hashes allow complete progressive reads.',
    inputSchema:{snapshot:z.string().regex(/^[a-f0-9]{64}$/).optional(),offset:z.number().int().min(0).default(0),limit:z.number().int().min(1).max(10).default(6)},
    annotations:{readOnlyHint:true},
  },async({offset,limit,snapshot})=>{
    const skills=await authoringSkills()
    const current=hash(JSON.stringify(skills))
    if(snapshot&&snapshot!==current)return fail(new ReadError('SNAPSHOT_MISMATCH','Authoring inventory changed. Restart discovery.'))
    if(offset>0&&!snapshot)return fail(new ReadError('SNAPSHOT_REQUIRED','Pass the inventory snapshot when continuing.'))
    if(offset>skills.length)return fail(new ReadError('INVALID_RANGE','Offset exceeds skill inventory.'))
    const entries=skills.slice(offset,offset+limit).map(s=>({skill:s.id,title:s.title,description:s.description,files:s.files.map(f=>({file:f.name,sha256:hash(f.content),read:{tool:'get_authoring_skill',arguments:{skill:s.id,file:f.name,sha256:hash(f.content)}}}))}))
    const nextOffset=offset+entries.length<skills.length?offset+entries.length:null
    const value={skills:entries,snapshot:current,nextOffset,...(nextOffset!==null?{next:{tool:'list_authoring_skills',arguments:{offset:nextOffset,limit,snapshot:current}}}:{})}
    return {structuredContent:value,content:[{type:'text',text:JSON.stringify(value)}]}
  })
  server.registerTool('get_authoring_skill',{
    description:'Read one exact original authoring Markdown file; SKILL.md by default. Follow next to finish long files; carry SHA256 for continuations. Relative links refer to this skill directory; discover neighboring skills separately. No execution or write operation.',
    inputSchema:{skill:z.string().regex(/^arve-[a-z-]+-handbook$/),file:z.string().max(200).default('SKILL.md'),sha256:z.string().regex(/^[a-f0-9]{64}$/).optional(),offset:z.number().int().min(0).default(0),limit:z.number().int().min(1).max(12000).default(6000)},
    annotations:{readOnlyHint:true},
  },async({skill,file,sha256,offset,limit})=>{try{const result=await readAuthoringSkillFrom(authoringSkills,skill,file,sha256,offset,limit);return {structuredContent:result,content:[{type:'text',text:JSON.stringify(result)}]}}catch(e){return fail(e)}})
}
