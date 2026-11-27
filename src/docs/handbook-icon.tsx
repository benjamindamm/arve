import type {ReactNode} from 'react'

export type HandbookIconName='page'|'flow'|'components'|'foundations'|'content'|'accessibility'|'collaboration'|'charts'|'example'|'chapter'
const symbols:Record<HandbookIconName,ReactNode>={
  page:<><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M15 9v12"/></>,
  flow:<><circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h9a3 3 0 0 1 0 6H8a4 4 0 0 0 0 8h9"/></>,
  components:<><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>,
  foundations:<><path d="M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1.5-3.3 1.5 1.5 0 0 1 1.1-2.5H18a3 3 0 0 0 3-3.2 9 9 0 0 0-9-9Z"/><circle cx="7.5" cy="10" r=".8"/><circle cx="11" cy="6.8" r=".8"/><circle cx="15.5" cy="7.5" r=".8"/><circle cx="17" cy="11.5" r=".8"/></>,
  content:<><path d="M4 5h16M12 5v15M8 20h8M4 5v3M20 5v3"/></>,
  accessibility:<><circle cx="12" cy="12" r="9"/><circle cx="12" cy="7" r="1"/><path d="M7 10.5h10M12 10.5v4m0 0-3 4m3-4 3 4"/></>,
  collaboration:<><circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v3"/></>,
  charts:<><path d="M4 3v18h17M9 16v-5m5 5V6m5 10v-7"/></>,
  example:<><path d="m15 3 6 6-12 12H3v-6L15 3Zm-3 3 6 6M3 21l6-6"/></>,
  chapter:<><path d="M12 5c-3-2-6-2-9-1v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1Zm0 0v15"/></>,
}
export function HandbookIcon({name}:{name:HandbookIconName}) {
  return <svg className="handbook-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{symbols[name]}</svg>
}
export function chapterIcon(slug:string,pageType?:string):HandbookIconName {
  const chapters:Record<string,HandbookIconName>={grundlagen:'foundations',layout:'page','page-types':'page','page-layouts':'page',patterns:'flow',komponenten:'components','content-design':'content',barrierefreiheit:'accessibility',mitwirken:'collaboration',datenvisualisierung:'charts','gestaltungs-pilot':'example'}
  const types:Record<string,HandbookIconName>={foundation:'foundations',layout:'page',pattern:'flow',component:'components'}
  return chapters[slug]??types[pageType??'']??'chapter'
}
