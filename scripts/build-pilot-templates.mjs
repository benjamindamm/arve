// Optional native FIG export through the separately installed pinned OpenPencil 0.16.0 CLI.
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
const root=resolve(import.meta.dirname,'..')
const dir=resolve(root,'docs/handbook/design-resources')
const cli=process.env.OPENPENCIL_CLI
if (!cli) throw new Error('Set OPENPENCIL_CLI to the pinned OpenPencil 0.16.0 executable')
const seed=resolve(root,'src/contracts/libraries/shadcn/65133e67843c757b78077bdc58bad7719cb3014209e45373d0c66d1964a11f26/package/library/components/input/input.fig')
for(const board of JSON.parse(readFileSync(resolve(dir,'layout-data.json'),'utf8'))){
 const code=`const board=${JSON.stringify(board)};
 for(const child of [...figma.currentPage.children]) child.remove();
 figma.currentPage.name=board.title;
 const paint=hex=>({type:'SOLID',color:{r:parseInt(hex.slice(1,3),16)/255,g:parseInt(hex.slice(3,5),16)/255,b:parseInt(hex.slice(5,7),16)/255}});
 const bg=figma.createRectangle();bg.name='Arbeitsfläche';bg.x=0;bg.y=0;bg.resize(board.canvasWidth,board.canvasHeight);bg.fills=[paint('#F5F5F5')];
 const title=figma.createText();title.name='Vorlagentitel';title.x=32;title.y=24;title.fontName={family:'Inter',style:'Semi Bold'};title.fontSize=24;title.characters=board.title;title.fills=[paint('#171717')];
 for(const group of board.frames){
  const frame=figma.createFrame();frame.name=group.id+' · '+group.title;frame.x=group.x;frame.y=group.y;frame.resize(group.width,group.height);frame.fills=[paint('#FFFFFF')];
  for(const data of group.nodes){
   const n=data.type==='text'?figma.createText():figma.createRectangle();frame.appendChild(n);n.name=data.name;n.x=data.x;n.y=data.y;n.resize(data.w,data.h);n.fills=[paint(data.fill)];
   if(data.type==='text'){n.fontName={family:'Inter',style:data.weight===600?'Semi Bold':'Regular'};n.fontSize=data.size;n.characters=data.text;n.textAutoResize='WIDTH_AND_HEIGHT';}
   else {n.cornerRadius=data.r;if(data.stroke)n.strokes=[paint(data.stroke)];}
  }
 }
 return {frames:figma.currentPage.children.length,texts:figma.currentPage.findAll(n=>n.type==='TEXT').length};`
 const result=spawnSync(cli,['eval',seed,'--stdin','-o',resolve(dir,board.id+'.fig'),'--json'],{input:code,encoding:'utf8'})
 if(result.status!==0)throw new Error(result.stderr+result.stdout)
 console.log(board.id,result.stdout.trim())
}
const manifest=JSON.parse(readFileSync(resolve(dir,'manifest.json'),'utf8'))
for(const item of manifest.templates)item.sha256=createHash('sha256').update(readFileSync(resolve(dir,item.path))).digest('hex')
manifest.availableFileCount=manifest.templates.length
writeFileSync(resolve(dir,'manifest.json'),JSON.stringify(manifest,null,2)+'\n')
