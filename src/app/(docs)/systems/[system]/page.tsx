import {externalSourcesOf} from '../../../../docs/external-sources'
import {notFound} from 'next/navigation'
import {EditorialPage} from '../../../../docs/editorial-page'
import {editorialOf} from '../../../../docs/editorial'
import {documentationTree} from '../../../../docs/published-documentation'
import {readSystem,relationId} from '../../../../docs/systems'
import {documentationData} from '../../../../docs/documentation-data'
import {SystemHomeTemplate} from '../../../../docs/system-home'

export default async function SystemHome({params}:{params:Promise<{system:string}>}) {
  const {system:slug}=await params
  const [system,documentation,data]=await Promise.all([readSystem(slug),documentationTree(slug),documentationData()])
  if(!system||!documentation)notFound()
  const pages=await data.pages(system)
  const home=pages.find(page=>page.id===relationId(system.home))
  return <EditorialPage as="section" className="shell system-home-editorial" externalLinks={externalSourcesOf(home)} editorial={editorialOf(home)}><SystemHomeTemplate system={system} home={home} pages={pages} entries={documentation.tree}/></EditorialPage>
}
