import {readdir,readFile,realpath} from 'node:fs/promises'
import path from 'node:path'
/** Only checked-in authoring Markdown, never arbitrary paths supplied by a request. */
export async function authoringSkills(){
 const root=await realpath(path.resolve('.agents/skills'))
 const result=[]
 for(const entry of (await readdir(root,{withFileTypes:true})).sort((a,b)=>a.name.localeCompare(b.name))){
  if(!entry.isDirectory()||!/^arve-[a-z-]+-handbook$/.test(entry.name))continue
  const directory=await realpath(path.join(root,entry.name));if(!directory.startsWith(root+path.sep))throw Error('Skill outside authoring root')
  const files:{name:string;content:string}[]=[]
  async function read(relative:string){const file=await realpath(path.join(directory,relative));if(!file.startsWith(directory+path.sep))throw Error('Reference outside skill');files.push({name:relative,content:await readFile(file,'utf8')})}
  await read('SKILL.md')
  try{for(const f of await readdir(path.join(directory,'references'),{withFileTypes:true}))if(f.isFile()&&f.name.endsWith('.md'))await read('references/'+f.name)}catch(e:any){if(e.code!=='ENOENT')throw e}
  const source=files[0].content
  result.push({id:entry.name,title:source.match(/^# (.+)$/m)?.[1]??entry.name,description:source.match(/^description: (.+)$/m)?.[1]??'',files})
 }
 return result
}
