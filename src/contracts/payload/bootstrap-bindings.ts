/** Copy only explicit source associations. Optional module may be absent. */
export async function bindImportedReferences(payload:any,designSystem:number,references:any[],req:any){
 if(!payload.collections['contract-bindings'])return
 const selected=new Map<string,string>()
 for(const ref of references)if(ref?.library&&ref?.revision&&!selected.has(ref.library))selected.set(ref.library,ref.revision)
 for(const [library,defaultRevision]of selected){
  const {docs}=await payload.find({collection:'contract-bindings',where:{and:[{designSystem:{equals:designSystem}},{library:{equals:library}}]},limit:1,req})
  if(!docs.length)await payload.create({collection:'contract-bindings',data:{designSystem,library,defaultRevision},req})
 }
}
