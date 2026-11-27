/** Resolve public links against the configured site root, including GitHub project prefixes. */
export function publicUrl(value:string,base:string){
 const root=new URL(base)
 root.pathname=root.pathname.replace(/\/mcp\/?$/,'/')
 if(!root.pathname.endsWith('/'))root.pathname+='/'
 if(/^[a-z][a-z0-9+.-]*:/i.test(value)||value.startsWith('//'))return new URL(value,root).href
 const prefix=root.pathname.replace(/\/$/,'')
 return value.startsWith('/')&&prefix&&(value===prefix||value.startsWith(prefix+'/'))?new URL(value,root.origin).href:new URL(value.replace(/^\//,''),root).href
}
