import React, {useState} from 'react';
import {Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter} from './ui/card.mjs';
import {Badge} from './ui/badge.mjs';
import {Separator} from './ui/separator.mjs';
import {Kbd, KbdGroup} from './ui/kbd.mjs';
import {Skeleton} from './ui/skeleton.mjs';
import {Spinner} from './ui/spinner.mjs';
import {Button} from './ui/button.mjs';

export const semanticContentFamilies=['card','badge','separator','kbd','skeleton','spinner'];
export function SemanticContentLab({family}) {
  const [dark,setDark]=useState(false);
  const [loading,setLoading]=useState(true);
  const [actions,setActions]=useState(0);
  return <main data-semantic-family={family} data-theme={dark?'dark':'light'}>
    <h1>{family} semantic source adapter</h1>
    <label><input type="checkbox" checked={dark} onChange={e=>setDark(e.target.checked)}/>Dark theme</label>
    {family==='card' && ['default','sm'].map(size=><section key={size} aria-label={size+' card fixture'}>
      <Card size={size}><CardHeader><CardTitle><h2>Project overview</h2></CardTitle>
        <CardDescription>Current project status</CardDescription>
        <CardAction><Button variant="ghost" size="sm" onClick={()=>setActions(n=>n+1)}>More actions</Button></CardAction>
      </CardHeader><CardContent><p>Three tasks remain.</p></CardContent>
        <CardFooter><Button onClick={()=>setActions(n=>n+1)}>View project</Button></CardFooter></Card>
    </section>)}
    {family==='badge' && <section aria-label="Badge variants">
      {['default','secondary','destructive','outline','ghost','link'].map(variant=><Badge key={variant} variant={variant}>{variant} review</Badge>)}
      <Badge variant="link" render={<a href="#review-details"/>}>Open review details</Badge>
      <p id="review-details">Review details destination</p>
    </section>}
    {family==='separator' && <section aria-label="Separator orientations">
      <p>First group</p><Separator/><p>Second group</p>
      <div data-lab-vertical-separator><span>Before</span><Separator orientation="vertical"/><span>After</span></div>
    </section>}
    {family==='kbd' && <p>Save with <KbdGroup><Kbd>Ctrl</Kbd> + <Kbd>S</Kbd></KbdGroup>. Next page: <Kbd>Page Down</Kbd>.</p>}
    {family==='skeleton' && <>
      <section aria-busy={loading} aria-labelledby="contacts-heading"><h2 id="contacts-heading">Contacts</h2>
        <div role="status">{loading?'Loading contacts':'Contacts loaded'}</div>
        {loading?<div data-lab-skeletons><Skeleton className="ui-skeleton-avatar" aria-hidden="true"/><Skeleton className="ui-skeleton-text" aria-hidden="true"/><Skeleton className="ui-skeleton-card" aria-hidden="true"/></div>:<p>Alex, Morgan and Sam</p>}
      </section>
      <Button onClick={()=>setLoading(!loading)}>{loading?'Finish loading':'Load again'}</Button>
    </>}
    {family==='spinner' && <section aria-label="Spinner sizes">
      {['default','small','large','extra-large'].map(size=><Spinner key={size} className={'ui-spinner-'+size} aria-label={'Loading '+size+' contacts'}/>)}
    </section>}
    {family==='card'&&<output aria-label="Card action count">{actions}</output>}
  </main>;
}
