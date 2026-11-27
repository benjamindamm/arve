import {administrators,scope,relationID} from '../access/permissions'
import {APIError,type CollectionConfig } from 'payload'

export const systemSlug = /^[a-z][a-z0-9-]{0,79}$/

export const DesignSystems: CollectionConfig = {
  slug: 'design-systems',
  labels: { singular: 'Design-System', plural: 'Design-Systeme' },
  admin: { useAsTitle: 'name' },
  access:{read:()=>true,create:administrators,update:({req})=>scope(req.user,'id','publisher'),delete:administrators},
  hooks:{beforeChange:[async({data,originalDoc,req})=>{
    const home=relationID(data.home);
    if(home){const page=await req.payload.findByID({collection:'pages',id:home,depth:0,draft:true,overrideAccess:true,req});if(relationID(page.designSystem)!==originalDoc?.id)throw new APIError('Die Startseite muss zu diesem Design-System gehören.',400)}
    return data
  }]},
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true,
      validate: (value: string | null | undefined) => Boolean(value && systemSlug.test(value)) || 'Kleinbuchstaben, Ziffern und Bindestriche verwenden.' },
    { name: 'description', type: 'textarea', label: 'Beschreibung' },
    { name: 'theme', type: 'select', label: 'Theme', defaultValue: 'neutral', options: ['neutral', 'blue'] },
    { name: 'home', type: 'relationship', relationTo: 'pages', label: 'Startseite' },
  ],
}
