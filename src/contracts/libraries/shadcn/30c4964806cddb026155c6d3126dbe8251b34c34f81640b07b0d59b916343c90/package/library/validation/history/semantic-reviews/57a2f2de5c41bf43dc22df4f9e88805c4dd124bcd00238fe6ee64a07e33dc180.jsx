import React,{useState} from 'react';
import {Avatar,AvatarImage,AvatarFallback,AvatarGroup,AvatarGroupCount,AvatarBadge} from './ui/avatar.mjs';
import {Progress,ProgressLabel,ProgressValue} from './ui/progress.mjs';
import {Button} from './ui/button.mjs';
export const semanticFeedbackFamilies=['avatar','progress'];
const portrait='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#c7e8ff"/><circle cx="16" cy="12" r="6" fill="#345"/><path d="M4 32a12 12 0 0 1 24 0" fill="#345"/></svg>');
const tick=<svg aria-hidden="true" viewBox="0 0 8 8"><path d="m1 4 2 2 4-4" stroke="currentColor" fill="none"/></svg>;
export function SemanticFeedbackLab({family}) {
 const [dark,setDark]=useState(false),[src,setSrc]=useState('data:image/png,broken'),[status,setStatus]=useState('idle'),[value,setValue]=useState(40),[rtl,setRtl]=useState(false);
 const person=(size='default',group=false)=><Avatar size={size}><AvatarImage src={group?portrait:src} alt="Alex Morgan" onLoadingStatusChange={group?undefined:setStatus}/><AvatarFallback role="img" aria-label="Alex Morgan">AM</AvatarFallback><AvatarBadge aria-hidden="true">{tick}</AvatarBadge></Avatar>;
 return <main data-semantic-family={family} data-theme={dark?'dark':'light'} dir={rtl?'rtl':'ltr'}><h1>{family} semantic source adapter</h1><label><input type="checkbox" checked={dark} onChange={e=>setDark(e.target.checked)}/>Dark theme</label><label><input type="checkbox" checked={rtl} onChange={e=>setRtl(e.target.checked)}/>Right to left</label>
 {family==='avatar'&&<><section data-lab-avatar-sizes>{['sm','default','lg'].map(size=><div key={size}>{person(size)}<span data-part="avatar-status">{size}: Alex Morgan — available</span></div>)}</section><AvatarGroup role="group" aria-label="Report collaborators">{person()}<Avatar><AvatarFallback role="img" aria-label="Jordan Casey">JC</AvatarFallback></Avatar><AvatarGroupCount aria-label="Four additional collaborators">+4</AvatarGroupCount></AvatarGroup><Button onClick={()=>setSrc(portrait)}>Load valid portrait</Button><Button onClick={()=>setSrc('data:image/png,broken-again')}>Break portrait</Button><output aria-label="Image loading status">{status}</output></>}
 {family==='progress'&&<><Progress value={value} locale="en-US"><ProgressLabel>Uploading report</ProgressLabel><ProgressValue/></Progress><Progress value={15} min={10} max={20} locale="en-US"><ProgressLabel>Processing records</ProgressLabel><ProgressValue/></Progress><Button onClick={()=>setValue(null)}>Indeterminate task</Button><Button onClick={()=>setValue(140)}>Complete task</Button><Button onClick={()=>setValue(-10)}>Below minimum</Button><Button onClick={()=>setValue(40)}>Resume task</Button><p role="status">{value===null?'Upload time is unknown.':value>=100?'Report upload complete.':value<0?'Upload has not started.':'Report upload in progress.'}</p></>}
 <Button>After demo</Button></main>;
}
