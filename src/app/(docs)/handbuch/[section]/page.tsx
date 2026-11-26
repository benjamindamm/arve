import {notFound} from 'next/navigation'
import {ArveGuide,arveChapters} from '../../../../docs/arve-guide'
export function generateStaticParams(){return arveChapters.filter(c=>c.slug).map(c=>({section:c.slug}))}
export default async function Page({params}:{params:Promise<{section:string}>}){const {section}=await params;if(!arveChapters.some(c=>c.slug===section))notFound();return <ArveGuide section={section}/>}
