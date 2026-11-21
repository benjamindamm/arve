import React, {useState} from 'react';
import {Label} from './ui/label.mjs';
import {Input} from './ui/input.mjs';
import {AspectRatio} from './ui/aspect-ratio.mjs';
import {Empty,EmptyHeader,EmptyTitle,EmptyDescription,EmptyMedia,EmptyContent} from './ui/empty.mjs';
import {Button} from './ui/button.mjs';

export const semanticFoundationFamilies=['label','aspect-ratio','empty'];
const media='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 90"%3E%3Cpath fill="%23c9e8f4" d="M0 0h160v90H0z"/%3E%3Cpath fill="%235d6b7a" d="m0 60 45-45 50 55 35-35 30 25v30H0z"/%3E%3Cpath fill="%235ba9c8" d="M0 65h160v25H0z"/%3E%3C/svg%3E';
export function SemanticFoundationLab({family}) {
  const [dark,setDark]=useState(false);
  const [uploaded,setUploaded]=useState(false);
  return <main data-semantic-family={family} data-theme={dark?'dark':'light'}>
    <h1>{family} semantic source adapter</h1>
    <label><input type="checkbox" checked={dark} onChange={e=>setDark(e.target.checked)}/>Dark theme</label>
    {family==='label'&&<>
      <div data-part="label-field"><Label htmlFor="label-project">Project name</Label><Input id="label-project"/></div>
      <div data-part="label-field" data-disabled="true"><Label htmlFor="disabled-project">Disabled project</Label><Input id="disabled-project" disabled/></div>
      <div data-part="label-field" dir="rtl"><Label htmlFor="rtl-project">اسم المشروع</Label><Input id="rtl-project" dir="rtl"/></div>
    </>}
    {family==='aspect-ratio'&&[16/9,1,9/16].map(ratio=><section key={ratio} data-lab-media-fixture>
      <h2>{ratio===1?'Square':ratio>1?'Landscape':'Portrait'}</h2>
      <AspectRatio ratio={ratio}><img src={media} alt="Mountain lake at sunrise"/></AspectRatio>
    </section>)}
    {family==='empty'&&(uploaded?<section><h2>Documents</h2><p>Project report.pdf</p><Button onClick={()=>setUploaded(false)}>Clear documents</Button></section>:<Empty>
      <EmptyHeader><EmptyMedia variant="icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 7h16v13H4zM8 7V4h8v3" fill="none" stroke="currentColor"/></svg></EmptyMedia>
        <EmptyTitle><h2>No documents</h2></EmptyTitle><EmptyDescription>Upload a document to begin.</EmptyDescription></EmptyHeader>
      <EmptyContent><Button onClick={()=>setUploaded(true)}>Upload document</Button></EmptyContent>
    </Empty>)}
    {family==='empty'&&<div role="status">{uploaded?'Document added':'No documents available'}</div>}
  </main>;
}
